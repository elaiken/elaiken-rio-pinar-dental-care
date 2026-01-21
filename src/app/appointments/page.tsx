import { PageHero } from "@/components/page-hero";
import { AppointmentForm } from "@/components/appointment-form";
import { siteConfig } from "@/lib/site";

export default function AppointmentsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Appointments"
        title="Book your visit in minutes."
        subtitle="Submit your preferred time and we will confirm availability within 24 hours. Emergency cases are prioritized."
      />
      <section className="px-5 pb-24 md:px-8">
        <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div className="glass rounded-[28px] border border-white/10 p-8">
            <h2 className="text-2xl font-semibold">Request an appointment</h2>
            <p className="mt-3 text-sm text-white/70">
              The form below feeds into the Argueta Dental CRM stub. We use it
              to track requests, trigger follow-ups, and confirm appointments.
            </p>
            <div className="mt-6">
              <AppointmentForm />
            </div>
          </div>
          <div className="space-y-6">
            <div className="glass rounded-[28px] border border-white/10 p-6">
              <h3 className="text-xl font-semibold">What happens next?</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li>Our concierge team reviews your request.</li>
                <li>We verify insurance and available times.</li>
                <li>We confirm by phone or secure message.</li>
              </ul>
            </div>
            <div className="glass rounded-[28px] border border-white/10 p-6">
              <h3 className="text-xl font-semibold">Need immediate help?</h3>
              <p className="mt-2 text-sm text-white/70">
                Call for emergency triage and same-day availability.
              </p>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="mt-4 inline-flex rounded-full border border-white/30 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-white"
              >
                Call Now
              </a>
            </div>
            <div className="glass rounded-[28px] border border-white/10 p-6">
              <h3 className="text-xl font-semibold">Automation notes</h3>
              <p className="mt-2 text-sm text-white/70">
                Leads submitted here post to `/api/leads`. In development, they
                are stored in `data/lead.json` for review. In production, replace
                that stub with your CRM or database.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
