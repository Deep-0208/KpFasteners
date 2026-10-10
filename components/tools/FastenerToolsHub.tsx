'use client';

import { useState, useId } from 'react';
import Link from 'next/link';
import {
  Scale,
  Wrench,
  Anchor,
  Table,
  RotateCcw,
  AlertTriangle,
  FileText,
  Copy,
  Check,
} from 'lucide-react';

/* ────────────────────────────────────────────────────────────
   1. DATA & CONSTANTS
   ──────────────────────────────────────────────────────────── */

type ToolTab = 'weight' | 'torque' | 'embedment' | 'pitch';

interface MaterialOption {
  id: string;
  name: string;
  density: number; // g/cm³
  spec: string;
}

const MATERIALS: MaterialOption[] = [
  { id: 'ms', name: 'Mild Steel / Carbon Steel (IS 2062)', density: 7.85, spec: 'Class 4.6 / 5.6' },
  { id: 'ht-88', name: 'High-Tensile Alloy Steel (Grade 8.8)', density: 7.85, spec: 'ISO 898-1 Class 8.8' },
  { id: 'ht-109', name: 'High-Tensile Alloy Steel (Grade 10.9)', density: 7.85, spec: 'ISO 898-1 Class 10.9' },
  { id: 'ht-129', name: 'High-Tensile Alloy Steel (Grade 12.9)', density: 7.85, spec: 'ISO 898-1 Class 12.9' },
  { id: 'ss304', name: 'Stainless Steel 304 (A2-70)', density: 7.93, spec: 'ASTM A240 / ISO 3506-1' },
  { id: 'ss316', name: 'Stainless Steel 316 / 316L (A4-80)', density: 8.00, spec: 'ASTM A240 / ISO 3506-1' },
];

interface FastenerTypeOption {
  id: string;
  name: string;
  category: 'oem' | 'distribution';
  headFactor: number; // factor applied to shank volume to account for head/hook
  standard: string;
}

const FASTENER_TYPES: FastenerTypeOption[] = [
  { id: 'foundation-j', name: 'Foundation J-Bolt (OEM In-House)', category: 'oem', headFactor: 1.25, standard: 'IS 5624 / IS 2062' },
  { id: 'foundation-l', name: 'Foundation L-Bolt (OEM In-House)', category: 'oem', headFactor: 1.20, standard: 'IS 5624 / IS 2062' },
  { id: 'stud-bolt', name: 'Continuous Stud Bolt (OEM In-House)', category: 'oem', headFactor: 1.00, standard: 'ASTM A193 B7 / B8M' },
  { id: 'sag-rod', name: 'Purlin Sag Rod (OEM In-House)', category: 'oem', headFactor: 1.05, standard: 'IS 2062 Structural' },
  { id: 'hex-bolt', name: 'Hex Head Bolt (Full / Half Thread)', category: 'distribution', headFactor: 1.22, standard: 'DIN 933 / ISO 4017' },
  { id: 'heavy-hex', name: 'Heavy Hex Structural Bolt', category: 'distribution', headFactor: 1.35, standard: 'ASTM A325 / A490' },
  { id: 'csk-allen', name: 'CSK Socket Head Allen Bolt', category: 'distribution', headFactor: 1.15, standard: 'DIN 7991 / ISO 10642' },
  { id: 'hex-nut', name: 'Standard Hex Nut (Per 100 pcs)', category: 'distribution', headFactor: 0.35, standard: 'DIN 934 / ISO 4032' },
  { id: 'plain-washer', name: 'Plain Flat Washer (Per 100 pcs)', category: 'distribution', headFactor: 0.18, standard: 'DIN 125 / ISO 7089' },
];

interface MetricDiameter {
  size: string;
  diameterMm: number;
  coarsePitchMm: number;
  finePitchMm?: number;
  stressAreaMm2: number; // As (mm²)
}

const METRIC_DIAMETERS: MetricDiameter[] = [
  { size: 'M6', diameterMm: 6, coarsePitchMm: 1.0, finePitchMm: 0.75, stressAreaMm2: 20.1 },
  { size: 'M8', diameterMm: 8, coarsePitchMm: 1.25, finePitchMm: 1.0, stressAreaMm2: 36.6 },
  { size: 'M10', diameterMm: 10, coarsePitchMm: 1.5, finePitchMm: 1.25, stressAreaMm2: 58.0 },
  { size: 'M12', diameterMm: 12, coarsePitchMm: 1.75, finePitchMm: 1.5, stressAreaMm2: 84.3 },
  { size: 'M16', diameterMm: 16, coarsePitchMm: 2.0, finePitchMm: 1.5, stressAreaMm2: 157.0 },
  { size: 'M20', diameterMm: 20, coarsePitchMm: 2.5, finePitchMm: 1.5, stressAreaMm2: 245.0 },
  { size: 'M24', diameterMm: 24, coarsePitchMm: 3.0, finePitchMm: 2.0, stressAreaMm2: 353.0 },
  { size: 'M27', diameterMm: 27, coarsePitchMm: 3.0, finePitchMm: 2.0, stressAreaMm2: 459.0 },
  { size: 'M30', diameterMm: 30, coarsePitchMm: 3.5, finePitchMm: 2.0, stressAreaMm2: 561.0 },
  { size: 'M36', diameterMm: 36, coarsePitchMm: 4.0, finePitchMm: 3.0, stressAreaMm2: 817.0 },
  { size: 'M42', diameterMm: 42, coarsePitchMm: 4.5, finePitchMm: 3.0, stressAreaMm2: 1120.0 },
  { size: 'M48', diameterMm: 48, coarsePitchMm: 5.0, finePitchMm: 3.0, stressAreaMm2: 1470.0 },
  { size: 'M56', diameterMm: 56, coarsePitchMm: 5.5, finePitchMm: 4.0, stressAreaMm2: 2030.0 },
  { size: 'M64', diameterMm: 64, coarsePitchMm: 6.0, finePitchMm: 4.0, stressAreaMm2: 2680.0 },
];

interface PropertyClass {
  classId: string;
  name: string;
  proofStressMpa: number; // Rp0.2 or Sp (MPa)
  tensileStrengthMpa: number; // Rm (MPa)
  safetyFactor: number;
}

const PROPERTY_CLASSES: PropertyClass[] = [
  { classId: '4.6', name: 'Class 4.6 (Mild Steel MS)', proofStressMpa: 240, tensileStrengthMpa: 400, safetyFactor: 0.75 },
  { classId: '8.8', name: 'Class 8.8 (High-Tensile Quenched)', proofStressMpa: 640, tensileStrengthMpa: 800, safetyFactor: 0.75 },
  { classId: '10.9', name: 'Class 10.9 (Heavy Engineering)', proofStressMpa: 900, tensileStrengthMpa: 1000, safetyFactor: 0.75 },
  { classId: '12.9', name: 'Class 12.9 (Alloy Socket Cap)', proofStressMpa: 1080, tensileStrengthMpa: 1200, safetyFactor: 0.75 },
  { classId: 'A2-70', name: 'Stainless A2-70 (SS 304 Austenitic)', proofStressMpa: 450, tensileStrengthMpa: 700, safetyFactor: 0.70 },
  { classId: 'A4-80', name: 'Stainless A4-80 (SS 316 Marine)', proofStressMpa: 600, tensileStrengthMpa: 800, safetyFactor: 0.70 },
];

interface FrictionOption {
  id: string;
  name: string;
  coefficient: number; // mu
  description: string;
}

const FRICTION_CONDITIONS: FrictionOption[] = [
  { id: 'oiled', name: 'Lightly Oiled / Black Oxide (Standard)', coefficient: 0.12, description: 'Factory lightly oiled or phosphated finish' },
  { id: 'zinc', name: 'Zinc Electroplated / Passivated', coefficient: 0.15, description: 'Electrogalvanized with blue/yellow chromate' },
  { id: 'hdg', name: 'Hot-Dip Galvanized (HDG Unlubricated)', coefficient: 0.19, description: 'Rough zinc surface, higher rotational friction' },
  { id: 'ss-dry', name: 'Stainless Steel Dry (Anti-Galling Caution)', coefficient: 0.22, description: 'Unlubricated stainless steel thread galling risk' },
  { id: 'mos2', name: 'Moly Lubricated / PTFE Coated', coefficient: 0.09, description: 'Low friction thread compound or fluoropolymer' },
];

/* ────────────────────────────────────────────────────────────
   2. MAIN COMPONENT
   ──────────────────────────────────────────────────────────── */

export function FastenerToolsHub() {
  const [activeTab, setActiveTab] = useState<ToolTab>('weight');
  const [copied, setCopied] = useState(false);

  // Form states for Weight Calculator
  const [fastenerType, setFastenerType] = useState('foundation-j');
  const [material, setMaterial] = useState('ms');
  const [diameter, setDiameter] = useState('M20');
  const [lengthMm, setLengthMm] = useState(400);
  const [quantity, setQuantity] = useState(500);

  // Form states for Torque Calculator
  const [torqueDiameter, setTorqueDiameter] = useState('M16');
  const [propertyClass, setPropertyClass] = useState('8.8');
  const [frictionCondition, setFrictionCondition] = useState('oiled');

  // Form states for Embedment Calculator
  const [embedDiameter, setEmbedDiameter] = useState('M24');
  const [anchorType, setAnchorType] = useState<'j' | 'l' | 'plate'>('j');
  const [concreteGrade, setConcreteGrade] = useState<'M20' | 'M25' | 'M30' | 'M35' | 'M40'>('M25');

  // Unique IDs for accessibility
  const weightTypeId = useId();
  const weightMatId = useId();
  const weightDiaId = useId();
  const weightLenId = useId();
  const weightQtyId = useId();

  const torqueDiaId = useId();
  const torqueClassId = useId();
  const torqueFrictionId = useId();

  const embedDiaId = useId();
  const embedTypeId = useId();
  const embedConcreteId = useId();

  /* ── Calculations ── */

  // 1. Weight Calculations
  const selectedFastener = FASTENER_TYPES.find((f) => f.id === fastenerType) ?? FASTENER_TYPES[0];
  const selectedMaterial = MATERIALS.find((m) => m.id === material) ?? MATERIALS[0];
  const selectedMetric = METRIC_DIAMETERS.find((d) => d.size === diameter) ?? METRIC_DIAMETERS[5];

  // Cylinder volume (cm³) = π * r² * L (in cm)
  const radiusCm = selectedMetric.diameterMm / 20; // mm to cm
  const lengthCm = lengthMm / 10;
  const shankVolumeCm3 = Math.PI * Math.pow(radiusCm, 2) * lengthCm;
  const totalVolumeCm3 = shankVolumeCm3 * selectedFastener.headFactor;

  // Weight (grams) = Volume (cm³) * Density (g/cm³)
  const pieceWeightGrams = totalVolumeCm3 * selectedMaterial.density;
  const pieceWeightKg = pieceWeightGrams / 1000;
  const totalWeightKg = pieceWeightKg * quantity;
  const totalWeightTonnes = totalWeightKg / 1000;

  // 2. Torque Calculations
  const selectedTorqueMetric = METRIC_DIAMETERS.find((d) => d.size === torqueDiameter) ?? METRIC_DIAMETERS[4];
  const selectedClass = PROPERTY_CLASSES.find((c) => c.classId === propertyClass) ?? PROPERTY_CLASSES[1];
  const selectedFriction = FRICTION_CONDITIONS.find((f) => f.id === frictionCondition) ?? FRICTION_CONDITIONS[0];

  // Preload force Fp (N) = 0.9 * Sp * As * safetyFactor
  // Torque T (N·m) ≈ k * d * Fp where k ≈ (0.16 + 0.58 * μ)
  const preloadForceN = 0.9 * selectedClass.proofStressMpa * selectedTorqueMetric.stressAreaMm2 * selectedClass.safetyFactor;
  const preloadForceKn = preloadForceN / 1000;
  const kFactor = 0.16 + 0.58 * selectedFriction.coefficient;
  const torqueNm = (kFactor * (selectedTorqueMetric.diameterMm / 1000) * preloadForceN);
  const torqueLbfFt = torqueNm * 0.737562;

  // 3. Embedment Depth Calculations (IS 456 / ACI 318 recommended minimum 15d to 25d)
  const selectedEmbedMetric = METRIC_DIAMETERS.find((d) => d.size === embedDiameter) ?? METRIC_DIAMETERS[6];
  const dMm = selectedEmbedMetric.diameterMm;

  // Recommended embedment based on anchor type & concrete
  const embedmentFactor = anchorType === 'plate' ? 12 : anchorType === 'l' ? 18 : 20;
  const recommendedEmbedMm = Math.round(dMm * embedmentFactor);
  const hookExtensionMm = anchorType === 'plate' ? Math.round(dMm * 3.5) : Math.round(dMm * 4);
  const minEdgeDistanceMm = Math.round(dMm * 6);
  const minBoltPitchMm = Math.round(dMm * 8);

  const copySummary = () => {
    const text = `KP Fasteners Calculation Summary:
- Type: ${selectedFastener.name} (${selectedFastener.standard})
- Material: ${selectedMaterial.name}
- Size: ${selectedMetric.size} x ${lengthMm}mm
- Quantity: ${quantity} pcs
- Single Weight: ${pieceWeightKg.toFixed(3)} kg (${pieceWeightGrams.toFixed(1)} g)
- Total Batch Weight: ${totalWeightKg.toFixed(1)} kg (${totalWeightTonnes.toFixed(2)} MT)
Generated via KP Fasteners Engineering Tools (https://kpfasteners.com/tools/)`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-12">
      {/* ── TOOL NAVIGATION TABS ── */}
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-border pb-4">
        <button
          type="button"
          onClick={() => setActiveTab('weight')}
          className={`inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
            activeTab === 'weight'
              ? 'bg-brand-steel text-white shadow-md'
              : 'border border-border bg-surface text-steel-700 hover:border-brand-gold hover:text-brand-steel'
          }`}
        >
          <Scale aria-hidden="true" className={`h-4 w-4 ${activeTab === 'weight' ? 'text-brand-gold' : 'text-brand-steel'}`} />
          Fastener Weight Calculator
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('torque')}
          className={`inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
            activeTab === 'torque'
              ? 'bg-brand-steel text-white shadow-md'
              : 'border border-border bg-surface text-steel-700 hover:border-brand-gold hover:text-brand-steel'
          }`}
        >
          <Wrench aria-hidden="true" className={`h-4 w-4 ${activeTab === 'torque' ? 'text-brand-gold' : 'text-brand-steel'}`} />
          Torque &amp; Clamp Load
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('embedment')}
          className={`inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
            activeTab === 'embedment'
              ? 'bg-brand-steel text-white shadow-md'
              : 'border border-border bg-surface text-steel-700 hover:border-brand-gold hover:text-brand-steel'
          }`}
        >
          <Anchor aria-hidden="true" className={`h-4 w-4 ${activeTab === 'embedment' ? 'text-brand-gold' : 'text-brand-steel'}`} />
          Foundation Embedment (IS 456)
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('pitch')}
          className={`inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
            activeTab === 'pitch'
              ? 'bg-brand-steel text-white shadow-md'
              : 'border border-border bg-surface text-steel-700 hover:border-brand-gold hover:text-brand-steel'
          }`}
        >
          <Table aria-hidden="true" className={`h-4 w-4 ${activeTab === 'pitch' ? 'text-brand-gold' : 'text-brand-steel'}`} />
          Metric Thread &amp; Stress Area
        </button>
      </div>

      {/* ────────────────────────────────────────────────────────────
         TAB 1: FASTENER WEIGHT CALCULATOR
         ──────────────────────────────────────────────────────────── */}
      {activeTab === 'weight' && (
        <div className="grid gap-8 lg:grid-cols-12 animate-tab-fade">
          {/* Input Controls */}
          <div className="space-y-6 rounded-2xl border border-border bg-surface p-6 shadow-sm lg:col-span-7">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div>
                <h2 className="font-heading text-lg font-bold text-brand-steel">
                  Theoretical Weight Calculator
                </h2>
                <p className="text-xs text-ink-muted">
                  Accurate volume-density calculations for bulk fastener procurement &amp; freight dispatch.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setFastenerType('foundation-j');
                  setMaterial('ms');
                  setDiameter('M20');
                  setLengthMm(400);
                  setQuantity(500);
                }}
                className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-semibold text-ink-muted hover:bg-surface-alt hover:text-brand-steel"
              >
                <RotateCcw aria-hidden="true" className="h-3.5 w-3.5" />
                Reset
              </button>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {/* Fastener Type */}
              <div className="sm:col-span-2">
                <label htmlFor={weightTypeId} className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-steel">
                  1. Fastener Profile / Type
                </label>
                <select
                  id={weightTypeId}
                  value={fastenerType}
                  onChange={(e) => setFastenerType(e.target.value)}
                  className="w-full rounded-xl border border-border bg-surface px-3.5 py-2.5 text-sm font-medium text-ink focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
                >
                  {FASTENER_TYPES.map((f) => (
                    <option key={f.id} value={f.id}>
                      {f.name} - {f.standard}
                    </option>
                  ))}
                </select>
                {selectedFastener.category === 'oem' && (
                  <p className="mt-1 text-[11px] font-medium text-brand-gold-strong">
                    ★ Manufactured In-House at our Ahmedabad facility to custom drawings
                  </p>
                )}
              </div>

              {/* Material */}
              <div className="sm:col-span-2">
                <label htmlFor={weightMatId} className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-steel">
                  2. Material Grade &amp; Metallurgy
                </label>
                <select
                  id={weightMatId}
                  value={material}
                  onChange={(e) => setMaterial(e.target.value)}
                  className="w-full rounded-xl border border-border bg-surface px-3.5 py-2.5 text-sm font-medium text-ink focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
                >
                  {MATERIALS.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.name} ({m.density} g/cm³)
                    </option>
                  ))}
                </select>
              </div>

              {/* Diameter */}
              <div>
                <label htmlFor={weightDiaId} className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-steel">
                  3. Thread Diameter
                </label>
                <select
                  id={weightDiaId}
                  value={diameter}
                  onChange={(e) => setDiameter(e.target.value)}
                  className="w-full rounded-xl border border-border bg-surface px-3.5 py-2.5 text-sm font-medium text-ink focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
                >
                  {METRIC_DIAMETERS.map((d) => (
                    <option key={d.size} value={d.size}>
                      {d.size} ({d.diameterMm} mm, pitch {d.coarsePitchMm}mm)
                    </option>
                  ))}
                </select>
              </div>

              {/* Length */}
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor={weightLenId} className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-steel">
                    4. Nominal Length (mm)
                  </label>
                  <span className="text-xs font-mono font-semibold text-brand-gold-strong">{lengthMm} mm</span>
                </div>
                <input
                  id={weightLenId}
                  type="number"
                  min={16}
                  max={2000}
                  step={5}
                  value={lengthMm}
                  onChange={(e) => setLengthMm(Math.max(10, Number(e.target.value)))}
                  className="w-full rounded-xl border border-border bg-surface px-3.5 py-2.5 text-sm font-medium text-ink focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
                />
              </div>

              {/* Quantity */}
              <div className="sm:col-span-2">
                <div className="flex items-center justify-between">
                  <label htmlFor={weightQtyId} className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-steel">
                    5. Order Quantity (Pcs)
                  </label>
                  <span className="text-xs font-mono font-semibold text-brand-steel">{quantity.toLocaleString('en-IN')} pcs</span>
                </div>
                <input
                  id={weightQtyId}
                  type="number"
                  min={1}
                  max={1000000}
                  step={50}
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                  className="w-full rounded-xl border border-border bg-surface px-3.5 py-2.5 text-sm font-medium text-ink focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
                />
              </div>
            </div>
          </div>

          {/* Results Summary Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-border bg-surface-alt p-6 shadow-sm lg:col-span-5">
            <div>
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                  Batch Output Summary
                </span>
                <span className="inline-flex items-center gap-1 rounded bg-brand-gold/15 px-2 py-0.5 text-xs font-semibold text-brand-gold-strong">
                  Theoretical Estimate
                </span>
              </div>

              <div className="my-6 space-y-4">
                <div className="rounded-xl border border-border bg-surface p-4">
                  <p className="text-xs text-ink-muted">Single Unit Weight</p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="font-mono text-3xl font-bold tracking-tight text-brand-steel">
                      {pieceWeightKg < 1 ? pieceWeightGrams.toFixed(1) : pieceWeightKg.toFixed(3)}
                    </span>
                    <span className="text-sm font-semibold text-ink-muted">
                      {pieceWeightKg < 1 ? 'grams / pc' : 'kg / pc'}
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] text-ink-soft">
                    Includes {selectedFastener.name.toLowerCase()} geometry allowance
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-surface p-4">
                  <p className="text-xs text-ink-muted">Total Batch Weight ({quantity.toLocaleString('en-IN')} pcs)</p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="font-mono text-3xl font-bold tracking-tight text-brand-gold-strong">
                      {totalWeightKg >= 1000 ? totalWeightTonnes.toFixed(2) : totalWeightKg.toFixed(1)}
                    </span>
                    <span className="text-sm font-semibold text-ink-muted">
                      {totalWeightKg >= 1000 ? 'Metric Tonnes (MT)' : 'Kilograms (kg)'}
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] text-ink-soft">
                    ≈ {totalWeightKg.toFixed(0)} kg gross weight for freight calculation
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-lg border border-border bg-surface p-2.5">
                    <p className="text-[11px] text-ink-muted">Est. Dispatch Packing</p>
                    <p className="font-semibold text-brand-steel">
                      ≈ {Math.max(1, Math.ceil(totalWeightKg / 50))} gunny bags (50kg)
                    </p>
                  </div>
                  <div className="rounded-lg border border-border bg-surface p-2.5">
                    <p className="text-[11px] text-ink-muted">MTC 3.1 Availability</p>
                    <p className="font-semibold text-accent-green">
                      Full Lab Chemical &amp; Tensile
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-border">
              <button
                type="button"
                onClick={copySummary}
                className="btn btn-secondary flex w-full items-center justify-center gap-2 py-2.5 text-xs"
              >
                {copied ? (
                  <>
                    <Check aria-hidden="true" className="h-3.5 w-3.5 text-accent-green" />
                    Copied Summary to Clipboard!
                  </>
                ) : (
                  <>
                    <Copy aria-hidden="true" className="h-3.5 w-3.5" />
                    Copy Specification &amp; Weight Data
                  </>
                )}
              </button>

              <Link
                href={`/request-quote/?fastener=${encodeURIComponent(selectedFastener.name)}&size=${diameter}x${lengthMm}&qty=${quantity}&weight=${totalWeightKg.toFixed(0)}kg`}
                className="btn btn-primary flex w-full items-center justify-center gap-2 py-3 text-sm font-semibold"
              >
                <FileText aria-hidden="true" className="h-4 w-4" />
                Request Commercial RFQ for this Batch →
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ────────────────────────────────────────────────────────────
         TAB 2: TORQUE & CLAMP LOAD CALCULATOR
         ──────────────────────────────────────────────────────────── */}
      {activeTab === 'torque' && (
        <div className="grid gap-8 lg:grid-cols-12 animate-tab-fade">
          {/* Input Controls */}
          <div className="space-y-6 rounded-2xl border border-border bg-surface p-6 shadow-sm lg:col-span-7">
            <div className="border-b border-border pb-4">
              <h2 className="font-heading text-lg font-bold text-brand-steel">
                Bolt Tightening Torque &amp; Preload Calculator
              </h2>
              <p className="text-xs text-ink-muted">
                Calculates recommended assembly torque and axial clamp force based on ISO 898-1 and VDI 2230 guidelines.
              </p>
            </div>

            <div className="space-y-5">
              {/* Diameter */}
              <div>
                <label htmlFor={torqueDiaId} className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-steel">
                  Thread Diameter (Metric Standard)
                </label>
                <select
                  id={torqueDiaId}
                  value={torqueDiameter}
                  onChange={(e) => setTorqueDiameter(e.target.value)}
                  className="w-full rounded-xl border border-border bg-surface px-3.5 py-2.5 text-sm font-medium text-ink focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
                >
                  {METRIC_DIAMETERS.filter((d) => d.diameterMm <= 36).map((d) => (
                    <option key={d.size} value={d.size}>
                      {d.size} (Nominal Pitch {d.coarsePitchMm}mm, Stress Area {d.stressAreaMm2} mm²)
                    </option>
                  ))}
                </select>
              </div>

              {/* Property Class */}
              <div>
                <label htmlFor={torqueClassId} className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-steel">
                  Bolt Property Class / Grade
                </label>
                <select
                  id={torqueClassId}
                  value={propertyClass}
                  onChange={(e) => setPropertyClass(e.target.value)}
                  className="w-full rounded-xl border border-border bg-surface px-3.5 py-2.5 text-sm font-medium text-ink focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
                >
                  {PROPERTY_CLASSES.map((c) => (
                    <option key={c.classId} value={c.classId}>
                      {c.name} - Yield/Proof {c.proofStressMpa} MPa
                    </option>
                  ))}
                </select>
              </div>

              {/* Friction Condition */}
              <div>
                <label htmlFor={torqueFrictionId} className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-steel">
                  Friction Coefficient &amp; Coating Condition
                </label>
                <select
                  id={torqueFrictionId}
                  value={frictionCondition}
                  onChange={(e) => setFrictionCondition(e.target.value)}
                  className="w-full rounded-xl border border-border bg-surface px-3.5 py-2.5 text-sm font-medium text-ink focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
                >
                  {FRICTION_CONDITIONS.map((fc) => (
                    <option key={fc.id} value={fc.id}>
                      {fc.name} (μ = {fc.coefficient})
                    </option>
                  ))}
                </select>
                <p className="mt-1 text-[11px] text-ink-soft">
                  {selectedFriction.description}
                </p>
              </div>

              {selectedClass.classId.startsWith('A') && (
                <div className="flex items-start gap-2.5 rounded-xl border border-brand-gold/30 bg-brand-gold-soft p-3 text-xs text-brand-gold-strong">
                  <AlertTriangle aria-hidden="true" className="h-4 w-4 shrink-0 text-brand-gold-strong" />
                  <p>
                    <strong>Anti-Galling Notice:</strong> Stainless steel fasteners (304/316) are prone to thread galling (cold welding) under high rotational friction. Use anti-seize lubricant or specify passivated threads.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Results Summary Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-border bg-surface-alt p-6 shadow-sm lg:col-span-5">
            <div>
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                  Engineering Preload Output
                </span>
                <span className="inline-flex items-center gap-1 rounded bg-brand-steel/15 px-2 py-0.5 text-xs font-semibold text-brand-steel">
                  VDI 2230 Guidance
                </span>
              </div>

              <div className="my-6 space-y-4">
                <div className="rounded-xl border border-border bg-surface p-4">
                  <p className="text-xs text-ink-muted">Recommended Tightening Torque</p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="font-mono text-3xl font-bold tracking-tight text-brand-steel">
                      {Math.round(torqueNm)}
                    </span>
                    <span className="text-sm font-semibold text-brand-gold-strong">N·m</span>
                    <span className="ml-2 text-xs font-mono text-ink-muted">
                      ({Math.round(torqueLbfFt)} lbf·ft)
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] text-ink-soft">
                    Calibrated torque wrench setting for target clamp load
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-surface p-4">
                  <p className="text-xs text-ink-muted">Bolt Preload Tension (Clamp Force)</p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="font-mono text-3xl font-bold tracking-tight text-brand-gold-strong">
                      {preloadForceKn.toFixed(1)}
                    </span>
                    <span className="text-sm font-semibold text-ink-muted">kN</span>
                    <span className="ml-2 text-xs font-mono text-ink-muted">
                      ({Math.round(preloadForceKn * 101.97)} kgf)
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] text-ink-soft">
                    Utilizes ~{(selectedClass.safetyFactor * 100).toFixed(0)}% of proof strength under tension
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-surface p-3 text-xs">
                  <p className="font-semibold text-brand-steel">Specification Snapshot:</p>
                  <ul className="mt-1 space-y-1 text-ink-muted">
                    <li>• Tensile Stress Area ($A_s$): <span className="font-mono font-medium text-ink">{selectedTorqueMetric.stressAreaMm2} mm²</span></li>
                    <li>• Proof Strength ($S_p$): <span className="font-mono font-medium text-ink">{selectedClass.proofStressMpa} MPa</span></li>
                    <li>• Min Tensile ($R_m$): <span className="font-mono font-medium text-ink">{selectedClass.tensileStrengthMpa} MPa</span></li>
                  </ul>
                </div>
              </div>
            </div>

            <Link
              href="/request-quote/?category=high-tensile"
              className="btn btn-primary flex w-full items-center justify-center gap-2 py-3 text-sm font-semibold"
            >
              Order Calibrated High-Tensile Bolts →
            </Link>
          </div>
        </div>
      )}

      {/* ────────────────────────────────────────────────────────────
         TAB 3: FOUNDATION BOLT EMBEDMENT ESTIMATOR (IS 456)
         ──────────────────────────────────────────────────────────── */}
      {activeTab === 'embedment' && (
        <div className="grid gap-8 lg:grid-cols-12 animate-tab-fade">
          {/* Input Controls */}
          <div className="space-y-6 rounded-2xl border border-border bg-surface p-6 shadow-sm lg:col-span-7">
            <div className="border-b border-border pb-4">
              <span className="badge badge-gold mb-2">KP In-House OEM Specialty</span>
              <h2 className="font-heading text-lg font-bold text-brand-steel">
                Foundation &amp; Anchor Bolt Embedment Estimator
              </h2>
              <p className="text-xs text-ink-muted">
                Calculates minimum concrete embedment depth and hook extensions in accordance with IS 456 / IS 5624 structural guidelines.
              </p>
            </div>

            <div className="space-y-5">
              {/* Diameter */}
              <div>
                <label htmlFor={embedDiaId} className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-steel">
                  Anchor Bolt Diameter
                </label>
                <select
                  id={embedDiaId}
                  value={embedDiameter}
                  onChange={(e) => setEmbedDiameter(e.target.value)}
                  className="w-full rounded-xl border border-border bg-surface px-3.5 py-2.5 text-sm font-medium text-ink focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
                >
                  {METRIC_DIAMETERS.filter((d) => d.diameterMm >= 12 && d.diameterMm <= 48).map((d) => (
                    <option key={d.size} value={d.size}>
                      {d.size} ({d.diameterMm} mm shank diameter)
                    </option>
                  ))}
                </select>
              </div>

              {/* Anchor Type */}
              <div>
                <label htmlFor={embedTypeId} className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-steel">
                  Anchor Hook / Base Configuration
                </label>
                <select
                  id={embedTypeId}
                  value={anchorType}
                  onChange={(e) => setAnchorType(e.target.value as 'j' | 'l' | 'plate')}
                  className="w-full rounded-xl border border-border bg-surface px-3.5 py-2.5 text-sm font-medium text-ink focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
                >
                  <option value="j">J-Type Hook Bolt (IS 5624 Type B)</option>
                  <option value="l">90° L-Type Bend Bolt (IS 5624 Type A)</option>
                  <option value="plate">Straight Anchor with Base Bearing Plate</option>
                </select>
              </div>

              {/* Concrete Grade */}
              <div>
                <label htmlFor={embedConcreteId} className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-steel">
                  Foundation Concrete Grade
                </label>
                <select
                  id={embedConcreteId}
                  value={concreteGrade}
                  onChange={(e) => setConcreteGrade(e.target.value as 'M20' | 'M25' | 'M30' | 'M35' | 'M40')}
                  className="w-full rounded-xl border border-border bg-surface px-3.5 py-2.5 text-sm font-medium text-ink focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
                >
                  <option value="M20">M20 Grade (Characteristic Strength 20 N/mm²)</option>
                  <option value="M25">M25 Grade (Characteristic Strength 25 N/mm² - Recommended)</option>
                  <option value="M30">M30 Grade (Characteristic Strength 30 N/mm²)</option>
                  <option value="M35">M35 Grade (Characteristic Strength 35 N/mm²)</option>
                  <option value="M40">M40 Grade (Characteristic Strength 40 N/mm² Heavy Base)</option>
                </select>
              </div>

              <div className="rounded-xl border border-border bg-surface-alt p-3.5 text-xs text-ink-muted">
                <p className="font-semibold text-brand-steel">Manufacturing Note:</p>
                <p className="mt-0.5">
                  KP Fasteners manufactures custom foundation bolts with single or double nuts, heavy base plates, anchor sleeves, and pipe template frames at our Ghanshyam Industrial Estate plant.
                </p>
              </div>
            </div>
          </div>

          {/* Results Summary Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-border bg-surface-alt p-6 shadow-sm lg:col-span-5">
            <div>
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                  Embedment Design Rules
                </span>
                <span className="inline-flex items-center gap-1 rounded bg-brand-gold/15 px-2 py-0.5 text-xs font-semibold text-brand-gold-strong">
                  IS 456 Clause 26.2
                </span>
              </div>

              <div className="my-6 space-y-4">
                <div className="rounded-xl border border-border bg-surface p-4">
                  <p className="text-xs text-ink-muted">Recommended Min Embedment Depth ($L_e$)</p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="font-mono text-3xl font-bold tracking-tight text-brand-steel">
                      {recommendedEmbedMm}
                    </span>
                    <span className="text-sm font-semibold text-brand-gold-strong">mm</span>
                    <span className="ml-2 text-xs font-mono text-ink-muted">
                      ({(recommendedEmbedMm / 25.4).toFixed(1)} inches)
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] text-ink-soft">
                    ≈ {embedmentFactor}× nominal diameter ({dMm}mm) into {concreteGrade} concrete
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-xl border border-border bg-surface p-3">
                    <p className="text-[11px] text-ink-muted">Hook / Bend Extension</p>
                    <p className="mt-0.5 font-mono text-lg font-bold text-brand-steel">{hookExtensionMm} mm</p>
                    <p className="text-[10px] text-ink-soft">≈ 4d standard tail</p>
                  </div>

                  <div className="rounded-xl border border-border bg-surface p-3">
                    <p className="text-[11px] text-ink-muted">Min Edge Clearance</p>
                    <p className="mt-0.5 font-mono text-lg font-bold text-brand-steel">{minEdgeDistanceMm} mm</p>
                    <p className="text-[10px] text-ink-soft">To prevent edge spalling</p>
                  </div>
                </div>

                <div className="rounded-lg border border-border bg-surface p-3 text-xs">
                  <p className="font-semibold text-brand-steel">Anchor Spacing (Pitch):</p>
                  <p className="mt-0.5 text-ink-muted">
                    Minimum recommended center-to-center bolt pitch is <span className="font-mono font-semibold text-ink">{minBoltPitchMm} mm</span> (8d) to avoid concrete cone overlap.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href={`/request-quote/?category=foundation-bolts&diameter=${embedDiameter}&embedment=${recommendedEmbedMm}mm`}
              className="btn btn-primary flex w-full items-center justify-center gap-2 py-3 text-sm font-semibold"
            >
              Submit Foundation Drawing for RFQ →
            </Link>
          </div>
        </div>
      )}

      {/* ────────────────────────────────────────────────────────────
         TAB 4: METRIC THREAD & TENSILE STRESS AREA REFERENCE
         ──────────────────────────────────────────────────────────── */}
      {activeTab === 'pitch' && (
        <div className="space-y-6 animate-tab-fade">
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
              <div>
                <h2 className="font-heading text-lg font-bold text-brand-steel">
                  Metric Fastener Engineering Reference Matrix (ISO 898-1 / DIN 13)
                </h2>
                <p className="text-xs text-ink-muted">
                  Tensile stress area (As), nominal pitch, and proof load ratings across coarse metric fasteners.
                </p>
              </div>
              <span className="badge badge-steel">Engineering Reference</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-border bg-surface-alt text-brand-steel">
                    <th scope="col" className="p-3 font-semibold">Nominal Size</th>
                    <th scope="col" className="p-3 font-semibold">Major Dia (mm)</th>
                    <th scope="col" className="p-3 font-semibold">Coarse Pitch (mm)</th>
                    <th scope="col" className="p-3 font-semibold">Stress Area $A_s$ (mm²)</th>
                    <th scope="col" className="p-3 font-semibold">Tap Drill Size (mm)</th>
                    <th scope="col" className="p-3 font-semibold">Proof Load 4.6 (kN)</th>
                    <th scope="col" className="p-3 font-semibold">Proof Load 8.8 (kN)</th>
                    <th scope="col" className="p-3 font-semibold">Proof Load 10.9 (kN)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {METRIC_DIAMETERS.map((row) => {
                    const tapDrill = (row.diameterMm - row.coarsePitchMm).toFixed(1);
                    const proof46 = ((row.stressAreaMm2 * 240) / 1000).toFixed(1);
                    const proof88 = ((row.stressAreaMm2 * 640) / 1000).toFixed(1);
                    const proof109 = ((row.stressAreaMm2 * 900) / 1000).toFixed(1);

                    return (
                      <tr key={row.size} className="hover:bg-surface-alt/70 font-mono">
                        <td className="p-3 font-bold text-brand-steel font-heading">{row.size}</td>
                        <td className="p-3">{row.diameterMm}.0</td>
                        <td className="p-3">{row.coarsePitchMm.toFixed(2)}</td>
                        <td className="p-3 font-semibold text-brand-gold-strong">{row.stressAreaMm2}</td>
                        <td className="p-3 text-ink-muted">{tapDrill}</td>
                        <td className="p-3 text-ink-muted">{proof46}</td>
                        <td className="p-3 font-semibold text-brand-steel">{proof88}</td>
                        <td className="p-3 font-semibold text-brand-gold-strong">{proof109}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-[11px] text-ink-soft">
              <p>* Formula: As = (π / 4) × ((d2 + d3) / 2)² per ISO 898-1 standards.</p>
              <p>Proof Load = As × Sp (where Sp is characteristic proof stress per property class).</p>
            </div>
          </div>
        </div>
      )}

      {/* ────────────────────────────────────────────────────────────
         5. BOTTOM QUALITY & MTC CERTIFICATION TRUST BAR (RETAINING QUALITY SCOPE)
         ──────────────────────────────────────────────────────────── */}
      <div className="rounded-2xl border border-border bg-surface-alt p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
          <div className="space-y-2 lg:col-span-8">
            <div className="flex items-center gap-2 text-brand-gold-strong">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-live-pulse absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-green" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider">
                Full Testing &amp; Material Test Certificate (MTC) Guarantee
              </span>
            </div>
            <h3 className="font-heading text-xl font-bold text-brand-steel">
              EN 10204 3.1 Certified Test Certificates on Every Dispatch
            </h3>
            <p className="text-sm text-ink-muted leading-relaxed">
              Every production heat of anchor bolts, stud bolts, and high-tensile hardware manufactured at KP Fasteners is verified through optical emission spectrometry (chemical analysis), calibrated universal tensile testing (UTS &amp; Yield), and Rockwell hardness checks.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
            <Link
              href="/request-quote/?cert=mtc-3.1"
              className="btn btn-primary btn-shimmer flex items-center justify-center gap-2 py-3 text-sm font-semibold"
            >
              Request Quote with MTC →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
