import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Card } from '@/components/ui/Card';
import { VerificationRequired } from '@/components/ui/VerificationRequired';
import { ClassificationBanner } from '@/components/ui/ClassificationBanner';
import { homepage } from '@/data/homepage';
import { company } from '@/data/company';

/**
 * Homepage scaffold. Every block below is a placeholder — the visual
 * composition mirrors the client-approved demo (hero → trust bar → product
 * catalog → quality → local presence → closing CTA). Real copy will land in
 * a later gate; no `'use client'` needed — this stays a Server Component.
 */
export default function HomePage() {
  const tel = `tel:${company.telephones[0].replace(/[^\d+]/g, '')}`;
  const wa = `https://wa.me/${company.whatsapp.number.replace(/[^\d]/g, '')}?text=${encodeURIComponent(company.whatsapp.prefill)}`;

  return (
    <>
      {/* 0. Verification band — removed at content-fill gate. */}
      <Section>
        <Container>
          <VerificationRequired>
            Site under construction — copy pending client review. Layout mirrors
            the client-approved kpfastner_old demo (2026-09-30).
          </VerificationRequired>
        </Container>
      </Section>

      {/* 1. Hero — gold-gradient headline + primary/secondary/WhatsApp CTAs. */}
      <Section>
        <Container>
          <p className="badge badge-gold">Industrial fasteners · Ahmedabad</p>
          <Heading as="h1" variant="hero" className="mt-4">
            <span className="text-gold-gradient">{homepage.heroH1}</span>
          </Heading>
          <hr className="rule-metal mt-4 w-40" aria-hidden="true" />
          <p className="mt-6 max-w-2xl text-lg text-ink-muted">
            {homepage.heroTagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={homepage.primaryCta.href} className="btn btn-primary">
              {homepage.primaryCta.label}
            </Link>
            <a href={tel} className="btn btn-secondary">
              Call {company.telephones[0]}
            </a>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              WhatsApp
            </a>
          </div>
        </Container>
      </Section>

      {/* 2. Trust bar — light steel band with quick facts. */}
      <Section variant="alt" aria-label="Trust bar">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              'MTC 3.1 certificates',
              'MSME registered',
              'GST 24ARDPP9803A1Z3',
              'Ahmedabad manufacturing hub',
            ].map((label) => (
              <Card key={label} variant="glass" padding="sm">
                <p className="font-heading text-sm font-semibold text-brand-steel">{label}</p>
                <p className="mt-1 text-xs text-ink-muted">Populated in the content-fill gate.</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. Product catalog — OEM (gold) + trading (steel) rails. */}
      <Section>
        <Container>
          <Heading as="h2" variant="section">Product catalog</Heading>
          <p className="mt-3 max-w-2xl text-ink-muted">
            Manufactured in-house at our Ahmedabad plant, plus a curated
            distribution range for balance-of-plant hardware.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card variant="metallic">
              <ClassificationBanner classification="oem" />
              <div className="mt-4">
                <Heading as="h3" variant="card">In-house manufacturing</Heading>
                <p className="mt-2 text-sm text-ink-muted">
                  Foundation bolts · stud bolts · tie rods · sag rods · custom
                  fasteners. Product cards land here after content review.
                </p>
              </div>
            </Card>
            <Card variant="glass">
              <ClassificationBanner classification="trading" />
              <div className="mt-4">
                <Heading as="h3" variant="card">Distribution range</Heading>
                <p className="mt-2 text-sm text-ink-muted">
                  Hex bolts / nuts · CSK Allen bolts · solar &amp; scaffold
                  accessories — sourced from vetted partners.
                </p>
              </div>
            </Card>
          </div>
          <div className="mt-6">
            <Link href="/products/" className="btn btn-secondary">
              Browse all products
            </Link>
          </div>
        </Container>
      </Section>

      {/* 4. Quality strip. */}
      <Section variant="alt" aria-label="Quality">
        <Container>
          <Heading as="h2" variant="section">Quality &amp; certifications</Heading>
          <p className="mt-3 max-w-2xl text-ink-muted">
            EN 10204 3.1 MTCs, coating and dimensional QA protocols. Populated
            in the content-fill gate.
          </p>
        </Container>
      </Section>

      {/* 5. Local presence. */}
      <Section aria-label="Local presence">
        <Container>
          <Heading as="h2" variant="section">Ahmedabad manufacturing hub</Heading>
          <p className="mt-3 max-w-2xl text-ink-muted">
            Factory location, logistics reach, and export corridors. Populated
            in the content-fill gate.
          </p>
        </Container>
      </Section>

      {/* 6. Closing CTA. */}
      <Section variant="alt">
        <Container>
          <Card variant="metallic" padding="lg">
            <Heading as="h2" variant="subsection">
              <span className="text-gold-gradient">Submit an RFQ or talk to a specialist</span>
            </Heading>
            <p className="mt-3 max-w-2xl text-ink-muted">
              Upload a drawing or share a bill of materials — we quote back with
              standards, coatings, and lead time.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/request-quote/" className="btn btn-primary">
                Request a quote
              </Link>
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                WhatsApp us
              </a>
              <a href={tel} className="btn btn-secondary">
                Call {company.telephones[0]}
              </a>
            </div>
          </Card>
        </Container>
      </Section>
    </>
  );
}
