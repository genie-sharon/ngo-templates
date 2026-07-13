import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';

import { cn } from '@/lib/utils';

import { Image } from './image';

export interface MediaCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Image source */
  src: string;
  /** Image alt text */
  alt?: string;
  /** Card title */
  title?: string;
  /** Description or extra content */
  description?: string;
  /** Aspect ratio for the image */
  aspectRatio?: string;
  /** Overlay gradient at the bottom */
  overlay?: boolean;
  /** Action element (button, link, etc.) */
  action?: ReactNode;
}

/**
 * Media card with image background and overlaid content.
 */
export const MediaCard = forwardRef<HTMLDivElement, MediaCardProps>(
  (
    {
      src,
      alt = '',
      title,
      description,
      aspectRatio = '4/3',
      overlay = false,
      action,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn('group relative overflow-hidden rounded-lg', className)}
        {...props}
      >
        <Image
          src={src}
          alt={alt}
          aspectRatio={aspectRatio}
          fit="cover"
          rounded="none"
          withSkeleton
        />
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        )}
        <div
          className={cn(
            'absolute right-0 bottom-0 left-0 p-4',
            overlay ? 'text-white' : 'text-[var(--kindonar-color-neutral-800)]',
          )}
        >
          {title && <h3 className="text-lg font-semibold">{title}</h3>}
          {description && (
            <p
              className={cn(
                'mt-1 text-sm',
                overlay ? 'text-white/80' : 'text-[var(--kindonar-color-neutral-600)]',
              )}
            >
              {description}
            </p>
          )}
          {action && <div className="mt-3">{action}</div>}
        </div>
      </div>
    );
  },
);
MediaCard.displayName = 'MediaCard';
