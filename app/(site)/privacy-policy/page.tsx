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
import { findRoute } from '@/data/routes';

const PATH = '/privacy-policy/';

const META_TITLE = 'KP Fasteners Privacy Policy & Data Protection Notice | KP';
const META_DESCRIPTION =
  'KP Fasteners privacy policy for RFQs, drawing uploads & website use. Minimum data collected for quote processing under DPDPA 2023. Draft pending legal review.';

export const metadata: Metadata = buildMetadata({
  path: PATH,
  title: META_TITLE,
  description: META_DESCRIPTION,
});

export default function PrivacyPolicyPage() {
  const route = findRoute(PATH);
  const trail = route?.breadcrumbTrail ?? [
    { label: 'Home', href: '/' },
    { label: 'Privacy Policy', href: PATH },
  ];

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}/privacy-policy/#webpage`,
    url: `${SITE_URL}/privacy-policy/`,
    name: META_TITLE,
    description: META_DESCRIPTION,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    datePublished: '2026-10-04',
    dateModified: '2026-10-04',
  };

  return (
    <>
      <JsonLd data={webPageSchema} />

      {/* 1. Hero & Legal Content Section */}
      <Section variant="default">
        <Container>
          <Breadcrumbs trail={trail} />

          {/* Hero Heading */}
          <div className="mt-6 max-w-4xl">
            <span className="badge badge-steel">Legal &amp; Compliance Notice</span>
            <Heading as="h1" variant="hero" className="mt-4 font-heading">
              <span className="text-gold-gradient">Privacy</span> Policy
            </Heading>
            <p className="mt-3 text-sm text-ink-muted">
              Effective Date: October 4, 2026 · Governing Framework: Digital Personal Data Protection Act 2023 (India) · Version 1.0 (Draft)
            </p>
          </div>

          {/* 2. Top-of-page Lawyer Review Required Note */}
          <div className="mt-8 max-w-4xl">
            <Card variant="glass" padding="md" className="border-l-4 border-l-brand-gold bg-brand-gold-soft/30">
              <div className="flex items-start gap-3">
                <AlertCircle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold-strong" />
                <div className="text-sm">
                  <p className="font-semibold text-brand-steel">Draft Policy Notice - Legal Counsel Review Required</p>
                  <p className="mt-1 text-ink-muted">
                    This page is a preliminary draft. All clauses marked{' '}
                    <span className="font-mono font-semibold text-brand-gold-strong">[LAWYER REVIEW REQUIRED]</span>{' '}
                    require formal review and approval by qualified Indian legal counsel specialising in data protection
                    (specifically regarding compliance with the Digital Personal Data Protection Act, 2023) before this
                    commercial website enters live production for binding requests for quotation (RFQs).
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
                  1. Who We Are and Scope of This Policy
                </Heading>
                <div className="mt-4 space-y-3">
                  <p>
                    This Privacy Policy applies to personal data collected, stored, or processed by{' '}
                    <strong>KP Fasteners</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), operating as a sole
                    proprietorship under GSTIN <strong>24ARDPP9803A1Z3</strong>, with registered manufacturing and
                    operational premises at 23/4 Ghanshyam Industrial Estate, Margha Farm, Ahmedabad - 380024, Gujarat,
                    India.
                  </p>
                  <p>
                    Under the Digital Personal Data Protection Act, 2023 (&quot;DPDPA 2023&quot;), KP Fasteners acts as the
                    Data Fiduciary in respect of personal data submitted by visitors, procurement officers, engineering
                    buyers, and prospective clients through our website (
                    <span className="font-mono">kpfasteners.com</span>), web enquiry forms, drawing upload tools,
                    electronic mail communications, and WhatsApp Business channels.
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold-strong">
                    [LAWYER REVIEW REQUIRED]
                  </p>
                </div>
              </div>

              {/* Clause 2 */}
              <div>
                <Heading as="h2" variant="section">
                  2. Categories of Personal Data We Collect
                </Heading>
                <div className="mt-4 space-y-3">
                  <p>
                    We collect minimal personal and technical information strictly necessary to process commercial
                    fastener enquiries, provide accurate price quotes, coordinate logistics, and maintain secure website
                    functionality. The categories collected comprise:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <strong>Contact &amp; Identity Data:</strong> Full name, company or business entity name, work email
                      address, telephone / mobile number, and destination PIN code or delivery site address provided
                      via our <Link href="/request-quote/" className="underline hover:text-brand-steel">Request a Quote</Link> or{' '}
                      <Link href="/contact/" className="underline hover:text-brand-steel">Contact</Link> forms.
                    </li>
                    <li>
                      <strong>Technical Procurement Data:</strong> Product types, diameter and length parameters, material
                      metallurgy (e.g. 8.8, 10.9, SS 304, SS 316), protective coatings (HDG, zinc, passivation), bill of
                      quantities (BOQ), and user-uploaded engineering drawings, blueprints, or CAD files (PDF, DWG, DXF, STP,
                      PNG, JPG).
                    </li>
                    <li>
                      <strong>Electronic Log &amp; Network Data:</strong> Internet Protocol (IP) address (truncated for
                      privacy where analytics are configured), browser type, device operating system, referring URL, pages
                      viewed, session duration, and date/time stamps.
                    </li>
                    <li>
                      <strong>Third-Party Platform Leads:</strong> When you contact us through verified B2B marketplaces
                      such as IndiaMART or direct WhatsApp links, basic lead metadata forwarded by those platforms in
                      accordance with their respective terms of service.
                    </li>
                  </ul>
                  <p>
                    <strong>Data We Do Not Collect:</strong> We do not operate an online checkout, and we do not store,
                    collect, or process credit card numbers, debit card details, net banking credentials, PAN cards,
                    Aadhaar numbers, or biometric identifiers.
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold-strong">
                    [LAWYER REVIEW REQUIRED]
                  </p>
                </div>
              </div>

              {/* Clause 3 */}
              <div>
                <Heading as="h2" variant="section">
                  3. Purposes and Lawful Grounds for Processing
                </Heading>
                <div className="mt-4 space-y-3">
                  <p>
                    We process your personal data exclusively for specified, lawful purposes directly connected to our
                    commercial fastener manufacturing and distribution operations:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <strong>Commercial RFQ Fulfillment:</strong> Evaluating technical drawing specifications, calculating
                      raw material requirements, issuing formal price quotes, and following up on procurement timelines
                      (Lawful basis: Specified purpose consented to upon enquiry submission and steps taken prior to entering
                      a contract under DPDPA 2023 §4 &amp; §7).
                    </li>
                    <li>
                      <strong>Order Execution &amp; Dispatch:</strong> Coordinating batch production, issuing dispatch
                      challans, generating GST tax invoices, preparing Mill Test Certificates (EN 10204 3.1 MTC), and
                      arranging freight transport (Lawful basis: Performance of contract and compliance with Indian tax
                      statutes).
                    </li>
                    <li>
                      <strong>Security &amp; Abuse Prevention:</strong> Mitigating automated bot attacks, rate-limiting form
                      submissions via honeypot fields, and ensuring network integrity (Lawful basis: Legitimate business
                      interest and infrastructure protection).
                    </li>
                  </ul>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold-strong">
                    [LAWYER REVIEW REQUIRED]
                  </p>
                </div>
              </div>

              {/* Clause 4 */}
              <div>
                {/* VERIFICATION PENDING: Formal data retention schedule confirmation by legal counsel - ref: brief §3 / §10 Q2 */}
                <Heading as="h2" variant="section">
                  4. Data Storage, Security Measures, and Retention Schedules
                </Heading>
                <div className="mt-4 space-y-3">
                  <p>
                    Personal data is stored in access-controlled corporate email mailboxes and serverless cloud
                    infrastructure hosted by Vercel Inc. All data in transit across our website is encrypted using
                    Transport Layer Security (TLS 1.3 / HTTPS) with strict HTTP Strict Transport Security (HSTS) headers.
                    Access to commercial quote repositories is restricted to authorized sales and engineering personnel.
                  </p>
                  <p>We maintain retention limits consistent with statutory mandates and commercial necessity:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <strong>RFQ &amp; Enquiries (Unconverted):</strong> Retained for 36 months to accommodate recurring
                      engineering procurement cycles, following which records are archived or securely deleted.
                    </li>
                    <li>
                      <strong>Uploaded Engineering Blueprints:</strong> Retained for 24 months for unconverted RFQs; retained
                      for the duration of manufacturing warranty and statutory product liability periods for fulfilled
                      orders.
                    </li>
                    <li>
                      <strong>Invoices, Challans &amp; Mill Test Certificates:</strong> Retained for a minimum of 8 years in
                      strict compliance with the Central Goods and Services Tax (CGST) Act, 2017 and Indian accounting
                      standards.
                    </li>
                    <li>
                      <strong>Web Server &amp; Security Logs:</strong> Retained for 90 days for operational forensics.
                    </li>
                  </ul>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold-strong">
                    [LAWYER REVIEW REQUIRED]
                  </p>
                </div>
              </div>

              {/* Clause 5 */}
              <div>
                <Heading as="h2" variant="section">
                  5. Third-Party Disclosures and Service Providers
                </Heading>
                <div className="mt-4 space-y-3">
                  <p>
                    <strong>No Data Brokering:</strong> KP Fasteners does not sell, rent, monetize, or trade your contact
                    details or engineering specifications with third-party advertising networks, data brokers, or marketing
                    firms.
                  </p>
                  <p>
                    We disclose personal data strictly to trusted third-party service providers acting as Data Processors
                    under contractual confidentiality obligations:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <strong>Cloud Hosting Infrastructure:</strong> Vercel Inc. (hosting, edge network routing, serverless
                      execution).
                    </li>
                    <li>
                      <strong>Transactional Communications:</strong> Resend Inc. (routing website form submissions to our
                      internal sales desk via authenticated SMTP/API).
                    </li>
                    <li>
                      <strong>Logistics &amp; Transport Carriers:</strong> Registered surface transport agencies and courier
                      services to deliver physical fastener shipments to your designated delivery PIN code.
                    </li>
                    <li>
                      <strong>Statutory Authorities:</strong> Central or State tax authorities, law enforcement agencies, or
                      courts where mandatory under Indian law.
                    </li>
                  </ul>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold-strong">
                    [LAWYER REVIEW REQUIRED]
                  </p>
                </div>
              </div>

              {/* Clause 6 */}
              <div>
                {/* VERIFICATION PENDING: Cookie banner scope and analytics setup pending counsel confirmation - ref: brief §3 / §10 Q3 */}
                <Heading as="h2" variant="section">
                  6. Cookies and Tracking Technologies
                </Heading>
                <div className="mt-4 space-y-3">
                  <p>
                    Our website uses standard HTTP cookies to support core site operation and evaluate aggregate traffic
                    trends. We do not use third-party advertising cookies or cross-site tracking pixels.
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <strong>Strictly Necessary Cookies:</strong> Session tokens and consent-choice cookies required to
                      navigate the site, preserve form state, and record cookie banner preferences (stored for up to 12
                      months).
                    </li>
                    <li>
                      <strong>Aggregate Analytics Cookies:</strong> First-party analytics cookies (such as Google Analytics
                      4 client identifiers) that capture aggregated metrics regarding page views, browser resolution, and
                      download activity without identifying individual natural persons.
                    </li>
                  </ul>
                  <p>
                    Visitors can modify browser preferences to decline non-essential cookies or delete stored cookies.
                    Disabling essential cookies may impair form submission functionality.
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold-strong">
                    [LAWYER REVIEW REQUIRED]
                  </p>
                </div>
              </div>

              {/* Clause 7 */}
              <div>
                <Heading as="h2" variant="section">
                  7. Data Principal Rights Under DPDPA 2023
                </Heading>
                <div className="mt-4 space-y-3">
                  <p>
                    Under the Digital Personal Data Protection Act, 2023, individuals whose personal data is processed by KP
                    Fasteners (&quot;Data Principals&quot;) possess specific statutory rights:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <strong>Right to Access:</strong> The right to obtain a summary of your personal data processed by us
                      and the identities of any Data Processors with whom such data has been shared.
                    </li>
                    <li>
                      <strong>Right to Correction and Erasure:</strong> The right to correct inaccurate or incomplete data,
                      update contact details, and request erasure of personal data that is no longer required for the
                      purpose for which it was collected, subject to statutory retention obligations under tax and commercial
                      laws.
                    </li>
                    <li>
                      <strong>Right of Grievance Redressal:</strong> The right to register a grievance with our Grievance
                      Officer and receive resolution within statutory timelines, with subsequent right of escalation to the
                      Data Protection Board of India once established.
                    </li>
                    <li>
                      <strong>Right to Nominate:</strong> The right to nominate another individual to exercise your rights
                      under the Act in the event of death or incapacity.
                    </li>
                    <li>
                      <strong>Right to Withdraw Consent:</strong> Where processing is predicated exclusively on voluntary
                      consent, the right to withdraw such consent by formal written notice.
                    </li>
                  </ul>
                  <p>
                    To exercise any of these rights, submit a written communication to our Grievance Officer at{' '}
                    <a href="mailto:sales@kpfasteners.com" className="font-semibold text-brand-steel underline hover:text-brand-gold-strong">
                      sales@kpfasteners.com
                    </a>{' '}
                    with the subject line &quot;DPDPA Data Principal Request&quot;.
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold-strong">
                    [LAWYER REVIEW REQUIRED]
                  </p>
                </div>
              </div>

              {/* Clause 8 */}
              <div>
                {/* VERIFICATION PENDING: Specific Grievance Officer appointment and dedicated email address pending client and legal counsel confirmation - ref: brief §3 / §10 Q1 */}
                <Heading as="h2" variant="section">
                  8. Grievance Redressal and Compliance Officer
                </Heading>
                <div className="mt-4 space-y-3">
                  <p>
                    In accordance with Section 13 of the Digital Personal Data Protection Act, 2023, KP Fasteners has
                    designated the following internal compliance contact for data protection queries and grievance
                    redressal:
                  </p>
                  <Card variant="metallic" padding="md" className="not-prose my-4">
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong className="text-brand-steel">Designation:</strong> Grievance &amp; Compliance Officer
                      </p>
                      <p>
                        <strong className="text-brand-steel">Contact Representative:</strong> Management Desk / Kabir Panchal
                      </p>
                      <p>
                        <strong className="text-brand-steel">Official Mailbox:</strong>{' '}
                        <a href="mailto:sales@kpfasteners.com" className="font-semibold text-brand-steel underline hover:text-brand-gold-strong">
                          sales@kpfasteners.com
                        </a>{' '}
                        <span className="text-xs text-ink-muted">(Dedicated grievance mailbox pending confirmation)</span>
                      </p>
                      <p>
                        <strong className="text-brand-steel">Telephone:</strong>{' '}
                        <a href="tel:+919898230448" className="font-semibold text-brand-steel hover:text-brand-gold-strong">
                          +91 98982 30448
                        </a>
                      </p>
                      <p>
                        <strong className="text-brand-steel">Postal Address:</strong> KP Fasteners, 23/4 Ghanshyam
                        Industrial Estate, Margha Farm, Ahmedabad - 380024, Gujarat, India.
                      </p>
                    </div>
                  </Card>
                  <p>
                    We acknowledge receipt of all formal grievances within 48 hours and endeavor to provide substantive
                    written resolution within 30 business days or statutory timelines prescribed under operative DPDPA rules.
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold-strong">
                    [LAWYER REVIEW REQUIRED]
                  </p>
                </div>
              </div>

              {/* Clause 9 */}
              <div>
                <Heading as="h2" variant="section">
                  9. Protection of Children&apos;s Privacy
                </Heading>
                <div className="mt-4 space-y-3">
                  <p>
                    KP Fasteners operates strictly as a Business-to-Business (B2B) industrial manufacturer and supplier. Our
                    services and digital properties are directed solely at commercial procurement officers, engineering
                    professionals, and business enterprises. We do not knowingly solicit or collect personal information
                    from children or individuals under the age of 18. If you become aware that a minor has submitted
                    personal data through our website, please notify us immediately for expedited record deletion.
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold-strong">
                    [LAWYER REVIEW REQUIRED]
                  </p>
                </div>
              </div>

              {/* Clause 10 */}
              <div>
                <Heading as="h2" variant="section">
                  10. Amendments and Policy Updates
                </Heading>
                <div className="mt-4 space-y-3">
                  <p>
                    We may periodically update this Privacy Policy to reflect modifications in our manufacturing
                    processes, website enhancements, or amendments to the rules and regulations under the Digital Personal
                    Data Protection Act, 2023. When revisions occur, we will update the &quot;Effective Date&quot; at the top
                    of this page. Continued interaction with our website following such updates constitutes acknowledgement
                    of the revised terms.
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold-strong">
                    [LAWYER REVIEW REQUIRED]
                  </p>
                </div>
              </div>

              {/* Clause 11 */}
              <div>
                <Heading as="h2" variant="section">
                  11. Contact Information for Data Privacy Inquiries
                </Heading>
                <div className="mt-4 space-y-3">
                  <p>
                    For general questions regarding our data governance practices, commercial quote confidentiality, or to
                    review our commercial terms, please contact our Ahmedabad headquarters:
                  </p>
                  <div className="not-prose my-4 grid gap-4 sm:grid-cols-2">
                    <Card variant="default" padding="sm">
                      <div className="flex items-start gap-3">
                        <MapPin aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-brand-gold-strong" />
                        <div className="text-sm">
                          <p className="font-semibold text-brand-steel">Facility &amp; Sales Desk</p>
                          <p className="mt-1 text-ink-muted">
                            23/4 Ghanshyam Industrial Estate, Margha Farm, Ahmedabad - 380024, Gujarat, India.
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
                    Please also review our{' '}
                    <Link href="/terms/" className="font-semibold text-brand-steel underline hover:text-brand-gold-strong">
                      Terms of Supply and Website Use
                    </Link>{' '}
                    governing commercial quotes, manufacturing tolerances, and delivery conditions.
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
                Questions Regarding Our Data Practices?
              </Heading>
              <p className="mx-auto mt-3 max-w-2xl text-ink-muted">
                Our sales and administrative desk in Ahmedabad is available to assist with procurement confidentiality
                agreements, non-disclosure agreements (NDAs) for custom drawings, and data inquiries.
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
