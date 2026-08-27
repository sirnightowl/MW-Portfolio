import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { projects } from '@/lib/data/projects'

export const metadata: Metadata = {
  title: 'Work',
  description: 'All of Martin Whitaker\'s shipped products and case studies — accessible public services and characterful side products.',
  openGraph: {
    title: 'Work — Martin Whitaker',
    type: 'website',
  },
}

export default function WorkPage() {
  return (
    <main className="container-custom pt-28 pb-20 md:pt-36 md:pb-28">
      <p className="text-sm font-black uppercase tracking-[0.2em] text-ink/50">Work</p>
      <h1 className="mt-3 text-5xl font-black tracking-normal md:text-7xl">
        Useful builds with a bit of character.
      </h1>
      <p className="mt-6 max-w-2xl text-xl leading-8 text-ink/70">
        Three self-directed products, from first sketch through architecture, accessibility, and production build — all currently shipping.
      </p>

      <ul className="mt-12 grid gap-8">
        {projects.map((project) => {
          const style = project.cardStyle
          return (
            <li key={project.id}>
              <Link
                href={`/projects/${project.id}`}
                className={`group grid gap-8 overflow-hidden rounded-[6px] border-2 p-8 sm:p-10 md:grid-cols-[minmax(0,0.9fr)_minmax(280px,0.6fr)] md:items-center md:p-12 lg:gap-12 ${style.bg} ${style.border} ${style.shadow} transition-transform hover:-translate-y-1`}
              >
                <div className="relative z-10">
                  <div className={`flex flex-wrap items-center gap-3 text-sm font-black uppercase tracking-[0.18em] ${style.textMuted}`}>
                    <span>{project.status} · {project.year}</span>
                    {project.isLive && (
                      <span className="flex items-center gap-1.5 rounded-full border-2 border-current px-2.5 py-0.5 text-xs">
                        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-current" />
                        Live
                      </span>
                    )}
                  </div>
                  <h2 className={`mt-4 text-3xl font-black md:text-4xl ${style.text}`}>{project.title}</h2>
                  <p className={`mt-4 max-w-2xl text-lg leading-7 ${style.textDescription}`}>{project.description}</p>
                  <span className={`mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] ${style.text}`}>
                    Read case study
                    <ArrowRight aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
                <div className="relative min-h-[200px] overflow-hidden rounded-[4px] bg-white/90 sm:min-h-[260px] md:min-h-[300px]">
                  <Image
                    alt={`${project.title} screenshot`}
                    className="object-contain object-center"
                    fill
                    sizes="(min-width: 768px) 360px, calc(100vw - 64px)"
                    src={project.image}
                  />
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </main>
  )
}