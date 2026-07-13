'use client';

import { forwardRef, type HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export interface CounterProps extends HTMLAttributes<HTMLSpanElement> {
  /** Numeric value to display */
  value: number;
  /** Suffix after the number (e.g., "+", "K") */
  suffix?: string;
  /** Prefix before the number (e.g., "$", "₹") */
  prefix?: string;
  /** Label below the counter */
  label?: string;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeClasses = {
  sm: 'text-2xl',
  md: 'text-3xl md:text-4xl',
  lg: 'text-4xl md:text-5xl',
  xl: 'text-5xl md:text-6xl',
};

/**
 * Static counter display for statistics.
 * Shows number with prefix/suffix and optional label.
 * (Animated version is handled by the AnimatedCounter hook)
 *
 * @example
 * <Counter value={50000} suffix="+" label="Children Served" />
 */
export const Counter = forwardRef<HTMLSpanElement, CounterProps>(
  ({ value, suffix = '', prefix = '', label, size = 'md', className, ...props }, ref) => {
    const formatted = value.toLocaleString('en-US');

    return (
      <div className={cn('flex flex-col items-center', className)} ref={ref as never} {...props}>
        <span
          className={cn(
            'font-bold tracking-tight text-[var(--kindonar-color-primary-600)]',
            sizeClasses[size],
          )}
        >
          {prefix && <span className="mr-0.5">{prefix}</span>}
          {formatted}
          {suffix && <span className="ml-0.5">{suffix}</span>}
        </span>
        {label && (
          <span className="mt-1 text-sm text-[var(--kindonar-color-neutral-500)]">{label}</span>
        )}
      </div>
    );
  },
);
Counter.displayName = 'Counter';
