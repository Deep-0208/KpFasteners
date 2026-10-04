import fs from 'node:fs';
import path from 'node:path';

const raw = JSON.parse(fs.readFileSync('audit-reports/2026-10-04/raw-verification-pending.json', 'utf8'));

// Filter only code files
const codeMarkers = raw.filter(m => /^(app|components|data|lib)/.test(m.file));

// Categorize markers
const categories = {
  'Founding Year & Operational History': [],
  'Founder & Management Identification (Pramod vs Kabir Panchal)': [],
  'Factory Facility, Machinery & Plot Area': [],
  'Third-Party Quality Certifications (ISO 9001 / IATF)': [],
  'Material Grades & Public Standards Confirmation': [],
  'Tonnage, Lead Times & MOQ Constraints': [],
  'Testing Laboratory & Inspection Equipment': [],
  'Export Capability & IEC License': [],
  'Other Technical & Commercial Claims': []
};

for (const m of codeMarkers) {
  const t = m.text.toLowerCase();
  let item = {
    file: m.file.replace(/\\/g, '/'),
    line: m.line,
    raw: m.text,
    question: ''
  };

  if (t.includes('founding year') || t.includes('pre-2017') || t.includes('history')) {
    item.question = 'What is the exact founding year of commercial operations for KP Fasteners? (GST registered 2017; pre-2017 proof required to claim earlier operating history).';
    categories['Founding Year & Operational History'].push(item);
  } else if (t.includes('pramod') || t.includes('kabir') || t.includes('owner') || t.includes('founder') || t.includes('md')) {
    item.question = 'Clarify legal founder and management roles: Is Mr. Pramod Panchal the Proprietor and Mr. Kabir Panchal the Managing Director / day-to-day contact? How should each be cited on About page and Schema?';
    categories['Founder & Management Identification (Pramod vs Kabir Panchal)'].push(item);
  } else if (t.includes('square footage') || t.includes('shop floor') || t.includes('machine inventory') || t.includes('plot area') || t.includes('photograph of factory')) {
    item.question = 'Provide exact factory shop-floor square footage, cold heading/forging machinery roster, and real factory exterior/interior photographs with permission to publish.';
    categories['Factory Facility, Machinery & Plot Area'].push(item);
  } else if (t.includes('iso') || t.includes('iatf') || t.includes('third-party') || t.includes('ce') || t.includes('en 10204')) {
    item.question = 'Confirm active third-party quality certifications held (e.g. ISO 9001:2015, certifying body, certificate number and valid expiry date). Do not claim ISO without certificate copies.';
    categories['Third-Party Quality Certifications (ISO 9001 / IATF)'].push(item);
  } else if (t.includes('grade') || t.includes('standard') || t.includes('astm') || t.includes('din') || t.includes('stainless')) {
    item.question = 'Confirm exact material grades and dimensional standards KP Fasteners actively manufactures vs trades. Can KP issue EN 10204 3.1 MTC for these specs?';
    categories['Material Grades & Public Standards Confirmation'].push(item);
  } else if (t.includes('tonnage') || t.includes('lead time') || t.includes('moq') || t.includes('capacity')) {
    item.question = 'Confirm monthly production tonnage capacity, standard dispatch lead times across Gujarat/pan-India, and minimum order quantities per product line.';
    categories['Tonnage, Lead Times & MOQ Constraints'].push(item);
  } else if (t.includes('lab') || t.includes('testing') || t.includes('caliper') || t.includes('tensile machine') || t.includes('salt spray')) {
    item.question = 'Confirm in-house testing equipment (tensile test bench, optical profile projector, digital verniers, hardness testers) vs outsourced NABL lab testing.';
    categories['Testing Laboratory & Inspection Equipment'].push(item);
  } else if (t.includes('export') || t.includes('iec') || t.includes('countries')) {
    item.question = 'Does KP Fasteners hold an active Importer-Exporter Code (IEC)? What countries have received direct exports, or is supply 100% domestic/indirect?';
    categories['Export Capability & IEC License'].push(item);
  } else {
    item.question = 'Technical/commercial parameter requires client verification before removing caution tag.';
    categories['Other Technical & Commercial Claims'].push(item);
  }
}

let md = `# Consolidated Inventory: Verification Pending Markers
**Audit Date:** 2026-10-04  
**Project:** KP Fasteners Web Platform (Pre-Launch)  
**Total Markers in Source Code:** ${codeMarkers.length}  

> **OPERATIONAL DIRECTIVE (AGENTS.md & docs/business-profile.md):**  
> "Never invent company facts, factory square footage, machine rosters, certifications (ISO, CE), material grades, tensile ratings, or customer logos. If data is unknown, flag it for client verification."  
> 
> Below is the exhaustive record of all verification markers placed inside the production code. Each entry details the file, line number, code context, and the exact question required to be answered by Kabir Panchal / Pramod Panchal before production sign-off.

---

## Executive Breakdown by Category

| Category | Markers Count | Impacted Subsystems |
|---|---|---|
`;

for (const [cat, items] of Object.entries(categories)) {
  const files = [...new Set(items.map(i => i.file))];
  md += `| **${cat}** | ${items.length} | \`${files.map(f => f.split('/').pop()).join(', ')}\` |\n`;
}

md += `\n---\n\n## Detailed Inventory & Client Questionnaire\n\n`;

for (const [cat, items] of Object.entries(categories)) {
  if (items.length === 0) continue;
  md += `### ${cat} (${items.length} markers)\n\n`;
  md += `**Client Question for Kabir Panchal:**  \n> *${items[0].question}*\n\n`;
  md += `| File Path | Line | Code Context |\n`;
  md += `|---|---|---|\n`;
  for (const it of items) {
    const cleanText = it.raw.replace(/[{}/*]/g, '').trim().replace(/\|/g, '\\|');
    md += `| \`${it.file}\` | \`${it.line}\` | ${cleanText} |\n`;
  }
  md += `\n`;
}

fs.writeFileSync('audit-reports/2026-10-04/verification-pending.md', md);
console.log('Saved audit-reports/2026-10-04/verification-pending.md');
