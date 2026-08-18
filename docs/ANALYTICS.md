# Analytics handoff

## Current website integration

- Google Tag Manager container: `GTM-WNQ7KPKH`
- Site-wide installation: `src/app/layout.tsx`
- The script loads in the document head and the fallback iframe is placed at the
  start of the shared root-layout body.
- The shared root layout covers all current and future Next.js routes.

The website only installs the GTM container. Tags, triggers, GA4 properties,
Google Ads connections, consent settings, and publishing are managed in Google
Tag Manager by an authorized account owner.

## Verification after deployment

1. Open Google Tag Manager and select **Preview**.
2. Connect Tag Assistant to `https://riopinardentalcare.com`.
3. Confirm container `GTM-WNQ7KPKH` is detected on multiple routes.
4. Test a client-side navigation and confirm page-view tracking behaves as
   configured in GA4.
5. Publish the GTM container only after its tags and consent behavior pass the
   preview checks.

## Healthcare privacy guardrails

- Never send names, email addresses, phone numbers, birth dates, appointment
  details, visit reasons, messages, insurance details, or other patient data to
  GTM, Google Analytics, advertising tags, or the browser data layer.
- Do not use DOM scraping, form-variable capture, or keystroke/input listeners.
- If conversions are added, use anonymous success events such as
  `appointment_form_success`; do not attach submitted values.
- Review whether analytics tags should be prevented from firing on appointment,
  intake, and secure-message pages.
- Replace the placeholder privacy policy and complete the practice's legal and
  consent review before relying on analytics in production.

## Planned owner dashboard

The next phase is a simple dashboard for Dr. Erick that can show:

- GA4 visitors, traffic sources, landing pages, and anonymous conversions
- Search Console clicks, impressions, and search queries
- Google Ads spend and conversions, if advertising is connected
- GTM/GA4 property IDs, connection status, and verification notes
- Exportable date-range reports for approved vendors

Use delegated Google access or OAuth connections for the dashboard. Do not store
Google passwords, patient records, form submissions, API secrets, or private
credentials in the dashboard or this repository.

Information to collect before dashboard development:

- GTM account/container owner and approved users
- GA4 property ID and web data-stream measurement ID
- Search Console property and verified owner
- Google Ads customer ID, if applicable
- Which anonymous business conversions Dr. Erick wants to review
