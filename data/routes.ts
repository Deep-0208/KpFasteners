import type { CanonicalRoute } from '@/types/route';

const home: CanonicalRoute = {
  path: '/',
  priority: 1.0,
  changeFreq: 'monthly',
  breadcrumbTrail: [{ label: 'Home', href: '/' }],
};

const p = (path: string, label: string, group: CanonicalRoute['navGroup'], parent?: CanonicalRoute): CanonicalRoute => ({
  path,
  priority: 0.7,
  changeFreq: 'monthly',
  navGroup: group,
  pendingContent: true,
  breadcrumbTrail: [
    { label: 'Home', href: '/' },
    ...(parent ? parent.breadcrumbTrail.slice(1) : []),
    { label, href: path },
  ],
});

const productsHub = p('/products/', 'Products', 'products');
const materialsHub: CanonicalRoute = {
  path: '/materials/high-tensile-fasteners/',
  priority: 0.7,
  changeFreq: 'monthly',
  navGroup: 'materials',
  pendingContent: true,
  breadcrumbTrail: [
    { label: 'Home', href: '/' },
    { label: 'Materials', href: '/materials/high-tensile-fasteners/' },
    { label: 'High-Tensile Fasteners', href: '/materials/high-tensile-fasteners/' },
  ],
};

export const routes: CanonicalRoute[] = [
  home,
  // Company & trust
  p('/about/', 'About', 'company'),
  p('/quality/', 'Quality', 'company'),
  p('/contact/', 'Contact', 'company'),
  p('/request-quote/', 'Request a Quote', 'company'),
  // Products
  productsHub,
  p('/products/foundation-bolts/', 'Foundation Bolts', 'products', productsHub),
  p('/products/stud-bolts/', 'Stud Bolts', 'products', productsHub),
  p('/products/sag-rods/', 'Sag Rods', 'products', productsHub),
  p('/products/tie-rods/', 'Tie Rods', 'products', productsHub),
  p('/products/csk-allen-bolts/', 'CSK Allen Bolts', 'products', productsHub),
  p('/products/scaffold-accessories/', 'Scaffold Accessories', 'products', productsHub),
  p('/products/solar-accessories/', 'Solar Accessories', 'products', productsHub),
  p('/products/hex-bolts-nuts/', 'Hex Bolts & Nuts', 'products', productsHub),
  p('/products/custom-fasteners/', 'Custom Fasteners', 'products', productsHub),
  // Materials
  materialsHub,
  p('/materials/stainless-steel-fasteners/', 'Stainless Steel Fasteners', 'materials'),
  // Industries
  p('/industries/solar-mounting-fasteners/', 'Solar Mounting Fasteners', 'industries'),
  p('/industries/construction-infrastructure/', 'Construction & Infrastructure', 'industries'),
  p('/industries/automotive-heavy-engineering/', 'Automotive & Heavy Engineering', 'industries'),
  // Legal
  p('/privacy-policy/', 'Privacy Policy', 'legal'),
  p('/terms/', 'Terms of Supply', 'legal'),
];

export function findRoute(path: string): CanonicalRoute | undefined {
  return routes.find((r) => r.path === path);
}
