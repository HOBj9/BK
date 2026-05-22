# Project Foundation

Production-grade React + Vite scaffold for BK Débouchage.

## Tech stack

| Tool | Purpose |
|------|---------|
| React 19 | UI |
| Vite 8 | Build tool |
| Tailwind CSS 4 | Styling (`@tailwindcss/vite`) |
| React Router 7 | Routing |
| Framer Motion | Animations |
| Lucide React | Icons |

## Folder structure

```
src/
├── assets/              Static assets
├── components/
│   ├── ui/              Container, Card, Section, AnimatedSection
│   ├── buttons/         Button (+ variants from constants)
│   ├── cards/           Domain cards
│   ├── forms/           ContactForm
│   ├── navigation/      Logo, NavLinks, Breadcrumb, ScrollToHash
│   └── shared/          SEO, PageHero, SectionHeading, Schema
├── constants/           routes, theme, animations, buttons
├── data/                Business content (JSON-like modules)
├── hooks/               useScrollTo, useMediaQuery
├── layouts/             AppLayout (root shell)
├── pages/               Route-level views
│   └── placeholders/    PagePlaceholder for WIP routes
├── routes/              AppRoutes + config.js registry
├── sections/            Homepage / marketing sections
├── styles/
│   ├── globals.css      Entry (imports all style layers)
│   ├── tokens.css       Colors, type, spacing @theme
│   ├── typography.css   .heading-*, .body-*, .eyebrow
│   └── utilities.css    .container-app, .section-spacing, grids
└── utils/               seo, schema, phone, scroll
```

## Path aliases

Import with `@/` (configured in `vite.config.js` + `jsconfig.json`):

```js
import { Button } from '@/components/buttons';
import { ROUTES } from '@/constants/routes';
import { AppLayout } from '@/layouts';
```

## Design system

### Colors (`styles/tokens.css`)

- **Brand** — deep blue (`brand-50` → `brand-950`)
- **Accent** — orange CTAs
- **Emergency** — red urgent actions
- **Surface** — page backgrounds

### Typography (`styles/typography.css`)

- `.heading-display`, `.heading-1` … `.heading-4`
- `.body-lg`, `.body-base`, `.body-sm`
- `.eyebrow`, `.eyebrow-light`

### Spacing

- `.section-spacing` / `.section-spacing-sm`
- `.container-app`, `.container-narrow`, `.container-wide`

### Buttons (`constants/buttons.js`)

Variants: `primary` | `emergency` | `secondary` | `outline` | `ghost`

## Routing

| Path | Page |
|------|------|
| `/` | HomePage |
| `/services` | ServicesPage |
| `/services/:slug` | ServiceDetailPage |
| `/villes/:slug` | CityPage |
| `/contact` | ContactPage |
| `*` | NotFoundPage |

Registry: `src/routes/config.js`

## AppLayout

All routes render inside `AppLayout`:

- Header + Footer
- Sticky mobile call CTA
- JSON-LD LocalBusiness schema
- Hash scroll helper

## Adding a new page

1. Create `src/pages/MyPage.jsx`
2. Register in `src/routes/config.js`
3. Add `<Route path="..." element={<MyPage />} />` in `src/routes/index.jsx`
4. Or use `PagePlaceholder` until ready:

```jsx
import PagePlaceholder from '@/pages/placeholders/PagePlaceholder';
```

## Commands

```bash
npm run dev
npm run build
npm run lint
```
