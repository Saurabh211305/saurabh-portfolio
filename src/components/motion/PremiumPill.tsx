"use client";

import { cn } from "@/lib/utils";

type PremiumPillProps = {
  children: React.ReactNode;
  variant: "dark" | "signal";
  size?: "lg" | "xl";
  className?: string;
};

/**
 * A large, elevated capsule used for the true highlight moments in a
 * headline (brand name, hero stat) — a crafted button-grade surface
 * (gradient fill, glossy top edge, tight ambient shadow) rather than a
 * flat color chip, so it reads as premium at very large sizes.
 */
export function PremiumPill({ children, variant, size = "lg", className }: PremiumPillProps) {
  return (
    <span className={cn("relative inline-flex", className)}>
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-6 -bottom-3 top-3 -z-10 rounded-full opacity-70 blur-xl transition-opacity duration-500",
          variant === "dark" ? "bg-ink/20" : "bg-signal-deep/30"
        )}
      />
      <span
        className={cn(
          "font-display relative inline-flex items-center overflow-hidden rounded-full font-semibold tracking-tight transition-transform duration-500 ease-out hover:-translate-y-0.5",
          size === "xl"
            ? "px-7 py-2.5 text-[clamp(2.4rem,6vw,4.75rem)] sm:px-9 sm:py-3.5"
            : "px-6 py-2 text-[clamp(1.7rem,3.6vw,3rem)]",
          variant === "dark" &&
            "bg-[linear-gradient(160deg,var(--ink-elevated)_0%,var(--ink)_65%)] text-white shadow-[0_1px_0_rgba(255,255,255,0.14)_inset,0_14px_32px_-14px_rgba(1,11,19,0.6)]",
          variant === "signal" &&
            "bg-[linear-gradient(160deg,var(--signal)_0%,var(--signal-deep)_70%)] text-white shadow-[0_1px_0_rgba(255,255,255,0.22)_inset,0_16px_36px_-12px_rgba(171,21,9,0.55)]"
        )}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-gradient-to-b from-white/15 to-transparent"
        />
        {children}
      </span>
    </span>
  );
}
