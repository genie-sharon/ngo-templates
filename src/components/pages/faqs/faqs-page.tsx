'use client';

import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { useState, useMemo } from 'react';

import { Accordion } from '@/components/ui/data-display/accordion';
import { cn } from '@/lib/utils';

import { PageHero, PageLayout } from '../blocks/page-hero';
import type { PageConfig, PageHeroConfig, FAQItem } from '../page-config.types';

export interface FAQCategory {
  id: string;
  label: string;
  description?: string;
  items: FAQItem[];
}

export interface FAQsPageConfig extends PageConfig {
  hero: PageHeroConfig;
  title?: string;
  description?: string;
  categories: FAQCategory[];
}

export function FAQsPage({ config }: { config: FAQsPageConfig }) {
  const [activeCategory, setActiveCategory] = useState<string>(config.categories[0]?.id || '');
  const [searchQuery, setSearchQuery] = useState('');

  const activeCategoryData = config.categories.find((c) => c.id === activeCategory);

  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) {
      return activeCategoryData?.items || [];
    }
    const q = searchQuery.toLowerCase();
    return (activeCategoryData?.items || []).filter(
      (item) => item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q),
    );
  }, [searchQuery, activeCategoryData]);

  return (
    <div>
      <PageHero config={config.hero} />
      <PageLayout layout="default">
        {config.description && (
          <p className="mb-8 max-w-3xl text-lg leading-relaxed text-[var(--kindonar-color-neutral-600)]">
            {config.description}
          </p>
        )}

        <div className="relative mb-8 max-w-md">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-[var(--kindonar-color-neutral-400)]">
            <Search className="h-5 w-5" />
          </div>
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQs..."
            aria-label="Search frequently asked questions"
            className="w-full rounded-lg border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] py-3 pr-4 pl-10 text-sm text-[var(--kindonar-color-neutral-900)] placeholder:text-[var(--kindonar-color-neutral-400)] focus-visible:ring-2 focus-visible:ring-[var(--kindonar-border-focus)] focus-visible:outline-none"
          />
        </div>

        <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="FAQ categories">
          {config.categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              type="button"
              aria-selected={activeCategory === cat.id}
              aria-controls={`faq-category-${cat.id}`}
              onClick={() => {
                setActiveCategory(cat.id);
                setSearchQuery('');
              }}
              className={cn(
                'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
                activeCategory === cat.id
                  ? 'bg-[var(--kindonar-color-primary-500)] text-white'
                  : 'bg-[var(--kindonar-surface-interactive)] text-[var(--kindonar-color-neutral-600)] hover:bg-[var(--kindonar-color-primary-100)] hover:text-[var(--kindonar-color-primary-700)]',
              )}
            >
              {cat.label}
              <span className="ml-1.5 text-xs opacity-70">({cat.items.length})</span>
            </button>
          ))}
        </div>

        <div id={`faq-category-${activeCategory}`} role="tabpanel" aria-labelledby={activeCategory}>
          {activeCategoryData?.description && (
            <p className="mb-6 text-sm text-[var(--kindonar-color-neutral-500)]">
              {activeCategoryData.description}
            </p>
          )}

          {filteredItems.length > 0 ? (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Accordion
                items={filteredItems.map((item, idx) => ({
                  id: `faq-${activeCategory}-${idx}`,
                  title: item.question,
                  content: <p className="leading-relaxed">{item.answer}</p>,
                }))}
                allowMultiple
                variant="bordered"
              />
            </motion.div>
          ) : (
            <p className="py-12 text-center text-sm text-[var(--kindonar-color-neutral-500)]">
              {searchQuery
                ? 'No matching questions found. Try a different search term.'
                : 'No questions available in this category.'}
            </p>
          )}
        </div>
      </PageLayout>
    </div>
  );
}
