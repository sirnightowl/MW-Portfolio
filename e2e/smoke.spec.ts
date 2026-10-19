import { test, expect } from '@playwright/test'
import { articles } from '../lib/data/articles'
import { getContactEmail } from '../lib/contact'

const publishedCount = articles.filter((a) => a.published).length

test('homepage loads with main heading', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('main h1')).toContainText('Useful digital products')
})

test('homepage navigates to a project case study', async ({ page }) => {
  await page.goto('/')
  await page.locator('#work').getByRole('link', { name: /horrorometer/i }).click()
  await expect(page).toHaveURL('/projects/horrorometer')
  await expect(page.locator('main h1')).toContainText('Horrorometer')
})

test('SENDadvisor case study provides navigable, captioned interface evidence', async ({ page, request }) => {
  await page.goto('/projects/sendadvisor')
  const contents = page.getByRole('navigation', { name: 'Case study sections' })
  await contents.getByRole('link', { name: 'Results', exact: true }).click()
  await expect(page).toHaveURL(/#results$/)
  await expect(page.getByRole('heading', { name: 'Keep refinement close to the results.' })).toBeVisible()
  for (const name of ['home', 'results', 'council']) {
    const image = page.locator(`img[src="/images/projects/sendadvisor-case-study/${name}.webp"]`)
    await image.scrollIntoViewIfNeeded()
    await expect.poll(() => image.evaluate((element) => (element as HTMLImageElement).naturalWidth)).toBeGreaterThan(0)
    const asset = await request.get(`/images/projects/sendadvisor-case-study/${name}.webp`)
    expect(asset.status()).toBe(200)
    expect(asset.headers()['content-type']).toContain('image/webp')
  }
  await contents.getByRole('link', { name: 'Data review', exact: true }).click()
  await expect(page.getByRole('list', { name: 'Candidate review and diff preparation' })).toBeVisible()
  for (const slug of ['kanaboards', 'stay-with-me-deep-sea']) {
    await page.goto(`/projects/${slug}`)
    await expect(page.getByRole('link', { name: /Visit live product/ })).toHaveCount(0)
    await expect(page.getByText('In the unreleased build', { exact: true })).toBeVisible()
  }
})

test('Horrorometer case study links real screenshots to its public flow and implementation', async ({ page, request }) => {
  await page.goto('/projects/horrorometer')
  const contents = page.getByRole('navigation', { name: 'Case study sections' })
  await contents.getByRole('link', { name: 'Review handoff', exact: true }).click()
  await expect(page).toHaveURL(/#review-handoff$/)
  await expect(page.getByRole('heading', { name: 'Make the account handoff visible.' })).toBeVisible()
  for (const name of ['catalogue', 'title', 'signin']) {
    const image = page.locator(`main section img[src="/images/projects/horrorometer-case-study/${name}.webp"]`)
    await image.scrollIntoViewIfNeeded()
    await expect.poll(() => image.evaluate((element) => (element as HTMLImageElement).naturalWidth)).toBeGreaterThan(0)
    const asset = await request.get(`/images/projects/horrorometer-case-study/${name}.webp`)
    expect(asset.status()).toBe(200)
    expect(asset.headers()['content-type']).toContain('image/webp')
  }
  await contents.getByRole('link', { name: 'Implementation', exact: true }).click()
  await expect(page.getByRole('list', { name: 'Horrorometer implementation boundaries' })).toBeVisible()
  await expect(page.getByRole('link', { name: /View larger screenshot:/ })).toHaveCount(3)
})

test('the former Diver link redirects to the renamed game with its new artwork', async ({ page }) => {
  await page.goto('/projects/the-diver')
  await expect(page).toHaveURL('/projects/stay-with-me-deep-sea')
  await expect(page.locator('main h1')).toHaveText('Stay With Me: Deep Sea')
  const artwork = page.getByRole('img', { name: 'Halcyon research station on the dark ocean floor, lit by a small submersible' })
  await expect(artwork).toBeVisible()
  await expect.poll(() => artwork.evaluate((image) => (image as HTMLImageElement).naturalWidth)).toBeGreaterThan(0)
})

test('blog index lists all published articles', async ({ page }) => {
  await page.goto('/blog')
  const articleCards = page.locator('a[href^="/blog/"]')
  await expect(articleCards).toHaveCount(publishedCount)
})

test('blog post renders markdown content', async ({ page }) => {
  await page.goto('/blog/accessible-by-default')
  await expect(page.locator('main h1')).toContainText('Accessible by default')
  await expect(page.locator('.prose-ink p')).not.toHaveCount(0)
})

test('contact form shows validation errors', async ({ page }) => {
  await page.goto('/contact')
  await page.getByRole('button', { name: /send message/i }).click()
  await expect(page.locator('#name-error')).toBeVisible()
  await expect(page.locator('#email-error')).toBeVisible()
  await expect(page.locator('#message-error')).toBeVisible()
})

test('CV is reachable from About and offers the public PDF download', async ({ page, request }) => {
  await page.goto('/about')
  await page.getByRole('link', { name: 'Read my CV' }).click()
  await expect(page).toHaveURL('/cv')
  await expect(page.locator('main h1')).toContainText('Martin Whitaker')
  await expect(page.getByRole('navigation', { name: 'Primary navigation' }).getByRole('link', { name: 'CV', exact: true })).toHaveAttribute('aria-current', 'page')
  await expect(page.getByRole('heading', { name: 'Digital Interaction Designer', exact: true })).toBeVisible()
  const download = page.getByRole('link', { name: 'Download CV PDF · 1 page' }).first()
  const [file] = await Promise.all([page.waitForEvent('download'), download.click()])
  expect(file.suggestedFilename()).toBe('Martin-Whitaker-CV-2026.pdf')
  expect(await file.failure()).toBeNull()
  const response = await request.get('/downloads/Martin-Whitaker-CV-2026.pdf')
  expect(response.status()).toBe(200)
  expect(response.headers()['content-type']).toContain('application/pdf')
  expect((await response.body()).subarray(0, 5).toString()).toBe('%PDF-')
})

test('contact details stay out of page HTML and email can be revealed with the keyboard', async ({ page, request }) => {
  const email = getContactEmail()
  for (const route of ['/', '/contact', '/cv']) {
    const response = await request.get(route)
    const html = await response.text()
    expect(html).not.toContain(email)
    expect(html).not.toContain('tel:')
    await page.goto(route)
    await expect(page.getByRole('link', { name: email, exact: true })).toHaveCount(0)
    const reveal = page.getByRole('button', { name: 'Reveal email address', exact: true })
    await reveal.focus()
    await page.keyboard.press('Enter')
    const emailLink = page.getByRole('link', { name: email, exact: true })
    await expect(emailLink).toHaveAttribute('href', `mailto:${email}`)
    await expect(emailLink).toBeFocused()
  }
  const pdf = await request.get('/downloads/Martin-Whitaker-CV-2026.pdf')
  expect(pdf.headers()['x-robots-tag']).toContain('noindex')
  expect(pdf.headers()['cache-control']).toContain('no-store')
})

test('404 page is shown for unknown routes', async ({ page }) => {
  await page.goto('/this-page-does-not-exist')
  await expect(page.getByRole('heading', { name: /lost in the/i })).toBeVisible()
})

test('dark mode toggle switches theme', async ({ page }) => {
  await page.goto('/')
  const toggle = page.getByRole('button', { name: /switch to (light|dark) mode/i })
  await expect(toggle).toBeVisible()

  await page.evaluate(() => localStorage.clear())
  await page.reload()
  const before = await page.evaluate(() => document.documentElement.dataset.theme)

  await page.getByRole('button', { name: /switch to (light|dark) mode/i }).click()
  const after = await page.evaluate(() => document.documentElement.dataset.theme)
  expect(after).not.toEqual(before)
})

test('mobile menu offers the theme toggle', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 720 })
  await page.goto('/')
  await page.getByRole('button', { name: 'Open navigation menu' }).click()
  const panel = page.getByRole('dialog', { name: 'Navigation menu' })
  await expect(panel).toBeVisible()
  await expect(panel.getByRole('button', { name: /switch to (light|dark) mode/i })).toBeVisible()
})

test('tablet navigation opens, navigates, and releases its scroll lock on desktop', async ({ page }) => {
  await page.setViewportSize({ width: 900, height: 900 })
  await page.goto('/work')
  await page.getByRole('button', { name: 'Open navigation menu' }).click()
  const panel = page.getByRole('dialog', { name: 'Navigation menu' })
  await expect(panel).toBeVisible()
  await panel.getByRole('link', { name: /About/ }).click()
  await expect(page).toHaveURL('/about')
  await expect(panel).not.toBeVisible()
  await page.getByRole('button', { name: 'Open navigation menu' }).click()
  await page.setViewportSize({ width: 1280, height: 900 })
  await expect(panel).not.toBeVisible()
  await expect(page.locator('body')).not.toHaveCSS('overflow', 'hidden')
  await expect(page.getByRole('navigation', { name: 'Primary navigation' }).getByRole('link', { name: 'About', exact: true })).toHaveAttribute('aria-current', 'page')
})

for (const width of [320, 768]) {
  test(`page layouts fit a ${width}px viewport`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    for (const route of ['/', '/work', '/about', '/cv', '/blog', '/uses', '/contact', '/projects/sendadvisor', '/projects/horrorometer', '/projects/kanaboards', '/blog/accessible-by-default', '/missing-page']) {
      await page.goto(route)
      await expect(page.locator('main h1')).toBeVisible()
      const fits = await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)
      expect(fits, `${route} should fit ${width}px`).toBe(true)
    }
  })
}

test('article contents links lead to the matching heading', async ({ page }) => {
  await page.goto('/blog/accessible-by-default')
  const contentsLink = page.getByRole('navigation', { name: 'On this page' }).getByRole('link').first()
  const title = await contentsLink.innerText()
  await contentsLink.click()
  await expect(page).toHaveURL(/#section-1$/)
  await expect(page.locator('h2#section-1')).toHaveText(title)
})

test('reveal content is visible in raw HTML (pre-JS paint)', async ({ page }) => {
  await page.goto('/')
  // With JS enabled, the html.js class gates pre-paint hiding; content must
  // still be present and non-hidden in the served markup itself.
  const isRevealVisible = await page
    .locator('#disciplines [data-reveal]')
    .first()
    .evaluate((el) => {
      const style = getComputedStyle(el)
      return style.display !== 'none' && style.visibility !== 'hidden'
    })
  expect(isRevealVisible).toBe(true)
})

test('dark mode cards keep readable text contrast', async ({ page }) => {
  await page.goto('/blog')
  await page.evaluate(() => localStorage.setItem('theme', 'dark'))
  await page.reload()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')

  const excerpt = page.locator('a[href^="/blog/"]').first().locator('p').first()
  await expect(excerpt).toBeVisible()

  const contrast = await excerpt.evaluate((el) => {
    const lum = (channel: number) => {
      const c = channel / 255
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
    }
    const parse = (color: string): number[] => {
      const m = color.match(/rgba?\(([^)]+)\)/)
      if (!m) return [0, 0, 0]
      return m[1].split(',').map((v) => parseFloat(v.trim()))
    }
    const blend = (fg: number[], alpha: number, bg: number[]) =>
      fg.map((c, i) => c * alpha + bg[i] * (1 - alpha))
    const effectiveBg = (start: HTMLElement): number[] => {
      let n: HTMLElement | null = start
      while (n) {
        const c = parse(getComputedStyle(n).backgroundColor)
        if (!Number.isNaN(c[0]) && (c[3] === undefined || c[3] > 0)) {
          return c[3] === undefined ? c : blend(c.slice(0, 3), c[3], effectiveBg(n.parentElement ?? document.body))
        }
        n = n.parentElement
      }
      return [255, 255, 255]
    }
    const bg = effectiveBg(el)
    const fgRaw = parse(getComputedStyle(el).color)
    const fg =
      fgRaw[3] === undefined ? fgRaw : blend(fgRaw.slice(0, 3), fgRaw[3], bg)
    const l = (rgb: number[]) =>
      0.2126 * lum(rgb[0]) + 0.7152 * lum(rgb[1]) + 0.0722 * lum(rgb[2])
    const l1 = Math.max(l(fg), l(bg))
    const l2 = Math.min(l(fg), l(bg))
    return (l1 + 0.05) / (l2 + 0.05)
  })

  expect(contrast).toBeGreaterThan(4.5)
})

test.describe('no JavaScript', () => {
  test.use({ javaScriptEnabled: false })

  test('homepage reveal content is visible without JavaScript', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('heading', { name: 'Real projects, designed and built.' })).toBeVisible()
    await expect(page.locator('#disciplines').getByRole('heading', { name: 'Design & UX' })).toBeVisible()
  })
})
