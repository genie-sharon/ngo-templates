'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ClipboardCheck, HandHeart, UserPlus, Users } from 'lucide-react';

import { cn } from '@/lib/utils';

import { MotionSection, SectionHeadingBlock, staggerItem } from '../motion';
import type { SectionConfig } from '../section-config.types';

const defaultSteps = [
  {
    icon: <ClipboardCheck size={24} />,
    title: 'Sign Up',
    description: 'Fill out our online volunteer application form with your details and interests.',
  },
  {
    icon: <Users size={24} />,
    title: 'Attend Orientation',
    description:
      'Join a welcome session to learn about our mission, values, and volunteer guidelines.',
  },
  {
    icon: <UserPlus size={24} />,
    title: 'Get Matched',
    description: 'We pair you with a role that fits your skills, availability, and passion area.',
  },
  {
    icon: <HandHeart size={24} />,
    title: 'Make an Impact',
    description: 'Start volunteering and transforming lives in your community.',
  },
];

export interface VolunteerJourneyStep {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

export interface VolunteerJourneySectionProps {
  config: SectionConfig;
  steps?: VolunteerJourneyStep[];
  className?: string;
}

export function VolunteerJourneySection({
  config,
  steps = defaultSteps,
  className,
}: VolunteerJourneySectionProps) {
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
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {safeSteps.map((step, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative flex flex-col items-center text-center"
              >
                <div
                  className={cn(
                    'relative flex h-20 w-20 items-center justify-center rounded-full shadow-lg',
                    isDark
                      ? 'bg-[var(--kindonar-color-primary-500)]'
                      : 'bg-[var(--kindonar-color-primary-100)] text-[var(--kindonar-color-primary-700)]',
                  )}
                >
                  {step.icon}
                  <span
                    className={cn(
                      'absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold',
                      isDark
                        ? 'bg-white text-[var(--kindonar-color-neutral-900)]'
                        : 'bg-[var(--kindonar-color-primary-500)] text-white',
                    )}
                  >
                    {idx + 1}
                  </span>
                </div>
                <h3
                  className={cn(
                    'mt-6 text-lg font-semibold',
                    isDark ? 'text-white' : 'text-[var(--kindonar-color-neutral-900)]',
                  )}
                >
                  {step.title}
                </h3>
                <p
                  className={cn(
                    'mt-2 text-sm leading-relaxed',
                    isDark ? 'text-white/70' : 'text-[var(--kindonar-color-neutral-600)]',
                  )}
                >
                  {step.description}
                </p>
                {idx < steps.length - 1 && (
                  <ArrowRight
                    size={20}
                    className={cn(
                      'absolute top-10 -right-4 hidden lg:block',
                      isDark
                        ? 'text-[var(--kindonar-color-primary-400)]'
                        : 'text-[var(--kindonar-color-primary-300)]',
                    )}
                    aria-hidden="true"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
