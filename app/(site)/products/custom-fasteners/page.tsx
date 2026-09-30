import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { StubPage } from '@/components/ui/StubPage';

export const metadata: Metadata = buildMetadata({
  path: '/products/custom-fasteners/',
  title: "Custom Fasteners — Drawing-Based Sourcing | KP Fasteners",
  description: "Non-standard fasteners sourced to customer drawings through KP Fasteners' partner network. Send your specifications for a project quote.",
  noindex: true,
});

export default function Page() {
  return <StubPage path="/products/custom-fasteners/" title="Custom Fasteners" classification="trading" />;
}
