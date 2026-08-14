import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import MobileMenu from './MobileMenu'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Work', href: '/#work' },
  { name: 'About', href: '/about' },
]

describe('MobileMenu', () => {
  it('uses real links for page and section navigation', () => {
    render(<MobileMenu isOpen onClose={() => undefined} navItems={navItems} isActive={() => false} />)

    expect(screen.getByRole('link', { name: /Home/ })).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: /Work/ })).toHaveAttribute('href', '/#work')
    expect(screen.getByRole('link', { name: /About/ })).toHaveAttribute('href', '/about')
  })

  it('closes when Escape is pressed', async () => {
    const onClose = vi.fn()
    const user = userEvent.setup()
    render(<MobileMenu isOpen onClose={onClose} navItems={navItems} isActive={() => false} />)

    await user.keyboard('{Escape}')
    expect(onClose).toHaveBeenCalledOnce()
  })
})
