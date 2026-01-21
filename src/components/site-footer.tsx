import Link from "next/link";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/appointments", label: "Appointments" },
  { href: "/insurance", label: "Insurance & Payments" },
  { href: "/intake", label: "Patient Intake" },
  { href: "/reviews", label: "Reviews" },
  { href: "/emergency", label: "Emergency Dental" },
  { href: "/hipaa", label: "HIPAA & Messaging" },
  { href: "/privacy", label: "Privacy" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/80 text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_1fr_1fr] md:px-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">{siteConfig.name}</h3>
          <p className="text-sm text-white/70">{siteConfig.description}</p>
          <div className="text-sm text-white/70">
            <p>{siteConfig.addressLine}</p>
            <p>{siteConfig.phone}</p>
            <p>{siteConfig.email}</p>
          </div>
          <div className="flex gap-3">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="rounded-full border border-white/30 px-4 py-2 text-xs uppercase tracking-widest text-white"
            >
              Call
            </a>
            <a
              href={siteConfig.mapLink}
              className="rounded-full border border-white/30 px-4 py-2 text-xs uppercase tracking-widest text-white"
            >
              Directions
            </a>
          </div>
        </div>
        <div className="space-y-3 text-sm text-white/80">
          <p className="text-xs uppercase tracking-widest text-white/50">
            Hours
          </p>
          {siteConfig.hours.map((item) => (
            <div key={item.day} className="flex justify-between">
              <span>{item.day}</span>
              <span className="text-white/60">{item.hours}</span>
            </div>
          ))}
        </div>
        <div className="space-y-3 text-sm">
          <p className="text-xs uppercase tracking-widest text-white/50">
            Explore
          </p>
          <div className="grid gap-2">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-white/70">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-6 text-center text-xs text-white/50 md:px-8">
        {siteConfig.legalName} · Central Florida · Future-ready care in 2027 and
        beyond.
      </div>
    </footer>
  );
}
