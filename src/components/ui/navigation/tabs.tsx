'use client';

import { useState, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

export interface Tab {
  id: string;
  label: string;
  content?: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  /** Array of tabs */
  tabs: Tab[];
  /** Currently active tab ID (controlled) */
  value?: string;
  /** Default active tab ID (uncontrolled) */
  defaultValue?: string;
  /** Called when tab changes */
  onChange?: (value: string) => void;
  /** Visual variant */
  variant?: 'underline' | 'pills' | 'boxed';
  /** Label for the tablist (accessibility) */
  ariaLabel?: string;
  className?: string;
  /** Whether to show tab content panel */
  renderContent?: boolean;
}

/**
 * Accessible tab component with keyboard navigation.
 * Supports underline, pills, and boxed variants.
 *
 * @example
 * <Tabs tabs={tabs} defaultValue="overview" variant="pills" />
 */
export function Tabs({
  tabs,
  value: controlledValue,
  defaultValue,
  onChange,
  variant = 'underline',
  ariaLabel = 'Tab navigation',
  className,
  renderContent = true,
}: TabsProps) {
  const [internalValue, setInternalValue] = useState(defaultValue ?? tabs[0]?.id ?? '');
  const activeTab = controlledValue ?? internalValue;
  const activeContent = tabs.find((t) => t.id === activeTab)?.content;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const items = tabs.filter((t) => !t.disabled);
    const currentIdx = items.findIndex((t) => t.id === activeTab);

    let nextIdx = currentIdx;
    if (e.key === 'ArrowRight') nextIdx = (currentIdx + 1) % items.length;
    else if (e.key === 'ArrowLeft') nextIdx = (currentIdx - 1 + items.length) % items.length;
    else if (e.key === 'Home') nextIdx = 0;
    else if (e.key === 'End') nextIdx = items.length - 1;
    else return;

    e.preventDefault();
    const nextId = items[nextIdx]?.id;
    if (nextId) {
      setInternalValue(nextId);
      onChange?.(nextId);
    }
  };

  return (
    <div className={cn('w-full', className)}>
      <div
        role="tablist"
        aria-label={ariaLabel}
        className={cn(
          'flex',
          variant === 'underline' && 'gap-0 border-b border-[var(--kindonar-border-default)]',
          variant === 'pills' && 'gap-1',
          variant === 'boxed' &&
            'gap-0 rounded-lg border border-[var(--kindonar-border-default)] p-1',
        )}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`tabpanel-${tab.id}`}
            tabIndex={activeTab === tab.id ? 0 : -1}
            disabled={tab.disabled}
            onClick={() => {
              setInternalValue(tab.id);
              onChange?.(tab.id);
            }}
            onKeyDown={handleKeyDown}
            className={cn(
              'inline-flex items-center gap-2 text-sm font-medium whitespace-nowrap transition-colors',
              'focus-visible:ring-2 focus-visible:ring-[var(--kindonar-border-focus)] focus-visible:ring-offset-1 focus-visible:outline-none',
              'disabled:cursor-not-allowed disabled:opacity-50',
              variant === 'underline' && [
                '-mb-[1px] border-b-2 px-4 py-3',
                activeTab === tab.id
                  ? 'border-[var(--kindonar-color-primary-500)] text-[var(--kindonar-color-primary-600)]'
                  : 'border-transparent text-[var(--kindonar-color-neutral-500)] hover:border-[var(--kindonar-color-neutral-300)] hover:text-[var(--kindonar-color-neutral-700)]',
              ],
              variant === 'pills' && [
                'rounded-md px-4 py-2',
                activeTab === tab.id
                  ? 'bg-[var(--kindonar-color-primary-100)] text-[var(--kindonar-color-primary-800)]'
                  : 'text-[var(--kindonar-color-neutral-500)] hover:bg-[var(--kindonar-surface-interactive)] hover:text-[var(--kindonar-color-neutral-700)]',
              ],
              variant === 'boxed' && [
                'flex-1 justify-center rounded-md px-4 py-2',
                activeTab === tab.id
                  ? 'bg-[var(--kindonar-surface-raised)] text-[var(--kindonar-color-neutral-900)] shadow-sm'
                  : 'text-[var(--kindonar-color-neutral-500)] hover:text-[var(--kindonar-color-neutral-700)]',
              ],
            )}
          >
            {tab.icon && <span aria-hidden="true">{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </div>
      {renderContent && activeContent && (
        <div
          id={`tabpanel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={activeTab}
          tabIndex={0}
          className="pt-4 focus-visible:outline-none"
        >
          {activeContent}
        </div>
      )}
    </div>
  );
}
