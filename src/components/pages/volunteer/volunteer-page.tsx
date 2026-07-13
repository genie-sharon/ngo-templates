'use client';

import { motion } from 'framer-motion';
import {
  Check,
  Clock,
  Users,
  Heart,
  ArrowRight,
  MapPin,
  HandHeart,
  Star,
  Award,
} from 'lucide-react';
import { useForm } from 'react-hook-form';

import { SectionHeadingBlock, staggerItem } from '@/components/sections/motion';
import type { TestimonialsConfig } from '@/components/sections/testimonials/config.types';
import { Testimonials } from '@/components/sections/testimonials/testimonials';
import { Button } from '@/components/ui/atoms/button';
import { cn } from '@/lib/utils';

import { PageHero } from '../blocks/page-hero';
import type { PageHeroConfig } from '../page-config.types';

export type VolunteerLayout = 'single-column' | 'split' | 'cards';

export interface VolunteerOpportunity {
  id: string;
  title: string;
  description: string;
  commitment: string;
  location: string;
  category: string;
  spots?: number;
  icon?: 'hands' | 'heart' | 'users' | 'star' | 'clock' | 'award';
}

export interface VolunteerBenefit {
  icon: 'hands' | 'heart' | 'users' | 'star' | 'clock' | 'award';
  title: string;
  description: string;
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  validation?: Record<string, unknown>;
}

export interface VolunteerPageConfig {
  hero: PageHeroConfig;
  layout: VolunteerLayout;
  opportunities: VolunteerOpportunity[];
  benefits: VolunteerBenefit[];
  requirements: string[];
  formFields: FormField[];
  testimonials?: TestimonialsConfig;
  submitLabel?: string;
  onSubmit?: (data: Record<string, unknown>) => void;
}

const benefitIconMap: Record<string, React.ReactNode> = {
  hands: <HandHeart className="h-6 w-6" />,
  heart: <Heart className="h-6 w-6" />,
  users: <Users className="h-6 w-6" />,
  star: <Star className="h-6 w-6" />,
  clock: <Clock className="h-6 w-6" />,
  award: <Award className="h-6 w-6" />,
};

const oppIconMap: Record<string, React.ReactNode> = {
  hands: <HandHeart className="h-5 w-5" />,
  heart: <Heart className="h-5 w-5" />,
  users: <Users className="h-5 w-5" />,
  star: <Star className="h-5 w-5" />,
  clock: <Clock className="h-5 w-5" />,
  award: <Award className="h-5 w-5" />,
};

function VolunteerSignupForm({
  fields,
  submitLabel,
  onSubmit,
}: {
  fields: FormField[];
  submitLabel?: string;
  onSubmit?: (data: Record<string, unknown>) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFormSubmit = handleSubmit((data) => {
    onSubmit?.(data);
  });

  return (
    <form onSubmit={onFormSubmit} className="space-y-5" noValidate>
      {fields.map((field) => (
        <div key={field.name}>
          <label
            htmlFor={`vol-${field.name}`}
            className="mb-1.5 block text-sm font-medium text-[var(--kindonar-color-neutral-700)]"
          >
            {field.label}
            {field.required && (
              <span className="ml-0.5 text-[var(--kindonar-color-error-500)]" aria-hidden="true">
                *
              </span>
            )}
          </label>
          {field.type === 'textarea' ? (
            <textarea
              id={`vol-${field.name}`}
              rows={3}
              placeholder={field.placeholder}
              className="w-full rounded-lg border border-[var(--kindonar-border-default)] px-4 py-2.5 text-sm text-[var(--kindonar-color-neutral-900)] transition-colors outline-none focus:border-[var(--kindonar-color-primary-500)] focus:ring-2 focus:ring-[var(--kindonar-color-primary-200)]"
              {...register(field.name, { required: field.required })}
            />
          ) : field.type === 'select' && field.options ? (
            <select
              id={`vol-${field.name}`}
              className="w-full rounded-lg border border-[var(--kindonar-border-default)] px-4 py-2.5 text-sm text-[var(--kindonar-color-neutral-900)] transition-colors outline-none focus:border-[var(--kindonar-color-primary-500)] focus:ring-2 focus:ring-[var(--kindonar-color-primary-200)]"
              {...register(field.name, { required: field.required })}
            >
              <option value="">Select...</option>
              {field.options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={`vol-${field.name}`}
              type={field.type}
              placeholder={field.placeholder}
              className="w-full rounded-lg border border-[var(--kindonar-border-default)] px-4 py-2.5 text-sm text-[var(--kindonar-color-neutral-900)] transition-colors outline-none focus:border-[var(--kindonar-color-primary-500)] focus:ring-2 focus:ring-[var(--kindonar-color-primary-200)]"
              {...register(field.name, { required: field.required })}
            />
          )}
          {errors[field.name] && typeof errors[field.name] === 'object' && (
            <p className="mt-1 text-xs text-[var(--kindonar-color-error-500)]" role="alert">
              {field.label} is required
            </p>
          )}
        </div>
      ))}
      <Button variant="volunteer" size="lg" fullWidth type="submit" className="mt-2 text-base">
        <HandHeart className="h-5 w-5" aria-hidden="true" />
        {submitLabel || 'Sign Up to Volunteer'}
      </Button>
    </form>
  );
}

function OpportunityCard({ opportunity }: { opportunity: VolunteerOpportunity }) {
  return (
    <motion.div
      variants={staggerItem}
      className="group rounded-2xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] p-6 transition-all hover:shadow-[var(--kindonar-shadow-md)] md:p-8"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--kindonar-color-primary-100)] text-[var(--kindonar-color-primary-600)]">
        {oppIconMap[opportunity.icon || 'hands']}
      </div>
      <h3 className="text-lg font-bold text-[var(--kindonar-color-neutral-900)]">
        {opportunity.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--kindonar-color-neutral-600)]">
        {opportunity.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-3 text-xs text-[var(--kindonar-color-neutral-500)]">
        <span className="flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
          {opportunity.commitment}
        </span>
        <span className="flex items-center gap-1">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          {opportunity.location}
        </span>
        {opportunity.spots && (
          <span className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" aria-hidden="true" />
            {opportunity.spots} spots
          </span>
        )}
      </div>
      <Button variant="outline" size="sm" className="mt-4">
        Learn More <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
      </Button>
    </motion.div>
  );
}

function BenefitsSection({ benefits }: { benefits: VolunteerBenefit[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {benefits.map((benefit, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: idx * 0.08 }}
          className="rounded-2xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] p-6 text-center transition-shadow hover:shadow-[var(--kindonar-shadow-md)]"
        >
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--kindonar-color-primary-100)] text-[var(--kindonar-color-primary-600)]">
            {benefitIconMap[benefit.icon]}
          </div>
          <h3 className="text-lg font-bold text-[var(--kindonar-color-neutral-900)]">
            {benefit.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--kindonar-color-neutral-600)]">
            {benefit.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

function RequirementsList({ requirements }: { requirements: string[] }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
      className="space-y-3"
    >
      {requirements.map((req, idx) => (
        <motion.div key={idx} variants={staggerItem} className="flex items-start gap-3">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--kindonar-color-primary-100)]">
            <Check
              size={14}
              className="text-[var(--kindonar-color-primary-600)]"
              aria-hidden="true"
            />
          </span>
          <span className="text-sm text-[var(--kindonar-color-neutral-700)]">{req}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}

function VolunteerSingleColumn({ config }: { config: VolunteerPageConfig }) {
  return (
    <div className="space-y-16">
      {config.opportunities.length > 0 && (
        <section>
          <SectionHeadingBlock
            heading={{
              title: 'Volunteer Opportunities',
              subtitle: 'Find the right role for you',
              alignment: 'center',
            }}
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {config.opportunities.map((opp) => (
              <OpportunityCard key={opp.id} opportunity={opp} />
            ))}
          </div>
        </section>
      )}
      {config.benefits.length > 0 && (
        <section>
          <SectionHeadingBlock
            heading={{
              title: 'Why Volunteer With Us',
              subtitle: 'The benefits of joining our team',
              alignment: 'center',
            }}
          />
          <div className="mt-8">
            <BenefitsSection benefits={config.benefits} />
          </div>
        </section>
      )}
      {config.requirements.length > 0 && (
        <section>
          <SectionHeadingBlock
            heading={{
              title: 'Requirements',
              subtitle: 'What you need to get started',
              alignment: 'center',
            }}
          />
          <div className="mx-auto mt-8 max-w-2xl">
            <RequirementsList requirements={config.requirements} />
          </div>
        </section>
      )}
      <section>
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] p-6 md:p-8">
            <h3 className="mb-6 text-center text-xl font-bold text-[var(--kindonar-color-neutral-900)]">
              Sign Up
            </h3>
            <VolunteerSignupForm
              fields={config.formFields}
              submitLabel={config.submitLabel}
              onSubmit={config.onSubmit}
            />
          </div>
        </div>
      </section>
      {config.testimonials && (
        <section>
          <Testimonials config={config.testimonials} />
        </section>
      )}
    </div>
  );
}

function VolunteerSplit({ config }: { config: VolunteerPageConfig }) {
  return (
    <div className="space-y-16">
      {config.opportunities.length > 0 && (
        <section>
          <SectionHeadingBlock
            heading={{
              title: 'Volunteer Opportunities',
              subtitle: 'Find the right role for you',
              alignment: 'center',
            }}
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {config.opportunities.map((opp) => (
              <OpportunityCard key={opp.id} opportunity={opp} />
            ))}
          </div>
        </section>
      )}
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-12">
          {config.benefits.length > 0 && (
            <section>
              <SectionHeadingBlock heading={{ title: 'Benefits', alignment: 'left' }} />
              <div className="mt-6 space-y-4">
                {config.benefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="flex items-start gap-4 rounded-xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--kindonar-color-primary-100)] text-[var(--kindonar-color-primary-600)]">
                      {benefitIconMap[benefit.icon]}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--kindonar-color-neutral-900)]">
                        {benefit.title}
                      </h4>
                      <p className="mt-1 text-sm text-[var(--kindonar-color-neutral-600)]">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          )}
          {config.requirements.length > 0 && (
            <section>
              <SectionHeadingBlock heading={{ title: 'Requirements', alignment: 'left' }} />
              <div className="mt-6">
                <RequirementsList requirements={config.requirements} />
              </div>
            </section>
          )}
        </div>
        <div>
          <div className="rounded-2xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] p-6 md:p-8 lg:sticky lg:top-24">
            <h3 className="mb-6 text-xl font-bold text-[var(--kindonar-color-neutral-900)]">
              Sign Up
            </h3>
            <VolunteerSignupForm
              fields={config.formFields}
              submitLabel={config.submitLabel}
              onSubmit={config.onSubmit}
            />
          </div>
        </div>
      </div>
      {config.testimonials && (
        <section>
          <Testimonials config={config.testimonials} />
        </section>
      )}
    </div>
  );
}

function VolunteerCards({ config }: { config: VolunteerPageConfig }) {
  return (
    <div className="space-y-16">
      {config.opportunities.length > 0 && (
        <section>
          <SectionHeadingBlock
            heading={{
              title: 'Volunteer Opportunities',
              subtitle: 'Find the right role for you',
              alignment: 'center',
            }}
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {config.opportunities.map((opp) => (
              <OpportunityCard key={opp.id} opportunity={opp} />
            ))}
          </div>
        </section>
      )}
      {config.benefits.length > 0 && (
        <section>
          <SectionHeadingBlock
            heading={{
              title: 'Why Volunteer With Us',
              subtitle: 'The benefits of joining our team',
              alignment: 'center',
            }}
          />
          <div className="mt-8">
            <BenefitsSection benefits={config.benefits} />
          </div>
        </section>
      )}
      {config.requirements.length > 0 && (
        <section>
          <div className="rounded-2xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] p-8">
            <SectionHeadingBlock heading={{ title: 'Requirements', alignment: 'center' }} />
            <div className="mx-auto max-w-xl">
              <RequirementsList requirements={config.requirements} />
            </div>
          </div>
        </section>
      )}
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] p-6 md:p-8">
          <SectionHeadingBlock
            heading={{
              title: 'Sign Up',
              subtitle: 'Ready to make a difference?',
              alignment: 'center',
            }}
          />
          <VolunteerSignupForm
            fields={config.formFields}
            submitLabel={config.submitLabel}
            onSubmit={config.onSubmit}
          />
        </div>
        {config.testimonials && (
          <div className="rounded-2xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-color-primary-50)] p-6 md:p-8">
            <Testimonials config={config.testimonials} />
          </div>
        )}
      </div>
    </div>
  );
}

export function VolunteerPage({
  config,
  className,
}: {
  config: VolunteerPageConfig;
  className?: string;
}) {
  const renderLayout = () => {
    switch (config.layout) {
      case 'split':
        return <VolunteerSplit config={config} />;
      case 'cards':
        return <VolunteerCards config={config} />;
      default:
        return <VolunteerSingleColumn config={config} />;
    }
  };

  return (
    <div className={cn(className)}>
      <PageHero config={config.hero} />
      <section className="py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{renderLayout()}</div>
      </section>
    </div>
  );
}
