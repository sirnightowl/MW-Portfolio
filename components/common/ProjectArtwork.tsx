import Image from 'next/image'
import type { Project } from '@/lib/types'
import styles from './ProjectArtwork.module.css'

const themes: Record<string, string> = {
  sendadvisor: 'sendadvisor',
  horrorometer: 'horrorometer',
  'lush-svg': 'lush',
  kanaboards: 'kanaboards',
  'stay-with-me-deep-sea': 'deepsea',
}

const details: Record<string, { src: string; label: string }> = {
  sendadvisor: { src: '/images/projects/sendadvisor-case-study/results-with-header.webp', label: 'Find / filter / explore' },
  horrorometer: { src: '/images/projects/horrorometer-case-study/title-with-header.webp', label: 'Discover / watch / review' },
  'lush-svg': { src: '/images/projects/lush-svg-case-study/editor.webp', label: 'Choose / customise / export' },
}

export default function ProjectArtwork({ project, preload = false, showDetail = false, sizes = '(min-width: 1280px) 572px, (min-width: 640px) 50vw, calc(100vw - 40px)' }: { project: Project; preload?: boolean; showDetail?: boolean; sizes?: string }) {
  const theme = themes[project.id]
  const detail = showDetail ? details[project.id] : undefined
  return (
    <div className={`${styles.stage} ${theme ? styles[theme] : ''} ${detail ? styles.showcase : ''}`}>
      <div className={styles.screen}>
        <Image alt={project.imageAlt ?? `${project.title} interface`} src={project.image} fill sizes={sizes} preload={preload} fetchPriority={preload ? 'high' : undefined} className={styles.image} />
      </div>
      {detail && <><span className={styles.caption} aria-hidden="true">{detail.label}</span><div className={styles.detail} aria-hidden="true"><Image alt="" src={detail.src} fill sizes="(min-width: 768px) 190px, 100px" className={styles.image} /></div></>}
    </div>
  )
}
