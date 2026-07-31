"use client";

import { useLayoutEffect, useRef } from "react";
import { registerGsap, gsap, EASE } from "@/lib/gsapSetup";

/** A crosshair/target reticle that draws itself in — the recurring
 * "precision instrument" mark tied to the AdSurgeon concept. */
export function AnimatedReticle({
  size = 72,
  className,
  delay = 0.6,
}: {
  size?: number;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<SVGSVGElement>(null);

  useLayoutEffect(() => {
    const svg = ref.current;
    if (!svg) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const paths = svg.querySelectorAll("[data-draw]");
    const circle = svg.querySelector("[data-circle]");

    // Guard against `hidden md:block`-style ancestors: getTotalLength() throws
    // on a non-rendered (display:none) SVG, which this is on mobile viewports.
    const isRendered = svg.getClientRects().length > 0;

    if (prefersReduced || !isRendered) {
      gsap.set([...paths, circle], { opacity: 1 });
      return;
    }

    registerGsap();
    const ctx = gsap.context(() => {
      paths.forEach((p) => {
        const len = (p as SVGPathElement).getTotalLength();
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len, opacity: 1 });
      });
      if (circle) {
        const len = (circle as SVGCircleElement).getTotalLength();
        gsap.set(circle, { strokeDasharray: len, strokeDashoffset: len, opacity: 1 });
      }
      const tl = gsap.timeline({ delay });
      tl.to(circle, { strokeDashoffset: 0, duration: 1, ease: EASE.inOut })
        .to(paths, { strokeDashoffset: 0, duration: 0.5, stagger: 0.08, ease: EASE.soft }, "-=0.5");
    }, svg);

    return () => ctx.revert();
  }, [delay]);

  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 72 72"
      fill="none"
      className={className}
      aria-hidden
    >
      <circle
        data-circle
        cx="36"
        cy="36"
        r="26"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0"
      />
      <path data-draw d="M36 4V16" stroke="currentColor" strokeWidth="1.5" opacity="0" />
      <path data-draw d="M36 56V68" stroke="currentColor" strokeWidth="1.5" opacity="0" />
      <path data-draw d="M4 36H16" stroke="currentColor" strokeWidth="1.5" opacity="0" />
      <path data-draw d="M56 36H68" stroke="currentColor" strokeWidth="1.5" opacity="0" />
    </svg>
  );
}
