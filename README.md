# Badlands TMS

Marketing landing page for [Badlands TMS](https://www.badlandstms.com/), a TMS therapy clinic in Bend, Oregon. Built with Next.js to support consultation inquiries, clinic information, and brand-aligned presentation.

## Features

- Responsive landing page with sticky navigation and mobile call-to-action
- Clinic overview: care approach, provider profile, TMS education, benefits, and FAQ
- Insurance carrier logos and financing information
- Consultation inquiry form
- Brand styling with sage / charcoal palette and custom typography

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) (icons)

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Installation

```bash
git clone https://github.com/farahzahirdev/badlands-tms.git
cd badlands-tms
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production

```bash
npm run build
npm start
```

## Scripts

| Command         | Description              |
|-----------------|--------------------------|
| `npm run dev`   | Start development server |
| `npm run build` | Create production build  |
| `npm start`     | Serve production build   |
| `npm run lint`  | Run ESLint               |

## Project Structure

```
badlands-tms/
├── public/images/       # Brand assets, photography, insurance logos
├── src/
│   ├── app/             # App Router layout and entry page
│   ├── components/      # UI sections and shared components
│   └── content/         # Site copy and clinic contact details
├── package.json
└── tailwind.config.ts
```

## Content & Configuration

Clinic details (phone, address, hours, links) live in `src/content/site.ts`.  
Page copy lives in `src/content/copy.ts`.

Update these files to change messaging or contact information without editing component markup.

## Brand

| Token    | Hex       | Usage                    |
|----------|-----------|--------------------------|
| Sage     | `#6F978E` | Accents, CTAs, highlights |
| Charcoal | `#272A2B` | Headings and body text   |
| Mist     | `#F5F8F7` | Section backgrounds      |

Typography: **brandon-grotesque** (headings), **Roboto Slab** (subheadings), **freight-sans-pro** (body) — matching [badlandstms.com](https://www.badlandstms.com/).

## License

Private project. All rights reserved.
