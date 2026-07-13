'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

const inputVariants = cva(
  'flex w-full rounded-md border bg-[var(--kindonar-surface-raised)] px-3 py-2 text-sm text-[var(--kindonar-color-neutral-900)] placeholder:text-[var(--kindonar-color-neutral-400)] transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[var(--kindonar-color-neutral-700)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kindonar-border-focus)] disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--kindonar-surface-disabled)]',
  {
    variants: {
      variant: {
        default: 'border-[var(--kindonar-border-default)]',
        error: 'border-[var(--kindonar-border-error)] ring-1 ring-[var(--kindonar-border-error)]',
        success: 'border-[var(--kindonar-color-success-500)]',
      },
      size: {
        sm: 'h-9 text-xs px-2.5',
        md: 'h-11 text-sm px-3',
        lg: 'h-13 text-base px-4',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>, VariantProps<typeof inputVariants> {
  /** Label shown above the input */
  label?: string;
  /** Helper text shown below */
  helperText?: string;
  /** Error message (shows when variant="error") */
  error?: string;
  /** Icon shown on the left */
  leftIcon?: ReactNode;
  /** Icon/element shown on the right */
  rightIcon?: ReactNode;
}

/**
 * Text input with label, helper text, error state, and icons.
 *
 * @example
 * <Input label="Email" placeholder="Enter email" error="Invalid email" />
 * <Input leftIcon={<Mail />} placeholder="Email address" />
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      label,
      helperText,
      error,
      leftIcon,
      rightIcon,
      id,
      ...props
    },
    ref,
  ) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
    const currentVariant = error ? 'error' : variant;
    const errorId = inputId ? `${inputId}-error` : undefined;
    const helperId = inputId ? `${inputId}-helper` : undefined;

    return (
      <div className={cn('space-y-1.5', fullWidth && 'w-full')}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-[var(--kindonar-color-neutral-800)]"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-[var(--kindonar-color-neutral-400)]">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              inputVariants({ variant: currentVariant, size, fullWidth, className }),
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',
            )}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : helperText ? helperId : undefined}
            {...props}
          />
          {rightIcon && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-[var(--kindonar-color-neutral-400)]">
              {rightIcon}
            </div>
          )}
        </div>
        {error && (
          <p id={errorId} className="text-xs text-[var(--kindonar-color-error-500)]" role="alert">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={helperId} className="text-xs text-[var(--kindonar-color-neutral-500)]">
            {helperText}
          </p>
        )}
      </div>
    );
  },
);
Input.displayName = 'Input';
