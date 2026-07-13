'use client';

import type { HTMLAttributes, ReactNode } from 'react';

import { cn } from '@/lib/utils';

export interface TableProps extends HTMLAttributes<HTMLDivElement> {
  columns: string[];
  data: Record<string, ReactNode>[];
  variant?: 'simple' | 'bordered' | 'striped';
}

/**
 * Data grid — a flexible row-based layout as an alternative to Table.
 * Renders data as a CSS grid with labeled columns.
 */
export function DataGrid({ columns, data, variant = 'simple', className }: TableProps) {
  return (
    <div className={cn('w-full overflow-x-auto', className)}>
      <div
        className="grid min-w-full"
        style={{ gridTemplateColumns: `repeat(${columns.length}, 1fr)` }}
      >
        {/* Header */}
        {columns.map((col, idx) => (
          <div
            key={idx}
            className={cn(
              'px-4 py-3 text-left text-xs font-semibold tracking-wider text-[var(--kindonar-color-neutral-500)] uppercase',
              variant === 'bordered' && 'border-b border-[var(--kindonar-border-default)]',
              variant === 'simple' && 'border-b border-[var(--kindonar-border-default)]',
              variant === 'striped' && 'border-b border-[var(--kindonar-border-default)]',
            )}
          >
            {col}
          </div>
        ))}
        {/* Rows */}
        {data.length === 0 ? (
          <div className="col-span-full px-4 py-12 text-center text-sm text-[var(--kindonar-color-neutral-400)]">
            No data available
          </div>
        ) : (
          data.map((row, rowIdx) =>
            columns.map((col, colIdx) => (
              <div
                key={`${rowIdx}-${colIdx}`}
                className={cn(
                  'px-4 py-3 text-sm text-[var(--kindonar-color-neutral-700)]',
                  variant === 'striped' &&
                    rowIdx % 2 === 1 &&
                    'bg-[var(--kindonar-surface-interactive)]',
                  variant === 'bordered' &&
                    colIdx === 0 &&
                    'border-l border-[var(--kindonar-border-default)]',
                  variant === 'bordered' &&
                    'border-r border-b border-[var(--kindonar-border-default)]',
                )}
              >
                {row[col] ?? ''}
              </div>
            )),
          )
        )}
      </div>
    </div>
  );
}
