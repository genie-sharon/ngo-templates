# Builder Integration Guide

## Overview

Kindonar is designed to be consumed by Crowdera's no-code website builder. The builder generates JSON configuration, and Kindonar renders it as a complete website.

## Data Contract

The builder produces a `BuilderPageConfig` object:

```typescript
interface BuilderPageConfig {
  id: string;                      // Unique page ID
  slug: string;                    // URL path
  title: string;                   // Page title
  sections: SectionConfig[];       // Ordered section configurations
  themeId: ThemeId;                // Active theme
  colorMode: 'light' | 'dark';    // Color mode
  seo: PageSEOConfig;             // SEO metadata
  updatedAt: string;               // ISO timestamp
}
```

Each `SectionConfig` contains:

```typescript
interface SectionConfig {
  id: string;                      // Unique section ID
  type: SectionType;               // Section type (hero, about, stats...)
  layout: string;                  // Layout variant ID
  visibility: {                    // Responsive visibility
    desktop: boolean;
    tablet: boolean;
    mobile: boolean;
  };
  content: Record<string, unknown>;  // Section-specific data
  animations: AnimationConfig;      // Animation settings
  responsive: ResponsiveOverrides;   // Responsive overrides
}
```

## How Rendering Works

1. Builder sends `BuilderPageConfig` as JSON
2. `section-resolver` maps each section type to its React component
3. Sections are sorted by `order` and filtered by `visibility`
4. Each section receives its `SectionConfig` as props
5. `theme-applier` applies CSS custom properties based on `themeId`
6. Server components render static HTML; client components hydrate

## Adding a New Section Type

1. Add the type to `SectionType` union in `types/section.ts`
2. Add component mapping in `builder/section-resolver.ts`
3. Add section config in `config/sections.ts`
4. Create the section component in `components/sections/`
5. Add Zod schema in `schemas/section-schema.ts`

## Theme System

The builder can switch themes by changing `themeId`. Theme switching is instant — it only changes CSS custom property values without re-rendering.
