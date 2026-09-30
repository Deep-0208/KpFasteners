import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { StubPage } from '@/components/ui/StubPage';

export const metadata: Metadata = buildMetadata({
  path: '/privacy-policy/',
  title: "Privacy Policy — KP Fasteners",
  description: "How KP Fasteners handles enquiries and personal data submitted through this website.",
  noindex: true,
});

export default function Page() {
  return <StubPage path="/privacy-policy/" title="Privacy Policy" />;
}
