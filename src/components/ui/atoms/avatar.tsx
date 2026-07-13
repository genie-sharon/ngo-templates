import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

const avatarVariants = cva(
  'relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[var(--kindonar-surface-interactive)] font-semibold text-[var(--kindonar-color-neutral-700)]',
  {
    variants: {
      size: {
        xs: 'h-6 w-6 text-[10px]',
        sm: 'h-8 w-8 text-xs',
        md: 'h-10 w-10 text-sm',
        lg: 'h-12 w-12 text-base',
        xl: 'h-16 w-16 text-lg',
        '2xl': 'h-20 w-20 text-xl',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

export interface AvatarProps
  extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof avatarVariants> {
  /** Image URL for the avatar */
  src?: string;
  /** Alt text for the image */
  alt?: string;
  /** Fallback initials displayed when no image or image fails to load */
  fallback?: string;
  /** Status indicator dot */
  status?: 'online' | 'offline' | 'away' | 'busy';
}

/**
 * Avatar component for user/team photos with fallback initials.
 * Supports status indicators and multiple sizes.
 */
export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  ({ className, size, src, alt = '', fallback, status, ...props }, ref) => {
    return (
      <span ref={ref} className={cn('relative inline-flex', className)} {...props}>
        {src ? (
          <img
            src={src}
            alt={alt}
            className={cn(avatarVariants({ size }), 'object-cover')}
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              if (target.nextElementSibling) {
                (target.nextElementSibling as HTMLElement).style.display = 'flex';
              }
            }}
          />
        ) : null}
        <span
          className={cn(avatarVariants({ size }), !src ? 'flex' : 'hidden')}
          aria-hidden={!!src}
        >
          {fallback ? (
            fallback.slice(0, 2).toUpperCase()
          ) : (
            <svg
              width="40%"
              height="40%"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          )}
        </span>
        {status && (
          <span
            className={cn(
              'absolute right-0 bottom-0 h-2.5 w-2.5 rounded-full border-2 border-white',
              status === 'online' && 'bg-[var(--kindonar-color-success-500)]',
              status === 'offline' && 'bg-[var(--kindonar-color-neutral-400)]',
              status === 'away' && 'bg-[var(--kindonar-color-warning-500)]',
              status === 'busy' && 'bg-[var(--kindonar-color-error-500)]',
            )}
            aria-label={`Status: ${status}`}
          />
        )}
      </span>
    );
  },
);
Avatar.displayName = 'Avatar';

/**
 * Group of overlapping avatars.
 */
export function AvatarGroup({
  children,
  max = 4,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & { max?: number }) {
  const items = Array.isArray(children) ? children.slice(0, max) : [children];
  const overflow = Array.isArray(children) ? children.length - max : 0;

  return (
    <div className={cn('flex -space-x-2', className)} {...props}>
      {items}
      {overflow > 0 && (
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--kindonar-surface-interactive)] text-xs font-medium text-[var(--kindonar-color-neutral-600)] ring-2 ring-white">
          +{overflow}
        </span>
      )}
    </div>
  );
}
