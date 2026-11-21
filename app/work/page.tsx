import { pageMetadata } from '@/lib/metadata'
import PageIntro from '@/components/common/PageIntro'
import ProjectCard from '@/components/common/ProjectCard'
import { projects } from '@/lib/data/projects'

export const metadata = pageMetadata({
  title: 'Work',
  description: 'Case studies from Martin Whitaker — accessible public services and characterful products, designed and built end to end.',
  path: '/work',
})

export default function WorkPage() {
  return (
    <main id="main" tabIndex={-1}>
      <PageIntro eyebrow="The portfolio" variant="compact" title={<>Selected <span>work.</span></>} description="Public information, horror discovery, creative tools, and a couple of things still taking shape." note="Three live products / Two unreleased projects" />

      <section aria-label="Project case studies" className="container-custom page-section">
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} featured={index === 0} preload={index === 0} />
          ))}
        </div>
      </section>
    </main>
  )
}
