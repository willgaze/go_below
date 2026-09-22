import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'
import { allowIndexing } from '@/lib/indexing'

export default function sitemap(): MetadataRoute.Sitemap {
  if (!allowIndexing) return []

  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
