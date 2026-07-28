# Sufyan Mughal — Portfolio & Agency Website

A premium, fully responsive personal portfolio & software agency website built with React, Vite, Tailwind CSS, and Framer Motion.

## Tech Stack
- React.js + Vite
- Tailwind CSS
- Framer Motion (animations)
- React Router (routing)
- Lucide React + React Icons (icons)
- React Helmet Async (SEO meta tags)
- EmailJS (`@emailjs/browser`) for the contact form and quote modal — no backend required

## Getting Started

```bash
npm install
cp .env.example .env   # then fill in your EmailJS credentials
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

The production build is output to `dist/`, ready to deploy to Vercel, Netlify, or any static host.

## EmailJS Setup (required for forms to work)

1. Create a free account at https://www.emailjs.com/
2. Add an Email Service (e.g. Gmail) and note the **Service ID**.
3. Create an email template for the contact form and note the **Template ID**.
   - Template variables used by the contact form: `from_name`, `reply_to`, `phone`, `message`
4. (Optional) Create a second template for the "Get Free Quote" modal and note its **Template ID**.
   - Template variables used by the quote modal: `full_name`, `company_name`, `email`, `phone`, `service_required`, `budget`, `deadline`, `description`
   - If you skip this, the quote modal will reuse your main contact template.
5. Find your **Public Key** under Account → API Keys.
6. Fill in `.env`:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_QUOTE_TEMPLATE_ID=your_quote_template_id
```

Never commit your real `.env` file — it's already listed in `.gitignore`.

## Project Structure

```
src/
  components/   Reusable UI: Navbar, Footer, WhatsAppButton, QuoteModal, etc.
  context/      Theme (dark/light) and Toast notification providers
  lib/          EmailJS service wrapper
  pages/        One file per route (Home, About, Services, Portfolio, ...)
public/         favicon, robots.txt, sitemap.xml
```

## Customizing

- **Brand colors / fonts**: `tailwind.config.js`
- **WhatsApp number & pre-filled message**: `src/components/WhatsAppButton.jsx`
- **Contact info, socials**: `src/components/Footer.jsx`, `src/pages/Contact.jsx`
- **Pricing packages**: `src/pages/Pricing.jsx`
- **Portfolio projects**: `src/pages/Portfolio.jsx` (replace placeholder projects with real ones, including live links)
- **SEO defaults**: `index.html` and the `<Seo />` component used per-page

## Notes

- Portfolio project images/links are placeholders — swap in real screenshots and live/GitHub URLs once available.
- The Contact page's map is a placeholder; embed a real Google Maps iframe when you have an address to show.
