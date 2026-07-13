'use client';

import { forwardRef, type HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export interface PaginationProps extends HTMLAttributes<HTMLElement> {
  /** Current page number (1-indexed) */
  currentPage: number;
  /** Total number of pages */
  totalPages: number;
  /** Called when page changes */
  onPageChange: (page: number) => void;
  /** Number of visible sibling pages around current */
  siblingCount?: number;
  /** Label for the navigation (accessibility) */
  ariaLabel?: string;
}

function getPageRange(
  current: number,
  total: number,
  siblingCount: number = 1,
): (number | 'ellipsis')[] {
  const totalNumbers = siblingCount * 2 + 5;
  if (total <= totalNumbers) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  const leftSibling = Math.max(current - siblingCount, 1);
  const rightSibling = Math.min(current + siblingCount, total);
  const showLeftEllipsis = leftSibling > 2;
  const showRightEllipsis = rightSibling < total - 1;

  const range: (number | 'ellipsis')[] = [1];
  if (showLeftEllipsis) range.push('ellipsis');
  for (let i = leftSibling; i <= rightSibling; i++) {
    range.push(i);
  }
  if (showRightEllipsis) range.push('ellipsis');
  range.push(total);
  return range;
}

/**
 * Accessible pagination with ellipsis for large page counts.
 * Supports keyboard navigation.
 */
export const Pagination = forwardRef<HTMLElement, PaginationProps>(
  (
    {
      currentPage,
      totalPages,
      onPageChange,
      siblingCount = 1,
      ariaLabel = 'Pagination',
      className,
      ...props
    },
    ref,
  ) => {
    if (totalPages <= 1) return null;
    const pages = getPageRange(currentPage, totalPages, siblingCount);

    return (
      <nav
        ref={ref}
        aria-label={ariaLabel}
        className={cn('flex items-center gap-1', className)}
        {...props}
      >
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          aria-label="Previous page"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md text-sm text-[var(--kindonar-color-neutral-600)] hover:bg-[var(--kindonar-surface-interactive)] focus-visible:ring-2 focus-visible:ring-[var(--kindonar-border-focus)] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M10 4l-4 4 4 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {pages.map((page, idx) => {
          if (page === 'ellipsis') {
            return (
              <span
                key={`ellipsis-${idx}`}
                className="flex h-9 w-9 items-center justify-center text-sm text-[var(--kindonar-color-neutral-400)]"
              >
                ...
              </span>
            );
          }
          return (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange(page)}
              aria-current={page === currentPage ? 'page' : undefined}
              aria-label={`Page ${page}`}
              className={cn(
                'inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium transition-colors',
                'focus-visible:ring-2 focus-visible:ring-[var(--kindonar-border-focus)] focus-visible:outline-none',
                page === currentPage
                  ? 'bg-[var(--kindonar-color-primary-500)] text-white'
                  : 'text-[var(--kindonar-color-neutral-600)] hover:bg-[var(--kindonar-surface-interactive)]',
              )}
            >
              {page}
            </button>
          );
        })}

        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          aria-label="Next page"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md text-sm text-[var(--kindonar-color-neutral-600)] hover:bg-[var(--kindonar-surface-interactive)] focus-visible:ring-2 focus-visible:ring-[var(--kindonar-border-focus)] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
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
      </nav>
    );
  },
);
Pagination.displayName = 'Pagination';
