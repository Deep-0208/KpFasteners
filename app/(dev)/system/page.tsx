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

// Client-approved kpfastner_old palette (2026-09-30). Swatches list both the
// canonical ramp tokens and the Phase-B semantic aliases they resolve to.
const goldRamp: [string, string][] = [
  ['--gold-50', '#FFFDF5'],
  ['--gold-100', '#FEF3C7'],
  ['--gold-200', '#FDE68A'],
  ['--gold-300', '#FCD34D'],
  ['--gold-400', '#F59E0B'],
  ['--gold-500', '#D97706'],
  ['--gold-600', '#B45309'],
  ['--gold-700', '#92400E'],
  ['--gold-800', '#78350F'],
];
const steelRamp: [string, string][] = [
  ['--steel-50', '#FFFFFF'],
  ['--steel-100', '#F8FAFC'],
  ['--steel-200', '#F1F5F9'],
  ['--steel-300', '#E2E8F0'],
  ['--steel-400', '#CBD5E1'],
  ['--steel-500', '#94A3B8'],
  ['--steel-600', '#64748B'],
  ['--steel-700', '#475569'],
  ['--steel-800', '#334155'],
  ['--steel-900', '#0F172A'],
];
const swatches: [string, string][] = [
  ['--color-bg', '#F8FAFC'],
  ['--color-surface', '#FFFFFF'],
  ['--color-surface-alt', '#F1F5F9'],
  ['--color-border', '#E2E8F0'],
  ['--color-border-strong', '#64748B'],
  ['--color-ink', '#0F172A'],
  ['--color-ink-muted', '#475569'],
  ['--color-ink-soft', '#64748B'],
  ['--color-brand-gold', '#B45309'],
  ['--color-brand-gold-hover', '#92400E'],
  ['--color-brand-gold-soft', '#FEF3C7'],
  ['--color-brand-gold-strong', '#92400E'],
  ['--color-brand-steel', '#334155'],
  ['--color-brand-steel-soft', '#F1F5F9'],
  ['--color-brand-silver', '#94A3B8'],
  ['--color-brand-silver-soft', '#E2E8F0'],
  ['--color-focus', '#0284C7'],
  ['--color-success', '#047857'],
  ['--color-warning', '#92400E'],
  ['--color-danger', '#DC2626'],
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
          <Heading as="h2" variant="section">Gold ramp</Heading>
          <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-5 md:grid-cols-9">
            {goldRamp.map(([token, hex]) => (
              <div key={token} className="rounded-md border border-border bg-surface p-3">
                <div className="h-16 w-full rounded border border-border" style={{ background: hex }} />
                <p className="mt-2 truncate font-mono text-xs text-ink">{token}</p>
                <p className="font-mono text-xs text-ink-muted">{hex}</p>
              </div>
            ))}
          </div>

          <Heading as="h2" variant="section" className="mt-10">Steel ramp</Heading>
          <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-5 md:grid-cols-10">
            {steelRamp.map(([token, hex]) => (
              <div key={token} className="rounded-md border border-border bg-surface p-3">
                <div className="h-16 w-full rounded border border-border" style={{ background: hex }} />
                <p className="mt-2 truncate font-mono text-xs text-ink">{token}</p>
                <p className="font-mono text-xs text-ink-muted">{hex}</p>
              </div>
            ))}
          </div>

          <Heading as="h2" variant="section" className="mt-10">Semantic aliases</Heading>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {swatches.map(([token, hex]) => (
              <div key={token} className="rounded-md border border-border bg-surface p-3">
                <div className="h-16 w-full rounded border border-border" style={{ background: hex }} />
                <p className="mt-2 truncate font-mono text-xs text-ink">{token}</p>
                <p className="font-mono text-xs text-ink-muted">{hex}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-3">
            <div>
              <p className="text-sm font-semibold text-brand-steel">Gold gradient</p>
              <div className="mt-2 h-6 w-full max-w-xl rounded bg-gradient-gold" />
            </div>
            <div>
              <p className="text-sm font-semibold text-brand-steel">Gold gradient (shine)</p>
              <div className="mt-2 h-6 w-full max-w-xl rounded bg-gradient-gold-shine" />
            </div>
            <div>
              <p className="text-sm font-semibold text-brand-steel">Chrome gradient</p>
              <div className="mt-2 h-6 w-full max-w-xl rounded bg-gradient-chrome" />
            </div>
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
              <Button variant="whatsapp">WhatsApp</Button>
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
            <Card variant="default">
              <p className="font-semibold text-brand-steel">Default / glass</p>
              <p className="mt-2 text-sm text-ink">Hairline border, gold-tinted hover.</p>
            </Card>
            <Card variant="metallic">
              <p className="font-semibold text-brand-steel">Metallic</p>
              <p className="mt-2 text-sm text-ink">Gold top strip, primary product treatment.</p>
            </Card>
            <Card variant="trust">
              <p className="font-semibold text-brand-steel">Trust card</p>
              <p className="mt-2 text-sm text-ink">Steel wash — quality / trust modules.</p>
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
