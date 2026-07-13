'use client';

import { motion } from 'framer-motion';
import { Download, FileText, LayoutGrid, List } from 'lucide-react';
import { useState } from 'react';

import { PageHero } from '@/components/pages/blocks/page-hero';
import type {
  PageConfig,
  PageHeroConfig,
  DownloadItem,
} from '@/components/pages/page-config.types';
import { Timeline } from '@/components/ui/data-display/timeline';
import { Image } from '@/components/ui/media/image';
import { cn } from '@/lib/utils';

export interface AnnualReportsConfig extends PageConfig {
  hero: PageHeroConfig;
  reports: DownloadItem[];
  defaultLayout?: 'grid' | 'timeline';
}

function ReportCard({ report, index }: { report: DownloadItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.08 }}
      className="group flex flex-col overflow-hidden rounded-xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] transition-all duration-300 hover:shadow-[var(--kindonar-shadow-md)]"
    >
      {report.coverImage ? (
        <div className="relative aspect-[4/3] overflow-hidden bg-[var(--kindonar-surface-interactive)]">
          <Image
            src={report.coverImage}
            alt={report.title}
            className="h-full w-full transition-transform duration-500 group-hover:scale-105"
            fit="cover"
            loading={index < 3 ? 'eager' : 'lazy'}
          />
          {report.year && (
            <div className="absolute top-3 left-3 rounded-lg bg-[var(--kindonar-color-primary-500)] px-3 py-1.5 text-sm font-bold text-white shadow-lg">
              {report.year}
            </div>
          )}
        </div>
      ) : (
        <div className="relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-[var(--kindonar-color-primary-100)] to-[var(--kindonar-color-secondary-100)]">
          <FileText className="h-16 w-16 text-[var(--kindonar-color-primary-300)]" />
          {report.year && (
            <div className="absolute top-3 left-3 rounded-lg bg-[var(--kindonar-color-primary-500)] px-3 py-1.5 text-sm font-bold text-white shadow-lg">
              {report.year}
            </div>
          )}
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-[var(--kindonar-color-neutral-900)]">
          {report.title}
        </h3>
        {report.description && (
          <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-[var(--kindonar-color-neutral-600)]">
            {report.description}
          </p>
        )}

        <div className="mt-4 flex items-center gap-3 text-xs text-[var(--kindonar-color-neutral-500)]">
          {report.fileType && (
            <span className="rounded-md bg-[var(--kindonar-surface-interactive)] px-2 py-0.5 font-medium uppercase">
              {report.fileType}
            </span>
          )}
          {report.fileSize && <span>{report.fileSize}</span>}
        </div>

        <a
          href={report.fileUrl}
          download
          className={cn(
            'mt-4 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all',
            'bg-[var(--kindonar-color-primary-500)] text-white hover:bg-[var(--kindonar-color-primary-600)]',
          )}
        >
          <Download className="h-4 w-4" />
          Download Report
        </a>
      </div>
    </motion.div>
  );
}

function GridLayout({ reports }: { reports: DownloadItem[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {reports.map((report, idx) => (
        <ReportCard key={`${report.title}-${idx}`} report={report} index={idx} />
      ))}
    </div>
  );
}

function TimelineLayout({ reports }: { reports: DownloadItem[] }) {
  const sorted = [...reports].sort((a, b) => {
    const ay = parseInt(a.year || '0');
    const by = parseInt(b.year || '0');
    return by - ay;
  });

  return (
    <div className="mx-auto max-w-3xl">
      <Timeline
        items={sorted.map((report, idx) => ({
          id: `${report.title}-${idx}`,
          year: report.year,
          title: report.title,
          description: report.description,
          content: (
            <div className="mt-3 flex items-center gap-3">
              {report.coverImage && (
                <Image
                  src={report.coverImage}
                  alt={report.title}
                  className="h-12 w-16 rounded"
                  fit="cover"
                />
              )}
              <div className="flex items-center gap-2 text-xs text-[var(--kindonar-color-neutral-500)]">
                {report.fileType && (
                  <span className="rounded-md bg-[var(--kindonar-surface-interactive)] px-2 py-0.5 font-medium uppercase">
                    {report.fileType}
                  </span>
                )}
                {report.fileSize && <span>{report.fileSize}</span>}
              </div>
              <a
                href={report.fileUrl}
                download
                className="ml-auto inline-flex items-center gap-1.5 rounded-lg bg-[var(--kindonar-color-primary-500)] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[var(--kindonar-color-primary-600)]"
              >
                <Download className="h-3.5 w-3.5" />
                Download
              </a>
            </div>
          ),
        }))}
        variant="vertical"
      />
    </div>
  );
}

export function AnnualReportsPage({
  config,
  className,
}: {
  config: AnnualReportsConfig;
  className?: string;
}) {
  const [layout, setLayout] = useState<AnnualReportsConfig['defaultLayout']>(
    config.defaultLayout || 'grid',
  );

  return (
    <div className={cn(className)}>
      <PageHero config={config.hero} />

      <section className="py-16 md:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-sm text-[var(--kindonar-color-neutral-500)]">
              Showing{' '}
              <span className="font-semibold text-[var(--kindonar-color-neutral-900)]">
                {config.reports.length}
              </span>{' '}
              reports
            </p>

            <div className="flex items-center gap-2 rounded-lg border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-primary)] p-1">
              <button
                type="button"
                onClick={() => setLayout('grid')}
                className={cn(
                  'inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
                  layout === 'grid'
                    ? 'bg-[var(--kindonar-color-primary-500)] text-white'
                    : 'text-[var(--kindonar-color-neutral-600)] hover:text-[var(--kindonar-color-neutral-900)]',
                )}
                aria-label="Grid view"
                aria-pressed={layout === 'grid'}
              >
                <LayoutGrid className="h-4 w-4" />
                <span>Grid</span>
              </button>
              <button
                type="button"
                onClick={() => setLayout('timeline')}
                className={cn(
                  'inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
                  layout === 'timeline'
                    ? 'bg-[var(--kindonar-color-primary-500)] text-white'
                    : 'text-[var(--kindonar-color-neutral-600)] hover:text-[var(--kindonar-color-neutral-900)]',
                )}
                aria-label="Timeline view"
                aria-pressed={layout === 'timeline'}
              >
                <List className="h-4 w-4" />
                <span>Timeline</span>
              </button>
            </div>
          </div>

          {config.reports.length > 0 ? (
            <>
              {layout === 'grid' && <GridLayout reports={config.reports} />}
              {layout === 'timeline' && <TimelineLayout reports={config.reports} />}
            </>
          ) : (
            <div className="py-16 text-center">
              <FileText className="mx-auto h-12 w-12 text-[var(--kindonar-color-neutral-300)]" />
              <p className="mt-4 text-lg text-[var(--kindonar-color-neutral-500)]">
                No reports available yet.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
