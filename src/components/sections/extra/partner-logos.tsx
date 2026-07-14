'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { cn } from '@/lib/utils';

import { MotionSection, SectionHeadingBlock, staggerItem } from '../motion';
import type { SectionConfig, SectionImage } from '../section-config.types';

export interface PartnerLogo {
  name: string;
  logo: SectionImage;
  url?: string;
}

export interface PartnerLogosSectionProps {
  config: SectionConfig;
  partners: PartnerLogo[];
  variant?: 'grid' | 'marquee';
  className?: string;
}

export function PartnerLogosSection({
  config,
  partners,
  variant = 'grid',
  className,
}: PartnerLogosSectionProps) {
  if (!config.visible) return null;

  const isDark =
    config.theme === 'dark' ||
    config.theme === 'primary' ||
    config.theme === 'secondary' ||
    config.theme === 'gradient';
  const safePartners = Array.isArray(partners) ? partners : [];

  if (variant === 'marquee') {
    const doubled = [...safePartners, ...safePartners];
    return (
      <section
        id={config.id}
        className={cn(
          'overflow-hidden py-12',
          isDark
            ? 'bg-[var(--kindonar-color-neutral-900)]'
            : 'bg-[var(--kindonar-surface-interactive)]',
          className,
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeadingBlock heading={config.heading} theme={config.theme} />
        </div>
        <motion.div
          className="mt-8 flex gap-12"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {doubled.map((partner, idx) => (
            <div key={idx} className="flex shrink-0 items-center justify-center px-6">
              {partner.logo?.src ? (
                partner.url ? (
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={partner.name}
                  >
                    <Image
                      src={partner.logo.src}
                      alt={partner.logo.alt}
                      width={partner.logo.width ?? 120}
                      height={partner.logo.height ?? 40}
                      unoptimized
                      className={cn(
                        'h-10 w-auto object-contain opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0',
                        isDark && 'brightness-0 invert',
                      )}
                    />
                  </a>
                ) : (
                  <Image
                    src={partner.logo.src}
                    alt={partner.logo.alt}
                    width={partner.logo.width ?? 120}
                    height={partner.logo.height ?? 40}
                    unoptimized
                    className={cn(
                      'h-10 w-auto object-contain opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0',
                      isDark && 'brightness-0 invert',
                    )}
                  />
                )
              ) : (
                <span
                  className={cn(
                    'text-sm font-semibold',
                    isDark ? 'text-white/60' : 'text-[var(--kindonar-color-neutral-500)]',
                  )}
                >
                  {partner.name}
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </section>
    );
  }

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
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {safePartners.map((partner, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center justify-center p-6"
              >
                {partner.logo?.src ? (
                  partner.url ? (
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={partner.name}
                    >
                      <Image
                        src={partner.logo.src}
                        alt={partner.logo.alt}
                        width={partner.logo.width ?? 120}
                        height={partner.logo.height ?? 40}
                        unoptimized
                        className={cn(
                          'h-12 w-auto object-contain opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0',
                          isDark && 'brightness-0 invert',
                        )}
                      />
                    </a>
                  ) : (
                    <Image
                      src={partner.logo.src}
                      alt={partner.logo.alt}
                      width={partner.logo.width ?? 120}
                      height={partner.logo.height ?? 40}
                      unoptimized
                      className={cn(
                        'h-12 w-auto object-contain opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0',
                        isDark && 'brightness-0 invert',
                      )}
                    />
                  )
                ) : (
                  <span
                    className={cn(
                      'text-center text-sm font-semibold',
                      isDark ? 'text-white/60' : 'text-[var(--kindonar-color-neutral-500)]',
                    )}
                  >
                    {partner.name}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
