import type { Metadata } from 'next'
import Button from '@/components/common/Button'

export const metadata: Metadata = {
  title: 'Uses',
  description: 'The tools, hardware, and setup Martin Whitaker reaches for to design and build accessible websites and products.',
  openGraph: {
    title: 'Uses — Martin Whitaker',
    type: 'website',
  },
}

const groups = [
  {
    cat: 'Design',
    items: [
      { name: 'Figma', note: 'Wireframes, prototypes, design systems' },
      { name: 'Adobe Photoshop', note: 'Image editing and assets' },
      { name: 'Adobe XD', note: 'Older prototypes, still occasionally useful' },
      { name: 'Pen & paper', note: 'First sketches, always' },
    ],
  },
  {
    cat: 'Editor & terminal',
    items: [
      { name: 'Cursor', note: 'Primary editor on top of VS Code' },
      { name: 'VS Code', note: 'Pair programming and quick edits' },
      { name: 'Windows Terminal + PowerShell', note: 'Day-to-day shell' },
      { name: 'Git', note: 'Via GitHub and Cloudflare' },
    ],
  },
  {
    cat: 'Stack',
    items: [
      { name: 'Next.js + TypeScript', note: 'Most new product work' },
      { name: 'SolidJS', note: 'For Kanaboards' },
      { name: 'Tailwind CSS', note: 'On every project' },
      { name: 'Cloudflare Workers, D1, Durable Objects', note: 'Edge and data' },
    ],
  },
  {
    cat: 'Hardware',
    items: [
      { name: 'Custom PC', note: 'Windows 11, multi-monitor' },
      { name: 'DJI drone', note: 'Norfolk countryside patrols' },
      { name: 'Mechanical keyboard', note: 'Tactile, clicky, opinionated' },
      { name: 'Bubbles the cat', note: 'Unofficial build buddy' },
    ],
  },
]

export default function UsesPage() {
  return (
    <main className="container-custom pt-28 pb-20 md:pt-36 md:pb-28">
      <p className="text-sm font-black uppercase tracking-[0.2em] text-ink/50">Uses</p>
      <h1 className="mt-3 text-5xl font-black tracking-normal md:text-7xl">
        What I reach for every day.
      </h1>
      <p className="mt-6 max-w-2xl text-xl leading-8 text-ink/70">
        The tools, stack, and setup behind my design and front-end work — at Norfolk County Council and on my own products.
      </p>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {groups.map((group) => (
          <section
            key={group.cat}
            className="rounded-[6px] border-2 border-ink bg-cream p-7 shadow-[6px_8px_0_#1f1f1d]"
          >
            <h2 className="text-xs font-black uppercase tracking-[0.18em] text-ink/50">{group.cat}</h2>
            <ul className="mt-5 space-y-4">
              {group.items.map((item) => (
                <li key={item.name}>
                  <p className="text-lg font-black">{item.name}</p>
                  <p className="text-sm font-medium text-ink/65">{item.note}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-14">
        <Button href="/" variant="outline" size="lg">
          Back to home
        </Button>
      </div>
    </main>
  )
}