import type { ReactNode } from 'react';

interface AccordionItem {
  question: string;
  answer: ReactNode;
}

export function Accordion({ items }: { items: AccordionItem[] }) {
  return (
    <div className="divide-y divide-border rounded-lg border border-border bg-surface">
      {items.map((item, i) => (
        <details key={i} className="group p-4">
          <summary className="cursor-pointer list-none font-semibold text-brand-steel">
            {item.question}
          </summary>
          <div className="mt-2 text-ink">{item.answer}</div>
        </details>
      ))}
    </div>
  );
}
