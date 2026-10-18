import type { MetadataRoute } from 'next'
import { projects } from '@/lib/data/projects'
import { articles } from '@/lib/data/articles'
import { SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    { url: SITE_URL, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/about`, lastModified, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${SITE_URL}/work`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/uses`, lastModified, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${SITE_URL}/contact`, lastModified, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${SITE_URL}/blog`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    ...projects.map((project) => ({
      url: `${SITE_URL}/projects/${project.id}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...articles
      .filter((article) => article.published)
      .map((article) => ({
        url: `${SITE_URL}/blog/${article.id}`,
        lastModified: new Date(article.date),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      })),
  ]
}