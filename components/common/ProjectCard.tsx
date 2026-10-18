import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/lib/types'

export default function ProjectCard({ project, heading: Heading = 'h2' }: { project: Project; heading?: 'h2' | 'h3' }) {
  return (
    <Link href={`/projects/${project.id}`} className="project-card group">
      <div className="project-card-image">
        <Image alt={project.imageAlt ?? `${project.title} screenshot`} className="object-cover transition-transform duration-500 group-hover:scale-[1.025]" style={{ objectPosition: project.imagePosition ?? 'center' }} fill sizes="(min-width: 1280px) 572px, (min-width: 640px) 50vw, 100vw" src={project.image} />
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="eyebrow !text-[10px]">{project.status} <span aria-hidden="true">·</span> {project.year}</p>
          <Heading className="display-title mt-2 text-2xl transition-colors group-hover:text-[#7751bb] dark:group-hover:text-lilac sm:text-3xl">{project.title}</Heading>
        </div>
        <span className="project-card-arrow"><ArrowUpRight aria-hidden="true" size={18} /></span>
      </div>
      <p className="mt-3 max-w-xl text-sm leading-6 text-ink/70 dark:text-white/70">{project.description}</p>
    </Link>
  )
}
