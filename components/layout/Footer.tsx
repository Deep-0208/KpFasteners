import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { footerGroups } from '@/data/navigation';
import { company } from '@/data/company';

// Non-Legal groups render as the main 4-column block; Legal is folded into the meta row.
const mainGroups = footerGroups.filter((g) => g.label !== 'Legal');
const legalGroup = footerGroups.find((g) => g.label === 'Legal');

// Consolidate Materials + Industries into one column visually.
const groupsForColumns = [
  mainGroups.find((g) => g.label === 'Products'),
  {
    label: 'Materials & Industries',
    items: [
      ...(mainGroups.find((g) => g.label === 'Materials')?.items ?? []),
      ...(mainGroups.find((g) => g.label === 'Industries')?.items ?? []),
    ],
  },
  mainGroups.find((g) => g.label === 'Company'),
].filter(Boolean) as { label: string; items: { label: string; href: string }[] }[];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-surface">
      <Container>
        <div className="grid gap-8 py-12 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/brand/logo.jpg.jpeg"
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 rounded object-cover"
              />
              <span className="font-heading text-base font-bold tracking-tight text-brand-steel">
                {company.legalName}
              </span>
            </div>
            <div
              aria-hidden="true"
              className="mt-3 h-[3px] w-16 rounded bg-[image:var(--gold-gradient)]"
            />
            <address className="mt-4 not-italic text-sm text-ink-muted">
              {company.address.streetAddress}
              <br />
              {company.address.locality} – {company.address.postalCode}
              <br />
              {company.address.region}, {company.address.country}
            </address>
            <p className="mt-3 text-sm">
              <a
                href={`tel:${company.telephones[0].replace(/[^\d+]/g, '')}`}
                className="text-ink hover:text-brand-gold-strong"
              >
                {company.telephones[0]}
              </a>
              <br />
              <a
                href={`mailto:${company.email}`}
                className="text-ink hover:text-brand-gold-strong"
              >
                {company.email}
              </a>
            </p>
          </div>
          {groupsForColumns.map((group) => (
            <div key={group.label}>
              <p className="mb-3 font-heading text-xs font-bold uppercase tracking-wider text-brand-gold-strong">
                {group.label}
              </p>
              <ul className="space-y-1.5">
                {group.items.map((i) => (
                  <li key={i.href}>
                    <Link href={i.href} className="text-sm text-ink hover:text-brand-gold-strong">
                      {i.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border py-6 text-xs text-ink-muted">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p>GST 24ARDPP9803A1Z3 · MSME Registered · Proprietorship</p>
            {legalGroup && (
              <ul className="flex flex-wrap gap-4">
                {legalGroup.items.map((i) => (
                  <li key={i.href}>
                    <Link href={i.href} className="hover:text-brand-gold-strong">
                      {i.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <p className="mt-2">
            &copy; {year} {company.legalName}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
