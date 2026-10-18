import { timeline } from '@/lib/data/timeline'
import TimelineEntry from './TimelineEntry'

export default function Timeline() {
  return (
    <ol className="mt-10">
      {timeline.map((entry) => <li key={entry.id} className="border-t border-ink/15 py-7 dark:border-white/15 sm:py-9"><TimelineEntry entry={entry} /></li>)}
    </ol>
  )
}
