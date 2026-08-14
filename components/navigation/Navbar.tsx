'use client'

import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import MobileMenu from './MobileMenu'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Work', href: '/#work' },
  { name: 'Skills', href: '/#skills' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/#contact' },
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

      const sectionIds = ['work', 'skills', 'contact']
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
    if (href === '/') return pathname === '/' && activeSection === ''
    return pathname === '/' && activeSection === href.replace('/#', '')
  }

  return (
    <>
      <nav
        aria-label="Primary navigation"
        className={cn(
          'fixed inset-x-0 top-0 z-40 transition-all duration-300',
          isScrolled ? 'border-b border-ink/10 bg-paper/95 shadow-sm backdrop-blur' : 'bg-transparent'
        )}
      >
        <div className="container-custom">
          <div className="flex h-16 items-center justify-between md:h-20">
            <Link
              href="/"
              className="text-xl font-black transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-butter focus-visible:ring-offset-4"
            >
              Martin Whitaker<span className="text-coral">.</span>
            </Link>

            <ul className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    className={cn(
                      'relative text-base font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-butter focus-visible:ring-offset-4',
                      isActive(item.href) ? 'text-ink' : 'text-ink/60 hover:text-ink'
                    )}
                  >
                    {item.name}
                    {isActive(item.href) && (
                      <span aria-hidden="true" className="absolute -bottom-2 left-0 right-0 h-1 rounded-full bg-coral" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="rounded-md p-2 text-ink/70 transition-colors hover:bg-ink/5 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-butter md:hidden"
              aria-controls="mobile-navigation"
              aria-expanded={isMobileMenuOpen}
              aria-label="Open navigation menu"
            >
              <Menu aria-hidden="true" size={24} />
            </button>
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
