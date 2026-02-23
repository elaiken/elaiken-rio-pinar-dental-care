import { PageHero } from "@/components/page-hero";
import { DoctorPortrait } from "@/components/doctor-portrait";
import { siteConfig } from "@/lib/site";

export default function FounderPage() {
  return (
    <main>
      <PageHero
        eyebrow="Founder"
        title={`Celebrate ${siteConfig.founder.name}`}
        subtitle="Learn more about the doctor behind Rio Pinar Dental Care and his patient-first approach to comprehensive dentistry in Orlando."
      />
      <section className="px-5 pb-24 md:px-8">
        <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div className="glass rounded-[28px] border border-white/10 p-8">
            <div className="mb-6 flex justify-center md:justify-start">
              <DoctorPortrait
                src={siteConfig.founder.imagePath}
                alt={siteConfig.founder.name}
                initials={siteConfig.founder.initials}
                className="h-44 w-44 border-4 border-white/80"
              />
            </div>
            <h2 className="text-2xl font-semibold">{siteConfig.founder.title}</h2>
            <p className="mt-3 text-sm text-white/70">
              {siteConfig.founder.bio}
            </p>
            <p className="mt-4 text-sm text-white/70">
              {siteConfig.founder.bioExtended}
            </p>
          </div>
          <div className="glass rounded-[28px] border border-white/10 p-8">
            <h3 className="text-xl font-semibold">Doctor highlights</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>Patient-first exams with clear treatment explanations.</li>
              <li>Preventive, restorative, and cosmetic care planning.</li>
              <li>Focused on comfort and long-term oral health outcomes.</li>
              <li>Serving families and individuals in the Orlando community.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
