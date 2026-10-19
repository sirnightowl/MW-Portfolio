import type { Metadata } from 'next'
import { SITE_URL } from './site'

type PageMetadata = {
  title: string
  description: string
  path: string
  type?: 'website' | 'article'
  image?: string
  imageAlt?: string
  modifiedTime?: string
  publishedTime?: string
}

export function pageMetadata({ title, description, path, type = 'website', image = '/opengraph-image', imageAlt = 'Martin Whitaker — Digital Interaction Designer', modifiedTime, publishedTime }: PageMetadata): Metadata {
  const socialTitle = path === '/' ? title : `${title} — Martin Whitaker`
  const url = new URL(path, SITE_URL).toString()
  return {
    title: path === '/' ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: socialTitle, description, url, type,
      siteName: 'Martin Whitaker Portfolio', locale: 'en_GB',
      images: [{ url: image, width: 1200, height: 630, alt: imageAlt, type: 'image/png' }],
      ...(type === 'article' && { authors: ['Martin Whitaker'], modifiedTime, publishedTime }),
    },
    twitter: {
      card: 'summary_large_image', title: socialTitle, description,
      images: [{ url: image, alt: imageAlt }],
    },
  }
}
