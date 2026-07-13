'use client';

import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';

import type {
  TestimonialsConfig,
  TestimonialItem,
} from '@/components/sections/testimonials/config.types';
import { Testimonials } from '@/components/sections/testimonials/testimonials';
import { cn } from '@/lib/utils';

import { PageHero } from '../blocks/page-hero';
import type { PageHeroConfig } from '../page-config.types';

export interface TestimonialsPageConfig {
  hero: PageHeroConfig;
  testimonials: TestimonialsConfig;
  categories?: {
    id: string;
    label: string;
    filterKey: string;
  }[];
}

function CategoryFilter({
  categories,
  selected,
  onChange,
}: {
  categories: { id: string; label: string; filterKey: string }[];
  selected: string;
  onChange: (id: string) => void;
}) {
  if (!categories.length) return null;
  return (
    <div
      className="mb-10 flex flex-wrap justify-center gap-2"
      role="tablist"
      aria-label="Testimonial categories"
    >
      <button
        type="button"
        role="tab"
        aria-selected={selected === 'all'}
        onClick={() => onChange('all')}
        className={cn(
          'rounded-full px-5 py-2 text-sm font-medium transition-all',
          selected === 'all'
            ? 'bg-[var(--kindonar-color-primary-500)] text-white shadow-sm'
            : 'bg-[var(--kindonar-surface-interactive)] text-[var(--kindonar-color-neutral-600)] hover:bg-[var(--kindonar-color-primary-100)] hover:text-[var(--kindonar-color-primary-700)]',
        )}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          type="button"
          role="tab"
          aria-selected={selected === cat.id}
          onClick={() => onChange(cat.id)}
          className={cn(
            'rounded-full px-5 py-2 text-sm font-medium transition-all',
            selected === cat.id
              ? 'bg-[var(--kindonar-color-primary-500)] text-white shadow-sm'
              : 'bg-[var(--kindonar-surface-interactive)] text-[var(--kindonar-color-neutral-600)] hover:bg-[var(--kindonar-color-primary-100)] hover:text-[var(--kindonar-color-primary-700)]',
          )}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}

export function TestimonialsPage({
  config,
  className,
}: {
  config: TestimonialsPageConfig;
  className?: string;
}) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredConfig = useMemo(() => {
    if (activeCategory === 'all' || !config.categories?.length) return config.testimonials;
    const category = config.categories.find((c) => c.id === activeCategory);
    if (!category) return config.testimonials;
    const filtered = config.testimonials.testimonials.filter((t: TestimonialItem) => {
      const tAny = t as unknown as Record<string, unknown>;
      const val = tAny[category.filterKey];
      return val === category.id || val === category.label;
    });
    return { ...config.testimonials, testimonials: filtered };
  }, [config.testimonials, config.categories, activeCategory]);

  return (
    <div className={cn(className)}>
      <PageHero config={config.hero} />
      <section className="py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {config.categories && config.categories.length > 0 && (
            <CategoryFilter
              categories={config.categories}
              selected={activeCategory}
              onChange={setActiveCategory}
            />
          )}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Testimonials config={filteredConfig} />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
