import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

const tagVariants = cva(
  'inline-flex items-center gap-1 whitespace-nowrap rounded-md px-2 py-0.5 text-xs font-medium',
  {
    variants: {
      variant: {
        default:
          'bg-[var(--kindonar-surface-interactive)] text-[var(--kindonar-color-neutral-700)]',
        primary: 'bg-[var(--kindonar-color-primary-100)] text-[var(--kindonar-color-primary-800)]',
        success: 'bg-[var(--kindonar-color-success-100)] text-[var(--kindonar-color-success-800)]',
        warning: 'bg-[var(--kindonar-color-warning-100)] text-[var(--kindonar-color-warning-800)]',
        error: 'bg-[var(--kindonar-color-error-100)] text-[var(--kindonar-color-error-800)]',
        outline:
          'border border-[var(--kindonar-border-default)] text-[var(--kindonar-color-neutral-600)]',
      },
      size: {
        sm: 'px-1.5 py-0 text-[10px]',
        md: 'px-2 py-0.5 text-xs',
        lg: 'px-2.5 py-1 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);

export interface TagProps
  extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof tagVariants> {
  /** If true, shows a remove button */
  removable?: boolean;
  onRemove?: () => void;
}

/**
 * Tag/Chip for filtering, categorization, and metadata display.
 */
export const Tag = forwardRef<HTMLSpanElement, TagProps>(
  ({ className, variant, size, removable, onRemove, children, ...props }, ref) => {
    return (
      <span ref={ref} className={cn(tagVariants({ variant, size, className }))} {...props}>
        {children}
        {removable && (
          <button
            type="button"
            onClick={onRemove}
            className="ml-0.5 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full hover:bg-black/10"
            aria-label="Remove"
          >
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
              <path
                d="M1 1l6 6m0-6l-6 6"
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
Tag.displayName = 'Tag';
