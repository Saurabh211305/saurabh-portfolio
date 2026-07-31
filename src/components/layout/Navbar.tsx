"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";

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
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        solid ? "bg-paper/90 backdrop-blur-md border-b border-ink/10" : "bg-transparent"
      )}
    >
      <nav className="container-fluid flex h-20 items-center justify-between">
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
          <Button href="/contact" size="sm">
            Book a Call <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>

        <button
          className={cn("p-2 transition-colors md:hidden", solid ? "text-ink" : "text-text-light")}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-ink/10 bg-paper md:hidden"
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
                <Button href="/contact" className="w-full">
                  Book a Call
                </Button>
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
