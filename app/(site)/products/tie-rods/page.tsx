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
  HelpCircle,
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
import { product as productSchema, faqPage, breadcrumbs as breadcrumbsSchema } from '@/lib/jsonld';
import { findRoute } from '@/data/routes';
import { company } from '@/data/company';

const PATH = '/products/tie-rods/';
const HERO_IMAGE = '/product-images/tie-rods/hero.jpg';

// Title: 57 chars (50–60 range, primary keyword first). Meta description: 156 chars (150–160 range).
const META_TITLE = 'Tie Rod Manufacturer and Formwork Supplier | D15 D20 | KP';
const META_DESCRIPTION =
  'D15 and D20 formwork tie rods with matching wing nuts, water bars, anchor plates and cones. Plain, HDG, zinc. MTC available. Request your project BOQ quote.';

export const metadata: Metadata = buildMetadata({
  path: PATH,
  title: META_TITLE,
  description: META_DESCRIPTION,
  ogImage: HERO_IMAGE,
});

const WA_PREFILL =
  'Hi KP Fasteners, I need a tie-rod quote. Dia: [D15/D20], Length: [ ], Qty: [ ], Accessories: [wing nut/anchor plate/water bar/cone], Site pin code: [ ]';
const WA_URL = 'https://wa.me/919898230448?text=' + encodeURIComponent(WA_PREFILL);
const TEL = `tel:${company.telephones[0].replace(/[^\d+]/g, '')}`;

// VERIFICATION PENDING: Confirm stocked diameter range (D15 / D20 confirmed; D22 / D24 on request) — ref: brief §10 item 2
// VERIFICATION PENDING: Confirm matching accessory inventory split (wing nuts, anchor plates, water bars, cones) — ref: brief §10 item 3
// VERIFICATION PENDING: Confirm length stocking (6m default vs cut-to-length) — ref: brief §10 item 4
// VERIFICATION PENDING: Confirm turnbuckle assemblies make-or-buy status for PEB bracing — ref: brief §10 item 5
// VERIFICATION PENDING: Confirm MOQ and lead time bands per diameter and accessory family — ref: brief §10 item 6
// VERIFICATION PENDING: Confirm IndiaMART SKU alignment for Tie Rod — ref: brief §10 item 7
// VERIFICATION PENDING: Confirm named mill partners that may be cited — ref: brief §10 item 8
// VERIFICATION PENDING: Real photograph of stocked tie-rod inventory at KP Fasteners Ahmedabad warehouse — ref: brief §6 & §10 item 9
// VERIFICATION PENDING: Confirm whether KP ever customises cone-and-plate geometry on request — ref: brief §10 item 10

const FAQS = [
  {
    question: 'Do you manufacture tie rods in-house or source them?',
    answer:
      'We distribute formwork tie rods and shuttering accessories from vetted primary partner mills as part of our wholesale distribution range — this is not one of KP Fasteners’ in-house OEM production lines. Our in-house manufacturing in Ahmedabad is dedicated to custom foundation bolts, anchor bolts, stud bolts, and PEB sag rods (see our About page). On a mixed shuttering BOQ, KP consolidates the coil-rod bundle, matching wing nuts, water bars, anchor plates, and cones onto a single purchase order with unified dispatch and MTC pass-through.',
  },
  {
    question: 'What is the difference between D15 and D20 tie rods?',
    answer:
      'D15 is the construction industry workhorse for RCC shuttering walls and columns up to approximately 3.5 m pour height, featuring a nominal 15 mm diameter with reference safe working load around 90 kN at a 2x safety factor. D20 features a 20 mm nominal diameter and is specified for deeper retaining walls, heavy civil infrastructure, and precast casting forms where concrete pressures exceed 70 kN/m² per DIN 18218, delivering a reference safe working load around 160 kN. Companion wing nuts and anchor plates are diameter-specific.',
  },
  {
    question: 'Are your tie rods compatible with PERI, Doka, or MEVA formwork systems?',
    answer:
      'Our D15 and D20 coil rods are generic standard continuous coil-threaded rods compatible with most Indian, European-style, and international modular shuttering systems. We do not make brand-level trademark compatibility claims with PERI, Doka, or MEVA proprietary accessories without verified project-specific test documentation. If your engineering tender mandates proprietary brand-certified tie accessories, our technical sales team sources and certifies them on request.',
  },
  {
    question: 'Can you supply turnbuckle tie-rod assemblies for PEB roof bracing?',
    answer:
      'Yes. Turnbuckle tie-rod assemblies featuring right-hand and left-hand metric threaded rods connected by an internal forged turnbuckle body are supplied against project drawings for PEB canopy stays and roof diagonal bracing. For standard purlin-to-purlin dead-load sag mitigation, we also supply in-house manufactured sag rods (see our Sag Rods product page) which provide a more economical solution for structural steel frameworks.',
  },
  {
    question: 'What MTC documentation and delivery lead times can I expect?',
    answer:
      'Consignments are supported by mill test certificates (MTC EN 10204 3.1) from our originating primary partner rolling mills, verifying raw material chemistry and tensile ratings. Stocked standard D15 and D20 tie rods in 6-meter bundles dispatch within 24–72 hours across Ahmedabad and Gujarat, and 3–8 days pan-India. Companion accessories (hex wing nuts, anchor plates, water bars) are stocked year-round for immediate dispatch alongside coil bundles.',
  },
];

const STANDARDS_ROWS = [
  {
    cells: [
      'EN 12812',
      'CEN (European Standard)',
      'Falsework — Performance requirements and general design for formwork assemblies',
      'Defines safety factors, structural deflection limits, and design load combinations',
    ],
  },
  {
    cells: [
      'DIN 18216',
      'DIN (German Standard)',
      'Formwork tie anchors — Anchor plates, wing nuts, and tie bars for concrete construction',
      'Governs dimensional geometry, thread pitch profile, and proof tensile testing',
    ],
  },
  {
    cells: [
      'DIN 18218',
      'DIN (German Standard)',
      'Pressure of fresh concrete on vertical formwork',
      'Specifies hydrostatic lateral pressure calculation models based on pour rate and slump',
    ],
  },
  {
    cells: [
      'IS 14687',
      'BIS (Bureau of Indian Standards)',
      'Guidelines for falsework for concrete structures',
      'Indian standard detailing permissible stresses, lateral bracing, and tie-rod spacing',
    ],
  },
  {
    cells: [
      'IS 2062 Grade E250',
      'BIS (Bureau of Indian Standards)',
      'Hot rolled medium and high tensile structural steel',
      'Specifies chemical melt limits (C ≤ 0.23%) and minimum yield strength of 250 MPa',
    ],
  },
  {
    cells: [
      'EN 10080',
      'CEN (European Standard)',
      'Steel for the reinforcement of concrete — Weldable reinforcing steel',
      'Provides metallurgical and mechanical benchmarks for cold-rolled coil-thread profiles',
    ],
  },
  {
    cells: [
      'ISO 898-1',
      'ISO (International Standard)',
      'Mechanical properties of fasteners made of carbon steel and alloy steel',
      'Governs proof load and hardness verification for companion hex nuts and anchor hardware',
    ],
  },
];

const SWL_ROWS = [
  {
    cells: [
      'D15 Formwork Tie Rod',
      '15.0 – 16.0 mm',
      'Continuous 10 mm Pitch Coil Thread',
      '~500 MPa',
      '~90 kN (~9.1 Tonnes)',
      'RCC columns, lift core shear walls, and perimeter foundation walls up to 3.5 m height',
    ],
  },
  {
    cells: [
      'D20 Formwork Tie Rod',
      '20.0 – 21.0 mm',
      'Continuous 10 mm Pitch Coil Thread',
      '~500 MPa',
      '~160 kN (~16.3 Tonnes)',
      'Deep basements, bridge piers, precast concrete box culverts, and heavy shuttering',
    ],
  },
  {
    cells: [
      'D22 / D24 Heavy Tie Rod',
      '22.0 – 24.0 mm',
      'Continuous Heavy Coil Thread',
      '~500 MPa',
      '~195 – 230 kN (~19.8 – 23.4 T)',
      'Mass concrete dams, deep diaphragm walls, and heavy industrial machine foundation forms',
    ],
  },
  {
    cells: [
      'Structural Metric Tie Rod (M16 – M48)',
      '16.0 – 48.0 mm',
      'Standard Metric Coarse Pitch (ISO 68-1)',
      '400 – 800 MPa (PC 4.6 / 8.8)',
      '45 – 350 kN (Tension Yield)',
      'PEB roof diagonal turnbuckle bracing, canopy hanger stays, and marine bulkhead ties',
    ],
  },
];

const PRESSURE_SPACING_ROWS = [
  {
    cells: [
      '2.5 m Vertical Wall',
      '2.0 m / hour',
      '~55 kN/m²',
      '500 mm Vertical × 750 mm Horizontal',
      '0.375 m²',
      'Standard residential and commercial building basement and core walls',
    ],
  },
  {
    cells: [
      '3.5 m Vertical Wall',
      '2.0 m / hour',
      '~70 kN/m²',
      '500 mm Vertical × 500 mm Horizontal',
      '0.250 m²',
      'Heavy shear walls, commercial lift shafts, and infrastructure abutments',
    ],
  },
  {
    cells: [
      '4.5 m High-Pour Wall',
      '3.0 m / hour',
      '~90 kN/m²',
      '400 mm Vertical × 400 mm Horizontal',
      '0.160 m²',
      'Rapid high-slump industrial pours, self-compacting concrete, bridge pylons',
    ],
  },
];

const ACCESSORY_KIT_ROWS = [
  {
    cells: [
      'Hex Wing Nut (D15 / D20)',
      'Malleable Cast Iron / Forged Steel',
      '~50 pcs (2 per 2 m rod run)',
      'Two-wing or three-wing ergonomic profile; 100 mm span for rapid scaffold spanner or hammer tightening',
    ],
  },
  {
    cells: [
      'Square Anchor Spreader Plate',
      'Mild Steel IS 2062 / HDG (120×120×10 mm)',
      '50 pcs',
      'Spreads tie-rod tension across timber walers or steel channel soldiers to prevent local formwork crushing',
    ],
  },
  {
    cells: [
      'Water Bar / Water Stop Barrier',
      'Ductile Cast Iron with PVC Sealing Flange',
      '25 pcs (Water-retaining walls)',
      'Positioned at the midpoint of embedded rod; stops moisture penetration through concrete along the rod track',
    ],
  },
  {
    cells: [
      'Plastic Chamfer Cones & Sleeves',
      'High-Density Polyethylene (HDPE)',
      '50 pairs (Consumable sleeves)',
      'Protects tie rod from slurry adhesion during pour; easily extracted post-cure for grout-plug patching',
    ],
  },
  {
    cells: [
      'Heavy Flat Washer (D15 / D20)',
      'Hardened Structural Carbon Steel',
      '100 pcs',
      'Provides smooth bearing interface between the rotating wing nut base and the static anchor spreader plate',
    ],
  },
];

const METRIC_SPEC_ROWS = [
  {
    cells: [
      'D15 Formwork Coil Rod',
      '15.0 – 16.0 mm',
      'Coil (10 mm Pitch)',
      'Up to 6.0 m (Cut to Spec)',
      'Mild Steel (500 MPa)',
      'Self-Colour (Plain), Oil-Dipped, Hot-Dip Galvanized',
      'DIN 18216, IS 14687',
    ],
  },
  {
    cells: [
      'D20 Formwork Coil Rod',
      '20.0 – 21.0 mm',
      'Coil (10 mm Pitch)',
      'Up to 6.0 m (Cut to Spec)',
      'High-Strength Carbon Steel',
      'Self-Colour (Plain), Hot-Dip Galvanized',
      'DIN 18216, EN 12812',
    ],
  },
  {
    cells: [
      'D22 / D24 Formwork Coil Rod',
      '22.0 – 24.0 mm',
      'Coil (10 mm Pitch)',
      'Up to 6.0 m (On-Quote)',
      'High-Strength Carbon Steel',
      'Self-Colour (Plain)',
      'DIN 18216, EN 12812',
    ],
  },
  {
    cells: [
      'Turnbuckle Tie Rod M16–M24',
      '16.0 – 24.0 mm',
      'Metric Coarse (ISO 68-1)',
      'Cut to Architectural Drawing',
      'IS 2062 E250 / Class 4.6',
      'Zinc Electroplated, Hot-Dip Galvanized',
      'IS 1367, IS 800',
    ],
  },
  {
    cells: [
      'Turnbuckle Tie Rod M27–M36',
      '27.0 – 36.0 mm',
      'Metric Coarse (ISO 68-1)',
      'Cut to Architectural Drawing',
      'IS 2062 E250 / Class 8.8',
      'Hot-Dip Galvanized, Black Oxide',
      'IS 1367, IS 800',
    ],
  },
  {
    cells: [
      'Heavy Bulkhead Tie Rod M42–M48',
      '42.0 – 48.0 mm',
      'Metric Coarse / Rolled Thread',
      'Up to 12.0 m with Couplers',
      'Property Class 8.8 / 10.9',
      'Hot-Dip Galvanized (ISO 1461)',
      'ASTM A193, ISO 898-1',
    ],
  },
];

const VARIANT_ROWS = [
  {
    cells: [
      'Formwork Coil Tie Rod D15 (Plain)',
      'Continuous Coarse Coil (10 mm pitch)',
      'Mild Steel (~500 MPa UTS)',
      'Self-Colour (Lightly Oiled)',
      '1.0 m, 2.0 m, 3.0 m, 6.0 m',
      'Standard RCC columns, beam boxes, and wall shuttering; consumable or multi-use with sleeve',
    ],
  },
  {
    cells: [
      'Formwork Coil Tie Rod D15 (HDG)',
      'Continuous Coarse Coil (10 mm pitch)',
      'Mild Steel (~500 MPa UTS)',
      'Hot-Dip Galvanized (ISO 1461)',
      '1.0 m – 6.0 m',
      'Coastal construction, bridge piers, marine splash-zones, and long-stay external formwork',
    ],
  },
  {
    cells: [
      'Formwork Coil Tie Rod D20 (Plain)',
      'Continuous Heavy Coil (10 mm pitch)',
      'High-Strength Carbon Steel',
      'Self-Colour (Plain)',
      '1.0 m, 2.0 m, 3.0 m, 6.0 m',
      'Heavy civil infrastructure, high-pour retaining walls, tunnel liners, and precast casting yards',
    ],
  },
  {
    cells: [
      'Water-Stop Tie Rod Assembly',
      'D15 Coil with Centered Sealing Disc',
      'Cast Steel Core + PVC Sealing Lip',
      'Self-Colour / Bitumen Primer',
      '0.5 m – 3.0 m (Cut to Wall Width)',
      'Water retaining structures, underground metro boxes, wastewater treatment tanks, and swimming pools',
    ],
  },
  {
    cells: [
      'PEB Structural Turnbuckle Tie Rod',
      'Metric Left/Right Threaded Ends',
      'IS 2062 Grade E250 / PC 4.6',
      'Zinc Electroplated (IS 1573)',
      'Fabricated to Drawing',
      'PEB roof diagonal bracing, canopy wind-trusses, and industrial warehouse lateral sway stabilization',
    ],
  },
  {
    cells: [
      'Marine & Civil Bulkhead Anchor Tie Rod',
      'M24 – M48 Rolled Metric Thread',
      'Property Class 8.8 High-Tensile Steel',
      'Hot-Dip Galvanized (ISO 1461)',
      'Up to 12.0 m with Turnbuckles',
      'Sheet-pile dock retaining walls, cofferdams, marine jetties, and deep basement tie-back anchors',
    ],
  },
];

const DECISION_ROWS = [
  {
    cells: [
      'RCC Wall & Column Shuttering (Up to 3.5 m)',
      'D15 Coil Tie Rod + Wing Nut',
      'Mild Steel (500 MPa)',
      'Self-Colour / Oiled',
      'Continuous self-cleaning coil thread sheds slurry easily; wing nuts spin on in seconds with zero thread binding',
    ],
  },
  {
    cells: [
      'Water-Retaining Walls & Basement Pours',
      'D15 Water-Bar Tie Rod Assembly',
      'Mild Steel + Cast Barrier',
      'Self-Colour with PVC Seal',
      'Integral center water-stop disc prevents capillary water seepage along the embedded rod after concrete cure',
    ],
  },
  {
    cells: [
      'Heavy Retaining Walls & Infrastructure Pours',
      'D20 Heavy Coil Tie Rod',
      'High-Strength Carbon Steel',
      'Self-Colour / HDG',
      'Reference SWL of 160 kN resists severe hydrostatic pressures generated by high-pour-rate concrete pumps',
    ],
  },
  {
    cells: [
      'PEB Structural Roof & Wall Sway Bracing',
      'Turnbuckle Tie Rod Assembly (Metric)',
      'IS 2062 E250 / PC 4.6',
      'Zinc Plated / HDG',
      'Opposing left/right threaded ends allow turnbuckle rotation to pull diagonal framework into strict plumb',
    ],
  },
  {
    cells: [
      'PEB Roof Purlin & Girt Dead-Load Sag Mitigation',
      'PEB Sag Rods (Threaded Ends + Jam Nuts)',
      'IS 2062 Grade E250',
      'Zinc Plated / HDG',
      'Engineered specifically to support purlin channel dead-load; redirect to our dedicated Sag Rods page',
    ],
  },
  {
    cells: [
      'Structural Steel Column Base Anchoring',
      'Cast-in Foundation Bolts (L/J/Plate)',
      'IS 2062 / Property Class 8.8',
      'HDG / Black',
      'Embedded into reinforced concrete footings to resist uplift and overturning; redirect to Foundation Bolts',
    ],
  },
];

const APPLICATIONS = [
  {
    icon: Building2,
    title: 'RCC High-Rise Shuttering & Shear Walls',
    body:
      'D15 continuous coil tie rods paired with malleable iron wing nuts and 120 mm spreader plates clamp formwork shutters across building elevator cores, column boxes, and shear walls against lateral concrete pressure.',
    chips: ['D15 Coil Rod', 'EN 12812', 'Wing Nuts', 'Shear Walls'],
  },
  {
    icon: Factory,
    title: 'Heavy Civil Infrastructure & Bridge Piers',
    body:
      'D20 high-load coil rods provide the 160 kN safe working load needed for deep flyover abutments, bridge pylons, retaining walls, and hydro-power culverts where pour rates create extreme dynamic concrete head.',
    chips: ['D20 Heavy Rod', 'DIN 18218', 'Bridge Pylons', 'High Pour Rate'],
  },
  {
    icon: Layers,
    title: 'Water-Retaining & Subterranean Concrete',
    body:
      'Water-stop tie rod assemblies containing central cast barriers eliminate capillary groundwater seepage paths through basement perimeter walls, sewage treatment digesters, and commercial underground pump rooms.',
    chips: ['Water-Stop Barrier', 'Cast Core', 'Basement Retaining', 'Zero Seepage'],
  },
  {
    icon: Wrench,
    title: 'Precast Concrete Manufacturing Yards',
    body:
      'Precast casting yards employ reusable D15 and D20 tie rods across modular steel moulds for precast box culverts, retaining wall panels, and prestressed girder shuttering requiring repeatable rapid assembly.',
    chips: ['Precast Moulds', 'Continuous Thread', 'Modular Shuttering', 'Reusable'],
  },
  {
    icon: Zap,
    title: 'PEB Structural Bracing & Turnbuckle Stays',
    body:
      'Fabricated metric tie-rod assemblies equipped with central forged turnbuckles provide diagonal tension bracing across industrial PEB portal frames, canopy cantilevers, and structural crane gantry towers.',
    chips: ['Turnbuckle Assembly', 'IS 2062 E250', 'Tension Bracing', 'PEB Framework'],
  },
  {
    icon: Boxes,
    title: 'Scaffolding Falsework & Staging Assemblies',
    body:
      'Formwork tie rods integrate directly with scaffold wall clamps, push-pull props, and heavy staging towers, securing vertical shuttering panels to exterior tubular scaffold staging.',
    chips: ['Falsework Staging', 'Scaffold Clamps', 'Push-Pull Props', 'Safety Ties'],
  },
];

const RELATED_PRODUCTS = [
  {
    title: 'PEB Sag Rods',
    href: '/products/sag-rods/',
    anchor: 'PEB sag rods and bracing',
    body:
      'In-house manufactured tension sag rods with single-end or double-end threading for secondary structural steel purlin and girt alignment.',
  },
  {
    title: 'Foundation Bolts',
    href: '/products/foundation-bolts/',
    anchor: 'foundation bolts for the column bases',
    body:
      'Heavy L-type, J-type, and plate-welded anchor bolts manufactured in Ahmedabad for PEB column base plate foundation anchoring.',
  },
  {
    title: 'Scaffold Accessories',
    href: '/products/scaffold-accessories/',
    anchor: 'scaffold base jacks and formwork clamps',
    body:
      'Formwork clamps, swivel couplers, hollow base jacks, and u-head jacks supporting complete concrete staging installations.',
  },
  {
    title: 'Construction & Infrastructure Fasteners',
    href: '/industries/construction-infrastructure/',
    anchor: 'RCC and PEB construction fasteners',
    body:
      'Comprehensive fastener catalog for EPC contractors, covering bridge bearings, PEB frameworks, and structural heavy connections.',
  },
  {
    title: 'Custom Fasteners',
    href: '/products/custom-fasteners/',
    anchor: 'custom drawing-based tie rods',
    body:
      'Specialized tension rods, oversized marine bulkhead tie-backs, and bespoke threaded components machined to structural engineering drawings.',
  },
];

export default function Page() {
  const route = findRoute(PATH);
  const trail = route?.breadcrumbTrail ?? [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products/' },
    { label: 'Tie Rods', href: PATH },
  ];

  return (
    <>
      <JsonLd
        data={productSchema({
          name: 'Formwork Tie Rods and Shuttering Accessories',
          description:
            'D15 and D20 formwork tie rods with companion wing nuts, anchor spreader plates, water bars, and cones. Sourced through vetted primary rolling mills with EN 10204 3.1 MTC pass-through for RCC high-rise, civil infrastructure, and precast applications.',
          category: 'Formwork tie rods and matching accessories',
          material: 'Mild Steel (~500 MPa UTS, IS 2062 Grade E250 / EN 10080)',
          image: HERO_IMAGE,
          path: PATH,
          classification: 'trading',
        })}
      />
      <JsonLd data={breadcrumbsSchema(trail)} />
      <JsonLd data={faqPage(FAQS)} />

      {/* 1. Hero */}
      {/* VERIFICATION PENDING: Real photograph of stocked tie-rod inventory at KP Fasteners Ahmedabad warehouse — ref: brief §6 & §10 item 9 */}
      <Section>
        <Container>
          <Breadcrumbs trail={trail} />
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <p className="badge badge-steel">Distribution Range · Vetted Partner Mills · Ahmedabad</p>
              <Heading as="h1" variant="hero" className="mt-4 font-heading">
                <span className="text-gold-gradient">Tie Rod Manufacturer</span> &amp; Formwork Shuttering Hardware
              </Heading>
              <hr className="rule-metal mt-5 w-40" aria-hidden="true" />
              <p className="mt-6 max-w-2xl text-lg text-ink-muted">
                D15 and D20 continuous coil-threaded formwork tie rods supplied alongside matching malleable wing nuts, anchor spreader plates, water-stop assemblies, and chamfer cones. Sourced through vetted primary mills in Ahmedabad with complete EN 10204 3.1 MTC pass-through.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/request-quote/?product=tie-rods"
                  className="btn btn-primary"
                >
                  <FileText aria-hidden="true" className="h-4 w-4" />
                  Request a Tie-Rod BOQ Quote
                </Link>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <MessageCircle aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                  WhatsApp Formwork Desk
                </a>
                <a href={TEL} className="btn btn-secondary">
                  <Phone aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                  +91 98982 30448
                </a>
              </div>
            </div>
            <div>
              <Card variant="metallic" padding="lg" className="overflow-hidden">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-brand-steel-soft/40">
                  <Image
                    src={HERO_IMAGE}
                    alt="KP Fasteners formwork tie rods inventory — D15 and D20 coil rods, matching hex wing nuts, and anchor spreader plates"
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
              Formwork tie rods and shuttering accessories — sourced from vetted partner mills; mill test certificates (EN 10204 3.1) and batch traceability provided on request. Custom structural tie rods available via our custom manufacturing line.
            </ClassificationBanner>
          </div>
        </Container>
      </Section>

      {/* 2. Overview & Disambiguation Callout */}
      <Section variant="alt">
        <Container>
          <div className="flex items-center gap-3">
            <Layers aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Overview: formwork tie rods, shuttering mechanics &amp; supply model
            </Heading>
          </div>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <Prose>
              <p>
                In reinforced cement concrete (RCC) construction, the formwork tie rod is the critical tensile element that holds opposing timber, steel, or aluminum shuttering panels together during high-pressure concrete pours. As fresh concrete is placed, hydrostatic and dynamic pressures push outward against the form faces in accordance with DIN 18218 standards. Tie rods pass through the wall envelope, bearing the entire bursting force so wall thickness remains exact without panel blowout.
              </p>
              <p className="mt-4">
                The primary formwork tie rod is characterized by a continuous, coarse, cold-rolled coil thread (10 mm pitch on D15 and D20). This self-cleaning pitch allows heavy cast-iron wing nuts to spin on and off effortlessly, even when the rod is caked with cured cement slurry or jobsite dirt. We distribute standard D15 and D20 coil rods in standard 6.0-meter lengths or precision cut-to-length bundles, accompanied by complete hardware kits including forged wing nuts, 120 mm anchor spreader plates, PVC chamfer cones, and cast water-stop barriers.
              </p>
            </Prose>
            <Prose>
              <p>
                KP Fasteners supplies formwork tie rods through vetted, audit-verified partner primary rolling mills as part of our comprehensive civil hardware distribution portfolio. While our in-house manufacturing lines in our{' '}
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
                  foundation bolts for the column bases
                </Link>
                , stud bolts, and structural PEB sag rods, our wholesale distribution network enables civil contractors to consolidate their formwork hardware.
              </p>
              <p className="mt-4">
                Civil contractors and shuttering subcontractors can consolidate their coil tie rods, wing nuts, water stoppers, and{' '}
                <Link
                  href="/products/scaffold-accessories/"
                  className="font-semibold text-brand-gold-strong hover:underline"
                >
                  scaffold base jacks and formwork clamps
                </Link>{' '}
                onto a single purchase order, backed by verified EN 10204 3.1 mill test certificates.
              </p>
            </Prose>
          </div>

          {/* REQUIRED Disambiguation Callout */}
          <div className="mt-10">
            <Card variant="trust" padding="lg">
              <div className="flex items-start gap-3">
                <HelpCircle className="mt-1 h-6 w-6 shrink-0 text-brand-gold-strong" aria-hidden="true" />
                <div>
                  <Heading as="h3" variant="card" className="text-brand-steel">
                    Technical Disambiguation: Formwork Tie Rod vs. PEB Sag Rod vs. Continuous Stud Bolt
                  </Heading>
                  <p className="mt-2 text-sm text-ink-muted">
                    Industrial procurement terms frequently conflate threaded tension rods across civil and structural steel disciplines. Review the distinct applications below to ensure you order the exact engineered component:
                  </p>
                  <div className="mt-4 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-lg border border-border bg-surface p-3.5">
                      <p className="text-xs font-semibold text-brand-gold-strong uppercase tracking-wider">
                        Formwork Tie Rod (This Page)
                      </p>
                      <p className="mt-1.5 text-xs text-ink">
                        <strong>Coarse coil thread (D15/D20).</strong> Temporary tensile rod clamped with wing nuts to resist fresh concrete hydrostatic pressure in RCC shuttering per DIN 18216 / EN 12812. Traded distribution line.
                      </p>
                    </div>
                    <div className="rounded-lg border border-border bg-surface p-3.5">
                      <p className="text-xs font-semibold text-brand-gold-strong uppercase tracking-wider">
                        PEB Sag Rod (Structural)
                      </p>
                      <p className="mt-1.5 text-xs text-ink">
                        <strong>Metric threaded ends (M12–M20).</strong> Permanent structural tension rod installed between PEB roof purlins or wall girts to resist lateral sag and dead loads. <strong>Manufactured in-house by KP Fasteners.</strong>
                      </p>
                      <Link
                        href="/products/sag-rods/"
                        className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-brand-gold-strong hover:underline"
                      >
                        Explore PEB sag rods and bracing →
                      </Link>
                    </div>
                    <div className="rounded-lg border border-border bg-surface p-3.5">
                      <p className="text-xs font-semibold text-brand-gold-strong uppercase tracking-wider">
                        Continuous Stud Bolt
                      </p>
                      <p className="mt-1.5 text-xs text-ink">
                        <strong>Continuous metric/UN thread.</strong> Permanent alloy or stainless rod (ASTM A193 B7 / B8M) clamped with hex nuts for piping flanges and machinery mounts. <strong>Manufactured in-house.</strong>
                      </p>
                      <Link
                        href="/products/stud-bolts/"
                        className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-brand-gold-strong hover:underline"
                      >
                        Explore all-thread stud bolts →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 3. Tie-Rod Families & Hardware */}
      {/* VERIFICATION PENDING: Confirm stocked diameter range (D15 / D20 confirmed; D22 / D24 on request) — ref: brief §10 item 2 */}
      {/* VERIFICATION PENDING: Confirm matching accessory inventory split (wing nuts, anchor plates, water bars, cones) — ref: brief §10 item 3 */}
      <Section>
        <Container>
          <div className="flex items-center gap-3">
            <Boxes aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Tie-rod product families &amp; shuttering accessory hardware
            </Heading>
          </div>
          <p className="mt-4 max-w-3xl text-ink-muted">
            From standard high-rise shear wall shuttering to specialized water-retaining structures and structural sway bracing, we supply complete tie-rod hardware systems.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card variant="default" padding="lg">
              <span className="badge badge-gold">D15 · Nominal 15 mm</span>
              <Heading as="h3" variant="card" className="mt-3">
                D15 Formwork Coil Tie Rod
              </Heading>
              <p className="mt-3 text-sm text-ink-muted">
                The standard workhorse of high-rise building construction and commercial shuttering. Features continuous 10 mm pitch cold-rolled coil threads (outer diameter ~15.5 mm) delivering a reference safe working load of approximately 90 kN. Compatible with all standard D15 wing nuts and anchor plates.
              </p>
              <ul className="mt-4 space-y-1 text-xs text-ink-muted">
                <li>• <strong>Outer Diameter:</strong> 15.0 – 16.0 mm</li>
                <li>• <strong>Core Diameter:</strong> ~13.0 mm</li>
                <li>• <strong>Standard Length:</strong> 6.0 m bundles (cut to size)</li>
              </ul>
            </Card>

            <Card variant="default" padding="lg">
              <span className="badge badge-gold">D20 · Nominal 20 mm</span>
              <Heading as="h3" variant="card" className="mt-3">
                D20 Heavy Formwork Coil Rod
              </Heading>
              <p className="mt-3 text-sm text-ink-muted">
                Engineered for heavy civil engineering, massive foundation pours, bridge piers, and precast concrete manufacturing. Delivers a reference safe working load of approximately 160 kN, resisting extreme dynamic concrete heads without formwork bulging or deflection.
              </p>
              <ul className="mt-4 space-y-1 text-xs text-ink-muted">
                <li>• <strong>Outer Diameter:</strong> 20.0 – 21.0 mm</li>
                <li>• <strong>Core Diameter:</strong> ~17.5 mm</li>
                <li>• <strong>Standard Length:</strong> 6.0 m bundles</li>
              </ul>
            </Card>

            <Card variant="default" padding="lg">
              <span className="badge badge-steel">D22 / D24 · Heavy Civil</span>
              <Heading as="h3" variant="card" className="mt-3">
                D22 / D24 Heavy Infrastructure Tie Rod
              </Heading>
              <p className="mt-3 text-sm text-ink-muted">
                Specialized high-capacity tie rods specified on confirmed project engineering quotes for deep diaphragm walls, hydro-electric power dams, marine docks, and heavy industrial machine foundation blocks requiring safe working loads exceeding 195 kN.
              </p>
              <ul className="mt-4 space-y-1 text-xs text-ink-muted">
                <li>• <strong>Outer Diameter:</strong> 22.0 – 24.0 mm</li>
                <li>• <strong>Application:</strong> Deep civil infrastructure</li>
                <li>• <strong>Availability:</strong> Project-specific quote</li>
              </ul>
            </Card>

            <Card variant="default" padding="lg">
              <span className="badge badge-gold">Malleable Cast Iron</span>
              <Heading as="h3" variant="card" className="mt-3">
                Hex Wing Nuts (D15 / D20)
              </Heading>
              <p className="mt-3 text-sm text-ink-muted">
                Manufactured from high-strength malleable cast iron or forged steel. Features dual wide wings spanning 100 mm for manual spin-on tightening and a wide hexagonal center boss compatible with standard scaffold wrenches or scaffolding podger spanners.
              </p>
              <ul className="mt-4 space-y-1 text-xs text-ink-muted">
                <li>• <strong>Drive:</strong> Manual wings + Hex center boss</li>
                <li>• <strong>Base:</strong> Integrated flat bearing face</li>
                <li>• <strong>Finish:</strong> Zinc electroplated or self-colour</li>
              </ul>
            </Card>

            <Card variant="default" padding="lg">
              <span className="badge badge-gold">120×120×10 mm</span>
              <Heading as="h3" variant="card" className="mt-3">
                Anchor Spreader Plates
              </Heading>
              <p className="mt-3 text-sm text-ink-muted">
                Heavy structural steel load-distribution plates (standard 120×120 mm with 10 mm thickness) that bridge across double steel channel soldiers or timber walers, spreading the concentrated tension load across the formwork face to prevent timber crushing.
              </p>
              <ul className="mt-4 space-y-1 text-xs text-ink-muted">
                <li>• <strong>Dimensions:</strong> 120×120 mm (Custom on quote)</li>
                <li>• <strong>Hole Diameter:</strong> 20 mm central hole</li>
                <li>• <strong>Finish:</strong> Hot-dip galvanized or self-colour</li>
              </ul>
            </Card>

            <Card variant="default" padding="lg">
              <span className="badge badge-steel">Water-Barrier Disc</span>
              <Heading as="h3" variant="card" className="mt-3">
                Water-Stop Assemblies &amp; Cones
              </Heading>
              <p className="mt-3 text-sm text-ink-muted">
                For basement retaining walls and liquid-retaining tanks where tie rods penetrate the concrete thickness. Incorporates a cast iron central water barrier disc that blocks moisture capillary tracking, paired with reusable plastic cones for clean de-moulding.
              </p>
              <ul className="mt-4 space-y-1 text-xs text-ink-muted">
                <li>• <strong>Type:</strong> Cast iron seal with rubber flange</li>
                <li>• <strong>Cones:</strong> Reusable 22 mm HDPE plastic cones</li>
                <li>• <strong>Service:</strong> Water treatment, basements, culverts</li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 4. Standards & Mechanical Specifications */}
      <Section variant="alt">
        <Container>
          <div className="flex items-center gap-3">
            <Gauge aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Engineering standards cross-reference &amp; safe working loads (SWL)
            </Heading>
          </div>
          <p className="mt-4 max-w-3xl text-ink-muted">
            Shuttering tie systems operate under strict European and Indian falsework safety standards. Review the standard cross-reference and published mechanical load capacity data below.
          </p>

          <div className="mt-8">
            <Heading as="h3" variant="card">
              Standards Harmonization: Falsework &amp; Concrete Formwork
            </Heading>
            <div className="mt-4">
              <SpecTable
                headers={['Governing Standard', 'Publishing Body', 'Technical Scope', 'Engineering Implementation']}
                rows={STANDARDS_ROWS}
                caption="Table 1: International and Indian standards governing formwork tie rods, shuttering accessories, and fresh concrete pressure."
              />
            </div>
          </div>

          <div className="mt-12">
            <Heading as="h3" variant="card">
              Safe Working Load (SWL) &amp; Ultimate Tensile Capacity
            </Heading>
            <p className="mt-2 text-sm text-ink-muted">
              Reference tensile values summarized from international civil formwork engineering standards. The design safe working load incorporates a standard 2:1 factor of safety against ultimate tensile strength.
            </p>
            <div className="mt-4">
              <SpecTable
                headers={[
                  'Rod Type',
                  'Nominal Diameter',
                  'Thread Geometry',
                  'Typical UTS (MPa)',
                  'Reference SWL (2x Factor)',
                  'Recommended Formwork Service',
                ]}
                rows={SWL_ROWS}
                caption="Table 2: Mechanical load capacities and safe working loads for metric coil formwork tie rods."
              />
            </div>
            <p className="mt-3 text-xs text-ink-muted">
              <strong>Source Footnote:</strong> Safe working load values are referenced from publicly cited DOKA, PERI, and MEVA technical product datasheets and standard EN 12812 falsework calculations. KP Fasteners’ certified lot-specific mechanical ratings are provided on the accompanying mill test certificate (MTC EN 10204 3.1) with each shipment.
            </p>
          </div>
        </Container>
      </Section>

      {/* 5. Concrete Pressure vs Spacing Guide */}
      <Section>
        <Container>
          <div className="flex items-center gap-3">
            <Compass aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Fresh concrete pressure calculation &amp; tie-rod spacing guide
            </Heading>
          </div>
          <p className="mt-4 max-w-3xl text-ink-muted">
            In accordance with DIN 18218 and IS 14687, the maximum lateral pressure exerted by fresh concrete on vertical shuttering depends on pour height, vertical concrete rise rate (m/hr), concrete temperature, and slump consistency.
          </p>

          <div className="mt-8">
            <SpecTable
              headers={[
                'Formwork Height',
                'Vertical Pour Rate',
                'Max Concrete Pressure (DIN 18218)',
                'Illustrative D15 Spacing Grid',
                'Tributary Area / Rod',
                'Typical Structural Application',
              ]}
              rows={PRESSURE_SPACING_ROWS}
              caption="Table 3: Illustrative formwork lateral pressure and tie rod spacing grids based on DIN 18218 vertical pour parameters."
            />
          </div>

          <div className="mt-6 rounded-lg border border-border bg-surface p-4 text-xs text-ink-muted">
            <p>
              <strong>Engineering Notice:</strong> Spacing calculations above are illustrative benchmarks for standard normal-weight concrete at 20°C. The shuttering designer or structural falsework engineer on record must calculate the specific tie rod spacing pattern based on actual concrete mix design, self-compacting concrete (SCC) fluidity, and vibration method. KP Fasteners supplies certified hardware, not formwork structural designs.
            </p>
          </div>

          <div className="mt-12">
            <Heading as="h3" variant="card">
              Indicative Shuttering Hardware Kit per 100 Meters of D15 Rod
            </Heading>
            <p className="mt-2 text-sm text-ink-muted">
              For project estimating and bill of materials (BOQ) preparation, the following accessory quantities are typically paired per 100 linear meters of D15 coil rod based on average 2.0-meter wall pass-through lengths:
            </p>
            <div className="mt-4">
              <SpecTable
                headers={['Hardware Component', 'Material & Specification', 'Estimated Qty / 100m Rod', 'Functional Role in Shuttering Assembly']}
                rows={ACCESSORY_KIT_ROWS}
                caption="Table 4: Standard companion accessory kit schedule per 100 linear meters of D15 formwork tie rod."
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* 6. Metric Size Schedule (SpecTable) */}
      {/* VERIFICATION PENDING: Confirm length stocking (6m default vs cut-to-length) — ref: brief §10 item 4 */}
      <Section variant="alt">
        <Container>
          <div className="flex items-center gap-3">
            <Compass aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Dimensional schedule &amp; product specifications (D15 to D24 &amp; M16 to M48)
            </Heading>
          </div>
          <p className="mt-4 max-w-3xl text-ink-muted">
            Standard stocking inventory covers nominal diameters from D15 to D24 coil rods and M16 to M48 metric tension rods. Coil rods are stocked in 6.0 m bundles with automated cut-to-length service available.
          </p>

          <div className="mt-8">
            <SpecTable
              headers={[
                'Product Designation',
                'Nominal Outer Dia',
                'Thread Pitch Profile',
                'Available Length Range',
                'Steel Grade / Class',
                'Standard Surface Coatings',
                'Governing Standard',
              ]}
              rows={METRIC_SPEC_ROWS}
              caption="Table 5: Dimensional and metallurgical schedule across civil formwork and structural tie rod ranges."
            />
          </div>
        </Container>
      </Section>

      {/* 7. Variant Matrix */}
      <Section>
        <Container>
          <div className="flex items-center gap-3">
            <Layers aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Tie rod variant matrix &amp; surface protective treatments
            </Heading>
          </div>
          <p className="mt-4 max-w-3xl text-ink-muted">
            Overview of standard SKU combinations detailing nominal diameter, thread geometry, material metallurgy, surface protection, and primary civil engineering use cases.
          </p>

          <div className="mt-8">
            <SpecTable
              headers={[
                'Product Variant',
                'Thread Form',
                'Steel Material Grade',
                'Surface Protection',
                'Standard Supply Lengths',
                'Target Civil / Structural Application',
              ]}
              rows={VARIANT_ROWS}
              caption="Table 6: Complete variant matrix for formwork tie rods, water-stop assemblies, and structural tension stays."
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
              Engineering decision framework: selecting rod profile &amp; application
            </Heading>
          </div>
          <p className="mt-4 max-w-3xl text-ink-muted">
            Use this selection framework to match your project’s structural or concrete boundary conditions to the optimal tie rod system.
          </p>

          <div className="mt-8">
            <SpecTable
              headers={[
                'Structural Application Context',
                'Recommended Tie System',
                'Material Grade',
                'Protective Coating',
                'Technical Justification & Operational Advantage',
              ]}
              rows={DECISION_ROWS}
              caption="Table 7: Decision guide for civil shuttering, water-retaining structures, and structural tension bracing."
            />
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Card variant="default" padding="md">
              <Heading as="h3" variant="card" className="text-brand-steel">
                Formwork System Compatibility
              </Heading>
              <p className="mt-2 text-xs text-ink-muted">
                Our D15 and D20 coil rods are compatible with standard Indian, European, and international modular shuttering frames. We supply generic high-grade coil rods; specific proprietary trademark accessories are sourced and certified upon project request.
              </p>
            </Card>
            <Card variant="default" padding="md">
              <Heading as="h3" variant="card" className="text-brand-steel">
                Waterproofing &amp; Retaining Pours
              </Heading>
              <p className="mt-2 text-xs text-ink-muted">
                Never utilize plain through-rods without water-stops on underground water tanks or basements. Always specify <strong>water-stop tie rod assemblies</strong> with central cast barrier discs to eliminate capillary leakage channels through the set concrete.
              </p>
            </Card>
            <Card variant="default" padding="md">
              <Heading as="h3" variant="card" className="text-brand-steel">
                Structural PEB Bracing Stays
              </Heading>
              <p className="mt-2 text-xs text-ink-muted">
                For structural portal frame tension bracing, specify <strong>turnbuckle tie-rod assemblies</strong> with right/left threaded ends to pull steel columns into plumb. For light purlin alignment, redirect to our manufactured{' '}
                <Link href="/products/sag-rods/" className="font-semibold text-brand-gold-strong hover:underline">
                  PEB sag rods
                </Link>.
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
              Industrial applications: high-rise RCC, infrastructure &amp; PEB bracing
            </Heading>
          </div>
          <p className="mt-4 max-w-3xl text-ink-muted">
            From commercial high-rise tower cores to heavy bridge piers and precast yards, tie rods provide essential tensile resistance across modern civil construction.
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
            <span>Related infrastructure disciplines:</span>
            <Link
              href="/industries/construction-infrastructure/"
              className="font-semibold text-brand-gold-strong hover:underline"
            >
              RCC and PEB construction fasteners →
            </Link>
            <Link
              href="/products/scaffold-accessories/"
              className="font-semibold text-brand-gold-strong hover:underline"
            >
              scaffold base jacks and formwork clamps →
            </Link>
            <Link
              href="/products/foundation-bolts/"
              className="font-semibold text-brand-gold-strong hover:underline"
            >
              foundation bolts for the column bases →
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
                In high-rise civil formwork, tie rod failure leads directly to catastrophic formwork blowout, wet concrete spill hazards, and severe structural rework. KP Fasteners applies strict metallurgical and dimensional quality protocols to every dispatched lot:
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                <li>
                  • <strong>Originating Mill Test Certificates (MTC):</strong> Sourced shipments are accompanied by EN 10204 3.1 inspection certificates detailing base steel melt chemistry (carbon, manganese, silicon) and mechanical yield ratings.
                </li>
                <li>
                  • <strong>Tensile Proof Testing:</strong> Sample coil rods undergo axial pull-out and tensile proof testing in accordance with DIN 18216 to verify that ultimate tensile load meets or exceeds 500 MPa.
                </li>
                <li>
                  • <strong>Coil Thread Pitch &amp; Fit Inspection:</strong> Continuous coil threads are verified using GO/NO-GO thread calipers to ensure free, unbinding rotation of companion malleable wing nuts.
                </li>
                <li>
                  • <strong>Coating Thickness Verification:</strong> For hot-dip galvanized tie rods and anchor plates, calibrated magnetic dry-film gauges verify compliance with ISO 1461 and IS 4759 coating thickness standards.
                </li>
              </ul>
            </Prose>
            <Prose>
              <p>
                For major infrastructure tenders, metro rail projects, and industrial EPC contracts requiring independent third-party witness testing, we coordinate tensile proof testing and chemical re-verification through accredited NABL partner testing laboratories in Ahmedabad.
              </p>
              <p className="mt-4">
                To examine our complete testing equipment roster, sample test certificates, and quality manual, visit our dedicated{' '}
                <Link
                  href="/quality/"
                  className="font-semibold text-brand-gold-strong hover:underline"
                >
                  MTC EN 10204 3.1 pass-through
                </Link>{' '}
                quality verification portal.
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
              Related structural &amp; civil engineering fasteners
            </Heading>
          </div>
          <p className="mt-4 max-w-3xl text-ink-muted">
            Consolidate your civil hardware procurement by pairing formwork tie rods with companion scaffold staging jacks, foundation anchors, and structural PEB sag rods.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {RELATED_PRODUCTS.map((prod, idx) => (
              <Card key={idx} variant="default" padding="lg">
                <Heading as="h3" variant="card">
                  {prod.title}
                </Heading>
                <p className="mt-3 text-sm text-ink-muted">{prod.body}</p>
                <Link
                  href={prod.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-gold-strong hover:underline"
                >
                  View {prod.anchor}
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 12. FAQ Accordion */}
      <Section variant="alt">
        <Container>
          <div className="flex items-center gap-3">
            <FileText aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Frequently asked questions: formwork tie rods &amp; shuttering systems
            </Heading>
          </div>
          <p className="mt-4 max-w-3xl text-ink-muted">
            Technical answers regarding tie-rod diameter selection, concrete pressure resistance, formwork system compatibility, and delivery logistics.
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
              Request a tie-rod BOQ quote &amp; shuttering package pricing
            </Heading>
            <p className="mx-auto mt-4 max-w-2xl text-ink-muted">
              Submit your civil shuttering bill of materials, project drawings, or wholesale tie-rod requirement. Our Ahmedabad engineering sales team responds with competitive bundled pricing, batch test documentation, and delivery timelines within 24 business hours.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/request-quote/?product=tie-rods"
                className="btn btn-primary"
              >
                <FileText aria-hidden="true" className="h-4 w-4" />
                Submit a Tie-Rod BOQ
              </Link>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <MessageCircle aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                WhatsApp Formwork Team
              </a>
              <a href={TEL} className="btn btn-secondary">
                <Phone aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                Call +91 98982 30448
              </a>
            </div>
            <p className="mt-6 text-xs text-ink-muted">
              Standard stocked diameters (D15 and D20) in 6-meter bundles dispatch within 24–72 hours ex-Ahmedabad. MTC EN 10204 3.1 provided with dispatch invoice.
            </p>
          </Card>
        </Container>
      </Section>
    </>
  );
}
