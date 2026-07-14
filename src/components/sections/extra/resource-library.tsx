'use client';

import { motion } from 'framer-motion';
import { FileText, Video, Headphones, Download, ArrowRight, Filter } from 'lucide-react';
import { useState } from 'react';

import { Badge } from '@/components/ui/atoms/badge';
import { cn } from '@/lib/utils';

import { MotionSection, SectionHeadingBlock, staggerItem } from '../motion';
import type { SectionConfig } from '../section-config.types';

export type ResourceType = 'article' | 'video' | 'podcast' | 'download';

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  type: ResourceType;
  image?: string;
  url: string;
  category?: string;
  date?: string;
}

export interface ResourceLibrarySectionProps {
  config: SectionConfig;
  resources: ResourceItem[];
  className?: string;
}

const resourceIcons: Record<ResourceType, typeof FileText> = {
  article: FileText,
  video: Video,
  podcast: Headphones,
  download: Download,
};

const resourceColors: Record<ResourceType, string> = {
  article: 'bg-[var(--kindonar-color-primary-100)] text-[var(--kindonar-color-primary-700)]',
  video: 'bg-[var(--kindonar-color-secondary-100)] text-[var(--kindonar-color-secondary-700)]',
  podcast: 'bg-[var(--kindonar-color-accent-100)] text-[var(--kindonar-color-accent-700)]',
  download: 'bg-[var(--kindonar-color-success-100)] text-[var(--kindonar-color-success-700)]',
};

const resourceLabels: Record<ResourceType, string> = {
  article: 'Article',
  video: 'Video',
  podcast: 'Podcast',
  download: 'Download',
};

function ResourceCard({ resource }: { resource: ResourceItem }) {
  const Icon = resourceIcons[resource.type];

  return (
    <motion.a
      variants={staggerItem}
      href={resource.url}
      className="group flex flex-col overflow-hidden rounded-xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--kindonar-shadow-hover)]"
      target={resource.url.startsWith('http') ? '_blank' : undefined}
      rel={resource.url.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {resource.image && (
        <div className="relative aspect-video overflow-hidden">
          <div
            className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${resource.image})` }}
            role="img"
            aria-label={resource.title}
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2">
          <span
            className={cn(
              'flex h-7 w-7 items-center justify-center rounded-full',
              resourceColors[resource.type],
            )}
          >
            <Icon size={14} aria-hidden="true" />
          </span>
          <Badge variant="default" size="sm">
            {resourceLabels[resource.type]}
          </Badge>
          {resource.category && (
            <Badge variant="outline" size="sm">
              {resource.category}
            </Badge>
          )}
        </div>
        <h3 className="mt-3 text-base font-semibold text-[var(--kindonar-color-neutral-900)] transition-colors group-hover:text-[var(--kindonar-color-primary-600)]">
          {resource.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-[var(--kindonar-color-neutral-600)]">
          {resource.description}
        </p>
        <div className="mt-4 flex items-center gap-1 text-sm font-medium text-[var(--kindonar-color-primary-600)]">
          {resource.type === 'download' ? 'Download' : 'View'}
          <ArrowRight size={14} aria-hidden="true" />
        </div>
      </div>
    </motion.a>
  );
}

export function ResourceLibrarySection({
  config,
  resources,
  className,
}: ResourceLibrarySectionProps) {
  const [activeFilter, setActiveFilter] = useState<ResourceType | 'all'>('all');

  if (!config.visible) return null;

  const isDark =
    config.theme === 'dark' ||
    config.theme === 'primary' ||
    config.theme === 'secondary' ||
    config.theme === 'gradient';
  const safeResources = Array.isArray(resources) ? resources : [];
  const allTypes = Array.from(new Set(safeResources.map((r) => r.type))) as ResourceType[];
  const filtered =
    activeFilter === 'all' ? safeResources : safeResources.filter((r) => r.type === activeFilter);

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

        <div
          className="mb-8 flex flex-wrap items-center gap-2"
          role="tablist"
          aria-label="Filter resources by type"
        >
          <button
            role="tab"
            aria-selected={activeFilter === 'all'}
            onClick={() => setActiveFilter('all')}
            className={cn(
              'flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all',
              activeFilter === 'all'
                ? 'bg-[var(--kindonar-color-primary-500)] text-white shadow-sm'
                : 'border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] text-[var(--kindonar-color-neutral-600)] hover:bg-[var(--kindonar-color-primary-50)]',
            )}
          >
            <Filter size={14} aria-hidden="true" />
            All
          </button>
          {allTypes.map((type) => {
            const Icon = resourceIcons[type];
            return (
              <button
                key={type}
                role="tab"
                aria-selected={activeFilter === type}
                onClick={() => setActiveFilter(type)}
                className={cn(
                  'flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all',
                  activeFilter === type
                    ? resourceColors[type] + ' shadow-sm'
                    : 'border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] text-[var(--kindonar-color-neutral-600)] hover:bg-[var(--kindonar-color-primary-50)]',
                )}
              >
                <Icon size={14} aria-hidden="true" />
                {resourceLabels[type]}s
              </button>
            );
          })}
        </div>

        <MotionSection animation={config.animation}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
