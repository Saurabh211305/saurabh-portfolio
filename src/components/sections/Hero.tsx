"use client";

import { useLayoutEffect, useRef } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { AnimatedReticle } from "@/components/motion/AnimatedReticle";
import { Reveal } from "@/components/motion/Reveal";
import { Counter } from "@/components/motion/Counter";
import { cn } from "@/lib/utils";
import { heroStats } from "@/data/metrics";
import { registerGsap, gsap } from "@/lib/gsapSetup";

type Segment =
  | { type: "text"; value: string }
  | { type: "pill"; value: string; variant: "raised" | "dark" | "signal" };

const headline: Segment[] = [
  { type: "text", value: "Hi, I'm" },
  { type: "pill", value: "Saurabh Sharma", variant: "raised" },
  { type: "text", value: "— clients call me" },
  { type: "pill", value: "The AdSurgeon", variant: "dark" },
  { type: "text", value: ". I turn paid media into" },
  { type: "pill", value: "₹6Cr+", variant: "signal" },
  { type: "text", value: "in tracked revenue." },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.055, delayChildren: 1.4 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

function Pill({ segment }: { segment: Extract<Segment, { type: "pill" }> }) {
  return (
    <motion.span
      variants={item}
      className={cn(
        "font-sans inline-flex items-center rounded-full px-5 py-2 text-[clamp(0.95rem,2.3vw,1.7rem)] font-semibold align-middle",
        segment.variant === "raised" && "neu-raised text-ink",
        segment.variant === "dark" && "bg-ink text-white",
        segment.variant === "signal" && "bg-signal-deep text-white shadow-[0_6px_18px_rgba(171,21,9,0.25)]"
      )}
    >
      {segment.value}
    </motion.span>
  );
}

export function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !bgRef.current || !sectionRef.current) return;

    registerGsap();
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        scale: 1.3,
        yPercent: 6,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-light relative flex min-h-[100svh] flex-col justify-end overflow-hidden pt-32"
    >
      {/* layered atmospheric gradient — red + warm gold, never flat white */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 60% at 50% -10%, color-mix(in srgb, var(--signal) 8%, transparent), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-20 h-[480px] w-[480px] rounded-full opacity-[0.12] blur-[140px]"
        style={{ background: "var(--warm-glow)" }}
      />
      <div
        ref={bgRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #010b13 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-8%] h-[520px] w-[520px] rounded-full bg-signal/10 blur-[140px]"
      />
      <div className="grain pointer-events-none absolute inset-0" aria-hidden />

      <AnimatedReticle
        size={40}
        delay={0.5}
        className="pointer-events-none absolute left-1/2 top-10 hidden -translate-x-1/2 text-ink/25 md:block"
      />
      <AnimatedReticle
        size={56}
        delay={1.9}
        className="pointer-events-none absolute right-[8%] top-[24%] hidden text-ink/15 lg:block"
      />

      <div className="reticle container-fluid relative pb-16">
        <Reveal delay={1.0}>
          <span className="glass text-eyebrow inline-flex items-center gap-2 rounded-full px-4 py-2 text-signal-ink">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
            </span>
            Available for new discovery calls
          </span>
        </Reveal>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="font-display mt-8 flex max-w-5xl flex-wrap items-center gap-x-4 gap-y-3 text-ink text-[clamp(2.1rem,5.6vw,4.6rem)] font-medium leading-[1.08] tracking-tight"
        >
          {headline.map((seg, i) =>
            seg.type === "text" ? (
              <motion.span key={i} variants={item}>
                {seg.value}
              </motion.span>
            ) : (
              <Pill key={i} segment={seg} />
            )
          )}
        </motion.h1>

        <Reveal delay={2.2} className="mt-8 max-w-xl text-lg text-muted-on-light">
          Across real estate, healthcare, hospitality, fashion and edtech —
          India and the UAE. 20x peak ROAS, six real case studies, zero fluff.
        </Reveal>

        <Reveal delay={2.35} className="mt-10 flex flex-wrap items-center gap-4">
          <MagneticButton>
            <a
              href="/contact"
              data-cursor-text="Book"
              className="inline-flex items-center gap-2 rounded-full bg-signal-deep px-7 py-4 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(171,21,9,0.28)] transition-colors hover:bg-signal-ink"
            >
              Book a Discovery Call <ArrowUpRight className="h-4 w-4" />
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="#case-studies"
              data-cursor-text="View"
              className="neu-raised inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-ink"
            >
              View Case Studies
            </a>
          </MagneticButton>
        </Reveal>

        <Reveal delay={2.55} className="glass mt-20 rounded-3xl p-6 sm:p-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label} className="neu-inset rounded-2xl px-4 py-5 text-center sm:text-left">
                <p className="font-mono-data text-2xl font-medium text-ink sm:text-3xl">
                  <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-xs leading-snug text-muted-on-light">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-on-light md:flex">
        <span className="text-eyebrow">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </div>
    </section>
  );
}
