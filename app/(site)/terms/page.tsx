import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertCircle, FileText, ArrowRight, Phone, MapPin } from 'lucide-react';
import { buildMetadata, SITE_URL } from '@/lib/seo';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Card } from '@/components/ui/Card';
import { Prose } from '@/components/ui/Prose';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbs } from '@/lib/jsonld';
import { findRoute } from '@/data/routes';

const PATH = '/terms/';

const META_TITLE = 'KP Fasteners Terms of Use & Industrial Supply Terms | KP';
const META_DESCRIPTION =
  'KP Fasteners terms of use and commercial supply for RFQs, drawing evaluations, order fulfilment and website use. Draft terms subject to Indian legal review.';

export const metadata: Metadata = buildMetadata({
  path: PATH,
  title: META_TITLE,
  description: META_DESCRIPTION,
});

export default function TermsPage() {
  const route = findRoute(PATH);
  const trail = route?.breadcrumbTrail ?? [
    { label: 'Home', href: '/' },
    { label: 'Terms of Supply', href: PATH },
  ];

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}/terms/#webpage`,
    url: `${SITE_URL}/terms/`,
    name: META_TITLE,
    description: META_DESCRIPTION,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    datePublished: '2026-10-04',
    dateModified: '2026-10-04',
  };

  const breadcrumbSchema = breadcrumbs(trail);

  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* 1. Hero & Legal Content Section */}
      <Section variant="default">
        <Container>
          <Breadcrumbs trail={trail} />

          {/* Hero Heading */}
          <div className="mt-6 max-w-4xl">
            <span className="badge badge-steel">Commercial Governance &amp; Supply Terms</span>
            <Heading as="h1" variant="hero" className="mt-4 font-heading">
              <span className="text-gold-gradient">Terms</span> of Use &amp; Supply
            </Heading>
            <p className="mt-3 text-sm text-ink-muted">
              Effective Date: October 4, 2026 · Governing Legal Framework: Laws of India (Jurisdiction: Ahmedabad, Gujarat) · Version 1.0 (Draft)
            </p>
          </div>

          {/* 2. Top-of-page Lawyer Review Required Note */}
          <div className="mt-8 max-w-4xl">
            <Card variant="glass" padding="md" className="border-l-4 border-l-brand-gold bg-brand-gold-soft/30">
              <div className="flex items-start gap-3">
                <AlertCircle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold-strong" />
                <div className="text-sm">
                  <p className="font-semibold text-brand-steel">Draft Policy Notice — Indian Commercial Counsel Review Required</p>
                  <p className="mt-1 text-ink-muted">
                    This page is a draft. All clauses marked{' '}
                    <span className="font-mono font-semibold text-brand-gold-strong">[LAWYER REVIEW REQUIRED]</span>{' '}
                    need review by a qualified Indian-jurisdiction lawyer (Indian Contract Act 1872, Sale of Goods Act 1930,
                    Consumer Protection Act 2019, Information Technology Act 2000) before this site goes live for commercial RFQs.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* 3. Main Clauses in Prose */}
          <div className="mt-10 max-w-4xl">
            <Prose className="max-w-none space-y-10">
              {/* Clause 1 */}
              <div>
                <Heading as="h2" variant="section">
                  1. Parties and Binding Contract Scope
                </Heading>
                <div className="mt-4 space-y-3">
                  <p>
                    These Terms of Supply and Website Use (&quot;Terms&quot;) govern (a) access to and use of{' '}
                    <span className="font-mono">kpfasteners.com</span> and (b) all commercial quotations, purchase
                    orders, and supply transactions entered into with <strong>KP Fasteners</strong> (&quot;Supplier&quot;,
                    &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), a sole proprietorship registered in Ahmedabad,
                    Gujarat, India (GSTIN: <strong>24ARDPP9803A1Z3</strong>), having its principal manufacturing and
                    trading facility at 23/4 Ghanshyam Industrial Estate, Margha Farm, Ahmedabad – 380024, Gujarat,
                    India.
                  </p>
                  <p>
                    These Terms apply to all industrial buyers, contractors, engineering OEMs, and procurement entities
                    (&quot;Buyer&quot;) issuing purchase orders against quotations provided by KP Fasteners, unless a
                    separately executed written Master Supply Agreement is in force. In the event of an irreconcilable
                    conflict between these Terms and a bilateral signed agreement, the signed agreement shall prevail.
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold-strong">
                    [LAWYER REVIEW REQUIRED]
                  </p>
                </div>
              </div>

              {/* Clause 2 */}
              <div>
                <Heading as="h2" variant="section">
                  2. Acceptance of Terms
                </Heading>
                <div className="mt-4 space-y-3">
                  <p>
                    By browsing this website, requesting a quotation, transmitting CAD or engineering drawings, or
                    issuing a purchase order referencing a quote generated by KP Fasteners, the Buyer acknowledges having
                    read, understood, and agreed to be bound by these Terms in their entirety.
                  </p>
                  <p>
                    Any standard terms and conditions contained or referenced in a Buyer&apos;s purchase order, tender
                    document, or vendor portal that conflict with or seek to modify these Terms are expressly rejected
                    unless explicitly confirmed in writing and signed by an authorized signatory of KP Fasteners.
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold-strong">
                    [LAWYER REVIEW REQUIRED]
                  </p>
                </div>
              </div>

              {/* Clause 3 */}
              <div>
                <Heading as="h2" variant="section">
                  3. Website Content and Technical Specifications Disclaimer
                </Heading>
                <div className="mt-4 space-y-3">
                  <p>
                    Technical data tables, dimensional charts, thread pitch references, coating descriptions, and
                    metallurgical standards (including references to IS 5624, DIN 933, DIN 976, ASTM A193, and ISO 4017)
                    published on <span className="font-mono">kpfasteners.com</span> are provided solely for indicative
                    engineering reference and preliminary procurement planning.
                  </p>
                  <p>
                    Manufacturing tolerances, dimensional limits, proof load thresholds, and surface finishes for any
                    actual production lot are established exclusively in our formal written quotation, proforma invoice,
                    and accompanying Mill Test Certificate (EN 10204 3.1 MTC). We reserve the right to modify technical
                    catalogue information without prior notification.
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold-strong">
                    [LAWYER REVIEW REQUIRED]
                  </p>
                </div>
              </div>

              {/* Clause 4 */}
              <div>
                <Heading as="h2" variant="section">
                  4. Quotations, Pricing Firmness, and Order Formation
                </Heading>
                <div className="mt-4 space-y-3">
                  <p>
                    Submissions through our <Link href="/request-quote/" className="underline hover:text-brand-steel">Request a Quote</Link>{' '}
                    form, email desk, or WhatsApp channel constitute preliminary inquiries and invitations to treat. A
                    legally binding contract is formed only upon the occurrence of all of the following events:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>KP Fasteners issues a formal written commercial quotation or proforma invoice in writing.</li>
                    <li>The Buyer transmits an unqualified written Purchase Order (PO) matching the quote scope.</li>
                    <li>KP Fasteners confirms acceptance in writing and receives the agreed advance payment.</li>
                  </ul>
                  <p>
                    Quotations remain valid for 15 calendar days from the date of issuance unless a different validity
                    period is stated in writing. Quoted unit rates remain firm within this period, subject to adjustments
                    arising from statutory GST rate modifications or extraordinary raw-material steel surcharge spikes
                    communicated prior to final order confirmation. KP Fasteners reserves the right to decline any order.
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold-strong">
                    [LAWYER REVIEW REQUIRED]
                  </p>
                </div>
              </div>

              {/* Clause 5 */}
              <div>
                <Heading as="h2" variant="section">
                  5. Lead Times, Scheduling, and Dispatch Phasing
                </Heading>
                <div className="mt-4 space-y-3">
                  <p>
                    Dispatch timelines quoted by KP Fasteners represent good-faith estimates based on inventory levels and
                    production capacity at the time of quotation:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <strong>Standard Stock Fasteners:</strong> Typically dispatched within 24 to 72 hours for Ahmedabad
                      deliveries, 3 to 5 business days across Gujarat, and 5 to 8 business days pan-India.
                    </li>
                    <li>
                      <strong>Made-to-Order Standard Fasteners:</strong> Typically dispatched within 7 to 14 business
                      days depending on threading volume and coating cycles (such as hot-dip galvanizing).
                    </li>
                    <li>
                      <strong>Custom Drawing-Based Fasteners:</strong> Typically dispatched within 10 to 21 business days
                      following formal drawing approval and receipt of raw material billets.
                    </li>
                  </ul>
                  <p>
                    Production lead times commence only after all technical drawings have been approved in writing and
                    stipulated advance payments have cleared. Partial shipments are permissible unless explicitly
                    prohibited in the Buyer&apos;s purchase order.
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold-strong">
                    [LAWYER REVIEW REQUIRED]
                  </p>
                </div>
              </div>

              {/* Clause 6 */}
              <div>
                <Heading as="h2" variant="section">
                  6. Product Classification — In-House OEM vs. Distributed Trading Range
                </Heading>
                <div className="mt-4 space-y-3">
                  <p>
                    In accordance with our commitment to procurement transparency (detailed on our{' '}
                    <Link href="/about/" className="underline hover:text-brand-steel">About</Link> and{' '}
                    <Link href="/tools/" className="underline hover:text-brand-steel">Tools</Link> pages), all products
                    are categorized into three distinct supply streams:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <strong>OEM In-House Manufacturing (3 Families):</strong> Foundation bolts, stud bolts, and sag rods
                      are fabricated directly at our Ahmedabad workshop. KP Fasteners is the manufacturer of record.
                    </li>
                    <li>
                      <strong>Hybrid Sourcing (2 Families):</strong> Scaffold accessories and custom fasteners combine
                      in-house production with vetted fabrication partners under our direct incoming inspection.
                    </li>
                    <li>
                      <strong>Distribution Range (4 Families):</strong> Hex bolts &amp; nuts, CSK Allen bolts, formwork
                      tie rods, and solar mounting accessories are sourced from trusted primary manufacturers.
                    </li>
                  </ul>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold-strong">
                    [LAWYER REVIEW REQUIRED]
                  </p>
                </div>
              </div>

              {/* Clause 7 */}
              <div>
                <Heading as="h2" variant="section">
                  7. Mill Test Certificates (MTC) and Quality Verification
                </Heading>
                <div className="mt-4 space-y-3">
                  <p>
                    For manufactured OEM lines, KP Fasteners furnishes EN 10204 Type 3.1 Mill Test Certificates detailing
                    raw material heat numbers, chemical composition analysis, tensile strength, yield stress, and
                    dimensional conformance upon dispatch.
                  </p>
                  <p>
                    For distributed trading lines, original test certificates from the primary manufacturing mills are
                    passed through to the Buyer. The Buyer is responsible for conducting incoming verification of
                    dimensions, markings, and coating thickness before installing, welding, or modifying products on-site.
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold-strong">
                    [LAWYER REVIEW REQUIRED]
                  </p>
                </div>
              </div>

              {/* Clause 8 */}
              <div>
                {/* VERIFICATION PENDING: Commercial payment terms, advance percentage, and credit policy to be confirmed by Kabir and legal counsel — ref: brief §3 / §10 Q2 */}
                <Heading as="h2" variant="section">
                  8. Payment Terms, Commercial Invoicing, and Statutory Taxes
                </Heading>
                <div className="mt-4 space-y-3">
                  <p>
                    Unless otherwise agreed in a formal written quotation, commercial payment conditions are structured as
                    follows:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <strong>First-Time Buyers:</strong> 100% advance payment against proforma invoice prior to dispatch
                      or commencement of non-standard custom fabrication.
                    </li>
                    <li>
                      <strong>Established Commercial Accounts:</strong> Credit arrangements are subject to formal credit
                      evaluation, satisfactory commercial trade references, and written authorization.
                    </li>
                    <li>
                      <strong>Approved Payment Methods:</strong> Electronic funds transfer via RTGS, NEFT, or corporate
                      bank wire. Cash or cheque payments exceeding statutory limits are strictly prohibited.
                    </li>
                    <li>
                      <strong>Statutory Taxation:</strong> Goods and Services Tax (GST) is charged at prevailing statutory
                      rates under GSTIN <strong>24ARDPP9803A1Z3</strong>. Invoices are issued pursuant to Rule 46 of the
                      CGST Rules, 2017.
                    </li>
                    <li>
                      <strong>Overdue Balances:</strong> Overdue undisputed sums shall bear simple interest at the rate of
                      18% per annum calculated from the due date until full receipt of cleared funds.
                    </li>
                  </ul>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold-strong">
                    [LAWYER REVIEW REQUIRED]
                  </p>
                </div>
              </div>

              {/* Clause 9 */}
              <div>
                {/* VERIFICATION PENDING: Default Incoterm (Ex-Works Ahmedabad vs FOR destination) to be confirmed by client — ref: brief §3 / §10 Q1 */}
                <Heading as="h2" variant="section">
                  9. Delivery Logistics, Risk of Loss, and Transfer of Title
                </Heading>
                <div className="mt-4 space-y-3">
                  <p>
                    Unless expressly stipulated otherwise in the written quote, all deliveries are made on an{' '}
                    <strong>Ex-Works (EXW), Ahmedabad</strong> basis (Incoterms 2020) at our facility at 23/4 Ghanshyam
                    Industrial Estate, Margha Farm, Ahmedabad – 380024.
                  </p>
                  <p>
                    Risk of loss, transit damage, or deterioration transfers entirely to the Buyer immediately upon delivery
                    of the consignment to the commercial carrier, logistics provider, or Buyer&apos;s vehicle. Title to
                    and ownership of all products remains with KP Fasteners until full payment has cleared in our bank
                    account. Where Freight on Road (FOR) destination terms are explicitly agreed, transit insurance must be
                    separately designated and paid.
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold-strong">
                    [LAWYER REVIEW REQUIRED]
                  </p>
                </div>
              </div>

              {/* Clause 10 */}
              <div>
                {/* VERIFICATION PENDING: Warranty period on OEM items (12 months default) to be confirmed by Kabir — ref: brief §3 / §10 Q3 */}
                {/* VERIFICATION PENDING: Pass-through warranty wording on traded distribution items to be approved by counsel — ref: brief §3 / §10 Q4 */}
                <Heading as="h2" variant="section">
                  10. Warranty and Non-Conformance Remedies
                </Heading>
                <div className="mt-4 space-y-3">
                  <p>
                    <strong>OEM Manufactured Fasteners:</strong> KP Fasteners warrants that foundation bolts, anchor bolts,
                    stud bolts, and sag rods manufactured by us conform to the chemical, mechanical, and dimensional
                    specifications agreed in the order confirmation for a period of 12 months from the date of dispatch.
                  </p>
                  <p>
                    <strong>Traded Distribution Fasteners:</strong> Items supplied from our distribution range carry the
                    pass-through warranty of the original manufacturing mill as documented on the forwarded MTC. KP
                    Fasteners does not offer additional express warranties on third-party products.
                  </p>
                  <p>
                    <strong>Exclusive Remedy:</strong> In the event of a timely and substantiated warranty defect, our sole
                    liability and the Buyer&apos;s exclusive remedy is, at KP Fasteners&apos; option: (a) repair of the
                    defective item, (b) replacement of the non-conforming batch at our cost, or (c) issuance of a credit
                    note for the invoiced amount of the affected parts.
                  </p>
                  <p>
                    <strong>Warranty Exclusions:</strong> This warranty does not cover failure resulting from improper
                    on-site storage, exposure to corrosive chemical environments exceeding specified metallurgy, incorrect
                    torque installation, unauthorized machining or welding, or structural over-stressing.
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold-strong">
                    [LAWYER REVIEW REQUIRED]
                  </p>
                </div>
              </div>

              {/* Clause 11 */}
              <div>
                <Heading as="h2" variant="section">
                  11. Claims, Inspection Windows, and Return Procedures
                </Heading>
                <div className="mt-4 space-y-3">
                  <p>
                    To maintain lot traceability and prompt dispute resolution, all claims must be submitted within the
                    following mandatory inspection windows:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <strong>Transit Damage &amp; Shortages:</strong> Must be endorsed on the transporter&apos;s Lorry
                      Receipt (LR) and reported to KP Fasteners in writing within 7 calendar days of physical delivery.
                    </li>
                    <li>
                      <strong>Dimensional &amp; Metallurgical Claims:</strong> Must be reported within 30 calendar days of
                      delivery, referencing the invoice number, lot code, and heat number from the MTC, supported by
                      photographs and calibrated measurement records.
                    </li>
                    <li>
                      <strong>Independent Laboratory Retest:</strong> If a quality defect is disputed, samples from the
                      retained batch shall be tested by an independent NABL-accredited metallurgical testing laboratory
                      mutually agreed upon. Costs of testing shall be borne by the party whose position is not upheld.
                    </li>
                    <li>
                      <strong>Custom Fasteners:</strong> Non-standard fasteners fabricated to customer drawings are strictly
                      non-returnable and non-refundable once production has commenced, except for verified deviation from
                      approved drawings.
                    </li>
                  </ul>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold-strong">
                    [LAWYER REVIEW REQUIRED]
                  </p>
                </div>
              </div>

              {/* Clause 12 */}
              <div>
                {/* VERIFICATION PENDING: Liability cap threshold and exclusions to be drafted by Indian commercial lawyer — ref: brief §3 / §10 Q9 */}
                <Heading as="h2" variant="section">
                  12. Limitation of Liability
                </Heading>
                <div className="mt-4 space-y-3">
                  <p>
                    To the maximum extent permitted under applicable Indian law, the total aggregate liability of KP
                    Fasteners, whether in contract, tort (including negligence), breach of statutory duty, or otherwise,
                    arising out of or in connection with any order or supply of goods, shall under no circumstances exceed
                    the net invoice price actually paid by the Buyer for the specific consignment or batch of products giving
                    rise to the claim.
                  </p>
                  <p>
                    Under no circumstances shall KP Fasteners be liable for indirect, incidental, special, punitive, or
                    consequential damages, including loss of business profit, lost revenue, plant shutdown costs, structural
                    delays, or contractual liquidated damages imposed on the Buyer by third-party project owners.
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold-strong">
                    [LAWYER REVIEW REQUIRED]
                  </p>
                </div>
              </div>

              {/* Clause 13 */}
              <div>
                <Heading as="h2" variant="section">
                  13. Intellectual Property Rights
                </Heading>
                <div className="mt-4 space-y-3">
                  <p>
                    All content on <span className="font-mono">kpfasteners.com</span>, including text, technical tables,
                    graphics, photographic media, brand marks, and digital assets, is the proprietary property of KP
                    Fasteners protected under Indian and international copyright and trademark laws. Unauthorized scraping,
                    crawling for commercial reuse, framing, or reproduction is strictly prohibited.
                  </p>
                  <p>
                    Customer Technical Blueprints: Engineering drawings, 3D CAD files, and proprietary manufacturing
                    tolerances uploaded or transmitted by the Buyer remain the intellectual property of the Buyer. The
                    Buyer grants KP Fasteners a limited, non-exclusive license solely to evaluate, quote, and manufacture the
                    specified hardware.
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold-strong">
                    [LAWYER REVIEW REQUIRED]
                  </p>
                </div>
              </div>

              {/* Clause 14 */}
              <div>
                <Heading as="h2" variant="section">
                  14. Confidentiality and Data Protection
                </Heading>
                <div className="mt-4 space-y-3">
                  <p>
                    Both parties agree that non-public commercial terms, volume pricing matrices, engineering drawings, and
                    bespoke technical specifications exchanged during the inquiry or order lifecycle shall be treated as
                    Confidential Information and maintained in strict confidence for a period of 3 years following
                    disclosure.
                  </p>
                  <p>
                    Personal data collected during RFQ submissions and order processing is handled in strict accordance with
                    our <Link href="/privacy-policy/" className="underline hover:text-brand-steel">Privacy Policy</Link> and
                    the Digital Personal Data Protection Act, 2023.
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold-strong">
                    [LAWYER REVIEW REQUIRED]
                  </p>
                </div>
              </div>

              {/* Clause 15 */}
              <div>
                <Heading as="h2" variant="section">
                  15. Force Majeure
                </Heading>
                <div className="mt-4 space-y-3">
                  <p>
                    Neither party shall be liable for failure or delay in fulfilling any obligation (except payment of
                    accrued invoices) where such failure results from circumstances beyond reasonable control, including acts
                    of God, flood, earthquake, cyclone, fire, war, civil commotion, nationwide strikes, primary steel mill
                    lockouts, raw material rationing, widespread transportation embargoes, pandemic-related shutdowns, or
                    statutory directives.
                  </p>
                  <p>
                    The affected party shall notify the other in writing within 7 calendar days of the occurrence. If a
                    Force Majeure event continues uninterrupted for more than 90 calendar days, either party may terminate
                    the affected order upon written notice without penalty, subject to payment for work-in-progress already
                    manufactured.
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold-strong">
                    [LAWYER REVIEW REQUIRED]
                  </p>
                </div>
              </div>

              {/* Clause 16 */}
              <div>
                {/* VERIFICATION PENDING: Dispute resolution mechanism (sole arbitrator vs three-member panel) to be selected by legal counsel — ref: brief §3 / §10 Q5 */}
                <Heading as="h2" variant="section">
                  16. Governing Law and Dispute Resolution
                </Heading>
                <div className="mt-4 space-y-3">
                  <p>
                    These Terms, all quotations, proforma invoices, and subsequent commercial transactions shall be governed
                    by and construed in accordance with the substantive laws of India, including the Indian Contract Act,
                    1872 and the Sale of Goods Act, 1930.
                  </p>
                  <p>
                    Any dispute, controversy, or claim arising out of or relating to these Terms or the breach, termination,
                    or invalidity thereof, shall be referred to and finally resolved by arbitration in accordance with the
                    Arbitration and Conciliation Act, 1996 (as amended). The arbitral tribunal shall consist of a sole
                    arbitrator appointed by mutual agreement of the parties. The seat and venue of arbitration shall be
                    Ahmedabad, Gujarat, India, and the proceedings shall be conducted in English.
                  </p>
                  <p>
                    Subject to arbitration, courts having jurisdiction in Ahmedabad, Gujarat, India, shall have exclusive
                    jurisdiction over applications for interim or injunctive relief.
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold-strong">
                    [LAWYER REVIEW REQUIRED]
                  </p>
                </div>
              </div>

              {/* Clause 17 */}
              <div>
                <Heading as="h2" variant="section">
                  17. Modifications to Terms and Contact Information
                </Heading>
                <div className="mt-4 space-y-3">
                  <p>
                    KP Fasteners reserves the right to amend these Terms prospectively. Revised terms apply to purchase
                    orders confirmed after the revision date. Existing confirmed orders continue under the terms in effect at
                    the time of order acceptance.
                  </p>
                  <div className="not-prose my-4 grid gap-4 sm:grid-cols-2">
                    <Card variant="default" padding="sm">
                      <div className="flex items-start gap-3">
                        <MapPin aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-brand-gold-strong" />
                        <div className="text-sm">
                          <p className="font-semibold text-brand-steel">Facility &amp; Sales Desk</p>
                          <p className="mt-1 text-ink-muted">
                            23/4 Ghanshyam Industrial Estate, Margha Farm, Ahmedabad – 380024, Gujarat, India.
                          </p>
                        </div>
                      </div>
                    </Card>

                    <Card variant="default" padding="sm">
                      <div className="flex items-start gap-3">
                        <Phone aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-brand-gold-strong" />
                        <div className="text-sm">
                          <p className="font-semibold text-brand-steel">Direct Communications</p>
                          <p className="mt-1 text-ink-muted">
                            Phone: +91 98982 30448<br />
                            Email: sales@kpfasteners.com
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                  <p>
                    For specific contractual inquiries or to execute a formal vendor onboarding agreement, please{' '}
                    <Link href="/contact/" className="font-semibold text-brand-steel underline hover:text-brand-gold-strong">
                      Contact KP Fasteners
                    </Link>.
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold-strong">
                    [LAWYER REVIEW REQUIRED]
                  </p>
                </div>
              </div>
            </Prose>
          </div>

          {/* 4. Bottom Questions / Contact CTA Band */}
          <div className="mt-16 max-w-4xl">
            <Card variant="metallic" padding="lg" className="text-center">
              <Heading as="h2" variant="section" className="text-brand-steel">
                Questions Regarding Our Supply Terms or Custom Orders?
              </Heading>
              <p className="mx-auto mt-3 max-w-2xl text-ink-muted">
                Our sales and commercial desk in Ahmedabad is available to assist with framework agreements, formal vendor
                registration, and custom engineering inquiries.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Link href="/contact/" className="btn btn-primary">
                  <Phone aria-hidden="true" className="h-4 w-4" />
                  &nbsp;Contact Our Team
                </Link>
                <Link href="/request-quote/" className="btn btn-secondary">
                  <FileText aria-hidden="true" className="h-4 w-4 text-brand-gold-strong" />
                  &nbsp;Submit an RFQ
                </Link>
                <Link href="/" className="btn btn-secondary">
                  Return to Homepage <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </div>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
