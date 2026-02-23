import Link from "next/link";
import { RioPinarLogo } from "@/components/rio-pinar-logo";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/appointments", label: "Appointments" },
  { href: "/insurance", label: "Insurance & Payments" },
  { href: "/intake", label: "Patient Forms" },
  { href: "/reviews", label: "Reviews" },
  { href: "/emergency", label: "Emergency Dental" },
  { href: "/team", label: "Meet the Team" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-900">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_1fr_1fr] md:px-8">
        <div className="space-y-4">
          <RioPinarLogo />
          <p className="text-sm text-slate-600">{siteConfig.description}</p>
          <div className="text-sm text-slate-600">
            <p>{siteConfig.addressLine}</p>
            <p>{siteConfig.phone}</p>
            <p>{siteConfig.email}</p>
          </div>
          <div className="flex gap-3">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="rounded-full border border-slate-300 px-4 py-2 text-xs uppercase tracking-widest text-slate-700"
            >
              Call
            </a>
            <a
              href={siteConfig.mapLink}
              className="rounded-full border border-slate-300 px-4 py-2 text-xs uppercase tracking-widest text-slate-700"
            >
              Directions
            </a>
          </div>
        </div>

        <div className="space-y-3 text-sm text-slate-700">
          <p className="text-xs uppercase tracking-widest text-slate-500">Hours</p>
          {siteConfig.hours.map((item) => (
            <div key={item.day} className="flex justify-between gap-4">
              <span>{item.day}</span>
              <span className="text-right text-slate-500">{item.hours}</span>
            </div>
          ))}
        </div>

        <div className="space-y-3 text-sm">
          <p className="text-xs uppercase tracking-widest text-slate-500">
            Explore
          </p>
          <div className="grid gap-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-600 transition hover:text-teal-700"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 px-5 py-6 text-center text-xs text-slate-500 md:px-8">
        {siteConfig.legalName} · Orlando, Florida · Appointment requests are
        reviewed and confirmed by the office.
      </div>
    </footer>
  );
}
