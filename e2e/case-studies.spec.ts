import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { projects } from '../lib/data/projects'

for (const width of [320, 768]) {
  for (const theme of ['light', 'dark']) {
    test(`case studies preserve evidence labels and accessible layouts at ${width}px in ${theme}`, async ({ page }, testInfo) => {
      test.setTimeout(90000)
      await page.setViewportSize({ width, height: 900 })
      await page.emulateMedia({ reducedMotion: 'reduce' })
      await page.addInitScript((value) => localStorage.setItem('theme', value), theme)
      for (const project of projects) {
        await page.goto(`/projects/${project.id}`)
        await page.evaluate(() => document.fonts.ready)
        const figures = page.locator('main figure')
        await expect(figures).toHaveCount(3)
        for (const figure of await figures.all()) {
          const status = figure.getByText(project.isLive ? 'Current public interface' : /^Unreleased \/ Local/)
          await expect(status).toBeVisible()
          const image = figure.getByRole('img')
          await expect(image).toHaveAttribute('alt', /\S.{30,}/)
          await figure.getByRole('link', { name: /^View larger screenshot:/ }).focus()
          const frame = figure.locator('> div')
          expect(await frame.evaluate((element) => getComputedStyle(element).outlineStyle)).not.toBe('none')
        }
        const sourceLinks = page.getByRole('link', { name: /^View the live page:/ })
        await expect(sourceLinks).toHaveCount(project.isLive ? 3 : 0)
        if (project.isLive) {
          const names = await sourceLinks.evaluateAll((links) => links.map((link) => link.getAttribute('aria-label')))
          expect(new Set(names).size).toBe(3)
        }
        await figures.first().screenshot({ path: `.playwright-mcp/case-review-${project.id}-${width}-${theme}.png` })
        // WCAG text-spacing overrides must not hide labels or force horizontal scrolling.
        await page.addStyleTag({ content: 'main * { line-height: 1.5 !important; letter-spacing: .12em !important; word-spacing: .16em !important; } main p { margin-bottom: 2em !important; }' })
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true)
        const results = await new AxeBuilder({ page }).include('main').withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa', 'best-practice']).analyze()
        await testInfo.attach(`${project.id}-${width}-${theme}`, { body: JSON.stringify(results), contentType: 'application/json' })
        expect(results.violations.map(({ id, nodes }) => ({ id, targets: nodes.map(({ target }) => target) }))).toEqual([])
      }
    })
  }
}

test('case study section links move keyboard focus below the fixed navigation', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  for (const project of projects) {
    await page.goto(`/projects/${project.id}`)
    const contents = page.getByRole('navigation', { name: 'Case study sections' })
    for (const link of await contents.getByRole('link').all()) {
      const href = await link.getAttribute('href')
      await link.focus()
      await page.keyboard.press('Enter')
      const section = page.locator(href!)
      await expect(section).toBeFocused()
      const heading = section.getByRole('heading', { level: 2 })
      await expect(heading).toBeInViewport()
      const headingBox = await heading.boundingBox()
      const navBox = await page.getByRole('navigation', { name: 'Primary navigation' }).boundingBox()
      expect(headingBox!.y).toBeGreaterThanOrEqual(navBox!.y + navBox!.height)
    }
  }
})
