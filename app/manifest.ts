import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Martin Whitaker — Digital Interaction Designer',
    short_name: 'Martin Whitaker',
    description: 'Digital interaction designer and front-end developer building accessible public services and characterful products.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fbfaff',
    theme_color: '#0b0715',
    icons: [
      { src: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
    ],
  }
}
