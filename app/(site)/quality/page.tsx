import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { StubPage } from '@/components/ui/StubPage';

export const metadata: Metadata = buildMetadata({
  path: '/quality/',
  title: "Quality & Certifications — KP Fasteners",
  description: "KP Fasteners quality controls, testing, and available documentation. Full certification list pending client verification.",
  noindex: true,
});

export default function Page() {
  return <StubPage path="/quality/" title="Quality & Certifications" />;
}
