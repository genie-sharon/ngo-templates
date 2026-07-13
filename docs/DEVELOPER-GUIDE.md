# Kindonar Developer Guide

## Setup

### Prerequisites

- Node.js 20+
- npm 10+
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/kindonar/kindonar.git
cd kindonar

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development
npm run dev
```

The development server starts at `http://localhost:3000`.

### Editor Setup

Recommended VS Code extensions:
- ESLint (dbaeumer.vscode-eslint)
- Prettier (esbenp.prettier-vscode)
- Tailwind CSS IntelliSense (bradlc.vscode-tailwindcss)
- TypeScript + TSLint (ms-vscode.vscode-typescript-next)

## Development Workflow

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix auto-fixable lint issues |
| `npm run format` | Format with Prettier |
| `npm run format:check` | Check formatting |
| `npm run typecheck` | TypeScript type checking |
| `npm run preview` | Build + start production preview |
| `npm run prepare` | Install Husky git hooks |

### Git Hooks

Husky runs lint-staged on pre-commit, which automatically lints and formats staged files. The pre-push hook runs type checking.

### Branch Strategy

- `main` — stable, deployable
- `develop` — integration branch
- `feature/*` — new features
- `fix/*` — bug fixes
- `docs/*` — documentation

### Commit Convention

We follow conventional commits:

```
<type>(<scope>): <description>

feat(builder): add section duplication action
fix(theme): correct high-contrast token values
docs(api): update AI provider configuration
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`

## Code Style and Conventions

### TypeScript

- Strict mode enabled
- Prefer `interface` over `type` for object shapes
- Use `type` for unions, intersections, and utility types
- Named exports only (no default exports)
- Barrel exports via `index.ts` files

### Naming

| Entity | Convention | Example |
|--------|-----------|---------|
| Components | PascalCase | `HeroSection`, `PageBuilder` |
| Hooks | camelCase, `use` prefix | `useBuilder`, `useAIContent` |
| Functions | camelCase | `createSection`, `applyBuilderAction` |
| Types/Interfaces | PascalCase | `SectionConfig`, `BuilderPageConfig` |
| Files | kebab-case | `section-resolver.ts`, `theme-applier.ts` |
| Directories | kebab-case | `dynamic-renderer.tsx` |

### React

- Functional components only
- Server Components by default (App Router)
- 'use client' directive only when necessary (hooks, context, interactivity)
- Use React Hook Form + Zod for forms
- Use Framer Motion for animations
- Avoid prop drilling; use contexts for shared state

### Folder Organization

```
feature/
├── component.tsx          # Main component
├── component.types.ts     # Component-specific types
├── component.test.tsx     # Tests
└── index.ts               # Barrel export
```

### Imports Order

1. External libraries (react, next, framer-motion)
2. Internal absolute imports (`@/types`, `@/components`)
3. Relative imports (`./component.types`)
4. Style imports (`@/styles/*.css`)

### CSS/Tailwind

- Tailwind CSS v4 utility classes preferred
- Custom CSS in `src/styles/` for global styles
- Use `cn()` utility (`clsx` + `tailwind-merge`) for conditional classes
- Design tokens via CSS custom properties for themes
- Follow mobile-first responsive design

## Adding New Sections

### 1. Define the Section Type

Add the new type to `SectionType` union in `src/types/section.ts`:

```typescript
export type SectionType = 'hero' | 'about' | 'your-new-type' | ... | 'custom';
```

### 2. Create the Section Component

```typescript
// src/components/sections/your-section/your-section.tsx
'use client';

import type { SectionConfig } from '@/types';
import { Reveal } from '@/animations';

interface YourSectionContent {
  title: string;
  description: string;
}

interface YourSectionProps {
  config: SectionConfig<YourSectionContent>;
}

export function YourSection({ config }: YourSectionProps) {
  const { content } = config;

  return (
    <Reveal>
      <section className="py-16">
        <h2>{content.title}</h2>
        <p>{content.description}</p>
      </section>
    </Reveal>
  );
}
```

### 3. Register in Section Library

Add to `src/config/sections.ts`:

```typescript
{
  type: 'your-new-type',
  name: 'Your Section Name',
  description: 'Description of your section',
  icon: 'icon-name',
  category: 'content',
  layouts: [
    { id: 'default', name: 'Default', description: 'Default layout' },
  ],
  defaultConfig: {} as never,
}
```

### 4. Register Component

The section component is automatically registered if placed in `src/components/sections/your-section/` and exported. The component registry (`src/components/registry/`) picks up new sections via the section factory.

### 5. Add Schema Validation

If the section has complex content, add Zod schemas in `src/schemas/`:

```typescript
// src/schemas/your-section-schema.ts
import { z } from 'zod/v4';

export const yourSectionContentSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
});
```

## Creating New Templates

### 1. Define Template Data

```typescript
// src/data/templates/your-template.ts
import type { TemplateDefinition } from './types';

export const yourTemplate: TemplateDefinition = {
  slug: 'your-template',
  name: 'Your Template',
  tagline: 'Tagline for your template',
  description: 'Description of the template and its use case.',
  themeId: 'default',
  mood: 'Professional, Trustworthy',
  illustrationStyle: 'flat',
  motionStyle: 'subtle',
  pages: {
    home: { /* BuilderPageConfig */ },
    about: { /* BuilderPageConfig */ },
    programs: { /* BuilderPageConfig */ },
    'program-detail': { /* BuilderPageConfig */ },
    gallery: { /* BuilderPageConfig */ },
    donate: { /* BuilderPageConfig */ },
    volunteer: { /* BuilderPageConfig */ },
    news: { /* BuilderPageConfig */ },
    contact: { /* BuilderPageConfig */ },
  },
};
```

### 2. Register in Template Registry

Add to `src/data/templates/registry.ts`:

```typescript
import { yourTemplate } from './your-template';

export const templates: TemplateDefinition[] = [
  universalTemplate,
  // ... existing templates
  yourTemplate,
];
```

Each template must include all 9 page types. Use the helpers in `src/data/templates/helpers.ts` to create consistent page configurations.

## Working with Themes

### Creating a New Theme

```typescript
// src/themes/your-theme.ts
import type { FullDesignTokens } from '@/types';

export const yourThemeLightTokens: FullDesignTokens = {
  color: {
    primary: { 50: '#...', 100: '#...', /* ... */ 900: '#...' },
    neutral: { 50: '#...', /* ... */ 900: '#...' },
    accent: { 50: '#...', /* ... */ 900: '#...' },
    success: '#...',
    warning: '#...',
    error: '#...',
    info: '#...',
  },
  typography: {
    fontFamily: { heading: '...', body: '...' },
    fontSize: { /* ... */ },
    fontWeight: { /* ... */ },
    lineHeight: { /* ... */ },
    letterSpacing: { /* ... */ },
  },
  spacing: { /* ... */ },
  borderRadius: { /* ... */ },
  shadows: { /* ... */ },
  breakpoints: { /* ... */ },
};
```

### Registering a Theme

Add to `src/themes/index.ts`:

```typescript
import { yourThemeLightTokens } from './your-theme';

export const themes: Record<ThemeId, Theme> = {
  // ... existing themes
  'your-theme': {
    meta: {
      id: 'your-theme',
      name: 'Your Theme',
      description: 'Description of your theme.',
      mood: 'Mood keywords',
      bestFor: ['Target audience'],
      colorMode: 'light',
    },
    tokens: yourThemeLightTokens,
  },
};
```

Then add the theme ID to the `ThemeId` type in `src/types/theme.ts`.

### Theme Design Guidelines

- Ensure AA contrast ratios (4.5:1 for normal text, 3:1 for large text)
- Provide 9 color stops (50-900) for each semantic color
- Include both light and dark mode tokens when applicable
- Keep consistent spacing scale (4px base unit)
- Test with section components before submitting

## AI Module Development

### Architecture

Each AI service extends the provider pattern:

```typescript
// src/ai/services/your-service.ts
import type { AIProvider } from '@/ai/provider-interface';
import { getAIServiceProvider } from '@/ai/services/provider';
import type { AIServiceResult, AIGenerationOptions } from '@/ai/types';

export class YourService {
  private provider: AIProvider;

  constructor(provider?: AIProvider) {
    this.provider = provider ?? getAIServiceProvider();
  }

  async doSomething(options: AIGenerationOptions): Promise<AIServiceResult> {
    const prompt = this.buildPrompt(options);
    const response = await this.provider.complete({
      messages: [{ role: 'system', content: prompt.system },
                 { role: 'user', content: prompt.user }],
    });
    return this.parseResponse(response);
  }

  private buildPrompt(options: AIGenerationOptions) {
    // Build system + user prompts
    return { system: '...', user: '...' };
  }

  private parseResponse(response: AICompletionResponse): AIServiceResult {
    // Validate and transform response
    return { success: true, data: JSON.parse(response.content) };
  }
}
```

### Best Practices

1. **Prompt Engineering**: Write clear system prompts with examples. Store reusable prompts in the `PromptRegistry`.
2. **Error Handling**: Always wrap AI calls in try/catch. Return structured `AIServiceResult` with error details.
3. **Validation**: Use Zod schemas to validate AI responses before returning data.
4. **Streaming**: Support `stream()` for long-running operations. Provide progressive UI updates.
5. **Caching**: Use the built-in cache layer for deterministic requests.
6. **NGO Context**: Tailor prompts for non-profit messaging, donation psychology, and accessible language.

### Adding Prompts to Registry

```typescript
// In src/ai/services/prompts.ts
export const YOUR_SERVICE_SYSTEM_PROMPT = `
You are an expert NGO content strategist...
`;
```

Then register in `registerDefaultPrompts()` in `src/ai/services/prompt-registry.ts`.

## Testing

### Testing Strategy

- Unit tests for engine functions (pure functions)
- Component tests for UI components
- Integration tests for key user flows
- Accessibility tests with axe-core

### Running Tests

```bash
# Run all tests
npm test

# Run with coverage
npm test -- --coverage

# Run specific test file
npm test -- components/sections/hero
```

### Test Conventions

- Place test files next to source files: `component.test.tsx`
- Use descriptive test names: `"should add section to page config"`
- Test edge cases: empty state, error state, boundary conditions
- For AI services, mock the provider and test response parsing

### Type Checking

```bash
npm run typecheck
```

TypeScript strict mode is enabled. Run type checking before pushing.

### Linting

```bash
npm run lint
npm run format:check
```

ESLint enforces code quality rules. Prettier enforces consistent formatting. Both run automatically via lint-staged on commit.
