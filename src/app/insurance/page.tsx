import { PageHero } from "@/components/page-hero";

const perks = [
  "PPO insurance verification within 24 hours.",
  "Flexible financing and membership plans.",
  "Transparent digital treatment estimates.",
  "HSA/FSA-friendly payment options.",
];

export default function InsurancePage() {
  return (
    <main>
      <PageHero
        eyebrow="Insurance & Payments"
        title="Clarity before treatment."
        subtitle="We believe financial transparency builds trust. Our concierge team reviews benefits, estimates, and payment options before your visit."
      />
      <section className="px-5 pb-24 md:px-8">
        <div className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-[1fr_1fr]">
          <div className="glass rounded-[28px] border border-white/10 p-8">
            <h2 className="text-2xl font-semibold">Accepted coverage</h2>
            <p className="mt-3 text-sm text-white/70">
              We work with most major PPO plans and help coordinate out-of-
              network benefits when needed. Submit your plan details and we will
              verify coverage quickly.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {perks.map((perk) => (
                <li key={perk}>{perk}</li>
              ))}
            </ul>
          </div>
          <div className="glass rounded-[28px] border border-white/10 p-8">
            <h2 className="text-2xl font-semibold">Payment options</h2>
            <p className="mt-3 text-sm text-white/70">
              We accept all major credit cards, HSA/FSA cards, and flexible
              payment plans. Membership options are available for uninsured
              patients seeking predictable care.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-white/70">
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                Monthly membership plans
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                Financing partner integrations
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                Concierge pre-authorization
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
