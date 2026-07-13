import { type ReactNode } from 'react';

import { Button } from '@/components/ui/atoms/button';
import { cn } from '@/lib/utils';

export interface ErrorStateProps {
  /** Error title */
  title?: string;
  /** Error message */
  message?: string;
  /** Retry action */
  onRetry?: () => void;
  /** Custom action */
  action?: ReactNode;
  className?: string;
}

/**
 * Error state with message and optional retry button.
 */
export function ErrorState({
  title = 'Something went wrong',
  message = 'An unexpected error occurred. Please try again.',
  onRetry,
  action,
  className,
}: ErrorStateProps) {
  return (
    <div
      className={cn('flex flex-col items-center justify-center px-6 py-16 text-center', className)}
    >
      <div className="mb-4 text-[var(--kindonar-color-error-400)]" aria-hidden="true">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          <path d="M12 8v4m0 4h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-[var(--kindonar-color-neutral-900)]">{title}</h3>
      {message && (
        <p className="mt-2 max-w-md text-sm text-[var(--kindonar-color-neutral-500)]">{message}</p>
      )}
      {onRetry && (
        <div className="mt-6">
          <Button variant="secondary" size="sm" onClick={onRetry}>
            Try again
          </Button>
        </div>
      )}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
