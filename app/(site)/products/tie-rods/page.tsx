import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { StubPage } from '@/components/ui/StubPage';

export const metadata: Metadata = buildMetadata({
  path: '/products/tie-rods/',
  title: "Tie Rods Manufacturer — KP Fasteners Ahmedabad",
  description: "KP Fasteners supplies tie rods for formwork and structural applications, threaded to specification with matching wing nuts and water stoppers.",
  noindex: true,
});

export default function Page() {
  return <StubPage path="/products/tie-rods/" title="Tie Rods" />;
}
