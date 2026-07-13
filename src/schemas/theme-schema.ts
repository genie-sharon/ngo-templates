import { z } from 'zod/v3';

export const colorShadeSchema = z.object({
  50: z.string(),
  100: z.string(),
  200: z.string(),
  300: z.string(),
  400: z.string(),
  500: z.string(),
  600: z.string(),
  700: z.string(),
  800: z.string(),
  900: z.string(),
  950: z.string(),
});

export const colorTokensSchema = z.object({
  primary: colorShadeSchema,
  secondary: colorShadeSchema,
  accent: colorShadeSchema,
  neutral: colorShadeSchema,
  success: colorShadeSchema,
  warning: colorShadeSchema,
  error: colorShadeSchema,
  info: colorShadeSchema,
});

export const surfaceTokensSchema = z.object({
  base: z.string(),
  raised: z.string(),
  overlay: z.string(),
  inverse: z.string(),
  interactive: z.string(),
  selected: z.string(),
  disabled: z.string(),
  background: z.object({
    primary: z.string(),
    secondary: z.string(),
  }),
});

export const borderTokensSchema = z.object({
  default: z.string(),
  strong: z.string(),
  focus: z.string(),
  error: z.string(),
  selected: z.string(),
});

export const typographySchema = z.object({
  fontFamily: z.object({
    body: z.string(),
    heading: z.string(),
    mono: z.string(),
  }),
});

export const designTokensSchema = z.object({
  color: colorTokensSchema,
  surface: surfaceTokensSchema,
  border: borderTokensSchema,
});

export const themeMetaSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  mood: z.string(),
  bestFor: z.array(z.string()),
  colorMode: z.enum(['light', 'dark']),
});

export const themeSchema = z.object({
  meta: themeMetaSchema,
  tokens: designTokensSchema.partial(),
});
