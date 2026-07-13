'use client';

import { useState, useEffect, useCallback } from 'react';

import { cn } from '@/lib/utils';

import { Image } from './image';

export interface LightboxItem {
  src: string;
  alt?: string;
}

export interface LightboxProps {
  items: LightboxItem[];
  /** Index of the initially open image */
  initialIndex?: number;
  /** Controlled open state */
  open?: boolean;
  /** Called when lightbox closes */
  onClose?: () => void;
}

/**
 * Full-screen image lightbox with navigation.
 */
export function Lightbox({
  items,
  initialIndex = 0,
  open: controlledOpen,
  onClose,
}: LightboxProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const isOpen = controlledOpen ?? internalOpen;

  const close = () => {
    if (controlledOpen === undefined) setInternalOpen(false);
    onClose?.();
  };

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, goNext, goPrev]);

  if (!isOpen || items.length === 0) return null;

  const current = items[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={close}
    >
      <button
        type="button"
        onClick={close}
        className="absolute top-4 right-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
        aria-label="Close"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M6 6l12 12M18 6L6 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
      {items.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
            aria-label="Previous"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M15 18l-6-6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute top-1/2 right-4 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
            aria-label="Next"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M9 18l6-6-6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </>
      )}
      <div
        className="relative flex max-h-[90vh] max-w-[90vw] items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={current!.src}
          alt={current!.alt ?? ''}
          fit="contain"
          className="max-h-[90vh] max-w-[90vw]"
          rounded="lg"
        />
      </div>
      {items.length > 1 && (
        <div className="absolute bottom-4 flex gap-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              className={cn(
                'h-2 w-2 rounded-full transition-colors',
                idx === currentIndex ? 'bg-white' : 'bg-white/40',
              )}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * Hook to control a Lightbox.
 */
export function useLightbox() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openLightbox = (idx = 0) => {
    setIndex(idx);
    setOpen(true);
  };
  const closeLightbox = () => setOpen(false);

  return { open, index, openLightbox, closeLightbox };
}
