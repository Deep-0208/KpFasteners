import type { ReactNode } from 'react';

export interface SpecRow {
  cells: ReactNode[];
}

export function SpecTable({ headers, rows, caption }: { headers: string[]; rows: SpecRow[]; caption?: string }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="min-w-full text-sm">
        {caption && <caption className="p-2 text-left text-ink-muted">{caption}</caption>}
        <thead className="bg-surface-alt">
          <tr>
            {headers.map((h) => (
              <th key={h} className="px-3 py-2 text-left font-semibold text-brand-steel">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-border">
              {row.cells.map((c, j) => (
                <td key={j} className="px-3 py-2 font-mono tabular-nums text-ink">
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
