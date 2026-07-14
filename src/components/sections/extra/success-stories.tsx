'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Image from 'next/image';

import { cn } from '@/lib/utils';

import { MotionSection, SectionHeadingBlock, staggerItem } from '../motion';
import type { SectionConfig, SectionImage } from '../section-config.types';

export interface SuccessStory {
  name: string;
  role?: string;
  image?: SectionImage;
  quote: string;
  impactStat?: string;
  impactLabel?: string;
}

export interface SuccessStoriesSectionProps {
  config: SectionConfig;
  stories: SuccessStory[];
  className?: string;
}

export function SuccessStoriesSection({ config, stories, className }: SuccessStoriesSectionProps) {
  if (!config.visible) return null;

  const isDark =
    config.theme === 'dark' ||
    config.theme === 'primary' ||
    config.theme === 'secondary' ||
    config.theme === 'gradient';
  const safeStories = Array.isArray(stories) ? stories : [];

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
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {safeStories.map((story, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={cn(
                  'group rounded-xl border p-6 transition-all hover:shadow-lg',
                  isDark
                    ? 'border-white/10 bg-white/5'
                    : 'border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-primary)]',
                )}
              >
                <div className="flex items-center gap-4">
                  {story.image ? (
                    <Image
                      src={story.image.src}
                      alt={story.image.alt}
                      width={56}
                      height={56}
                      unoptimized
                      className="h-14 w-14 rounded-full object-cover"
                    />
                  ) : (
                    <div
                      className={cn(
                        'flex h-14 w-14 items-center justify-center rounded-full text-lg font-bold',
                        isDark
                          ? 'bg-[var(--kindonar-color-primary-500)] text-white'
                          : 'bg-[var(--kindonar-color-primary-100)] text-[var(--kindonar-color-primary-700)]',
                      )}
                    >
                      {story.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h3
                      className={cn(
                        'font-semibold',
                        isDark ? 'text-white' : 'text-[var(--kindonar-color-neutral-900)]',
                      )}
                    >
                      {story.name}
                    </h3>
                    {story.role && (
                      <p
                        className={cn(
                          'text-sm',
                          isDark ? 'text-white/60' : 'text-[var(--kindonar-color-neutral-500)]',
                        )}
                      >
                        {story.role}
                      </p>
                    )}
                  </div>
                </div>
                <div className="relative mt-5">
                  <Quote
                    size={20}
                    className={cn(
                      'absolute -top-1 -left-1 opacity-20',
                      isDark ? 'text-white' : 'text-[var(--kindonar-color-primary-500)]',
                    )}
                    aria-hidden="true"
                  />
                  <blockquote
                    className={cn(
                      'pl-6 text-sm leading-relaxed italic',
                      isDark ? 'text-white/80' : 'text-[var(--kindonar-color-neutral-600)]',
                    )}
                  >
                    &ldquo;{story.quote}&rdquo;
                  </blockquote>
                </div>
                {story.impactStat && (
                  <div
                    className={cn(
                      'mt-5 rounded-lg p-4 text-center',
                      isDark ? 'bg-white/10' : 'bg-[var(--kindonar-color-primary-50)]',
                    )}
                  >
                    <span
                      className={cn(
                        'text-2xl font-bold',
                        isDark ? 'text-white' : 'text-[var(--kindonar-color-primary-700)]',
                      )}
                    >
                      {story.impactStat}
                    </span>
                    {story.impactLabel && (
                      <p
                        className={cn(
                          'mt-0.5 text-xs',
                          isDark ? 'text-white/60' : 'text-[var(--kindonar-color-primary-600)]',
                        )}
                      >
                        {story.impactLabel}
                      </p>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
