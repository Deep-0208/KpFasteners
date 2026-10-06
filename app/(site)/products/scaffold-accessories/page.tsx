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
  Building2,
  Hammer,
  Layers,
  Factory,
  Droplets,
  Boxes,
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
import { ClassificationBanner } from '@/components/ui/ClassificationBanner';
import { JsonLd } from '@/components/seo/JsonLd';
import { product as productSchema, faqPage } from '@/lib/jsonld';
import { findRoute } from '@/data/routes';
import { company } from '@/data/company';

const PATH = '/products/scaffold-accessories/';
const HERO_IMAGE = '/images/products/threaded-rods/wedge-anchor.webp';

// Title: 56 chars. Meta description: 155 chars.
const META_TITLE = 'Scaffold Accessories Supplier | Tie Rods, Wing Nuts | KP';
const META_DESCRIPTION =
  'Formwork tie rods (D15/D20), wing nuts, waller plates and shuttering hardware — manufactured and supplied from Ahmedabad, HDG options, MTC. Request BOQ.';

export const metadata: Metadata = buildMetadata({
  path: PATH,
  title: META_TITLE,
  description: META_DESCRIPTION,
  ogImage: HERO_IMAGE,
});

const WA_PREFILL =
  'Hi KP Fasteners, I need a scaffold-accessories quote. System: [PERI/Doka/MEVA/generic], Tie rod: [D15/D20], Wing nut: [MS/HDG], Waller plate size: [ ], Quantity: [ ], Dispatch pin: [ ].';
const WA_URL = 'https://wa.me/919898230448?text=' + encodeURIComponent(WA_PREFILL);

const FAQS = [
  {
    question: 'What tie-rod diameters do you supply for formwork?',
    answer:
      'D15 (nominal Ø15 mm) and D20 (nominal Ø20 mm) are the two standard formwork tie-rod diameters we quote against — D15 is the workhorse for standard wall and column shutters, D20 is specified where higher concrete pressure or wider walls require a higher safe working load (bridge piers, retaining walls, heavier precast forms). Wing nuts and waller plates come in matching sizes and are not interchangeable between D15 and D20. Specify system (PERI-style / Doka-style / generic) on the RFQ and we confirm fit before despatch.',
  },
  {
    question: 'Are your tie rods and wing nuts compatible with PERI, Doka or MEVA formwork?',
    answer:
      'Our items are supplied as system-neutral D15 and D20 geometry that fits most European-style formwork systems. Proprietary system codes (for example PERI DYWIDAG DW 15, Doka or MEVA system-specific tie rods) use vendor-specific geometries that we do not claim coverage on without written confirmation per order. Share the formwork system name and the tie-rod code your engineer has specified; we will confirm compatibility before quoting, and will not substitute a generic rod for a proprietary code without your approval.',
  },
  {
    question: 'Can I get hot-dip galvanised coating with a specified thickness?',
    answer:
      'Yes — HDG per IS 2629 / ISO 1461 is the standard finish for repeat-use waller plates and wing nuts because these pieces are stored on-site through monsoons and cycles of pour-and-strip. Specify the coating-class / film thickness in µm on the RFQ (standard IS 2629 class per thickness). Tie rods themselves are commonly supplied self-colour where they will be recovered from a formed pour, or HDG where they stay in service.',
  },
  {
    question: 'Do you supply matching wing nuts, waller plates and water-stopper assemblies as a system set?',
    answer:
      'Yes — the standard quote covers wing nut + tie rod + waller plate as a matched set in D15 or D20. Sleeve nuts (chuck nuts) and matching hex nuts are supplied as companion items on the same lot. Water-stopper tie-rod assemblies (tie rod fitted with a PVC or rubber water-stop disc for water-retaining walls — basement, water tank, ETP) are available on confirmed enquiry; mark the water-stop requirement on the RFQ line so the matching disc ships with the rod.',
  },
  {
    question: 'Is EN 10204 3.1 MTC available on the manufactured items in this range?',
    answer:
      'EN 10204 3.1 mill test certificates are available on request for the manufactured items in this range, with batch traceability by base-steel heat number. For items supplied through our vetted partner network, the mill certificate from the originating manufacturer is passed through with the despatch. Confirm the MTC requirement on the quote line so the base-material heat number is reserved and the correct document trail is attached.',
  },
];

// VARIANTS: { use: string | ReactNode } — mirrors the type-safe inline cross-link
// pattern established on /products/sag-rods/ (Phase D-3).
const VARIANTS: {
  name: string;
  use: string | ReactNode;
  range: string;
  finish: string;
}[] = [
  {
    name: 'Formwork tie rods (D15 / D20)',
    use: (
      <>
        Full-thread rod — the workhorse of two-face wall and column shutters. Passed
        through both shuttering faces and clamped with a wing nut + waller plate at
        each end. Pairs with our{' '}
        <Link
          href="/products/tie-rods/"
          className="font-semibold text-brand-gold-strong hover:underline"
        >
          tie-rod stock and turnbuckle assemblies
        </Link>{' '}
        for mixed-use orders.
      </>
    ),
    range: 'D15 (Ø15 mm) and D20 (Ø20 mm) · cut-to-length',
    finish: 'Self-colour, Zinc, HDG',
  },
  {
    name: 'Wing nuts (butterfly nuts)',
    use: (
      <>
        Hot-forged or cast wing nut that spins onto a tie rod against a waller
        plate to clamp the shutter faces together. Standard pairing with our{' '}
        <Link
          href="/products/hex-bolts-nuts/"
          className="font-semibold text-brand-gold-strong hover:underline"
        >
          hex nuts and matched washer stock
        </Link>{' '}
        for mixed shuttering lots.
      </>
    ),
    range: 'D15 and D20 to match tie-rod diameter',
    finish: 'Self-colour, HDG (default for repeat-use)',
  },
  {
    name: 'Waller plates (form plates)',
    use: 'Pressed MS plate that spreads the wing-nut load across the shuttering waler. Supplied square or rectangular; HDG is the default on repeat-use yards because the plates are stored on-site through monsoon cycles.',
    range: '100 × 100 × 6 mm and 150 × 150 × 8 mm standard',
    finish: 'Self-colour, HDG',
  },
  {
    name: 'Sleeve nuts / chuck nuts',
    use: 'Longer nut used in slab and column formwork — engages the tie rod through a plywood or steel shutter and gives a longer thread engagement than a plain hex nut. Supplied in D15 and D20 to match the rod.',
    range: 'Length 100 – 200 mm · D15 / D20 thread',
    finish: 'Self-colour, Zinc',
  },
  {
    name: 'Water-stopper tie-rod assembly',
    use: 'Tie rod fitted with a PVC or rubber water-stop disc at the mid-span, left cast-in on water-retaining walls (basements, water tanks, ETP structures) so the rod bore does not become a water path. Available on confirmed enquiry.',
    range: 'D15 or D20 rod + matched water-stop disc',
    // VERIFICATION PENDING: Water-stopper assembly stock status is pending Kabir
    // Panchal confirmation. See docs/content/content-briefs/scaffold-accessories.md
    // §10 item 6. "Available on confirmed enquiry" wording keeps the page honest
    // until the stock answer lands.
    finish: 'Self-colour tie rod + PVC water-stop disc',
  },
  {
    name: 'Form ties / snap ties (one-time-use)',
    use: 'MS tie with a pre-set clamping width (typical 150 – 400 mm), snapped off after the pour at the designed debond zone. Single-use consumable for lighter shuttering.',
    range: 'Clamping widths 150 – 400 mm',
    // VERIFICATION PENDING: Form-tie / snap-tie range is listed per standards
    // completeness. KP's actual stocked sub-type (loop vs. she-bolt vs. snap)
    // is pending Kabir Panchal confirmation. See docs/content/content-briefs/
    // scaffold-accessories.md §3 (sub-types section) and §10 item 1.
    finish: 'Self-colour (black) MS',
  },
  {
    name: 'Scaffold tube couplers',
    use: 'Right-angle, swivel and sleeve couplers for tubular scaffold assemblies, drop-forged or pressed steel per IS 2750 / BS 1139. Supplied on confirmed enquiry — not every lot carries the full coupler range.',
    range: 'Right-angle / swivel / sleeve · IS 2750 / BS 1139',
    // VERIFICATION PENDING: Scaffold coupler stock status and any IS 2750 ISI
    // licence number are pending Kabir Panchal confirmation. See docs/content/
    // content-briefs/scaffold-accessories.md §10 item 7. Do NOT publish an
    // ISI-mark claim until BIS licence number is confirmed in writing.
    finish: 'Drop-forged / pressed steel',
  },
];

// VERIFICATION PENDING: HDG routing (in-house zinc tank vs. partner galvaniser)
// is pending Kabir Panchal confirmation. See docs/content/content-briefs/
// scaffold-accessories.md §10 item 4. Copy below is intentionally silent on
// the routing — only the specification standard is named.
const COATINGS = [
  {
    name: 'Hot-Dip Galvanised (HDG)',
    body:
      'Zinc dip per IS 2629 / ISO 1461 — the field default for repeat-use wing nuts and waller plates that live on site through monsoon cycles. Coating-class / film thickness in µm specified on the RFQ. Salt-spray performance per ASTM B117 on request.',
  },
  {
    name: 'Zinc Electroplating',
    body:
      'Trivalent passivated zinc for short-service and indoor-stored items — sleeve nuts and lighter chuck nuts kept in the yard between pours. Lighter film than HDG; not a substitute for HDG on items left outdoors through monsoon.',
  },
  {
    name: 'Self-Colour (Black MS)',
    body:
      'Mill-finish rod with a light preservative oil film. Specified for one-time-use tie rods that are cast-in or recovered immediately after the pour, and for snap-off form ties. Lowest coating cost on short-service consumables.',
  },
];

const APPLICATIONS = [
  {
    icon: Building2,
    name: 'RCC slab and wall formwork',
    body:
      'Standard column and wall shutters on high-rise RCC — the D15 wing-nut / tie-rod / waller-plate set is the workhorse clamp assembly.',
  },
  {
    icon: Layers,
    name: 'Column and heavy-wall formwork',
    body:
      'D20 ties on wider walls and column lifts where higher concrete pressure demands the higher-SWL diameter and heavier waller plates.',
  },
  {
    icon: Droplets,
    name: 'Water-retaining structures',
    body:
      'Basement walls, water tanks and ETP walls where tie rods are left cast-in with a PVC water-stop disc so the rod bore does not become a water path.',
  },
  {
    icon: Boxes,
    name: 'Precast concrete yards',
    body:
      'Repeat-use HDG waller plates and wing nuts for precast panel and hollow-core plants where the pour-and-strip cycle counts into the hundreds.',
  },
  {
    icon: Hammer,
    name: 'High-rise construction',
    body:
      'Jump-form, tunnel-form and climbing-shutter assemblies on high-rise cores where the tie-rod + wing-nut set is used across many lifts.',
  },
  {
    icon: Building2,
    name: 'Bridge girders and infrastructure',
    body:
      'Heavier D20 ties on bridge pier caps, box girders and tunnel formwork where the engineer calls out the higher safe working load.',
  },
];

const RELATED = [
  {
    href: '/products/foundation-bolts/',
    name: 'Foundation Bolts',
    anchor: 'foundation bolts for shore-tower base plates',
    body:
      'Cast-in J, L, U, headed and swedge foundation bolts to IS 5624, DIN 529 and ASTM F1554 for the shore-tower base-plate anchorage and for scaffold-upright feet.',
  },
  {
    href: '/products/tie-rods/',
    name: 'Tie Rods',
    anchor: 'formwork tie rods (D15 / D20)',
    body:
      'Threaded tie rods and turnbuckle assemblies — the paired product supplied alongside the wing-nut and waller-plate set for complete two-face shuttering lots.',
  },
  {
    href: '/products/stud-bolts/',
    name: 'Stud Bolts',
    anchor: 'stud bolts for flange and structural clamping',
    body:
      'Fully-threaded, tap-end and double-end stud bolts to ASTM A193 B7 / B8M and DIN 976 — for the flange and structural clamping that often ships alongside formwork hardware.',
  },
];

export default function Page() {
  const route = findRoute(PATH);
  const trail = route?.breadcrumbTrail ?? [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products/' },
    { label: 'Scaffold Accessories', href: PATH },
  ];

  return (
    <>
      <JsonLd
        data={productSchema({
          name: 'Scaffold Accessories',
          description:
            'Scaffold and shuttering accessories — formwork tie rods (D15 / D20), wing nuts, waller plates, sleeve nuts, water-stopper tie-rod assemblies and companion scaffolding hardware. Manufactured in Ahmedabad and supplied through our vetted partner network on an SKU-specific basis, with MS and hot-dip galvanised finishes.',
          category: 'Scaffold Accessories / Formwork Hardware',
          material: 'Mild Steel (IS 2062), Galvanised MS',
          image: HERO_IMAGE,
          path: PATH,
          classification: 'ambiguous',
        })}
      />
      <JsonLd data={faqPage(FAQS)} />

      {/* 1. Hero */}
      <Section>
        <Container>
          <Breadcrumbs trail={trail} />
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <p className="badge badge-gold">Manufactured &amp; supplied · Ahmedabad</p>
              <Heading as="h1" variant="hero" className="mt-4 font-heading">
                <span className="text-gold-gradient">Scaffold Accessories</span>{' '}
                Manufacturer &amp; Supplier
              </Heading>
              <hr className="rule-metal mt-5 w-40" aria-hidden="true" />
              <p className="mt-6 max-w-2xl text-lg text-ink-muted">
                Formwork tie rods, wing nuts, waller plates, sleeve nuts and
                companion shuttering hardware for RCC formwork, precast yards and
                high-rise construction — supplied from our Ahmedabad plant, with
                select items manufactured in-house and others sourced from vetted
                partners. SKU-specific; the make-or-supply split is confirmed on the
                quote line.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/request-quote/?product=scaffold-accessories"
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
                    alt="KP Fasteners scaffold-accessories inventory — formwork tie rods, wing nuts and waller plates for RCC shuttering"
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
            <ClassificationBanner classification="ambiguous" />
          </div>
        </Container>
      </Section>

      {/* 2. Technical overview */}
      <Section variant="alt">
        <Container>
          <Heading as="h2" variant="section">
            What &ldquo;scaffold accessories&rdquo; covers — and where KP fits
          </Heading>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <Prose>
              <p>
                In Indian construction trade usage, &ldquo;scaffold accessories&rdquo;
                most often refers to the shuttering-hardware family: wing nuts,
                tie-rod sets, waller plates, sleeve nuts and form ties — the
                consumables that hold the formwork faces together while concrete is
                poured and cures. The companion family is scaffold-tube hardware
                (right-angle, swivel and sleeve couplers per IS 2750 / BS 1139)
                supplied on confirmed enquiry.
              </p>
              <p className="mt-4">
                A standard two-face wall shutter is clamped by passing a{' '}
                <Link
                  href="/products/tie-rods/"
                  className="font-semibold text-brand-gold-strong hover:underline"
                >
                  D15 or D20 formwork tie rod
                </Link>{' '}
                through both shutter faces and both walers, slipping a waller plate
                over each end, and spinning a wing nut down to draw the faces to
                design thickness.
              </p>
            </Prose>
            <Prose>
              <p>
                KP Fasteners manufactures selected items in this range at our
                Ghanshyam Industrial Estate plant in Ahmedabad and supplies the
                balance through a vetted partner network. The make-or-supply split
                is SKU-specific and is confirmed on the quote line — for the
                manufactured items we issue EN 10204 3.1 MTCs with batch
                traceability; for the traded items we pass through the originating
                mill certificate.
              </p>
              <p className="mt-4">
                The{' '}
                <Link
                  href="/products/foundation-bolts/"
                  className="font-semibold text-brand-gold-strong hover:underline"
                >
                  foundation-bolt range
                </Link>{' '}
                is the anchorage side of the same project — shore-tower base-plate
                anchors and scaffold-upright feet are typically supplied on the same
                despatch.
              </p>
            </Prose>
          </div>
        </Container>
      </Section>

      {/* 3. Standards cross-reference */}
      <Section>
        <Container>
          <Heading as="h2" variant="section">Standards we quote against</Heading>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Formwork tie rods and wing nuts do not have a single global product
            standard — the family is governed by vendor-proprietary geometry at the
            system level and by the published standards for the base steel, the
            thread form and the coating class. The rows below map the standards
            that govern the materials and finishes we supply against.
          </p>
          <div className="mt-8">
            <SpecTable
              headers={[
                'Standard',
                'Country',
                'Scope',
                'Relevance to this category',
              ]}
              rows={[
                {
                  cells: [
                    'IS 2062',
                    'India (BIS)',
                    'Hot-rolled structural steel — base round-bar and plate stock',
                    'Base steel for tie rods, waller plates and sleeve nuts',
                  ],
                },
                {
                  cells: [
                    'IS 1367 (Part 3)',
                    'India (BIS)',
                    'Property classes and threading for carbon-steel fasteners',
                    'Property class (typically 4.6) and 6g thread form on the tie-rod and nut',
                  ],
                },
                {
                  cells: [
                    'ISO 898-1',
                    'International (ISO)',
                    'Mechanical properties of carbon- and alloy-steel fasteners',
                    'Metric mechanical minima on tie-rod and wing-nut stock',
                  ],
                },
                {
                  cells: [
                    'EN 10025',
                    'Europe (CEN)',
                    'Hot-rolled products of structural steels',
                    'Base-steel reference on European-specified projects',
                  ],
                },
                {
                  cells: [
                    'EN 12812',
                    'Europe (CEN)',
                    'Falsework — performance requirements and general design',
                    'Governs the falsework / scaffolding structure the accessories serve',
                  ],
                },
                {
                  cells: [
                    'IS 2750',
                    'India (BIS)',
                    'Steel scaffoldings — tubes and couplers',
                    'Right-angle, swivel and sleeve couplers (confirmed-enquiry)',
                  ],
                },
                {
                  cells: [
                    'BS 1139',
                    'UK (BSI)',
                    'Metal scaffolding — tubes and couplers',
                    'Alternate standard reference on UK-specified coupler orders',
                  ],
                },
                {
                  cells: [
                    'ASTM A153 / A153M',
                    'USA (ASTM)',
                    'Zinc coating (hot-dip) on iron and steel hardware',
                    'HDG film-thickness class on exported wing-nut and waller-plate lots',
                  ],
                },
                {
                  cells: [
                    'EN ISO 1461 / IS 2629',
                    'International / India',
                    'Hot-dip galvanised coatings on fabricated iron and steel',
                    'Default HDG specification for repeat-use shuttering hardware',
                  ],
                },
                {
                  cells: [
                    'ASTM B117',
                    'USA (ASTM)',
                    'Salt-spray (fog) test for coating performance',
                    'Reported salt-spray hours on coated-item inspection',
                  ],
                },
              ]}
            />
            <p className="mt-3 text-xs text-ink-muted">
              Thread form per IS 1367 (Part 3) / ISO 965 at 6g tolerance. HDG film
              thickness per EN ISO 1461 / IS 2629. Safe-working-load values are
              lot-specific and are not stated in this standards table — see the
              working-load reference below.
            </p>
          </div>
        </Container>
      </Section>

      {/* 4. Variant matrix */}
      <Section variant="alt">
        <Container>
          <Heading as="h2" variant="section">
            Sub-types we manufacture or supply
          </Heading>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Sub-type is specified by the formwork system and the project
            specification. The make-or-supply split against each row is
            SKU-specific and is confirmed on the quote line — some items are made
            at our Ahmedabad plant; others are sourced from our vetted partner
            network.
          </p>
          {/* VERIFICATION PENDING: Per-sub-type make-or-supply split, scaffold-
              coupler stock status, water-stopper assembly stock status, form-tie
              variant stocked and HDG routing — all pending Kabir Panchal
              confirmation per docs/content/content-briefs/scaffold-accessories.md
              §10. Markers also appear inside the VARIANTS and COATINGS data
              bodies above. */}
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

      {/* 5. Working-load reference */}
      <Section>
        <Container>
          <Heading as="h2" variant="section">
            Tie-rod working-load reference
          </Heading>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Working-load values on formwork tie rods are a function of the base
            steel, the section, the thread condition and the lot&apos;s mill test —
            not the nominal diameter alone. The ranges below are the industry
            default reference bands quoted by European formwork-system
            manufacturers against the D15 and D20 geometries; they are reference
            only, not a KP-specific rating. The actual SWL for your supply is set
            against the mill test on the quote line.
          </p>
          <div className="mt-8">
            {/* VERIFICATION PENDING: Specific SWL numbers for D15 (~90 kN) and
                D20 (~150 kN) commonly cited in PERI / Doka / MEVA published
                data sheets are NOT published here as hard numbers until (a)
                Kabir Panchal confirms KP wishes to publish the reference table
                and (b) a WebSearch pass confirms the specific values against
                public PERI / Doka / MEVA data. See docs/content/content-briefs/
                scaffold-accessories.md §4.3 and §10 item 11. The conservative
                phrasing below is the honest substitute. */}
            <SpecTable
              headers={[
                'Nominal diameter',
                'Typical formwork service',
                'Working-load reference',
                'Documentation on supply',
              ]}
              rows={[
                {
                  cells: [
                    'D15 (Ø15 mm)',
                    'Standard wall and column shutters, routine two-face RCC formwork',
                    'Lot-specific — confirmed on quote against mill test',
                    'EN 10204 3.1 MTC on request for manufactured items',
                  ],
                },
                {
                  cells: [
                    'D20 (Ø20 mm)',
                    'Heavier walls, column lifts, bridge piers and precast formwork',
                    'Lot-specific — confirmed on quote against mill test',
                    'EN 10204 3.1 MTC on request for manufactured items',
                  ],
                },
                {
                  cells: [
                    'Custom diameters',
                    'Non-standard or system-specific tie-rod geometry',
                    'On-request with system compatibility confirmed before quote',
                    'Supplied with originating mill certificate',
                  ],
                },
              ]}
            />
            <p className="mt-3 text-xs text-ink-muted">
              KP Fasteners does not publish a KP-specific SWL rating unless a
              client mill test or in-house UTM report supports the number. Buyers
              must confirm formwork-system compatibility (PERI-style / Doka-style
              / MEVA-style / generic) with their formwork provider before
              ordering.
            </p>
          </div>
        </Container>
      </Section>

      {/* 6. Coatings & finishes */}
      <Section variant="alt">
        <Container>
          <Heading as="h2" variant="section">Coatings &amp; finishes offered</Heading>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Coating is selected by the service life and by whether the piece is a
            one-time-use consumable or a repeat-use item that stays on site through
            many pour-and-strip cycles. HDG is the field default for wing nuts and
            waller plates; self-colour is the default for one-time-use tie rods.
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

      {/* 7. Choosing the right scaffold accessory */}
      <Section>
        <Container>
          <Heading as="h2" variant="section">
            Choosing the right accessory for the pour
          </Heading>
          <p className="mt-3 max-w-3xl text-ink-muted">
            A short decision block for site engineers and procurement officers
            working from an RCC formwork schedule or precast yard BOM. KP supplies
            against the formwork engineer&apos;s specification — we do not perform
            the shutter design or the SWL rating ourselves.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card variant="trust" padding="lg">
              <Heading as="h3" variant="card">
                RCC wall and column formwork (standard)
              </Heading>
              <Prose className="mt-3">
                <ul className="list-disc space-y-2 pl-5">
                  <li>Tie rod: <strong>D15</strong> cut-to-length.</li>
                  <li>Wing nut + waller plate: <strong>D15 to match</strong>, HDG for repeat-use.</li>
                  <li>Base: <strong>MS property class 4.6</strong>.</li>
                  <li>Sleeve nuts (chuck nuts) for longer thread engagement where called.</li>
                </ul>
              </Prose>
            </Card>
            <Card variant="trust" padding="lg">
              <Heading as="h3" variant="card">
                Heavy wall, column lift or bridge pier
              </Heading>
              <Prose className="mt-3">
                <ul className="list-disc space-y-2 pl-5">
                  <li>Tie rod: <strong>D20</strong> cut-to-length.</li>
                  <li>Wing nut + waller plate: <strong>D20 to match</strong>, heavier plate (150 × 150 × 8 mm).</li>
                  <li>Base: <strong>MS property class 4.6</strong>; coating per service.</li>
                  <li>SWL confirmed on the quote line against mill test.</li>
                </ul>
              </Prose>
            </Card>
            <Card variant="trust" padding="lg">
              <Heading as="h3" variant="card">
                Water-retaining structure (basement, tank, ETP)
              </Heading>
              <Prose className="mt-3">
                <ul className="list-disc space-y-2 pl-5">
                  <li>Tie rod: <strong>D15 or D20 water-stopper assembly</strong>.</li>
                  <li>Water-stop disc: <strong>PVC or rubber</strong>, mid-span.</li>
                  <li>Rod self-colour (encased in concrete after pour).</li>
                  <li>Mark the water-stop requirement on the RFQ line.</li>
                </ul>
              </Prose>
            </Card>
            <Card variant="trust" padding="lg">
              <Heading as="h3" variant="card">
                Precast yard (high-cycle repeat-use)
              </Heading>
              <Prose className="mt-3">
                <ul className="list-disc space-y-2 pl-5">
                  <li>Wing nut + waller plate: <strong>HDG, full set</strong>.</li>
                  <li>Tie rod: <strong>HDG</strong> where recovered for reuse.</li>
                  <li>Sleeve nuts for the long-thread shutter geometries.</li>
                  <li>Lot-level MTC trail for the manufactured items.</li>
                </ul>
              </Prose>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 8. Applications */}
      <Section variant="alt">
        <Container>
          <Heading as="h2" variant="section">Applications &amp; sectors we serve</Heading>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Sectors we actively supply from Ahmedabad. For project-level
            support on{' '}
            <Link
              href="/industries/construction-infrastructure/"
              className="font-semibold text-brand-gold-strong hover:underline"
            >
              structural, RCC formwork and precast construction projects
            </Link>
            , share the shuttering schedule or BOQ and we quote per diameter,
            waller-plate size and coating.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
              KP&apos;s active supply lines; project-specific sector-reference
              naming is provided on quote.
            </span>
          </p>
        </Container>
      </Section>

      {/* 9. Brand compatibility note */}
      <Section>
        <Container>
          <Card variant="trust" padding="lg">
            <Heading as="h2" variant="subsection">
              Brand compatibility — PERI, Doka, MEVA and other formwork systems
            </Heading>
            {/* VERIFICATION PENDING: System-specific brand compatibility (PERI
                DYWIDAG DW 15, Doka system codes, MEVA codes) is pending Kabir
                Panchal confirmation. See docs/content/content-briefs/
                scaffold-accessories.md §10 item 12 ("hardest single open
                question") and docs/content/reference-defaults.md row 10. The
                default stance below is intentionally system-neutral; do NOT
                upgrade to a firmer brand-compat claim until the sub-type-level
                answer lands in writing. */}
            <p className="mt-4 text-ink-muted">
              Our items are supplied as system-neutral D15 and D20 geometry that
              fits most European-style formwork systems. We do not claim to be an
              approved or endorsed supplier of PERI, Doka, MEVA, NOE or ULMA
              systems — each of those vendors runs proprietary tie-rod and
              wing-nut geometries that are not covered by a system-neutral quote.
            </p>
            <p className="mt-3 text-ink-muted">
              Where brand-specific or system-code compatibility is required (for
              example a PERI DYWIDAG DW 15 code on your BOQ), specify the
              formwork system name and the exact tie-rod code on your RFQ. We
              will confirm fit against your formwork provider&apos;s drawing
              before despatch, and will not substitute a generic rod for a
              proprietary code without your written approval.
            </p>
          </Card>
        </Container>
      </Section>

      {/* 10. Quality & documentation */}
      <Section variant="alt">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
            <div>
              <Heading as="h2" variant="section">Quality control &amp; documentation</Heading>
              <ul className="mt-6 space-y-3 text-ink">
                {[
                  'Dimensional inspection — diameter, waller-plate size and thread engagement — on every manufactured lot.',
                  'Thread gauge inspection to ISO 965 / IS 1367 (6g go / no-go) on tie-rod and nut lots.',
                  'HDG coating-thickness check per EN ISO 1461 / IS 2629 class on coated lots.',
                  'EN 10204 3.1 mill test certificates on request for the manufactured items; pass-through of the originating mill certificate for the traded items.',
                  'Batch traceability by base-steel heat number on manufactured lots.',
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
                <li>• EN 10204 3.1 MTC on request (manufactured items)</li>
                <li>• Mill certificate pass-through (traded items)</li>
                <li>• Dimensional + thread-gauge inspection report</li>
                <li>• HDG coating-thickness report on coated lots</li>
                <li>• Heat-number batch traceability on manufactured lots</li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 11. Mid-page CTA */}
      <Section>
        <Container>
          <Card variant="metallic" padding="lg">
            <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center">
              <div>
                <Heading as="h2" variant="subsection">
                  <span className="text-gold-gradient">
                    Have a formwork BOQ or shuttering schedule ready?
                  </span>
                </Heading>
                <p className="mt-3 max-w-2xl text-ink-muted">
                  Share tie-rod diameter (D15 / D20), wing-nut and waller-plate
                  size, coating and quantity. Quote back within one working day
                  with MTC availability on the manufactured items.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/request-quote/?product=scaffold-accessories"
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

      {/* 12. FAQs */}
      <Section variant="alt">
        <Container width="narrow">
          <Heading as="h2" variant="section">Frequently asked questions</Heading>
          <p className="mt-3 text-ink-muted">
            Procurement-level answers. For project-specific detail, send your
            shuttering schedule or formwork drawing.
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

      {/* 13. Related products */}
      <Section>
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
              href="/industries/construction-infrastructure/"
              className="font-semibold text-brand-gold-strong hover:underline"
            >
              construction &amp; infrastructure
            </Link>{' '}
            industry page for the broader project context.
          </p>
        </Container>
      </Section>

      {/* 14. Closing CTA */}
      <Section variant="alt">
        <Container>
          <Card variant="metallic" padding="lg">
            <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center">
              <div>
                <Wrench aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
                <Heading as="h2" variant="subsection" className="mt-3">
                  <span className="text-gold-gradient">
                    Send us your formwork BOQ.
                  </span>
                </Heading>
                <p className="mt-3 max-w-2xl text-ink-muted">
                  Schedules accepted as PDF or Excel; formwork drawings as PDF or
                  DWG. We reply within one working day with diameter, waller-plate
                  size, coating, lead time and MTC availability on the
                  manufactured items.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/request-quote/?product=scaffold-accessories"
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
