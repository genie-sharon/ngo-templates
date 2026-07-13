'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

import { SectionHeadingBlock, SectionWrapper, staggerItem } from '../motion';
import type { StatItem } from '../section-config.types';

import type { ImpactConfig, ImpactLayout, ImpactTimelineItem } from './config.types';

function AnimatedNumber({
  value,
  prefix,
  suffix,
  duration = 2,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - (1 - progress) * (1 - progress) * (1 - progress);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {prefix && <span className="mr-0.5">{prefix}</span>}
      {display.toLocaleString('en-US')}
      {suffix && <span className="ml-0.5">{suffix}</span>}
    </span>
  );
}

function StatCard({
  item,
  layout,
  showIconBackground,
  duration,
}: {
  item: StatItem;
  layout: ImpactLayout;
  showIconBackground?: boolean;
  duration?: number;
}) {
  const shared = (
    <>
      {item.icon && (
        <span
          className={cn(
            'inline-flex items-center justify-center',
            showIconBackground
              ? 'mb-4 flex h-14 w-14 rounded-2xl bg-[var(--kindonar-color-primary-100)] text-[var(--kindonar-color-primary-600)]'
              : 'mb-2 text-[var(--kindonar-color-primary-500)]',
          )}
        >
          {item.icon}
        </span>
      )}
      <span className="text-3xl font-bold tracking-tight text-[var(--kindonar-color-neutral-900)] md:text-4xl">
        <AnimatedNumber
          value={item.value}
          prefix={item.prefix}
          suffix={item.suffix}
          duration={duration ?? item.duration ?? 2}
        />
      </span>
      <span className="mt-1.5 text-sm text-[var(--kindonar-color-neutral-500)]">{item.label}</span>
    </>
  );

  if (layout === 'cards') {
    return (
      <motion.div
        variants={staggerItem}
        className={cn(
          'flex flex-col items-center rounded-xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] p-8 text-center shadow-sm transition-shadow hover:shadow-md',
        )}
      >
        {shared}
      </motion.div>
    );
  }

  if (layout === 'grid') {
    return (
      <motion.div variants={staggerItem} className="flex flex-col items-center p-6 text-center">
        {shared}
      </motion.div>
    );
  }

  return (
    <motion.div variants={staggerItem} className="flex flex-col items-center">
      {shared}
    </motion.div>
  );
}

function ProgressStat({ item, max, duration }: { item: StatItem; max: number; duration?: number }) {
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const percentage = Math.min((item.value / max) * 100, 100);

  useEffect(() => {
    if (!inView) return;
    const dur = duration ?? item.duration ?? 2;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const p = Math.min((timestamp - startTime) / (dur * 1000), 1);
      const eased = 1 - (1 - p) * (1 - p) * (1 - p);
      setProgress(eased * percentage);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, percentage, duration, item.duration]);

  return (
    <motion.div ref={ref} variants={staggerItem} className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {item.icon && (
            <span className="text-[var(--kindonar-color-primary-500)]">{item.icon}</span>
          )}
          <span className="text-sm font-medium text-[var(--kindonar-color-neutral-700)]">
            {item.label}
          </span>
        </div>
        <span className="text-sm font-semibold text-[var(--kindonar-color-neutral-900)]">
          {item.prefix}
          {Math.floor((progress / 100) * max).toLocaleString('en-US')}
          {item.suffix}
        </span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-[var(--kindonar-surface-interactive)]">
        <motion.div
          className="h-full rounded-full bg-[var(--kindonar-color-primary-500)]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </motion.div>
  );
}

function TimelineStat({
  item,
  index,
  total,
}: {
  item: ImpactTimelineItem;
  index: number;
  total: number;
}) {
  return (
    <motion.div variants={staggerItem} className="relative flex gap-5 pb-8">
      <div className="flex flex-col items-center">
        <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--kindonar-color-primary-500)] bg-[var(--kindonar-color-primary-100)]">
          {item.icon ? (
            <span className="text-[var(--kindonar-color-primary-600)]">{item.icon}</span>
          ) : (
            <span className="h-3 w-3 rounded-full bg-[var(--kindonar-color-primary-500)]" />
          )}
        </div>
        {index < total - 1 && (
          <div className="h-full w-0.5 bg-[var(--kindonar-color-primary-200)]" />
        )}
      </div>
      <div className="flex-1 pb-4">
        <span className="text-xs font-semibold text-[var(--kindonar-color-primary-600)]">
          {item.year}
        </span>
        <h4 className="mt-1 text-lg font-semibold text-[var(--kindonar-color-neutral-900)]">
          <AnimatedNumber
            value={item.value}
            prefix={item.prefix}
            suffix={item.suffix}
            duration={item.duration ?? 2}
          />
        </h4>
        <p className="mt-1 text-sm text-[var(--kindonar-color-neutral-600)]">{item.label}</p>
        {item.description && (
          <p className="mt-1 text-sm text-[var(--kindonar-color-neutral-500)]">
            {item.description}
          </p>
        )}
      </div>
    </motion.div>
  );
}

const variantsMap: Record<ImpactLayout, string> = {
  cards: 'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3',
  counters: 'grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4',
  progress: 'mx-auto max-w-2xl space-y-6',
  timeline: 'mx-auto max-w-2xl',
  grid: 'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4',
};

function ImpactLayoutRenderer({ config }: { config: ImpactConfig }) {
  const {
    layout,
    stats = [],
    timelineItems = [],
    progressMax = 100,
    animationDuration,
    showIconBackground,
  } = config;

  if (layout === 'progress') {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        className={variantsMap[layout]}
      >
        {stats.map((item, i) => (
          <ProgressStat key={i} item={item} max={progressMax} duration={animationDuration} />
        ))}
      </motion.div>
    );
  }

  if (layout === 'timeline' && timelineItems) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        className={variantsMap[layout]}
      >
        {timelineItems.map((item, i) => (
          <TimelineStat key={i} item={item} index={i} total={timelineItems.length} />
        ))}
      </motion.div>
    );
  }

  const gridCols =
    layout === 'cards'
      ? `grid-cols-1 sm:grid-cols-2 ${config.columns === 4 ? 'lg:grid-cols-4' : config.columns === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'}`
      : `grid-cols-1 sm:grid-cols-2 ${config.columns === 3 ? 'lg:grid-cols-3' : config.columns === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-4'}`;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
      className={cn('grid gap-6', gridCols)}
    >
      {stats.map((item, i) => (
        <StatCard
          key={i}
          item={item}
          layout={layout}
          showIconBackground={showIconBackground}
          duration={animationDuration}
        />
      ))}
    </motion.div>
  );
}

export function Impact({ config }: { config: ImpactConfig }) {
  if (!config) return null;
  if (!config.visible) return null;

  return (
    <SectionWrapper config={config}>
      <SectionHeadingBlock heading={config.heading} theme={config.theme} />
      <ImpactLayoutRenderer config={config} />
    </SectionWrapper>
  );
}
