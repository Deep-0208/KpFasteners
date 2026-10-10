/**
 * Hero Carousel Configuration - KP Fasteners
 *
 * Provides the SEO-optimized data for the homepage Hero carousel.
 * Highlights KP Fasteners' 3 in-house manufactured OEM lines
 * plus core distributed high-tensile fasteners.
 */

export interface HeroCarouselImage {
  src: string;
  alt: string;
  title: string;
  badge: 'IN-HOUSE OEM' | 'DISTRIBUTION';
  category: string;
  specs: string;
  href?: string;
}

export const heroCarouselImages: HeroCarouselImage[] = [
  {
    src: '/images/products/bolts/foundation-anchor-bolts.webp',
    alt: 'Foundation and Anchor Bolts manufactured by KP Fasteners Ahmedabad',
    title: 'Foundation & Anchor Bolts',
    badge: 'IN-HOUSE OEM',
    category: 'J, L, U & Hooked Anchors',
    specs: 'M12-M72, IS 5624, ASTM F1554',
    href: '/products/foundation-bolts/',
  },
  {
    src: '/images/products/threaded-rods/threaded-rod-stud.webp',
    alt: 'ASTM A193 B7 stud bolt assembly with dual heavy hex nuts manufactured by KP Fasteners',
    title: 'Industrial Stud Bolts',
    badge: 'IN-HOUSE OEM',
    category: 'ASTM A193 B7 / B8 / B8M, DIN 976',
    specs: 'Full Thread & Double-End, M8-M64',
    href: '/products/stud-bolts/',
  },
  {
    src: '/images/products/threaded-rods/sag-rod.webp',
    alt: 'Threaded sag rod assembly with dual hex nuts for PEB purlin and solar racking bracing',
    title: 'Structural Sag Rods',
    badge: 'IN-HOUSE OEM',
    category: 'PEB Bracing & Solar Racking',
    specs: 'M10-M36, Grade 4.6 / 8.8, EN 10204 3.1',
    href: '/products/sag-rods/',
  },
  {
    src: '/images/products/bolts/hex-bolt-hex-nut.webp',
    alt: 'High-tensile hex bolts and heavy nuts distributed by KP Fasteners',
    title: 'High-Tensile Hex Bolts & Nuts',
    badge: 'DISTRIBUTION',
    category: 'DIN 933 / 931, ISO 4017 / 4014',
    specs: 'Property Classes 4.6 to 12.9, M6-M64',
    href: '/products/hex-bolts-nuts/',
  },
  {
    src: '/images/products/bolts/allen-socket-csk-screw.webp',
    alt: 'Countersunk Allen socket head cap screws distributed by KP Fasteners',
    title: 'CSK Allen Bolts & Socket Screws',
    badge: 'DISTRIBUTION',
    category: 'DIN 7991, DIN 912, DIN 7380',
    specs: 'Class 8.8, 10.9, 12.9 & SS 304/316',
    href: '/products/csk-allen-bolts/',
  },
];
