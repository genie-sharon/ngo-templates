import type { ReactNode } from 'react';

import type { SectionConfig, SectionImage, StatItem } from '../section-config.types';

export type AboutLayoutVariant = 'story' | 'split' | 'timeline' | 'gallery' | 'video';

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
  image?: SectionImage;
}

export interface AboutGalleryItem {
  image: SectionImage;
}

export interface MissionVisionItem {
  title: string;
  description: string;
  icon?: ReactNode;
}

export interface CeoMessage {
  name: string;
  role?: string;
  photo?: SectionImage;
  message: string;
  quote?: string;
}

export interface AboutConfig extends SectionConfig {
  variant: AboutLayoutVariant;
  body?: string[];
  mission?: string;
  vision?: string;
  values?: MissionVisionItem[];
  ceo?: CeoMessage;
  stats?: StatItem[];
  timeline?: TimelineEntry[];
  gallery?: AboutGalleryItem[];
  videoUrl?: string;
  image?: SectionImage;
  secondaryImage?: SectionImage;
}
