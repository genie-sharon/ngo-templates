'use client';

import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import Image from 'next/image';

import { cn } from '@/lib/utils';

import { MotionSection, SectionHeadingBlock, staggerItem } from '../motion';
import type { SectionConfig, SectionImage } from '../section-config.types';

export interface AnnualReport {
  year: number;
  title: string;
  description?: string;
  pdfUrl: string;
  coverImage?: SectionImage;
  fileSize?: string;
}

export interface AnnualReportsSectionProps {
  config: SectionConfig;
  reports: AnnualReport[];
  className?: string;
}

export function AnnualReportsSection({ config, reports, className }: AnnualReportsSectionProps) {
  if (!config.visible) return null;

  const isDark =
    config.theme === 'dark' ||
    config.theme === 'primary' ||
    config.theme === 'secondary' ||
    config.theme === 'gradient';
  const safeReports = Array.isArray(reports) ? reports : [];

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
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {safeReports.map((report, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={cn(
                  'group overflow-hidden rounded-xl border transition-all hover:shadow-lg',
                  isDark
                    ? 'border-white/10 bg-white/5'
                    : 'border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-primary)]',
                )}
              >
                <div
                  className={cn(
                    'relative flex aspect-[3/4] items-center justify-center',
                    isDark ? 'bg-white/10' : 'bg-[var(--kindonar-surface-interactive)]',
                  )}
                >
                  {report.coverImage ? (
                    <Image
                      src={report.coverImage.src}
                      alt={report.coverImage.alt}
                      width={400}
                      height={533}
                      unoptimized
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <FileText
                      size={48}
                      className={cn(
                        isDark ? 'text-white/30' : 'text-[var(--kindonar-color-neutral-300)]',
                      )}
                    />
                  )}
                  <div className="absolute top-3 left-3">
                    <span
                      className={cn(
                        'inline-flex items-center rounded-full px-3 py-1 text-xs font-bold',
                        isDark
                          ? 'bg-white/20 text-white'
                          : 'bg-[var(--kindonar-color-primary-100)] text-[var(--kindonar-color-primary-700)]',
                      )}
                    >
                      {report.year}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3
                    className={cn(
                      'text-lg font-semibold',
                      isDark ? 'text-white' : 'text-[var(--kindonar-color-neutral-900)]',
                    )}
                  >
                    {report.title}
                  </h3>
                  {report.description && (
                    <p
                      className={cn(
                        'mt-2 text-sm',
                        isDark ? 'text-white/60' : 'text-[var(--kindonar-color-neutral-500)]',
                      )}
                    >
                      {report.description}
                    </p>
                  )}
                  <div className="mt-4 flex items-center justify-between">
                    {report.fileSize && (
                      <span
                        className={cn(
                          'text-xs',
                          isDark ? 'text-white/40' : 'text-[var(--kindonar-color-neutral-400)]',
                        )}
                      >
                        {report.fileSize}
                      </span>
                    )}
                    <a
                      href={report.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className={cn(
                        'inline-flex items-center gap-2 text-sm font-semibold transition-colors',
                        isDark
                          ? 'text-[var(--kindonar-color-primary-300)] hover:text-[var(--kindonar-color-primary-200)]'
                          : 'text-[var(--kindonar-color-primary-600)] hover:text-[var(--kindonar-color-primary-700)]',
                      )}
                    >
                      <Download size={16} />
                      Download PDF
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
