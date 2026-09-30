export type NavGroup = 'products' | 'materials' | 'industries' | 'company' | 'legal';

export interface BreadcrumbEntry {
  label: string;
  href: string;
}

export interface CanonicalRoute {
  path: string;
  changeFreq?: 'weekly' | 'monthly' | 'yearly';
  priority?: number;
  breadcrumbTrail: BreadcrumbEntry[];
  navGroup?: NavGroup;
  lastMod?: Date;
  /** True when content is still pending verification — page should render <VerificationRequired> and set robots:noindex. */
  pendingContent?: boolean;
}
