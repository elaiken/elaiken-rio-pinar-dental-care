import Link from "next/link";
import { LeadForm } from "@/components/lead-form";
import { Reveal } from "@/components/reveal";
import { FaqAI } from "@/components/faq-ai";
import { siteConfig } from "@/lib/site";

export default function Home() {
  return (
    <main className="aurora">
      <section className="relative overflow-hidden px-5 pb-20 pt-16 md:px-8 md:pb-28">
        <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                Central Florida · 2027 Dentistry
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
                Luxury dentistry engineered for the next decade.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-white/70">
                {siteConfig.name} combines advanced digital diagnostics, a
                spa-level experience, and transparent care plans. Every visit is
                designed for calm, clarity, and precision.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/appointments"
                  className="rounded-full bg-gradient-to-r from-cyan-200 via-white to-amber-200 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-black"
                >
                  Book Appointment
                </Link>
                <Link
                  href="/emergency"
                  className="rounded-full border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white"
                >
                  Emergency Dental
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-4 text-xs uppercase tracking-widest text-white/50">
                <span>Digital Scans</span>
                <span>Luxury Suites</span>
                <span>Concierge Care</span>
                <span>Same-Day Options</span>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="glass rounded-[28px] border border-white/10 p-6 shadow-2xl">
              <p className="text-xs uppercase tracking-widest text-white/60">
                Request a visit
              </p>
              <h2 className="mt-2 text-2xl font-semibold">
                We will confirm in under 24 hours.
              </h2>
              <div className="mt-6">
                <LeadForm />
              </div>
            </div>
          </Reveal>
        </div>
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-cyan-200/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-60 w-60 rounded-full bg-amber-200/10 blur-3xl" />
      </section>

      <section className="px-5 pb-20 md:px-8">
        <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-3">
          {[
            {
              title: "Immersive diagnostics",
              body: "3D scans and AI-assisted imaging to plan every procedure with precision.",
            },
            {
              title: "Luxury patient flow",
              body: "Private suites, calming lighting, and concierge-style check-ins.",
            },
            {
              title: "Transparent care",
              body: "Clear financial options, insurance estimates, and digital treatment plans.",
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <div className="glass rounded-3xl border border-white/10 p-6">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-white/70">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-5 pb-24 md:px-8">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-widest text-white/50">
                Signature Services
              </p>
              <h2 className="text-3xl font-semibold">
                Comprehensive dentistry, elevated.
              </h2>
              <p className="text-sm text-white/70">
                Preventive, restorative, cosmetic, and emergency care — all
                designed with digital precision and luxury comfort.
              </p>
              <div className="grid gap-3 text-sm text-white/70">
                {[
                  "Digital smile design & veneers",
                  "Invisalign & orthodontic alignment",
                  "Implants, crowns, and full-mouth restoration",
                  "Same-day emergency relief",
                  "Preventive hygiene with advanced diagnostics",
                ].map((service) => (
                  <div
                    key={service}
                    className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
                  >
                    {service}
                  </div>
                ))}
              </div>
              <Link
                href="/services"
                className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-cyan-200"
              >
                View all services →
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass rounded-[32px] border border-white/10 p-8">
              <h3 className="text-2xl font-semibold">Emergency ready</h3>
              <p className="mt-3 text-sm text-white/70">
                Our team holds reserved time every day for urgent care. We
                prioritize pain relief and immediate stabilization.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/emergency"
                  className="rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-widest text-black"
                >
                  Emergency Intake
                </Link>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="rounded-full border border-white/30 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-white"
                >
                  Call Now
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-24 md:px-8">
        <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[1fr_1fr]">
          <Reveal>
            <div className="glass rounded-[28px] border border-white/10 p-8">
              <p className="text-xs uppercase tracking-widest text-white/50">
                Founder
              </p>
              <h2 className="mt-2 text-3xl font-semibold">
                {siteConfig.founder.name}
              </h2>
              <p className="mt-3 text-sm text-white/70">
                {siteConfig.founder.bio}
              </p>
              <Link
                href="/founder"
                className="mt-6 inline-flex items-center text-xs font-semibold uppercase tracking-widest text-cyan-200"
              >
                Meet Dr. Argueta →
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass rounded-[28px] border border-white/10 p-8">
              <p className="text-xs uppercase tracking-widest text-white/50">
                Automation & CRM
              </p>
              <h3 className="mt-2 text-3xl font-semibold">
                Lead capture, simplified.
              </h3>
              <p className="mt-3 text-sm text-white/70">
                Every request flows into a secure intake pipeline. Our automated
                workflows notify your team, tag new leads, and prepare follow-up
                tasks — ready for scaling.
              </p>
              <Link
                href="/appointments"
                className="mt-6 inline-flex items-center text-xs font-semibold uppercase tracking-widest text-cyan-200"
              >
                See how it works →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-24 md:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <div className="grid gap-6 md:grid-cols-[1fr_1fr]">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-widest text-white/50">
                  Insurance & Payments
                </p>
                <h2 className="text-3xl font-semibold">
                  Transparent, flexible, and easy.
                </h2>
                <p className="text-sm text-white/70">
                  We accept most PPO plans, offer clear financing options, and
                  can verify benefits before your visit. Our concierge team
                  walks you through every step.
                </p>
                <Link
                  href="/insurance"
                  className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-cyan-200"
                >
                  View insurance info →
                </Link>
              </div>
              <div className="grid gap-3 text-sm text-white/70">
                {[
                  "Insurance verification within 24 hours.",
                  "Digital payment portals with text receipts.",
                  "Membership plan options for uninsured patients.",
                  "Transparent treatment plan estimates.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-24 md:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <FaqAI />
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-24 md:px-8">
        <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-widest text-white/50">
                Local & Digital Presence
              </p>
              <h2 className="text-3xl font-semibold">
                Built for Central Florida SEO.
              </h2>
              <p className="text-sm text-white/70">
                We optimize local listings, structured data, and review capture
                to boost discoverability across Orlando, Kissimmee, Winter Park,
                and beyond.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={siteConfig.mapLink}
                  className="rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-white"
                >
                  Get Directions
                </a>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-white"
                >
                  Tap to Call
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass rounded-[28px] border border-white/10 p-8">
              <p className="text-xs uppercase tracking-widest text-white/50">
                Google Reviews
              </p>
              <h3 className="mt-2 text-2xl font-semibold">
                4.9 average rating
              </h3>
              <div className="mt-4 grid gap-4 text-sm text-white/70">
                <blockquote className="rounded-2xl border border-white/10 bg-black/40 p-4">
                  “The most modern and calming dental experience I have ever
                  had. Everything felt intentional.”
                </blockquote>
                <blockquote className="rounded-2xl border border-white/10 bg-black/40 p-4">
                  “They explained every step and the tech was impressive. I felt
                  taken care of.”
                </blockquote>
              </div>
              <Link
                href="/reviews"
                className="mt-6 inline-flex items-center text-xs font-semibold uppercase tracking-widest text-cyan-200"
              >
                See more reviews →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-28 md:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <div className="glass rounded-[32px] border border-white/10 p-10 text-center">
              <p className="text-xs uppercase tracking-widest text-white/50">
                Emergency Dental
              </p>
              <h2 className="mt-3 text-3xl font-semibold">
                Pain relief on-demand.
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm text-white/70">
                Call us for same-day emergency appointments. We reserve time for
                urgent care and can guide you immediately.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link
                  href="/emergency"
                  className="rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-widest text-black"
                >
                  Start Emergency Intake
                </Link>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="rounded-full border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white"
                >
                  Call Now
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            name: siteConfig.name,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Central Florida",
            },
            telephone: siteConfig.phone,
          }),
        }}
      />
    </main>
  );
}
