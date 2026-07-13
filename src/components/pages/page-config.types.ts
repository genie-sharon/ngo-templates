import type {
  CTAConfig,
  SectionImage,
  StatItem,
  PersonCard,
  FilterOption,
} from '@/components/sections/section-config.types';

/** Shared page-level configuration */
export interface PageConfig {
  /** Page metadata */
  metadata: PageMetadata;
  /** Breadcrumb trail */
  breadcrumbs?: BreadcrumbItem[];
  /** Page layout variant */
  layout?: PageLayout;
  /** Theme */
  theme?: PageTheme;
}

export interface PageMetadata {
  title: string;
  description: string;
  ogImage?: string;
  keywords?: string[];
  noIndex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export type PageLayout =
  'default' | 'full-width' | 'sidebar-left' | 'sidebar-right' | 'narrow' | 'wide';

export type PageTheme = 'light' | 'dark' | 'primary' | 'muted';

/** Page hero configuration (different from section Hero) */
export interface PageHeroConfig {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  backgroundOverlay?: boolean;
  size?: 'small' | 'medium' | 'large' | 'full';
  alignment?: 'left' | 'center';
  breadcrumbs?: BreadcrumbItem[];
  cta?: CTAConfig;
  secondaryCta?: CTAConfig;
}

/** Content section block */
export interface ContentBlock {
  type: ContentBlockType;
  title?: string;
  subtitle?: string;
  body?: string;
  image?: SectionImage;
  cta?: CTAConfig;
  stats?: StatItem[];
  items?: Record<string, unknown>[];
  /** For tabbed/filtered content */
  tabs?: FilterOption[];
  /** Two-column content */
  columns?: { title?: string; body: string; image?: SectionImage }[];
}

export type ContentBlockType =
  | 'text'
  | 'image-text'
  | 'stats'
  | 'cards'
  | 'tabs'
  | 'accordion'
  | 'gallery'
  | 'video'
  | 'cta'
  | 'form'
  | 'timeline'
  | 'team-grid'
  | 'logo-grid'
  | 'testimonials'
  | 'downloads'
  | 'faq'
  | 'steps';

/** Tab item */
export interface TabItem {
  id: string;
  label: string;
  content: string;
  image?: string;
}

/** FAQ item */
export interface FAQItem {
  question: string;
  answer: string;
}

/** Team member */
export interface TeamMember extends PersonCard {
  department?: string;
}

/** Download resource */
export interface DownloadItem {
  title: string;
  description?: string;
  fileUrl: string;
  fileSize?: string;
  fileType?: string;
  coverImage?: string;
  year?: string;
}

/** Campaign */
export interface CampaignItem {
  id: string;
  title: string;
  description: string;
  image: SectionImage;
  goal: number;
  raised: number;
  donors?: number;
  endDate?: string;
  category?: string;
  cta?: CTAConfig;
}

/** Event */
export interface EventItem {
  id: string;
  title: string;
  description: string;
  date: string;
  time?: string;
  location?: string;
  image?: SectionImage;
  category?: string;
  cta?: CTAConfig;
}

/** Program */
export interface ProgramItem {
  id: string;
  title: string;
  description: string;
  image?: SectionImage;
  category?: string;
  impact?: string;
  beneficiaries?: number;
  cta?: CTAConfig;
  features?: string[];
}

/** Gallery item for detail pages */
export interface GalleryDetailItem {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  date?: string;
  location?: string;
}

/** Blog/News post */
export interface PostItem {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  image: SectionImage;
  date: string;
  author: { name: string; avatar?: string; role?: string };
  category: string;
  tags?: string[];
  slug: string;
}
