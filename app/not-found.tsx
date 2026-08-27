import Link from 'next/link'
import Button from '@/components/common/Button'
import { Star } from '@/components/common/DecorativeShapes'

export default function NotFound() {
  return (
    <main className="container-custom flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <div className="flex items-center gap-3">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-ink/40">Error 404</p>
        <Star aria-hidden="true" />
      </div>
      <h1 className="mt-4 font-serif text-6xl font-black tracking-tight md:text-8xl">
        Lost in the<br />Norfolk fog.
      </h1>
      <p className="mt-6 max-w-md text-lg leading-8 text-ink/70">
        That page has wandered off — or never existed. Let&apos;s get you back to something useful.
      </p>
      <div className="mt-9 flex flex-col gap-4 sm:flex-row">
        <Button href="/" size="lg" variant="primary">
          Back to home
        </Button>
        <Button href="/work" size="lg" variant="outline">
          See the work
        </Button>
      </div>
      <Link
        href="/about"
        className="mt-8 text-sm font-black uppercase tracking-[0.16em] text-ink/50 underline underline-offset-4"
      >
        Or read about me
      </Link>
    </main>
  )
}