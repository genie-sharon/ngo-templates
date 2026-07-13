'use client';

import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

import { Badge } from '@/components/ui/atoms/badge';
import { Button } from '@/components/ui/atoms/button';
import { cn } from '@/lib/utils';

import type { CTAButton } from '../cta/config.types';
import { MotionSection, SectionHeadingBlock } from '../motion';
import type { SectionConfig } from '../section-config.types';

export interface ExhibitionItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  date: string;
  endDate?: string;
  location?: string;
  curator?: string;
  artists?: string[];
  cta?: CTAButton;
}

export interface FeaturedExhibitionSectionProps {
  config: SectionConfig;
  exhibition: ExhibitionItem;
  className?: string;
}

function ExhibitionCountdown({ targetDate }: { targetDate: string }) {
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
    <div className="flex gap-4" role="timer" aria-label="Time until exhibition opens">
      {[
        { value: timeLeft.days, label: 'Days' },
        { value: timeLeft.hours, label: 'Hours' },
        { value: timeLeft.minutes, label: 'Mins' },
        { value: timeLeft.seconds, label: 'Secs' },
      ].map(({ value, label }) => (
        <div key={label} className="flex flex-col items-center">
          <span className="text-3xl font-bold tracking-tight text-[var(--kindonar-color-accent-500)] md:text-4xl">
            {value}
          </span>
          <span className="text-xs font-medium tracking-widest text-[var(--kindonar-color-neutral-400)] uppercase">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

export function FeaturedExhibitionSection({
  config,
  exhibition,
  className,
}: FeaturedExhibitionSectionProps) {
  if (!config.visible) return null;

  const isDark =
    config.theme === 'dark' ||
    config.theme === 'primary' ||
    config.theme === 'secondary' ||
    config.theme === 'gradient';

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
          <div className="group relative overflow-hidden rounded-2xl bg-[var(--kindonar-color-neutral-950)]">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-60 transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${exhibition.image})` }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-[var(--kindonar-color-neutral-950)] via-[var(--kindonar-color-neutral-950)/80] to-transparent"
              aria-hidden="true"
            />
            <div className="relative z-10 flex flex-col gap-8 p-8 md:p-12 lg:flex-row lg:items-center lg:gap-16 lg:p-16">
              <div className="flex-1">
                <Badge variant="primary" size="lg" className="mb-4 inline-flex">
                  Featured Exhibition
                </Badge>
                <h3 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                  {exhibition.title}
                </h3>
                {exhibition.subtitle && (
                  <p className="mt-2 text-lg text-[var(--kindonar-color-accent-300)] md:text-xl">
                    {exhibition.subtitle}
                  </p>
                )}
                <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
                  {exhibition.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/60">
                  <span className="flex items-center gap-2">
                    <Calendar size={16} aria-hidden="true" />
                    {exhibition.date}
                    {exhibition.endDate ? ` — ${exhibition.endDate}` : ''}
                  </span>
                  {exhibition.location && (
                    <span className="flex items-center gap-2">
                      <MapPin size={16} aria-hidden="true" />
                      {exhibition.location}
                    </span>
                  )}
                  {exhibition.curator && (
                    <span className="flex items-center gap-2">
                      <Clock size={16} aria-hidden="true" />
                      Curated by {exhibition.curator}
                    </span>
                  )}
                </div>
                {exhibition.cta && (
                  <div className="mt-8">
                    <Button variant="gradient" size="lg" rightIcon={<ArrowRight size={18} />}>
                      {exhibition.cta.label}
                    </Button>
                  </div>
                )}
              </div>
              <div className="shrink-0">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
                  <p className="mb-4 text-xs font-semibold tracking-widest text-white/50 uppercase">
                    Opening In
                  </p>
                  <ExhibitionCountdown targetDate={exhibition.date} />
                </div>
              </div>
            </div>
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
