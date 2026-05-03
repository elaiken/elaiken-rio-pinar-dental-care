# Vercel Deployment

## Deploy steps

1. Push the repo to GitHub.
2. In Vercel, import the repo.
3. Use default build settings:
   - Build: `next build`
   - Output: `.next`
4. Add any environment variables you need (see below).
5. Deploy.

## Environment variables

Set these for the appointment request form and other lead notifications to send by email in production:

- `RESEND_API_KEY`
- `RESEND_FROM`
- `LEAD_NOTIFICATION_TO`
- `LEAD_NOTIFICATION_CC` (optional)
- `PATIENT_CONFIRMATION_FROM` (optional)
- `PATIENT_CONFIRMATION_REPLY_TO` (optional)

Example:

```env
RESEND_API_KEY=re_your_resend_api_key
RESEND_FROM="Rio Pinar Dental Care <appointments@yourdomain.com>"
LEAD_NOTIFICATION_TO=RioPinarDentalCare@gmail.com
LEAD_NOTIFICATION_CC=
PATIENT_CONFIRMATION_FROM="Rio Pinar Dental Care <appointments@yourdomain.com>"
PATIENT_CONFIRMATION_REPLY_TO=RioPinarDentalCare@gmail.com
```

`LEAD_NOTIFICATION_TO` is the main recipient list for website submissions, including the "Request an Appointment" form.

`RESEND_FROM` must be a sender address/domain verified inside Resend for production delivery.

These can also be added later if you connect external services:

- `CRM_WEBHOOK_URL`
- `OPENAI_API_KEY`
- `GOOGLE_MAPS_API_KEY`

## Domains

You can host on Vercel with a temporary URL until you purchase a custom domain. Once ready, add the domain in Vercel → Settings → Domains.
