import { Button } from '@/components/ui/atoms/button';
import { cn } from '@/lib/utils';

export interface OfflineStateProps {
  title?: string;
  message?: string;
  className?: string;
}

/**
 * Offline/network error state.
 */
export function OfflineState({
  title = 'No internet connection',
  message = 'Please check your connection and try again.',
  className,
}: OfflineStateProps) {
  return (
    <div
      className={cn('flex flex-col items-center justify-center px-6 py-16 text-center', className)}
    >
      <div className="mb-4 text-[var(--kindonar-color-warning-400)]" aria-hidden="true">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M1 1l22 22M16.72 11.06A10.94 10.94 0 0119 12.55M5 12.55a10.94 10.94 0 015.17-2.39M10.71 5.05A16 16 0 0122.56 9M1.44 9a16 16 0 014.25-2.88M8.53 16.11a6 6 0 016.95 0"
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
      <div className="mt-6">
        <Button variant="secondary" size="sm" onClick={() => window.location.reload()}>
          Refresh page
        </Button>
      </div>
    </div>
  );
}
