import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/lib/types'
import ProjectArtwork from './ProjectArtwork'

export default function ProjectCard({ project, heading: Heading = 'h2', featured = false, preload = false }: { project: Project; heading?: 'h2' | 'h3'; featured?: boolean; preload?: boolean }) {
  return (
    <Link href={`/projects/${project.id}`} className={`project-card group${featured ? ' project-card-featured' : ''}`}>
      <ProjectArtwork project={project} preload={preload} showDetail sizes={featured ? '(min-width: 1280px) 680px, (min-width: 768px) 60vw, calc(100vw - 40px)' : undefined} />
      <div className="project-card-content">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="project-card-meta"><span className={`project-status${project.isLive ? ' project-status-live' : ''}`} aria-hidden="true" />{project.status}<span aria-hidden="true">/</span>{project.category}</p>
            <Heading className="display-title mt-3 text-2xl group-hover:text-[#7751bb] dark:group-hover:text-lilac sm:text-3xl">{project.title}</Heading>
          </div>
          {!featured && <span className="project-card-arrow"><ArrowUpRight aria-hidden="true" size={18} /></span>}
        </div>
        <p className="project-card-description">{project.description}</p>
        {featured && <><p className="project-card-focus">{project.summary.decision}</p><span className="project-card-read">Read the case study <ArrowUpRight aria-hidden="true" size={17} /></span></>}
      </div>
    </Link>
  )
}
