"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/site";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/appointments", label: "Appointments" },
  { href: "/insurance", label: "Insurance" },
  { href: "/intake", label: "Patient Intake" },
  { href: "/team", label: "Doctors & Staff" },
  { href: "/reviews", label: "Reviews" },
  { href: "/founder", label: "Founder" },
  { href: "/faq", label: "AI FAQ" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link
          href="/"
          className="text-lg font-semibold tracking-wide text-white"
        >
          {siteConfig.name}
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a
            className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white/80 transition hover:border-white/60 hover:text-white"
            href={`tel:${siteConfig.phoneRaw}`}
          >
            Call Now
          </a>
          <Link
            className="rounded-full bg-gradient-to-r from-cyan-200 via-white to-amber-200 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-black transition hover:opacity-90"
            href="/appointments"
          >
            Book Visit
          </Link>
        </div>
        <button
          type="button"
          className="md:hidden rounded-full border border-white/20 px-3 py-2 text-xs uppercase tracking-widest text-white"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          Menu
        </button>
      </div>
      {open ? (
        <div
          id="mobile-nav"
          className="md:hidden border-t border-white/10 bg-black/80 px-5 py-4"
        >
          <div className="grid gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/80"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/appointments"
              className="rounded-full bg-white px-4 py-2 text-center text-xs font-semibold uppercase tracking-widest text-black"
              onClick={() => setOpen(false)}
            >
              Book Visit
            </Link>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="rounded-full border border-white/20 px-4 py-2 text-center text-xs font-semibold uppercase tracking-widest text-white"
            >
              Call Now
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
