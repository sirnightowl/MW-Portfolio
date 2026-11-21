import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test('portfolio content stays motion-free without a reduced-motion preference', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' })
  for (const route of ['/', '/work', '/about', '/projects/sendadvisor']) {
    await page.goto(route)
    const movingStyles = await page.evaluate(() => Array.from(document.querySelectorAll('*')).filter((element) => {
      if (element.closest('[data-mobile-menu]')) return false
      const style = getComputedStyle(element)
      return style.animationName !== 'none' || style.transitionDuration.split(',').some((duration) => parseFloat(duration) > 0)
    }).map((element) => element.tagName))
    expect(movingStyles, route).toEqual([])
    expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe('auto')
  }
  await page.goto('/')
  const image = page.locator('#work .project-card').first().locator('img').first()
  const before = await image.boundingBox()
  await page.locator('#work .project-card').first().hover()
  const after = await image.boundingBox()
  expect(after!.width).toBe(before!.width)
  expect(after!.height).toBe(before!.height)
  expect(await image.evaluate((element) => getComputedStyle(element.parentElement!).transform)).toBe('none')
  await expect(page.getByRole('img', { name: 'Bubbles, Martin’s cat' })).toHaveAttribute('src', '/images/bubbles-cutout.webp')
})

for (const theme of ['light', 'dark']) {
  test(`homepage additions remain accessible at narrow widths in ${theme} mode`, async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 800 })
    await page.emulateMedia({ reducedMotion: 'reduce' })
    await page.addInitScript((value) => localStorage.setItem('theme', value), theme)
    await page.goto('/')
    await page.locator('#about').scrollIntoViewIfNeeded()
    const results = await new AxeBuilder({ page }).include('#about').include('#contact').analyze()
    expect(results.violations).toEqual([])
    await page.locator('#contact').getByRole('button', { name: 'Open email draft', exact: true }).click()
    await expect(page.getByLabel('Name', { exact: true })).toBeFocused()
    const errors = await new AxeBuilder({ page }).include('#contact').analyze()
    expect(errors.violations).toEqual([])
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true)
    const portrait = page.getByRole('img', { name: 'Martin Whitaker', exact: true })
    const bottomGap = await portrait.evaluate((element) => element.closest('section')!.getBoundingClientRect().bottom - element.getBoundingClientRect().bottom)
    expect(Math.abs(bottomGap)).toBeLessThan(1)
  })
}
