"use client";

import { useEffect, useRef, useState } from "react";
import { registerGsap, ScrollTrigger } from "@/lib/gsapSetup";
import { Reveal } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { cn } from "@/lib/utils";

const steps = [
  {
    n: "01",
    title: "Research",
    detail:
      "Audience, competitor and market analysis before a single rupee is spent. Every programme starts with a diagnosis, not a template.",
    stat: "Zero spend until the model is validated",
  },
  {
    n: "02",
    title: "Strategy",
    detail:
      "Channel mix, budget allocation and a month-by-month growth plan tied directly to revenue targets, not vanity metrics.",
    stat: "Built around a 3–6 month revenue target",
  },
  {
    n: "03",
    title: "Launch",
    detail:
      "Creative, tracking and campaigns built and shipped across the platforms where the audience and intent actually are.",
    stat: "Full tracking live before spend goes up",
  },
  {
    n: "04",
    title: "Optimize",
    detail:
      "Weekly performance reviews, A/B testing, and budget reallocation toward what's actually converting.",
    stat: "Weekly optimisation cycles, not monthly",
  },
  {
    n: "05",
    title: "Scale",
    detail:
      "Lookalikes, new markets and full-funnel expansion once the model is proven — the phase every case study above reaches.",
    stat: "10x–20x ROAS at scale",
  },
];

const stack = [
  "Meta Ads Manager",
  "Google Ads",
  "YouTube Ads",
  "Google Analytics 4",
  "Looker Studio",
  "Power BI",
  "Tableau",
  "Meta Pixel / CAPI",
];

export function GrowthFramework() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !wrapperRef.current) return;

    registerGsap();
    const trigger = ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const idx = Math.min(steps.length - 1, Math.floor(self.progress * steps.length));
        setActive(idx);
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <section className="section-dark relative">
      <div ref={wrapperRef} style={{ height: `${steps.length * 85}vh` }} className="relative">
        <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
          <div className="container-fluid">
            <Reveal>
              <p className="text-eyebrow text-signal">The growth framework</p>
            </Reveal>
            <SplitReveal
              as="h2"
              className="font-display mt-4 max-w-2xl text-[clamp(1.8rem,4vw,3rem)] leading-tight text-text-light"
            >
              The same five-stage system, applied to every case file above.
            </SplitReveal>

            <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16">
              <ul>
                {steps.map((step, i) => (
                  <li
                    key={step.n}
                    className={cn(
                      "flex items-center gap-4 border-b border-line-dark py-4 transition-colors duration-300",
                      i === active ? "text-text-light" : "text-muted-on-dark/60"
                    )}
                  >
                    <span
                      className={cn(
                        "text-index text-sm transition-colors duration-300",
                        i === active ? "text-signal" : "text-muted-on-dark/40"
                      )}
                    >
                      {step.n}
                    </span>
                    <span className="font-display text-xl sm:text-2xl">{step.title}</span>
                  </li>
                ))}
              </ul>

              <div className="relative min-h-[9rem]">
                {steps.map((step, i) => (
                  <div
                    key={step.n}
                    className={cn(
                      "absolute inset-0 transition-opacity duration-500",
                      i === active ? "opacity-100" : "pointer-events-none opacity-0"
                    )}
                  >
                    <p className="max-w-md text-muted-on-dark">{step.detail}</p>
                    <p className="font-mono-data mt-6 text-sm text-signal">{step.stat}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid border-t border-line-dark py-16">
        <p className="text-eyebrow text-muted-on-dark">Tooling &amp; stack</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {stack.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-white/15 px-4 py-2 text-sm text-text-light/85"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
