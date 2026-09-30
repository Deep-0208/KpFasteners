import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { StubPage } from '@/components/ui/StubPage';

export const metadata: Metadata = buildMetadata({
  path: '/products/solar-accessories/',
  title: "Solar Mounting Fasteners & Accessories — KP Fasteners",
  description: "Solar mounting bolts, nuts, and accessories from KP Fasteners for rooftop and utility-scale solar installations.",
  noindex: true,
});

export default function Page() {
  return <StubPage path="/products/solar-accessories/" title="Solar Accessories" />;
}
