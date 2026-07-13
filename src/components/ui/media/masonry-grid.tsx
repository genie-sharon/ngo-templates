import type { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

import { Image } from './image';

export interface MasonryItem {
  src: string;
  alt?: string;
  /** Row span (1-3) */
  span?: 1 | 2 | 3;
}

export interface MasonryGridProps extends HTMLAttributes<HTMLDivElement> {
  items: MasonryItem[];
  /** Number of columns */
  columns?: 2 | 3 | 4;
  /** Gap */
  gap?: 'sm' | 'md' | 'lg';
}

/**
 * Masonry-style grid with variable row spans.
 */
export function MasonryGrid({ items, columns = 3, gap = 'md', className }: MasonryGridProps) {
  const colClasses: Record<number, string> = { 2: 'columns-2', 3: 'columns-3', 4: 'columns-4' };
  const gapClasses: Record<string, string> = {
    sm: 'gap-2 space-y-2',
    md: 'gap-4 space-y-4',
    lg: 'gap-6 space-y-6',
  };

  return (
    <div className={cn(colClasses[columns], gapClasses[gap], className)}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="break-inside-avoid overflow-hidden rounded-lg"
          style={
            item.span === 2
              ? { gridRow: 'span 2' }
              : item.span === 3
                ? { gridRow: 'span 3' }
                : undefined
          }
        >
          <Image src={item.src} alt={item.alt ?? ''} fit="cover" withSkeleton />
        </div>
      ))}
    </div>
  );
}
