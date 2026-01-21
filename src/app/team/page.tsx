import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/lib/site";

const team = [
  {
    name: siteConfig.founder.name,
    role: siteConfig.founder.title,
    bio: siteConfig.founder.bio,
  },
  {
    name: "Dr. Ava Morales",
    role: "Cosmetic Dentistry Lead",
    bio: "Specializes in digital smile design, veneers, and aesthetic transformations.",
  },
  {
    name: "Dr. Liam Carter",
    role: "Restorative & Implant Specialist",
    bio: "Focused on implant surgery and full-mouth rehabilitation with digital planning.",
  },
  {
    name: "Sofia Nguyen",
    role: "Patient Concierge",
    bio: "Coordinates scheduling, insurance verification, and luxury patient onboarding.",
  },
];

export default function TeamPage() {
  return (
    <main>
      <PageHero
        eyebrow="Doctors & Staff"
        title="A team built for comfort and precision."
        subtitle="Our clinicians and concierge team focus on transparent care, advanced diagnostics, and a calming experience from start to finish."
      />
      <section className="px-5 pb-24 md:px-8">
        <div className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-2">
          {team.map((member) => (
            <div
              key={member.name}
              className="glass rounded-[28px] border border-white/10 p-6"
            >
              <h2 className="text-2xl font-semibold">{member.name}</h2>
              <p className="text-sm text-cyan-200">{member.role}</p>
              <p className="mt-3 text-sm text-white/70">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
