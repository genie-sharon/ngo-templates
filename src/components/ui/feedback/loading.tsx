import { Spinner } from '@/components/ui/atoms/spinner';
import { cn } from '@/lib/utils';

export interface LoadingStateProps {
  /** Loading message */
  message?: string;
  /** Full page mode */
  fullPage?: boolean;
  /** Spinner size */
  spinnerSize?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * Full-page or inline loading state with spinner.
 */
export function LoadingState({
  message = 'Loading...',
  fullPage = false,
  spinnerSize = 'lg',
  className,
}: LoadingStateProps) {
  const content = (
    <div className={cn('flex flex-col items-center justify-center gap-4', className)}>
      <Spinner size={spinnerSize} />
      {message && <p className="text-sm text-[var(--kindonar-color-neutral-500)]">{message}</p>}
    </div>
  );

  if (fullPage) {
    return (
      <div className="fixed inset-0 z-40 flex items-center justify-center bg-[var(--kindonar-surface-primary)]/80 backdrop-blur-sm">
        {content}
      </div>
    );
  }

  return <div className="flex min-h-[200px] items-center justify-center">{content}</div>;
}
