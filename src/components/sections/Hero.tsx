"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, BarChart3, Building2, PieChart, Star, TrendingUp } from "lucide-react";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { AnimatedReticle } from "@/components/motion/AnimatedReticle";
import { PremiumPill } from "@/components/motion/PremiumPill";
import { AvatarCta } from "@/components/motion/AvatarCta";
import { SplitIn } from "@/components/motion/SplitIn";
import { Reveal } from "@/components/motion/Reveal";
import { RevealIn } from "@/components/motion/RevealIn";
import { Counter } from "@/components/motion/Counter";
import { heroStats } from "@/data/metrics";
import { registerGsap, gsap } from "@/lib/gsapSetup";
import { cn } from "@/lib/utils";

const proofInitials = ["RR", "PG", "YH", "AS"];
const headlineLine =
  "font-display text-[clamp(2.15rem,4.4vw,3.4rem)] font-medium leading-[1.08] text-ink";

function AvailabilityBadge() {
  return (
    <RevealIn delay={0.8}>
      <span className="glass text-eyebrow inline-flex items-center gap-2 rounded-full px-4 py-2 text-signal-ink">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
        </span>
        Available for new discovery calls
      </span>
    </RevealIn>
  );
}

function Headline() {
  return (
    <div className="mt-7">
      <SplitIn as="h1" delay={1.0} className={headlineLine}>
        Turning Ad Spend
      </SplitIn>

      <div className="mt-2 flex flex-wrap items-center gap-3">
        <SplitIn as="span" delay={1.2} className={headlineLine}>
          Into
        </SplitIn>
        <RevealIn delay={1.5}>
          <PremiumPill variant="signal">₹250Cr+</PremiumPill>
        </RevealIn>
        <RevealIn delay={1.7}>
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_12px_28px_-12px_rgba(1,11,19,0.3)] sm:h-14 sm:w-14">
            <ArrowUpRight className="h-5 w-5 text-signal" />
          </span>
        </RevealIn>
      </div>

      <p className={cn(headlineLine, "mt-2")}>
        <SplitIn as="span" delay={1.9}>
          {"In "}
        </SplitIn>
        <SplitIn as="span" delay={2.05} className="text-signal-ink">
          Measurable Revenue.
        </SplitIn>
      </p>
    </div>
  );
}

function PrimaryCta() {
  return (
    <MagneticButton>
      <div className="neu-raised rounded-full p-1.5">
        <AvatarCta href="/contact" label="Book a call with me" size="lg" />
      </div>
    </MagneticButton>
  );
}

function SecondaryCta() {
  return (
    <a
      href="#case-studies"
      className="glass group flex flex-col gap-2 rounded-2xl px-5 py-3.5 transition-transform duration-300 hover:-translate-y-0.5"
    >
      <span className="flex items-center gap-3">
        <span className="flex -space-x-2.5">
          {proofInitials.map((initial) => (
            <span
              key={initial}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-[10px] font-bold text-white ring-2 ring-[var(--paper)]"
            >
              {initial}
            </span>
          ))}
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-paper-dim text-[9px] font-bold text-ink ring-2 ring-[var(--paper)]">
            +2
          </span>
        </span>
        <span className="flex items-center gap-0.5 text-signal">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-current" />
          ))}
        </span>
      </span>
      <span className="text-sm font-bold text-ink">6 Verified Case Studies</span>
    </a>
  );
}

function StatCard({
  icon,
  value,
  label,
  className,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/60 bg-[var(--paper)]/95 px-4 py-3.5 shadow-[0_18px_40px_-18px_rgba(1,11,19,0.4)] backdrop-blur-xl",
        className
      )}
    >
      <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-signal/10 text-signal-ink">
        {icon}
      </div>
      <p className="font-display text-xl font-semibold text-ink sm:text-2xl">{value}</p>
      <p className="mt-0.5 max-w-[9rem] text-[11px] leading-snug text-muted-on-light">{label}</p>
    </div>
  );
}

function DesktopVisual() {
  return (
    <div
      aria-hidden={false}
      className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[58%] lg:block xl:w-[54%]"
    >
      {/* thin warm wash right at the seam, so the photo's amber tone
          reads as a deliberate transition rather than a hard color cut */}
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 -z-10 w-1/2"
        style={{
          background:
            "radial-gradient(60% 100% at 0% 50%, color-mix(in srgb, var(--warm-glow) 30%, transparent), transparent 75%)",
          filter: "blur(40px)",
        }}
      />

      {/* decorative orbit ring, echoing the diagnostic-instrument motif */}
      <div
        aria-hidden
        className="absolute left-[10%] top-[8%] -z-10 h-[62%] w-[62%] rounded-full border border-ink/10"
      />

      <div
        className="relative ml-auto h-full w-[86%]"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 15%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%)",
        }}
      >
        <Image
          src="/images/portrait/saurabh-desktop.webp"
          alt="Saurabh Sharma, The AdSurgeon, in his studio"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "50% 12%" }}
          sizes="45vw"
        />
      </div>

      <RevealIn delay={1.9} className="absolute left-0 top-[54%] w-36 lg:pointer-events-auto xl:w-40">
        <StatCard
          icon={<PieChart className="h-4 w-4" />}
          value="₹6Cr+"
          label="Tracked client revenue"
        />
      </RevealIn>

      <RevealIn delay={2.1} className="absolute right-[6%] top-[6%] w-36 lg:pointer-events-auto xl:w-40">
        <StatCard
          icon={<BarChart3 className="h-4 w-4" />}
          value="20x"
          label="Peak ROAS delivered"
        />
      </RevealIn>

      <RevealIn
        delay={2.3}
        className="absolute -right-2 top-[44%] w-36 lg:pointer-events-auto xl:w-40"
      >
        <StatCard
          icon={<Building2 className="h-4 w-4" />}
          value="20+"
          label="Industries served"
        />
      </RevealIn>

      <RevealIn
        delay={2.5}
        className="absolute right-[8%] bottom-[8%] w-36 lg:pointer-events-auto xl:w-40"
      >
        <StatCard
          icon={<TrendingUp className="h-4 w-4" />}
          value="1,205"
          label="Qualified leads, one programme"
        />
      </RevealIn>
    </div>
  );
}

function MobilePortrait() {
  return (
    <RevealIn delay={0.4} className="relative -mx-[clamp(1.25rem,5vw,5rem)] mb-8 lg:hidden">
      <div
        className="relative aspect-[4/5] w-full"
        style={{
          maskImage: "linear-gradient(to bottom, black 82%, transparent 99%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 82%, transparent 99%)",
        }}
      >
        <Image
          src="/images/portrait/saurabh-mobile.webp"
          alt="Saurabh Sharma, The AdSurgeon, in his studio"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "50% 12%" }}
          sizes="100vw"
        />
      </div>
      <div className="glass absolute bottom-10 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full px-4 py-2">
        <span className="relative flex h-1.5 w-1.5 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
        </span>
        <span className="font-mono-data text-xs text-ink">20x Peak ROAS</span>
      </div>
    </RevealIn>
  );
}

function MobileStats() {
  return (
    <Reveal delay={0.1} className="mt-8 grid grid-cols-2 gap-3 lg:hidden">
      {heroStats.map((stat) => (
        <div key={stat.label} className="glass rounded-2xl px-4 py-3.5">
          <p className="font-mono-data text-xl font-medium text-ink">
            <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
          </p>
          <p className="mt-1 text-[11px] leading-snug text-muted-on-light">{stat.label}</p>
        </div>
      ))}
    </Reveal>
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
      className="section-light relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-32 pb-16"
    >
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
          backgroundImage: "radial-gradient(circle at 1px 1px, #010b13 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="grain pointer-events-none absolute inset-0" aria-hidden />

      <AnimatedReticle
        size={40}
        delay={0.5}
        className="pointer-events-none absolute left-[6%] top-24 hidden text-ink/25 md:block"
      />

      <span
        aria-hidden
        className="text-index pointer-events-none absolute bottom-10 right-8 hidden -rotate-90 origin-bottom-right whitespace-nowrap text-[0.65rem] tracking-[0.3em] text-ink/25 lg:block"
      >
        PRECISION MARKETING SYSTEMS
      </span>

      <DesktopVisual />

      <div className="container-fluid relative">
        <div className="relative max-w-xl lg:max-w-md xl:max-w-lg">
          <MobilePortrait />

          <AvailabilityBadge />
          <Headline />

          <RevealIn delay={2.25}>
            <p className="mt-6 max-w-md text-lg text-muted-on-light">
              I build performance marketing systems that drive real business
              growth for real estate, hospitality, healthcare and high-growth
              brands.
            </p>
          </RevealIn>

          <RevealIn delay={2.4} className="mt-9 flex flex-wrap items-center gap-4">
            <PrimaryCta />
            <SecondaryCta />
          </RevealIn>

          <MobileStats />
        </div>
      </div>
    </section>
  );
}
