import fs from 'node:fs';

const pages = [
  'app/(site)/about/page.tsx',
  'app/(site)/products/page.tsx',
  'app/(site)/products/foundation-bolts/page.tsx',
  'app/(site)/products/stud-bolts/page.tsx',
  'app/(site)/products/sag-rods/page.tsx',
  'app/(site)/products/scaffold-accessories/page.tsx',
  'app/(site)/products/hex-bolts-nuts/page.tsx',
  'app/(site)/products/csk-allen-bolts/page.tsx',
  'app/(site)/products/tie-rods/page.tsx',
  'app/(site)/products/solar-accessories/page.tsx',
  'app/(site)/products/custom-fasteners/page.tsx',
  'app/(site)/materials/high-tensile-fasteners/page.tsx',
  'app/(site)/materials/stainless-steel-fasteners/page.tsx',
  'app/(site)/industries/solar-mounting-fasteners/page.tsx',
  'app/(site)/industries/construction-infrastructure/page.tsx',
  'app/(site)/industries/automotive-heavy-engineering/page.tsx',
];

for (const p of pages) {
  if (fs.existsSync(p)) {
    const code = fs.readFileSync(p, 'utf8');
    const m = code.match(/const HERO_IMAGE\s*=\s*['"]([^'"]+)['"]/);
    console.log(`${p}: HERO_IMAGE = ${m ? m[1] : 'NONE'}`);
  }
}
