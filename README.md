<div align="center">

# 🌍 Kindonar

### A Premium AI-Ready NGO Website Template System

**Built for the Crowdera Hackathon 2026**

A production-ready collection of reusable, responsive, and accessible website templates
designed for Crowdera's no-code Website Builder Platform.

<br />

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion)

[![MIT License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![Responsive](https://img.shields.io/badge/Responsive-✅-blue?style=for-the-badge)]()
[![Accessibility](https://img.shields.io/badge/Accessibility-✅-purple?style=for-the-badge)]()
[![Production Ready](https://img.shields.io/badge/Production-Ready-✅-orange?style=for-the-badge)]()

</div>

---

## 🚀 Live Website

**Experience Kindonar in action → [ngo-templates-six.vercel.app](https://ngo-templates-six.vercel.app/)**

Explore 10 premium NGO templates with smooth animations, interactive world maps, and responsive layouts — all running live on Vercel.

---

## ✨ Features

| Category | What You Get |
|----------|-------------|
| 🎨 **10 Premium Templates** | Healthcare, Education, Environment, Animal Welfare, Disaster Relief, Humanitarian, Faith-Based, Community, Arts & Culture, and Universal |
| 📱 **Fully Responsive** | Pixel-perfect on mobile, tablet, and desktop |
| 🌍 **Interactive World Map** | Animated country presence visualization with real-time stats |
| 🎬 **Framer Motion Animations** | 25+ animation presets — fade, parallax, stagger, carousel, and more |
| ♿ **Accessibility First** | WCAG 2.2 AA compliant — ARIA labels, keyboard nav, screen reader support |
| 🔍 **SEO Optimized** | Semantic HTML, Open Graph tags, XML sitemaps, and structured data |
| 🧩 **40+ Reusable Sections** | Hero, About, Programs, Gallery, Testimonials, News, CTA, Footer, and 22+ specialized sections |
| 🎯 **6 Layouts Per Section** | Each section supports multiple layout variants — carousel, grid, cards, masonry, timeline, and more |
| 🌈 **Dynamic Theming** | 13 color palettes with CSS custom properties for instant brand customization |
| ⚡ **Production Ready** | TypeScript strict mode, ESLint, Prettier, Husky pre-commit hooks |
| 🤖 **AI-Ready Architecture** | 14 AI service modules for content generation, SEO optimization, and accessibility auditing |
| 🖼️ **Interactive Gallery** | Masonry, carousel, lightbox, and Pinterest-style layouts |
| 💬 **Testimonials** | Carousel, cards, grid, video, large-quote, and stacked layouts |
| 📰 **News & Blog** | Cards, featured, magazine, grid, timeline, and carousel layouts |
| 📊 **Impact Statistics** | Animated counters, progress bars, and data visualization |
| 💝 **Donation CTAs** | Donate, volunteer, join, sponsor, contact, and dual-action layouts |

---

## 📋 Template Showcase

All 10 templates are fully data-driven — no template-specific components exist. Each template is a pure JSON configuration rendered by a universal `PageRenderer`.

| Template | Description | Best For |
|----------|-------------|----------|
| 🌐 **Universal NGO** | General-purpose nonprofit template | Any social impact organization |
| 🏥 **Healthcare** | Medical and health-focused design | Hospitals, clinics, health NGOs |
| 📚 **Education** | Schools and learning initiatives | Schools, universities, literacy programs |
| 🌿 **Environment** | Climate and sustainability focus | Conservation, sustainability, green energy |
| 🐾 **Animal Welfare** | Rescue and conservation design | Shelters, wildlife, pet adoption |
| 🆘 **Disaster Relief** | Emergency response and urgency | Emergency aid, crisis response |
| 🕊️ **Humanitarian** | Global impact organizations | UN agencies, international aid |
| ⛪ **Faith-Based** | Religious and community design | Churches, mosques, faith organizations |
| 🏘️ **Community** | Local empowerment focus | Community development, social programs |
| 🎨 **Arts & Culture** | Museums and cultural design | Museums, galleries, cultural events |

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| [Next.js](https://nextjs.org) | 16 | React framework with App Router, SSG, and Turbopack |
| [React](https://react.dev) | 19 | UI library with Server Components and Actions |
| [TypeScript](https://www.typescriptlang.org) | 5 | Type-safe development with strict mode |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Utility-first CSS with custom design tokens |
| [Framer Motion](https://www.framer.com/motion) | 12 | Production-ready animations and gestures |
| [Lucide React](https://lucide.dev) | 1.24 | Beautiful, consistent icon library |
| [Embla Carousel](https://www.embla-carousel.com) | 8.6 | Touch-friendly, accessible carousels |
| [React Hook Form](https://react-hook-form.com) | 7.81 | Performant form management |
| [Zod](https://zod.dev) | 4.4 | Schema validation and type inference |
| [Radix UI](https://www.radix-ui.com) | — | Accessible, unstyled UI primitives |

---

## 📁 Project Structure

```
kindonar/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── (home)/                   # Landing page
│   │   ├── (about)/                  # About page
│   │   ├── (programs)/               # Programs page
│   │   ├── (impact)/                 # Impact page
│   │   ├── (campaigns)/              # Campaigns page
│   │   ├── (get-involved)/           # Volunteer, donate
│   │   ├── (media)/                  # News, blog, gallery
│   │   ├── (resources)/              # Resources page
│   │   ├── (legal)/                  # Privacy, terms
│   │   ├── (auth)/                   # Authentication
│   │   ├── templates/                # Template marketplace
│   │   │   ├── page.tsx              # Marketplace gallery
│   │   │   └── [slug]/               # Dynamic template pages
│   │   ├── builder/                  # No-code builder UI
│   │   └── api/                      # API routes
│   │
│   ├── components/
│   │   ├── sections/                 # 40+ reusable sections
│   │   │   ├── hero/                 # 8 hero layouts
│   │   │   ├── about/                # 5 about variants
│   │   │   ├── programs/             # 6 program layouts
│   │   │   ├── testimonials/         # 6 testimonial layouts
│   │   │   ├── gallery/              # 6 gallery layouts
│   │   │   ├── news/                 # 6 news layouts
│   │   │   ├── cta/                  # 8 CTA layouts
│   │   │   ├── impact/               # Statistics & counters
│   │   │   ├── navigation/           # Responsive navigation
│   │   │   ├── footer/               # 8 footer layouts
│   │   │   └── extra/                # 22 specialized sections
│   │   ├── blocks/                   # Reusable content blocks
│   │   ├── templates/                # Page renderer & cards
│   │   ├── pages/                    # Full page components
│   │   ├── ui/                       # Atomic design system
│   │   └── providers/                # React context providers
│   │
│   ├── data/templates/               # 10 template definitions
│   │   ├── registry.ts               # Template registry
│   │   ├── universal.ts              # Universal template
│   │   ├── healthcare.ts             # Healthcare template
│   │   ├── education.ts              # Education template
│   │   ├── environment.ts            # Environment template
│   │   ├── animal-welfare.ts         # Animal Welfare template
│   │   ├── disaster-relief.ts        # Disaster Relief template
│   │   ├── humanitarian.ts           # Humanitarian template
│   │   ├── faith-based.ts            # Faith-Based template
│   │   ├── community.ts              # Community template
│   │   └── arts.ts                   # Arts & Culture template
│   │
│   ├── animations/                   # Framer Motion presets
│   ├── hooks/                        # Custom React hooks
│   ├── themes/                       # Color palettes
│   ├── schemas/                      # Zod validation schemas
│   ├── context/                      # React contexts
│   └── lib/                          # Utilities & helpers
│
├── public/images/                    # Static assets
├── docs/                             # Documentation
└── scripts/                          # Build scripts
```

---

## 🧩 Section System

Every section is fully configurable through data. The `PageRenderer` maps section types to React components and passes their config as props.

### Supported Sections

| Section | Layouts | Highlights |
|---------|---------|------------|
| **Hero** | `image`, `video`, `carousel`, `split`, `center`, `left`, `right`, `illustration` | Background media, animated text, CTAs |
| **About** | `story`, `split`, `timeline`, `gallery`, `video` | Mission, team, values |
| **Programs** | `cards`, `carousel`, `bento`, `tabs`, `filters`, `list` | Program listings with filters |
| **Testimonials** | `carousel`, `cards`, `grid`, `video`, `large-quote`, `stacked` | Reviews, quotes, video testimonials |
| **Gallery** | `grid`, `masonry`, `carousel`, `lightbox`, `pinterest`, `featured` | Image galleries with lightbox |
| **News** | `cards`, `featured`, `magazine`, `grid`, `timeline`, `carousel` | Blog, articles, press releases |
| **CTA** | `donate`, `volunteer`, `join`, `sponsor`, `contact`, `dual`, `centered`, `banner` | Conversion-focused sections |
| **Impact** | `cards`, `counters`, `progress`, `timeline`, `grid` | Statistics and data visualization |
| **Footer** | `simple`, `corporate`, `large`, `newsletter`, `mega`, `contact`, `quick-links`, `social` | Site footer variants |

### Specialized Sections

| Section | Purpose |
|---------|---------|
| 🌍 Global Impact | Interactive world map with country data |
| 📊 Transparency Dashboard | Financial and operational transparency |
| 🏆 Awards & Certifications | Recognition and compliance badges |
| 📅 Events | Event calendar and listings |
| ❓ FAQ | Frequently asked questions |
| 📰 Newsletter | Email subscription forms |
| 🤝 CSR Partners | Corporate partner showcases |
| 📋 Annual Reports | Report downloads and summaries |
| 🎨 Artist Profiles | Creative professional showcases |
| 🗺️ Community Map | Geographic community visualization |
| 📣 Campaign Progress | Fundraising progress tracking |
| 🙏 Donation Journey | Donor experience flow |
| 💪 Volunteer Journey | Volunteer engagement flow |
| 🎤 Editorial Quote | Featured quotes and endorsements |
| 📚 Resource Library | Document and resource downloads |
| 🏅 Leadership | Team and leadership profiles |
| 📈 Impact Timeline | Historical impact visualization |
| 🌐 Community Wall | Social proof and community posts |
| 🎪 Featured Exhibition | Exhibition and event highlights |

---

## 🎨 Design System

### Typography

- **Headings**: Inter — bold, extrabold for impact
- **Body**: Inter — regular, medium for readability
- **Monospace**: JetBrains Mono — for code and data

### Color Palettes

13 pre-built theme palettes for instant brand customization:

| Palette | Use Case |
|---------|----------|
| `default` | Clean, professional baseline |
| `warm` | Welcoming, community-focused |
| `nature` | Environment and sustainability |
| `ocean` | Water, marine, coastal |
| `healthcare` | Medical and health services |
| `education` | Schools and learning |
| `faith` | Religious organizations |
| `disaster-relief` | Emergency and crisis |
| `animal-welfare` | Animal rescue and conservation |
| `community` | Local development |
| `arts` | Cultural and creative |
| `humanitarian` | Global aid organizations |
| `high-contrast` | Maximum accessibility |

### Component Architecture

```
UI Components (Atomic Design)
├── Atoms       → Button, Badge, Avatar, Input, Icon
├── Molecules   → Card, Form Field, Nav Item
├── Organisms   → Navigation, Footer, Section
└── Templates   → Page Layouts, Section Compositions
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 20.0.0
- **npm** ≥ 10.9.0

### Installation

```bash
# Clone the repository
git clone https://github.com/genie-sharon/ngo-templates.git

# Navigate to the project
cd ngo-templates

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the template marketplace.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Create optimized production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint validation |
| `npm run lint:fix` | Auto-fix linting issues |
| `npm run typecheck` | Run TypeScript type checking |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check formatting without writing |
| `npm run preview` | Build and start production server |

---

## 📸 Screenshots

> *Add screenshots here*

| Homepage | Template Gallery | Healthcare Template |
|----------|-----------------|---------------------|
| ![Homepage](screenshots/homepage.png) | ![Templates](screenshots/templates.png) | ![Healthcare](screenshots/healthcare.png) |

| Environment Template | World Map | Mobile View |
|---------------------|-----------|-------------|
| ![Environment](screenshots/environment.png) | ![World Map](screenshots/world-map.png) | ![Mobile](screenshots/mobile.png) |

---

## ⚡ Performance

| Metric | Status |
|--------|--------|
| **Responsive** | ✅ Mobile-first design, tested on all screen sizes |
| **Optimized Images** | ✅ Next/Image with AVIF/WebP, lazy loading, and responsive sizing |
| **SEO** | ✅ Semantic HTML, Open Graph, XML sitemaps, structured data |
| **Accessibility** | ✅ WCAG 2.2 AA, keyboard navigation, screen reader support |
| **Lazy Loading** | ✅ Dynamic imports, code splitting, route-based chunking |
| **Animations** | ✅ Respects `prefers-reduced-motion`, GPU-accelerated transforms |
| **Type Safety** | ✅ TypeScript strict mode, zero `any` types |
| **Code Quality** | ✅ ESLint + Prettier + Husky pre-commit hooks |
| **Static Generation** | ✅ 100% SSG, no server required, edge-deployable |
| **Bundle Size** | ✅ Tree-shaking, package import optimization |

---

## 🗺️ Roadmap

| Version | Milestone | Status |
|---------|-----------|--------|
| **v1.0** | Core template system with 10 templates | ✅ Complete |
| **v1.1** | Interactive world map and impact dashboard | ✅ Complete |
| **v1.2** | 40+ section components with 6+ layouts each | ✅ Complete |
| **v1.3** | AI Experience Layer — 14 AI service modules | ✅ Complete |
| **v1.4** | Multi-language support (i18n) + Donation gateway | 🔄 In Progress |
| **v1.5** | CMS integration + Undo/redo builder | 📋 Planned |
| **v2.0** | Collaboration features + Template marketplace | 📋 Planned |

### Future Enhancements

- 🌐 **Localization** — 10+ languages with RTL support
- 💳 **Donation Gateway** — Stripe, PayPal, GoFundMe integration
- 📊 **Analytics Dashboard** — Real-time visitor and donation metrics
- 🌙 **Dark Mode** — Full dark theme support
- 🤖 **AI Content Generator** — Auto-generate section content
- 📱 **Mobile App** — React Native companion app
- 🔌 **Plugin System** — Third-party section and theme extensions

---

## 🏗️ Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to [Vercel](https://vercel.com) for automatic deployments on every push.

### Other Platforms

Kindonar works with any platform that supports Next.js:

| Platform | Command |
|----------|---------|
| **Vercel** | `vercel` |
| **Netlify** | `netlify deploy` |
| **Docker** | `docker build -t kindonar .` |
| **AWS Amplify** | Connect repository |
| **Cloudflare Pages** | `npx wrangler pages deploy` |

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | No | Custom site URL (defaults to deployment URL) |

> No API keys, databases, or external services required. The project is fully static.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'feat: add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines

- Follow the existing code style (ESLint + Prettier)
- Write TypeScript — no `any` types
- Add proper ARIA labels for accessibility
- Test on mobile, tablet, and desktop
- Update documentation for new features

---

## 📄 License

This project is licensed under the **MIT License** — free for personal and commercial use.

See the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Jusrin Gladson**

[![GitHub](https://img.shields.io/badge/GitHub-genie--sharon-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/genie-sharon)

---

## 🙏 Acknowledgements

- 🏆 **[Crowdera Hackathon 2026](https://crowdera.com)** — For the inspiration and platform
- ⚡ **[Next.js](https://nextjs.org)** — The React framework for production
- ⚛️ **[React](https://react.dev)** — The library for web and native user interfaces
- 🎨 **[Tailwind CSS](https://tailwindcss.com)** — A utility-first CSS framework
- 🎬 **[Framer Motion](https://www.framer.com/motion)** — Production-ready animations
- 🤖 **[OpenAI](https://openai.com)** — AI-powered content generation
- ▲ **[Vercel](https://vercel.com)** — Deploy with zero configuration

---

<div align="center">

**Built with ❤️ for the global nonprofit community**

[![Star on GitHub](https://img.shields.io/github/stars/genie-sharon/ngo-templates?style=social)](https://github.com/genie-sharon/ngo-templates)

</div>
