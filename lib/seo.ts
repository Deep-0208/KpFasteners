import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://kpfasteners.com';

export interface BuildMetadataInput {
  path: string;
  title: string;
  description: string;
  ogImage?: string;
  noindex?: boolean;
}

export function buildMetadata({ path, title, description, ogImage, noindex }: BuildMetadataInput): Metadata {
  const url = `${SITE_URL}${path}`;

  const openGraph: NonNullable<Metadata['openGraph']> = {
    type: 'website',
    url,
    title,
    description,
    siteName: 'KP Fasteners',
    locale: 'en_IN',
  };
  const twitter: NonNullable<Metadata['twitter']> = {
    card: 'summary_large_image',
    title,
    description,
  };

  // When a page supplies its own image (e.g. a product hero), use it. Otherwise
  // leave images unset so the generated 1200x630 card from app/opengraph-image.tsx
  // is inherited — never fall back to the raw logo, which crops badly on social.
  if (ogImage) {
    openGraph.images = [{ url: ogImage }];
    twitter.images = [ogImage];
  }

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph,
    twitter,
  };
}

export { SITE_URL };
