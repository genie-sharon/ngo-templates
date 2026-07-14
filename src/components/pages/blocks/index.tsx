'use client';

import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import type { BreadcrumbItem } from '../page-config.types';

export function Breadcrumbs({ items, className }: { items: BreadcrumbItem[]; className?: string }) {
  if (!items?.length) return null;
  return (
    <nav aria-label="Breadcrumb" className={cn('mb-6', className)}>
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[var(--kindonar-color-neutral-500)]">
        <li>
          <Link
            href="/"
            className="inline-flex items-center gap-1 transition-colors hover:text-[var(--kindonar-color-primary-600)]"
          >
            <Home className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            {idx === items.length - 1 ? (
              <span
                key={item.href}
                className="font-medium text-[var(--kindonar-color-neutral-800)]"
                aria-current="page"
              >
                {item.label}
              </span>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-[var(--kindonar-color-primary-600)]"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageSidebar({
  items,
  className,
}: {
  items: { label: string; href: string }[];
  className?: string;
}) {
  return (
    <nav className={cn('sticky top-24 space-y-1', className)} aria-label="Page navigation">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block rounded-md px-3 py-2 text-sm text-[var(--kindonar-color-neutral-600)] transition-colors hover:bg-[var(--kindonar-surface-interactive)] hover:text-[var(--kindonar-color-neutral-900)]"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
