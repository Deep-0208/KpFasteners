import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { StubPage } from '@/components/ui/StubPage';

export const metadata: Metadata = buildMetadata({
  path: '/materials/stainless-steel-fasteners/',
  title: "Stainless Steel Fasteners — SS 304 / 316 | KP Fasteners",
  description: "Stainless steel fasteners in SS 304 and SS 316 from KP Fasteners for corrosion-resistant applications, including solar and coastal projects.",
  noindex: true,
});

export default function Page() {
  return <StubPage path="/materials/stainless-steel-fasteners/" title="Stainless Steel Fasteners" />;
}
