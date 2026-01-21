import { PageHero } from "@/components/page-hero";
import { IntakeForm } from "@/components/intake-form";

export default function IntakePage() {
  return (
    <main>
      <PageHero
        eyebrow="Patient Intake"
        title="Digital intake, streamlined."
        subtitle="Complete your pre-visit information securely. This helps us personalize your appointment and reduce time in-office."
      />
      <section className="px-5 pb-24 md:px-8">
        <div className="mx-auto w-full max-w-4xl">
          <div className="glass rounded-[28px] border border-white/10 p-8">
            <h2 className="text-2xl font-semibold">Patient intake form</h2>
            <p className="mt-3 text-sm text-white/70">
              Please avoid including full medical records or sensitive PHI in
              this intake request. Our team will confirm details using secure
              channels.
            </p>
            <div className="mt-6">
              <IntakeForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
