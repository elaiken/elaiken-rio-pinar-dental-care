import { PageHero } from "@/components/page-hero";
import { FaqAI } from "@/components/faq-ai";

export default function FaqPage() {
  return (
    <main>
      <PageHero
        eyebrow="AI FAQ"
        title="Instant answers, curated for patients."
        subtitle="Our AI-assisted FAQ offers quick clarity on services, insurance, and care. Connect a live model when ready."
      />
      <section className="px-5 pb-24 md:px-8">
        <div className="mx-auto w-full max-w-5xl">
          <FaqAI />
        </div>
      </section>
    </main>
  );
}
