import Image from 'next/image'
import { Star } from '@/components/common/DecorativeShapes'
import Button from '@/components/common/Button'
import ContactForm from '@/components/contact/ContactForm'
import { projects } from '@/lib/data/projects'

const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'SCSS', 'jQuery', 'PHP', 'Figma', 'Accessibility', 'UX']

const traits = [
  { label: 'Cat & human dad', color: 'bg-coral' },
  { label: 'Horror nerd', color: 'bg-butter' },
  { label: 'Drone flyer', color: 'bg-sage' },
]

const proofPoints = [
  'Accessibility-first work for Norfolk County Council',
  '11k+ SEND listings shipped',
  '3 live products',
]

export default function Home() {
  return (
    <main>
      <section className="container-custom grid items-end gap-8 pt-16 lg:min-h-[680px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pt-20">
        <div className="pb-6 pt-8 sm:pb-10 lg:pb-24 lg:pt-0">
          <p className="mb-5 text-lg font-medium text-ink/70">Hi, I&apos;m Martin.</p>
<h1 className="max-w-3xl font-serif text-[2.75rem] font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Accessible public services by day, characterful products by night.
            </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/70 sm:mt-7 sm:text-xl">
            I design and build accessible, user-centered websites and interfaces for Norfolk County Council — and ship my own products (Horrorometer, Kanaboards, SENDadvisor) on the side.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row">
            <Button href="#work" size="lg">
              View projects
            </Button>
            <Button href="#contact" size="lg" variant="outline">
              Get in touch
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-black uppercase tracking-[0.14em] text-ink/55">
            {proofPoints.map((point) => (
              <li key={point} className="flex items-center gap-2">
                <Star aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto flex min-h-[300px] w-full max-w-[520px] items-end justify-center sm:min-h-[380px] lg:mr-0 lg:min-h-[520px]">
          <div className="absolute bottom-4 left-1/2 h-[280px] w-[280px] -translate-x-1/2 rounded-[43%_57%_50%_50%/55%_42%_58%_45%] border-2 border-ink bg-sage shadow-[6px_6px_0_#1f1f1d] sm:h-[390px] sm:w-[390px] lg:bottom-12 lg:h-[440px] lg:w-[440px] lg:shadow-[8px_8px_0_#1f1f1d]" />
          <div className="absolute bottom-24 right-2 rounded-[8px] border-2 border-ink bg-butter px-3 py-1 text-sm font-black shadow-[3px_3px_0_#1f1f1d] sm:right-6 lg:right-0">
            QA
          </div>
          <div className="absolute left-2 top-2 rotate-[-3deg] rounded-[8px] border-2 border-ink bg-paper px-4 py-3 shadow-[3px_3px_0_#1f1f1d] sm:left-0 lg:-left-14 lg:top-28">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-ink/50">
              Build buddy
            </p>
            <p className="mt-1 text-xl font-black">Bubbles</p>
          </div>
          <Image
            alt="Bubbles the black cat"
            className="relative z-10 h-auto w-full max-w-[270px] sm:max-w-[350px] lg:max-w-[390px]"
            height={1166}
            priority
            sizes="(min-width: 1024px) 390px, (min-width: 640px) 350px, 310px"
            src="/images/bubbles.webp"
            width={859}
          />
        </div>
      </section>

      <section id="skills" className="scroll-mt-20 border-y-2 border-ink bg-cream py-7">
        <div className="container-custom flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-black uppercase tracking-[0.16em] text-ink/60">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section id="work" className="container-custom scroll-mt-20 bg-paper py-20 md:py-28">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-ink/50">
              Selected work
            </p>
            <h2 className="mt-3 font-serif text-4xl font-black tracking-tight md:text-5xl">
              Useful builds with a bit of character.
            </h2>
          </div>
          <p className="max-w-md text-lg leading-7 text-ink/70">
            Three self-directed products, from first sketch through architecture,
            accessibility, and production build.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project) => {
            const style = project.cardStyle
            return (
            <article
              className={`${style.bg} ${style.border} ${style.shadow} grid gap-10 overflow-hidden rounded-[12px] border-2 p-10 sm:p-12 md:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.72fr)] md:items-center md:p-16 lg:grid-cols-[minmax(0,0.88fr)_minmax(400px,0.78fr)] lg:gap-12 xl:grid-cols-[minmax(0,0.85fr)_minmax(460px,0.8fr)]`}
              key={project.id}
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
                <h3 className={`mt-5 font-serif text-3xl font-black tracking-tight md:text-5xl ${style.text}`}>{project.title}</h3>
                {project.leadMetric && (
                  <p className="mt-3">
                    <span className={`inline-block rounded-r-[6px] border-y-2 border-r-2 border-ink px-3 py-1 text-sm font-bold tracking-[0.04em] ${project.cardStyle.text === 'text-paper' ? 'border-l-4 border-coral bg-paper/15 text-paper' : 'border-l-4 border-ink bg-cream text-ink'}`}>
                      {project.leadMetric}
                    </span>
                  </p>
                )}
                <p className={`mt-5 max-w-2xl text-lg leading-8 ${style.textDescription}`}>
                  {project.description}
                </p>
                <div className="mt-8">
                  <Button href={`/projects/${project.id}`} variant="primary" size="md" className={style.text === 'text-paper' ? 'bg-white' : 'bg-white'}>
                    Read case study
                  </Button>
                </div>
              </div>

              <div className="relative min-h-[230px] overflow-hidden rounded-[8px] bg-white/90 sm:min-h-[300px] md:min-h-[340px] lg:min-h-[380px]">
                <Image
                  alt={`${project.title} screenshot`}
                  className="object-contain object-center"
                  fill
                  sizes="(min-width: 1280px) 460px, (min-width: 1024px) 400px, (min-width: 768px) 320px, calc(100vw - 64px)"
                  src={project.image}
                />
              </div>
            </article>
          )
          })}
        </div>
      </section>

      <section id="about" className="border-y-2 border-ink bg-paper py-20 md:py-28">
        <div className="container-custom grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[6px] border-2 border-ink shadow-[8px_10px_0_#1f1f1d] sm:aspect-[16/10] lg:aspect-[4/5]">
            <Image
              alt="Martin out on a walk"
              className="object-cover object-center"
              fill
              sizes="(min-width: 1024px) 560px, calc(100vw - 32px)"
              src="/images/about/about-portrait.jpg"
            />
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-ink/50">
              About me
            </p>
            <h2 className="mt-4 font-serif text-4xl font-black tracking-tight md:text-5xl">
              Practical builder, product brain, occasional cat supervisor.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/70">
              I like interfaces that explain themselves and systems that survive real users. By day I design and build accessible public services for Norfolk County Council; by night I ship horror fan platforms, Kanban tools, and SEND resources.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {traits.map((trait) => (
                <span
                  className={`${trait.color} rounded-[6px] border-2 border-ink px-4 py-2 text-sm font-black shadow-[3px_4px_0_#1f1f1d]`}
                  key={trait.label}
                >
                  {trait.label}
                </span>
              ))}
            </div>
            <div className="mt-9">
              <Button href="/about" variant="outline" size="lg">
                Keep reading
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="container-custom scroll-mt-20 bg-paper py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-ink/50">
              Contact
            </p>
            <h2 className="mt-3 font-serif text-4xl font-black tracking-tight md:text-5xl">
              Got a web app, portfolio, or useful little tool in mind?
            </h2>
            <p className="mt-6 max-w-md text-lg leading-7 text-ink/70">
              Currently taking on small freelance projects alongside my day job. I usually reply within a couple of days.
            </p>
            <div className="mt-8 rounded-[6px] border-2 border-ink bg-cream p-5 shadow-[4px_5px_0_#1f1f1d]">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-ink/50">Prefer email?</p>
              <a
                href="mailto:martwhitty@gmail.com"
                className="mt-1 block text-lg font-black underline underline-offset-4"
              >
                martwhitty@gmail.com
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  )
}