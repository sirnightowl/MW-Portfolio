import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { notFound } from 'next/navigation'
import Button from '@/components/common/Button'
import { Squiggle } from '@/components/common/DecorativeShapes'
import { projects } from '@/lib/data/projects'

type ProjectPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((item) => item.id === slug)

  if (!project) return {}

  return {
    title: `${project.title} case study`,
    description: project.description,
    authors: [{ name: 'Martin Whitaker' }],
    openGraph: {
      title: `${project.title} — Martin Whitaker`,
      description: project.description,
      type: 'article',
      images: [{ url: project.image, alt: `${project.title} product interface` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} — Martin Whitaker`,
      description: project.description,
      images: [project.image],
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects.find((item) => item.id === slug)

  if (!project) notFound()

  const otherProjects = projects.filter((item) => item.id !== project.id)

  const creativeWorkLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    creator: {
      '@type': 'Person',
      name: 'Martin Whitaker',
      url: 'https://github.com/sirnightowl',
    },
    datePublished: `${project.year}`,
    keywords: project.technologies.join(', '),
    ...(project.liveUrl && { url: project.liveUrl }),
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkLd) }}
      />
      <article>
        <header className="container-custom pb-16 pt-28 md:pb-24 md:pt-36">
          <Button href="/#work" variant="ghost" size="sm">
            ← Back to selected work
          </Button>

          <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,0.8fr)] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3 text-sm font-black uppercase tracking-[0.16em] text-ink/50">
                <span>Case study</span>
                <span aria-hidden="true">·</span>
                <span>{project.status}</span>
              </div>
              <h1 className="mt-4 font-serif text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl md:text-7xl">
                {project.title}
              </h1>
              <p className="mt-7 max-w-3xl text-xl leading-9 text-ink/70 md:text-2xl md:leading-10">
                {project.longDescription}
              </p>

              <dl className="mt-10 grid gap-6 border-y-2 border-ink/15 py-7 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-black uppercase tracking-[0.18em] text-ink/45">My role</dt>
                  <dd className="mt-2 font-bold leading-6 text-ink/80">{project.role}</dd>
                </div>
                <div>
                  <dt className="text-xs font-black uppercase tracking-[0.18em] text-ink/45">Year / status</dt>
                  <dd className="mt-2 font-bold leading-6 text-ink/80">{project.year} · {project.status}</dd>
                </div>
              </dl>

              {project.liveUrl && (
                <div className="mt-9">
                  <Button href={project.liveUrl} target="_blank" rel="noreferrer" variant="primary" size="lg">
                    Visit live product
                  </Button>
                </div>
              )}
            </div>

            <div className="relative aspect-[16/10] overflow-hidden rounded-[12px] border-2 border-ink bg-white shadow-[4px_4px_0_#1f1f1d]">
              <Image
                alt={`${project.title} product interface`}
                className="object-contain"
                fill
                priority
                sizes="(min-width: 1024px) 48vw, calc(100vw - 32px)"
                src={project.image}
              />
            </div>
          </div>
        </header>

        <section className="border-y-2 border-ink bg-cream py-16 md:py-24">
          <div className="container-custom grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(320px,0.45fr)] lg:gap-24">
            <div className="space-y-14">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-ink/50">01 — The challenge</p>
                <h2 className="mt-4 font-serif text-3xl font-black tracking-tight md:text-5xl">{project.challengeTitle}</h2>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/70 md:text-xl md:leading-9">{project.challenge}</p>
              </div>
              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-ink/50">02 — The approach</p>
                <h2 className="mt-4 font-serif text-3xl font-black tracking-tight md:text-5xl">{project.approachTitle}</h2>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/70 md:text-xl md:leading-9">{project.approach}</p>
              </div>
              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-ink/50">03 — The outcome</p>
                <h2 className="mt-4 font-serif text-3xl font-black tracking-tight md:text-5xl">{project.outcomeTitle}</h2>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/70 md:text-xl md:leading-9">{project.outcome}</p>
              </div>
            </div>

            <aside className="h-fit rounded-[12px] border-2 border-ink bg-paper p-7 shadow-[4px_4px_0_#1f1f1d] lg:sticky lg:top-28">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-ink/50">What shipped</p>
              <ul className="mt-6 space-y-4">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 font-bold leading-6 text-ink/80">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-sage">
                      <Check aria-hidden="true" size={14} strokeWidth={3} />
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-sm font-black uppercase tracking-[0.18em] text-ink/50">Built with</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span key={technology} className="rounded-[5px] border-2 border-ink/70 bg-white px-3 py-1 text-sm font-black">
                    {technology}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="container-custom py-16 md:py-24">
          <div className="flex items-center gap-3">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-ink/40">More work</p>
            <Squiggle aria-hidden="true" />
          </div>
          <h2 className="mt-3 font-serif text-3xl font-black tracking-tight md:text-5xl">Keep exploring.</h2>
          <div className="mt-9 grid gap-5 md:grid-cols-2">
            {otherProjects.map((item) => (
              <Link
                key={item.id}
                href={`/projects/${item.id}`}
                className="group flex items-center justify-between rounded-[12px] border-2 border-ink bg-sage p-6 font-black shadow-[4px_4px_0_#1f1f1d] transition-transform hover:-translate-y-1"
              >
                <span className="text-2xl">{item.title}</span>
                <ArrowRight aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </section>
      </article>
    </main>
  )
}