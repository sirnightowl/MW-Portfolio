import { type TimelineEntry as TimelineEntryData, TimelineEntryType } from '@/lib/types'
import { Briefcase, Code2, Heart, GraduationCap } from 'lucide-react'
import { cn } from '@/lib/utils'

const typeStyles: Record<TimelineEntryType, { dot: string; icon: React.ReactNode }> = {
  job: { dot: 'bg-coral', icon: <Briefcase size={16} strokeWidth={2.5} /> },
  project: { dot: 'bg-lilac', icon: <Code2 size={16} strokeWidth={2.5} /> },
  life: { dot: 'bg-butter', icon: <Heart size={16} strokeWidth={2.5} /> },
  education: { dot: 'bg-sage', icon: <GraduationCap size={16} strokeWidth={2.5} /> },
}

interface TimelineEntryProps {
  entry: TimelineEntryData
}

function Content({ entry }: { entry: TimelineEntryData }) {
  return (
    <div className="col-start-2 min-w-0 sm:col-start-auto">
      <h3 className="text-xl font-bold tracking-tight">{entry.title}</h3>
      {entry.subtitle && <p className="mt-1 text-base font-semibold text-ink/65 dark:text-white/65">{entry.subtitle}</p>}
      <p className="mt-2 text-base leading-7 text-ink/70 dark:text-white/70">{entry.description}</p>
      {entry.tags && entry.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {entry.tags.map((tag) => (
            <span key={tag} className="tag text-ink/70 dark:text-white/70">{tag}</span>
          ))}
        </div>
      )}
    </div>
  )
}

function Dot({ entry }: { entry: TimelineEntryData }) {
  const style = typeStyles[entry.type]
  return (
    <div className={cn('relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-ink', style.dot)}>
      {style.icon}
    </div>
  )
}

export default function TimelineEntry({ entry }: TimelineEntryProps) {
  return (
    <div className="grid grid-cols-[44px_minmax(0,1fr)] items-start gap-x-5 gap-y-3 sm:grid-cols-[44px_150px_minmax(0,1fr)] lg:gap-x-8">
      <Dot entry={entry} />
      <p className="pt-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink/65 dark:text-white/65">{entry.displayDate}</p>
      <Content entry={entry} />
    </div>
  )
}
