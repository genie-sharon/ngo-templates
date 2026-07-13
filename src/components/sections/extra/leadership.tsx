'use client';

import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

import { MotionSection, SectionHeadingBlock, staggerItem } from '../motion';
import type { SectionConfig } from '../section-config.types';

export interface LeaderItem {
  name: string;
  role: string;
  image?: string;
  bio?: string;
}

export interface LeadershipSectionProps {
  config: SectionConfig;
  leaders: LeaderItem[];
  className?: string;
}

function LeadershipCard({ leader }: { leader: LeaderItem }) {
  return (
    <motion.div variants={staggerItem} className="group flex flex-col items-center text-center">
      <div className="relative mb-4 h-40 w-40 overflow-hidden rounded-full border-4 border-[var(--kindonar-color-primary-100)] transition-all duration-300 group-hover:border-[var(--kindonar-color-primary-300)] group-hover:shadow-[var(--kindonar-shadow-md)]">
        {leader.image ? (
          <div
            className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${leader.image})` }}
            role="img"
            aria-label={leader.name}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[var(--kindonar-color-primary-100)] text-3xl font-bold text-[var(--kindonar-color-primary-500)]">
            {leader.name
              .split(' ')
              .map((n) => n[0])
              .join('')
              .slice(0, 2)}
          </div>
        )}
      </div>
      <h3 className="text-lg font-semibold text-[var(--kindonar-color-neutral-900)]">
        {leader.name}
      </h3>
      <p className="mt-1 text-sm font-medium text-[var(--kindonar-color-primary-600)]">
        {leader.role}
      </p>
      {leader.bio && (
        <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--kindonar-color-neutral-600)]">
          {leader.bio}
        </p>
      )}
    </motion.div>
  );
}

export function LeadershipSection({ config, leaders, className }: LeadershipSectionProps) {
  if (!config.visible) return null;

  const isDark =
    config.theme === 'dark' ||
    config.theme === 'primary' ||
    config.theme === 'secondary' ||
    config.theme === 'gradient';
  const safeLeaders = Array.isArray(leaders) ? leaders : [];

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
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {safeLeaders.map((leader, idx) => (
              <LeadershipCard key={idx} leader={leader} />
            ))}
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
