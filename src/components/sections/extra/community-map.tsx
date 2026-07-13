'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

import { cn } from '@/lib/utils';

import { MotionSection, SectionHeadingBlock, staggerItem } from '../motion';
import type { SectionConfig } from '../section-config.types';

export interface CountryLocation {
  country: string;
  region: string;
  description: string;
  projects: number;
  peopleReached: number;
}

export interface CommunityMapSectionProps {
  config: SectionConfig;
  locations: CountryLocation[];
  className?: string;
}

export function CommunityMapSection({ config, locations, className }: CommunityMapSectionProps) {
  if (!config.visible) return null;

  const isDark =
    config.theme === 'dark' ||
    config.theme === 'primary' ||
    config.theme === 'secondary' ||
    config.theme === 'gradient';
  const safeLocations = Array.isArray(locations) ? locations : [];

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
          <div className="overflow-hidden rounded-2xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] shadow-sm">
            <div className="grid divide-y md:grid-cols-2 md:divide-x md:divide-y-0">
              <div className="flex items-center justify-center bg-[var(--kindonar-color-primary-50)] p-8 md:p-12">
                <div className="relative h-64 w-full md:h-80">
                  <svg viewBox="0 0 400 300" className="h-full w-full" aria-hidden="true">
                    <circle
                      cx="200"
                      cy="150"
                      r="120"
                      fill="none"
                      stroke="var(--kindonar-color-primary-200)"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />
                    <circle
                      cx="200"
                      cy="150"
                      r="80"
                      fill="none"
                      stroke="var(--kindonar-color-primary-200)"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />
                    <circle
                      cx="200"
                      cy="150"
                      r="40"
                      fill="none"
                      stroke="var(--kindonar-color-primary-200)"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />
                    {safeLocations.map((_loc, i) => {
                      const angle = (i / locations.length) * 2 * Math.PI - Math.PI / 2;
                      const r = 60 + (i % 3) * 25;
                      const x = 200 + r * Math.cos(angle);
                      const y = 150 + r * Math.sin(angle);
                      return (
                        <g key={i}>
                          <circle
                            cx={x}
                            cy={y}
                            r="8"
                            fill="var(--kindonar-color-primary-500)"
                            className="animate-pulse"
                            style={{ animationDelay: `${i * 0.3}s` }}
                          />
                          <circle cx={x} cy={y} r="4" fill="var(--kindonar-color-primary-600)" />
                        </g>
                      );
                    })}
                  </svg>
                  <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 text-xs text-[var(--kindonar-color-neutral-500)]">
                    <MapPin size={12} />
                    <span>
                      {safeLocations.length} countries |{' '}
                      {safeLocations.reduce((a, l) => a + l.projects, 0)}+ projects
                    </span>
                  </div>
                </div>
              </div>
              <div className="divide-y">
                {safeLocations.map((loc, idx) => (
                  <motion.div
                    key={idx}
                    variants={staggerItem}
                    className="flex items-start gap-4 px-6 py-5 transition-colors hover:bg-[var(--kindonar-surface-interactive)]"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--kindonar-color-primary-100)] text-[var(--kindonar-color-primary-700)]">
                      <MapPin size={18} aria-hidden="true" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-semibold text-[var(--kindonar-color-neutral-900)]">
                        {loc.country}
                      </h3>
                      <p className="text-sm text-[var(--kindonar-color-primary-600)]">
                        {loc.region}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-[var(--kindonar-color-neutral-600)]">
                        {loc.description}
                      </p>
                      <div className="mt-2 flex gap-4 text-xs text-[var(--kindonar-color-neutral-500)]">
                        <span>
                          <strong className="text-[var(--kindonar-color-neutral-800)]">
                            {loc.projects}
                          </strong>{' '}
                          projects
                        </span>
                        <span>
                          <strong className="text-[var(--kindonar-color-neutral-800)]">
                            {loc.peopleReached.toLocaleString('en-US')}
                          </strong>{' '}
                          people
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
