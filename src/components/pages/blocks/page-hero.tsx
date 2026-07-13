'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';

import { cn } from '@/lib/utils';

import type { PageHeroConfig, BreadcrumbItem } from '../page-config.types';

/** Breadcrumb navigation with schema.org structured data */
export function Breadcrumbs({ items, className }: { items: BreadcrumbItem[]; className?: string }) {
  if (!items?.length) return null;
  return (
    <nav aria-label="Breadcrumb" className={cn('mb-6', className)}>
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[var(--kindonar-color-neutral-500)]">
        <li>
          <a
            href="/"
            className="inline-flex items-center gap-1 transition-colors hover:text-[var(--kindonar-color-primary-600)]"
          >
            <Home className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="sr-only">Home</span>
          </a>
        </li>
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            {idx === items.length - 1 ? (
              <span
                className="font-medium text-[var(--kindonar-color-neutral-800)]"
                aria-current="page"
              >
                {item.label}
              </span>
            ) : (
              <a
                href={item.href}
                className="transition-colors hover:text-[var(--kindonar-color-primary-600)]"
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ol>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: items.map((item, idx) => ({
              '@type': 'ListItem',
              position: idx + 2,
              name: item.label,
              item: `${process.env.NEXT_PUBLIC_SITE_URL || ''}${item.href}`,
            })),
          }),
        }}
      />
    </nav>
  );
}

/** Page hero banner — distinct from section Hero, designed for inner pages */
export function PageHero({ config, className }: { config: PageHeroConfig; className?: string }) {
  const sizeClasses = {
    small: 'py-12 md:py-16',
    medium: 'py-16 md:py-20 lg:py-24',
    large: 'py-20 md:py-28 lg:py-32',
    full: 'min-h-[50vh] py-24 md:py-32 lg:py-40',
  };

  return (
    <section
      className={cn(
        'relative flex items-center',
        sizeClasses[config.size || 'medium'],
        config.backgroundImage ? 'text-white' : 'bg-[var(--kindonar-surface-interactive)]',
        className,
      )}
    >
      {config.backgroundImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${config.backgroundImage})` }}
            aria-hidden="true"
          />
          {config.backgroundOverlay !== false && (
            <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
          )}
        </>
      )}
      <div
        className={cn(
          'relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8',
          config.alignment === 'left' ? '' : 'text-center',
        )}
      >
        {config.breadcrumbs && (
          <Breadcrumbs
            items={config.breadcrumbs}
            className={cn(config.alignment === 'center' && 'flex justify-center')}
          />
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1
            className={cn(
              'text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl',
              config.backgroundImage ? 'text-white' : 'text-[var(--kindonar-color-neutral-900)]',
            )}
          >
            {config.title}
          </h1>
          {config.subtitle && (
            <p
              className={cn(
                'mt-4 text-lg md:text-xl',
                config.backgroundImage
                  ? 'text-white/80'
                  : 'text-[var(--kindonar-color-neutral-600)]',
              )}
            >
              {config.subtitle}
            </p>
          )}
          {config.description && (
            <p
              className={cn(
                'mt-3 max-w-3xl text-base leading-relaxed',
                config.backgroundImage
                  ? 'text-white/70'
                  : 'text-[var(--kindonar-color-neutral-500)]',
              )}
            >
              {config.description}
            </p>
          )}
          {(config.cta || config.secondaryCta) && (
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {config.cta && (
                <a
                  href={config.cta.href}
                  className={cn(
                    'inline-flex h-12 items-center rounded-md px-6 text-sm font-semibold transition-all',
                    'bg-[var(--kindonar-color-primary-500)] text-white hover:bg-[var(--kindonar-color-primary-600)]',
                  )}
                >
                  {config.cta.label}
                </a>
              )}
              {config.secondaryCta && (
                <a
                  href={config.secondaryCta.href}
                  className={cn(
                    'inline-flex h-12 items-center rounded-md border px-6 text-sm font-semibold transition-all',
                    config.backgroundImage
                      ? 'border-white/30 text-white hover:bg-white/10'
                      : 'border-[var(--kindonar-border-default)] text-[var(--kindonar-color-neutral-700)] hover:bg-[var(--kindonar-surface-interactive)]',
                  )}
                >
                  {config.secondaryCta.label}
                </a>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

/** Page layout wrapper */
export function PageLayout({
  layout = 'default',
  sidebar,
  children,
  className,
}: {
  layout?: 'default' | 'full-width' | 'sidebar-left' | 'sidebar-right' | 'narrow' | 'wide';
  sidebar?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) {
  const contentWidths = {
    default: 'max-w-7xl',
    'full-width': 'max-w-full',
    'sidebar-left': 'max-w-7xl',
    'sidebar-right': 'max-w-7xl',
    narrow: 'max-w-3xl',
    wide: 'max-w-[90rem]',
  };

  return (
    <div
      className={cn(
        'mx-auto w-full px-4 py-12 sm:px-6 md:py-16 lg:px-8',
        contentWidths[layout],
        className,
      )}
    >
      {layout === 'sidebar-left' && sidebar ? (
        <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
          <aside className="order-1 lg:order-none">{sidebar}</aside>
          <main>{children}</main>
        </div>
      ) : layout === 'sidebar-right' && sidebar ? (
        <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
          <main>{children}</main>
          <aside>{sidebar}</aside>
        </div>
      ) : (
        children
      )}
    </div>
  );
}

/** Sidebar navigation for content pages */
export function PageSidebar({
  items,
  currentPath,
}: {
  items: { label: string; href: string }[];
  currentPath?: string;
}) {
  return (
    <nav className="sticky top-24 space-y-1" aria-label="Page navigation">
      <h2 className="mb-4 text-xs font-semibold tracking-wider text-[var(--kindonar-color-neutral-500)] uppercase">
        On this page
      </h2>
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={cn(
            'block rounded-md px-3 py-2 text-sm transition-colors',
            currentPath === item.href
              ? 'bg-[var(--kindonar-color-primary-100)] font-medium text-[var(--kindonar-color-primary-700)]'
              : 'text-[var(--kindonar-color-neutral-600)] hover:bg-[var(--kindonar-surface-interactive)] hover:text-[var(--kindonar-color-neutral-900)]',
          )}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
