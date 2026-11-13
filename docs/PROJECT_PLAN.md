# Elham | إلهام — Project Plan

Phase 1 deliverables: concept, identity, architecture and roadmap. Keep this document current as decisions change.

---

## 1. Creative concept — "From a thought to an impression"

إلهام means *inspiration*. The site does not use the word as a slogan. It tells the story of how inspiration behaves, and uses that story to order the visitor's journey:

| Stage | What inspiration does | Where it lives on the site |
|---|---|---|
| **The thought** | It begins as a single idea | Hero, Introduction (who she is, how she thinks) |
| **The curiosity** | It grows through experience | About, Journey |
| **The form** | It takes shape as work | Expertise, Selected Work, Case Studies |
| **The impression** | It leaves something behind | Testimonials, Beyond Work, Contact |

**Signature device: the spark and the thread.** One small rose-colored point (the *spark*) appears at the top of the hero's arch. A hairline *thread* runs from it through every section marker, so the page reads as one continuous line, from first thought to last impression. It refers to the dot and stroke of Arabic script without imitating calligraphy.

**The name, told plainly.** The Introduction carries a short dictionary-style entry: *Elham · إلهام — Arabic, noun: inspiration.* It explains the meaning once, factually, and the rest of the site lets the structure carry it.

**Tone.** Editorial, calm and specific. Interface copy stays plain ("Selected work", "Get in touch"). Every statement about Elham comes from her, and none is written by us.

## 2. Color system

Warm, low-saturation neutrals carry the page. Burgundy-plum supplies the contrast, and pink is used as a tint, never as a fill. One cool accent, lapis, is kept for focus states and rare details, because it gives the warm palette some depth.

| Role | Token | HEX | Use |
|---|---|---|---|
| Background | `--c-ivory` | `#FBF7F2` | Page background |
| Surface | `--c-beige` | `#F2E9DF` | Alternating sections, cards |
| Surface accent | `--c-champagne` | `#E8D8C3` | Hairlines, frames, dividers |
| Soft accent | `--c-blush` (baby pink) | `#F5DFE0` | Image mats, selection, tints |
| Secondary (decorative) | `--c-rose` | `#C3949A` | Spark, ornaments, text on dark |
| Secondary (text-safe) | `--c-rose-ink` | `#8C4E57` | Eyebrows, small accents on light (≥4.9:1) |
| Neutral | `--c-taupe` | `#76655C` | Secondary text (5.2:1 on ivory) |
| Primary | `--c-burgundy` | `#5A1F33` | Headlines, primary buttons, links (11.7:1) |
| Dark surface | `--c-plum-night` | `#4A1A2B` | Contact and footer (ivory text 13.4:1) |
| Text | `--c-ink` | `#2B1E22` | Body text (15:1) |
| Royal accent | `--c-lapis` | `#34406B` | Focus rings, rare detail |
| Interaction | `--c-burgundy-deep` | `#451627` | Hover and pressed states |

Rules: no gradients beyond a faint paper texture, no metallic gold, and pink never covers a large area. All body text meets WCAG AA. Rose (`#C3949A`) is never used for text on light backgrounds.

## 3. Typography

| Role | Latin | Arabic (chosen separately) |
|---|---|---|
| Display / headlines | **Bodoni Moda**: high-contrast Didone with optical sizing. Its roots in fashion-editorial type give the "royal, editorial" feel without looking like a template. | **Amiri**: classical Naskh, dignified and highly legible at large sizes. Used for إلهام in the hero and for future Arabic headlines. |
| Body / navigation | **Manrope**: clean, open apertures, readable at small sizes; it balances the contrast of Bodoni. | **IBM Plex Sans Arabic**: modern, even texture, works well for interface text. |

- **Scale:** fluid, using clamp(). Display sizes range from 56 to 168 px, h2 from 36 to 64 px, body from 16 to 18 px with 1.65 leading.
- **Text style:** eyebrows in small caps with tracking, and italic Bodoni for quiet emphasis.
- **Arabic tuning:** Arabic text gets its own line-height (1.9), no letter-spacing, and `dir="rtl"` on the element.
- All fonts load through `next/font` (self-hosted, no layout shift).

## 4. Sitemap and section hierarchy

```
/                      Home (single narrative page)
  #top        01 Hero
  #introduction 02 Introduction · the thought
  #about      03 About Elham · the curiosity
  #expertise  04 Expertise & capabilities · the craft
  #work       05 Selected work · the form   → links to case studies
  #journey    06 Experience & journey · the path
  #testimonials 07 Testimonials · the impression
  #beyond     08 Beyond work (optional, toggleable)
  #contact    09 Contact · the next idea
  footer      10 Footer
/work                  All projects (index)
/work/[slug]           Case study template (one per project)
/sitemap.xml, /robots.txt, /opengraph-image, /icon.svg, 404, error, loading
```

**Changes to the proposed structure, and why:**
- **Case studies are separate pages, not a home-page section.** The home page shows a curated selection, and each card opens a full case study. This keeps the home page short and gives each project room.
- **Expertise comes before Work.** Visitors understand what she does before they see the proof.
- **Journey comes after Work.** Most visitors look for work early. The track record then confirms what they've seen.
- **Each section shows a plain title next to its story label** (for example "05 — Selected work · the form"). The label adds character, and the plain title tells visitors where they are.

## 5. Hero direction

The hero is laid out like an editorial magazine cover, set on ivory paper with a faint grain.

- **Left (7 columns):**
  - A small eyebrow reading "Portfolio".
  - **Elham** set very large in Bodoni Moda.
  - إلهام in Amiri, rose-ink, set beside it like a signature.
  - A rule, then the professional title placeholder and a short introduction placeholder.
  - Primary CTA "Explore the work" and secondary CTA "Get in touch".
- **Right (5 columns):** a tall arched frame with a fine double hairline. The arch refers to classical and Islamic architecture and suggests a royal portrait. It holds the portrait (or a marked placeholder) with an editorial caption: *Fig. 1, Portrait.*
- **The spark:** a rose point at the top of the arch. Its thread runs down out of the hero to begin the section line.
- **Motion:** on load, the arch draws itself (about 1.4 s) and the text fades up once. Both are disabled when the visitor prefers reduced motion. There is no other hero animation.

## 6. Component and technical architecture

**Stack:**
- Next.js (App Router), TypeScript and React.
- Plain CSS design system using CSS custom properties: tokens, base, components and sections.
- No UI or animation libraries; the only client code is the header menu, scroll-spy and reveal-on-scroll (IntersectionObserver).
- Static generation for every route.

```
src/
  app/            routes, metadata, sitemap, robots, OG image, icon, 404/error/loading
  content/        ALL copy & data (site, home, expertise, projects, journey, testimonials, beyond)
  lib/            content types + `pending()` placeholder helper, site URL, projects queries
  i18n/           locale config (en now; ar-ready: dir, fonts, message structure)
  components/
    ui/           Text, Pending, Button, SectionHeader, ArchFrame, Spark, Media, Reveal
    layout/       SiteHeader (mobile menu + active section), SiteFooter, SkipLink
    sections/     Hero, Introduction, About, Expertise, SelectedWork, Journey, Testimonials, BeyondWork, Contact
    work/         ProjectCard, CaseStudy (all case-study blocks)
  styles/         tokens.css, base.css, components.css, sections.css
```

**How content works:**
- Any field can be a real value or `pending("Professional title")`.
- Components render pending values as clearly marked placeholders, so nothing is invented and nothing is hidden.
- A pending link is never rendered as a link. There are no fake `mailto:` links and no dead social icons.
- Placeholder projects are marked `noindex` and left out of the sitemap.
- Adding real content means editing the files in `src/content/`, with no component changes.

**Localization:**
- Locale config, text direction and Arabic fonts are already wired in.
- If we add Arabic, content moves to `src/content/{en,ar}/` and routes move under `app/[locale]/`. That is a structural move, not a redesign.

## 7. Content and asset inventory (what we need from you)

**Identity**
- Professional title (exact wording)
- Preferred name spelling(s) and whether إلهام should appear in Arabic
- 1–2 sentence hero introduction
- Language plan: English only, or English + Arabic

**Story**
- Personal philosophy (2–4 sentences, ideally in her words)
- Background
- Professional journey summary
- 3–5 values
- What makes her approach distinctive

**Expertise**
- 3–6 capability groups, each with a name, a one-line description and up to 6 specific skills or tools

**Projects (3–6), for each:**
- Title, category, year, one-line summary
- Cover image (min. 2000 px wide, landscape 3:2 or portrait 4:5)
- Overview, context, challenge, objectives
- Her role, plus a clear split between her own contribution and the team's
- Collaborators (name and role, with their permission)
- Process, execution, deliverables
- Verified outcomes, with the source of each number
- Supporting images and video, external links

**Journey**
- Roles: title, organization, dates, 1–2 lines each
- Education
- Certifications
- Achievements (with dates and links where possible)

**Testimonials**
- Quote, the person's name, role and organization, permission to publish
- Optional photo

**Beyond work**
- 3–5 interests or inspirations, each with a short note and an optional photo

**Contact**
- Email
- LinkedIn and other professional profiles
- Location or timezone, if wanted
- Availability statement, if wanted
- Optional CV (PDF)

**Photography**
- 1 hero portrait (vertical, min. 1600×2400)
- 1–2 secondary portraits
- Personal or "beyond work" images

**Brand**
- Preferred domain, if any
- Anything she dislikes visually

## 8. Roadmap

| Phase | Scope | Status |
|---|---|---|
| 1 Discovery and planning | This document | Done |
| 2 Foundation | Repo, design system, content layer, all components, all routes, responsive layouts, SEO files | Done (in code) |
| 3 Visual development | Hero, storytelling thread, motion, consistency pass | Done (first pass); refine with real photography |
| 4 Deployment and QA | GitHub (`main` = production, `develop` = previews), Vercel, route, a11y and performance checks | Needs account steps (see README) |
| 5 Content integration | Replace `pending()` values section by section; add real projects and images; confirm language plan | Waiting on content |
