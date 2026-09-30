import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { StubPage } from '@/components/ui/StubPage';

export const metadata: Metadata = buildMetadata({
  path: '/products/foundation-bolts/',
  title: "Foundation Bolts Manufacturer — KP Fasteners",
  description: "KP Fasteners manufactures J-type, L-type, U-type and hooked foundation bolts for civil and industrial anchoring. Specifications pending verification.",
  noindex: true,
});

export default function Page() {
  return <StubPage path="/products/foundation-bolts/" title="Foundation Bolts" />;
}
