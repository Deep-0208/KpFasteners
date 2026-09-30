import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { StubPage } from '@/components/ui/StubPage';

export const metadata: Metadata = buildMetadata({
  path: '/products/custom-fasteners/',
  title: "Custom Fasteners — Drawing-Based Manufacturing | KP Fasteners",
  description: "KP Fasteners produces custom-engineered fasteners from customer drawings. Send your specifications for a project quote.",
  noindex: true,
});

export default function Page() {
  return <StubPage path="/products/custom-fasteners/" title="Custom Fasteners" />;
}
