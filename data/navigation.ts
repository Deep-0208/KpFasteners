export interface NavItem {
  label: string;
  href: string;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

export const headerNav: NavItem[] = [
  { label: 'Products', href: '/products/' },
  { label: 'Materials', href: '/materials/high-tensile-fasteners/' },
  { label: 'Industries', href: '/industries/solar-mounting-fasteners/' },
  { label: 'Tools', href: '/tools/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];

export const footerGroups: NavGroup[] = [
  {
    label: 'Products',
    items: [
      { label: 'Foundation Bolts', href: '/products/foundation-bolts/' },
      { label: 'Stud Bolts', href: '/products/stud-bolts/' },
      { label: 'Sag Rods', href: '/products/sag-rods/' },
      { label: 'Tie Rods', href: '/products/tie-rods/' },
      { label: 'CSK Allen Bolts', href: '/products/csk-allen-bolts/' },
      { label: 'Scaffold Accessories', href: '/products/scaffold-accessories/' },
      { label: 'Solar Accessories', href: '/products/solar-accessories/' },
      { label: 'Hex Bolts & Nuts', href: '/products/hex-bolts-nuts/' },
      { label: 'Custom Fasteners', href: '/products/custom-fasteners/' },
    ],
  },
  {
    label: 'Materials',
    items: [
      { label: 'High-Tensile Fasteners', href: '/materials/high-tensile-fasteners/' },
      { label: 'Stainless Steel Fasteners', href: '/materials/stainless-steel-fasteners/' },
    ],
  },
  {
    label: 'Industries',
    items: [
      { label: 'Solar Mounting', href: '/industries/solar-mounting-fasteners/' },
      { label: 'Construction & Infrastructure', href: '/industries/construction-infrastructure/' },
      { label: 'Automotive & Heavy Engineering', href: '/industries/automotive-heavy-engineering/' },
    ],
  },
  {
    label: 'Company',
    items: [
      { label: 'About', href: '/about/' },
      { label: 'Engineering Tools', href: '/tools/' },
      { label: 'Contact', href: '/contact/' },
      { label: 'Request a Quote', href: '/request-quote/' },
    ],
  },
  {
    label: 'Legal',
    items: [
      { label: 'Privacy Policy', href: '/privacy-policy/' },
      { label: 'Terms of Supply', href: '/terms/' },
    ],
  },
];
