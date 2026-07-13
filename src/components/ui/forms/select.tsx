'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type SelectHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

const selectVariants = cva(
  'flex w-full rounded-md border bg-[var(--kindonar-surface-raised)] px-3 py-2 text-sm text-[var(--kindonar-color-neutral-900)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kindonar-border-focus)] disabled:cursor-not-allowed disabled:opacity-50 appearance-none',
  {
    variants: {
      variant: {
        default: 'border-[var(--kindonar-border-default)]',
        error: 'border-[var(--kindonar-border-error)]',
      },
      size: {
        sm: 'h-9 text-xs',
        md: 'h-11 text-sm',
        lg: 'h-13 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);

export interface SelectProps
  extends
    Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'>,
    VariantProps<typeof selectVariants> {
  label?: string;
  error?: string;
  helperText?: string;
  /** Placeholder option text */
  placeholder?: string;
  options: { value: string; label: string; disabled?: boolean }[];
}

/**
 * Native select dropdown with label, error, and placeholder.
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { className, variant, size, label, error, helperText, placeholder, options, id, ...props },
    ref,
  ) => {
    const selectId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="space-y-1.5">
        {label && (
          <label
            htmlFor={selectId}
            className="text-sm font-medium text-[var(--kindonar-color-neutral-800)]"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={cn(
              selectVariants({ variant: error ? 'error' : variant, size, className }),
              'pr-8',
            )}
            aria-invalid={!!error}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-[var(--kindonar-color-neutral-400)]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M4 6l4 4 4-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        {error && (
          <p className="text-xs text-[var(--kindonar-color-error-500)]" role="alert">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="text-xs text-[var(--kindonar-color-neutral-500)]">{helperText}</p>
        )}
      </div>
    );
  },
);
Select.displayName = 'Select';
