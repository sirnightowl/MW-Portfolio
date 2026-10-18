import type { Metadata } from 'next'
import PageIntro from '@/components/common/PageIntro'
import ProjectCard from '@/components/common/ProjectCard'
import { projects } from '@/lib/data/projects'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Case studies from Martin Whitaker — accessible public services and characterful products, designed and built end to end.',
  openGraph: {
    title: 'Work — Martin Whitaker',
    type: 'website',
  },
}

export default function WorkPage() {
  return (
    <main id="main" tabIndex={-1}>
      <PageIntro eyebrow="Selected work" title={<>From first sketch<br />to <span>live product.</span></>} description="Self-directed products, from first sketch through architecture, accessibility, and production build — three live in production, one in active development." note={`${projects.length.toString().padStart(2, '0')} projects / Designed, built, and shipped end to end`} />

      <section aria-label="Project case studies" className="container-custom page-section">
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  )
}
