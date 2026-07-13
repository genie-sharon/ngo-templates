'use client';

import { motion } from 'framer-motion';
import { CreditCard, HandHeart, Heart, Search, ShieldCheck } from 'lucide-react';

import { cn } from '@/lib/utils';

import { MotionSection, SectionHeadingBlock, staggerItem } from '../motion';
import type { SectionConfig } from '../section-config.types';

const defaultSteps = [
  {
    icon: <Search size={24} />,
    title: 'Choose a Cause',
    description: 'Browse our projects and pick the one that speaks to your heart.',
  },
  {
    icon: <CreditCard size={24} />,
    title: 'Make a Donation',
    description: 'Securely donate online via credit card, PayPal, or bank transfer.',
  },
  {
    icon: <ShieldCheck size={24} />,
    title: 'Get Confirmation',
    description: 'Receive an instant tax-deductible receipt and donation confirmation.',
  },
  {
    icon: <HandHeart size={24} />,
    title: 'See Your Impact',
    description: 'Get regular updates on how your contribution is making a difference.',
  },
];

export interface DonationStep {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

export interface DonationJourneySectionProps {
  config: SectionConfig;
  steps?: DonationStep[];
  className?: string;
}

export function DonationJourneySection({
  config,
  steps = defaultSteps,
  className,
}: DonationJourneySectionProps) {
  if (!config.visible) return null;

  const isDark =
    config.theme === 'dark' ||
    config.theme === 'primary' ||
    config.theme === 'secondary' ||
    config.theme === 'gradient';
  const safeSteps = Array.isArray(steps) ? steps : [];

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
        <MotionSection animation={config.animation} className="relative">
          <div className="relative">
            <div
              className={cn(
                'absolute top-0 left-1/2 hidden h-full w-0.5 -translate-x-1/2 lg:block',
                isDark
                  ? 'bg-[var(--kindonar-color-primary-400)]'
                  : 'bg-[var(--kindonar-color-primary-200)]',
              )}
              aria-hidden="true"
            />
            <div className="space-y-12">
              {safeSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  variants={staggerItem}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={cn(
                    'flex flex-col items-center gap-6 md:flex-row',
                    idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse',
                  )}
                >
                  <div className="flex-1 text-center md:text-left">
                    <span
                      className={cn(
                        'inline-flex items-center gap-2 text-sm font-bold',
                        isDark
                          ? 'text-[var(--kindonar-color-primary-300)]'
                          : 'text-[var(--kindonar-color-primary-600)]',
                      )}
                    >
                      <Heart size={14} fill="currentColor" />
                      Step {idx + 1}
                    </span>
                    <h3
                      className={cn(
                        'mt-2 text-xl font-semibold',
                        isDark ? 'text-white' : 'text-[var(--kindonar-color-neutral-900)]',
                      )}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={cn(
                        'mt-2 text-base',
                        isDark ? 'text-white/70' : 'text-[var(--kindonar-color-neutral-600)]',
                      )}
                    >
                      {step.description}
                    </p>
                  </div>
                  <div
                    className={cn(
                      'z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full shadow-lg',
                      isDark
                        ? 'bg-[var(--kindonar-color-primary-500)] text-white'
                        : 'bg-[var(--kindonar-color-primary-100)] text-[var(--kindonar-color-primary-700)]',
                    )}
                  >
                    {step.icon}
                  </div>
                  <div className="hidden flex-1 md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
