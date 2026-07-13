'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useCallback, type ReactNode } from 'react';

import { Badge } from '@/components/ui/atoms/badge';
import { Button } from '@/components/ui/atoms/button';
import { Image } from '@/components/ui/media/image';
import { cn } from '@/lib/utils';

import { SectionHeadingBlock, SectionWrapper, staggerItem } from '../motion';

import type { ProgramsConfig, ProgramsLayout, ProgramCard } from './config.types';

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
  if (!program.image) return null;
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={cn(
        'group flex flex-col overflow-hidden rounded-2xl bg-[var(--kindonar-surface-raised)] shadow-sm transition-all duration-300 hover:shadow-[var(--kindonar-color-primary-500)]/5 hover:shadow-xl',
        isFeatured && 'lg:col-span-2 lg:row-span-2',
      )}
    >
      <div className="relative overflow-hidden">
        <Image
          src={program.image.src}
          alt={program.image.alt}
          aspectRatio={isFeatured ? '4/3' : '16/9'}
          fit="cover"
          rounded="none"
          withSkeleton
          className="transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        {showCategoryBadges && program.category && (
          <Badge variant="primary" size="sm" className="absolute top-3 left-3">
            {program.category}
          </Badge>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-[var(--kindonar-color-neutral-900)] transition-colors duration-200 group-hover:text-[var(--kindonar-color-primary-600)]">
          {program.title}
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-[var(--kindonar-color-neutral-600)]">
          {program.description}
        </p>
        {showImpactStats && program.impactStat && (
          <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--kindonar-color-primary-600)]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--kindonar-color-primary-500)]" />
            {program.impactStat}
          </p>
        )}
        <div className="mt-4 border-t border-[var(--kindonar-border-default)] pt-3">
          <Button
            variant={program.cta.variant ?? 'link'}
            size="sm"
            rightIcon={<ArrowRight size={14} />}
            asChild
          >
            <a
              href={program.cta.href}
              target={program.cta.external ? '_blank' : undefined}
              rel={program.cta.external ? 'noopener noreferrer' : undefined}
            >
              {program.cta.label}
            </a>
          </Button>
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
          {filtered.map((program) => (
            <motion.div
              key={program.id}
              variants={staggerItem}
              className="flex flex-col overflow-hidden rounded-xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] shadow-sm transition-shadow hover:shadow-md sm:flex-row"
            >
              <div className="sm:w-56 sm:shrink-0">
                <Image
                  src={program.image.src}
                  alt={program.image.alt}
                  aspectRatio="4/3"
                  fit="cover"
                  rounded="none"
                  withSkeleton
                  className="h-full"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    {config.showCategoryBadges && program.category && (
                      <Badge variant="primary" size="sm" className="mb-2">
                        {program.category}
                      </Badge>
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
                    <span className="text-sm font-semibold text-[var(--kindonar-color-primary-600)]">
                      {program.impactStat}
                    </span>
                  )}
                  <Button
                    variant={program.cta.variant ?? 'link'}
                    size="sm"
                    rightIcon={<ArrowRight size={14} />}
                    asChild
                  >
                    <a
                      href={program.cta.href}
                      target={program.cta.external ? '_blank' : undefined}
                      rel={program.cta.external ? 'noopener noreferrer' : undefined}
                    >
                      {program.cta.label}
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
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
