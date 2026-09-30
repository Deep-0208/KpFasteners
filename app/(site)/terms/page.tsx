import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { StubPage } from '@/components/ui/StubPage';

export const metadata: Metadata = buildMetadata({
  path: '/terms/',
  title: "Terms of Supply — KP Fasteners",
  description: "Standard terms of supply for orders placed with KP Fasteners.",
  noindex: true,
});

export default function Page() {
  return <StubPage path="/terms/" title="Terms of Supply" />;
}
