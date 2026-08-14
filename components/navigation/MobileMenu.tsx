'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

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

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
      previousFocus?.focus()
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <button
        type="button"
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
        className="absolute bottom-0 right-0 top-0 flex w-[84%] max-w-sm flex-col border-l-2 border-ink bg-paper shadow-[-10px_0_0_rgba(31,31,29,0.16)]"
      >
        <div className="flex items-center justify-between border-b-2 border-ink px-5 py-4">
          <span className="text-lg font-black">Where to?</span>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="rounded-md border-2 border-ink bg-butter p-2 shadow-[3px_4px_0_#1f1f1d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-4"
            aria-label="Close navigation menu"
          >
            <X aria-hidden="true" size={22} />
          </button>
        </div>

        <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto px-5 py-8">
          <ul className="flex flex-col gap-3">
            {navItems.map((item, index) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={cn(
                    'flex items-center justify-between rounded-[6px] border-2 border-ink px-5 py-4 text-xl font-black transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-butter focus-visible:ring-offset-4',
                    isActive(item.href)
                      ? 'bg-coral shadow-[4px_5px_0_#1f1f1d]'
                      : 'bg-white hover:-translate-y-0.5 hover:shadow-[4px_5px_0_#1f1f1d]'
                  )}
                >
                  <span>{item.name}</span>
                  <span aria-hidden="true" className="text-sm text-ink/45">0{index + 1}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
