import Link from 'next/link';
import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: ReactNode;
}

export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
  /** Separator between items */
  separator?: ReactNode;
}

/**
 * Breadcrumb navigation for hierarchical pages.
 * Includes structured data for SEO.
 *
 * @example
 * <Breadcrumb items={[
 *   { label: 'Home', href: '/' },
 *   { label: 'Programs', href: '/programs' },
 *   { label: 'Education' },
 * ]} />
 */
export const Breadcrumb = forwardRef<HTMLElement, BreadcrumbProps>(
  ({ items, separator, className, ...props }, ref) => {
    return (
      <nav ref={ref} aria-label="Breadcrumb" className={cn('mb-4', className)} {...props}>
        <ol
          className="flex flex-wrap items-center gap-1.5 text-sm"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li
                key={item.href ?? item.label}
                className="inline-flex items-center gap-1.5"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <meta itemProp="position" content={String(index + 1)} />
                {index > 0 && (
                  <span className="text-[var(--kindonar-color-neutral-400)]" aria-hidden="true">
                    {separator ?? (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M6 4l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                )}
                {item.icon && (
                  <span className="text-[var(--kindonar-color-neutral-400)]" aria-hidden="true">
                    {item.icon}
                  </span>
                )}
                {isLast || !item.href ? (
                  <span
                    className={cn(
                      isLast
                        ? 'font-medium text-[var(--kindonar-color-neutral-900)]'
                        : 'text-[var(--kindonar-color-neutral-500)]',
                    )}
                    aria-current={isLast ? 'page' : undefined}
                    itemProp="name"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-[var(--kindonar-color-primary-600)] hover:text-[var(--kindonar-color-primary-700)] hover:underline"
                    itemProp="item"
                  >
                    <span itemProp="name">{item.label}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    );
  },
);
Breadcrumb.displayName = 'Breadcrumb';
