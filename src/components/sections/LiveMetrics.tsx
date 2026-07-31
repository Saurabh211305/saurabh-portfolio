"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Counter } from "@/components/motion/Counter";
import { liveMetrics } from "@/data/metrics";

export function LiveMetrics() {
  return (
    <section className="section-light border-b border-line-light py-16">
      <div className="container-fluid">
        <Reveal>
          <p className="text-eyebrow text-signal-ink">The numbers behind the name</p>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-6">
          {liveMetrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.06}>
              <p className="font-mono-data text-2xl font-semibold text-ink sm:text-3xl">
                <Counter value={m.value} prefix={m.prefix} suffix={m.suffix} />
              </p>
              <p className="mt-2 text-xs leading-snug text-muted-on-light">{m.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
