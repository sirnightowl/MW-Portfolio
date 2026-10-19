import type { Metadata } from 'next'
import { ArrowDown, ArrowUpRight, Download, Mail, MapPin, Phone } from 'lucide-react'
import Button from '@/components/common/Button'
import PageIntro from '@/components/common/PageIntro'
import { cvDownload, cvExperience, cvSkills } from '@/lib/data/cv'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'CV',
  description: 'Martin Whitaker’s CV: digital design, front-end development, accessibility, work experience, skills, and education. Read online or download the PDF.',
  alternates: { canonical: '/cv' },
  openGraph: {
    title: 'CV — Martin Whitaker',
    description: 'Digital designer based in Norfolk. Experience, skills, education, and a downloadable PDF CV.',
    url: '/cv',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Martin Whitaker — Digital Interaction Designer' }],
  },
}

const sections = [
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills & tools' },
  { id: 'education', label: 'Education' },
  { id: 'beyond-work', label: 'Beyond work' },
]

export default function CvPage() {
  return (
    <main id="main" tabIndex={-1}>
      <PageIntro
        eyebrow="Curriculum vitae"
        title={<>Martin Whitaker<span>.</span><br />Digital designer.</>}
        description="Front-end design and development, user experience, and accessibility. Based in Norfolk, with experience across local government, agency websites, and SaaS interfaces."
        note="Experience, skills, and a little about the person behind the work."
        aside={
          <div className={styles.contact}>
            <p className={styles.contactLabel}>Let’s connect</p>
            <p className={styles.location}><MapPin size={17} aria-hidden="true" /> Based in Norfolk</p>
            <a href="mailto:martwhitty@gmail.com"><Mail size={17} aria-hidden="true" /><span>martwhitty@gmail.com</span><ArrowUpRight size={16} aria-hidden="true" /></a>
            <a href="tel:+447824661571"><Phone size={17} aria-hidden="true" /><span>07824 661571</span><ArrowUpRight size={16} aria-hidden="true" /></a>
            <div className={styles.profiles}>
              <a href="https://codepen.io/sirnightowl">CodePen <ArrowUpRight size={15} aria-hidden="true" /></a>
              <a href="https://dribbble.com/sirnightowl">Dribbble <ArrowUpRight size={15} aria-hidden="true" /></a>
            </div>
          </div>
        }
      >
        <div className={styles.actions}>
          <Button href={cvDownload} download="Martin-Whitaker-CV-2026.pdf" className="hero-button gap-2"><Download size={18} aria-hidden="true" /> Download CV <span className={styles.fileType}>PDF · 1 page</span></Button>
          <a href="#experience" className={styles.readLink}>Read online <ArrowDown size={16} aria-hidden="true" /></a>
        </div>
      </PageIntro>

      <div className={`container-custom ${styles.content}`}>
        <nav aria-label="CV sections" className={styles.contents}>
          {sections.map((section, index) => <a key={section.id} href={`#${section.id}`}><span aria-hidden="true">0{index + 1}</span>{section.label}</a>)}
        </nav>

        <div className={styles.columns}>
          <section id="experience" aria-labelledby="experience-title" className={styles.section}>
            <p className="eyebrow">01 / The work</p>
            <h2 id="experience-title" className={styles.sectionTitle}>Experience.</h2>
            <ol className={styles.experience}>
              {cvExperience.map((job, index) => (
                <li key={job.organisation} className={styles.job}>
                  <div className={styles.jobMarker} aria-hidden="true">{index === 0 && <span />}</div>
                  <p className={styles.dates}>{job.dates}</p>
                  <h3>{job.role}</h3>
                  <p className={styles.organisation}>{job.organisation}</p>
                  <p className={styles.jobLocation}>{job.location}</p>
                  <p className={styles.description}>{job.description}</p>
                </li>
              ))}
            </ol>
          </section>

          <section id="skills" aria-labelledby="skills-title" className={`${styles.section} ${styles.skills}`}>
            <p className="eyebrow">02 / The toolkit</p>
            <h2 id="skills-title" className={styles.sectionTitle}>Skills &amp; tools.</h2>
            {cvSkills.map((group) => (
              <div key={group.title} className={styles.skillGroup}>
                <h3>{group.title}</h3>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            ))}
          </section>

          <section id="education" aria-labelledby="education-title" className={`${styles.section} ${styles.educationSection}`}>
            <p className="eyebrow">03 / The foundation</p>
            <h2 id="education-title" className={styles.sectionTitle}>Education.</h2>
            <div className={styles.education}>
              <p className={styles.dates}>2009 — 2012 · Wolverhampton</p>
              <h3>Interactive Media &amp; the Web</h3>
              <p className={styles.organisation}>University of Wolverhampton</p>
              <p className={styles.degree}>BA · First-class honours</p>
              <p className={styles.description}>Design and production of interactive multimedia artefacts, including rich-media websites, edutainment games, e-learning applications, interactive videos, and branching stories. The course also involved project management and testing.</p>
            </div>
          </section>
        </div>

        <section id="beyond-work" aria-labelledby="beyond-work-title" className={styles.personal}>
          <div>
            <p className="eyebrow">04 / Beyond work</p>
            <h2 id="beyond-work-title" className={styles.sectionTitle}>A little bit nerdy.</h2>
          </div>
          <div>
            <p>My hobbies include drone flying, horror novels, and gaming. My favourite thing is spending time with my girlfriend and son. There’s also a black cat called Bubbles.</p>
            <a href="/about" className={styles.aboutLink}>More about me <ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
        </section>

        <div className={styles.downloadFooter}>
          <div><p className="eyebrow">Keep a copy</p><p>Prefer the PDF? Take it with you.</p></div>
          <Button href={cvDownload} download="Martin-Whitaker-CV-2026.pdf" variant="outline" className="gap-2"><Download size={18} aria-hidden="true" /> Download CV <span className={styles.fileType}>PDF · 1 page</span></Button>
        </div>
      </div>
    </main>
  )
}
