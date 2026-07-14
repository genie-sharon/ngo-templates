'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, User, Clock, Eye } from 'lucide-react';
import { useId, useCallback, useEffect, useState } from 'react';

import { SectionHeadingBlock, staggerItem } from '@/components/sections/motion';
import type { SectionHeading } from '@/components/sections/section-config.types';
import { cn } from '@/lib/utils';
import { formatDate } from '@/lib/utils';

import type { NewsArticle, NewsConfig } from './config.types';

const CATEGORY_IMAGES: Record<string, string[]> = {
  Emergency: [
    'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80',
    'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80',
    'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80',
  ],
  'Emergency Response': [
    'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80',
    'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80',
  ],
  'Emergency Alerts': ['https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80'],
  Healthcare: [
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80',
    'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80',
  ],
  Health: [
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80',
  ],
  'Health Tips': ['https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80'],
  'Medical Research': ['https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80'],
  Education: [
    'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80',
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
    'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80',
  ],
  'Education Research': ['https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80'],
  'Impact Report': ['https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80'],
  'Water & Sanitation': ['https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80'],
  WASH: ['https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80'],
  Climate: ['https://images.unsplash.com/photo-1542601906990-b4d3fb082b14?w=800&q=80'],
  Environment: [
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
    'https://images.unsplash.com/photo-1542601906990-b4d3fb082b14?w=800&q=80',
  ],
  Reforestation: ['https://images.unsplash.com/photo-1542601906990-b4d3fb082b14?w=800&q=80'],
  Ocean: ['https://images.unsplash.com/photo-1559827291-2650d44c1e6c?w=800&q=80'],
  Energy: ['https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80'],
  'Gender Equality': ['https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80'],
  Partnership: ['https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80'],
  'Food Security': ['https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80'],
  'Child Protection': ['https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80'],
  Stories: [
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
    'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80',
  ],
  Transparency: ['https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80'],
  Impact: [
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80',
  ],
  Research: ['https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80'],
  'Disaster Response': ['https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80'],
  'Field Reports': ['https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80'],
  'Volunteer Spotlight': ['https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80'],
  Volunteer: ['https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80'],
  Rescue: ['https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&q=80'],
  Wildlife: [
    'https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?w=800&q=80',
    'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&q=80',
  ],
  Adoption: ['https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&q=80'],
  Faith: ['https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80'],
  Community: [
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
    'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80',
  ],
  Arts: ['https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80'],
  Exhibitions: ['https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80'],
  Grants: ['https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80'],
  Digital: ['https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80'],
  Youth: [
    'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
    'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80',
  ],
  'Press Releases': ['https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80'],
  'Impact Stories': [
    'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80',
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
  ],
  'Health Guide': ['https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80'],
  'Disease Guide': ['https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80'],
  Resource: ['https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80'],
  Download: ['https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80'],
  Programs: [
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
    'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
  ],
};

const CATEGORY_COLORS: Record<string, string> = {
  Emergency: 'bg-red-500',
  'Emergency Response': 'bg-red-500',
  'Emergency Alerts': 'bg-red-500',
  Healthcare: 'bg-emerald-500',
  Health: 'bg-emerald-500',
  'Health Tips': 'bg-emerald-500',
  'Medical Research': 'bg-emerald-500',
  Education: 'bg-blue-500',
  'Education Research': 'bg-blue-500',
  'Impact Report': 'bg-indigo-500',
  'Water & Sanitation': 'bg-cyan-500',
  WASH: 'bg-cyan-500',
  Climate: 'bg-emerald-500',
  Environment: 'bg-emerald-500',
  Reforestation: 'bg-emerald-500',
  Ocean: 'bg-sky-500',
  Energy: 'bg-amber-500',
  'Gender Equality': 'bg-violet-500',
  Partnership: 'bg-purple-500',
  'Food Security': 'bg-orange-500',
  'Child Protection': 'bg-rose-500',
  Stories: 'bg-pink-500',
  Transparency: 'bg-indigo-500',
  Impact: 'bg-indigo-500',
  Research: 'bg-orange-500',
  'Disaster Response': 'bg-red-500',
  'Field Reports': 'bg-amber-600',
  'Volunteer Spotlight': 'bg-teal-500',
  Volunteer: 'bg-teal-500',
  Rescue: 'bg-orange-500',
  Wildlife: 'bg-green-500',
  Adoption: 'bg-yellow-500',
  Faith: 'bg-amber-500',
  Community: 'bg-violet-500',
  Arts: 'bg-fuchsia-500',
  Exhibitions: 'bg-fuchsia-500',
  Grants: 'bg-emerald-600',
  Digital: 'bg-indigo-500',
  Youth: 'bg-blue-500',
  'Press Releases': 'bg-gray-500',
  'Impact Stories': 'bg-indigo-500',
  'Health Guide': 'bg-emerald-500',
  'Disease Guide': 'bg-teal-500',
  Resource: 'bg-neutral-500',
  Download: 'bg-neutral-600',
  Programs: 'bg-blue-500',
};

function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return hash;
}

function getArticleImage(article: NewsArticle): { src: string; alt: string } {
  const imgSrc =
    typeof article.image === 'object' && article.image
      ? article.image.src
      : typeof article.image === 'string'
        ? article.image
        : undefined;

  const imgAlt =
    typeof article.image === 'object' && article.image ? article.image.alt : article.title;

  if (imgSrc && !imgSrc.startsWith('/images/')) {
    return { src: imgSrc, alt: imgAlt };
  }

  const images = CATEGORY_IMAGES[article.category] || CATEGORY_IMAGES['Stories'];
  const fallbackSrc =
    images && images.length > 0
      ? (images[Math.abs(hashCode(article.title)) % images.length] ??
        'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80')
      : 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80';

  return { src: fallbackSrc, alt: imgAlt! };
}

function getCategoryColor(category: string): string {
  return CATEGORY_COLORS[category] || 'bg-[var(--kindonar-color-primary-500)]';
}

function getAuthorName(article: NewsArticle): string | undefined {
  if (!article.author) return undefined;
  return typeof article.author === 'string' ? article.author : article.author.name;
}

function getAuthorAvatar(article: NewsArticle): string | undefined {
  if (!article.author) return undefined;
  return typeof article.author === 'object' ? article.author.avatar : undefined;
}

function NewsImage({
  src,
  alt,
  priority = false,
  className,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={cn(
          'flex items-center justify-center bg-neutral-200 dark:bg-neutral-800',
          className,
        )}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          className="text-neutral-400"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
          <path
            d="M21 15l-5-5L5 21"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
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

function NewsCard({ article, index }: { article: NewsArticle; index: number }) {
  const img = getArticleImage(article);
  const categoryColor = getCategoryColor(article.category);
  const authorName = getAuthorName(article);

  return (
    <motion.article
      variants={staggerItem}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-[var(--kindonar-surface-raised)] shadow-[var(--kindonar-shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <a
        href={article.slug}
        className="relative h-[180px] w-full overflow-hidden md:h-[220px] lg:h-[320px]"
        tabIndex={-1}
      >
        <NewsImage
          src={img.src}
          alt={img.alt}
          priority={index === 0}
          className="transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span
          className={cn(
            'absolute top-3 left-3 z-10 inline-block rounded-full px-3 py-1 text-xs font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:brightness-110',
            categoryColor,
          )}
        >
          {article.category}
        </span>
      </a>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[var(--kindonar-color-neutral-500)]">
          <span className="inline-flex items-center gap-1">
            <Calendar size={12} aria-hidden="true" />
            <time dateTime={article.date}>{formatDate(article.date)}</time>
          </span>
          {authorName && (
            <span className="inline-flex items-center gap-1">
              <User size={12} aria-hidden="true" />
              {authorName}
            </span>
          )}
          {article.readTime && (
            <span className="inline-flex items-center gap-1">
              <Clock size={12} aria-hidden="true" />
              {article.readTime} min read
            </span>
          )}
          {article.views && (
            <span className="inline-flex items-center gap-1">
              <Eye size={12} aria-hidden="true" />
              {article.views}
            </span>
          )}
        </div>
        <a href={article.slug} className="mb-2 block">
          <h3 className="line-clamp-2 text-lg font-semibold text-[var(--kindonar-color-neutral-900)] transition-colors duration-300 group-hover:text-[var(--kindonar-color-primary-600)]">
            {article.title}
          </h3>
        </a>
        <p className="mb-4 line-clamp-2 flex-1 text-sm leading-relaxed text-[var(--kindonar-color-neutral-600)]">
          {article.excerpt}
        </p>
        <a
          href={article.slug}
          className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-[var(--kindonar-color-primary-600)] transition-all duration-300 hover:text-[var(--kindonar-color-primary-700)]"
        >
          Read Full Story
          <ArrowRight
            size={14}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover/btn:translate-x-1"
          />
        </a>
      </div>
    </motion.article>
  );
}

function FeaturedArticle({ article }: { article: NewsArticle }) {
  const img = getArticleImage(article);
  const categoryColor = getCategoryColor(article.category);
  const authorName = getAuthorName(article);

  return (
    <motion.article
      variants={staggerItem}
      className="group relative grid overflow-hidden rounded-2xl bg-[var(--kindonar-surface-raised)] shadow-[var(--kindonar-shadow-sm)] transition-all duration-300 hover:shadow-xl md:grid-cols-2"
    >
      <a
        href={article.slug}
        className="relative h-[240px] w-full overflow-hidden md:h-full"
        tabIndex={-1}
      >
        <NewsImage
          src={img.src}
          alt={img.alt}
          priority
          className="transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span
          className={cn(
            'absolute top-4 left-4 z-10 inline-block rounded-full px-3 py-1 text-xs font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:brightness-110',
            categoryColor,
          )}
        >
          {article.category}
        </span>
      </a>
      <div className="flex flex-col justify-center p-6 md:p-8">
        <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[var(--kindonar-color-neutral-500)]">
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={14} aria-hidden="true" />
            <time dateTime={article.date}>{formatDate(article.date)}</time>
          </span>
          {authorName && (
            <span className="inline-flex items-center gap-1.5">
              <User size={14} aria-hidden="true" />
              {authorName}
            </span>
          )}
          {article.readTime && (
            <span className="inline-flex items-center gap-1.5">
              <Clock size={14} aria-hidden="true" />
              {article.readTime} min read
            </span>
          )}
        </div>
        <a href={article.slug} className="mb-3 block">
          <h3 className="text-2xl font-bold text-[var(--kindonar-color-neutral-900)] transition-colors duration-300 group-hover:text-[var(--kindonar-color-primary-600)] md:text-3xl">
            {article.title}
          </h3>
        </a>
        <p className="mb-4 line-clamp-3 text-base leading-relaxed text-[var(--kindonar-color-neutral-600)]">
          {article.excerpt}
        </p>
        <a
          href={article.slug}
          className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-[var(--kindonar-color-primary-600)] transition-all duration-300 hover:text-[var(--kindonar-color-primary-700)]"
        >
          Read Full Story
          <ArrowRight
            size={14}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover/btn:translate-x-1"
          />
        </a>
      </div>
    </motion.article>
  );
}

function SidebarArticle({ article }: { article: NewsArticle }) {
  const img = getArticleImage(article);
  const categoryColor = getCategoryColor(article.category);

  return (
    <motion.article
      variants={staggerItem}
      className="group flex gap-4 border-b border-[var(--kindonar-border-default)] pb-4 last:border-0 last:pb-0"
    >
      <a
        href={article.slug}
        className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl"
        tabIndex={-1}
      >
        <NewsImage
          src={img.src}
          alt={img.alt}
          className="transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </a>
      <div className="flex flex-1 flex-col justify-center">
        <span
          className={cn(
            'mb-1 inline-block w-fit rounded-full px-2 py-0.5 text-[10px] font-semibold text-white',
            categoryColor,
          )}
        >
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
  const img = getArticleImage(article);
  const categoryColor = getCategoryColor(article.category);
  const authorName = getAuthorName(article);

  return (
    <motion.article
      variants={staggerItem}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-2xl bg-[var(--kindonar-surface-raised)] shadow-[var(--kindonar-shadow-sm)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl',
        large && 'md:col-span-2 md:row-span-2',
      )}
    >
      <a
        href={article.slug}
        className={cn(
          'relative w-full overflow-hidden',
          large ? 'h-[280px] md:h-[360px]' : 'h-[180px] md:h-[220px]',
        )}
        tabIndex={-1}
      >
        <NewsImage
          src={img.src}
          alt={img.alt}
          priority={large}
          className="transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span
          className={cn(
            'absolute top-3 left-3 z-10 inline-block rounded-full px-3 py-1 text-xs font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:brightness-110',
            categoryColor,
          )}
        >
          {article.category}
        </span>
      </a>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[var(--kindonar-color-neutral-500)]">
          <Calendar size={12} aria-hidden="true" />
          <time dateTime={article.date}>{formatDate(article.date)}</time>
          {authorName && (
            <>
              <span aria-hidden="true" className="hidden sm:inline">
                ·
              </span>
              <span className="inline-flex items-center gap-1">
                <User size={12} aria-hidden="true" />
                {authorName}
              </span>
            </>
          )}
        </div>
        <a href={article.slug} className="mb-2 block">
          <h3
            className={cn(
              'line-clamp-2 font-semibold text-[var(--kindonar-color-neutral-900)] transition-colors duration-300 group-hover:text-[var(--kindonar-color-primary-600)]',
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
        <div className="mt-auto pt-2">
          <a
            href={article.slug}
            className="group/btn inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--kindonar-color-primary-600)] transition-all duration-300 hover:text-[var(--kindonar-color-primary-700)]"
          >
            Read Full Story
            <ArrowRight
              size={12}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover/btn:translate-x-1"
            />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function TimelineArticle({ article }: { article: NewsArticle }) {
  const img = getArticleImage(article);
  const categoryColor = getCategoryColor(article.category);
  const authorName = getAuthorName(article);
  const authorAvatar = getAuthorAvatar(article);

  return (
    <motion.article
      variants={staggerItem}
      className="group relative pl-8 before:absolute before:top-8 before:left-[11px] before:h-[calc(100%+2rem)] before:w-0.5 before:bg-[var(--kindonar-border-default)] last:before:hidden"
    >
      <div className="absolute top-1.5 left-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[var(--kindonar-color-primary-500)] bg-[var(--kindonar-surface-primary)]">
        <div className="h-2 w-2 rounded-full bg-[var(--kindonar-color-primary-500)]" />
      </div>
      <div className="flex flex-col overflow-hidden rounded-2xl bg-[var(--kindonar-surface-raised)] p-5 shadow-[var(--kindonar-shadow-sm)] transition-all duration-300 hover:shadow-xl">
        <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-[var(--kindonar-color-neutral-500)]">
          <span className="inline-flex items-center gap-1">
            <Calendar size={12} aria-hidden="true" />
            <time dateTime={article.date}>{formatDate(article.date)}</time>
          </span>
          <span
            className={cn(
              'rounded-full px-2.5 py-0.5 text-xs font-semibold text-white',
              categoryColor,
            )}
          >
            {article.category}
          </span>
        </div>
        <div className="flex gap-4">
          <a
            href={article.slug}
            className="relative h-24 w-32 shrink-0 overflow-hidden rounded-xl"
            tabIndex={-1}
          >
            <NewsImage
              src={img.src}
              alt={img.alt}
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </a>
          <div className="flex flex-1 flex-col">
            <a href={article.slug} className="mb-2 block">
              <h3 className="text-lg font-semibold text-[var(--kindonar-color-neutral-900)] transition-colors group-hover:text-[var(--kindonar-color-primary-600)]">
                {article.title}
              </h3>
            </a>
            <p className="mb-3 line-clamp-2 text-sm leading-relaxed text-[var(--kindonar-color-neutral-600)]">
              {article.excerpt}
            </p>
            {authorName && (
              <div className="mt-auto flex items-center gap-2 text-xs text-[var(--kindonar-color-neutral-500)]">
                {authorAvatar && (
                  <img src={authorAvatar} alt="" className="h-6 w-6 rounded-full object-cover" />
                )}
                <span>{authorName}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function CarouselArticle({ article }: { article: NewsArticle }) {
  const img = getArticleImage(article);
  const categoryColor = getCategoryColor(article.category);
  const authorName = getAuthorName(article);

  return (
    <div className="min-w-0 shrink-0 grow-0 basis-[85%] pl-4 sm:basis-[45%] lg:basis-[30%]">
      <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-[var(--kindonar-surface-raised)] shadow-[var(--kindonar-shadow-sm)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
        <a
          href={article.slug}
          className="relative h-[180px] w-full overflow-hidden md:h-[220px]"
          tabIndex={-1}
        >
          <NewsImage
            src={img.src}
            alt={img.alt}
            className="transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span
            className={cn(
              'absolute top-3 left-3 z-10 inline-block rounded-full px-3 py-1 text-xs font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:brightness-110',
              categoryColor,
            )}
          >
            {article.category}
          </span>
        </a>
        <div className="flex flex-1 flex-col p-5">
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[var(--kindonar-color-neutral-500)]">
            <span className="inline-flex items-center gap-1">
              <Calendar size={12} aria-hidden="true" />
              <time dateTime={article.date}>{formatDate(article.date)}</time>
            </span>
            {authorName && (
              <span className="inline-flex items-center gap-1">
                <User size={12} aria-hidden="true" />
                {authorName}
              </span>
            )}
          </div>
          <a href={article.slug} className="mb-2 block">
            <h3 className="line-clamp-2 text-base font-semibold text-[var(--kindonar-color-neutral-900)] transition-colors group-hover:text-[var(--kindonar-color-primary-600)]">
              {article.title}
            </h3>
          </a>
          <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-[var(--kindonar-color-neutral-600)]">
            {article.excerpt}
          </p>
          <a
            href={article.slug}
            className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-[var(--kindonar-color-primary-600)] transition-all duration-300 hover:text-[var(--kindonar-color-primary-700)]"
          >
            Read Full Story
            <ArrowRight
              size={14}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover/btn:translate-x-1"
            />
          </a>
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
    requestAnimationFrame(() => onSelect());
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
