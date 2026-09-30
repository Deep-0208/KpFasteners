import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { StubPage } from '@/components/ui/StubPage';

export const metadata: Metadata = buildMetadata({
  path: '/products/csk-allen-bolts/',
  title: "CSK Allen Bolts Manufacturer — KP Fasteners",
  description: "Countersunk socket-head cap screws (CSK Allen bolts) manufactured and supplied by KP Fasteners across grade classes.",
  noindex: true,
});

export default function Page() {
  return <StubPage path="/products/csk-allen-bolts/" title="CSK Allen Bolts" />;
}
