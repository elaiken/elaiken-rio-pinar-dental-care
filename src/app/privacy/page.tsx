import { PageHero } from "@/components/page-hero";

export default function PrivacyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Privacy"
        title="Respecting patient privacy by design."
        subtitle="This placeholder policy should be replaced with your official privacy policy and HIPAA Notice of Privacy Practices."
      />
      <section className="px-5 pb-24 md:px-8">
        <div className="mx-auto w-full max-w-4xl space-y-6 text-sm text-white/70">
          <div className="glass rounded-[28px] border border-white/10 p-8">
            <h2 className="text-2xl font-semibold text-white">Overview</h2>
            <p className="mt-3">
              Argueta Dental collects patient information only to provide care,
              schedule appointments, and deliver requested services. We do not
              sell patient data. Replace this content with your formal legal
              policy before launch.
            </p>
          </div>
          <div className="glass rounded-[28px] border border-white/10 p-8">
            <h2 className="text-2xl font-semibold text-white">
              Data collection
            </h2>
            <p className="mt-3">
              Information submitted via forms is used for scheduling and follow-
              up communications. Sensitive medical records should be shared only
              through approved secure channels.
            </p>
          </div>
          <div className="glass rounded-[28px] border border-white/10 p-8">
            <h2 className="text-2xl font-semibold text-white">Contact</h2>
            <p className="mt-3">
              For privacy requests, contact the concierge team at
              hello@arguetadental.com.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
