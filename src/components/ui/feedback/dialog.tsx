'use client';

import { forwardRef, useEffect, useRef, type HTMLAttributes, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

export interface DialogProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  /** Action buttons rendered in the footer */
  actions?: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  closeOnOverlay?: boolean;
  closeOnEscape?: boolean;
}

/**
 * Confirmation dialog with title, description, and action buttons.
 * Built on a simpler pattern than Modal — ideal for confirmations.
 */
export const Dialog = forwardRef<HTMLDivElement, DialogProps>(
  (
    {
      open,
      onClose,
      title,
      description,
      actions,
      size = 'sm',
      closeOnOverlay = true,
      closeOnEscape = true,
      children,
      className,
      ...props
    },
    ref,
  ) => {
    const overlayRef = useRef<HTMLDivElement>(null);

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

    const sizeClasses = { sm: 'max-w-sm', md: 'max-w-md', lg: 'max-w-lg' };

    return (
      <div
        ref={overlayRef}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={
          closeOnOverlay
            ? (e) => {
                if (e.target === overlayRef.current) onClose();
              }
            : undefined
        }
      >
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        <div
          ref={ref}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? 'dialog-title' : undefined}
          aria-describedby={description ? 'dialog-desc' : undefined}
          className={cn(
            'relative z-10 w-full rounded-xl bg-[var(--kindonar-surface-raised)] p-6 shadow-[var(--kindonar-shadow-xl)]',
            sizeClasses[size],
            className,
          )}
          {...props}
        >
          {title && (
            <h2
              id="dialog-title"
              className="text-lg font-semibold text-[var(--kindonar-color-neutral-900)]"
            >
              {title}
            </h2>
          )}
          {description && (
            <p id="dialog-desc" className="mt-2 text-sm text-[var(--kindonar-color-neutral-500)]">
              {description}
            </p>
          )}
          {children && (
            <div className="mt-4 text-sm text-[var(--kindonar-color-neutral-700)]">{children}</div>
          )}
          {actions && <div className="mt-6 flex justify-end gap-3">{actions}</div>}
        </div>
      </div>
    );
  },
);
Dialog.displayName = 'Dialog';
