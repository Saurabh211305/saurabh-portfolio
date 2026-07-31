"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  function next() {
    setIndex((i) => (i + 1) % testimonials.length);
  }
  function prev() {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }

  return (
    <section id="testimonials" className="section-light py-28">
      <div className="container-fluid">
        <Reveal>
          <p className="text-eyebrow text-signal-ink">What clients say</p>
        </Reveal>
        <SplitReveal
          as="h2"
          className="font-display mt-4 max-w-2xl text-[clamp(2rem,4.5vw,3.4rem)] leading-tight"
        >
          Named, on record, and still working together.
        </SplitReveal>

        <Reveal delay={0.15} className="mt-16">
          <div className="reticle relative overflow-hidden rounded-3xl border border-ink/10 bg-surface p-8 md:p-14">
            <span
              aria-hidden
              key={active.company}
              className="font-display pointer-events-none absolute -right-4 -top-6 select-none text-[7rem] italic leading-none text-ink/[0.04] md:text-[10rem]"
            >
              {active.company.split(" ")[0]}
            </span>
            <Quote className="h-10 w-10 text-signal/30" />
            <p className="font-display relative mt-6 max-w-3xl text-xl leading-relaxed md:text-2xl">
              &ldquo;{active.quote}&rdquo;
            </p>
            <div className="relative mt-8 flex items-center justify-between">
              <div>
                <p className="font-semibold text-ink">{active.name}</p>
                <p className="text-sm text-muted-on-light">
                  {active.role}, {active.company}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 transition-colors hover:border-signal hover:text-signal"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 transition-colors hover:border-signal hover:text-signal"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setIndex(i)}
                className={cn(
                  "rounded-full border px-4 py-2 text-xs font-medium transition-colors",
                  i === index
                    ? "border-signal bg-signal/10 text-signal-ink"
                    : "border-ink/10 text-muted-on-light hover:border-ink/25"
                )}
              >
                {t.company}
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
