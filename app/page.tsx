import Image from 'next/image'
import { ArrowUpRight, Check } from 'lucide-react'
import Button from '@/components/common/Button'
import AnimatedCounter from '@/components/common/AnimatedCounter'
import ChevronUpRight from '@/components/common/ChevronUpRight'
import { Squiggle, Star } from '@/components/common/DecorativeShapes'
import Reveal from '@/components/common/Reveal'
import ContactForm from '@/components/contact/ContactForm'
import EmailContact from '@/components/contact/EmailContact'
import { projects } from '@/lib/data/projects'
import { articles } from '@/lib/data/articles'
import ArticleCard from '@/components/common/ArticleCard'
import ProjectCard from '@/components/common/ProjectCard'
import styles from './home.module.css'

const skills = ['Product design', 'Accessibility', 'UX', 'Design systems', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Figma']

const traits = [
  { label: 'Cat & human dad', color: 'bg-coral' },
  { label: 'Horror nerd', color: 'bg-butter' },
  { label: 'Drone flyer', color: 'bg-sage' },
]

const stats = [
  { to: 4, suffix: '', prefix: '', label: 'Products designed and built' },
  { to: 12, suffix: '+', prefix: '', label: 'Years building for the web' },
  { to: 11000, suffix: '+', prefix: '', label: 'Live listings in production' },
  { to: 153, suffix: '', prefix: '', label: 'Local authorities covered' },
]

const disciplines = [
  { num: '01', title: 'Design & UX', desc: 'Wireframes, prototypes, information architecture, and design systems that make dense information scannable.' },
  { num: '02', title: 'Front-end build', desc: 'Accessible, production-ready code in Next.js, TypeScript, and Tailwind \u2014 not just a polished screenshot.' },
  { num: '03', title: 'Accessibility', desc: 'WCAG baked in from the first sketch, not bolted on at the end. Focus states, semantics, and reduced motion.' },
  { num: '04', title: 'Product thinking', desc: 'From strategy through data platform work \u2014 I treat each product as something that has to survive real users.' },
]

const howIChecklist = [
  'Accessibility-first, from wireframe to production',
  'Design systems that scale across teams and products',
  'Rapid prototyping with real users in the loop',
  'Production code, not just handoff files',
]

export default function Home() {
  return (
    <main id="main" tabIndex={-1} className="overflow-x-clip">
      <section className={`${styles.hero} bg-night text-white`}>
        <div className={`container-custom ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}><span aria-hidden="true" />Digital interaction designer</p>
            <h1 className={styles.headline}>Useful digital<br className="hidden sm:block" /> products,{' '}<br /><span>designed with</span>{' '}<br /><span className={styles.intent}>intent.<Squiggle className={styles.underline} /></span></h1>
            <p className={styles.intro}>I&apos;m Martin. I design and build accessible public services and characterful products — from first sketch to a live, useful thing in people&apos;s hands.</p>
            <div className={styles.actions}>
              <Button href="#work" size="lg" className={styles.primaryAction}>Explore my work <ArrowUpRight aria-hidden="true" className="ml-5 h-5 w-5" /></Button>
              <Button href="/contact" size="lg" variant="ghost" className={styles.secondaryAction}>Let&apos;s talk <ChevronUpRight className="ml-2 h-4 w-4" /></Button>
            </div>
          </div>
          <div className={styles.portrait}>
            <div className={styles.portraitDisc} aria-hidden="true" />
            <div className={styles.orbit} aria-hidden="true" />
            <Star className={styles.portraitStar} />
            <span className={styles.portraitNote}>A human behind the pixels.</span>
            <div className={styles.portraitImage}>
              <Image alt="Martin Whitaker" className="object-cover object-top" fill preload sizes="(min-width: 1024px) 460px, (min-width: 640px) 420px, 86vw" src="/images/martin-cutout.png" />
            </div>
            <div className={styles.availability}><span aria-hidden="true" />Available for select projects<ArrowUpRight aria-hidden="true" size={15} /></div>
          </div>
          <div className={styles.heroFoot}>
            <span>Thoughtful design. Useful things. A little character.</span>
            <a href="#work">Scroll to explore <span aria-hidden="true">↓</span></a>
          </div>
        </div>
      </section>

      <section aria-label="Skills" className={`${styles.skillStrip} bg-white dark:bg-[#151326]`}>
        <div className={`container-custom ${styles.skillList}`}>
          {skills.map((skill) => <span key={skill}>{skill}</span>)}
        </div>
      </section>

      <section className="container-custom py-20 md:py-28">
        <Reveal>
        <div className="mb-14 max-w-2xl">
          <p className="eyebrow">By the numbers</p>
          <h2 className="display-title mt-3 text-4xl md:text-5xl">Real projects, designed and built.</h2>
          <p className="mt-5 text-lg leading-7 text-ink/65 dark:text-white/65">A few measurable outcomes from products I&apos;ve designed and built end to end.</p>
        </div>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <AnimatedCounter className={styles.stat} key={stat.label} to={stat.to} prefix={stat.prefix} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
        </Reveal>
      </section>

      <section id="disciplines" className="bg-lilacbg py-20 md:py-28 dark:bg-[#1a1530]">
        <div className="container-custom">
          <Reveal>
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <p className="eyebrow">What I do</p>
              <h2 className="display-title mt-3 text-4xl md:text-5xl">Tailored disciplines for the whole build.</h2>
            </div>
            <p className="max-w-md text-lg leading-7 text-ink/65 dark:text-white/65">From first sketch to production code — I cover the full path, not just one slice of it.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {disciplines.map((d, i) => (
              <Reveal key={d.num} delay={i * 100}>
                <div className={`${styles.discipline} group p-6 h-full`}>
                  <span className="display-title text-2xl text-ink/70 dark:text-white/70">{d.num}</span>
                  <h3 className="mt-4 text-xl font-black">{d.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink/65 dark:text-white/65">{d.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          </Reveal>
        </div>
      </section>

      <section className="container-custom py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <p className="eyebrow">How I work</p>
            <h2 className="display-title mt-3 text-4xl md:text-5xl">Better solutions for useful products.</h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-ink/65 dark:text-white/65">I design and build interfaces that explain themselves, systems that survive real users, and details that make a product feel cared for.</p>
            <ul className="mt-8 space-y-4">
              {howIChecklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base font-semibold text-ink/80 dark:text-white/80">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-ink/15 bg-butter/30 dark:border-white/20">
                    <Check aria-hidden="true" size={14} strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <Button href="#contact" variant="outline" size="lg">Get in touch <ArrowUpRight aria-hidden="true" className="ml-2 h-4 w-4" /></Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-butter">
              <Image alt="Martin out on a walk" className="object-cover object-center" fill sizes="(min-width: 1024px) 280px, 45vw" src="/images/about/about-portrait.jpg" />
            </div>
            <div className="grid grid-rows-2 gap-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-sage">
                <Image alt="A personal travel snapshot" className="object-cover" fill sizes="(min-width: 1024px) 280px, 45vw" src="/images/about/about-landscape.jpg" />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-sky">
                <Image alt="A quiet personal moment" className="object-cover" fill sizes="(min-width: 1024px) 280px, 45vw" src="/images/about/about-wide.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="relative scroll-mt-20 py-20 md:py-28">
        <div className="container-custom">
          <Squiggle className="absolute right-8 top-24 hidden h-5 w-24 rotate-6 text-coral md:block" />
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Projects</p>
              <h2 className="display-title mt-3 text-4xl md:text-5xl">Designed and built — end to end.</h2>
            </div>
            <p className="max-w-md text-lg leading-7 text-ink/70 dark:text-white/70">Two live products and two unreleased projects, from first sketch through architecture, accessibility, and build.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => <ProjectCard key={project.id} project={project} heading="h3" />)}
          </div>
          <div className="mt-10 text-center">
            <Button href="/work" variant="outline" size="md">View all</Button>
          </div>
        </div>
      </section>

      <section id="about" className="relative overflow-hidden bg-lilacbg py-20 md:py-28 dark:bg-[#1a1530]">
        <Star className="absolute right-[8%] top-16 h-8 w-8 rotate-12 text-grape" />
        <div className="container-custom grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-butter shadow-[0_30px_80px_rgba(83,61,128,0.18)] sm:aspect-[16/10] lg:aspect-[4/5]">
            <Image alt="Martin out on a walk" className="object-cover object-center" fill sizes="(min-width: 1024px) 560px, calc(100vw - 32px)" src="/images/about/about-portrait.jpg" />
          </div>
          <div>
            <p className="eyebrow">About me</p>
            <h2 className="display-title mt-4 text-4xl md:text-5xl">Practical builder, product brain, occasional cat supervisor.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/70 dark:text-white/70">I like interfaces that explain themselves and systems that survive real users. By day I design and build accessible public services for Norfolk County Council; by night I build horror experiences, planning tools, and SEND resources.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {traits.map((trait) => (
                <span className={`${trait.color} rounded-full border border-ink/10 px-4 py-2 text-sm font-black text-ink`} key={trait.label}>{trait.label}</span>
              ))}
            </div>
            <div className="mt-9"><Button href="/about" variant="outline" size="lg">Keep reading</Button></div>
          </div>
        </div>
      </section>

      <section id="writing" className="container-custom py-20 md:py-28">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Blog</p>
            <h2 className="display-title mt-3 text-4xl md:text-5xl">Notes on design, accessibility, and shipping solo.</h2>
          </div>
          <Button href="/blog" variant="ghost" size="md">View all <ArrowUpRight aria-hidden="true" className="ml-2 h-4 w-4" /></Button>
        </div>
        <div className="article-grid">
          {articles.filter((a) => a.published).slice(0, 3).map((article) => <ArticleCard key={article.id} article={article} heading="h3" />)}
        </div>
      </section>

      <section id="contact" className="container-custom scroll-mt-20 py-20 md:py-28">
        <div className="relative overflow-hidden rounded-[32px] bg-night p-7 text-white sm:p-10 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:p-16">
          <Squiggle className="absolute right-10 top-10 h-5 w-24 text-lilac" />
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-white/65">Contact</p>
            <h2 className="display-title mt-3 text-4xl md:text-5xl">Ready to build something useful?</h2>
            <p className="mt-6 max-w-md text-lg leading-7 text-white/60">Currently taking on small freelance projects alongside my day job. I usually reply within a couple of days.</p>
            <div className="mt-8 rounded-[20px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-white/60">Prefer email?</p>
              <EmailContact className="mt-1 inline-flex min-h-11 items-center gap-2 text-left text-lg font-black underline underline-offset-4" />
            </div>
          </div>
          <div className="mt-10 rounded-[24px] bg-white p-6 text-ink dark:bg-[#151326] dark:text-white sm:p-8 lg:mt-0"><ContactForm /></div>
        </div>
      </section>
    </main>
  )
}
