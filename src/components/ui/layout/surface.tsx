'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { forwardRef, type ElementType, type HTMLAttributes, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

const surfaceVariants = cva('', {
  variants: {
    variant: {
      raised: 'bg-[var(--kindonar-surface-raised)] shadow-sm',
      overlay: 'bg-[var(--kindonar-surface-overlay)] shadow-lg backdrop-blur-sm',
      interactive: 'bg-[var(--kindonar-surface-interactive)] cursor-pointer transition-colors',
      glass: 'bg-[var(--kindonar-surface-glass)] shadow-md backdrop-blur-xl',
    },
    padding: {
      none: 'p-0',
      sm: 'p-3',
      md: 'p-4 md:p-6',
      lg: 'p-6 md:p-8 lg:p-10',
    },
    borderRadius: {
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
    },
  },
  defaultVariants: {
    variant: 'raised',
    padding: 'md',
    borderRadius: 'lg',
  },
});

export interface SurfaceProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof surfaceVariants> {
  children: ReactNode;
  as?: ElementType;
  hoverable?: boolean;
}

const MotionDiv = motion.div;

export const Surface = forwardRef<HTMLDivElement, SurfaceProps>(
  ({ className, variant, padding, borderRadius, as, hoverable, children, ...props }, ref) => {
    const Tag = as || 'div';
    const isInteractive = variant === 'interactive' || hoverable;
    const classes = cn(surfaceVariants({ variant, padding, borderRadius, className }));

    if (isInteractive) {
      return (
        <MotionDiv
          ref={ref}
          className={classes}
          whileHover={{ scale: 1.01, y: -2 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          {...(props as React.ComponentProps<typeof motion.div>)}
        >
          {children}
        </MotionDiv>
      );
    }

    return (
      <Tag ref={ref} className={classes} {...props}>
        {children}
      </Tag>
    );
  },
);
Surface.displayName = 'Surface';
