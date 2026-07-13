'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Globe, ArrowUp, ArrowDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

import { PageHero, PageLayout } from '@/components/pages/blocks/page-hero';
import type { PageHeroConfig } from '@/components/pages/page-config.types';
import type { StatItem } from '@/components/sections/section-config.types';
import { cn } from '@/lib/utils';

export interface ProgramImpact {
  id: string;
  name: string;
  beneficiaries: number;
  budget: number;
  description: string;
  color: string;
}

export interface CountryReach {
  country: string;
  flag?: string;
  programs: number;
  beneficiaries: number;
}

export interface YearComparison {
  year: number;
  beneficiaries: number;
  programs: number;
  revenue: number;
}

export interface ImpactDashboardConfig {
  hero: PageHeroConfig;
  stats: StatItem[];
  programs: ProgramImpact[];
  countries: CountryReach[];
  years: YearComparison[];
}

export function ImpactDashboardPage({ config }: { config: ImpactDashboardConfig }) {
  const { stats, programs, countries, years } = config;

  return (
    <div>
      <PageHero config={config.hero} />

      <PageLayout layout="wide">
        <div className="mb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <AnimatedCounterCard key={stat.label} stat={stat} delay={idx * 0.1} />
          ))}
        </div>

        <div className="mb-10 grid gap-8 lg:grid-cols-3">
          <ProgramImpactCard programs={programs} />
          <BeneficiaryStats programs={programs} />
          <GeographicReach countries={countries} />
        </div>

        <div>
          <YearComparisonTable years={years} />
        </div>
      </PageLayout>
    </div>
  );
}

function AnimatedCounterCard({ stat, delay }: { stat: StatItem; delay: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = stat.duration || 2000;
          const startTime = Date.now();

          const tick = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * stat.value));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [stat.value, stat.duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="rounded-xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] p-5 shadow-sm"
    >
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--kindonar-color-primary-100)] text-[var(--kindonar-color-primary-600)]">
        {stat.icon || <TrendingUp className="h-5 w-5" />}
      </div>
      <p className="text-sm text-[var(--kindonar-color-neutral-500)]">{stat.label}</p>
      <p className="mt-1 text-2xl font-bold text-[var(--kindonar-color-neutral-900)]">
        {stat.prefix}
        {count.toLocaleString('en-US')}
        {stat.suffix}
      </p>
    </motion.div>
  );
}

function ProgramImpactCard({ programs }: { programs: ProgramImpact[] }) {
  const maxBeneficiaries = Math.max(...programs.map((p) => p.beneficiaries), 1);

  return (
    <div className="rounded-xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] p-6">
      <h3 className="mb-6 text-lg font-bold text-[var(--kindonar-color-neutral-900)]">
        Program Impact
      </h3>
      <div className="space-y-5">
        {programs.map((prog, idx) => (
          <motion.div
            key={prog.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
          >
            <div className="mb-1 flex items-center justify-between">
              <span className="text-sm font-medium text-[var(--kindonar-color-neutral-700)]">
                {prog.name}
              </span>
              <span className="text-sm text-[var(--kindonar-color-neutral-500)]">
                {prog.beneficiaries.toLocaleString('en-US')}
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--kindonar-surface-interactive)]">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: prog.color }}
                initial={{ width: 0 }}
                whileInView={{ width: `${(prog.beneficiaries / maxBeneficiaries) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: 'easeOut' }}
              />
            </div>
            <p className="mt-1 text-xs text-[var(--kindonar-color-neutral-500)]">
              {prog.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function BeneficiaryStats({ programs }: { programs: ProgramImpact[] }) {
  const totalBeneficiaries = programs.reduce((s, p) => s + p.beneficiaries, 0);

  return (
    <div className="rounded-xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] p-6">
      <h3 className="mb-6 text-lg font-bold text-[var(--kindonar-color-neutral-900)]">
        Beneficiary Overview
      </h3>
      <div className="mb-4 flex h-48 items-center justify-center">
        <div className="relative h-40 w-40">
          <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36" aria-hidden="true">
            {programs.map((prog, idx) => {
              const offset = programs
                .slice(0, idx)
                .reduce((s, p) => s + (p.beneficiaries / totalBeneficiaries) * 100, 0);
              const percent = (prog.beneficiaries / totalBeneficiaries) * 100;
              const circumference = 2 * Math.PI * 15.915;
              const dash = (percent / 100) * circumference;
              const gap = circumference - dash;
              return (
                <circle
                  key={prog.id}
                  cx="18"
                  cy="18"
                  r="15.915"
                  fill="none"
                  stroke={prog.color}
                  strokeWidth="3"
                  strokeDasharray={`${dash} ${gap}`}
                  strokeDashoffset={-((offset / 100) * circumference)}
                />
              );
            })}
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-2xl font-bold text-[var(--kindonar-color-neutral-900)]">
                {totalBeneficiaries.toLocaleString('en-US')}
              </p>
              <p className="text-xs text-[var(--kindonar-color-neutral-500)]">Total</p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        {programs.map((prog) => (
          <div key={prog.id} className="flex items-center gap-2">
            <span
              className="h-3 w-3 shrink-0 rounded-full"
              style={{ backgroundColor: prog.color }}
            />
            <span className="flex-1 text-sm text-[var(--kindonar-color-neutral-700)]">
              {prog.name}
            </span>
            <span className="text-sm font-medium text-[var(--kindonar-color-neutral-900)]">
              {Math.round((prog.beneficiaries / totalBeneficiaries) * 100)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function GeographicReach({ countries }: { countries: CountryReach[] }) {
  return (
    <div className="rounded-xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] p-6">
      <h3 className="mb-6 text-lg font-bold text-[var(--kindonar-color-neutral-900)]">
        Geographic Reach
      </h3>
      <div className="mb-4 flex h-48 items-center justify-center rounded-lg bg-[var(--kindonar-surface-interactive)]">
        <div className="text-center">
          <Globe className="mx-auto h-12 w-12 text-[var(--kindonar-color-primary-300)]" />
          <p className="mt-2 text-sm text-[var(--kindonar-color-neutral-500)]">
            {countries.length} countries
          </p>
        </div>
      </div>
      <div className="max-h-48 space-y-2 overflow-y-auto">
        {countries.map((c) => (
          <div
            key={c.country}
            className="flex items-center justify-between rounded-md px-2 py-1.5 transition-colors hover:bg-[var(--kindonar-surface-interactive)]"
          >
            <div className="flex items-center gap-2">
              {c.flag && <span className="text-lg">{c.flag}</span>}
              <span className="text-sm font-medium text-[var(--kindonar-color-neutral-700)]">
                {c.country}
              </span>
            </div>
            <span className="text-xs text-[var(--kindonar-color-neutral-500)]">
              {c.beneficiaries.toLocaleString('en-US')} beneficiaries
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function YearComparisonTable({ years }: { years: YearComparison[] }) {
  const sorted = [...years].sort((a, b) => a.year - b.year);
  const maxBeneficiaries = Math.max(...years.map((y) => y.beneficiaries), 1);

  return (
    <div className="rounded-xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] p-6">
      <h3 className="mb-6 text-lg font-bold text-[var(--kindonar-color-neutral-900)]">
        Year-over-Year Comparison
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-[var(--kindonar-border-default)]">
              <th className="pr-4 pb-3 font-semibold text-[var(--kindonar-color-neutral-700)]">
                Year
              </th>
              <th className="pr-4 pb-3 font-semibold text-[var(--kindonar-color-neutral-700)]">
                Beneficiaries
              </th>
              <th className="pr-4 pb-3 font-semibold text-[var(--kindonar-color-neutral-700)]">
                Programs
              </th>
              <th className="pb-3 font-semibold text-[var(--kindonar-color-neutral-700)]">
                Revenue
              </th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((y, idx) => {
              const prev = sorted[idx - 1];
              const benChange = prev
                ? (((y.beneficiaries - prev.beneficiaries) / prev.beneficiaries) * 100).toFixed(1)
                : null;
              const progChange = prev
                ? (((y.programs - prev.programs) / prev.programs) * 100).toFixed(1)
                : null;
              return (
                <motion.tr
                  key={y.year}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="border-b border-[var(--kindonar-border-default)] last:border-0"
                >
                  <td className="py-3 pr-4 font-medium text-[var(--kindonar-color-neutral-900)]">
                    {y.year}
                  </td>
                  <td className="py-3 pr-4">
                    <div className="flex items-center gap-2">
                      <span>{y.beneficiaries.toLocaleString('en-US')}</span>
                      {benChange && (
                        <span
                          className={cn(
                            'flex items-center gap-0.5 text-xs',
                            Number(benChange) >= 0
                              ? 'text-[var(--kindonar-color-success-600)]'
                              : 'text-[var(--kindonar-color-error-600)]',
                          )}
                        >
                          {Number(benChange) >= 0 ? (
                            <ArrowUp className="h-3 w-3" />
                          ) : (
                            <ArrowDown className="h-3 w-3" />
                          )}
                          {Math.abs(Number(benChange))}%
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-3 pr-4">
                    <div className="flex items-center gap-2">
                      <span>{y.programs}</span>
                      {progChange && (
                        <span
                          className={cn(
                            'flex items-center gap-0.5 text-xs',
                            Number(progChange) >= 0
                              ? 'text-[var(--kindonar-color-success-600)]'
                              : 'text-[var(--kindonar-color-error-600)]',
                          )}
                        >
                          {Number(progChange) >= 0 ? (
                            <ArrowUp className="h-3 w-3" />
                          ) : (
                            <ArrowDown className="h-3 w-3" />
                          )}
                          {Math.abs(Number(progChange))}%
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-3 font-medium">${y.revenue.toLocaleString('en-US')}</td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="mt-6">
        <p className="mb-2 text-sm font-medium text-[var(--kindonar-color-neutral-700)]">
          Beneficiary Growth
        </p>
        <div className="flex items-end gap-1">
          {sorted.map((y) => (
            <div key={y.year} className="flex flex-1 flex-col items-center">
              <motion.div
                className="w-full rounded-t-sm"
                style={{
                  backgroundColor: 'var(--kindonar-color-primary-500)',
                  height: `${(y.beneficiaries / maxBeneficiaries) * 120}px`,
                }}
                initial={{ height: 0 }}
                whileInView={{ height: `${(y.beneficiaries / maxBeneficiaries) * 120}px` }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
              <span className="mt-1 text-xs text-[var(--kindonar-color-neutral-500)]">
                {y.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
