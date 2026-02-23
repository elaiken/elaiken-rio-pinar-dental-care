"use client";

import Link from "next/link";
import { useState } from "react";
import { RioPinarLogo } from "@/components/rio-pinar-logo";
import { siteConfig } from "@/lib/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/appointments", label: "Appointments" },
  { href: "/insurance", label: "Insurance" },
  { href: "/team", label: "Team" },
  { href: "/reviews", label: "Reviews" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3 md:px-8">
        <Link href="/" aria-label={`${siteConfig.name} home`}>
          <RioPinarLogo />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-teal-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            className="rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-slate-700 transition hover:border-teal-500 hover:text-teal-700"
            href={`tel:${siteConfig.phoneRaw}`}
          >
            Call
          </a>
          <Link
            className="rounded-full bg-teal-700 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-teal-800"
            href="/appointments"
          >
            Schedule
          </Link>
        </div>

        <button
          type="button"
          className="rounded-full border border-slate-300 px-3 py-2 text-xs uppercase tracking-widest text-slate-700 md:hidden"
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
          className="border-t border-slate-200 bg-white px-5 py-4 md:hidden"
        >
          <div className="grid gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-700"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/appointments"
              className="rounded-full bg-teal-700 px-4 py-2 text-center text-xs font-semibold uppercase tracking-widest text-white"
              onClick={() => setOpen(false)}
            >
              Schedule
            </Link>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="rounded-full border border-slate-300 px-4 py-2 text-center text-xs font-semibold uppercase tracking-widest text-slate-700"
            >
              Call Now
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
