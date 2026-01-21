import Link from "next/link";
import { PageHero } from "@/components/page-hero";

const services = [
  {
    title: "Preventive Care",
    items: ["Digital exams", "Hygiene therapy", "Oral cancer screening"],
  },
  {
    title: "Restorative Dentistry",
    items: ["Crowns & bridges", "Implants", "Full-mouth restoration"],
  },
  {
    title: "Cosmetic Dentistry",
    items: ["Veneers", "Smile design", "Whitening protocols"],
  },
  {
    title: "Orthodontics",
    items: ["Clear aligners", "Retainers", "Bite alignment"],
  },
  {
    title: "Emergency Care",
    items: ["Same-day relief", "Pain management", "Stabilization plans"],
  },
  {
    title: "Wellness Add-ons",
    items: ["Sleep screening", "TMJ therapy", "Airway consults"],
  },
];

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Comprehensive care, luxuriously delivered."
        subtitle="Our service menu blends advanced diagnostics with concierge-level comfort. Every plan is personalized for clarity and long-term health."
      >
        <Link
          href="/appointments"
          className="inline-flex rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-widest text-black"
        >
          Book a Consultation
        </Link>
      </PageHero>
      <section className="px-5 pb-24 md:px-8">
        <div className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="glass rounded-3xl border border-white/10 p-6"
            >
              <h2 className="text-2xl font-semibold">{service.title}</h2>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
