'use client'

import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import MobileMenu from './MobileMenu'
import ThemeToggle from '@/components/common/ThemeToggle'
import OwlMark from '@/components/common/OwlMark'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Work', href: '/work' },
  { name: 'About', href: '/about' },
  { name: 'Writing', href: '/blog' },
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
      const current = pathname === '/' ? ['work', 'about', 'writing', 'contact'].find((section) => {
        const element = document.getElementById(section)
        if (!element) return false
        const rect = element.getBoundingClientRect()
        return rect.top <= 120 && rect.bottom >= 120
      }) : undefined
      setActiveSection(current ?? '')
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  const isActive = (href: string) => {
    if (pathname === '/' && activeSection) return href === (activeSection === 'writing' ? '/blog' : `/${activeSection}`)
    if (href === '/work') return pathname === '/work' || pathname.startsWith('/projects/')
    if (href === '/blog') return pathname.startsWith('/blog')
    return pathname === href
  }

  return (
    <>
      <nav aria-label="Primary navigation" className="fixed inset-x-0 top-3 z-40 md:top-4">
        <div className="container-custom">
          <div className={cn('flex h-14 items-center justify-between border-b border-ink/15 bg-paper/95 px-4 text-ink backdrop-blur-xl transition-shadow md:h-16 md:px-6 dark:border-white/15 dark:bg-night/95 dark:text-white', isScrolled && 'shadow-[0_8px_32px_rgba(21,19,38,0.06)]')}>
            <Link href="/" className="inline-flex min-h-11 shrink-0 items-center gap-2 font-serif text-[20px] font-normal tracking-[-0.05em] text-[#703f61] sm:gap-3 sm:text-[23px] dark:text-[#dfb4d0]">
              <OwlMark className="h-7 w-10 shrink-0 min-[360px]:h-8 min-[360px]:w-12 sm:h-11 sm:w-16" />
              <span>Martin Whitaker.</span>
            </Link>
            <div className="flex items-center gap-7">
              <ul className="hidden items-center gap-8 lg:flex">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} aria-current={isActive(item.href) ? 'page' : undefined} className={cn('inline-flex min-h-11 items-center border-b-2 text-[13px] font-semibold transition-colors', isActive(item.href) ? 'border-[#703f61] dark:border-lilac' : 'border-transparent text-ink/75 hover:text-ink dark:text-white/65 dark:hover:text-white')}>{item.name}</Link>
                  </li>
                ))}
              </ul>
              <div className="hidden border-l border-ink/15 pl-5 lg:block dark:border-white/15"><ThemeToggle className="text-ink/75 hover:bg-ink/5 hover:text-ink dark:text-white/65 dark:hover:bg-white/10 dark:hover:text-white" /></div>
              <button type="button" onClick={() => setIsMobileMenuOpen((open) => !open)} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg hover:bg-ink/5 lg:hidden dark:hover:bg-white/10" aria-controls="mobile-navigation" aria-expanded={isMobileMenuOpen} aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}><Menu aria-hidden="true" size={24} /></button>
            </div>
          </div>
        </div>
      </nav>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} navItems={navItems} isActive={isActive} />
    </>
  )
}
