import { forwardRef, type LabelHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  /** Whether the field is required (shows asterisk) */
  required?: boolean;
}

/**
 * Form label with optional required indicator.
 */
export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, required, children, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn('text-sm font-medium text-[var(--kindonar-color-neutral-800)]', className)}
        {...props}
      >
        {children}
        {required && (
          <span className="ml-1 text-[var(--kindonar-color-error-500)]" aria-hidden="true">
            *
          </span>
        )}
      </label>
    );
  },
);
Label.displayName = 'Label';
