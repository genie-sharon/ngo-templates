import { z } from 'zod/v3';

export const visibilitySchema = z.object({
  desktop: z.boolean().default(true),
  tablet: z.boolean().default(true),
  mobile: z.boolean().default(true),
});

export const animationConfigSchema = z.object({
  enabled: z.boolean().default(true),
  type: z
    .enum([
      'fade',
      'fade-in',
      'fade-in-up',
      'fade-in-down',
      'fade-in-left',
      'fade-in-right',
      'scale',
      'scale-in',
      'scale-in-up',
      'slide-in-up',
      'slide-in-right',
      'reveal',
      'reveal-vertical',
      'blur',
      'blur-in',
      'zoom',
      'zoom-in',
      'zoom-out',
      'rotate',
      'rotate-in',
      'flip',
      'flip-in',
      'drop',
      'drop-in',
      'stagger',
      'parallax',
      'hero',
      'none',
    ])
    .default('fade-in-up'),
  delay: z.number().min(0).max(3000).default(0),
  duration: z.number().min(100).max(3000).default(400),
  stagger: z.boolean().optional(),
  staggerDelay: z.number().optional(),
});

export const themeOverridesSchema = z.object({
  colors: z.record(z.string()).optional(),
  typography: z.record(z.string()).optional(),
  spacing: z.record(z.string()).optional(),
});

export const responsiveOverridesSchema = z.object({
  mobile: z.record(z.union([z.string(), z.number(), z.boolean()])).optional(),
  tablet: z.record(z.union([z.string(), z.number(), z.boolean()])).optional(),
  desktop: z.record(z.union([z.string(), z.number(), z.boolean()])).optional(),
});

export const sectionConfigSchema = z.object({
  id: z.string().min(1),
  type: z.enum([
    'hero',
    'navigation',
    'about',
    'stats',
    'programs',
    'testimonials',
    'gallery',
    'news',
    'cta',
    'footer',
    'partners',
    'team',
    'timeline',
    'faq',
    'events',
    'contact',
    'donation',
    'volunteer',
    'campaign',
    'newsletter',
    'custom',
  ]),
  layout: z.string().default('default'),
  visibility: visibilitySchema.default({ desktop: true, tablet: true, mobile: true }),
  theme: themeOverridesSchema.default({}),
  content: z.record(z.unknown()).default({}),
  animations: animationConfigSchema.default({
    enabled: true,
    type: 'fade-in-up',
    delay: 0,
    duration: 400,
  }),
  responsive: responsiveOverridesSchema.default({}),
  order: z.number().int().min(0).default(0),
  cssClass: z.string().optional(),
  customAttributes: z.record(z.string()).optional(),
});

export const buttonConfigSchema = z.object({
  text: z.string().min(1),
  href: z.string(),
  variant: z.enum(['primary', 'secondary', 'ghost', 'outline']).default('primary'),
  size: z.enum(['sm', 'md', 'lg']).default('md'),
  icon: z.string().optional(),
  iconPosition: z.enum(['left', 'right']).optional(),
  target: z.enum(['_self', '_blank']).default('_self'),
});

export const mediaImageSchema = z.object({
  src: z.string().url(),
  alt: z.string(),
  width: z.number().optional(),
  height: z.number().optional(),
  caption: z.string().optional(),
});

export const statItemSchema = z.object({
  value: z.number().positive(),
  suffix: z.string().optional(),
  prefix: z.string().optional(),
  label: z.string().min(1),
  icon: z.string().optional(),
});

export const testimonialItemSchema = z.object({
  id: z.string(),
  quote: z.string().min(1),
  name: z.string().min(1),
  designation: z.string().optional(),
  organization: z.string().optional(),
  photo: mediaImageSchema.optional(),
  rating: z.number().min(1).max(5).optional(),
});

export const programCardSchema = z.object({
  id: z.string(),
  title: z.string().min(1),
  description: z.string(),
  image: mediaImageSchema,
  cta: buttonConfigSchema,
  category: z.string().optional(),
});
