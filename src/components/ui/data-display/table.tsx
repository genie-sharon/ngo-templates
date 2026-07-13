import type { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export interface TableProps extends HTMLAttributes<HTMLTableElement> {
  /** Column definitions */
  columns: {
    key: string;
    label: string;
    align?: 'left' | 'center' | 'right';
  }[];
  /** Row data */
  data: Record<string, unknown>[];
  /** Visual variant */
  variant?: 'simple' | 'bordered' | 'striped' | 'unstyled';
}

/**
 * Accessible data table with responsive scroll.
 */
export function Table({ columns, data, variant = 'simple', className }: TableProps) {
  return (
    <div className="w-full overflow-x-auto">
      <table className={cn('w-full text-sm', className)}>
        <thead>
          <tr
            className={cn(
              variant === 'bordered' && 'border-b border-[var(--kindonar-border-default)]',
              variant === 'striped' && 'border-b border-[var(--kindonar-border-default)]',
            )}
          >
            {columns.map((col) => (
              <th
                key={col.key}
                className={cn(
                  'px-4 py-3 text-left text-xs font-semibold tracking-wider text-[var(--kindonar-color-neutral-500)] uppercase',
                  col.align === 'center' && 'text-center',
                  col.align === 'right' && 'text-right',
                )}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="px-4 py-12 text-center text-sm text-[var(--kindonar-color-neutral-400)]"
              >
                No data available
              </td>
            </tr>
          ) : (
            data.map((row, rowIdx) => (
              <tr
                key={rowIdx}
                className={cn(
                  variant === 'striped' &&
                    rowIdx % 2 === 1 &&
                    'bg-[var(--kindonar-surface-interactive)]',
                  variant === 'bordered' && 'border-b border-[var(--kindonar-border-default)]',
                  variant === 'simple' && 'border-b border-[var(--kindonar-border-default)]',
                  'transition-colors hover:bg-[var(--kindonar-surface-interactive)]',
                )}
              >
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={cn(
                      'px-4 py-3 text-[var(--kindonar-color-neutral-700)]',
                      col.align === 'center' && 'text-center',
                      col.align === 'right' && 'text-right',
                    )}
                  >
                    {String(row[col.key] ?? '')}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
