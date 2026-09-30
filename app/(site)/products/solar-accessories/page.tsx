import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { StubPage } from '@/components/ui/StubPage';

export const metadata: Metadata = buildMetadata({
  path: '/products/solar-accessories/',
  title: "Solar Mounting Fasteners & Accessories Supplier — KP Fasteners",
  description: "Solar mounting bolts, T-head bolts, hanger bolts and module clamps — distribution range from KP Fasteners for rooftop and utility-scale installations.",
  noindex: true,
});

export default function Page() {
  return <StubPage path="/products/solar-accessories/" title="Solar Accessories" classification="trading" />;
}
