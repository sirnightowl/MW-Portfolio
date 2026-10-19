import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { JSDOM } from 'jsdom'

const site = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://snowl.uk')
const output = path.resolve('out')
const sitemap = new JSDOM(await readFile(path.join(output, 'sitemap.xml'), 'utf8'), { contentType: 'text/xml' }).window.document
const urls = [...sitemap.querySelectorAll('loc')].map((node) => node.textContent)
assert.equal(urls.length, 33, 'Sitemap must contain all seven main pages, five case studies and 21 published posts')
assert.equal(new Set(urls).size, urls.length, 'Sitemap URLs must be unique')
const titles = new Set()
for (const url of urls) {
  const route = new URL(url)
  assert.equal(route.origin, site.origin)
  const file = route.pathname === '/' ? 'index.html' : `${route.pathname.slice(1)}.html`
  const document = new JSDOM(await readFile(path.join(output, file), 'utf8')).window.document
  const meta = (name) => document.querySelector(`meta[property="${name}"], meta[name="${name}"]`)?.content
  assert.equal(document.querySelector('link[rel="canonical"]')?.href, url, `${file}: canonical`)
  assert.equal(new URL(meta('og:url')).href, url, `${file}: Open Graph URL`)
  assert.equal(document.querySelectorAll('h1').length, 1, `${file}: single H1`)
  assert.ok(document.title && !titles.has(document.title), `${file}: unique title`)
  titles.add(document.title)
  assert.ok(meta('description')?.length > 30, `${file}: description`)
  assert.equal(meta('og:description'), meta('description'), `${file}: social description`)
  assert.equal(meta('twitter:title'), meta('og:title'), `${file}: social title`)
  assert.equal(meta('twitter:description'), meta('description'), `${file}: Twitter description`)
  assert.ok(!meta('robots')?.includes('noindex'), `${file}: indexable`)
  for (const key of ['og:image', 'twitter:image']) {
    const image = new URL(meta(key))
    assert.equal(image.origin, site.origin, `${file}: absolute social image`)
    const bytes = await readFile(path.join(output, image.pathname))
    assert.equal(bytes.subarray(0, 8).toString('hex'), '89504e470d0a1a0a', `${file}: PNG preview`)
    assert.equal(bytes.readUInt32BE(16), 1200)
    assert.equal(bytes.readUInt32BE(20), 630)
  }
  assert.equal(meta('og:image:width'), '1200')
  assert.equal(meta('og:image:height'), '630')
  assert.ok(meta('og:image:alt') && meta('twitter:image:alt'), `${file}: preview alternative text`)
  if (route.pathname.startsWith('/projects/')) {
    const slug = route.pathname.split('/').at(-1)
    assert.equal(new URL(meta('og:image')).pathname, `/social/${slug}.png`)
    assert.equal(meta('og:type'), 'article')
    if (['kanaboards', 'stay-with-me-deep-sea'].includes(slug)) {
      assert.match(meta('description'), /unreleased/i)
      assert.match(meta('og:image:alt'), /unreleased/i)
    }
  }
  for (const node of document.querySelectorAll('script[type="application/ld+json"]')) JSON.parse(node.textContent)
}
const notFound = new JSDOM(await readFile(path.join(output, '404.html'), 'utf8')).window.document
assert.match(notFound.querySelector('meta[name="robots"]')?.content ?? '', /noindex/)
console.log(`SEO export checks passed: ${urls.length} pages and all social preview files.`)
