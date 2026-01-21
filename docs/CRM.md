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

In production, the API routes currently log submissions:

```
console.info("Lead capture (prod)", record)
```

Replace this with a real CRM workflow or database write.

## Swap in a real CRM

Replace the persistence call inside each API route with:

- A CRM webhook (HubSpot forms, Zapier, Make)
- A database write (Postgres, Supabase, Firebase)
- An internal API (your own backend)

Search for `persistRecord` in `src/app/api/*/route.ts`.

## Security notes

- These forms should not be used for PHI until a HIPAA-compliant storage + messaging solution is integrated.
- Add reCAPTCHA or bot protection for production.
