# BK Débouchage — Frontend

Production-grade plumbing / drain cleaning service website (frontend only).

## Stack

- React 19 + Vite 8
- Tailwind CSS 4
- React Router 7
- Framer Motion
- Lucide React

## Commands

```bash
npm install
npm run dev
npm run build
npm run lint
```

See **[FOUNDATION.md](./FOUNDATION.md)** for the full setup guide (design tokens, routing, aliases, scaling).

## Architecture

```
src/
├── assets/
├── components/
│   ├── ui/           # Container, Card, Section, AnimatedSection
│   ├── buttons/      # Button (primary, emergency, outline…)
│   ├── cards/        # ServiceCard, CityCard, StatCard, FAQ…
│   ├── forms/        # ContactForm
│   ├── navigation/   # Logo, NavLinks, Breadcrumb, ScrollToHash
│   └── shared/       # SEO, PageHero, SectionHeading, LocalBusinessSchema
├── constants/        # routes, animations
├── data/             # site, services, cities, faq, statistics…
├── hooks/
├── layouts/
├── pages/
├── routes/
├── sections/         # Page sections (Hero, Statistics, Footer…)
├── styles/           # globals.css (Tailwind theme)
└── utils/            # seo, schema, phone, scroll
```

## Routes

| Path | Page |
|------|------|
| `/` | Home (all core sections) |
| `/services` | Services grid |
| `/services/:slug` | Service detail |
| `/villes/:slug` | City landing (olne, aiseau-presles, plombieres, hamoir) |
| `/contact` | Contact |
| `*` | 404 |

## SEO

- Dynamic meta titles & descriptions
- Open Graph tags
- Canonical URLs
- JSON-LD `LocalBusiness` / `Plumber` schema
- Semantic HTML & heading hierarchy

## Customization

Edit `src/data/site.js` for phone, email, and business info.
