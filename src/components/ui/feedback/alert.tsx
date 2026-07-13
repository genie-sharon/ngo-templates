import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

const alertVariants = cva('relative w-full rounded-lg border px-4 py-3 text-sm', {
  variants: {
    variant: {
      default:
        'border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] text-[var(--kindonar-color-neutral-800)]',
      info: 'border-[var(--kindonar-color-info-200)] bg-[var(--kindonar-color-info-50)] text-[var(--kindonar-color-info-900)]',
      success:
        'border-[var(--kindonar-color-success-200)] bg-[var(--kindonar-color-success-50)] text-[var(--kindonar-color-success-900)]',
      warning:
        'border-[var(--kindonar-color-warning-200)] bg-[var(--kindonar-color-warning-50)] text-[var(--kindonar-color-warning-900)]',
      error:
        'border-[var(--kindonar-color-error-200)] bg-[var(--kindonar-color-error-50)] text-[var(--kindonar-color-error-900)]',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface AlertProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
  /** Alert title */
  title?: string;
  /** Icon override */
  icon?: ReactNode;
  /** Whether the alert can be dismissed */
  dismissible?: boolean;
  /** Called when dismissed */
  onDismiss?: () => void;
}

/**
 * Alert banner for important messages.
 * Supports info, success, warning, and error variants.
 */
export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, title, icon, dismissible, onDismiss, children, ...props }, ref) => {
    const icons: Record<string, ReactNode> = {
      info: <InfoIcon />,
      success: <SuccessIcon />,
      warning: <WarningIcon />,
      error: <ErrorIcon />,
    };

    return (
      <div ref={ref} role="alert" className={cn(alertVariants({ variant, className }))} {...props}>
        <div className="flex items-start gap-3">
          {(icon ?? (variant && icons[variant])) ? (
            <span className="mt-0.5 shrink-0">{icon ?? (variant ? icons[variant] : null)}</span>
          ) : null}
          <div className="flex-1">
            {title && <p className="font-medium">{title}</p>}
            <div className="text-sm">{children}</div>
          </div>
          {dismissible && onDismiss && (
            <button
              type="button"
              onClick={onDismiss}
              className="shrink-0 text-current opacity-50 hover:opacity-100"
              aria-label="Dismiss"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M4 4l8 8m0-8l-8 8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    );
  },
);
Alert.displayName = 'Alert';

function InfoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0 1 1 0 002 0zm-1 3a1 1 0 00-1 1v3a1 1 0 002 0v-3a1 1 0 00-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function SuccessIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 10-2 0 1 1 0 002 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ErrorIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
        clipRule="evenodd"
      />
    </svg>
  );
}
