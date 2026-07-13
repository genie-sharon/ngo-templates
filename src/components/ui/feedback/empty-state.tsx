import { type ReactNode } from 'react';

import { cn } from '@/lib/utils';

export interface EmptyStateProps {
  /** Icon or illustration */
  icon?: ReactNode;
  /** Title text */
  title: string;
  /** Description text */
  description?: string;
  /** Optional action button */
  action?: ReactNode;
  /** Visual variant */
  variant?: 'default' | 'muted';
  className?: string;
}

/**
 * Empty state component for when no data is available.
 * Provides helpful messaging and optional action.
 */
export function EmptyState({
  icon,
  title,
  description,
  action,
  variant = 'default',
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center px-6 py-16 text-center',
        variant === 'muted' && 'rounded-xl bg-[var(--kindonar-surface-interactive)]',
        className,
      )}
    >
      {icon && (
        <div className="mb-4 text-[var(--kindonar-color-neutral-300)]" aria-hidden="true">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-[var(--kindonar-color-neutral-800)]">{title}</h3>
      {description && (
        <p className="mt-1 max-w-sm text-sm text-[var(--kindonar-color-neutral-500)]">
          {description}
        </p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}

/**
 * 404 error state for page not found.
 */
export function NotFoundState({ className }: { className?: string }) {
  return (
    <div
      className={cn('flex flex-col items-center justify-center px-6 py-24 text-center', className)}
    >
      <p className="text-8xl font-extrabold text-[var(--kindonar-color-primary-500)]">404</p>
      <h2 className="mt-4 text-2xl font-bold text-[var(--kindonar-color-neutral-900)]">
        Page not found
      </h2>
      <p className="mt-2 text-[var(--kindonar-color-neutral-500)]">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
    </div>
  );
}
