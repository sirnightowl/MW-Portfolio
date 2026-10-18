import type { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Star } from './DecorativeShapes'
import styles from './PageIntro.module.css'

interface PageIntroProps {
  eyebrow: string
  title: ReactNode
  description: ReactNode
  note?: ReactNode
  back?: { href: string; label: string }
  aside?: ReactNode
  children?: ReactNode
  variant?: 'default' | 'article' | 'project'
}

export default function PageIntro({ eyebrow, title, description, note, back, aside, children, variant = 'default' }: PageIntroProps) {
  return (
    <header className={`${styles.hero} ${styles[variant]}`}>
      <div className={`container-custom ${styles.inner}`}>
        {back && <Link href={back.href} className={styles.back}><ArrowLeft aria-hidden="true" size={15} />{back.label}</Link>}
        <div className={`${styles.layout} ${aside ? styles.split : ''}`}>
          <div className={styles.copy}>
            <p className={styles.kicker}><span aria-hidden="true" />{eyebrow}</p>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
            {children && <div className={styles.content}>{children}</div>}
          </div>
          {aside ? <div className={styles.aside}>{aside}</div> : <Star className={styles.star} />}
        </div>
        <div className={styles.footer}>
          <span>{note ?? 'Thoughtful design. Useful things. A little character.'}</span>
          <span className={styles.signature}>Martin Whitaker <span aria-hidden="true">/</span> {eyebrow}</span>
        </div>
      </div>
    </header>
  )
}
