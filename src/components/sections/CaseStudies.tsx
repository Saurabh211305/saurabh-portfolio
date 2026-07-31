"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { caseStudies } from "@/data/caseStudies";

export function CaseStudies() {
  return (
    <section id="case-studies" className="section-dark relative py-28">
      <div className="bg-grid pointer-events-none absolute inset-0 text-white/[0.03]" aria-hidden />
      <div className="container-fluid relative">
        <Reveal>
          <p className="text-eyebrow text-signal">Case files</p>
        </Reveal>
        <SplitReveal
          as="h2"
          className="font-display mt-4 max-w-2xl text-[clamp(2rem,4.5vw,3.4rem)] leading-tight text-text-light"
        >
          Six real programmes. Real budgets, real ROAS, real revenue.
        </SplitReveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 0.08}>
              <TiltCard>
                <Link
                  href={`/case-studies/${cs.slug}`}
                  data-cursor-text="Open"
                  className="reticle group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-ink-soft p-8"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-index text-xs text-muted-on-dark">
                        CASE FILE / {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-eyebrow text-muted-on-dark">{cs.industry}</span>
                    </div>
                    <h3 className="font-display mt-6 text-xl leading-snug text-text-light">
                      {cs.headline}
                    </h3>
                    <p className="mt-3 text-sm text-muted-on-dark">{cs.client}</p>
                  </div>

                  <div className="mt-8 flex items-end justify-between border-t border-line-dark pt-6">
                    <div>
                      <p className="font-mono-data text-2xl text-signal">
                        {cs.metrics[0].value}
                      </p>
                      <p className="text-xs text-muted-on-dark">{cs.metrics[0].label}</p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-white/40 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-signal" />
                  </div>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
