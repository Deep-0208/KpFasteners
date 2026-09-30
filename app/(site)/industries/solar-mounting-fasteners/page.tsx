import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { StubPage } from '@/components/ui/StubPage';

export const metadata: Metadata = buildMetadata({
  path: '/industries/solar-mounting-fasteners/',
  title: "Solar Mounting Fasteners — Rooftop & Utility | KP Fasteners",
  description: "Fastener stack for solar mounting: hex bolts, U-bolts, hanger bolts, and washers for rooftop and ground-mount arrays.",
  noindex: true,
});

export default function Page() {
  return <StubPage path="/industries/solar-mounting-fasteners/" title="Solar Mounting Fasteners" />;
}
