'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Heart, Bookmark } from 'lucide-react';
import { useState, useEffect, useCallback, useRef } from 'react';

import { Image } from '@/components/ui/media/image';
import { cn } from '@/lib/utils';

import { SectionWrapper, SectionHeadingBlock, staggerItem } from '../motion';

import type { GalleryConfig, GalleryImage } from './config.types';

function InlineLightbox({
  images,
  initialIndex,
  onClose,
}: {
  images: GalleryImage[];
  initialIndex: number;
  onClose: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const safeImages = Array.isArray(images) ? images : [];

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % safeImages.length);
  }, [safeImages.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + safeImages.length) % safeImages.length);
  }, [safeImages.length]);

  useEffect(() => {
    closeButtonRef.current?.focus();
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose, goNext, goPrev]);

  const current = safeImages[currentIndex];
  if (!current) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Image lightbox"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-4 right-4 z-20 rounded-full bg-black/60 p-2.5 text-white transition-colors hover:bg-black/80"
          aria-label="Close lightbox"
        >
          <X className="h-5 w-5" />
        </button>

        {safeImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-4 z-20 rounded-full bg-black/60 p-3 text-white transition-colors hover:bg-black/80"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute top-1/2 right-4 z-20 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white transition-colors hover:bg-black/80"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}

        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ duration: 0.25 }}
          className="flex max-h-[85vh] max-w-[90vw] items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={current.src}
            alt={current.alt}
            className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
          />
        </motion.div>

        <div className="absolute bottom-6 flex flex-col items-center gap-3">
          {safeImages.length > 1 && (
            <div className="flex gap-2" role="tablist" aria-label="Image navigation">
              {safeImages.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  role="tab"
                  aria-selected={idx === currentIndex}
                  aria-label={`Go to image ${idx + 1}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(idx);
                  }}
                  className={cn(
                    'h-2 rounded-full transition-all',
                    idx === currentIndex ? 'w-6 bg-white' : 'w-2 bg-white/40 hover:bg-white/60',
                  )}
                />
              ))}
            </div>
          )}
          <p className="text-sm text-white/60">
            {currentIndex + 1} / {safeImages.length}
          </p>
          {current.caption && (
            <p className="max-w-md text-center text-sm text-white/80">{current.caption}</p>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

function ImageCard({
  image,
  onClick,
  aspectRatio,
  overlay,
}: {
  image: GalleryImage;
  onClick?: () => void;
  aspectRatio?: string;
  overlay?: React.ReactNode;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className={cn('group relative overflow-hidden rounded-xl', onClick && 'cursor-pointer')}
      onClick={onClick}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') onClick();
            }
          : undefined
      }
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <Image
        src={image.src}
        alt={image.alt}
        aspectRatio={aspectRatio ?? '4/3'}
        withSkeleton
        className="transition-transform duration-500 group-hover:scale-105"
      />
      {overlay}
      {image.caption && !overlay && (
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
          <p className="text-sm text-white">{image.caption}</p>
        </figcaption>
      )}
    </motion.figure>
  );
}

function GridGallery({ images }: { images: GalleryImage[] }) {
  const safeImages = Array.isArray(images) ? images : [];
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {safeImages.map((image, idx) => (
        <ImageCard key={idx} image={image} aspectRatio="4/3" />
      ))}
    </div>
  );
}

function MasonryGallery({ images }: { images: GalleryImage[] }) {
  const safeImages = Array.isArray(images) ? images : [];
  return (
    <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
      {safeImages.map((image, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: idx * 0.05 }}
          className="mb-4 break-inside-avoid overflow-hidden rounded-xl"
        >
          <Image src={image.src} alt={image.alt} rounded="lg" withSkeleton />
          {image.caption && (
            <p className="mt-1.5 px-1 text-xs text-[var(--kindonar-color-neutral-500)]">
              {image.caption}
            </p>
          )}
        </motion.div>
      ))}
    </div>
  );
}

function CarouselGallery({ images }: { images: GalleryImage[] }) {
  const safeImages = Array.isArray(images) ? images : [];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const scrollTo = useCallback((idx: number) => emblaApi?.scrollTo(idx), [emblaApi]);

  return (
    <div>
      <div
        ref={emblaRef}
        className="overflow-hidden rounded-xl"
        role="region"
        aria-label="Image carousel"
        aria-roledescription="carousel"
      >
        <div className="flex">
          {safeImages.map((image, idx) => (
            <div
              key={idx}
              className="min-w-0 flex-[0_0_100%]"
              role="group"
              aria-roledescription="slide"
              aria-label={`Image ${idx + 1} of ${safeImages.length}`}
            >
              <Image src={image.src} alt={image.alt} aspectRatio="16/9" withSkeleton />
            </div>
          ))}
        </div>
      </div>
      <div
        className="mt-4 flex gap-2 overflow-x-auto pb-2"
        role="tablist"
        aria-label="Image thumbnail navigation"
      >
        {safeImages.map((image, idx) => (
          <button
            key={idx}
            type="button"
            role="tab"
            aria-selected={idx === selectedIndex}
            aria-label={`Go to image ${idx + 1}`}
            onClick={() => scrollTo(idx)}
            className={cn(
              'flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all',
              idx === selectedIndex
                ? 'border-[var(--kindonar-color-primary-500)] opacity-100'
                : 'border-transparent opacity-60 hover:opacity-80',
            )}
            style={{ width: '80px', height: '60px' }}
          >
            <Image src={image.src} alt={image.alt} fit="cover" className="h-full w-full" />
          </button>
        ))}
      </div>
    </div>
  );
}

function LightboxGallery({ images }: { images: GalleryImage[] }) {
  const safeImages = Array.isArray(images) ? images : [];
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {safeImages.map((image, idx) => (
          <ImageCard key={idx} image={image} aspectRatio="4/3" onClick={() => openLightbox(idx)} />
        ))}
      </div>
      <AnimatePresence>
        {lightboxOpen && (
          <InlineLightbox
            images={safeImages}
            initialIndex={lightboxIndex}
            onClose={() => setLightboxOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function PinterestGallery({ images }: { images: GalleryImage[] }) {
  const safeImages = Array.isArray(images) ? images : [];
  return (
    <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
      {safeImages.map((image, idx) => (
        <motion.div
          key={idx}
          variants={staggerItem}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="group relative mb-4 break-inside-avoid overflow-hidden rounded-xl"
        >
          <Image src={image.src} alt={image.alt} rounded="lg" withSkeleton />
          <div className="absolute inset-0 flex items-start justify-end gap-2 bg-black/0 p-3 opacity-0 transition-all group-hover:bg-black/20 group-hover:opacity-100">
            <button
              type="button"
              className="flex items-center gap-1 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-[var(--kindonar-color-neutral-900)] shadow-lg transition-transform hover:scale-105"
              aria-label="Save image"
            >
              <Bookmark className="h-3.5 w-3.5" />
              Save
            </button>
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[var(--kindonar-color-neutral-700)] shadow-lg transition-colors hover:bg-white"
              aria-label="Like image"
            >
              <Heart className="h-4 w-4" />
            </button>
          </div>
          {image.caption && (
            <p className="mt-1.5 px-1 text-xs text-[var(--kindonar-color-neutral-500)]">
              {image.caption}
            </p>
          )}
        </motion.div>
      ))}
    </div>
  );
}

function FeaturedGallery({ images }: { images: GalleryImage[] }) {
  const safeImages = Array.isArray(images) ? images : [];
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = safeImages[activeIndex];

  if (!activeImage) return null;

  return (
    <div>
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="relative mb-4 overflow-hidden rounded-2xl"
      >
        <div style={{ aspectRatio: '21/9' }}>
          <Image src={activeImage.src} alt={activeImage.alt} fit="cover" withSkeleton />
        </div>
        {activeImage.caption && (
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6">
            <p className="text-lg text-white">{activeImage.caption}</p>
          </div>
        )}
      </motion.div>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
        {safeImages.map((image, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActiveIndex(idx)}
            className={cn(
              'overflow-hidden rounded-xl border-2 transition-all',
              idx === activeIndex
                ? 'border-[var(--kindonar-color-primary-500)] ring-2 ring-[var(--kindonar-color-primary-200)]'
                : 'border-transparent opacity-60 hover:opacity-90',
            )}
            aria-label={`View ${image.alt}`}
            aria-current={idx === activeIndex ? 'true' : undefined}
          >
            <div style={{ aspectRatio: '4/3' }}>
              <Image src={image.src} alt={image.alt} fit="cover" className="h-full w-full" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export function Gallery({ config }: { config: GalleryConfig }) {
  if (!config) return null;
  const safeImages = Array.isArray(config.images) ? config.images : [];
  if (!config.visible || !safeImages.length) return null;

  const renderVariant = () => {
    switch (config.layout) {
      case 'grid':
        return <GridGallery images={safeImages} />;
      case 'masonry':
        return <MasonryGallery images={safeImages} />;
      case 'carousel':
        return <CarouselGallery images={safeImages} />;
      case 'lightbox':
        return <LightboxGallery images={safeImages} />;
      case 'pinterest':
        return <PinterestGallery images={safeImages} />;
      case 'featured':
        return <FeaturedGallery images={safeImages} />;
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
