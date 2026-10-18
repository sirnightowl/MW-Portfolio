import Link from 'next/link'
import Button from '@/components/common/Button'
import PageIntro from '@/components/common/PageIntro'

export default function NotFound() {
  return (
    <main id="main" tabIndex={-1}>
      <PageIntro eyebrow="Error 404" title={<>Lost in the<br /><span>Norfolk fog.</span></>} description="That page has wandered off — or never existed. Let’s get you back to something useful." note="A small detour / You’re still in the right place">
          <div className="flex flex-wrap gap-3">
            <Button href="/" size="lg" className="hero-button">Back to home</Button>
            <Button href="/work" size="lg" variant="ghost" className="border-white/30 text-white hover:bg-white/10 hover:text-white">See the work</Button>
          </div>
          <Link href="/about" className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-white/75 underline underline-offset-4">Or read about me</Link>
      </PageIntro>
    </main>
  )
}
