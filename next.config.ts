import type { NextConfig } from 'next'

const isDev = process.env.NODE_ENV === 'development'
const isStaticExport = process.env.NEXT_STATIC_EXPORT === '1'

const cspDirectives = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' https://i.ytimg.com",
  "font-src 'self'",
  "connect-src 'self'",
  "frame-src https://www.youtube.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join('; ')

const nextConfig: NextConfig = {
  poweredByHeader: false,
  ...(isStaticExport ? { output: 'export', images: { unoptimized: true } } : {}),
  redirects: isStaticExport ? undefined : async () => {
    return [{ source: '/projects/the-diver', destination: '/projects/stay-with-me-deep-sea', permanent: true }]
  },
  headers: isStaticExport ? undefined : async () => {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Content-Security-Policy',
            value: cspDirectives,
          },
        ],
      },
    ]
  },
}

export default nextConfig
