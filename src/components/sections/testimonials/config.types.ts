import { type SectionImage, type SectionConfig } from '../section-config.types';

export type TestimonialsLayout =
  'carousel' | 'cards' | 'grid' | 'video' | 'large-quote' | 'stacked';

export interface TestimonialItem {
  quote: string;
  name: string;
  role?: string;
  organization?: string;
  avatar?: SectionImage;
  rating?: number;
  videoUrl?: string;
}

export interface TestimonialsConfig extends Omit<SectionConfig, 'layout'> {
  layout: TestimonialsLayout;
  testimonials: TestimonialItem[];
}
