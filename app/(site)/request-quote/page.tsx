import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { StubPage } from '@/components/ui/StubPage';

export const metadata: Metadata = buildMetadata({
  path: '/request-quote/',
  title: "Request a Fastener Quote — KP Fasteners Ahmedabad",
  description: "Send an RFQ to KP Fasteners for standard or custom industrial fasteners. Attach drawings or specifications for an accurate quote.",
  noindex: true,
});

export default function Page() {
  return <StubPage path="/request-quote/" title="Request a Fastener Quote" />;
}
