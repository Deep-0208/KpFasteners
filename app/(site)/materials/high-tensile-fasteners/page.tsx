import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { StubPage } from '@/components/ui/StubPage';

export const metadata: Metadata = buildMetadata({
  path: '/materials/high-tensile-fasteners/',
  title: "High-Tensile Fasteners — Grades 8.8, 10.9, 12.9 | KP Fasteners",
  description: "High-tensile fasteners in property classes 8.8, 10.9 and 12.9 from KP Fasteners. Application matrix and grade tables pending verification.",
  noindex: true,
});

export default function Page() {
  return <StubPage path="/materials/high-tensile-fasteners/" title="High-Tensile Fasteners" />;
}
