"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type AvatarCtaProps = {
  href: string;
  label: string;
  size?: "sm" | "lg";
  className?: string;
};

/** The "avatar + label + nested +You badge" button used for every
 * "book a call" CTA site-wide (navbar + hero) — a static layout, not a
 * hover-reveal, matching the client's reference button exactly. */
export function AvatarCta({ href, label, size = "lg", className }: AvatarCtaProps) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center rounded-full bg-[linear-gradient(160deg,var(--ink-elevated)_0%,var(--ink)_70%)] text-white shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_14px_30px_-14px_rgba(1,11,19,0.6)] transition-transform duration-300 ease-out hover:scale-[1.015]",
        size === "lg" ? "gap-2.5 py-1.5 pl-1.5 pr-1.5" : "gap-2 py-1 pl-1 pr-1",
        className
      )}
    >
      <span
        className={cn(
          "relative shrink-0 overflow-hidden rounded-full ring-2 ring-white/15",
          size === "lg" ? "h-9 w-9" : "h-7 w-7"
        )}
      >
        <Image
          src="/images/portrait/saurabh-avatar.webp"
          alt=""
          fill
          className="object-cover"
          sizes="36px"
        />
      </span>
      <span
        className={cn(
          "whitespace-nowrap font-semibold",
          size === "lg" ? "text-sm" : "text-xs"
        )}
      >
        {label}
      </span>
      <span
        className={cn(
          "flex shrink-0 items-center gap-0.5 whitespace-nowrap rounded-full bg-white/10 font-bold ring-1 ring-white/15",
          size === "lg" ? "px-3 py-1.5 text-xs" : "px-2.5 py-1 text-[10px]"
        )}
      >
        <span className="text-white/45">+</span>You
      </span>
    </a>
  );
}
