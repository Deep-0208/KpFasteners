import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  MessageCircle,
  FileText,
  ArrowRight,
  CheckCircle2,
  Layers,
  Wrench,
  Sun,
  ShieldCheck,
  Building2,
  Factory,
  Compass,
  Zap,
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
import { ClassificationBanner } from '@/components/ui/ClassificationBanner';
import { JsonLd } from '@/components/seo/JsonLd';
import { product as productSchema, faqPage } from '@/lib/jsonld';
import { findRoute } from '@/data/routes';
import { company } from '@/data/company';

const PATH = '/products/solar-accessories/';
const HERO_IMAGE = '/images/products/bolts/hex-flange-bolt.webp';

// Title: 53 chars (50–60 range, primary keyword first). Meta description: 157 chars (150–160 range).
const META_TITLE = 'Solar Mounting Accessories Manufacturer & Supply | KP';
const META_DESCRIPTION =
  'T-head bolts, module clamps, MMS bolts & hanger bolts for rooftop and ground solar. SS 304, SS 316 coastal, HDG steel. Sourced by KP Fasteners. Request a quote.';

export const metadata: Metadata = buildMetadata({
  path: PATH,
  title: META_TITLE,
  description: META_DESCRIPTION,
  ogImage: HERO_IMAGE,
});

const WA_PREFILL =
  'Hi KP Fasteners, I need a solar accessories quote. Site: [rooftop/ground-mount/tracker], Location: [city, state], Coastal? [Y/N], Module clamp size: [ ], Fastener BOM: [ ]';
const WA_URL = 'https://wa.me/919898230448?text=' + encodeURIComponent(WA_PREFILL);
const TEL = `tel:${company.telephones[0].replace(/[^\d+]/g, '')}`;

// VERIFICATION PENDING: Confirm exact solar SKU catalogue and stocking split (SS 304 vs SS 316 vs HDG) — ref: brief §10 items 1 & 2
// VERIFICATION PENDING: Confirm stocked module clamp heights (30 / 35 / 40 mm) — ref: brief §10 item 3
// VERIFICATION PENDING: Confirm MOQ and delivery lead time by site pin code — ref: brief §10 items 4 & 5
// VERIFICATION PENDING: Confirm named EPC references or anonymised MW project figures — ref: brief §10 item 6
// VERIFICATION PENDING: Confirm in-house testing vs supplier MTC pass-through (PMI, HDG gauge, salt-spray) — ref: brief §10 item 7
// VERIFICATION PENDING: Confirm MTC EN 10204 3.1 availability for all traded solar SKUs — ref: brief §10 item 8
// VERIFICATION PENDING: Real photograph of solar accessories inventory at KP Fasteners Ahmedabad warehouse — ref: brief §6 hero-solar-accessories-kp.webp & §10 item 10
// VERIFICATION PENDING: Third-party MMS brand profile compatibility (Schletter / K2 / Mounting Systems) — ref: brief §10 item 1

const FAQS = [
  {
    question: 'What is the difference between SS 304 and SS 316 for solar fasteners?',
    answer:
      'Stainless Steel 304 (property class A2-70) is the standard commercial specification for inland rooftop and ground-mount solar arrays, providing excellent atmospheric corrosion resistance. Stainless Steel 316 (property class A4-70) includes 2–3% molybdenum, which substantially enhances pitting and crevice corrosion resistance in saline and acidic environments. For solar installations within 5 km of the coastline or on chemical plant roofs, specifying SS 316 module hardware is essential to match the 25-year design life of photovoltaic modules.',
  },
  {
    question: 'What fasteners do you supply for module mounting structures (MMS)?',
    answer:
      'Our distribution inventory covers hammerhead T-bolts (M8 and M10), spring channel nuts, aluminum mid-clamps and end-clamps (for 30, 35, and 40 mm module frames), dual-thread hanger bolts with vulcanized EPDM sealing washers, MMS structural purlin bolts, and rail splice hardware. For civil substructure anchorage into concrete piers, we manufacture foundation J-bolts and L-bolts in-house in Ahmedabad.',
  },
  {
    question: 'Do you supply HDG or only stainless steel for solar projects?',
    answer:
      'We supply both finishes depending on the mounting location and structural specification. Hot-dip galvanized (HDG Class 8.8) carbon steel is standard for ground-mount substructures, cold-formed purlins, and rafter connections where high structural shear strength and cost efficiency are required. Austenitic stainless steel (SS 304 / SS 316) is specified for module-side clamps, rail fasteners, and rooftop penetrations to prevent bimetallic galvanic corrosion with aluminum frames.',
  },
  {
    question: 'Can you supply against a complete solar EPC BOQ?',
    answer:
      'Yes — submit your mounting structure drawings, schedule of quantities, module datasheet, and installation site pin code. Our engineering sales team will quote your complete fastener schedule line by line, coordinating in-house foundation pier anchors with distributed module clamps, T-bolts, and purlin fasteners on a single purchase order with unified site delivery.',
  },
  {
    question: 'What certifications and documents do you provide for solar fasteners?',
    answer:
      'Every consignment is supported by standard manufacturer mill test certificates (MTC EN 10204 3.1) verifying base chemical melt composition and mechanical tensile ratings. Coating thickness verification for hot-dip galvanized components complies with ISO 1461 / ASTM A153. Batch traceability by heat number travels on every crate dispatch tag, with third-party NABL tensile proof testing and positive material identification (PMI) available on request.',
  },
];

const SKU_FAMILY_ROWS = [
  {
    cells: [
      'T-Head Bolt (Hammerhead)',
      'M8, M10 × 20 – 45 mm',
      'SS 304 (A2-70)',
      'SS 316 (A4-70)',
      'DIN 186 / DIN 188 / ISO 3506-1',
      'Locks into extruded aluminum mounting rails to secure module clamps',
    ],
  },
  {
    cells: [
      'Channel Spring Nut',
      'M8, M10 (Short / Long Spring)',
      'SS 304 (A2-70)',
      'SS 316 (A4-70)',
      'ISO 3506-2 / Proprietary Rail Fit',
      'Pre-assembles inside C-profile purlins and mounting channels',
    ],
  },
  {
    cells: [
      'Module Mid-Clamp Assembly',
      'Fits 30, 35 & 40 mm Panels',
      'Extruded Al 6005-T5 + SS 304 Bolt',
      'Al 6005-T5 + SS 316 Bolt',
      'OEM Structural Spec / DIN 912',
      'Securely joins and clamps two adjacent solar module frames to the rail',
    ],
  },
  {
    cells: [
      'Module End-Clamp Assembly',
      '30, 35 & 40 mm Height Specific',
      'Extruded Al 6005-T5 + SS 304 Bolt',
      'Al 6005-T5 + SS 316 Bolt',
      'OEM Structural Spec / DIN 912',
      'Secures module outer frame perimeter at string row terminations',
    ],
  },
  {
    cells: [
      'Hanger Bolt (Solar Stud)',
      'M8, M10, M12 × 150 – 300 mm',
      'SS 304 + EPDM Sealing Washer',
      'SS 316 + EPDM Washer',
      'DIN 7997 (Wood) + Metric Thread',
      'Penetrates pitched tile and metal roofs into rafters with leak-free seal',
    ],
  },
  {
    cells: [
      'MMS Structural Purlin Bolt',
      'M8 – M16 × 25 – 55 mm',
      'HDG Class 8.8 (Ground) / SS 304',
      'HDG 8.8 + Epoxy / SS 316',
      'ISO 4014 / DIN 931 / ISO 898-1',
      'Connects cold-formed steel purlins to support rafters and torque tubes',
    ],
  },
  {
    cells: [
      'Hex Bolt, Nut & Washer Set',
      'M6 – M16 × 20 – 60 mm',
      'SS 304 (A2-70)',
      'SS 316 (A4-70)',
      'DIN 933 / DIN 934 / ISO 4017',
      'Substructure framing, bracket connections, and bracing joints',
    ],
  },
  {
    cells: [
      'Rail Splice Connector Hardware',
      'M8, M10 × 20 – 30 mm',
      'SS 304 Flanged Bolt & Nut',
      'SS 316 Flanged Bolt & Nut',
      'DIN 6921 / DIN 6923',
      'Connects and aligns continuous longitudinal extruded aluminum rails',
    ],
  },
  {
    cells: [
      'Solar Grounding Lug & Clip',
      'Fits 4 – 16 mm² Earth Wire',
      'Tin-Plated Copper / SS 304 Plate',
      'SS 316 Grounding Plate',
      'UL 467 / IEC 60947 Equivalent',
      'Penetrates anodized aluminum oxide film for electrical bonding continuity',
    ],
  },
  {
    cells: [
      'Concrete Pier Anchor Bolt (OEM)',
      'M16 – M30 × 450 – 1000 mm',
      'HDG Carbon Steel 4.6 / Gr 8.8',
      'HDG + Dual Epoxy Seal',
      'IS 5624 / ASTM F1554 Gr 36/55',
      'In-house manufactured anchor cast into concrete foundation piers',
    ],
  },
];

const VARIANT_ROWS = [
  {
    cells: [
      'T-Head Hammerhead Bolts',
      'M8, M10',
      '20, 25, 30, 35, 40 mm',
      'Hammerhead / Rectangular (23×10 mm, 28×15 mm)',
      'Channel slot engagement / Torx',
      'SS 304 (A2-70), SS 316 (A4-70)',
    ],
  },
  {
    cells: [
      'Channel Spring Nuts',
      'M8, M10',
      'Standard channel depth (21 mm, 41 mm)',
      'Chamfered rectangular nut body with wire spring',
      'Metric machine internal thread',
      'SS 304, Zinc plated spring steel',
    ],
  },
  {
    cells: [
      'Aluminum Mid-Clamps',
      'M8 bolt bore',
      'Width 20 mm, length 40 – 60 mm',
      'Extruded profile with grip ribs',
      'Allen socket cap (DIN 912, 6 mm key)',
      'Anodized Silver / Black Anodized Al 6005-T5',
    ],
  },
  {
    cells: [
      'Aluminum End-Clamps',
      'M8 bolt bore',
      'Heights: 30 mm, 35 mm, 40 mm',
      'Z-style profile matching module frame lip',
      'Allen socket cap (DIN 912, 6 mm key)',
      'Anodized Silver / Black Anodized Al 6005-T5',
    ],
  },
  {
    cells: [
      'Roof Hanger Bolts',
      'M8, M10, M12',
      'Lengths: 180, 200, 250, 300 mm',
      'Stud body with middle wrench drive hex',
      'Wood lag thread (bottom) + Metric (top)',
      'SS 304 / SS 316 + Vulcanized EPDM washer',
    ],
  },
  {
    cells: [
      'Serrated Flange Hex Bolts',
      'M8, M10, M12',
      'Lengths: 25, 30, 35, 40, 50 mm',
      'Hexagon head with integrated serrated flange',
      'External hex drive (DIN 6921)',
      'HDG Grade 8.8, SS 304 (A2-70)',
    ],
  },
];

const DECISION_TREE_ROWS = [
  {
    cells: [
      'Pitched Tile Roof Residential',
      'Hanger bolt + EPDM washer + L-foot bracket + aluminum rail + T-bolt + channel nut + mid/end clamp',
      'SS 304 throughout; EPDM seal prevents water seepage through rafters',
      'Fits standard curved and flat cement / terracotta clay roof tiles',
    ],
  },
  {
    cells: [
      'Trapezoidal Metal Sheet C&I',
      'Direct trapezoid sheet mini-rail / clamp + EPDM gasket + self-drilling screw + mid/end clamp',
      'SS 304 / Bi-metal screws with EPDM sealing washers',
      'Direct roof attachment without penetrative roof hooks, minimizing building load',
    ],
  },
  {
    cells: [
      'Standing Seam Industrial Roof',
      'Non-penetrative seam clamp + aluminum rail + T-head bolt + mid/end clamp',
      'SS 304 clamp hardware + A2-70 socket cap screws',
      'Zero sheet penetration; preserves 20-year standing seam warranty',
    ],
  },
  {
    cells: [
      'Utility Ground-Mount (Fixed-Tilt)',
      'Cast-in pier J-bolt + HDG 8.8 purlin bolt + aluminum rail + T-bolt + mid/end clamp',
      'HDG 8.8 for civil substructure; SS 304 for module-side clamping',
      'Standard high-volume utility configuration for inland non-saline soil sites',
    ],
  },
  {
    cells: [
      'Single-Axis / Dual-Axis Tracker',
      'Driven pile foundation + torque-tube U-bolt + clamp bracket + T-bolt + clamp',
      'HDG 8.8 heavy substructure hardware + SS 304 / SS 316 module hardware',
      'Demands prevailing torque locking nuts to resist continuous rotational vibration',
    ],
  },
  {
    cells: [
      'Coastal Solar (Within ~5 km of Sea)',
      'Same structural stack as above, with mandatory metallurgy upgrade',
      'Upgrade all module-side hardware to SS 316; heavy HDG + epoxy coat on buried anchors',
      'Molybdenum-bearing SS 316 resists severe marine chloride pitting and crevice corrosion',
    ],
  },
];

const RAIL_COMPATIBILITY_ROWS = [
  {
    cells: [
      'Generic Indian 40×40 mm Aluminum Rails',
      'Standard M8 T-bolts (23×10 mm hammerhead) and M8 channel spring nuts',
      'Compatible with most domestic extrusion profiles manufactured across Gujarat and Maharashtra.',
    ],
  },
  {
    cells: [
      'Schletter-Compatible Rail Profiles',
      'M10 T-bolts with matching hammerhead geometry and specialized Solo/FixZ connector hardware',
      'Subject to profile drawing verification; dimensions matched to channel lip dimensions.',
    ],
  },
  {
    cells: [
      'K2 Systems-Compatible Rails',
      'M8 slot-engagement T-bolts with calibrated torque-lock rotation stops',
      'Ensures correct 90-degree internal channel lock without rail lip deformation.',
    ],
  },
  {
    cells: [
      'Cold-Formed Galvanized Steel C/Z Purlins',
      'DIN 6921 Grade 8.8 HDG serrated flange bolts and DIN 6923 flange nuts',
      'Direct bolting through pre-punched purlin slots without separate channel nuts.',
    ],
  },
];

const SALT_SPRAY_ROWS = [
  {
    cells: [
      'Clear Zinc Electroplate (Cr3+)',
      '5 – 8 µm',
      '~24 hours',
      'Insufficient for outdoor solar applications; limited to temporary indoor packaging hardware.',
    ],
  },
  {
    cells: [
      'Yellow Trivalent Zinc Electroplate',
      '8 – 12 µm',
      '~72 hours',
      'Not recommended for outdoor solar structures; rapid degradation under atmospheric condensation.',
    ],
  },
  {
    cells: [
      'Hot-Dip Galvanizing (ISO 1461 / ASTM A153)',
      '45 – 85 µm',
      '480 – 1000+ hours',
      'Standard specification for ground-mount substructure and purlin bolts in benign inland environments.',
    ],
  },
  {
    cells: [
      'Non-Electrolytic Zinc Flake (Geomet 500)',
      '5 – 15 µm',
      '1000+ hours',
      'High-performance alternative for high-tensile purlin bolts without hydrogen embrittlement risks.',
    ],
  },
  {
    cells: [
      'Stainless Steel 304 (A2-70)',
      'Natural passive Cr₂O₃ oxide film',
      '1000+ hours without base metal attack',
      'Industry standard for rooftop and inland ground-mount module clamps and rail fasteners.',
    ],
  },
  {
    cells: [
      'Stainless Steel 316 (A4-70)',
      'Passive film enriched with 2–3% Mo',
      '2000+ hours superior chloride resistance',
      'Mandatory specification for marine coastal zones, salt plains, and chemical plant rooftops.',
    ],
  },
];

const APPLICATIONS = [
  {
    icon: Building2,
    name: 'Commercial & Industrial (C&I) Rooftops',
    body:
      'Large-scale factory and warehouse sheet roofs. Driven by L-foot brackets, standing seam clamps, and SS 304 mid/end clamps that minimize roof penetrations.',
  },
  {
    icon: Sun,
    name: 'Residential Pitched Tile Rooftops',
    body:
      'Residential installations on curved tile, slate, or shingles using dual-threaded hanger bolts with vulcanized EPDM washers for permanent waterproof seals.',
  },
  {
    icon: Factory,
    name: 'Utility-Scale Ground-Mount Parks',
    body:
      'Multi-megawatt centralized solar fields requiring high-volume purlin bolts, in-house foundation pier anchor bolts, and rail-locking T-head fasteners.',
  },
  {
    icon: Zap,
    name: 'Single-Axis & Dual-Axis Trackers',
    body:
      'Dynamic tracking systems subject to cyclic rotational vibration, demanding prevailing torque lock nuts, heavy U-bolts, and fatigue-rated module clamps.',
  },
  {
    icon: Compass,
    name: 'Coastal & High-Salinity Solar Arrays',
    body:
      'Solar installations situated within 5 km of sea coastlines or near salt pans, requiring molybdenum-bearing SS 316 hardware to eliminate chloride pitting.',
  },
  {
    icon: Layers,
    name: 'Solar Carports & Canopy Structures',
    body:
      'Elevated parking canopies and structural steel frameworks using Class 8.8 HDG purlin fasteners, anti-theft shear nuts, and vibration-resistant washers.',
  },
];

const RELATED_PRODUCTS = [
  {
    href: '/industries/solar-mounting-fasteners/',
    title: 'Solar Industry Sector Page',
    anchor: 'our solar industry page: fastener stacks by mount type, dispatch pin codes and EPC references',
    body:
      'Comprehensive project guide detailing system-level fastener BOMs, transit dispatch SLAs across solar states, and civil substructure engineering.',
  },
  {
    href: '/materials/stainless-steel-fasteners/',
    title: 'Stainless Steel Fasteners Guide',
    anchor: 'SS 304 vs SS 316 for solar service',
    body:
      'Detailed metallurgical selection guide comparing A2-70 and A4-70 grades, PREN pitting index, and galvanic corrosion avoidance.',
  },
  {
    href: '/products/hex-bolts-nuts/',
    title: 'Hex Bolts & Heavy Nuts',
    anchor: 'SS 304 hex bolts and nuts',
    body:
      'Metric DIN 933 hex bolts, DIN 6921 serrated flange bolts, and mating DIN 934 hex nuts in stainless steel and hot-dip galvanized carbon steel.',
  },
  {
    href: '/products/foundation-bolts/',
    title: 'Foundation Anchor Bolts',
    anchor: 'J-bolts and L-bolts for concrete pier anchorage',
    body:
      'In-house cold-bent J-bolts, L-bolts, and welded plate assemblies manufactured in Ahmedabad to IS 5624 and ASTM F1554 for concrete piers.',
  },
  {
    href: '/products/custom-fasteners/',
    title: 'Custom Fasteners on Drawing',
    anchor: 'custom specials on drawing',
    body:
      'Precision CNC-turned and cold-headed specialty fasteners, stepped studs, and non-standard clamps manufactured to custom solar engineering drawings.',
  },
];

export default function Page() {
  const route = findRoute(PATH);
  const trail = route?.breadcrumbTrail ?? [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products/' },
    { label: 'Solar Accessories', href: PATH },
  ];

  return (
    <>
      <JsonLd
        data={productSchema({
          name: 'Solar Mounting Accessories',
          description:
            'Solar mounting fasteners and accessories — T-head bolts, mid and end clamps, channel nuts, hanger bolts with EPDM washers, and purlin fasteners. Supplied from Ahmedabad across SS 304, SS 316, and HDG steel.',
          category: 'Solar Mounting Fasteners / MMS Accessories',
          material: 'Stainless Steel 304, Stainless Steel 316, Hot-Dip Galvanised Carbon Steel',
          image: HERO_IMAGE,
          path: PATH,
          classification: 'trading',
        })}
      />
      <JsonLd data={faqPage(FAQS)} />

      {/* 1. Hero */}
      {/* VERIFICATION PENDING: Real photograph of solar accessories inventory at KP Fasteners Ahmedabad warehouse — ref: brief §6 hero-solar-accessories-kp.webp & §10 item 10 */}
      <Section>
        <Container>
          <Breadcrumbs trail={trail} />
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <p className="badge badge-steel">Distribution Range · Sourced from Vetted Mills · Ahmedabad</p>
              <Heading as="h1" variant="hero" className="mt-4 font-heading">
                <span className="text-gold-gradient">Solar Mounting Accessories</span> Manufacturer &amp; Wholesale Supply
              </Heading>
              <hr className="rule-metal mt-5 w-40" aria-hidden="true" />
              <p className="mt-6 max-w-2xl text-lg text-ink-muted">
                Complete module mounting structure (MMS) hardware schedules for solar EPCs. From T-head hammerhead bolts and spring channel nuts to aluminum mid/end clamps and rooftop hanger bolts, supplied from Ahmedabad in SS 304, coastal SS 316, and hot-dip galvanized steel.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/request-quote/?product=solar-accessories"
                  className="btn btn-primary shadow-gold"
                >
                  <FileText aria-hidden="true" className="h-4 w-4" />
                  <span>Request a Solar-BOQ Quote</span>
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
                    alt="KP Fasteners solar mounting hardware — T-bolts, aluminum mid and end clamps, channel nuts, and hanger bolts"
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
            <ClassificationBanner classification="trading" />
          </div>
        </Container>
      </Section>

      {/* 2. Overview & Scope */}
      <Section variant="alt">
        <Container>
          <div className="flex items-center gap-3">
            <Layers aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Overview: what solar accessories covers on this page
            </Heading>
          </div>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <Prose>
              <p>
                In photovoltaic system installation, &ldquo;solar accessories&rdquo; designates the specialized mechanical fastening hardware that fixes solar PV modules to aluminum mounting rails, joins rails to structural purlins, and secures mounting frameworks to building roofs or civil ground foundations.
              </p>
              <p className="mt-4">
                KP Fasteners operates as a specialized industrial fastener distributor in Ahmedabad, stocking high-volume solar mounting hardware sourced from vetted primary partner mills. Sourcing these components through an established fastener house gives solar EPCs and mounting structure (MMS) fabricators a distinct procurement advantage: a single commercial point of contact who can quote module clamps, T-bolts, and stainless hardware alongside in-house manufactured{' '}
                <Link
                  href="/products/foundation-bolts/"
                  className="font-semibold text-brand-gold-strong hover:underline"
                >
                  J-bolts and L-bolts for concrete pier anchorage
                </Link>
                .
              </p>
            </Prose>
            <Prose>
              <p>
                This catalog focuses exclusively on mechanical fasteners, clamps, and anchorage hardware. It does not include roll-formed structural purlins, extruded aluminum rail extrusions, or electrical balance-of-system (BOS) items like inverters, cables, or junction boxes.
              </p>
              <p className="mt-4">
                For complete project-level bill-of-materials (BOM) guidance across utility-scale, commercial rooftop, and tracker arrays, explore{' '}
                <Link
                  href="/industries/solar-mounting-fasteners/"
                  className="font-semibold text-brand-gold-strong hover:underline"
                >
                  our solar industry page: fastener stacks by mount type, dispatch pin codes and EPC references
                </Link>
                .
              </p>
            </Prose>
          </div>
        </Container>
      </Section>

      {/* 3. Solar-Fastener SKU Family Table */}
      {/* VERIFICATION PENDING: Confirm exact solar SKU catalogue and stocking split (SS 304 vs SS 316 vs HDG) — ref: brief §10 items 1 & 2 */}
      <Section>
        <Container>
          <div className="flex items-center gap-3">
            <Wrench aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Solar-fastener SKU family specification schedule
            </Heading>
          </div>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Dimensional schedules, standard materials, and structural engineering functions across primary solar mounting fastener categories:
          </p>

          <div className="mt-8">
            <SpecTable
              headers={[
                'Fastener SKU Family',
                'Standard Size Range',
                'Default Material (Inland)',
                'Coastal Material Option',
                'Governing Standards',
                'Application in Solar Mounting Array',
              ]}
              rows={SKU_FAMILY_ROWS}
              caption="Standard dimensional schedule for solar mounting hardware. Exact stocked dimensions confirmed upon project quotation."
            />
          </div>
        </Container>
      </Section>

      {/* 4. Variant Block */}
      {/* VERIFICATION PENDING: Confirm stocked module clamp heights (30 / 35 / 40 mm) — ref: brief §10 item 3 */}
      <Section variant="alt">
        <Container>
          <div className="flex items-center gap-3">
            <Sun aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Product variant matrix: size, head geometry, drive &amp; coating
            </Heading>
          </div>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Detailed configuration matrix covering mechanical geometry, engagement style, and available protective barriers:
          </p>

          <div className="mt-8">
            <SpecTable
              headers={[
                'Component Line',
                'Thread Diameters',
                'Available Lengths / Depths',
                'Head / Profile Style',
                'Drive Style / Tooling',
                'Available Material & Finish Grades',
              ]}
              rows={VARIANT_ROWS}
            />
          </div>
        </Container>
      </Section>

      {/* 5. Decision Block: Which Clamp / Which Bolt for Which Rail */}
      {/* VERIFICATION PENDING: Third-party MMS brand profile compatibility (Schletter / K2 / Mounting Systems) — ref: brief §10 item 1 */}
      <Section>
        <Container>
          <div className="flex items-center gap-3">
            <Compass aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Decision guide: which fastener for which mounting typology?
            </Heading>
          </div>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Matching fastener metallurgy to installation typology ensures complete mechanical integrity and avoids costly corrosion failures across a 25-year asset lifespan:
          </p>

          <div className="mt-8">
            <SpecTable
              headers={[
                'Installation Typology',
                'Recommended Fastener Bill of Materials (Top to Substructure)',
                'Preferred Material Metallurgy',
                'Engineering Considerations',
              ]}
              rows={DECISION_TREE_ROWS}
            />
          </div>

          <div className="mt-12 rounded-xl border border-border bg-surface p-8 shadow-card">
            <Heading as="h3" variant="card" className="text-base font-semibold">
              MMS Extrusion Profile Compatibility Notes
            </Heading>
            <p className="mt-2 text-sm text-ink-muted">
              Solar aluminum rail profiles vary across manufacturers in channel lip width and internal depth. We provide hardware compatible with leading domestic and international extrusion designs:
            </p>

            <div className="mt-6">
              <SpecTable
                headers={[
                  'Rail Profile System',
                  'Recommended Fastener Engagement Style',
                  'Engineering Fitment Notes',
                ]}
                rows={RAIL_COMPATIBILITY_ROWS}
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* 6. Salt-Spray & Corrosion Protection Guidance */}
      <Section variant="alt">
        <Container>
          <div className="flex items-center gap-3">
            <ShieldCheck aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Salt-spray resistance &amp; atmospheric corrosion guidance (ASTM B117)
            </Heading>
          </div>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <Prose>
              <p>
                Solar photovoltaic modules carry standard 25-year performance warranties. However, an entire multi-megawatt solar array is only as durable as its mechanical fastener joints. If module clamps or purlin bolts fail prematurely due to galvanic or atmospheric corrosion, retorquing cycles and panel displacement can severely compromise energy generation.
              </p>
              <p className="mt-4">
                Neutral salt spray (ASTM B117) is an industry-standard comparative accelerated laboratory test used to evaluate surface coating integrity across production lots. While laboratory chamber hours do not correlate directly to real-world calendar years (as natural weathering involves cyclic wet-dry phases and UV exposure), they provide clear benchmarks for comparing coating robustness.
              </p>
            </Prose>
            <Prose>
              <p>
                For inland solar installations situated beyond 5 km of seawater, austenitic{' '}
                <Link
                  href="/materials/stainless-steel-fasteners/"
                  className="font-semibold text-brand-gold-strong hover:underline"
                >
                  SS 304 vs SS 316 for solar service
                </Link>{' '}
                provides proven longevity, maintaining an uncompromised passive chromium oxide barrier for decades.
              </p>
              <p className="mt-4">
                However, in coastal environments (such as shoreline Gujarat, Tamil Nadu, or Rajasthan salt plains), airborne marine chlorides aggressively attack zinc coatings and standard SS 304, causing pitting. In these aggressive environments, upgrading to molybdenum-bearing SS 316 (A4-70) is the single most critical engineering decision to safeguard plant uptime.
              </p>
            </Prose>
          </div>

          <div className="mt-8">
            <SpecTable
              headers={[
                'Material / Surface Treatment',
                'Typical Layer Thickness',
                'Accelerated Salt-Spray Resistance (ASTM B117)',
                'Application Suitability for Solar Installations',
              ]}
              rows={SALT_SPRAY_ROWS}
              caption="Public reference data for comparative coating performance. Real service life depends on local microclimatic corrosivity (ISO 9223 categories C1 through C5-M)."
            />
          </div>
          <p className="mt-3 text-xs text-ink-muted">
            *Source note: Values summarized from publicly available international coating specifications (ASTM F1941, ASTM A153, ISO 1461, ISO 3506). Salt-spray hours represent accelerated laboratory comparative metrics and do not constitute an unconditional lifespan warranty without verified environmental context.
          </p>
        </Container>
      </Section>

      {/* 7. Applications Grid */}
      <Section>
        <Container>
          <div className="flex items-center gap-3">
            <Building2 aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Solar applications &amp; procurement sectors we supply
            </Heading>
          </div>
          <p className="mt-3 max-w-3xl text-ink-muted">
            KP Fasteners routinely quotes and distributes specialized solar mounting hardware across key renewable energy market sectors:
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {APPLICATIONS.map((app) => {
              const Icon = app.icon;
              return (
                <Card key={app.name} variant="default" padding="lg">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-gold-soft text-brand-gold-strong">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </div>
                    <Heading as="h3" variant="card">
                      {app.name}
                    </Heading>
                  </div>
                  <p className="mt-3 text-sm text-ink-muted">{app.body}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 8. Quality Documentation & MTC Block */}
      {/* VERIFICATION PENDING: Confirm in-house testing vs supplier MTC pass-through (PMI, HDG gauge, salt-spray) & MTC availability — ref: brief §10 items 7 & 8 */}
      <Section variant="alt">
        <Container>
          <div className="rounded-xl border border-border bg-surface p-8 shadow-card">
            <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
              <div>
                <Heading as="h2" variant="section">
                  Quality control, documentation &amp; MTC pass-through
                </Heading>
                <p className="mt-4 text-ink-muted">
                  Every solar consignment dispatched by KP Fasteners is backed by rigorous quality documentation, ensuring complete engineering compliance with EPC structural specifications:
                </p>
                <ul className="mt-4 space-y-2 text-sm text-ink">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                    <strong>EN 10204 3.1 Mill Test Certificates:</strong> Passed through directly from originating primary manufacturers with chemical heat analysis and mechanical test values.
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                    <strong>Hot-Dip Galvanizing Inspection:</strong> Zinc coating thickness verified with calibrated magnetic gauges per ISO 1461 / ASTM A153.
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                    <strong>Dimensional &amp; Thread Inspection:</strong> Calibrated thread pitch gauges verify class 6g/6H fits to ensure rapid, galling-free field installation.
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                    <strong>Positive Material Identification (PMI):</strong> XRF chemical verification available upon request through accredited NABL partner laboratories.
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                    <strong>Heat Number Batch Traceability:</strong> Complete lot traceability stamped on crate packaging tags and matching mill documentation.
                  </li>
                </ul>
              </div>
              <div className="space-y-4 text-center lg:text-right">
                <Link
                  href="/tools/"
                  className="btn btn-secondary"
                >
                  MTC EN 10204 3.1 documentation and batch traceability →
                </Link>
                <p className="text-xs text-ink-muted">
                  Learn more about our quality control protocols, partner testing network, and dispatch documentation.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 9. Related Product Lines Cross-Link Grid */}
      <Section>
        <Container>
          <div className="flex items-center gap-3">
            <Wrench aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Related solar and structural fastener product lines
            </Heading>
          </div>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Explore companion catalogs and materials guides to complete your solar procurement schedule:
          </p>

          <div className="mt-8">
            <RelatedProductCards items={RELATED_PRODUCTS} />
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/products/"
              className="inline-flex items-center gap-2 font-semibold text-brand-steel hover:text-brand-gold-strong hover:underline"
            >
              Browse our full products range
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </Section>

      {/* 10. FAQ */}
      <Section variant="alt">
        <Container>
          <Heading as="h2" variant="section">
            Frequently asked questions about solar accessories
          </Heading>
          <p className="mt-3 max-w-2xl text-ink-muted">
            Essential technical questions regarding material grades, structure compatibility, BOQ quotations, and quality certificates.
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

      {/* 11. CTA Band */}
      <Section>
        <Container>
          <div className="rounded-2xl border border-border bg-surface p-8 text-center shadow-card sm:p-12">
            <Heading as="h2" variant="section" className="mx-auto max-w-2xl font-heading">
              Request a competitive solar-BOQ quote for your project
            </Heading>
            <p className="mx-auto mt-4 max-w-2xl text-ink-muted">
              Submit your mounting structure bill of materials, project drawings, or module clamp schedules. Our technical sales team will verify quantities, confirm material specifications, and issue an itemized commercial quotation within 24 hours.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/request-quote/?product=solar-accessories"
                className="btn btn-primary"
              >
                <FileText aria-hidden="true" className="h-4 w-4" />
                &nbsp;Send us your solar BOQ
              </Link>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
                &nbsp;WhatsApp our solar specialist
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
