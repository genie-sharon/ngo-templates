# Kindonar — Hackathon Pitch Guide

## Problem Statement

**Non-profits struggle with web presence.** 76% of NGOs cite lack of technical expertise and budget as the top barriers to building an effective website. Off-the-shelf website builders are not designed for donation psychology, impact storytelling, or accessibility compliance. NGOs need a purpose-built tool that understands their unique mission.

## Solution

**Kindonar: AI-Powered NGO Website Builder**

A drag-and-drop website builder purpose-built for non-profit organizations. Kindonar combines a visual builder engine, AI-powered content assistance, and a rich template system to help NGOs create professional, accessible, and emotionally compelling websites in minutes — with zero coding required.

## Key Differentiators

| Feature | Kindonar | Generic Builders |
|---------|----------|------------------|
| NGO-specific templates | 10 templates for specific causes | Generic business templates |
| AI content tuned for NGOs | 14 modules, donation psychology | Generic AI content |
| Motion system | 50+ Framer Motion variants | Basic CSS transitions |
| Accessibility | WCAG 2.2 AA by default + AI auditing | Plugin-dependent |
| Donation optimization | Psychology-driven copy suggestions | None |
| Multi-provider AI | OpenAI, Anthropic, Gemini, Azure, self-hosted | Single provider |

## Architecture Highlights

### Registry-Driven Builder Engine
```
BuilderPageConfig (JSON)
  → Pure functions for CRUD operations
  → Lazy-loaded section components via registry
  → Theme application via CSS custom properties
```

### AI Provider Pattern
```
AIProvider interface → BaseAIProvider
  → OpenAI, Anthropic, Gemini, Azure, Self-hosted
  → 14 service modules for content, SEO, accessibility
```

### Motion System
```
Framer Motion + Design Tokens
  → 50+ animation variants
  → Scroll-triggered reveals
  → Reduced motion support
```

## Demo Script

### 3-Minute Pitch Demo

**0:00–0:30 — Problem**
> "76% of NGOs don't have a website that works. They lack budget, technical skills, and tools designed for their mission."

**0:30–1:00 — Introduction**
> "Kindonar is an AI-powered website builder built specifically for non-profits. Pick a template, customize with drag-and-drop, and let AI write your content."

**1:00–1:30 — Template Selection**
> [Open `/templates` → Select "Humanitarian" template]
> "10 templates for different causes. Each includes 9 pages optimized for fundraising, volunteer recruitment, and impact storytelling."

**1:30–2:00 — Builder Demo**
> [Open `/builder` → Add a hero section → Change layout → Drag to reorder]
> "21 section types with multiple layouts. Drag and drop to build your page. Each section is responsive by default."

**2:00–2:30 — AI Content Generation**
> [Click "Generate with AI" → Enter mission statement → See generated content]
> "AI generates NGO-optimized copy: donation appeals, impact stories, volunteer calls-to-action — all tailored to your cause."

**2:30–3:00 — Accessibility & Deployment**
> [Show theme picker → Select High Contrast → Show accessibility score]
> "Built-in WCAG compliance, AI-powered accessibility checks, and one-click deployment to Vercel. A professional NGO website in minutes."

### 5-Minute Extended Demo

**0:00–1:00 — Problem + Introduction** (same as 3-min, more detail)
> Show statistics: 76% NGOs lack effective web presence. $2B lost annually in missed donations due to poor websites.

**1:00–1:45 — Template System**
> [Browse template gallery, select a template, show all 9 pages]
> Explain the thought behind each template: color psychology for different causes, pre-configured donation funnels, impact story layouts.

**1:45–2:45 — Builder Engine**
> [Detailed builder walkthrough]
> Section library → Add sections → Change layouts → Reorder → Configure per-section animations. Show the responsive preview (desktop → tablet → mobile).

**2:45–3:30 — AI Deep Dive**
> [Generate content → Show SEO optimization → Run accessibility check → Get quality score]
> "14 AI modules: content generation, SEO optimization, accessibility auditing, storytelling flow, donation psychology, and more."

**3:30–4:00 — Motion System**
> [Scroll through a page showing animations]
> "50+ Framer Motion animations. Scroll-triggered reveals. Text animations. Counter animations for impact stats. All respect reduced motion preferences."

**4:00–4:30 — Themes & Customization**
> [Switch between 9 themes, show high-contrast mode]
> "9 themes from the ground up, all accessible, all NGO-optimized. Per-section overrides for fine-grained control."

**4:30–5:00 — Deployment & Impact**
> "One click to Vercel. TypeScript, Next.js 16, Tailwind CSS v4. Enterprise-grade infrastructure for non-profit budgets. Roadmap includes multi-language, donation gateways, and collaborative editing."

## Judging Criteria Checklist

- [ ] **Technical Complexity**: Registry-driven architecture, provider pattern, 50+ animation variants, 14 AI modules
- [ ] **Social Impact**: Purpose-built for NGOs, WCAG accessibility, affordable deployment
- [ ] **User Experience**: Drag-and-drop builder, AI-assisted content, one-click templates
- [ ] **Innovation**: AI for NGO-specific use cases (donation psychology, impact storytelling)
- [ ] **Completeness**: 21 sections, 9 themes, 10 templates, 14 AI services, production-ready
- [ ] **Scalability**: Multi-provider AI, lazy-loaded components, modular architecture
- [ ] **Design**: Professional UI, Framer Motion animations, responsive across devices

## QA Checklist for Demo

### Pre-Demo Setup
- [ ] Development server running at localhost:3000
- [ ] Template gallery loads without errors
- [ ] Builder loads without errors
- [ ] AI services respond (mock or real API key)
- [ ] All 9 themes render correctly
- [ ] Animation variants play on scroll
- [ ] Responsive preview switches breakpoints

### Demo Flow Verification
- [ ] Template selection works
- [ ] Section add/remove/reorder works
- [ ] Layout change renders correctly
- [ ] AI content generation returns results
- [ ] Theme switching updates the page
- [ ] High-contrast theme is visibly different
- [ ] Mobile preview shows properly

### Fallback Plans
- If AI API is unavailable: Show mock data or explain the provider pattern
- If animations lag: Enable "reduced motion" mode
- If builder crashes: Navigate to a pre-built page as alternative
- If deployment fails: Show `vercel.json` configuration and build output

## Technical Talking Points

### For Technical Judges
- Functional immutable builder engine with action dispatcher pattern
- Registry pattern with lazy-loaded dynamic imports
- Provider pattern for AI backend abstraction
- Design token system with CSS custom properties
- Framer Motion variant map for 50+ animations

### For Social Impact Judges
- Designed in consultation with NGO digital teams
- Free and open-source for registered non-profits
- WCAG 2.2 AA compliance as default
- High-contrast theme included
- AI tuned for sensitive, inclusive language

### For Product Judges
- 21 section types, 9 themes, 10 templates out of the box
- Multi-provider AI with 14 service modules
- Roadmap to v2.0 with collaboration and marketplace
- Built on Next.js 16 — enterprise-ready infrastructure
