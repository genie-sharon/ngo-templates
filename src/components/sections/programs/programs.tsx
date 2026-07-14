'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Users, Heart, Droplets, GraduationCap, Utensils, Building2, Shield, Stethoscope, Leaf } from 'lucide-react';
import { useState, useCallback, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

import { SectionHeadingBlock, SectionWrapper, staggerItem } from '../motion';

import type { ProgramsConfig, ProgramsLayout, ProgramCard } from './config.types';

const CATEGORY_IMAGES: Record<string, string[]> = {
  Healthcare: [
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80',
    'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80',
  ],
  Health: [
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80',
  ],
  Education: [
    'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80',
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
  ],
  Protection: [
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
    'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80',
  ],
  WASH: [
    'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80',
    'https://images.unsplash.com/photo-1541959833400-049d37f98ccd?w=800&q=80',
  ],
  Relief: [
    'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80',
    'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80',
    'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80',
  ],
  Empowerment: [
    'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
  ],
  'Food Security': [
    'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80',
    'https://images.unsplash.com/photo-1542601906990-b4d3fb082b14?w=800&q=80',
  ],
  Nutrition: [
    'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80',
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
  ],
  Climate: [
    'https://images.unsplash.com/photo-1542601906990-b4d3fb082b14?w=800&q=80',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
  ],
  'Emergency Healthcare': [
    'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80',
    'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80',
  ],
  Livelihood: [
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
    'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
  ],
  'Women Empowerment': [
    'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
  ],
  'Child Protection': [
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
    'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80',
  ],
  'Disaster Relief': [
    'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80',
    'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80',
  ],
};

const CATEGORY_COLORS: Record<string, { badge: string; chip: string }> = {
  Healthcare: { badge: 'bg-emerald-500', chip: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300' },
  Health: { badge: 'bg-emerald-500', chip: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300' },
  Education: { badge: 'bg-blue-500', chip: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300' },
  Protection: { badge: 'bg-indigo-500', chip: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300' },
  WASH: { badge: 'bg-cyan-500', chip: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300' },
  Relief: { badge: 'bg-orange-500', chip: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300' },
  Empowerment: { badge: 'bg-violet-500', chip: 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300' },
  'Food Security': { badge: 'bg-amber-500', chip: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300' },
  Nutrition: { badge: 'bg-yellow-500', chip: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300' },
  Climate: { badge: 'bg-emerald-600', chip: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300' },
  'Emergency Healthcare': { badge: 'bg-red-500', chip: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300' },
  Livelihood: { badge: 'bg-teal-500', chip: 'bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300' },
  'Women Empowerment': { badge: 'bg-pink-500', chip: 'bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300' },
  'Child Protection': { badge: 'bg-rose-500', chip: 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300' },
  'Disaster Relief': { badge: 'bg-orange-500', chip: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300' },
};

function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}

function getProgramImage(program: ProgramCard): { src: string; alt: string } {
  const src = program.image?.src;
  const alt = program.image?.alt || program.title;

  if (src && !src.startsWith('/images/')) {
    return { src, alt };
  }

  const images = CATEGORY_IMAGES[program.category] || CATEGORY_IMAGES['Healthcare'];
  if (images && images.length > 0) {
    const idx = Math.abs(hashCode(program.title)) % images.length;
    return { src: images[idx] ?? images[0]!, alt };
  }

  return {
    src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80',
    alt,
  };
}

function getCategoryColors(category: string): { badge: string; chip: string } {
  return CATEGORY_COLORS[category] || { badge: 'bg-blue-500', chip: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300' };
}

function getProgramHref(program: ProgramCard): string {
  const base = program.cta.href.replace(/\/program-detail$/, '');
  return `${base}/programs/${program.id}`;
}

function ProgramImage({ src, alt, priority = false, className }: { src: string; alt: string; priority?: boolean; className?: string }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={cn('flex items-center justify-center bg-neutral-200 dark:bg-neutral-800', className)}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-neutral-400" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
          <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      onError={() => setError(true)}
      className={cn('h-full w-full object-cover', className)}
    />
  );
}

function ImpactIcon({ category }: { category: string }) {
  const iconClass = 'h-3.5 w-3.5 shrink-0';
  switch (category.toLowerCase()) {
    case 'healthcare': case 'health': case 'nutrition': return <Heart className={iconClass} />;
    case 'education': return <GraduationCap className={iconClass} />;
    case 'protection': return <Shield className={iconClass} />;
    case 'wash': return <Droplets className={iconClass} />;
    case 'relief': case 'disaster relief': return <Building2 className={iconClass} />;
    case 'empowerment': case 'women empowerment': case 'livelihood': return <Users className={iconClass} />;
    case 'food security': return <Utensils className={iconClass} />;
    case 'climate': return <Leaf className={iconClass} />;
    case 'emergency healthcare': return <Stethoscope className={iconClass} />;
    default: return <Heart className={iconClass} />;
  }
}

function ProgramCardView({
  program,
  showCategoryBadges,
  showImpactStats,
  isFeatured,
}: {
  program: ProgramCard;
  showCategoryBadges?: boolean;
  showImpactStats?: boolean;
  isFeatured?: boolean;
}) {
  const img = getProgramImage(program);
  const colors = getCategoryColors(program.category);
  const href = getProgramHref(program);

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-[20px] bg-[var(--kindonar-surface-raised)] shadow-sm transition-all duration-300 hover:shadow-xl border border-[var(--kindonar-border-default)]/50',
        isFeatured && 'lg:col-span-2 lg:row-span-2',
      )}
    >
      <a
        href={href}
        className={cn(
          'relative w-full overflow-hidden',
          isFeatured ? 'h-[280px] md:h-[320px] lg:h-[400px]' : 'h-[200px] md:h-[220px] lg:h-[280px]',
        )}
        tabIndex={-1}
      >
        <ProgramImage
          src={img.src}
          alt={img.alt}
          priority={!!isFeatured}
          className="transition-transform duration-700 group-hover:scale-106"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {showCategoryBadges && program.category && (
          <span className={cn('absolute top-3 left-3 z-10 inline-block rounded-full px-3 py-1 text-xs font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl', colors.badge)}>
            {program.category}
          </span>
        )}
      </a>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="text-lg font-semibold text-[var(--kindonar-color-neutral-900)] transition-colors duration-200 group-hover:text-[var(--kindonar-color-primary-600)] line-clamp-2">
          {program.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-[var(--kindonar-color-neutral-600)]">
          {program.description}
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {showImpactStats && program.impactStat && (
            <span className={cn('inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold transition-all duration-300 group-hover:scale-105', colors.chip)}>
              <ImpactIcon category={program.category} />
              {program.impactStat}
            </span>
          )}
        </div>
        <div className="mt-4 flex items-center">
          <a
            href={href}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--kindonar-color-primary-600)] transition-all duration-300 hover:text-[var(--kindonar-color-primary-700)] group/btn"
          >
            {program.cta.label}
            <ArrowRight
              size={14}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover/btn:translate-x-1"
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function CardsLayout({ programs, config }: { programs: ProgramCard[]; config: ProgramsConfig }) {
  const safePrograms = Array.isArray(programs) ? programs : [];
  const cols =
    config.columns === 2
      ? 'sm:grid-cols-2'
      : config.columns === 4
        ? 'sm:grid-cols-2 lg:grid-cols-4'
        : 'sm:grid-cols-2 lg:grid-cols-3';
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
      className={cn('grid grid-cols-1 gap-6', cols)}
    >
      {safePrograms.map((program) => (
        <ProgramCardView
          key={program.id}
          program={program}
          showCategoryBadges={config.showCategoryBadges}
          showImpactStats={config.showImpactStats}
        />
      ))}
    </motion.div>
  );
}

function CarouselLayout({ programs, config }: { programs: ProgramCard[]; config: ProgramsConfig }) {
  const safePrograms = Array.isArray(programs) ? programs : [];
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: 'start',
      loop: true,
      breakpoints: {
        '(min-width: 768px)': { slidesToScroll: 2 },
        '(min-width: 1024px)': { slidesToScroll: 3 },
      },
    },
    config.autoplayInterval
      ? [Autoplay({ delay: config.autoplayInterval, stopOnInteraction: true })]
      : [],
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {safePrograms.map((program) => (
            <div
              key={program.id}
              className="min-w-0 flex-[0_0_100%] pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >
              <ProgramCardView
                program={program}
                showCategoryBadges={config.showCategoryBadges}
                showImpactStats={config.showImpactStats}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex justify-center gap-3">
        <button
          type="button"
          onClick={scrollPrev}
          aria-label="Previous slide"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] text-[var(--kindonar-color-neutral-600)] transition-colors hover:bg-[var(--kindonar-surface-interactive)]"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={scrollNext}
          aria-label="Next slide"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] text-[var(--kindonar-color-neutral-600)] transition-colors hover:bg-[var(--kindonar-surface-interactive)]"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

function BentoLayout({ programs, config }: { programs: ProgramCard[]; config: ProgramsConfig }) {
  const safePrograms = Array.isArray(programs) ? programs : [];
  const featured = safePrograms.filter((p) => p.featured);
  const standard = safePrograms.filter((p) => !p.featured);
  const firstFeatured = featured[0];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
      className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
    >
      {firstFeatured && (
        <div className="md:col-span-2 md:row-span-2">
          <ProgramCardView
            program={firstFeatured}
            showCategoryBadges={config.showCategoryBadges}
            showImpactStats={config.showImpactStats}
            isFeatured
          />
        </div>
      )}
      {standard.slice(0, 4).map((program) => (
        <ProgramCardView
          key={program.id}
          program={program}
          showCategoryBadges={config.showCategoryBadges}
          showImpactStats={config.showImpactStats}
        />
      ))}
    </motion.div>
  );
}

function TabsLayout({ programs, config }: { programs: ProgramCard[]; config: ProgramsConfig }) {
  const safePrograms = Array.isArray(programs) ? programs : [];
  const categories = config.categories ?? [];
  const allLabel = 'All';
  const tabs = [{ id: 'all', label: allLabel }, ...categories];
  const [activeTab, setActiveTab] = useState('all');

  const filtered =
    activeTab === 'all' ? safePrograms : safePrograms.filter((p) => p.category === activeTab);

  return (
    <div>
      <div role="tablist" aria-label="Program categories" className="mb-8 flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'rounded-full px-5 py-2 text-sm font-medium transition-colors',
              activeTab === tab.id
                ? 'bg-[var(--kindonar-color-primary-500)] text-white'
                : 'bg-[var(--kindonar-surface-interactive)] text-[var(--kindonar-color-neutral-600)] hover:bg-[var(--kindonar-color-primary-100)] hover:text-[var(--kindonar-color-primary-700)]',
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className={cn(
            'grid grid-cols-1 gap-6',
            config.columns === 2
              ? 'sm:grid-cols-2'
              : config.columns === 4
                ? 'sm:grid-cols-2 lg:grid-cols-4'
                : 'sm:grid-cols-2 lg:grid-cols-3',
          )}
        >
          {filtered.map((program) => (
            <ProgramCardView
              key={program.id}
              program={program}
              showCategoryBadges={config.showCategoryBadges}
              showImpactStats={config.showImpactStats}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function FiltersLayout({ programs, config }: { programs: ProgramCard[]; config: ProgramsConfig }) {
  const safePrograms = Array.isArray(programs) ? programs : [];
  const categories = config.categories ?? [];
  const allFilter = { id: 'all', label: 'All Programs' };
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered =
    activeFilter === 'all' ? safePrograms : safePrograms.filter((p) => p.category === activeFilter);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter programs">
        {[allFilter, ...categories].map((filter) => (
          <button
            key={filter.id}
            type="button"
            onClick={() => setActiveFilter(filter.id)}
            aria-pressed={activeFilter === filter.id}
            className={cn(
              'rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
              activeFilter === filter.id
                ? 'border-[var(--kindonar-color-primary-500)] bg-[var(--kindonar-color-primary-500)] text-white'
                : 'border-[var(--kindonar-border-default)] text-[var(--kindonar-color-neutral-600)] hover:border-[var(--kindonar-color-primary-300)] hover:text-[var(--kindonar-color-primary-600)]',
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className={cn(
            'grid grid-cols-1 gap-6',
            config.columns === 2
              ? 'sm:grid-cols-2'
              : config.columns === 4
                ? 'sm:grid-cols-2 lg:grid-cols-4'
                : 'sm:grid-cols-2 lg:grid-cols-3',
          )}
        >
          {filtered.map((program) => (
            <ProgramCardView
              key={program.id}
              program={program}
              showCategoryBadges={config.showCategoryBadges}
              showImpactStats={config.showImpactStats}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function ListLayout({ programs, config }: { programs: ProgramCard[]; config: ProgramsConfig }) {
  const safePrograms = Array.isArray(programs) ? programs : [];
  const categories = config.categories ?? [];
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered =
    activeCategory === 'all'
      ? safePrograms
      : safePrograms.filter((p) => p.category === activeCategory);

  return (
    <div>
      <div className="mb-8 overflow-x-auto pb-2" role="group" aria-label="Category">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            aria-pressed={activeCategory === 'all'}
            className={cn(
              'rounded-full px-4 py-1.5 text-sm font-medium whitespace-nowrap transition-colors',
              activeCategory === 'all'
                ? 'bg-[var(--kindonar-color-primary-500)] text-white'
                : 'bg-[var(--kindonar-surface-interactive)] text-[var(--kindonar-color-neutral-600)] hover:bg-[var(--kindonar-color-primary-100)] hover:text-[var(--kindonar-color-primary-700)]',
            )}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              aria-pressed={activeCategory === cat.id}
              className={cn(
                'rounded-full px-4 py-1.5 text-sm font-medium whitespace-nowrap transition-colors',
                activeCategory === cat.id
                  ? 'bg-[var(--kindonar-color-primary-500)] text-white'
                  : 'bg-[var(--kindonar-surface-interactive)] text-[var(--kindonar-color-neutral-600)] hover:bg-[var(--kindonar-color-primary-100)] hover:text-[var(--kindonar-color-primary-700)]',
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
          }}
          className="space-y-4"
        >
          {filtered.map((program) => {
            const img = getProgramImage(program);
            const colors = getCategoryColors(program.category);
            const href = getProgramHref(program);
            return (
              <motion.div
                key={program.id}
                variants={staggerItem}
                className="group flex flex-col overflow-hidden rounded-[20px] border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] shadow-sm transition-shadow hover:shadow-md sm:flex-row"
              >
                <a href={href} className="sm:w-56 sm:shrink-0 relative overflow-hidden" tabIndex={-1}>
                  <ProgramImage
                    src={img.src}
                    alt={img.alt}
                    className="h-full transition-transform duration-500 group-hover:scale-106"
                  />
                </a>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      {config.showCategoryBadges && program.category && (
                        <span className={cn('mb-2 inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold text-white', colors.badge)}>
                          {program.category}
                        </span>
                      )}
                      <h3 className="text-lg font-semibold text-[var(--kindonar-color-neutral-900)]">
                        {program.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-2 flex-1 text-sm text-[var(--kindonar-color-neutral-600)]">
                    {program.description}
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    {config.showImpactStats && program.impactStat && (
                      <span className={cn('inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold', colors.chip)}>
                        <ImpactIcon category={program.category} />
                        {program.impactStat}
                      </span>
                    )}
                    <a
                      href={href}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--kindonar-color-primary-600)] transition-all duration-300 hover:text-[var(--kindonar-color-primary-700)] group/btn"
                    >
                      {program.cta.label}
                      <ArrowRight
                        size={14}
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover/btn:translate-x-1"
                      />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

const layoutComponents: Record<
  ProgramsLayout,
  (props: { programs: ProgramCard[]; config: ProgramsConfig }) => ReactNode
> = {
  cards: CardsLayout,
  carousel: CarouselLayout,
  bento: BentoLayout,
  tabs: TabsLayout,
  filters: FiltersLayout,
  list: ListLayout,
};

function ProgramsLayoutRenderer({ config }: { config: ProgramsConfig }) {
  const safePrograms = Array.isArray(config.programs) ? config.programs : [];
  const Component = layoutComponents[config.layout];
  if (!Component) return null;
  return <Component programs={safePrograms} config={config} />;
}

export function Programs({ config }: { config: ProgramsConfig }) {
  if (!config) return null;
  if (!config.visible) return null;

  return (
    <SectionWrapper config={config}>
      <SectionHeadingBlock heading={config.heading} theme={config.theme} />
      <ProgramsLayoutRenderer config={config} />
    </SectionWrapper>
  );
}
