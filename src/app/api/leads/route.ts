import { NextResponse } from "next/server";
import { persistRecord } from "@/lib/lead-store";
import { siteConfig } from "@/lib/site";
import { isValidEmail, isValidPhone } from "@/lib/validation";

type NotificationResult =
  | { status: "sent"; id?: string }
  | { status: "skipped"; reason: string }
  | { status: "error"; reason: string };

function parseRecipients(value: string | undefined, fallback: string) {
  const raw = value ?? fallback;
  return raw
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function formatField(label: string, value: unknown) {
  const parsed = typeof value === "string" ? value.trim() : "";
  return `${label}: ${parsed || "-"}`;
}

async function sendResendEmail(payload: Record<string, unknown>) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromAddress = process.env.RESEND_FROM;

  if (!apiKey || !fromAddress) {
    return {
      status: "skipped",
      reason: "RESEND_API_KEY or RESEND_FROM not configured",
    } satisfies NotificationResult;
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "User-Agent": "ArguetaDental/1.0",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return {
        status: "error",
        reason: errorText || `Resend API returned ${response.status}`,
      } satisfies NotificationResult;
    }

    const data = (await response.json()) as { id?: string };
    return { status: "sent", id: data.id } satisfies NotificationResult;
  } catch (error) {
    return {
      status: "error",
      reason: error instanceof Error ? error.message : "Unknown Resend error",
    } satisfies NotificationResult;
  }
}

async function sendLeadNotification(payload: Record<string, unknown>) {
  const toRecipients = parseRecipients(
    process.env.LEAD_NOTIFICATION_TO,
    siteConfig.email
  );
  const ccRecipients = parseRecipients(process.env.LEAD_NOTIFICATION_CC, "");
  const fromAddress = process.env.RESEND_FROM;
  const source =
    typeof payload.source === "string" && payload.source.trim()
      ? payload.source
      : "website lead";

  const text = [
    `New ${source} submission from ${siteConfig.name}`,
    "",
    formatField("Name", payload.fullName),
    formatField("Phone", payload.phone),
    formatField("Email", payload.email),
    formatField("Preferred Day/Time", payload.preferredDay),
    formatField("Visit Reason", payload.visitReason ?? payload.message),
    formatField("Consent", payload.consent),
    formatField("Submitted At", payload.createdAt),
    formatField("Record ID", payload.id),
  ].join("\n");

  return sendResendEmail({
    from: fromAddress,
    to: toRecipients,
    cc: ccRecipients.length ? ccRecipients : undefined,
    reply_to: typeof payload.email === "string" ? payload.email : undefined,
    subject: `${siteConfig.name}: New ${source} request`,
    text,
  });
}

async function sendPatientConfirmation(payload: Record<string, unknown>) {
  const patientEmail =
    typeof payload.email === "string" ? payload.email.trim() : "";

  if (!patientEmail || !isValidEmail(patientEmail)) {
    return {
      status: "skipped",
      reason: "No valid patient email provided",
    } satisfies NotificationResult;
  }

  const source =
    typeof payload.source === "string" && payload.source.trim()
      ? payload.source
      : "appointment request";
  const patientName =
    typeof payload.fullName === "string" && payload.fullName.trim()
      ? payload.fullName.trim()
      : "Patient";
  const preferredDay =
    typeof payload.preferredDay === "string" ? payload.preferredDay.trim() : "";

  const fromAddress = process.env.PATIENT_CONFIRMATION_FROM || process.env.RESEND_FROM;
  const replyTo = process.env.PATIENT_CONFIRMATION_REPLY_TO || siteConfig.email;
  const officePhone = siteConfig.phone;

  const text = [
    `Hello ${patientName},`,
    "",
    `Thank you for contacting ${siteConfig.name}. We received your ${source}.`,
    "This is an automatic confirmation that your request was submitted successfully.",
    "",
    preferredDay ? `Requested day/time: ${preferredDay}` : "",
    "A member of our office team will review your request and contact you by phone or email to confirm availability.",
    "",
    `Phone: ${officePhone}`,
    `Office email: ${siteConfig.email}`,
    "",
    "Please do not reply with sensitive medical information.",
    "",
    `Request ID: ${typeof payload.id === "string" ? payload.id : "-"}`,
    "",
    `- ${siteConfig.name}`,
  ]
    .filter(Boolean)
    .join("\n");

  return sendResendEmail({
    from: fromAddress,
    to: [patientEmail],
    reply_to: replyTo,
    subject: `${siteConfig.name}: We received your request`,
    text,
  });
}

export async function POST(request: Request) {
  const payload = await request.json();
  const { fullName, email, phone, consent } = payload ?? {};

  if (!fullName || !email || !phone || !consent) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }

  if (!isValidEmail(String(email)) || !isValidPhone(String(phone))) {
    return NextResponse.json(
      { error: "Please provide a valid email and phone number." },
      { status: 400 }
    );
  }

  const record = {
    id: `lead_${crypto.randomUUID()}`,
    createdAt: new Date().toISOString(),
    ...payload,
  };

  let mode: "dev-file" | "log-only" = "log-only";

  if (process.env.NODE_ENV !== "production") {
    await persistRecord("lead", record);
    mode = "dev-file";
  } else {
    console.info("Lead capture (prod)", record);
  }

  const notification = await sendLeadNotification(record);
  if (notification.status === "error") {
    console.error("Lead email notification failed", notification.reason);
  }

  const patientConfirmation = await sendPatientConfirmation(record);
  if (patientConfirmation.status === "error") {
    console.error(
      "Patient confirmation email failed",
      patientConfirmation.reason
    );
  }

  return NextResponse.json({
    ok: true,
    id: record.id,
    mode,
    notification,
    patientConfirmation,
  });
}
