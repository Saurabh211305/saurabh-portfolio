"use client";

import { useEffect, useRef, useState } from "react";
import { registerGsap, gsap, EASE } from "@/lib/gsapSetup";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const rootRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (done) return;
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(p + Math.random() * 16 + 5, 100);
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 300);
        }
        return next;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [done]);

  useEffect(() => {
    if (barRef.current) {
      barRef.current.style.transform = `scaleX(${progress / 100})`;
    }
  }, [progress]);

  useEffect(() => {
    if (!done || !rootRef.current) return;
    registerGsap();
    const el = rootRef.current;
    const tl = gsap.timeline({
      onComplete: () => {
        el.style.display = "none";
      },
    });
    tl.to(el.querySelectorAll("[data-fade]"), {
      opacity: 0,
      duration: 0.35,
      ease: EASE.soft,
    }).to(
      el,
      {
        clipPath: "inset(0 0 100% 0)",
        duration: 0.85,
        ease: EASE.inOut,
      },
      "-=0.1"
    );
  }, [done]);

  return (
    <div
      ref={rootRef}
      aria-hidden={done}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink text-text-light"
      style={{ clipPath: "inset(0 0 0% 0)" }}
    >
      <div data-fade className="flex flex-col items-center">
        <span className="text-eyebrow text-muted-on-dark">The AdSurgeon</span>
        <div className="mt-6 flex items-baseline gap-1">
          <span className="font-mono-data text-7xl text-text-light">
            {String(Math.floor(progress)).padStart(3, "0")}
          </span>
          <span className="font-mono-data text-2xl text-signal">%</span>
        </div>
        <div className="mt-8 h-px w-48 overflow-hidden bg-white/10">
          <div
            ref={barRef}
            className="h-full w-full origin-left bg-signal"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
        <span className="text-eyebrow mt-6 text-muted-on-dark">Calibrating instruments</span>
      </div>
    </div>
  );
}
