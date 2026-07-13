import type { SectionConfig, SectionImage, CTAConfig, SectionTheme } from '../section-config.types';

export type ProgramsLayout = 'cards' | 'carousel' | 'bento' | 'tabs' | 'filters' | 'list';

export interface ProgramCard {
  id: string;
  title: string;
  description: string;
  image: SectionImage;
  category: string;
  impactStat?: string;
  cta: CTAConfig;
  featured?: boolean;
}

export interface ProgramCategory {
  id: string;
  label: string;
}

export interface ProgramsConfig extends Omit<SectionConfig, 'layout'> {
  layout: ProgramsLayout;
  programs: ProgramCard[];
  categories?: ProgramCategory[];
  theme: SectionTheme;
  /** Number of columns for cards/grid layouts */
  columns?: 2 | 3 | 4;
  /** Autoplay interval for carousel (ms) */
  autoplayInterval?: number;
  /** Show category badges */
  showCategoryBadges?: boolean;
  /** Show impact stats */
  showImpactStats?: boolean;
}
