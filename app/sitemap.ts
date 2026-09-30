import type { MetadataRoute } from 'next';
import { routes } from '@/data/routes';
import { SITE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes
    .filter((r) => !r.pendingContent || r.path === '/')
    .map((r) => ({
      url: `${SITE_URL}${r.path}`,
      lastModified: r.lastMod ?? now,
      changeFrequency: r.changeFreq ?? 'monthly',
      priority: r.priority ?? 0.7,
    }));
}
