'use client';

import { motion } from 'framer-motion';
import { Building2, Globe, Handshake } from 'lucide-react';

import { cn } from '@/lib/utils';

import { MotionSection, SectionHeadingBlock, staggerItem } from '../motion';
import type { SectionConfig, SectionImage } from '../section-config.types';

export interface CSRPartner {
  name: string;
  description: string;
  logo?: SectionImage;
  website?: string;
  focus?: string;
  contribution?: string;
}

export interface CSRPartnersSectionProps {
  config: SectionConfig;
  partners: CSRPartner[];
  className?: string;
}

const focusIcons: Record<string, React.ReactNode> = {
  education: <Building2 size={20} />,
  environment: <Globe size={20} />,
  community: <Handshake size={20} />,
};

export function CSRPartnersSection({ config, partners, className }: CSRPartnersSectionProps) {
  if (!config.visible) return null;

  const isDark =
    config.theme === 'dark' ||
    config.theme === 'primary' ||
    config.theme === 'secondary' ||
    config.theme === 'gradient';
  const safePartners = Array.isArray(partners) ? partners : [];

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
        <MotionSection animation={config.animation}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {safePartners.map((partner, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={cn(
                  'group rounded-xl border p-6 transition-all hover:shadow-lg',
                  isDark
                    ? 'border-white/10 bg-white/5 hover:bg-white/10'
                    : 'border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-primary)]',
                )}
              >
                <div className="flex items-center gap-4">
                  {partner.logo ? (
                    <img
                      src={partner.logo.src}
                      alt={partner.logo.alt}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-lg object-contain"
                    />
                  ) : (
                    <div
                      className={cn(
                        'flex h-12 w-12 items-center justify-center rounded-lg',
                        isDark
                          ? 'bg-[var(--kindonar-color-primary-500)]'
                          : 'bg-[var(--kindonar-color-primary-100)] text-[var(--kindonar-color-primary-700)]',
                      )}
                    >
                      <Building2 size={24} />
                    </div>
                  )}
                  <div>
                    <h3
                      className={cn(
                        'text-lg font-semibold',
                        isDark ? 'text-white' : 'text-[var(--kindonar-color-neutral-900)]',
                      )}
                    >
                      {partner.name}
                    </h3>
                    {partner.focus && (
                      <div className="mt-0.5 flex items-center gap-1">
                        <span
                          className="text-[var(--kindonar-color-primary-500)]"
                          aria-hidden="true"
                        >
                          {focusIcons[partner.focus.toLowerCase()] ?? <Handshake size={14} />}
                        </span>
                        <span
                          className={cn(
                            'text-xs',
                            isDark ? 'text-white/60' : 'text-[var(--kindonar-color-neutral-500)]',
                          )}
                        >
                          {partner.focus}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <p
                  className={cn(
                    'mt-4 text-sm leading-relaxed',
                    isDark ? 'text-white/70' : 'text-[var(--kindonar-color-neutral-600)]',
                  )}
                >
                  {partner.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  {partner.contribution && (
                    <span
                      className={cn(
                        'text-sm font-semibold',
                        isDark
                          ? 'text-[var(--kindonar-color-primary-300)]'
                          : 'text-[var(--kindonar-color-primary-600)]',
                      )}
                    >
                      {partner.contribution}
                    </span>
                  )}
                  {partner.website && (
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        'text-sm font-medium underline-offset-2 hover:underline',
                        isDark
                          ? 'text-[var(--kindonar-color-primary-300)]'
                          : 'text-[var(--kindonar-color-primary-600)]',
                      )}
                    >
                      Visit website
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
