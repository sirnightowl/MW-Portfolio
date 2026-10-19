'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Mail } from 'lucide-react'
import { getContactEmail } from '@/lib/contact'

interface EmailContactProps {
  className?: string
  showIcon?: boolean
}

export default function EmailContact({ className, showIcon = false }: EmailContactProps) {
  const [email, setEmail] = useState<string | null>(null)
  const linkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (email) linkRef.current?.focus()
  }, [email])

  const contents = <>{showIcon && <Mail size={17} aria-hidden="true" />}<span>{email ?? 'Reveal email address'}</span><ArrowUpRight size={16} aria-hidden="true" /></>

  return (
    <>
      {email ? (
        <a ref={linkRef} href={`mailto:${email}`} className={className}>{contents}</a>
      ) : (
        <button type="button" className={className} onClick={() => setEmail(getContactEmail())}>{contents}</button>
      )}
      <noscript><p>Email needs JavaScript. You can also <a href="https://www.linkedin.com/in/martin-whitaker" className="underline underline-offset-4">get in touch on LinkedIn</a>.</p></noscript>
    </>
  )
}
