import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type ElementType, type HTMLAttributes, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

const flexVariants = cva('flex', {
  variants: {
    direction: {
      row: 'flex-row',
      col: 'flex-col',
      'row-reverse': 'flex-row-reverse',
      'col-reverse': 'flex-col-reverse',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
      baseline: 'items-baseline',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    },
    wrap: {
      true: 'flex-wrap',
    },
    gap: {
      0: 'gap-0',
      1: 'gap-1',
      2: 'gap-2',
      3: 'gap-3',
      4: 'gap-4',
      5: 'gap-5',
      6: 'gap-6',
      7: 'gap-7',
      8: 'gap-8',
      9: 'gap-9',
      10: 'gap-10',
      11: 'gap-11',
      12: 'gap-12',
    },
  },
  defaultVariants: {
    direction: 'row',
  },
});

export interface FlexProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof flexVariants> {
  children: ReactNode;
  as?: ElementType;
}

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  ({ className, direction, align, justify, wrap, gap, as, children, ...props }, ref) => {
    const Tag = as || 'div';
    return (
      <Tag
        ref={ref}
        className={cn(flexVariants({ direction, align, justify, wrap, gap, className }))}
        {...props}
      >
        {children}
      </Tag>
    );
  },
);
Flex.displayName = 'Flex';
