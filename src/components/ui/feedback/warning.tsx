import { type ReactNode } from 'react';

import { cn } from '@/lib/utils';

export interface WarningStateProps {
  title?: string;
  message?: string;
  action?: ReactNode;
  className?: string;
}

/**
 * Warning state.
 */
export function WarningState({
  title = 'Warning',
  message = 'Please review this notification carefully.',
  action,
  className,
}: WarningStateProps) {
  return (
    <div
      className={cn('flex flex-col items-center justify-center px-6 py-16 text-center', className)}
    >
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--kindonar-color-warning-100)] text-[var(--kindonar-color-warning-600)]">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 9v4m0 4h.01M10.29 3.86l-8.6 14.86A2 2 0 003.39 21h17.22a2 2 0 001.7-3.12l-8.6-14.86a2 2 0 00-3.42 0z"
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
