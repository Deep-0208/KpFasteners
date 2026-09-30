import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { StubPage } from '@/components/ui/StubPage';

export const metadata: Metadata = buildMetadata({
  path: '/products/csk-allen-bolts/',
  title: "CSK Allen Bolts Supplier — KP Fasteners",
  description: "Countersunk socket-head cap screws (CSK Allen bolts) supplied by KP Fasteners across grade classes as part of our distribution range.",
  noindex: true,
});

export default function Page() {
  return <StubPage path="/products/csk-allen-bolts/" title="CSK Allen Bolts" classification="trading" />;
}
