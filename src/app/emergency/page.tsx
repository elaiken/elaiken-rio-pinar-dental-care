import { PageHero } from "@/components/page-hero";
import { LeadForm } from "@/components/lead-form";
import { siteConfig } from "@/lib/site";

export default function EmergencyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Emergency Dental"
        title="Same-day relief for urgent care."
        subtitle="We reserve daily emergency appointments for pain relief, trauma, and urgent dental needs."
      />
      <section className="px-5 pb-24 md:px-8">
        <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[1fr_1fr]">
          <div className="glass rounded-[28px] border border-white/10 p-8">
            <h2 className="text-2xl font-semibold">Immediate steps</h2>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>Call our emergency line for fastest response.</li>
              <li>Request an urgent appointment using the form.</li>
              <li>We will confirm triage and arrival time.</li>
            </ul>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="mt-6 inline-flex rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-widest text-black"
            >
              Call Now
            </a>
          </div>
          <div className="glass rounded-[28px] border border-white/10 p-8">
            <h2 className="text-2xl font-semibold">Emergency request</h2>
            <p className="mt-3 text-sm text-white/70">
              Provide your contact details and symptoms. We will respond quickly
              with next steps.
            </p>
            <div className="mt-6">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
