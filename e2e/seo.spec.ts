import { test, expect } from '@playwright/test'
import { projects } from '../lib/data/projects'
import { SITE_URL } from '../lib/site'

test('case study metadata and social previews are served to crawlers', async ({ request }) => {
  for (const project of projects) {
    const route = `/projects/${project.id}`
    const response = await request.get(route, { headers: { 'User-Agent': 'Twitterbot/1.0' } })
    expect(response.status()).toBe(200)
    const html = await response.text()
    expect(html).toContain(`rel="canonical" href="${SITE_URL}${route}"`)
    expect(html).toContain(`property="og:url" content="${SITE_URL}${route}"`)
    expect(html).toContain(`content="${SITE_URL}/social/${project.id}.png"`)
    const preview = await request.get(`/social/${project.id}.png`)
    expect(preview.status()).toBe(200)
    expect(preview.headers()['content-type']).toContain('image/png')
    expect(preview.headers()['cache-control']).toContain('max-age=3600')
    const bytes = await preview.body()
    expect(bytes.readUInt32BE(16)).toBe(1200)
    expect(bytes.readUInt32BE(20)).toBe(630)
    expect(bytes.byteLength).toBeLessThan(500000)
  }
})

test('hero assets are compact and immediately discoverable with lazy case-study screenshots', async ({ page, request }) => {
  for (const route of ['/', ...projects.map((project) => `/projects/${project.id}`)]) {
    await page.goto(route)
    const hero = page.locator('main img[fetchpriority="high"]')
    await expect(hero).toHaveCount(1)
    expect(await hero.getAttribute('loading')).not.toBe('lazy')
    const asset = await request.get((await hero.getAttribute('src'))!)
    expect(asset.status()).toBe(200)
    expect((await asset.body()).byteLength).toBeLessThan(250000)
    expect(asset.headers()['cache-control']).toContain('max-age=3600')
    if (route.startsWith('/projects/')) {
      const screenshots = page.locator('main figure img')
      await expect(screenshots).toHaveCount(3)
      for (const screenshot of await screenshots.all()) await expect(screenshot).toHaveAttribute('loading', 'lazy')
    }
  }
})

test('crawler endpoints and removed routes have correct HTTP behaviour', async ({ request }) => {
  const robots = await request.get('/robots.txt')
  expect(robots.status()).toBe(200)
  expect(await robots.text()).toContain(`Sitemap: ${SITE_URL}/sitemap.xml`)
  const sitemap = await request.get('/sitemap.xml')
  expect(sitemap.status()).toBe(200)
  expect(await sitemap.text()).not.toContain('/projects/the-diver')
  const legacy = await request.get('/projects/the-diver', { maxRedirects: 0 })
  expect(legacy.status()).toBe(308)
  expect(legacy.headers().location).toContain('/projects/stay-with-me-deep-sea')
  const missing = await request.get('/missing-seo-review-page')
  expect(missing.status()).toBe(404)
  expect(await missing.text()).toContain('noindex')
})
