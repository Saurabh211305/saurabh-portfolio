"use client";

import { useLayoutEffect, useRef } from "react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { SplitIn } from "@/components/motion/SplitIn";
import { AnimatedReticle } from "@/components/motion/AnimatedReticle";
import { Reveal } from "@/components/motion/Reveal";
import { Counter } from "@/components/motion/Counter";
import { heroStats } from "@/data/metrics";
import { registerGsap, gsap } from "@/lib/gsapSetup";

export function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !bgRef.current || !sectionRef.current) return;

    registerGsap();
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        scale: 1.35,
        yPercent: 8,
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
      className="section-dark relative flex min-h-[100svh] flex-col justify-end overflow-hidden pt-32"
    >
      <div
        ref={bgRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full bg-signal/25 blur-[150px]"
      />
      <div className="grain pointer-events-none absolute inset-0" aria-hidden />

      <AnimatedReticle
        size={64}
        delay={1.9}
        className="pointer-events-none absolute right-[8%] top-[26%] hidden text-white/40 md:block"
      />

      <div className="container-fluid relative pb-16">
        <Reveal delay={1.3}>
          <span className="text-eyebrow inline-flex items-center gap-2 text-signal">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            Performance Marketing Strategist &middot; India &amp; UAE
          </span>
        </Reveal>

        <h1 className="font-display mt-6 max-w-6xl text-[clamp(2.6rem,8.4vw,7.8rem)] leading-[0.94] tracking-tight">
          <SplitIn as="span" delay={1.5} className="block font-semibold">
            Precision-built
          </SplitIn>
          <SplitIn as="span" delay={1.75} className="block italic font-light text-signal">
            paid media.
          </SplitIn>
        </h1>

        <Reveal delay={2.1} className="mt-8 max-w-xl text-lg text-muted-on-dark">
          I&apos;m Saurabh Sharma — known to clients as{" "}
          <span className="text-text-light">The AdSurgeon</span>. I&apos;ve generated
          ₹6Cr+ in tracked revenue and 20x ROAS for brands across real estate,
          healthcare, hospitality, fashion and edtech, in India and the UAE.
        </Reveal>

        <Reveal delay={2.25} className="mt-10 flex flex-wrap items-center gap-4">
          <MagneticButton>
            <a
              href="/contact"
              data-cursor-text="Book"
              className="inline-flex items-center gap-2 rounded-full bg-signal-deep px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-signal-ink"
            >
              Book a Discovery Call <ArrowUpRight className="h-4 w-4" />
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="#case-studies"
              data-cursor-text="View"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white transition-colors hover:border-white/60"
            >
              View Case Studies
            </a>
          </MagneticButton>
        </Reveal>

        <div className="reticle mt-20 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-line-dark pt-10 sm:grid-cols-4">
          {heroStats.map((stat, i) => (
            <Reveal key={stat.label} delay={2.4 + 0.1 * i}>
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
