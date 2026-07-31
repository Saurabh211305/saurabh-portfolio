"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Star } from "lucide-react";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { AnimatedReticle } from "@/components/motion/AnimatedReticle";
import { PremiumPill } from "@/components/motion/PremiumPill";
import { SplitIn } from "@/components/motion/SplitIn";
import { Reveal } from "@/components/motion/Reveal";
import { RevealIn } from "@/components/motion/RevealIn";
import { Counter } from "@/components/motion/Counter";
import { heroStats } from "@/data/metrics";
import { registerGsap, gsap } from "@/lib/gsapSetup";

const proofInitials = ["RR", "PG", "YH", "AS"];

function AvailabilityBadge() {
  return (
    <RevealIn delay={0.9}>
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
  const lineClass = "text-[clamp(1.05rem,1.7vw,1.4rem)] font-medium text-muted-on-light";
  return (
    <div className="mt-8">
      <SplitIn as="p" delay={1.15} className={lineClass}>
        Hi, I&apos;m Saurabh.
      </SplitIn>
      <SplitIn as="p" delay={1.3} className={cnLine(lineClass)}>
        Clients call me
      </SplitIn>
      <RevealIn delay={1.5} className="mt-2">
        <PremiumPill variant="dark">The AdSurgeon</PremiumPill>
      </RevealIn>
      <SplitIn as="p" delay={1.85} className={cnLine(lineClass, "mt-6")}>
        Turning ad spend into
      </SplitIn>
      <RevealIn delay={2.05} className="mt-2">
        <PremiumPill variant="signal" size="xl">
          ₹250Cr+
        </PremiumPill>
      </RevealIn>
      <SplitIn as="p" delay={2.5} className={cnLine(lineClass, "mt-4")}>
        in measurable revenue.
      </SplitIn>
    </div>
  );
}

function cnLine(...parts: string[]) {
  return parts.join(" ");
}

function PrimaryCta() {
  return (
    <MagneticButton>
      <a
        href="/contact"
        className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-ink py-2 pl-2 pr-6 text-white shadow-[0_18px_40px_-14px_rgba(1,11,19,0.55)] transition-shadow duration-500 hover:shadow-[0_22px_50px_-12px_rgba(1,11,19,0.65)]"
      >
        <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-white/15">
          <Image
            src="/images/portrait/saurabh-avatar.webp"
            alt=""
            fill
            className="object-cover"
            sizes="40px"
          />
        </span>
        <span className="flex items-center">
          <span className="flex max-w-0 items-center overflow-hidden opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:max-w-[64px] group-hover:opacity-100 group-hover:pr-2">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[9px] font-bold text-ink">
              You
            </span>
            <span className="ml-1 shrink-0 text-white/70">+</span>
          </span>
          <span className="whitespace-nowrap text-sm font-semibold">Book a Discovery Call</span>
        </span>
        <ArrowUpRight className="h-4 w-4 shrink-0 text-signal" />
      </a>
    </MagneticButton>
  );
}

function SecondaryCta() {
  return (
    <a
      href="#case-studies"
      className="glass group inline-flex items-center gap-3 rounded-full px-5 py-2.5 transition-transform duration-300 hover:-translate-y-0.5"
    >
      <span className="flex -space-x-2.5">
        {proofInitials.map((initial) => (
          <span
            key={initial}
            className="flex h-7 w-7 items-center justify-center rounded-full bg-ink text-[9px] font-bold text-white ring-2 ring-[var(--paper)]"
          >
            {initial}
          </span>
        ))}
      </span>
      <span className="flex items-center gap-0.5 text-signal">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-3 w-3 fill-current" />
        ))}
      </span>
      <span className="text-sm font-semibold text-ink">6 Verified Case Studies</span>
    </a>
  );
}

function DesktopPortrait() {
  return (
    <div
      aria-hidden={false}
      className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[52%] lg:block xl:w-[48%]"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 scale-125"
        style={{
          background:
            "radial-gradient(55% 55% at 68% 40%, color-mix(in srgb, var(--warm-glow) 55%, transparent), transparent 72%), radial-gradient(45% 40% at 40% 75%, color-mix(in srgb, var(--signal) 22%, transparent), transparent 72%)",
          filter: "blur(50px)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 h-[112vh] w-full sm:h-[108vh]"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 16%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 16%)",
        }}
      >
        <Image
          src="/images/portrait/saurabh-desktop.webp"
          alt="Saurabh Sharma, The AdSurgeon"
          width={1064}
          height={918}
          priority
          className="absolute bottom-0 right-0 h-full w-auto max-w-none object-bottom"
        />
        {/* subtle glass sheen, echoes the diagonal light in the source photo */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(115deg, transparent 42%, rgba(255,255,255,0.10) 50%, transparent 58%)",
          }}
        />
      </div>
      <div className="glass absolute bottom-[6%] left-[8%] flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 lg:pointer-events-auto">
        <span className="relative flex h-1.5 w-1.5 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
        </span>
        <span className="font-mono-data text-xs text-ink">20x Peak ROAS</span>
      </div>
    </div>
  );
}

function MobilePortrait() {
  return (
    <RevealIn delay={0.4} className="relative -mx-[clamp(1.25rem,5vw,5rem)] mb-8 lg:hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 60% at 55% 35%, color-mix(in srgb, var(--warm-glow) 45%, transparent), transparent 72%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="relative mx-auto max-w-[420px]"
        style={{
          maskImage: "linear-gradient(to bottom, black 85%, transparent 99%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 99%)",
        }}
      >
        <Image
          src="/images/portrait/saurabh-mobile.webp"
          alt="Saurabh Sharma, The AdSurgeon"
          width={900}
          height={1276}
          priority
          className="h-auto w-full"
          sizes="92vw"
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
        className="pointer-events-none absolute left-[6%] top-10 hidden text-ink/25 md:block"
      />

      <span
        aria-hidden
        className="text-index pointer-events-none absolute bottom-10 right-8 hidden -rotate-90 origin-bottom-right whitespace-nowrap text-[0.65rem] tracking-[0.3em] text-ink/25 lg:block"
      >
        PRECISION MARKETING SYSTEMS
      </span>

      <DesktopPortrait />

      <div className="container-fluid relative pb-16">
        <div className="relative max-w-xl lg:max-w-lg xl:max-w-xl">
          <MobilePortrait />

          <AvailabilityBadge />
          <Headline />

          <RevealIn delay={2.7}>
            <p className="mt-8 max-w-md text-lg text-muted-on-light">
              Performance marketing strategist helping real estate, hospitality,
              healthcare, and high-growth brands scale with Google Ads, Meta
              Ads, CRO, and AI-driven marketing systems.
            </p>
          </RevealIn>

          <RevealIn delay={2.85} className="mt-10 flex flex-wrap items-center gap-4">
            <PrimaryCta />
            <SecondaryCta />
          </RevealIn>
        </div>

        <Reveal delay={3.05} className="glass relative z-10 mt-16 rounded-3xl p-6 sm:p-8 lg:max-w-2xl">
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
    </section>
  );
}
