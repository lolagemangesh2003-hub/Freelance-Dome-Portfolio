# Mangesh Lolage — Dual Portfolio

A React/Vite implementation of the supplied Fresher/Freelancer portfolio concept.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Build for production

```bash
npm run build
npm run preview
```

## Before publishing

Update these values in `src/main.jsx`:

- `PROFILE.email`
- `PROFILE.linkedin`
- `PROFILE.github`
- `PROFILE.whatsapp`
- `PROFILE.resume`
- Project GitHub/live-demo links
- Internship/experience copy
- Real project screenshots
- Any certification or achievement information

The current `public/profile.jpg` is a starter crop from the supplied design reference. Replace it with your preferred original profile photo for the best quality.

The enquiry form currently shows a confirmation alert. Connect it to Formspree, EmailJS, your own Node/Express endpoint, or another form backend before using it in production.

The Fresher/Freelancer selection is persisted with `localStorage`, so visitors return to the last selected portfolio mode.
