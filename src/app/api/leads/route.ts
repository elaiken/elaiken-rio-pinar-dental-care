import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { persistRecord } from "@/lib/lead-store";
import { siteConfig } from "@/lib/site";
import { isValidEmail, isValidPhone } from "@/lib/validation";

type NotificationResult =
  | { status: "sent"; id?: string }
  | { status: "skipped"; reason: string }
  | { status: "error"; reason: string };

function formatField(label: string, value: unknown) {
  const parsed = typeof value === "string" ? value.trim() : "";
  return `${label}: ${parsed || "-"}`;
}

async function sendLeadNotification(payload: Record<string, unknown>) {
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailAppPassword) {
    return {
      status: "skipped",
      reason: "GMAIL_USER or GMAIL_APP_PASSWORD not configured",
    } satisfies NotificationResult;
  }

  const toAddress = process.env.LEAD_NOTIFICATION_TO || siteConfig.email;
  const fromAddress = process.env.LEAD_NOTIFICATION_FROM || gmailUser;
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

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: fromAddress,
      to: toAddress,
      replyTo: typeof payload.email === "string" ? payload.email : undefined,
      subject: `${siteConfig.name}: New ${source} request`,
      text,
    });

    return { status: "sent", id: info.messageId } satisfies NotificationResult;
  } catch (error) {
    return {
      status: "error",
      reason: error instanceof Error ? error.message : "Unknown Gmail SMTP error",
    } satisfies NotificationResult;
  }
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

  return NextResponse.json({ ok: true, id: record.id, mode, notification });
}
