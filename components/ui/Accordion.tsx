import type { ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  question: string;
  answer: ReactNode;
}

/**
 * Native <details>/<summary> accordion — no JS, no client component.
 * The chevron rotates via CSS on `[open]`.
 */
export function Accordion({ items }: { items: AccordionItem[] }) {
  return (
    <div className="divide-y divide-border rounded-lg border border-border bg-surface">
      {items.map((item, i) => (
        <details key={i} className="group">
          <summary
            className="flex cursor-pointer list-none items-center justify-between gap-3 p-4 font-semibold text-brand-steel transition-colors hover:bg-surface-alt/70"
          >
            <span>{item.question}</span>
            <ChevronDown
              aria-hidden="true"
              className="h-5 w-5 shrink-0 text-brand-gold transition-transform duration-200 group-open:rotate-180"
            />
          </summary>
          <div className="accordion-body border-t border-border p-4 text-ink">{item.answer}</div>
        </details>
      ))}
    </div>
  );
}
