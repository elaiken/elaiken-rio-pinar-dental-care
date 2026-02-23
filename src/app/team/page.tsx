import { PageHero } from "@/components/page-hero";
import { DoctorPortrait } from "@/components/doctor-portrait";
import { siteConfig } from "@/lib/site";

const team = [
  {
    name: siteConfig.founder.name,
    role: siteConfig.founder.title,
    bio: siteConfig.founder.bio,
    imagePath: siteConfig.founder.imagePath,
    initials: siteConfig.founder.initials,
  },
];

export default function TeamPage() {
  return (
    <main>
      <PageHero
        eyebrow="Team"
        title="Meet your Rio Pinar Dental Care dentist."
        subtitle="Dr. Erick Argueta leads the care experience with a focus on comfort, clear communication, and long-term oral health."
      />
      <section className="px-5 pb-24 md:px-8">
        <div className="mx-auto grid w-full max-w-5xl gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="glass rounded-[28px] border border-white/10 p-6 md:p-8"
            >
              <div className="grid gap-6 md:grid-cols-[220px_1fr] md:items-center">
                <DoctorPortrait
                  src={member.imagePath}
                  alt={member.name}
                  initials={member.initials}
                  className="mx-auto h-44 w-44 border-4 border-white/80"
                />
                <div>
                  <h2 className="text-2xl font-semibold">{member.name}</h2>
                  <p className="text-sm text-cyan-200">{member.role}</p>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    {member.bio}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    {siteConfig.founder.bioExtended}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
