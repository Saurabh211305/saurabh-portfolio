"use client";

import { Check, Minus, X } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";

type Support = boolean | "partial";

const rows: { label: string; adsurgeon: Support; agency: Support; inhouse: Support }[] = [
  { label: "Direct access to the person running your account", adsurgeon: true, agency: false, inhouse: true },
  { label: "Cross-industry pattern-matching from 20+ verticals", adsurgeon: true, agency: "partial", inhouse: false },
  { label: "Full-funnel: strategy, media buying, creative, analytics", adsurgeon: true, agency: "partial", inhouse: false },
  { label: "Weekly optimisation cycles, not monthly reports", adsurgeon: true, agency: false, inhouse: true },
  { label: "International (UAE) campaign experience", adsurgeon: true, agency: "partial", inhouse: false },
  { label: "Junior account manager learning on your budget", adsurgeon: false, agency: true, inhouse: false },
];

function Cell({ value }: { value: Support }) {
  if (value === true) return <Check className="mx-auto h-5 w-5 text-signal" />;
  if (value === "partial") return <Minus className="mx-auto h-5 w-5 text-muted-on-dark" />;
  return <X className="mx-auto h-5 w-5 text-muted-on-dark/50" />;
}

export function ComparisonFrame() {
  return (
    <section className="section-dark py-28">
      <div className="container-fluid">
        <Reveal>
          <p className="text-eyebrow text-signal">How this compares</p>
        </Reveal>
        <SplitReveal
          as="h2"
          className="font-display mt-4 max-w-2xl text-[clamp(2rem,4.5vw,3.4rem)] leading-tight text-text-light"
        >
          Not a full agency. Not a junior hire. A specialist embedded in your business.
        </SplitReveal>

        <Reveal delay={0.15} className="mt-14 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse overflow-hidden rounded-3xl border border-white/10 bg-ink-soft text-sm">
            <thead>
              <tr className="border-b border-white/10 text-left">
                <th className="p-6 font-normal text-muted-on-dark">Capability</th>
                <th className="p-6 text-center font-semibold text-text-light">The AdSurgeon</th>
                <th className="p-6 text-center font-normal text-muted-on-dark">Typical Agency</th>
                <th className="p-6 text-center font-normal text-muted-on-dark">In-house Hire</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-b border-white/5 last:border-b-0">
                  <td className="p-6 text-text-light/80">{row.label}</td>
                  <td className="bg-signal/10 p-6 text-center">
                    <Cell value={row.adsurgeon} />
                  </td>
                  <td className="p-6 text-center">
                    <Cell value={row.agency} />
                  </td>
                  <td className="p-6 text-center">
                    <Cell value={row.inhouse} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}
