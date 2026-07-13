import type { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export interface EmbeddedVideoProps extends HTMLAttributes<HTMLDivElement> {
  /** Video URL (YouTube, Vimeo) */
  src: string;
  /** Title for iframe accessibility */
  title?: string;
  /** Aspect ratio (default 16/9) */
  aspectRatio?: string;
  /** Allow fullscreen */
  allowFullScreen?: boolean;
}

/**
 * Embedded video (YouTube/Vimeo) with responsive aspect ratio container.
 */
export function EmbeddedVideo({
  src,
  title = 'Embedded video',
  aspectRatio = '16/9',
  allowFullScreen = true,
  className,
}: EmbeddedVideoProps) {
  return (
    <div className={cn('relative overflow-hidden rounded-lg', className)} style={{ aspectRatio }}>
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={allowFullScreen}
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}
