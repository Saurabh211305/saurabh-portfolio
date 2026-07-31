"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SplitReveal } from "@/components/motion/SplitReveal";
import { faqs } from "@/data/faq";
import { cn } from "@/lib/utils";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-light py-28">
      <div className="container-fluid max-w-3xl">
        <Reveal>
          <p className="text-eyebrow text-signal-ink">FAQ</p>
        </Reveal>
        <SplitReveal
          as="h2"
          className="font-display mt-4 text-[clamp(2rem,4.5vw,3.4rem)] leading-tight"
        >
          Questions worth answering upfront
        </SplitReveal>

        <div className="mt-12 divide-y divide-ink/10 border-t border-b border-ink/10">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 py-6 text-left"
                >
                  <span className="text-index shrink-0 text-xs text-signal-ink">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display flex-1 text-lg">{item.q}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-signal transition-transform",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid overflow-hidden transition-all duration-300",
                    isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <p className="min-h-0 pl-8 text-muted-on-light">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
