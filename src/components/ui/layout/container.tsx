import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

const containerVariants = cva('mx-auto w-full px-4 md:px-8', {
  variants: {
    size: {
      sm: 'max-w-[640px]',
      md: 'max-w-[768px]',
      lg: 'max-w-[1024px]',
      xl: 'max-w-[1280px]',
      '2xl': 'max-w-[1440px]',
      full: 'max-w-full px-0',
      narrow: 'max-w-[960px]',
      content: 'max-w-[720px]',
    },
  },
  defaultVariants: {
    size: '2xl',
  },
});

export interface ContainerProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof containerVariants> {
  /** Whether to remove horizontal padding */
  noPadding?: boolean;
}

/**
 * Responsive container with max-width constraints.
 * Base layout wrapper for all page content.
 */
export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, noPadding, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(containerVariants({ size }), noPadding && 'px-0', className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);
Container.displayName = 'Container';
