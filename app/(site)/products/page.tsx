import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { StubPage } from '@/components/ui/StubPage';

export const metadata: Metadata = buildMetadata({
  path: '/products/',
  title: "Industrial Fastener Products — KP Fasteners Ahmedabad",
  description: "Browse the KP Fasteners product range: foundation bolts, stud bolts, tie rods, CSK Allen bolts, scaffold and solar accessories, and custom fasteners.",
  noindex: true,
});

export default function Page() {
  return <StubPage path="/products/" title="Industrial Fastener Products" />;
}
