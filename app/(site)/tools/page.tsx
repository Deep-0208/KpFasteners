import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Accordion } from '@/components/ui/Accordion';
import { JsonLd } from '@/components/seo/JsonLd';
import { FastenerToolsHub } from '@/components/tools/FastenerToolsHub';
import { buildMetadata, SITE_URL } from '@/lib/seo';
import { faqPage } from '@/lib/jsonld';
import { findRoute } from '@/data/routes';
import { company } from '@/data/company';
import { FileText, MessageCircle, Scale, Wrench, Anchor, CheckCircle2 } from 'lucide-react';

const PATH = '/tools/';

export const metadata: Metadata = buildMetadata({
  path: PATH,
  title: 'Fastener Weight & Torque Calculator | KP Fasteners',
  description:
    'Free industrial fastener engineering calculators: bolt and nut weight estimator, tightening torque, and foundation embedment depth. KP Fasteners.',
});

const FAQS = [
  {
    question: 'How accurate is the theoretical fastener weight calculator?',
    answer:
      'The calculator estimates weights based on standard ISO/DIN shank geometry, nominal thread pitch, head allowances, and material densities (e.g., 7.85 g/cm³ for carbon steel, 7.93 g/cm³ for SS 304, and 8.00 g/cm³ for SS 316). While actual piece weights may vary slightly by ±2–3% due to manufacturing head fillet radii and thread tolerances, the total batch weight provides highly accurate planning data for freight logistics, container loading, and raw material budgeting.',
  },
  {
    question: 'What friction coefficient should I use for bolt tightening torque?',
    answer:
      'For standard as-received lightly oiled or black oxide bolts (Grade 8.8 / 10.9), a friction coefficient of μ = 0.12 to 0.14 is standard. For zinc electroplated bolts, use μ = 0.15. For hot-dip galvanized (HDG) bolts without wax, friction increases to μ = 0.18 to 0.22. When tightening stainless steel (SS 304 / SS 316), always use anti-seize paste to prevent thread galling (cold-welding).',
  },
  {
    question: 'How is foundation bolt embedment depth calculated?',
    answer:
      'In accordance with IS 456 (Plain and Reinforced Concrete Code) and IS 5624, minimum embedment depth for standard anchor bolts ranges from 15d to 25d (where d is the nominal bolt diameter) depending on concrete grade and pullout tensile demand. For heavy vibration equipment or PEB steel columns, base plates or 90° L-bends provide supplementary mechanical anchorage.',
  },
  {
    question: 'Does KP Fasteners provide Mill Test Certificates (MTC) with dispatched orders?',
    answer:
      'Yes. Every batch of foundation bolts, stud bolts, and high-tensile fasteners manufactured or supplied by KP Fasteners is accompanied by an EN 10204 3.1 Mill Test Certificate (MTC) documenting chemical spectrometry analysis (C, Mn, Si, P, S, Cr, Ni, Mo), ultimate tensile strength (UTS), yield strength (0.2% proof stress), elongation, and hardness test results.',
  },
];

export default function ToolsPage() {
  const route = findRoute(PATH);
  const trail = route?.breadcrumbTrail ?? [
    { label: 'Home', href: '/' },
    { label: 'Engineering Tools', href: PATH },
  ];

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    '@id': `${SITE_URL}${PATH}#webapp`,
    name: 'KP Fasteners Engineering Tools & Weight Calculator',
    url: `${SITE_URL}${PATH}`,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    description:
      'Free suite of precision engineering tools for fastener weight calculation, tightening torque analysis, and foundation bolt embedment estimation.',
    creator: {
      '@type': 'Organization',
      name: company.legalName,
      url: SITE_URL,
    },
  };

  const wa = `https://wa.me/${company.whatsapp.number.replace(/[^\d]/g, '')}?text=${encodeURIComponent('Hello KP Fasteners, I calculated my fastener requirements using your Engineering Tools and would like to request an official quote.')}`;

  return (
    <>
      <JsonLd data={webAppSchema} />
      <JsonLd data={faqPage(FAQS)} />

      {/* 1. HERO SECTION */}
      <Section className="border-b border-border bg-gradient-to-b from-surface via-surface to-surface-alt pt-8 pb-12">
        <Container>
          <Breadcrumbs trail={trail} />

          <div className="mt-8 max-w-4xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="badge badge-gold">Engineering Tools &amp; Calculators</span>
              <span className="badge badge-steel">ISO 898-1 · IS 5624 · VDI 2230</span>
            </div>

            <Heading as="h1" variant="hero" className="mt-4 font-heading">
              Fastener Weight, Torque &amp; Embedment <span className="text-gold-gradient">Calculators</span>
            </Heading>

            <p className="mt-4 text-base sm:text-lg text-ink-muted leading-relaxed">
              Precision engineering calculators designed for procurement managers, structural design engineers, and EPC contractors. Calculate theoretical batch weights for logistics planning, determine calibrated tightening torque, and estimate foundation bolt embedment depths in seconds.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs sm:text-sm">
              <div className="flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 font-medium text-brand-steel">
                <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-accent-green" />
                No registration required
              </div>
              <div className="flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 font-medium text-brand-steel">
                <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-accent-green" />
                Exportable specification summaries
              </div>
              <div className="flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 font-medium text-brand-steel">
                <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-accent-green" />
                Direct RFQ quotation handoff
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. INTERACTIVE TOOLS HUB */}
      <Section className="py-12 bg-bg">
        <Container>
          <FastenerToolsHub />
        </Container>
      </Section>

      {/* 3. ENGINEERING WORKFLOW & SELECTION GUIDE */}
      <Section className="py-16 bg-surface border-t border-border">
        <Container>
          <div className="max-w-3xl">
            <span className="badge badge-steel mb-2">Technical Guidance</span>
            <Heading as="h2" variant="section" className="font-heading">
              How Industrial Buyers Use These Fastener Tools
            </Heading>
            <p className="mt-3 text-sm text-ink-muted leading-relaxed">
              Fastener procurement requires balancing structural load requirements with freight weight economics and metallurgical integrity.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-border bg-surface-alt p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gold/15 text-brand-gold-strong">
                <Scale aria-hidden="true" className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-heading text-base font-bold text-brand-steel">
                1. Freight &amp; Container Planning
              </h3>
              <p className="mt-2 text-xs text-ink-muted leading-relaxed">
                Convert piece counts into total metric tonnage to plan container space, calculate road freight freight costs, and verify warehouse slab loading capacities before dispatch from Ahmedabad.
              </p>
              <Link
                href="/products/foundation-bolts/"
                className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand-gold-strong hover:underline"
              >
                Explore Foundation Bolts →
              </Link>
            </div>

            <div className="rounded-2xl border border-border bg-surface-alt p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-steel/15 text-brand-steel">
                <Wrench aria-hidden="true" className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-heading text-base font-bold text-brand-steel">
                2. On-Site Assembly Calibration
              </h3>
              <p className="mt-2 text-xs text-ink-muted leading-relaxed">
                Ensure installation crews apply exact tightening torques without stripping threads or causing hydrogen embrittlement failures in high-tensile 8.8, 10.9, and 12.9 property classes.
              </p>
              <Link
                href="/materials/high-tensile-fasteners/"
                className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand-gold-strong hover:underline"
              >
                High-Tensile Grade Guide →
              </Link>
            </div>

            <div className="rounded-2xl border border-border bg-surface-alt p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gold/15 text-brand-gold-strong">
                <Anchor aria-hidden="true" className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-heading text-base font-bold text-brand-steel">
                3. Civil Foundation Verification
              </h3>
              <p className="mt-2 text-xs text-ink-muted leading-relaxed">
                Confirm anchor bolt embedment depths and hook dimensions against IS 456 standards before pouring foundation concrete for PEB columns, solar mounting arrays, and vibrating machinery.
              </p>
              <Link
                href="/industries/construction-infrastructure/"
                className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand-gold-strong hover:underline"
              >
                Construction Fasteners Range →
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. FREQUENTLY ASKED QUESTIONS */}
      <Section className="py-16 bg-surface-alt border-t border-border">
        <Container>
          <div className="max-w-3xl">
            <span className="badge badge-gold mb-2">Technical FAQ</span>
            <Heading as="h2" variant="section" className="font-heading">
              Frequently Asked Questions on Fastener Calculations
            </Heading>
            <p className="mt-2 text-sm text-ink-muted">
              Engineering guidelines on tolerances, torque settings, and testing documentation.
            </p>
          </div>

          <div className="mt-8 max-w-4xl">
            <Accordion items={FAQS} />
          </div>
        </Container>
      </Section>

      {/* 5. COMMERCIAL CTA STRIP */}
      <Section className="py-16 bg-brand-steel text-white">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="space-y-3 lg:col-span-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-brand-gold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-live-pulse absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green" />
                </span>
                Ahmedabad Manufacturing Plant &amp; Direct Dispatch
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Have a Complex Bill of Materials or Custom Drawing?
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                Send us your engineering drawings, required tensile grades, or bulk bill of quantities. Our technical sales team provides formal commercial quotations within 2 to 4 working hours.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
              <Link
                href="/request-quote/"
                className="btn btn-primary btn-shimmer flex items-center justify-center gap-2 py-3 px-6 text-sm font-semibold shadow-gold"
              >
                <FileText aria-hidden="true" className="h-4 w-4" />
                <span>Submit Drawing for RFQ</span>
              </Link>

              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 py-3 px-5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                <MessageCircle aria-hidden="true" className="h-4 w-4 text-accent-green" />
                <span>WhatsApp Sales Desk</span>
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
