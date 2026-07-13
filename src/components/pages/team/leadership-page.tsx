'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

import type { PersonCard } from '@/components/sections/section-config.types';
import { Avatar } from '@/components/ui/atoms/avatar';
import { cn } from '@/lib/utils';

import { PageHero, PageLayout } from '../blocks/page-hero';
import type { PageConfig, PageHeroConfig } from '../page-config.types';

export type LeadershipLayout = 'grid' | 'featured-list';

export interface LeadershipPageConfig extends PageConfig {
  hero: PageHeroConfig;
  title?: string;
  description?: string;
  featured?: PersonCard;
  leaders: PersonCard[];
  leadershipLayout?: LeadershipLayout;
}

const socialIcons: Record<string, React.ReactNode> = {
  linkedin: <ExternalLink className="h-4 w-4" />,
  twitter: <ExternalLink className="h-4 w-4" />,
  facebook: <ExternalLink className="h-4 w-4" />,
  instagram: <ExternalLink className="h-4 w-4" />,
  youtube: <ExternalLink className="h-4 w-4" />,
  tiktok: <ExternalLink className="h-4 w-4" />,
  whatsapp: <ExternalLink className="h-4 w-4" />,
};

function LeaderCard({ person, featured }: { person: PersonCard; featured?: boolean }) {
  const initials = person.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={cn(
        'rounded-xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] p-6 transition-all duration-200 hover:shadow-md',
        featured && 'flex flex-col items-center md:flex-row md:gap-8 md:p-8',
      )}
    >
      <div className={cn(featured ? 'shrink-0' : 'mb-4 flex justify-center')}>
        {person.image ? (
          <Image
            src={person.image.src}
            alt={person.image.alt || person.name}
            width={featured ? 160 : 96}
            height={featured ? 160 : 96}
            className={cn('rounded-full object-cover', featured ? 'h-40 w-40' : 'h-24 w-24')}
          />
        ) : (
          <Avatar size={featured ? '2xl' : 'xl'} fallback={initials} />
        )}
      </div>
      <div className={cn(featured ? 'text-left' : 'text-center', 'flex-1')}>
        <h3 className="text-lg font-semibold text-[var(--kindonar-color-neutral-900)]">
          {person.name}
        </h3>
        {person.role && (
          <p className="mt-0.5 text-sm font-medium text-[var(--kindonar-color-primary-600)]">
            {person.role}
          </p>
        )}
        {person.bio && (
          <p
            className={cn(
              'mt-3 text-sm leading-relaxed text-[var(--kindonar-color-neutral-600)]',
              !featured && 'line-clamp-3',
            )}
          >
            {person.bio}
          </p>
        )}
        {person.socialLinks && person.socialLinks.length > 0 && (
          <div className={cn('mt-4 flex gap-2', !featured && 'justify-center')}>
            {person.socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label || `${person.name} on ${link.platform}`}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--kindonar-surface-interactive)] text-[var(--kindonar-color-neutral-500)] transition-colors hover:bg-[var(--kindonar-color-primary-100)] hover:text-[var(--kindonar-color-primary-600)]"
              >
                {socialIcons[link.platform] || <ExternalLink className="h-4 w-4" />}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

function FeaturedLayout({ featured, leaders }: { featured?: PersonCard; leaders: PersonCard[] }) {
  return (
    <div className="space-y-12">
      {featured && (
        <section>
          <h2 className="mb-6 text-xl font-semibold text-[var(--kindonar-color-neutral-900)]">
            Leadership
          </h2>
          <LeaderCard person={featured} featured />
        </section>
      )}
      <section>
        {leaders.length > 0 && (
          <>
            <h2 className="mb-6 text-xl font-semibold text-[var(--kindonar-color-neutral-900)]">
              {featured ? 'Our Team' : 'Leadership Team'}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {leaders.map((leader) => (
                <LeaderCard key={leader.name} person={leader} />
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
}

export function LeadershipPage({ config }: { config: LeadershipPageConfig }) {
  return (
    <div>
      <PageHero config={config.hero} />
      <PageLayout layout="default">
        {config.description && (
          <p className="mb-8 max-w-3xl text-lg leading-relaxed text-[var(--kindonar-color-neutral-600)]">
            {config.description}
          </p>
        )}
        {config.leadershipLayout === 'grid' ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {config.featured && (
              <div className="sm:col-span-2 lg:col-span-3">
                <LeaderCard person={config.featured} featured />
              </div>
            )}
            {config.leaders.map((leader) => (
              <LeaderCard key={leader.name} person={leader} />
            ))}
          </div>
        ) : (
          <FeaturedLayout featured={config.featured} leaders={config.leaders} />
        )}
      </PageLayout>
    </div>
  );
}
