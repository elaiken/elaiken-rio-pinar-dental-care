import { NextResponse } from "next/server";
import { persistRecord } from "@/lib/lead-store";
import { isValidEmail, isValidPhone } from "@/lib/validation";

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
    id: `secure_${crypto.randomUUID()}`,
    createdAt: new Date().toISOString(),
    ...payload,
  };

  let mode: "dev-file" | "log-only" = "log-only";

  if (process.env.NODE_ENV !== "production") {
    await persistRecord("secure-message", record);
    mode = "dev-file";
  } else {
    console.info("Secure message (prod)", record);
  }

  return NextResponse.json({ ok: true, id: record.id, mode });
}
