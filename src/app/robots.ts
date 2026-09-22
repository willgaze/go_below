import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'
import { allowIndexing } from '@/lib/indexing'

export default function robots(): MetadataRoute.Robots {
  if (!allowIndexing) {
    // Pre-launch: keep crawlers out entirely, and publish no sitemap for
    // them to follow. See src/lib/indexing.ts for how to open this.
    return { rules: { userAgent: '*', disallow: '/' } }
  }

  return {
    rules: { userAgent: '*', allow: '/', disallow: '/api/' },
    sitemap: `${site.url}/sitemap.xml`,
  }
}
