'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Users, Clock, Calendar } from 'lucide-react';

import type { CTAConfig, SectionImage } from '@/components/sections/section-config.types';
import { Progress } from '@/components/ui/atoms/progress';
import { Image } from '@/components/ui/media/image';
import { cn, formatCurrency, formatDate } from '@/lib/utils';

import { ContentBlocks } from '../blocks/content-blocks';
import { PageHero, PageLayout } from '../blocks/page-hero';
import type { PageConfig, PageHeroConfig, ContentBlock } from '../page-config.types';

export interface CampaignDetailConfig extends PageConfig {
  hero: PageHeroConfig;
  campaign: CampaignDetailData;
  contentBlocks?: ContentBlock[];
  updates?: CampaignUpdate[];
  donors?: CampaignDonor[];
  cta?: CTAConfig;
  sidebar?: CampaignDetailSidebar;
}

export interface CampaignDetailData {
  id: string;
  title: string;
  description: string;
  image: SectionImage;
  goal: number;
  raised: number;
  donors?: number;
  endDate?: string;
  category?: string;
  story?: string;
  gallery?: SectionImage[];
}

export interface CampaignUpdate {
  id: string;
  title: string;
  date: string;
  content: string;
}

export interface CampaignDonor {
  name: string;
  amount: number;
  date: string;
  avatar?: string;
  isAnonymous?: boolean;
}

export interface CampaignDetailSidebar {
  showUpdates?: boolean;
  showDonors?: boolean;
  maxDonors?: number;
}

function daysRemaining(endDate?: string): number | null {
  if (!endDate) return null;
  const now = new Date();
  const end = new Date(endDate);
  const diff = end.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

function ProgressSection({ campaign }: { campaign: CampaignDetailData }) {
  const remaining = daysRemaining(campaign.endDate);

  return (
    <div className="rounded-xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] p-6">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm text-[var(--kindonar-color-neutral-500)]">Raised</p>
          <p className="text-2xl font-bold text-[var(--kindonar-color-neutral-900)]">
            {formatCurrency(campaign.raised)}
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-[var(--kindonar-color-neutral-500)]">Goal</p>
          <p className="text-2xl font-bold text-[var(--kindonar-color-neutral-900)]">
            {formatCurrency(campaign.goal)}
          </p>
        </div>
      </div>

      <Progress
        value={campaign.raised}
        max={campaign.goal}
        variant="gradient"
        size="lg"
        showLabel
        labelPosition="bottom"
      />

      <div className="mt-4 flex flex-wrap gap-4 text-sm text-[var(--kindonar-color-neutral-500)]">
        <span className="flex items-center gap-1.5">
          <Users className="h-4 w-4" />
          {campaign.donors ?? 0} donors
        </span>
        {remaining !== null && (
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            {remaining} days remaining
          </span>
        )}
        {campaign.endDate && (
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            Ends {formatDate(campaign.endDate)}
          </span>
        )}
      </div>
    </div>
  );
}

function DonorsList({ donors, max }: { donors: CampaignDonor[]; max?: number }) {
  const displayDonors = max ? donors.slice(0, max) : donors;
  if (!displayDonors.length) return null;

  return (
    <div className="rounded-xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] p-6">
      <h3 className="mb-4 text-sm font-semibold tracking-wider text-[var(--kindonar-color-neutral-500)] uppercase">
        Recent Donors
      </h3>
      <div className="space-y-3">
        {displayDonors.map((donor, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="flex items-center justify-between border-b border-[var(--kindonar-border-default)] pb-3 last:border-0 last:pb-0"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--kindonar-color-primary-100)] text-xs font-semibold text-[var(--kindonar-color-primary-700)]">
                {donor.isAnonymous ? 'A' : donor.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="text-sm font-medium text-[var(--kindonar-color-neutral-900)]">
                  {donor.isAnonymous ? 'Anonymous' : donor.name}
                </p>
                <p className="text-xs text-[var(--kindonar-color-neutral-500)]">
                  {formatDate(donor.date)}
                </p>
              </div>
            </div>
            <span className="text-sm font-semibold text-[var(--kindonar-color-success-600)]">
              +{formatCurrency(donor.amount)}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function UpdatesList({ updates }: { updates: CampaignUpdate[] }) {
  if (!updates.length) return null;

  return (
    <section className="border-t border-[var(--kindonar-border-default)] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-2xl font-bold text-[var(--kindonar-color-neutral-900)] md:text-3xl">
          Campaign Updates
        </h2>
        <div className="space-y-8">
          {updates.map((update, idx) => (
            <motion.article
              key={update.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative border-l-2 border-[var(--kindonar-color-primary-200)] pl-6"
            >
              <div className="absolute top-0 -left-2 h-4 w-4 rounded-full border-2 border-[var(--kindonar-color-primary-500)] bg-[var(--kindonar-surface-primary)]" />
              <p className="text-xs font-medium text-[var(--kindonar-color-primary-600)]">
                {formatDate(update.date)}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-[var(--kindonar-color-neutral-900)]">
                {update.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-[var(--kindonar-color-neutral-700)]">
                {update.content}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBanner({ cta }: { cta: CTAConfig }) {
  return (
    <section className="bg-[var(--kindonar-color-primary-500)] py-16">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white md:text-3xl">Support Our Cause</h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/80">
          Every contribution makes a difference in the lives of those we serve.
        </p>
        <div className="mt-8">
          <a
            href={cta.href}
            target={cta.external ? '_blank' : undefined}
            rel={cta.external ? 'noopener noreferrer' : undefined}
            className="inline-flex h-13 items-center rounded-md bg-white px-8 text-base font-bold text-[var(--kindonar-color-primary-600)] transition-all hover:bg-white/90"
          >
            {cta.label}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function SidebarContent({
  campaign,
  donors,
  config,
}: {
  campaign: CampaignDetailData;
  donors?: CampaignDonor[];
  config: CampaignDetailConfig;
}) {
  return (
    <div className="space-y-8">
      <ProgressSection campaign={campaign} />

      {config.cta && (
        <a
          href={config.cta.href}
          target={config.cta.external ? '_blank' : undefined}
          rel={config.cta.external ? 'noopener noreferrer' : undefined}
          className={cn(
            'flex h-12 w-full items-center justify-center rounded-md px-6 text-sm font-semibold transition-all',
            'bg-[var(--kindonar-color-secondary-500)] text-white hover:bg-[var(--kindonar-color-secondary-600)]',
          )}
        >
          {config.cta.label}
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      )}

      {config.sidebar?.showDonors !== false && donors && (
        <DonorsList donors={donors} max={config.sidebar?.maxDonors ?? 5} />
      )}
    </div>
  );
}

export function CampaignDetailPage({ config }: { config: CampaignDetailConfig }) {
  const { campaign, contentBlocks, updates, donors, cta } = config;

  return (
    <div className={cn(config.theme === 'dark' && 'bg-[var(--kindonar-color-neutral-900)]')}>
      <PageHero config={config.hero} />

      <PageLayout
        layout={config.layout ?? 'sidebar-right'}
        sidebar={<SidebarContent campaign={campaign} donors={donors} config={config} />}
      >
        {campaign.story && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-base leading-relaxed text-[var(--kindonar-color-neutral-700)]"
          >
            {campaign.story.split('\n\n').map((p, i) => (
              <p key={i} className="mb-4 last:mb-0">
                {p}
              </p>
            ))}
          </motion.div>
        )}

        {campaign.gallery && campaign.gallery.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-3"
          >
            {campaign.gallery.map((img, idx) => (
              <Image
                key={idx}
                src={img.src}
                alt={img.alt}
                aspectRatio="4/3"
                fit="cover"
                withSkeleton
                rounded="lg"
              />
            ))}
          </motion.div>
        )}

        {contentBlocks && <ContentBlocks blocks={contentBlocks} />}
      </PageLayout>

      {config.sidebar?.showUpdates !== false && updates && updates.length > 0 && (
        <UpdatesList updates={updates} />
      )}

      {cta && <CtaBanner cta={cta} />}
    </div>
  );
}
