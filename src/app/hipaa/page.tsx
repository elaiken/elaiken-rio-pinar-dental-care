import { PageHero } from "@/components/page-hero";
import { SecureMessageForm } from "@/components/secure-message-form";

export default function HipaaPage() {
  return (
    <main>
      <PageHero
        eyebrow="HIPAA & Secure Messaging"
        title="Privacy-first communication."
        subtitle="We respect patient privacy with HIPAA-aligned workflows, secure messaging, and controlled access to sensitive records."
      />
      <section className="px-5 pb-24 md:px-8">
        <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div className="glass rounded-[28px] border border-white/10 p-8">
            <h2 className="text-2xl font-semibold">HIPAA-compliant contract</h2>
            <p className="mt-3 text-sm text-white/70">
              Our intake and communication systems are designed to protect
              patient data. For full legal language, integrate your official
              HIPAA Notice of Privacy Practices and secure messaging vendor.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>Secure access controls and staff permissions.</li>
              <li>Encrypted communication and audit trails.</li>
              <li>Patient consent captured for communications.</li>
              <li>Vendor integrations for compliant messaging.</li>
            </ul>
          </div>
          <div className="glass rounded-[28px] border border-white/10 p-8">
            <h2 className="text-2xl font-semibold">Secure contact request</h2>
            <p className="mt-3 text-sm text-white/70">
              Submit a secure contact request and our team will deliver a
              compliant messaging link.
            </p>
            <div className="mt-6">
              <SecureMessageForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
