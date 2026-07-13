'use client';

import { forwardRef, useEffect, useRef, type HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  /** Whether the modal is open */
  open: boolean;
  /** Called when the modal should close */
  onClose: () => void;
  /** Modal title */
  title?: string;
  /** Description for screen readers */
  description?: string;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Show close button */
  showClose?: boolean;
  /** Close on backdrop click */
  closeOnOverlay?: boolean;
  /** Close on Escape key */
  closeOnEscape?: boolean;
}

/**
 * Accessible modal dialog with focus trap, keyboard support, and overlay.
 *
 * @example
 * <Modal open={isOpen} onClose={() => setIsOpen(false)} title="Confirm">
 *   <p>Are you sure?</p>
 * </Modal>
 */
export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      open,
      onClose,
      title,
      description,
      size = 'md',
      showClose = true,
      closeOnOverlay = true,
      closeOnEscape = true,
      children,
      className,
      ...props
    },
    ref,
  ) => {
    const overlayRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (!open) return;

      const handleEscape = (e: KeyboardEvent) => {
        if (closeOnEscape && e.key === 'Escape') onClose();
      };
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';

      contentRef.current?.focus();

      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = '';
      };
    }, [open, onClose, closeOnEscape]);

    if (!open) return null;

    const sizeClasses: Record<string, string> = {
      sm: 'max-w-sm',
      md: 'max-w-lg',
      lg: 'max-w-2xl',
      xl: 'max-w-4xl',
      full: 'max-w-[calc(100%-2rem)]',
    };

    return (
      <div
        ref={overlayRef}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        role="presentation"
        onClick={
          closeOnOverlay
            ? (e) => {
                if (e.target === overlayRef.current) onClose();
              }
            : undefined
        }
      >
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />
        <div
          ref={(node) => {
            (ref as React.RefCallback<HTMLDivElement>)?.(node);
            (contentRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? 'modal-title' : undefined}
          aria-describedby={description ? 'modal-desc' : undefined}
          tabIndex={-1}
          className={cn(
            'relative z-10 w-full rounded-xl bg-[var(--kindonar-surface-raised)] p-6 shadow-[var(--kindonar-shadow-xl)]',
            'focus-visible:outline-none',
            'animate-in fade-in zoom-in-95 duration-200',
            sizeClasses[size],
            className,
          )}
          {...props}
        >
          {(title || showClose) && (
            <div className="mb-4 flex items-start justify-between">
              <div>
                {title && (
                  <h2
                    id="modal-title"
                    className="text-lg font-semibold text-[var(--kindonar-color-neutral-900)]"
                  >
                    {title}
                  </h2>
                )}
                {description && (
                  <p
                    id="modal-desc"
                    className="mt-1 text-sm text-[var(--kindonar-color-neutral-500)]"
                  >
                    {description}
                  </p>
                )}
              </div>
              {showClose && (
                <button
                  type="button"
                  onClick={onClose}
                  className="ml-4 inline-flex h-8 w-8 items-center justify-center rounded-md text-[var(--kindonar-color-neutral-400)] hover:bg-[var(--kindonar-surface-interactive)] hover:text-[var(--kindonar-color-neutral-600)] focus-visible:ring-2 focus-visible:ring-[var(--kindonar-border-focus)] focus-visible:outline-none"
                  aria-label="Close modal"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M4 4l8 8m0-8l-8 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              )}
            </div>
          )}
          {children}
        </div>
      </div>
    );
  },
);
Modal.displayName = 'Modal';
