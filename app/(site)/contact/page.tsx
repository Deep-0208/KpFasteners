import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MessageCircle, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Card } from '@/components/ui/Card';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { contactPage, localBusiness, breadcrumbs } from '@/lib/jsonld';
import { company } from '@/data/company';
import { findRoute } from '@/data/routes';

export const metadata: Metadata = buildMetadata({
  path: '/contact/',
  title: 'Contact KP Fasteners — Ahmedabad Factory & Sales',
  description:
    'Call, WhatsApp or email KP Fasteners at 23/4 Ghanshyam Industrial Estate, Ahmedabad 380024. Phone +91 98982 30448. Mon–Sat 09:30–19:00 IST.',
});

const WA_URL =
  'https://wa.me/919898230448?text=' +
  encodeURIComponent('Hello KP Fasteners, I have an enquiry.');
const TEL = 'tel:+919898230448';
const MAP_SRC =
  'https://www.google.com/maps?q=' +
  encodeURIComponent('23/4 Ghanshyam Industrial Estate, Margha Farm, Ahmedabad 380024') +
  '&output=embed';

export default function ContactPage() {
  const route = findRoute('/contact/');
  const trail = route?.breadcrumbTrail ?? [
    { label: 'Home', href: '/' },
    { label: 'Contact', href: '/contact/' },
  ];

  return (
    <>
      <JsonLd data={contactPage('/contact/')} />
      {/* NOTE: localBusiness JSON-LD does not include `geo` yet — lat/lng
          pending from Google Maps. DO NOT invent coordinates. */}
      <JsonLd data={localBusiness()} />
      <JsonLd data={breadcrumbs(trail)} />

      <Section>
        <Container>
          <Breadcrumbs trail={trail} />
          <Heading as="h1" variant="hero" className="mt-6">
            Contact <span className="text-gold-gradient">KP Fasteners</span>
          </Heading>
          <p className="mt-4 max-w-2xl text-lg text-ink-muted">
            Phone, WhatsApp or email our Ahmedabad sales desk. Factory, warehouse and
            office sit at a single address — one point of contact for quotes, dispatch
            and documentation.
          </p>

          {/* Three contact-method cards */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Card variant="metallic" padding="lg">
              <Phone aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
              <Heading as="h2" variant="card" className="mt-3">Phone</Heading>
              <p className="mt-2">
                <a
                  href={TEL}
                  className="font-heading text-lg font-semibold text-brand-steel hover:text-brand-gold-strong"
                >
                  +91 98982 30448
                </a>
              </p>
              <p className="mt-2 text-sm text-ink-muted">Mon–Sat, business hours</p>
            </Card>

            <Card variant="metallic" padding="lg">
              <MessageCircle aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
              <Heading as="h2" variant="card" className="mt-3">WhatsApp</Heading>
              <p className="mt-3">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  Chat on WhatsApp
                </a>
              </p>
              <p className="mt-2 text-sm text-ink-muted">
                Faster response — attach specs or photos
              </p>
            </Card>

            <Card variant="metallic" padding="lg">
              <Mail aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
              <Heading as="h2" variant="card" className="mt-3">Email</Heading>
              <p className="mt-2">
                <a
                  href="mailto:sales@kpfasteners.com"
                  className="font-heading text-lg font-semibold text-brand-steel hover:text-brand-gold-strong break-all"
                >
                  sales@kpfasteners.com
                </a>
              </p>
              <p className="mt-2 text-sm text-ink-muted">Replies within one working day</p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Address + hours */}
      <Section variant="alt" aria-label="Address and hours">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <Card variant="glass" padding="lg">
              <div className="flex items-start gap-3">
                <MapPin aria-hidden="true" className="mt-1 h-6 w-6 text-brand-gold-strong" />
                <div>
                  <Heading as="h2" variant="card">Factory, warehouse &amp; office</Heading>
                  <address className="mt-3 not-italic text-ink">
                    {company.legalName}
                    <br />
                    23/4 Ghanshyam Industrial Estate
                    <br />
                    Margha Farm, Ahmedabad — 380024
                    <br />
                    Gujarat, India
                  </address>
                  <p className="mt-3 text-sm text-ink-muted">
                    GST&nbsp;24ARDPP9803A1Z3 · MSME Registered · Proprietorship
                  </p>
                </div>
              </div>
            </Card>

            <Card variant="glass" padding="lg">
              <div className="flex items-start gap-3">
                <Clock aria-hidden="true" className="mt-1 h-6 w-6 text-brand-gold-strong" />
                <div>
                  <Heading as="h2" variant="card">Working hours</Heading>
                  <table className="mt-3 text-sm">
                    <tbody>
                      <tr>
                        <td className="pr-6 py-0.5 text-ink">Monday – Saturday</td>
                        <td className="py-0.5 text-ink">09:30 – 19:00 IST</td>
                      </tr>
                      <tr>
                        <td className="pr-6 py-0.5 text-ink">Sunday</td>
                        <td className="py-0.5 text-ink-muted">Closed</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="mt-3 text-sm text-ink-muted">
                    Visits by prior appointment appreciated — call ahead so the right
                    team member is on site.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Map — plain iframe, aspect-ratio wrapper prevents CLS */}
          <div className="mt-8 overflow-hidden rounded-[14px] border border-border shadow-card">
            <div style={{ aspectRatio: '16 / 9' }} className="w-full">
              <iframe
                title="KP Fasteners factory location — Ahmedabad"
                src={MAP_SRC}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Why reach us here */}
      <Section>
        <Container>
          <Heading as="h2" variant="section">Why reach us here</Heading>
          <p className="mt-3 max-w-2xl text-ink-muted">
            Direct lines to the sales desk — not a form that disappears into a shared
            inbox.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Card variant="default" padding="lg">
              <ShieldCheck aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
              <Heading as="h3" variant="card" className="mt-3">Visible phone &amp; WhatsApp</Heading>
              <p className="mt-2 text-sm text-ink-muted">
                One number for both. We answer during working hours — no gatekeeping.
              </p>
            </Card>
            <Card variant="default" padding="lg">
              <ShieldCheck aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
              <Heading as="h3" variant="card" className="mt-3">Real factory address</Heading>
              <p className="mt-2 text-sm text-ink-muted">
                Ghanshyam Industrial Estate, Ahmedabad. Not a virtual office.
              </p>
            </Card>
            <Card variant="default" padding="lg">
              <ShieldCheck aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
              <Heading as="h3" variant="card" className="mt-3">MTC on request</Heading>
              <p className="mt-2 text-sm text-ink-muted">
                EN 10204 3.1 mill test certificates available on OEM orders.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section variant="alt">
        <Container>
          <Card variant="metallic" padding="lg">
            <Heading as="h2" variant="subsection">
              <span className="text-gold-gradient">Have a BOQ or drawing?</span>
            </Heading>
            <p className="mt-3 max-w-2xl text-ink-muted">
              Our quote form captures everything we need to price a job — standard,
              grade, coating, quantity, pin code, and your drawing.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/request-quote/" className="btn btn-primary">
                Request a Quote
              </Link>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                WhatsApp us
              </a>
            </div>
          </Card>
        </Container>
      </Section>

      {/* VERIFICATION PENDING: contact-person name — business card lists
          "Mr. Pramod Panchal" but IndiaMART storefront MD is "Kabir Panchal".
          Resolve before publishing a named "Your enquiry lands with..." paragraph. */}
      {/* VERIFICATION PENDING: factory lat/lng — need 5-decimal coordinates
          from Google Maps to populate LocalBusiness.geo and Maps Static embed. */}
      {/* VERIFICATION PENDING: Google Business Profile URL — add to
          company.sameAs once the GBP listing is claimed. */}
    </>
  );
}
