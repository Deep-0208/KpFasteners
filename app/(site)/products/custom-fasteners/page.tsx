import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  MessageCircle,
  FileText,
  ArrowRight,
  ShieldCheck,
  Building2,
  Compass,
  Gauge,
  Boxes,
  Lock,
  UploadCloud,
  CheckCircle2,
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

const PATH = '/products/custom-fasteners/';
const HERO_IMAGE = '/product-images/custom/hero.jpg';

// Title: 55 chars (50–60 range, primary keyword first). Meta description: 159 chars (150–160 range).
const META_TITLE = 'Custom Fasteners Manufacturer and Sourcing Partner | KP';
const META_DESCRIPTION =
  'Custom fastener manufacturing and sourcing to print. Send PDF or CAD drawings for quote on tolerances, materials, finishes and lead times. Upload your drawing.';

export const metadata: Metadata = buildMetadata({
  path: PATH,
  title: META_TITLE,
  description: META_DESCRIPTION,
  ogImage: HERO_IMAGE,
});

const WA_PREFILL =
  'Hi KP Fasteners, I have a custom fastener drawing to quote. Material: [ ], Grade: [ ], Finish: [ ], Qty: [ ], Lead time: [ ], NDA needed? [Y/N]';
const WA_URL = 'https://wa.me/919898230448?text=' + encodeURIComponent(WA_PREFILL);
const TEL = `tel:${company.telephones[0].replace(/[^\d+]/g, '')}`;

// VERIFICATION PENDING: Confirm sourcing partner network geography scope (Rajkot / Ludhiana / Taiwan / China) — ref: brief §10 item 1
// VERIFICATION PENDING: Confirm MOQ default (500 kg per SKU default vs lower feasibility threshold) — ref: brief §10 item 2
// VERIFICATION PENDING: Confirm accepted drawing formats (PDF, DWG, DXF, STEP) — ref: brief §10 item 3
// VERIFICATION PENDING: Confirm mutual NDA template handling — ref: brief §10 item 4
// VERIFICATION PENDING: Confirm routine tolerance envelope (IS 1367 Grade A/B/C vs CNC micro-tolerances) — ref: brief §10 item 5
// VERIFICATION PENDING: Confirm in-network lead times (10-21 days) vs new die tooling (4-8 weeks) — ref: brief §10 item 6
// VERIFICATION PENDING: Confirm IP and sample batch retention period — ref: brief §10 item 7
// VERIFICATION PENDING: Confirm sector exclusions confirmation (aerospace, nuclear, medical) — ref: brief §10 item 8
// VERIFICATION PENDING: Real photograph of drawing review table at Ahmedabad facility — ref: brief §6 & §10 item 9
// VERIFICATION PENDING: Confirm tool/die ownership policy for repeat custom orders — ref: brief §10 item 10

const FAQS = [
  {
    question: 'Do you make custom fasteners in-house or source them through partners?',
    answer:
      'KP Fasteners operates a transparent dual-capability model: straightforward threaded components, foundation anchor bolts, double-ended studs, sag rods, and non-standard length turned parts within our machine envelope are manufactured directly in our Ahmedabad plant. Complex multi-station cold-headed specials, non-standard forged bolt geometries, and specialized non-ferrous alloys outside our machine window are sourced through vetted primary partner mills with full EN 10204 3.1 MTC traceability and our dispatch lot verification.',
  },
  {
    question: 'What drawing formats and engineering details are required to quote?',
    answer:
      'We accept 2D drawings in PDF, DWG, or DXF formats, as well as 3D solid models in STEP or IGES format. To provide a firm commercial quotation, your drawing should state nominal thread dimensions and pitch, tolerance class (e.g. 6g / 6H), base material specification and heat-treat hardness, surface finish coating, part markings, batch quantity, and delivery site pin code.',
  },
  {
    question: 'What is your minimum order quantity (MOQ) and production lead time?',
    answer:
      'For custom threaded studs and foundation anchor rods produced in-house, minimum orders start from flexible project batches (50–100 pieces). For partner-sourced cold-headed or forged specials requiring dedicated tooling setup, the standard MOQ is 500 kg per SKU. Typical lead time is 10–21 business days for in-network tooling recipes and 4–8 weeks when dedicated forging dies or punch tooling must be fabricated.',
  },
  {
    question: 'How do you protect customer intellectual property and drawing confidentiality?',
    answer:
      'All customer-supplied engineering prints, CAD geometry, and proprietary application data are treated as strictly confidential. On request, we execute a mutual Non-Disclosure Agreement (NDA) prior to receiving drawings. Customer drawings are never shared beyond the specific technical production personnel and dedicated partner mills quoting the physical part, and client prints remain 100% the property of the purchasing customer.',
  },
  {
    question: 'Will I receive mill test certification (MTC) and dimensional inspection reports?',
    answer:
      'Yes. Every custom fastener production lot is accompanied by a certified inspection report including dimensional verification, surface coating thickness, core hardness (Rockwell HRC or Brinell HBW), and an EN 10204 3.1 Mill Test Certificate verifying the ladle melt chemical analysis and mechanical proof loads. Third-party NABL laboratory witness testing is available on request.',
  },
];

const CAPABILITY_ROWS = [
  {
    cells: [
      'Diameter Range',
      'M12 to M72 (Metric) · 1/2" to 3" (Imperial)',
      'M3 to M100+ (Metric) · #4 to 4" (Imperial)',
      'Thread rolling up to M64; cut threading up to M100',
    ],
  },
  {
    cells: [
      'Length Envelope',
      '100 mm to 6,000 mm (Continuous)',
      '5 mm to 12,000 mm (Cold-headed or forged)',
      'Automated band-saw cutting to ±1.0 mm tolerance',
    ],
  },
  {
    cells: [
      'Head Geometries',
      'Threaded rods, studs, bent hooks, L/J anchors, welded plates',
      'Hex, socket cap, countersunk, square, oval, round, flange, collar',
      'Forged heads, cold-formed collars, and CNC turned heads',
    ],
  },
  {
    cells: [
      'Thread Profiles',
      'Metric coarse/fine, UNC, UNF, BSW, left-hand, trapezoidal',
      'Special pitches, multi-start, coil thread, Acme, buttress',
      'Roll-threaded for enhanced fatigue grain alignment',
    ],
  },
  {
    cells: [
      'Material Scope',
      'IS 2062 E250, EN8 (4.6/4.8), EN19 (8.8), 42CrMo4 (10.9), SS 304/316',
      'Alloy steel 12.9, brass, bronze, aluminium 6061, duplex 2205',
      'Full ladle chemical melt analysis on all raw bar stock',
    ],
  },
  {
    cells: [
      'Surface Finishes',
      'Self-colour (oiled), hot-dip galvanized (ISO 1461), zinc plating',
      'Geomet, Dacromet, zinc-nickel, PTFE, phosphate, black oxide',
      'Salt spray testing up to 1,500 hours via accredited platers',
    ],
  },
  {
    cells: [
      'Batch MOQ',
      'Flexible short-run (50 – 100 pcs for custom studs/anchors)',
      '500 kg per SKU default for cold-headed / forged specials',
      'Below-MOQ feasibility batches quoted with tooling surcharge',
    ],
  },
  {
    cells: [
      'Production Lead Time',
      '24 – 72 hours for urgent studs; 5 – 10 days for anchor assemblies',
      '10 – 21 days for in-network; 4 – 8 weeks for new die tooling',
      'Staged delivery schedules aligned to site construction milestones',
    ],
  },
];

const DRAWING_CHECKLIST_ROWS = [
  {
    cells: [
      '2D Technical Drawing / 3D CAD Model',
      'PDF, DWG, DXF, or STEP / IGES format',
      'Provides definitive dimensional geometry, geometric tolerances (GD&T), and critical features',
    ],
  },
  {
    cells: [
      'Thread Specification & Tolerance Class',
      'e.g. M16 × 1.5 - 6g (Fine) or 3/4"-10 UNC 2A',
      'Determines thread rolling die selection, pitch diameter limits, and thread gauge inspection criteria',
    ],
  },
  {
    cells: [
      'Material Grade & Base Standard',
      'e.g. AISI 4140, EN19, IS 2062 E250, SS 316L',
      'Governs raw billet procurement, chemical melt analysis, and forgeability parameters',
    ],
  },
  {
    cells: [
      'Mechanical Property Class & Hardness',
      'e.g. Class 8.8, 10.9, 12.9, or 28–34 HRC',
      'Defines the heat-treatment recipe (quench and temper cycle) to ensure required yield and proof stress',
    ],
  },
  {
    cells: [
      'Surface Protection & Plating Specification',
      'e.g. HDG (86 µm / ASTM A153), Zinc-Nickel, Geomet 500',
      'Specifies coating thickness, thread undercut allowance for galvanizing, and salt spray resistance hours',
    ],
  },
  {
    cells: [
      'Head & Underhead Fillet Geometry',
      'e.g. Head diameter, height, radius r_min, drive type',
      'Ensures proper bearing area distribution and prevents stress concentration cracking under the head',
    ],
  },
  {
    cells: [
      'Marking & Lot Identification Requirements',
      'e.g. Manufacturer code, property class stamp, customer logo',
      'Determines whether custom embossing dies, head stamps, or secondary laser engraving are required',
    ],
  },
  {
    cells: [
      'Committed Order Quantity & Call-Off Plan',
      'e.g. 500 kg one-off batch or 2,000 pcs monthly blanket',
      'Enables accurate raw material yield costing and amortization of specialized tooling charges',
    ],
  },
  {
    cells: [
      'Target Delivery Schedule & Site Pin Code',
      'e.g. Dispatch required within 15 working days to Mundra, Gujarat',
      'Allows dispatch route planning, transport carrier booking, and milestone-based project staging',
    ],
  },
  {
    cells: [
      'Quality Inspection & MTC Requirement',
      'e.g. EN 10204 3.1 MTC, third-party NABL witness, NDA',
      'Establishes test protocols, physical lab testing, and confidentiality agreements before contract signing',
    ],
  },
];

const STANDARDS_ROWS = [
  {
    cells: [
      'DIN Standards',
      'DIN 912, 931, 933, 976, 7991, 6914, 6921',
      'German Institute for Standardization',
      'Widely cited for European machinery imports, CNC machine tools, and industrial equipment',
    ],
  },
  {
    cells: [
      'ISO Standards',
      'ISO 4014, 4017, 4762, 10642, 898-1, 3506-1',
      'International Organization for Standardization',
      'Global harmonized standards governing metric fastener dimensions, mechanical properties, and stainless grades',
    ],
  },
  {
    cells: [
      'IS Standards',
      'IS 1363, IS 1364, IS 1367, IS 2062, IS 5624',
      'Bureau of Indian Standards (BIS)',
      'Indian domestic standards mandatory for public sector infrastructure, power generation, and railway projects',
    ],
  },
  {
    cells: [
      'ASTM / ASME Standards',
      'ASTM A193, A194, A325, A490, A153, ASME B18.2.1',
      'American Society for Testing and Materials',
      'Required for oil & gas refinery skids, ASME pressure vessel flanges, and structural steel connections',
    ],
  },
  {
    cells: [
      'BS Standards',
      'BS 3692, BS 4190, BS 4395',
      'British Standards Institution',
      'Referenced across legacy heavy engineering projects, Commonwealth export contracts, and marine assemblies',
    ],
  },
  {
    cells: [
      'JIS Standards',
      'JIS B 1180, JIS B 1186, JIS B 1176',
      'Japanese Industrial Standards Committee',
      'Common across Japanese automotive plant installations, precision robotics, and machine tooling in India',
    ],
  },
  {
    cells: [
      'Customer-Print Specials',
      'Proprietary OEM Engineering Drawings & CAD Models',
      'Bespoke Customer Engineering Specifications',
      'Custom step-down shanks, proprietary collars, non-standard threads, and reverse-engineered retrofit parts',
    ],
  },
];

const DECISION_ROWS = [
  {
    cells: [
      'Non-standard pitch, stepped shank, or custom head',
      'Custom Fastener to Drawing',
      'Sized to Exact CAD Print',
      'No compromise on mechanical joint integrity; tooling matches proprietary engineering design',
    ],
  },
  {
    cells: [
      'Standard structural steel framing connection',
      'Standard Hex Bolts & Nuts',
      'DIN 931 / 933 (Class 8.8 / 10.9)',
      'Off-the-shelf availability; lowest per-unit cost; explore our dedicated Hex Bolts & Nuts line',
    ],
  },
  {
    cells: [
      'PEB column base anchoring into concrete footings',
      'Custom Foundation Bolts',
      'IS 2062 / Class 8.8 (In-House OEM)',
      'Manufactured in our Ahmedabad plant with custom bend radii, sleeves, and anchor plates',
    ],
  },
  {
    cells: [
      'Process piping flange joint under ASME code',
      'Engineered Stud Bolts',
      'ASTM A193 B7 / B8M (In-House OEM)',
      'Manufactured to exact overall length with 2H nuts; explore our specialized Stud Bolts line',
    ],
  },
  {
    cells: [
      'PEB roof purlin alignment & sag prevention',
      'Structural Sag Rods',
      'IS 2062 E250 (In-House OEM)',
      'Standardized tension rods with threaded ends; explore our dedicated PEB Sag Rods line',
    ],
  },
  {
    cells: [
      'High-chloride marine or corrosive chemical service',
      'Custom Stainless / Duplex Fasteners',
      'SS 316L / Duplex 2205',
      'Custom machined from certified bar stock to eliminate crevice corrosion in specialized media',
    ],
  },
];

const MOQ_PRICING_ROWS = [
  {
    cells: [
      'In-Network Recipe (Common Alloy & Finish)',
      '500 kg per SKU',
      'Quoted per kg',
      '10 – 21 business days',
      'Utilizes existing tooling and active partner rolling lines',
    ],
  },
  {
    cells: [
      'New Forging Die / Custom Tooling Required',
      '500 kg + Tooling Cost',
      'One-time die charge + per kg',
      '4 – 8 weeks',
      'Includes die fabrication, trial runs, and sample piece approval',
    ],
  },
  {
    cells: [
      'Specialty Non-Ferrous (Brass, Bronze, Duplex)',
      '500 kg or Batch Value',
      'Quoted per piece / per kg',
      '6 – 12 weeks',
      'Subject to certified raw ingot availability and specialized machining',
    ],
  },
  {
    cells: [
      'Below-MOQ Prototype Feasibility Batch',
      'Case-by-Case Evaluation',
      'Per-piece premium',
      '2 – 6 weeks',
      'Evaluated individually for design prototyping and pre-production validation',
    ],
  },
];

const INDUSTRIES = [
  {
    title: 'Solar Energy Infrastructure',
    href: '/industries/solar-mounting-fasteners/',
    anchor: 'custom solar mounting fasteners',
    body:
      'Custom T-head bolts, proprietary aluminum rail clamp studs, and specialized anti-theft solar hardware engineered to withstand severe wind uplift in utility ground-mount and rooftop solar arrays.',
    chips: ['T-Head Bolts', 'SS 304 / 316', 'Custom Clamps', 'Anti-Theft'],
  },
  {
    title: 'Construction & Civil Infrastructure',
    href: '/industries/construction-infrastructure/',
    anchor: 'construction and infrastructure fasteners',
    body:
      'Non-standard heavy foundation anchors, oversized bridge bearing bolts, tunnel segment bolts, and bespoke anchor plates designed to civil engineering CAD blueprints.',
    chips: ['Anchor Plates', 'IS 2062', 'HDG Coating', 'Bridge Bearings'],
  },
  {
    title: 'Automotive & Heavy Engineering',
    href: '/industries/automotive-heavy-engineering/',
    anchor: 'automotive and heavy machinery fasteners',
    body:
      'Stepped suspension pins, high-tensile transmission studs, custom wheel studs, and engine mount bolts manufactured to tight dimensional runout and high fatigue cycle tolerances.',
    chips: ['Class 10.9 / 12.9', 'Stepped Studs', 'High Fatigue', 'Zinc-Nickel'],
  },
  {
    title: 'Heavy Industrial Machinery',
    href: '/industries/automotive-heavy-engineering/',
    anchor: 'machinery and equipment fasteners',
    body:
      'Custom shoulder guide bolts, hydraulic manifold fasteners, tool-and-die tie rods, and reverse-engineered legacy replacement bolts for imported industrial machinery.',
    chips: ['Ground Shoulders', 'Hydraulic Manifolds', 'Tool & Die', 'Special Pitch'],
  },
];

const RELATED_PRODUCTS = [
  {
    title: 'Foundation Bolts',
    href: '/products/foundation-bolts/',
    anchor: 'OEM foundation-bolt catalogue',
    body:
      'In-house manufactured L-type, J-type, and welded plate foundation anchor bolts for heavy structural steel and pre-engineered building base columns.',
  },
  {
    title: 'Stud Bolts',
    href: '/products/stud-bolts/',
    anchor: 'OEM stud-bolt catalogue',
    body:
      'High-pressure continuous threaded studs and double-ended engineering stud bolts manufactured in Ahmedabad to ASTM A193 B7 and stainless steel grades.',
  },
  {
    title: 'PEB Sag Rods',
    href: '/products/sag-rods/',
    anchor: 'OEM-manufactured sag rods',
    body:
      'Manufactured tension sag rods with single or double threaded ends designed to support purlin alignment in pre-engineered steel buildings.',
  },
  {
    title: 'High-Tensile Fasteners',
    href: '/materials/high-tensile-fasteners/',
    anchor: 'high-tensile grade decision guide',
    body:
      'Comprehensive material guide for Property Classes 8.8, 10.9, and 12.9 quenched and tempered carbon and alloy steel fasteners.',
  },
  {
    title: 'Stainless Steel Fasteners',
    href: '/materials/stainless-steel-fasteners/',
    anchor: 'SS 304 / 316 / 316L for your service',
    body:
      'Corrosion-resistant austenitic and marine-grade stainless steel fasteners in Grades 304, 316, and 316L for chemical and coastal environments.',
  },
];

export default function Page() {
  const route = findRoute(PATH);
  const trail = route?.breadcrumbTrail ?? [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products/' },
    { label: 'Custom Fasteners', href: PATH },
  ];

  return (
    <>
      <JsonLd
        data={productSchema({
          name: 'Custom Fasteners and Drawing-Based Sourcing',
          description:
            'Custom drawing-based fasteners manufactured in-house and sourced through vetted partner mills. Send PDF, DWG, or STEP drawings for competitive quotations on non-standard bolts, specialized studs, and precision-machined hardware.',
          category: 'Custom (drawing-based) fasteners',
          material: 'Carbon Steel (Class 4.6 to 12.9), Alloy Steel (42CrMo4), Stainless Steel (SS 304, SS 316), Brass, Duplex',
          image: HERO_IMAGE,
          path: PATH,
          classification: 'ambiguous',
        })}
      />
      <JsonLd data={breadcrumbsSchema(trail)} />
      <JsonLd data={faqPage(FAQS)} />

      {/* 1. Hero */}
      {/* VERIFICATION PENDING: Real photograph of drawing review table at Ahmedabad facility — ref: brief §6 & §10 item 9 */}
      <Section>
        <Container>
          <Breadcrumbs trail={trail} />
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <p className="badge badge-gold">OEM Manufacture &amp; Partner Sourcing · Drawing-Based Supply · Ahmedabad</p>
              <Heading as="h1" variant="hero" className="mt-4 font-heading">
                <span className="text-gold-gradient">Custom Fasteners Manufacturer</span> &amp; Precision Sourcing Partner
              </Heading>
              <hr className="rule-metal mt-5 w-40" aria-hidden="true" />
              <p className="mt-6 max-w-2xl text-lg text-ink-muted">
                Precision non-standard bolts, specialized studs, drawing-machined hardware, and customer-print fasteners. Straightforward threaded components manufactured in our Ahmedabad plant; complex cold-headed specials and specialty alloys sourced through vetted partner mills with complete EN 10204 3.1 MTC traceability.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/request-quote/?product=custom-fasteners"
                  className="btn btn-primary"
                >
                  <UploadCloud aria-hidden="true" className="h-4 w-4" />
                  Upload Drawing for Quote
                </Link>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <MessageCircle aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                  WhatsApp Drawing Desk
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
                    alt="KP Fasteners custom drawing-based fastener manufacturing and sourcing — precision engineering blueprints, machined sample parts, and specialized industrial hardware"
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
              Manufactured &amp; supplied — SKU-specific. Drawing-based parts within our capability window are made in-house; others brokered through vetted mills with full traceability.
            </ClassificationBanner>
          </div>
        </Container>
      </Section>

      {/* 2. Capability Window Block (REQUIRED) */}
      {/* VERIFICATION PENDING: Confirm sourcing partner network geography scope (Rajkot / Ludhiana / Taiwan / China) — ref: brief §10 item 1 */}
      {/* VERIFICATION PENDING: Confirm routine tolerance envelope (IS 1367 Grade A/B/C vs CNC micro-tolerances) — ref: brief §10 item 5 */}
      <Section variant="alt">
        <Container>
          <div className="flex items-center gap-3">
            <Gauge aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Engineering capability window: in-house manufacturing vs. partner network
            </Heading>
          </div>
          <p className="mt-4 max-w-3xl text-ink-muted">
            We provide complete clarity on our manufacturing boundaries. Fasteners within our Ahmedabad plant’s machinery envelope are produced in-house, while items requiring specialized multi-station cold heading or rare alloys are handled through our audited partner network.
          </p>

          <div className="mt-8">
            <SpecTable
              headers={[
                'Technical Parameter',
                'In-House Ahmedabad Plant Capability',
                'Vetted Partner Sourcing Network',
                'Engineering & Quality Controls',
              ]}
              rows={CAPABILITY_ROWS}
              caption="Table 1: Operational capability envelope across in-house production lines and audited partner mills."
            />
          </div>
        </Container>
      </Section>

      {/* 3. What We Make vs What We Broker Split */}
      <Section>
        <Container>
          <div className="flex items-center gap-3">
            <Boxes aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Transparent demarcation: what we manufacture vs. what we source
            </Heading>
          </div>
          <p className="mt-4 max-w-3xl text-ink-muted">
            Honest engineering partnerships require unequivocal transparency. Review how our supply routing operates across different custom fastener categories:
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <Card variant="trust" padding="lg" className="flex h-full flex-col">
              <div className="flex items-center gap-2">
                <span className="badge badge-gold">In-House Manufacturing</span>
              </div>
              <Heading as="h3" variant="card" className="mt-3 text-brand-steel">
                Manufactured at Our Ahmedabad Facility
              </Heading>
              <p className="mt-3 text-sm text-ink-muted">
                Our plant on Odhav Road houses heavy cold-sawing, automated thread rolling, CNC lathe turning, drilling, and custom bending equipment. We manufacture:
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold-strong" />
                  <span><strong>Custom Foundation &amp; Anchor Bolts:</strong> L-type, J-type, plate-welded, and sleeve anchors up to M72 diameter.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold-strong" />
                  <span><strong>Continuous &amp; Double-Ended Studs:</strong> Custom lengths cut, chamfered, and roll-threaded in carbon, alloy, and stainless steels.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold-strong" />
                  <span><strong>PEB Sag Rods &amp; Structural Tension Stays:</strong> Single-end and double-end threaded rods with companion washers and nuts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold-strong" />
                  <span><strong>Turned &amp; Machined Specials:</strong> Non-standard spacer sleeves, stepped studs, and custom threaded dowels machined from bar stock.</span>
                </li>
              </ul>
              <div className="mt-auto pt-6">
                <Link
                  href="/about/"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-gold-strong hover:underline"
                >
                  Inspect our Ahmedabad facility &amp; equipment →
                </Link>
              </div>
            </Card>

            <Card variant="default" padding="lg" className="flex h-full flex-col">
              <div className="flex items-center gap-2">
                <span className="badge badge-steel">Vetted Partner Sourcing</span>
              </div>
              <Heading as="h3" variant="card" className="mt-3 text-brand-steel">
                Sourced Through Audited Primary Mills
              </Heading>
              <p className="mt-3 text-sm text-ink-muted">
                For custom fasteners requiring multi-die high-speed cold heading or specialized metallurgy outside our machine envelope, we partner with audited mills:
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-steel" />
                  <span><strong>Cold-Headed Specials:</strong> Complex custom bolt heads, indented hex heads, flange profiles, and multi-diameter shanks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-steel" />
                  <span><strong>Specialty Alloy &amp; Non-Ferrous Fasteners:</strong> Custom brass, bronze, aluminum 6061-T6, and duplex 2205 fasteners.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-steel" />
                  <span><strong>High-Tensile Cold-Forged Bolts:</strong> High-volume custom Property Class 10.9 and 12.9 bolts requiring continuous wire-drawn forging.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-steel" />
                  <span><strong>Advanced Surface Treatments:</strong> Automotive-grade Geomet, Dacromet, PTFE coatings, and specialized zinc-nickel plating.</span>
                </li>
              </ul>
              <div className="mt-auto pt-6">
                <Link
                  href="/tools/"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-gold-strong hover:underline"
                >
                  Review our partner audit &amp; MTC verification protocol →
                </Link>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 4. 5-Step Process Block */}
      {/* VERIFICATION PENDING: Confirm in-network lead times (10-21 days) vs new die tooling (4-8 weeks) — ref: brief §10 item 6 */}
      <Section variant="alt">
        <Container>
          <div className="flex items-center gap-3">
            <Compass aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              From print to dock: our 5-step drawing-to-delivery process
            </Heading>
          </div>
          <p className="mt-4 max-w-3xl text-ink-muted">
            Our structured procurement workflow ensures design accuracy, tooling feasibility, and metallurgical compliance at every phase:
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            <Card variant="default" padding="md" className="flex flex-col">
              <span className="text-2xl font-bold font-mono text-brand-gold-strong">01</span>
              <Heading as="h3" variant="card" className="mt-2 text-base">
                Drawing Submission
              </Heading>
              <p className="mt-2 text-xs text-ink-muted">
                Customer submits 2D prints (PDF/DWG) or 3D CAD files (STEP) detailing tolerances, material grade, hardness, and required batch quantity.
              </p>
            </Card>

            <Card variant="default" padding="md" className="flex flex-col">
              <span className="text-2xl font-bold font-mono text-brand-gold-strong">02</span>
              <Heading as="h3" variant="card" className="mt-2 text-base">
                Engineering Review
              </Heading>
              <p className="mt-2 text-xs text-ink-muted">
                Our technical team evaluates manufacturability, confirms in-house vs partner routing, tooling costs, and issues a firm commercial quote within 24 hours.
              </p>
            </Card>

            <Card variant="default" padding="md" className="flex flex-col">
              <span className="text-2xl font-bold font-mono text-brand-gold-strong">03</span>
              <Heading as="h3" variant="card" className="mt-2 text-base">
                Tooling &amp; Sampling
              </Heading>
              <p className="mt-2 text-xs text-ink-muted">
                For custom forged heads, dies and punches are fabricated. First-article prototype samples are inspected and submitted for customer dimensional sign-off.
              </p>
            </Card>

            <Card variant="default" padding="md" className="flex flex-col">
              <span className="text-2xl font-bold font-mono text-brand-gold-strong">04</span>
              <Heading as="h3" variant="card" className="mt-2 text-base">
                Batch Production
              </Heading>
              <p className="mt-2 text-xs text-ink-muted">
                Full-run manufacturing begins: cold heading or precision machining, thread rolling, controlled heat treatment, and surface protective plating.
              </p>
            </Card>

            <Card variant="default" padding="md" className="flex flex-col">
              <span className="text-2xl font-bold font-mono text-brand-gold-strong">05</span>
              <Heading as="h3" variant="card" className="mt-2 text-base">
                Quality &amp; Dispatch
              </Heading>
              <p className="mt-2 text-xs text-ink-muted">
                Final dimensional inspection, hardness checks, EN 10204 3.1 MTC verification, lot-tagged crate packaging, and doorstep logistics dispatch.
              </p>
            </Card>
          </div>

          <div className="mt-10">
            <Heading as="h3" variant="card">
              MOQ, Commercial Structure &amp; Production Lead Times
            </Heading>
            <div className="mt-4">
              <SpecTable
                headers={[
                  'Production Scenario',
                  'Minimum Order Quantity (MOQ)',
                  'Commercial Pricing Basis',
                  'Standard Delivery Lead Time',
                  'Operational Considerations',
                ]}
                rows={MOQ_PRICING_ROWS}
                caption="Table 2: Commercial terms, minimum order thresholds, and lead times across custom fastener production scenarios."
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. Standards We Deliver To */}
      <Section>
        <Container>
          <div className="flex items-center gap-3">
            <ShieldCheck aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              International &amp; domestic standards we deliver to
            </Heading>
          </div>
          <p className="mt-4 max-w-3xl text-ink-muted">
            Whether your equipment drawings originate from European, American, Japanese, or Indian engineering consultancies, our production and sourcing network adheres strictly to published national and international specifications:
          </p>

          <div className="mt-8">
            <SpecTable
              headers={[
                'Standard Organization',
                'Referenced Standard Codes',
                'Governing Body',
                'Engineering Application & Industry Alignment',
              ]}
              rows={STANDARDS_ROWS}
              caption="Table 3: Harmonized manufacturing and material standards supported across our custom fastener portfolio."
            />
          </div>
        </Container>
      </Section>

      {/* 6. Drawing Checklist */}
      {/* VERIFICATION PENDING: Confirm accepted drawing formats (PDF, DWG, DXF, STEP) — ref: brief §10 item 3 */}
      <Section variant="alt">
        <Container>
          <div className="flex items-center gap-3">
            <FileText aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              What to include in your drawing: engineering checklist
            </Heading>
          </div>
          <p className="mt-4 max-w-3xl text-ink-muted">
            Providing complete engineering callouts on your initial drawing upload prevents ambiguous assumptions and reduces quote turn-around time by more than 50%:
          </p>

          <div className="mt-8">
            <SpecTable
              headers={['Drawing Information Parameter', 'Recommended Engineering Callout', 'Functional Importance to Manufacturing']}
              rows={DRAWING_CHECKLIST_ROWS}
              caption="Table 4: Essential technical checklist for submitting custom fastener prints and CAD models."
            />
          </div>
        </Container>
      </Section>

      {/* 7. Decision Block: Custom vs. Standard */}
      <Section>
        <Container>
          <div className="flex items-center gap-3">
            <Compass aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Engineering decision framework: when to choose custom vs. standard
            </Heading>
          </div>
          <p className="mt-4 max-w-3xl text-ink-muted">
            Specifying custom hardware introduces tooling and setup costs. Review this decision guide to verify whether your mechanical application truly demands a custom drawing part or can utilize standard catalog inventory:
          </p>

          <div className="mt-8">
            <SpecTable
              headers={[
                'Joint Design Boundary Condition',
                'Recommended Fastener Strategy',
                'Applicable Grade / Standard',
                'Commercial & Functional Rationale',
              ]}
              rows={DECISION_ROWS}
              caption="Table 5: Decision matrix comparing bespoke custom fasteners against standardized commercial alternatives."
            />
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Card variant="default" padding="md">
              <Heading as="h3" variant="card" className="text-brand-steel">
                Standard Hex Hardware
              </Heading>
              <p className="mt-2 text-xs text-ink-muted">
                If standard thread diameters and lengths suffice, ordering catalog{' '}
                <Link href="/products/hex-bolts-nuts/" className="font-semibold text-brand-gold-strong hover:underline">
                  hex bolts and nuts
                </Link>{' '}
                eliminates tooling lead times and provides immediate dispatch.
              </p>
            </Card>
            <Card variant="default" padding="md">
              <Heading as="h3" variant="card" className="text-brand-steel">
                Piping Stud Bolts
              </Heading>
              <p className="mt-2 text-xs text-ink-muted">
                For high-pressure flange joints, standard{' '}
                <Link href="/products/stud-bolts/" className="font-semibold text-brand-gold-strong hover:underline">
                  ASTM A193 B7 stud bolts
                </Link>{' '}
                manufactured in our Ahmedabad plant provide certified ASME code compliance.
              </p>
            </Card>
            <Card variant="default" padding="md">
              <Heading as="h3" variant="card" className="text-brand-steel">
                Foundation Anchoring
              </Heading>
              <p className="mt-2 text-xs text-ink-muted">
                For structural column footings, our in-house{' '}
                <Link href="/products/foundation-bolts/" className="font-semibold text-brand-gold-strong hover:underline">
                  foundation bolts
                </Link>{' '}
                can be fabricated to customized embedment lengths without expensive tooling.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 8. Industry Fit Grid */}
      <Section variant="alt">
        <Container>
          <div className="flex items-center gap-3">
            <Building2 aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Target industrial sectors &amp; custom engineering applications
            </Heading>
          </div>
          <p className="mt-4 max-w-3xl text-ink-muted">
            We deliver drawing-machined hardware and specialized custom fasteners across India’s primary industrial manufacturing and infrastructure sectors:
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.map((ind, idx) => (
              <Card key={idx} variant="default" padding="lg" className="flex flex-col">
                <Heading as="h3" variant="card">
                  {ind.title}
                </Heading>
                <p className="mt-3 text-sm text-ink-muted">{ind.body}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {ind.chips.map((chip, cIdx) => (
                    <span
                      key={cIdx}
                      className="rounded bg-surface-alt px-2 py-0.5 text-[11px] font-mono font-medium text-ink-muted"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-6">
                  <Link
                    href={ind.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-gold-strong hover:underline"
                  >
                    View {ind.anchor} →
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 9. Quality & MTC Protocol */}
      <Section>
        <Container>
          <div className="flex items-center gap-3">
            <ShieldCheck aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Quality verification, MTC EN 10204 3.1 &amp; laboratory testing
            </Heading>
          </div>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <Prose>
              <p>
                Non-standard fasteners carry zero margin for dimensional or metallurgical error. A drawing-based part that fails to fit or fractures under load halts assembly lines and causes severe downtime. KP Fasteners applies rigorous multi-stage inspection to all custom consignments:
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                <li>
                  • <strong>Dimensional &amp; Thread Inspection:</strong> Calibrated vernier calipers, micrometers, optical profile projectors, and thread ring/plug gauges verify dimensional features against drawing limits.
                </li>
                <li>
                  • <strong>Hardness &amp; Microstructure Testing:</strong> Core and surface hardness are measured via Rockwell (HRC) and Vickers (HV) testers in our Ahmedabad quality lab to confirm proper quench and temper cycles.
                </li>
                <li>
                  • <strong>Pass-Through Mill Test Certificates (MTC):</strong> Sourced lots include certified EN 10204 3.1 certificates detailing ladle melt chemistry and tensile yield strength, with our dispatch lot code cross-referenced.
                </li>
                <li>
                  • <strong>Coating Thickness &amp; Salt Spray:</strong> Magnetic eddy-current dry film thickness gauges verify plating depths, with optional ASTM B117 neutral salt spray testing conducted via accredited NABL labs.
                </li>
              </ul>
            </Prose>
            <Prose>
              <p>
                For aerospace-adjacent tooling, pressure vessel fabrications, and critical heavy machinery orders, we facilitate independent third-party inspection (TPI) through agencies such as Bureau Veritas, DNV, SGS, or TUV Rheinland.
              </p>
              <p className="mt-4">
                To examine our complete testing equipment inventory, sample test certificates, and quality manual, visit our dedicated{' '}
                <Link
                  href="/tools/"
                  className="font-semibold text-brand-gold-strong hover:underline"
                >
                  MTC EN 10204 3.1 and NABL partner testing
                </Link>{' '}
                portal.
              </p>
            </Prose>
          </div>
        </Container>
      </Section>

      {/* 10. Confidentiality & IP Protocol */}
      {/* VERIFICATION PENDING: Confirm mutual NDA template handling — ref: brief §10 item 4 */}
      {/* VERIFICATION PENDING: Confirm IP and sample batch retention period — ref: brief §10 item 7 */}
      {/* VERIFICATION PENDING: Confirm sector exclusions confirmation (aerospace, nuclear, medical) — ref: brief §10 item 8 */}
      <Section variant="alt">
        <Container>
          <div className="flex items-center gap-3">
            <Lock aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Intellectual property protection &amp; drawing confidentiality
            </Heading>
          </div>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <Card variant="trust" padding="lg">
              <Heading as="h3" variant="card" className="text-brand-steel">
                Strict Drawing Confidentiality &amp; Mutual NDA
              </Heading>
              <p className="mt-3 text-sm text-ink-muted">
                We understand that custom fastener drawings contain proprietary engineering geometry, patented thread combinations, and trade secrets. We maintain strict IP safeguards:
              </p>
              <ul className="mt-4 space-y-2 text-xs text-ink">
                <li>• <strong>Mutual NDA Available:</strong> We execute mutual non-disclosure agreements prior to reviewing proprietary drawings upon customer request.</li>
                <li>• <strong>Controlled Sourcing Dissemination:</strong> Drawings are shared only with the dedicated technical quoting team and the audited production mill fabricating the part.</li>
                <li>• <strong>No Public Portfolio Usage:</strong> Customer drawings, CAD files, and client part numbers are never published on our website or marketing literature without written authorization.</li>
                <li>• <strong>Legal Protections:</strong> All customer-submitted drawings remain the 100% intellectual property of the purchasing client under our{' '}
                  <Link href="/terms/" className="font-semibold text-brand-gold-strong hover:underline">
                    terms of supply (IP and confidentiality)
                  </Link>.
                </li>
              </ul>
            </Card>

            <Card variant="default" padding="lg">
              <Heading as="h3" variant="card" className="text-brand-steel">
                Transparent Boundary Exclusions (When We Decline Work)
              </Heading>
              <p className="mt-3 text-sm text-ink-muted">
                Trust is built on knowing what a supplier will NOT do. We decline inquiries outside our verified competency envelope:
              </p>
              <ul className="mt-4 space-y-2 text-xs text-ink-muted">
                <li>• <strong>Aerospace Flight-Critical Hardware:</strong> We do not quote AS9100 flight-critical aerospace fasteners or export-controlled defense ordnance components.</li>
                <li>• <strong>Medical Device Fasteners:</strong> We decline implantable surgical fasteners or Class II/III medical hardware requiring cleanroom passivation.</li>
                <li>• <strong>Nuclear Primary Circuit Fasteners:</strong> We do not supply ASME Section III nuclear primary containment pressure vessel hardware.</li>
                <li>• <strong>Automotive PPAP Level 3 Without Audit:</strong> Full automotive PPAP Level 3 documentation packages are accepted only where annual volume and audit agreements are established in advance.</li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 11. Related Fasteners Hub */}
      <Section>
        <Container>
          <div className="flex items-center gap-3">
            <Boxes aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Standard product lines &amp; companion hardware
            </Heading>
          </div>
          <p className="mt-4 max-w-3xl text-ink-muted">
            Consolidate your hardware procurement by pairing custom drawing fasteners with our standard manufactured and distributed industrial fastener lines:
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
              Frequently asked questions: custom fasteners &amp; drawing sourcing
            </Heading>
          </div>
          <p className="mt-4 max-w-3xl text-ink-muted">
            Detailed engineering answers regarding CAD formats, tolerance limits, tooling costs, MTC documentation, and production scheduling.
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
              Have a custom fastener drawing? Request an engineering quotation
            </Heading>
            <p className="mx-auto mt-4 max-w-2xl text-ink-muted">
              Upload your 2D PDF print or 3D STEP solid model. Our technical sales team reviews your tolerances, material specs, and batch requirements, returning a firm line-item quote with lead times within 24 business hours.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/request-quote/?product=custom-fasteners"
                className="btn btn-primary"
              >
                <UploadCloud aria-hidden="true" className="h-4 w-4" />
                Upload Your Drawing Now
              </Link>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <MessageCircle aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                WhatsApp Drawing File
              </a>
              <a href={TEL} className="btn btn-secondary">
                <Phone aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                Call +91 98982 30448
              </a>
            </div>
            <p className="mt-6 text-xs text-ink-muted">
              Drawings up to 10 MB accepted directly via our quote portal. Mutual Non-Disclosure Agreement (NDA) executed on request before drawing exchange.
            </p>
          </Card>
        </Container>
      </Section>
    </>
  );
}
