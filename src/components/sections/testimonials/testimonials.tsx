'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import NextImage from 'next/image';
import { useState, useEffect, useCallback, useRef } from 'react';

import { Image } from '@/components/ui/media/image';
import { cn } from '@/lib/utils';

import { SectionWrapper, SectionHeadingBlock, staggerItem } from '../motion';
import type { SectionTheme } from '../section-config.types';

import type { TestimonialsConfig, TestimonialItem } from './config.types';

function StarRating({ rating, className }: { rating: number; className?: string }) {
  return (
    <div
      className={cn('flex gap-0.5', className)}
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={cn(
            'h-4 w-4',
            i < rating
              ? 'fill-[var(--kindonar-color-accent-500)] text-[var(--kindonar-color-accent-500)]'
              : 'text-[var(--kindonar-color-neutral-300)]',
          )}
        />
      ))}
    </div>
  );
}

function QuoteIcon({ className }: { className?: string }) {
  return (
    <Quote
      className={cn('h-10 w-10 text-[var(--kindonar-color-primary-200)]', className)}
      aria-hidden="true"
    />
  );
}

function TestimonialCardContent({ item, isDark }: { item: TestimonialItem; isDark: boolean }) {
  return (
    <>
      <QuoteIcon className="mb-4" />
      <blockquote
        className={cn(
          'text-base leading-relaxed md:text-lg',
          isDark ? 'text-white/90' : 'text-[var(--kindonar-color-neutral-700)]',
        )}
      >
        &ldquo;{item.quote}&rdquo;
      </blockquote>
      {item.rating && <StarRating rating={item.rating} className="mt-4" />}
      <div className="mt-6 flex items-center gap-3">
        {item.avatar && (
          <NextImage
            src={item.avatar.src}
            alt={item.avatar.alt}
            width={48}
            height={48}
            unoptimized
            className="h-12 w-12 flex-shrink-0 rounded-full object-cover"
          />
        )}
        <div>
          <p
            className={cn(
              'font-semibold',
              isDark ? 'text-white' : 'text-[var(--kindonar-color-neutral-900)]',
            )}
          >
            {item.name}
          </p>
          {(item.role || item.organization) && (
            <p
              className={cn(
                'text-sm',
                isDark ? 'text-white/60' : 'text-[var(--kindonar-color-neutral-500)]',
              )}
            >
              {[item.role, item.organization].filter(Boolean).join(', ')}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

function CarouselTestimonials({ items, theme }: { items: TestimonialItem[]; theme: SectionTheme }) {
  const safeItems = Array.isArray(items) ? items : [];
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const isDark =
    theme === 'dark' || theme === 'primary' || theme === 'secondary' || theme === 'gradient';

  useEffect(() => {
    if (!emblaApi) return;
    const syncState = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setScrollSnaps(emblaApi.scrollSnapList());
    };
    syncState();
    emblaApi.on('select', syncState);
    return () => {
      emblaApi.off('select', syncState);
    };
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      <div
        ref={emblaRef}
        className="overflow-hidden"
        role="region"
        aria-label="Testimonial carousel"
        aria-roledescription="carousel"
      >
        <div className="flex">
          {safeItems.map((item, idx) => (
            <div
              key={idx}
              className="min-w-0 flex-[0_0_100%]"
              role="group"
              aria-roledescription="slide"
              aria-label={`Testimonial ${idx + 1} of ${safeItems.length}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mx-auto max-w-3xl px-4 text-center"
              >
                <TestimonialCardContent item={item} isDark={isDark} />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      {safeItems.length > 1 && (
        <>
          <button
            type="button"
            onClick={scrollPrev}
            className={cn(
              'absolute top-1/2 left-0 -translate-y-1/2 rounded-full p-2 transition-colors',
              isDark
                ? 'text-white/70 hover:bg-white/10 hover:text-white'
                : 'text-[var(--kindonar-color-neutral-500)] hover:bg-[var(--kindonar-color-neutral-100)]',
            )}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className={cn(
              'absolute top-1/2 right-0 -translate-y-1/2 rounded-full p-2 transition-colors',
              isDark
                ? 'text-white/70 hover:bg-white/10 hover:text-white'
                : 'text-[var(--kindonar-color-neutral-500)] hover:bg-[var(--kindonar-color-neutral-100)]',
            )}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <div
            className="mt-8 flex justify-center gap-2"
            role="tablist"
            aria-label="Testimonial navigation"
          >
            {scrollSnaps.map((_, idx) => (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={idx === selectedIndex}
                aria-label={`Go to testimonial ${idx + 1}`}
                onClick={() => scrollTo(idx)}
                className={cn(
                  'h-2.5 rounded-full transition-all duration-300',
                  idx === selectedIndex
                    ? 'w-8 bg-[var(--kindonar-color-primary-500)]'
                    : 'w-2.5 bg-[var(--kindonar-color-neutral-300)] hover:bg-[var(--kindonar-color-neutral-400)]',
                  isDark && 'bg-white/30 hover:bg-white/50',
                  isDark && idx === selectedIndex && 'bg-white',
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function CardsTestimonials({ items, theme }: { items: TestimonialItem[]; theme: SectionTheme }) {
  const safeItems = Array.isArray(items) ? items : [];
  const isDark =
    theme === 'dark' || theme === 'primary' || theme === 'secondary' || theme === 'gradient';
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {safeItems.map((item, idx) => (
        <motion.div
          key={idx}
          variants={staggerItem}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className={cn(
            'rounded-2xl border p-6 shadow-[var(--kindonar-shadow-sm)] transition-shadow hover:shadow-[var(--kindonar-shadow-md)]',
            isDark
              ? 'border-white/10 bg-white/5'
              : 'border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)]',
          )}
          whileHover={{
            scale: 1.03,
            transition: { type: 'spring' as const, stiffness: 300, damping: 15 },
          }}
          whileTap={{
            scale: 0.97,
            transition: { type: 'spring' as const, stiffness: 300, damping: 15 },
          }}
        >
          <TestimonialCardContent item={item} isDark={isDark} />
        </motion.div>
      ))}
    </div>
  );
}

function GridTestimonials({ items, theme }: { items: TestimonialItem[]; theme: SectionTheme }) {
  const safeItems = Array.isArray(items) ? items : [];
  const isDark =
    theme === 'dark' || theme === 'primary' || theme === 'secondary' || theme === 'gradient';
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {safeItems.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: idx * 0.05 }}
          className={cn(
            'rounded-xl border p-4',
            isDark
              ? 'border-white/10 bg-white/5'
              : 'border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)]',
          )}
        >
          <p
            className={cn(
              'mb-3 line-clamp-4 text-sm leading-relaxed',
              isDark ? 'text-white/80' : 'text-[var(--kindonar-color-neutral-600)]',
            )}
          >
            &ldquo;{item.quote}&rdquo;
          </p>
          {item.rating && <StarRating rating={item.rating} className="mb-3" />}
          <div className="flex items-center gap-2">
            {item.avatar && (
              <Image
                src={item.avatar.src}
                alt={item.avatar.alt}
                className="h-8 w-8"
                rounded="full"
                fit="cover"
              />
            )}
            <div className="min-w-0">
              <p
                className={cn(
                  'truncate text-sm font-medium',
                  isDark ? 'text-white' : 'text-[var(--kindonar-color-neutral-900)]',
                )}
              >
                {item.name}
              </p>
              {item.organization && (
                <p
                  className={cn(
                    'truncate text-xs',
                    isDark ? 'text-white/50' : 'text-[var(--kindonar-color-neutral-500)]',
                  )}
                >
                  {item.organization}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function VideoTestimonials({ items, theme }: { items: TestimonialItem[]; theme: SectionTheme }) {
  const safeItems = Array.isArray(items) ? items : [];
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const isDark =
    theme === 'dark' || theme === 'primary' || theme === 'secondary' || theme === 'gradient';

  useEffect(() => {
    if (!activeVideo) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveVideo(null);
    };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [activeVideo]);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {safeItems.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className={cn(
              'group relative overflow-hidden rounded-2xl border',
              isDark
                ? 'border-white/10 bg-white/5'
                : 'border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)]',
            )}
          >
            {item.videoUrl && (
              <button
                type="button"
                onClick={() => setActiveVideo(item.videoUrl!)}
                className="relative aspect-video w-full overflow-hidden bg-[var(--kindonar-surface-interactive)]"
                aria-label={`Play video testimonial by ${item.name}`}
              >
                {item.avatar ? (
                  <Image
                    src={item.avatar.src}
                    alt=""
                    fit="cover"
                    className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[var(--kindonar-color-primary-100)] to-[var(--kindonar-color-secondary-100)]" />
                )}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-110">
                    <Play className="ml-0.5 h-6 w-6 text-[var(--kindonar-color-primary-600)]" />
                  </div>
                </div>
              </button>
            )}
            <div className="p-4">
              <p
                className={cn(
                  'mb-2 line-clamp-2 text-sm leading-relaxed',
                  isDark ? 'text-white/80' : 'text-[var(--kindonar-color-neutral-600)]',
                )}
              >
                {item.quote}
              </p>
              <p
                className={cn(
                  'text-sm font-medium',
                  isDark ? 'text-white' : 'text-[var(--kindonar-color-neutral-900)]',
                )}
              >
                {item.name}
              </p>
              {item.role && (
                <p
                  className={cn(
                    'text-xs',
                    isDark ? 'text-white/50' : 'text-[var(--kindonar-color-neutral-500)]',
                  )}
                >
                  {item.role}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative" style={{ aspectRatio: '16/9' }}>
                <iframe
                  src={activeVideo}
                  className="h-full w-full rounded-xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Testimonial video"
                />
              </div>
              <div className="mt-4 flex justify-center">
                <button
                  type="button"
                  onClick={() => setActiveVideo(null)}
                  className="flex items-center gap-2 rounded-full bg-white/20 px-6 py-2 text-sm text-white transition-colors hover:bg-white/30"
                >
                  <X className="h-4 w-4" />
                  Close video
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function LargeQuoteTestimonials({
  items,
  theme,
}: {
  items: TestimonialItem[];
  theme: SectionTheme;
}) {
  const safeItems = Array.isArray(items) ? items : [];
  const isDark =
    theme === 'dark' || theme === 'primary' || theme === 'secondary' || theme === 'gradient';
  return (
    <div className="space-y-16">
      {safeItems.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: idx * 0.15 }}
          className="relative mx-auto max-w-4xl text-center"
        >
          <Quote
            className={cn(
              'mx-auto mb-6 h-16 w-16',
              isDark ? 'text-white/20' : 'text-[var(--kindonar-color-primary-200)]',
            )}
            aria-hidden="true"
          />
          <blockquote
            className={cn(
              'text-2xl leading-relaxed font-light md:text-3xl lg:text-4xl',
              isDark ? 'text-white' : 'text-[var(--kindonar-color-neutral-900)]',
            )}
          >
            &ldquo;{item.quote}&rdquo;
          </blockquote>
          <div className="mt-8">
            {item.rating && <StarRating rating={item.rating} className="justify-center" />}
            <p
              className={cn(
                'mt-4 text-lg font-semibold',
                isDark ? 'text-white' : 'text-[var(--kindonar-color-neutral-900)]',
              )}
            >
              {item.name}
            </p>
            {(item.role || item.organization) && (
              <p
                className={cn(
                  'text-base',
                  isDark ? 'text-white/60' : 'text-[var(--kindonar-color-neutral-500)]',
                )}
              >
                {[item.role, item.organization].filter(Boolean).join(', ')}
              </p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function StackedTestimonialCard({
  item,
  index,
  theme,
}: {
  item: TestimonialItem;
  index: number;
  theme: SectionTheme;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isDark =
    theme === 'dark' || theme === 'primary' || theme === 'secondary' || theme === 'gradient';
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60 - index * 10, -60 + index * 10]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.92]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.4, 1, 1, 0.4]);

  return (
    <motion.div ref={ref} style={{ y, scale, opacity: cardOpacity }} className="relative">
      <div
        className={cn(
          'rounded-2xl border p-8 shadow-[var(--kindonar-shadow-md)] transition-shadow hover:shadow-[var(--kindonar-shadow-lg)]',
          isDark
            ? 'border-white/10 bg-[var(--kindonar-surface-raised)]'
            : 'border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)]',
        )}
        style={{ marginTop: index > 0 ? `-${Math.min(index * 60, 200)}px` : '0' }}
      >
        <div className="mx-auto max-w-3xl">
          <TestimonialCardContent item={item} isDark={isDark} />
        </div>
      </div>
    </motion.div>
  );
}

function StackedTestimonials({ items, theme }: { items: TestimonialItem[]; theme: SectionTheme }) {
  const safeItems = Array.isArray(items) ? items : [];
  return (
    <div className="relative">
      {safeItems.map((item, idx) => (
        <StackedTestimonialCard key={idx} item={item} index={idx} theme={theme} />
      ))}
    </div>
  );
}

export function Testimonials({ config }: { config: TestimonialsConfig }) {
  if (!config) return null;
  const safeTestimonials = Array.isArray(config.testimonials) ? config.testimonials : [];
  if (!config.visible || !safeTestimonials.length) return null;

  const renderVariant = () => {
    switch (config.layout) {
      case 'carousel':
        return <CarouselTestimonials items={safeTestimonials} theme={config.theme} />;
      case 'cards':
        return <CardsTestimonials items={safeTestimonials} theme={config.theme} />;
      case 'grid':
        return <GridTestimonials items={safeTestimonials} theme={config.theme} />;
      case 'video':
        return <VideoTestimonials items={safeTestimonials} theme={config.theme} />;
      case 'large-quote':
        return <LargeQuoteTestimonials items={safeTestimonials} theme={config.theme} />;
      case 'stacked':
        return <StackedTestimonials items={safeTestimonials} theme={config.theme} />;
      default:
        return null;
    }
  };

  return (
    <SectionWrapper config={config}>
      <SectionHeadingBlock heading={config.heading} theme={config.theme} />
      {renderVariant()}
    </SectionWrapper>
  );
}
