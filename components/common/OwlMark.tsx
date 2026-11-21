import { useId } from 'react'

/** Decorative companion to the readable wordmark; cutouts inherit any background. */
export default function OwlMark({ className = '' }: { className?: string }) {
  const faceMask = useId()
  const wing = 'M108 100C75 83 37 55 10 32 9 59 29 79 52 93L10 78C18 101 38 116 61 122L27 119C39 138 58 146 79 143L53 153C74 165 94 155 113 145L127 120Z'

  return (
    <svg viewBox="0 24 300 200" fill="currentColor" aria-hidden="true" focusable="false" className={className}>
      <defs>
        <mask id={faceMask} maskUnits="userSpaceOnUse" x="0" y="0" width="300" height="240">
          <rect width="300" height="240" fill="white" />
          <path fill="black" d="M120 109Q131 99 145 114 143 130 131 130 120 130 120 119ZM180 109Q169 99 155 114 157 130 169 130 180 130 180 119ZM145 134 150 146 155 134Z" />
          <circle cx="132" cy="117" r="6.5" fill="white" />
          <circle cx="168" cy="117" r="6.5" fill="white" />
        </mask>
      </defs>
      <g mask={`url(#${faceMask})`}>
        <path d={wing} />
        <path d={wing} transform="translate(300 0) scale(-1 1)" />
        <path d="M109 72 128 84Q150 76 172 84L191 72 184 98Q195 130 175 145L174 165 186 187 168 183 173 205 157 195 150 217 143 195 127 205 132 183 114 187 126 165 125 145Q105 130 116 98Z" />
      </g>
    </svg>
  )
}
