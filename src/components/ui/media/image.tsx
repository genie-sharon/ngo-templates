import { forwardRef, useState, type ImgHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> {
  src?: string | null;
  alt?: string;
  aspectRatio?: string;
  fit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  withSkeleton?: boolean;
}

/**
 * Optimized image with skeleton loading and error fallback.
 * Handles null/empty src gracefully.
 */
export const Image = forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      src,
      alt = '',
      aspectRatio,
      fit = 'cover',
      rounded = 'md',
      withSkeleton = false,
      className,
      ...props
    },
    ref,
  ) => {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    const roundedClasses: Record<string, string> = {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
    };

    if (!src || error) {
      return (
        <div
          className={cn(
            'relative flex items-center justify-center overflow-hidden bg-[var(--kindonar-surface-interactive)]',
            roundedClasses[rounded],
            className,
          )}
          style={aspectRatio ? { aspectRatio } : undefined}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
            <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
            <path
              d="M21 15l-5-5L5 21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      );
    }

    return (
      <div
        className={cn(
          'relative overflow-hidden bg-[var(--kindonar-surface-interactive)]',
          roundedClasses[rounded],
          className,
        )}
        style={aspectRatio ? { aspectRatio } : undefined}
      >
        {!loaded && withSkeleton && (
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 animate-pulse bg-[var(--kindonar-surface-interactive)]" />
            <div className="animate-shimmer absolute inset-0" />
          </div>
        )}
        <img
          ref={ref}
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={cn(
            'h-full w-full transition-all duration-500',
            !loaded ? 'scale-105 opacity-0 blur-sm' : 'blur-0 scale-100 opacity-100',
          )}
          style={{ objectFit: fit }}
          {...props}
        />
      </div>
    );
  },
);
Image.displayName = 'Image';
