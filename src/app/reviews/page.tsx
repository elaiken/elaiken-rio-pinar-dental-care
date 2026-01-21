import { PageHero } from "@/components/page-hero";

const testimonials = [
  {
    name: "Jordan L.",
    quote:
      "The team made everything feel calm and high-end. I felt informed at every step.",
  },
  {
    name: "Camila R.",
    quote:
      "I loved the digital preview of my smile. The experience felt futuristic.",
  },
  {
    name: "Marcus T.",
    quote:
      "My emergency visit was handled immediately. Pain relief was fast and the staff was kind.",
  },
];

export default function ReviewsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Reviews"
        title="Patients who feel the difference."
        subtitle="We highlight Google reviews and testimonials that reflect our luxury, tech-forward experience. Connect your live Google Reviews feed when ready."
      />
      <section className="px-5 pb-24 md:px-8">
        <div className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="glass rounded-[28px] border border-white/10 p-6"
            >
              <p className="text-sm text-white/70">“{testimonial.quote}”</p>
              <p className="mt-4 text-xs uppercase tracking-widest text-white/50">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
