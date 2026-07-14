'use client';

import type { EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import {
  useCallback,
  useEffect,
  useState,
  useRef,
  type ReactNode,
  type KeyboardEvent,
} from 'react';

import { cn } from '@/lib/utils';

import { MotionSection, staggerItem, themeClasses, paddingClasses } from '../motion';
import type { CTAConfig, StatItem } from '../section-config.types';

import type {
  HeroConfig,
  TrustBadge,
  FloatingStatCard,
  DecorativeShape,
  HeroLayout,
} from './config.types';

function useIsDark(theme: string): boolean {
  return theme === 'dark' || theme === 'primary' || theme === 'secondary' || theme === 'gradient';
}

function ctaButtonStyles(variant: string = 'primary', isDark: boolean): string {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
  const size = 'px-6 py-3 text-base lg:px-8 lg:py-4 lg:text-lg';
  const map: Record<string, string> = {
    primary:
      'bg-[var(--kindonar-color-primary-500)] text-white hover:bg-[var(--kindonar-color-primary-600)] focus-visible:ring-[var(--kindonar-color-primary-500)]',
    secondary: isDark
      ? 'border-2 border-white text-white hover:bg-white hover:text-[var(--kindonar-color-neutral-900)] focus-visible:ring-white'
      : 'border-2 border-[var(--kindonar-color-primary-500)] text-[var(--kindonar-color-primary-500)] hover:bg-[var(--kindonar-color-primary-500)] hover:text-white focus-visible:ring-[var(--kindonar-color-primary-500)]',
    outline: isDark
      ? 'border border-white/30 text-white hover:bg-white/10 focus-visible:ring-white'
      : 'border border-[var(--kindonar-color-neutral-300)] text-[var(--kindonar-color-neutral-700)] hover:border-[var(--kindonar-color-neutral-900)] focus-visible:ring-[var(--kindonar-color-neutral-900)]',
    ghost: isDark
      ? 'text-white hover:bg-white/10 focus-visible:ring-white'
      : 'text-[var(--kindonar-color-neutral-700)] hover:bg-[var(--kindonar-surface-interactive)] focus-visible:ring-[var(--kindonar-color-neutral-900)]',
    link: isDark
      ? 'text-white underline-offset-4 hover:underline focus-visible:ring-white'
      : 'text-[var(--kindonar-color-primary-500)] underline-offset-4 hover:underline focus-visible:ring-[var(--kindonar-color-primary-500)]',
    gradient:
      'bg-gradient-to-r from-[var(--kindonar-color-primary-500)] to-[var(--kindonar-color-secondary-500)] text-white hover:opacity-90 focus-visible:ring-[var(--kindonar-color-primary-500)]',
    donate:
      'bg-[var(--kindonar-color-primary-500)] text-white hover:bg-[var(--kindonar-color-primary-600)] focus-visible:ring-[var(--kindonar-color-primary-500)]',
    volunteer:
      'bg-[var(--kindonar-color-secondary-500)] text-white hover:bg-[var(--kindonar-color-secondary-600)] focus-visible:ring-[var(--kindonar-color-secondary-500)]',
  };
  return cn(base, size, map[variant] || map.primary);
}

function CTAButton({
  cta,
  isDark,
  className,
}: {
  cta: CTAConfig;
  isDark: boolean;
  className?: string;
}) {
  return (
    <motion.a
      href={cta.href}
      target={cta.external ? '_blank' : undefined}
      rel={cta.external ? 'noopener noreferrer' : undefined}
      className={cn(ctaButtonStyles(cta.variant, isDark), className)}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
    >
      {cta.icon && <span aria-hidden="true">{cta.icon}</span>}
      {cta.label}
    </motion.a>
  );
}

function ScrollIndicator({ isDark }: { isDark: boolean }) {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <ChevronDown
          className={cn(
            'h-8 w-8',
            isDark ? 'text-white/70' : 'text-[var(--kindonar-color-neutral-500)]',
          )}
        />
      </motion.div>
      <span className="sr-only">Scroll down for more content</span>
    </motion.div>
  );
}

function DecorativeShapes({ shapes, isDark }: { shapes: DecorativeShape[]; isDark: boolean }) {
  if (!Array.isArray(shapes)) return null;
  return (
    <>
      {shapes.map((shape, i) => {
        const posClasses: Record<string, string> = {
          'top-left': 'top-0 left-0',
          'top-right': 'top-0 right-0',
          'bottom-left': 'bottom-0 left-0',
          'bottom-right': 'bottom-0 right-0',
          center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
        };
        const sizeClasses: Record<string, string> = {
          sm: 'w-24 h-24 md:w-32 md:h-32',
          md: 'w-40 h-40 md:w-56 md:h-56',
          lg: 'w-56 h-56 md:w-80 md:h-80',
        };
        const color = shape.color || (isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)');
        return (
          <div
            key={i}
            className={cn('pointer-events-none absolute -z-0', posClasses[shape.position])}
            aria-hidden="true"
          >
            {shape.type === 'circle' && (
              <div
                className={cn('rounded-full', sizeClasses[shape.size || 'md'])}
                style={{ backgroundColor: color }}
              />
            )}
            {shape.type === 'blob' && (
              <svg
                className={cn(sizeClasses[shape.size || 'md'])}
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M47.1,-57.3C62.2,-50.5,76.5,-38.9,82.3,-23.8C88.2,-8.7,85.5,10,75.6,23.9C65.7,37.8,48.6,47,31.1,53.1C13.7,59.2,-4.2,62.2,-20.5,57.5C-36.8,52.7,-51.5,40.2,-60.4,24.3C-69.2,8.5,-72.2,-10.7,-65.9,-26.6C-59.6,-42.5,-44,-55.1,-28.1,-61.4C-12.2,-67.7,4,-67.7,19.5,-62.8C35,-57.9,32,-64.1,47.1,-57.3Z"
                  transform="translate(100 100)"
                  fill={color}
                />
              </svg>
            )}
            {shape.type === 'dots' && (
              <div className="grid grid-cols-4 gap-2 p-4">
                {Array.from({ length: 16 }).map((_, j) => (
                  <div
                    key={j}
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            )}
            {shape.type === 'wave' && (
              <svg
                className={cn('w-full', sizeClasses[shape.size || 'md'])}
                viewBox="0 0 1440 120"
                preserveAspectRatio="none"
                fill="none"
              >
                <path d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z" fill={color} />
              </svg>
            )}
          </div>
        );
      })}
    </>
  );
}

function TrustBadgesRow({ badges, isDark }: { badges: TrustBadge[]; isDark: boolean }) {
  if (!badges.length) return null;
  return (
    <motion.div variants={staggerItem} className="mt-8 flex flex-wrap items-center gap-6 md:mt-10">
      <span
        className={cn(
          'text-xs font-medium tracking-wider uppercase',
          isDark ? 'text-white/60' : 'text-[var(--kindonar-color-neutral-400)]',
        )}
      >
        Trusted by
      </span>
      <div className="flex flex-wrap items-center gap-6">
        {badges.map((badge) =>
          badge.src ? (
            <Image
              key={badge.alt}
              src={badge.src}
              alt={badge.alt}
              width={badge.width || 80}
              height={badge.height || 24}
              unoptimized
              className="h-6 w-auto opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              loading="lazy"
            />
          ) : (
            <span
              key={badge.alt}
              className={cn(
                'text-xs font-medium',
                isDark ? 'text-white/60' : 'text-[var(--kindonar-color-neutral-400)]',
              )}
            >
              {badge.name || badge.alt}
            </span>
          ),
        )}
      </div>
    </motion.div>
  );
}

function StatsRowSection({ stats, isDark }: { stats: StatItem[]; isDark: boolean }) {
  if (!stats.length) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className={cn(
        'mt-10 grid gap-6 border-t pt-8 md:grid-cols-2 lg:grid-cols-4 lg:pt-10',
        isDark ? 'border-white/10' : 'border-[var(--kindonar-color-neutral-200)]',
      )}
    >
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div
            className={cn(
              'text-2xl font-bold md:text-3xl lg:text-4xl',
              isDark ? 'text-white' : 'text-[var(--kindonar-color-neutral-900)]',
            )}
          >
            {stat.prefix}
            {stat.value}
            {stat.suffix}
          </div>
          <div
            className={cn(
              'mt-1 text-sm',
              isDark ? 'text-white/60' : 'text-[var(--kindonar-color-neutral-500)]',
            )}
          >
            {stat.label}
          </div>
        </div>
      ))}
    </motion.div>
  );
}

function FloatingStatsCards({ stats, isDark }: { stats: FloatingStatCard[]; isDark: boolean }) {
  if (!stats.length) return null;
  const positions = ['top-24 right-8', 'top-32 left-8', 'bottom-32 right-12', 'bottom-24 left-12'];
  return (
    <>
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, x: i % 2 === 0 ? 20 : -20, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.8 + i * 0.2, duration: 0.5 }}
          className={cn(
            'absolute z-20 rounded-xl px-4 py-3 shadow-lg backdrop-blur-sm md:px-5 md:py-4',
            positions[i % positions.length],
            isDark
              ? 'bg-white/10 text-white'
              : 'bg-white/80 text-[var(--kindonar-color-neutral-900)]',
          )}
        >
          <div className="flex items-center gap-2">
            {stat.icon && (
              <span aria-hidden="true" className="text-lg">
                {stat.icon}
              </span>
            )}
            <div>
              <div className="text-lg font-bold md:text-xl">{stat.value}</div>
              <div
                className={cn(
                  'text-xs',
                  isDark ? 'text-white/70' : 'text-[var(--kindonar-color-neutral-500)]',
                )}
              >
                {stat.label}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
}

function HeroContentBlock({
  config,
  isDark,
  className,
}: {
  config: HeroConfig;
  isDark: boolean;
  className?: string;
}) {
  const alignCenter =
    config.layout === 'center' || config.layout === 'image' || config.layout === 'video';
  return (
    <motion.div
      variants={staggerItem}
      className={cn(
        'relative z-10',
        alignCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl',
        config.layout === 'right' ? 'ml-auto text-right' : '',
        className,
      )}
    >
      {config.heading.tag && (
        <motion.span
          variants={staggerItem}
          className={cn(
            'mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider uppercase',
            isDark
              ? 'bg-white/20 text-white'
              : 'bg-[var(--kindonar-color-primary-100)] text-[var(--kindonar-color-primary-700)]',
          )}
        >
          {config.heading.tag}
        </motion.span>
      )}
      <motion.h1
        variants={staggerItem}
        className={cn(
          'text-4xl font-bold tracking-tight whitespace-pre-line md:text-5xl lg:text-6xl xl:text-7xl',
          isDark ? 'text-white' : 'text-[var(--kindonar-color-neutral-900)]',
        )}
      >
        {config.heading.title}
      </motion.h1>
      {config.heading.subtitle && (
        <motion.p
          variants={staggerItem}
          className={cn(
            'mt-4 text-lg md:text-xl lg:text-2xl',
            isDark ? 'text-white/80' : 'text-[var(--kindonar-color-neutral-600)]',
          )}
        >
          {config.heading.subtitle}
        </motion.p>
      )}
      {config.heading.description && (
        <motion.p
          variants={staggerItem}
          className={cn(
            'mt-4 max-w-2xl text-base leading-relaxed md:text-lg',
            isDark ? 'text-white/70' : 'text-[var(--kindonar-color-neutral-500)]',
            alignCenter ? 'mx-auto' : '',
          )}
        >
          {config.heading.description}
        </motion.p>
      )}
      {(config.primaryCta || config.secondaryCta) && (
        <motion.div
          variants={staggerItem}
          className={cn(
            'mt-8 flex flex-col gap-4 sm:flex-row',
            alignCenter ? 'justify-center' : '',
            config.layout === 'right' ? 'justify-end' : '',
          )}
        >
          {config.primaryCta && <CTAButton cta={config.primaryCta} isDark={isDark} />}
          {config.secondaryCta && (
            <CTAButton
              cta={config.secondaryCta}
              isDark={isDark}
              className="bg-white/10 backdrop-blur-sm"
            />
          )}
        </motion.div>
      )}
      {config.trustBadges && <TrustBadgesRow badges={config.trustBadges} isDark={isDark} />}
      {config.stats && <StatsRowSection stats={config.stats} isDark={isDark} />}
    </motion.div>
  );
}

function HeroBackgroundImage({
  src,
  alt,
  overlayOpacity = 0.5,
  overlayGradient,
  imageClassName,
}: {
  src: string;
  alt: string;
  overlayOpacity?: number;
  overlayGradient?: string;
  imageClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          unoptimized
          className={cn('object-cover', imageClassName)}
          loading="eager"
        />
      </motion.div>
      {overlayGradient ? (
        <div className="absolute inset-0" style={{ background: overlayGradient }} />
      ) : (
        <div
          className="absolute inset-0"
          style={{ backgroundColor: `rgba(0,0,0,${overlayOpacity})` }}
        />
      )}
    </div>
  );
}

function HeroBackgroundVideo({
  video,
  overlayOpacity = 0.5,
}: {
  video: NonNullable<HeroConfig['backgroundVideo']>;
  overlayOpacity?: number;
}) {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={video.poster}
        className="h-full w-full object-cover"
      >
        <source src={video.src} type={video.type || 'video/mp4'} />
      </video>
      <div
        className="absolute inset-0"
        style={{ backgroundColor: `rgba(0,0,0,${overlayOpacity})` }}
      />
    </div>
  );
}

function HeroImageLayout({ config }: { config: HeroConfig }) {
  const isDark = useIsDark(config.theme);
  const bgImage =
    config.backgroundImage ||
    (config.backgroundValue ? { src: config.backgroundValue, alt: '' } : null);
  return (
    <MotionSection
      animation={config.animation}
      className={cn(
        'relative flex min-h-screen items-center overflow-hidden',
        isDark ? 'text-white' : '',
      )}
      aria-label={config.heading.title}
    >
      {bgImage && (
        <HeroBackgroundImage
          src={bgImage.src}
          alt={bgImage.alt}
          overlayOpacity={config.overlayOpacity ?? 0.5}
          overlayGradient={config.overlayGradient}
          imageClassName={config.imageBlendMode}
        />
      )}
      {config.decorativeShapes && (
        <DecorativeShapes shapes={config.decorativeShapes} isDark={isDark} />
      )}
      {config.floatingStats && <FloatingStatsCards stats={config.floatingStats} isDark={isDark} />}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {config.contentWidth ? (
          <div className="grid grid-cols-12">
            <div
              className={cn(
                'col-span-12',
                config.contentWidth === 'full'
                  ? 'lg:col-span-12'
                  : config.contentWidth === 'three-quarters'
                    ? 'lg:col-span-9'
                    : 'lg:col-span-8',
              )}
            >
              <HeroContentBlock config={config} isDark={isDark} />
            </div>
          </div>
        ) : (
          <HeroContentBlock config={config} isDark={isDark} />
        )}
      </div>
      {config.showScrollIndicator && <ScrollIndicator isDark={isDark} />}
    </MotionSection>
  );
}

function HeroVideoLayout({ config }: { config: HeroConfig }) {
  return (
    <MotionSection
      animation={config.animation}
      className="relative flex min-h-screen items-center overflow-hidden text-white"
      aria-label={config.heading.title}
    >
      {config.backgroundVideo && (
        <HeroBackgroundVideo
          video={config.backgroundVideo}
          overlayOpacity={config.overlayOpacity ?? 0.5}
        />
      )}
      {config.decorativeShapes && (
        <DecorativeShapes shapes={config.decorativeShapes} isDark={true} />
      )}
      {config.floatingStats && <FloatingStatsCards stats={config.floatingStats} isDark={true} />}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <HeroContentBlock config={config} isDark={true} />
      </div>
      {config.showScrollIndicator && <ScrollIndicator isDark={true} />}
    </MotionSection>
  );
}

function HeroCarouselLayout({ config }: { config: HeroConfig }) {
  const slides = config.slides || [];
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayRef = useRef<ReturnType<typeof setInterval>>(undefined);

  const onSelect = useCallback((emblaApiInner: EmblaCarouselType) => {
    setSelectedIndex(emblaApiInner.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    requestAnimationFrame(() => onSelect(emblaApi));
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi || !autoplay) return;
    autoplayRef.current = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [emblaApi, autoplay]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    setAutoplay(false);
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    setAutoplay(false);
    emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      setAutoplay(false);
      emblaApi.scrollTo(index);
    },
    [emblaApi],
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
    <MotionSection
      animation={config.animation}
      className="relative min-h-screen overflow-hidden text-white"
      aria-label={config.heading.title}
    >
      <div
        className="h-screen overflow-hidden"
        ref={emblaRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Hero slideshow"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <div className="flex h-full">
          <AnimatePresence mode="popLayout">
            {slides.map((slide) => (
              <motion.div
                key={slide.id}
                className="relative h-full min-w-0 flex-[0_0_100%]"
                role="group"
                aria-roledescription="slide"
                aria-label={`Slide ${slides.indexOf(slide) + 1} of ${slides.length}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0" aria-hidden="true">
                  {slide.image && (
                    <Image
                      src={slide.image.src}
                      alt={slide.image.alt}
                      fill
                      unoptimized
                      className="object-cover"
                      loading={slides.indexOf(slide) === 0 ? 'eager' : 'lazy'}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative z-10 flex h-full items-center">
                  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="max-w-3xl"
                    >
                      <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl"
                      >
                        {slide.heading}
                      </motion.h2>
                      {slide.subtitle && (
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                          className="mt-4 text-lg text-white/80 md:text-xl lg:text-2xl"
                        >
                          {slide.subtitle}
                        </motion.p>
                      )}
                      {slide.description && (
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                          className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg"
                        >
                          {slide.description}
                        </motion.p>
                      )}
                      {(slide.primaryCta || slide.secondaryCta) && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 }}
                          className="mt-8 flex flex-col gap-4 sm:flex-row"
                        >
                          {slide.primaryCta && <CTAButton cta={slide.primaryCta} isDark={true} />}
                          {slide.secondaryCta && (
                            <CTAButton
                              cta={slide.secondaryCta}
                              isDark={true}
                              className="bg-white/10 backdrop-blur-sm"
                            />
                          )}
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      {slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/40 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2" role="tablist" aria-label="Slide navigation">
              {slides.map((slide, i) => (
                <button
                  key={slide.id}
                  onClick={() => scrollTo(i)}
                  className={cn(
                    'h-2 rounded-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none',
                    i === selectedIndex ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60',
                  )}
                  role="tab"
                  aria-selected={i === selectedIndex}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={scrollNext}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/40 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </MotionSection>
  );
}

function HeroSplitLayout({ config }: { config: HeroConfig }) {
  const isDark = useIsDark(config.theme);
  const bgImage =
    config.backgroundImage ||
    (config.backgroundValue ? { src: config.backgroundValue, alt: '' } : null);
  const imageLeft = config.imagePosition !== 'right';

  return (
    <MotionSection
      animation={config.animation}
      className={cn('relative min-h-screen', isDark ? 'text-white' : '')}
      aria-label={config.heading.title}
    >
      <div className="grid min-h-screen flex-col lg:grid-cols-2">
        {imageLeft && (
          <div className="relative h-64 overflow-hidden lg:h-auto" aria-hidden="true">
            {bgImage && (
              <Image
                src={bgImage.src}
                alt={bgImage.alt}
                fill
                unoptimized
                className="object-cover"
                loading="eager"
              />
            )}
          </div>
        )}
        <div
          className={cn(
            'flex items-center px-4 py-16 sm:px-6 lg:px-12',
            themeClasses[config.theme],
          )}
        >
          <div className="w-full max-w-xl">
            <HeroContentBlock config={config} isDark={isDark} className="mx-0" />
          </div>
        </div>
        {!imageLeft && (
          <div
            className="relative h-64 overflow-hidden lg:order-first lg:h-auto"
            aria-hidden="true"
          >
            {bgImage && (
              <Image
                src={bgImage.src}
                alt={bgImage.alt}
                fill
                unoptimized
                className="object-cover"
                loading="eager"
              />
            )}
          </div>
        )}
      </div>
    </MotionSection>
  );
}

function HeroCenterLayout({ config }: { config: HeroConfig }) {
  const isDark = useIsDark(config.theme);

  return (
    <MotionSection
      animation={config.animation}
      className={cn(
        'relative flex min-h-[80vh] items-center',
        config.padding !== 'none' ? paddingClasses[config.padding] : '',
        isDark ? 'text-white' : '',
        themeClasses[config.theme],
      )}
      aria-label={config.heading.title}
      style={
        config.background === 'image' && config.backgroundValue
          ? {
              backgroundImage: `url(${config.backgroundValue})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      {config.background === 'image' && config.backgroundValue && (
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      )}
      {config.decorativeShapes && (
        <DecorativeShapes shapes={config.decorativeShapes} isDark={isDark} />
      )}
      {config.floatingStats && <FloatingStatsCards stats={config.floatingStats} isDark={isDark} />}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <HeroContentBlock config={config} isDark={isDark} />
      </div>
      {config.showScrollIndicator && <ScrollIndicator isDark={isDark} />}
    </MotionSection>
  );
}

function HeroLeftLayout({ config }: { config: HeroConfig }) {
  const isDark = useIsDark(config.theme);
  const bgImage =
    config.backgroundImage ||
    (config.backgroundValue ? { src: config.backgroundValue, alt: '' } : null);
  const contentCols = config.contentWidth === 'full' ? 'lg:col-span-12' : 'lg:col-span-8';

  return (
    <MotionSection
      animation={config.animation}
      className={cn(
        'relative flex min-h-screen items-center overflow-hidden',
        config.padding !== 'none' ? paddingClasses[config.padding] : '',
        isDark ? 'text-white' : '',
        themeClasses[config.theme],
      )}
      aria-label={config.heading.title}
    >
      {bgImage && (
        <HeroBackgroundImage
          src={bgImage.src}
          alt={bgImage.alt}
          overlayOpacity={config.overlayOpacity ?? 0.5}
          overlayGradient={config.overlayGradient}
          imageClassName={config.imageBlendMode}
        />
      )}
      {config.decorativeShapes && (
        <DecorativeShapes shapes={config.decorativeShapes} isDark={isDark} />
      )}
      {config.floatingStats && <FloatingStatsCards stats={config.floatingStats} isDark={isDark} />}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12">
          <div className={cn('col-span-12', contentCols)}>
            <HeroContentBlock config={config} isDark={isDark} />
          </div>
        </div>
      </div>
      {config.showScrollIndicator && <ScrollIndicator isDark={isDark} />}
    </MotionSection>
  );
}

function HeroRightLayout({ config }: { config: HeroConfig }) {
  const isDark = useIsDark(config.theme);

  return (
    <MotionSection
      animation={config.animation}
      className={cn(
        'relative flex min-h-[80vh] items-center',
        config.padding !== 'none' ? paddingClasses[config.padding] : '',
        isDark ? 'text-white' : '',
        themeClasses[config.theme],
      )}
      aria-label={config.heading.title}
      style={
        config.background === 'image' && config.backgroundValue
          ? {
              backgroundImage: `url(${config.backgroundValue})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      {config.background === 'image' && config.backgroundValue && (
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      )}
      {config.decorativeShapes && (
        <DecorativeShapes shapes={config.decorativeShapes} isDark={isDark} />
      )}
      {config.floatingStats && <FloatingStatsCards stats={config.floatingStats} isDark={isDark} />}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <HeroContentBlock config={config} isDark={isDark} />
      </div>
      {config.showScrollIndicator && <ScrollIndicator isDark={isDark} />}
    </MotionSection>
  );
}

function HeroIllustrationLayout({ config }: { config: HeroConfig }) {
  const isDark = useIsDark(config.theme);

  return (
    <MotionSection
      animation={config.animation}
      className={cn(
        'relative min-h-[80vh]',
        config.padding !== 'none' ? paddingClasses[config.padding] : '',
        isDark ? 'text-white' : '',
        themeClasses[config.theme],
      )}
      aria-label={config.heading.title}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className={cn(config.imagePosition === 'right' ? 'lg:order-2' : '')}>
            <HeroContentBlock config={config} isDark={isDark} />
          </div>
          <div className={cn('relative', config.imagePosition === 'right' ? 'lg:order-1' : '')}>
            {config.illustration && (
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                {typeof config.illustration?.src === 'string' &&
                  (config.illustration.src.endsWith('.svg') ? (
                    <Image
                      src={config.illustration.src}
                      alt={config.illustration.alt}
                      width={512}
                      height={384}
                      unoptimized
                      className="h-auto w-full max-w-lg"
                      loading="eager"
                    />
                  ) : (
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                      <Image
                        src={config.illustration.src}
                        alt={config.illustration.alt}
                        fill
                        unoptimized
                        className="object-cover"
                        loading="eager"
                      />
                    </div>
                  ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
      {config.decorativeShapes && (
        <DecorativeShapes shapes={config.decorativeShapes} isDark={isDark} />
      )}
    </MotionSection>
  );
}

const layoutComponents: Record<HeroLayout, (config: HeroConfig) => ReactNode> = {
  image: (cfg) => HeroImageLayout({ config: cfg }),
  video: (cfg) => HeroVideoLayout({ config: cfg }),
  carousel: (cfg) => HeroCarouselLayout({ config: cfg }),
  split: (cfg) => HeroSplitLayout({ config: cfg }),
  center: (cfg) => HeroCenterLayout({ config: cfg }),
  left: (cfg) => HeroLeftLayout({ config: cfg }),
  right: (cfg) => HeroRightLayout({ config: cfg }),
  illustration: (cfg) => HeroIllustrationLayout({ config: cfg }),
};

export function Hero({ config }: { config: HeroConfig }) {
  if (!config) return null;
  const LayoutComponent = layoutComponents[config.layout];
  if (!LayoutComponent) return null;
  return LayoutComponent(config);
}

export function HeroImage({ config }: { config: HeroConfig & { layout: 'image' } }) {
  return HeroImageLayout({ config });
}

export function HeroVideo({ config }: { config: HeroConfig & { layout: 'video' } }) {
  return HeroVideoLayout({ config });
}

export function HeroCarousel({ config }: { config: HeroConfig & { layout: 'carousel' } }) {
  return HeroCarouselLayout({ config });
}

export function HeroSplit({ config }: { config: HeroConfig & { layout: 'split' } }) {
  return HeroSplitLayout({ config });
}

export function HeroCenter({ config }: { config: HeroConfig & { layout: 'center' } }) {
  return HeroCenterLayout({ config });
}

export function HeroLeft({ config }: { config: HeroConfig & { layout: 'left' } }) {
  return HeroLeftLayout({ config });
}

export function HeroRight({ config }: { config: HeroConfig & { layout: 'right' } }) {
  return HeroRightLayout({ config });
}

export function HeroIllustration({ config }: { config: HeroConfig & { layout: 'illustration' } }) {
  return HeroIllustrationLayout({ config });
}
