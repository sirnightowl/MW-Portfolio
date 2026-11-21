import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Martin Whitaker — Digital Interaction Designer',
    short_name: 'Martin Whitaker',
    description: 'Digital interaction designer and front-end developer building accessible public services and characterful products.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f8f4eb',
    theme_color: '#f8f4eb',
    icons: [
      { src: '/owl-icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/owl-icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/owl-icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  }
}
