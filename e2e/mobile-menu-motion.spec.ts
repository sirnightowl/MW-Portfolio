import { test, expect } from '@playwright/test'

test.use({ viewport: { width: 390, height: 844 } })

test('drawer slides both ways and stays inaccessible after closing', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' })
  await page.goto('/')
  const overlay = page.locator('[data-mobile-menu]')
  const panel = page.locator('#mobile-navigation')
  await panel.evaluate((element) => {
    const events: string[] = []
    element.addEventListener('transitionrun', (event) => {
      if ((event as TransitionEvent).propertyName === 'transform') {
        events.push(element.parentElement!.dataset.open!)
        element.setAttribute('data-observed-slides', events.join(','))
      }
    })
  })

  const trigger = page.getByRole('button', { name: 'Open navigation menu' })
  await trigger.click()
  await expect(panel).toHaveCSS('transition-duration', '0.22s')
  await expect(panel).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)')
  await expect(panel).toHaveAttribute('data-observed-slides', 'true')
  await page.keyboard.press('Escape')
  await expect(overlay).toHaveAttribute('inert', '')
  await expect(overlay).toHaveAttribute('aria-hidden', 'true')
  await expect(trigger).toBeFocused()
  await expect(panel).toHaveAttribute('data-observed-slides', 'true,false')
  await expect(overlay).toHaveCSS('visibility', 'hidden')
  await expect(page.locator('body')).not.toHaveCSS('overflow', 'hidden')

  // A close immediately followed by reopening must not leave stale exit state.
  await trigger.click()
  await page.keyboard.press('Escape')
  await page.keyboard.press('Enter')
  await expect(overlay).toHaveAttribute('data-open', 'true')
  await expect(panel).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)')
  await expect(page.locator('body')).toHaveCSS('overflow', 'hidden')
})

test('reduced motion opens and closes instantly, including a preference change', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  const overlay = page.locator('[data-mobile-menu]')
  const trigger = page.getByRole('button', { name: 'Open navigation menu' })
  await trigger.click()
  expect(await overlay.locator('*').evaluateAll((elements) => elements.every((element) => {
    const style = getComputedStyle(element)
    return style.transitionDuration === '0s' && style.animationName === 'none'
  }))).toBe(true)
  await page.keyboard.press('Escape')
  await expect(overlay).toHaveCSS('visibility', 'hidden')
  await expect(overlay).toHaveCSS('transition-delay', '0s')
  await expect(trigger).toBeFocused()
  await page.emulateMedia({ reducedMotion: 'no-preference' })
  await trigger.click()
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.keyboard.press('Escape')
  await expect(overlay).toHaveCSS('visibility', 'hidden')
  expect(await overlay.evaluate((element) => element.getAnimations({ subtree: true }).length)).toBe(0)
})
