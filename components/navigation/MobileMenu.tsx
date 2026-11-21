'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'
import ThemeToggle from '@/components/common/ThemeToggle'
import OwlMark from '@/components/common/OwlMark'
import styles from './MobileMenu.module.css'

interface NavItem {
  name: string
  href: string
}

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navItems: NavItem[]
  isActive: (href: string) => boolean
}

export default function MobileMenu({ isOpen, onClose, navItems, isActive }: MobileMenuProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    const previousFocus = document.activeElement as HTMLElement | null
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key !== 'Tab') return

      const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
      if (!focusable?.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)
    closeButtonRef.current?.focus({ preventScroll: true })
    const overlay = panelRef.current?.parentElement
    const background = Array.from(document.body.children)
      .filter((element): element is HTMLElement => element instanceof HTMLElement && element !== overlay && !element.contains(overlay ?? null))
      .map((element) => ({ element, wasInert: element.inert }))
    background.forEach(({ element }) => { element.inert = true })
    const desktop = window.matchMedia?.('(min-width: 1024px)')
    const closeOnDesktop = (event: MediaQueryListEvent) => { if (event.matches) onClose() }
    desktop?.addEventListener('change', closeOnDesktop)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
      desktop?.removeEventListener('change', closeOnDesktop)
      background.forEach(({ element, wasInert }) => { element.inert = wasInert })
      previousFocus?.focus({ preventScroll: true })
    }
  }, [isOpen, onClose])

  return (
    <div
      className={`${styles.overlay} fixed inset-0 z-50 overflow-hidden lg:hidden`}
      data-mobile-menu=""
      data-open={isOpen}
      aria-hidden={!isOpen}
      inert={!isOpen}
    >
      <button
        type="button"
        tabIndex={-1}
        aria-label="Close navigation menu"
        className={`${styles.backdrop} absolute inset-0 h-full w-full cursor-default bg-ink/55`}
        onClick={onClose}
      />

      <div
        ref={panelRef}
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`${styles.panel} absolute bottom-0 right-0 top-0 flex w-[90%] max-w-sm flex-col border-l border-ink/15 bg-paper dark:border-white/15 dark:bg-night`}
      >
        <div className="shrink-0 border-b border-ink/15 px-6 pb-6 pt-4 dark:border-white/15">
          <div className="flex items-center justify-between">
          <OwlMark className="h-11 w-16 text-[#703f61] dark:text-[#dfb4d0]" />
          <div className="flex items-center gap-1">
            <ThemeToggle className="text-ink/70 hover:bg-ink/5 hover:text-ink dark:text-white/60 dark:hover:bg-white/10 dark:hover:text-white" />
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-ink/20 text-ink hover:bg-cream dark:border-white/25 dark:text-white dark:hover:bg-white/10"
              aria-label="Close navigation menu"
            >
              <X aria-hidden="true" size={22} />
            </button>
          </div>
          </div>
          <p className="mt-4 font-serif text-[28px] font-normal tracking-[-0.05em] text-[#703f61] dark:text-[#dfb4d0]">Martin Whitaker.</p>
        </div>

        <nav aria-label="Mobile navigation" className="min-h-0 flex-1 overflow-y-auto px-6 py-5">
          <ul className="flex flex-col">
            {navItems.map((item, index) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={cn(
                    'flex min-h-16 items-center justify-between gap-4 border-b border-ink/15 py-4 font-serif text-[34px] font-normal tracking-[-0.04em] hover:text-[#703f61] dark:border-white/15 dark:hover:text-[#dfb4d0]',
                    isActive(item.href)
                      ? 'text-[#703f61] italic underline decoration-1 underline-offset-8 dark:text-[#dfb4d0]'
                      : 'text-ink dark:text-white'
                  )}
                >
                  <span>{item.name}</span>
                  <span aria-hidden="true" className="font-sans text-[11px] font-medium not-italic tracking-[.12em] text-ink/70 dark:text-white/70">0{index + 1}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
