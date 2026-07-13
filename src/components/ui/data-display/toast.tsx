'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { useEffect, useState, type HTMLAttributes, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

const toastVariants = cva(
  'fixed bottom-4 right-4 z-50 flex max-w-sm items-center gap-3 rounded-lg border px-4 py-3 shadow-lg',
  {
    variants: {
      variant: {
        default:
          'border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] text-[var(--kindonar-color-neutral-900)]',
        success:
          'border-[var(--kindonar-color-success-200)] bg-[var(--kindonar-color-success-50)] text-[var(--kindonar-color-success-900)]',
        error:
          'border-[var(--kindonar-color-error-200)] bg-[var(--kindonar-color-error-50)] text-[var(--kindonar-color-error-900)]',
        warning:
          'border-[var(--kindonar-color-warning-200)] bg-[var(--kindonar-color-warning-50)] text-[var(--kindonar-color-warning-900)]',
        info: 'border-[var(--kindonar-color-info-200)] bg-[var(--kindonar-color-info-50)] text-[var(--kindonar-color-info-900)]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface ToastProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof toastVariants> {
  /** Message content */
  message: string;
  /** Optional title */
  title?: string;
  /** Icon override */
  icon?: ReactNode;
  /** Auto-dismiss duration (ms), 0 to disable */
  duration?: number;
  /** Called when toast is dismissed */
  onDismiss?: () => void;
}

/**
 * Toast notification for temporary messages.
 * Auto-dismisses after specified duration.
 */
export function ToastContent({
  variant,
  message,
  title,
  icon,
  duration = 5000,
  onDismiss,
  className,
}: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    if (duration <= 0) return;
    const timer = setTimeout(() => {
      setIsLeaving(true);
      setTimeout(() => {
        setIsVisible(false);
        onDismiss?.();
      }, 200);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onDismiss]);

  if (!isVisible) return null;

  const icons: Record<string, ReactNode> = {
    success: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path
          d="M5 10l3 3 7-7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    error: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 6v4m0 4h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    warning: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 7v4m0 4h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    info: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="2" />
        <path d="M10 9v5m0-7v.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  };

  return (
    <div
      role="alert"
      aria-live="assertive"
      className={cn(
        toastVariants({ variant }),
        'transition-all duration-200',
        isLeaving ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100',
        className,
      )}
    >
      {icon ?? (variant && icons[variant]) ?? null}
      <div className="flex-1">
        {title && <p className="text-sm font-medium">{title}</p>}
        <p className="text-sm">{message}</p>
      </div>
      <button
        type="button"
        onClick={() => {
          setIsLeaving(true);
          setTimeout(() => onDismiss?.(), 200);
        }}
        className="shrink-0 text-[var(--kindonar-color-neutral-400)] hover:text-[var(--kindonar-color-neutral-600)]"
        aria-label="Dismiss"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M4 4l8 8m0-8l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}

/**
 * Simple hook-based toast manager.
 */
let toastId = 0;
const listeners: Array<(toast: ToastItem) => void> = [];

interface ToastItem {
  id: number;
  message: string;
  variant?: 'default' | 'success' | 'error' | 'warning' | 'info';
  title?: string;
  duration?: number;
}

export function toast(message: string, options?: Omit<ToastItem, 'id' | 'message'>) {
  const item: ToastItem = { id: ++toastId, message, ...options };
  listeners.forEach((fn) => fn(item));
  return item.id;
}

export function useToast() {
  const [items, setItems] = useState<ToastItem[]>([]);

  useEffect(() => {
    const handler = (item: ToastItem) => {
      setItems((prev) => [...prev, item]);
      setTimeout(() => {
        setItems((prev) => prev.filter((t) => t.id !== item.id));
      }, item.duration ?? 5000);
    };
    listeners.push(handler);
    return () => {
      const i = listeners.indexOf(handler);
      if (i >= 0) listeners.splice(i, 1);
    };
  }, []);

  return {
    toasts: items,
    dismiss: (id: number) => setItems((prev) => prev.filter((t) => t.id !== id)),
  };
}

/**
 * Toast container that renders active toasts.
 */
export function ToastContainer({
  toasts,
  dismiss,
}: {
  toasts: ToastItem[];
  dismiss: (id: number) => void;
}) {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-2" aria-live="polite">
      {toasts.map((t) => (
        <ToastContent
          key={t.id}
          message={t.message}
          variant={t.variant}
          title={t.title}
          duration={t.duration}
          onDismiss={() => dismiss(t.id)}
        />
      ))}
    </div>
  );
}
