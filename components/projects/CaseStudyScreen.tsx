import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import styles from './VisualCaseStudy.module.css'

export interface CaseStudyScreenContent {
  id: string
  number: string
  title: string
  intro: string
  image: string
  width?: number
  height: number
  alt: string
  url?: string
  statusLabel?: string
  captureNote?: string
  label: string
  notes: [string, string][]
}

export default function CaseStudyScreen({ screen }: { screen: CaseStudyScreenContent }) {
  return (
    <section id={screen.id} tabIndex={-1} aria-labelledby={`${screen.id}-title`} className={styles.screenSection}>
      <div className={styles.sectionHeading}>
        <span className={styles.number} aria-hidden="true">{screen.number}</span>
        <div>
          <h2 id={`${screen.id}-title`} className={styles.title}>{screen.title}</h2>
          <p className={styles.body}>{screen.intro}</p>
        </div>
      </div>
      <figure className={styles.figure}>
        <div className={styles.frame}>
          <div className={styles.frameLabel}><span>{screen.label}</span><span>{screen.statusLabel ?? 'Current public interface'}</span></div>
          <a href={screen.image} aria-label={`View larger screenshot: ${screen.label}`}>
            <Image src={screen.image} alt={screen.alt} width={screen.width ?? 1249} height={screen.height} sizes="(min-width: 1280px) 1160px, calc(100vw - 40px)" className={styles.screenshot} />
          </a>
        </div>
        <figcaption><span>{screen.captureNote ?? 'Select the image to view it larger.'}</span>{screen.url && <a href={screen.url} aria-label={`View the live page: ${screen.label} (opens in a new tab)`} target="_blank" rel="noopener noreferrer">View the live page <ArrowUpRight size={14} aria-hidden="true" /></a>}</figcaption>
      </figure>
      <ol role="list" className={styles.notes}>
        {screen.notes.map(([title, text], index) => (
          <li key={title}><span className={styles.noteNumber} aria-hidden="true">{index + 1}</span><h3>{title}</h3><p>{text}</p></li>
        ))}
      </ol>
    </section>
  )
}
