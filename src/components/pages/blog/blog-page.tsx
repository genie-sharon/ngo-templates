'use client';

import { motion } from 'framer-motion';
import {
  Search,
  Calendar,
  User,
  ArrowRight,
  Tag,
  ChevronLeft,
  ChevronRight,
  X,
} from 'lucide-react';
import Image from 'next/image';
import { useState, useMemo } from 'react';

import { PageHero, PageLayout } from '@/components/pages/blocks/page-hero';
import type { PageConfig, PageHeroConfig, PostItem } from '@/components/pages/page-config.types';
import { cn, formatDate } from '@/lib/utils';

export interface BlogPageConfig extends PageConfig {
  hero: PageHeroConfig;
  posts: PostItem[];
  categories: string[];
  tags: string[];
  postsPerPage?: number;
}

export function BlogPage({ config, className }: { config: BlogPageConfig; className?: string }) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = config.postsPerPage || 9;

  const filteredPosts = useMemo(() => {
    return config.posts.filter((post) => {
      const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
      const matchesTag = !activeTag || (post.tags && post.tags.includes(activeTag));
      const matchesSearch =
        !searchQuery ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesTag && matchesSearch;
    });
  }, [config.posts, activeCategory, activeTag, searchQuery]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage,
  );

  const recentPosts = useMemo(() => config.posts.slice(0, 5), [config.posts]);

  const tagCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    config.posts.forEach((p) =>
      p.tags?.forEach((t) => {
        counts[t] = (counts[t] || 0) + 1;
      }),
    );
    return counts;
  }, [config.posts]);

  const sidebar = (
    <aside className="space-y-8">
      <div>
        <h3 className="mb-4 text-sm font-semibold tracking-wider text-[var(--kindonar-color-neutral-500)] uppercase">
          Search
        </h3>
        <div className="relative">
          <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[var(--kindonar-color-neutral-400)]" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Search posts..."
            className="w-full rounded-lg border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-primary)] py-2.5 pr-4 pl-10 text-sm text-[var(--kindonar-color-neutral-900)] placeholder:text-[var(--kindonar-color-neutral-400)] focus:border-[var(--kindonar-color-primary-500)] focus:ring-2 focus:ring-[var(--kindonar-color-primary-200)] focus:outline-none"
          />
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-sm font-semibold tracking-wider text-[var(--kindonar-color-neutral-500)] uppercase">
          Categories
        </h3>
        <div className="space-y-2">
          <button
            type="button"
            onClick={() => {
              setActiveCategory('all');
              setCurrentPage(1);
            }}
            className={cn(
              'block w-full rounded-md px-3 py-2 text-left text-sm transition-colors',
              activeCategory === 'all'
                ? 'bg-[var(--kindonar-color-primary-100)] font-medium text-[var(--kindonar-color-primary-700)]'
                : 'text-[var(--kindonar-color-neutral-600)] hover:bg-[var(--kindonar-surface-interactive)] hover:text-[var(--kindonar-color-neutral-900)]',
            )}
          >
            All Categories
          </button>
          {config.categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActiveCategory(cat);
                setCurrentPage(1);
              }}
              className={cn(
                'block w-full rounded-md px-3 py-2 text-left text-sm transition-colors',
                activeCategory === cat
                  ? 'bg-[var(--kindonar-color-primary-100)] font-medium text-[var(--kindonar-color-primary-700)]'
                  : 'text-[var(--kindonar-color-neutral-600)] hover:bg-[var(--kindonar-surface-interactive)] hover:text-[var(--kindonar-color-neutral-900)]',
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {config.tags.length > 0 && (
        <div>
          <h3 className="mb-4 text-sm font-semibold tracking-wider text-[var(--kindonar-color-neutral-500)] uppercase">
            Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {config.tags.map((tag) => {
              const count = tagCounts[tag] || 0;
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => {
                    setActiveTag(activeTag === tag ? null : tag);
                    setCurrentPage(1);
                  }}
                  className={cn(
                    'inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium transition-all',
                    activeTag === tag
                      ? 'bg-[var(--kindonar-color-primary-500)] text-white'
                      : 'bg-[var(--kindonar-surface-interactive)] text-[var(--kindonar-color-neutral-600)] hover:bg-[var(--kindonar-color-primary-100)] hover:text-[var(--kindonar-color-primary-700)]',
                  )}
                >
                  <Tag className="h-3 w-3" />
                  {tag} ({count})
                </button>
              );
            })}
          </div>
          {activeTag && (
            <button
              type="button"
              onClick={() => setActiveTag(null)}
              className="mt-2 inline-flex items-center gap-1 text-xs text-[var(--kindonar-color-primary-600)] hover:text-[var(--kindonar-color-primary-700)]"
            >
              <X className="h-3 w-3" /> Clear filter
            </button>
          )}
        </div>
      )}

      <div>
        <h3 className="mb-4 text-sm font-semibold tracking-wider text-[var(--kindonar-color-neutral-500)] uppercase">
          Recent Posts
        </h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <a key={post.id} href={post.slug} className="group flex gap-3">
              {post.image && (
                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={post.image.src}
                    alt={post.image.alt}
                    width={64}
                    height={64}
                    unoptimized
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="flex-1">
                <h4 className="line-clamp-2 text-sm font-medium text-[var(--kindonar-color-neutral-900)] transition-colors group-hover:text-[var(--kindonar-color-primary-600)]">
                  {post.title}
                </h4>
                <p className="mt-1 text-xs text-[var(--kindonar-color-neutral-500)]">
                  {formatDate(post.date)}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );

  return (
    <div className={cn(className)}>
      <PageHero config={config.hero} />

      <PageLayout layout="sidebar-right" sidebar={sidebar}>
        {activeTag && (
          <div className="mb-6 flex items-center gap-2">
            <span className="text-sm text-[var(--kindonar-color-neutral-500)]">
              Filtered by tag:
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-[var(--kindonar-color-primary-100)] px-3 py-1 text-xs font-medium text-[var(--kindonar-color-primary-700)]">
              <Tag className="h-3 w-3" />
              {activeTag}
              <button
                type="button"
                onClick={() => setActiveTag(null)}
                className="ml-1 hover:text-[var(--kindonar-color-primary-500)]"
                aria-label="Remove tag filter"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          </div>
        )}

        {paginatedPosts.length > 0 ? (
          <>
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {paginatedPosts.map((post, idx) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (idx % postsPerPage) * 0.05 }}
                  className="group flex flex-col overflow-hidden rounded-xl bg-[var(--kindonar-surface-raised)] shadow-[var(--kindonar-shadow-sm)] transition-all duration-300 hover:shadow-[var(--kindonar-shadow-md)]"
                >
                  {post.image && (
                    <a
                      href={post.slug}
                      className="relative aspect-video overflow-hidden"
                      tabIndex={-1}
                    >
                      <Image
                        src={post.image.src}
                        alt={post.image.alt}
                        width={800}
                        height={450}
                        unoptimized
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-3 left-3 rounded-full bg-[var(--kindonar-color-primary-500)] px-3 py-1 text-xs font-semibold text-white">
                        {post.category}
                      </span>
                    </a>
                  )}
                  <div className="flex flex-1 flex-col p-5">
                    <div className="mb-3 flex items-center gap-3 text-xs text-[var(--kindonar-color-neutral-500)]">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3 w-3" aria-hidden="true" />
                        <time dateTime={post.date}>{formatDate(post.date)}</time>
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <User className="h-3 w-3" aria-hidden="true" />
                        {post.author.name}
                      </span>
                    </div>
                    <a href={post.slug} className="mb-2 block">
                      <h3 className="text-lg font-semibold text-[var(--kindonar-color-neutral-900)] transition-colors group-hover:text-[var(--kindonar-color-primary-600)]">
                        {post.title}
                      </h3>
                    </a>
                    <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-[var(--kindonar-color-neutral-600)]">
                      {post.excerpt}
                    </p>
                    {post.tags && post.tags.length > 0 && (
                      <div className="mb-4 flex flex-wrap gap-1.5">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 rounded-full bg-[var(--kindonar-surface-interactive)] px-2.5 py-0.5 text-xs text-[var(--kindonar-color-neutral-600)]"
                          >
                            <Tag className="h-3 w-3" />
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 3 && (
                          <span className="text-xs text-[var(--kindonar-color-neutral-400)]">
                            +{post.tags.length - 3}
                          </span>
                        )}
                      </div>
                    )}
                    <a
                      href={post.slug}
                      className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-[var(--kindonar-color-primary-600)] transition-colors hover:text-[var(--kindonar-color-primary-700)]"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>

            {totalPages > 1 && (
              <nav className="mt-12 flex items-center justify-center gap-2" aria-label="Pagination">
                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--kindonar-border-default)] text-[var(--kindonar-color-neutral-700)] transition-colors hover:bg-[var(--kindonar-surface-interactive)] disabled:opacity-40"
                  aria-label="Previous page"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => setCurrentPage(page)}
                    className={cn(
                      'inline-flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium transition-colors',
                      page === currentPage
                        ? 'bg-[var(--kindonar-color-primary-500)] text-white'
                        : 'border border-[var(--kindonar-border-default)] text-[var(--kindonar-color-neutral-700)] hover:bg-[var(--kindonar-surface-interactive)]',
                    )}
                    aria-current={page === currentPage ? 'page' : undefined}
                    aria-label={`Page ${page}`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--kindonar-border-default)] text-[var(--kindonar-color-neutral-700)] transition-colors hover:bg-[var(--kindonar-surface-interactive)] disabled:opacity-40"
                  aria-label="Next page"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </nav>
            )}
          </>
        ) : (
          <div className="py-16 text-center">
            <p className="text-lg text-[var(--kindonar-color-neutral-500)]">
              No posts found matching your criteria.
            </p>
          </div>
        )}
      </PageLayout>
    </div>
  );
}
