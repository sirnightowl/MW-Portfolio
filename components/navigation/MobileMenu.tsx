'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'
import ThemeToggle from '@/components/common/ThemeToggle'

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
    closeButtonRef.current?.focus()
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
      previousFocus?.focus()
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <button
        type="button"
        tabIndex={-1}
        aria-label="Close navigation menu"
        className="absolute inset-0 h-full w-full cursor-default bg-ink/55"
        onClick={onClose}
      />

      <div
        ref={panelRef}
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className="absolute bottom-0 right-0 top-0 flex w-[90%] max-w-sm flex-col border-l border-ink/15 bg-paper dark:border-white/15 dark:bg-[#151326]"
      >
        <div className="flex items-center justify-between border-b border-ink/15 px-5 py-4 dark:border-white/15">
          <span className="text-lg font-extrabold tracking-tight">Where to?</span>
          <div className="flex items-center gap-1">
            <ThemeToggle className="text-ink/60 hover:bg-ink/5 hover:text-ink dark:text-white/60 dark:hover:bg-white/10 dark:hover:text-white" />
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-ink/15 bg-lilac text-ink"
              aria-label="Close navigation menu"
            >
              <X aria-hidden="true" size={22} />
            </button>
          </div>
        </div>

        <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto px-5 py-8">
          <ul className="flex flex-col gap-2">
            {navItems.map((item, index) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={cn(
                    'flex items-center justify-between rounded-lg border px-5 py-4 text-xl font-bold tracking-tight transition-colors',
                    isActive(item.href)
                      ? 'border-lilac bg-lilac text-night'
                      : 'border-transparent text-ink hover:border-ink/15 hover:bg-cream dark:text-white dark:hover:border-white/15 dark:hover:bg-white/5'
                  )}
                >
                  <span>{item.name}</span>
                  <span aria-hidden="true" className="text-xs opacity-80">0{index + 1}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
