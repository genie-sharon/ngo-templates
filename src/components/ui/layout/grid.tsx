import { forwardRef, type HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  /** Number of columns at different breakpoints */
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  /** Columns on tablet */
  colsMd?: 1 | 2 | 3 | 4;
  /** Columns on mobile */
  colsSm?: 1 | 2;
  /** Gap between items */
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12;
  /** Whether items should stretch to equal height */
  equalHeight?: boolean;
}

const colMap: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  12: 'grid-cols-12',
};
const colMdMap: Record<number, string> = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
};
const colSmMap: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
};
const gapMap: Record<number, string> = {
  0: 'gap-0',
  1: 'gap-1',
  2: 'gap-2',
  3: 'gap-3',
  4: 'gap-4',
  5: 'gap-5',
  6: 'gap-6',
  8: 'gap-8',
  10: 'gap-10',
  12: 'gap-12',
};

/**
 * Responsive CSS Grid layout with column control.
 *
 * @example
 * <Grid cols={3} colsMd={2} colsSm={1} gap={6}>
 *   <Card />
 *   <Card />
 *   <Card />
 * </Grid>
 */
export const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ className, cols = 3, colsMd, colsSm, gap = 6, equalHeight, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'grid',
          colsSm ? colSmMap[colsSm] || 'grid-cols-2' : 'grid-cols-1',
          colsMd ? colMdMap[colsMd] || 'md:grid-cols-2' : '',
          cols !== undefined && `lg:${colMap[cols] || 'lg:grid-cols-3'}`,
          gapMap[gap] || 'gap-6',
          equalHeight && 'auto-rows-fr',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);
Grid.displayName = 'Grid';
