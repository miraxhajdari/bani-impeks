# BANI IMPEKS — Furniture Showroom Website

A responsive Albanian-language website for BANI IMPEKS, a furniture showroom in Haraçinë near Skopje. It introduces the showroom, presents four furniture collections, and makes it easy for visitors to contact the business.

**Live website:** https://baniimpeks.netlify.app/
**GitHub repository:** https://github.com/miraxhajdari/bani-impeks

## Features

- Responsive navigation and layouts for desktop and mobile
- Showroom introduction and gallery for the living room, bedroom, dining tables, and furniture sets
- Direct phone and WhatsApp contact links
- Google Maps location and social media links
- Accessible navigation labels, keyboard focus styles, and reduced-motion support
- Local showroom, logo, and furniture imagery

## Technology

- HTML5
- CSS3 with responsive media queries
- Vanilla JavaScript
- Node.js built-in HTTP server for local preview
- Netlify hosting

The deployed site is static. It does not include an online checkout, database, or contact-form backend.

## Run locally

Requires Node.js.

```bash
npm start
```

Then open <http://localhost:3000>.

## Project structure

```text
.
├── assets/       # Logo and showroom / furniture imagery
├── app.js        # Mobile navigation and small page interactions
├── index.html    # Page content and metadata
├── server.js     # Local static preview server
└── styles.css    # Layout, visual styles, and responsive behavior
```
