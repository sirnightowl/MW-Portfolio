'use client'

import { useEffect, useRef, useState } from 'react'

interface CounterProps {
  to: number
  suffix?: string
  prefix?: string
  durationMs?: number
  label: string
  className?: string
}

export default function AnimatedCounter({
  to,
  suffix = '',
  prefix = '',
  durationMs = 1600,
  label,
  className = '',
}: CounterProps) {
  const [value, setValue] = useState(to)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (motion.matches || typeof IntersectionObserver === 'undefined') return
    let frame = 0
    let started = false

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !started) {
          started = true
          // Keep the server-rendered total until the animation is visible.
          setValue(0)
          const start = performance.now()
          const step = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / durationMs, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(Math.round(eased * to))
            if (progress < 1) frame = requestAnimationFrame(step)
          }
          frame = requestAnimationFrame(step)
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(node)
    const finish = () => {
      if (!motion.matches) return
      cancelAnimationFrame(frame)
      observer.disconnect()
      setValue(to)
    }
    motion.addEventListener('change', finish)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
      motion.removeEventListener('change', finish)
    }
  }, [to, durationMs])

  return (
    <div className={className}>
      <p className="display-title text-4xl leading-none sm:text-5xl lg:text-6xl" aria-hidden="true">
        <span ref={ref}>{prefix}{value.toLocaleString('en-GB')}{suffix}</span>
      </p>
      <p className="sr-only">{prefix}{to.toLocaleString('en-GB')}{suffix} {label}</p>
      <p aria-hidden="true" className="mt-2 text-xs font-black uppercase tracking-[0.18em] text-ink/60 dark:text-white/60">{label}</p>
    </div>
  )
}
