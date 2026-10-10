import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  MessageCircle,
  FileText,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Factory,
  Wrench,
  Thermometer,
  Snowflake,
  Flame,
  Droplets,
  Building2,
} from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
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
import { product as productSchema, faqPage } from '@/lib/jsonld';
import { findRoute } from '@/data/routes';

const PATH = '/products/stud-bolts/';
const HERO_IMAGE = '/images/products/threaded-rods/threaded-rod-stud.webp';

const META_TITLE = 'Stud Bolts Manufacturer | ASTM A193 B7, B7M, B8M | KP';
const META_DESCRIPTION =
  'Fully-threaded, tap-end and double-end stud bolts to ASTM A193 B7, B7M, B8M and A320 L7 — alloy & stainless, MTC 3.1 on request. Ahmedabad-made. Request a BOQ.';

export const metadata: Metadata = buildMetadata({
  path: PATH,
  title: META_TITLE,
  description: META_DESCRIPTION,
  ogImage: HERO_IMAGE,
});

const WA_PREFILL =
  'Hi KP Fasteners, I need a stud-bolt quote. Grade: [B7/B7M/B8/B8M/L7], Dia x Length: [ ], Coating: [Black/HDG/PTFE], Nut: [A194 2H/2HM/8/8M], Quantity: [ ], MTC: [Y/N], Dispatch pin: [ ]';
const WA_URL = 'https://wa.me/919898230448?text=' + encodeURIComponent(WA_PREFILL);

const FAQS = [
  {
    question: 'What is the difference between ASTM A193 B7 and B8M stud bolts?',
    answer:
      'B7 is a chromium-molybdenum alloy stud (AISI 4140) heat-treated to 105 ksi tensile, used for standard refinery and process-piping flange service between -29 °C and +400 °C with A194 Gr 2H mating nuts. B8M is a solution-annealed SS 316 stud (75 ksi tensile, Class 1) specified for high-chloride, marine, chemical and food-grade service where corrosion resistance outranks tensile strength, with A194 Gr 8M mating nuts.',
  },
  {
    question: 'Do you supply stud bolts with matching heavy-hex nuts and washers?',
    answer:
      'Yes — stud-plus-nut sets to ASTM A193 / A194 pairings are our standard supply form. For B7 studs we ship A194 Gr 2H nuts by default; for B7M we ship 2HM; for B8 we ship Gr 8; for B8M we ship Gr 8M. Hardened washers to ASTM F436 are available on request. See our matching heavy-hex nuts (A194 2H / 2HM / 8 / 8M) and hardened washers on the hex bolts and nuts page.',
  },
  {
    question: 'Which coatings do you apply to stud bolts?',
    answer:
      'Self-colour / black oxide is our default for indoor flange service. For outdoor structural anchorage we hot-dip galvanise per ASTM A153. For petrochemical and refinery flange joints we offer PTFE / Xylan-family coatings (Xylan 1424 / Fluorokote 1) which combine corrosion resistance with low friction for repeat disassembly. Specific salt-spray hours and in-house vs. partner-applied PTFE are quoted per order.',
  },
  {
    question: 'Can you supply against a piping isometric or flange bolt schedule?',
    answer:
      'Yes. Send the bolt schedule — grade, diameter, length, coating, quantity per size, dispatch pin — as PDF or Excel via our Request a Quote page or on WhatsApp at +91 98982 30448. We supply to the piping isometric or flange bolt list; KP does not perform the flange-joint design itself.',
  },
  {
    question: 'Do you provide EN 10204 3.1 mill test certificates with stud bolts?',
    answer:
      'EN 10204 3.1 mill test certificates are available on request, with batch traceability by heat number. Dimensional inspection and hardness are checked in-house against the ASTM A193 tolerance and hardness bands; tensile verification is performed via NABL-accredited third-party laboratories. Confirm MTC requirement on the quote line.',
  },
];

const VARIANTS = [
  {
    name: 'Fully-threaded studs (continuous-thread)',
    use: 'The workhorse flange stud — threaded end-to-end to 6g tolerance. Common lengths follow ASME B16.5 flange bolt-length tables.',
    range: 'M12 – M64 / ½" – 2½" × to drawing',
    finish: 'Black, HDG, PTFE / Xylan',
  },
  {
    name: 'Tap-end studs',
    use: 'Threaded portion at one end with a plain shank. Typical for machinery grouting into blind tapped holes on pump bedplates and compressor skids.',
    range: 'M12 – M48 × to drawing',
    finish: 'Black, HDG, PTFE',
  },
  {
    name: 'Double-end studs (equal / unequal)',
    use: 'Threaded at both ends with a plain body between. DIN 2510 waisted-neck geometry available for high-cycle-fatigue turbomachinery flange service.',
    range: 'M16 – M56 × to drawing',
    finish: 'Black, PTFE',
  },
  {
    name: 'Stud + heavy-hex nut sets',
    use: (
      <>
        ASTM A193 stud paired with ASTM A194 heavy-hex nut (Gr 2H for B7 / B7M; Gr 8 or 8M
        for B8 / B8M). See our{' '}
        <Link
          href="/products/hex-bolts-nuts/"
          className="font-semibold text-brand-gold-strong hover:underline"
        >
          matching heavy-hex nuts (A194 2H / 2HM / 8 / 8M) and hardened washers
        </Link>
        .
      </>
    ),
    range: 'M12 – M64 kit-packed',
    finish: 'Matched coating per set',
  },
  {
    name: 'Tie-rod style studs',
    use: (
      <>
        Full-thread rod for formwork and heavy structural splice service, used with wing
        nuts and waller plates. See our{' '}
        <Link
          href="/products/tie-rods/"
          className="font-semibold text-brand-gold-strong hover:underline"
        >
          tie-rod studs for formwork
        </Link>
        .
      </>
    ),
    range: 'M12 – M30 × to length',
    finish: 'Black, zinc, HDG',
  },
  {
    name: 'Metric threaded rod to DIN 976',
    use: 'Continuous metric threaded rod to ISO 898-1 property classes 4.6 – 10.9. Used where the project calls out metric rather than ASTM grades.',
    range: 'M8 – M48 × 1 m / 2 m / 3 m',
    finish: 'Self-colour, zinc, HDG',
  },
];

const COATINGS = [
  {
    name: 'Self-colour / Black Oxide',
    body: 'Default indoor flange service and short-term protection. Black-oxide conversion coating preserves thread fit while giving a uniform appearance.',
  },
  {
    name: 'Hot-Dip Galvanised (HDG)',
    body: 'Zinc dip to ASTM A153 / IS 2629 — the default for outdoor structural stud anchorage. Nut threads are over-tapped per ASME B18.2.6 to accept HDG studs.',
  },
  {
    name: 'PTFE / Xylan (Fluoropolymer)',
    body: 'Xylan 1424 / Fluorokote-family fluoropolymer coatings for petrochemical, refinery and offshore flange joints — low-friction for consistent torque and repeat disassembly.',
  },
  {
    name: 'Zinc Electroplating',
    body: 'Trivalent passivated zinc for indoor machinery and light outdoor exposure. Specified when PTFE is not required and HDG is too heavy for the thread tolerance.',
  },
  {
    name: 'Phosphate + Oil',
    body: 'Manganese or zinc phosphate pre-treatment with an oil film — a short-term rust inhibitor and a paint primer for site-painted assemblies.',
  },
  {
    name: 'Passivated (Stainless)',
    body: 'Citric or nitric-acid passivation per ASTM A967 for B8 / B8M stainless studs — removes free iron and restores the chromium-oxide layer.',
  },
];

const APPLICATIONS = [
  {
    icon: Flame,
    name: 'Refinery & petrochemical flanges',
    body:
      'B7 / B7M / B8M studs with A194 2H / 2HM / 8M nuts for process-piping flange joints. {/* VERIFICATION PENDING */}',
  },
  {
    icon: Factory,
    name: 'Pumps, compressors & machinery grouting',
    body: 'Tap-end and fully-threaded studs for pump bedplates, compressor skids and CNC-bed grouting.',
  },
  {
    icon: Thermometer,
    name: 'Pressure vessels & heat exchangers',
    body: 'B7 / B8M studs with A194 heavy-hex nuts for heat-exchanger channel covers, drum manways and shell flanges.',
  },
  {
    icon: Snowflake,
    name: 'Cryogenic & LNG service',
    body: 'ASTM A320 L7 alloy studs impact-tested at -101 °C for refrigeration, LNG and cryogenic-service flanges.',
  },
  {
    icon: Building2,
    name: 'PEB & prefab structural',
    body: 'Metric DIN 976 property-class 8.8 threaded rod and tie-rod studs for bracing, splice plates and purlin cross-bracing.',
  },
];

const RELATED = [
  {
    href: '/products/foundation-bolts/',
    name: 'Foundation Bolts',
    anchor: 'cast-in foundation bolts (IS 5624 / F1554)',
    body: 'J, L, U, headed and swedge foundation bolts to IS 5624, DIN 529 and ASTM F1554 for cast-in anchorage.',
  },
  {
    href: '/products/sag-rods/',
    name: 'Sag Rods',
    anchor: 'threaded sag rods for PEB bracing',
    body: 'Purlin and girt sag rods for pre-engineered buildings and solar racking cross-bracing, in matched coatings.',
  },
  {
    href: '/products/tie-rods/',
    name: 'Tie Rods',
    anchor: 'tie-rod studs for formwork',
    body: 'Formwork tie-rod studs with wing nuts and waller plates, compatible with scaffold and shuttering systems.',
  },
];

export default function Page() {
  const route = findRoute(PATH);
  const trail = route?.breadcrumbTrail ?? [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products/' },
    { label: 'Stud Bolts', href: PATH },
  ];

  return (
    <>
      <JsonLd
        data={productSchema({
          name: 'Stud Bolts',
          description:
            'Fully-threaded, tap-end and double-end stud bolts manufactured to ASTM A193 B7, B7M, B8, B8M, ASTM A320 L7 and DIN 976 — alloy-steel and austenitic stainless, with black-oxide, hot-dip galvanised and PTFE / Xylan coating options and A194 heavy-hex nut sets.',
          category: 'Industrial Fasteners / Stud Bolts',
          material: 'Alloy Steel AISI 4140, Stainless Steel SS 304, Stainless Steel SS 316',
          image: HERO_IMAGE,
          path: PATH,
          classification: 'oem',
        })}
      />
      <JsonLd data={faqPage(FAQS)} />

      {/* 1. Hero */}
      <Section>
        <Container>
          <Breadcrumbs trail={trail} />
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <p className="badge badge-gold">OEM · Manufactured in Ahmedabad</p>
              <Heading as="h1" variant="hero" className="mt-4 font-heading">
                <span className="text-gold-gradient">Stud Bolts</span> Manufacturer —
                ASTM A193 B7, B8, B8M &amp; L7
              </Heading>
              <hr className="rule-metal mt-5 w-40" aria-hidden="true" />
              <p className="mt-6 max-w-2xl text-lg text-ink-muted">
                Fully-threaded, tap-end and double-end stud bolts to ASTM A193 B7, B7M,
                B8, B8M and ASTM A320 L7, with A194 heavy-hex nut sets — made at our
                Ghanshyam Industrial Estate plant for refinery and petrochem flanges,
                pressure vessels, pumps, compressors and heavy structural work. We quote
                against your flange-bolt schedule with material, coating and MTC.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/request-quote/?product=stud-bolts"
                  className="btn btn-primary shadow-gold"
                >
                  <FileText aria-hidden="true" className="h-4 w-4" />
                  <span>Request a BOQ Quote</span>
                  <ArrowRight aria-hidden="true" className="h-4 w-4 ml-0.5" />
                </Link>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <MessageCircle aria-hidden="true" className="h-4 w-4 text-emerald-600" />
                  <span>WhatsApp a Specialist</span>
                </a>
              </div>
            </div>
            <div className="relative">
              <Card variant="metallic" padding="lg" className="overflow-hidden">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-transparent p-3">
                  <Image
                    src={HERO_IMAGE}
                    alt="ASTM A193 B7 stud bolt and threaded-rod stock manufactured by KP Fasteners"
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
            <ClassificationBanner classification="oem" />
          </div>
        </Container>
      </Section>

      {/* 2. Technical overview */}
      <Section variant="alt">
        <Container>
          <Heading as="h2" variant="section">What a stud bolt is — and where KP fits</Heading>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <Prose>
              <p>
                A stud bolt is a fully-threaded (or tap-end / double-end) rod supplied with
                two heavy-hex nuts and, optionally, hardened washers. It is the canonical
                fastener for flange joints on process piping and pressure vessels, for
                pump and compressor mounting, and for heavy structural splice assemblies.
                In the EPC world a stud is specified by its ASTM A193 grade (B7, B7M, B8,
                B8M) or ASTM A320 grade (L7) and its paired ASTM A194 heavy-hex nut grade
                (2H, 2HM, 8, 8M).
              </p>
              <p className="mt-4">
                Stud bolts are distinct from cast-in anchorage. For foundation anchorage
                see our{' '}
                <Link
                  href="/products/foundation-bolts/"
                  className="font-semibold text-brand-gold-strong hover:underline"
                >
                  cast-in foundation bolts (IS 5624 / F1554)
                </Link>
                . For bracing threaded rod in PEB roofs see our sag-rod range.
              </p>
            </Prose>
            <Prose>
              <p>
                KP Fasteners supplies stud bolts to A193 B7 as our default alloy grade:
                bar is sourced from partner mills to the A193 chemistry and hardness
                envelope, cut and thread-rolled or thread-cut in-house to 6g tolerance,
                paired with A194 heavy-hex nuts, and finished to the specified coating.
                EN 10204 3.1 mill test certification is provided on request with batch
                traceability by heat number.
              </p>
              <p className="mt-4">
                Our plant is at Ghanshyam Industrial Estate, Ahmedabad. We supply EPC
                procurement teams, piping contractors, machinery OEMs and structural
                fabricators across India, with dispatch by road and rail from Ahmedabad.
              </p>
            </Prose>
          </div>
        </Container>
      </Section>

      {/* 3. Standards & cross-reference */}
      <Section>
        <Container>
          <Heading as="h2" variant="section">Standards we manufacture against</Heading>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Every row below is referenced to a published standard — ASTM, DIN or BIS.
            Mechanical values are the minima defined in the standard; actual lot values
            are reported on the EN 10204 3.1 mill test certificate.
          </p>
          <div className="mt-8">
            {/* VERIFICATION PENDING: NACE MR0175 sour-service compliance for B7M
                (22 HRC max hardness, controlled tempering) is listed per standards
                completeness, but KP's in-house ability to heat-treat and verify to the
                MR0175 hardness envelope is pending Kabir Panchal confirmation. See
                docs/content/content-briefs/stud-bolts.md §10 Q8 and Q13. Do not expand
                this row into a sour-service claim until confirmed. */}
            <SpecTable
              headers={[
                'Standard',
                'Country',
                'Equivalent / scope',
                'Grades / classes',
                'Typical application',
              ]}
              rows={[
                {
                  cells: [
                    'ASTM A193 / A193M',
                    'USA (ASTM)',
                    'High-temp / high-pressure bolting',
                    'B7, B7M, B8 Cl 1 / Cl 2, B8M Cl 1 / Cl 2, B16',
                    'Refinery, petrochem, process-piping flanges',
                  ],
                },
                {
                  cells: [
                    'ASTM A320 / A320M',
                    'USA (ASTM)',
                    'Low-temperature bolting (Charpy-tested)',
                    'L7, L7M, B8 / B8M Cl 1 for cryo',
                    'LNG, refrigeration, cryogenic flanges',
                  ],
                },
                {
                  cells: [
                    'ASTM A194 / A194M',
                    'USA (ASTM)',
                    'Heavy-hex nuts, mating to A193 / A320 studs',
                    'Gr 2H, 2HM, 4, 7, 8, 8M',
                    '2H with B7; 2HM with B7M; 8 with B8; 8M with B8M',
                  ],
                },
                {
                  cells: [
                    'DIN 976-1',
                    'Germany (DIN)',
                    'Metric threaded rod / studs',
                    'Property class 4.6 – 12.9 per ISO 898-1',
                    'General metric structural and machinery grouting',
                  ],
                },
                {
                  cells: [
                    'DIN 975 / DIN 2510',
                    'Germany (DIN)',
                    'Threaded rod (975) and waisted-neck studs (2510)',
                    'Shape standards',
                    'Turbomachinery high-cycle-fatigue flange service',
                  ],
                },
                {
                  cells: [
                    'IS 1367 (Part 3)',
                    'India (BIS)',
                    'Property classes for carbon-steel fasteners',
                    'Property class 4.6 – 12.9',
                    'IS-grade studs on BIS-referenced projects',
                  ],
                },
              ]}
            />
            <p className="mt-3 text-xs text-ink-muted">
              Mating nut pairings per ASTM A194 / A194M. Metric property classes per
              ISO 898-1.
            </p>
          </div>
        </Container>
      </Section>

      {/* 4. Variant matrix */}
      <Section variant="alt">
        <Container>
          <Heading as="h2" variant="section">Stud sub-types we manufacture</Heading>
          <p className="mt-3 max-w-3xl text-ink-muted">
            The sub-type is specified by the piping engineer against the joint geometry
            and the mating-nut arrangement. We manufacture the full flange-bolting
            catalogue plus tie-rod and metric threaded-rod variants.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VARIANTS.map((v) => (
              <Card
                key={v.name}
                variant="metallic"
                padding="lg"
                className="flex h-full flex-col"
              >
                <Heading as="h3" variant="card">
                  {v.name}
                </Heading>
                <p className="mt-3 flex-1 text-sm text-ink-muted">{v.use}</p>
                <dl className="mt-4 space-y-1 text-sm">
                  <div className="flex gap-2">
                    <dt className="font-semibold text-brand-steel">Range:</dt>
                    <dd className="mono-numbers text-ink">{v.range}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-semibold text-brand-steel">Finish:</dt>
                    <dd className="text-ink">{v.finish}</dd>
                  </div>
                </dl>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. Grade & material table */}
      <Section>
        <Container>
          <Heading as="h2" variant="section">Grade &amp; mechanical reference</Heading>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Mechanical minima below are from the published ASTM A193, A320 and ISO 898-1
            specifications. Actual lot values are reported on the EN 10204 3.1 mill test
            certificate on request. For an{' '}
            <Link
              href="/materials/high-tensile-fasteners/"
              className="font-semibold text-brand-gold-strong hover:underline"
            >
              alloy-steel property class comparison for high-tensile stud bolting
            </Link>{' '}
            see our materials reference.
          </p>
          <div className="mt-8">
            <GradeTable
              headers={[
                'Grade',
                'Yield min (MPa)',
                'Tensile min (MPa)',
                'Elong. min (%)',
                'Typical hardness HBW',
                'Service / coating',
              ]}
              rows={[
                { cells: ['ASTM A193 B7 (AISI 4140)', '724', '860', '16', '≤ 321 (35 HRC max)', '-29 to +400 °C · Black / HDG / PTFE'] },
                { cells: ['ASTM A193 B7M', '552', '690', '18', '≤ 235 (22 HRC max)', 'Sour service · Black / PTFE'] },
                { cells: ['ASTM A193 B8 Cl 1 (SS 304)', '205', '515', '30', '≤ 223', 'General stainless · Passivated'] },
                { cells: ['ASTM A193 B8M Cl 1 (SS 316)', '205', '515', '30', '≤ 223', 'Marine / chloride · Passivated'] },
                { cells: ['ASTM A320 L7 (alloy)', '724', '860', '16', '≤ 321', 'To -101 °C Charpy · Black / PTFE'] },
              ]}
            />
            <p className="mt-3 text-xs text-ink-muted">
              Values per ASTM A193 / A193M (B7, B7M, B8, B8M Class 1) and ASTM A320 /
              A320M (L7). Hardness and tempering per the grade specification.
            </p>
          </div>
        </Container>
      </Section>

      {/* 6. Coatings & finishes */}
      <Section variant="alt">
        <Container>
          <Heading as="h2" variant="section">Coatings &amp; finishes offered</Heading>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Coating is selected by service environment and by whether the joint is
            re-assembled regularly. PTFE / Xylan-family coatings are our default for
            refinery and petrochem flange service; black oxide is the default indoor
            finish.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COATINGS.map((c) => (
              <Card
                key={c.name}
                variant="default"
                padding="lg"
                className="flex h-full flex-col"
              >
                <Heading as="h3" variant="card">
                  {c.name}
                </Heading>
                <p className="mt-3 text-sm text-ink-muted">{c.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 7. Choosing the right stud */}
      <Section>
        <Container>
          <Heading as="h2" variant="section">Choosing the right stud for the service</Heading>
          <p className="mt-3 max-w-3xl text-ink-muted">
            A short decision block for procurement officers working from a piping
            isometric or a flange bolt list. KP supplies against the engineer’s
            specification — we do not perform the flange-joint design.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card variant="trust" padding="lg">
              <Heading as="h3" variant="card">
                Ambient / standard refinery flange
              </Heading>
              <Prose className="mt-3">
                <ul className="list-disc space-y-2 pl-5">
                  <li>-29 °C to +400 °C service: <strong>ASTM A193 B7</strong>.</li>
                  <li>Mating nut: <strong>A194 Gr 2H</strong>.</li>
                  <li>Default coating: black or PTFE / Xylan.</li>
                </ul>
              </Prose>
            </Card>
            <Card variant="trust" padding="lg">
              <Heading as="h3" variant="card">
                Sour service (H₂S) — NACE MR0175
              </Heading>
              <Prose className="mt-3">
                <ul className="list-disc space-y-2 pl-5">
                  <li>H₂S-bearing hydrocarbon service: <strong>ASTM A193 B7M</strong> (22 HRC max).</li>
                  <li>Mating nut: <strong>A194 Gr 2HM</strong>.</li>
                  <li>Preferred coating: PTFE / Xylan.</li>
                </ul>
                {/* VERIFICATION PENDING: NACE MR0175 compliance claim for B7M is held
                    back to the material standard reference only. Pending Kabir
                    Panchal confirmation of in-house hardness-controlled tempering per
                    MR0175 (stud-bolts.md §10 Q8). */}
              </Prose>
            </Card>
            <Card variant="trust" padding="lg">
              <Heading as="h3" variant="card">
                High-temperature / cryogenic
              </Heading>
              <Prose className="mt-3">
                <ul className="list-disc space-y-2 pl-5">
                  <li>Above +400 °C: <strong>ASTM A193 B16</strong> on quote.</li>
                  <li>To -101 °C (LNG, refrigeration): <strong>ASTM A320 L7</strong>.</li>
                  <li>Mating nut: A194 Gr 4 or Gr 7 per A194.</li>
                </ul>
              </Prose>
            </Card>
            <Card variant="trust" padding="lg">
              <Heading as="h3" variant="card">
                Corrosive / marine / food-grade
              </Heading>
              <Prose className="mt-3">
                <ul className="list-disc space-y-2 pl-5">
                  <li>Food, chemical, mild coastal: <strong>A193 B8 Cl 1</strong> (SS 304).</li>
                  <li>Marine, chloride, fertiliser: <strong>A193 B8M Cl 1</strong> (SS 316).</li>
                  <li>Mating nut: A194 Gr 8 / Gr 8M. Finish: passivated.</li>
                </ul>
              </Prose>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 8. Applications */}
      <Section variant="alt">
        <Container>
          <Heading as="h2" variant="section">Applications &amp; sectors we supply</Heading>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Sectors we actively supply from Ahmedabad. For project-level support on{' '}
            <Link
              href="/industries/construction-infrastructure/"
              className="font-semibold text-brand-gold-strong hover:underline"
            >
              structural steel and heavy civil projects
            </Link>
            , share the flange bolt schedule or BOQ and we quote per grade, coating and
            nut pairing.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {APPLICATIONS.map(({ icon: Icon, name, body }) => (
              <Card key={name} variant="default" padding="md" className="flex h-full flex-col">
                <Icon aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
                <Heading as="h3" variant="card" className="mt-3">
                  {name}
                </Heading>
                <p className="mt-2 text-sm text-ink-muted">{body}</p>
              </Card>
            ))}
          </div>
          <p className="mt-4 flex items-start gap-2 text-xs text-ink-muted">
            <Droplets aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold-strong" />
            <span>
              Oil &amp; gas / refinery sector participation is listed per published
              standards coverage; project-specific sector-reference naming is on quote.
            </span>
          </p>
        </Container>
      </Section>

      {/* 9. Quality & documentation */}
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
            <div>
              <Heading as="h2" variant="section">Quality control &amp; documentation</Heading>
              <ul className="mt-6 space-y-3 text-ink">
                {[
                  'Dimensional inspection per ASTM A193 tolerance tables on every manufactured lot.',
                  'Thread inspection to ISO 965 (6g tolerance) using ring and plug gauges.',
                  'Hardness (Rockwell C) in-house — B7 target ≤ 35 HRC, B7M ≤ 22 HRC per standard.',
                  'Tensile verification via NABL-accredited third-party laboratory, correlated to heat number.',
                  'EN 10204 3.1 mill test certificates on request, with batch traceability by heat number.',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold-strong"
                    />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-ink-muted">
                Read more about our{' '}
                <Link
                  href="/tools/"
                  className="font-semibold text-brand-gold-strong hover:underline"
                >
                  MTC EN 10204 3.1 documentation and batch traceability
                </Link>
                .
              </p>
            </div>
            <Card variant="trust" padding="lg">
              <ShieldCheck aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
              <Heading as="h3" variant="card" className="mt-3">
                Documentation pack
              </Heading>
              <ul className="mt-3 space-y-2 text-sm text-ink">
                <li>• EN 10204 3.1 MTC on request</li>
                <li>• Dimensional + thread inspection report</li>
                <li>• Hardness report (Rockwell C)</li>
                <li>• Third-party tensile test report</li>
                <li>• Heat-number batch traceability</li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 10. Related products */}
      <Section variant="alt">
        <Container>
          <Heading as="h2" variant="section">Related product lines</Heading>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Explore companion threaded fasteners, flange hardware, and heavy structural rods to complete your schedule:
          </p>
          <div className="mt-8">
            <RelatedProductCards items={RELATED} />
          </div>
          <p className="mt-6 text-sm text-ink-muted">
            Back to{' '}
            <Link
              href="/products/"
              className="font-semibold text-brand-gold-strong hover:underline"
            >
              our full products range
            </Link>
            .
          </p>
        </Container>
      </Section>

      {/* 11. FAQs */}
      <Section>
        <Container width="narrow">
          <Heading as="h2" variant="section">Frequently asked questions</Heading>
          <p className="mt-3 text-ink-muted">
            Procurement-level answers. For project-specific detail, send your flange
            bolt schedule.
          </p>
          <div className="mt-8">
            <Accordion
              items={FAQS.map((f) => ({
                question: f.question,
                answer: <p>{f.answer}</p>,
              }))}
            />
          </div>
        </Container>
      </Section>

      {/* 12. Single Authoritative Closing CTA */}
      <Section variant="alt">
        <Container>
          <Card variant="metallic" padding="lg">
            <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center">
              <div>
                <Wrench aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
                <Heading as="h2" variant="subsection" className="mt-3">
                  <span className="text-gold-gradient">
                    Send us your flange-bolt schedule or piping isometric drawings.
                  </span>
                </Heading>
                <p className="mt-3 max-w-2xl text-ink-muted">
                  Schedules accepted as PDF or Excel; piping isometrics as PDF or DWG.
                  We reply within one working day with grade, coating, nut pairing, lead
                  time and EN 10204 3.1 MTC availability.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/request-quote/?product=stud-bolts"
                  className="btn btn-primary"
                >
                  <FileText aria-hidden="true" className="h-4 w-4" />
                  &nbsp;Request a BOQ quote
                </Link>
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
            </div>
          </Card>
        </Container>
      </Section>
    </>
  );
}
