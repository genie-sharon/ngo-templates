'use client';

import { Newsletter } from '@/components/ui/footer/newsletter';
import { cn } from '@/lib/utils';

import { MotionSection, SectionHeadingBlock } from '../motion';
import type { SectionConfig } from '../section-config.types';

export interface NewsletterSectionProps {
  config: SectionConfig;
  title?: string;
  description?: string;
  placeholder?: string;
  buttonLabel?: string;
  onSubmit?: (email: string) => void;
  successMessage?: string;
  className?: string;
}

export function NewsletterSection({
  config,
  title = 'Stay Updated',
  description = 'Get the latest news and updates delivered to your inbox.',
  placeholder,
  buttonLabel,
  onSubmit,
  successMessage,
  className,
}: NewsletterSectionProps) {
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
          <div
            className={cn(
              'rounded-2xl border p-8 text-center md:p-12',
              isDark
                ? 'border-white/10 bg-white/5'
                : 'border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-interactive)]',
            )}
          >
            <Newsletter
              title={title}
              description={description}
              placeholder={placeholder}
              buttonLabel={buttonLabel}
              onSubmit={onSubmit}
              successMessage={successMessage}
            />
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
