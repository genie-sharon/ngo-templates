import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  /** Icon element (Lucide or custom SVG) */
  icon: ReactNode;
  /** Icon size */
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  /** Whether the icon should spin (for loading) */
  spinning?: boolean;
}

const sizeMap: Record<string, string> = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
  xl: 'h-8 w-8',
  '2xl': 'h-12 w-12',
  '3xl': 'h-16 w-16',
};

/**
 * Icon wrapper with consistent sizing and optional spin animation.
 * Use with Lucide React icons.
 *
 * @example
 * <Icon icon={<Heart />} size="lg" />
 */
export const Icon = forwardRef<HTMLSpanElement, IconProps>(
  ({ icon, size = 'md', spinning, className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center',
          sizeMap[size],
          'text-[var(--kindonar-color-neutral-700)]',
          spinning && 'animate-spin',
          className,
        )}
        aria-hidden="true"
        {...props}
      >
        {icon}
      </span>
    );
  },
);
Icon.displayName = 'Icon';
