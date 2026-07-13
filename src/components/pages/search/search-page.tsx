'use client';

import { motion } from 'framer-motion';
import { Search, X, ChevronLeft, ChevronRight, Calendar, Tag } from 'lucide-react';
import { useState, useMemo } from 'react';

import { Button } from '@/components/ui/atoms/button';
import { cn } from '@/lib/utils';
import { formatDate } from '@/lib/utils';

export interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  url: string;
  category: string;
  date: string;
}

export interface SearchPageConfig {
  placeholder?: string;
  results: SearchResult[];
  categories?: string[];
  resultsPerPage?: number;
  emptyMessage?: string;
  loadingMessage?: string;
}

export function SearchPage({ config }: { config: SearchPageConfig }) {
  const {
    placeholder = 'Search...',
    results,
    categories,
    resultsPerPage = 10,
    emptyMessage = 'No results found',
    loadingMessage = 'Searching...',
  } = config;
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let list = results;
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (r) => r.title.toLowerCase().includes(q) || r.excerpt.toLowerCase().includes(q),
      );
    }
    if (selectedCategory) {
      list = list.filter((r) => r.category === selectedCategory);
    }
    return list;
  }, [query, selectedCategory, results]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / resultsPerPage));
  const paginatedResults = filtered.slice((page - 1) * resultsPerPage, page * resultsPerPage);

  const handleSearch = (value: string) => {
    setIsLoading(true);
    setQuery(value);
    setPage(1);
    setTimeout(() => setIsLoading(false), 300);
  };

  const highlightTerm = (text: string, term: string) => {
    if (!term.trim()) return text;
    const parts = text.split(new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === term.toLowerCase() ? (
        <mark
          key={i}
          className="rounded-sm bg-[var(--kindonar-color-primary-100)] px-0.5 text-[var(--kindonar-color-primary-800)]"
        >
          {part}
        </mark>
      ) : (
        part
      ),
    );
  };

  return (
    <div className={cn('mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16')}>
      <h1 className="mb-8 text-3xl font-bold text-[var(--kindonar-color-neutral-900)] md:text-4xl">
        Search
      </h1>

      <div className="relative mb-6">
        <Search
          className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-[var(--kindonar-color-neutral-400)]"
          aria-hidden="true"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] py-4 pr-12 pl-12 text-base text-[var(--kindonar-color-neutral-900)] transition-colors placeholder:text-[var(--kindonar-color-neutral-400)] focus:border-[var(--kindonar-color-primary-500)] focus:ring-2 focus:ring-[var(--kindonar-color-primary-100)] focus:outline-none"
          aria-label="Search"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setPage(1);
            }}
            className="absolute top-1/2 right-4 -translate-y-1/2 text-[var(--kindonar-color-neutral-400)] transition-colors hover:text-[var(--kindonar-color-neutral-600)]"
            aria-label="Clear search"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {categories && categories.length > 0 && (
        <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          <button
            onClick={() => {
              setSelectedCategory(null);
              setPage(1);
            }}
            className={cn(
              'rounded-lg px-3 py-1.5 text-sm font-medium transition-all',
              !selectedCategory
                ? 'bg-[var(--kindonar-color-primary-500)] text-white'
                : 'border border-[var(--kindonar-border-default)] text-[var(--kindonar-color-neutral-600)] hover:border-[var(--kindonar-color-primary-300)]',
            )}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat === selectedCategory ? null : cat);
                setPage(1);
              }}
              className={cn(
                'rounded-lg px-3 py-1.5 text-sm font-medium transition-all',
                selectedCategory === cat
                  ? 'bg-[var(--kindonar-color-primary-500)] text-white'
                  : 'border border-[var(--kindonar-border-default)] text-[var(--kindonar-color-neutral-600)] hover:border-[var(--kindonar-color-primary-300)]',
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {isLoading && (
        <div className="py-16 text-center">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-[var(--kindonar-border-default)] border-t-[var(--kindonar-color-primary-500)]" />
          <p className="mt-4 text-[var(--kindonar-color-neutral-500)]">{loadingMessage}</p>
        </div>
      )}

      {!isLoading && filtered.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-16 text-center"
        >
          <Search className="mx-auto h-12 w-12 text-[var(--kindonar-color-neutral-300)]" />
          <p className="mt-4 text-lg font-medium text-[var(--kindonar-color-neutral-700)]">
            {emptyMessage}
          </p>
          {query && (
            <p className="mt-1 text-sm text-[var(--kindonar-color-neutral-500)]">
              Try different keywords or browse all categories
            </p>
          )}
        </motion.div>
      )}

      {!isLoading && paginatedResults.length > 0 && (
        <>
          <p className="mb-4 text-sm text-[var(--kindonar-color-neutral-500)]">
            {filtered.length} result{filtered.length !== 1 ? 's' : ''}
            {query && <> for &ldquo;{query}&rdquo;</>}
          </p>
          <div className="space-y-4">
            {paginatedResults.map((result, idx) => (
              <motion.article
                key={result.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                className="rounded-xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] p-5 transition-shadow hover:shadow-md"
              >
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-[var(--kindonar-color-primary-100)] px-2.5 py-0.5 text-xs font-medium text-[var(--kindonar-color-primary-700)]">
                    <Tag className="h-3 w-3" />
                    {result.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-[var(--kindonar-color-neutral-500)]">
                    <Calendar className="h-3 w-3" />
                    {formatDate(result.date)}
                  </span>
                </div>
                <a
                  href={result.url}
                  className="text-lg font-semibold text-[var(--kindonar-color-neutral-900)] transition-colors hover:text-[var(--kindonar-color-primary-600)]"
                >
                  {highlightTerm(result.title, query)}
                </a>
                <p className="mt-1 text-sm leading-relaxed text-[var(--kindonar-color-neutral-600)]">
                  {highlightTerm(result.excerpt, query)}
                </p>
              </motion.article>
            ))}
          </div>

          {totalPages > 1 && (
            <nav
              className="mt-10 flex items-center justify-center gap-2"
              aria-label="Search results pagination"
            >
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                aria-label="Previous page"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={cn(
                    'flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium transition-all',
                    p === page
                      ? 'bg-[var(--kindonar-color-primary-500)] text-white'
                      : 'text-[var(--kindonar-color-neutral-600)] hover:bg-[var(--kindonar-surface-interactive)]',
                  )}
                  aria-current={p === page ? 'page' : undefined}
                >
                  {p}
                </button>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                aria-label="Next page"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </nav>
          )}
        </>
      )}
    </div>
  );
}
