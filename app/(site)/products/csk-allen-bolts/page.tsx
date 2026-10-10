import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  MessageCircle,
  FileText,
  ArrowRight,
  Layers,
  Wrench,
  ShieldCheck,
  Building2,
  Factory,
  Compass,
  Zap,
  Gauge,
  Boxes,
  Cpu,
  Cog,
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

const PATH = '/products/csk-allen-bolts/';
const HERO_IMAGE = '/images/products/bolts/allen-socket-csk-screw.webp';

// Title: 57 chars (50-60 range, primary keyword first). Meta description: 158 chars (150-160 range).
const META_TITLE = 'CSK Allen Bolts Manufacturer and Supplier | DIN 7991 | KP';
const META_DESCRIPTION =
  'CSK Allen bolts (DIN 7991), socket cap (DIN 912) and button screws in Grade 8.8, 10.9, 12.9, SS. Black oxide, zinc, MTC available. Request your project quote.';

export const metadata: Metadata = buildMetadata({
  path: PATH,
  title: META_TITLE,
  description: META_DESCRIPTION,
  ogImage: HERO_IMAGE,
});

const WA_PREFILL =
  'Hi KP Fasteners, I need an Allen bolt quote. Head: [DIN 7991/912/7380], Grade: [8.8/10.9/12.9/SS A2/SS A4], Dia x Length: [ ], Coating: [Black/Zinc/Passivated], Qty: [ ]';
const WA_URL = 'https://wa.me/919898230448?text=' + encodeURIComponent(WA_PREFILL);
const TEL = `tel:${company.telephones[0].replace(/[^\d+]/g, '')}`;

// VERIFICATION PENDING: Confirm head families stocked (countersunk socket DIN 7991 confirmed on IndiaMART; button-head DIN 7380 and socket-cap DIN 912 to confirm) - ref: brief §10 item 1
// VERIFICATION PENDING: Confirm grade split per head family (8.8 / 10.9 / 12.9 / SS A2 / SS A4) - ref: brief §10 item 2
// VERIFICATION PENDING: Confirm stocked diameter and length range per head family (M3 to M24 drafting default) - ref: brief §10 item 3
// VERIFICATION PENDING: Confirm coating options (black oxide default; zinc-nickel / nickel availability) - ref: brief §10 item 4
// VERIFICATION PENDING: Confirm MOQ and lead times per head family and grade band - ref: brief §10 item 5
// VERIFICATION PENDING: Confirm IndiaMART SKU catalogue synchronization - ref: brief §10 item 6
// VERIFICATION PENDING: Confirm named partner mill brands that may be cited - ref: brief §10 item 7
// VERIFICATION PENDING: Real photograph of stocked CSK Allen bolt inventory at KP Fasteners Ahmedabad warehouse - ref: brief §6 & §10 item 8
// VERIFICATION PENDING: Confirm whether KP ever supplies bundled hex keys with kits or strictly bolts only - ref: brief §10 item 10

const FAQS = [
  {
    question: 'Do you manufacture CSK Allen bolts or source them?',
    answer:
      'We distribute CSK Allen bolts, socket head cap screws, and button head screws from vetted primary partner mills - this is not one of KP Fasteners’ in-house OEM manufacturing lines. Our in-house manufacturing in Ahmedabad is dedicated to custom foundation bolts, anchor bolts, stud bolts, and sag rods (see our About page). Supplying high-grade socket fasteners alongside our manufactured structural lines allows machine builders and tool rooms to consolidate their complete mechanical BOM onto a single purchase order with verified mill test certificates (MTC) pass-through.',
  },
  {
    question: 'What is the difference between DIN 7991, DIN 912, and DIN 7380?',
    answer:
      'DIN 7991 (ISO 10642) is a countersunk socket head screw with a 90-degree flat head designed to sit perfectly flush in a countersunk hole for unobstructed sliding surfaces. DIN 912 (ISO 4762) is a socket head cap screw with a tall cylindrical head designed for deep counterbores and high clamping torque. DIN 7380 (ISO 7380-1) is a button head socket screw with a low rounded dome profile and wide bearing face, ideal for clearance-constrained sheet metal or guarded machine covers.',
  },
  {
    question: 'Why is hot-dip galvanizing (HDG) not available on Grade 12.9 socket screws?',
    answer:
      'Hot-dip galvanizing on high-strength Property Classes 10.9 and 12.9 introduces severe risk of hydrogen embrittlement (HDE) during acid pickling and thermal immersion per ISO 898-1 §9.6. International standards strongly advise against HDG on 12.9 fasteners. Our default surface protection on Grade 12.9 alloy socket screws is chemical black oxide. For corrosive applications requiring high strength, we provide zinc-nickel plating, mechanical zinc plating, or austenitic stainless steel alternatives.',
  },
  {
    question: 'Can you supply SS A4 (SS 316) socket cap screws for coastal solar and marine environments?',
    answer:
      'Yes. Austenitic stainless steel SS A4-70 (AISI 316) to ISO 3506-1 is a routinely stocked grade for marine and coastal service. SS A4-70 offers superior pitting and crevice corrosion resistance in high-chloride atmospheres. For solar module mounting structures (MMS) near marine coastlines, we supply SS A4 socket cap screws paired with companion SS 316 flat washers and channel spring nuts.',
  },
  {
    question: 'What MTC documentation and lead time can I expect on Allen bolt orders?',
    answer:
      'Every order is backed by originating mill test certificates (MTC EN 10204 3.1) stating ladle melt chemical composition and mechanical tensile ratings, cross-referenced to the dispatch lot code. Stocked standard metric sizes (Property Classes 8.8, 10.9, and SS A2) dispatch within 24-72 hours across Ahmedabad and Gujarat, and 3-8 days across pan-India industrial clusters. Specialized sizes (PC 12.9 in large diameters or SS A4 non-standards) dispatch within 7-14 days.',
  },
];

const STANDARDS_ROWS = [
  {
    cells: [
      'Countersunk socket (CSK)',
      'DIN 7991',
      'ISO 10642',
      'ASME B18.3.5M',
      '90° flat conical head sits flush in pre-countersunk hole; unobstructed sliding contact',
    ],
  },
  {
    cells: [
      'Socket head cap screw',
      'DIN 912',
      'ISO 4762',
      'ASME B18.3',
      'Deep cylindrical head; accepts highest torque and preload; standard tool-room joint',
    ],
  },
  {
    cells: [
      'Button head socket screw',
      'DIN 7380',
      'ISO 7380-1',
      '-',
      'Low rounded dome head; wide bearing area; prevents clothing/cable snagging',
    ],
  },
  {
    cells: [
      'Low-head socket cap',
      'DIN 7984',
      'ISO 14580',
      '-',
      'Reduced cylindrical head height (~50% of DIN 912) for shallow counterbores',
    ],
  },
  {
    cells: [
      'Socket set screw (cup/cone/flat)',
      'DIN 913 / 914 / 916',
      'ISO 4026 / 4027 / 4029',
      'ASME B18.3',
      'Headless threaded grub screw with internal hex; fixes pulleys and gears to shafts',
    ],
  },
  {
    cells: [
      'Precision shoulder bolt',
      'DIN 923 / ISO 7379',
      'ISO 7379',
      'ASME B18.3',
      'Ground unthreaded shoulder acts as pivot pin or linear guide shaft for punch tooling',
    ],
  },
];

const HEX_KEY_ROWS = [
  { cells: ['M3', '0.50', '2.5 mm', '2.0 mm', '2.0 mm', '1.5 mm'] },
  { cells: ['M4', '0.70', '3.0 mm', '2.5 mm', '2.5 mm', '2.0 mm'] },
  { cells: ['M5', '0.80', '4.0 mm', '3.0 mm', '3.0 mm', '2.5 mm'] },
  { cells: ['M6', '1.00', '5.0 mm', '4.0 mm', '4.0 mm', '3.0 mm'] },
  { cells: ['M8', '1.25', '6.0 mm', '5.0 mm', '5.0 mm', '4.0 mm'] },
  { cells: ['M10', '1.50', '8.0 mm', '6.0 mm', '6.0 mm', '5.0 mm'] },
  { cells: ['M12', '1.75', '10.0 mm', '8.0 mm', '8.0 mm', '6.0 mm'] },
  { cells: ['M14', '2.00', '12.0 mm', '10.0 mm', '10.0 mm', '7.0 mm'] },
  { cells: ['M16', '2.00', '14.0 mm', '10.0 mm', '10.0 mm', '8.0 mm'] },
  { cells: ['M20', '2.50', '17.0 mm', '14.0 mm', '14.0 mm', '10.0 mm'] },
  { cells: ['M24', '3.00', '19.0 mm', '17.0 mm', '17.0 mm', '12.0 mm'] },
];

const METRIC_SPEC_ROWS = [
  { cells: ['M3', '0.50', '6 - 30 mm', 'CSK, Cap, Button', 'DIN 7991, DIN 912, DIN 7380', '8.8, SS A2'] },
  { cells: ['M4', '0.70', '6 - 40 mm', 'CSK, Cap, Button', 'DIN 7991, DIN 912, DIN 7380', '8.8, 10.9, 12.9, SS A2'] },
  { cells: ['M5', '0.80', '8 - 50 mm', 'CSK, Cap, Button', 'DIN 7991, DIN 912, DIN 7380', '8.8, 10.9, 12.9, SS A2, SS A4'] },
  { cells: ['M6', '1.00', '10 - 70 mm', 'CSK, Cap, Button, Low-Head', 'DIN 7991, 912, 7380, 7984', '8.8, 10.9, 12.9, SS A2, SS A4'] },
  { cells: ['M8', '1.25', '12 - 90 mm', 'CSK, Cap, Button, Low-Head', 'DIN 7991, 912, 7380, 7984', '8.8, 10.9, 12.9, SS A2, SS A4'] },
  { cells: ['M10', '1.50', '16 - 100 mm', 'CSK, Cap, Button, Low-Head', 'DIN 7991, 912, 7380, 7984', '8.8, 10.9, 12.9, SS A2, SS A4'] },
  { cells: ['M12', '1.75', '20 - 120 mm', 'CSK, Cap, Button, Low-Head', 'DIN 7991, 912, 7380, 7984', '8.8, 10.9, 12.9, SS A2, SS A4'] },
  { cells: ['M14', '2.00', '25 - 130 mm', 'CSK, Cap', 'DIN 7991, DIN 912', '10.9, 12.9'] },
  { cells: ['M16', '2.00', '25 - 150 mm', 'CSK, Cap, Low-Head', 'DIN 7991, DIN 912, DIN 7984', '8.8, 10.9, 12.9, SS A2, SS A4'] },
  { cells: ['M20', '2.50', '35 - 160 mm', 'CSK, Cap', 'DIN 7991, DIN 912', '10.9, 12.9, SS A4'] },
  { cells: ['M24', '3.00', '45 - 180 mm', 'CSK, Cap', 'DIN 7991, DIN 912', '10.9, 12.9'] },
];

const PROPERTY_CLASS_ROWS = [
  { cells: ['CSK (DIN 7991 / ISO 10642)', 'Stocked (Default)', 'Stocked', 'On-Quote', 'Stocked (A2-70)', 'Stocked (A4-70)'] },
  { cells: ['Socket Cap (DIN 912 / ISO 4762)', 'Stocked', 'Stocked (Default)', 'Stocked (Default Tooling)', 'Stocked (A2-70)', 'Stocked (A4-70 / A4-80)'] },
  { cells: ['Button Head (DIN 7380 / ISO 7380-1)', 'Stocked (Default)', 'On-Quote', 'Not Standard', 'Stocked (A2-70)', 'Stocked (A4-70)'] },
  { cells: ['Low-Head (DIN 7984 / ISO 14580)', 'On-Quote', 'Stocked', 'On-Quote', 'Stocked (A2-70)', 'On-Quote'] },
];

const VARIANT_ROWS = [
  {
    cells: [
      'CSK Socket Screw',
      'DIN 7991 / ISO 10642',
      'High-Tensile Steel (PC 10.9)',
      'Black Oxide / Phosphated',
      'M4 - M20',
      'Flush machine surfaces, guide plates, and punch tool retainers requiring high shear strength',
    ],
  },
  {
    cells: [
      'CSK Socket Screw',
      'DIN 7991 / ISO 10642',
      'Stainless Steel (A2-70 / 304)',
      'Chemical Passivation (ASTM A967)',
      'M3 - M16',
      'Food processing machinery, architectural trim, conveyor belts, and sanitary washdown housings',
    ],
  },
  {
    cells: [
      'Socket Head Cap Screw',
      'DIN 912 / ISO 4762',
      'Alloy Steel (PC 12.9)',
      'Black Oxide (No HDG)',
      'M5 - M24',
      'Injection moulding tool-rooms, stamping die blocks, hydraulic pump housings, and extreme shock loads',
    ],
  },
  {
    cells: [
      'Socket Head Cap Screw',
      'DIN 912 / ISO 4762',
      'Stainless Steel (A4-80 / 316)',
      'Chemical Passivation (ASTM A967)',
      'M6 - M20',
      'Coastal solar mounting rails, chemical reactors, offshore skids, and marine deck hardware',
    ],
  },
  {
    cells: [
      'Button Head Socket Screw',
      'DIN 7380 / ISO 7380-1',
      'Carbon Steel (PC 8.8)',
      'Zinc Electroplated (IS 1573)',
      'M4 - M12',
      'Sheet-metal machine guards, safety covers, automation conveyor frames, and light structural trim',
    ],
  },
  {
    cells: [
      'Button Head Socket Screw',
      'DIN 7380 / ISO 7380-1',
      'Stainless Steel (A2-70 / 304)',
      'Natural Bright / Passivated',
      'M3 - M10',
      'Electronics chassis, outdoor automation panels, instrumentation cabinets, and robotic end-effectors',
    ],
  },
  {
    cells: [
      'Low-Head Socket Cap',
      'DIN 7984 / ISO 14580',
      'Alloy Steel (PC 10.9)',
      'Black Oxide',
      'M6 - M16',
      'Shallow counterbores, compact hydraulic valve manifolds, and tight linear bearing blocks',
    ],
  },
];

const DECISION_ROWS = [
  {
    cells: [
      'Flush fit on an exposed sliding surface',
      'CSK Socket (DIN 7991)',
      'PC 8.8 / 10.9 / SS A2',
      'Black oxide / Zinc / Passivated',
      '90° countersunk pocket; zero head protrusion prevents collision with moving machine parts',
    ],
  },
  {
    cells: [
      'High-torque machinery clamp joint',
      'Socket Cap (DIN 912)',
      'PC 10.9 / 12.9',
      'Black oxide',
      'Full cylindrical head; accepts maximum tightening torque and clamp preload without stripping',
    ],
  },
  {
    cells: [
      'Weight or clearance-sensitive cover',
      'Button Head (DIN 7380)',
      'PC 8.8 / SS A2',
      'Zinc / Passivated',
      'Smooth dome contour distributes load across thin sheet metal; eliminates sharp catch hazards',
    ],
  },
  {
    cells: [
      'Counterbore depth constrained by wall',
      'Low-Head Cap (DIN 7984)',
      'PC 10.9',
      'Black oxide',
      'Head height is ~50% of DIN 912; preserves underlying metal thickness in compact housings',
    ],
  },
  {
    cells: [
      'Plastic injection moulds & press dies',
      'Socket Cap (DIN 912)',
      'PC 12.9',
      'Black oxide (never HDG)',
      'Yield strength 1,080 MPa withstands extreme cyclic shock and high mold-locking pressures',
    ],
  },
  {
    cells: [
      'Food, dairy, pharma & chemical plants',
      'CSK or Cap (SS 304/316)',
      'A2-70 / A4-70',
      'ASTM A967 passivated',
      'Total metallurgical resistance to washdown CIP detergents, organic acids, and steam sterilization',
    ],
  },
  {
    cells: [
      'Coastal solar MMS mounting rails',
      'Socket Cap (DIN 912)',
      'A4-70 / A4-80 (316)',
      'Passivated',
      'Molybdenum-bearing SS 316 resists atmospheric marine chloride pitting; pairs with SS 316 spring nuts',
    ],
  },
];

const APPLICATIONS = [
  {
    icon: Cog,
    title: 'Machine Building & CNC Equipment',
    body:
      'DIN 912 socket head cap screws in Property Classes 10.9 and 12.9 are standard in machine tool assemblies, hydraulic manifold blocks, and linear guide carriages where high tightening torque and fatigue resistance are non-negotiable.',
    chips: ['DIN 912', 'PC 10.9 / 12.9', 'Black Oxide', 'High Preload'],
  },
  {
    icon: Wrench,
    title: 'Tool & Die and Injection Moulds',
    body:
      'Tool-and-die shops rely on Grade 12.9 alloy steel socket cap screws and DIN 916 socket set screws for punch holders, stripper plates, and injection mould cavities enduring continuous stamping shock and thermal cycling.',
    chips: ['Grade 12.9', 'DIN 912 / 916', 'Extreme Tensile', 'Shock Resistant'],
  },
  {
    icon: Layers,
    title: 'Jigs, Fixtures & Countersunk Assemblies',
    body:
      'DIN 7991 countersunk Allen bolts sit flush within 90° machined countersinks on tooling fixtures, sliding ways, and conveyor wear plates, eliminating head interference during workpiece loading and clamping.',
    chips: ['DIN 7991', 'Flush Mounting', '90° Countersink', 'PC 10.9 / SS A2'],
  },
  {
    icon: Cpu,
    title: 'Automation, Robotics & Enclosures',
    body:
      'DIN 7380 button head screws in metric sizes M3 to M8 provide clean aesthetics and low catch hazards on robotic arms, aluminum extrusion frames, control panel doors, and electronic equipment chassis.',
    chips: ['DIN 7380', 'Button Dome', 'SS A2 / Zinc', 'Low Clearance'],
  },
  {
    icon: Factory,
    title: 'Food, Dairy & Pharma Processing',
    body:
      'Austenitic stainless steel socket cap and CSK screws in SS 304 (A2-70) and SS 316 (A4-70) passivated to ASTM A967 provide corrosion resistance and hygienic cleanability in washdown food processing and pharmaceutical equipment.',
    chips: ['SS 304 / SS 316', 'ISO 3506-1', 'ASTM A967', 'Sanitary Washdown'],
  },
  {
    icon: Zap,
    title: 'Solar MMS & Specialized Sub-Assemblies',
    body:
      'Stainless steel A4-70 socket cap screws serve as heavy-duty clamp fasteners on coastal solar mounting structures, strut channels, and scaffolding hardware sub-assemblies requiring guaranteed chloride resistance.',
    chips: ['SS A4-70', 'Solar Clamps', 'MMS Rails', 'Marine Atmospheric'],
  },
];

const RELATED_PRODUCTS = [
  {
    title: 'Hex Bolts & Nuts',
    href: '/products/hex-bolts-nuts/',
    anchor: 'matching hex nuts and washers',
    body:
      'Complete range of commercial and high-tensile hexagon bolts (DIN 931/933), standard nuts (DIN 934), and heavy hex hardware for companion assembly.',
  },
  {
    title: 'High-Tensile Fasteners',
    href: '/materials/high-tensile-fasteners/',
    anchor: 'PC 10.9 / 12.9 decision guide',
    body:
      'Metallurgical properties, proof loads, and tempering standards for quenched and tempered carbon and alloy steel fasteners.',
  },
  {
    title: 'Stainless Steel Fasteners',
    href: '/materials/stainless-steel-fasteners/',
    anchor: 'SS A2 vs SS A4 for service',
    body:
      'Austenitic stainless steel fasteners in Grades 304 and 316 for chemical, coastal solar, and food processing applications.',
  },
  {
    title: 'Automotive & Heavy Engineering',
    href: '/industries/automotive-heavy-engineering/',
    anchor: 'automotive and heavy machine assemblies',
    body:
      'Precision fasteners and socket screws engineered for commercial vehicle chassis, gearboxes, engine mounts, and heavy mining plant.',
  },
  {
    title: 'Custom Fasteners',
    href: '/products/custom-fasteners/',
    anchor: 'custom drawing-based socket screws',
    body:
      'In-house manufacturing for non-standard shoulder bolts, stepped socket studs, and bespoke alloy hardware machined to engineering drawings.',
  },
];

export default function Page() {
  const route = findRoute(PATH);
  const trail = route?.breadcrumbTrail ?? [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products/' },
    { label: 'CSK Allen Bolts', href: PATH },
  ];

  return (
    <>
      <JsonLd
        data={productSchema({
          name: 'CSK Allen Bolts and Socket Screws',
          description:
            'CSK Allen bolts (DIN 7991), socket head cap screws (DIN 912), and button head screws (DIN 7380) in Property Classes 8.8, 10.9, 12.9, and Stainless Steel A2/A4. Sourced from vetted partner mills with EN 10204 3.1 MTC pass-through.',
          category: 'Socket-head Allen bolts (DIN 7991 countersunk, DIN 912 socket cap, DIN 7380 button head)',
          material: 'Alloy Steel (Property Class 8.8, 10.9, 12.9), Stainless Steel (A2-70, A4-70, A4-80)',
          image: HERO_IMAGE,
          path: PATH,
          classification: 'trading',
        })}
      />
      <JsonLd data={faqPage(FAQS)} />

      {/* 1. Hero */}
      {/* VERIFICATION PENDING: Real photograph of stocked CSK Allen bolt inventory at KP Fasteners Ahmedabad warehouse - ref: brief §6 & §10 item 8 */}
      <Section>
        <Container>
          <Breadcrumbs trail={trail} />
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <p className="badge badge-steel">Distribution Range · Vetted Partner Mills · Ahmedabad</p>
              <Heading as="h1" variant="hero" className="mt-4 font-heading">
                <span className="text-gold-gradient">CSK Allen Bolts Manufacturer</span> &amp; Precision Socket Fastener Distribution
              </Heading>
              <hr className="rule-metal mt-5 w-40" aria-hidden="true" />
              <p className="mt-6 max-w-2xl text-lg text-ink-muted">
                Countersunk socket head screws (DIN 7991 / ISO 10642), socket head cap screws (DIN 912 / ISO 4762), and button head screws (DIN 7380) supplied across Property Classes 8.8, 10.9, 12.9, and austenitic stainless steel. Distributed from vetted partner mills in Ahmedabad with complete EN 10204 3.1 MTC pass-through and lot traceability.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/request-quote/?product=csk-allen-bolts"
                  className="btn btn-primary shadow-gold"
                >
                  <FileText aria-hidden="true" className="h-4 w-4" />
                  <span>Request an Allen Bolt Quote</span>
                  <ArrowRight aria-hidden="true" className="h-4 w-4 ml-0.5" />
                </Link>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <MessageCircle aria-hidden="true" className="h-4 w-4 text-emerald-600" />
                  <span>WhatsApp Tool-Room Desk</span>
                </a>
              </div>
            </div>
            <div>
              <Card variant="metallic" padding="lg" className="overflow-hidden">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-transparent p-3">
                  <Image
                    src={HERO_IMAGE}
                    alt="KP Fasteners CSK Allen bolts and socket head screws inventory - DIN 7991 countersunk, DIN 912 socket cap, and DIN 7380 button head in Grade 10.9, 12.9, and stainless steel"
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
            <ClassificationBanner classification="trading">
              CSK Allen bolts and socket fasteners - sourced from vetted partner mills; property-class head markings traceable to EN 10204 3.1 mill test certificates on request.
            </ClassificationBanner>
          </div>
        </Container>
      </Section>

      {/* 2. Overview & Scope */}
      <Section variant="alt">
        <Container>
          <div className="flex items-center gap-3">
            <Layers aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Overview: socket fastener families &amp; consolidated procurement model
            </Heading>
          </div>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <Prose>
              <p>
                In precision mechanical engineering and tool-room manufacturing, internal hexagon drive fasteners - colloquially referred to as Allen bolts - are specified wherever high clamp preload, compact head counterbores, or flush mounting geometry are demanded. Unlike standard external hexagon bolts that require perimeter spanner clearance, socket-head fasteners are tightened from within the head profile using a metric hex key or hex bit, enabling tighter joint center-to-center pitch and compact machinery envelopes.
              </p>
              <p className="mt-4">
                The socket-head category on this page encompasses the three core head geometries that mechanical engineers and tool-room procurement managers routinely purchase in combination: <strong>countersunk socket head screws (DIN 7991 / ISO 10642)</strong> for flush-face assemblies, <strong>socket head cap screws (DIN 912 / ISO 4762)</strong> for high-torque mechanical clamp joints, and <strong>button head socket screws (DIN 7380 / ISO 7380-1)</strong> for clearance-constrained panels and sheet-metal housings. Low-head socket cap screws (DIN 7984) and socket set screws (DIN 913/914/916) are supplied on project order.
              </p>
            </Prose>
            <Prose>
              <p>
                Transparency is fundamental to KP Fasteners’ engineering supply philosophy: we distribute precision socket-head fasteners through audit-verified primary mills. While our in-house manufacturing lines in our{' '}
                <Link
                  href="/about/"
                  className="font-semibold text-brand-gold-strong hover:underline"
                >
                  Ahmedabad manufacturing facility
                </Link>{' '}
                are dedicated to heavy custom{' '}
                <Link
                  href="/products/foundation-bolts/"
                  className="font-semibold text-brand-gold-strong hover:underline"
                >
                  in-house foundation bolts for heavy base frames
                </Link>
                ,{' '}
                <Link
                  href="/products/stud-bolts/"
                  className="font-semibold text-brand-gold-strong hover:underline"
                >
                  continuous threaded stud bolts
                </Link>
                , and sag rods, our wholesale distribution network allows machine builders, tool-rooms, and OEMs to consolidate their complete mechanical bill of materials (BOM).
              </p>
              <p className="mt-4">
                Instead of managing separate supplier contracts for structural anchors and precision socket hardware, buyers consolidate orders under one purchase order, receiving{' '}
                <Link
                  href="/products/hex-bolts-nuts/"
                  className="font-semibold text-brand-gold-strong hover:underline"
                >
                  matching hex nuts and washers
                </Link>{' '}
                alongside their socket bolts, accompanied by unified dispatch lot tagging and mill test certification.
              </p>
            </Prose>
          </div>
        </Container>
      </Section>

      {/* 3. Head Families Supplied */}
      {/* VERIFICATION PENDING: Confirm head families stocked (countersunk socket DIN 7991 confirmed; button-head DIN 7380 and socket-cap DIN 912 to confirm) - ref: brief §10 item 1 */}
      <Section>
        <Container>
          <div className="flex items-center gap-3">
            <Boxes aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Socket head families: geometry, drive mechanics &amp; standards
            </Heading>
          </div>
          <p className="mt-4 max-w-3xl text-ink-muted">
            Each socket head family serves a distinct mechanical boundary condition. Selecting the correct geometry ensures sufficient clamping force while adhering to surface clearance and counterbore machining limits.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card variant="default" padding="lg">
              <div className="flex items-center gap-2">
                <span className="badge badge-gold">DIN 7991 · ISO 10642</span>
              </div>
              <Heading as="h3" variant="card" className="mt-3">
                Countersunk Socket Screws (CSK)
              </Heading>
              <p className="mt-3 text-sm text-ink-muted">
                Engineered with a 90° flat conical head that seats fully inside a pre-countersunk pocket. Once torqued flush with the workpiece surface, the fastener creates zero clearance protrusion, preventing collision with sliding machine ways, conveyor rollers, or mated tooling plates.
              </p>
              <ul className="mt-4 space-y-1 text-xs text-ink-muted">
                <li>• <strong>Angle:</strong> 90° standard (ASME 82° on quote)</li>
                <li>• <strong>Drive:</strong> Metric internal hexagon</li>
                <li>• <strong>Typical Grades:</strong> 8.8, 10.9, SS A2-70</li>
              </ul>
            </Card>

            <Card variant="default" padding="lg">
              <div className="flex items-center gap-2">
                <span className="badge badge-gold">DIN 912 · ISO 4762</span>
              </div>
              <Heading as="h3" variant="card" className="mt-3">
                Socket Head Cap Screws (SHCS)
              </Heading>
              <p className="mt-3 text-sm text-ink-muted">
                The industrial workhorse of machine assembly and tool-room manufacturing. Features a tall cylindrical head with deep internal hexagon socket walls that transmit high tightening torques without driver cam-out. Ideal for counterbored holes where perimeter clearance is restricted.
              </p>
              <ul className="mt-4 space-y-1 text-xs text-ink-muted">
                <li>• <strong>Profile:</strong> Full cylindrical head (head dia ≈ 1.5d)</li>
                <li>• <strong>Drive:</strong> Deep precision internal hexagon</li>
                <li>• <strong>Typical Grades:</strong> 10.9, 12.9, SS A4-70</li>
              </ul>
            </Card>

            <Card variant="default" padding="lg">
              <div className="flex items-center gap-2">
                <span className="badge badge-gold">DIN 7380 · ISO 7380-1</span>
              </div>
              <Heading as="h3" variant="card" className="mt-3">
                Button Head Socket Screws
              </Heading>
              <p className="mt-3 text-sm text-ink-muted">
                Designed with a wide-diameter, low-profile rounded dome head. The broad bearing surface distributes clamping force across thin sheet-metal skins or soft materials, while the smooth contour eliminates catch hazards on exposed machinery guards, automotive cabs, and electronics.
              </p>
              <ul className="mt-4 space-y-1 text-xs text-ink-muted">
                <li>• <strong>Profile:</strong> Low rounded dome with wide flange base</li>
                <li>• <strong>Drive:</strong> Low-profile internal hex socket</li>
                <li>• <strong>Typical Grades:</strong> 8.8, SS A2-70</li>
              </ul>
            </Card>

            <Card variant="default" padding="lg">
              <div className="flex items-center gap-2">
                <span className="badge badge-steel">DIN 7984 · ISO 14580</span>
              </div>
              <Heading as="h3" variant="card" className="mt-3">
                Low-Head Socket Cap Screws
              </Heading>
              <p className="mt-3 text-sm text-ink-muted">
                Employs a cylindrical head whose height is approximately 50% that of a standard DIN 912 cap screw. Specified where counterbore depth is strictly limited by remaining parent wall thickness, such as in compact hydraulic valve manifolds and thin-walled transmission housings.
              </p>
              <ul className="mt-4 space-y-1 text-xs text-ink-muted">
                <li>• <strong>Profile:</strong> Short cylindrical head for shallow bores</li>
                <li>• <strong>Drive:</strong> Compact internal hex socket</li>
                <li>• <strong>Typical Grades:</strong> 10.9, SS A2</li>
              </ul>
            </Card>

            <Card variant="default" padding="lg">
              <div className="flex items-center gap-2">
                <span className="badge badge-steel">DIN 913 / 914 / 916</span>
              </div>
              <Heading as="h3" variant="card" className="mt-3">
                Socket Set Screws (Grub Screws)
              </Heading>
              <p className="mt-3 text-sm text-ink-muted">
                Fully threaded, headless fasteners containing an internal hex drive at one end and a specialized point at the other (cup point DIN 916, cone point DIN 914, flat point DIN 913). Used to lock pulleys, gears, timing sprockets, and bearing collars onto rotating drive shafts.
              </p>
              <ul className="mt-4 space-y-1 text-xs text-ink-muted">
                <li>• <strong>Profile:</strong> Headless continuous external thread</li>
                <li>• <strong>Points:</strong> Cup, cone, flat, dog point</li>
                <li>• <strong>Typical Grades:</strong> 45H, Grade 12.9, SS 304</li>
              </ul>
            </Card>

            <Card variant="default" padding="lg">
              <div className="flex items-center gap-2">
                <span className="badge badge-steel">ISO 7379 · ASME B18.3</span>
              </div>
              <Heading as="h3" variant="card" className="mt-3">
                Precision Ground Shoulder Bolts
              </Heading>
              <p className="mt-3 text-sm text-ink-muted">
                Features a precision centerless-ground unthreaded cylindrical shoulder with strict diameter tolerances (h8/f9). Functions as a stationary pivot pin, linkage trunnion, or linear stripper guide shaft in stamping punch assemblies and spring-loaded mechanical mechanisms.
              </p>
              <ul className="mt-4 space-y-1 text-xs text-ink-muted">
                <li>• <strong>Profile:</strong> Ground precision shoulder + smaller thread</li>
                <li>• <strong>Drive:</strong> Hex socket in head</li>
                <li>• <strong>Typical Grades:</strong> 12.9 (core), ground finish</li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 4. Standards & Hex-Key Engagement */}
      <Section variant="alt">
        <Container>
          <div className="flex items-center gap-3">
            <Gauge aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Engineering standards cross-reference &amp; metric hex-key engagement
            </Heading>
          </div>
          <p className="mt-4 max-w-3xl text-ink-muted">
            Cross-referencing DIN, ISO, and ASME standards ensures interchangeability on imported equipment. The hex-key engagement table below provides the exact wrench sizes required across nominal thread diameters.
          </p>

          <div className="mt-8">
            <Heading as="h3" variant="card">
              Standards Harmonization: DIN vs. ISO vs. ASME
            </Heading>
            <div className="mt-4">
              <SpecTable
                headers={['Head Family', 'DIN Standard', 'ISO Standard', 'ASME Equivalent', 'Key Mechanical Characteristics']}
                rows={STANDARDS_ROWS}
                caption="Table 1: International standard cross-reference for industrial socket-head fasteners."
              />
            </div>
          </div>

          <div className="mt-12">
            <Heading as="h3" variant="card">
              Metric Hex-Key &amp; Allen Drive Engagement Table
            </Heading>
            <p className="mt-2 text-sm text-ink-muted">
              Internal hex dimensions dictate the size of the hex key (Allen wrench) or driver bit needed. Note that DIN 7380 button head screws employ a smaller internal socket than DIN 912 cap screws of the same thread diameter to preserve head crown wall thickness.
            </p>
            <div className="mt-4">
              <SpecTable
                headers={[
                  'Thread Size',
                  'Pitch (mm)',
                  'DIN 912 Socket Cap (Hex mm)',
                  'DIN 7991 CSK (Hex mm)',
                  'DIN 7380 Button Head (Hex mm)',
                  'Nominal Socket Depth (mm)',
                ]}
                rows={HEX_KEY_ROWS}
                caption="Table 2: Metric hex key socket width across flats (A/F) and engagement depth for M3 through M24 fasteners."
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. Metric Size Schedule (SpecTable) */}
      {/* VERIFICATION PENDING: Confirm stocked diameter and length range per head family (M3 to M24 drafting default) - ref: brief §10 item 3 */}
      <Section>
        <Container>
          <div className="flex items-center gap-3">
            <Compass aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Metric size schedule &amp; dimensional specifications (M3 to M24)
            </Heading>
          </div>
          <p className="mt-4 max-w-3xl text-ink-muted">
            Standard stocking inventory covers nominal thread diameters from M3 to M24 in lengths from 6 mm to 180 mm. Metric threads conform to ISO 965-2 coarse tolerance class 6g (bolts) and 6H (tapped holes).
          </p>

          <div className="mt-8">
            <SpecTable
              headers={[
                'Nominal Thread',
                'Pitch (mm)',
                'Standard Length Range',
                'Head Profiles Available',
                'Applicable Standards',
                'Routinely Stocked Grades',
              ]}
              rows={METRIC_SPEC_ROWS}
              caption="Table 3: Dimensional schedule and head availability for metric CSK Allen bolts and socket screws."
            />
          </div>

          <div className="mt-6 rounded-lg border border-border bg-surface p-4 text-xs text-ink-muted">
            <p>
              <strong>Threading Specification Note:</strong> In accordance with DIN 912 / ISO 4762, short socket head cap screws are threaded fully to the head, while longer lengths incorporate a partial unthreaded shank to resist heavy shear planes. Countersunk screws (DIN 7991) are generally fully threaded up to 50 mm length. Non-standard thread pitches (fine pitch M10×1.0, M12×1.25, M16×1.5) are available on confirmed quote.
            </p>
          </div>
        </Container>
      </Section>

      {/* 6. Property Classes & Metallurgy */}
      {/* VERIFICATION PENDING: Confirm grade split per head family (8.8 / 10.9 / 12.9 / SS A2 / SS A4) - ref: brief §10 item 2 */}
      {/* VERIFICATION PENDING: Confirm coating options (black oxide default; zinc-nickel / nickel availability) - ref: brief §10 item 4 */}
      <Section variant="alt">
        <Container>
          <div className="flex items-center gap-3">
            <ShieldCheck aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Property classes, alloy metallurgy &amp; surface finishes
            </Heading>
          </div>
          <p className="mt-4 max-w-3xl text-ink-muted">
            The mechanical integrity of a bolted joint depends on matching property class to dynamic stress, preload, and environmental corrosivity. All socket fasteners are sourced with certified property-class head stampings.
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <Prose>
              <Heading as="h3" variant="card">
                Carbon &amp; Alloy Steel Property Classes
              </Heading>
              <ul className="mt-4 space-y-3 text-sm text-ink-muted">
                <li>
                  <strong className="text-ink">Property Class 8.8:</strong> Medium carbon steel, quenched and tempered. Nominal tensile strength of 800 MPa with minimum yield strength of 640 MPa. Used for general machine framing, bracket fixtures, and light structural covers.
                </li>
                <li>
                  <strong className="text-ink">Property Class 10.9:</strong> Quenched and tempered boron or low-alloy steel. Nominal tensile strength of 1,040 MPa with minimum yield strength of 900 MPa. Recommended for high-stress machine elements, automotive suspension assemblies, and flange couplings.
                </li>
                <li>
                  <strong className="text-ink">Property Class 12.9:</strong> High-grade alloy steel (typically 42CrMo4 / AISI 4140), precision heat-treated to a tensile strength of 1,220 MPa and yield strength of 1,080 MPa. The gold standard for stamping dies, injection moulds, and extreme fatigue environments.
                </li>
              </ul>
              <div className="mt-6 rounded-lg border border-brand-steel-soft bg-brand-steel-soft/20 p-4 text-xs text-ink-muted">
                <strong className="text-ink">Hydrogen Embrittlement Warning (ISO 898-1 §9.6):</strong> Grade 12.9 fasteners exhibit high hardness (39-44 HRC) and must never undergo conventional hot-dip galvanizing or electroplating without controlled baking, due to cataclysmic risk of hydrogen-induced delayed brittle fracture. Default surface finish is chemical black oxide.
              </div>
            </Prose>

            <Prose>
              <Heading as="h3" variant="card">
                Stainless Steel Grades (ISO 3506-1)
              </Heading>
              <ul className="mt-4 space-y-3 text-sm text-ink-muted">
                <li>
                  <strong className="text-ink">Austenitic Stainless Steel A2-70 (AISI 304):</strong> Cold-worked austenitic stainless steel with minimum tensile strength of 700 MPa. Provides excellent resistance to atmospheric moisture, organic acids, and indoor industrial humidity. Ideal for cleanroom and food equipment.
                </li>
                <li>
                  <strong className="text-ink">Austenitic Stainless Steel A4-70 / A4-80 (AISI 316):</strong> Molybdenum-alloyed austenitic stainless steel (2-3% Mo) providing outstanding pitting and crevice resistance in chloride-dense environments. Mandatory for coastal solar installations, marine deck hardware, and chemical reaction vessels.
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-4 pt-2">
                <Link
                  href="/materials/high-tensile-fasteners/"
                  className="font-semibold text-brand-gold-strong hover:underline"
                >
                  Explore PC 10.9 / 12.9 high-tensile guide →
                </Link>
                <Link
                  href="/materials/stainless-steel-fasteners/"
                  className="font-semibold text-brand-gold-strong hover:underline"
                >
                  Explore SS A2 vs SS A4 corrosion guide →
                </Link>
              </div>
            </Prose>
          </div>

          <div className="mt-12">
            <Heading as="h3" variant="card">
              Stocking Coverage: Head Family vs. Property Class
            </Heading>
            <div className="mt-4">
              <SpecTable
                headers={[
                  'Head Family',
                  'Property Class 8.8',
                  'Property Class 10.9',
                  'Property Class 12.9',
                  'Stainless SS A2-70',
                  'Stainless SS A4-70 / A4-80',
                ]}
                rows={PROPERTY_CLASS_ROWS}
                caption="Table 4: Availability matrix across socket head families and material property classes."
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* 7. Variant Matrix */}
      <Section>
        <Container>
          <div className="flex items-center gap-3">
            <Layers aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Socket fastener SKU configurations &amp; variant matrix
            </Heading>
          </div>
          <p className="mt-4 max-w-3xl text-ink-muted">
            Overview of standard catalog SKU combinations detailing head profile, international standard, material grade, coating system, and target engineering application.
          </p>

          <div className="mt-8">
            <SpecTable
              headers={[
                'Product Family',
                'Governing Standard',
                'Material & Class',
                'Protective Coating',
                'Size Coverage',
                'Primary Engineering Application',
              ]}
              rows={VARIANT_ROWS}
              caption="Table 5: Socket fastener variant matrix detailing standard SKU combinations."
            />
          </div>
        </Container>
      </Section>

      {/* 8. Decision Block */}
      <Section variant="alt">
        <Container>
          <div className="flex items-center gap-3">
            <Compass aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Engineering decision framework: selecting head geometry &amp; grade
            </Heading>
          </div>
          <p className="mt-4 max-w-3xl text-ink-muted">
            Use this application-driven selector to determine the ideal socket head profile, property class, and surface finish for your mechanical joint conditions.
          </p>

          <div className="mt-8">
            <SpecTable
              headers={[
                'Application Context',
                'Recommended Head Profile',
                'Recommended Grade',
                'Protective Coating',
                'Engineering Rationale & Functional Advantage',
              ]}
              rows={DECISION_ROWS}
              caption="Table 6: Socket head fastener selection matrix based on mechanical stress and spatial constraints."
            />
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Card variant="default" padding="md">
              <Heading as="h3" variant="card" className="text-brand-steel">
                Flush Clearance Requirement
              </Heading>
              <p className="mt-2 text-xs text-ink-muted">
                If the joint sits directly beneath a moving tool slide, bearing runner, or mated gasket surface, specify <strong>DIN 7991 countersunk screws</strong>. Ensure the mating hole is countersunk at 90° with a depth toleranced so the screw head crown sits 0.1 mm below flush.
              </p>
            </Card>
            <Card variant="default" padding="md">
              <Heading as="h3" variant="card" className="text-brand-steel">
                Maximum Joint Preload &amp; Torque
              </Heading>
              <p className="mt-2 text-xs text-ink-muted">
                Where dynamic vibration and heavy shear loads require high clamp preload, specify <strong>DIN 912 socket cap screws in Class 10.9 or 12.9</strong>. The tall cylindrical head permits full hex engagement depth, handling 40% more tightening torque than button heads.
              </p>
            </Card>
            <Card variant="default" padding="md">
              <Heading as="h3" variant="card" className="text-brand-steel">
                Space &amp; Snag-Free Guards
              </Heading>
              <p className="mt-2 text-xs text-ink-muted">
                On exposed machine covers, electrical cabinets, and operator consoles where operators or cables could catch on sharp corners, specify <strong>DIN 7380 button head screws</strong> in zinc-plated 8.8 or polished SS A2.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 9. Applications Grid */}
      <Section>
        <Container>
          <div className="flex items-center gap-3">
            <Building2 aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Industrial applications: tool-room, machinery &amp; structural uses
            </Heading>
          </div>
          <p className="mt-4 max-w-3xl text-ink-muted">
            From precision CNC machine centers to corrosive marine solar structures, socket fasteners provide dependable clamp security across diverse industrial environments.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {APPLICATIONS.map((app, idx) => {
              const Icon = app.icon;
              return (
                <Card key={idx} variant="default" padding="lg">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-gold-soft/30 text-brand-gold-strong">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <Heading as="h3" variant="card">
                      {app.title}
                    </Heading>
                  </div>
                  <p className="mt-3 text-sm text-ink-muted">{app.body}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {app.chips.map((chip, cIdx) => (
                      <span
                        key={cIdx}
                        className="rounded bg-surface-alt px-2 py-0.5 text-[11px] font-mono font-medium text-ink-muted"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-ink-muted">
            <span>Related procurement sectors:</span>
            <Link
              href="/industries/automotive-heavy-engineering/"
              className="font-semibold text-brand-gold-strong hover:underline"
            >
              automotive and heavy machine assemblies →
            </Link>
            <Link
              href="/products/solar-accessories/"
              className="font-semibold text-brand-gold-strong hover:underline"
            >
              solar MMS clamp bolts →
            </Link>
            <Link
              href="/products/scaffold-accessories/"
              className="font-semibold text-brand-gold-strong hover:underline"
            >
              scaffold accessory sub-assembly →
            </Link>
          </div>
        </Container>
      </Section>

      {/* 10. Quality & Documentation */}
      <Section variant="alt">
        <Container>
          <div className="flex items-center gap-3">
            <ShieldCheck aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Quality verification &amp; EN 10204 3.1 certification protocol
            </Heading>
          </div>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <Prose>
              <p>
                In high-stress tool-room and automated assembly applications, fastener failure directly causes catastrophic machine downtime, die tooling fractures, and costly maintenance interventions. KP Fasteners applies strict metallurgical verification to every batch of distributed socket-head fasteners:
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                <li>
                  • <strong>Certified Mill Test Certificates (MTC):</strong> Sourced shipments are accompanied by EN 10204 3.1 inspection certificates detailing ladle melt chemistry (carbon, manganese, chrome, molybdenum) and heat-treat verification.
                </li>
                <li>
                  • <strong>In-House Hardness Testing:</strong> Sample lots undergo Rockwell (HRC) or Vickers (HV) micro-hardness testing at our Ahmedabad testing bay to verify through-hardening and temper consistency.
                </li>
                <li>
                  • <strong>Hex Socket Gauge Verification:</strong> Internal hexagon socket dimensions, depth, and corner radii are checked against GO/NO-GO precision hex plug gauges to eliminate driver bit slippage or loose socket engagement.
                </li>
                <li>
                  • <strong>Thread Pitch &amp; Concentricity:</strong> Calibrated optical comparators and ring gauges verify thread pitch diameter and head-to-shank perpendicularity within ISO 4759-1 product grade A tolerances.
                </li>
              </ul>
            </Prose>
            <Prose>
              <p>
                For project tenders requiring independent third-party witness inspection, we coordinate proof load testing, tensile wedge tests, and Charpy V-notch impact tests through accredited NABL partner laboratories. Positive Material Identification (PMI) using XRF analyzers is provided for all stainless steel consignments to verify alloy composition.
              </p>
              <p className="mt-4">
                To review our complete quality inspection manual, testing instrumentation list, and sample test certificates, visit our dedicated{' '}
                <Link
                  href="/tools/"
                  className="font-semibold text-brand-gold-strong hover:underline"
                >
                  MTC EN 10204 3.1 pass-through
                </Link>{' '}
                quality documentation portal.
              </p>
            </Prose>
          </div>
        </Container>
      </Section>

      {/* 11. Cross-Link Hub */}
      <Section>
        <Container>
          <div className="flex items-center gap-3">
            <Boxes aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Related industrial fasteners &amp; companion hardware
            </Heading>
          </div>
          <p className="mt-4 max-w-3xl text-ink-muted">
            Consolidate your hardware procurement by pairing CSK Allen bolts with companion nuts, washers, high-tensile anchors, and custom drawing-machined hardware.
          </p>

          <div className="mt-8">
            <RelatedProductCards items={RELATED_PRODUCTS} />
          </div>
        </Container>
      </Section>

      {/* 12. FAQ Accordion */}
      <Section variant="alt">
        <Container>
          <div className="flex items-center gap-3">
            <FileText aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Frequently asked questions: CSK Allen bolts &amp; socket screws
            </Heading>
          </div>
          <p className="mt-4 max-w-3xl text-ink-muted">
            Common technical inquiries regarding socket head standards, property classes, corrosion finishes, and procurement logistics.
          </p>

          <div className="mt-8 max-w-4xl">
            <Accordion items={FAQS} />
          </div>
        </Container>
      </Section>

      {/* 13. Procurement CTA Band */}
      <Section>
        <Container>
          <Card variant="metallic" padding="lg" className="text-center">
            <Heading as="h2" variant="section" className="text-brand-steel">
              Request a CSK Allen bolt quote &amp; tool-room BOM pricing
            </Heading>
            <p className="mx-auto mt-4 max-w-2xl text-ink-muted">
              Submit your mechanical bill of materials, drawing specifications, or wholesale enquiry. Our Ahmedabad engineering sales team responds with competitive line-item pricing, batch test documentation, and dispatch schedules within 24 business hours.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/request-quote/?product=csk-allen-bolts"
                className="btn btn-primary"
              >
                <FileText aria-hidden="true" className="h-4 w-4" />
                Submit an RFQ Online
              </Link>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <MessageCircle aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                WhatsApp Your BOM
              </a>
              <a href={TEL} className="btn btn-secondary">
                <Phone aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                Call +91 98982 30448
              </a>
            </div>
            <p className="mt-6 text-xs text-ink-muted">
              Standard stocked diameters (M3-M20) dispatch within 24-72 hours ex-Ahmedabad. MTC EN 10204 3.1 provided with dispatch invoice.
            </p>
          </Card>
        </Container>
      </Section>
    </>
  );
}
