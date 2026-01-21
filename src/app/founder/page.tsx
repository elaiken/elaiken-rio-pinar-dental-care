import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/lib/site";

export default function FounderPage() {
  return (
    <main>
      <PageHero
        eyebrow="Founder"
        title={`Celebrate ${siteConfig.founder.name}`}
        subtitle="A visionary dentist committed to luxury care, advanced technology, and a patient-first experience in Central Florida."
      />
      <section className="px-5 pb-24 md:px-8">
        <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div className="glass rounded-[28px] border border-white/10 p-8">
            <h2 className="text-2xl font-semibold">{siteConfig.founder.title}</h2>
            <p className="mt-3 text-sm text-white/70">
              {siteConfig.founder.bio}
            </p>
            <p className="mt-4 text-sm text-white/70">
              Dr. Argueta designed Argueta Dental to feel like a boutique health
              destination. From the ambient lighting to AI-assisted diagnostics,
              every detail reflects his commitment to precision and hospitality.
            </p>
          </div>
          <div className="glass rounded-[28px] border border-white/10 p-8">
            <h3 className="text-xl font-semibold">Founder highlights</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>Advanced digital diagnostics and treatment planning.</li>
              <li>Luxury patient experience with concierge onboarding.</li>
              <li>Commitment to community care across Central Florida.</li>
              <li>Technology-driven transparency and comfort.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
