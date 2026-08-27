import type { Metadata } from 'next'
import { Instrument_Serif } from 'next/font/google'
import '@fontsource-variable/nunito-sans'
import './globals.css'
import Navbar from '@/components/navigation/Navbar'
import SocialLinks from '@/components/common/SocialLinks'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-instrument-serif',
  display: 'swap',
})

const SITE_URL = 'https://martwhitty.dev'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Martin Whitaker — Digital Experience Designer',
    template: '%s — Martin Whitaker',
  },
  description: 'Digital experience designer and front-end developer building accessible public services and characterful products.',
  applicationName: 'Martin Whitaker Portfolio',
  authors: [{ name: 'Martin Whitaker' }],
  creator: 'Martin Whitaker',
  keywords: ['digital experience design', 'front-end development', 'accessibility', 'UX design', 'product design'],
  openGraph: {
    title: 'Martin Whitaker — Digital Experience Designer',
    description: 'Accessible public services and characterful digital products, designed and built end to end.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Martin Whitaker Portfolio',
    images: [{ url: '/images/bubbles.webp', width: 859, height: 1166, alt: 'Martin Whitaker portfolio hero' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Martin Whitaker — Digital Experience Designer',
    description: 'Accessible public services and characterful digital products, designed and built end to end.',
    images: ['/images/bubbles.webp'],
  },
  formatDetection: {
    telephone: false,
  },
}

const personLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Martin Whitaker',
  jobTitle: 'Digital Experience Designer',
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
    <html lang="en" className={instrumentSerif.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        <Navbar />
        {children}
        <footer className="border-t-2 border-ink/10 py-8">
          <div className="container-custom flex flex-col items-center gap-1 text-center text-sm text-ink/50">
            <p className="font-semibold text-base">&copy; {new Date().getFullYear()} &ndash; Martin Whitaker</p>
            <p>Building clear, useful interfaces with a bit of character.</p>
            <SocialLinks className="mt-4" iconClassName="text-ink/60 hover:text-ink" />
          </div>
        </footer>
      </body>
    </html>
  )
}