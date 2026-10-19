import { pageMetadata } from '@/lib/metadata'
import Button from '@/components/common/Button'
import PageIntro from '@/components/common/PageIntro'

export const metadata = pageMetadata({
  title: 'Uses',
  description: 'The tools, hardware, and setup Martin Whitaker reaches for to design and build accessible websites and products.',
  path: '/uses',
})

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
    <main id="main" tabIndex={-1}>
      <PageIntro eyebrow="Uses" title={<>What I reach for<br /><span>every day.</span></>} description="The tools, stack, and setup behind my design and front-end work — at Norfolk County Council and on my own products." note="A working toolkit / From paper to production" />

      <section aria-label="My toolkit" className="container-custom page-section">
        <div className="grid gap-x-16 gap-y-14 md:grid-cols-2">
          {groups.map((group, index) => (
            <div key={group.cat} className="tool-group">
              <div className="mb-5 flex items-center justify-between"><h2 className="display-title text-2xl">{group.cat}</h2><span className="category-label">0{index + 1}</span></div>
              <ul>
                {group.items.map((item) => (
                  <li key={item.name}>
                    <h3 className="font-bold leading-6">{item.name}</h3>
                    <p className="mt-1 text-sm leading-6 text-ink/65 dark:text-white/65">{item.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex justify-center">
          <Button href="/" variant="outline" size="lg">Back to home</Button>
        </div>
      </section>
    </main>
  )
}
