import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/lib/site";

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Comprehensive dental care for the whole family."
        subtitle="This demo service menu follows the reference website structure. We can finalize exact wording and offerings once your client approves the list."
      >
        <Link
          href="/appointments"
          className="inline-flex rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-widest text-black"
        >
          Request Appointment
        </Link>
      </PageHero>
      <section className="px-5 pb-24 md:px-8">
        <div className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-2">
          {siteConfig.serviceCategories.map((service) => (
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
