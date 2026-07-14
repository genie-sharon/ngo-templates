'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowUpDown, Eye, Sparkles, ChevronDown, Layers } from 'lucide-react';
import Link from 'next/link';
import { useState, useMemo, useRef, useEffect } from 'react';

import { FeaturedTemplateCard, TemplateCard } from '@/components/templates/template-card';
import { templates } from '@/data/templates/registry';
import { cn } from '@/lib/utils';

const CATEGORIES = [
  { id: 'all', label: 'All Templates', icon: Layers },
  { id: 'universal', label: 'Universal', icon: Sparkles },
  { id: 'healthcare', label: 'Healthcare', icon: Sparkles },
  { id: 'education', label: 'Education', icon: Sparkles },
  { id: 'animal-welfare', label: 'Animal Welfare', icon: Sparkles },
  { id: 'environment', label: 'Environment', icon: Sparkles },
  { id: 'disaster-relief', label: 'Disaster Relief', icon: Sparkles },
  { id: 'faith-based', label: 'Faith-Based', icon: Sparkles },
  { id: 'community', label: 'Community', icon: Sparkles },
  { id: 'arts', label: 'Arts & Culture', icon: Sparkles },
  { id: 'humanitarian', label: 'Humanitarian', icon: Sparkles },
] as const;

const SORT_OPTIONS = [
  { id: 'default', label: 'Default Order' },
  { id: 'name', label: 'Name: A-Z' },
  { id: 'name-desc', label: 'Name: Z-A' },
  { id: 'pages', label: 'Most Pages' },
  { id: 'pages-asc', label: 'Fewest Pages' },
] as const;

type SortId = (typeof SORT_OPTIONS)[number]['id'];

function getPageCount(template: (typeof templates)[number]): number {
  return Object.keys(template.pages).length;
}

function matchesSearch(template: (typeof templates)[number], query: string): boolean {
  const q = query.toLowerCase();
  return (
    template.name.toLowerCase().includes(q) ||
    template.tagline.toLowerCase().includes(q) ||
    template.description.toLowerCase().includes(q) ||
    template.mood.toLowerCase().includes(q) ||
    template.themeId.toLowerCase().includes(q) ||
    template.slug.toLowerCase().includes(q)
  );
}

function sortTemplates(list: typeof templates, sortId: SortId): typeof templates {
  const sorted = [...list];
  switch (sortId) {
    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case 'name-desc':
      return sorted.sort((a, b) => b.name.localeCompare(a.name));
    case 'pages':
      return sorted.sort((a, b) => getPageCount(b) - getPageCount(a));
    case 'pages-asc':
      return sorted.sort((a, b) => getPageCount(a) - getPageCount(b));
    default:
      return sorted;
  }
}

function SortDropdown({ sortId, onChange }: { sortId: SortId; onChange: (id: SortId) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLabel = SORT_OPTIONS.find((o) => o.id === sortId)?.label || 'Default Order';

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          'inline-flex h-10 items-center gap-2 rounded-xl border px-4 text-sm font-medium transition-all',
          'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300 hover:shadow-sm',
          'dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-neutral-600',
          open &&
            'border-primary-300 ring-primary-100 dark:border-primary-700 dark:ring-primary-900/30 ring-2',
        )}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <ArrowUpDown className="h-3.5 w-3.5 text-neutral-400" />
        <span className="hidden sm:inline">{currentLabel}</span>
        <span className="sm:hidden">Sort</span>
        <ChevronDown
          className={cn('h-3.5 w-3.5 text-neutral-400 transition-transform', open && 'rotate-180')}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className={cn(
              'absolute right-0 z-50 mt-2 w-48 overflow-hidden rounded-xl border shadow-xl',
              'border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900',
            )}
            role="listbox"
          >
            {SORT_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                onClick={() => {
                  onChange(opt.id);
                  setOpen(false);
                }}
                className={cn(
                  'flex w-full items-center px-4 py-2.5 text-left text-sm transition-colors',
                  sortId === opt.id
                    ? 'bg-primary-50 text-primary-700 dark:bg-primary-900/20 dark:text-primary-400 font-semibold'
                    : 'text-neutral-600 hover:bg-neutral-50 dark:text-neutral-400 dark:hover:bg-neutral-800',
                )}
                role="option"
                aria-selected={sortId === opt.id}
              >
                {sortId === opt.id && (
                  <svg
                    className="mr-2 h-3.5 w-3.5 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
                <span className={cn(!(sortId === opt.id) && 'ml-5.5')}>{opt.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CategoryPill({
  active,
  children,
  icon: Icon,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  icon: React.ComponentType<{ className?: string }>;
  onClick: () => void;
}) {
  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className={cn(
        'relative inline-flex h-9 shrink-0 items-center gap-1.5 rounded-xl border px-4 text-xs font-medium transition-all',
        active
          ? 'border-primary-200 bg-primary-50 text-primary-700 dark:border-primary-800 dark:bg-primary-900/20 dark:text-primary-400 shadow-sm'
          : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-400 dark:hover:border-neutral-700 dark:hover:bg-neutral-900 dark:hover:text-neutral-300',
      )}
    >
      <Icon className={cn('h-3.5 w-3.5', active ? 'text-primary-500' : 'text-neutral-400')} />
      {children}
      {active && (
        <motion.div
          layoutId="activeCategory"
          className="border-primary-300 dark:border-primary-700 absolute inset-0 rounded-xl border"
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
      )}
    </motion.button>
  );
}

export function TemplateGalleryClient() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [sortId, setSortId] = useState<SortId>('default');

  const featured = useMemo(() => templates.find((t) => t.slug === 'humanitarian')!, []);

  const filtered = useMemo(() => {
    let list = category === 'all' ? templates : templates.filter((t) => t.slug === category);
    if (search.trim()) {
      list = list.filter((t) => matchesSearch(t, search));
    }
    return sortTemplates(list, sortId);
  }, [category, search, sortId]);

  const clearFilters = () => {
    setSearch('');
    setCategory('all');
    setSortId('default');
  };

  const hasActiveFilters = search || category !== 'all' || sortId !== 'default';

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <section className="relative overflow-hidden border-b border-neutral-100 bg-gradient-to-b from-neutral-50/80 via-white to-white pt-16 pb-16 sm:pt-24 lg:pt-32 lg:pb-20 dark:border-neutral-900 dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-950">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="from-primary-100/40 dark:from-primary-900/20 absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br to-transparent blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-blue-100/30 to-transparent blur-3xl dark:from-blue-900/15" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}
            className="mx-auto mb-8 max-w-3xl text-center sm:mb-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="border-primary-200 bg-primary-50 text-primary-700 dark:border-primary-800 dark:bg-primary-900/20 dark:text-primary-400 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wider uppercase"
            >
              <Sparkles className="h-3.5 w-3.5" />
              10 Premium NGO Templates
            </motion.div>

            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl dark:text-neutral-100">
              Build Your
              <span className="from-primary-600 to-primary-400 bg-gradient-to-r bg-clip-text text-transparent">
                {' '}
                NGO Website
              </span>{' '}
              in Minutes
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-500 sm:text-lg dark:text-neutral-400">
              Production-ready templates built with accessibility, performance, and SEO. Each
              template includes multiple pages, sections, and full theme support.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mx-auto max-w-xl"
          >
            <div className="group relative">
              <div className="from-primary-500/20 via-secondary-500/20 to-primary-500/20 pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r opacity-0 blur-xl transition-opacity duration-500 group-focus-within:opacity-100" />
              <div className="relative flex items-center">
                <div className="absolute left-5 z-10">
                  <Search className="group-focus-within:text-primary-500 h-5 w-5 text-neutral-400 transition-colors duration-200" />
                </div>
                <input
                  type="search"
                  placeholder="Search templates by name, description, or mood..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className={cn(
                    'h-14 w-full rounded-2xl border-2 pr-14 pl-13 text-base',
                    'border-neutral-200 bg-white text-neutral-900 placeholder-neutral-400',
                    'focus:border-primary-500 focus:ring-primary-500/10 focus:ring-4 focus:outline-none',
                    'shadow-sm transition-all duration-300',
                    'dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder-neutral-500',
                    'dark:focus:border-primary-500 dark:focus:ring-primary-500/20',
                  )}
                  aria-label="Search templates"
                />
                {search && (
                  <button
                    onClick={() => setSearch('')}
                    className="absolute right-4 z-10 rounded-lg p-1.5 text-neutral-400 transition-all hover:scale-110 hover:bg-neutral-100 hover:text-neutral-600 dark:hover:bg-neutral-800"
                    aria-label="Clear search"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-neutral-400 dark:text-neutral-500"
          >
            <Eye className="h-3.5 w-3.5" />
            <span>Popular:</span>
            {['humanitarian', 'healthcare', 'education', 'arts'].map((slug) => {
              const t = templates.find((x) => x.slug === slug);
              if (!t) return null;
              return (
                <button
                  key={slug}
                  onClick={() => {
                    setCategory(slug);
                    window.scrollTo({ top: window.scrollY, behavior: 'smooth' });
                  }}
                  className="text-primary-600 hover:bg-primary-50 dark:text-primary-400 dark:hover:bg-primary-900/20 rounded-lg px-2 py-1 font-medium transition-colors"
                >
                  {t.name}
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-16"
        >
          <FeaturedTemplateCard template={featured} />
        </motion.div>

        <div className="mb-8 space-y-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                All Templates
              </h2>
              <span className="rounded-lg bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
                {filtered.length} {filtered.length === 1 ? 'template' : 'templates'}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-2 sm:flex">
                <span className="text-xs font-medium text-neutral-400 dark:text-neutral-500">
                  Category:
                </span>
                <div className="flex gap-1.5 overflow-x-auto pb-1">
                  {CATEGORIES.map((cat) => (
                    <CategoryPill
                      key={cat.id}
                      active={category === cat.id}
                      icon={cat.icon}
                      onClick={() => setCategory(cat.id)}
                    >
                      {cat.label}
                    </CategoryPill>
                  ))}
                </div>
              </div>
              <SortDropdown sortId={sortId} onChange={setSortId} />
            </div>
          </div>

          <AnimatePresence mode="wait">
            {hasActiveFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="flex flex-wrap items-center gap-2 rounded-xl border border-neutral-100 bg-neutral-50/50 p-3 dark:border-neutral-800 dark:bg-neutral-900/50">
                  {search && (
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 shadow-sm dark:bg-neutral-800 dark:text-neutral-300">
                      Search: &quot;{search}&quot;
                      <button
                        onClick={() => setSearch('')}
                        className="ml-1 text-neutral-400 hover:text-neutral-600"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  )}
                  {category !== 'all' && (
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 shadow-sm dark:bg-neutral-800 dark:text-neutral-300">
                      Category: {CATEGORIES.find((c) => c.id === category)?.label}
                      <button
                        onClick={() => setCategory('all')}
                        className="ml-1 text-neutral-400 hover:text-neutral-600"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  )}
                  {sortId !== 'default' && (
                    <span className="inline-flex items-center gap-1 rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 shadow-sm dark:bg-neutral-800 dark:text-neutral-300">
                      Sort: {SORT_OPTIONS.find((o) => o.id === sortId)?.label}
                    </span>
                  )}
                  <button
                    onClick={clearFilters}
                    className="ml-auto inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-medium text-neutral-500 transition-colors hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
                  >
                    <X className="h-3 w-3" />
                    Clear all
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-neutral-200 py-24 dark:border-neutral-800"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-100 dark:bg-neutral-800">
                <Search className="h-8 w-8 text-neutral-400" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                No templates found
              </h3>
              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                Try adjusting your search or filter criteria.
              </p>
              <button
                onClick={clearFilters}
                className="mt-6 inline-flex h-10 items-center rounded-xl bg-neutral-900 px-5 text-sm font-semibold text-white transition-all hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
              >
                Clear Filters
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((template, i) => (
                  <TemplateCard key={template.slug} template={template} index={i} />
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
                className="relative mt-16 mb-16 overflow-hidden rounded-3xl border border-neutral-200 bg-white p-8 text-center shadow-xl sm:p-14 dark:border-neutral-800 dark:bg-neutral-900"
              >
                <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
                  <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-violet-500/10 blur-[80px] dark:bg-violet-500/15" />
                  <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-fuchsia-500/8 blur-[80px] dark:bg-fuchsia-500/12" />
                  <div className="absolute top-1/3 right-1/4 h-48 w-48 rounded-full bg-blue-500/6 blur-[60px] dark:bg-blue-500/10" />
                  <div className="absolute bottom-1/3 left-1/4 h-48 w-48 rounded-full bg-indigo-500/6 blur-[60px] dark:bg-indigo-500/10" />
                </div>

                <div className="relative">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-[11px] font-bold tracking-wider text-violet-700 shadow-sm uppercase"
                  >
                    <Sparkles className="h-3.5 w-3.5 text-violet-500" />
                    AI Website Builder
                  </motion.span>

                  <h3 className="text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl lg:text-4xl dark:text-neutral-100">
                    Didn&apos;t find the perfect template?
                  </h3>
                  <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-neutral-500 dark:text-neutral-400">
                    Let our AI generate a completely custom NGO website tailored to your mission,
                    branding, colors, pages and content&mdash;in just a few minutes.
                  </p>

                  <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link
                      href="/builder"
                      className={cn(
                        'group inline-flex h-12 items-center gap-2.5 rounded-xl px-6 text-sm font-bold transition-all duration-300',
                        'bg-gradient-to-r from-violet-700 to-fuchsia-700 text-white shadow-lg shadow-violet-500/20',
                        'hover:from-violet-600 hover:to-fuchsia-600 hover:shadow-xl hover:shadow-violet-500/30',
                        'hover:-translate-y-0.5 active:translate-y-0',
                        'dark:from-violet-600 dark:to-fuchsia-600 dark:hover:from-violet-500 dark:hover:to-fuchsia-500',
                      )}
                      aria-label="Build custom NGO website with AI"
                    >
                      <Sparkles className="h-4 w-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                      Build Custom Website
                    </Link>
                    <Link
                      href="/contact"
                      className={cn(
                        'group inline-flex h-12 items-center gap-2.5 rounded-xl border-2 px-6 text-sm font-bold transition-all duration-300',
                        'border-neutral-200 bg-white text-neutral-800',
                        'hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-900',
                        'hover:-translate-y-0.5 active:translate-y-0',
                        'dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200',
                        'dark:hover:border-neutral-600 dark:hover:bg-neutral-700 dark:hover:text-white',
                      )}
                      aria-label="Book a demo"
                    >
                      <svg
                        className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      Book Demo
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
