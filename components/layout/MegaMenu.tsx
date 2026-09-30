import Link from 'next/link';
import { footerGroups } from '@/data/navigation';

/**
 * 4-column mega menu, CSS-only. The Header wraps this in a `.group-hover`
 * container so no JavaScript is needed on desktop.
 */
export function MegaMenu() {
  const groups = footerGroups.filter(
    (g) => g.label === 'Products' || g.label === 'Materials' || g.label === 'Industries' || g.label === 'Company',
  );
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
      {groups.map((group) => (
        <div key={group.label}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-brand-gold-strong">
            {group.label}
          </p>
          <ul className="space-y-1.5">
            {group.items.map((i) => (
              <li key={i.href}>
                <Link
                  href={i.href}
                  className="block rounded text-sm text-ink hover:text-brand-gold-strong"
                >
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
