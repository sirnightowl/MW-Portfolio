import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Navbar from '@/components/navigation/Navbar'
import Link from 'next/link'
import SocialLinks from '@/components/common/SocialLinks'
import OwlMark from '@/components/common/OwlMark'
import { SITE_URL, jsonLd } from '@/lib/site'

const tiktok = localFont({
  src: '../node_modules/@fontsource-variable/tiktok-sans/files/tiktok-sans-latin-wght-normal.woff2',
  variable: '--font-tiktok',
  display: 'swap',
  weight: '300 900',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Martin Whitaker — Digital Interaction Designer',
    template: '%s — Martin Whitaker',
  },
  description: 'Digital interaction designer and front-end developer building accessible public services and characterful products.',
  applicationName: 'Martin Whitaker Portfolio',
  icons: {
    icon: [
      { url: '/favicon.ico?v=owl', sizes: '16x16 32x32 48x48', type: 'image/x-icon' },
      { url: '/owl-icon.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
    apple: { url: '/apple-touch-icon.png?v=owl-2', sizes: '180x180', type: 'image/png' },
  },
  authors: [{ name: 'Martin Whitaker' }],
  creator: 'Martin Whitaker',
  keywords: ['digital interaction design', 'front-end development', 'accessibility', 'UX design', 'product design'],
  openGraph: {
    title: 'Martin Whitaker — Digital Interaction Designer',
    description: 'Accessible public services and characterful digital products, designed and built end to end.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Martin Whitaker Portfolio',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Martin Whitaker — Digital Interaction Designer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Martin Whitaker — Digital Interaction Designer',
    description: 'Accessible public services and characterful digital products, designed and built end to end.',
    images: ['/opengraph-image'],
  },
  formatDetection: {
    telephone: false,
  },
}

const personLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Martin Whitaker',
  jobTitle: 'Digital Interaction Designer',
  url: SITE_URL,
  sameAs: [
    'https://github.com/sirnightowl',
    'https://www.linkedin.com/in/martin-whitaker',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Norfolk County Council',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={tiktok.variable} data-theme="light" suppressHydrationWarning>
      <head>
        {/**
         * Theme detection runs synchronously before hydration to prevent a
         * flash of unstyled content. It must only access `localStorage` and
         * `document.documentElement` inside the `try/catch` below. Any future
         * change should preserve this defensive wrapping: SSR and clients
         * with storage disabled must not cause a head-script exception.
         */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');document.documentElement.dataset.theme=(t==='dark'||t==='light')?t:'light';}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(personLd) }}
        />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-white">Skip to main content</a>
        <Navbar />
        {children}
        <footer className="site-footer">
          <div className="container-custom">
            <div className="footer-grid">
              <div>
                <Link href="/" className="inline-flex min-h-11 items-center gap-3 font-serif text-[23px] tracking-[-0.05em] text-[#703f61] dark:text-[#dfb4d0]">
                  <OwlMark className="h-10 w-14 shrink-0" />
                  <span>Martin Whitaker.</span>
                </Link>
                <p className="mt-3 max-w-xs text-sm leading-6 text-ink/75 dark:text-white/65">Building clear, useful interfaces<br />with a little character.</p>
              </div>
              <nav aria-label="Footer navigation" className="footer-navigation">
                <Link href="/work">Work</Link>
                <Link href="/about">About</Link>
                <Link href="/cv">CV</Link>
                <Link href="/blog">Writing</Link>
                <Link href="/uses">Uses</Link>
                <Link href="/contact">Contact</Link>
              </nav>
              <div>
                <p className="eyebrow">Find me elsewhere</p>
                <SocialLinks className="mt-4" />
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} Martin Whitaker <span className="mx-2" aria-hidden="true">/</span> Norfolk, UK</p>
              <a href="https://github.com/sirnightowl" className="inline-flex min-h-11 items-center underline underline-offset-4 transition-colors hover:text-ink dark:hover:text-white" target="_blank" rel="noopener noreferrer">View source on GitHub ↗</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
