# GitHub Notes

## Suggested repo description

Luxury, 2027-themed dental practice website with Next.js, Tailwind, and Framer Motion.

## Branching

- `main`: production-ready
- `dev`: ongoing updates

## Recommended protections

- Require PR review for `main`
- Enable status checks (lint/build)

## Release checklist

- Update `src/lib/site.ts` with final phone/address
- Replace placeholder reviews with live data
- Connect CRM or database in `src/app/api/*/route.ts`
- Deploy on Vercel and add domain when ready
