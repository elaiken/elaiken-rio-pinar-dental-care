"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site";

type FormState = "idle" | "loading" | "success" | "error";

export function LeadForm({
  variant = "primary",
}: {
  variant?: "primary" | "compact";
}) {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  const inputClass =
    "h-12 rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-600 focus:outline-none";
  const textareaClass =
    "min-h-[120px] rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-600 focus:outline-none";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setError("");
    const form = event.currentTarget;

    const formData = new FormData(form);
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

      form.reset();
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
        <input className={inputClass} name="fullName" placeholder="Full name" required />
        <input className={inputClass} name="phone" placeholder="Phone number" required />
      </div>
      <input
        className={inputClass}
        type="email"
        name="email"
        placeholder="Email address"
        required
      />
      {variant === "primary" ? (
        <textarea
          className={textareaClass}
          name="message"
          placeholder="What can we help you with?"
          required
        />
      ) : null}
      <label className="flex items-start gap-3 text-xs text-slate-600">
        <input type="checkbox" name="consent" required className="mt-1" />
        I agree to be contacted by {siteConfig.name}. Please do not include
        private health information in this form.
      </label>
      <button
        type="submit"
        className="h-12 rounded-full bg-teal-700 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-teal-800 disabled:opacity-60"
        disabled={state === "loading"}
      >
        {state === "loading" ? "Sending..." : "Request a Visit"}
      </button>
      {state === "success" ? (
        <p className="text-xs text-emerald-700">
          Thanks! We received your request and will follow up shortly.
        </p>
      ) : null}
      {state === "error" ? (
        <p className="text-xs text-rose-700">{error}</p>
      ) : null}
    </form>
  );
}
