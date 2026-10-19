'use client'

import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import MobileMenu from './MobileMenu'
import ThemeToggle from '@/components/common/ThemeToggle'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Work', href: '/work' },
  { name: 'About', href: '/about' },
  { name: 'CV', href: '/cv' },
  { name: 'Blog', href: '/blog' },
  { name: 'Uses', href: '/uses' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      if (pathname !== '/') {
        setActiveSection('')
        return
      }

      const sectionIds = ['work', 'about', 'writing', 'contact']
      const current = sectionIds.find((section) => {
        const element = document.getElementById(section)
        if (!element) return false
        const rect = element.getBoundingClientRect()
        return rect.top <= 110 && rect.bottom >= 110
      })

      setActiveSection(current ?? '')
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  const isActive = (href: string) => {
    if (href === '/about') return pathname === '/about'
    if (href === '/cv') return pathname === '/cv'
    if (href === '/uses') return pathname === '/uses'
    if (href === '/contact') return pathname === '/contact'
    if (href === '/work') return pathname === '/work' || pathname.startsWith('/projects/') || (pathname === '/' && activeSection === 'work')
    if (href === '/blog') return pathname.startsWith('/blog') || (pathname === '/' && activeSection === 'writing')
    if (href === '/') return pathname === '/' && activeSection === ''
    return false
  }

  return (
    <>
      <nav
        aria-label="Primary navigation"
        className={cn(
          'fixed inset-x-0 top-3 z-40 transition-all duration-300 md:top-4',
        )}
      >
        <div className="container-custom">
          <div
            className={cn(
              'flex h-14 items-center justify-between rounded-xl border px-4 backdrop-blur-xl transition-shadow duration-300 md:h-16 md:px-6',
              isScrolled
                ? 'border-ink/10 bg-white/95 shadow-[0_12px_40px_rgba(21,19,38,0.08)] dark:border-white/15 dark:bg-[#181322]/95'
                : 'border-white/15 bg-night/70'
            )}
          >
            <Link
              href="/"
                className={cn(
                  'shrink-0 text-lg font-extrabold tracking-tight transition-opacity hover:opacity-80 sm:text-xl',
                  isScrolled ? 'text-ink dark:text-white' : 'text-white'
                )}
            >
              Martin Whitaker<span className="text-coral">.</span>
            </Link>

            <ul className="hidden items-center gap-6 lg:flex">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                className={cn(
                  'relative inline-flex min-h-11 items-center text-xs font-semibold xl:text-sm',
                  isScrolled
                    ? (isActive(item.href) ? 'text-ink dark:text-white' : 'text-ink/60 hover:text-ink dark:text-white/60 dark:hover:text-white')
                    : (isActive(item.href) ? 'text-white' : 'text-white/60 hover:text-white')
                )}
                  >
                    {item.name}
                    {isActive(item.href) && (
                      <span aria-hidden="true" className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-grape" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
                className={cn(
                  'flex h-11 w-11 shrink-0 items-center justify-center rounded-lg lg:hidden',
                  isScrolled
                    ? 'text-ink/70 hover:bg-ink/5 hover:text-ink dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white'
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                )}
              aria-controls="mobile-navigation"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              <Menu aria-hidden="true" size={24} />
            </button>

            <div className="hidden lg:block">
              <ThemeToggle
                className={cn(
                  isScrolled
                    ? 'text-ink/60 hover:bg-ink/5 hover:text-ink dark:text-white/60 dark:hover:bg-white/10 dark:hover:text-white'
                    : 'text-white/60 hover:bg-white/10 hover:text-white'
                )}
              />
            </div>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        navItems={navItems}
        isActive={isActive}
      />
    </>
  )
}
