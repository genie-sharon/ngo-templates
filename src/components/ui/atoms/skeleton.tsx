import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

const skeletonVariants = cva('animate-pulse rounded-md bg-[var(--kindonar-surface-interactive)]', {
  variants: {
    variant: {
      text: 'h-4 w-full',
      circle: 'rounded-full',
      rect: 'rounded-md',
      card: 'h-48 w-full rounded-xl',
      avatar: 'h-10 w-10 rounded-full',
      thumbnail: 'h-20 w-20 rounded-lg',
    },
  },
  defaultVariants: {
    variant: 'text',
  },
});

export interface SkeletonProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof skeletonVariants> {
  /** Accessible label */
  label?: string;
}

/**
 * Skeleton loading placeholder for pending content.
 * Mimics the shape of the content that will load.
 *
 * @example
 * <Skeleton variant="card" />
 * <Skeleton variant="text" className="w-3/4" />
 */
export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant, label = 'Loading...', ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="status"
        aria-label={label}
        className={cn(skeletonVariants({ variant, className }))}
        {...props}
      >
        <span className="sr-only">{label}</span>
      </div>
    );
  },
);
Skeleton.displayName = 'Skeleton';

/**
 * Composed skeleton for a card placeholder.
 */
export function CardSkeleton({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'space-y-4 rounded-xl border border-[var(--kindonar-border-default)] p-6',
        className,
      )}
      {...props}
    >
      <Skeleton variant="thumbnail" className="h-48 w-full" />
      <Skeleton variant="text" className="w-3/4" />
      <Skeleton variant="text" className="w-1/2" />
      <Skeleton variant="text" className="w-full" />
      <Skeleton variant="rect" className="h-10 w-32" />
    </div>
  );
}

/**
 * Composed skeleton for a stats block placeholder.
 */
export function StatsSkeleton({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('flex gap-8', className)} {...props}>
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex flex-col items-center gap-2">
          <Skeleton variant="circle" className="h-12 w-12" />
          <Skeleton variant="text" className="h-8 w-20" />
          <Skeleton variant="text" className="h-4 w-16" />
        </div>
      ))}
    </div>
  );
}

/**
 * Composed skeleton for a testimonial placeholder.
 */
export function TestimonialSkeleton({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'space-y-4 rounded-xl border border-[var(--kindonar-border-default)] p-6',
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-4">
        <Skeleton variant="avatar" />
        <div className="space-y-2">
          <Skeleton variant="text" className="h-4 w-32" />
          <Skeleton variant="text" className="h-3 w-24" />
        </div>
      </div>
      <Skeleton variant="text" className="w-full" />
      <Skeleton variant="text" className="w-5/6" />
      <Skeleton variant="text" className="w-4/6" />
    </div>
  );
}
