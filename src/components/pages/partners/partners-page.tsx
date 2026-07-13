'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Building2, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useMemo, useCallback, useEffect } from 'react';

import { PageHero } from '@/components/pages/blocks/page-hero';
import type { PageConfig, PageHeroConfig } from '@/components/pages/page-config.types';
import { staggerItem } from '@/components/sections/motion';
import { Image } from '@/components/ui/media/image';
import { cn } from '@/lib/utils';

export interface PartnerItem {
  id: string;
  name: string;
  description?: string;
  logo?: string;
  website?: string;
  category: string;
  type: 'sponsor' | 'partner' | 'collaborator';
}

export interface PartnerCategory {
  id: string;
  label: string;
}

export interface PartnersPageConfig extends PageConfig {
  hero: PageHeroConfig;
  partners: PartnerItem[];
  partnerCategories: PartnerCategory[];
  defaultLayout?: 'grid' | 'carousel' | 'featured-list';
}

function PartnerCard({ partner }: { partner: PartnerItem }) {
  const typeColors: Record<string, string> = {
    sponsor: 'bg-[var(--kindonar-color-primary-100)] text-[var(--kindonar-color-primary-700)]',
    partner: 'bg-[var(--kindonar-color-secondary-100)] text-[var(--kindonar-color-secondary-700)]',
    collaborator:
      'bg-[var(--kindonar-surface-interactive)] text-[var(--kindonar-color-neutral-600)]',
  };

  return (
    <motion.div
      variants={staggerItem}
      className="group flex flex-col items-center rounded-xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] p-6 text-center transition-all duration-300 hover:shadow-[var(--kindonar-shadow-md)]"
    >
      {partner.logo ? (
        <div className="mb-4 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-[var(--kindonar-surface-interactive)] p-2">
          <Image
            src={partner.logo}
            alt={`${partner.name} logo`}
            className="h-full w-full transition-transform duration-300 group-hover:scale-105"
            fit="contain"
          />
        </div>
      ) : (
        <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--kindonar-color-primary-100)]">
          <Building2 className="h-8 w-8 text-[var(--kindonar-color-primary-600)]" />
        </div>
      )}
      <span
        className={cn(
          'mb-2 inline-block rounded-full px-2.5 py-0.5 text-xs font-medium',
          typeColors[partner.type],
        )}
      >
        {partner.type.charAt(0).toUpperCase() + partner.type.slice(1)}
      </span>
      <h3 className="text-lg font-semibold text-[var(--kindonar-color-neutral-900)]">
        {partner.name}
      </h3>
      {partner.category && (
        <p className="mt-1 text-xs text-[var(--kindonar-color-neutral-500)]">{partner.category}</p>
      )}
      {partner.description && (
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[var(--kindonar-color-neutral-600)]">
          {partner.description}
        </p>
      )}
      {partner.website && (
        <a
          href={partner.website}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--kindonar-color-primary-600)] transition-colors hover:text-[var(--kindonar-color-primary-700)]"
        >
          Visit Website
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      )}
    </motion.div>
  );
}

function GridLayout({ partners }: { partners: PartnerItem[] }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {partners.map((partner) => (
        <PartnerCard key={partner.id} partner={partner} />
      ))}
    </motion.div>
  );
}

function CarouselLayout({ partners }: { partners: PartnerItem[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [prevEnabled, setPrevEnabled] = useState(false);
  const [nextEnabled, setNextEnabled] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevEnabled(emblaApi.canScrollPrev());
    setNextEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-4 flex">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="min-w-0 shrink-0 grow-0 basis-[85%] pl-4 sm:basis-[45%] lg:basis-[30%]"
            >
              <PartnerCard partner={partner} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!prevEnabled}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] text-[var(--kindonar-color-neutral-700)] transition-colors hover:bg-[var(--kindonar-surface-interactive)] disabled:opacity-40"
          aria-label="Previous partners"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => emblaApi?.scrollNext()}
          disabled={!nextEnabled}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] text-[var(--kindonar-color-neutral-700)] transition-colors hover:bg-[var(--kindonar-surface-interactive)] disabled:opacity-40"
          aria-label="Next partners"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function FeaturedListLayout({ partners }: { partners: PartnerItem[] }) {
  const sponsors = partners.filter((p) => p.type === 'sponsor');
  const featured = partners.filter((p) => p.type !== 'sponsor');

  return (
    <div className="space-y-12">
      {sponsors.length > 0 && (
        <div>
          <h3 className="mb-6 text-lg font-semibold text-[var(--kindonar-color-neutral-900)]">
            Sponsors
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {sponsors.slice(0, 4).map((partner) => (
              <div
                key={partner.id}
                className="flex items-center justify-center rounded-xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] p-6"
              >
                {partner.logo ? (
                  <Image src={partner.logo} alt={partner.name} className="max-h-16" fit="contain" />
                ) : (
                  <span className="font-semibold text-[var(--kindonar-color-neutral-600)]">
                    {partner.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {featured.length > 0 && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
          className="space-y-6"
        >
          {featured.map((partner) => (
            <motion.div
              key={partner.id}
              variants={staggerItem}
              className="flex items-start gap-6 rounded-xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] p-6 transition-shadow hover:shadow-[var(--kindonar-shadow-md)]"
            >
              {partner.logo ? (
                <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-[var(--kindonar-surface-interactive)] p-2">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    className="h-full w-full"
                    fit="contain"
                  />
                </div>
              ) : (
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-[var(--kindonar-color-primary-100)]">
                  <Building2 className="h-8 w-8 text-[var(--kindonar-color-primary-600)]" />
                </div>
              )}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-semibold text-[var(--kindonar-color-neutral-900)]">
                    {partner.name}
                  </h3>
                  <span className="rounded-full bg-[var(--kindonar-surface-interactive)] px-2.5 py-0.5 text-xs font-medium text-[var(--kindonar-color-neutral-600)]">
                    {partner.type.charAt(0).toUpperCase() + partner.type.slice(1)}
                  </span>
                </div>
                {partner.description && (
                  <p className="mt-2 text-sm leading-relaxed text-[var(--kindonar-color-neutral-600)]">
                    {partner.description}
                  </p>
                )}
                {partner.website && (
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--kindonar-color-primary-600)] hover:text-[var(--kindonar-color-primary-700)]"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    {partner.website.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}

export function PartnersPage({
  config,
  className,
}: {
  config: PartnersPageConfig;
  className?: string;
}) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [layout, setLayout] = useState<PartnersPageConfig['defaultLayout']>(
    config.defaultLayout || 'grid',
  );

  const filteredPartners = useMemo(() => {
    if (activeCategory === 'all') return config.partners;
    return config.partners.filter((p) => p.category === activeCategory);
  }, [config.partners, activeCategory]);

  const layouts = [
    { value: 'grid', label: 'Grid' },
    { value: 'carousel', label: 'Carousel' },
    { value: 'featured-list', label: 'Featured + List' },
  ];

  return (
    <div className={cn(className)}>
      <PageHero config={config.hero} />

      <section className="py-16 md:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {config.partnerCategories.length > 0 && (
              <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter by category">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === 'all'}
                  onClick={() => setActiveCategory('all')}
                  className={cn(
                    'rounded-full px-4 py-1.5 text-sm font-medium transition-all',
                    activeCategory === 'all'
                      ? 'bg-[var(--kindonar-color-primary-500)] text-white'
                      : 'bg-[var(--kindonar-surface-interactive)] text-[var(--kindonar-color-neutral-600)] hover:bg-[var(--kindonar-color-primary-100)] hover:text-[var(--kindonar-color-primary-700)]',
                  )}
                >
                  All
                </button>
                {config.partnerCategories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    aria-selected={activeCategory === cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={cn(
                      'rounded-full px-4 py-1.5 text-sm font-medium transition-all',
                      activeCategory === cat.id
                        ? 'bg-[var(--kindonar-color-primary-500)] text-white'
                        : 'bg-[var(--kindonar-surface-interactive)] text-[var(--kindonar-color-neutral-600)] hover:bg-[var(--kindonar-color-primary-100)] hover:text-[var(--kindonar-color-primary-700)]',
                    )}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            )}

            <div className="flex items-center gap-2">
              <span className="hidden text-sm text-[var(--kindonar-color-neutral-500)] sm:inline">
                Layout:
              </span>
              <div className="relative">
                <select
                  value={layout}
                  onChange={(e) => setLayout(e.target.value as PartnersPageConfig['defaultLayout'])}
                  className="appearance-none rounded-lg border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-primary)] py-2.5 pr-10 pl-4 text-sm font-medium text-[var(--kindonar-color-neutral-700)] focus:border-[var(--kindonar-color-primary-500)] focus:ring-2 focus:ring-[var(--kindonar-color-primary-200)] focus:outline-none"
                >
                  {layouts.map((l) => (
                    <option key={l.value} value={l.value}>
                      {l.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-[var(--kindonar-color-neutral-400)]"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${layout}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {filteredPartners.length > 0 ? (
                <>
                  {layout === 'grid' && <GridLayout partners={filteredPartners} />}
                  {layout === 'carousel' && <CarouselLayout partners={filteredPartners} />}
                  {layout === 'featured-list' && <FeaturedListLayout partners={filteredPartners} />}
                </>
              ) : (
                <div className="py-16 text-center">
                  <p className="text-lg text-[var(--kindonar-color-neutral-500)]">
                    No partners found in this category.
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
