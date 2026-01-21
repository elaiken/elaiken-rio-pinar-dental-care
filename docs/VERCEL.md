# Vercel Deployment

## Deploy steps

1. Push the repo to GitHub.
2. In Vercel, import the repo.
3. Use default build settings:
   - Build: `next build`
   - Output: `.next`
4. Add any environment variables you need (see below).
5. Deploy.

## Environment variables (optional)

Add these if you connect a real CRM or AI provider later:

- `CRM_WEBHOOK_URL`
- `OPENAI_API_KEY`
- `GOOGLE_MAPS_API_KEY`

## Domains

You can host on Vercel with a temporary URL until you purchase a custom domain. Once ready, add the domain in Vercel → Settings → Domains.
