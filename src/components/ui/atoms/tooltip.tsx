'use client';

import { forwardRef, useState, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

export interface TooltipProps {
  /** Content shown in the tooltip */
  content: ReactNode;
  /** Position relative to children */
  side?: 'top' | 'bottom' | 'left' | 'right';
  /** Delay before showing (ms) */
  delay?: number;
  /** Whether the tooltip is visible (controlled) */
  open?: boolean;
  children: ReactNode;
  className?: string;
}

/**
 * Simple tooltip that appears on hover/focus.
 * Accessible with keyboard support.
 *
 * @example
 * <Tooltip content="Donate now">
 *   <Button>Donate</Button>
 * </Tooltip>
 */
export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  ({ content, side = 'top', delay = 300, open, children, className }, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    const [timeoutId, setTimeoutId] = useState<ReturnType<typeof setTimeout> | null>(null);

    const show = () => {
      const id = setTimeout(() => setIsVisible(true), delay);
      setTimeoutId(id);
    };
    const hide = () => {
      if (timeoutId) clearTimeout(timeoutId);
      setIsVisible(false);
    };

    const visible = open !== undefined ? open : isVisible;

    const positions: Record<string, string> = {
      top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
      bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
      left: 'right-full top-1/2 -translate-y-1/2 mr-2',
      right: 'left-full top-1/2 -translate-y-1/2 ml-2',
    };

    return (
      <div
        ref={ref}
        className={cn('relative inline-flex', className)}
        onMouseEnter={show}
        onMouseLeave={hide}
        onFocus={show}
        onBlur={hide}
      >
        {children}
        {visible && content && (
          <div
            role="tooltip"
            className={cn(
              'pointer-events-none absolute z-50 rounded-md bg-[var(--kindonar-color-neutral-900)] px-2.5 py-1.5 text-xs text-white shadow-lg',
              'whitespace-nowrap',
              'transition-opacity duration-150',
              positions[side],
            )}
          >
            {content}
          </div>
        )}
      </div>
    );
  },
);
Tooltip.displayName = 'Tooltip';
