import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { StubPage } from '@/components/ui/StubPage';

export const metadata: Metadata = buildMetadata({
  path: '/products/hex-bolts-nuts/',
  title: "Hex Bolts & Nuts Supplier — KP Fasteners",
  description: "Hex head bolts and hex nuts in mild steel, high-tensile and stainless grades — distribution range from KP Fasteners.",
  noindex: true,
});

export default function Page() {
  return <StubPage path="/products/hex-bolts-nuts/" title="Hex Bolts & Nuts" classification="trading" />;
}
