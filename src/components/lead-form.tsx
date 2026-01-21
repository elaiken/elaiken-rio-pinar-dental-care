"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export function LeadForm({ variant = "primary" }: { variant?: "primary" | "compact" }) {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setError("");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data?.error ?? "Unable to submit.");
      }

      event.currentTarget.reset();
      setState("success");
    } catch (submissionError) {
      setState("error");
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Unable to submit."
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-3 md:grid-cols-2">
        <input
          className="h-12 rounded-2xl border border-white/10 bg-black/40 px-4 text-sm text-white placeholder:text-white/50"
          name="fullName"
          placeholder="Full name"
          required
        />
        <input
          className="h-12 rounded-2xl border border-white/10 bg-black/40 px-4 text-sm text-white placeholder:text-white/50"
          name="phone"
          placeholder="Phone number"
          required
        />
      </div>
      <input
        className="h-12 rounded-2xl border border-white/10 bg-black/40 px-4 text-sm text-white placeholder:text-white/50"
        type="email"
        name="email"
        placeholder="Email address"
        required
      />
      {variant === "primary" ? (
        <textarea
          className="min-h-[120px] rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/50"
          name="message"
          placeholder="What can we help you with?"
          required
        />
      ) : null}
      <label className="flex items-start gap-3 text-xs text-white/70">
        <input type="checkbox" name="consent" required className="mt-1" />
        I agree to be contacted by Argueta Dental. No PHI should be submitted via
        this form.
      </label>
      <button
        type="submit"
        className="h-12 rounded-full bg-gradient-to-r from-cyan-200 via-white to-amber-200 text-xs font-semibold uppercase tracking-widest text-black transition hover:opacity-90 disabled:opacity-60"
        disabled={state === "loading"}
      >
        {state === "loading" ? "Sending..." : "Request a Visit"}
      </button>
      {state === "success" ? (
        <p className="text-xs text-emerald-200">
          Thanks! We received your request and will follow up shortly.
        </p>
      ) : null}
      {state === "error" ? (
        <p className="text-xs text-rose-200">{error}</p>
      ) : null}
    </form>
  );
}
