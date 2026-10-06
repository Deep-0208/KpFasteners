import type { MetadataRoute } from 'next';
import { routes } from '@/data/routes';
import { SITE_URL } from '@/lib/seo';

// Stable fallback so every deploy does not re-stamp all URLs with the build
// time, which would dilute the <lastmod> freshness signal. Bump this (or set a
// per-route lastMod in data/routes.ts) only when a page's content actually
// changes.
const DEFAULT_LASTMOD = new Date('2026-10-01T00:00:00+05:30');

export default function sitemap(): MetadataRoute.Sitemap {
  return routes
    .filter((r) => !r.pendingContent || r.path === '/')
    .map((r) => ({
      url: `${SITE_URL}${r.path}`,
      lastModified: r.lastMod ?? DEFAULT_LASTMOD,
      changeFrequency: r.changeFreq ?? 'monthly',
      priority: r.priority ?? 0.7,
    }));
}
