'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type ElementType, type HTMLAttributes, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

const chipVariants = cva('inline-flex items-center gap-1 rounded-full text-sm font-medium', {
  variants: {
    variant: {
      default: 'bg-[var(--kindonar-color-neutral-100)] text-[var(--kindonar-color-neutral-800)]',
      primary: 'bg-[var(--kindonar-color-primary-100)] text-[var(--kindonar-color-primary-800)]',
      secondary:
        'bg-[var(--kindonar-color-secondary-100)] text-[var(--kindonar-color-secondary-800)]',
      outline:
        'border border-[var(--kindonar-border-default)] text-[var(--kindonar-color-neutral-700)]',
      success: 'bg-[var(--kindonar-color-success-100)] text-[var(--kindonar-color-success-800)]',
      warning: 'bg-[var(--kindonar-color-warning-100)] text-[var(--kindonar-color-warning-800)]',
      error: 'bg-[var(--kindonar-color-error-100)] text-[var(--kindonar-color-error-800)]',
    },
    size: {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-3 py-1 text-sm',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

export interface ChipProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof chipVariants> {
  children: ReactNode;
  onClose?: () => void;
  icon?: ReactNode;
  as?: ElementType;
}

export const Chip = forwardRef<HTMLDivElement, ChipProps>(
  ({ className, variant, size, onClose, icon, as, children, ...props }, ref) => {
    const Tag = as || 'div';
    return (
      <Tag ref={ref} className={cn(chipVariants({ variant, size, className }))} {...props}>
        {icon && <span className="shrink-0">{icon}</span>}
        {children}
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="-mr-1 ml-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full hover:bg-black/10"
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
      </Tag>
    );
  },
);
Chip.displayName = 'Chip';
