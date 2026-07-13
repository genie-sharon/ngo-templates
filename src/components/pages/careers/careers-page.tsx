'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Briefcase,
  Heart,
  Gift,
  Clock,
  Users,
  GraduationCap,
  Building2,
} from 'lucide-react';

import { Button } from '@/components/ui/atoms/button';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/cards/card';
import { Accordion } from '@/components/ui/data-display/accordion';

import { PageHero, PageLayout } from '../blocks/page-hero';
import type { PageConfig, PageHeroConfig } from '../page-config.types';

export interface BenefitItem {
  title: string;
  description: string;
  icon?: 'health' | 'growth' | 'flexibility' | 'culture' | 'compensation' | 'perks';
}

export interface OpenPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'remote' | 'internship';
  description: string;
  requirements?: string[];
  applyUrl?: string;
  applyEmail?: string;
}

export interface CareersPageConfig extends PageConfig {
  hero: PageHeroConfig;
  title?: string;
  description?: string;
  benefitsTitle?: string;
  benefitsDescription?: string;
  benefits: BenefitItem[];
  positionsTitle?: string;
  positionsDescription?: string;
  openPositions: OpenPosition[];
}

const benefitIcons: Record<string, React.ReactNode> = {
  health: <Heart className="h-6 w-6" />,
  growth: <GraduationCap className="h-6 w-6" />,
  flexibility: <Clock className="h-6 w-6" />,
  culture: <Users className="h-6 w-6" />,
  compensation: <Gift className="h-6 w-6" />,
  perks: <Building2 className="h-6 w-6" />,
};

const typeLabels: Record<string, string> = {
  'full-time': 'Full Time',
  'part-time': 'Part Time',
  contract: 'Contract',
  remote: 'Remote',
  internship: 'Internship',
};

function BenefitsSection({
  benefits,
  title,
  description,
}: {
  benefits: BenefitItem[];
  title?: string;
  description?: string;
}) {
  return (
    <section className="mb-16">
      {title && (
        <h2 className="text-2xl font-bold text-[var(--kindonar-color-neutral-900)] md:text-3xl">
          {title}
        </h2>
      )}
      {description && (
        <p className="mt-2 max-w-2xl text-lg text-[var(--kindonar-color-neutral-600)]">
          {description}
        </p>
      )}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
          >
            <Card variant="outlined" padding="default" className="h-full">
              <CardContent>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--kindonar-color-primary-100)] text-[var(--kindonar-color-primary-600)]">
                  {benefit.icon ? (
                    benefitIcons[benefit.icon] || <Gift className="h-6 w-6" />
                  ) : (
                    <Gift className="h-6 w-6" />
                  )}
                </div>
                <CardTitle>{benefit.title}</CardTitle>
                <CardDescription>{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function PositionsSection({
  positions,
  title,
  description,
}: {
  positions: OpenPosition[];
  title?: string;
  description?: string;
}) {
  return (
    <section>
      {title && (
        <h2 className="text-2xl font-bold text-[var(--kindonar-color-neutral-900)] md:text-3xl">
          {title}
        </h2>
      )}
      {description && (
        <p className="mt-2 max-w-2xl text-lg text-[var(--kindonar-color-neutral-600)]">
          {description}
        </p>
      )}
      <div className="mt-8">
        <Accordion
          items={positions.map((position) => ({
            id: position.id,
            title: position.title,
            content: (
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-[var(--kindonar-color-primary-100)] px-3 py-1 text-xs font-medium text-[var(--kindonar-color-primary-700)]">
                    <Briefcase className="h-3 w-3" />
                    {position.department}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-[var(--kindonar-surface-interactive)] px-3 py-1 text-xs font-medium text-[var(--kindonar-color-neutral-600)]">
                    <Building2 className="h-3 w-3" />
                    {position.location}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-[var(--kindonar-surface-interactive)] px-3 py-1 text-xs font-medium text-[var(--kindonar-color-neutral-600)]">
                    <Clock className="h-3 w-3" />
                    {typeLabels[position.type] || position.type}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-[var(--kindonar-color-neutral-600)]">
                  {position.description}
                </p>
                {position.requirements && position.requirements.length > 0 && (
                  <div>
                    <h4 className="mb-2 text-sm font-semibold text-[var(--kindonar-color-neutral-800)]">
                      Requirements
                    </h4>
                    <ul className="list-inside list-disc space-y-1 text-sm text-[var(--kindonar-color-neutral-600)]">
                      {position.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="pt-2">
                  {position.applyUrl ? (
                    <Button variant="primary" size="sm" asChild>
                      <a href={position.applyUrl} target="_blank" rel="noopener noreferrer">
                        Apply Now
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                  ) : position.applyEmail ? (
                    <Button variant="primary" size="sm" asChild>
                      <a
                        href={`mailto:${position.applyEmail}?subject=Application for ${position.title}`}
                      >
                        Apply via Email
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                  ) : null}
                </div>
              </div>
            ),
          }))}
          allowMultiple
          variant="bordered"
        />
      </div>
    </section>
  );
}

export function CareersPage({ config }: { config: CareersPageConfig }) {
  return (
    <div>
      <PageHero config={config.hero} />
      <PageLayout layout="default">
        {config.description && (
          <p className="mb-12 max-w-3xl text-lg leading-relaxed text-[var(--kindonar-color-neutral-600)]">
            {config.description}
          </p>
        )}
        <BenefitsSection
          benefits={config.benefits}
          title={config.benefitsTitle}
          description={config.benefitsDescription}
        />
        <PositionsSection
          positions={config.openPositions}
          title={config.positionsTitle}
          description={config.positionsDescription}
        />
      </PageLayout>
    </div>
  );
}
