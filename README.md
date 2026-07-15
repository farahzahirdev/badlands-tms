# Badlands TMS — Landing Page

Inquiry landing page for [Badlands TMS](https://www.badlandstms.com/) in Bend, OR. Built with Next.js 14, TypeScript, and Tailwind CSS using the client's sage / charcoal brand palette.

## Quick Start

```bash
cd ~/Projects/badlands-tms
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Logo Placement

Place the client logo at:

```
public/images/logo.png
```

The header, footer, and favicon all reference this file. Transparent PNG recommended (current file is the attached BadlandsHorizontal asset).

## Brand

| Token | Hex | Use |
|-------|-----|-----|
| Sage | `#88B2A9` | Accent, CTAs, icon |
| Charcoal | `#272A2B` | Headings, body text |
| White / Mist | `#FFFFFF` / `#F5F8F7` | Backgrounds |

Typography: **Outfit** (headings) + **Source Sans 3** (body).

## Project Structure

| Path | Purpose |
|------|---------|
| `src/app/` | Next.js App Router layout & page |
| `src/components/` | Header, Hero, sections, form, footer |
| `src/content/copy.ts` | All page copy |
| `src/content/site.ts` | Phone, address, links |
| `public/images/` | Logo and photography (see below) |

## Images

Photos and insurance logos pulled from [badlandstms.com](https://www.badlandstms.com/) (not stock).

| File | Source / use |
|------|----------------|
| `logo.png` | Client logo |
| `hero.jpg` | Site landscape (`look-at-view.jpg`) — hero |
| `river.jpg` | Site river photo — approach section |
| `nature.jpg` / `clinic.jpg` | Site trail photo — TMS / supporting |
| `dr-brown.jpeg` | Dr. Chad Brown headshot from team page |
| `chewy.jpg` / `millie.jpg` | Therapy dogs from team page |
| `insurance/*.png` | Carrier logos from client site |

## CTAs

- **Primary (header / mobile float):** Call `(541) 323-8705`
- **Secondary (hero & contact):** Consultation inquiry form

The form currently opens a prefilled `mailto:` to `admin@badlandstms.com`. Swap `InquiryForm` for a GoHighLevel embed when the form ID is available.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm start` | Serve production build |

## Sections (CIP-style layout)

1. Sticky header — Call + Request Consultation  
2. Full-bleed hero (**no form**) — brand, headline, CTAs, trust chips  
3. Insurance logo strip (from client site)  
4. “If this sounds familiar” approach section  
5. Dr. Chad Brown, M.D. + stats  
6. Therapy dogs (Chewy & Millie)  
7. How it works (3 steps)  
8. What is TMS  
9. Benefits  
10. Conditions  
11. Insurance & financing  
12. FAQ  
13. Contact form (end of page) + footer  

Messaging and photos adapted from [badlandstms.com](https://www.badlandstms.com/). Layout inspired by [texascip.vercel.app](https://texascip.vercel.app/).
