'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

import { cn } from '@/lib/utils';

import { MotionSection } from '../motion';
import type { SectionConfig } from '../section-config.types';

export interface EditorialQuoteItem {
  quote: string;
  author: string;
  role?: string;
  image?: string;
}

export interface EditorialQuoteSectionProps {
  config: SectionConfig;
  quote: EditorialQuoteItem;
  className?: string;
}

export function EditorialQuoteSection({ config, quote, className }: EditorialQuoteSectionProps) {
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
          ? 'bg-[var(--kindonar-color-neutral-950)] text-white'
          : 'bg-[var(--kindonar-surface-primary)]',
        className,
      )}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <MotionSection animation={config.animation}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Quote
              size={48}
              className={cn(
                'mx-auto mb-8',
                isDark
                  ? 'text-[var(--kindonar-color-accent-500)]'
                  : 'text-[var(--kindonar-color-accent-400)]',
              )}
              aria-hidden="true"
            />
            <blockquote>
              <p
                className={cn(
                  'text-2xl leading-relaxed font-light tracking-tight md:text-3xl lg:text-4xl',
                  isDark ? 'text-white' : 'text-[var(--kindonar-color-neutral-900)]',
                )}
              >
                &ldquo;{quote.quote}&rdquo;
              </p>
            </blockquote>
            <div className="mt-8 flex flex-col items-center gap-3 md:flex-row md:justify-center md:gap-4">
              {quote.image && (
                <div
                  className="h-14 w-14 shrink-0 overflow-hidden rounded-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${quote.image})` }}
                  role="img"
                  aria-label={quote.author}
                />
              )}
              <div>
                <cite
                  className={cn(
                    'text-base font-semibold not-italic',
                    isDark ? 'text-white' : 'text-[var(--kindonar-color-neutral-900)]',
                  )}
                >
                  {quote.author}
                </cite>
                {quote.role && (
                  <p
                    className={cn(
                      'text-sm',
                      isDark ? 'text-white/60' : 'text-[var(--kindonar-color-neutral-500)]',
                    )}
                  >
                    {quote.role}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </MotionSection>
      </div>
    </section>
  );
}
