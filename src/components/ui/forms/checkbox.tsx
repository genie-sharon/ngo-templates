'use client';

import { forwardRef, type InputHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  /** Whether the checkbox is in an indeterminate state */
  indeterminate?: boolean;
  /** Error message */
  error?: string;
}

/**
 * Checkbox with label and optional indeterminate state.
 * Accessible with keyboard support.
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, indeterminate, error, id, ...props }, ref) => {
    const checkId =
      id || (label ? `checkbox-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

    return (
      <div className="space-y-1">
        <label htmlFor={checkId} className="inline-flex cursor-pointer items-center gap-3">
          <span className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center">
            <input
              ref={ref}
              type="checkbox"
              id={checkId}
              className="peer absolute h-0 w-0 opacity-0"
              aria-invalid={!!error}
              {...props}
            />
            <span
              className={cn(
                'flex h-5 w-5 items-center justify-center rounded border-2 transition-colors',
                'border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)]',
                'peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--kindonar-border-focus)] peer-focus-visible:ring-offset-1',
                'peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
                'peer-checked:border-[var(--kindonar-color-primary-500)] peer-checked:bg-[var(--kindonar-color-primary-500)]',
                error && 'border-[var(--kindonar-border-error)]',
                className,
              )}
            >
              {props.checked && (
                <svg
                  className="h-3 w-3 text-white"
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2.5 6L5 8.5L9.5 3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              {indeterminate && !props.checked && (
                <div className="h-0.5 w-2.5 rounded bg-[var(--kindonar-color-primary-500)]" />
              )}
            </span>
          </span>
          {label && (
            <span className="text-sm text-[var(--kindonar-color-neutral-800)]">{label}</span>
          )}
        </label>
        {error && (
          <p className="pl-7 text-xs text-[var(--kindonar-color-error-500)]" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  },
);
Checkbox.displayName = 'Checkbox';
