'use client';

import { Accordion } from '@/components/ui/data-display/accordion';
import type { AccordionItem } from '@/components/ui/data-display/accordion';
import { cn } from '@/lib/utils';

import { MotionSection, SectionHeadingBlock } from '../motion';
import type { SectionConfig } from '../section-config.types';

export interface FAQSectionProps {
  config: SectionConfig;
  items: AccordionItem[];
  allowMultiple?: boolean;
  variant?: 'bordered' | 'ghost' | 'filled';
  className?: string;
}

export function FAQSection({
  config,
  items,
  allowMultiple,
  variant = 'bordered',
  className,
}: FAQSectionProps) {
  if (!config.visible) return null;

  const isDark =
    config.theme === 'dark' ||
    config.theme === 'primary' ||
    config.theme === 'secondary' ||
    config.theme === 'gradient';

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
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeadingBlock heading={config.heading} theme={config.theme} />
        <MotionSection animation={config.animation}>
          <Accordion
            items={items}
            allowMultiple={allowMultiple}
            variant={variant}
            className={cn(isDark && '[&_*]:text-white [&_[role=region]>div]:text-white/70')}
          />
        </MotionSection>
      </div>
    </section>
  );
}
