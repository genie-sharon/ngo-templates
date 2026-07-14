'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

import { cn } from '@/lib/utils';

import { SectionHeadingBlock, SectionWrapper, staggerItem } from '../motion';
import { type SectionImage, type StatItem } from '../section-config.types';

import type { AboutConfig, MissionVisionItem, CeoMessage } from './config.types';

function Counter({
  value,
  suffix,
  prefix,
  duration = 2,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    requestAnimationFrame(() => setCount(0));
    const start = performance.now();
    const frame = (now: number) => {
      const elapsed = (now - start) / 1000;
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - t) * (1 - t);
      setCount(Math.floor(eased * value));
      if (t < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString('en-US')}
      {suffix}
    </span>
  );
}

function StatsSection({ stats, isDark }: { stats: StatItem[]; isDark: boolean }) {
  const safeStats = Array.isArray(stats) ? stats : [];
  if (!safeStats.length) return null;
  return (
    <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
      {safeStats.map((stat, i) => (
        <motion.div
          key={i}
          variants={staggerItem}
          className={cn(
            'rounded-xl border p-6 text-center',
            isDark
              ? 'border-white/10 bg-white/5'
              : 'border-[var(--kindonar-color-neutral-200)] bg-[var(--kindonar-surface-interactive)]',
          )}
        >
          {stat.icon && <div className="mb-2 flex justify-center">{stat.icon}</div>}
          <div
            className={cn(
              'text-3xl font-bold md:text-4xl',
              isDark ? 'text-white' : 'text-[var(--kindonar-color-neutral-900)]',
            )}
          >
            <Counter
              value={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
              duration={stat.duration}
            />
          </div>
          <div
            className={cn(
              'mt-1 text-sm',
              isDark ? 'text-white/70' : 'text-[var(--kindonar-color-neutral-500)]',
            )}
          >
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function SectionImageComponent({ image, className }: { image: SectionImage; className?: string }) {
  if (!image) return null;
  return (
    <figure className={cn('relative overflow-hidden rounded-xl', className)}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width || 1200}
        height={image.height || 800}
        className="h-full w-full object-cover"
      />
      {image.caption && (
        <figcaption className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-sm text-white">
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
}

function FloatingCaptionImage({ image, className }: { image: SectionImage; className?: string }) {
  if (!image) return null;
  return (
    <div className={cn('relative', className)}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width || 1200}
        height={image.height || 800}
        className="h-full w-full rounded-xl object-cover"
      />
      {image.caption && (
        <div className="absolute -right-4 -bottom-4 max-w-xs rounded-lg bg-[var(--kindonar-color-primary-500)] p-4 text-white shadow-lg md:-right-6 md:-bottom-6">
          <p className="text-sm font-medium">{image.caption}</p>
        </div>
      )}
    </div>
  );
}

function MissionVisionSection({
  mission,
  vision,
  values,
  isDark,
}: {
  mission?: string;
  vision?: string;
  values?: MissionVisionItem[];
  isDark: boolean;
}) {
  const hasContent = mission || vision || (values && values.length > 0);
  if (!hasContent) return null;

  return (
    <div className="mt-16 space-y-12">
      {(mission || vision) && (
        <div className="grid gap-8 md:grid-cols-2">
          {mission && (
            <motion.div
              variants={staggerItem}
              className={cn(
                'rounded-xl border p-6',
                isDark
                  ? 'border-white/10 bg-white/5'
                  : 'border-[var(--kindonar-color-neutral-200)] bg-[var(--kindonar-surface-interactive)]',
              )}
            >
              <h3
                className={cn(
                  'text-xl font-semibold',
                  isDark ? 'text-white' : 'text-[var(--kindonar-color-neutral-900)]',
                )}
              >
                Our Mission
              </h3>
              <p
                className={cn(
                  'mt-3 leading-relaxed',
                  isDark ? 'text-white/70' : 'text-[var(--kindonar-color-neutral-600)]',
                )}
              >
                {mission}
              </p>
            </motion.div>
          )}
          {vision && (
            <motion.div
              variants={staggerItem}
              className={cn(
                'rounded-xl border p-6',
                isDark
                  ? 'border-white/10 bg-white/5'
                  : 'border-[var(--kindonar-color-neutral-200)] bg-[var(--kindonar-surface-interactive)]',
              )}
            >
              <h3
                className={cn(
                  'text-xl font-semibold',
                  isDark ? 'text-white' : 'text-[var(--kindonar-color-neutral-900)]',
                )}
              >
                Our Vision
              </h3>
              <p
                className={cn(
                  'mt-3 leading-relaxed',
                  isDark ? 'text-white/70' : 'text-[var(--kindonar-color-neutral-600)]',
                )}
              >
                {vision}
              </p>
            </motion.div>
          )}
        </div>
      )}
      {values && values.length > 0 && (
        <div>
          <h3
            className={cn(
              'mb-6 text-2xl font-semibold',
              isDark ? 'text-white' : 'text-[var(--kindonar-color-neutral-900)]',
            )}
          >
            Our Values
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className={cn(
                  'rounded-xl border p-6',
                  isDark
                    ? 'border-white/10 bg-white/5'
                    : 'border-[var(--kindonar-color-neutral-200)] bg-[var(--kindonar-surface-interactive)]',
                )}
              >
                {v.icon && <div className="mb-3">{v.icon}</div>}
                <h4
                  className={cn(
                    'text-lg font-semibold',
                    isDark ? 'text-white' : 'text-[var(--kindonar-color-neutral-900)]',
                  )}
                >
                  {v.title}
                </h4>
                <p
                  className={cn(
                    'mt-2 text-sm leading-relaxed',
                    isDark ? 'text-white/70' : 'text-[var(--kindonar-color-neutral-600)]',
                  )}
                >
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function CeoMessageSection({ ceo, isDark }: { ceo: CeoMessage; isDark: boolean }) {
  return (
    <motion.div
      variants={staggerItem}
      className={cn(
        'mt-16 rounded-2xl border p-8 md:p-12',
        isDark
          ? 'border-white/10 bg-white/5'
          : 'border-[var(--kindonar-color-neutral-200)] bg-[var(--kindonar-surface-interactive)]',
      )}
    >
      {ceo.quote && (
        <blockquote
          className={cn(
            'mb-6 text-xl leading-relaxed font-medium italic md:text-2xl',
            isDark ? 'text-white/90' : 'text-[var(--kindonar-color-neutral-800)]',
          )}
        >
          &ldquo;{ceo.quote}&rdquo;
        </blockquote>
      )}
      <div className="flex items-center gap-4">
        {ceo.photo && (
          <Image
            src={ceo.photo.src}
            alt={ceo.photo.alt}
            width={64}
            height={64}
            className="h-16 w-16 rounded-full object-cover"
          />
        )}
        <div>
          <div
            className={cn(
              'font-semibold',
              isDark ? 'text-white' : 'text-[var(--kindonar-color-neutral-900)]',
            )}
          >
            {ceo.name}
          </div>
          {ceo.role && (
            <div
              className={cn(
                'text-sm',
                isDark ? 'text-white/60' : 'text-[var(--kindonar-color-neutral-500)]',
              )}
            >
              {ceo.role}
            </div>
          )}
        </div>
      </div>
      {ceo.message && (
        <p
          className={cn(
            'mt-4 leading-relaxed',
            isDark ? 'text-white/70' : 'text-[var(--kindonar-color-neutral-600)]',
          )}
        >
          {ceo.message}
        </p>
      )}
    </motion.div>
  );
}

function StoryLayout({ config, isDark }: { config: AboutConfig; isDark: boolean }) {
  const body = config.body || [];
  return (
    <div className="mx-auto max-w-4xl">
      {body.length > 0 && (
        <motion.div variants={staggerItem} className="space-y-6">
          {body.map((p, i) => (
            <p
              key={i}
              className={cn(
                'text-lg leading-relaxed',
                isDark ? 'text-white/80' : 'text-[var(--kindonar-color-neutral-600)]',
              )}
            >
              {p}
            </p>
          ))}
        </motion.div>
      )}
      {config.image && (
        <motion.div variants={staggerItem} className="mt-10">
          <SectionImageComponent image={config.image} />
        </motion.div>
      )}
    </div>
  );
}

function SplitLayout({ config, isDark }: { config: AboutConfig; isDark: boolean }) {
  const body = config.body || [];
  const imageContent =
    config.image &&
    (config.image.caption ? (
      <FloatingCaptionImage image={config.image} />
    ) : (
      <SectionImageComponent image={config.image} />
    ));
  return (
    <div className="grid items-center gap-10 md:grid-cols-2">
      <motion.div
        variants={staggerItem}
        className={cn('space-y-6', imageContent ? 'order-2 md:order-1' : '')}
      >
        {body.map((p, i) => (
          <p
            key={i}
            className={cn(
              'text-lg leading-relaxed',
              isDark ? 'text-white/80' : 'text-[var(--kindonar-color-neutral-600)]',
            )}
          >
            {p}
          </p>
        ))}
      </motion.div>
      {imageContent && (
        <motion.div variants={staggerItem} className={cn('order-1 md:order-2')}>
          {imageContent}
        </motion.div>
      )}
    </div>
  );
}

function TimelineLayout({ config, isDark }: { config: AboutConfig; isDark: boolean }) {
  const entries = config.timeline || [];
  if (!entries.length) return null;
  return (
    <div className="relative" role="list" aria-label="Timeline">
      <div
        className="absolute top-0 left-4 h-full w-0.5 bg-[var(--kindonar-color-primary-200)] md:left-1/2 md:-translate-x-px"
        aria-hidden="true"
      />
      <div className="space-y-12">
        {entries.map((entry, i) => (
          <motion.div
            key={i}
            variants={staggerItem}
            role="listitem"
            className={cn(
              'relative pl-12 md:w-1/2 md:pl-0',
              i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12',
            )}
          >
            <div
              className={cn(
                'absolute top-1 left-2 h-4 w-4 rounded-full border-4',
                i % 2 === 0 ? 'md:right-[-9px] md:left-auto' : 'md:left-[-9px]',
                isDark
                  ? 'border-white bg-[var(--kindonar-color-primary-500)]'
                  : 'border-[var(--kindonar-color-primary-500)] bg-white',
              )}
              aria-hidden="true"
            />
            <div
              className={cn(
                'rounded-xl border p-6',
                isDark
                  ? 'border-white/10 bg-white/5'
                  : 'border-[var(--kindonar-color-neutral-200)] bg-[var(--kindonar-surface-interactive)]',
              )}
            >
              <time className="text-sm font-bold tracking-wider text-[var(--kindonar-color-primary-500)] uppercase">
                {entry.year}
              </time>
              <h3
                className={cn(
                  'mt-1 text-lg font-semibold',
                  isDark ? 'text-white' : 'text-[var(--kindonar-color-neutral-900)]',
                )}
              >
                {entry.title}
              </h3>
              <p
                className={cn(
                  'mt-2 text-sm leading-relaxed',
                  isDark ? 'text-white/70' : 'text-[var(--kindonar-color-neutral-600)]',
                )}
              >
                {entry.description}
              </p>
              {entry.image && (
                <div className="mt-4">
                  <Image
                    src={entry.image.src}
                    alt={entry.image.alt}
                    width={entry.image.width || 600}
                    height={entry.image.height || 400}
                    className="w-full rounded-lg object-cover"
                  />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function GalleryLayout({ config }: { config: AboutConfig }) {
  const items = config.gallery || [];
  if (!items.length) return null;
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <motion.div
          key={i}
          variants={staggerItem}
          className="group relative overflow-hidden rounded-xl"
        >
          <Image
            src={item.image.src}
            alt={item.image.alt}
            width={item.image.width || 600}
            height={item.image.height || 400}
            className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {item.image.caption && (
            <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4">
              <p className="text-sm font-medium text-white">{item.image.caption}</p>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

function VideoLayout({ config, isDark }: { config: AboutConfig; isDark: boolean }) {
  const videoUrl = config.videoUrl;
  const getEmbedUrl = (url: string) => {
    const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);
    if (yt) return `https://www.youtube.com/embed/${yt[1]}`;
    const vm = url.match(/vimeo\.com\/(\d+)/);
    if (vm) return `https://player.vimeo.com/video/${vm[1]}`;
    return url;
  };

  return (
    <div className="space-y-10">
      {videoUrl && (
        <motion.div variants={staggerItem} className="aspect-video overflow-hidden rounded-xl">
          <iframe
            src={getEmbedUrl(videoUrl)}
            title={config.heading?.title || 'About video'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </motion.div>
      )}
      {(config.mission || config.vision) && (
        <div className="grid gap-8 md:grid-cols-2">
          {config.mission && (
            <motion.div
              variants={staggerItem}
              className={cn(
                'rounded-xl border p-6',
                isDark
                  ? 'border-white/10 bg-white/5'
                  : 'border-[var(--kindonar-color-neutral-200)] bg-[var(--kindonar-surface-interactive)]',
              )}
            >
              <h3
                className={cn(
                  'text-xl font-semibold',
                  isDark ? 'text-white' : 'text-[var(--kindonar-color-neutral-900)]',
                )}
              >
                Our Mission
              </h3>
              <p
                className={cn(
                  'mt-3 leading-relaxed',
                  isDark ? 'text-white/70' : 'text-[var(--kindonar-color-neutral-600)]',
                )}
              >
                {config.mission}
              </p>
            </motion.div>
          )}
          {config.vision && (
            <motion.div
              variants={staggerItem}
              className={cn(
                'rounded-xl border p-6',
                isDark
                  ? 'border-white/10 bg-white/5'
                  : 'border-[var(--kindonar-color-neutral-200)] bg-[var(--kindonar-surface-interactive)]',
              )}
            >
              <h3
                className={cn(
                  'text-xl font-semibold',
                  isDark ? 'text-white' : 'text-[var(--kindonar-color-neutral-900)]',
                )}
              >
                Our Vision
              </h3>
              <p
                className={cn(
                  'mt-3 leading-relaxed',
                  isDark ? 'text-white/70' : 'text-[var(--kindonar-color-neutral-600)]',
                )}
              >
                {config.vision}
              </p>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
}

export function About({ config }: { config: AboutConfig }) {
  if (!config) return null;
  if (!config.visible) return null;

  const isDark =
    config.theme === 'dark' ||
    config.theme === 'primary' ||
    config.theme === 'secondary' ||
    config.theme === 'gradient';
  const isStagger = config.animation === 'stagger';

  const renderVariant = () => {
    switch (config.variant) {
      case 'story':
        return <StoryLayout config={config} isDark={isDark} />;
      case 'split':
        return <SplitLayout config={config} isDark={isDark} />;
      case 'timeline':
        return <TimelineLayout config={config} isDark={isDark} />;
      case 'gallery':
        return <GalleryLayout config={config} />;
      case 'video':
        return <VideoLayout config={config} isDark={isDark} />;
      default:
        return <StoryLayout config={config} isDark={isDark} />;
    }
  };

  return (
    <SectionWrapper config={config} className={config.className}>
      <SectionHeadingBlock heading={config.heading} theme={config.theme} />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={
          isStagger
            ? {
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }
            : {
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }
        }
      >
        {renderVariant()}
        <MissionVisionSection
          mission={config.mission}
          vision={config.vision}
          values={config.values}
          isDark={isDark}
        />
        {config.stats && config.stats.length > 0 && (
          <StatsSection stats={config.stats} isDark={isDark} />
        )}
        {config.ceo && <CeoMessageSection ceo={config.ceo} isDark={isDark} />}
      </motion.div>
    </SectionWrapper>
  );
}

export type { AboutConfig } from './config.types';
