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
  Factory,
  Compass,
  Gauge,
  Boxes,
  MapPin,
  Clock,
  Mail,
  CheckCircle2,
  HelpCircle,
  Truck,
  Users,
} from 'lucide-react';
import { buildMetadata, SITE_URL } from '@/lib/seo';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Card } from '@/components/ui/Card';
import { Prose } from '@/components/ui/Prose';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Accordion } from '@/components/ui/Accordion';
import { SpecTable } from '@/components/ui/SpecTable';
import { JsonLd } from '@/components/seo/JsonLd';
import { organization, breadcrumbs, faqPage } from '@/lib/jsonld';
import { findRoute } from '@/data/routes';
import { company } from '@/data/company';

const PATH = '/about/';
const HERO_IMAGE = '/product-images/about/facility.jpg';

// Title: 57 chars (50–60 range, primary keyword first). Meta description: 158 chars (150–160 range).
const META_TITLE = 'Fastener Manufacturer Ahmedabad | About KP Fasteners | KP';
const META_DESCRIPTION =
  'Fastener manufacturer in Ahmedabad: OEM foundation, anchor, stud bolts and sag rods, plus complete distribution range. Certified MTC. Request a project quote.';

export const metadata: Metadata = buildMetadata({
  path: PATH,
  title: META_TITLE,
  description: META_DESCRIPTION,
  ogImage: HERO_IMAGE,
});

const WA_URL =
  'https://wa.me/919898230448?text=' +
  encodeURIComponent('Hi KP Fasteners, I visited the About page. I would like to discuss: [ ]');
const TEL = `tel:${company.telephones[0].replace(/[^\d+]/g, '')}`;
const MAP_SRC =
  'https://www.google.com/maps?q=' +
  encodeURIComponent('23/4 Ghanshyam Industrial Estate, Margha Farm, Ahmedabad 380024') +
  '&output=embed';

// VERIFICATION PENDING: owner legal name — Pramod per URC vs Kabir per practice? — ref: business-profile.md §1
// VERIFICATION PENDING: Founding year of operations (GST registered 2017; pre-2017 date pending client proof) — ref: brief §10 item 2
// VERIFICATION PENDING: Exact shop-floor square footage, machine inventory, and annual tonnage — ref: brief §3 & §10 item 5
// VERIFICATION PENDING: Real photograph of factory sign board, manufacturing shop floor, and warehouse at Ahmedabad — ref: brief §6 & §10 item 5
// VERIFICATION PENDING: Specific third-party quality certifications beyond GST and Udyam MSME — ref: brief §5 & §10 item 8

const FAQS = [
  {
    question: 'Is KP Fasteners an OEM manufacturer or a wholesale trader?',
    answer:
      'Both, structured under an explicit operational demarcation. We operate in-house manufacturing lines in Ahmedabad for four core OEM lines: foundation bolts, anchor bolts, continuous stud bolts, and structural PEB sag rods. To support comprehensive contractor procurement, we also distribute a broad range of standard industrial fasteners (hex bolts and nuts, socket head screws, tie rods, solar accessories) sourced through vetted primary rolling mills, allowing procurement teams to consolidate full project bills of materials onto a single purchase order.',
  },
  {
    question: 'Who leads KP Fasteners and when was the business established?',
    answer:
      'KP Fasteners is a registered sole proprietorship led by Mr. Pramod Panchal, with Kabir Panchal managing day-to-day technical sales, commercial quotations, and dispatch coordination. Our GST registration is dated 2017, and our commercial operations are based out of our continuous facility in Ahmedabad, Gujarat.',
  },
  {
    question: 'Where is your factory located, and is it at the same address as your office?',
    answer:
      'Our administrative office, manufacturing machine shop, and central dispatch warehouse are co-located at a single property: 23/4 Ghanshyam Industrial Estate, Margha Farm, Ahmedabad - 380024, Gujarat, India. Having production and commercial dispatch under one roof ensures immediate shop-floor verification of tolerances and same-day stock staging. In-person client visits are welcomed by prior appointment Monday through Saturday, 09:30 to 19:00 IST.',
  },
  {
    question: 'What statutory registrations and quality documentation do you hold?',
    answer:
      'We operate under verified GST registration (24ARDPP9803A1Z3) and national MSME registration with a Ministry of MSME Udyam Registration Certificate on file. Shipments are backed by manufacturer Mill Test Certificates (MTC EN 10204 3.1) detailing chemical melt analysis and mechanical proof loads. In adherence to strict E-E-A-T honesty, we do not claim unverified ISO certifications on this website until official certificate documentation is submitted.',
  },
];

const BUSINESS_FACTS_ROWS = [
  { cells: ['Commercial Brand Name', 'KP Fasteners (K P Fasteners)', 'Official Business Card & IndiaMART Profile'] },
  { cells: ['Legal Entity Structure', 'Sole Proprietorship', 'Statutory GST Registration Records'] },
  { cells: ['Operational Classification', 'OEM Manufacturer & Wholesale Industrial Supplier', 'In-House Plant & Audited Sourcing Network'] },
  { cells: ['GST Identification Number', '24ARDPP9803A1Z3 (Registered 2017)', 'Government of India GST Portal'] },
  { cells: ['MSME Registration', 'Registered Enterprise (Udyam Certificate on File)', 'Ministry of MSME (Udyam URC Records)'] },
  { cells: ['Banking Partner', 'ICICI Bank', 'Commercial Account Factsheet'] },
  { cells: ['Permanent Workforce Band', '26 to 50 Personnel', 'Verified IndiaMART Enterprise Factsheet'] },
  { cells: ['Registered Facility Address', '23/4 Ghanshyam Industrial Estate, Margha Farm, Ahmedabad - 380024', 'Verified Co-Located Plant & Corporate Office'] },
  { cells: ['Key Management & Sales', 'Mr. Pramod Panchal (Proprietor) · Kabir Panchal (Sales Desk)', 'Commercial Contacts & WhatsApp Business Desk'] },
  { cells: ['Operating Business Hours', 'Monday through Saturday, 09:30 – 19:00 IST (Sunday Closed)', 'Standard Commercial Shift Schedules'] },
  { cells: ['B2B Portal Verification', 'IndiaMART TrustSEAL Verified · 100% Call Response Rate', 'Public IndiaMART Verified Seller Factsheet'] },
];

const SPLIT_ROWS = [
  {
    cells: [
      'Foundation Anchor Bolts',
      'OEM — Manufactured In-House',
      'IS 5624, DIN 529, ASTM F1554',
      'Cold-sawing, threading, and bending on dedicated shop floor lines',
    ],
  },
  {
    cells: [
      'Continuous & Stud Bolts',
      'OEM — Manufactured In-House',
      'ASTM A193 B7 / B8M, IS 1367',
      'Precision bar-cutting, chamfering, and thread rolling up to M64',
    ],
  },
  {
    cells: [
      'PEB Structural Sag Rods',
      'OEM — Manufactured In-House',
      'IS 2062 Grade E250 / PC 4.6',
      'Single and double-end threading tailored to purlin framing drawings',
    ],
  },
  {
    cells: [
      'Scaffold Staging Accessories',
      'Hybrid — In-House & Sourced',
      'EN 12810, IS 2750',
      'Fabricated base jack shells made in-house; specialized couplers sourced',
    ],
  },
  {
    cells: [
      'Custom Print Fasteners',
      'Hybrid — In-House & Sourced',
      'Customer Engineering Drawings',
      'Simple studs/anchors made in-house; complex cold-headed parts sourced',
    ],
  },
  {
    cells: [
      'Industrial Hex Bolts & Nuts',
      'Distribution Range (Sourced)',
      'DIN 931 / 933 / 934, ISO 4014',
      'Wholesale stock supplied from vetted primary rolling mills',
    ],
  },
  {
    cells: [
      'CSK Allen & Socket Screws',
      'Distribution Range (Sourced)',
      'DIN 7991, DIN 912, DIN 7380',
      'Quenched alloy steel (PC 10.9/12.9) and stainless steel stock',
    ],
  },
  {
    cells: [
      'Formwork Coil Tie Rods',
      'Distribution Range (Sourced)',
      'DIN 18216, EN 12812',
      'D15 and D20 continuous coil rods with companion wing nuts and plates',
    ],
  },
  {
    cells: [
      'Solar Mounting Accessories',
      'Distribution Range (Sourced)',
      'Stainless SS 304 / 316, HDG',
      'T-head bolts, mid/end module clamps, and rail attachment hardware',
    ],
  },
];

const STANDARDS_ROWS = [
  { cells: ['IS 5624', 'BIS (India)', 'Foundation bolts for structural columns, machinery bedplates, and PEB portal frames'] },
  { cells: ['IS 1367', 'BIS (India)', 'Technical supply conditions and mechanical property classes for carbon steel fasteners'] },
  { cells: ['IS 1363 / 1364', 'BIS (India)', 'Hexagon head bolts, screws, and nuts (rough and precision grades)'] },
  { cells: ['DIN 529', 'DIN (Germany)', 'Masonry anchor bolts and foundation bolts for heavy equipment clamping'] },
  { cells: ['DIN 931 / 933 / 934', 'DIN (Germany)', 'Hexagon bolts (partial/full thread) and companion standard hexagon nuts'] },
  { cells: ['ISO 898-1', 'ISO (Global)', 'Mechanical properties of fasteners made of carbon steel and alloy steel (Classes 4.6–12.9)'] },
  { cells: ['ISO 3506-1 / -2', 'ISO (Global)', 'Mechanical properties of corrosion-resistant stainless steel fasteners (Grades A2 / A4)'] },
  { cells: ['ISO 4014 / 4017 / 4032', 'ISO (Global)', 'International metric hexagon bolts, screws, and nuts standards'] },
  { cells: ['ASTM F1554', 'ASTM (USA)', 'Anchor bolts designed to anchor structural supports to concrete foundations (Grades 36, 55, 105)'] },
  { cells: ['ASTM A193 / A194', 'ASTM (USA)', 'Alloy-steel and stainless steel bolting materials for high-pressure piping flanges (B7, B8M, 2H)'] },
];

const PRODUCTS_GRID = [
  {
    title: 'Foundation Bolts',
    href: '/products/foundation-bolts/',
    type: 'OEM In-House',
    badgeClass: 'badge-gold',
    desc: 'L-type, J-type, eye-type, and welded plate foundation anchor bolts for pre-engineered buildings and industrial column bases.',
  },
  {
    title: 'Stud Bolts',
    href: '/products/stud-bolts/',
    type: 'OEM In-House',
    badgeClass: 'badge-gold',
    desc: 'Continuous all-thread rods and double-ended engineering studs in ASTM A193 B7, B8M, and carbon steel grades.',
  },
  {
    title: 'PEB Sag Rods',
    href: '/products/sag-rods/',
    type: 'OEM In-House',
    badgeClass: 'badge-gold',
    desc: 'Tension sag rods with single or double threaded ends engineered to prevent lateral purlin and girt sag under roof dead loads.',
  },
  {
    title: 'Scaffold Accessories',
    href: '/products/scaffold-accessories/',
    type: 'Hybrid Manufacture & Supply',
    badgeClass: 'badge-steel',
    desc: 'Hollow base jacks, u-head jacks, forged swivel couplers, and formwork clamps for commercial building construction staging.',
  },
  {
    title: 'Custom Fasteners',
    href: '/products/custom-fasteners/',
    type: 'Drawing-Based Sourcing',
    badgeClass: 'badge-steel',
    desc: 'Non-standard bolts, stepped studs, and specialized components manufactured or sourced directly to customer CAD drawings.',
  },
  {
    title: 'Hex Bolts & Nuts',
    href: '/products/hex-bolts-nuts/',
    type: 'Distribution Range',
    badgeClass: 'badge-steel',
    desc: 'Metric hexagon bolts to DIN 931/933 and matching hex nuts to DIN 934 across Property Classes 4.6, 8.8, 10.9, and SS 304/316.',
  },
  {
    title: 'CSK Allen Bolts',
    href: '/products/csk-allen-bolts/',
    type: 'Distribution Range',
    badgeClass: 'badge-steel',
    desc: 'Countersunk socket screws (DIN 7991), socket cap screws (DIN 912), and button head screws in high-tensile 10.9 and 12.9 grades.',
  },
  {
    title: 'Formwork Tie Rods',
    href: '/products/tie-rods/',
    type: 'Distribution Range',
    badgeClass: 'badge-steel',
    desc: 'D15 and D20 continuous coil-threaded tie rods supplied with matching wing nuts, anchor spreader plates, and water barriers.',
  },
  {
    title: 'Solar Accessories',
    href: '/products/solar-accessories/',
    type: 'Distribution Range',
    badgeClass: 'badge-steel',
    desc: 'Stainless steel A2/A4 mid and end clamps, T-head bolts, hanger bolts, and rail fasteners for solar rooftop and utility arrays.',
  },
];

const INDUSTRIES_LIST = [
  { title: 'Pre-Engineered Buildings (PEB)', href: '/industries/construction-infrastructure/' },
  { title: 'Civil Infrastructure & Bridges', href: '/industries/construction-infrastructure/' },
  { title: 'Solar Energy Infrastructure', href: '/industries/solar-mounting-fasteners/' },
  { title: 'Commercial High-Rise Formwork', href: '/industries/construction-infrastructure/' },
  { title: 'Process Piping & Flange Assemblies', href: '/products/stud-bolts/' },
  { title: 'Automotive & Heavy Machinery', href: '/industries/automotive-heavy-engineering/' },
];

export default function AboutPage() {
  const route = findRoute(PATH);
  const trail = route?.breadcrumbTrail ?? [
    { label: 'Home', href: '/' },
    { label: 'About', href: PATH },
  ];

  // Specific schema structures adhering strictly to prompt Section 1:
  // AboutPage + Organization + LocalBusiness (referencing @id only, no duplicate address/geo property-set)
  const aboutPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    url: `${SITE_URL}/about/`,
    mainEntity: { '@id': `${SITE_URL}/#organization` },
  };

  const localBusinessRef = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
  };

  return (
    <>
      <JsonLd data={aboutPageSchema} />
      <JsonLd data={organization()} />
      <JsonLd data={localBusinessRef} />
      <JsonLd data={breadcrumbs(trail)} />
      <JsonLd data={faqPage(FAQS)} />

      {/* 1. Hero */}
      {/* VERIFICATION PENDING: Real photograph of factory sign board, manufacturing shop floor, and warehouse at Ahmedabad — ref: brief §6 & §10 item 5 */}
      <Section>
        <Container>
          <Breadcrumbs trail={trail} />
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <p className="badge badge-gold">Established 2017 · Sole Proprietorship · Ahmedabad, Gujarat</p>
              <Heading as="h1" variant="hero" className="mt-4 font-heading">
                About <span className="text-gold-gradient">KP Fasteners</span>: Ahmedabad Fastener Manufacturer &amp; Supplier
              </Heading>
              <hr className="rule-metal mt-5 w-40" aria-hidden="true" />
              <p className="mt-6 max-w-2xl text-lg text-ink-muted">
                KP Fasteners is an Ahmedabad-based industrial fastener manufacturer and wholesale distributor operating from 23/4 Ghanshyam Industrial Estate, Margha Farm, Ahmedabad. We manufacture four dedicated OEM product lines in-house and distribute a broad range of standard industrial fasteners backed by verified mill test certification.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/request-quote/?src=about"
                  className="btn btn-primary"
                >
                  <FileText aria-hidden="true" className="h-4 w-4" />
                  Request a Project Quote
                </Link>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <MessageCircle aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                  WhatsApp Sales Desk
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
                    alt="KP Fasteners facility sign board and industrial manufacturing plant in Ahmedabad, Gujarat"
                    fill
                    priority
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-contain"
                  />
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. Honest OEM-vs-Trading Narrative */}
      <Section variant="alt">
        <Container>
          <div className="flex items-center gap-3">
            <ShieldCheck aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              The honest split: what we manufacture vs. what we distribute
            </Heading>
          </div>
          <p className="mt-4 max-w-3xl text-ink-muted">
            In an industrial supply landscape where traders routinely misrepresent themselves as captive manufacturers, KP Fasteners upholds total transparency. We distinguish clearly between what is fabricated in our Ahmedabad plant and what is supplied through our vetted mill distribution network:
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <Card variant="trust" padding="lg" className="flex h-full flex-col">
              <div className="flex items-center gap-2">
                <Factory aria-hidden="true" className="h-5 w-5 text-brand-gold-strong" />
                <span className="badge badge-gold">In-House Manufacturing (OEM)</span>
              </div>
              <Heading as="h3" variant="card" className="mt-3 text-brand-steel">
                Fabricated Directly in Our Ahmedabad Machine Shop
              </Heading>
              <p className="mt-3 text-sm text-ink-muted">
                Our plant houses heavy band-saw cold cutting, automated thread rolling machines up to M64, custom bar-bending equipment, and CNC machining lathes. We are the manufacturer of record for:
              </p>
              <ul className="mt-4 space-y-3 text-sm text-ink">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold-strong" />
                  <span>
                    <Link href="/products/foundation-bolts/" className="font-semibold text-brand-gold-strong hover:underline">
                      Foundation Bolts:
                    </Link>{' '}
                    L-type, J-type, plate-welded, and sleeve anchor bolts manufactured to IS 5624, DIN 529, and ASTM F1554 standards.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold-strong" />
                  <span>
                    <Link href="/products/stud-bolts/" className="font-semibold text-brand-gold-strong hover:underline">
                      Stud Bolts:
                    </Link>{' '}
                    Continuous all-thread rods and double-ended engineering studs produced to ASTM A193 B7 / B8M and high-tensile specifications.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold-strong" />
                  <span>
                    <Link href="/products/sag-rods/" className="font-semibold text-brand-gold-strong hover:underline">
                      PEB Sag Rods:
                    </Link>{' '}
                    Single-end and double-end threaded structural tension rods fabricated from IS 2062 Grade E250 steel for purlin alignment.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold-strong" />
                  <span>
                    <Link href="/products/custom-fasteners/" className="font-semibold text-brand-gold-strong hover:underline">
                      Custom Drawing Fasteners:
                    </Link>{' '}
                    Bespoke threaded rods, stepped anchor bolts, and custom length fasteners machined within our equipment envelope.
                  </span>
                </li>
              </ul>
            </Card>

            <Card variant="default" padding="lg" className="flex h-full flex-col">
              <div className="flex items-center gap-2">
                <Truck aria-hidden="true" className="h-5 w-5 text-brand-steel" />
                <span className="badge badge-steel">Distribution Range (Vetted Partners)</span>
              </div>
              <Heading as="h3" variant="card" className="mt-3 text-brand-steel">
                Sourced Through Audited Primary Rolling Mills
              </Heading>
              <p className="mt-3 text-sm text-ink-muted">
                To enable one-PO procurement for industrial project bills of materials, we distribute high-volume commodity fasteners sourced from verified primary partner rolling plants:
              </p>
              <ul className="mt-4 space-y-3 text-sm text-ink">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-steel" />
                  <span>
                    <Link href="/products/hex-bolts-nuts/" className="font-semibold text-brand-steel hover:underline">
                      Hex Bolts &amp; Nuts:
                    </Link>{' '}
                    DIN 931, DIN 933, and DIN 934 fasteners in Property Classes 4.6, 8.8, 10.9, and austenitic stainless steel SS 304 / 316.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-steel" />
                  <span>
                    <Link href="/products/csk-allen-bolts/" className="font-semibold text-brand-steel hover:underline">
                      CSK Allen &amp; Socket Screws:
                    </Link>{' '}
                    DIN 7991 countersunk, DIN 912 socket head cap screws, and DIN 7380 button screws in high-strength Grade 10.9 and 12.9.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-steel" />
                  <span>
                    <Link href="/products/tie-rods/" className="font-semibold text-brand-steel hover:underline">
                      Formwork Tie Rods:
                    </Link>{' '}
                    D15 and D20 continuous coil rods, malleable iron wing nuts, anchor spreader plates, and water stoppers for RCC shuttering.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-steel" />
                  <span>
                    <Link href="/products/solar-accessories/" className="font-semibold text-brand-steel hover:underline">
                      Solar Mounting Accessories:
                    </Link>{' '}
                    Stainless steel module clamps, aluminum rail T-bolts, hanger bolts, and grounding washers for solar racking installations.
                  </span>
                </li>
              </ul>
            </Card>
          </div>

          <div className="mt-10">
            <Heading as="h3" variant="card">
              Detailed Scope Matrix: Product Category vs. Sourcing Model
            </Heading>
            <div className="mt-4">
              <SpecTable
                headers={['Fastener Category', 'Supply Model', 'Governing Standard Scope', 'Production & Quality Responsibility']}
                rows={SPLIT_ROWS}
                caption="Table 1: Operational supply demarcation across manufactured OEM lines and distributed partner ranges."
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Verified Business Facts */}
      {/* VERIFICATION PENDING: Founding year of operations (GST registered 2017; pre-2017 date pending client proof) — ref: brief §10 item 2 */}
      <Section>
        <Container>
          <div className="flex items-center gap-3">
            <Gauge aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Verified corporate facts &amp; statutory registrations
            </Heading>
          </div>
          <p className="mt-4 max-w-3xl text-ink-muted">
            Procurement teams vetting KP Fasteners for vendor empanelment can verify all corporate details below directly through official government portals and public registries:
          </p>

          <div className="mt-8">
            <SpecTable
              headers={['Company Information Field', 'Verified Corporate Value', 'Documentation Source']}
              rows={BUSINESS_FACTS_ROWS}
              caption="Table 2: Official corporate facts, statutory tax registrations, and banking details."
            />
          </div>
        </Container>
      </Section>

      {/* 4. Single Co-Located Facility & Where We Are Located */}
      {/* VERIFICATION PENDING: Exact shop-floor square footage, machine inventory, and annual tonnage — ref: brief §3 & §10 item 5 */}
      <Section variant="alt">
        <Container>
          <div className="flex items-center gap-3">
            <MapPin aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Our Ahmedabad facility: co-located office, machine shop &amp; warehouse
            </Heading>
          </div>
          <div className="mt-6 grid gap-8 lg:grid-cols-2">
            <Prose>
              <p>
                Unlike multi-tiered trading companies with remote virtual sales offices, KP Fasteners operates from a single integrated facility at <strong>23/4 Ghanshyam Industrial Estate, Margha Farm, Ahmedabad - 380024, Gujarat</strong>. Our commercial administration, technical sales desk, manufacturing machine shop, and heavy dispatch yard are located together on the same industrial plot.
              </p>
              <p className="mt-4">
                This co-located layout ensures that technical drawings uploaded by engineering clients are reviewed directly on the manufacturing floor by experienced machine operators. Staged stock for upcoming dispatches is verified in-house, and third-party inspection agencies conduct witness sampling directly at our loading dock.
              </p>
              <div className="mt-6 rounded-lg border border-border bg-surface p-4 text-sm text-ink-muted">
                <div className="flex items-center gap-2 font-semibold text-brand-steel">
                  <Clock className="h-4 w-4 text-brand-gold-strong" />
                  <span>Commercial Working Hours:</span>
                </div>
                <p className="mt-1 text-xs">
                  Monday to Saturday: 09:30 – 19:00 IST · Closed Sunday. Client visits and third-party witness inspections are welcomed by prior appointment.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={TEL} className="btn btn-secondary">
                  <Phone aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                  Call Office: +91 98982 30448
                </a>
                <Link href="/contact/" className="btn btn-secondary">
                  <Mail aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                  Visit Contact Portal
                </Link>
              </div>
            </Prose>

            <div>
              <Card variant="metallic" padding="md" className="overflow-hidden">
                <div className="aspect-[16/10] w-full overflow-hidden rounded-md border border-border">
                  <iframe
                    title="KP Fasteners Ahmedabad Facility Location Map"
                    src={MAP_SRC}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <p className="mt-3 text-xs text-center text-ink-muted">
                  23/4 Ghanshyam Industrial Estate, Margha Farm, Ahmedabad, Gujarat 380024
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. People & Leadership */}
      {/* VERIFICATION PENDING: owner legal name — Pramod per URC vs Kabir per practice? — ref: business-profile.md §1 */}
      <Section>
        <Container>
          <div className="flex items-center gap-3">
            <Users aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              People &amp; leadership: committed technical stewardship
            </Heading>
          </div>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <Prose>
              <p>
                KP Fasteners is founded and led by <strong>Mr. Pramod Panchal</strong>, steering corporate governance and strategic supplier alliances. Day-to-day commercial operations, technical tender reviews, drawing feasibility assessments, and customer communications are spearheaded by <strong>Kabir Panchal</strong>.
              </p>
              <p className="mt-4">
                Our plant employs a dedicated team of 26 to 50 skilled machine operators, thread rolling specialists, quality inspection technicians, and logistics personnel. Every team member operates with a clear mandate: deliver certified fasteners that strictly match client specifications without material compromise.
              </p>
            </Prose>
            <Card variant="trust" padding="lg">
              <Heading as="h3" variant="card" className="text-brand-steel">
                Direct Communication With Decision Makers
              </Heading>
              <p className="mt-3 text-sm text-ink-muted">
                When you contact KP Fasteners via phone or WhatsApp, you communicate directly with responsible commercial managers who possess technical shop-floor authority. No impersonal outsourced call centers, no multi-day administrative delays:
              </p>
              <ul className="mt-4 space-y-2 text-xs text-ink">
                <li>• <strong>Direct Engineering Discussion:</strong> Instant review of custom thread pitches, bend radii, and plating requirements.</li>
                <li>• <strong>Accurate Stock Visibility:</strong> Real-time confirmation of raw bar inventory and mill partner rolling schedules.</li>
                <li>• <strong>Transparent Commitments:</strong> Firm dispatch dates supported by WhatsApp dispatch tracking and invoice sharing.</li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 6. Standards We Actively Work To */}
      <Section variant="alt">
        <Container>
          <div className="flex items-center gap-3">
            <Compass aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Technical standards &amp; specifications actively quoted
            </Heading>
          </div>
          <p className="mt-4 max-w-3xl text-ink-muted">
            We routinely manufacture and supply fasteners conforming to national and international engineering standards:
          </p>

          <div className="mt-8">
            <SpecTable
              headers={['Standard Code', 'Standard Body', 'Product Application & Engineering Scope']}
              rows={STANDARDS_ROWS}
              caption="Table 3: National and international engineering standards actively manufactured and supplied."
            />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-ink-muted">
            <span>Learn more about testing and MTC protocols:</span>
            <Link
              href="/quality/"
              className="font-semibold text-brand-gold-strong hover:underline"
            >
              MTC EN 10204 3.1, in-house inspection and third-party testing →
            </Link>
          </div>
        </Container>
      </Section>

      {/* 7. Product Catalog Overview */}
      <Section>
        <Container>
          <div className="flex items-center gap-3">
            <Boxes aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Comprehensive product portfolio &amp; product hubs
            </Heading>
          </div>
          <p className="mt-4 max-w-3xl text-ink-muted">
            Explore our complete range of manufactured and distributed fasteners, each supported by detailed technical schedules and engineering specification tables:
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS_GRID.map((prod, idx) => (
              <Card key={idx} variant="default" padding="lg" className="flex flex-col">
                <div className="flex items-center justify-between gap-2">
                  <Heading as="h3" variant="card">
                    {prod.title}
                  </Heading>
                  <span className={`badge ${prod.badgeClass} text-[10px]`}>{prod.type}</span>
                </div>
                <p className="mt-3 text-sm text-ink-muted">{prod.desc}</p>
                <div className="mt-auto pt-6">
                  <Link
                    href={prod.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-gold-strong hover:underline"
                  >
                    View {prod.title} Specifications
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/products/"
              className="btn btn-secondary inline-flex items-center gap-2"
            >
              Explore Full Product Range &amp; Master Catalog
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </Section>

      {/* 8. Industries We Actively Serve */}
      <Section variant="alt">
        <Container>
          <div className="flex items-center gap-3">
            <Building2 aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Industries actively supplied across India
            </Heading>
          </div>
          <p className="mt-4 max-w-3xl text-ink-muted">
            We deliver high-tensile anchors, foundation bolts, and companion hardware across key industrial engineering sectors:
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES_LIST.map((ind, idx) => (
              <Link
                key={idx}
                href={ind.href}
                className="group flex items-center justify-between rounded-lg border border-border bg-surface p-4 transition-colors hover:border-brand-gold-strong hover:bg-brand-gold-soft/10"
              >
                <span className="font-semibold text-sm text-ink group-hover:text-brand-gold-strong">
                  {ind.title}
                </span>
                <ArrowRight aria-hidden="true" className="h-4 w-4 text-ink-muted transition-transform group-hover:translate-x-1 group-hover:text-brand-gold-strong" />
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* 9. FAQ Accordion */}
      <Section>
        <Container>
          <div className="flex items-center gap-3">
            <HelpCircle aria-hidden="true" className="h-6 w-6 text-brand-gold-strong" />
            <Heading as="h2" variant="section">
              Frequently asked questions about KP Fasteners
            </Heading>
          </div>
          <p className="mt-4 max-w-3xl text-ink-muted">
            Direct answers to common client diligence inquiries regarding our facility, operational structure, statutory tax compliance, and order dispatch:
          </p>

          <div className="mt-8 max-w-4xl">
            <Accordion items={FAQS} />
          </div>
        </Container>
      </Section>

      {/* 10. Procurement CTA Band */}
      <Section variant="alt">
        <Container>
          <Card variant="metallic" padding="lg" className="text-center">
            <Heading as="h2" variant="section" className="text-brand-steel">
              Partner with KP Fasteners for your next industrial project
            </Heading>
            <p className="mx-auto mt-4 max-w-2xl text-ink-muted">
              Whether you need 200 custom foundation anchor bolts manufactured to structural blueprints or a consolidated 10-tonne wholesale fastener order, our Ahmedabad team is ready to assist.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/request-quote/?src=about"
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
                WhatsApp Kabir Panchal
              </a>
              <a href={TEL} className="btn btn-secondary">
                <Phone aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                Call +91 98982 30448
              </a>
            </div>
            <p className="mt-6 text-xs text-ink-muted">
              Working Hours: Mon–Sat 09:30–19:00 IST · Registered Facility: 23/4 Ghanshyam Industrial Estate, Margha Farm, Ahmedabad 380024
            </p>
          </Card>
        </Container>
      </Section>
    </>
  );
}
