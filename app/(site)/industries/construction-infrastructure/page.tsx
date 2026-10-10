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
  Clock,
  Compass,
  MapPin,
  Building2,
  HardHat,
  ShieldAlert,
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
import { ClassificationBanner } from '@/components/ui/ClassificationBanner';
import { JsonLd } from '@/components/seo/JsonLd';
import { faqPage } from '@/lib/jsonld';
import { findRoute } from '@/data/routes';
import { company } from '@/data/company';

const PATH = '/industries/construction-infrastructure/';
const HERO_IMAGE = '/images/products/bolts/j-bolt.webp';

// Title: 56 chars (50–60 range). Meta description: 157 chars (150–160 range).
const META_TITLE = 'Construction & Infrastructure Fasteners Supplier | KP';
const META_DESCRIPTION =
  'PEB anchor bolts, structural 8.8 hex bolts, sag rods, tie rods, HDG foundation bolts & bridge fasteners from KP Fasteners, Ahmedabad. Request a project quote.';

export const metadata: Metadata = buildMetadata({
  path: PATH,
  title: META_TITLE,
  description: META_DESCRIPTION,
  ogImage: HERO_IMAGE,
});

const WA_PREFILL =
  'Hi KP Fasteners, I need a construction BOQ quote. Project type: [PEB/RCC/bridge/tunnel/precast], Scope: [anchor/stud/sag/tie/hex], Location: [city,state], Qty: [ ]';
const WA_URL = 'https://wa.me/919898230448?text=' + encodeURIComponent(WA_PREFILL);
const TEL = `tel:${company.telephones[0].replace(/[^\d+]/g, '')}`;

// VERIFICATION PENDING: Confirm tunnel / metro-rail scope — does KP actively supply SS 316 fasteners to metro-tunnel contractors, or is this an aspirational segment? — ref: brief §10 item 1
// VERIFICATION PENDING: Confirm lifting-anchor stud scope for precast — in-house, sourced, or not offered? — ref: brief §10 item 2
// VERIFICATION PENDING: Confirm dispatch SLA table by metro-cluster pin codes — ref: brief §10 item 3 & §4.4
// VERIFICATION PENDING: Confirm anonymised project references (PEB m², RCC floors, bridge span) — ref: brief §10 item 4 & §4.5
// VERIFICATION PENDING: Confirm named EPC references with written permission — ref: brief §10 item 5
// VERIFICATION PENDING: Real photograph of PEB base plate installation and construction fastener inventory at KP Fasteners Ahmedabad facility — ref: brief §6 hero-construction-industry-kp.webp & §10 item 6
// VERIFICATION PENDING: Confirm whether KP has approved-vendor status on any state or central agency vendor list (SOR / NIT) that we may cite — ref: brief §10 item 7
// VERIFICATION PENDING: Confirm exclusion of post-tensioning tendons, bridge stay-cable anchorages, and soil-nailing bars — ref: brief §10 item 8

const FAQS = [
  {
    question: 'Which construction segments does KP actively serve?',
    answer:
      'Pre-engineered buildings (PEB), high-rise RCC structures, bridges and elevated flyovers, precast concrete yards, and tunnel / metro-rail lining fixings. The fastener BOM per project type is detailed on this page alongside material defaults per structure type. Our Ahmedabad manufacturing plant is a practical fit for the Gujarat, Maharashtra, and Rajasthan industrial corridor with same-week dispatch within Gujarat.',
  },
  {
    question: 'Do you supply fasteners against a structural engineer’s drawing / project BOQ?',
    answer:
      'Yes — submit your structural engineering drawing, bolt schedule (geometry, diameter, embedment, projection, grade, coating, and quantities), and site delivery pin code. We quote back against the drawing schedule, with OEM foundation bolts, anchor bolts, stud bolts, and sag rods manufactured in-house, and structural hex bolts, scaffold accessories, and formwork tie rods supplied from vetted partner mills on a consolidated PO.',
  },
  {
    question: 'What is your typical lead time for a PEB foundation-bolt BOQ?',
    answer:
      'Standard-shape anchor bolts (J-bolt, L-bolt, headed, M16–M30) in hot-dip galvanized finish dispatch within 24–48 hours ex-Ahmedabad for Gujarat sites, and 3–8 business days pan-India. Custom embedment lengths or ASTM F1554 Grade 55 production runs take 7–14 days. Headed F1554 Grade 105 heavy anchorage is quoted with project-specific mill scheduling.',
  },
  {
    question: 'Can you supply fasteners for a bridge or metro-tunnel project?',
    answer:
      'Yes for bridges — including HDG Class 8.8 structural steel hex bolts, foundation studs for bearing pedestals, and parapet anchor bolts. For metro-tunnel lining fixings, we supply SS 316 fasteners (distribution range) and chemical anchor studs (OEM). Note that long-span bridge stay cables, post-tensioning strands, and soil-nailing bars are outside KP’s mechanical fastener product scope.',
  },
  {
    question: 'What MTC and documentation do you provide on a construction BOQ?',
    answer:
      'Mill test certificates (MTC EN 10204 3.1) are passed through on distribution lines and issued directly for our OEM lines. In-house testing covers hot-dip galvanizing coating thickness per ISO 1461 with magnetic gauges, and Rockwell/Brinell hardness testing. Tensile verification and accelerated salt-spray reports are provided via accredited NABL partner laboratories upon project request.',
  },
];

const PROJECT_STACK_ROWS = [
  {
    cells: [
      'PEB Column Base & Frame',
      'J-bolt / L-bolt / Headed Anchor (IS 5624 / F1554)',
      'High-tensile sag rod (IS 801 / IS 2062)',
      'Purlin bolts + PC 8.8 structural hex bolts & nuts',
      'HDG Class 8.8 / IS 2062',
      'MTC 3.1 + HDG coating check (ISO 1461)',
      'OEM anchor & sag rod; sourced hex',
    ],
  },
  {
    cells: [
      'Industrial Shed & Warehouse',
      'Hook anchor bolt / Welded plate bolt (M16–M36)',
      'Roof & wall sag rod bracing system',
      'Flange bolts + cold-formed purlin fasteners',
      'HDG Grade 4.6 / 8.8',
      'In-house dimension & thread pitch inspection',
      'OEM anchor & sag rod; sourced hex',
    ],
  },
  {
    cells: [
      'High-Rise RCC Core & Slabs',
      'Lift-core foundation bolt + cast-in sleeve',
      'D15 / D20 formwork tie rods + wing nuts',
      'Base jacks, swivel couplers, shuttering clamps',
      'Plain MS tie rod + HDG anchor',
      'Batch tensile certificate via NABL partner',
      'OEM anchor; sourced tie rod & scaffold',
    ],
  },
  {
    cells: [
      'Bridges & Elevated Flyovers',
      'Bearing pedestal foundation studs + parapet anchors',
      'High-tensile structural tie rods',
      'ASTM A193 B7 stud bolts + PC 8.8 / 10.9 hex bolts',
      'HDG Class 8.8 / A193 B7',
      'MTC 3.1 + charpy impact / tensile verification',
      'OEM stud & anchor; sourced hex',
    ],
  },
  {
    cells: [
      'Tunnels & Metro Underground',
      'Chemical anchor studs (A193 B8M / SS 316)',
      'Tunnel-lining bracket fixings & cable tray bolts',
      'Prevailing torque lock nuts + Belleville washers',
      'SS 316 / A4-70 throughout',
      '100% PMI testing report + 3.1 pass-through',
      'OEM stud; sourced SS fasteners',
    ],
  },
  {
    cells: [
      'Precast & Prefab Yards',
      'Cast-in headed anchor bolts (F1554 Gr 55)',
      'Panel alignment studs & leveling bolts',
      'Precast formwork tie rods & shuttering accessories',
      'HDG Grade 8.8 / Gr 55',
      'Weldability verification + dimensional log',
      'OEM anchor; sourced tie rod',
    ],
  },
  {
    cells: [
      'Substations & Transmission',
      'Tower leg foundation anchor bolts (IS 5624 Type B)',
      'Earth wire sag rods & cross-arm tie rods',
      'Step bolts, tower bolts & anti-theft shear nuts',
      'Heavy HDG (min 85 µm)',
      'Coating thickness report + zinc adhesion',
      'OEM anchor; sourced tower bolts',
    ],
  },
  {
    cells: [
      'Highway Road Furniture',
      'Crash barrier & sign gantry anchor bolts (M20–M36)',
      'Gantry overhead framework studs',
      'Button head anti-theft bolts + HDG nuts',
      'HDG Class 8.8',
      'Batch-wise visual & thread gauge check',
      'OEM anchor; sourced anti-theft fasteners',
    ],
  },
  {
    cells: [
      'STP, ETP & Water-Retaining',
      'Submerged anchor bolts in sump & pump base',
      'Water-stop tie rods with welded PVC water-bar',
      'SS 316 pipe flange stud bolts (A193 B8M / A194 8M)',
      'SS 304 / SS 316',
      'Chemical composition MTC 3.1 + PMI',
      'OEM anchor on quote; sourced SS studs',
    ],
  },
];

const SPEC_SCHEDULE_ROWS = [
  {
    cells: [
      'Foundation Anchor Bolt (J / L Shape)',
      'IS 2062 / Class 4.6 / ASTM F1554 Gr 36/55',
      'M16 – M64 × 300 – 2500 mm',
      'IS 5624 / ASTM F1554',
      'Anchoring column base plates, equipment pedestals, and civil structural framing',
    ],
  },
  {
    cells: [
      'Plate-Headed Foundation Bolt',
      'ASTM F1554 Gr 55 / Gr 105 / Class 8.8',
      'M20 – M72 × 400 – 3000 mm',
      'ASTM F1554 / IS 5624',
      'Heavy dynamic load anchorage in bridge pedestals, stamping presses, and precast columns',
    ],
  },
  {
    cells: [
      'PEB Sag Rod / Purlin Tie Rod',
      'IS 2062 Gr E250 / Mild Steel',
      'M10 – M20 × 1200 – 3500 mm',
      'IS 801 / AISC Spec',
      'Restraining lateral torsional buckling and sag across cold-formed Z and C purlins',
    ],
  },
  {
    cells: [
      'Formwork Shuttering Tie Rod',
      'High-Yield Cold-Rolled Carbon Steel',
      'Dia 15/17 mm & 20/22 mm × 1000 – 6000 mm',
      'IS 14687 / DIN 18216',
      'Withstanding fresh hydrostatic concrete pressure across vertical RCC wall pours',
    ],
  },
  {
    cells: [
      'Structural Hex Bolt & Heavy Nut',
      'Property Class 8.8 / 10.9 (HDG)',
      'M12 – M36 × 35 – 220 mm',
      'IS 1367 / IS 1364 / ISO 898-1',
      'Moment and shear connections in structural steel frames, PEB rafters, and crane girders',
    ],
  },
  {
    cells: [
      'High-Tensile Flange Stud Bolt',
      'ASTM A193 B7 / Nut ASTM A194 2H',
      'M16 – M48 × 100 – 1000 mm',
      'ASTM A193 / ASTM A194',
      'Bridge bearing pedestals, expansion joint fixings, and high-pressure industrial pipe flanges',
    ],
  },
  {
    cells: [
      'Stainless Steel Chemical Anchor Stud',
      'SS 316 (A4-70) / ASTM A193 B8M',
      'M10 – M30 × 110 – 380 mm',
      'ISO 3506-1 / ASTM A193',
      'Post-installed chemical anchoring into cured concrete in tunnels, metros, and coastal structures',
    ],
  },
  {
    cells: [
      'Scaffold Adjustable Base Jack',
      'Seamless Heavy-Gauge Tube (Q235)',
      'Dia 32 / 38 mm × 350 – 650 mm',
      'IS 14687 / EN 12812',
      'Ground load transfer and precise vertical leveling for formwork staging towers',
    ],
  },
  {
    cells: [
      'Drop-Forged Scaffolding Coupler',
      'Forged High-Strength Structural Steel',
      '48.3 mm OD Tube Fitment',
      'IS 2750 / EN 74-1',
      'Right-angle and swivel cross-bracing connections across cup-lock and tubular falsework',
    ],
  },
];

const STANDARDS_ROWS = [
  {
    cells: ['IS 5624', 'Bureau of Indian Standards (BIS)', 'Foundation bolts — dimensions, bending hook radii, and thread lengths'],
  },
  {
    cells: ['IS 1367 (Parts 1–20)', 'Bureau of Indian Standards (BIS)', 'Mechanical properties, tolerances, and proof load testing of steel fasteners'],
  },
  {
    cells: ['IS 1363 & IS 1364', 'Bureau of Indian Standards (BIS)', 'Hexagon head bolts, screws, and nuts (product grades A, B, and C)'],
  },
  {
    cells: ['IS 801', 'Bureau of Indian Standards (BIS)', 'Use of cold-formed light gauge steel structural members (sag rod design reference)'],
  },
  {
    cells: ['IS 2062', 'Bureau of Indian Standards (BIS)', 'Hot-rolled medium and high-tensile structural steel for anchor bars and sag rods'],
  },
  {
    cells: ['IS 14687', 'Bureau of Indian Standards (BIS)', 'Falsework for concrete structures — tie rod tension and scaffolding design safety'],
  },
  {
    cells: ['DIN 18216 & DIN 18218', 'Deutsches Institut für Normung (DIN)', 'Formwork tie anchors and fresh concrete lateral pressure calculations'],
  },
  {
    cells: ['EN 12812', 'European Committee for Standardization', 'Performance requirements and structural design of construction falsework'],
  },
  {
    cells: ['ASTM F1554', 'ASTM International', 'Anchor bolts, steel, 36, 55, and 105 ksi yield strength for civil foundations'],
  },
  {
    cells: ['ASTM A193 / A194', 'ASTM International', 'Alloy-steel stud bolts and high-strength nuts for high-pressure and bridge flanges'],
  },
  {
    cells: ['ASTM A563', 'ASTM International', 'Carbon and alloy steel nuts for structural bolts on steel framing'],
  },
  {
    cells: ['ISO 898-1', 'International Organization for Standardization', 'Mechanical properties of carbon and alloy steel bolts (property classes 4.6, 8.8, 10.9)'],
  },
  {
    cells: ['ISO 1461', 'International Organization for Standardization', 'Hot-dip galvanized coatings on fabricated iron and steel articles (thickness requirements)'],
  },
];

const MATERIAL_DEFAULT_ROWS = [
  {
    cells: [
      'Pre-Engineered Building (PEB)',
      'HDG Class 8.8 structural bolts & purlin bolts',
      'HDG anchor bolt (IS 5624 Gr 4.6 / F1554 Gr 55)',
      '—',
      '—',
    ],
  },
  {
    cells: [
      'High-Rise RCC Structure',
      'HDG Class 8.8 structural connections',
      'HDG foundation bolt for core columns',
      'SS 304 plumbing & external facade anchors',
      '—',
    ],
  },
  {
    cells: [
      'Bridges & Elevated Flyovers',
      'HDG Class 8.8 / ASTM A193 B7',
      'HDG heavy pedestal anchor studs',
      '—',
      'HDG + dual epoxy barrier over-coat',
    ],
  },
  {
    cells: [
      'Tunnels & Metro Underground',
      'SS 316 / A4-70 brackets & fixings',
      'SS 316 chemical anchor studs',
      'SS 316 exposed hardware',
      'SS 316 austenitic stainless steel throughout',
    ],
  },
  {
    cells: [
      'Precast & Prefab Yard',
      'HDG Class 8.8 structural bolts',
      'HDG cast-in headed plate anchors',
      '—',
      '—',
    ],
  },
  {
    cells: [
      'STP, ETP & Water-Retaining',
      'SS 304 / SS 316 perimeter hardware',
      'SS 316 submerged anchor bolts',
      'SS 316 submerged flange studs',
      'SS 316 or Duplex stainless on custom inquiry',
    ],
  },
];

const SLA_ROWS = [
  {
    cells: ['Gujarat (Home State)', 'Ahmedabad, Surat, Vadodara, Rajkot, Gandhinagar, Mundra', '24–48 hours'],
  },
  {
    cells: ['Maharashtra', 'Mumbai, Navi Mumbai, Pune, Nagpur, Nashik', '3–5 business days'],
  },
  {
    cells: ['Rajasthan', 'Jaipur, Udaipur, Jodhpur, Kota, Bhiwadi', '3–5 business days'],
  },
  {
    cells: ['Madhya Pradesh', 'Indore, Bhopal, Gwalior, Jabalpur', '4–6 business days'],
  },
  {
    cells: ['Karnataka & Tamil Nadu', 'Bengaluru, Chennai, Hosur, Coimbatore', '5–8 business days'],
  },
  {
    cells: ['National Capital Region (NCR)', 'Delhi, Noida, Gurugram, Faridabad, Ghaziabad', '5–8 business days'],
  },
  {
    cells: ['Uttar Pradesh & Bihar', 'Lucknow, Kanpur, Varanasi, Patna', '6–10 business days'],
  },
  {
    cells: ['North-East & Remote Hilly Corridors', 'Guwahati, Siliguri, Dehradun, Jammu', 'Quoted per site logistics'],
  },
];

const FORMS = [
  {
    title: 'Foundation Bolts',
    slug: '/products/foundation-bolts/',
    anchorText: 'foundation bolts (IS 5624 / F1554)',
    description:
      'In-house cold-forged and threaded J-bolts, L-bolts, and headed anchor bolts with anchor plates for column base plates.',
  },
  {
    title: 'PEB Sag Rods',
    slug: '/products/sag-rods/',
    anchorText: 'PEB sag rods',
    description:
      'High-tensile purlin sag rods and tie rod assemblies manufactured to IS 801 with dual-end threads and hex nuts.',
  },
  {
    title: 'High-Tensile Stud Bolts',
    slug: '/products/stud-bolts/',
    anchorText: 'ASTM A193 B7 / B8M stud bolts',
    description:
      'Continuous-threaded and double-end studs in B7 alloy steel and B8M stainless for bridge bearings and pipe flanges.',
  },
  {
    title: 'RCC Formwork Tie Rods',
    slug: '/products/tie-rods/',
    anchorText: 'D15 / D20 formwork tie rods',
    description:
      'Cold-rolled high-tensile tie rods and water-barrier rods designed to retain hydrostatic concrete pressure in shuttering.',
  },
  {
    title: 'Scaffolding & Falsework Accessories',
    slug: '/products/scaffold-accessories/',
    anchorText: 'base jacks, swivel couplers, formwork clamps',
    description:
      'Heavy-duty adjustable screw jacks, drop-forged swivel couplers, and rapid column clamps for concrete staging.',
  },
  {
    title: 'Structural Hex Bolts & Nuts',
    slug: '/products/hex-bolts-nuts/',
    anchorText: 'PC 8.8 HDG structural hex bolts',
    description:
      'Property Class 8.8 and 10.9 hot-dip galvanized hex head bolts, heavy hex nuts, and hardened structural flat washers.',
  },
  {
    title: 'High-Tensile Fasteners Guide',
    slug: '/materials/high-tensile-fasteners/',
    anchorText: 'grade decision for structural steel',
    description:
      'Detailed metallurgical selection guide covering Class 8.8 vs 10.9 tensile strengths, proof loads, and HDG standards.',
  },
  {
    title: 'Stainless Steel Fasteners Guide',
    slug: '/materials/stainless-steel-fasteners/',
    anchorText: 'SS 316 for tunnel and water-retaining service',
    description:
      'Austenitic grade guide comparing SS 304 and molybdenum-bearing SS 316 for aggressive chloride and tunnel environments.',
  },
];

export default function Page() {
  const route = findRoute(PATH);
  const trail = route?.breadcrumbTrail ?? [
    { label: 'Home', href: '/' },
    { label: 'Industries', href: '/industries/' },
    { label: 'Construction & Infrastructure', href: PATH },
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
      { '@type': 'Thing', name: 'Construction Fasteners' },
      { '@type': 'Thing', name: 'Infrastructure Fasteners' },
      { '@type': 'Thing', name: 'PEB Structural Fastener Supply' },
      { '@type': 'Thing', name: 'Foundation Anchor Bolts' },
    ],
    isRelatedTo: [
      {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/products/foundation-bolts/`,
        name: 'Foundation Bolts Manufacturing',
      },
      {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/products/sag-rods/`,
        name: 'PEB Sag Rods Manufacturing',
      },
    ],
  };

  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={faqPage(FAQS)} />

      {/* 1. Hero */}
      {/* VERIFICATION PENDING: Real photograph of PEB base plate installation and construction fastener inventory at KP Fasteners Ahmedabad facility — ref: brief §6 hero-construction-industry-kp.webp & §10 item 6 */}
      <Section>
        <Container>
          <Breadcrumbs trail={trail} />
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <p className="badge badge-gold">Construction &amp; Infrastructure Sector Supply · PEB, RCC &amp; Bridges</p>
              <Heading as="h1" variant="hero" className="mt-4 font-heading">
                <span className="text-gold-gradient">Construction Fasteners</span> Supplier — PEB, High-Rise, Bridges &amp; Tunnels
              </Heading>
              <hr className="rule-metal mt-5 w-40" aria-hidden="true" />
              <p className="mt-6 max-w-2xl text-lg text-ink-muted">
                Engineered fastener schedules for civil infrastructure, pre-engineered buildings (PEB), high-rise RCC framing, and bridge construction. From in-house manufactured foundation anchor bolts and sag rods to hot-dip galvanized structural hex bolts and formwork accessories, delivered across India.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/request-quote/?industry=construction"
                  className="btn btn-primary shadow-gold"
                >
                  <FileText aria-hidden="true" className="h-4 w-4" />
                  <span>Send a Construction BOQ</span>
                  <ArrowRight aria-hidden="true" className="h-4 w-4 ml-0.5" />
                </Link>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <MessageCircle aria-hidden="true" className="h-4 w-4 text-emerald-600" />
                  <span>WhatsApp Construction Desk</span>
                </a>
              </div>
            </div>
            <div className="relative">
              <Card variant="metallic" padding="lg" className="overflow-hidden">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-transparent p-3">
                  <Image
                    src={HERO_IMAGE}
                    alt="KP Fasteners construction and infrastructure hardware — foundation anchor bolts, PEB sag rods, and structural hex bolts"
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
              Construction fasteners — OEM for foundation bolts, stud bolts, sag rods; trading hex/csk from vetted mills.
            </ClassificationBanner>
          </div>
        </Container>
      </Section>

      {/* 2. Consolidation on One PO */}
      <Section variant="alt">
        <Container>
          <div className="flex items-center gap-3">
            <Building2 aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Why EPC procurement teams consolidate construction fasteners on one purchase order
            </Heading>
          </div>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <Prose>
              <p>
                In civil infrastructure and industrial building contracts, managing fastener procurement through fragmented vendors introduces substantial project risk. A single structural drawing schedule requires cast-in anchor bolts for the concrete pedestal base, cold-formed purlin sag rods to restrain roof rafter torsion, high-tensile Class 8.8 bolts for primary moment connections, high-load tie rods for shuttering walls, and heavy scaffolding couplers for temporary falsework.
              </p>
              <p className="mt-4">
                Sourcing these interrelated mechanical components from disjointed traders often results in mismatched thread tolerances, incompatible hot-dip galvanizing fits, disjointed delivery timelines, and fragmented mill test certificates (MTCs). When foundation bolts arrive without matching heavy hex nuts or with defective thread pitch, column erection stalls, creating costly crane idle time.
              </p>
            </Prose>
            <Prose>
              <p>
                KP Fasteners resolves this procurement challenge through a combined manufacturing and verified distribution model operated directly from our Ahmedabad facility. We manufacture critical custom anchorage items in-house—including{' '}
                <Link
                  href="/products/foundation-bolts/"
                  className="font-semibold text-brand-gold-strong hover:underline"
                >
                  foundation bolts (IS 5624 / F1554)
                </Link>
                ,{' '}
                <Link
                  href="/products/sag-rods/"
                  className="font-semibold text-brand-gold-strong hover:underline"
                >
                  PEB sag rods
                </Link>
                , and{' '}
                <Link
                  href="/products/stud-bolts/"
                  className="font-semibold text-brand-gold-strong hover:underline"
                >
                  ASTM A193 B7 / B8M stud bolts
                </Link>
                —while distributing factory-certified{' '}
                <Link
                  href="/products/hex-bolts-nuts/"
                  className="font-semibold text-brand-gold-strong hover:underline"
                >
                  PC 8.8 HDG structural hex bolts
                </Link>
                ,{' '}
                <Link
                  href="/products/tie-rods/"
                  className="font-semibold text-brand-gold-strong hover:underline"
                >
                  D15 / D20 formwork tie rods
                </Link>
                , and{' '}
                <Link
                  href="/products/scaffold-accessories/"
                  className="font-semibold text-brand-gold-strong hover:underline"
                >
                  base jacks, swivel couplers, formwork clamps
                </Link>
                .
              </p>
              <p className="mt-4">
                This integrated approach allows procurement heads and project engineers to consolidate their complete structural fastener schedule onto a single PO with unified quality documentation, guaranteed thread interchangeability, and coordinated site dispatch schedules.
              </p>
            </Prose>
          </div>
        </Container>
      </Section>

      {/* 3. Fastener Stack Per Project Type */}
      {/* VERIFICATION PENDING: Confirm tunnel / metro-rail scope & lifting-anchor stud scope for precast — ref: brief §10 items 1 & 2 */}
      <Section>
        <Container>
          <div className="flex items-center gap-3">
            <Layers aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Fastener stack per project type: complete bill of materials matrix
            </Heading>
          </div>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Each construction sub-sector demands distinct mechanical geometries, tensile property classes, and corrosion-protection barriers. The matrix below defines the primary fastener families, material standards, and KP supply roles across major infrastructure project typologies:
          </p>

          <div className="mt-8">
            <SpecTable
              headers={[
                'Project Typology',
                'Foundation & Anchorage Scope',
                'Bracing & Stud Scope',
                'Structural Framing & Hardware',
                'Material / Finish Default',
                'MTC & Quality Check Note',
                'KP Supply Role',
              ]}
              rows={PROJECT_STACK_ROWS}
              caption="Cross-discipline construction fastener schedule mapping project typologies to structural fastener families and manufacturing roles."
            />
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card variant="default" padding="lg">
              <Heading as="h3" variant="card">
                Pre-Engineered Buildings (PEB)
              </Heading>
              <p className="mt-2 text-xs text-ink-muted">
                Steel industrial sheds, warehouses, and logistic parks. Anchorage requires IS 5624 / ASTM F1554 foundation J-bolts set in column pedestals, paired with high-tensile purlin sag rods to AISC/IS 801, and hot-dip galvanized Class 8.8 frame bolts.
              </p>
            </Card>

            <Card variant="default" padding="lg">
              <Heading as="h3" variant="card">
                High-Rise RCC Structures
              </Heading>
              <p className="mt-2 text-xs text-ink-muted">
                Commercial office towers and residential developments. High-volume formwork staging requires cold-rolled D15/D20 tie rods, heavy wing nuts, forged swivel couplers, and cast-in elevator core anchor bolts.
              </p>
            </Card>

            <Card variant="default" padding="lg">
              <Heading as="h3" variant="card">
                Bridges &amp; Elevated Flyovers
              </Heading>
              <p className="mt-2 text-xs text-ink-muted">
                Prestressed girder and steel composite spans. Requires high-strength ASTM A193 B7 bearing pedestal studs, parapet crash barrier anchor bolts, and hot-dip galvanized Class 8.8 / 10.9 structural bolts.
              </p>
            </Card>

            <Card variant="default" padding="lg">
              <Heading as="h3" variant="card">
                Tunnels &amp; Underground Metro
              </Heading>
              <p className="mt-2 text-xs text-ink-muted">
                Underground transit and water conveyance tunnels. Heavy chloride, condensation, and diesel exhaust require austenitic SS 316 (A4-70) bracket fixings and high-load chemical anchor studs.
              </p>
            </Card>

            <Card variant="default" padding="lg">
              <Heading as="h3" variant="card">
                Precast &amp; Prefabricated Yards
              </Heading>
              <p className="mt-2 text-xs text-ink-muted">
                Off-site modular casting beds. Relies on cast-in headed foundation bolts (ASTM F1554 Gr 55), panel alignment leveling studs, and rugged reusable formwork tie rod assemblies.
              </p>
            </Card>

            <Card variant="default" padding="lg">
              <Heading as="h3" variant="card">
                STP, ETP &amp; Water Reservoirs
              </Heading>
              <p className="mt-2 text-xs text-ink-muted">
                Effluent treatment plants and water storage tanks. Severe moisture and chemical aeration demand SS 304 / SS 316 anchor bolts, water-barrier tie rods with welded center discs, and A193 B8M flange studs.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 4. Specification Schedule */}
      <Section variant="alt">
        <Container>
          <div className="flex items-center gap-3">
            <Wrench aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Construction fastener specification schedule
            </Heading>
          </div>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Detailed dimensions, manufacturing specifications, and structural functions for primary mechanical fasteners supplied across civil engineering projects:
          </p>

          <div className="mt-8">
            <SpecTable
              headers={[
                'Fastener Description',
                'Material / Property Class',
                'Typical Diameter & Length Range',
                'Governing Standards',
                'Structural Application in Construction',
              ]}
              rows={SPEC_SCHEDULE_ROWS}
            />
          </div>
        </Container>
      </Section>

      {/* 5. Standards We Quote Against */}
      <Section>
        <Container>
          <Heading as="h2" variant="section">
            Construction standards we quote against: IS, ASTM, DIN &amp; ISO
          </Heading>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Structural engineers specify exact codes to govern yield strength, proof load, thread profile, and zinc coating thickness. Every fastener quote issued by KP Fasteners references governing national and international specifications:
          </p>

          <div className="mt-8">
            <SpecTable
              headers={[
                'Standard Code',
                'Issuing Standards Body',
                'Scope & Engineering Application in Construction',
              ]}
              rows={STANDARDS_ROWS}
            />
          </div>
        </Container>
      </Section>

      {/* 6. Material Defaults per Structure Type */}
      <Section variant="alt">
        <Container>
          <div className="flex items-center gap-3">
            <Compass aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Material defaults per structure type &amp; exposure environment
            </Heading>
          </div>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Selecting the correct metallurgical grade and protective surface barrier depends directly on whether the connection is exposed to outdoor weathering, sub-grade moisture, water submersion, or aggressive chemical fumes:
          </p>

          <div className="mt-8">
            <SpecTable
              headers={[
                'Structure Typology',
                'Outdoor Structural Steel',
                'Buried / Foundation Anchors',
                'Water-Contact / High Humidity',
                'Buried + Chemical Corrosive',
              ]}
              rows={MATERIAL_DEFAULT_ROWS}
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <Link
              href="/materials/high-tensile-fasteners/"
              className="font-semibold text-brand-gold-strong hover:underline"
            >
              Explore our high-tensile grade decision guide for structural steel →
            </Link>
            <Link
              href="/materials/stainless-steel-fasteners/"
              className="font-semibold text-brand-gold-strong hover:underline"
            >
              Review SS 316 selection for tunnel and water-retaining service →
            </Link>
          </div>
        </Container>
      </Section>

      {/* 7. Structural Scope Boundary & Product Exclusions Callout */}
      {/* VERIFICATION PENDING: Confirm exclusion of post-tensioning tendons, bridge stay-cable anchorages, and soil-nailing bars — ref: brief §10 item 8 */}
      <Section>
        <Container>
          <div className="rounded-xl border border-border bg-surface p-8 shadow-card">
            <div className="flex items-start gap-4">
              <ShieldAlert aria-hidden="true" className="mt-1 h-6 w-6 shrink-0 text-brand-gold-strong" />
              <div>
                <Heading as="h2" variant="section">
                  Structural scope boundary &amp; product exclusions
                </Heading>
                <p className="mt-3 text-ink-muted">
                  To prevent misdirected tenders and ensure precise engineering alignment, KP Fasteners defines explicit scope boundaries for civil and structural projects:
                </p>
                <div className="mt-4 grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg border border-border bg-surface-alt p-5">
                    <h3 className="text-base font-semibold text-brand-steel">
                      What KP Fasteners Actively Supplies:
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm text-ink-muted">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                        Foundation bolts (J, L, headed, welded plate to IS 5624 / ASTM F1554)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                        PEB purlin sag rods and roof bracing assemblies (IS 801)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                        Structural high-tensile hex bolts &amp; nuts (Class 8.8 &amp; 10.9 HDG)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                        Formwork tie rods (D15/D20), anchor nuts &amp; scaffold couplers
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                        High-tensile flange stud bolts (ASTM A193 B7) &amp; SS 316 studs
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg border border-border bg-surface-alt p-5">
                    <h3 className="text-base font-semibold text-brand-steel">
                      Product Lines Excluded from KP Scope:
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm text-ink-muted">
                      <li className="flex items-start gap-2">
                        <span className="text-ink-muted">•</span>
                        <span><strong>Post-tensioning tendons &amp; strand wedges:</strong> We do not manufacture or supply unbonded or bonded PT wire strands, duct tubes, or prestressing anchor wedges.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-ink-muted">•</span>
                        <span><strong>Bridge stay-cable anchorages:</strong> Long-span cable-stay socketing and parallel-wire stay cables are specialized proprietary systems outside our mechanical bolt scope.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-ink-muted">•</span>
                        <span><strong>Geotechnical soil nails &amp; rock bolts:</strong> Self-drilling hollow injection anchors and rock-stabilization bar systems are not stocked or manufactured.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 8. Why Ahmedabad Base Matters & Dispatch SLAs */}
      {/* VERIFICATION PENDING: Confirm dispatch SLA table by metro-cluster pin codes — ref: brief §10 item 3 & §4.4 */}
      <Section variant="alt">
        <Container>
          <div className="flex items-center gap-3">
            <Clock aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Why an Ahmedabad manufacturing base matters for Western &amp; National infrastructure corridors
            </Heading>
          </div>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <Prose>
              <p>
                Geographic location is a critical competitive advantage when supplying high-volume fasteners to fast-track construction schedules. Situated in Ahmedabad, Gujarat, KP Fasteners operates at the heart of India’s most concentrated industrial and infrastructure belt.
              </p>
              <p className="mt-4">
                Our plant enjoys immediate access to the Delhi-Mumbai Industrial Corridor (DMIC), National Highway 48, and major international container gateways at Mundra, Kandla, and Hazira ports. This robust arterial connectivity translates directly into expedited road freight transit times across Western and Northern India, allowing contractors to avoid project delays caused by distant inland shipping bottlenecks.
              </p>
            </Prose>
            <Prose>
              <p>
                For project sites throughout Gujarat—including Sanand, Dholera SIR, Dahej PCPIR, Surat, and Rajkot—we provide same-week and 24–48 hour direct dispatches for standard stocked anchor sizes. Fabricators across Rajasthan and Maharashtra benefit from rapid 3–5 business day delivery, while our centralized logistics network maintains dependable dispatch SLAs for infrastructure clusters across South and North India.
              </p>
            </Prose>
          </div>

          <div className="mt-8">
            <SpecTable
              headers={[
                'State / Infrastructure Cluster',
                'Representative Cities & Industrial Zones',
                'Target Dispatch SLA (Standard Stocked Hardware)',
              ]}
              rows={SLA_ROWS}
              caption="Indicative road freight dispatch SLAs for standard construction fasteners. Custom foundation bolt fabrication runs carry a 7–14 business day manufacturing lead time."
            />
          </div>
        </Container>
      </Section>

      {/* 9. Quality Documentation & MTC */}
      <Section>
        <Container>
          <div className="rounded-xl border border-border bg-surface p-8 shadow-card">
            <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
              <div>
                <Heading as="h2" variant="section">
                  Quality documentation &amp; MTC verification on construction BOQs
                </Heading>
                <p className="mt-4 text-ink-muted">
                  Every consignment dispatched to a construction site is supported by comprehensive quality documentation, ensuring compliance with structural engineer specifications and third-party inspection agencies:
                </p>
                <ul className="mt-4 space-y-2 text-sm text-ink">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                    <strong>EN 10204 3.1 Mill Test Certificates:</strong> Passed through from vetted partner primary mills on distribution items and issued directly for our in-house manufactured lines.
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                    <strong>Hot-Dip Galvanizing Inspection:</strong> Zinc coating thickness measured in-house with calibrated magnetic gauges to verify conformance with ISO 1461 / ASTM A153.
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                    <strong>In-House Hardness &amp; Dimensions:</strong> Rockwell and Brinell hardness testing, thread pitch verification, and dimensional inspection on every fabrication batch.
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                    <strong>NABL Laboratory Tensile Testing:</strong> Certified third-party proof load, yield stress, and tensile failure testing from accredited partner labs upon request.
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                    <strong>Heat Number Batch Traceability:</strong> Complete heat number tracking traveling from raw wire and bar stock to the finished dispatch crate.
                  </li>
                </ul>
              </div>
              <div className="text-center lg:text-right">
                <Link
                  href="/tools/"
                  className="btn btn-secondary"
                >
                  MTC EN 10204 3.1 and NABL partner tensile testing →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 10. Project Supply Track Record */}
      {/* VERIFICATION PENDING: Confirm anonymised project references and named EPC references with written permission — ref: brief §10 items 4 & 5 */}
      {/* VERIFICATION PENDING: Confirm whether KP has approved-vendor status on any state or central agency vendor list (SOR / NIT) that we may cite — ref: brief §10 item 7 */}
      <Section variant="alt">
        <Container>
          <div className="flex items-center gap-3">
            <MapPin aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Construction project supply track record
            </Heading>
          </div>
          <div className="mt-6 rounded-lg border border-border bg-surface p-6 shadow-sm">
            <p className="text-sm leading-relaxed text-ink-muted">
              KP Fasteners routinely manufactures and supplies critical fastener schedules to major PEB fabricators, commercial building contractors, precast concrete yards, and civil infrastructure sub-contractors throughout India. Our fasteners support column foundations for expansive multi-span industrial warehouses, high-rise commercial elevator cores in Mumbai and Ahmedabad, highway sign gantries, and bridge bearing pedestals.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              In strict accordance with client non-disclosure agreements (NDAs) and commercial privacy protocols, project-specific supply schedules, tonnage records, and anonymized reference lists are made available to accredited engineering consultants and EPC procurement teams upon formal commercial enquiry.
            </p>
          </div>
        </Container>
      </Section>

      {/* 11. Cross-Link Grid */}
      <Section>
        <Container>
          <div className="flex items-center gap-3">
            <HardHat aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Related construction fastener product lines
            </Heading>
          </div>
          <p className="mt-3 max-w-3xl text-ink-muted">
            Explore dedicated technical catalogs and material selection guides for construction and infrastructure engineering:
          </p>

          <div className="mt-8">
            <RelatedProductCards
              items={FORMS.map((form) => ({
                href: form.slug,
                title: form.title,
                body: form.description,
                anchor: form.anchorText,
              }))}
              columns="4"
            />
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/products/"
              className="inline-flex items-center gap-2 font-semibold text-brand-steel hover:text-brand-gold-strong hover:underline"
            >
              Browse all industrial fastener product lines
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </Section>

      {/* 12. FAQ */}
      <Section variant="alt">
        <Container>
          <Heading as="h2" variant="section">
            Frequently asked questions about construction fasteners
          </Heading>
          <p className="mt-3 max-w-2xl text-ink-muted">
            Key engineering answers regarding construction project typologies, drawing schedules, lead times, bridge and metro scope, and quality documentation.
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

      {/* 13. CTA Band */}
      <Section>
        <Container>
          <div className="rounded-2xl border border-border bg-surface p-8 text-center shadow-card sm:p-12">
            <Heading as="h2" variant="section" className="mx-auto max-w-2xl font-heading">
              Send your project BOQ for a competitive construction fastener quote
            </Heading>
            <p className="mx-auto mt-4 max-w-2xl text-ink-muted">
              Submit your structural engineering drawings, foundation bolt schedules, or shuttering hardware lists. Our technical sales team will review dimensions, verify coating specifications, and issue an itemized commercial quotation within 24 hours.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/request-quote/?industry=construction"
                className="btn btn-primary"
              >
                <FileText aria-hidden="true" className="h-4 w-4" />
                &nbsp;Send a construction BOQ
              </Link>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
                &nbsp;WhatsApp our construction desk
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
