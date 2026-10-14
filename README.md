# ELITE DRIVE — Luxury Car Rental (Demo Website)

A premium demonstration website for an original luxury car rental brand. All bookings, prices, testimonials and contact details are demo content.

## Edit content
All cars, prices, FAQs, testimonials, locations, contact and social links live in **`src/data/site.ts`**.

## Run on Windows
1. Install Node.js LTS from https://nodejs.org
2. Double-click **`start.bat`** (installs dependencies the first time, then starts the site)
3. Open http://localhost:8080

Or manually: `npm install` then `npm run dev`.

## Build
Double-click **`build.bat`** or run `npm run build`. Output goes to the `dist` folder.

## Deploying (e.g. Hostinger)
This project is built with TanStack Start, which renders pages on a server. The simplest option is publishing directly from Lovable.
For Hostinger, use a plan that supports Node.js apps, upload the project, run `npm install && npm run build`, and start it per Hostinger's Node.js instructions. Plain static `public_html` hosting is not supported without converting the build to a static export.

This is a website, not a standalone executable.
