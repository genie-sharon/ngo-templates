'use client';

import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import { forwardRef } from 'react';

import { Button } from '@/components/ui/atoms/button';
import {
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/cards/card';
import { cn } from '@/lib/utils';

export interface AnnualReportStat {
  label: string;
  value: string;
}

export interface AnnualReportCardProps {
  year: string;
  title: string;
  description: string;
  coverImage?: string;
  downloadUrl: string;
  stats?: AnnualReportStat[];
  className?: string;
}

export const AnnualReportCard = forwardRef<HTMLDivElement, AnnualReportCardProps>(
  ({ year, title, description, coverImage, downloadUrl, stats, className }, ref) => {
    const safeStats = Array.isArray(stats) ? stats : [];
    return (
      <motion.div
        ref={ref}
        whileHover={{ y: -4, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      >
        <Card variant="interactive" className={cn('h-full', className)}>
          {coverImage ? (
            <CardImage src={coverImage} alt={`${year} annual report cover`} aspectRatio="16:9" />
          ) : (
            <div className="-mx-6 -mt-6 mb-4 flex h-48 items-center justify-center rounded-t-xl bg-[var(--kindonar-surface-interactive)]">
              <FileText
                className="h-12 w-12 text-[var(--kindonar-color-neutral-400)]"
                aria-hidden="true"
              />
            </div>
          )}

          <CardContent>
            <span className="inline-block rounded-full bg-[var(--kindonar-color-primary-100)] px-3 py-1 text-xs font-semibold text-[var(--kindonar-color-primary-700)]">
              {year} Report
            </span>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>

            {safeStats.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-4">
                {safeStats.map((stat, i) => (
                  <div key={i}>
                    <p className="text-lg font-bold text-[var(--kindonar-color-primary-600)]">
                      {stat.value}
                    </p>
                    <p className="text-xs text-[var(--kindonar-color-neutral-500)]">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}
          </CardContent>

          <CardFooter>
            <Button
              variant="outline"
              size="sm"
              leftIcon={<Download className="h-4 w-4" />}
              onClick={() => window.open(downloadUrl, '_blank', 'noopener,noreferrer')}
            >
              Download PDF
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    );
  },
);
AnnualReportCard.displayName = 'AnnualReportCard';
