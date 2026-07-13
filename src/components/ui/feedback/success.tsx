import { type ReactNode } from 'react';

import { cn } from '@/lib/utils';

export interface SuccessStateProps {
  title?: string;
  message?: string;
  /** Optional action */
  action?: ReactNode;
  className?: string;
}

/**
 * Success/congratulations state.
 */
export function SuccessState({
  title = 'Success!',
  message = 'Your action was completed successfully.',
  action,
  className,
}: SuccessStateProps) {
  return (
    <div
      className={cn('flex flex-col items-center justify-center px-6 py-16 text-center', className)}
    >
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--kindonar-color-success-100)] text-[var(--kindonar-color-success-600)]">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M5 13l4 4L19 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-[var(--kindonar-color-neutral-900)]">{title}</h3>
      {message && (
        <p className="mt-2 max-w-md text-sm text-[var(--kindonar-color-neutral-500)]">{message}</p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
