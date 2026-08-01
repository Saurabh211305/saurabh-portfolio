"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import { AvatarCta } from "@/components/motion/AvatarCta";

function LogoMark() {
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-ink text-paper">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="6.5" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M12 2v4M12 18v4M2 12h4M18 12h4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

const links = [
  { href: "/#case-studies", label: "Case Studies" },
  { href: "/#expertise", label: "Expertise" },
  { href: "/about", label: "About" },
  { href: "/#testimonials", label: "Testimonials" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 80);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center">
      <motion.nav
        animate={{
          marginTop: scrolled && !open ? 14 : 0,
          width: scrolled && !open ? "min(880px, 92vw)" : "100%",
          borderRadius: scrolled && !open ? 999 : 0,
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "flex h-16 items-center justify-between px-5 transition-colors duration-500 sm:h-20 sm:px-8",
          solid
            ? "border border-ink/10 bg-paper/90 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.03)]"
            : "bg-transparent"
        )}
      >
        <Link href="/" className="flex items-center gap-2 sm:gap-3">
          <LogoMark />
          <span className="font-display text-base font-medium tracking-tight text-ink sm:text-lg">
            Saurabh Sharma
            <span className="ml-2 hidden text-eyebrow align-middle text-signal-ink sm:inline">
              The AdSurgeon
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-ink/70 transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <AvatarCta href="/contact" label="Book a call with me" size="sm" />
        </div>

        <button
          className="p-2 text-ink transition-colors md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-x-0 top-16 overflow-hidden border-t border-ink/10 bg-paper md:hidden"
          >
            <ul className="container-fluid flex flex-col gap-1 py-4">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-lg font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-3">
                <Link
                  href="/contact"
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-signal-deep text-sm font-semibold text-white"
                >
                  Book a Call
                </Link>
              </li>
              <li className="pt-1">
                <a href={site.whatsapp} className="block py-2 text-sm text-ink/60">
                  WhatsApp {site.phone}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
