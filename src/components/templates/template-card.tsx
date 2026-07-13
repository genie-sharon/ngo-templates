'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import type { TemplateData } from '@/data/templates/types';
import { TEMPLATE_PAGE_NAMES } from '@/data/templates/types';
import { cn } from '@/lib/utils';

const templateAccents: Record<string, string> = {
  universal: 'from-blue-500 to-teal-500',
  healthcare: 'from-emerald-500 to-cyan-500',
  education: 'from-orange-500 to-rose-500',
  'animal-welfare': 'from-amber-500 to-green-500',
  environment: 'from-green-500 to-emerald-500',
  'disaster-relief': 'from-red-500 to-orange-500',
  'faith-based': 'from-purple-500 to-indigo-500',
  community: 'from-pink-500 to-rose-500',
  arts: 'from-violet-500 to-fuchsia-500',
  humanitarian: 'from-sky-500 to-blue-500',
};

const templatePreviewGradients: Record<string, string> = {
  universal:
    'from-blue-50 via-indigo-50/40 to-teal-50 dark:from-blue-950/40 dark:via-indigo-950/30 dark:to-teal-950/40',
  healthcare:
    'from-emerald-50 via-teal-50/40 to-cyan-50 dark:from-emerald-950/40 dark:via-teal-950/30 dark:to-cyan-950/40',
  education:
    'from-orange-50 via-amber-50/40 to-rose-50 dark:from-orange-950/40 dark:via-amber-950/30 dark:to-rose-950/40',
  'animal-welfare':
    'from-amber-50 via-lime-50/40 to-green-50 dark:from-amber-950/40 dark:via-lime-950/30 dark:to-green-950/40',
  environment:
    'from-green-50 via-emerald-50/40 to-teal-50 dark:from-green-950/40 dark:via-emerald-950/30 dark:to-teal-950/40',
  'disaster-relief':
    'from-red-50 via-orange-50/40 to-amber-50 dark:from-red-950/40 dark:via-orange-950/30 dark:to-amber-950/40',
  'faith-based':
    'from-purple-50 via-violet-50/40 to-indigo-50 dark:from-purple-950/40 dark:via-violet-950/30 dark:to-indigo-950/40',
  community:
    'from-pink-50 via-rose-50/40 to-fuchsia-50 dark:from-pink-950/40 dark:via-rose-950/30 dark:to-fuchsia-950/40',
  arts: 'from-violet-50 via-purple-50/40 to-fuchsia-50 dark:from-violet-950/40 dark:via-purple-950/30 dark:to-fuchsia-950/40',
  humanitarian:
    'from-sky-50 via-blue-50/40 to-indigo-50 dark:from-sky-950/40 dark:via-blue-950/30 dark:to-indigo-950/40',
};

const templateBadges: Record<string, { label: string; color: string }[]> = {
  universal: [
    {
      label: 'Accessibility',
      color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    },
    {
      label: 'Themeable',
      color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    },
  ],
  healthcare: [
    {
      label: 'Accessibility',
      color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    },
    {
      label: 'HIPAA Ready',
      color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    },
    {
      label: 'Dark Mode',
      color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
    },
  ],
  education: [
    {
      label: 'Accessibility',
      color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    },
    {
      label: 'Dark Mode',
      color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
    },
    {
      label: 'Responsive',
      color: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400',
    },
  ],
  'animal-welfare': [
    {
      label: 'Accessibility',
      color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    },
    { label: 'SEO', color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' },
    {
      label: 'Motion',
      color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
    },
  ],
  environment: [
    {
      label: 'Accessibility',
      color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    },
    { label: 'SEO', color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' },
    {
      label: 'Responsive',
      color: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400',
    },
  ],
  'disaster-relief': [
    {
      label: 'Accessibility',
      color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    },
    {
      label: 'Motion',
      color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
    },
    {
      label: 'Responsive',
      color: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400',
    },
  ],
  'faith-based': [
    {
      label: 'Accessibility',
      color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    },
    {
      label: 'Dark Mode',
      color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
    },
    { label: 'SEO', color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' },
  ],
  community: [
    {
      label: 'Accessibility',
      color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    },
    {
      label: 'Motion',
      color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
    },
    {
      label: 'Dark Mode',
      color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
    },
  ],
  arts: [
    {
      label: 'Accessibility',
      color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    },
    {
      label: 'Motion',
      color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
    },
    { label: 'SEO', color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' },
    {
      label: 'Responsive',
      color: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400',
    },
  ],
  humanitarian: [
    {
      label: 'Accessibility',
      color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    },
    {
      label: 'Motion',
      color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
    },
    { label: 'SEO', color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' },
    {
      label: 'Dark Mode',
      color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
    },
  ],
};

const NAV_ICONS: Record<string, string> = {
  home: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  about: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  programs:
    'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
  gallery:
    'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
  donate:
    'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  volunteer:
    'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  contact:
    'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  news: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z',
  impact: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
  transparency:
    'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  faq: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z',
};

function getPageIcon(pageSlug: string): string {
  return NAV_ICONS[pageSlug as keyof typeof NAV_ICONS]!;
}

function useTemplateInfo(template: TemplateData) {
  const pageCount = Object.keys(template.pages).length;
  const accent = templateAccents[template.slug] || 'from-neutral-400 to-neutral-500';
  const previewGradient =
    templatePreviewGradients[template.slug] ||
    'from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800';
  const badges = templateBadges[template.slug] || [];
  const pageNames = Object.keys(template.pages)
    .map((slug) => ({ slug, label: TEMPLATE_PAGE_NAMES[slug] || slug }))
    .slice(0, 5);
  const hasMore = pageCount > 5;
  return { pageCount, accent, previewGradient, badges, pageNames, hasMore };
}

export function TemplateCard({ template, index = 0 }: { template: TemplateData; index?: number }) {
  const { pageCount, accent, previewGradient, badges, pageNames, hasMore } =
    useTemplateInfo(template);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0, 0, 0.2, 1] }}
      className="group"
    >
      <div className="relative rounded-2xl border border-neutral-200/70 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700/80">
        <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-b from-transparent via-transparent to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />

        <div className="relative overflow-hidden rounded-t-2xl">
          <div className={cn('relative aspect-[16/10] overflow-hidden', previewGradient)}>
            <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent dark:from-neutral-900/50" />
            <div className="absolute inset-0 flex flex-col p-3 sm:p-4">
              <div className="mb-2 flex items-center gap-2 rounded-lg border border-white/20 bg-white/40 px-3 py-2 backdrop-blur-sm dark:border-white/10 dark:bg-neutral-900/50">
                <div className={cn('h-3 w-3 rounded-full bg-gradient-to-r', accent)} />
                <div className="ml-1 h-1.5 w-10 rounded-full bg-neutral-300/50 dark:bg-neutral-700/50" />
                <div className="ml-auto flex gap-1.5">
                  <div className="h-1.5 w-6 rounded-full bg-neutral-300/40 dark:bg-neutral-700/40" />
                  <div className="h-1.5 w-6 rounded-full bg-neutral-300/40 dark:bg-neutral-700/40" />
                  <div className="h-1.5 w-6 rounded-full bg-neutral-300/40 dark:bg-neutral-700/40" />
                </div>
              </div>
              <div className="flex flex-1 gap-2">
                <div className="flex flex-1 flex-col justify-center">
                  <div className={cn('mb-1.5 h-2 w-16 rounded-full bg-gradient-to-r', accent)} />
                  <div className="mb-1 h-2.5 w-full max-w-[180px] rounded-sm bg-neutral-300/40 dark:bg-neutral-700/40" />
                  <div className="mb-1 h-2 w-3/4 rounded-sm bg-neutral-300/30 dark:bg-neutral-700/30" />
                  <div className="mb-2 h-2 w-1/2 rounded-sm bg-neutral-300/30 dark:bg-neutral-700/30" />
                  <div className="flex gap-1.5">
                    <div
                      className={cn('h-4 flex-1 rounded-sm bg-gradient-to-r opacity-60', accent)}
                    />
                    <div className="h-4 w-14 rounded-sm border border-neutral-300/30 dark:border-neutral-700/30" />
                  </div>
                </div>
                <div className="hidden w-24 flex-col gap-1.5 sm:flex">
                  <div className="flex-1 rounded-lg bg-neutral-300/20 p-2 dark:bg-neutral-700/20">
                    <div className="mb-0.5 h-2 w-8 rounded-sm bg-neutral-400/40" />
                    <div className="h-1.5 w-12 rounded-sm bg-neutral-300/30" />
                  </div>
                  <div className="flex-1 rounded-lg bg-neutral-300/20 p-2 dark:bg-neutral-700/20">
                    <div className="mb-0.5 h-2 w-6 rounded-sm bg-neutral-400/40" />
                    <div className="h-1.5 w-10 rounded-sm bg-neutral-300/30" />
                  </div>
                </div>
              </div>
              <div className="mt-2 flex gap-1.5">
                <div className="flex-1 rounded-md bg-neutral-300/20 p-1.5 dark:bg-neutral-700/20">
                  <div className="flex gap-1">
                    <div className="h-6 flex-1 rounded-sm bg-neutral-400/30" />
                    <div className="h-6 flex-1 rounded-sm bg-neutral-400/30" />
                    <div className="h-6 flex-1 rounded-sm bg-neutral-400/30" />
                  </div>
                </div>
              </div>
              <div className="mt-1.5 flex items-center gap-1.5">
                <div
                  className={cn('h-1 rounded-full bg-gradient-to-r opacity-40', accent)}
                  style={{ width: '30%' }}
                />
                <div
                  className={cn('h-1 rounded-full bg-gradient-to-r opacity-30', accent)}
                  style={{ width: '20%' }}
                />
                <div className="ml-auto h-1 w-12 rounded-full bg-neutral-300/20" />
              </div>
            </div>
            <div className="absolute top-3 right-3 z-10 flex gap-1.5">
              {badges.slice(0, 3).map((badge) => {
                const iconMap: Record<string, string> = {
                  Accessibility: 'aA',
                  SEO: 'SEO',
                  Responsive: 'R',
                  'Dark Mode': 'DM',
                  Motion: 'M',
                  Themeable: 'T',
                  'HIPAA Ready': 'HIPAA',
                };
                return (
                  <span
                    key={badge.label}
                    className={cn(
                      'inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[9px] font-bold tracking-wider uppercase shadow-sm backdrop-blur-sm',
                      badge.color,
                    )}
                  >
                    {iconMap[badge.label] || badge.label.slice(0, 3)}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        <div className="relative p-5 sm:p-6">
          <div className="mb-3 flex items-start justify-between gap-3">
            <div>
              <h3 className="group-hover:text-primary-600 dark:group-hover:text-primary-400 text-base font-semibold text-neutral-900 transition-colors dark:text-neutral-100">
                {template.name}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                {template.tagline}
              </p>
            </div>
            <span className="shrink-0 rounded-lg bg-neutral-100 px-2.5 py-1 text-[11px] font-semibold whitespace-nowrap text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
              {pageCount} {pageCount === 1 ? 'page' : 'pages'}
            </span>
          </div>

          {badges.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-1.5">
              {badges.map((badge) => (
                <span
                  key={badge.label}
                  className={cn(
                    'inline-block rounded-full px-2.5 py-0.5 text-[10px] leading-4 font-medium tracking-wide uppercase',
                    badge.color,
                  )}
                >
                  {badge.label}
                </span>
              ))}
            </div>
          )}

          <div className="mb-5 flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="text-[11px] font-medium text-neutral-400 dark:text-neutral-500">
              Pages:
            </span>
            {pageNames.map((p) => (
              <span
                key={p.slug}
                className="inline-flex items-center gap-1 rounded-md bg-neutral-100 px-1.5 py-0.5 text-[10px] font-medium text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400"
              >
                <svg
                  className="h-3 w-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={getPageIcon(p.slug)} />
                </svg>
                {p.label}
              </span>
            ))}
            {hasMore && (
              <span className="text-[10px] text-neutral-300 dark:text-neutral-600">
                +{pageCount - 5} more
              </span>
            )}
          </div>

          <div className="flex items-center gap-3 border-t border-neutral-100 pt-4 dark:border-neutral-800">
            <Link
              href={`/templates/${template.slug}`}
              className={cn(
                'inline-flex h-9 flex-1 items-center justify-center gap-1.5 rounded-lg text-xs font-semibold transition-all',
                'bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200',
              )}
            >
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              Live Preview
            </Link>
            <Link
              href={`/templates/${template.slug}`}
              className={cn(
                'inline-flex h-9 flex-1 items-center justify-center gap-1.5 rounded-lg text-xs font-semibold transition-all',
                'border border-neutral-200 text-neutral-700 hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-neutral-600 dark:hover:bg-neutral-800',
              )}
            >
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
              View Details
            </Link>
          </div>
        </div>

        <div
          className={cn(
            'pointer-events-none absolute inset-0 rounded-2xl transition-all duration-500',
            'ring-1 ring-inset group-hover:opacity-100',
            'opacity-0 ring-transparent',
          )}
          style={{
            backgroundImage: `linear-gradient(135deg, transparent 60%, ${getRgbFromSlug(template.slug)} 100%)`,
            boxShadow: `inset 0 0 0 1px ${getRgbFromSlug(template.slug).replace('0.06', '0.15')}`,
          }}
        />
      </div>
    </motion.div>
  );
}

function getRgbFromSlug(slug: string): string {
  const map: Record<string, string> = {
    universal: 'rgba(59,130,246,0.06)',
    healthcare: 'rgba(16,185,129,0.06)',
    education: 'rgba(249,115,22,0.06)',
    'animal-welfare': 'rgba(245,158,11,0.06)',
    environment: 'rgba(34,197,94,0.06)',
    'disaster-relief': 'rgba(239,68,68,0.06)',
    'faith-based': 'rgba(168,85,247,0.06)',
    community: 'rgba(236,72,153,0.06)',
    arts: 'rgba(139,92,246,0.06)',
    humanitarian: 'rgba(14,165,233,0.06)',
  };
  return map[slug] || 'rgba(0,0,0,0.03)';
}

export function FeaturedTemplateCard({ template }: { template: TemplateData }) {
  const { pageCount, accent, previewGradient, badges } = useTemplateInfo(template);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
    >
      <div className="group relative block overflow-hidden rounded-2xl border border-neutral-200/70 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900">
        <div className={cn('absolute inset-x-0 top-0 h-1 bg-gradient-to-r', accent)} />
        <div className="grid gap-0 md:grid-cols-5">
          <div className="flex flex-col justify-center p-6 sm:p-8 md:col-span-2 md:p-10">
            <div className="mb-4 flex items-center gap-3">
              <span className="border-primary-200 bg-primary-50 text-primary-700 dark:border-primary-800 dark:bg-primary-900/20 dark:text-primary-400 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-bold tracking-wider uppercase">
                <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Featured Template
              </span>
              {badges.slice(0, 2).map((badge) => (
                <span
                  key={badge.label}
                  className={cn(
                    'inline-block rounded-full px-2.5 py-0.5 text-[10px] leading-4 font-medium tracking-wide uppercase',
                    badge.color,
                  )}
                >
                  {badge.label}
                </span>
              ))}
            </div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl dark:text-neutral-100">
              {template.name}
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
              {template.description}
            </p>
            <div className="mb-6 flex flex-wrap items-center gap-4 text-xs text-neutral-400 dark:text-neutral-500">
              <span className="inline-flex items-center gap-1.5">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                {pageCount} {pageCount === 1 ? 'page' : 'pages'}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                </svg>
                {template.themeId}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3.75 6h16.5M3.75 12h16.5m-16.5 6h16.5" />
                </svg>
                {template.mood.split(',')[0]}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href={`/templates/${template.slug}`}
                className="inline-flex h-10 items-center gap-2 rounded-lg bg-neutral-900 px-5 text-sm font-semibold text-white transition-all hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
              >
                Use Template
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href={`/templates/${template.slug}`}
                className="inline-flex h-10 items-center gap-2 rounded-lg border border-neutral-200 px-5 text-sm font-semibold text-neutral-600 transition-all hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-neutral-600 dark:hover:bg-neutral-800"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                Live Preview
              </Link>
            </div>
          </div>
          <div className="relative min-h-[260px] md:col-span-3">
            <div className={cn('absolute inset-0 bg-gradient-to-br', previewGradient)} />
            <div className="absolute inset-0 bg-gradient-to-l from-white/40 to-transparent dark:from-neutral-900/40" />
            <div className="absolute inset-3 sm:inset-4 md:inset-6">
              <div className="flex h-full flex-col overflow-hidden rounded-xl border border-white/30 bg-white/70 shadow-lg backdrop-blur-sm dark:border-white/10 dark:bg-neutral-900/70">
                <div className="flex items-center gap-1.5 border-b border-white/20 px-3 py-2 dark:border-white/10">
                  <div className="h-2 w-2 rounded-full bg-red-400" />
                  <div className="h-2 w-2 rounded-full bg-amber-400" />
                  <div className="h-2 w-2 rounded-full bg-green-400" />
                  <div
                    className={cn(
                      'ml-2 h-1.5 w-20 rounded-full bg-gradient-to-r opacity-60',
                      accent,
                    )}
                  />
                  <div className="ml-auto flex gap-1">
                    <div className="h-1.5 w-4 rounded-full bg-neutral-300/40" />
                    <div className="h-1.5 w-4 rounded-full bg-neutral-300/40" />
                  </div>
                </div>
                <div className="flex flex-1 gap-2 p-3">
                  <div className="flex flex-1 flex-col justify-center">
                    <div
                      className={cn('-mt-1 mb-2 h-2 w-12 rounded-sm bg-gradient-to-r', accent)}
                    />
                    <div className="mb-1 h-3 w-full rounded-sm bg-neutral-300/50 dark:bg-neutral-700/50" />
                    <div className="mb-1 h-1.5 w-5/6 rounded-sm bg-neutral-300/30 dark:bg-neutral-700/30" />
                    <div className="mb-1 h-1.5 w-3/4 rounded-sm bg-neutral-300/30 dark:bg-neutral-700/30" />
                    <div className="mb-2 h-1.5 w-2/3 rounded-sm bg-neutral-300/30 dark:bg-neutral-700/30" />
                    <div className="flex gap-1.5">
                      <div
                        className={cn('h-5 flex-1 rounded-sm bg-gradient-to-r opacity-50', accent)}
                      />
                      <div className="h-5 w-16 rounded-sm border border-neutral-300/30 dark:border-neutral-700/30" />
                    </div>
                  </div>
                  <div className="hidden w-20 flex-col gap-1.5 sm:flex">
                    <div className="flex-1 rounded-md bg-neutral-300/20 p-1.5 dark:bg-neutral-700/20">
                      <div className="mb-0.5 h-2 w-6 rounded-sm bg-neutral-400/40" />
                      <div className="h-1 w-8 rounded-sm bg-neutral-300/30" />
                    </div>
                    <div className="flex-1 rounded-md bg-neutral-300/20 p-1.5 dark:bg-neutral-700/20">
                      <div className="mb-0.5 h-2 w-6 rounded-sm bg-neutral-400/40" />
                      <div className="h-1 w-8 rounded-sm bg-neutral-300/30" />
                    </div>
                    <div className="flex-1 rounded-md bg-neutral-300/20 p-1.5 dark:bg-neutral-700/20">
                      <div className="mb-0.5 h-2 w-6 rounded-sm bg-neutral-400/40" />
                      <div className="h-1 w-8 rounded-sm bg-neutral-300/30" />
                    </div>
                  </div>
                </div>
                <div className="flex gap-1 border-t border-white/20 px-3 py-1.5 dark:border-white/10">
                  <div
                    className={cn('h-1 flex-1 rounded-full bg-gradient-to-r opacity-40', accent)}
                  />
                  <div className="h-1 flex-1 rounded-full bg-neutral-300/20" />
                  <div className="h-1 flex-1 rounded-full bg-neutral-300/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
