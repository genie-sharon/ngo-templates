import { cn } from '@/lib/utils';

export interface MaintenanceStateProps {
  title?: string;
  message?: string;
  /** Estimated time (e.g., "2 hours") */
  estimatedTime?: string;
  className?: string;
}

/**
 * Maintenance/under construction state.
 */
export function MaintenanceState({
  title = 'Under maintenance',
  message = 'We are currently performing scheduled maintenance.',
  estimatedTime,
  className,
}: MaintenanceStateProps) {
  return (
    <div
      className={cn('flex flex-col items-center justify-center px-6 py-24 text-center', className)}
    >
      <div className="mb-4 text-[var(--kindonar-color-primary-400)]" aria-hidden="true">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-[var(--kindonar-color-neutral-900)]">{title}</h2>
      <p className="mt-2 max-w-md text-sm text-[var(--kindonar-color-neutral-500)]">{message}</p>
      {estimatedTime && (
        <p className="mt-4 text-sm font-medium text-[var(--kindonar-color-primary-600)]">
          Estimated time: {estimatedTime}
        </p>
      )}
      <div className="mt-8 h-2 w-64 overflow-hidden rounded-full bg-[var(--kindonar-surface-interactive)]">
        <div className="h-full w-1/2 animate-pulse rounded-full bg-[var(--kindonar-color-primary-500)]" />
      </div>
    </div>
  );
}
