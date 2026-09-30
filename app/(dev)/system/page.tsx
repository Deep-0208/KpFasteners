import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Accordion } from '@/components/ui/Accordion';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SpecTable } from '@/components/ui/SpecTable';
import { VerificationRequired } from '@/components/ui/VerificationRequired';
import { ClassificationBanner } from '@/components/ui/ClassificationBanner';

export const metadata: Metadata = {
  title: 'Design system — KP Fasteners',
  robots: { index: false, follow: false },
};

const swatches: [string, string][] = [
  ['--color-bg', '#F7F5F0'],
  ['--color-surface', '#FFFFFF'],
  ['--color-surface-alt', '#EFECE4'],
  ['--color-border', '#DAD4C6'],
  ['--color-border-strong', '#7A7568'],
  ['--color-ink', '#1B1D22'],
  ['--color-ink-muted', '#4B5058'],
  ['--color-ink-soft', '#6A6F79'],
  ['--color-brand-gold', '#886428'],
  ['--color-brand-gold-hover', '#6E501F'],
  ['--color-brand-gold-soft', '#F0E2C0'],
  ['--color-brand-gold-strong', '#5A421A'],
  ['--color-brand-steel', '#2E3A46'],
  ['--color-brand-steel-soft', '#DDE3E9'],
  ['--color-brand-silver', '#ACACAC'],
  ['--color-brand-silver-soft', '#E5E5E5'],
  ['--color-focus', '#0A66C2'],
  ['--color-success', '#1F7A3A'],
  ['--color-warning', '#8A5A00'],
  ['--color-danger', '#B4231C'],
];

export default function SystemPage() {
  // Gate this route behind the dev-routes flag in production.
  if (process.env.NODE_ENV === 'production' && !process.env.NEXT_PUBLIC_ENABLE_DEV_ROUTES) {
    notFound();
  }

  return (
    <>
      <Section>
        <Container>
          <Breadcrumbs
            trail={[
              { label: 'Home', href: '/' },
              { label: 'Design system', href: '/system/' },
            ]}
          />
          <Heading as="h1" variant="hero" className="mt-6">
            Design system preview
          </Heading>
          <hr className="rule-metal mt-4 w-40" />
          <p className="mt-4 max-w-2xl text-ink-muted">
            Every token, every component variant, every state. This route is
            <code className="mx-1 rounded bg-surface-alt px-1 py-0.5 font-mono text-sm">noindex</code>
            and 404s in production without <code>NEXT_PUBLIC_ENABLE_DEV_ROUTES=1</code>.
          </p>
        </Container>
      </Section>

      <Section variant="alt">
        <Container>
          <Heading as="h2" variant="section">
            Palette
          </Heading>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {swatches.map(([token, hex]) => (
              <div key={token} className="rounded-md border border-border bg-surface p-3">
                <div
                  className="h-16 w-full rounded border border-border"
                  style={{ background: hex }}
                />
                <p className="mt-2 truncate font-mono text-xs text-ink">{token}</p>
                <p className="font-mono text-xs text-ink-muted">{hex}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <p className="text-sm font-medium text-brand-steel">Metallic gradient</p>
            <div className="mt-2 h-4 w-full max-w-xl rounded bg-gradient-metal" />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading as="h2" variant="section">
            Typography ramp
          </Heading>
          <div className="mt-6 space-y-4">
            <Heading as="h3" variant="hero">Hero heading — the datasheet is the page</Heading>
            <Heading as="h3" variant="section">Section heading — foundation bolts</Heading>
            <Heading as="h3" variant="subsection">Subsection heading — mechanical properties</Heading>
            <Heading as="h3" variant="card">Card heading — grade 8.8</Heading>
            <p className="text-base leading-7 text-ink">Body text at 16px / 1.6 line-height. High tensile bolts to IS 1367 / ISO 898-1, grade 8.8 minimum, hot-dip galvanised on request.</p>
            <p className="text-sm text-ink-muted">Muted secondary caption — dimensions in millimetres unless otherwise noted.</p>
            <p className="text-sm text-ink-soft">Soft meta / disabled — pending client verification.</p>
          </div>
        </Container>
      </Section>

      <Section variant="alt">
        <Container>
          <Heading as="h2" variant="section">
            Buttons
          </Heading>
          <div className="mt-6 space-y-6">
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" size="sm">Primary sm</Button>
              <Button variant="primary" size="md">Primary md</Button>
              <Button variant="primary" size="lg">Primary lg</Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link-style</Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button disabled>Disabled</Button>
              <Button loading>Loading</Button>
              <Button href="/request-quote/">As a Link</Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading as="h2" variant="section">
            Cards
          </Heading>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Card>
              <p className="font-semibold text-brand-steel">Default card</p>
              <p className="mt-2 text-sm text-ink">Hairline border, hover elevation.</p>
            </Card>
            <Card variant="featured">
              <p className="font-semibold text-brand-steel">Featured card</p>
              <p className="mt-2 text-sm text-ink">Gold border, used for a primary product.</p>
            </Card>
            <Card variant="trust">
              <p className="font-semibold text-brand-steel">Trust card</p>
              <p className="mt-2 text-sm text-ink">Steel wash — used on quality / trust modules.</p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section variant="alt">
        <Container>
          <Heading as="h2" variant="section">
            Banners
          </Heading>
          <div className="mt-6 space-y-4">
            <ClassificationBanner classification="oem" />
            <ClassificationBanner classification="ambiguous" />
            <ClassificationBanner classification="trading" />
            <VerificationRequired />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading as="h2" variant="section">
            Spec table
          </Heading>
          <div className="mt-6">
            <SpecTable
              caption="Sample grades (illustrative, not verified)"
              headers={['Grade', 'Proof load (MPa)', 'Yield (MPa)', 'Tensile (MPa)']}
              rows={[
                { cells: ['4.6', '225', '240', '400'] },
                { cells: ['8.8', '580', '640', '800'] },
                { cells: ['10.9', '830', '900', '1040'] },
                { cells: ['12.9', '970', '1080', '1220'] },
              ]}
            />
          </div>
        </Container>
      </Section>

      <Section variant="alt">
        <Container>
          <Heading as="h2" variant="section">
            Accordion
          </Heading>
          <div className="mt-6">
            <Accordion
              items={[
                { question: 'Do you offer HDG?', answer: 'Yes, hot-dip galvanising is available on request for outdoor applications.' },
                { question: 'Metric and imperial?', answer: 'Both — metric M6 to M64 and imperial 1/4" to 2.5".' },
                { question: 'Lead time?', answer: 'Typically 7–14 working days depending on quantity and finish.' },
              ]}
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
