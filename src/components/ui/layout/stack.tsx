import { forwardRef, type HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  /** Direction of the stack */
  direction?: 'vertical' | 'horizontal';
  /** Gap between items */
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24;
  /** Align items */
  align?: 'start' | 'center' | 'end' | 'stretch';
  /** Justify content */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  /** Whether items wrap */
  wrap?: boolean;
  /** Space between items evenly */
  evenly?: boolean;
}

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
  16: 'gap-16',
  20: 'gap-20',
  24: 'gap-24',
};

/**
 * Flexbox-based layout stack for consistent spacing.
 *
 * @example
 * <Stack direction="vertical" gap={6}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Stack>
 */
export const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
    { className, direction = 'vertical', gap = 4, align, justify, wrap, children, ...props },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex',
          direction === 'vertical' ? 'flex-col' : 'flex-row',
          gapMap[gap] || 'gap-4',
          align && (direction === 'vertical' ? `items-${align}` : `items-${align}`),
          justify && `justify-${justify}`,
          wrap && 'flex-wrap',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);
Stack.displayName = 'Stack';
