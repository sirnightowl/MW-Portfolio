import type { Metadata } from 'next'
import Image from 'next/image'
import Button from '@/components/common/Button'
import { Blob, Star } from '@/components/common/DecorativeShapes'
import Timeline from '@/components/about/Timeline'
import YouTubeFacade from '@/components/about/YouTubeFacade'

const traits = [
  { label: 'Cat & human dad', color: 'bg-coral' },
  { label: 'Horror nerd', color: 'bg-butter' },
  { label: 'Drone flyer', color: 'bg-sage' },
]

export const metadata: Metadata = {
  title: 'About',
  description: 'About Martin Whitaker: digital experience designer, front-end developer, accessibility advocate, and practical product builder.',
}

export default function AboutPage() {
  return (
    <main>
      <section className="container-custom pt-24 md:pt-32 pb-20 md:pb-28">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative">
            <div className="absolute -left-8 -top-8 -z-10 h-[140%] w-[120%] text-butter opacity-60 lg:-left-12 lg:-top-12">
              <Blob />
            </div>
            <div className="grid gap-5 sm:min-h-[620px] sm:grid-cols-2 sm:gap-7">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[6px] border-2 border-ink shadow-[8px_10px_0_#1f1f1d] sm:aspect-auto">
                <Image
                  alt="Martin"
                  className="object-cover object-center"
                  fill
                  sizes="(min-width: 1024px) 270px, 45vw"
                  src="/images/about/about-portrait.jpg"
                />
              </div>
              <div className="grid grid-cols-2 gap-5 sm:grid-cols-1 sm:gap-7">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[6px] border-2 border-ink shadow-[6px_8px_0_#1f1f1d] sm:aspect-auto">
                  <Image
                    alt="A personal travel snapshot"
                    className="object-cover"
                    fill
                    sizes="(min-width: 1024px) 270px, 45vw"
                    src="/images/about/about-landscape.jpg"
                  />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[6px] border-2 border-ink shadow-[6px_8px_0_#1f1f1d] sm:aspect-auto">
                  <Image
                    alt="A quiet personal moment"
                    className="object-cover"
                    fill
                    sizes="(min-width: 1024px) 270px, 45vw"
                    src="/images/about/about-wide.jpg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-ink/50">
              About me
            </p>
            <h1 className="mt-4 font-serif text-4xl font-black tracking-tight md:text-6xl">
              Practical builder, product brain, occasional cat supervisor.
            </h1>
            <div className="mt-8 flex flex-wrap gap-4">
              {traits.map((trait) => (
                <span
                  className={`${trait.color} rounded-[8px] border-2 border-ink px-5 py-3 text-base font-black shadow-[3px_3px_0_#1f1f1d]`}
                  key={trait.label}
                >
                  {trait.label}
                </span>
              ))}
            </div>
            <p className="mt-8 max-w-2xl text-xl leading-9 text-ink/70">
              I like interfaces that explain themselves, systems that survive real
              users, and details that make a product feel cared for. By day I design
              and build for Norfolk County Council — by night I build horror fan
              platforms, Kanban tools, and SEND resources.
            </p>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-ink/70">
              My approach is grounded in accessibility, user research, and
              collaboration. I believe the best digital services come from
              understanding the people who use them — whether that&apos;s a Norfolk
              resident accessing council services or a horror fan discovering their
              next favourite film.
            </p>
            <div className="mt-9">
              <Button href="mailto:martwhitty@gmail.com" size="lg" variant="secondary">
                Start a conversation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t-2 border-ink bg-paper py-20 md:py-28">
        <div className="container-custom">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-ink/50">
                What I do
              </p>
              <h2 className="mt-4 font-serif text-3xl font-black tracking-tight md:text-4xl">
                Digital experience design, front end build, and a bit of everything in between.
              </h2>
              <div className="mt-8 space-y-6 text-lg leading-8 text-ink/70">
                <p>
                  At Norfolk County Council I lead front end design and development
                  across a suite of public-facing websites. That means everything from
                  information architecture and wireframing through to prototyping,
                  user testing, and production-ready code. Accessibility isn&apos;t a
                  checklist item — it&apos;s baked into how I work.
                </p>
                <p>
                  On the side I build products that scratch my own itches.
                  Horrorometer exists because I wanted a proper horror-only review
                  platform. Kanaboards came from wanting AI coding agents to
                  participate in project tracking. SENDadvisor aims to make SEND
                  services more transparent for parents navigating the system.
                </p>
                <p>
                  I studied Interactive Media &amp; the Web at the University of
                  Wolverhampton (BA 1st), which gave me a foundation in both the
                  creative and technical sides of the web. Since then I&apos;ve worked
                  agency-side and in-house, building for accountants, estate agents,
                  SaaS products, and local government.
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-ink/50">
                Tools &amp; tech
              </p>
              <h2 className="mt-4 font-serif text-3xl font-black tracking-tight md:text-4xl">
                The things I reach for every day.
              </h2>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { cat: 'Front end', items: ['HTML', 'CSS / SCSS', 'JavaScript', 'TypeScript', 'jQuery', 'Nunjucks', 'Tailwind CSS'] },
                  { cat: 'Design', items: ['Figma', 'Adobe XD', 'Photoshop', 'Wireframing', 'Rapid prototyping', 'User testing'] },
                  { cat: 'CMS & tools', items: ['WordPress', 'CraftCMS', 'Sitecore', 'MySQL', 'Git', 'DevOps'] },
                  { cat: 'Practice', items: ['Accessibility', 'UX design', 'Interaction design', 'Responsive design', 'Design research', 'User testing'] },
                ].map((group) => (
                  <div key={group.cat} className="rounded-[6px] border-2 border-ink bg-cream p-5 shadow-[4px_5px_0_#1f1f1d]">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-ink/50 mb-3">{group.cat}</p>
                    <ul className="space-y-1.5">
                      {group.items.map((item) => (
                        <li key={item} className="text-sm font-semibold text-ink/80">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t-2 border-ink bg-cream py-20 md:py-28">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-ink/40">Beyond the screen</p>
                <Star aria-hidden="true" />
              </div>
              <h2 className="mt-4 font-serif text-3xl font-black tracking-tight md:text-4xl">
                Drone flying, horror novels, and a cat called Bubbles.
              </h2>
              <p className="mt-6 text-lg leading-8 text-ink/70">
                When I&apos;m not designing or coding, you&apos;ll probably find me with a
                controller in my hands — either flying my drone over the Norfolk
                countryside or working through my ever-growing pile of horror novels.
                I&apos;m also a big fan of immersive gaming, from narrative-driven
                adventures to anything with a good atmosphere.
              </p>
              <p className="mt-4 text-lg leading-8 text-ink/70">
                And yes, Bubbles the black cat makes regular appearances in meetings.
                She&apos;s basically the unofficial mascot.
              </p>
            </div>

            <YouTubeFacade />
          </div>
        </div>
      </section>

      <section className="border-t-2 border-ink bg-paper py-20 md:py-28">
        <div className="container-custom">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-ink/50">
            Timeline
          </p>
          <h2 className="mt-3 font-serif text-4xl font-black tracking-tight md:text-5xl">
            The path so far.
          </h2>
          <Timeline />
        </div>
      </section>

      <section className="border-t-2 border-ink py-12">
        <div className="container-custom">
          <div className="flex justify-center">
            <Button href="/" variant="outline" size="lg">
              Back to home
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}