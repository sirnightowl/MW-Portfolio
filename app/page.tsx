import { pageMetadata } from '@/lib/metadata'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, MapPin } from 'lucide-react'
import Button from '@/components/common/Button'
import ContactForm from '@/components/contact/ContactForm'
import EmailContact from '@/components/contact/EmailContact'
import { projects } from '@/lib/data/projects'
import { articles } from '@/lib/data/articles'
import ArticleCard from '@/components/common/ArticleCard'
import ProjectCard from '@/components/common/ProjectCard'
import styles from './home.module.css'

export const metadata = pageMetadata({
  title: 'Martin Whitaker — Digital Interaction Designer',
  description: 'Digital interaction designer and front-end developer building accessible public services and characterful products.',
  path: '/',
})

export default function Home() {
  const [featuredProject, ...supportingProjects] = projects.filter((project) => project.isLive)
  const latestArticles = articles.filter((article) => article.published).sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3)

  return (
    <main id="main" tabIndex={-1}>
      <section className={`container-custom ${styles.hero}`} aria-labelledby="intro-title">
        <div className={styles.heroTop}>
          <p className="eyebrow">Martin Whitaker / Digital interaction designer</p>
          <p className={styles.availability}><span aria-hidden="true" />Available for select projects</p>
        </div>
        <div className={styles.heroGrid}>
          <h1 id="intro-title" className={styles.headline}>I design &amp; build<br /><span>accessible</span> digital products.</h1>
          <p className={styles.intro}>I&apos;m Martin, a designer and front-end developer in Norfolk. I work on public services at Norfolk County Council and build independent products on the side.</p>
          <div className={styles.actions}>
            <Button href="#work" size="sm">Explore my work <ArrowUpRight aria-hidden="true" className="ml-4 h-4 w-4" /></Button>
            <Link href="/contact" className={styles.textLink}>Let&apos;s talk <ArrowUpRight aria-hidden="true" size={16} /></Link>
          </div>
        </div>
        <p className={styles.experience}><span>12+ years building for the web</span><span className={styles.experienceSeparator} aria-hidden="true">/</span><span>Design, accessibility &amp; front-end development</span></p>
        <div className={styles.portrait}>
          <Image alt="Martin Whitaker" className="object-contain object-bottom" fill sizes="(min-width: 1334px) 400px, (min-width: 768px) 30vw, 220px" src="/images/martin-cutout.webp" />
        </div>
      </section>

      <section id="work" className={`container-custom ${styles.work}`} aria-labelledby="work-title">
        <div className={styles.sectionHeader}>
          <div><p className="eyebrow">Independent products</p><h2 id="work-title" className="display-title mt-3 text-3xl md:text-4xl">Selected work</h2></div>
          <span className={styles.sectionNote}>Design &amp; development / 01–03</span>
        </div>
        <div className="project-grid">
          <ProjectCard project={featuredProject} heading="h3" featured preload />
          {supportingProjects.map((project) => <ProjectCard key={project.id} project={project} heading="h3" />)}
        </div>
        <div className={styles.workFooter}>
          <p>More in progress: a planning workspace and a narrative horror game.</p>
          <Link href="/work" className={styles.textLink}>View all {projects.length} projects <ArrowUpRight aria-hidden="true" size={16} /></Link>
        </div>
      </section>

      <section id="about" className={`container-custom ${styles.section}`} aria-labelledby="about-title">
        <div className={styles.about}>
          <div className={styles.aboutCollage}>
            <div className={styles.aboutImage}>
              <Image alt="Martin with his family on a walk" className="object-cover object-center" fill sizes="(min-width: 768px) 340px, calc(100vw - 80px)" src="/images/about/about-portrait.webp" />
            </div>
            <p className={styles.location}><MapPin size={14} aria-hidden="true" /> Based in Norfolk, UK</p>
            <figure className={styles.bubbles}>
              <Image alt="Bubbles, Martin’s cat" src="/images/bubbles-cutout.webp" width={600} height={815} />
              <figcaption>Bubbles / studio supervisor</figcaption>
            </figure>
          </div>
          <div>
            <p className="eyebrow">A little about me</p>
            <h2 id="about-title" className="display-title mt-4 text-3xl md:text-5xl">Designer, developer,<br />occasional cat supervisor.</h2>
            <p className={styles.aboutCopy}>My work spans local government, agency websites, and independent products. Away from the screen, there are drones to fly, horror novels to read, and a cat called Bubbles to supervise.</p>
            <Link href="/about" className={`${styles.textLink} mt-6`}>More about me <ArrowUpRight aria-hidden="true" size={16} /></Link>
          </div>
        </div>
      </section>

      <section id="writing" className={`container-custom ${styles.section}`} aria-labelledby="writing-title">
        <div className={styles.sectionHeader}>
          <div><p className="eyebrow">The notebook</p><h2 id="writing-title" className="display-title mt-3 text-3xl md:text-4xl">From the notebook.</h2></div>
          <Link href="/blog" className={styles.textLink}>All writing <ArrowUpRight aria-hidden="true" size={16} /></Link>
        </div>
        <div className="article-grid">
          {latestArticles.map((article) => <ArticleCard key={article.id} article={article} heading="h3" />)}
        </div>
      </section>

      <section id="contact" className={`container-custom ${styles.section}`} aria-labelledby="contact-title">
        <div className={`${styles.contact} dark`} data-theme="dark">
          <div>
            <p className="eyebrow">Have something in mind?</p>
            <h2 id="contact-title" className={styles.contactTitle}>Let&apos;s make<br />something <span>useful.</span></h2>
            <p className={styles.aboutCopy}>I take on select freelance projects alongside my day job. Tell me a little about yours; I usually reply within a couple of days.</p>
            <div className={styles.email}><p className="eyebrow">Prefer to email directly?</p><EmailContact className="mt-2 inline-flex min-h-11 items-center gap-2 text-base font-bold underline underline-offset-4" /></div>
          </div>
          <div className={styles.contactForm}><ContactForm /></div>
        </div>
      </section>
    </main>
  )
}
