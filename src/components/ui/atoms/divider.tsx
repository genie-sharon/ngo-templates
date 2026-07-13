import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

const dividerVariants = cva('border-[var(--kindonar-border-default)]', {
  variants: {
    orientation: {
      horizontal: 'w-full border-t',
      vertical: 'h-full border-l',
    },
    weight: {
      thin: 'border-[0.5px]',
      medium: 'border',
      thick: 'border-2',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
    weight: 'medium',
  },
});

export interface DividerProps
  extends HTMLAttributes<HTMLHRElement>, VariantProps<typeof dividerVariants> {
  /** Label in the center of a horizontal divider */
  label?: string;
}

/**
 * Visual divider for separating content sections.
 * Supports horizontal and vertical orientations with optional labels.
 */
export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ className, orientation, weight, label, ...props }, ref) => {
    if (label && orientation === 'horizontal') {
      return (
        <div
          className={cn('flex items-center gap-4', className)}
          role="separator"
          aria-orientation="horizontal"
        >
          <div className={cn('flex-1', dividerVariants({ orientation, weight }))} />
          <span className="text-xs font-medium text-[var(--kindonar-color-neutral-500)]">
            {label}
          </span>
          <div className={cn('flex-1', dividerVariants({ orientation, weight }))} />
        </div>
      );
    }
    return (
      <hr
        ref={ref}
        role="separator"
        aria-orientation={orientation as React.AriaAttributes['aria-orientation']}
        className={cn(dividerVariants({ orientation, weight, className }))}
        {...props}
      />
    );
  },
);
Divider.displayName = 'Divider';
