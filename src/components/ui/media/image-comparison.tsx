'use client';

import { useState, useRef, useCallback, useEffect, type HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

import { Image } from './image';

export interface ImageComparisonProps extends HTMLAttributes<HTMLDivElement> {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
  defaultPosition?: number;
}

/**
 * Before/after image comparison slider.
 */
export function ImageComparison({
  beforeSrc,
  afterSrc,
  beforeLabel,
  afterLabel,
  defaultPosition = 50,
  className,
}: ImageComparisonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(defaultPosition);
  const draggingRef = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const onMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      draggingRef.current = true;
      updatePosition(e.clientX);
    },
    [updatePosition],
  );

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!draggingRef.current) return;
      updatePosition(e.clientX);
    };
    const onUp = () => {
      draggingRef.current = false;
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [updatePosition]);

  return (
    <div
      ref={containerRef}
      className={cn('relative overflow-hidden rounded-lg select-none', className)}
    >
      {/* After (full image) */}
      <Image src={afterSrc} alt="After" fit="cover" className="block w-full" />
      {/* Before (clipped) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
        <Image
          src={beforeSrc}
          alt="Before"
          fit="cover"
          className="block h-full w-full max-w-none"
          style={{ width: `${100 / (position / 100)}%` } as React.CSSProperties}
        />
      </div>
      {/* Slider */}
      <div
        className="absolute inset-y-0 cursor-ew-resize"
        style={{ left: `${position}%` }}
        onMouseDown={onMouseDown}
      >
        <div className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-white shadow-md" />
        <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M10 4l-4 4 4 4"
              stroke="#666"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 4l4 4-4 4"
              stroke="#666"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      {beforeLabel && (
        <span className="absolute top-3 left-3 rounded bg-black/60 px-2 py-0.5 text-xs text-white">
          {beforeLabel}
        </span>
      )}
      {afterLabel && (
        <span className="absolute top-3 right-3 rounded bg-black/60 px-2 py-0.5 text-xs text-white">
          {afterLabel}
        </span>
      )}
    </div>
  );
}
