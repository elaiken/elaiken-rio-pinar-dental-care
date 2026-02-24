"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export function AppointmentForm() {
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
        body: JSON.stringify({ ...payload, source: "appointment" }),
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
      <div className="grid gap-3 md:grid-cols-2">
        <input
          className={inputClass}
          type="email"
          name="email"
          placeholder="Email address"
          required
        />
        <input
          className={inputClass}
          name="preferredDay"
          placeholder="Preferred day/time"
          required
        />
      </div>
      <textarea
        className={textareaClass}
        name="visitReason"
        placeholder="Reason for visit"
        required
      />
      <label className="flex items-start gap-3 text-xs text-slate-600">
        <input type="checkbox" name="consent" required className="mt-1" />
        I agree to be contacted to confirm my appointment request.
      </label>
      <button
        type="submit"
        className="h-12 rounded-full bg-teal-700 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-teal-800 disabled:opacity-60"
        disabled={state === "loading"}
      >
        {state === "loading" ? "Submitting..." : "Request Appointment"}
      </button>
      {state === "success" ? (
        <p className="text-xs text-emerald-700">
          Appointment request received. Our office will review it and confirm by
          phone or email.
        </p>
      ) : null}
      {state === "error" ? (
        <p className="text-xs text-rose-700">{error}</p>
      ) : null}
    </form>
  );
}
