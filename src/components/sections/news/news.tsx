'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, User, Clock } from 'lucide-react';
import { useId, useCallback, useEffect, useState } from 'react';

import { SectionHeadingBlock, staggerItem } from '@/components/sections/motion';
import type { SectionHeading } from '@/components/sections/section-config.types';
import { Image } from '@/components/ui/media/image';
import { cn } from '@/lib/utils';
import { formatDate } from '@/lib/utils';

import type { NewsArticle, NewsConfig } from './config.types';

function Img({
  src,
  alt,
  className,
  loading,
}: {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}) {
  return <img src={src} alt={alt} className={className} loading={loading} />;
}

function NewsCard({ article, index }: { article: NewsArticle; index: number }) {
  return (
    <motion.article
      variants={staggerItem}
      className="group flex flex-col overflow-hidden rounded-xl bg-[var(--kindonar-surface-raised)] shadow-[var(--kindonar-shadow-sm)] transition-all duration-300 hover:shadow-[var(--kindonar-shadow-md)]"
    >
      {article.image && (
        <a href={article.slug} className="relative aspect-video overflow-hidden" tabIndex={-1}>
          <Img
            src={article.image}
            alt={article.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading={index < 3 ? 'eager' : 'lazy'}
          />
          <span className="absolute top-3 left-3 rounded-full bg-[var(--kindonar-color-primary-500)] px-3 py-1 text-xs font-semibold text-white">
            {article.category}
          </span>
        </a>
      )}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center gap-3 text-xs text-[var(--kindonar-color-neutral-500)]">
          <span className="inline-flex items-center gap-1">
            <Calendar size={12} aria-hidden="true" />
            <time dateTime={article.date}>{formatDate(article.date)}</time>
          </span>
          {article.author && (
            <span className="inline-flex items-center gap-1">
              <User size={12} aria-hidden="true" />
              {article.author.name}
            </span>
          )}
        </div>
        <a href={article.slug} className="mb-2 block">
          <h3 className="text-lg font-semibold text-[var(--kindonar-color-neutral-900)] transition-colors group-hover:text-[var(--kindonar-color-primary-600)]">
            {article.title}
          </h3>
        </a>
        <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-[var(--kindonar-color-neutral-600)]">
          {article.excerpt}
        </p>
        <a
          href={article.slug}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--kindonar-color-primary-600)] transition-colors hover:text-[var(--kindonar-color-primary-700)]"
        >
          Read More
          <ArrowRight size={14} aria-hidden="true" />
        </a>
      </div>
    </motion.article>
  );
}

function FeaturedArticle({ article }: { article: NewsArticle }) {
  return (
    <motion.article
      variants={staggerItem}
      className="group grid overflow-hidden rounded-xl bg-[var(--kindonar-surface-raised)] shadow-[var(--kindonar-shadow-sm)] md:grid-cols-2"
    >
      {article.image && (
        <a
          href={article.slug}
          className="relative aspect-video overflow-hidden md:aspect-auto"
          tabIndex={-1}
        >
          <Img
            src={article.image}
            alt={article.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </a>
      )}
      <div className="flex flex-col justify-center p-6 md:p-8">
        <span className="mb-3 inline-block w-fit rounded-full bg-[var(--kindonar-color-primary-100)] px-3 py-1 text-xs font-semibold text-[var(--kindonar-color-primary-700)]">
          {article.category}
        </span>
        <a href={article.slug} className="mb-3 block">
          <h3 className="text-2xl font-bold text-[var(--kindonar-color-neutral-900)] transition-colors group-hover:text-[var(--kindonar-color-primary-600)] md:text-3xl">
            {article.title}
          </h3>
        </a>
        <p className="mb-4 text-base leading-relaxed text-[var(--kindonar-color-neutral-600)]">
          {article.excerpt}
        </p>
        <div className="flex items-center gap-4 text-sm text-[var(--kindonar-color-neutral-500)]">
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={14} aria-hidden="true" />
            <time dateTime={article.date}>{formatDate(article.date)}</time>
          </span>
          {article.author && (
            <span className="inline-flex items-center gap-1.5">
              <User size={14} aria-hidden="true" />
              {article.author.name}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function SidebarArticle({ article }: { article: NewsArticle }) {
  return (
    <motion.article
      variants={staggerItem}
      className="group flex gap-4 border-b border-[var(--kindonar-border-default)] pb-4 last:border-0 last:pb-0"
    >
      {article.image && (
        <a
          href={article.slug}
          className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg"
          tabIndex={-1}
        >
          <Img
            src={article.image}
            alt={article.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </a>
      )}
      <div className="flex flex-1 flex-col justify-center">
        <span className="mb-1 text-xs font-medium text-[var(--kindonar-color-primary-600)]">
          {article.category}
        </span>
        <a href={article.slug} className="mb-1 block">
          <h4 className="line-clamp-2 text-sm font-semibold text-[var(--kindonar-color-neutral-900)] transition-colors group-hover:text-[var(--kindonar-color-primary-600)]">
            {article.title}
          </h4>
        </a>
        <span className="text-xs text-[var(--kindonar-color-neutral-500)]">
          <time dateTime={article.date}>{formatDate(article.date)}</time>
        </span>
      </div>
    </motion.article>
  );
}

function MagazineArticle({ article, large }: { article: NewsArticle; large?: boolean }) {
  return (
    <motion.article
      variants={staggerItem}
      className={cn(
        'group flex flex-col overflow-hidden rounded-xl bg-[var(--kindonar-surface-raised)] shadow-[var(--kindonar-shadow-sm)]',
        large && 'md:col-span-2 md:row-span-2',
      )}
    >
      {article.image && (
        <a
          href={article.slug}
          className={cn('relative overflow-hidden', large ? 'aspect-[16/9]' : 'aspect-video')}
          tabIndex={-1}
        >
          <Img
            src={article.image}
            alt={article.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <span className="absolute top-3 left-3 rounded-full bg-[var(--kindonar-color-primary-500)] px-3 py-1 text-xs font-semibold text-white">
            {article.category}
          </span>
        </a>
      )}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center gap-2 text-xs text-[var(--kindonar-color-neutral-500)]">
          <Calendar size={12} aria-hidden="true" />
          <time dateTime={article.date}>{formatDate(article.date)}</time>
          {article.author && (
            <>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1">
                <User size={12} aria-hidden="true" />
                {article.author.name}
              </span>
            </>
          )}
        </div>
        <a href={article.slug} className="mb-2 block">
          <h3
            className={cn(
              'font-semibold text-[var(--kindonar-color-neutral-900)] transition-colors group-hover:text-[var(--kindonar-color-primary-600)]',
              large ? 'text-xl md:text-2xl' : 'text-base',
            )}
          >
            {article.title}
          </h3>
        </a>
        {large && (
          <p className="mb-3 line-clamp-2 text-sm leading-relaxed text-[var(--kindonar-color-neutral-600)]">
            {article.excerpt}
          </p>
        )}
      </div>
    </motion.article>
  );
}

function TimelineArticle({ article }: { article: NewsArticle }) {
  return (
    <motion.article
      variants={staggerItem}
      className="group relative pl-8 before:absolute before:top-8 before:left-[11px] before:h-[calc(100%+2rem)] before:w-0.5 before:bg-[var(--kindonar-border-default)] last:before:hidden"
    >
      <div className="absolute top-1.5 left-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[var(--kindonar-color-primary-500)] bg-[var(--kindonar-surface-primary)]">
        <div className="h-2 w-2 rounded-full bg-[var(--kindonar-color-primary-500)]" />
      </div>
      <div className="flex flex-col overflow-hidden rounded-xl bg-[var(--kindonar-surface-raised)] p-5 shadow-[var(--kindonar-shadow-sm)]">
        <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-[var(--kindonar-color-neutral-500)]">
          <span className="inline-flex items-center gap-1">
            <Clock size={12} aria-hidden="true" />
            <time dateTime={article.date}>{formatDate(article.date)}</time>
          </span>
          <span className="rounded-full bg-[var(--kindonar-color-primary-100)] px-2.5 py-0.5 text-xs font-medium text-[var(--kindonar-color-primary-700)]">
            {article.category}
          </span>
        </div>
        <a href={article.slug} className="mb-2 block">
          <h3 className="text-lg font-semibold text-[var(--kindonar-color-neutral-900)] transition-colors group-hover:text-[var(--kindonar-color-primary-600)]">
            {article.title}
          </h3>
        </a>
        <p className="mb-3 text-sm leading-relaxed text-[var(--kindonar-color-neutral-600)]">
          {article.excerpt}
        </p>
        {article.author && (
          <div className="flex items-center gap-2 text-xs text-[var(--kindonar-color-neutral-500)]">
            {article.author.avatar && (
              <Image
                src={article.author.avatar}
                alt=""
                className="h-6 w-6"
                rounded="full"
                fit="cover"
              />
            )}
            <span>{article.author.name}</span>
          </div>
        )}
      </div>
    </motion.article>
  );
}

function CarouselArticle({ article }: { article: NewsArticle }) {
  return (
    <div className="min-w-0 shrink-0 grow-0 basis-[85%] pl-4 sm:basis-[45%] lg:basis-[30%]">
      <article className="group flex h-full flex-col overflow-hidden rounded-xl bg-[var(--kindonar-surface-raised)] shadow-[var(--kindonar-shadow-sm)]">
        {article.image && (
          <a href={article.slug} className="relative aspect-video overflow-hidden" tabIndex={-1}>
            <Img
              src={article.image}
              alt={article.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <span className="absolute top-3 left-3 rounded-full bg-[var(--kindonar-color-primary-500)] px-3 py-1 text-xs font-semibold text-white">
              {article.category}
            </span>
          </a>
        )}
        <div className="flex flex-1 flex-col p-5">
          <div className="mb-3 flex items-center gap-3 text-xs text-[var(--kindonar-color-neutral-500)]">
            <span className="inline-flex items-center gap-1">
              <Calendar size={12} aria-hidden="true" />
              <time dateTime={article.date}>{formatDate(article.date)}</time>
            </span>
            {article.author && (
              <span className="inline-flex items-center gap-1">
                <User size={12} aria-hidden="true" />
                {article.author.name}
              </span>
            )}
          </div>
          <a href={article.slug} className="mb-2 block">
            <h3 className="text-base font-semibold text-[var(--kindonar-color-neutral-900)] transition-colors group-hover:text-[var(--kindonar-color-primary-600)]">
              {article.title}
            </h3>
          </a>
          <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-[var(--kindonar-color-neutral-600)]">
            {article.excerpt}
          </p>
        </div>
      </article>
    </div>
  );
}

interface NewsProps {
  config: NewsConfig;
  className?: string;
}

export function News({ config, className }: NewsProps) {
  if (!config) return null;
  const uid = useId();
  const { layout, articles = [] } = config;

  if (!articles.length) return null;

  const normalizedHeading: SectionHeading | undefined =
    config.heading && typeof config.heading === 'object'
      ? config.heading
      : config.heading
        ? {
            title: config.heading,
            subtitle: config.subtitle,
            description: config.description,
            tag: config.tag,
          }
        : config.tag
          ? {
              title: config.tag,
              subtitle: config.subtitle,
              description: config.description,
              tag: config.tag,
            }
          : undefined;

  return (
    <section className={cn('py-16 md:py-20 lg:py-24', className)}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {normalizedHeading && (
          <SectionHeadingBlock heading={normalizedHeading} className="text-center" />
        )}

        {layout === 'cards' && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            className={cn(
              'grid gap-6',
              'grid-cols-1 sm:grid-cols-2',
              config.maxColumns === 2
                ? 'lg:grid-cols-2'
                : config.maxColumns === 4
                  ? 'lg:grid-cols-4'
                  : 'lg:grid-cols-3',
            )}
          >
            {articles.map((article, i) => (
              <NewsCard key={`${uid}-${article.slug}`} article={article} index={i} />
            ))}
          </motion.div>
        )}

        {layout === 'featured' && (
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
              >
                {articles.slice(0, 1).map((article) => (
                  <FeaturedArticle key={`${uid}-featured-${article.slug}`} article={article} />
                ))}
              </motion.div>
            </div>
            <div className="lg:col-span-1">
              <h3 className="mb-6 text-lg font-semibold text-[var(--kindonar-color-neutral-900)]">
                Latest News
              </h3>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
                className="space-y-4"
              >
                {articles.slice(1).map((article) => (
                  <SidebarArticle key={`${uid}-sidebar-${article.slug}`} article={article} />
                ))}
              </motion.div>
            </div>
          </div>
        )}

        {layout === 'magazine' && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {articles.slice(0, 1).map((article) => (
              <MagazineArticle key={`${uid}-mag-${article.slug}`} article={article} large />
            ))}
            {articles.slice(1, 5).map((article) => (
              <MagazineArticle key={`${uid}-mag-${article.slug}`} article={article} />
            ))}
          </motion.div>
        )}

        {layout === 'grid' && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            className={cn(
              'grid gap-6',
              'grid-cols-1 sm:grid-cols-2',
              config.maxColumns === 2
                ? 'lg:grid-cols-2'
                : config.maxColumns === 4
                  ? 'lg:grid-cols-4'
                  : 'lg:grid-cols-3',
            )}
          >
            {articles.map((article, i) => (
              <NewsCard key={`${uid}-grid-${article.slug}`} article={article} index={i} />
            ))}
          </motion.div>
        )}

        {layout === 'timeline' && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            className="mx-auto max-w-3xl space-y-8"
          >
            {articles.map((article) => (
              <TimelineArticle key={`${uid}-tl-${article.slug}`} article={article} />
            ))}
          </motion.div>
        )}

        {layout === 'carousel' && <NewsCarousel articles={articles} uid={uid} />}
      </div>
    </section>
  );
}

function NewsCarousel({ articles, uid }: { articles: NewsArticle[]; uid: string }) {
  const safeArticles = Array.isArray(articles) ? articles : [];
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' });
  const [prevEnabled, setPrevEnabled] = useState(false);
  const [nextEnabled, setNextEnabled] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevEnabled(emblaApi.canScrollPrev());
    setNextEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-4 flex">
          {safeArticles.map((article) => (
            <CarouselArticle key={`${uid}-car-${article.slug}`} article={article} />
          ))}
        </div>
      </div>
      <div className="mt-8 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={scrollPrev}
          disabled={!prevEnabled}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] text-[var(--kindonar-color-neutral-700)] transition-colors hover:bg-[var(--kindonar-surface-interactive)] disabled:opacity-40"
          aria-label="Previous articles"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M10 12L6 8l4-4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="flex gap-2">
          {safeArticles.slice(0, Math.min(safeArticles.length, 6)).map((_, i) => (
            <button
              key={i}
              type="button"
              className="h-2 w-2 rounded-full bg-[var(--kindonar-color-neutral-300)] transition-colors aria-[current=true]:bg-[var(--kindonar-color-primary-500)]"
              aria-label={`Go to article ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={scrollNext}
          disabled={!nextEnabled}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] text-[var(--kindonar-color-neutral-700)] transition-colors hover:bg-[var(--kindonar-surface-interactive)] disabled:opacity-40"
          aria-label="Next articles"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M6 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
