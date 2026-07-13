'use client';

import { About } from '@/components/sections/about/about';
import type { AboutConfig } from '@/components/sections/about/config.types';
import type { StatItem } from '@/components/sections/section-config.types';

import { ContentBlocks } from '../blocks/content-blocks';
import { PageHero, PageLayout } from '../blocks/page-hero';
import type { PageConfig, PageHeroConfig, ContentBlock, TeamMember } from '../page-config.types';

export interface AboutPageConfig extends PageConfig {
  hero: PageHeroConfig;
  aboutConfig?: AboutConfig;
  mission?: string;
  vision?: string;
  values?: { title: string; description: string; icon?: React.ReactNode }[];
  stats?: StatItem[];
  team?: TeamMember[];
  timeline?: { year: string; title: string; description: string }[];
  contentBlocks?: ContentBlock[];
  aboutLayout?: 'default' | 'split-story' | 'timeline';
}

export function AboutPage({ config }: { config: AboutPageConfig }) {
  const showAbout =
    config.aboutConfig ||
    config.mission ||
    config.vision ||
    config.values ||
    config.stats ||
    config.timeline;

  const convertedAboutConfig: AboutConfig | undefined =
    config.aboutConfig ||
    (showAbout
      ? {
          variant:
            config.aboutLayout === 'timeline'
              ? 'timeline'
              : config.aboutLayout === 'split-story'
                ? 'split'
                : 'story',
          layout: config.aboutLayout === 'timeline' ? 'timeline' : 'default',
          theme: config.theme === 'dark' ? 'dark' : 'light',
          animation: 'fade',
          background: 'none',
          padding: 'medium',
          visible: true,
          mission: config.mission,
          vision: config.vision,
          values: config.values,
          stats: config.stats,
          timeline: config.timeline?.map((t) => ({
            year: t.year,
            title: t.title,
            description: t.description,
          })),
        }
      : undefined);

  return (
    <div>
      <PageHero config={config.hero} />
      <PageLayout layout={config.aboutLayout === 'default' ? 'default' : 'wide'}>
        {convertedAboutConfig && <About config={convertedAboutConfig} />}
        {config.contentBlocks && <ContentBlocks blocks={config.contentBlocks} />}
      </PageLayout>
    </div>
  );
}
