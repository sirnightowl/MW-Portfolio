'use client'

import { AnchorHTMLAttributes, ButtonHTMLAttributes, ForwardedRef, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
}

type ButtonAnchorProps = ButtonProps & AnchorHTMLAttributes<HTMLAnchorElement>

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonAnchorProps>(
  ({ className, variant = 'primary', size = 'md', href, ...props }, ref) => {
    const classes = cn(
      'inline-flex min-h-11 items-center justify-center rounded-[10px] border font-bold tracking-[-0.01em] transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]',
      {
        'border-ink bg-ink text-white hover:-translate-y-0.5 hover:bg-[#29243f] dark:border-lilac dark:bg-lilac dark:text-night dark:hover:bg-[#d8c3ff]':
          variant === 'primary',
        'border-lilac bg-lilac text-ink hover:-translate-y-0.5 hover:bg-[#d8c3ff]':
          variant === 'secondary',
        'border-ink/20 bg-white/70 text-ink hover:-translate-y-1 hover:border-ink/40 hover:bg-white dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:border-white/40 dark:hover:bg-white/20':
          variant === 'outline',
        'border-transparent bg-transparent text-ink/70 hover:bg-ink/5 hover:text-ink active:scale-[0.98] dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white':
          variant === 'ghost',
      },
      {
        'px-5 py-2.5 text-sm': size === 'sm',
        'px-7 py-3.5 text-base': size === 'md',
        'px-6 py-3.5 text-base': size === 'lg',
      },
      className
    )

    if (href) {
      return (
        <a
          className={classes}
          href={href}
          ref={ref as ForwardedRef<HTMLAnchorElement>}
          {...props}
        />
      )
    }

    return (
      <button
        className={classes}
        ref={ref as ForwardedRef<HTMLButtonElement>}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export default Button
