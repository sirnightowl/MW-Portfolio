import { timeline } from '@/lib/data/timeline'
import { type TimelineEntry as TimelineEntryData } from '@/lib/types'
import TimelineEntry from './TimelineEntry'

function isLeftSide(entry: TimelineEntryData) {
  return entry.type === 'life'
}

export default function Timeline() {
  return (
    <div className="py-8">
      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-ink/20 md:block" />
        {timeline.map((entry) => {
          const side = isLeftSide(entry) ? 'left' : 'right'

          return (
            <div key={entry.id} className="pb-10 last:pb-0">
              <TimelineEntry entry={entry} side={side} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
