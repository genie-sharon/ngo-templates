# Changelog

All notable changes to Kindonar are documented in this file.

## [1.3.0] — 2026-06-15

### Added
- AI Experience Layer with 14 service modules
  - `ContentGeneratorService` — AI-powered section content generation
  - `HomepageGeneratorService` — Full homepage generation from prompts
  - `LayoutRecommenderService` — Smart layout suggestions per section type
  - `ThemeRecommenderService` — AI theme selection based on NGO profile
  - `SEOAssistantService` — Meta tag and structured data optimization
  - `AccessibilityCheckerService` — WCAG compliance auditing and fixes
  - `ImagePromptService` — AI-generated image prompts for stock photos
  - `DonationPsychologyService` — Psychology-optimized donation copy
  - `StorytellingService` — Narrative arc and storytelling flow generation
  - `ComponentRecommenderService` — Component recommendations by context
  - `TemplateRecommenderService` — Template matching based on NGO needs
  - `ContentQualityService` — Multi-dimension content quality scoring
  - `PreviewAssistantService` — Pre-launch website assessment
  - `PromptRegistry` — Centralized prompt management system
- Provider pattern supporting 5 AI backends: OpenAI, Anthropic, Gemini, Azure, self-hosted
- Streaming support for real-time AI responses
- AI response caching with configurable TTL
- Rate limiting and retry logic for API calls
- `useAIContent` React hook for AI integration in components
- `NEXT_PUBLIC_AI_*` environment variable configuration
- Modular prompt engineering system with NGO-specific templates

### Changed
- Refactored AI configuration into environment-driven pattern
- Updated project documentation with AI module architecture

## [1.2.0] — 2026-05-01

### Added
- 10 premium NGO templates
  - Universal (general purpose)
  - Healthcare (medical organizations)
  - Education (schools, youth programs)
  - Animal Welfare (conservation, animal rights)
  - Environment (climate, conservation)
  - Disaster Relief (emergency response)
  - Faith-Based (religious charities)
  - Community (local community development)
  - Arts (cultural organizations)
  - Humanitarian (aid organizations)
- 9-page multi-page structure per template (Home, About, Programs, Gallery, Donate, Volunteer, News, Contact, Program Detail)
- Template gallery UI at `/templates`
- Template instantiation flow with one-click setup
- Template data registry with helper utilities
- Template recommendation engine (basic, pre-AI)

### Changed
- Extended rendering engine to support multi-page templates
- Added page-level navigation structure to templates
- Updated documentation with template development guide

## [1.1.0] — 2026-03-20

### Added
- Motion system with 50+ animation variants
  - Fade, scale, slide, clip, blur, zoom, rotate, flip, drop animations
  - Stagger animations for cards, lists, and containers
  - Hero section choreographed animations (title, subtitle, CTA, image)
  - Text reveal animations (letters, words, clips)
  - Parallax scroll effects (slow, fast)
  - Specialized section animations (gallery, timeline, accordion, modal)
  - Page transition animations (enter, slide, scale)
- Scroll-triggered reveal components (`Reveal`, `StaggerReveal`, `TextReveal`, `ClipReveal`)
- Interactive hover effects (`MagneticButton`, `FloatingCard`, `ScaleOnHover`, `TiltOnHover`)
- Animated counter components (`AnimatedCounter`, `CounterCard`)
- SVG animation components (`AnimatedSVG`, `ShapeReveal`)
- Page transition component with multiple transition types
- Scroll progress indicators (`ScrollProgress`, `ScrollIndicator`)
- Loading animations and skeleton screens (`PageLoader`, `SkeletonCard`)
- Micro-interaction components (`MicroFeedback`, `PulseDot`, `AnimatedProgressBar`)
- Motion design tokens (duration, easing, distance, spring presets)
- Reduced motion support respecting `prefers-reduced-motion`
- `MotionProvider` for global animation configuration

### Changed
- Replaced manual CSS transitions with Framer Motion throughout
- Updated all section components with motion integration
- Added animation configuration to `SectionConfig`

## [1.0.0] — 2026-02-01

### Added
- Next.js 16 App Router project with TypeScript
- Builder engine with immutable page configuration
  - `createSection`, `addSectionToPage`, `removeSectionFromPage`
  - `updateSectionInPage`, `reorderSections`
  - `setPageTheme`, `updatePageSEO`
  - `applyBuilderAction` action dispatcher
  - `serializePageConfig` / `deserializePageConfig`
- 21 section types with multiple layout variants
  - Hero (6 layouts), Navigation, About (5 layouts)
  - Stats (4 layouts), Programs (4 layouts)
  - Testimonials (4 layouts), Gallery (4 layouts)
  - News (4 layouts), CTA (5 layouts), Footer (4 layouts)
  - Partners (3 layouts), Team (3 layouts), FAQ (3 layouts)
  - Timeline, Events, Contact, Donation, Volunteer
  - Campaign, Newsletter, Custom
- 9 themes with design tokens
  - Default, High Contrast, Warm, Nature, Ocean
  - Healthcare, Education, Faith, Disaster Relief
- Component registry system with lazy loading
  - Section registry, layout registry, theme registry, component registry
- Section rendering engine with error boundaries and skeleton fallbacks
- Theme application engine with CSS custom properties
- React context layer (Builder, Theme, Section, Preview, Registry, Layout)
  - `BuilderContext` with undo/redo history management
  - `ThemeContext` with color mode toggling
  - `SectionContext` with CRUD operations
  - `PreviewContext` with device simulation
- Drag-and-drop section reordering (`useDragAndDrop` hook)
- Responsive breakpoint preview (desktop, tablet, mobile)
- Section visibility controls per breakpoint
- Custom hooks: `useIntersectionObserver`, `useMediaQuery`, `useScrollPosition`, `useCounter`, `useKeyboardShortcut`
- Zod validation schemas for sections, pages, and themes
- Tailwind CSS v4 with design tokens
- SEO infrastructure (sitemap, robots.txt, metadata, Open Graph)
- Accessibility infrastructure (skip links, heading hierarchy, ARIA)
- Lucide React icon library integration
- Embla Carousel for section carousels
- React Hook Form + Zod for forms
- Error handling with `error.tsx` and `global-error.tsx`
- Development tooling: ESLint 9, Prettier 3, Husky 9, lint-staged
- Documentation: README, architecture, developer guide, deployment guide
