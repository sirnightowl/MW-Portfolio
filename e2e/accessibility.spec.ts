import { test, expect, type Page, type TestInfo } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { articles } from '../lib/data/articles'
import { projects } from '../lib/data/projects'

const routes = [
  '/', '/work', '/about', '/cv', '/uses', '/contact', '/blog', '/missing-page',
  ...projects.map((project) => `/projects/${project.id}`),
  ...articles.filter((article) => article.published).map((article) => `/blog/${article.id}`),
]

async function audit(page: Page, testInfo: TestInfo, contrastOnly = false) {
  await page.evaluate(() => document.fonts.ready)
  await page.evaluate(async () => {
    await new Promise(requestAnimationFrame)
    await new Promise(requestAnimationFrame)
  })
  const builder = new AxeBuilder({ page })
  const results = await (contrastOnly
    ? builder.withRules(['color-contrast'])
    : builder.withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'])).analyze()
  await testInfo.attach('accessibility-results', {
    body: JSON.stringify({ violations: results.violations, incomplete: results.incomplete }),
    contentType: 'application/json',
  })
  expect(results.violations.map(({ id, nodes }) => ({ id, nodes: nodes.map(({ target, failureSummary }) => ({ target, failureSummary })) }))).toEqual([])
}

test('skip link moves focus past navigation to main content', async ({ page }) => {
  await page.goto('/')
  await page.keyboard.press('Tab')
  await expect(page.getByRole('link', { name: 'Skip to main content' })).toBeFocused()
  await page.keyboard.press('Enter')
  await expect(page.locator('main')).toBeFocused()
  await page.keyboard.press('Tab')
  await expect(page.getByRole('link', { name: 'Explore my work' })).toBeFocused()
})

test('mobile menu traps focus, makes the background inert, and restores focus', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 })
  await page.goto('/contact')
  const trigger = page.getByRole('button', { name: 'Open navigation menu' })
  await trigger.click()
  const dialog = page.getByRole('dialog', { name: 'Navigation menu' })
  const close = dialog.getByRole('button', { name: 'Close navigation menu' })
  await expect(close).toBeFocused()
  expect(await page.locator('main').evaluate((element) => element.inert)).toBe(true)
  await dialog.getByRole('link', { name: /Contact/ }).focus()
  await page.keyboard.press('Tab')
  await expect(dialog.getByRole('button', { name: /Switch to/ })).toBeFocused()
  await page.keyboard.press('Shift+Tab')
  await expect(dialog.getByRole('link', { name: /Contact/ })).toBeFocused()
  await page.keyboard.press('Escape')
  await expect(trigger).toBeFocused()
  expect(await page.locator('main').evaluate((element) => element.inert)).toBe(false)
})

test('invalid form submission focuses the first required field', async ({ page }) => {
  await page.goto('/contact')
  await page.getByRole('button', { name: 'Send message', exact: true }).click()
  await expect(page.getByLabel('Name', { exact: true })).toBeFocused()
  await expect(page.getByLabel('Name', { exact: true })).toHaveAttribute('required', '')
  await expect(page.getByLabel('Name', { exact: true })).toHaveAttribute('aria-describedby', 'name-error')
})

test('reduced motion keeps counters at their final values', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  await expect(page.getByText('4', { exact: true })).toHaveText('4')
  await expect(page.getByText('12+', { exact: true })).toHaveText('12+')
  await expect(page.getByText('2 Live products', { exact: true })).toBeVisible()
  await expect(page.getByText('2 Unreleased projects', { exact: true })).toBeVisible()
})

for (const theme of ['light', 'dark']) {
  test.describe(`${theme} accessibility`, () => {
    test.beforeEach(async ({ page }) => {
      await page.emulateMedia({ reducedMotion: 'reduce' })
      await page.addInitScript((value) => localStorage.setItem('theme', value), theme)
    })

    for (const route of routes) {
      test(`${route} has no automated WCAG violations`, async ({ page }, testInfo) => {
        await page.goto(route)
        await page.evaluate(() => document.fonts.ready)
        await page.evaluate(async () => {
          for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight) {
            window.scrollTo(0, y)
            await new Promise(requestAnimationFrame)
          }
          window.scrollTo(0, 0)
        })
        await page.waitForFunction(() => Array.from(document.querySelectorAll('[data-reveal]')).every((element) => getComputedStyle(element).opacity === '1'), undefined, { timeout: 5000 })
        await audit(page, testInfo)
      })
    }

    test('hero text contrasts with the brightest gradient stop', async ({ page }, testInfo) => {
      for (const route of ['/', '/about', '/projects/horrorometer', '/blog/accessible-by-default']) {
        await page.goto(route)
        // A solid version of the lightest stop supplies a conservative bound
        // for text that axe cannot assess over a gradient automatically.
        await page.addStyleTag({ content: 'header[class*="PageIntro"], main > section[class*="home-module"]:first-child { background-image: none !important; background-color: #242035 !important; }' })
        await audit(page, testInfo, true)
      }
    })

    test('mobile navigation dialog and contact errors are accessible', async ({ page }, testInfo) => {
      await page.setViewportSize({ width: 375, height: 812 })
      await page.goto('/contact')
      await page.getByRole('button', { name: 'Open navigation menu' }).click()
      await expect(page.getByRole('dialog', { name: 'Navigation menu' })).toBeVisible()
      await audit(page, testInfo)
      await page.keyboard.press('Escape')
      await page.getByRole('button', { name: 'Send message', exact: true }).click()
      await audit(page, testInfo)
    })
  })
}
