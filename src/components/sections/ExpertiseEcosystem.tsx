"use client";

import { Reveal } from "@/components/motion/Reveal";
import { expertise } from "@/data/metrics";

export function ExpertiseEcosystem() {
  return (
    <section id="expertise" className="section-light py-28">
      <div className="container-fluid">
        <Reveal>
          <p className="text-eyebrow text-signal-ink">The expertise ecosystem</p>
          <h2 className="font-display mt-4 max-w-2xl text-[clamp(2rem,4vw,3.2rem)] leading-tight">
            One strategist. Every discipline a growth budget actually needs.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.06} className="bg-surface p-8">
              <p className="font-mono-data text-xs text-signal-ink">0{i + 1}</p>
              <h3 className="font-display mt-3 text-xl">{group.category}</h3>
              <ul className="mt-5 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-muted-on-light">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
