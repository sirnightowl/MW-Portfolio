import { cn } from '@/lib/utils'

interface ShapeProps {
  className?: string
  color?: string
}

export function Star({ className, color = 'text-coral' }: ShapeProps) {
  return (
    <svg
      aria-hidden="true"
      role="img"
      viewBox="0 0 24 24"
      className={cn('h-4 w-4', color, className)}
      fill="currentColor"
    >
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  )
}

export function Squiggle({ className, color = 'text-coral' }: ShapeProps) {
  return (
    <svg
      aria-hidden="true"
      role="img"
      viewBox="0 0 60 12"
      className={cn('h-3 w-12', color, className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    >
      <path d="M2 6C8 0 14 12 20 6C26 0 32 12 38 6C44 0 50 12 58 6" />
    </svg>
  )
}

export function Blob({ className, color = 'text-sage' }: ShapeProps) {
  return (
    <svg
      aria-hidden="true"
      role="img"
      viewBox="0 0 200 200"
      className={cn('h-full w-full', color, className)}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98,-19.2,95.8,-5.3C93.6,8.6,82.6,21.5,71.6,32.3C60.6,43.1,49.6,51.8,37.9,58.9C26.2,66,13.8,71.5,0.8,70.2C-12.2,68.9,-24.1,60.8,-36.3,53.2C-48.5,45.6,-61,38.5,-69.9,27.8C-78.8,17.1,-84.1,2.8,-82.4,-10.7C-80.7,-24.2,-72,-36.9,-61.3,-46.1C-50.6,-55.3,-37.9,-61,-25.7,-69.4C-13.5,-77.8,-2.1,-88.9,6.3,-99.2L14.7,-109.5" transform="translate(100 100)" />
    </svg>
  )
}

export function DotCluster({ className, color = 'text-ink/20' }: ShapeProps) {
  return (
    <svg
      aria-hidden="true"
      role="img"
      viewBox="0 0 48 48"
      className={cn('h-10 w-10', color, className)}
      fill="currentColor"
    >
      <circle cx="6" cy="6" r="3" />
      <circle cx="24" cy="6" r="3" />
      <circle cx="42" cy="6" r="3" />
      <circle cx="6" cy="24" r="3" />
      <circle cx="24" cy="24" r="3" />
      <circle cx="42" cy="24" r="3" />
      <circle cx="6" cy="42" r="3" />
      <circle cx="24" cy="42" r="3" />
      <circle cx="42" cy="42" r="3" />
    </svg>
  )
}
