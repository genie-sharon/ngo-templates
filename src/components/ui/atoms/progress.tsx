import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

const progressVariants = cva('h-full rounded-full transition-all duration-500', {
  variants: {
    variant: {
      default: 'bg-[var(--kindonar-color-primary-500)]',
      success: 'bg-[var(--kindonar-color-success-500)]',
      warning: 'bg-[var(--kindonar-color-warning-500)]',
      error: 'bg-[var(--kindonar-color-error-500)]',
      gradient:
        'bg-gradient-to-r from-[var(--kindonar-color-primary-500)] to-[var(--kindonar-color-secondary-500)]',
    },
    size: {
      xs: 'h-1',
      sm: 'h-1.5',
      md: 'h-2',
      lg: 'h-3',
      xl: 'h-4',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

export interface ProgressProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof progressVariants> {
  /** Current value (0-100 or 0-max) */
  value: number;
  /** Maximum value */
  max?: number;
  /** Show percentage label */
  showLabel?: boolean;
  /** Label position */
  labelPosition?: 'top' | 'right' | 'bottom';
}

/**
 * Progress bar for donation goals, skill levels, and loading states.
 */
export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      className,
      variant,
      size,
      value,
      max = 100,
      showLabel = false,
      labelPosition = 'right',
      ...props
    },
    ref,
  ) => {
    const percentage = Math.min(Math.round((value / max) * 100), 100);

    return (
      <div ref={ref} className={cn('w-full', className)} {...props}>
        {showLabel && labelPosition === 'top' && (
          <div className="mb-1 flex justify-between text-xs text-[var(--kindonar-color-neutral-500)]">
            <span>
              {value.toLocaleString('en-US')} / {max.toLocaleString('en-US')}
            </span>
            <span>{percentage}%</span>
          </div>
        )}
        <div className="flex items-center gap-3">
          <div
            role="progressbar"
            aria-valuenow={value}
            aria-valuemin={0}
            aria-valuemax={max}
            className={cn(
              'w-full overflow-hidden rounded-full bg-[var(--kindonar-surface-interactive)]',
              {
                'h-1': size === 'xs',
                'h-1.5': size === 'sm',
                'h-2': size === 'md',
                'h-3': size === 'lg',
                'h-4': size === 'xl',
              },
            )}
          >
            <div
              className={cn(progressVariants({ variant }))}
              style={{ width: `${percentage}%` }}
            />
          </div>
          {showLabel && labelPosition === 'right' && (
            <span className="text-sm font-medium text-[var(--kindonar-color-neutral-700)]">
              {percentage}%
            </span>
          )}
        </div>
        {showLabel && labelPosition === 'bottom' && (
          <div className="mt-1 flex justify-between text-xs text-[var(--kindonar-color-neutral-500)]">
            <span>
              {value.toLocaleString('en-US')} / {max.toLocaleString('en-US')}
            </span>
            <span>{percentage}%</span>
          </div>
        )}
      </div>
    );
  },
);
Progress.displayName = 'Progress';
