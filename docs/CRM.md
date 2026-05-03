# CRM + Lead Capture Stub

This project ships with a lightweight lead capture stub that stores submissions locally in development and logs them in production. It is designed to be swapped with a real CRM (HubSpot, Salesforce, Airtable, etc.) or a database.

## API routes

- `POST /api/leads`
- `POST /api/intake`
- `POST /api/secure-message`

Each route validates the request payload and returns:

```json
{ "ok": true, "id": "lead_xxx", "mode": "dev-file" }
```

## Local storage (development)

When `NODE_ENV !== "production"`, submissions are stored in:

```
data/lead.json
data/intake.json
data/secure-message.json
```

These files are ignored by git. They help you review submissions while building.

## Production behavior

In production, the API routes still log submissions for visibility:

```ts
console.info("Lead capture (prod)", record)
```

The lead route also attempts to send email notifications when these environment variables are configured:

- `RESEND_API_KEY`
- `RESEND_FROM`
- `LEAD_NOTIFICATION_TO`

`LEAD_NOTIFICATION_TO` controls who receives website submissions, including appointment requests. If it is not set, the route falls back to the office email in `siteConfig`.

Patient confirmation emails are also supported through:

- `PATIENT_CONFIRMATION_FROM` (optional)
- `PATIENT_CONFIRMATION_REPLY_TO` (optional)

The current default notification target is `RioPinarDentalCare@gmail.com`.

If you want structured storage instead of email-only delivery, replace the persistence call with a real CRM workflow or database write.

## Swap in a real CRM

Replace the persistence call inside each API route with:

- A CRM webhook (HubSpot forms, Zapier, Make)
- A database write (Postgres, Supabase, Firebase)
- An internal API (your own backend)

Search for `persistRecord` in `src/app/api/*/route.ts`.

## Security notes

- These forms should not be used for PHI until a HIPAA-compliant storage + messaging solution is integrated.
- Add reCAPTCHA or bot protection for production.
