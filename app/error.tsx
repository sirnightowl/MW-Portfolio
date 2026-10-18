'use client'

import { useEffect } from 'react'
import Button from '@/components/common/Button'
import PageIntro from '@/components/common/PageIntro'

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string }
  retry: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main id="main" tabIndex={-1}>
      <PageIntro eyebrow="Something went wrong" title={<>That wasn’t supposed<br /><span>to happen.</span></>} description="An unexpected error occurred. You can try again, or head back to somewhere safe." note="A brief interruption / Let’s try that again">
        <div className="flex flex-wrap gap-3">
          <Button onClick={retry} size="lg" className="hero-button">Try again</Button>
          <Button href="/" size="lg" variant="ghost" className="border-white/30 text-white hover:bg-white/10 hover:text-white">Back to home</Button>
        </div>
      </PageIntro>
    </main>
  )
}
