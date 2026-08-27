'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Play } from 'lucide-react'

const YOUTUBE_ID = 'Fv7KKBjETvY'
const YOUTUBE_START = 25

export default function YouTubeFacade() {
  const [active, setActive] = useState(false)
  const thumb = `https://i.ytimg.com/vi/${YOUTUBE_ID}/hqdefault.jpg`

  if (active) {
    return (
      <div className="aspect-video overflow-hidden rounded-[12px] border-2 border-ink shadow-[4px_4px_0_#1f1f1d]">
        <iframe
          src={`https://www.youtube.com/embed/${YOUTUBE_ID}?start=${YOUTUBE_START}&autoplay=1`}
          title="Drone footage over Norfolk"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      aria-label="Play drone footage over Norfolk"
      className="group relative aspect-video overflow-hidden rounded-[12px] border-2 border-ink shadow-[4px_4px_0_#1f1f1d] focus:outline-none focus:ring-2 focus:ring-butter focus:ring-offset-2"
    >
      <Image
        alt="Drone footage over Norfolk — still frame"
        className="object-cover"
        fill
        sizes="(min-width: 1024px) 50vw, calc(100vw - 32px)"
        src={thumb}
        unoptimized
      />
      <span className="absolute inset-0 bg-ink/35 transition-opacity group-hover:bg-ink/25" />
      <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-paper bg-coral shadow-[3px_3px_0_#1f1f1d] transition-transform group-hover:scale-105">
        <Play aria-hidden="true" size={26} className="translate-x-0.5 fill-ink text-ink" />
      </span>
    </button>
  )
}