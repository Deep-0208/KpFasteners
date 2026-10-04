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
    founder: {
      '@type': 'Person',
      name: company.contactPerson,
    },
    foundingDate: company.commencementDate ?? '2015-08-01',
    taxID: company.gstin,
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

import type { ProductClassification } from '@/data/products/index';

export interface ProductJsonLdInput {
  name: string;
  description: string;
  category: string;
  material?: string;
  image?: string;
  path: string;
  /**
   * OEM       — manufactured in-house. Sets `manufacturer` to the KP Organization @id.
   * trading   — distribution range. Sets `seller` to the KP Organization @id; `brand`
   *             is the supplied brand if known, otherwise omitted (never faked as KP).
   * ambiguous — some SKUs are OEM, others are supplied. Sets `seller` only.
   */
  classification: ProductClassification;
  /** Brand name for `trading` items where the actual manufacturer's brand is known. */
  brand?: string;
}

export function product(p: ProductJsonLdInput) {
  const base = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.name,
    description: p.description,
    category: p.category,
    ...(p.material ? { material: p.material } : {}),
    ...(p.image ? { image: `${SITE_URL}${p.image}` } : {}),
    url: `${SITE_URL}${p.path}`,
  } as Record<string, unknown>;

  if (p.classification === 'oem') {
    base.brand = { '@type': 'Brand', name: company.legalName };
    base.manufacturer = { '@id': ORG_ID };
  } else if (p.classification === 'trading') {
    base.seller = { '@id': ORG_ID };
    if (p.brand) base.brand = { '@type': 'Brand', name: p.brand };
  } else {
    // ambiguous — some SKUs OEM, others sourced. Only seller is safe.
    base.seller = { '@id': ORG_ID };
  }

  return base;
}

export function contactPage(path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    url: `${SITE_URL}${path}`,
    mainEntity: { '@id': ORG_ID },
  };
}

export function itemList(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      url: `${SITE_URL}${it.url}`,
    })),
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
