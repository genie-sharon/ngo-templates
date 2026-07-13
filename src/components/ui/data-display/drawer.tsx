'use client';

import { forwardRef, useEffect, type HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export interface DrawerProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
  title?: string;
  /** Drawer side */
  side?: 'left' | 'right';
  size?: 'sm' | 'md' | 'lg' | 'full';
  closeOnOverlay?: boolean;
  closeOnEscape?: boolean;
}

/**
 * Slide-in drawer panel from the left or right side.
 */
export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      open,
      onClose,
      title,
      side = 'right',
      size = 'md',
      closeOnOverlay = true,
      closeOnEscape = true,
      children,
      className,
      ...props
    },
    ref,
  ) => {
    useEffect(() => {
      if (!open) return;
      const handleEscape = (e: KeyboardEvent) => {
        if (closeOnEscape && e.key === 'Escape') onClose();
      };
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = '';
      };
    }, [open, onClose, closeOnEscape]);

    if (!open) return null;

    const sizeClasses = {
      sm: side === 'right' ? 'max-w-sm' : 'max-w-sm',
      md: side === 'right' ? 'max-w-md' : 'max-w-md',
      lg: side === 'right' ? 'max-w-lg' : 'max-w-lg',
      full: side === 'right' ? 'max-w-[100vw]' : 'max-w-[100vw]',
    };

    return (
      <div className="fixed inset-0 z-50 flex" role="presentation">
        <div
          className="fixed inset-0 bg-black/50"
          aria-hidden="true"
          onClick={closeOnOverlay ? onClose : undefined}
        />
        <div
          ref={ref}
          role="dialog"
          aria-modal="true"
          aria-label={title}
          className={cn(
            'fixed inset-y-0 flex w-full flex-col bg-[var(--kindonar-surface-raised)] shadow-[var(--kindonar-shadow-xl)] transition-transform duration-300',
            side === 'right' ? 'right-0' : 'left-0',
            sizeClasses[size],
            className,
          )}
          {...props}
        >
          {title && (
            <div className="flex items-center justify-between border-b border-[var(--kindonar-border-default)] px-6 py-4">
              <h2 className="text-lg font-semibold text-[var(--kindonar-color-neutral-900)]">
                {title}
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="rounded-md p-1 text-[var(--kindonar-color-neutral-400)] hover:text-[var(--kindonar-color-neutral-600)]"
                aria-label="Close drawer"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M5 5l10 10M15 5L5 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          )}
          <div className="flex-1 overflow-y-auto p-6">{children}</div>
        </div>
      </div>
    );
  },
);
Drawer.displayName = 'Drawer';
