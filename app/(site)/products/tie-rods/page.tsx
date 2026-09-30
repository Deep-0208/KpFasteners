import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { StubPage } from '@/components/ui/StubPage';

export const metadata: Metadata = buildMetadata({
  path: '/products/tie-rods/',
  title: "Tie Rods Supplier — KP Fasteners Ahmedabad",
  description: "Tie rods and turnbuckle assemblies for formwork and structural applications — supplied as part of the KP Fasteners distribution range.",
  noindex: true,
});

export default function Page() {
  return <StubPage path="/products/tie-rods/" title="Tie Rods" classification="trading" />;
}
