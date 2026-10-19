'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Check, Copy } from 'lucide-react'
import Button from '@/components/common/Button'
import { cn } from '@/lib/utils'
import { getContactEmail } from '@/lib/contact'

const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email'),
  message: z.string().min(10, 'Tell me a bit more (at least 10 characters)'),
})

type ContactValues = z.infer<typeof contactSchema>

const fieldBase =
  'w-full rounded-lg border border-ink/20 bg-paper px-4 py-3 text-base font-medium text-ink transition-colors focus:border-grape focus:bg-white placeholder:text-ink/55 dark:border-white/20 dark:bg-night/40 dark:text-white dark:placeholder:text-white/55 dark:focus:bg-white/5'
const fieldError = 'border-[#a52d3d] ring-2 ring-[#a52d3d]/10 dark:border-coral dark:ring-coral/15'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)
  const confirmationRef = useRef<HTMLDivElement>(null)
  const [hasSubmitted, setHasSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
  })

  useEffect(() => {
    if (submitted) confirmationRef.current?.focus()
    else if (hasSubmitted) setFocus('name')
  }, [submitted, hasSubmitted, setFocus])

  const onSubmit = (values: ContactValues) => {
    const subject = encodeURIComponent(`Portfolio enquiry from ${values.name}`)
    const body = encodeURIComponent(`${values.message}\n\n— ${values.name}\n${values.email}`)
    window.location.assign(`mailto:${getContactEmail()}?subject=${subject}&body=${body}`)
    setHasSubmitted(true)
    setSubmitted(true)
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(getContactEmail())
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  if (submitted) {
    const email = getContactEmail()
    return (
      <div ref={confirmationRef} tabIndex={-1} role="status" className="rounded-xl border border-ink/15 bg-sage/50 p-6 dark:border-white/15 dark:bg-white/5">
        <p className="text-lg font-black">Thanks — your mail client should be opening.</p>
        <p className="mt-2 text-ink/70 dark:text-white/70">
          If nothing happened, copy the address below and email me directly.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <a className="font-bold underline underline-offset-4" href={`mailto:${email}`}>
            {email}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-ink/15 bg-white px-3 py-2 text-sm font-bold transition-colors hover:bg-cream dark:border-white/15 dark:bg-white/10 dark:hover:bg-white/20"
            aria-live="polite"
          >
            {copied ? (
              <>
                <Check aria-hidden="true" size={14} strokeWidth={3} /> Copied
              </>
            ) : (
              <>
                <Copy aria-hidden="true" size={14} strokeWidth={2.5} /> Copy email
              </>
            )}
          </button>
        </div>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-4 min-h-11 text-sm font-semibold text-ink/70 dark:text-white/70 underline underline-offset-4"
        >
          Send another
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <p className="text-xs leading-6 text-ink/70 dark:text-white/70">All fields are required.</p>
      <div>
        <label htmlFor="name" className="mb-2 block text-xs font-semibold text-ink/80 dark:text-white/80">
          Name
        </label>
        <input
          id="name"
          required
          type="text"
          autoComplete="name"
          placeholder="Your name"
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={cn(fieldBase, errors.name && fieldError)}
          {...register('name')}
        />
        {errors.name && <p id="name-error" className="mt-2 text-sm font-semibold text-[#a52d3d] dark:text-coral">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-xs font-semibold text-ink/80 dark:text-white/80">
          Email
        </label>
        <input
          id="email"
          required
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={cn(fieldBase, errors.email && fieldError)}
          {...register('email')}
        />
        {errors.email && <p id="email-error" className="mt-2 text-sm font-semibold text-[#a52d3d] dark:text-coral">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-semibold text-ink/80 dark:text-white/80">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          placeholder="What are you working on?"
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={cn(fieldBase, 'resize-y', errors.message && fieldError)}
          {...register('message')}
        />
        {errors.message && <p id="message-error" className="mt-2 text-sm font-semibold text-[#a52d3d] dark:text-coral">{errors.message.message}</p>}
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting}>
        {isSubmitting ? 'Opening mail…' : 'Send message'}
      </Button>
    </form>
  )
}
