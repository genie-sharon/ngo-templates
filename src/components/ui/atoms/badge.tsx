import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-[var(--kindonar-color-neutral-100)] text-[var(--kindonar-color-neutral-800)]',
        primary: 'bg-[var(--kindonar-color-primary-100)] text-[var(--kindonar-color-primary-800)]',
        secondary:
          'bg-[var(--kindonar-color-secondary-100)] text-[var(--kindonar-color-secondary-800)]',
        success: 'bg-[var(--kindonar-color-success-100)] text-[var(--kindonar-color-success-800)]',
        warning: 'bg-[var(--kindonar-color-warning-100)] text-[var(--kindonar-color-warning-800)]',
        error: 'bg-[var(--kindonar-color-error-100)] text-[var(--kindonar-color-error-800)]',
        accent: 'bg-[var(--kindonar-color-accent-100)] text-[var(--kindonar-color-accent-800)]',
        outline:
          'border border-[var(--kindonar-border-default)] text-[var(--kindonar-color-neutral-700)]',
      },
      size: {
        sm: 'px-2 py-0 text-[10px]',
        md: 'px-2.5 py-0.5 text-xs',
        lg: 'px-3 py-1 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {
  /** Whether the badge can be dismissed */
  removable?: boolean;
  /** Called when the badge is dismissed */
  onRemove?: () => void;
}

/**
 * Badge for labels, statuses, and counts.
 * Supports multiple color variants and sizes.
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, removable, onRemove, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant, size, className }))}
        role="status"
        {...props}
      >
        {children}
        {removable && (
          <button
            type="button"
            onClick={onRemove}
            className="-mr-1 ml-1 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full hover:bg-black/10"
            aria-label="Remove"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
              <path
                d="M1 1l8 8m0-8l-8 8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        )}
      </span>
    );
  },
);
Badge.displayName = 'Badge';
