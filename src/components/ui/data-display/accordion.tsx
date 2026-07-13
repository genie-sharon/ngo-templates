'use client';

import { useState, type HTMLAttributes, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

export interface AccordionItem {
  id: string;
  title: string;
  content: ReactNode;
  icon?: ReactNode;
}

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  items: AccordionItem[];
  /** Allow multiple items to be open simultaneously */
  allowMultiple?: boolean;
  /** Default open item IDs (uncontrolled) */
  defaultOpenIds?: string[];
  /** Controlled open item IDs */
  openIds?: string[];
  /** Called when open items change */
  onOpenChange?: (ids: string[]) => void;
  /** Visual variant */
  variant?: 'bordered' | 'ghost' | 'filled';
}

/**
 * Accessible accordion for FAQs and collapsible content.
 * Supports keyboard navigation and multiple open items.
 */
export function Accordion({
  items,
  allowMultiple = false,
  defaultOpenIds = [],
  openIds: controlledIds,
  onOpenChange,
  variant = 'bordered',
  className,
}: AccordionProps) {
  const [internalIds, setInternalIds] = useState<string[]>(defaultOpenIds);
  const activeIds = controlledIds ?? internalIds;

  const toggle = (id: string) => {
    let next: string[];
    if (allowMultiple) {
      next = activeIds.includes(id) ? activeIds.filter((i) => i !== id) : [...activeIds, id];
    } else {
      next = activeIds.includes(id) ? [] : [id];
    }
    if (controlledIds === undefined) setInternalIds(next);
    onOpenChange?.(next);
  };

  return (
    <div className={cn('divide-y divide-[var(--kindonar-border-default)]', className)}>
      {items.map((item, index) => {
        const itemId = item.id || `accordion-item-${index}`;
        const isOpen = activeIds.includes(itemId);
        return (
          <div key={itemId} className="py-1">
            <h3>
              <button
                type="button"
                onClick={() => toggle(itemId)}
                aria-expanded={isOpen}
                aria-controls={`accordion-content-${itemId}`}
                className={cn(
                  'flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-sm font-medium transition-colors',
                  'text-[var(--kindonar-color-neutral-800)] hover:text-[var(--kindonar-color-primary-600)]',
                  'focus-visible:ring-2 focus-visible:ring-[var(--kindonar-border-focus)] focus-visible:outline-none focus-visible:ring-inset',
                  variant === 'filled' && 'rounded-lg bg-[var(--kindonar-surface-interactive)]',
                )}
              >
                <span className="flex items-center gap-3">
                  {item.icon && <span aria-hidden="true">{item.icon}</span>}
                  {item.title}
                </span>
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
            </h3>
            <div
              id={`accordion-content-${itemId}`}
              role="region"
              aria-labelledby={itemId}
              hidden={!isOpen}
              className={cn(
                'overflow-hidden transition-all duration-300',
                isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0',
              )}
            >
              <div className="px-4 pt-1 pb-4 text-sm text-[var(--kindonar-color-neutral-600)]">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
