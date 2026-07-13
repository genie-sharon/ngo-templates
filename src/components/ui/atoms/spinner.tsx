import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

const spinnerVariants = cva(
  'animate-spin rounded-full border-2 border-current border-t-transparent',
  {
    variants: {
      size: {
        xs: 'h-3 w-3 border-[1.5px]',
        sm: 'h-4 w-4',
        md: 'h-6 w-6',
        lg: 'h-8 w-8 border-[3px]',
        xl: 'h-12 w-12 border-[3px]',
      },
      color: {
        current: 'text-current',
        primary: 'text-[var(--kindonar-color-primary-500)]',
        secondary: 'text-[var(--kindonar-color-secondary-500)]',
        muted: 'text-[var(--kindonar-color-neutral-400)]',
        white: 'text-white',
      },
    },
    defaultVariants: {
      size: 'md',
      color: 'current',
    },
  },
);

export interface SpinnerProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'>, VariantProps<typeof spinnerVariants> {
  /** Accessible label for screen readers */
  label?: string;
}

/**
 * Loading spinner for indicating busy states.
 * Lightweight and supports multiple sizes and colors.
 */
export const Spinner = forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ className, size, color, label = 'Loading...', ...props }, ref) => {
    return (
      <span
        ref={ref}
        role="status"
        aria-label={label}
        className={cn(spinnerVariants({ size, color, className }))}
        {...props}
      >
        <span className="sr-only">{label}</span>
      </span>
    );
  },
);
Spinner.displayName = 'Spinner';
