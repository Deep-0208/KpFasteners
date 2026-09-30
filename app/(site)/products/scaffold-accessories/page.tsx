import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { StubPage } from '@/components/ui/StubPage';

export const metadata: Metadata = buildMetadata({
  path: '/products/scaffold-accessories/',
  title: "Scaffold Accessories Supplier — KP Fasteners",
  description: "KP Fasteners supplies scaffolding fittings and accessories for construction and formwork contractors across India.",
  noindex: true,
});

export default function Page() {
  return <StubPage path="/products/scaffold-accessories/" title="Scaffold Accessories" />;
}
