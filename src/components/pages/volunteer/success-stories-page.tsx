'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

import type { SectionImage } from '@/components/sections/section-config.types';
import { cn } from '@/lib/utils';
import { formatNumber } from '@/lib/utils';

import { PageHero } from '../blocks/page-hero';
import type { PageHeroConfig } from '../page-config.types';

export type SuccessStoriesLayout = 'grid' | 'featured-grid' | 'carousel';

export interface StoryImpact {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export interface StoryItem {
  id: string;
  name: string;
  role?: string;
  location?: string;
  quote: string;
  image: SectionImage;
  impact: StoryImpact[];
  category?: string;
}

export interface SuccessStoriesConfig {
  hero: PageHeroConfig;
  layout: SuccessStoriesLayout;
  stories: StoryItem[];
}

function StoryCard({ story, featured }: { story: StoryItem; featured?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        'group overflow-hidden rounded-2xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] transition-shadow hover:shadow-[var(--kindonar-shadow-md)]',
        featured && 'lg:grid lg:grid-cols-2',
      )}
    >
      <div className={cn('overflow-hidden', featured && 'h-full')}>
        <img
          src={story.image.src}
          alt={story.image.alt}
          className={cn(
            'h-full w-full object-cover transition-transform duration-500 group-hover:scale-105',
            featured ? 'h-64 lg:h-full' : 'h-56',
          )}
          loading="lazy"
        />
      </div>
      <div className="flex flex-col p-6 md:p-8">
        <div className="mb-4">
          <Quote className="h-8 w-8 text-[var(--kindonar-color-primary-200)]" aria-hidden="true" />
        </div>
        <blockquote className="flex-1 text-base leading-relaxed text-[var(--kindonar-color-neutral-700)] md:text-lg">
          &ldquo;{story.quote}&rdquo;
        </blockquote>
        <div className="mt-6">
          <p className="font-semibold text-[var(--kindonar-color-neutral-900)]">{story.name}</p>
          {story.role && (
            <p className="text-sm text-[var(--kindonar-color-neutral-500)]">{story.role}</p>
          )}
          {story.location && (
            <p className="text-sm text-[var(--kindonar-color-neutral-400)]">{story.location}</p>
          )}
        </div>
        {story.impact.length > 0 && (
          <div
            className={cn(
              'mt-6 grid gap-4 border-t border-[var(--kindonar-border-default)] pt-6',
              featured ? 'grid-cols-3' : 'grid-cols-2',
            )}
          >
            {story.impact.map((stat, idx) => (
              <div key={idx}>
                <p className="text-xl font-bold text-[var(--kindonar-color-primary-600)]">
                  {stat.prefix}
                  {formatNumber(stat.value)}
                  {stat.suffix}
                </p>
                <p className="text-xs text-[var(--kindonar-color-neutral-500)]">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

function StoriesGrid({ stories }: { stories: StoryItem[] }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {stories.map((story) => (
        <motion.div
          key={story.id}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          <StoryCard story={story} />
        </motion.div>
      ))}
    </motion.div>
  );
}

function StoriesFeaturedGrid({ stories }: { stories: StoryItem[] }) {
  if (stories.length === 0) return null;
  const featured = stories[0];
  const rest = stories.slice(1);

  return (
    <div className="space-y-8">
      {featured && <StoryCard story={featured} featured />}
      {rest.length > 0 && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {rest.map((story) => (
            <motion.div
              key={story.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <StoryCard story={story} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}

function StoriesCarousel({ stories }: { stories: StoryItem[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ delay: 6000, stopOnInteraction: true }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    requestAnimationFrame(() => {
      setScrollSnaps(emblaApi.scrollSnapList());
      onSelect();
    });
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      <div
        ref={emblaRef}
        className="overflow-hidden"
        role="region"
        aria-label="Success stories carousel"
        aria-roledescription="carousel"
      >
        <div className="flex">
          {stories.map((story) => (
            <div
              key={story.id}
              className="min-w-0 flex-[0_0_100%] pl-4 first:pl-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%]"
              role="group"
              aria-roledescription="slide"
              aria-label={`Story ${stories.indexOf(story) + 1} of ${stories.length}`}
            >
              <StoryCard story={story} />
            </div>
          ))}
        </div>
      </div>
      {stories.length > 3 && (
        <>
          <button
            type="button"
            onClick={scrollPrev}
            className="absolute top-1/2 -left-3 -translate-y-1/2 rounded-full bg-[var(--kindonar-surface-raised)] p-2 shadow-[var(--kindonar-shadow-md)] transition-colors hover:bg-[var(--kindonar-surface-interactive)]"
            aria-label="Previous stories"
          >
            <ChevronLeft className="h-5 w-5 text-[var(--kindonar-color-neutral-600)]" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className="absolute top-1/2 -right-3 -translate-y-1/2 rounded-full bg-[var(--kindonar-surface-raised)] p-2 shadow-[var(--kindonar-shadow-md)] transition-colors hover:bg-[var(--kindonar-surface-interactive)]"
            aria-label="Next stories"
          >
            <ChevronRight className="h-5 w-5 text-[var(--kindonar-color-neutral-600)]" />
          </button>
          <div
            className="mt-8 flex justify-center gap-2"
            role="tablist"
            aria-label="Story navigation"
          >
            {scrollSnaps.map((_, idx) => (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={idx === selectedIndex}
                aria-label={`Go to story group ${idx + 1}`}
                onClick={() => scrollTo(idx)}
                className={cn(
                  'h-2.5 rounded-full transition-all duration-300',
                  idx === selectedIndex
                    ? 'w-8 bg-[var(--kindonar-color-primary-500)]'
                    : 'w-2.5 bg-[var(--kindonar-color-neutral-300)] hover:bg-[var(--kindonar-color-neutral-400)]',
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function SuccessStoriesPage({
  config,
  className,
}: {
  config: SuccessStoriesConfig;
  className?: string;
}) {
  const renderLayout = () => {
    switch (config.layout) {
      case 'featured-grid':
        return <StoriesFeaturedGrid stories={config.stories} />;
      case 'carousel':
        return <StoriesCarousel stories={config.stories} />;
      default:
        return <StoriesGrid stories={config.stories} />;
    }
  };

  return (
    <div className={cn(className)}>
      <PageHero config={config.hero} />
      <section className="py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{renderLayout()}</div>
      </section>
    </div>
  );
}
