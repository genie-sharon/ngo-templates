'use client';

import type { EmblaCarouselType, EmblaOptionsType, EmblaPluginType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  useCallback,
  useEffect,
  useState,
  useRef,
  forwardRef,
  type ReactNode,
  type HTMLAttributes,
  type KeyboardEvent,
} from 'react';

import { cn } from '@/lib/utils';

export type { EmblaCarouselType, EmblaOptionsType, EmblaPluginType, UseEmblaCarouselType };

export interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  slides: ReactNode[];
  options?: {
    autoplay?: boolean;
    loop?: boolean;
    showArrows?: boolean;
    showDots?: boolean;
    autoplayInterval?: number;
  };
}

export const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  ({ className, slides, options, ...props }, ref) => {
    const {
      autoplay: enableAutoplay = false,
      loop = true,
      showArrows = true,
      showDots = true,
      autoplayInterval = 5000,
    } = options || {};

    const plugins: EmblaPluginType[] = [];
    if (enableAutoplay) {
      plugins.push(Autoplay({ delay: autoplayInterval }));
    }

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop, duration: 40 }, plugins);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
    const autoplayPaused = useRef(false);

    const onSelect = useCallback((emblaApiInner: EmblaCarouselType) => {
      setSelectedIndex(emblaApiInner.selectedScrollSnap());
    }, []);

    useEffect(() => {
      if (!emblaApi) return;
      emblaApi.on('select', onSelect);
      setScrollSnaps(emblaApi.scrollSnapList());
      onSelect(emblaApi);
      return () => {
        emblaApi.off('select', onSelect);
      };
    }, [emblaApi, onSelect]);

    const scrollPrev = useCallback(() => {
      if (!emblaApi) return;
      if (enableAutoplay) {
        autoplayPaused.current = true;
      }
      emblaApi.scrollPrev();
    }, [emblaApi, enableAutoplay]);

    const scrollNext = useCallback(() => {
      if (!emblaApi) return;
      if (enableAutoplay) {
        autoplayPaused.current = true;
      }
      emblaApi.scrollNext();
    }, [emblaApi, enableAutoplay]);

    const scrollTo = useCallback(
      (index: number) => {
        if (!emblaApi) return;
        if (enableAutoplay) {
          autoplayPaused.current = true;
        }
        emblaApi.scrollTo(index);
      },
      [emblaApi, enableAutoplay],
    );

    const handleKeyDown = useCallback(
      (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowLeft') scrollPrev();
        if (e.key === 'ArrowRight') scrollNext();
      },
      [scrollPrev, scrollNext],
    );

    if (!slides.length) return null;

    return (
      <div
        ref={ref}
        className={cn('relative', className)}
        role="region"
        aria-roledescription="carousel"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        {...props}
      >
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            <AnimatePresence mode="popLayout">
              {slides.map((slide, index) => (
                <motion.div
                  key={index}
                  className="relative min-w-0 flex-[0_0_100%]"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`Slide ${index + 1} of ${slides.length}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {slide}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        {showArrows && slides.length > 1 && (
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              type="button"
              onClick={scrollPrev}
              className="ml-2 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--kindonar-surface-raised)] text-[var(--kindonar-color-neutral-700)] shadow-lg transition-colors hover:bg-[var(--kindonar-surface-interactive)] focus-visible:ring-2 focus-visible:ring-[var(--kindonar-color-primary-500)] focus-visible:outline-none"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>
        )}
        {showArrows && slides.length > 1 && (
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              type="button"
              onClick={scrollNext}
              className="mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--kindonar-surface-raised)] text-[var(--kindonar-color-neutral-700)] shadow-lg transition-colors hover:bg-[var(--kindonar-surface-interactive)] focus-visible:ring-2 focus-visible:ring-[var(--kindonar-color-primary-500)] focus-visible:outline-none"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
        {showDots && scrollSnaps.length > 1 && (
          <div
            className="mt-4 flex items-center justify-center gap-2"
            role="tablist"
            aria-label="Slide navigation"
          >
            {scrollSnaps.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollTo(i)}
                className={cn(
                  'h-2 rounded-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[var(--kindonar-color-primary-500)] focus-visible:outline-none',
                  i === selectedIndex
                    ? 'w-8 bg-[var(--kindonar-color-primary-500)]'
                    : 'w-2 bg-[var(--kindonar-color-neutral-300)] hover:bg-[var(--kindonar-color-neutral-400)]',
                )}
                role="tab"
                aria-selected={i === selectedIndex}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    );
  },
);
Carousel.displayName = 'Carousel';
