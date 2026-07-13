'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Users, Target, Clock, CheckCircle } from 'lucide-react';

import type { CTAConfig, SectionImage } from '@/components/sections/section-config.types';
import { Badge } from '@/components/ui/atoms/badge';
import { Image } from '@/components/ui/media/image';
import { cn } from '@/lib/utils';

import { ContentBlocks } from '../blocks/content-blocks';
import { PageHero, PageLayout } from '../blocks/page-hero';
import type { PageConfig, PageHeroConfig, ContentBlock, ProgramItem } from '../page-config.types';

export interface ProgramDetailConfig extends PageConfig {
  hero: PageHeroConfig;
  program: ProgramDetailData;
  contentBlocks?: ContentBlock[];
  relatedPrograms?: ProgramItem[];
  sidebar?: ProgramDetailSidebar;
}

export interface ProgramDetailData {
  id: string;
  title: string;
  description: string;
  image?: SectionImage;
  category?: string;
  impact?: string;
  beneficiaries?: number;
  features?: string[];
  cta?: CTAConfig;
  gallery?: SectionImage[];
  outcomes?: ProgramOutcome[];
  duration?: string;
  locations?: string[];
}

export interface ProgramOutcome {
  label: string;
  value: string;
  icon?: 'users' | 'target' | 'clock' | 'check';
}

export interface ProgramDetailSidebar {
  impactStats?: { label: string; value: string; prefix?: string; suffix?: string }[];
  cta?: CTAConfig;
  enableRelated?: boolean;
}

const outcomeIcons: Record<string, React.ReactNode> = {
  users: <Users className="h-5 w-5" />,
  target: <Target className="h-5 w-5" />,
  clock: <Clock className="h-5 w-5" />,
  check: <CheckCircle className="h-5 w-5" />,
};

function SidebarContent({
  sidebar,
  program,
}: {
  sidebar: ProgramDetailSidebar;
  program: ProgramDetailData;
}) {
  return (
    <div className="space-y-8">
      {sidebar.impactStats && (
        <div className="rounded-xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] p-6">
          <h3 className="mb-4 text-sm font-semibold tracking-wider text-[var(--kindonar-color-neutral-500)] uppercase">
            Impact Stats
          </h3>
          <div className="space-y-4">
            {sidebar.impactStats.map((stat, idx) => (
              <div
                key={idx}
                className="border-b border-[var(--kindonar-border-default)] pb-3 last:border-0 last:pb-0"
              >
                <p className="text-2xl font-bold text-[var(--kindonar-color-primary-600)]">
                  {stat.prefix}
                  {stat.value}
                  {stat.suffix}
                </p>
                <p className="mt-0.5 text-sm text-[var(--kindonar-color-neutral-500)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {program.features && program.features.length > 0 && (
        <div className="rounded-xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] p-6">
          <h3 className="mb-4 text-sm font-semibold tracking-wider text-[var(--kindonar-color-neutral-500)] uppercase">
            Key Features
          </h3>
          <ul className="space-y-2">
            {program.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-sm text-[var(--kindonar-color-neutral-700)]"
              >
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--kindonar-color-success-500)]" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {program.duration && (
        <div className="flex items-center gap-3 rounded-xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] p-4">
          <Clock className="h-5 w-5 text-[var(--kindonar-color-primary-500)]" />
          <div>
            <p className="text-xs text-[var(--kindonar-color-neutral-500)]">Duration</p>
            <p className="text-sm font-medium text-[var(--kindonar-color-neutral-900)]">
              {program.duration}
            </p>
          </div>
        </div>
      )}

      {sidebar.cta && (
        <a
          href={sidebar.cta.href}
          className={cn(
            'flex h-12 w-full items-center justify-center rounded-md px-6 text-sm font-semibold transition-all',
            'bg-[var(--kindonar-color-primary-500)] text-white hover:bg-[var(--kindonar-color-primary-600)]',
          )}
          target={sidebar.cta.external ? '_blank' : undefined}
          rel={sidebar.cta.external ? 'noopener noreferrer' : undefined}
        >
          {sidebar.cta.label}
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      )}
    </div>
  );
}

function RelatedPrograms({ programs }: { programs: ProgramItem[] }) {
  if (!programs.length) return null;
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border-t border-[var(--kindonar-border-default)] py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-2xl font-bold text-[var(--kindonar-color-neutral-900)] md:text-3xl">
          Related Programs
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, idx) => (
            <motion.a
              key={program.id}
              href={program.cta?.href ?? `#${program.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group block overflow-hidden rounded-xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] transition-shadow hover:shadow-md"
            >
              {program.image && (
                <Image
                  src={program.image.src}
                  alt={program.image.alt}
                  aspectRatio="16/9"
                  fit="cover"
                  withSkeleton
                />
              )}
              <div className="p-5">
                {program.category && (
                  <Badge variant="primary" size="sm" className="mb-2">
                    {program.category}
                  </Badge>
                )}
                <h3 className="font-semibold text-[var(--kindonar-color-neutral-900)]">
                  {program.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-[var(--kindonar-color-neutral-600)]">
                  {program.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export function ProgramDetailPage({ config }: { config: ProgramDetailConfig }) {
  const { program, contentBlocks, relatedPrograms, sidebar } = config;

  return (
    <div className={cn(config.theme === 'dark' && 'bg-[var(--kindonar-color-neutral-900)]')}>
      <PageHero config={config.hero} />

      {program.outcomes && program.outcomes.length > 0 && (
        <section className="border-b border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-interactive)]">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {program.outcomes.map((outcome, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center"
                >
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--kindonar-color-primary-100)] text-[var(--kindonar-color-primary-600)]">
                    {outcome.icon ? outcomeIcons[outcome.icon] : <Target className="h-5 w-5" />}
                  </div>
                  <p className="text-2xl font-bold text-[var(--kindonar-color-neutral-900)]">
                    {outcome.value}
                  </p>
                  <p className="mt-1 text-sm text-[var(--kindonar-color-neutral-500)]">
                    {outcome.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <PageLayout
        layout={config.layout ?? 'sidebar-right'}
        sidebar={sidebar ? <SidebarContent sidebar={sidebar} program={program} /> : undefined}
      >
        {contentBlocks && <ContentBlocks blocks={contentBlocks} />}
      </PageLayout>

      {relatedPrograms && relatedPrograms.length > 0 && (
        <RelatedPrograms programs={relatedPrograms} />
      )}
    </div>
  );
}
