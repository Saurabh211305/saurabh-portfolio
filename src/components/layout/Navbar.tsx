"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

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
        <Link
          href="/"
          className={cn(
            "font-display text-lg font-medium tracking-tight transition-colors",
            solid ? "text-ink" : "text-text-light"
          )}
        >
          Saurabh Sharma
          <span
            className={cn(
              "ml-2 text-eyebrow align-middle",
              solid ? "text-signal-ink" : "text-signal"
            )}
          >
            The AdSurgeon
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  solid
                    ? "text-ink/70 hover:text-ink"
                    : "text-text-light/85 hover:text-text-light"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link
            href="/contact"
            data-cursor-text="Go"
            className={cn(
              "inline-flex h-11 items-center gap-2 rounded-full px-5 text-sm font-semibold transition-colors",
              "bg-signal-deep text-white hover:bg-signal-ink"
            )}
          >
            Book a Call <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          className={cn("p-2 transition-colors md:hidden", solid ? "text-ink" : "text-text-light")}
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
