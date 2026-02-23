import { PageHero } from "@/components/page-hero";
import { AppointmentForm } from "@/components/appointment-form";
import { siteConfig } from "@/lib/site";

export default function AppointmentsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Appointments"
        title="Request an appointment online."
        subtitle="Send your preferred day and reason for visit. Rio Pinar Dental Care will review availability and confirm your appointment by phone or email."
      />
      <section className="px-5 pb-24 md:px-8">
        <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div className="glass rounded-[28px] border border-white/10 p-8">
            <h2 className="text-2xl font-semibold">Request an appointment</h2>
            <p className="mt-3 text-sm text-white/70">
              Your request is sent to the office for manual confirmation. This
              helps the team verify availability before locking in the time.
            </p>
            <div className="mt-6">
              <AppointmentForm />
            </div>
          </div>
          <div className="space-y-6">
            <div className="glass rounded-[28px] border border-white/10 p-6">
              <h3 className="text-xl font-semibold">What happens next?</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li>The office reviews your requested date/time.</li>
                <li>Staff confirms availability and any needed details.</li>
                <li>You receive a phone call or email confirmation.</li>
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
              <h3 className="text-xl font-semibold">Online request notes</h3>
              <p className="mt-2 text-sm text-white/70">
                This website does not take payments online. The form only
                collects appointment request information so the office can
                contact the patient and finalize scheduling.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
