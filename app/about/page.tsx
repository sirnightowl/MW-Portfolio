import { pageMetadata } from '@/lib/metadata'
import Image from 'next/image'
import Button from '@/components/common/Button'
import PageIntro from '@/components/common/PageIntro'
import Timeline from '@/components/about/Timeline'
import YouTubeFacade from '@/components/about/YouTubeFacade'
import { cvDownload } from '@/lib/data/cv'

const traits = [
  { label: 'Cat & human dad', color: 'bg-coral' },
  { label: 'Horror nerd', color: 'bg-butter' },
  { label: 'Drone flyer', color: 'bg-sage' },
]

export const metadata = pageMetadata({
  title: 'About',
  description: 'About Martin Whitaker: digital experience designer, front-end developer, accessibility advocate, and practical product builder.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <main id="main" tabIndex={-1}>
      <PageIntro
        eyebrow="About me"
        title={<>Practical builder,<br /><span>product brain,</span><br />occasional cat supervisor.</>}
        description="I like interfaces that explain themselves and systems that survive real users. By day I design and build for Norfolk County Council — by night I build horror fan platforms, Kanban tools, and SEND resources."
        note="Designer, developer, and a human with a few side quests."
        aside={
          <div className="grid grid-cols-2 items-center gap-3 sm:gap-4">
            <div className="relative aspect-[4/5] -rotate-2 overflow-hidden rounded-xl bg-butter">
              <Image alt="Martin with his family on a walk" className="object-cover object-center" fill preload fetchPriority="high" sizes="(min-width: 1024px) 240px, 45vw" src="/images/about/about-portrait.webp" />
            </div>
            <div className="grid grid-rows-2 gap-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-sage">
                <Image alt="A personal travel snapshot" className="object-cover" fill sizes="(min-width: 1024px) 280px, 45vw" src="/images/about/about-landscape.webp" />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-sky">
                <Image alt="A quiet personal moment" className="object-cover" fill sizes="(min-width: 1024px) 280px, 45vw" src="/images/about/about-wide.webp" />
              </div>
            </div>
          </div>
        }
      >
        <div className="flex flex-wrap gap-2">
          {traits.map((trait) => <span className={`${trait.color} rounded-md px-3 py-2 text-[11px] font-bold text-night`} key={trait.label}>{trait.label}</span>)}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="/cv" className="hero-button">Read my CV</Button>
          <Button href={cvDownload} download="Martin-Whitaker-CV-2026.pdf" className="border-white/30 bg-transparent text-white hover:bg-white/10">Download CV (PDF)</Button>
        </div>
      </PageIntro>

      <section className="container-custom page-section">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow">What I do</p>
            <h2 className="display-title mt-3 text-3xl md:text-4xl">Digital experience design, front end build, and a bit of everything in between.</h2>
            <div className="mt-8 space-y-6 text-lg leading-8 text-ink/70 dark:text-white/70">
              <p>At Norfolk County Council I lead front end design and development across a suite of public-facing websites. That means everything from information architecture and wireframing through to prototyping, user testing, and production-ready code. Accessibility isn&apos;t a checklist item — it&apos;s baked into how I work.</p>
              <p>On the side I build products that scratch my own itches. Horrorometer exists because I wanted a proper horror-only review platform. SENDadvisor aims to make SEND services more transparent for parents navigating the system. I&apos;m also developing two unreleased projects: Kanaboards, a planning workspace for people and AI agents, and Stay With Me: Deep Sea, a narrative horror game.</p>
              <p>I studied Interactive Media &amp; the Web at the University of Wolverhampton (BA 1st), which gave me a foundation in both the creative and technical sides of the web. Since then I&apos;ve worked agency-side and in-house, building for accountants, estate agents, SaaS products, and local government.</p>
            </div>
          </div>
          <div>
            <p className="eyebrow">Tools &amp; tech</p>
            <h2 className="display-title mt-3 text-3xl md:text-4xl">The things I reach for every day.</h2>
            <div className="mt-8 grid gap-x-6 gap-y-8 sm:grid-cols-2">
              {[
                { cat: 'Front end', items: ['HTML', 'CSS / SCSS', 'JavaScript', 'TypeScript', 'jQuery', 'Nunjucks', 'Tailwind CSS'] },
                { cat: 'Design', items: ['Figma', 'Adobe XD', 'Photoshop', 'Wireframing', 'Rapid prototyping', 'User testing'] },
                { cat: 'CMS & tools', items: ['WordPress', 'CraftCMS', 'Sitecore', 'MySQL', 'Git', 'DevOps'] },
                { cat: 'Practice', items: ['Accessibility', 'UX design', 'Interaction design', 'Responsive design', 'Design research', 'User testing'] },
              ].map((group) => (
                <div key={group.cat} className="rule-panel">
                  <p className="eyebrow mb-3">{group.cat}</p>
                  <ul className="space-y-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm font-semibold text-ink/80 dark:text-white/80">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section bg-lilacbg dark:bg-[#1a1530]">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow">Beyond the screen</p>
              <h2 className="display-title mt-3 text-3xl md:text-4xl">Drone flying, horror novels, and a cat called Bubbles.</h2>
              <p className="mt-6 text-lg leading-8 text-ink/70 dark:text-white/70">When I&apos;m not designing or coding, you&apos;ll probably find me with a controller in my hands — either flying my drone over the Norfolk countryside or working through my ever-growing pile of horror novels. I&apos;m also a big fan of immersive gaming, from narrative-driven adventures to anything with a good atmosphere.</p>
              <p className="mt-4 text-lg leading-8 text-ink/70 dark:text-white/70">And yes, Bubbles the black cat makes regular appearances in meetings. She&apos;s basically the unofficial mascot.</p>
            </div>
            <YouTubeFacade />
          </div>
        </div>
      </section>

      <section className="container-custom page-section">
        <p className="eyebrow">Timeline</p>
        <h2 className="display-title mt-3 text-3xl md:text-5xl">The path so far.</h2>
        <Timeline />
      </section>

      <section className="container-custom pb-20">
        <div className="flex justify-center">
          <Button href="/" variant="outline" size="lg">Back to home</Button>
        </div>
      </section>
    </main>
  )
}
