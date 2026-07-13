import type { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export interface VideoProps extends HTMLAttributes<HTMLDivElement> {
  /** Video source URL */
  src: string;
  /** Poster image URL */
  poster?: string;
  /** Aspect ratio (defaults to 16/9) */
  aspectRatio?: string;
  /** Autoplay */
  autoPlay?: boolean;
  /** Muted (required if autoplay) */
  muted?: boolean;
  /** Show controls */
  controls?: boolean;
  /** Loop */
  loop?: boolean;
}

/**
 * Video player with poster and aspect ratio container.
 */
export function Video({
  src,
  poster,
  aspectRatio = '16/9',
  autoPlay = false,
  muted = false,
  controls = true,
  loop = false,
  className,
}: VideoProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-lg bg-[var(--kindonar-surface-interactive)]',
        className,
      )}
      style={{ aspectRatio }}
    >
      <video
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        muted={muted}
        controls={controls}
        loop={loop}
        playsInline
        className="h-full w-full object-cover"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
