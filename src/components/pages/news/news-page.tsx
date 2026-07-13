'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, X } from 'lucide-react';
import { useState, useMemo } from 'react';

import { PageHero } from '@/components/pages/blocks/page-hero';
import type { PageConfig, PageHeroConfig, PostItem } from '@/components/pages/page-config.types';
import type { NewsArticle, NewsConfig } from '@/components/sections/news/config.types';
import { News } from '@/components/sections/news/news';
import { cn } from '@/lib/utils';

export interface NewsPageConfig extends PageConfig {
  hero: PageHeroConfig;
  articles: PostItem[];
  categories: string[];
  defaultLayout?: 'cards' | 'featured' | 'magazine' | 'grid' | 'timeline' | 'carousel';
}

export function NewsPage({ config, className }: { config: NewsPageConfig; className?: string }) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [layout, setLayout] = useState<NewsPageConfig['defaultLayout']>(
    config.defaultLayout || 'cards',
  );

  const filteredArticles = useMemo(() => {
    return config.articles.filter((article) => {
      const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
      const matchesSearch =
        !searchQuery ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [config.articles, activeCategory, searchQuery]);

  const mappedArticles: NewsArticle[] = useMemo(() => {
    return filteredArticles.map((a) => ({
      title: a.title,
      slug: a.slug,
      image: a.image?.src,
      date: a.date,
      category: a.category,
      excerpt: a.excerpt,
      author: a.author ? { name: a.author.name, avatar: a.author.avatar } : undefined,
    }));
  }, [filteredArticles]);

  const layouts: { value: string; label: string }[] = [
    { value: 'cards', label: 'Cards' },
    { value: 'featured', label: 'Featured' },
    { value: 'magazine', label: 'Magazine' },
    { value: 'grid', label: 'Grid' },
    { value: 'timeline', label: 'Timeline' },
    { value: 'carousel', label: 'Carousel' },
  ];

  return (
    <div className={cn(className)}>
      <PageHero config={config.hero} />

      <section className="py-12 md:py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative max-w-md flex-1">
              <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[var(--kindonar-color-neutral-400)]" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full rounded-lg border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-primary)] py-2.5 pr-10 pl-10 text-sm text-[var(--kindonar-color-neutral-900)] placeholder:text-[var(--kindonar-color-neutral-400)] focus:border-[var(--kindonar-color-primary-500)] focus:ring-2 focus:ring-[var(--kindonar-color-primary-200)] focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute top-1/2 right-3 -translate-y-1/2 text-[var(--kindonar-color-neutral-400)] hover:text-[var(--kindonar-color-neutral-600)]"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2">
              <span className="hidden text-sm text-[var(--kindonar-color-neutral-500)] sm:inline">
                Layout:
              </span>
              <div className="relative">
                <select
                  value={layout}
                  onChange={(e) => setLayout(e.target.value as NewsPageConfig['defaultLayout'])}
                  className="appearance-none rounded-lg border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-primary)] py-2.5 pr-10 pl-4 text-sm font-medium text-[var(--kindonar-color-neutral-700)] focus:border-[var(--kindonar-color-primary-500)] focus:ring-2 focus:ring-[var(--kindonar-color-primary-200)] focus:outline-none"
                >
                  {layouts.map((l) => (
                    <option key={l.value} value={l.value}>
                      {l.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-[var(--kindonar-color-neutral-400)]" />
              </div>
            </div>
          </div>

          <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter by category">
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === 'all'}
              onClick={() => setActiveCategory('all')}
              className={cn(
                'rounded-full px-4 py-1.5 text-sm font-medium transition-all',
                activeCategory === 'all'
                  ? 'bg-[var(--kindonar-color-primary-500)] text-white'
                  : 'bg-[var(--kindonar-surface-interactive)] text-[var(--kindonar-color-neutral-600)] hover:bg-[var(--kindonar-color-primary-100)] hover:text-[var(--kindonar-color-primary-700)]',
              )}
            >
              All
            </button>
            {config.categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'rounded-full px-4 py-1.5 text-sm font-medium transition-all',
                  activeCategory === cat
                    ? 'bg-[var(--kindonar-color-primary-500)] text-white'
                    : 'bg-[var(--kindonar-surface-interactive)] text-[var(--kindonar-color-neutral-600)] hover:bg-[var(--kindonar-color-primary-100)] hover:text-[var(--kindonar-color-primary-700)]',
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${layout}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {mappedArticles.length > 0 ? (
                <News
                  config={{
                    articles: mappedArticles,
                    layout: layout as NewsConfig['layout'],
                  }}
                />
              ) : (
                <div className="py-16 text-center">
                  <p className="text-lg text-[var(--kindonar-color-neutral-500)]">
                    No articles found matching your criteria.
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
