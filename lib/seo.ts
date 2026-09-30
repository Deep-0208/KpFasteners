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
  const image = ogImage ?? '/brand/logo.jpg.jpeg';
  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      siteName: 'KP Fasteners',
      locale: 'en_IN',
      images: [{ url: image }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

export { SITE_URL };
