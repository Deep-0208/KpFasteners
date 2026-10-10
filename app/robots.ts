import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: ['OAI-SearchBot', 'Claude-SearchBot', 'PerplexityBot', 'Applebot', 'Bingbot'],
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: ['ChatGPT-User', 'Claude-User', 'Perplexity-User'],
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
