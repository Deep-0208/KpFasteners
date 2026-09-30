import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { StubPage } from '@/components/ui/StubPage';

export const metadata: Metadata = buildMetadata({
  path: '/about/',
  title: "About KP Fasteners — Ahmedabad Fastener Manufacturer",
  description: "Learn about KP Fasteners — an Ahmedabad-based manufacturer and wholesaler of industrial fasteners. Details pending client verification.",
  noindex: true,
});

export default function Page() {
  return <StubPage path="/about/" title="About KP Fasteners" />;
}
