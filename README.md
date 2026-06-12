# Okka Elektro

Website for **Okka Elektro** — electronics repair and sales. Customers can learn about available services, browse products for sale, and get in touch for repairs and inquiries.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Language | [TypeScript 5](https://www.typescriptlang.org/) |
| UI | [React 19](https://react.dev/) |
| Styling | CSS Modules + global CSS custom properties |
| Fonts | `next/font/google` — Inter, JetBrains Mono |
| Linting | ESLint 9 + eslint-config-next |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

```bash
# Type-check and lint
npm run lint

# Production build
npm run build

# Start production server (after build)
npm start
```

---

## Project Structure

```
src/
  app/                  # App Router — layouts, pages, route groups
    (pages)/            # Route group for all site pages
    layout.tsx          # Root layout — fonts, global styles
    page.tsx            # Home page /
  styles/
    globals.css         # CSS reset, base element styles
  components/           # Shared UI components
  lib/                  # Utilities and helpers
```

---

## Styling

The project uses a custom CSS design system defined in `src/styles/globals.css` as CSS custom properties. Component-level styles use CSS Modules (`.module.css`). Dark mode is handled via `prefers-color-scheme` media query on the `:root` token overrides.

---

## Requirements

- Node.js 18.18 or later
- npm 9 or later
