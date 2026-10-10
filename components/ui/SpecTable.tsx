import type { ReactNode } from 'react';

export interface SpecRow {
  cells: ReactNode[];
}

/**
 * Responsive spec table.
 *   - Horizontal scroll below the sm breakpoint.
 *   - First column is sticky on mobile so row labels stay visible while the user pans.
 *   - Cells use tabular-nums for aligned numeric comparison.
 */
export function SpecTable({
  headers,
  rows,
  caption,
}: {
  headers: string[];
  rows: SpecRow[];
  caption?: string;
}) {
  return (
    <div className="relative w-full min-w-0 max-w-full overflow-hidden">
      <div className="w-full min-w-0 max-w-full overflow-x-auto rounded-lg border border-border shadow-xs">
        <table className="min-w-full text-sm">
        {caption && (
          <caption className="p-2 text-left text-ink-muted">{caption}</caption>
        )}
        <thead className="bg-surface-alt">
          <tr>
            {headers.map((h, i) => (
              <th
                key={h}
                scope="col"
                className={
                  i === 0
                    ? 'sticky left-0 z-10 bg-surface-alt px-3 py-2 text-left font-semibold text-brand-steel'
                    : 'px-3 py-2 text-left font-semibold text-brand-steel'
                }
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="group border-t border-border transition-colors duration-150 hover:bg-surface-alt/60">
              {row.cells.map((c, j) => (
                <td
                  key={j}
                  className={
                    j === 0
                      ? 'sticky left-0 z-10 bg-surface px-3 py-2 font-mono tabular-nums text-ink transition-colors duration-150 group-hover:bg-surface-alt/60'
                      : 'px-3 py-2 font-mono tabular-nums text-ink'
                  }
                >
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
}
