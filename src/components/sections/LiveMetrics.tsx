"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Counter } from "@/components/motion/Counter";
import { liveMetrics } from "@/data/metrics";

export function LiveMetrics() {
  return (
    <section className="section-dark relative overflow-hidden border-b border-line-dark py-14">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/60 to-transparent"
      />
      <div className="container-fluid">
        <Reveal className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
          </span>
          <p className="text-eyebrow text-muted-on-dark">Live readout &mdash; the numbers behind the name</p>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-6">
          {liveMetrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.06} className="border-l border-line-dark pl-4">
              <p className="font-mono-data text-2xl font-semibold text-text-light sm:text-3xl">
                <Counter value={m.value} prefix={m.prefix} suffix={m.suffix} />
              </p>
              <p className="mt-2 text-xs leading-snug text-muted-on-dark">{m.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
