import type { HTMLAttributes, ReactNode } from 'react';

import { cn } from '@/lib/utils';

export interface TimelineItem {
  id: string;
  year?: string;
  title: string;
  description?: string;
  content?: ReactNode;
  icon?: ReactNode;
  active?: boolean;
}

export interface TimelineProps extends HTMLAttributes<HTMLDivElement> {
  items: TimelineItem[];
  /** Visual variant */
  variant?: 'vertical' | 'horizontal' | 'alternating';
  /** Color of the timeline line and dots */
  color?: 'primary' | 'success' | 'muted';
}

/**
 * Timeline for displaying organizational history and milestones.
 */
export function Timeline({
  items,
  variant = 'vertical',
  color = 'primary',
  className,
}: TimelineProps) {
  const dotColors: Record<string, string> = {
    primary: 'border-[var(--kindonar-color-primary-500)] bg-[var(--kindonar-color-primary-100)]',
    success: 'border-[var(--kindonar-color-success-500)] bg-[var(--kindonar-color-success-100)]',
    muted: 'border-[var(--kindonar-color-neutral-400)] bg-[var(--kindonar-color-neutral-100)]',
  };
  const lineColors: Record<string, string> = {
    primary: 'bg-[var(--kindonar-color-primary-200)]',
    success: 'bg-[var(--kindonar-color-success-200)]',
    muted: 'bg-[var(--kindonar-color-neutral-200)]',
  };

  if (variant === 'horizontal') {
    return (
      <div className={cn('flex gap-0 overflow-x-auto pb-4', className)}>
        {items.map((item, idx) => (
          <div key={item.id} className="flex flex-col items-center">
            <div className="flex items-center">
              <div
                className={cn(
                  'flex h-10 w-10 items-center justify-center rounded-full border-2',
                  dotColors[color],
                )}
              >
                {item.icon ?? (
                  <span
                    className={cn(
                      'h-3 w-3 rounded-full',
                      item.active ? 'bg-[var(--kindonar-color-primary-500)]' : 'bg-transparent',
                    )}
                  />
                )}
              </div>
              {idx < items.length - 1 && <div className={cn('h-0.5 w-16', lineColors[color])} />}
            </div>
            <div className="mt-2 w-24 text-center">
              {item.year && (
                <p className="text-xs font-semibold text-[var(--kindonar-color-primary-600)]">
                  {item.year}
                </p>
              )}
              <p className="mt-1 text-sm font-medium text-[var(--kindonar-color-neutral-800)]">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={cn('space-y-0', className)}>
      {items.map((item, idx) => (
        <div
          key={item.id}
          className={cn(
            'relative flex gap-6 pb-8',
            variant === 'alternating' && idx % 2 === 1 && 'flex-row-reverse',
          )}
        >
          <div className="flex flex-col items-center">
            <div
              className={cn(
                'z-10 flex h-10 w-10 items-center justify-center rounded-full border-2',
                dotColors[color],
              )}
            >
              {item.icon ?? (
                <span
                  className={cn(
                    'h-3 w-3 rounded-full',
                    item.active ? 'bg-[var(--kindonar-color-primary-500)]' : 'bg-transparent',
                  )}
                />
              )}
            </div>
            {idx < items.length - 1 && <div className={cn('h-full w-0.5', lineColors[color])} />}
          </div>
          <div
            className={cn(
              'flex-1 pb-4',
              variant === 'alternating' && idx % 2 === 1 && 'text-right',
            )}
          >
            {item.year && (
              <p className="text-xs font-semibold text-[var(--kindonar-color-primary-600)]">
                {item.year}
              </p>
            )}
            <h4 className="mt-1 font-medium text-[var(--kindonar-color-neutral-900)]">
              {item.title}
            </h4>
            {item.description && (
              <p className="mt-1 text-sm text-[var(--kindonar-color-neutral-600)]">
                {item.description}
              </p>
            )}
            {item.content && <div className="mt-2">{item.content}</div>}
          </div>
        </div>
      ))}
    </div>
  );
}
