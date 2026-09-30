import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { footerGroups } from '@/data/navigation';
import { company } from '@/data/company';

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-alt">
      <Container>
        <div className="grid gap-8 py-12 md:grid-cols-3 lg:grid-cols-5">
          {footerGroups.map((group) => (
            <div key={group.label}>
              <p className="mb-2 text-sm font-semibold text-brand-steel">{group.label}</p>
              <ul className="space-y-1">
                {group.items.map((i) => (
                  <li key={i.href}>
                    <Link href={i.href} className="text-sm text-ink hover:text-brand-steel">
                      {i.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border py-6 text-sm text-ink-muted">
          <p>
            {company.legalName} · {company.address.streetAddress}, {company.address.locality} –{' '}
            {company.address.postalCode}, {company.address.region}, {company.address.country}
          </p>
          <p>Phone: {company.telephones[0]} · Email: {company.email}</p>
          <p className="mt-2">&copy; {new Date().getFullYear()} {company.legalName}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
