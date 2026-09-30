import { SpecTable, type SpecRow } from '@/components/ui/SpecTable';

export function GradeTable({ headers, rows }: { headers: string[]; rows: SpecRow[] }) {
  return <SpecTable headers={headers} rows={rows} />;
}
