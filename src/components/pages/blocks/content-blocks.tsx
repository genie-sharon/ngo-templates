'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, FileText, Play, ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/atoms/button';
import { Accordion } from '@/components/ui/data-display/accordion';
import { Timeline } from '@/components/ui/data-display/timeline';
import { Image } from '@/components/ui/media/image';
import { cn } from '@/lib/utils';

import type { ContentBlock } from '../page-config.types';

/** Renders a content block by type */
export function ContentBlockRenderer({
  block,
  className,
}: {
  block: ContentBlock;
  className?: string;
}) {
  const { type, title, subtitle, body, image, cta, stats, items } = block;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn('mb-12 last:mb-0', className)}
    >
      {title && (
        <h2 className="text-2xl font-bold text-[var(--kindonar-color-neutral-900)] md:text-3xl">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="mt-2 text-lg text-[var(--kindonar-color-neutral-600)]">{subtitle}</p>
      )}

      {type === 'text' && body && (
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-[var(--kindonar-color-neutral-700)]">
          {body.split('\n\n').map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      )}

      {type === 'image-text' && (
        <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-center">
          {image && (
            <div className={cn('overflow-hidden rounded-xl', !body && 'lg:col-span-2')}>
              <Image src={image.src} alt={image.alt} className="h-full w-full" fit="cover" />
            </div>
          )}
          {body && (
            <div className="space-y-4 text-base leading-relaxed text-[var(--kindonar-color-neutral-700)]">
              {body.split('\n\n').map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          )}
        </div>
      )}

      {type === 'stats' && stats && (
        <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-3xl font-bold text-[var(--kindonar-color-primary-600)] md:text-4xl">
                {stat.prefix}
                {stat.value}
                {stat.suffix}
              </p>
              <p className="mt-1 text-sm text-[var(--kindonar-color-neutral-500)]">{stat.label}</p>
            </div>
          ))}
        </div>
      )}

      {type === 'cards' && items && (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] p-6 transition-shadow hover:shadow-md"
            >
              {(item as Record<string, string>).icon && (
                <div
                  className="mb-4 text-[var(--kindonar-color-primary-500)]"
                  dangerouslySetInnerHTML={{ __html: (item as Record<string, string>).icon || '' }}
                />
              )}
              {(item as Record<string, string>).title && (
                <h3 className="font-semibold text-[var(--kindonar-color-neutral-900)]">
                  {(item as Record<string, string>).title}
                </h3>
              )}
              {(item as Record<string, string>).description && (
                <p className="mt-2 text-sm text-[var(--kindonar-color-neutral-600)]">
                  {(item as Record<string, string>).description}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {type === 'accordion' && items && (
        <div className="mt-8">
          <Accordion
            items={items.map((item, idx) => ({
              id: (item as Record<string, string>).id || `accordion-${idx}`,
              title: (item as Record<string, string>).title || '',
              content: (item as Record<string, string>).content || '',
            }))}
            allowMultiple
          />
        </div>
      )}

      {type === 'timeline' && items && (
        <div className="mt-8">
          <Timeline
            items={items.map((item, idx) => ({
              id: (item as Record<string, string>).id || `timeline-${idx}`,
              year: (item as Record<string, string>).year,
              title: (item as Record<string, string>).title || '',
              description: (item as Record<string, string>).description,
            }))}
          />
        </div>
      )}

      {type === 'video' && image && (
        <div className="mt-8 overflow-hidden rounded-xl">
          <div className="relative aspect-video bg-[var(--kindonar-surface-interactive)]">
            <Image src={image.src} alt={image.alt} className="h-full w-full" fit="cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg">
                <Play
                  className="h-6 w-6 text-[var(--kindonar-color-primary-600)]"
                  fill="currentColor"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {type === 'downloads' && items && (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => {
            const d = item as Record<string, string>;
            return (
              <a
                key={idx}
                href={d.fileUrl}
                className="flex items-center gap-4 rounded-xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] p-4 transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[var(--kindonar-color-primary-100)]">
                  <FileText className="h-6 w-6 text-[var(--kindonar-color-primary-600)]" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium text-[var(--kindonar-color-neutral-900)]">
                    {d.title}
                  </p>
                  {d.description && (
                    <p className="truncate text-sm text-[var(--kindonar-color-neutral-500)]">
                      {d.description}
                    </p>
                  )}
                </div>
                <Download className="h-5 w-5 shrink-0 text-[var(--kindonar-color-neutral-400)]" />
              </a>
            );
          })}
        </div>
      )}

      {type === 'cta' && (
        <div className="mt-8">
          {cta && (
            <Button variant={cta.variant as 'primary' | 'secondary' | 'outline'} size="lg">
              {cta.label}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      )}

      {cta && type !== 'cta' && (
        <div className="mt-6">
          <Button variant="primary" size="md">
            {cta.label}
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      )}
    </motion.div>
  );
}

/** Render multiple content blocks */
export function ContentBlocks({
  blocks,
  className,
}: {
  blocks: ContentBlock[];
  className?: string;
}) {
  return (
    <div className={cn('space-y-4', className)}>
      {blocks.map((block, idx) => (
        <ContentBlockRenderer key={idx} block={block} />
      ))}
    </div>
  );
}
