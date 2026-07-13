# Kindonar Architecture

## System Overview

Kindonar is a Next.js 16 application built on the App Router. It follows a modular, registry-driven architecture where sections, layouts, themes, and components are registered at startup and resolved dynamically at runtime. The system is organized into four core subsystems: the Builder Engine, the Theme System, the Template System, and the AI Layer.

```
┌─────────────────────────────────────────────────────────┐
│                      Application Shell                    │
│  ┌─────────────────────────────────────────────────────┐ │
│  │                  Next.js App Router                  │ │
│  │  /builder    /templates    /api    /(route-groups)  │ │
│  └──────────────────────┬──────────────────────────────┘ │
│                         │                                 │
│  ┌──────────────────────▼──────────────────────────────┐ │
│  │                  Provider Layer                      │ │
│  │  ThemeProvider  BuilderProvider  RegistryProvider   │ │
│  │  SectionProvider  PreviewProvider  LayoutProvider   │ │
│  └──────────────────────┬──────────────────────────────┘ │
│                         │                                 │
│  ┌──────────────────────▼──────────────────────────────┐ │
│  │                  Rendering Engine                    │ │
│  │  PageRenderer → SectionRenderer → ComponentFactory  │ │
│  └──────────────────────┬──────────────────────────────┘ │
│                         │                                 │
│  ┌──────────────────────┴──────────────────────────────┐ │
│  │    Registry    │    Themes    │    AI Services      │ │
│  └─────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

## Builder Engine Architecture

The builder engine is the heart of Kindonar. It manages page configuration as a serializable JSON document and provides pure functions for manipulating that document.

### Engine Design

The engine (`src/builder/engine.ts`) follows a functional, immutable pattern:

```
                BuilderPageConfig (JSON)
                        │
  ┌─────────────────────┼─────────────────────┐
  │                     │                     │
  ▼                     ▼                     ▼
createSection    addSectionToPage    removeSectionFromPage
  │                     │                     │
  ▼                     ▼                     ▼
updateSection    reorderSections      setPageTheme
  │                     │                     │
  └─────────────────────┼─────────────────────┘
                        │
                        ▼
              applyBuilderAction (dispatcher)
                        │
                        ▼
              serializePageConfig (export)
```

A `BuilderPageConfig` is a plain JSON object containing:
- Metadata (id, slug, title, description)
- Ordered array of `SectionConfig` objects
- Theme selection (`ThemeId` + `ColorMode`)
- SEO configuration
- Version and timestamps

Each `SectionConfig` defines:
- `type` — section type identifier
- `layout` — layout variant for that section
- `content` — section-specific content data
- `animations` — animation configuration (type, delay, duration)
- `visibility` — responsive visibility per breakpoint
- `theme` — per-section theme overrides
- `responsive` — breakpoint-specific overrides
- `order` — rendering position

### Section Resolver

The section resolver (`src/builder/section-resolver.ts`) maps section types to their registered components via the component registry. It handles lazy loading, error boundaries, and skeleton fallbacks during resolution.

### Theme Applier

The theme applier (`src/builder/theme-applier.ts`) takes a page's theme configuration and applies the selected theme's design tokens to the rendered output. It supports per-section theme overrides for granular customization.

### Context Layer

The builder uses multiple React contexts to manage state:

```
BuilderProvider (src/context/builder-context.tsx)
  │
  ├── ThemeProvider (src/context/theme-context.tsx)
  │     └── Manages currentTheme, colorMode, toggleColorMode
  │
  ├── SectionProvider (src/context/section-context.tsx)
  │     └── Manages sections, add/remove/reorder/update
  │
  ├── PreviewProvider (src/context/preview-context.tsx)
  │     └── Manages preview device, zoom level
  │
  ├── RegistryProvider (src/context/registry-context.tsx)
  │     └── Provides section/component/layout registries
  │
  └── LayoutProvider (src/context/layout-context.tsx)
        └── Manages layout state and breakpoints
```

The `HistoryManager` (`src/context/builder-history.ts`) implements undo/redo by maintaining stacks of previous `BuilderPageConfig` snapshots.

### Rendering Engine

Located at `src/components/sections/engine/`, the rendering engine is responsible for converting a `BuilderPageConfig` into rendered DOM:

```
PageRenderer
  │
  └── SectionRenderer (for each section)
        │
        ├── SectionErrorBoundary
        │
        └── DynamicComponent (lazy loaded from registry)
              │
              └── Section component (hero, about, etc.)
```

- `page-builder.tsx` — The main builder interface with drag-and-drop
- `page-renderer.tsx` — Renders a page from config (used in preview and production)
- `rendering-engine.tsx` — Orchestrates rendering with theme application
- `section-factory.tsx` — Maps section types to lazily-loaded components
- `dynamic-renderer.tsx` — Handles dynamic import resolution
- `section-error-boundary.tsx` — Catches errors per section

## Theme System Architecture

### Theme Definition

Each theme lives in `src/themes/` and exports a `Theme` object containing metadata and design tokens:

```typescript
interface Theme {
  meta: ThemeMeta;   // id, name, description, mood, bestFor
  tokens: Partial<FullDesignTokens>;  // color, typography, spacing, etc.
}
```

### Theme Registry

Themes are registered in `src/themes/index.ts` as a `Record<ThemeId, Theme>`:

| Theme ID | Name | Best For |
|----------|------|----------|
| `default` | Default Light | General purpose |
| `high-contrast` | High Contrast | Accessibility |
| `warm` | Soft Warm | Community, humanitarian |
| `nature` | Nature | Environment, animal welfare |
| `ocean` | Ocean | Healthcare, foundations |
| `healthcare` | Healthcare | Medical organizations |
| `education` | Education | Schools, youth programs |
| `faith` | Faith | Faith-based organizations |
| `disaster-relief` | Disaster Relief | Emergency response |

### Token Application

Design tokens are CSS custom properties applied at the document level. The `ThemeContext` provides `setTheme()`, `setColorMode()`, and `toggleColorMode()` functions that update the token values. Per-section overrides can be applied via `SectionConfig.theme`.

```
Theme Selection
      │
      ▼
getThemeTokens(themeId, colorMode)
      │
      ▼
Merge tokens → CSS custom properties → Applied to DOM
      │
      ▼
Section-level overrides → Scoped CSS
```

## Template System

Templates (`src/data/templates/`) are pre-built multi-page configurations that serve as starting points for new websites.

### Template Definition

```typescript
interface TemplateDefinition {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  themeId: ThemeId;
  mood: string;
  illustrationStyle: string;
  motionStyle: string;
  pages: Record<TemplatePageSlug, BuilderPageConfig>;
}
```

### Available Templates

| Template | Theme | Pages |
|----------|-------|-------|
| Universal | Default | 9 pages |
| Healthcare | Healthcare | 9 pages |
| Education | Education | 9 pages |
| Animal Welfare | Nature | 9 pages |
| Environment | Nature | 9 pages |
| Disaster Relief | Disaster Relief | 9 pages |
| Faith-Based | Faith | 9 pages |
| Community | Warm | 9 pages |
| Arts | Default | 9 pages |
| Humanitarian | Warm | 9 pages |

Each template includes all 9 page types: Home, About, Programs, Program Detail, Gallery, Donate, Volunteer, News, Contact.

### Template Usage Flow

```
User selects template
      │
      ▼
Template instantiation (deep copy)
      │
      ▼
Customize sections via builder
      │
      ▼
Export as page config JSON
      │
      ▼
Deploy as Next.js pages
```

## AI Layer Architecture

The AI layer (`src/ai/`) follows a **Provider Pattern** with a service layer on top. It supports multiple AI backends through a unified interface.

```
┌───────────────────────────────────────────────────────┐
│                    AI Service Layer                     │
│                                                       │
│  ContentGenerator       ThemeRecommender             │
│  LayoutRecommender      SEOAssistant                 │
│  AccessibilityChecker   ImagePrompt                 │
│  DonationPsychology     Storytelling                │
│  ComponentRecommender   TemplateRecommender          │
│  ContentQuality         PreviewAssistant             │
│  HomepageGenerator      PromptRegistry               │
│                                                       │
└───────────────────────┬───────────────────────────────┘
                        │
┌───────────────────────▼───────────────────────────────┐
│                 AI Provider Interface                   │
│                    BaseAIProvider                       │
│  ┌──────────┬──────────┬──────────┬────────────────┐  │
│  │ OpenAI   │Anthropic │  Gemini  │  Azure/Self    │  │
│  └──────────┴──────────┴──────────┴────────────────┘  │
└───────────────────────────────────────────────────────┘
```

### Provider Pattern

The `BaseAIProvider` abstract class defines the contract:

```typescript
interface AIProvider {
  readonly name: string;
  readonly config: AIProviderConfig;
  complete(request: AICompletionRequest): Promise<AICompletionResponse>;
  stream(request: AICompletionRequest): AsyncGenerator<AIStreamChunk>;
  isAvailable(): boolean;
}
```

Providers are instantiated via factory functions based on environment configuration. The system supports OpenAI, Anthropic, Gemini, Azure OpenAI, and self-hosted LLMs.

### Service Architecture

Each AI service follows a consistent pattern:

```
Service receives request
      │
      ▼
Build prompt from PromptRegistry
      │
      ▼
Call AIProvider.complete() or .stream()
      │
      ▼
Parse and validate response
      │
      ▼
Return AIServiceResult<T>
```

Services are designed to be stateless and composable. The `PromptRegistry` manages a library of system prompts tailored for NGO content (storytelling, donation psychology, accessible language, etc.).

### AI Configuration

Environment-driven configuration (`src/ai/config.ts`):

| Variable | Default | Description |
|----------|---------|-------------|
| `NEXT_PUBLIC_AI_DEFAULT_PROVIDER` | `openai` | Default AI provider |
| `NEXT_PUBLIC_AI_STREAMING` | `true` | Enable streaming responses |
| `NEXT_PUBLIC_AI_CACHE` | `true` | Enable response caching |
| `NEXT_PUBLIC_AI_CACHE_TTL` | `3600` | Cache TTL in seconds |
| `NEXT_PUBLIC_AI_RATE_LIMIT` | `30` | Requests per window |
| `NEXT_PUBLIC_AI_MAX_RETRIES` | `3` | Retry attempts |
| `OPENAI_API_KEY` | — | OpenAI API key |
| `ANTHROPIC_API_KEY` | — | Anthropic API key |
| `GEMINI_API_KEY` | — | Google Gemini API key |

## Motion/Animation System

The motion system (`src/animations/`) is built on Framer Motion and organized in layers:

```
Animation System
  │
  ├── Design Tokens (src/animations/tokens.ts)
  │     └── Duration, easing, distance, spring presets
  │
  ├── Variants (src/animations/variants.ts)
  │     └── 50+ named animation variants
  │
  ├── Components
  │     ├── reveal.tsx       — Scroll-triggered reveal
  │     ├── hover.tsx        — Interactive hover effects
  │     ├── page-transition.tsx — Page enter/exit
  │     ├── counter.tsx      — Animated number counters
  │     ├── animated-svg.tsx — SVG path animations
  │     ├── loading.tsx      — Loading skeletons
  │     └── micro.tsx        — Micro-interactions
  │
  └── Provider (motion-provider.tsx)
        └── Context for global animation preferences
```

### Animation Variants

The `animationVariantsMap` at `src/animations/variants.ts:423` contains 50+ registered variant entries:

- **Fade variants**: fade, fadeInUp, fadeInDown, fadeInLeft, fadeInRight
- **Scale variants**: scaleIn, scaleInUp
- **Slide variants**: slideInUp, slideInRight
- **Clip variants**: clipReveal, clipRevealVertical
- **Blur/zoom**: blurIn, zoomIn, zoomOut
- **Rotation/Flip**: rotateIn, flipIn, dropIn
- **Stagger**: cardStagger, listStagger, containerSlide
- **Hero**: heroTitle, heroSubtitle, heroCta, heroImage
- **Text**: letterReveal, wordReveal, wordStagger, letterStagger
- **Parallax**: parallaxSlow, parallaxFast
- **Specialized**: galleryItem, timelineDot, timelineLine, timelineContent, accordionContent, modalOverlay, modalContent
- **Page transitions**: pageEnter, pageSlideEnter, pageScaleEnter
- **Utility**: noAnimation

### Scroll-Triggered Animation

The `Reveal` and `StaggerReveal` components use `useIntersectionObserver` to trigger animations when elements enter the viewport. They respect `prefers-reduced-motion` and provide a progressive enhancement approach.

## Data Flow Diagrams

### Builder Data Flow

```
┌──────────────┐    User Action     ┌──────────────────┐
│   Builder UI  │ ────────────────► │  BuilderContext   │
│  (drag, edit) │                   │  (state dispatch) │
└──────────────┘ ◄──────────────── └────────┬─────────┘
       │         Re-render                  │
       │                                    ▼
       │                           ┌──────────────────┐
       │                           │  applyBuilderAction│
       │                           │  (immutable)     │
       │                           └────────┬─────────┘
       │                                    │
       │                           ┌────────▼─────────┐
       │                           │  HistoryManager  │
       │                           │  (undo/redo)     │
       │                           └──────────────────┘
       │
       ▼
┌──────────────┐    Theme + Registry   ┌──────────────────┐
│  PageRenderer │ ──────────────────► │  SectionRenderer  │
│  (iterate     │                     │  (per section)    │
│   sections)   │                     └────────┬─────────┘
└──────────────┘                              │
                                      ┌───────▼────────┐
                                      │ ThemeApplier    │
                                      │ (apply tokens)  │
                                      └───────┬────────┘
                                              │
                                      ┌───────▼────────┐
                                      │ DynamicComponent│
                                      │ (lazy loaded)  │
                                      └────────────────┘
```

### AI Service Data Flow

```
┌──────────────┐  Request + Context  ┌──────────────────┐
│  AI UI Widget │ ─────────────────► │   AI Service      │
│  (sidebar,    │                    │   (e.g., Content  │
│   modal)      │                    │    Generator)     │
└──────────────┘                    └────────┬─────────┘
                                            │
                                   ┌────────▼─────────┐
                                   │  PromptRegistry   │
                                   │  (system prompt)  │
                                   └────────┬─────────┘
                                            │
                                   ┌────────▼─────────┐
                                   │  AIProvider       │
                                   │  (complete/stream)│
                                   └────────┬─────────┘
                                            │
                                   ┌────────▼─────────┐
                                   │  Response Parser  │
                                   │  (validate, cache)│
                                   └────────┬─────────┘
                                            │
┌──────────────┐  AIServiceResult  ┌────────┴─────────┐
│  Builder UI  │ ◄──────────────── │  Result Handler   │
│  (update     │                   │  (apply to state) │
│   content)   │                   └──────────────────┘
└──────────────┘
```

### Theme Application Flow

```
┌──────────────┐  Theme Selection  ┌──────────────────┐
│  ThemePicker  │ ────────────────► │  ThemeContext     │
│  (UI widget)  │                   │  (state update)  │
└──────────────┘                   └────────┬─────────┘
                                           │
                                  ┌────────▼─────────┐
                                  │  getThemeTokens() │
                                  │  (merge tokens)  │
                                  └────────┬─────────┘
                                           │
                                  ┌────────▼─────────┐
                                  │  CSS Custom       │
                                  │  Properties       │
                                  │  (document.document│
                                  │   Element.style)  │
                                  └────────┬─────────┘
                                           │
┌──────────────┐                   ┌────────▼─────────┐
│  Section      │ ◄─────────────── │  Per-section      │
│  Renderer     │   scoped tokens  │  ThemeOverrides   │
└──────────────┘                   └──────────────────┘
```

## Component Tree

```
<html>
  <body>
    <Providers>
      ├── ThemeProvider (theme-context.tsx)
      ├── RegistryProvider (registry-context.tsx)
      ├── LayoutProvider (layout-context.tsx)
      ├── BuilderProvider (builder-context.tsx)
      │     └── HistoryManager
      ├── SectionProvider (section-context.tsx)
      ├── PreviewProvider (preview-context.tsx)
      └── <main>
            ├── HomePage (/)
            ├── BuilderPage (/builder)
            │     ├── BuilderSidebar
            │     │     ├── SectionLibrary
            │     │     ├── ThemePicker
            │     │     └── PageSettings
            │     ├── BuilderCanvas
            │     │     ├── PageRenderer
            │     │     │     └── SectionRenderer[]
            │     │     │           ├── SectionErrorBoundary
            │     │     │           └── DynamicComponent
            │     │     │                 ├── HeroSection
            │     │     │                 ├── AboutSection
            │     │     │                 ├── StatsSection
            │     │     │                 └── ...
            │     │     └── DragDropContext
            │     └── PreviewToolbar
            │           ├── DeviceSelector
            │           └── ZoomControls
            ├── TemplateGallery (/templates)
            │     └── TemplateCard[]
            └── Route Groups
                  ├── (home)
                  ├── (about)
                  ├── (programs)
                  ├── (campaigns)
                  ├── (get-involved)
                  ├── (impact)
                  ├── (media)
                  ├── (resources)
                  ├── (legal)
                  └── (auth)
      </main>
    </Providers>
  </body>
</html>
```
