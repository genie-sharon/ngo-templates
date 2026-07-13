# Kindonar Coding Standards

## Naming Conventions

| Category | Convention | Example |
|----------|-----------|---------|
| Components | PascalCase | `Button`, `HeroSection` |
| Hooks | camelCase with `use` prefix | `useIntersectionObserver` |
| Utilities | camelCase | `formatCurrency`, `slugify` |
| Types/Interfaces | PascalCase | `SectionConfig`, `ThemeTokens` |
| TypeScript files | camelCase | `button.tsx`, `use-counter.ts` |
| Constants | UPPER_SNAKE_CASE | `BREAKPOINTS`, `SITE_NAME` |
| CSS custom props | --kindonar-kebab-case | `--kindonar-color-primary-500` |
| Folders | kebab-case | `use-counter`, `hero-section` |

## Component Structure

Every component should follow this pattern:

```tsx
// 1. Imports (grouped: builtin → external → internal)
import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

// 2. Types (co-located or imported)
interface ComponentProps {
  /** JSDoc description */
  children?: ReactNode;
  className?: string;
}

// 3. Component
export function Component({ children, className }: ComponentProps) {
  return <div className={cn('base-styles', className)}>{children}</div>;
}
```

## TypeScript Rules

1. `strict: true` in tsconfig — no exceptions
2. Prefer `type` over `interface` for props
3. Use `interface` for objects that may be extended
4. Always type function return values when non-trivial
5. Use `as const` for literal types and constants
6. Avoid `any` — use `unknown` and type guards
7. Use `satisfies` for type validation without widening

## Import Ordering

```tsx
// 1. Node builtins
import { fileURLToPath } from 'node:url';

// 2. External packages (alphabetized)
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import Link from 'next/link';

// 3. Internal aliases (alphabetized)
import { cn } from '@/lib/utils';
import type { SectionConfig } from '@/types';
import { useIntersectionObserver } from '@/hooks';

// 4. Relative imports
import { styles } from './styles';
```

## Component Conventions

1. One component per file (except small tightly-coupled components)
2. Props interface named `{ComponentName}Props`
3. Default export for pages only — named exports for components
4. Server components by default — add `'use client'` only when needed
5. All interactive elements need keyboard and screen reader support
6. Loading, empty, error, and disabled states for all stateful components
