import Link from 'next/link';
import type { BreadcrumbEntry } from '@/types/route';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbs as breadcrumbsSchema } from '@/lib/jsonld';

/**
 * Renders both the visible breadcrumb UI and the BreadcrumbList JSON-LD.
 */
export function Breadcrumbs({ trail }: { trail: BreadcrumbEntry[] }) {
  if (trail.length <= 1) return null;
  return (
    <>
      <nav aria-label="Breadcrumb" className="text-sm text-ink-muted">
        <ol className="flex flex-wrap items-center gap-1">
          {trail.map((t, i) => {
            const isLast = i === trail.length - 1;
            return (
              <li key={t.href} className="flex items-center gap-1">
                {i > 0 && (
                  <span aria-hidden="true" className="text-ink-soft">
                    /
                  </span>
                )}
                {isLast ? (
                  <span aria-current="page" className="font-medium text-ink">
                    {t.label}
                  </span>
                ) : (
                  <Link
                    href={t.href}
                    className="rounded hover:text-brand-gold-strong hover:underline"
                  >
                    {t.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbsSchema(trail)} />
    </>
  );
}
