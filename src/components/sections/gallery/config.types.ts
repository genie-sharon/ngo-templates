import { type SectionConfig } from '../section-config.types';

export type GalleryLayout = 'grid' | 'masonry' | 'carousel' | 'lightbox' | 'pinterest' | 'featured';

export interface GalleryImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
}

export interface GalleryConfig extends Omit<SectionConfig, 'layout'> {
  layout: GalleryLayout;
  images: GalleryImage[];
}
