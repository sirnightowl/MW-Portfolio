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
      'inline-flex items-center justify-center rounded-[8px] border-2 border-ink font-semibold tracking-normal transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-butter focus:bg-butter focus:ring-offset-2 disabled:pointer-events-none disabled:translate-x-0 disabled:translate-y-0 disabled:opacity-50 active:scale-[0.98]',
      {
        'bg-butter text-ink shadow-[4px_4px_0_#1f1f1d] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#1f1f1d] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_#1f1f1d]':
          variant === 'primary',
        'bg-sage text-ink shadow-[4px_4px_0_#1f1f1d] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#1f1f1d] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_#1f1f1d]':
          variant === 'secondary',
        'bg-paper text-ink shadow-[4px_4px_0_#1f1f1d] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-cream hover:shadow-[6px_6px_0_#1f1f1d] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_#1f1f1d]':
          variant === 'outline',
        'border-transparent bg-transparent text-ink/70 hover:bg-ink/5 hover:text-ink active:scale-[0.98]':
          variant === 'ghost',
      },
      {
        'px-4 py-2 text-sm': size === 'sm',
        'px-6 py-3 text-base': size === 'md',
        'px-8 py-4 text-lg': size === 'lg',
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
