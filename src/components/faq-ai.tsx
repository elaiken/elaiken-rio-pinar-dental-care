"use client";

import { useMemo, useState } from "react";

const responses = [
  {
    question: "Do you accept major insurance plans?",
    answer:
      "Yes, we verify coverage for PPO plans and can guide you through HSA/FSA options. We'll confirm benefits before treatment.",
  },
  {
    question: "What makes the 2027 patient experience different?",
    answer:
      "We combine digital diagnostics, transparent treatment planning, and comfort-first care in a luxury space designed for low-stress visits.",
  },
  {
    question: "How fast can I be seen for emergencies?",
    answer:
      "We reserve daily emergency slots. Call or request an appointment and we'll prioritize same-day availability when possible.",
  },
  {
    question: "Do you offer cosmetic dentistry and Invisalign?",
    answer:
      "Yes. We provide cosmetic, restorative, and clear aligner options with digital smile previews to help you decide.",
  },
];

export function FaqAI() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!query) return responses;
    return responses.filter((item) =>
      item.question.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className="rounded-3xl border border-white/10 bg-black/50 p-6 text-white">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-white/50">
            AI-Assisted FAQ
          </p>
          <h3 className="text-2xl font-semibold">
            Instant answers, elevated clarity.
          </h3>
        </div>
        <span className="rounded-full border border-white/20 px-3 py-1 text-[10px] uppercase tracking-widest text-white/60">
          Beta
        </span>
      </div>
      <div className="mt-4 grid gap-3">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="h-12 rounded-2xl border border-white/10 bg-black/40 px-4 text-sm text-white placeholder:text-white/50"
          placeholder="Ask about services, insurance, or emergencies..."
        />
        <div className="grid gap-3 md:grid-cols-2">
          {filtered.map((item) => (
            <button
              key={item.question}
              type="button"
              onClick={() => setSelected(item.answer)}
              className="rounded-2xl border border-white/10 bg-black/40 p-4 text-left text-sm text-white/80 transition hover:border-white/30"
            >
              {item.question}
            </button>
          ))}
        </div>
        <div className="rounded-2xl border border-white/10 bg-black/60 p-4 text-sm text-white/70">
          {selected ??
            "Select a question for a quick answer. Connect this module to a live AI model when ready."}
        </div>
      </div>
    </div>
  );
}
