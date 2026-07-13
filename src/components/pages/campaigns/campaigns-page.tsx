'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Users, Clock } from 'lucide-react';
import { useState, useCallback, useMemo } from 'react';

import type { FilterOption } from '@/components/sections/section-config.types';
import { Badge } from '@/components/ui/atoms/badge';
import { Button } from '@/components/ui/atoms/button';
import { Progress } from '@/components/ui/atoms/progress';
import { Image } from '@/components/ui/media/image';
import { cn, formatCurrency } from '@/lib/utils';

import { PageHero, PageLayout } from '../blocks/page-hero';
import type { PageConfig, PageHeroConfig, CampaignItem } from '../page-config.types';

export type CampaignsPageLayout = 'grid' | 'featured-grid' | 'carousel';

export interface CampaignsPageConfig extends Omit<PageConfig, 'layout'> {
  hero: PageHeroConfig;
  campaigns: CampaignItem[];
  categories?: FilterOption[];
  statusFilters?: FilterOption[];
  layout?: CampaignsPageLayout;
}

function daysRemaining(endDate?: string): number | null {
  if (!endDate) return null;
  const now = new Date();
  const end = new Date(endDate);
  const diff = end.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

function CampaignCard({ campaign, featured }: { campaign: CampaignItem; featured?: boolean }) {
  const remaining = daysRemaining(campaign.endDate);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className={cn(
        'group flex flex-col overflow-hidden rounded-xl bg-[var(--kindonar-surface-raised)] shadow-sm transition-shadow hover:shadow-md',
        featured && 'lg:col-span-2 lg:row-span-2',
      )}
    >
      <div className="relative overflow-hidden">
        <Image
          src={campaign.image.src}
          alt={campaign.image.alt}
          aspectRatio={featured ? '21/9' : '16/9'}
          fit="cover"
          withSkeleton
          className="transition-transform duration-500 group-hover:scale-105"
        />
        {campaign.category && (
          <Badge variant="primary" size="sm" className="absolute top-3 left-3">
            {campaign.category}
          </Badge>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3
          className={cn(
            'font-semibold text-[var(--kindonar-color-neutral-900)]',
            featured ? 'text-xl' : 'text-base',
          )}
        >
          {campaign.title}
        </h3>
        <p
          className={cn(
            'mt-2 flex-1 text-[var(--kindonar-color-neutral-600)]',
            featured ? 'text-base' : 'line-clamp-2 text-sm',
          )}
        >
          {campaign.description}
        </p>

        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold text-[var(--kindonar-color-primary-600)]">
              {formatCurrency(campaign.raised)}
            </span>
            <span className="text-[var(--kindonar-color-neutral-500)]">
              of {formatCurrency(campaign.goal)}
            </span>
          </div>
          <Progress value={campaign.raised} max={campaign.goal} variant="gradient" size="md" />
          <div className="flex items-center justify-between text-xs text-[var(--kindonar-color-neutral-500)]">
            <span className="flex items-center gap-1">
              <Users className="h-3.5 w-3.5" />
              {campaign.donors ?? 0} donors
            </span>
            {remaining !== null && (
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {remaining} days left
              </span>
            )}
          </div>
        </div>

        <div className="mt-4">
          <Button
            variant={campaign.cta?.variant ?? 'primary'}
            size="sm"
            rightIcon={<ArrowRight size={14} />}
            asChild
          >
            <a
              href={campaign.cta?.href ?? `#${campaign.id}`}
              target={campaign.cta?.external ? '_blank' : undefined}
              rel={campaign.cta?.external ? 'noopener noreferrer' : undefined}
            >
              {campaign.cta?.label ?? 'Donate Now'}
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

function GridLayout({ campaigns }: { campaigns: CampaignItem[] }) {
  return (
    <motion.div
      layout
      initial="hidden"
      animate="visible"
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {campaigns.map((campaign) => (
        <CampaignCard key={campaign.id} campaign={campaign} />
      ))}
    </motion.div>
  );
}

function FeaturedGridLayout({ campaigns }: { campaigns: CampaignItem[] }) {
  const featured = campaigns[0];
  const rest = campaigns.slice(1, 5);

  return (
    <motion.div
      layout
      initial="hidden"
      animate="visible"
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
      className="grid grid-cols-1 gap-6 lg:grid-cols-3"
    >
      {featured && (
        <div className="lg:col-span-2 lg:row-span-2">
          <CampaignCard campaign={featured} featured />
        </div>
      )}
      {rest.map((campaign) => (
        <CampaignCard key={campaign.id} campaign={campaign} />
      ))}
    </motion.div>
  );
}

function CarouselLayout({
  campaigns,
  autoplayInterval,
}: {
  campaigns: CampaignItem[];
  autoplayInterval?: number;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: 'start', loop: true },
    autoplayInterval ? [Autoplay({ delay: autoplayInterval, stopOnInteraction: true })] : [],
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="min-w-0 flex-[0_0_100%] pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >
              <CampaignCard campaign={campaign} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex justify-center gap-3">
        <button
          type="button"
          onClick={scrollPrev}
          aria-label="Previous slide"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] text-[var(--kindonar-color-neutral-600)] transition-colors hover:bg-[var(--kindonar-surface-interactive)]"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={scrollNext}
          aria-label="Next slide"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] text-[var(--kindonar-color-neutral-600)] transition-colors hover:bg-[var(--kindonar-surface-interactive)]"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

const layoutComponents: Record<
  CampaignsPageLayout,
  (props: { campaigns: CampaignItem[]; config: CampaignsPageConfig }) => React.ReactNode
> = {
  grid: ({ campaigns }) => <GridLayout campaigns={campaigns} />,
  'featured-grid': ({ campaigns }) => <FeaturedGridLayout campaigns={campaigns} />,
  carousel: ({ campaigns }) => <CarouselLayout campaigns={campaigns} />,
};

export function CampaignsPage({ config }: { config: CampaignsPageConfig }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeStatus, setActiveStatus] = useState('all');

  const filters = config.categories ?? [];
  const statusFilters = config.statusFilters ?? [];

  const filteredCampaigns = useMemo(() => {
    let result = config.campaigns;
    if (activeCategory !== 'all') {
      result = result.filter((c) => c.category === activeCategory);
    }
    if (activeStatus !== 'all') {
      if (activeStatus === 'active') {
        result = result.filter((c) => !c.endDate || new Date(c.endDate) > new Date());
      } else if (activeStatus === 'completed') {
        result = result.filter((c) => c.endDate && new Date(c.endDate) <= new Date());
      }
    }
    return result;
  }, [config.campaigns, activeCategory, activeStatus]);

  const hasFilters = filters.length > 0 || statusFilters.length > 0;
  const LayoutComponent = layoutComponents[config.layout ?? 'grid'];

  return (
    <div className={cn(config.theme === 'dark' && 'bg-[var(--kindonar-color-neutral-900)]')}>
      <PageHero config={config.hero} />
      <PageLayout>
        {hasFilters && (
          <div className="mb-8 flex flex-wrap items-center gap-4">
            {filters.length > 0 && (
              <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
                <button
                  type="button"
                  onClick={() => setActiveCategory('all')}
                  aria-pressed={activeCategory === 'all'}
                  className={cn(
                    'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
                    activeCategory === 'all'
                      ? 'bg-[var(--kindonar-color-primary-500)] text-white'
                      : 'bg-[var(--kindonar-surface-interactive)] text-[var(--kindonar-color-neutral-600)] hover:bg-[var(--kindonar-color-primary-100)] hover:text-[var(--kindonar-color-primary-700)]',
                  )}
                >
                  All
                </button>
                {filters.map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setActiveCategory(f.id)}
                    aria-pressed={activeCategory === f.id}
                    className={cn(
                      'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
                      activeCategory === f.id
                        ? 'bg-[var(--kindonar-color-primary-500)] text-white'
                        : 'bg-[var(--kindonar-surface-interactive)] text-[var(--kindonar-color-neutral-600)] hover:bg-[var(--kindonar-color-primary-100)] hover:text-[var(--kindonar-color-primary-700)]',
                    )}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            )}
            {statusFilters.length > 0 && (
              <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by status">
                {statusFilters.map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setActiveStatus(f.id)}
                    aria-pressed={activeStatus === f.id}
                    className={cn(
                      'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
                      activeStatus === f.id
                        ? 'bg-[var(--kindonar-color-secondary-500)] text-white'
                        : 'bg-[var(--kindonar-surface-interactive)] text-[var(--kindonar-color-neutral-600)] hover:bg-[var(--kindonar-color-secondary-100)] hover:text-[var(--kindonar-color-secondary-700)]',
                    )}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${activeStatus}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            {filteredCampaigns.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <p className="text-lg font-medium text-[var(--kindonar-color-neutral-900)]">
                  No campaigns found
                </p>
                <p className="mt-2 text-sm text-[var(--kindonar-color-neutral-500)]">
                  Try adjusting your filters
                </p>
              </div>
            ) : (
              <LayoutComponent campaigns={filteredCampaigns} config={config} />
            )}
          </motion.div>
        </AnimatePresence>
      </PageLayout>
    </div>
  );
}
