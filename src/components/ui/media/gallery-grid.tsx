import type { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

import { Image } from './image';

export interface GalleryItem {
  src: string;
  alt?: string;
  caption?: string;
}

export interface GalleryGridProps extends HTMLAttributes<HTMLDivElement> {
  items: GalleryItem[];
  /** Number of columns */
  columns?: 2 | 3 | 4;
  /** Gap between items */
  gap?: 'sm' | 'md' | 'lg';
  /** Aspect ratio for images */
  aspectRatio?: string;
}

/**
 * Simple gallery grid with responsive columns.
 */
export function GalleryGrid({
  items,
  columns = 3,
  gap = 'md',
  aspectRatio = '4/3',
  className,
}: GalleryGridProps) {
  const colClasses: Record<number, string> = {
    2: 'grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4',
  };
  const gapClasses: Record<string, string> = { sm: 'gap-2', md: 'gap-4', lg: 'gap-6' };

  return (
    <div className={cn('grid', colClasses[columns], gapClasses[gap], className)}>
      {items.map((item, idx) => (
        <figure key={idx} className="overflow-hidden rounded-lg">
          <Image src={item.src} alt={item.alt ?? ''} aspectRatio={aspectRatio} withSkeleton />
          {item.caption && (
            <figcaption className="mt-1.5 text-center text-xs text-[var(--kindonar-color-neutral-500)]">
              {item.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
