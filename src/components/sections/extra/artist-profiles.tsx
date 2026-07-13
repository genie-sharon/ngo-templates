'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { cn } from '@/lib/utils';

import { MotionSection, SectionHeadingBlock, staggerItem } from '../motion';
import type { SectionConfig } from '../section-config.types';

export interface ArtistItem {
  id: string;
  name: string;
  discipline: string;
  image?: string;
  bio?: string;
  website?: string;
  featured?: boolean;
}

export interface ArtistProfilesSectionProps {
  config: SectionConfig;
  artists: ArtistItem[];
  className?: string;
}

function ArtistCard({ artist }: { artist: ArtistItem }) {
  return (
    <motion.article
      variants={staggerItem}
      className={cn(
        'group relative overflow-hidden rounded-2xl bg-[var(--kindonar-surface-raised)] shadow-sm transition-all duration-500 hover:shadow-[var(--kindonar-shadow-lg)]',
        artist.featured && 'md:col-span-2 md:row-span-2',
      )}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        {artist.image ? (
          <div
            className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${artist.image})` }}
            role="img"
            aria-label={artist.name}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[var(--kindonar-color-neutral-100)]">
            <span className="text-5xl font-bold text-[var(--kindonar-color-neutral-300)]">
              {artist.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </span>
          </div>
        )}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
          aria-hidden="true"
        />
        <div className="absolute right-0 bottom-0 left-0 p-5 text-white">
          <span className="mb-1 inline-block text-xs font-semibold tracking-wider text-[var(--kindonar-color-accent-300)] uppercase">
            {artist.discipline}
          </span>
          <h3 className="text-xl font-bold">{artist.name}</h3>
        </div>
      </div>
      <div className="p-5">
        {artist.bio && (
          <p className="line-clamp-3 text-sm leading-relaxed text-[var(--kindonar-color-neutral-600)]">
            {artist.bio}
          </p>
        )}
        {artist.website && (
          <a
            href={artist.website}
            className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[var(--kindonar-color-primary-600)] transition-colors hover:text-[var(--kindonar-color-primary-800)]"
          >
            View Portfolio <ArrowRight size={14} aria-hidden="true" />
          </a>
        )}
      </div>
    </motion.article>
  );
}

export function ArtistProfilesSection({ config, artists, className }: ArtistProfilesSectionProps) {
  if (!config.visible) return null;

  const isDark =
    config.theme === 'dark' ||
    config.theme === 'primary' ||
    config.theme === 'secondary' ||
    config.theme === 'gradient';
  const safeArtists = Array.isArray(artists) ? artists : [];

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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {safeArtists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
