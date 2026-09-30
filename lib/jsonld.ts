import { company } from '@/data/company';
import { SITE_URL } from '@/lib/seo';
import type { BreadcrumbEntry } from '@/types/route';

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const LOCALBUSINESS_ID = `${SITE_URL}/#localbusiness`;

export function organization() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: company.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}/brand/logo.jpg.jpeg`,
    email: company.email,
    telephone: company.telephones[0],
    sameAs: company.sameAs,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.streetAddress,
      addressLocality: company.address.locality,
      addressRegion: company.address.region,
      postalCode: company.address.postalCode,
      addressCountry: company.address.country,
    },
  };
}

export function website() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE_URL,
    name: company.legalName,
    publisher: { '@id': ORG_ID },
  };
}

export function localBusiness() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': LOCALBUSINESS_ID,
    name: company.legalName,
    url: SITE_URL,
    telephone: company.telephones[0],
    email: company.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.streetAddress,
      addressLocality: company.address.locality,
      addressRegion: company.address.region,
      postalCode: company.address.postalCode,
      addressCountry: company.address.country,
    },
    ...(company.hours ? { openingHours: company.hours } : {}),
  };
}

export function breadcrumbs(trail: BreadcrumbEntry[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.label,
      item: `${SITE_URL}${t.href}`,
    })),
  };
}

export interface ProductJsonLdInput {
  name: string;
  description: string;
  category: string;
  material?: string;
  image?: string;
  path: string;
}

export function product(p: ProductJsonLdInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.name,
    description: p.description,
    category: p.category,
    ...(p.material ? { material: p.material } : {}),
    ...(p.image ? { image: `${SITE_URL}${p.image}` } : {}),
    brand: { '@type': 'Brand', name: company.legalName },
    manufacturer: { '@id': ORG_ID },
    url: `${SITE_URL}${p.path}`,
  };
}

export function faqPage(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.question,
      acceptedAnswer: { '@type': 'Answer', text: i.answer },
    })),
  };
}
