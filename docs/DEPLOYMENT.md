# Kindonar Deployment Guide

## Vercel Deployment (Recommended)

### Prerequisites

1. A Vercel account (vercel.com)
2. GitHub repository access
3. OpenAI API key (optional, for AI features)

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/kindonar/kindonar)

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy to production
vercel --prod

# Deploy to preview
vercel
```

### Vercel Configuration

Create `vercel.json` in the project root:

```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "regions": ["iad1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ]
}
```

## Environment Variables

### Required

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (e.g., `https://example.org`) |

### AI Provider (pick one)

| Variable | Description |
|----------|-------------|
| `OPENAI_API_KEY` | OpenAI API key |
| `ANTHROPIC_API_KEY` | Anthropic API key |
| `GEMINI_API_KEY` | Google Gemini API key |
| `AZURE_OPENAI_API_KEY` | Azure OpenAI API key |
| `SELF_HOSTED_LLM_URL` | Self-hosted LLM endpoint |

### AI Configuration (optional)

| Variable | Default | Description |
|----------|---------|-------------|
| `NEXT_PUBLIC_AI_DEFAULT_PROVIDER` | `openai` | Default provider |
| `OPENAI_MODEL` | `gpt-4o` | OpenAI model |
| `ANTHROPIC_MODEL` | `claude-3-5-sonnet-latest` | Anthropic model |
| `GEMINI_MODEL` | `gemini-2.0-flash` | Gemini model |
| `NEXT_PUBLIC_AI_STREAMING` | `true` | Enable streaming |
| `NEXT_PUBLIC_AI_CACHE` | `true` | Enable caching |
| `NEXT_PUBLIC_AI_CACHE_TTL` | `3600` | Cache duration (s) |
| `NEXT_PUBLIC_AI_RATE_LIMIT` | `30` | Rate limit requests |
| `NEXT_PUBLIC_AI_MAX_RETRIES` | `3` | Max retry attempts |

### Optional

| Variable | Description |
|----------|-------------|
| `SENTRY_DSN` | Sentry error tracking DSN |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 measurement ID |
| `NEXT_PUBLIC_HOTJAR_ID` | Hotjar site ID |

## Production Build

```bash
# Build with environment validation
npm run build

# Expected output:
# ✓ Compiled successfully
# ✓ Lint checked
# ✓ Type checked
# ✓ Static pages generated (if any)

# Preview the production build locally
npm run preview
```

### Build Optimization

```bash
# Analyze bundle size
npx @next/bundle-analyzer

# Enable experimental features in next.config.ts
# Webpack cache, SWC minification, etc.
```

## Error Monitoring (Sentry)

### Setup

1. Create a Sentry account at sentry.io
2. Create a new project (Next.js)
3. Add `SENTRY_DSN` to environment variables

### Configuration

```typescript
// sentry.client.config.ts
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 0.1,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  environment: process.env.NODE_ENV,
});
```

### Error Boundaries

The project includes global error boundaries at:
- `src/app/error.tsx` — Route segment errors
- `src/app/global-error.tsx` — Root layout errors
- `src/components/sections/engine/section-error-boundary.tsx` — Per-section error isolation

## Analytics Setup

### Google Analytics 4

```typescript
// Add to root layout or provider
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;
```

### Key Events to Track

| Event | Trigger |
|-------|---------|
| `page_view` | Route change |
| `builder_section_add` | Section added to page |
| `builder_theme_change` | Theme changed |
| `ai_content_generate` | AI content generated |
| `template_selected` | Template chosen |
| `template_deployed` | Website deployed |

### Custom Event Tracking

```typescript
// Using the data layer
window.dataLayer.push({
  event: 'builder_section_add',
  section_type: 'hero',
  layout: 'full-screen-image',
});
```

## Performance Optimization

### Metrics Targets

| Metric | Target |
|--------|--------|
| First Contentful Paint (FCP) | < 1.5s |
| Largest Contentful Paint (LCP) | < 2.5s |
| First Input Delay (FID) | < 100ms |
| Cumulative Layout Shift (CLS) | < 0.1 |
| Time to Interactive (TTI) | < 3.5s |
| Speed Index | < 3.0s |

### Optimization Checklist

1. **Images**: Use Next.js Image component with WebP/AVIF format
2. **Fonts**: Preload custom fonts, use `font-display: swap`
3. **Code Splitting**: Sections are lazy-loaded via dynamic imports
4. **Caching**: AI responses cached with configurable TTL
5. **Bundle**: Analyze with `@next/bundle-analyzer`
6. **ISR**: Use Incremental Static Regeneration for published sites
7. **CDN**: Vercel Edge Network with regional distribution
8. **Reduced Motion**: Respect user preferences, reduce animation load

## Security Checklist

- [ ] Environment variables never exposed to client (non `NEXT_PUBLIC_` prefix)
- [ ] API keys stored as server-side environment variables
- [ ] CORS headers configured for API routes
- [ ] Content Security Policy (CSP) headers set
- [ ] Rate limiting on AI endpoints
- [ ] Input validation with Zod schemas
- [ ] XSS prevention via React's built-in escaping
- [ ] SQL injection prevention (no raw queries)
- [ ] HTTPS enforced (Vercel default)
- [ ] Security headers configured in `vercel.json`
- [ ] Dependency scanning (npm audit)
- [ ] No secrets committed to repository
- [ ] `.env.local` in `.gitignore`
- [ ] Regular dependency updates

### Security Headers

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-DNS-Prefetch-Control", "value": "on" },
        { "key": "Strict-Transport-Security", "value": "max-age=63072000; includeSubDomains; preload" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" }
      ]
    }
  ]
}
```

## Rollback Procedure

```bash
# Vercel rollback to previous deployment
vercel rollback

# Or via Vercel Dashboard: Deployments → [deployment] → ⋮ → Rollback
```
