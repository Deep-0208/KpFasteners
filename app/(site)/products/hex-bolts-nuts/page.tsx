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
  ShieldCheck,
  Building2,
  Factory,
  Compass,
  Zap,
  Gauge,
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

const PATH = '/products/hex-bolts-nuts/';
const HERO_IMAGE = '/images/products/bolts/hex-bolt-hex-nut.webp';

// Title: 52 chars (50–60 range, primary keyword first). Meta description: 160 chars (150–160 range).
const META_TITLE = 'Hex Bolts and Nuts Manufacturer & Distributor | KP';
const META_DESCRIPTION =
  'Hex bolts & nuts to DIN 931/933/934, ISO 4014/4017. Property class 4.6 to 10.9 & SS 304/316. Zinc, HDG, black oxide. MTC available. Request your project quote.';

export const metadata: Metadata = buildMetadata({
  path: PATH,
  title: META_TITLE,
  description: META_DESCRIPTION,
  ogImage: HERO_IMAGE,
});

const WA_PREFILL =
  'Hi KP Fasteners, I need a hex bolt/nut quote. Standard: [DIN 931/933/934], Grade: [4.6/8.8/10.9/SS 304/SS 316], Dia x Length: [ ], Coating: [Zinc/HDG/Black], Qty: [ ]';
const WA_URL = 'https://wa.me/919898230448?text=' + encodeURIComponent(WA_PREFILL);
const TEL = `tel:${company.telephones[0].replace(/[^\d+]/g, '')}`;

// VERIFICATION PENDING: Confirm property-class stocking coverage (4.6 / 4.8 / 8.8 / 10.9 routinely stocked vs 12.9 on-quote) — ref: brief §10 item 1
// VERIFICATION PENDING: Confirm stocked diameter and length range per property class — ref: brief §10 item 2
// VERIFICATION PENDING: Confirm coating availability per class (HDG vs mechanical galvanizing for 10.9) — ref: brief §10 item 3
// VERIFICATION PENDING: Confirm nut families stocked (standard, heavy hex, thin / jam, nylock, castle) — ref: brief §10 item 4
// VERIFICATION PENDING: Confirm MOQ by grade band and lead times for made-to-order diameters — ref: brief §10 items 5 & 6
// VERIFICATION PENDING: Confirm named partner mills that may be cited — ref: brief §10 item 8
// VERIFICATION PENDING: Real photograph of staged hex-bolt and nut inventory at KP Fasteners Ahmedabad facility — ref: brief §6 hero-hex-bolts-nuts-kp.webp & §10 item 10
// VERIFICATION PENDING: Confirm whether KP ever assembles proprietary hex-bolt kits in-house — ref: brief §10 item 11

const FAQS = [
  {
    question: 'Do you manufacture hex bolts and nuts in-house or source them?',
    answer:
      'We distribute hex bolts, nuts, and washers from vetted primary partner mills — these are part of our distribution range rather than in-house OEM production. Our in-house manufacturing lines in Ahmedabad focus on custom foundation bolts, stud bolts, and PEB sag rods. Supplying commodity hex fasteners alongside our manufactured lines allows contractors and OEMs to consolidate their structural bill of materials onto a single purchase order with unified dispatch and MTC pass-through.',
  },
  {
    question: 'Which property classes do you routinely stock?',
    answer:
      'We routinely stock Property Classes 4.6 and 4.8 for light machinery assembly, Property Class 8.8 for structural steel and PEB frameworks, Property Class 10.9 for high-stress automotive and equipment mountings, and austenitic stainless steels SS 304 (A2-70) and SS 316 (A4-70) for corrosive environments. High-strength Class 12.9 socket head bolts and imperial ASTM A325/A490 structural bolts are supplied on confirmed project enquiry.',
  },
  {
    question: 'What is the difference between DIN 931 and DIN 933?',
    answer:
      'DIN 931 (ISO 4014 equivalent) designates a hexagon head bolt with a partial thread, leaving a smooth unthreaded shank under the head designed to bear heavy shear loads across joined plates. DIN 933 (ISO 4017 equivalent) designates a hexagon head screw threaded fully from under the head to the tip, ideal for tapped blind holes or compact clamping grips. Both standards share identical head dimensions across matching metric diameters.',
  },
  {
    question: 'Can you supply MTC EN 10204 3.1 and what is the typical lead time?',
    answer:
      'Yes — mill test certificates (MTC EN 10204 3.1) are passed through directly from originating primary manufacturers, detailing heat chemical melt analysis and mechanical proof testing. Standard stocked metric sizes dispatch within 24–72 hours across Ahmedabad and Gujarat, and 3–7 business days pan-India. Custom non-stocked lengths or specialized surface coatings carry a 7–14 day delivery window.',
  },
  {
    question: 'Do you supply ASTM A325 and ASTM A490 structural bolts?',
    answer:
      'Yes. High-strength structural bolts conforming to ASTM A325 and ASTM A490 (or their metric equivalents ISO 7412 and DIN 6914) are supplied for heavy steel framing, crane girders, and bridge structures. These bolts feature larger head dimensions across flats and must be paired with matching heavy hex nuts (ASTM A194 Grade 2H or ASTM A563 Grade DH) and hardened ASTM F436 structural flat washers.',
  },
];

const STANDARDS_ROWS = [
  {
    cells: ['DIN 931', 'ISO 4014', 'IS 1364 (Part 1)', 'Hexagon head bolt with partial thread (plain unthreaded shank)'],
  },
  {
    cells: ['DIN 933', 'ISO 4017', 'IS 1363 (Part 1)', 'Hexagon head screw with full thread from under head to tip'],
  },
  {
    cells: ['DIN 934', 'ISO 4032', 'IS 1363 (Part 3)', 'Standard hexagon nut with nominal height of 0.8d'],
  },
  {
    cells: ['DIN 439', 'ISO 4035', 'IS 1364 (Part 3)', 'Hexagon thin / jam nut with nominal height of 0.5d for lock assemblies'],
  },
  {
    cells: ['DIN 985', 'ISO 7040', 'IS 7002', 'Prevailing torque hexagon lock nut with non-metallic nylon insert'],
  },
  {
    cells: ['DIN 6914', 'ISO 7412', 'IS 6639', 'High-strength heavy hexagon head bolt for structural steel friction joints'],
  },
  {
    cells: ['DIN 6921', 'EN 1665', 'IS 1367', 'Hexagon bolt with serrated or smooth integrated bearing flange'],
  },
  {
    cells: ['DIN 6923', 'ISO 4161', 'IS 1367', 'Hexagon nut with serrated or smooth integrated bearing flange'],
  },
  {
    cells: ['ASTM A307', '—', 'IS 1367 Gr 4.6', 'Low-carbon steel externally threaded standard fasteners (60 ksi tensile)'],
  },
  {
    cells: ['ASTM A325', 'ISO 7412 (overlap)', 'IS 6639 / 8.8S', 'High-strength structural bolts for structural steel joints (120 ksi tensile)'],
  },
  {
    cells: ['ASTM A490', '—', 'IS 6639 / 10.9S', 'Heat-treated alloy steel structural bolts for dynamic framing (150 ksi tensile)'],
  },
  {
    cells: ['ISO 898-1', '—', 'IS 1367 (Part 3)', 'Mechanical properties of carbon and alloy steel externally threaded bolts'],
  },
  {
    cells: ['ISO 3506-1', '—', 'IS 1367 (Part 14)', 'Mechanical properties of corrosion-resistant stainless steel fasteners (A2/A4)'],
  },
];

const BOLT_SCHEDULE_ROWS = [
  {
    cells: [
      'M6 – M12',
      '16 – 100 mm',
      'Class 4.6, 8.8, SS 304',
      'DIN 933 (full) / DIN 931 (part)',
      'Clear Zinc, Yellow Zinc, Natural SS',
      'Light machinery, electrical brackets, solar rail sub-assembly',
    ],
  },
  {
    cells: [
      'M14 – M20',
      '25 – 180 mm',
      'Class 8.8, 10.9, SS 316',
      'DIN 931 / DIN 933 / ISO 4014',
      'Hot-Dip Galvanized, Zinc, Black Oxide',
      'PEB rafter connections, column base framing, automotive tier joints',
    ],
  },
  {
    cells: [
      'M22 – M30',
      '40 – 260 mm',
      'Class 8.8, 10.9',
      'DIN 931 / ISO 4014 / IS 1364',
      'HDG (ISO 1461), Mechanical Zinc',
      'Heavy structural steel moments, crane girders, industrial machinery bases',
    ],
  },
  {
    cells: [
      'M33 – M42',
      '60 – 350 mm',
      'Class 8.8, 10.9',
      'ISO 4014 / DIN 931',
      'Hot-Dip Galvanized, Self-Colour',
      'Bridge girder connections, heavy plant equipment, vibrating screens',
    ],
  },
  {
    cells: [
      'M48 – M64',
      '80 – 500 mm',
      'Class 8.8, 10.9',
      'ISO 4014 / DIN 931',
      'Hot-Dip Galvanized, Black Phosphated',
      'Power plant turbine skids, mining crusher frames, heavy foundations',
    ],
  },
  {
    cells: [
      '1/2" – 1-1/2"',
      '1-1/2" – 8"',
      'ASTM A325 (Type 1)',
      'ASTM A325 / ASME B18.2.6',
      'Hot-Dip Galvanized (ASTM A153)',
      'High-strength structural steel connections requiring heavy hex geometry',
    ],
  },
  {
    cells: [
      '1/2" – 1-1/2"',
      '2" – 8"',
      'ASTM A490 (Type 1)',
      'ASTM A490 / ASME B18.2.6',
      'Chemical Black Oxide with Oil',
      'High-load dynamic and seismic framing (HDG prohibited due to HDE)',
    ],
  },
  {
    cells: [
      'M6 – M24 (SS 304)',
      '16 – 200 mm',
      'A2-70 (700 MPa UTS)',
      'DIN 933 / DIN 931 / ISO 4017',
      'Chemical Passivated (ASTM A967)',
      'Food & beverage processing, cleanroom equipment, architectural facade',
    ],
  },
  {
    cells: [
      'M6 – M24 (SS 316)',
      '16 – 200 mm',
      'A4-70 (700 MPa UTS)',
      'DIN 933 / DIN 931 / ISO 4017',
      'Chemical Passivated (ASTM A967)',
      'Marine and coastal solar, chemical processing plants, water-retaining tanks',
    ],
  },
];

const NUT_SCHEDULE_ROWS = [
  {
    cells: [
      'Standard Metric Hex Nut',
      'DIN 934 / ISO 4032 / IS 1363 Pt 3',
      'Class 8, 10, SS 304, SS 316',
      'M6 – M64',
      'Zinc Plated, HDG, Passivated',
      'Standard structural and mechanical pairing matching mating bolt proof stress',
    ],
  },
  {
    cells: [
      'Heavy Hex Structural Nut',
      'ASME B18.2.2 / ASTM A194 2H / A563',
      'Grade 2H, Grade DH, Class 10',
      '1/2" – 2-1/2" (M16 – M64)',
      'Hot-Dip Galvanized, Black Oxide',
      'High-strength friction grip joints paired with ASTM A325/A490 and A193 B7 studs',
    ],
  },
  {
    cells: [
      'Prevailing Torque Nylock Nut',
      'DIN 985 / ISO 7040 / IS 7002',
      'Class 8, 10, SS 304',
      'M6 – M36',
      'Zinc Trivalent, Natural Stainless',
      'Self-locking vibration resistance for automotive chassis and vibrating equipment',
    ],
  },
  {
    cells: [
      'Hex Thin / Jam Lock Nut',
      'DIN 439 / ISO 4035 / IS 1364 Pt 3',
      'Class 04, 05, SS 304',
      'M8 – M48',
      'Zinc Plated, Self-Colour, SS',
      '0.5d thin profile used as secondary lock nut or in tight axial clearances',
    ],
  },
  {
    cells: [
      'Serrated Hex Flange Nut',
      'DIN 6923 / ISO 4161 / EN 1661',
      'Class 8, 10',
      'M6 – M20',
      'Zinc Plated, Geomet, HDG',
      'Spreads load and resists loosening without requiring a separate flat washer',
    ],
  },
  {
    cells: [
      'Acorn / Dome Cap Nut',
      'DIN 1587',
      'Class 6, SS 304, Brass',
      'M6 – M24',
      'Bright Chrome, Nickel, Passivated',
      'Encloses thread ends to prevent snagging injuries and seal against moisture ingress',
    ],
  },
];

const VARIANT_ROWS = [
  {
    cells: [
      'Property Class 4.6 / 4.8',
      'M4 – M30',
      '10 – 300 mm',
      'Clear Zinc Electroplate (Cr3+), Self-Colour Black MS',
      'General commercial engineering, non-structural covers, light brackets',
    ],
  },
  {
    cells: [
      'Property Class 8.8',
      'M6 – M48',
      '20 – 500 mm',
      'Hot-Dip Galvanized (ISO 1461), Zinc Yellow Trivalent, Black Oxide',
      'PEB steel framing, civil construction, machinery frames, solar structures',
    ],
  },
  {
    cells: [
      'Property Class 10.9',
      'M8 – M36',
      '20 – 400 mm',
      'Mechanical Zinc, Zinc-Nickel, HDG with mandatory 200 °C bake-out',
      'Automotive tier chassis, dynamic shear joints, heavy earth-moving equipment',
    ],
  },
  {
    cells: [
      'Property Class 12.9',
      'M8 – M30',
      '25 – 250 mm',
      'Chemical Black Oxide with rust-preventive oil (HDG strictly prohibited)',
      'High-stress machine tools, plastic injection molds, hydraulic cylinder joints',
    ],
  },
  {
    cells: [
      'Stainless Steel 304 (A2-70)',
      'M4 – M24',
      '10 – 200 mm',
      'Acid Cleaned & Passivated per ASTM A967',
      'Food processing machinery, architectural brackets, inland solar MMS',
    ],
  },
  {
    cells: [
      'Stainless Steel 316 (A4-70)',
      'M4 – M24',
      '10 – 200 mm',
      'Acid Cleaned & Passivated per ASTM A967',
      'Chemical process plants, coastal solar installations, marine hardware',
    ],
  },
];

const DECISION_TREE_ROWS = [
  {
    cells: [
      'Light-Duty Machinery Sub-Assembly',
      'Property Class 4.6 / 4.8',
      'Trivalent Zinc Electroplate',
      'Economical standard for indoor non-vibrating covers and low-stress brackets.',
    ],
  },
  {
    cells: [
      'PEB Column & Rafter Connections',
      'Property Class 8.8 High-Tensile',
      'Hot-Dip Galvanized (ISO 1461)',
      'Standard structural steel workhorse; must pair with HDG Class 8 overtapped nuts.',
    ],
  },
  {
    cells: [
      'Heavy Equipment & Compressor Mounts',
      'Property Class 8.8 or 10.9',
      'Zinc + DIN 985 Nylock Nut',
      'High cyclic vibration; nylock or prevailing torque nut prevents back-off.',
    ],
  },
  {
    cells: [
      'Inland Solar MMS Sub-Assembly',
      'Property Class 8.8 HDG or SS 304',
      'Hot-Dip Galvanized / Passivated',
      'HDG for steel substructure; SS 304 for module side to prevent galvanic attack.',
    ],
  },
  {
    cells: [
      'Coastal Solar & Marine Structures',
      'Stainless Steel 316 (A4-70)',
      'Natural Passivated',
      'Molybdenum-bearing 316 prevents severe chloride pitting within 5 km of sea.',
    ],
  },
  {
    cells: [
      'Structural Steel Friction Joints (A325)',
      'Class 8.8S / ASTM A325',
      'Hot-Dip Galvanized (ASTM A153)',
      'Requires ASTM A194 2H or A563 heavy hex nuts and hardened flat washers.',
    ],
  },
  {
    cells: [
      'Food, Dairy & Cleanroom Machinery',
      'Stainless Steel 304 or 316',
      'Passivated per ASTM A967',
      'Non-contaminating passive surface; resists frequent sanitary washdowns.',
    ],
  },
  {
    cells: [
      'High-Cycle Dynamic / Seismic Framing',
      'Property Class 10.9',
      'Mechanical Zinc / Geomet Flake',
      'Non-electrolytic coating eliminates catastrophic hydrogen embrittlement risks.',
    ],
  },
  {
    cells: [
      'High-Stress Tool-and-Die Fixtures',
      'Property Class 12.9',
      'Chemical Black Oxide with Oil',
      'Provides maximum 1220 MPa tensile strength while maintaining class 6g thread fit.',
    ],
  },
];

const APPLICATIONS = [
  {
    icon: Building2,
    name: 'Pre-Engineered Buildings & Structural Steel',
    body:
      'High-volume Class 8.8 HDG hex head bolts, nuts, and washers for primary rafter-to-column connections, moment joints, and cold-formed secondary framing.',
  },
  {
    icon: Factory,
    name: 'Industrial Machinery & Equipment',
    body:
      'Class 8.8 and 10.9 zinc-plated hex bolts paired with DIN 985 nylock nuts for heavy pumps, industrial gearboxes, stamping presses, and electric motor mounts.',
  },
  {
    icon: Zap,
    name: 'Commercial Vehicles & Heavy Trailers',
    body:
      'High-tensile Class 10.9 flange bolts and prevailing-torque lock nuts for automotive tier-2 chassis frames, axle suspensions, and fifth-wheel assemblies.',
  },
  {
    icon: Compass,
    name: 'Solar Structure Sub-Assembly',
    body:
      'SS 304 and HDG Class 8.8 hex sets for solar mounting structure framing, diagonal braces, and purlin attachments in rooftop and ground-mount arrays.',
  },
  {
    icon: Layers,
    name: 'Process Piping & Flange Assemblies',
    body:
      'ASTM A194 Grade 2H heavy hex nuts and ASTM A193 B7 stud combinations for high-temperature and high-pressure ASME B16.5 pipeline flanges.',
  },
  {
    icon: Boxes,
    name: 'Hardware Wholesalers & Jobbing Shops',
    body:
      'Consolidated bulk supply of mixed metric diameters and lengths shipped in standard 25 kg bags or wooden crates with full test certificate traceability.',
  },
];

const RELATED_PRODUCTS = [
  {
    href: '/materials/high-tensile-fasteners/',
    title: 'High-Tensile Fasteners Guide',
    anchor: 'property class 8.8 / 10.9 decision guide',
    body:
      'Comprehensive metallurgical comparison of Property Classes 8.8, 10.9, and 12.9, detailing tensile limits, proof loads, and hydrogen embrittlement avoidance.',
  },
  {
    href: '/materials/stainless-steel-fasteners/',
    title: 'Stainless Steel Fasteners Guide',
    anchor: 'SS 304 vs SS 316 for service environment',
    body:
      'Technical selection guide covering austenitic grades A2-70 and A4-70, PREN pitting resistance, and marine atmospheric performance.',
  },
  {
    href: '/products/csk-allen-bolts/',
    title: 'Socket Head & CSK Screws',
    anchor: 'socket head cap screws and countersunk bolts',
    body:
      'DIN 912 Allen socket head cap screws and DIN 7991 countersunk screws in Class 10.9 and 12.9 for recessed and tight-clearance machine assemblies.',
  },
  {
    href: '/industries/construction-infrastructure/',
    title: 'Construction & Infrastructure Hub',
    anchor: 'PEB structural fastener schedules',
    body:
      'Sector-wide structural procurement guide connecting foundation anchor bolts, PEB sag rods, and structural hex bolts onto consolidated purchase orders.',
  },
  {
    href: '/industries/automotive-heavy-engineering/',
    title: 'Automotive & Heavy Engineering Hub',
    anchor: 'heavy machinery and automotive tier hardware',
    body:
      'Engineering procurement specifications for tier-2/tier-3 automotive component builders, mining machinery, and agricultural implement manufacturers.',
  },
  {
    href: '/products/custom-fasteners/',
    title: 'Custom Fasteners on Drawing',
    anchor: 'custom specials on drawing',
    body:
      'Drawing-based manufacturing for non-standard shoulder bolts, stepped studs, and specialized alloy hardware produced to exact engineering CAD models.',
  },
];

export default function Page() {
  const route = findRoute(PATH);
  const trail = route?.breadcrumbTrail ?? [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products/' },
    { label: 'Hex Bolts & Nuts', href: PATH },
  ];

  return (
    <>
      <JsonLd
        data={productSchema({
          name: 'Hex Bolts and Nuts',
          description:
            'Hexagon head bolts (DIN 931/933, ISO 4014/4017) and companion hex nuts (DIN 934, ISO 4032) across Property Classes 4.6, 8.8, 10.9, and SS 304/316. Distributed from vetted partner mills in Ahmedabad with MTC pass-through.',
          category: 'Industrial Hex Bolts and Hex Nuts',
          material: 'Carbon Steel (Class 4.6, 8.8, 10.9), Stainless Steel (SS 304, SS 316)',
          image: HERO_IMAGE,
          path: PATH,
          classification: 'trading',
        })}
      />
      <JsonLd data={faqPage(FAQS)} />

      {/* 1. Hero */}
      {/* VERIFICATION PENDING: Real photograph of staged hex-bolt and nut inventory at KP Fasteners Ahmedabad facility — ref: brief §6 hero-hex-bolts-nuts-kp.webp & §10 item 10 */}
      <Section>
        <Container>
          <Breadcrumbs trail={trail} />
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <p className="badge badge-steel">Distribution Range · Vetted Partner Mills · Ahmedabad</p>
              <Heading as="h1" variant="hero" className="mt-4 font-heading">
                <span className="text-gold-gradient">Hex Bolts and Nuts Manufacturer</span> &amp; Wholesale Supply
              </Heading>
              <hr className="rule-metal mt-5 w-40" aria-hidden="true" />
              <p className="mt-6 max-w-2xl text-lg text-ink-muted">
                Metric hex head bolts, companion hex nuts, and hardened washers supplied across Property Classes 4.6, 8.8, 10.9, and austenitic stainless steel. Distributed from vetted partner mills in Ahmedabad with full MTC EN 10204 3.1 pass-through and lot traceability.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/request-quote/?product=hex-bolts-nuts"
                  className="btn btn-primary shadow-gold"
                >
                  <FileText aria-hidden="true" className="h-4 w-4" />
                  <span>Request Hex Bolt / Nut Quote</span>
                  <ArrowRight aria-hidden="true" className="h-4 w-4 ml-0.5" />
                </Link>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <MessageCircle aria-hidden="true" className="h-4 w-4 text-emerald-600" />
                  <span>WhatsApp Our Hex Desk</span>
                </a>
              </div>
            </div>
            <div className="relative">
              <Card variant="metallic" padding="lg" className="overflow-hidden">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-transparent p-3">
                  <Image
                    src={HERO_IMAGE}
                    alt="KP Fasteners hex bolts and nuts inventory — high-tensile Class 8.8 and 10.9 bolts, standard nuts and heavy hex hardware"
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
              Hex bolts &amp; nuts — sourced from vetted partner mills; property-class head markings traceable to EN 10204 3.1 mill test certificates on request.
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
              Overview: hex fastener scope &amp; consolidated procurement model
            </Heading>
          </div>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <Prose>
              <p>
                Hexagon head bolts and companion hex nuts constitute the mechanical backbone of industrial structural connections and mechanical assemblies worldwide. Whether joining structural steel rafter trusses, assembling heavy industrial machinery, or bolting high-pressure pipeline flanges, the combination of a precision-threaded hex bolt and matching proof-stress nut ensures predictable joint clamping without slip.
              </p>
              <p className="mt-4">
                KP Fasteners provides complete commercial coverage across full-thread screws (DIN 933 / ISO 4017), partial-thread shear bolts (DIN 931 / ISO 4014), standard nuts (DIN 934), heavy hex structural nuts (ASME B18.2.2 / ASTM A194 2H), thin lock nuts (DIN 439), and prevailing-torque nylock nuts (DIN 985). We distribute these items in mild steel (Property Classes 4.6 and 4.8), high-tensile carbon steel (Property Classes 8.8 and 10.9), and austenitic stainless steel (SS 304 and SS 316).
              </p>
            </Prose>
            <Prose>
              <p>
                Transparency is fundamental to our supply model: KP Fasteners distributes commodity hex bolts and nuts through vetted, audit-verified partner primary mills. This distribution range directly complements our dedicated in-house manufacturing lines in Ahmedabad, where we manufacture{' '}
                <Link
                  href="/products/foundation-bolts/"
                  className="font-semibold text-brand-gold-strong hover:underline"
                >
                  foundation bolts for PEB column base plates
                </Link>
                ,{' '}
                <Link
                  href="/products/stud-bolts/"
                  className="font-semibold text-brand-gold-strong hover:underline"
                >
                  stud bolts for flange joints
                </Link>
                , and specialized sag rods.
              </p>
              <p className="mt-4">
                By purchasing both custom anchorage items and high-volume standard hex hardware through KP Fasteners, engineering procurement teams eliminate fragmented vendor management, guarantee compatible hot-dip galvanized thread fitments, and consolidate their complete fastener schedule onto a single commercial purchase order.
              </p>
            </Prose>
          </div>
        </Container>
      </Section>

      {/* 3. Standards Cross-Reference */}
      <Section>
        <Container>
          <div className="flex items-center gap-3">
            <Compass aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Standards cross-reference: DIN vs ISO vs IS vs ASTM
            </Heading>
          </div>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Engineering drawings across Indian and international EPC projects frequently reference equivalent German (DIN), International (ISO), Indian (IS), and American (ASTM) standards. The matrix below clarifies corresponding dimensional and mechanical specifications:
          </p>

          <div className="mt-8">
            <SpecTable
              headers={[
                'DIN Standard',
                'ISO Equivalent',
                'Indian Standard (BIS)',
                'Engineering Description & Fastener Geometry',
              ]}
              rows={STANDARDS_ROWS}
              caption="Cross-reference matrix linking German DIN, International ISO, and Bureau of Indian Standards (BIS) fastener designations."
            />
          </div>
        </Container>
      </Section>

      {/* 4. Bolt Specification Schedule */}
      {/* VERIFICATION PENDING: Confirm stocked diameter and length range per property class — ref: brief §10 item 2 */}
      <Section variant="alt">
        <Container>
          <div className="flex items-center gap-3">
            <Wrench aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Hex bolt specification schedule (M6 to M64)
            </Heading>
          </div>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Standard diameter ranges, length offerings, governing specifications, and typical industrial applications across externally threaded hex fasteners:
          </p>

          <div className="mt-8">
            <SpecTable
              headers={[
                'Nominal Size Range',
                'Length Range',
                'Available Property Classes',
                'Governing Standards',
                'Standard Surface Coatings',
                'Primary Industrial Application',
              ]}
              rows={BOLT_SCHEDULE_ROWS}
            />
          </div>
        </Container>
      </Section>

      {/* 5. Nut Specification Schedule */}
      {/* VERIFICATION PENDING: Confirm nut families stocked (standard, heavy hex, thin / jam, nylock, castle) — ref: brief §10 item 4 */}
      <Section>
        <Container>
          <div className="flex items-center gap-3">
            <Gauge aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Hex nut family specification schedule
            </Heading>
          </div>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Internal thread specifications, property class ratings, and functional mechanical roles across standard, heavy, thin, and locking hex nut geometries:
          </p>

          <div className="mt-8">
            <SpecTable
              headers={[
                'Nut Family & Style',
                'Governing Standards',
                'Property Class / Material',
                'Thread Diameter Range',
                'Surface Finishes',
                'Mechanical Function & Joint Pairing',
              ]}
              rows={NUT_SCHEDULE_ROWS}
            />
          </div>
        </Container>
      </Section>

      {/* 6. Product Variant Matrix */}
      {/* VERIFICATION PENDING: Confirm property-class stocking coverage (4.6 / 4.8 / 8.8 / 10.9 routinely stocked vs 12.9 on-quote) — ref: brief §10 item 1 */}
      <Section variant="alt">
        <Container>
          <div className="flex items-center gap-3">
            <Boxes aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Product variant matrix: grade × coating × size availability
            </Heading>
          </div>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Stocking matrix summarizing standard diameters, lengths, protective surface barriers, and mechanical property grades:
          </p>

          <div className="mt-8">
            <SpecTable
              headers={[
                'Property Class / Grade',
                'Diameter Range',
                'Standard Length Range',
                'Default Surface Coatings',
                'Typical Application Scope',
              ]}
              rows={VARIANT_ROWS}
              caption="Standard dimensional matrix. Specialty diameters (M52+) and custom lengths are supplied on confirmed made-to-order enquiry."
            />
          </div>
        </Container>
      </Section>

      {/* 7. Decision Block: Property-Class & Coating Picker */}
      {/* VERIFICATION PENDING: Confirm coating availability per class (HDG vs mechanical galvanizing for 10.9) — ref: brief §10 item 3 */}
      <Section>
        <Container>
          <div className="flex items-center gap-3">
            <Wrench aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Decision guide: property-class selection &amp; coating engineering
            </Heading>
          </div>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <Prose>
              <p>
                Selecting the correct fastener grade is determined by joint stress dynamics. <strong>Property Class 4.6</strong> is suitable strictly for low-stress commercial assemblies and sheet metal brackets where tensile forces remain below 400 MPa. For structural steel framing and pre-engineered buildings (PEB), <strong>Property Class 8.8</strong> is the mandatory baseline, offering 800 MPa minimum tensile strength and 640 MPa yield strength to withstand wind and dead loads.
              </p>
              <p className="mt-4">
                For heavy machinery, automotive chassis mounts, and dynamic cyclic loads, <strong>Property Class 10.9</strong> provides superior shear resistance (1040 MPa tensile). Explore our dedicated{' '}
                <Link
                  href="/materials/high-tensile-fasteners/"
                  className="font-semibold text-brand-gold-strong hover:underline"
                >
                  property class 8.8 / 10.9 decision guide
                </Link>{' '}
                for comprehensive tensile and proof-load property charts.
              </p>
            </Prose>
            <Prose>
              <p>
                Surface coating selection requires balancing atmospheric corrosion protection against <strong>hydrogen embrittlement (HDE)</strong> risks per ISO 898-1 §9.6. Hot-dip galvanizing (HDG) per ISO 1461 provides exceptional 85 µm sacrificial zinc protection for outdoor Class 8.8 structural connections. However, mating nuts must be tapped oversize (thread tolerance 6AZ or 6AX) after galvanizing to accommodate zinc build-up on bolt threads.
              </p>
              <p className="mt-4">
                On high-strength Class 10.9 fasteners, acid pickling and molten zinc baths can introduce atomic hydrogen into grain boundaries, risking sudden delayed brittle fracture. Therefore, we recommend <strong>mechanical galvanizing or zinc-nickel coatings</strong> for Class 10.9 components, while Class 12.9 is supplied in <strong>chemical black oxide only</strong>.
              </p>
            </Prose>
          </div>

          <div className="mt-8">
            <SpecTable
              headers={[
                'Application Environment',
                'Recommended Grade',
                'Recommended Coating',
                'Engineering Design Notes',
              ]}
              rows={DECISION_TREE_ROWS}
            />
          </div>
        </Container>
      </Section>

      {/* 8. Applications Grid */}
      <Section variant="alt">
        <Container>
          <div className="flex items-center gap-3">
            <Building2 aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Applications &amp; industries supplied across India
            </Heading>
          </div>
          <p className="mt-3 max-w-3xl text-ink-muted">
            KP Fasteners routinely quotes and distributes standard hex head fasteners across primary infrastructure and manufacturing sectors:
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

      {/* 9. Quality Documentation & MTC Pass-Through */}
      <Section>
        <Container>
          <div className="rounded-xl border border-border bg-surface p-8 shadow-card">
            <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
              <div>
                <div className="flex items-center gap-2">
                  <ShieldCheck aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
                  <Heading as="h2" variant="section">
                    Quality assurance &amp; MTC EN 10204 3.1 pass-through
                  </Heading>
                </div>
                <p className="mt-4 text-ink-muted">
                  Procurement integrity requires documented metallurgical verification. Every hex bolt and nut batch supplied by KP Fasteners is backed by rigorous quality documentation:
                </p>
                <ul className="mt-4 space-y-2 text-sm text-ink">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                    <strong>EN 10204 3.1 Mill Test Certificates:</strong> Passed through directly from originating primary manufacturers, recording chemical melt analysis (C, Mn, P, S, Cr, Mo) and mechanical tensile properties.
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                    <strong>In-House Hardness Verification:</strong> Rockwell (HRC) and Brinell (HBW) testing performed across sample lots in our Ahmedabad facility to verify heat-treat temper.
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                    <strong>Coating Thickness Inspection:</strong> Calibrated magnetic gauge verification ensuring hot-dip galvanized fasteners meet ISO 1461 / ASTM A153 coating mass standards.
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                    <strong>Class 6g / 6H Thread Fitment:</strong> Ring gauge and plug gauge inspection to guarantee smooth engagement and prevent job-site galling.
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                    <strong>NABL Laboratory Testing on Request:</strong> Certified third-party proof load, wedge tensile, and chemical PMI testing provided through accredited partner laboratories.
                  </li>
                </ul>
              </div>
              <div className="space-y-4 text-center lg:text-right">
                <Link
                  href="/tools/"
                  className="btn btn-secondary"
                >
                  MTC EN 10204 3.1 pass-through and quality protocols →
                </Link>
                <p className="text-xs text-ink-muted">
                  Review our quality testing lab, inspection standards, and traceability workflows.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 10. Related Products Cross-Link Grid */}
      <Section variant="alt">
        <Container>
          <div className="flex items-center gap-3">
            <Wrench aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Related structural and industrial fastener lines
            </Heading>
          </div>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Explore dedicated technical catalogs and materials guides to complete your procurement schedule:
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {RELATED_PRODUCTS.map((item) => (
              <Card key={item.href} variant="default" padding="lg">
                <Heading as="h3" variant="card">
                  {item.title}
                </Heading>
                <p className="mt-2 text-sm text-ink-muted">{item.body}</p>
                <div className="mt-4">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-brand-gold-strong hover:underline"
                  >
                    View {item.anchor}
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/products/"
              className="inline-flex items-center gap-2 font-semibold text-brand-steel hover:text-brand-gold-strong hover:underline"
            >
              Browse our full product range
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </Section>

      {/* 11. FAQ */}
      <Section>
        <Container>
          <Heading as="h2" variant="section">
            Frequently asked questions about hex bolts and nuts
          </Heading>
          <p className="mt-3 max-w-2xl text-ink-muted">
            Key engineering answers regarding manufacturing origins, property classes, standards differences, lead times, and structural certifications.
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

      {/* 12. CTA Band */}
      <Section variant="alt">
        <Container>
          <div className="rounded-2xl border border-border bg-surface p-8 text-center shadow-card sm:p-12">
            <Heading as="h2" variant="section" className="mx-auto max-w-2xl font-heading">
              Request a comprehensive hex bolt &amp; nut BOQ quotation
            </Heading>
            <p className="mx-auto mt-4 max-w-2xl text-ink-muted">
              Submit your fastener schedule, structural engineering drawings, or bulk quantity requirements. Our technical sales desk will verify property classes, confirm coating requirements, and issue an itemized commercial quotation within 24 hours.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/request-quote/?product=hex-bolts-nuts"
                className="btn btn-primary"
              >
                <FileText aria-hidden="true" className="h-4 w-4" />
                &nbsp;Send a BOQ for quotation
              </Link>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
                &nbsp;WhatsApp our hex desk
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
