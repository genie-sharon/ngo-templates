'use client';

import { useState, type HTMLAttributes, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

export interface CollapseProps extends HTMLAttributes<HTMLDivElement> {
  /** Controlled open state */
  open?: boolean;
  /** Default open state (uncontrolled) */
  defaultOpen?: boolean;
  /** Called when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Header/toggle content */
  header: ReactNode;
}

/**
 * Simple collapsible panel. Lighter than Accordion — for single panels.
 */
export function Collapse({
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  header,
  children,
  className,
}: CollapseProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isOpen = controlledOpen ?? internalOpen;

  const toggle = () => {
    const next = !isOpen;
    if (controlledOpen === undefined) setInternalOpen(next);
    onOpenChange?.(next);
  };

  return (
    <div
      className={cn(
        'overflow-hidden rounded-lg border border-[var(--kindonar-border-default)]',
        className,
      )}
    >
      <button
        type="button"
        onClick={toggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-[var(--kindonar-color-neutral-800)] hover:bg-[var(--kindonar-surface-interactive)] focus-visible:ring-2 focus-visible:ring-[var(--kindonar-border-focus)] focus-visible:outline-none focus-visible:ring-inset"
      >
        {header}
        <svg
          className={cn(
            'h-4 w-4 shrink-0 text-[var(--kindonar-color-neutral-400)] transition-transform duration-200',
            isOpen && 'rotate-180',
          )}
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M4 6l4 4 4-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        role="region"
        hidden={!isOpen}
        className={cn(
          'overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <div className="px-4 pt-1 pb-4 text-sm text-[var(--kindonar-color-neutral-600)]">
          {children}
        </div>
      </div>
    </div>
  );
}
