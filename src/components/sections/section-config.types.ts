import { type ReactNode } from 'react';

/** Shared layout options for every section */
export type SectionLayout =
  | 'default'
  | 'grid'
  | 'split'
  | 'carousel'
  | 'masonry'
  | 'timeline'
  | 'center'
  | 'left'
  | 'right'
  | 'bento'
  | 'cards'
  | 'featured'
  | 'magazine'
  | 'stacked'
  | 'alternating'
  | 'floating'
  | 'pinterest';

/** Theme variant */
export type SectionTheme =
  'light' | 'dark' | 'primary' | 'secondary' | 'gradient' | 'muted' | 'transparent';

/** Background option */
export type SectionBackground = 'none' | 'solid' | 'gradient' | 'image' | 'pattern' | 'video';

/** Padding size */
export type SectionPadding = 'none' | 'small' | 'medium' | 'large' | 'xlarge';

/** Animation variant */
export type AnimationVariant =
  | 'fade'
  | 'fade-in'
  | 'fade-in-up'
  | 'fade-in-down'
  | 'fade-in-left'
  | 'fade-in-right'
  | 'scale'
  | 'scale-in'
  | 'scale-in-up'
  | 'slide-in-up'
  | 'slide-in-right'
  | 'reveal'
  | 'reveal-vertical'
  | 'blur'
  | 'blur-in'
  | 'zoom'
  | 'zoom-in'
  | 'zoom-out'
  | 'rotate'
  | 'rotate-in'
  | 'flip'
  | 'flip-in'
  | 'drop'
  | 'drop-in'
  | 'stagger'
  | 'parallax'
  | 'hero'
  | 'none';

/** CTA button style */
export type CTAVariant =
  'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'gradient' | 'donate' | 'volunteer';

/** CTA configuration */
export interface CTAConfig {
  label: string;
  href: string;
  variant?: CTAVariant;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: ReactNode;
  /** Open in new tab */
  external?: boolean;
}

/** Section heading configuration */
export interface SectionHeading {
  title: string;
  subtitle?: string;
  description?: string;
  alignment?: 'left' | 'center' | 'right';
  tag?: string;
}

/** Base section configuration that every section accepts */
export interface SectionConfig {
  /** Unique section identifier */
  id?: string;
  /** Visual layout variant */
  layout: SectionLayout;
  /** Color theme */
  theme: SectionTheme;
  /** Animation variant */
  animation: AnimationVariant;
  /** Background style */
  background: SectionBackground;
  /** Background value (color, image URL, gradient) */
  backgroundValue?: string;
  /** Padding */
  padding: SectionPadding;
  /** Whether the section is visible */
  visible: boolean;
  /** Section class name */
  className?: string;
  /** Section heading configuration */
  heading?: SectionHeading;
  /** Primary CTA */
  primaryCta?: CTAConfig;
  /** Secondary CTA */
  secondaryCta?: CTAConfig;
  /** Custom data attributes for builder */
  data?: Record<string, unknown>;
}

/** Default section config factory */
export function defaultSectionConfig(overrides?: Partial<SectionConfig>): SectionConfig {
  return {
    layout: 'default',
    theme: 'light',
    animation: 'fade',
    background: 'none',
    padding: 'large',
    visible: true,
    ...overrides,
  };
}

/** Image object used across sections */
export interface SectionImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
  focalPoint?: { x: number; y: number };
}

/** Social link */
export interface SocialLink {
  platform: 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'youtube' | 'tiktok' | 'whatsapp';
  url: string;
  label?: string;
}

/** Stat item for impact/counter sections */
export interface StatItem {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon?: ReactNode;
  duration?: number;
}

/** Team/person card */
export interface PersonCard {
  name: string;
  role?: string;
  image?: SectionImage;
  bio?: string;
  socialLinks?: SocialLink[];
}

/** Filter/Tab option */
export interface FilterOption {
  id: string;
  label: string;
  icon?: ReactNode;
}
