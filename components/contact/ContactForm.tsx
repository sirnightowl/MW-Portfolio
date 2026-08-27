'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Button from '@/components/common/Button'
import { cn } from '@/lib/utils'

const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email'),
  message: z.string().min(10, 'Tell me a bit more (at least 10 characters)'),
})

type ContactValues = z.infer<typeof contactSchema>

const fieldBase =
  'w-full rounded-[8px] border-2 border-ink bg-paper px-4 py-3 text-base font-medium text-ink shadow-[3px_3px_0_#1f1f1d] transition-all focus:outline-none focus:ring-2 focus:ring-butter focus:ring-offset-2 placeholder:text-ink/40'
const fieldError = 'border-coral shadow-[3px_3px_0_#ff9d91]'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = (values: ContactValues) => {
    const subject = encodeURIComponent(`Portfolio enquiry from ${values.name}`)
    const body = encodeURIComponent(`${values.message}\n\n— ${values.name}\n${values.email}`)
    window.open(`mailto:martwhitty@gmail.com?subject=${subject}&body=${body}`, '_blank')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-[12px] border-2 border-ink bg-sage p-6 shadow-[4px_4px_0_#1f1f1d]">
        <p className="text-lg font-black">Thanks — your mail client should be open.</p>
        <p className="mt-2 text-ink/70">
          If nothing happened, email me directly at{' '}
          <a className="font-bold underline underline-offset-4" href="mailto:martwhitty@gmail.com">
            martwhitty@gmail.com
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm font-black uppercase tracking-[0.16em] text-ink/60 underline underline-offset-4"
        >
          Send another
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-black uppercase tracking-[0.16em] text-ink/60">
          Name
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          className={cn(fieldBase, errors.name && fieldError)}
          {...register('name')}
        />
        {errors.name && <p className="mt-2 text-sm font-bold text-coral">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-black uppercase tracking-[0.16em] text-ink/60">
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          className={cn(fieldBase, errors.email && fieldError)}
          {...register('email')}
        />
        {errors.email && <p className="mt-2 text-sm font-bold text-coral">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-black uppercase tracking-[0.16em] text-ink/60">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="What are you working on?"
          className={cn(fieldBase, 'resize-y', errors.message && fieldError)}
          {...register('message')}
        />
        {errors.message && <p className="mt-2 text-sm font-bold text-coral">{errors.message.message}</p>}
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting}>
        Send message
      </Button>
    </form>
  )
}