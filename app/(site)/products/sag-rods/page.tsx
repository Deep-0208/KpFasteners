import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  MessageCircle,
  FileText,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Wrench,
  Sun,
  Building2,
  Hammer,
  Layers,
  Factory,
} from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Card } from '@/components/ui/Card';
import { Prose } from '@/components/ui/Prose';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Accordion } from '@/components/ui/Accordion';
import { SpecTable } from '@/components/ui/SpecTable';
import { GradeTable } from '@/components/ui/GradeTable';
import { ClassificationBanner } from '@/components/ui/ClassificationBanner';
import { JsonLd } from '@/components/seo/JsonLd';
import { product as productSchema, faqPage } from '@/lib/jsonld';
import { findRoute } from '@/data/routes';

const PATH = '/products/sag-rods/';
const HERO_IMAGE = '/images/products/threaded-rods/sag-rod.webp';

const META_TITLE = 'Sag Rods Manufacturer | PEB Purlin & Solar Bracing | KP';
const META_DESCRIPTION =
  'Threaded sag rods for PEB purlin bracing and solar racking cross-bracing. MS and high-tensile, HDG or zinc, MTC on request. Ahmedabad-made — request a BOQ quote.';

export const metadata: Metadata = buildMetadata({
  path: PATH,
  title: META_TITLE,
  description: META_DESCRIPTION,
  ogImage: HERO_IMAGE,
});

const WA_PREFILL =
  'Hello KP Fasteners, I need sag rods — Diameter: [M12/M16/M20/M24 or ½"/⅝"/¾"/1"], Length: [ ], Thread each end: [mm], Coating: [HDG/Zinc/Plain], Quantity: [ ], MTC: [Y/N]';
const WA_URL = 'https://wa.me/919898230448?text=' + encodeURIComponent(WA_PREFILL);

const FAQS = [
  {
    question: 'What size sag rod do I need for a PEB purlin bracing run?',
    answer:
      'Diameter is set by the structural designer against the purlin span, sheeting load and the number of sag-rod lines in the bay — a Z-purlin 6 m span is commonly specified at M16 with HDG coating, but exact selection must come from the project span table and the fabricator’s standard detail. KP supplies to the engineer’s callout; we do not perform the bracing design itself. Share the drawing or the schedule and we quote by diameter, length and coating.',
  },
  {
    question: 'Can I get sag rods pre-cut to length?',
    answer:
      'Yes — cut-to-length to drawing is the standard supply form. Specify the overall rod length and the thread length at each end on the RFQ (typical thread run is 75–150 mm per end). For long bays beyond stock length we supply with a mid-coupler; call it out on the schedule so we ship the matching coupler and nuts in the same lot.',
  },
  {
    question: 'What coating is recommended for solar racking sag rods?',
    answer:
      'Hot-dip galvanised (HDG) to ASTM A153 Class B / C or IS 2629 is the field default for outdoor exposure — solar racking cross-bracing and PEB roof purlin bracing both live outside and need the zinc film thickness. Zinc electroplate is only suitable for indoor or short-service lines. For coastal / high-humidity sites, confirm the coating class on the quote line.',
  },
  {
    question: 'Do you supply the matching hex nuts, washers and turnbuckles?',
    answer:
      'Yes — the sag-rod lot ships with matching hex nuts (two per rod, standard) and flat washers on request. Turnbuckles for adjustable mid-span tensioning are available as a companion item. Pairings and finishes are matched to the rod coating. See our hex bolts & nuts range for standalone nut and washer supply.',
  },
  {
    question: 'Is EN 10204 3.1 MTC available on sag-rod lots?',
    answer:
      'EN 10204 3.1 mill test certificates are available on request, with batch traceability by heat number on the base-steel round. Dimensional inspection and thread-gauge (6g go / no-go) checks are performed in-house on every lot. Confirm the MTC requirement on the quote line so the base-material heat number is reserved.',
  },
];

// VARIANTS: { use: string | ReactNode } — mirrors the type-safe inline cross-link
// pattern established on /products/stud-bolts/ (Phase D-2).
const VARIANTS: {
  name: string;
  use: string | ReactNode;
  range: string;
  finish: string;
}[] = [
  {
    name: 'Threaded both ends with hex nuts',
    use: 'The default sag-rod sub-type: plain round-bar body with a run of thread at each end for a hex nut and washer. One pass through the purlin web at each end anchors the bay.',
    range: 'M12 – M24 / ½" – 1" × to length',
    finish: 'HDG, Zinc, Plain / Oiled',
  },
  {
    name: 'Threaded both ends with centre turnbuckle',
    use: 'Threaded ends with a mid-span turnbuckle (right / left-hand thread body) for in-field tensioning after the roof sheet is laid. Used where the bracing line crosses a sag that must be pulled flat on site.',
    range: 'M12 – M20 × to length',
    finish: 'HDG, Zinc',
  },
  {
    name: 'Cut-to-length site-fabricated',
    use: (
      <>
        Threaded round bar cut to the drawing length at the plant and shipped loose to the
        PEB erection crew. Pairs naturally with our{' '}
        <Link
          href="/products/tie-rods/"
          className="font-semibold text-brand-gold-strong hover:underline"
        >
          tie-rod stock for formwork and splice service
        </Link>{' '}
        when the project uses both.
      </>
    ),
    range: 'M12 – M24 × cut-to-spec up to 6 m',
    finish: 'HDG, Zinc, Plain',
  },
  {
    name: 'Pre-cut standard lengths',
    use: (
      <>
        Standard 1 m / 2 m / 3 m / 6 m pre-cut threaded rod for repeat PEB bays and
        standard solar racking runs. Shares the same round-bar stock as our{' '}
        <Link
          href="/products/stud-bolts/"
          className="font-semibold text-brand-gold-strong hover:underline"
        >
          DIN 976 metric threaded-rod studs
        </Link>
        .
      </>
    ),
    range: 'M12 – M24 × 1 / 2 / 3 / 6 m',
    finish: 'HDG, Zinc, Plain',
  },
];

const COATINGS = [
  {
    name: 'Hot-Dip Galvanised (HDG)',
    body:
      'Zinc dip to ASTM A153 Class B / C or IS 2629 — the field default for outdoor PEB roof purlin bracing and for solar racking cross-bracing. Zinc film thickness is specified against the coating-class table on the RFQ. Nut threads are over-tapped per ASME B18.2.6 to accept HDG studs.',
  },
  {
    name: 'Zinc Electroplating',
    body:
      'Trivalent passivated zinc for indoor and short-service applications — temporary site bracing, dry-indoor truss bracing. Lighter film than HDG; not a substitute for HDG on outdoor sag-rod lines.',
  },
  {
    name: 'Plain / Oiled',
    body:
      'Self-colour mill-finish rod with a light preservative oil film. Specified for temporary bracing that comes down after erection, or where the sag-rod line will be site-painted into a wider structural coating scheme.',
  },
  {
    name: 'Black Oxide',
    body:
      'Black-oxide conversion coating for a uniform dark finish on indoor temporary bracing. Short-term protection only; combine with oil film for storage runs.',
  },
];

const APPLICATIONS = [
  {
    icon: Building2,
    name: 'PEB roof purlin bracing',
    body:
      'The classic case — one, two or three lines of sag rods per bay to split the Z- or C-purlin into shorter unbraced lengths, preventing lateral-torsional buckling before and after sheeting.',
  },
  {
    icon: Layers,
    name: 'Cold-formed steel roof framing',
    body:
      'Cross-bracing between cold-formed C-section rafters on light-industrial sheds, warehouse mezzanines and farm sheds, where a rod-and-nut assembly is lighter than an angle brace.',
  },
  {
    icon: Sun,
    name: 'Solar module racking cross-bracing',
    body:
      'Table-to-table diagonal and torsion-tube-to-post bracing on fixed-tilt and tracker structures. HDG is the default coating for the field environment.',
  },
  {
    icon: Hammer,
    name: 'Structural steel truss bracing',
    body:
      'Secondary tension members on industrial-mezzanine, bridge-deck and heavy-structural truss assemblies where a threaded-rod brace is preferred over an angle member.',
  },
  {
    icon: Wrench,
    name: 'Temporary site bracing',
    body:
      'Plain or oiled sag rods for erection-stage bracing that comes down once the primary structure is sheeted and the permanent bracing is in. Short-service, lower coating demand.',
  },
];

const RELATED = [
  {
    href: '/products/foundation-bolts/',
    name: 'Foundation Bolts',
    anchor: 'cast-in foundation bolts (IS 5624 / F1554)',
    body:
      'J, L, U, headed and swedge foundation bolts to IS 5624, DIN 529 and ASTM F1554 for the column-base anchor at each end of the roof-line bracing.',
  },
  {
    href: '/products/stud-bolts/',
    name: 'Stud Bolts',
    anchor: 'stud bolts for flange clamping',
    body:
      'Fully-threaded, tap-end and double-end stud bolts to ASTM A193 B7 / B8M and DIN 976 threaded rod — for the flange termination of a sag-rod line onto a bolted connection.',
  },
  {
    href: '/products/scaffold-accessories/',
    name: 'Scaffold Accessories',
    anchor: 'scaffold accessories and site-work hardware',
    body:
      'Companion scaffold hardware and site-work accessories — ships together with temporary-bracing sag-rod lots on erection-stage orders.',
  },
];

export default function Page() {
  const route = findRoute(PATH);
  const trail = route?.breadcrumbTrail ?? [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products/' },
    { label: 'Sag Rods', href: PATH },
  ];

  return (
    <>
      <JsonLd
        data={productSchema({
          name: 'Sag Rods',
          description:
            'Threaded sag rods for PEB roof and wall purlin bracing, cold-formed steel roof framing, solar module racking cross-bracing, structural-steel truss bracing and temporary site bracing — mild-steel and high-tensile base stock, HDG, zinc or plain finish, cut-to-length to drawing.',
          category: 'Industrial Fasteners / Sag Rods / Threaded Rods',
          material: 'Mild Steel (IS 2062), High-Tensile Carbon Steel',
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
                <span className="text-gold-gradient">Sag Rods</span> Manufacturer —
                PEB Purlin &amp; Solar Bracing
              </Heading>
              <hr className="rule-metal mt-5 w-40" aria-hidden="true" />
              <p className="mt-6 max-w-2xl text-lg text-ink-muted">
                Threaded sag rods for pre-engineered-building roof and wall purlin
                bracing, cold-formed steel framing and solar module racking
                cross-bracing — cut-to-length, HDG or zinc, hex nuts and optional
                turnbuckles supplied with the lot. Made at our Ghanshyam Industrial
                Estate plant and dispatched India-wide against the project schedule
                or structural drawing.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/request-quote/?product=sag-rods"
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
                    alt="KP Fasteners threaded sag rod stock with hex nuts for PEB purlin bracing and solar racking cross-bracing"
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
          <Heading as="h2" variant="section">What a sag rod does — and where KP fits</Heading>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <Prose>
              <p>
                A sag rod is a secondary tension member that keeps a light-gauge roof
                or wall purlin from twisting under one-sided sheeting load and from
                sagging over its own self-weight before the roof sheet is fixed. The
                name refers to the deflection the rod prevents. In a pre-engineered
                building the sag-rod line passes through each purlin web and is
                anchored at a rafter at each end of the bay; one, two or three lines
                per bay is a function of span and sheeting.
              </p>
              <p className="mt-4">
                Sag rods are distinct from{' '}
                <Link
                  href="/products/stud-bolts/"
                  className="font-semibold text-brand-gold-strong hover:underline"
                >
                  flange-clamp stud bolts
                </Link>
                {' '}and from cast-in{' '}
                <Link
                  href="/products/foundation-bolts/"
                  className="font-semibold text-brand-gold-strong hover:underline"
                >
                  foundation anchor bolts
                </Link>
                . They are also distinct from compression tie-rod assemblies — a sag
                rod carries tension only, with hex nuts at each end.
              </p>
            </Prose>
            <Prose>
              <p>
                KP Fasteners manufactures sag rods in-house as part of our threaded-rod
                production line: base round-bar stock in mild steel (IS 2062) and
                high-tensile carbon-steel grades is cut to the drawing length, the
                thread run at each end is rolled or cut to 6g tolerance per IS 1367,
                and the lot is coated to the specified class — most commonly hot-dip
                galvanised for outdoor service.
              </p>
              <p className="mt-4">
                Our plant is at Ghanshyam Industrial Estate, Ahmedabad. We supply PEB
                fabricators, cold-formed-steel builders, solar EPC contractors and
                structural steel detailers across India, with dispatch by road and
                rail from Ahmedabad.
              </p>
            </Prose>
          </div>
        </Container>
      </Section>

      {/* 3. Standards cross-reference */}
      <Section>
        <Container>
          <Heading as="h2" variant="section">Standards we manufacture against</Heading>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Sag rods are a field-fabricated assembly — adherence is base-metal-driven
            rather than driven by a dedicated sag-rod product standard. The rows below
            map the standards that govern the base steel, the thread form and the
            coating class we supply against. Every row is referenced to a published
            standard (BIS, ISO or ASTM).
          </p>
          <div className="mt-8">
            {/* VERIFICATION PENDING: Base-metal source spec (IS 2062 grade E250 vs.
                cold-drawn IS 1148 / 1149) is listed per standards completeness.
                KP's actual day-to-day base-stock source (hot-rolled vs. cold-drawn
                round) is pending Kabir Panchal confirmation. See
                docs/content/content-briefs/sag-rods.md §4 item 2. Do not expand
                this row into a specific heat-treatment claim until confirmed. */}
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
                    'IS 2062',
                    'India (BIS)',
                    'Hot-rolled structural steel — base round-bar stock',
                    'E250 (Gr A / B / C), E350',
                    'MS sag-rod base stock for PEB and structural bracing',
                  ],
                },
                {
                  cells: [
                    'ASTM A36 / A36M',
                    'USA (ASTM)',
                    'Carbon-structural-steel base stock',
                    'A36',
                    'Base round-bar equivalent on ASTM-referenced projects',
                  ],
                },
                {
                  cells: [
                    'IS 1367 (Part 3)',
                    'India (BIS)',
                    'Property classes & threading for carbon-steel fasteners',
                    'Property class 4.6, 4.8, 8.8',
                    'Thread form (6g) and mechanical property-class marking',
                  ],
                },
                {
                  cells: [
                    'ISO 898-1',
                    'International (ISO)',
                    'Mechanical properties of carbon- & alloy-steel fasteners',
                    'Property class 4.6 – 10.9',
                    'Metric mechanical minima for high-tensile sag-rod stock',
                  ],
                },
                {
                  cells: [
                    'ASTM A307',
                    'USA (ASTM)',
                    'Carbon-steel bolts & studs 60 ksi tensile',
                    'Grade A, Grade B',
                    'Companion mild bolts & nuts where ASTM is specified',
                  ],
                },
                {
                  cells: [
                    'ASTM A153 / A153M',
                    'USA (ASTM)',
                    'Zinc coating (hot-dip) on iron & steel hardware',
                    'Class B-1 / B-2 / B-3 / C / D',
                    'HDG film-thickness class on outdoor sag-rod lots',
                  ],
                },
                {
                  cells: [
                    'IS 2629',
                    'India (BIS)',
                    'Hot-dip galvanising of iron & steel',
                    'Coating classes per thickness',
                    'IS-referenced HDG for PEB and solar sag-rod lots',
                  ],
                },
                {
                  cells: [
                    'ASTM B117',
                    'USA (ASTM)',
                    'Salt-spray (fog) test for coating performance',
                    'Reference test method',
                    'Reported salt-spray hours on coated-sag-rod inspection',
                  ],
                },
              ]}
            />
            <p className="mt-3 text-xs text-ink-muted">
              Thread form per IS 1367 (Part 3) / ISO 965 at 6g tolerance. Base-metal
              property-class values per ISO 898-1. HDG film-thickness class per
              ASTM A153 / IS 2629.
            </p>
          </div>
        </Container>
      </Section>

      {/* 4. Variant matrix */}
      <Section variant="alt">
        <Container>
          <Heading as="h2" variant="section">Sag-rod sub-types we manufacture</Heading>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Sub-type is specified by the structural designer against the bay geometry
            and the field-fit method. We supply the full sag-rod sub-type range plus
            companion threaded-rod stock for mixed-use orders.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
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

      {/* 5. Grade & mechanical reference */}
      <Section>
        <Container>
          <Heading as="h2" variant="section">Grade &amp; mechanical reference</Heading>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Mechanical minima below are from the published IS 1367 / ISO 898-1
            property-class specifications applied to the sag-rod base stock. Actual lot
            values are reported on the EN 10204 3.1 mill test certificate on request.
            For a wider{' '}
            <Link
              href="/materials/high-tensile-fasteners/"
              className="font-semibold text-brand-gold-strong hover:underline"
            >
              high-tensile property-class reference for bracing threaded rod
            </Link>{' '}
            see our materials page.
          </p>
          <div className="mt-8">
            {/* VERIFICATION PENDING: Property class 8.8 availability on sag-rod
                lots (vs. the standard 4.6 / 4.8 MS stock) is pending Kabir Panchal
                confirmation that the plant holds the higher-tensile round-bar
                stock in sag-rod diameters. See docs/content/content-briefs/
                sag-rods.md §2 and §4 item 1. Do not treat 8.8 as a day-one default
                on quotes until confirmed. */}
            <GradeTable
              headers={[
                'Property class',
                'Yield min (MPa)',
                'Tensile min (MPa)',
                'Elong. min (%)',
                'Typical hardness HBW',
                'Service / coating',
              ]}
              rows={[
                { cells: ['4.6 (MS)', '240', '400', '22', '≤ 124', 'General PEB / solar · HDG, Zinc, Plain'] },
                { cells: ['4.8 (MS)', '320', '400', '14', '≤ 124', 'General PEB / solar · HDG, Zinc, Plain'] },
                { cells: ['8.8 (high-tensile)', '640', '800', '12', '≤ 319', 'Heavy structural truss bracing · HDG'] },
              ]}
            />
            <p className="mt-3 text-xs text-ink-muted">
              Values per ISO 898-1 and IS 1367 (Part 3) property-class tables.
              Property class 8.8 is quoted against confirmed base-stock availability
              in the sag-rod diameter band.
            </p>
          </div>
        </Container>
      </Section>

      {/* 6. Coatings & finishes */}
      <Section variant="alt">
        <Container>
          <Heading as="h2" variant="section">Coatings &amp; finishes offered</Heading>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Coating is selected by the field environment and by whether the bracing
            line is permanent or temporary. HDG is the field default for outdoor PEB
            and solar lines; plain and oiled finishes are for temporary erection-stage
            bracing. Salt-spray performance is reported per ASTM B117 on request.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* 7. Choosing the right sag rod */}
      <Section>
        <Container>
          <Heading as="h2" variant="section">Choosing the right sag rod for the service</Heading>
          <p className="mt-3 max-w-3xl text-ink-muted">
            A short decision block for procurement officers working from a PEB
            schedule, a solar racking BOM or a structural-steel bracing drawing. KP
            supplies against the engineer’s specification — we do not perform the
            bracing design itself.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card variant="trust" padding="lg">
              <Heading as="h3" variant="card">
                PEB roof &amp; wall purlin bracing
              </Heading>
              <Prose className="mt-3">
                <ul className="list-disc space-y-2 pl-5">
                  <li>Diameter: typical <strong>M12 – M20</strong> per span table.</li>
                  <li>Base: <strong>MS property class 4.6 / 4.8</strong>.</li>
                  <li>Coating: <strong>HDG</strong> (ASTM A153 / IS 2629).</li>
                  <li>Ends: threaded both ends with matching hex nuts.</li>
                </ul>
              </Prose>
            </Card>
            <Card variant="trust" padding="lg">
              <Heading as="h3" variant="card">
                Solar module racking cross-bracing
              </Heading>
              <Prose className="mt-3">
                <ul className="list-disc space-y-2 pl-5">
                  <li>Diameter: typical <strong>M12 – M16</strong> per racking OEM detail.</li>
                  <li>Base: <strong>MS property class 4.6 / 4.8</strong>.</li>
                  <li>Coating: <strong>HDG</strong> (field default for outdoor).</li>
                  <li>Optional centre turnbuckle for in-field tensioning.</li>
                </ul>
              </Prose>
            </Card>
            <Card variant="trust" padding="lg">
              <Heading as="h3" variant="card">
                Structural steel truss bracing
              </Heading>
              <Prose className="mt-3">
                <ul className="list-disc space-y-2 pl-5">
                  <li>Diameter: typical <strong>M16 – M24</strong> per engineer’s callout.</li>
                  <li>Base: <strong>property class 8.8</strong> on confirmed stock.</li>
                  <li>Coating: <strong>HDG</strong> or paint-ready plain finish.</li>
                  <li>Companion washers (F436 if structural) on request.</li>
                </ul>
              </Prose>
            </Card>
            <Card variant="trust" padding="lg">
              <Heading as="h3" variant="card">
                Temporary site bracing
              </Heading>
              <Prose className="mt-3">
                <ul className="list-disc space-y-2 pl-5">
                  <li>Diameter: typical <strong>M12 – M16</strong>.</li>
                  <li>Base: <strong>MS property class 4.6</strong>.</li>
                  <li>Coating: <strong>plain / oiled</strong> or black-oxide.</li>
                  <li>Short-service — removed after permanent bracing is in.</li>
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
              href="/industries/solar-mounting-fasteners/"
              className="font-semibold text-brand-gold-strong hover:underline"
            >
              solar module mounting and racking fasteners
            </Link>{' '}
            or{' '}
            <Link
              href="/industries/construction-infrastructure/"
              className="font-semibold text-brand-gold-strong hover:underline"
            >
              structural steel and heavy civil projects
            </Link>
            , share the bracing schedule or BOQ and we quote per diameter, length and
            coating.
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
            <Factory aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold-strong" />
            <span>
              Sector participation is listed per published standards coverage and
              KP’s active supply lines; project-specific sector-reference naming is
              provided on quote.
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
                  'Dimensional inspection — diameter, cut-length and thread engagement — on every manufactured lot.',
                  'Thread gauge inspection to ISO 965 / IS 1367 (6g go / no-go) per lot.',
                  'HDG coating-thickness check per ASTM A153 / IS 2629 class on coated lots.',
                  'Hardness verification (Rockwell / Brinell) against the base property class.',
                  'EN 10204 3.1 mill test certificates on request, with batch traceability by base-steel heat number.',
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
                <li>• Dimensional + thread-gauge inspection report</li>
                <li>• HDG coating-thickness report</li>
                <li>• Hardness report (Rockwell / Brinell)</li>
                <li>• Heat-number batch traceability</li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 10. Mid-page CTA */}
      <Section variant="alt">
        <Container>
          <Card variant="metallic" padding="lg">
            <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center">
              <div>
                <Heading as="h2" variant="subsection">
                  <span className="text-gold-gradient">
                    Have a sag-rod schedule or PEB bracing drawing ready?
                  </span>
                </Heading>
                <p className="mt-3 max-w-2xl text-ink-muted">
                  Share diameter, length, thread run at each end, coating class and
                  quantity per size. Quote back within one working day with MTC
                  availability.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/request-quote/?product=sag-rods"
                  className="btn btn-primary"
                >
                  Request a BOQ quote
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
            </div>
          </Card>
        </Container>
      </Section>

      {/* 11. FAQs */}
      <Section>
        <Container width="narrow">
          <Heading as="h2" variant="section">Frequently asked questions</Heading>
          <p className="mt-3 text-ink-muted">
            Procurement-level answers. For project-specific detail, send your bracing
            schedule or PEB drawing.
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

      {/* 12. Related products */}
      <Section variant="alt">
        <Container>
          <Heading as="h2" variant="section">Related product lines</Heading>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {RELATED.map((r) => (
              <Card key={r.href} variant="metallic" padding="lg" className="flex h-full flex-col">
                <Heading as="h3" variant="card">
                  {r.name}
                </Heading>
                <p className="mt-3 flex-1 text-sm text-ink-muted">{r.body}</p>
                <Link
                  href={r.href}
                  className="mt-4 inline-flex items-center gap-1 font-heading text-sm font-semibold text-brand-gold-strong hover:underline"
                >
                  {r.anchor} <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </Card>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink-muted">
            Back to{' '}
            <Link
              href="/products/"
              className="font-semibold text-brand-gold-strong hover:underline"
            >
              our full products range
            </Link>
            . See also our{' '}
            <Link
              href="/industries/solar-mounting-fasteners/"
              className="font-semibold text-brand-gold-strong hover:underline"
            >
              solar mounting fasteners
            </Link>{' '}
            and{' '}
            <Link
              href="/industries/construction-infrastructure/"
              className="font-semibold text-brand-gold-strong hover:underline"
            >
              construction &amp; infrastructure
            </Link>{' '}
            industry pages for the broader sag-rod application context.
          </p>
        </Container>
      </Section>

      {/* 13. Closing CTA */}
      <Section>
        <Container>
          <Card variant="metallic" padding="lg">
            <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center">
              <div>
                <Wrench aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
                <Heading as="h2" variant="subsection" className="mt-3">
                  <span className="text-gold-gradient">
                    Send us your PEB or solar bracing schedule.
                  </span>
                </Heading>
                <p className="mt-3 max-w-2xl text-ink-muted">
                  Schedules accepted as PDF or Excel; structural drawings as PDF or
                  DWG. We reply within one working day with diameter, length,
                  thread-run, coating class, lead time and MTC availability.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/request-quote/?product=sag-rods"
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
