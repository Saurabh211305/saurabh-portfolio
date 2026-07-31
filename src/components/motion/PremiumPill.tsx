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
 * headline (brand name, hero stat) — soft ambient glow behind a crisp
 * pill, not just a flat chip.
 */
export function PremiumPill({ children, variant, size = "lg", className }: PremiumPillProps) {
  return (
    <span className={cn("relative inline-flex", className)}>
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-4 -bottom-2 top-1 -z-10 rounded-full blur-2xl transition-opacity duration-500",
          variant === "dark" ? "bg-ink/25" : "bg-signal/35"
        )}
      />
      <span
        className={cn(
          "font-display inline-flex items-center rounded-full font-semibold tracking-tight transition-transform duration-500 ease-out hover:-translate-y-0.5",
          size === "xl"
            ? "px-8 py-3 text-[clamp(2.6rem,7.5vw,5.5rem)] sm:px-10 sm:py-4"
            : "px-7 py-2.5 text-[clamp(1.8rem,4.2vw,3.2rem)]",
          variant === "dark" && "bg-ink text-white shadow-[0_20px_45px_-15px_rgba(1,11,19,0.5)]",
          variant === "signal" &&
            "bg-signal-deep text-white shadow-[0_20px_45px_-12px_rgba(171,21,9,0.55)]"
        )}
      >
        {children}
      </span>
    </span>
  );
}
