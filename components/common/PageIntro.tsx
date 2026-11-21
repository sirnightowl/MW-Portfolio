import type { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import styles from './PageIntro.module.css'

interface PageIntroProps {
  eyebrow: string
  title: ReactNode
  description: ReactNode
  note?: ReactNode
  back?: { href: string; label: string }
  aside?: ReactNode
  children?: ReactNode
  variant?: 'default' | 'article' | 'project' | 'compact'
}

export default function PageIntro({ eyebrow, title, description, note, back, aside, children, variant = 'default' }: PageIntroProps) {
  return (
    <header className={`${styles.hero} ${styles[variant] ?? ''}`}>
      <div className={`container-custom ${styles.inner}`}>
        {back && <Link href={back.href} className={styles.back}><ArrowLeft aria-hidden="true" size={15} />{back.label}</Link>}
        <div className={`${styles.layout} ${aside ? styles.split : ''}`}>
          <div className={styles.copy}>
            <p className={styles.kicker}><span aria-hidden="true" />{eyebrow}</p>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
            {children && <div className={styles.content}>{children}</div>}
          </div>
          {aside && <div className={styles.aside}>{aside}</div>}
        </div>
        {note && <div className={styles.footer}>{note}</div>}
      </div>
    </header>
  )
}
