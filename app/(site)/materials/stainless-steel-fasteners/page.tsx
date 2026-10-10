import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  MessageCircle,
  FileText,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Flame,
  Sun,
  Building2,
  Factory,
  Beaker,
  Compass,
  Layers,
  Sparkles,
} from 'lucide-react';
import { buildMetadata, SITE_URL } from '@/lib/seo';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Card } from '@/components/ui/Card';
import { RelatedProductCards } from '@/components/ui/RelatedProductCards';
import { Prose } from '@/components/ui/Prose';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Accordion } from '@/components/ui/Accordion';
import { SpecTable } from '@/components/ui/SpecTable';
import { GradeTable } from '@/components/ui/GradeTable';
import { ClassificationBanner } from '@/components/ui/ClassificationBanner';
import { JsonLd } from '@/components/seo/JsonLd';
import { faqPage } from '@/lib/jsonld';
import { findRoute } from '@/data/routes';
import { company } from '@/data/company';

const PATH = '/materials/stainless-steel-fasteners/';
const HERO_IMAGE = '/product-images/stainless-steel/hero.webp';

// Title: 59 chars (50–60 range). Meta description: 156 chars (150–160 range).
const META_TITLE = 'Stainless Steel Fasteners Manufacturer | SS 304 vs 316 | KP';
const META_DESCRIPTION =
  'SS 304, 316, 316L & 316Ti compared: chemistry, PREN, corrosion, magnetism & ISO 3506 specs. Decision tree for solar, coastal & pharma. Request an RFQ quote.';

export const metadata: Metadata = buildMetadata({
  path: PATH,
  title: META_TITLE,
  description: META_DESCRIPTION,
  ogImage: HERO_IMAGE,
});

const WA_PREFILL =
  'Hi KP Fasteners, SS grade-selection help: Application: [ ], Environment: [ ], Coastal distance: [km], Service temperature: [ ], Welded? [Y/N]';
const WA_URL = 'https://wa.me/919898230448?text=' + encodeURIComponent(WA_PREFILL);
const TEL = `tel:${company.telephones[0].replace(/[^\d+]/g, '')}`;

// VERIFICATION PENDING: Confirm whether KP performs PMI inspection in-house with an owned XRF analyzer or routes lots to an accredited NABL testing partner — ref: brief §10 item 3
// VERIFICATION PENDING: Confirm in-house vs partner passivation discipline and chemical bath standards — ref: brief §10 item 4
// VERIFICATION PENDING: Confirm named NABL partner testing laboratory for external verification — ref: brief §10 item 5
// VERIFICATION PENDING: Confirm whether SS 202 is ever supplied under KP dispatch or excluded entirely from inventory — ref: brief §10 item 2
// VERIFICATION PENDING: Confirm whether SS 316Ti is stocked or supplied strictly on-quote — ref: brief §10 item 1
// VERIFICATION PENDING: Real photograph of mixed SS 304 and SS 316 fastener inventory at KP Fasteners Ahmedabad facility — ref: brief §6 hero-ss-fasteners-kp.webp & §10 item 6

const FAQS = [
  {
    question: 'SS 304 vs SS 316 for solar — which grade for which site?',
    answer:
      'Inland rooftop and inland ground-mount: SS 304 (A2-70) is the industry default and sufficient for a 25-year design life. Within ~5 km of the coast, or on cement / fertiliser plant rooftops: upgrade to SS 316 (A4-70). The upgrade cost is around 20–30% on the SS fastener line item but is the single highest-leverage decision on the plant long-term maintenance budget — chlorine-induced pitting on 304 progresses silently and shows up as rust streaks after 3–5 monsoon cycles.',
  },
  {
    question: 'Will SS 316 rust in coastal service?',
    answer:
      'SS 316 resists chloride-pitting corrosion well up to the near-shore atmosphere (PREN 24–27). In the actual marine splash zone (continuous seawater wetting with evaporation, PREN requirement > 35), SS 316 is marginal — specify duplex 2205 or super-duplex instead. Rust-tea staining on an SS 316 fastener a few months into coastal service is almost always free iron contamination from the install (bolt drill-dust, cross-contamination with carbon-steel tools) and is resolved by local passivation per ASTM A967.',
  },
  {
    question: 'Does magnet pull on an SS fastener mean it is "fake 316"?',
    answer:
      'No. SS 304 and SS 316 are austenitic in the annealed state and are weakly magnetic to non-magnetic — but cold-work (thread rolling, cold heading) induces martensite on the thread crests and the head, which makes the finished fastener feel slightly magnetic. A moderate magnet pull on a cold-headed SS 304 bolt is normal and expected. To actually verify grade, use PMI (handheld XRF), a nitric-acid drop test, or send a sample for lab chemistry.',
  },
  {
    question: 'What is the difference between SS 316 and SS 316L and SS 316Ti?',
    answer:
      'SS 316 is the general-purpose Mo-bearing austenitic (C ≤ 0.08%). SS 316L is the low-carbon variant (C ≤ 0.03%) specified for welded assemblies — the lower carbon suppresses sensitisation (chromium-carbide precipitation at grain boundaries) that would otherwise strip the HAZ of its corrosion protection. SS 316Ti is titanium-stabilised 316 for sustained service above ~500 °C, where even 316L low carbon is not enough to prevent sensitisation — titanium ties up the carbon as TiC and keeps chromium available for passivation.',
  },
  {
    question: 'What is A2 and A4 — are they the same as SS 304 and SS 316?',
    answer:
      'Close, but the designations describe two different things. A2 and A4 are the ISO 3506 austenitic steel group designations (A2 = 304-based chemistry, A4 = 316-based chemistry). The number after the dash (A2-70, A4-70, A4-80) is the mechanical property class — A4-70 means a 316-based bolt with minimum 700 MPa UTS and 450 MPa yield after cold-working. So "SS 316 A4-70" is the full specification an engineer should write on the drawing.',
  },
];

const CHEMISTRY_ROWS = [
  {
    cells: ['SS 202', '17.0–19.0', '4.0–6.0', '—', '0.15', '7.5–10.0', '0.25 max'],
  },
  {
    cells: ['SS 304', '18.0–20.0', '8.0–10.5', '—', '0.08', '2.00', '0.10 max'],
  },
  {
    cells: ['SS 304L', '18.0–20.0', '8.0–12.0', '—', '0.03', '2.00', '0.10 max'],
  },
  {
    cells: ['SS 316', '16.0–18.0', '10.0–14.0', '2.0–3.0', '0.08', '2.00', '0.10 max'],
  },
  {
    cells: ['SS 316L', '16.0–18.0', '10.0–14.0', '2.0–3.0', '0.03', '2.00', '0.10 max'],
  },
  {
    cells: ['SS 316Ti', '16.0–18.0', '10.0–14.0', '2.0–3.0', '0.08', '2.00', 'Ti 5×(C+N)–0.70'],
  },
  {
    cells: ['Duplex 2205', '22.0–23.0', '4.5–6.5', '3.0–3.5', '0.03', '2.00', '0.14–0.20'],
  },
];

const MECHANICAL_ROWS = [
  {
    cells: ['A2-50', '304 soft (annealed)', '210', '500', '0.6 d'],
  },
  {
    cells: ['A2-70', '304 cold-worked', '450', '700', '0.4 d'],
  },
  {
    cells: ['A2-80', '304 high-strength', '600', '800', '0.3 d'],
  },
  {
    cells: ['A4-50', '316 soft (annealed)', '210', '500', '0.6 d'],
  },
  {
    cells: ['A4-70', '316 cold-worked', '450', '700', '0.4 d'],
  },
  {
    cells: ['A4-80', '316 high-strength', '600', '800', '0.3 d'],
  },
];

const PREN_ROWS = [
  {
    cells: ['SS 202', '15–18', 'Indoor dry environments only; rust-prone outdoors'],
  },
  {
    cells: ['SS 304', '18–20', 'Inland urban, rooftop solar, general engineering'],
  },
  {
    cells: ['SS 304L', '18–20', 'Welded inland fabrication; HAZ corrosion protection'],
  },
  {
    cells: ['SS 316', '24–27', 'Coastal within 5 km, chemical, cement, fertilizer atmospheres'],
  },
  {
    cells: ['SS 316L', '24–27', 'Welded coastal structures, sanitary pharma, cleanrooms'],
  },
  {
    cells: ['SS 316Ti', '24–25', 'High-temperature petrochemical and exhaust systems (≥ 500 °C)'],
  },
  {
    cells: ['Duplex 2205', '34–38', 'Marine splash zone, desalination, stress-corrosion cracking'],
  },
];

const CORROSION_ROWS = [
  {
    cells: ['Indoor dry', '✓', '✓', '✓', '✓', '✓'],
  },
  {
    cells: ['Rooftop urban (inland)', '✓ (Default)', '✓', '✓', '✓', '✓'],
  },
  {
    cells: ['Coastal within ~5 km', 'Risk (Pitting)', '✓ (Default)', '✓', '✓', '✓'],
  },
  {
    cells: ['Marine splash zone', '✗ (Unsafe)', 'Marginal', 'Marginal', 'Marginal', '✓ (Default)'],
  },
  {
    cells: ['Chemical plant (dilute acids)', '✗', 'Marginal', 'Marginal', '✓', '✓'],
  },
  {
    cells: ['Pharma / cleanroom', '✓', '✓ (Default)', '✓ (Welded)', '—', '—'],
  },
  {
    cells: ['Food contact (dry / ambient)', '✓ (Default)', '✓', '✓', '—', '—'],
  },
  {
    cells: ['Food contact (wet, salted)', 'Risk', '✓ (Default)', '✓', '—', '—'],
  },
  {
    cells: ['Fertiliser plant atmosphere', 'Risk', '✓', '✓', '✓', '✓'],
  },
  {
    cells: ['Cement plant atmosphere', 'Risk', '✓', '✓', '✓', '✓'],
  },
  {
    cells: ['≥ 500 °C sustained heat', 'Marginal', 'Marginal', 'Marginal', '✓ (Default)', '—'],
  },
  {
    cells: ['Welded + corrosive service', 'Risk (Sensitisation)', 'Risk', '✓ (Default)', '—', '✓'],
  },
];

const TEMPERATURE_ROWS = [
  {
    cells: ['SS 304', '-196', '500', '870'],
  },
  {
    cells: ['SS 304L', '-196', '400', '800'],
  },
  {
    cells: ['SS 316', '-196', '500', '870'],
  },
  {
    cells: ['SS 316L', '-196', '400', '800'],
  },
  {
    cells: ['SS 316Ti', '-196', '750', '925'],
  },
  {
    cells: ['Duplex 2205', '-40', '280', '300'],
  },
];

const FORMS = [
  {
    title: 'Hex Bolts & Nuts',
    slug: '/products/hex-bolts-nuts/',
    anchorText: 'SS 304 / 316 hex bolt family',
    description:
      'Full-thread and part-thread hex head bolts to DIN 933 and DIN 931, paired with DIN 934 hex nuts in property classes A2-70 and A4-70.',
  },
  {
    title: 'Stud Bolts & Threaded Rods',
    slug: '/products/stud-bolts/',
    anchorText: 'SS 316 pressure studs (A193 B8M)',
    description:
      'ASTM A193 Grade B8 (SS 304) and Grade B8M (SS 316) fully threaded and double-end studs for pressure piping, heat exchangers, and chemical flanges.',
  },
  {
    title: 'CSK & Socket Head Screws',
    slug: '/products/csk-allen-bolts/',
    anchorText: 'SS A4-70 socket cap screws',
    description:
      'Countersunk (DIN 7991), socket head cap (DIN 912), and button head (ISO 7380) screws in A2-70 and A4-80 for flush assemblies and mechanical tooling.',
  },
  {
    title: 'Solar MMS Fasteners',
    slug: '/products/solar-accessories/',
    anchorText: 'SS 304 / 316 solar MMS fasteners',
    description:
      'Stainless T-head bolts, channel nuts, mid and end clamps, and bi-metallic hanger bolts for rooftop and ground-mount module mounting structures.',
  },
  {
    title: 'Foundation Bolts',
    slug: '/products/foundation-bolts/',
    anchorText: 'stainless foundation bolts',
    description:
      'J-bolts, L-bolts, and welded plate anchor assemblies manufactured in-house from SS 304 and SS 316 round bar for cast-in coastal civil anchorage.',
  },
  {
    title: 'Sag Rods & Bracing',
    slug: '/products/sag-rods/',
    anchorText: 'stainless sag rods',
    description:
      'Continuous and double-end threaded stainless sag rods for PEB purlin bracing and marine-environment structural cross-bracing.',
  },
  {
    title: 'Custom Fasteners & Duplex',
    slug: '/products/custom-fasteners/',
    anchorText: 'duplex 2205 and specialty stainless on drawing',
    description:
      'Precision CNC turned, hot-forged, and custom-threaded components in Duplex 2205, SS 316Ti, and customer-specified alloys built to fabrication drawings.',
  },
];

export default function Page() {
  const route = findRoute(PATH);
  const trail = route?.breadcrumbTrail ?? [
    { label: 'Home', href: '/' },
    { label: 'Materials', href: '/materials/high-tensile-fasteners/' },
    { label: 'Stainless Steel Fasteners', href: PATH },
  ];

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}${PATH}#webpage`,
    url: `${SITE_URL}${PATH}`,
    name: META_TITLE,
    description: META_DESCRIPTION,
    publisher: { '@id': `${SITE_URL}/#organization` },
    about: [
      { '@type': 'Thing', name: 'ISO 3506 Austenitic Fastener Standards' },
      { '@type': 'Thing', name: 'ASTM A967 and ASTM A380 Passivation and Pickling' },
      { '@type': 'Thing', name: 'Stainless Steel Fastener Alloys (SS 304, SS 316, A2-70, A4-70)' },
    ],
  };

  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={faqPage(FAQS)} />

      {/* 1. Hero */}
      {/* VERIFICATION PENDING: Real photograph of mixed SS 304 and SS 316 fastener inventory at KP Fasteners Ahmedabad facility — ref: brief §6 hero-ss-fasteners-kp.webp & §10 item 6 */}
      <Section>
        <Container>
          <Breadcrumbs trail={trail} />
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <p className="badge badge-gold">Material Hub · SS 304 &amp; SS 316</p>
              <Heading as="h1" variant="hero" className="mt-4 font-heading">
                <span className="text-gold-gradient">Stainless Steel Fasteners</span> — SS 304 vs SS 316 Decision Guide
              </Heading>
              <hr className="rule-metal mt-5 w-40" aria-hidden="true" />
              <p className="mt-6 max-w-2xl text-lg text-ink-muted">
                A technical guide to austenitic stainless steel fasteners (SS 304, 304L, 316, 316L, 316Ti) and duplex alloys under ISO 3506. Understand pitting resistance, corrosion tradeoffs, cold-work magnetism, and when to specify molybdenum-bearing grades for solar, marine, and chemical service.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/request-quote/?material=stainless-steel"
                  className="btn btn-primary shadow-gold"
                >
                  <FileText aria-hidden="true" className="h-4 w-4" />
                  <span>Request SS Fastener Quote</span>
                  <ArrowRight aria-hidden="true" className="h-4 w-4 ml-0.5" />
                </Link>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <MessageCircle aria-hidden="true" className="h-4 w-4 text-emerald-600" />
                  <span>WhatsApp Grade Question</span>
                </a>
              </div>
            </div>
            <div className="relative">
              <Card variant="metallic" padding="lg" className="overflow-hidden">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-transparent p-3">
                  <Image
                    src={HERO_IMAGE}
                    alt="KP Fasteners stainless steel fasteners inventory — SS 304 and SS 316 bolts, studs, and precision hardware"
                    fill
                    priority
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-contain"
                  />
                </div>
              </Card>
            </div>
          </div>
          <div className="mt-8">
            <ClassificationBanner classification="ambiguous">
              A2-70 and A4-80 stainless steel fasteners are manufactured in-house for anchorage, foundation, stud, and sag-rod applications at our Ahmedabad unit; general stainless hex bolts, nuts, and CSK screws are supplied through our vetted partner mill network. Confirm grade, form factor, and test certification on the quote line.
            </ClassificationBanner>
          </div>
        </Container>
      </Section>

      {/* 2. Executive Answer */}
      <Section variant="alt">
        <Container>
          <Heading as="h2" variant="section">
            The fast decision: SS 304 vs SS 316 at a glance
          </Heading>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <Prose>
              <p>
                <strong>SS 304 (A2-70)</strong> is the default specification for inland, rooftop, and general industrial environments. It provides reliable corrosion resistance against moisture, rain, and benign atmospheric exposure at the lowest alloy cost. However, in environments with chlorides—such as coastal air within 5 km of the sea, chemical fumes, or fertilizer dust—SS 304 is prone to localized pitting and crevice corrosion.
              </p>
              <p className="mt-4">
                <strong>SS 316 (A4-70)</strong> adds 2.0% to 3.0% molybdenum, elevating the alloy&apos;s Pitting Resistance Equivalent Number (PREN) from ~19 to ~25. This molybdenum addition stabilizes the passive chromium-oxide surface film in the presence of chloride ions, preventing pit initiation. For coastal solar plants, chemical processing skids, and marine applications, upgrading to SS 316 is the standard engineering safeguard against premature fastener failure.
              </p>
            </Prose>
            <Prose>
              <p>
                <strong>SS 304L and SS 316L</strong> restrict carbon content to a maximum of 0.03% (compared to 0.08% in standard grades). During welding, temperatures between 450 °C and 850 °C cause carbon to react with chromium, forming chromium carbides along grain boundaries (sensitization). This depletes the heat-affected zone (HAZ) of corrosion-resistant chromium. Specifying the &ldquo;L&rdquo; grades prevents carbide precipitation and eliminates intergranular corrosion in welded assemblies.
              </p>
              <p className="mt-4">
                <strong>SS 316Ti</strong> incorporates titanium stabilization (5 × (C+N) to 0.70%) for sustained operating temperatures up to 750 °C. For structural assemblies requiring extreme tensile strength rather than alloy corrosion resistance, review our{' '}
                <Link
                  href="/materials/high-tensile-fasteners/"
                  className="font-semibold text-brand-gold-strong hover:underline"
                >
                  carbon-steel high-tensile grade decision
                </Link>{' '}
                covering property classes 8.8, 10.9, and 12.9.
              </p>
            </Prose>
          </div>
        </Container>
      </Section>

      {/* 3. Grades We Distribute */}
      <Section>
        <Container>
          <Heading as="h2" variant="section">
            Stainless steel fastener grades distributed &amp; supplied
          </Heading>
          <p className="mt-3 max-w-3xl text-ink-muted">
            KP Fasteners stocks and distributes standard and custom fasteners across seven distinct stainless steel and duplex alloys. We manufacture foundation bolts, studs, and sag rods in-house in Ahmedabad, and source commercial fasteners from vetted primary mill partners with originating mill test certificates.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* SS 202 */}
            {/* VERIFICATION PENDING: Confirm whether SS 202 is ever supplied under KP dispatch or excluded entirely from inventory — ref: brief §10 item 2 */}
            <Card variant="default" padding="lg">
              <div className="flex items-center justify-between">
                <Heading as="h3" variant="card">
                  SS 202
                </Heading>
                <span className="badge badge-steel">Budget Austenitic</span>
              </div>
              <p className="mt-3 text-sm text-ink-muted">
                A budget austenitic alloy where manganese (7.5–10%) and nitrogen partially substitute for expensive nickel (4–6%). Suitable exclusively for dry indoor fixtures and temporary decorative trim.
              </p>
              <div className="mt-4 rounded-md border border-amber-300 bg-amber-50 p-3 text-xs text-amber-900">
                <strong>Engineering Notice:</strong> KP Fasteners does not recommend SS 202 for structural, outdoor, or load-bearing installations. SS 202 rusts rapidly under outdoor moisture despite the stainless label.
              </div>
            </Card>

            {/* SS 304 */}
            <Card variant="default" padding="lg">
              <div className="flex items-center justify-between">
                <Heading as="h3" variant="card">
                  SS 304 (A2-70)
                </Heading>
                <span className="badge badge-gold">Inland Workhorse</span>
              </div>
              <p className="mt-3 text-sm text-ink-muted">
                The global 18/8 standard (18–20% Cr, 8–10.5% Ni). Forms a tenacious self-healing chromium-oxide passive film. The industry workhorse for inland solar structures, electrical enclosures, machinery frames, and general architectural hardware.
              </p>
              <p className="mt-4 text-xs font-medium text-ink-soft">
                ISO 3506 property class: A2-70 · Min UTS: 700 MPa · PREN: ~19
              </p>
            </Card>

            {/* SS 304L */}
            <Card variant="default" padding="lg">
              <div className="flex items-center justify-between">
                <Heading as="h3" variant="card">
                  SS 304L
                </Heading>
                <span className="badge badge-steel">Welded Inland</span>
              </div>
              <p className="mt-3 text-sm text-ink-muted">
                Low-carbon variant of 304 (C ≤ 0.03% max). Eliminates chromium carbide formation during welding, preserving corrosion resistance across the weld heat-affected zone without requiring post-weld solution annealing.
              </p>
              <p className="mt-4 text-xs font-medium text-ink-soft">
                Chemistry: Cr 18–20% · Ni 8–12% · C ≤ 0.03% · PREN: ~19
              </p>
            </Card>

            {/* SS 316 */}
            <Card variant="default" padding="lg">
              <div className="flex items-center justify-between">
                <Heading as="h3" variant="card">
                  SS 316 (A4-70)
                </Heading>
                <span className="badge badge-gold">Chloride Resistant</span>
              </div>
              <p className="mt-3 text-sm text-ink-muted">
                Alloyed with 2.0–3.0% molybdenum (16–18% Cr, 10–14% Ni). Dramatically improves resistance to localized chloride pitting and crevice corrosion. Mandatory for coastal solar within 5 km of seawater, marine atmospheres, and chemical plants.
              </p>
              <p className="mt-4 text-xs font-medium text-ink-soft">
                ISO 3506 property class: A4-70 · Min UTS: 700 MPa · PREN: ~25
              </p>
            </Card>

            {/* SS 316L */}
            <Card variant="default" padding="lg">
              <div className="flex items-center justify-between">
                <Heading as="h3" variant="card">
                  SS 316L
                </Heading>
                <span className="badge badge-steel">Welded Coastal &amp; Pharma</span>
              </div>
              <p className="mt-3 text-sm text-ink-muted">
                Ultra-low carbon 316 (C ≤ 0.03% max) with 2–3% molybdenum. Engineered for welded coastal fabrications, pharmaceutical cleanrooms, sanitary food processing, and chemical reactors requiring uncompromised weld-zone integrity.
              </p>
              <p className="mt-4 text-xs font-medium text-ink-soft">
                Chemistry: Cr 16–18% · Ni 10–14% · Mo 2–3% · C ≤ 0.03%
              </p>
            </Card>

            {/* SS 316Ti */}
            {/* VERIFICATION PENDING: Confirm whether SS 316Ti is stocked or supplied strictly on-quote — ref: brief §10 item 1 */}
            <Card variant="default" padding="lg">
              <div className="flex items-center justify-between">
                <Heading as="h3" variant="card">
                  SS 316Ti
                </Heading>
                <span className="badge badge-steel">High-Temperature</span>
              </div>
              <p className="mt-3 text-sm text-ink-muted">
                Titanium-stabilised grade where titanium ties up carbon as inert titanium carbides. Retains structural creep resistance and resists sensitisation during prolonged service between 500 °C and 750 °C in petrochemical piping.
              </p>
              <p className="mt-4 text-xs font-medium text-ink-soft">
                Max continuous temp: 750 °C · Short exposure: 925 °C · On-quote
              </p>
            </Card>

            {/* Duplex 2205 */}
            {/* VERIFICATION PENDING: Confirm duplex 2205 minimum batch quantity and sourcing lead time — ref: brief §10 item 1 */}
            <Card variant="default" padding="lg" className="sm:col-span-2 lg:col-span-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <Heading as="h3" variant="card">
                  Duplex SS 2205 (EN 1.4462 / UNS S32205)
                </Heading>
                <span className="badge badge-steel">Severe Marine &amp; Desalination</span>
              </div>
              <p className="mt-3 text-sm text-ink-muted">
                A 50/50 austenitic-ferritic microstructure delivering double the yield strength of 300-series stainless (minimum 450 MPa yield) and superior resistance to chloride stress corrosion cracking (SCC) with a PREN rating of 34–38. Specified for direct marine splash zones, offshore platforms, and aggressive chemical processing. Supplied to customer drawings via our{' '}
                <Link
                  href="/products/custom-fasteners/"
                  className="font-semibold text-brand-gold-strong hover:underline"
                >
                  duplex 2205 and specialty stainless on drawing
                </Link>{' '}
                service.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 4. Grade Decision Tree */}
      <Section variant="alt">
        <Container>
          <div className="flex items-center gap-3">
            <Compass aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Service selection decision tree: choosing the correct stainless grade
            </Heading>
          </div>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Selecting between SS 304 and SS 316 depends on four environmental variables: chloride proximity, continuous operating temperature, post-weld sensitization risk, and chemical concentration. Follow this step-by-step engineering decision pathway.
          </p>

          <div className="mt-8 space-y-4">
            <Card variant="default" padding="lg" className="border-l-4 border-l-brand-gold">
              <Heading as="h3" variant="subsection" className="text-brand-steel">
                Step 1: Is the installation within ~5 km of the coast, or exposed to active chlorides?
              </Heading>
              <p className="mt-2 text-sm text-ink-muted">
                Active chlorides include sea spray, salt-laden marine fog, salted food processing, chemical process fumes, cement plant dust, or fertilizer loading zones.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-sm">
                <span className="rounded bg-brand-gold-soft px-3 py-1 font-semibold text-brand-gold-strong">
                  YES → Upgrade to SS 316 (A4-70)
                </span>
                <span className="rounded bg-surface-alt px-3 py-1 text-ink-muted">
                  If welded, select SS 316L. If continuous temperature ≥ 500 °C, select SS 316Ti. For direct seawater splash, specify Duplex 2205.
                </span>
              </div>
            </Card>

            <Card variant="default" padding="lg" className="border-l-4 border-l-brand-steel">
              <Heading as="h3" variant="subsection" className="text-brand-steel">
                Step 2: Is the sustained operating temperature greater than 500 °C?
              </Heading>
              <p className="mt-2 text-sm text-ink-muted">
                Prolonged heat in furnace hardware, petrochemical exhaust lines, and gas turbine skids causes carbon to precipitate chromium out of solid solution.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-sm">
                <span className="rounded bg-brand-steel-soft px-3 py-1 font-semibold text-brand-steel">
                  YES → Specify SS 316Ti (Titanium-Stabilised)
                </span>
                <span className="rounded bg-surface-alt px-3 py-1 text-ink-muted">
                  Continuous heat limit reaches 750 °C with peak short-term resistance to 925 °C.
                </span>
              </div>
            </Card>

            <Card variant="default" padding="lg" className="border-l-4 border-l-brand-steel">
              <Heading as="h3" variant="subsection" className="text-brand-steel">
                Step 3: Will the fastener or connected joint undergo welding during assembly?
              </Heading>
              <p className="mt-2 text-sm text-ink-muted">
                Welding creates a thermal gradient where adjacent base metal reaches sensitization temperatures (450–850 °C), risking intergranular corrosion along the heat-affected zone (HAZ).
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-sm">
                <span className="rounded bg-brand-steel-soft px-3 py-1 font-semibold text-brand-steel">
                  YES → Specify Low-Carbon &ldquo;L&rdquo; Grades
                </span>
                <span className="rounded bg-surface-alt px-3 py-1 text-ink-muted">
                  Use SS 304L for inland welded assemblies; use SS 316L for coastal or chemical welded fabrications.
                </span>
              </div>
            </Card>

            <Card variant="default" padding="lg" className="border-l-4 border-l-brand-steel">
              <Heading as="h3" variant="subsection" className="text-brand-steel">
                Step 4: Is the service pharmaceutical, cleanroom, or sanitary food contact?
              </Heading>
              <p className="mt-2 text-sm text-ink-muted">
                Sanitary equipment demands high cleanability, smooth passivated surfaces, and resistance to aggressive CIP (clean-in-place) washdown cycles.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-sm">
                <span className="rounded bg-brand-steel-soft px-3 py-1 font-semibold text-brand-steel">
                  YES → SS 304 for Dry Contact · SS 316 for Wet &amp; Salted Lines
                </span>
                <span className="rounded bg-surface-alt px-3 py-1 text-ink-muted">
                  Specify passivated condition per ASTM A967 with mill material test certificates.
                </span>
              </div>
            </Card>

            <Card variant="default" padding="lg" className="border-l-4 border-l-brand-gold">
              <Heading as="h3" variant="subsection" className="text-brand-steel">
                Step 5: General inland industrial or rooftop application?
              </Heading>
              <p className="mt-2 text-sm text-ink-muted">
                Inland solar racking (≥ 5 km from coast), PEB roof bracing, structural framework, and outdoor machinery exposed only to rain and normal urban atmosphere.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-sm">
                <span className="rounded bg-brand-gold-soft px-3 py-1 font-semibold text-brand-gold-strong">
                  DEFAULT → Standard SS 304 (A2-70)
                </span>
                <span className="rounded bg-surface-alt px-3 py-1 text-ink-muted">
                  Delivers reliable 25+ year service life at optimum material cost.
                </span>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 5. Chemistry Table */}
      <Section>
        <Container>
          <Heading as="h2" variant="section">
            Chemical composition comparison (ASTM A276 / A479)
          </Heading>
          <p className="mt-3 max-w-3xl text-ink-muted">
            The key compositional difference between 304 and 316 is the 2.0–3.0% molybdenum addition in 316, accompanied by higher nickel content. Carbon limits define standard versus low-carbon (&ldquo;L&rdquo;) variants. All values represent standard weight percentages.
          </p>

          <div className="mt-8">
            <SpecTable
              headers={['Grade', 'Cr %', 'Ni %', 'Mo %', 'C % max', 'Mn % max', 'N %']}
              rows={CHEMISTRY_ROWS}
              caption="Source: ASTM A276 / A479 standard chemistry limits. Exact heat chemistry is certified on the accompanying EN 10204 3.1 mill test certificate."
            />
          </div>
        </Container>
      </Section>

      {/* 6. Mechanical Properties ISO 3506 */}
      <Section variant="alt">
        <Container>
          <Heading as="h2" variant="section">
            Mechanical properties under ISO 3506-1 (property classes)
          </Heading>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Under ISO 3506-1, stainless steel fasteners are classified by steel group (A2 for 304, A4 for 316) and property class (-50 annealed, -70 cold-worked, -80 high-strength cold-worked). Cold-working strain hardens austenitic wire, increasing yield strength from ~210 MPa to ≥ 450 MPa.
          </p>

          <div className="mt-8">
            <GradeTable
              headers={['Property Class', 'Grade Family', 'Min Yield Re (MPa)', 'Min Tensile Rm (MPa)', 'Min Elongation A']}
              rows={MECHANICAL_ROWS}
            />
          </div>

          <p className="mt-4 text-xs text-ink-muted">
            *Elongation minimums are defined as a multiple of nominal diameter d per ISO 3506-1:2020 Table 3. For applications requiring tensile ratings of 800 to 1,200 MPa with zinc or HDG protection, see our{' '}
            <Link
              href="/materials/high-tensile-fasteners/"
              className="font-semibold text-brand-gold-strong hover:underline"
            >
              carbon-steel high-tensile grade decision
            </Link>.
          </p>
        </Container>
      </Section>

      {/* 7. PREN Benchmark */}
      <Section>
        <Container>
          <Heading as="h2" variant="section">
            PREN: the engineering benchmark for pitting resistance
          </Heading>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Stainless steels do not corrode uniformly like carbon steel; they fail by localized breakdown of the passive film (pitting and crevice corrosion). Consequently, standard salt spray hours (such as ASTM B117) are misleading for stainless selection. Materials engineers rely on the Pitting Resistance Equivalent Number (PREN) calculated from chemical composition:
          </p>

          <div className="mt-6 rounded-lg border border-brand-gold-soft bg-brand-gold-soft/30 p-5 text-center font-mono text-base font-bold text-brand-steel sm:text-lg">
            PREN = %Cr + 3.3(%Mo) + 16(%N)
          </div>

          <div className="mt-8">
            <SpecTable
              headers={['Grade', 'Typical PREN', 'Service Capability Tier']}
              rows={PREN_ROWS}
              caption="PREN calculated from midpoint chemistry per austenitic formula. PREN < 24 is unsafe in sustained chloride; PREN ≥ 24 is coastal-capable; PREN ≥ 34 is marine-splash-zone capable."
            />
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-border bg-surface p-4">
              <span className="font-semibold text-brand-steel">PREN &lt; 24</span>
              <p className="mt-1 text-xs text-ink-muted">
                Unsafe for continuous chloride exposure. Salt fog causes pit initiation within months. (SS 202, SS 304).
              </p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-4">
              <span className="font-semibold text-brand-gold-strong">PREN 24 – 27</span>
              <p className="mt-1 text-xs text-ink-muted">
                Coastal atmosphere capable up to ~5 km from shoreline. Stable against industrial airborne chlorides. (SS 316, 316L, 316Ti).
              </p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-4">
              <span className="font-semibold text-brand-steel">PREN 34 – 38</span>
              <p className="mt-1 text-xs text-ink-muted">
                Direct marine splash zone, wet salt crystallization, and aggressive chemical processing. (Duplex 2205).
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 8. Corrosion Resistance Matrix */}
      <Section variant="alt">
        <Container>
          <Heading as="h2" variant="section">
            Corrosion resistance matrix: environment by grade
          </Heading>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Cross-reference your site operating environment against stainless alloy grades. Checkmarks indicate safe design life; risk notes indicate potential pitting or intergranular sensitization.
          </p>

          <div className="mt-8">
            <SpecTable
              headers={['Operating Environment', 'SS 304', 'SS 316', 'SS 316L', 'SS 316Ti', 'Duplex 2205']}
              rows={CORROSION_ROWS}
            />
          </div>

          <div className="mt-10">
            <Heading as="h3" variant="subsection">
              Continuous and peak service temperature limits (°C)
            </Heading>
            <p className="mt-2 text-sm text-ink-muted">
              Operating temperature ranges for annealed austenitic and duplex alloys in non-scaling atmospheres:
            </p>
            <div className="mt-4">
              <SpecTable
                headers={['Grade', 'Min Continuous (°C)', 'Max Continuous (°C)', 'Short-Exposure Max (°C)']}
                rows={TEMPERATURE_ROWS}
                caption="Source: ASTM A276 / A479 high-temperature service guidelines."
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* 9. Magnetism Clarification */}
      <Section>
        <Container>
          <Heading as="h2" variant="section">
            Magnetism in stainless fasteners: cold-work vs fake material
          </Heading>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <Prose>
              <p>
                A widespread misconception among procurement inspectors is that genuine 300-series stainless fasteners must be completely non-magnetic, and that any magnet pull signifies counterfeit material. In physical reality, fully annealed austenitic stainless steel (face-centered cubic crystal structure) is non-magnetic, but cold mechanical working—such as cold heading the bolt head and thread rolling the shank—causes partial transformation into strain-induced martensite (body-centered tetragonal).
              </p>
              <p className="mt-4">
                As a result, high-tensile cold-worked fasteners (such as A2-70 and A4-70 bolts) naturally exhibit a weak to moderate magnetic attraction, particularly around the thread crests and forged head. This response is a normal metallurgical consequence of cold-work strengthening and does not indicate poor alloy quality or iron contamination.
              </p>
            </Prose>
            <Prose>
              <p>
                In contrast, ferritic and martensitic stainless steels (such as SS 410 or SS 420 used for self-drilling screws) are strongly magnetic in all states. Crucially, a simple hand magnet cannot differentiate SS 304 from SS 316, because both exhibit comparable cold-work magnetic permeability.
              </p>
              <p className="mt-4">
                To reliably verify that an ordered batch of A4-70 fasteners contains authentic molybdenum-bearing 316 rather than mislabelled 304, buyers must utilize chemical drop testing, handheld XRF spectrometry (PMI), or laboratory wet analysis rather than magnetic pull.
              </p>
            </Prose>
          </div>
        </Container>
      </Section>

      {/* 10. Passivation & Pickling */}
      {/* VERIFICATION PENDING: Confirm in-house vs partner passivation discipline and chemical bath standards — ref: brief §10 item 4 */}
      <Section variant="alt">
        <Container>
          <Heading as="h2" variant="section">
            Passivation and pickling standards (ASTM A967 &amp; ASTM A380)
          </Heading>
          <p className="mt-3 max-w-3xl text-ink-muted">
            The corrosion resistance of stainless fasteners depends entirely on a microscopic, continuous chromium-oxide passive film. Machining, thread rolling, and tooling can embed microscopic free-iron particles from carbon-steel dies into the fastener surface, initiating rust-tea staining unless properly treated.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <Card variant="default" padding="lg">
              <Heading as="h3" variant="card">
                Passivation (ASTM A967)
              </Heading>
              <p className="mt-3 text-sm text-ink-muted">
                A chemical immersion process using nitric acid or citric acid solutions. Passivation chemically dissolves exogenous free iron and surface contaminants without etching the base metal, enabling spontaneous reformation of a dense, protective Cr₂O₃ passive layer in air.
              </p>
            </Card>

            <Card variant="default" padding="lg">
              <Heading as="h3" variant="card">
                Pickling (ASTM A380)
              </Heading>
              <p className="mt-3 text-sm text-ink-muted">
                A more aggressive chemical bath (typically hydrofluoric and nitric acids) used to remove high-temperature heat-tint, weld scale, and depleted-chromium surface layers resulting from hot-forging or welding. Restores the baseline alloy chemistry right to the outer surface.
              </p>
            </Card>

            <Card variant="default" padding="lg">
              <Heading as="h3" variant="card">
                KP Supply Discipline
              </Heading>
              <p className="mt-3 text-sm text-ink-muted">
                All stainless steel fasteners distributed by KP Fasteners are supplied in passivated condition from certified originating mills. Additional pickling and passivation for critical project specifications can be routed to accredited partner laboratories upon request.
              </p>
              <p className="mt-3 text-xs font-semibold text-brand-gold-strong">
                Notice: Stainless fasteners are never chrome plated; electroplated chrome is a carbon-steel surface coating, not a stainless steel process.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 11. Verification & Anti-Fraud */}
      {/* VERIFICATION PENDING: Confirm whether KP performs PMI inspection in-house with an owned XRF analyzer or routes lots to an accredited NABL testing partner — ref: brief §10 item 3 */}
      {/* VERIFICATION PENDING: Confirm named NABL partner testing laboratory for external verification — ref: brief §10 item 5 */}
      <Section>
        <Container>
          <Heading as="h2" variant="section">
            How to verify stainless fastener grades: preventing material substitution
          </Heading>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Material substitution—such as supplying SS 202 as SS 304, or un-alloyed SS 304 as premium SS 316—is a major procurement risk in the fastener trade. KP Fasteners supports robust positive verification through transparent documentation and verifiable test methods:
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card variant="default" padding="lg">
              <div className="flex items-center gap-2">
                <FileText aria-hidden="true" className="h-5 w-5 text-brand-gold-strong" />
                <Heading as="h3" variant="card">
                  EN 10204 3.1 Mill Certificate
                </Heading>
              </div>
              <p className="mt-3 text-sm text-ink-muted">
                Original mill test certificate correlating the fastener lot with its originating melt heat number. Confirms exact chemical composition (%Cr, %Ni, %Mo) and mechanical tensile test results.
              </p>
            </Card>

            <Card variant="default" padding="lg">
              <div className="flex items-center gap-2">
                <Beaker aria-hidden="true" className="h-5 w-5 text-brand-gold-strong" />
                <Heading as="h3" variant="card">
                  Positive Material Identification (PMI)
                </Heading>
              </div>
              <p className="mt-3 text-sm text-ink-muted">
                Handheld X-ray Fluorescence (XRF) analyzer inspection. Provides non-destructive, elemental alloy verification within 10 seconds, confirming 2.0–3.0% molybdenum in SS 316 vs ~0% in SS 304.
              </p>
            </Card>

            <Card variant="default" padding="lg">
              <div className="flex items-center gap-2">
                <Sparkles aria-hidden="true" className="h-5 w-5 text-brand-gold-strong" />
                <Heading as="h3" variant="card">
                  Molybdenum Spot Chemical Test
                </Heading>
              </div>
              <p className="mt-3 text-sm text-ink-muted">
                A rapid on-site chemical reagent drop test. In the presence of molybdenum (SS 316), the reagent produces a distinct color reaction within 2 minutes, reliably distinguishing 316 from 304 on job sites.
              </p>
            </Card>

            <Card variant="default" padding="lg">
              <div className="flex items-center gap-2">
                <Layers aria-hidden="true" className="h-5 w-5 text-brand-gold-strong" />
                <Heading as="h3" variant="card">
                  Nitric-Acid Spot Test
                </Heading>
              </div>
              <p className="mt-3 text-sm text-ink-muted">
                Distinguishes 300-series austenitic stainless from cheap 200-series alloys. The low nickel and high manganese content of SS 202 reacts visibly with concentrated nitric acid, while 304 remains passive.
              </p>
            </Card>

            <Card variant="default" padding="lg">
              <div className="flex items-center gap-2">
                <Flame aria-hidden="true" className="h-5 w-5 text-brand-gold-strong" />
                <Heading as="h3" variant="card">
                  Grinding Spark Testing
                </Heading>
              </div>
              <p className="mt-3 text-sm text-ink-muted">
                Visual metallurgical evaluation of grinding spark streams. Austenitic stainless produces short, dark red to orange spark lines without carbon bursts, distinguishing it immediately from carbon and tool steels.
              </p>
            </Card>

            <Card variant="default" padding="lg">
              <div className="flex items-center gap-2">
                <ShieldCheck aria-hidden="true" className="h-5 w-5 text-brand-gold-strong" />
                <Heading as="h3" variant="card">
                  NABL Laboratory Chemistry
                </Heading>
              </div>
              <p className="mt-3 text-sm text-ink-muted">
                For major infrastructure and public sector projects, KP Fasteners routes independent lot samples to accredited third-party NABL testing laboratories for complete optical emission spectrometry (OES) chemical analysis. Explore our{' '}
                <Link
                  href="/tools/"
                  className="font-semibold text-brand-gold-strong hover:underline"
                >
                  PMI verification and NABL partner tensile
                </Link>{' '}
                protocols.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 12. Form Factors Cross-Link Grid */}
      <Section variant="alt">
        <Container>
          <Heading as="h2" variant="section">
            Available stainless steel fastener form factors
          </Heading>
          <p className="mt-3 max-w-3xl text-ink-muted">
            KP Fasteners supplies stainless steel fasteners across full product families, combining in-house manufacture for structural anchors and studs with vetted mill distribution for standard commercial bolts and screws:
          </p>

          <div className="mt-8">
            <RelatedProductCards
              items={FORMS.map((form) => ({
                href: form.slug,
                title: form.title,
                body: form.description,
                anchor: form.anchorText,
              }))}
            />
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/products/"
              className="inline-flex items-center gap-2 font-semibold text-brand-steel hover:text-brand-gold-strong hover:underline"
            >
              Browse all industrial fastener product categories
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </Section>

      {/* 13. Industry Fit Strip */}
      <Section>
        <Container>
          <Heading as="h2" variant="section">
            Industries engineered for stainless fastener service
          </Heading>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Explore how our stainless steel fastener range supports specific operating requirements across key industrial sectors:
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <Card variant="default" padding="lg">
              <Sun aria-hidden="true" className="h-8 w-8 text-brand-gold-strong" />
              <Heading as="h3" variant="card" className="mt-4">
                Solar PV Structures
              </Heading>
              <p className="mt-2 text-sm text-ink-muted">
                Module mounting hardware, T-bolts, and purlin fasteners. SS 304 for inland utility solar; mandatory SS 316 for coastal projects within 5 km of seawater.
              </p>
              <div className="mt-4">
                <Link
                  href="/industries/solar-mounting-fasteners/"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand-gold-strong hover:underline"
                >
                  Solar mounting fasteners
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </div>
            </Card>

            <Card variant="default" padding="lg">
              <Building2 aria-hidden="true" className="h-8 w-8 text-brand-gold-strong" />
              <Heading as="h3" variant="card" className="mt-4">
                Construction &amp; Infrastructure
              </Heading>
              <p className="mt-2 text-sm text-ink-muted">
                Coastal civil anchorage, bridge handrails, water treatment plants, and architectural facades requiring maintenance-free multi-decade service life.
              </p>
              <div className="mt-4">
                <Link
                  href="/industries/construction-infrastructure/"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand-gold-strong hover:underline"
                >
                  Construction &amp; infrastructure fasteners
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </div>
            </Card>

            <Card variant="default" padding="lg">
              <Factory aria-hidden="true" className="h-8 w-8 text-brand-gold-strong" />
              <Heading as="h3" variant="card" className="mt-4">
                Automotive &amp; Heavy Engineering
              </Heading>
              <p className="mt-2 text-sm text-ink-muted">
                High-temperature exhaust hardware, chemical skid piping, and food processing lines requiring corrosion-resistant, non-contaminating fasteners.
              </p>
              <div className="mt-4">
                <Link
                  href="/industries/automotive-heavy-engineering/"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand-gold-strong hover:underline"
                >
                  Automotive &amp; heavy engineering
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 14. Quality & MTC */}
      <Section variant="alt">
        <Container>
          <div className="rounded-xl border border-border bg-surface p-8 shadow-card">
            <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
              <div>
                <Heading as="h2" variant="section">
                  Quality assurance &amp; EN 10204 3.1 certification
                </Heading>
                <p className="mt-4 text-ink-muted">
                  Every batch of stainless steel fasteners supplied by KP Fasteners is backed by heat-number traceability to originating mill test certificates. For critical pressure, chemical, and infrastructure procurement, we provide third-party NABL test reports covering dimensional tolerances, chemical spectrometry, and tensile verification.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-ink">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                    EN 10204 3.1 mill test certificates supplied with dispatch on request
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                    Full chemistry analysis (%Cr, %Ni, %Mo, %C) per ASTM A276 / A479
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                    ISO 3506-1 tensile and proof load verification for A2-70 and A4-70 classes
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                    Batch-level PMI inspection to prevent grade mix-ups
                  </li>
                </ul>
              </div>
              <div className="text-center lg:text-right">
                <Link
                  href="/tools/"
                  className="btn btn-secondary"
                >
                  Explore our quality protocol
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 15. FAQ */}
      <Section>
        <Container>
          <Heading as="h2" variant="section">
            Frequently asked questions about stainless steel fasteners
          </Heading>
          <p className="mt-3 max-w-2xl text-ink-muted">
            Clear answers to common engineering and procurement questions regarding stainless steel grade selection, corrosion resistance, and testing standards.
          </p>
          <div className="mt-8">
            <Accordion
              items={FAQS.map((faq) => ({
                question: faq.question,
                answer: <p className="text-sm leading-relaxed text-ink-muted">{faq.answer}</p>,
              }))}
            />
          </div>
        </Container>
      </Section>

      {/* 16. CTA Band */}
      <Section variant="alt">
        <Container>
          <div className="rounded-2xl border border-border bg-surface p-8 text-center shadow-card sm:p-12">
            <Heading as="h2" variant="section" className="mx-auto max-w-2xl font-heading">
              Need guidance selecting between SS 304 and SS 316?
            </Heading>
            <p className="mx-auto mt-4 max-w-2xl text-ink-muted">
              Submit your fastener bill of quantities, structural drawing, or site environmental parameters. Our engineering sales team will verify grade suitability, confirm stocked sizes, and provide a competitive quote from Ahmedabad.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/request-quote/?material=stainless-steel"
                className="btn btn-primary"
              >
                <FileText aria-hidden="true" className="h-4 w-4" />
                &nbsp;Send an SS fastener BOQ
              </Link>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
                &nbsp;WhatsApp a 304-vs-316 question
              </a>
              <a href={TEL} className="btn btn-secondary">
                <Phone aria-hidden="true" className="h-4 w-4" />
                &nbsp;{company.telephones[0]}
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
