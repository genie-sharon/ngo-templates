import type { SectionHeading } from '../section-config.types';

export interface NewsAuthor {
  name: string;
  avatar?: string;
}

export interface NewsArticle {
  title: string;
  slug: string;
  image?: string;
  date: string;
  category: string;
  excerpt: string;
  author?: NewsAuthor;
}

export interface NewsConfig {
  heading?: SectionHeading | string;
  subtitle?: string;
  description?: string;
  tag?: string;
  articles: NewsArticle[];
  layout: 'cards' | 'featured' | 'magazine' | 'grid' | 'timeline' | 'carousel';
  showCategories?: boolean;
  showAuthor?: boolean;
  maxColumns?: 2 | 3 | 4;
  linkTarget?: string;
}
