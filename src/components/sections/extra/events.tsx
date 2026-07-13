'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

import { Badge } from '@/components/ui/atoms/badge';
import { cn } from '@/lib/utils';

import { MotionSection, SectionHeadingBlock, staggerItem } from '../motion';
import type { SectionConfig } from '../section-config.types';

export interface EventCTA {
  label: string;
  href: string;
}

export interface EventItem {
  id: string;
  title: string;
  description: string;
  date: string;
  time?: string;
  location?: string;
  category?: string;
  image?: string;
  cta?: EventCTA;
  featured?: boolean;
}

export interface EventsSectionProps {
  config: SectionConfig;
  events: EventItem[];
  showCountdown?: boolean;
  className?: string;
}

function EventCountdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(targetDate).getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;
      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex gap-3 text-center" role="timer" aria-label="Time until event">
      {[
        { value: timeLeft.days, label: 'Days' },
        { value: timeLeft.hours, label: 'Hours' },
        { value: timeLeft.minutes, label: 'Mins' },
        { value: timeLeft.seconds, label: 'Secs' },
      ].map(({ value, label }) => (
        <div
          key={label}
          className="flex min-w-[60px] flex-col items-center rounded-lg bg-[var(--kindonar-color-primary-50)] px-3 py-2"
        >
          <span className="text-2xl font-bold text-[var(--kindonar-color-primary-700)]">
            {value}
          </span>
          <span className="text-[10px] font-medium tracking-wider text-[var(--kindonar-color-primary-500)] uppercase">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

function EventCard({ event, showCountdown }: { event: EventItem; showCountdown?: boolean }) {
  return (
    <motion.article
      variants={staggerItem}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--kindonar-shadow-hover)]',
        event.featured && 'ring-2 ring-[var(--kindonar-color-primary-200)]',
      )}
    >
      {event.image && (
        <div className="relative aspect-video overflow-hidden">
          <div
            className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${event.image})` }}
            role="img"
            aria-label={event.title}
          />
          {event.category && (
            <Badge variant="primary" size="sm" className="absolute top-3 left-3">
              {event.category}
            </Badge>
          )}
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-[var(--kindonar-color-neutral-900)]">
          {event.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-[var(--kindonar-color-neutral-600)]">
          {event.description}
        </p>
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2 text-xs text-[var(--kindonar-color-neutral-500)]">
            <Calendar size={14} aria-hidden="true" />
            <span>{event.date}</span>
          </div>
          {event.time && (
            <div className="flex items-center gap-2 text-xs text-[var(--kindonar-color-neutral-500)]">
              <Clock size={14} aria-hidden="true" />
              <span>{event.time}</span>
            </div>
          )}
          {event.location && (
            <div className="flex items-center gap-2 text-xs text-[var(--kindonar-color-neutral-500)]">
              <MapPin size={14} aria-hidden="true" />
              <span>{event.location}</span>
            </div>
          )}
        </div>
        {showCountdown && event.featured && (
          <div className="mt-4 border-t border-[var(--kindonar-border-default)] pt-4">
            <EventCountdown targetDate={event.date} />
          </div>
        )}
        {event.cta && (
          <div className="mt-4 pt-2">
            <a
              href={event.cta.href}
              className="inline-flex items-center gap-1 text-sm font-medium text-[var(--kindonar-color-primary-600)] transition-colors hover:text-[var(--kindonar-color-primary-700)]"
            >
              {event.cta.label}
              <ArrowRight size={14} aria-hidden="true" />
            </a>
          </div>
        )}
      </div>
    </motion.article>
  );
}

export function EventsSection({ config, events, showCountdown, className }: EventsSectionProps) {
  if (!config.visible) return null;

  const isDark =
    config.theme === 'dark' ||
    config.theme === 'primary' ||
    config.theme === 'secondary' ||
    config.theme === 'gradient';
  const safeEvents = Array.isArray(events) ? events : [];

  return (
    <section
      id={config.id}
      className={cn(
        'py-16 md:py-20 lg:py-24',
        isDark
          ? 'bg-[var(--kindonar-color-neutral-900)] text-white'
          : 'bg-[var(--kindonar-surface-primary)]',
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeadingBlock heading={config.heading} theme={config.theme} />
        <MotionSection animation={config.animation}>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {safeEvents.map((event) => (
              <EventCard key={event.id} event={event} showCountdown={showCountdown} />
            ))}
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
