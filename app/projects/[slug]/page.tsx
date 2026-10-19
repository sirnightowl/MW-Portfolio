import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowUpRight, Check } from 'lucide-react'
import { notFound } from 'next/navigation'
import Button from '@/components/common/Button'
import { Squiggle } from '@/components/common/DecorativeShapes'
import PageIntro from '@/components/common/PageIntro'
import ProjectCard from '@/components/common/ProjectCard'
import SendadvisorCaseStudy from '@/components/projects/SendadvisorCaseStudy'
import HorrorometerCaseStudy from '@/components/projects/HorrorometerCaseStudy'
import KanaboardsCaseStudy from '@/components/projects/KanaboardsCaseStudy'
import { projects } from '@/lib/data/projects'
import { jsonLd, SITE_URL } from '@/lib/site'

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
      images: [{ url: project.image, alt: project.imageAlt ?? `${project.title} product interface` }],
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
    creator: { '@type': 'Person', name: 'Martin Whitaker', url: 'https://github.com/sirnightowl' },
    dateModified: project.reviewedAt,
    keywords: project.technologies.join(', '),
    mainEntityOfPage: `${SITE_URL}/projects/${project.id}`,
    ...(project.isLive && project.liveUrl && { url: project.liveUrl }),
  }

  return (
    <main id="main" tabIndex={-1}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(creativeWorkLd) }} />
      <article>
        <PageIntro
          eyebrow="Case study"
          title={project.title}
          description={project.longDescription ?? project.description}
          variant="project"
          back={{ href: '/work', label: 'Back to selected work' }}
          note={project.leadMetric ?? `${project.year} / ${project.status}`}
          aside={<div className="relative aspect-[16/11] overflow-hidden rounded-xl border border-white/15 bg-cream"><Image alt={project.imageAlt ?? `${project.title} product interface`} className="object-cover" style={{ objectPosition: project.imagePosition ?? 'center' }} fill preload sizes="(min-width: 1024px) 500px, calc(100vw - 40px)" src={project.image} /></div>}
        >
          {project.isLive && project.liveUrl && (
            <Button href={project.liveUrl} target="_blank" rel="noopener noreferrer" size="lg" className="hero-button">Visit live product <ArrowUpRight aria-hidden="true" className="ml-4 h-4 w-4" /></Button>
          )}
        </PageIntro>

        <div className="container-custom">
          <dl className="grid gap-6 border-b border-ink/15 py-8 dark:border-white/15 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/65 dark:text-white/65">My role</dt>
              <dd className="mt-2 text-sm font-medium leading-6 text-ink/85 dark:text-white/85">{project.role}</dd>
            </div>
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/65 dark:text-white/65">Reviewed / status</dt>
              <dd className="mt-2 text-sm font-medium leading-6 text-ink/85 dark:text-white/85">{new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(project.reviewedAt))} · {project.status}</dd>
            </div>
          </dl>
        </div>

        {project.id === 'sendadvisor' ? (
          <SendadvisorCaseStudy project={project} />
        ) : project.id === 'horrorometer' ? (
          <HorrorometerCaseStudy project={project} />
        ) : project.id === 'kanaboards' ? (
          <KanaboardsCaseStudy project={project} />
        ) : (
          <>
            {project.gallery && (
              <section className="container-custom pt-14 md:pt-20" aria-labelledby="project-gallery-title">
                <p className="eyebrow">Inside the experience</p>
                <h2 id="project-gallery-title" className="section-heading mt-3">The world behind the messages.</h2>
                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  {project.gallery.map((item) => (
                    <figure key={item.src}>
                      <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-ink/15 bg-night dark:border-white/15">
                        <Image src={item.src} alt={item.alt} fill sizes="(min-width: 1280px) 572px, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                      </div>
                      <figcaption className="mt-3 text-sm leading-6 text-ink/70 dark:text-white/70">{item.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            )}

            <section className="page-section">
              <div className="container-custom grid gap-12 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] lg:gap-16">
                <div className="space-y-14">
                  <section className="case-section">
                    <p className="eyebrow">01 — The challenge</p>
                    <h2 className="section-heading mt-3">{project.challengeTitle}</h2>
                    <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/70 dark:text-white/70">{project.challenge}</p>
                  </section>
                  <section className="case-section">
                    <p className="eyebrow">02 — The approach</p>
                    <h2 className="section-heading mt-3">{project.approachTitle}</h2>
                    <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/70 dark:text-white/70">{project.approach}</p>
                  </section>
                  <section className="case-section">
                    <p className="eyebrow">03 — The outcome</p>
                    <h2 className="section-heading mt-3">{project.outcomeTitle}</h2>
                    <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/70 dark:text-white/70">{project.outcome}</p>
                  </section>
                </div>
                <aside className="surface-card h-fit bg-lilacbg p-6 dark:bg-[#1a1530] sm:p-7">
                  <p className="eyebrow">{project.isLive ? 'Implemented capabilities' : 'In the unreleased build'}</p>
                  <ul className="mt-6 space-y-4">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm font-medium leading-6 text-ink/80 dark:text-white/80">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-butter/40">
                          <Check aria-hidden="true" size={14} strokeWidth={3} />
                        </span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <p className="eyebrow mt-8">Built with</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span key={technology} className="tag">{technology}</span>
                    ))}
                  </div>
                </aside>
              </div>
            </section>
          </>
        )}

        <section className="container-custom pb-16 md:pb-24">
          <div className="flex items-center gap-3">
            <p className="eyebrow">More work</p>
            <Squiggle aria-hidden="true" />
          </div>
          <h2 className="display-title mt-3 text-3xl md:text-5xl">Keep exploring.</h2>
          <div className="mt-9 grid gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((item) => (
              <ProjectCard key={item.id} project={item} heading="h3" />
            ))}
          </div>
        </section>
      </article>
    </main>
  )
}
