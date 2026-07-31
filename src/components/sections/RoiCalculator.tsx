"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

const industryModels = [
  { key: "real-estate", label: "Real Estate", costPerLead: 900, roas: 12, basis: "Prestige Group programme" },
  { key: "healthcare", label: "Healthcare", costPerLead: 260, roas: 8, basis: "Yashoda Hospitals programme" },
  { key: "fashion-retail", label: "Fashion & Retail", costPerLead: 450, roas: 15, basis: "Rare Rabbit programme" },
  { key: "hospitality", label: "Hospitality & F&B", costPerLead: 600, roas: 7, basis: "Moustache Escapes programme" },
] as const;

function formatInr(n: number) {
  return `₹${Math.round(n).toLocaleString("en-IN")}`;
}

export function RoiCalculator() {
  const [spend, setSpend] = useState(300000);
  const [industryKey, setIndustryKey] = useState<(typeof industryModels)[number]["key"]>(
    "real-estate"
  );

  const model = industryModels.find((m) => m.key === industryKey)!;

  const { leads, revenue } = useMemo(() => {
    return {
      leads: Math.round(spend / model.costPerLead),
      revenue: spend * model.roas,
    };
  }, [spend, model]);

  return (
    <section className="section-light py-28">
      <div className="container-fluid">
        <Reveal>
          <p className="text-eyebrow text-signal-ink">ROI calculator</p>
          <h2 className="font-display mt-4 max-w-2xl text-[clamp(2rem,4vw,3.2rem)] leading-tight">
            What could this budget actually return?
          </h2>
          <p className="mt-4 max-w-xl text-muted-on-light">
            Modelled directly on the real cost-per-lead and ROAS figures from the
            case studies above — not generic industry benchmarks.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-14 grid grid-cols-1 gap-10 rounded-3xl border border-ink/10 bg-surface p-8 md:p-12 lg:grid-cols-2">
          <div>
            <p className="text-eyebrow text-muted-on-light">Industry</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {industryModels.map((m) => (
                <button
                  key={m.key}
                  onClick={() => setIndustryKey(m.key)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                    m.key === industryKey
                      ? "border-signal bg-signal/10 text-signal-ink"
                      : "border-ink/12 text-muted-on-light hover:border-ink/30"
                  )}
                >
                  {m.label}
                </button>
              ))}
            </div>

            <div className="mt-10">
              <div className="flex items-baseline justify-between">
                <p className="text-eyebrow text-muted-on-light">Monthly ad spend</p>
                <p className="font-mono-data text-xl text-ink">{formatInr(spend)}</p>
              </div>
              <input
                type="range"
                min={50000}
                max={5000000}
                step={25000}
                value={spend}
                onChange={(e) => setSpend(Number(e.target.value))}
                className="mt-4 w-full accent-signal"
                aria-label="Monthly ad spend"
              />
              <div className="mt-2 flex justify-between text-xs text-muted-on-light">
                <span>₹50K</span>
                <span>₹50L</span>
              </div>
            </div>

            <p className="mt-8 text-xs text-muted-on-light">
              Modelled on the {model.basis}. Actual results depend on category
              competition, creative, and offer — this is a directional estimate,
              not a guarantee.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-6 rounded-2xl bg-ink p-8 text-text-light">
            <div>
              <p className="text-eyebrow text-muted-on-dark">Estimated qualified leads / month</p>
              <p className="font-mono-data mt-2 text-4xl text-signal">
                {leads.toLocaleString("en-IN")}
              </p>
            </div>
            <div className="border-t border-line-dark pt-6">
              <p className="text-eyebrow text-muted-on-dark">Estimated revenue potential</p>
              <p className="font-mono-data mt-2 text-4xl">{formatInr(revenue)}</p>
            </div>
            <div className="border-t border-line-dark pt-6">
              <p className="text-eyebrow text-muted-on-dark">Modelled ROAS</p>
              <p className="font-mono-data mt-2 text-4xl">{model.roas}x</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
