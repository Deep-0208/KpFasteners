import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Card } from '@/components/ui/Card';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { contactPage, breadcrumbs } from '@/lib/jsonld';
import { findRoute } from '@/data/routes';
import { productCategories } from '@/data/products';
import { RFQForm } from '@/components/forms/RFQForm';
import { Phone, MessageCircle } from 'lucide-react';

export const metadata: Metadata = buildMetadata({
  path: '/request-quote/',
  title: 'Request a Fastener Quote — KP Fasteners, Ahmedabad',
  description:
    'Send your bolt, nut, stud or anchor RFQ to KP Fasteners in Ahmedabad. Upload a drawing or BOQ, or WhatsApp us on +91 98982 30448.',
});

const WA_URL =
  'https://wa.me/919898230448?text=' +
  encodeURIComponent('Hello KP Fasteners, I want to request a quote.');

export default function RequestQuotePage() {
  const route = findRoute('/request-quote/');
  const trail = route?.breadcrumbTrail ?? [
    { label: 'Home', href: '/' },
    { label: 'Request a Quote', href: '/request-quote/' },
  ];
  const productOptions = productCategories.map((p) => ({
    value: p.slug,
    label: p.name,
  }));

  return (
    <>
      <JsonLd data={contactPage('/request-quote/')} />
      <JsonLd data={breadcrumbs(trail)} />

      <Section>
        <Container>
          <Breadcrumbs trail={trail} />
          <Heading as="h1" variant="hero" className="mt-6">
            Request a <span className="text-gold-gradient">Fastener Quote</span>
          </Heading>
          <p className="mt-4 max-w-2xl text-lg text-ink-muted">
            Spec-first intake. Share your BOQ, drawing or spec sheet and we quote with
            material, coating, lead time and MTC availability.
          </p>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <Card variant="glass" padding="lg">
              <Heading as="h2" variant="card">Send us your RFQ</Heading>
              <p className="mt-2 text-sm text-ink-muted">
                All fields marked * are required. We reply within one working day.
              </p>
              <div className="mt-6">
                <RFQForm productOptions={productOptions} />
              </div>
            </Card>

            <div>
              <Card variant="metallic" padding="lg">
                <Heading as="h2" variant="card">What to include</Heading>
                <ul className="mt-4 space-y-2 text-sm text-ink">
                  <li>• <strong>Product</strong> (e.g., Foundation Bolts)</li>
                  <li>• <strong>Grade / material</strong> (8.8, SS 304, B7)</li>
                  <li>• <strong>Coating</strong> (HDG, zinc, PTFE, self-colour)</li>
                  <li>• <strong>Diameter × length</strong> (e.g., M20 × 300 mm)</li>
                  <li>• <strong>Quantity</strong> (pieces or tonnage)</li>
                  <li>• <strong>Dispatch pin code</strong></li>
                  <li>• <strong>Drawing</strong> (PDF, DWG, DXF, PNG, JPG — ≤ 8 MB)</li>
                </ul>
              </Card>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="badge badge-gold">MTC 3.1 on request</span>
                <span className="badge badge-steel">Ahmedabad dispatch</span>
                <span className="badge badge-steel">WhatsApp support</span>
              </div>

              <Card variant="default" padding="lg" className="mt-6">
                <Heading as="h3" variant="card">Prefer to talk?</Heading>
                <p className="mt-2 text-sm text-ink-muted">
                  Some buyers don&apos;t want to fill a form — reach us directly.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <a href="tel:+919898230448" className="btn btn-secondary">
                    <Phone aria-hidden="true" className="h-4 w-4" />
                    &nbsp;Call +91 98982 30448
                  </a>
                  <a
                    href={WA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                  >
                    <MessageCircle aria-hidden="true" className="h-4 w-4" />
                    &nbsp;WhatsApp us
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* VERIFICATION PENDING: response-SLA wording — "within one working day"
          needs client confirmation before promotion to Title / meta description. */}
      {/* VERIFICATION PENDING: email sender domain — DMARC/DKIM for
          noreply@kpfasteners.com must be live before enabling Resend in prod. */}
    </>
  );
}
