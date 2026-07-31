"use client";

import { ArrowUpRight, ArrowDown } from "lucide-react";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { TextReveal } from "@/components/motion/TextReveal";
import { Counter } from "@/components/motion/Counter";
import { Reveal } from "@/components/motion/Reveal";
import { heroStats } from "@/data/metrics";

export function Hero() {
  return (
    <section className="section-dark relative flex min-h-[100svh] flex-col justify-end overflow-hidden pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full bg-signal/20 blur-[140px]"
      />

      <div className="container-fluid relative pb-16">
        <Reveal>
          <span className="text-eyebrow inline-flex items-center gap-2 text-signal">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            Performance Marketing Strategist &middot; India &amp; UAE
          </span>
        </Reveal>

        <h1 className="font-display mt-6 max-w-5xl text-[clamp(2.5rem,7vw,6.2rem)] font-medium leading-[0.98] tracking-tight">
          <TextReveal text="Precision-built paid media." />
          <br />
          <TextReveal
            text="Not guesswork."
            delay={0.25}
            className="text-signal"
          />
        </h1>

        <Reveal delay={0.4} className="mt-8 max-w-xl text-lg text-muted-on-dark">
          I&apos;m Saurabh Sharma — known to clients as{" "}
          <span className="text-text-light">The AdSurgeon</span>. I&apos;ve generated
          ₹6Cr+ in tracked revenue and 20x ROAS for brands across real estate,
          healthcare, hospitality, fashion and edtech, in India and the UAE.
        </Reveal>

        <Reveal delay={0.55} className="mt-10 flex flex-wrap items-center gap-4">
          <MagneticButton>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-signal-deep px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-signal-ink"
            >
              Book a Discovery Call <ArrowUpRight className="h-4 w-4" />
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="#case-studies"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white transition-colors hover:border-white/60"
            >
              View Case Studies
            </a>
          </MagneticButton>
        </Reveal>

        <div className="mt-20 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-line-dark pt-10 sm:grid-cols-4">
          {heroStats.map((stat, i) => (
            <Reveal key={stat.label} delay={0.15 * i}>
              <p className="font-mono-data text-3xl font-medium text-text-light sm:text-4xl">
                <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-xs text-muted-on-dark">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-on-dark md:flex">
        <span className="text-eyebrow">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </div>
    </section>
  );
}
