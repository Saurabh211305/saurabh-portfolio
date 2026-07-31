"use client";

import { useLayoutEffect, useRef } from "react";
import { registerGsap, gsap, EASE } from "@/lib/gsapSetup";
import { cn } from "@/lib/utils";

/**
 * Reveals its children by animating a clip-path inset from closed to open
 * as the element scrolls into view — the "shutter" reveal used across the
 * animation references, instead of a plain fade.
 */
export function ClipReveal({
  children,
  className,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const closedClip =
      direction === "up"
        ? "inset(0 0 100% 0)"
        : direction === "left"
          ? "inset(0 100% 0 0)"
          : "inset(0 0 0 100%)";

    if (prefersReduced) {
      gsap.set(el, { clipPath: "inset(0 0 0 0)", scale: 1 });
      return;
    }

    registerGsap();

    const ctx = gsap.context(() => {
      gsap.set(el, { clipPath: closedClip, scale: 1.12 });
      gsap.to(el, {
        clipPath: "inset(0 0 0 0)",
        scale: 1,
        duration: 1.1,
        ease: EASE.inOut,
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      });
    }, el);

    return () => ctx.revert();
  }, [direction]);

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      {children}
    </div>
  );
}
