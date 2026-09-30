import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { StubPage } from '@/components/ui/StubPage';

export const metadata: Metadata = buildMetadata({
  path: '/contact/',
  title: "Contact KP Fasteners — Ahmedabad Office & Factory",
  description: "Contact KP Fasteners in Ahmedabad by phone, WhatsApp, or email. Office, factory, and warehouse located at Ghanshyam Industrial Estate.",
  noindex: true,
});

export default function Page() {
  return <StubPage path="/contact/" title="Contact KP Fasteners" />;
}
