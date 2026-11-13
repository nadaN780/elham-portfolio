# Elham | إلهام: Portfolio

Personal portfolio for Elham, built on one idea: إلهام means *inspiration*, and the site follows inspiration from **a first thought to a lasting impression**. See [`docs/PROJECT_PLAN.md`](docs/PROJECT_PLAN.md) for the concept, palette, typography, sitemap, content inventory and roadmap.

## Stack

- Next.js (App Router, static generation) with TypeScript and React
- Plain CSS design system built on custom properties (`src/styles/`). No UI or animation libraries.
- Fonts through `next/font`:
  - Latin: Bodoni Moda for display, Manrope for text
  - Arabic: Amiri for display, IBM Plex Sans Arabic for text

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck
```

Requires Node 20.9 or newer.

## Updating content

All copy and data live in `src/content/`. You never need to edit a component to change content.

| File | What it holds |
|---|---|
| `site.ts` | Name, title, intro, navigation, email, social profiles |
| `home.ts` | Section titles and labels, introduction, about, values |
| `expertise.ts` | Capability groups and skills |
| `projects.ts` | Projects and their full case studies |
| `journey.ts` | Experience, education, certifications, achievements, CV |
| `testimonials.ts` | Quotes. Add only verbatim quotes, with permission. |
| `beyond.ts` | Personal interests (the section can be turned off in `home.ts`) |

**Placeholders.** Any field written as `pending("Label", "hint")` appears on the site as a clearly marked *To be provided* placeholder. To fill it in, replace it with the real string. Rules that follow from this:

- A pending link never renders as a clickable link.
- Placeholder projects (`placeholder: true`) are marked `noindex` and left out of the sitemap.
- The "Preview" notice at the bottom of the page disappears by itself once no placeholders remain.

**Images.** Put files in `public/images/` and set `src`, `width` and `height` on the matching image object.

## Project structure

```
src/
  app/          routes, metadata, sitemap.ts, robots.ts, opengraph-image, icon.svg, 404/error/loading
  content/      all copy and data
  components/   ui/ · layout/ · sections/ · work/
  lib/          content helpers, site URL, project queries
  i18n/         locale config (English now; prepared for Arabic)
  styles/       tokens.css · base.css · components.css · sections.css
docs/           project plan
```

## Branches and deployment

| Branch | Purpose | Vercel |
|---|---|---|
| `main` | Production | Production deployment |
| `develop` | Ongoing work | Preview deployment for each push |

Workflow: commit to `develop`, review the preview URL, then merge into `main` to release.

**Environment variables.** Optional: `NEXT_PUBLIC_SITE_URL`. See `.env.example`. Without it, the site uses Vercel's production domain. Preview deployments are kept out of search engines automatically. No secrets are needed, and none should ever be committed.

## Localization

The site ships in English. The Arabic fonts and the locale and direction config are already in place. To add Arabic, follow the steps in `src/i18n/config.ts`.
