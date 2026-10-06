import fs from 'node:fs';
import path from 'node:path';

const dir = path.resolve('audit-reports/2026-10-06/axe');
const summary = JSON.parse(fs.readFileSync(path.join(dir, 'summary.json'), 'utf8'));
const violationsByRoute = {};
let totalViolations = 0;

for (const item of summary) {
  if (fs.existsSync(item.file)) {
    const raw = JSON.parse(fs.readFileSync(item.file, 'utf8'));
    const res = Array.isArray(raw) ? raw[0] : raw;
    const v = res.violations || [];
    violationsByRoute[item.route] = v.map(vi => ({
      id: vi.id,
      impact: vi.impact,
      description: vi.description,
      help: vi.help,
      nodesCount: vi.nodes?.length,
      nodes: vi.nodes?.map(n => ({ html: n.html, target: n.target, failureSummary: n.failureSummary }))
    }));
    totalViolations += v.length;
  }
}

fs.writeFileSync(path.join(dir, 'violations-detailed.json'), JSON.stringify(violationsByRoute, null, 2));
console.log('Total violation rules triggered:', totalViolations);
for (const [r, viols] of Object.entries(violationsByRoute)) {
  if (viols.length > 0) {
    console.log(r + ': ' + viols.map(v => `${v.id} (${v.impact}) x${v.nodesCount}`).join(', '));
  } else {
    console.log(r + ': 0 violations (CLEAN)');
  }
}
