'use client';

import { useMemo } from 'react';

import type {
  ProgramsLayout,
  ProgramCard,
  ProgramCategory,
} from '@/components/sections/programs/config.types';
import { Programs } from '@/components/sections/programs/programs';
import type { FilterOption } from '@/components/sections/section-config.types';
import { cn } from '@/lib/utils';

import { PageHero, PageLayout } from '../blocks/page-hero';
import type { PageConfig, PageHeroConfig, ProgramItem } from '../page-config.types';

export interface ProgramsPageConfig extends Omit<PageConfig, 'layout'> {
  hero: PageHeroConfig;
  programs: ProgramItem[];
  categories?: FilterOption[];
  layout?: ProgramsLayout;
  columns?: 2 | 3 | 4;
  showCategoryBadges?: boolean;
  showImpactStats?: boolean;
  autoplayInterval?: number;
}

function mapToProgramCard(item: ProgramItem): ProgramCard {
  return {
    id: item.id,
    title: item.title,
    description: item.description,
    image: item.image ?? { src: '/images/placeholder.jpg', alt: item.title },
    category: item.category ?? '',
    impactStat:
      item.impact ??
      (item.beneficiaries
        ? `${item.beneficiaries.toLocaleString('en-US')} beneficiaries`
        : undefined),
    cta: item.cta ?? { label: 'Learn More', href: `#${item.id}` },
  };
}

export function ProgramsPage({ config }: { config: ProgramsPageConfig }) {
  const programCards = useMemo(() => config.programs.map(mapToProgramCard), [config.programs]);

  const sectionCategories: ProgramCategory[] | undefined = config.categories?.map((c) => ({
    id: c.id,
    label: c.label,
  }));

  return (
    <div className={cn(config.theme === 'dark' && 'bg-[var(--kindonar-color-neutral-900)]')}>
      <PageHero config={config.hero} />
      <PageLayout>
        <Programs
          config={{
            id: 'programs-page',
            layout: config.layout ?? 'cards',
            theme: 'light',
            animation: 'fade-in-up',
            background: 'none',
            padding: 'medium',
            visible: true,
            programs: programCards,
            categories: sectionCategories,
            columns: config.columns,
            showCategoryBadges: config.showCategoryBadges,
            showImpactStats: config.showImpactStats,
            autoplayInterval: config.autoplayInterval,
          }}
        />
      </PageLayout>
    </div>
  );
}
