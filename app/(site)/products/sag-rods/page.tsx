import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { StubPage } from '@/components/ui/StubPage';

export const metadata: Metadata = buildMetadata({
  path: '/products/sag-rods/',
  title: 'Sag Rods Manufacturer — KP Fasteners Ahmedabad',
  description:
    'KP Fasteners manufactures threaded sag rods for PEB purlin bracing, structural steel, and solar racking cross-bracing.',
  noindex: true,
});

export default function Page() {
  return <StubPage path="/products/sag-rods/" title="Sag Rods" classification="oem" />;
}
