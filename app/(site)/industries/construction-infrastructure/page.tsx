import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { StubPage } from '@/components/ui/StubPage';

export const metadata: Metadata = buildMetadata({
  path: '/industries/construction-infrastructure/',
  title: "Construction & Infrastructure Fasteners — KP Fasteners",
  description: "Foundation bolts, tie rods, and structural fasteners supplied to construction and infrastructure projects across India.",
  noindex: true,
});

export default function Page() {
  return <StubPage path="/industries/construction-infrastructure/" title="Construction & Infrastructure" />;
}
