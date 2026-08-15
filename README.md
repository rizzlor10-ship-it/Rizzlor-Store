# RIZZLOR Customer Store V2 — Google Indexable

This is the customer-facing storefront intended to work with RIZZLOR Admin V1.

## Features
- SEO metadata and canonical URLs
- Dynamic product pages
- Product structured data (Schema.org Product)
- Organization structured data
- Dynamic `/sitemap.xml`
- Dynamic `/robots.txt`
- Google-friendly server-rendered product pages
- Direct Supabase product image display
- Customer order form
- 50% advance requirement
- WhatsApp handoff after order submission
- Bangladesh + abroad-ready country field
- Responsive/mobile layout

## Connect to Admin V1
Use the same Supabase project and the same `.env.local` values.

## Setup
1. Put the project on your server/hosting.
2. Copy `.env.example` to `.env.local`.
3. Set `NEXT_PUBLIC_SITE_URL` to your real HTTPS domain, e.g. `https://rizzlor.com`.
4. Set the same Supabase URL/key used by Admin V1.
5. Run `npm install`.
6. Run `npm run build`.
7. Run `npm start`.

## Database
Run `supabase/storefront.sql` in the same Supabase project.

## Google
After deployment:
1. Open Google Search Console.
2. Add your domain property.
3. Verify DNS.
4. Submit `https://YOUR-DOMAIN/sitemap.xml`.
5. Use URL Inspection for the homepage and important product pages and request indexing.
6. Make sure the site is public over HTTPS and does not have `noindex`.

Google indexing is not guaranteed instantly; Google decides when/how pages are crawled and ranked.

## Important production security
The customer order insert policy is deliberately minimal for this V2. Before launch, add server-side validation, anti-spam/CAPTCHA, rate limiting and payment verification. Never expose Supabase service-role keys in the browser.
