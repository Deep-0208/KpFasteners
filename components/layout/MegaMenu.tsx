import Link from 'next/link';
import { footerGroups } from '@/data/navigation';

/**
 * CSS-only mega menu. Currently mounted only on demand.
 * Kept minimal in Phase A — full-width layout will land in Phase B.
 */
export function MegaMenu() {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
      {footerGroups
        .filter((g) => g.label !== 'Legal')
        .map((group) => (
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
  );
}
