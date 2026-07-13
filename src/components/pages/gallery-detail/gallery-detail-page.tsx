'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { useMemo } from 'react';

import type { GalleryLayout, GalleryImage } from '@/components/sections/gallery/config.types';
import { Gallery } from '@/components/sections/gallery/gallery';
import { cn, formatDate } from '@/lib/utils';

import { PageHero, PageLayout } from '../blocks/page-hero';
import type { PageConfig, PageHeroConfig, GalleryDetailItem } from '../page-config.types';

export interface GalleryDetailConfig extends Omit<PageConfig, 'layout'> {
  hero: PageHeroConfig;
  gallery: GalleryDetailData;
  images: GalleryDetailItem[];
  layout?: GalleryDetailLayout;
}

export interface GalleryDetailData {
  id: string;
  title: string;
  description?: string;
  coverImage?: string;
  date?: string;
  location?: string;
  imageCount?: number;
}

export type GalleryDetailLayout =
  'grid' | 'carousel' | 'lightbox' | 'featured' | 'masonry' | 'pinterest';

function mapToGalleryImage(item: GalleryDetailItem): GalleryImage {
  return {
    src: item.src,
    alt: item.alt,
    caption: item.title ?? item.description,
  };
}

export function GalleryDetailPage({ config }: { config: GalleryDetailConfig }) {
  const { gallery, images } = config;

  const galleryImages = useMemo(() => images.map(mapToGalleryImage), [images]);

  const layoutMapping: Record<string, GalleryLayout> = {
    grid: 'grid',
    carousel: 'carousel',
    lightbox: 'lightbox',
    featured: 'featured',
    masonry: 'masonry',
    pinterest: 'pinterest',
  };

  return (
    <div className={cn(config.theme === 'dark' && 'bg-[var(--kindonar-color-neutral-900)]')}>
      <PageHero config={config.hero} />

      {gallery.description && (
        <section className="border-b border-[var(--kindonar-border-default)]">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between"
            >
              <p className="max-w-2xl text-base leading-relaxed text-[var(--kindonar-color-neutral-700)]">
                {gallery.description}
              </p>
              <div className="flex shrink-0 flex-wrap gap-4 text-sm text-[var(--kindonar-color-neutral-500)]">
                {gallery.date && (
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    {formatDate(gallery.date)}
                  </span>
                )}
                {gallery.location && (
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" />
                    {gallery.location}
                  </span>
                )}
                {gallery.imageCount && (
                  <span className="font-medium text-[var(--kindonar-color-neutral-700)]">
                    {gallery.imageCount} photos
                  </span>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      <PageLayout
        layout={
          config.layout === 'carousel' || config.layout === 'featured' ? 'full-width' : 'default'
        }
      >
        <Gallery
          config={{
            id: 'gallery-detail',
            layout: layoutMapping[config.layout ?? 'lightbox'] ?? 'lightbox',
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'none',
            visible: true,
            images: galleryImages,
          }}
        />
      </PageLayout>
    </div>
  );
}
