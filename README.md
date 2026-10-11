# National Mission Commission of Nepal (NMCN) — Website

A fast, accessible, multilingual website for the **National Mission Commission of
Nepal**, built with [Astro](https://astro.build), edited with
[TinaCMS](https://tina.io), and deployed to **Cloudflare Workers** (Static Assets).

> _Training & equipping saints to reach out the unreached._

---

## ✨ Features

- **Astro (static output)** — pre-rendered HTML for fast loading and great SEO.
- **Astro Islands (Preact)** — only the interactive bits ship JavaScript:
  mobile navigation, animated stat counters and the contact form
  (`client:load` / `client:visible`).
- **Multilingual** — English (default) + Nepali via Astro i18n routing
  (`/en/…` and `/ne/…`) with a language switcher.
- **TinaCMS** — every page, plus News, Events and Site Settings, is editable
  through a Git-backed visual editor at `/admin`.
- **WCAG 2.1 AA** — skip links, semantic landmarks, focus-visible outlines,
  meaningful alt text, ARIA labels on icon buttons and AA colour contrast.
- **Cloudflare Workers** — deployed with Workers Static Assets via `wrangler`,
  with a GitHub Actions CI/CD pipeline.

## 🗂 Pages

`/` (Home) · `/who-we-are` · `/what-we-do` · `/news` · `/events` ·
`/get-involved` · `/donate` · `/contact` — each available in English and Nepali.

---

## 🚀 Getting started

```bash
npm install
npm run dev          # http://localhost:4321
```

### With the TinaCMS visual editor

```bash
npm run tina:dev     # runs TinaCMS + Astro together, editor at /admin
```

Create a `.env` from `.env.example` and add your TinaCMS Cloud credentials
(`TINA_CLIENT_ID`, `TINA_TOKEN`) for the hosted editor. Without them, TinaCMS
runs in local mode against the files in `src/content/`.

---

## 🏗 Build

```bash
npm run build        # static site → ./dist
npm run preview      # preview the production build locally
```

## ☁️ Deploy to Cloudflare Workers

1. Install and authenticate Wrangler: `npx wrangler login`.
2. Set your account ID in `wrangler.toml` (or the `CLOUDFLARE_ACCOUNT_ID` env var).
3. Deploy:

```bash
npm run cf:deploy    # builds then runs `wrangler deploy`
```

### CI/CD (GitHub Actions)

`.github/workflows/deploy.yml` builds and deploys on every push to `main`.
Add these repository secrets:

| Secret | Purpose |
| --- | --- |
| `CLOUDFLARE_API_TOKEN` | Wrangler deploy auth |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare account |
| `TINA_CLIENT_ID` | TinaCMS (optional at build) |
| `TINA_TOKEN` | TinaCMS (optional at build) |

---

## 🧱 Project structure

```
src/
  components/        Astro UI components
    islands/         Interactive Preact islands (client:*)
  content/
    news/            News posts (md)  — TinaCMS-managed
    events/          Events (md)      — TinaCMS-managed
    pages/           Page hero/body (md, per locale) — TinaCMS-managed
    settings/        Global site settings (json) — TinaCMS-managed
  data/site.ts       Structural data (nav, stats, programmes, placeholders)
  i18n/              en.json, ne.json + helpers
  layouts/           BaseLayout.astro
  pages/[lang]/      Localised routes (en, ne)
tina/config.ts       TinaCMS schema & collections
wrangler.toml        Cloudflare Workers config
```

## 🖼 Images

All images currently use `placehold.co` placeholders. Replace them by uploading
real images through TinaCMS (Media Manager) or by editing the relevant markdown /
`src/data/site.ts` entries.

## ♿ Accessibility & 🌐 i18n notes

- English is the default and fully translated. Nepali UI strings live in
  `src/i18n/ne.json`; page content lives in `src/content/**/ne`.
- Run an audit (e.g. Lighthouse / axe) after adding real content and images.

## 📄 Licence

Content © National Mission Commission of Nepal. Code available for the
organisation's use.
