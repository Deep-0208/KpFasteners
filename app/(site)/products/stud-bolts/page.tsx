import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { StubPage } from '@/components/ui/StubPage';

export const metadata: Metadata = buildMetadata({
  path: '/products/stud-bolts/',
  title: "Stud Bolts Manufacturer — KP Fasteners Ahmedabad",
  description: "KP Fasteners supplies stud bolts and threaded studs across metric and imperial standards for flange and structural applications.",
  noindex: true,
});

export default function Page() {
  return <StubPage path="/products/stud-bolts/" title="Stud Bolts" />;
}
