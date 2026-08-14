import { type TimelineEntry as TimelineEntryData, TimelineEntryType } from '@/lib/types'
import { cn } from '@/lib/utils'

const typeColors: Record<TimelineEntryType, string> = {
  job: 'bg-coral',
  project: 'bg-sage',
  life: 'bg-butter',
  education: 'bg-sky',
}

const typeIcons: Record<TimelineEntryType, string> = {
  job: '💼',
  project: '🔧',
  life: '🌟',
  education: '🎓',
}

interface TimelineEntryProps {
  entry: TimelineEntryData
  side: 'left' | 'right'
}

function Content({ entry, alignRight }: { entry: TimelineEntryData; alignRight?: boolean }) {
  return (
    <div className={cn(alignRight ? 'text-right' : '')}>
      <p className="text-xs font-black uppercase tracking-[0.15em] text-ink/50">
        {entry.displayDate}
      </p>
      <h3 className="mt-1 text-xl font-black">{entry.title}</h3>
      {entry.subtitle && (
        <p className="mt-0.5 text-base font-semibold text-ink/70">{entry.subtitle}</p>
      )}
      <p className="mt-2 text-base leading-7 text-ink/70">{entry.description}</p>
      {entry.tags && entry.tags.length > 0 && (
        <div className={cn('mt-3 flex flex-wrap gap-2', alignRight ? 'justify-end' : '')}>
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-[4px] border border-ink/20 bg-ink/5 px-2.5 py-0.5 text-xs font-semibold text-ink/60"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

function Dot({ entry }: { entry: TimelineEntryData }) {
  return (
    <div
      className={cn(
        'relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-ink text-sm shadow-[2px_3px_0_#1f1f1d]',
        typeColors[entry.type]
      )}
    >
      {typeIcons[entry.type]}
    </div>
  )
}

export default function TimelineEntry({ entry, side }: TimelineEntryProps) {
  const isLeft = side === 'left'

  return (
    <>
      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:gap-6">
        {isLeft ? (
          <>
            <Content entry={entry} alignRight />
            <Dot entry={entry} />
            <div />
          </>
        ) : (
          <>
            <div />
            <Dot entry={entry} />
            <Content entry={entry} />
          </>
        )}
      </div>

      <div className="flex gap-4 md:hidden">
        <Dot entry={entry} />
        <div className="min-w-0 flex-1">
          <Content entry={entry} />
        </div>
      </div>
    </>
  )
}
