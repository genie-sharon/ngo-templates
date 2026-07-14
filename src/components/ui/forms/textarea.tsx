'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type TextareaHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

const textareaVariants = cva(
  'flex w-full rounded-md border bg-[var(--kindonar-surface-raised)] px-3 py-2 text-sm text-[var(--kindonar-color-neutral-900)] placeholder:text-[var(--kindonar-color-neutral-400)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kindonar-border-focus)] disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[var(--kindonar-surface-disabled)] resize-y min-h-[80px]',
  {
    variants: {
      variant: {
        default: 'border-[var(--kindonar-border-default)]',
        error: 'border-[var(--kindonar-border-error)] ring-1 ring-[var(--kindonar-border-error)]',
        success: 'border-[var(--kindonar-color-success-500)]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>, VariantProps<typeof textareaVariants> {
  label?: string;
  helperText?: string;
  error?: string;
  /** Maximum character count */
  maxLength?: number;
  /** Show character count */
  showCharCount?: boolean;
}

/**
 * Multi-line text input with label, error, and character count.
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { className, variant, label, helperText, error, showCharCount, maxLength, id, ...props },
    ref,
  ) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
    const hasValue = 'value' in props;
    const charCount =
      showCharCount && hasValue && typeof props.value === 'string' ? props.value.length : 0;

    return (
      <div className="space-y-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-[var(--kindonar-color-neutral-800)]"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          className={cn(textareaVariants({ variant: error ? 'error' : variant, className }))}
          aria-invalid={!!error}
          maxLength={maxLength}
          {...props}
        />
        <div className="flex justify-between">
          {error ? (
            <p className="text-xs text-[var(--kindonar-color-error-500)]" role="alert">
              {error}
            </p>
          ) : helperText ? (
            <p className="text-xs text-[var(--kindonar-color-neutral-500)]">{helperText}</p>
          ) : (
            <span />
          )}
          {showCharCount && maxLength && (
            <span
              className={cn(
                'text-xs',
                charCount > maxLength * 0.9
                  ? 'text-[var(--kindonar-color-warning-500)]'
                  : 'text-[var(--kindonar-color-neutral-400)]',
              )}
            >
              {charCount}/{maxLength}
            </span>
          )}
        </div>
      </div>
    );
  },
);
Textarea.displayName = 'Textarea';
