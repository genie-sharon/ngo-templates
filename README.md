# Kindonar — NGO Website Template System

A production-ready, multi-template website builder for nonprofits, charities, and social impact organizations. Built with Next.js 16, TypeScript, Framer Motion, and Tailwind CSS.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the template marketplace.

## Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── templates/                # Template marketplace + gallery
│   │   ├── page.tsx              # Marketplace landing page
│   │   ├── template-gallery-client.tsx  # Gallery UI (search, filters, grid)
│   │   └── [slug]/               # Dynamic template pages
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Demo landing page
├── components/
│   ├── blocks/                   # Reusable content blocks
│   ├── pages/                    # Page-level components
│   ├── providers/                # React context providers
│   ├── sections/                 # Full page sections
│   │   ├── hero/                 # Hero section (8 layouts)
│   │   ├── about/                # About section (5 variants)
│   │   ├── impact/               # Impact/statistics section
│   │   ├── programs/             # Programs section (6 layouts)
│   │   ├── testimonials/         # Testimonials section (6 layouts)
│   │   ├── gallery/              # Gallery section (6 layouts)
│   │   ├── news/                 # News section (6 layouts)
│   │   ├── cta/                  # CTA section (8 layouts)
│   │   ├── navigation/           # Navigation component
│   │   ├── footer/               # Footer component
│   │   └── extra/                # Specialized sections
│   ├── templates/
│   │   ├── page-renderer.tsx     # Renders sections from data
│   │   └── template-card.tsx     # Marketplace card component
│   └── ui/                       # Atomic design system
├── data/
│   └── templates/                # 10 template definitions
│       ├── types.ts              # Template type definitions
│       ├── registry.ts           # Template registry
│       ├── universal.ts          # Universal template
│       ├── healthcare.ts         # Healthcare template
│       ├── education.ts          # Education template
│       ├── animal-welfare.ts     # Animal Welfare template
│       ├── environment.ts        # Environment template
│       ├── disaster-relief.ts    # Disaster Relief template
│       ├── faith-based.ts        # Faith-Based template
│       ├── community.ts          # Community template
│       ├── arts.ts               # Arts & Culture template
│       └── humanitarian.ts       # Humanitarian template
├── hooks/                        # Custom React hooks
├── animations/                   # Framer Motion animation presets
├── themes/                       # Theme color definitions
├── types/                        # TypeScript type definitions
└── lib/                          # Utilities and helpers
```

## Architecture

Each template is a data-driven configuration:

```
TemplateData
├── navigation   → Navigation component
├── footer       → Footer component
└── pages        → PageRenderer
    └── sections[] → Section components
```

The `PageRenderer` maps section types to React components and passes their config as props. No template-specific components exist — every template is pure data.

### Section System

| Section | Layouts Available |
|---------|------------------|
| Hero | `image`, `video`, `carousel`, `split`, `center`, `left`, `right`, `illustration` |
| About | `story`, `split`, `timeline`, `gallery`, `video` |
| Impact | `cards`, `counters`, `progress`, `timeline`, `grid` |
| Programs | `cards`, `carousel`, `bento`, `tabs`, `filters`, `list` |
| Testimonials | `carousel`, `cards`, `grid`, `video`, `large-quote`, `stacked` |
| Gallery | `grid`, `masonry`, `carousel`, `lightbox`, `pinterest`, `featured` |
| News | `cards`, `featured`, `magazine`, `grid`, `timeline`, `carousel` |
| CTA | `donate`, `volunteer`, `join`, `sponsor`, `contact`, `dual`, `centered`, `banner` |

### Each section supports:
- **Theme**: light, dark, primary, secondary, gradient, muted, transparent
- **Background**: none, solid, gradient, image, pattern
- **Animation**: fade, fade-in-up, scale, stagger, parallax, hero, and 25+ more
- **Padding**: none, small, medium, large, xlarge

## Template Marketplace

The marketplace (`/templates`) features:
- Animated hero section with search
- Category filter pills
- Sort dropdown
- Responsive card grid
- Preview mockups on template cards
- Featured template showcase

## Themes

10 theme color palettes are available:
- `default`, `warm`, `nature`, `ocean`, `healthcare`
- `education`, `faith`, `disaster-relief`, `animal-welfare`
- `community`, `arts`, `humanitarian`, `high-contrast`

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run typecheck` | TypeScript type checking |
| `npm run lint` | ESLint validation |
| `npm run format` | Prettier formatting |

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

Or connect your GitHub repository to [Vercel](https://vercel.com) for automatic deployments.

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | No | Custom site URL (defaults to Vercel URL) |

No API keys, databases, or external services are required. The project is fully static.

## Accessibility

- ARIA labels on interactive elements
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- Respects `prefers-reduced-motion`

## Performance

- 100% static generation
- Optimized image loading with lazy loading
- Framer Motion animations with reduced-motion support
- Tree-shakeable component imports
- TypeScript strict mode

## License

MIT — Free for personal and commercial use.
