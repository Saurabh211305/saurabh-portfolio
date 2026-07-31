import Link from "next/link";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";

const columns = [
  {
    title: "Site",
    links: [
      { href: "/#case-studies", label: "Case Studies" },
      { href: "/#expertise", label: "Expertise" },
      { href: "/about", label: "About" },
      { href: "/#faq", label: "FAQ" },
    ],
  },
  {
    title: "Connect",
    links: [
      { href: site.linkedin, label: "LinkedIn" },
      { href: `mailto:${site.email}`, label: site.email },
      { href: site.whatsapp, label: "WhatsApp" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="section-dark">
      <div className="container-fluid py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl">
              Saurabh Sharma <span className="text-signal">— The AdSurgeon</span>
            </p>
            <p className="mt-4 max-w-sm text-sm text-muted-on-dark">
              Performance marketing strategist. Precision-built paid media across real
              estate, healthcare, hospitality, fashion and edtech — India and the UAE.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-signal-deep px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-signal-ink"
            >
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-eyebrow text-muted-on-dark">{col.title}</p>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-text-light/85 transition-colors hover:text-signal"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line-dark pt-8 text-xs text-muted-on-dark md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Saurabh Sharma. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href={site.linkedin} aria-label="LinkedIn" className="hover:text-signal">
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a href={`mailto:${site.email}`} aria-label="Email" className="hover:text-signal">
              <Mail className="h-4 w-4" />
            </a>
            <a href={`tel:${site.phone}`} aria-label="Phone" className="hover:text-signal">
              <Phone className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
