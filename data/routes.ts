import type { CanonicalRoute } from '@/types/route';

const home: CanonicalRoute = {
  path: '/',
  priority: 1.0,
  changeFreq: 'monthly',
  breadcrumbTrail: [{ label: 'Home', href: '/' }],
};

const p = (
  path: string,
  label: string,
  group: CanonicalRoute['navGroup'],
  parent?: CanonicalRoute,
  opts?: { pendingContent?: boolean },
): CanonicalRoute => ({
  path,
  priority: 0.7,
  changeFreq: 'monthly',
  navGroup: group,
  pendingContent: opts?.pendingContent ?? true,
  breadcrumbTrail: [
    { label: 'Home', href: '/' },
    ...(parent ? parent.breadcrumbTrail.slice(1) : []),
    { label, href: path },
  ],
});

const productsHub = p('/products/', 'Products', 'products', undefined, { pendingContent: false });
const materialsHub: CanonicalRoute = {
  path: '/materials/high-tensile-fasteners/',
  priority: 0.7,
  changeFreq: 'monthly',
  navGroup: 'materials',
  pendingContent: false,
  breadcrumbTrail: [
    { label: 'Home', href: '/' },
    { label: 'Materials', href: '/materials/high-tensile-fasteners/' },
    { label: 'High-Tensile Fasteners', href: '/materials/high-tensile-fasteners/' },
  ],
};

export const routes: CanonicalRoute[] = [
  home,
  // Company & trust
  p('/about/', 'About', 'company', undefined, { pendingContent: false }),
  p('/quality/', 'Quality', 'company'),
  p('/contact/', 'Contact', 'company'),
  p('/request-quote/', 'Request a Quote', 'company'),
  // Products
  productsHub,
  p('/products/foundation-bolts/', 'Foundation Bolts', 'products', productsHub, { pendingContent: false }),
  p('/products/stud-bolts/', 'Stud Bolts', 'products', productsHub, { pendingContent: false }),
  p('/products/sag-rods/', 'Sag Rods', 'products', productsHub, { pendingContent: false }),
  p('/products/tie-rods/', 'Tie Rods', 'products', productsHub, { pendingContent: false }),
  p('/products/csk-allen-bolts/', 'CSK Allen Bolts', 'products', productsHub, { pendingContent: false }),
  p('/products/scaffold-accessories/', 'Scaffold Accessories', 'products', productsHub, { pendingContent: false }),
  p('/products/solar-accessories/', 'Solar Accessories', 'products', productsHub, { pendingContent: false }),
  p('/products/hex-bolts-nuts/', 'Hex Bolts & Nuts', 'products', productsHub, { pendingContent: false }),
  p('/products/custom-fasteners/', 'Custom Fasteners', 'products', productsHub, { pendingContent: false }),
  // Materials
  materialsHub,
  {
    path: '/materials/stainless-steel-fasteners/',
    priority: 0.7,
    changeFreq: 'monthly',
    navGroup: 'materials',
    pendingContent: false,
    breadcrumbTrail: [
      { label: 'Home', href: '/' },
      { label: 'Materials', href: '/materials/high-tensile-fasteners/' },
      { label: 'Stainless Steel Fasteners', href: '/materials/stainless-steel-fasteners/' },
    ],
  },
  p('/industries/solar-mounting-fasteners/', 'Solar Mounting Fasteners', 'industries', undefined, { pendingContent: false }),
  p('/industries/construction-infrastructure/', 'Construction & Infrastructure', 'industries', undefined, { pendingContent: false }),
  p('/industries/automotive-heavy-engineering/', 'Automotive & Heavy Engineering', 'industries', undefined, { pendingContent: false }),
  // Legal
  p('/privacy-policy/', 'Privacy Policy', 'legal', undefined, { pendingContent: false }),
  p('/terms/', 'Terms of Supply', 'legal', undefined, { pendingContent: false }),
];

export function findRoute(path: string): CanonicalRoute | undefined {
  return routes.find((r) => r.path === path);
}
