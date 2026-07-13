import type { ReactNode } from 'react';

import type { SectionConfig, CTAConfig, SectionImage, StatItem } from '../section-config.types';

export type HeroLayout =
  'image' | 'video' | 'carousel' | 'split' | 'center' | 'left' | 'right' | 'illustration';

export interface HeroSlide {
  id: string;
  heading: string;
  subtitle?: string;
  description?: string;
  image: SectionImage;
  primaryCta?: CTAConfig;
  secondaryCta?: CTAConfig;
}

export interface TrustBadge {
  src: string;
  alt: string;
  name?: string;
  width?: number;
  height?: number;
}

export interface FloatingStatCard {
  label: string;
  value: string;
  icon?: ReactNode;
}

export interface DecorativeShape {
  type: 'circle' | 'blob' | 'dots' | 'wave';
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  color?: string;
  size?: 'sm' | 'md' | 'lg';
}

export interface HeroConfig extends Omit<SectionConfig, 'layout'> {
  layout: HeroLayout;
  heading: {
    title: string;
    subtitle?: string;
    description?: string;
    tag?: string;
  };
  backgroundImage?: SectionImage;
  backgroundVideo?: {
    src: string;
    poster?: string;
    type?: string;
  };
  slides?: HeroSlide[];
  stats?: StatItem[];
  trustBadges?: TrustBadge[];
  floatingStats?: FloatingStatCard[];
  showScrollIndicator?: boolean;
  decorativeShapes?: DecorativeShape[];
  imagePosition?: 'left' | 'right';
  illustration?: SectionImage;
  fullHeight?: boolean;
  overlayOpacity?: number;
  overlayGradient?: string;
  imageBlendMode?: string;
  contentWidth?: 'full' | 'two-thirds' | 'three-quarters';
}
