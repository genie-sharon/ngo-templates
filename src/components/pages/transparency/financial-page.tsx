'use client';

import { motion } from 'framer-motion';
import { Download, TrendingUp, TrendingDown, DollarSign, PieChart, Filter } from 'lucide-react';
import { useState } from 'react';

import { PageHero, PageLayout } from '@/components/pages/blocks/page-hero';
import type { PageHeroConfig } from '@/components/pages/page-config.types';
import { Button } from '@/components/ui/atoms/button';
import { cn } from '@/lib/utils';

export interface YearlyReport {
  year: number;
  revenue: number;
  expenses: number;
  programsExpenses: number;
  administrativeExpenses: number;
  fundraisingExpenses: number;
  pdfUrl?: string;
  summaryUrl?: string;
}

export interface AllocationCategory {
  category: string;
  percentage: number;
  amount: number;
  color: string;
}

export interface BreakdownItem {
  label: string;
  value: number;
  percentage: number;
  change: number;
}

export interface FinancialConfig {
  hero: PageHeroConfig;
  yearlyReports: YearlyReport[];
  allocationCategories: AllocationCategory[];
  breakdown: BreakdownItem[];
  currencies?: string;
}

export function FinancialPage({ config }: { config: FinancialConfig }) {
  const { yearlyReports, allocationCategories, breakdown } = config;
  const currentYear = Math.max(...yearlyReports.map((r) => r.year));
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const selectedReport = yearlyReports.find((r) => r.year === selectedYear) || yearlyReports[0];
  const years = [...new Set(yearlyReports.map((r) => r.year))].sort((a, b) => b - a);

  const totalRevenue = selectedReport ? selectedReport.revenue : 0;
  const totalExpenses = selectedReport ? selectedReport.expenses : 0;
  const programsPercentage = selectedReport
    ? Math.round((selectedReport.programsExpenses / selectedReport.expenses) * 100)
    : 0;
  const overheadPercentage = selectedReport
    ? Math.round(
        ((selectedReport.administrativeExpenses + selectedReport.fundraisingExpenses) /
          selectedReport.expenses) *
          100,
      )
    : 0;
  const surplus = totalRevenue - totalExpenses;

  return (
    <div>
      <PageHero config={config.hero} />

      <PageLayout layout="wide">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-[var(--kindonar-color-neutral-500)]" />
            <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Select year">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={cn(
                    'rounded-lg px-4 py-2 text-sm font-medium transition-all',
                    selectedYear === year
                      ? 'bg-[var(--kindonar-color-primary-500)] text-white shadow-sm'
                      : 'border border-[var(--kindonar-border-default)] text-[var(--kindonar-color-neutral-700)] hover:border-[var(--kindonar-color-primary-300)] hover:text-[var(--kindonar-color-primary-600)]',
                  )}
                  role="radio"
                  aria-checked={selectedYear === year}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            {selectedReport?.pdfUrl && (
              <Button variant="outline" size="sm" asChild>
                <a href={selectedReport.pdfUrl} download>
                  <Download className="h-4 w-4" />
                  Full Report
                </a>
              </Button>
            )}
            {selectedReport?.summaryUrl && (
              <Button variant="outline" size="sm" asChild>
                <a href={selectedReport.summaryUrl} download>
                  <Download className="h-4 w-4" />
                  Summary
                </a>
              </Button>
            )}
          </div>
        </div>

        <div className="mb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <FinancialStatCard
            icon={<DollarSign className="h-5 w-5" />}
            label="Total Revenue"
            value={`$${(totalRevenue / 1000000).toFixed(1)}M`}
            trend="up"
          />
          <FinancialStatCard
            icon={<TrendingDown className="h-5 w-5" />}
            label="Total Expenses"
            value={`$${(totalExpenses / 1000000).toFixed(1)}M`}
            trend={surplus >= 0 ? 'neutral' : 'down'}
          />
          <FinancialStatCard
            icon={<PieChart className="h-5 w-5" />}
            label="Programs Spending"
            value={`${programsPercentage}%`}
            trend="up"
          />
          <FinancialStatCard
            icon={<TrendingUp className="h-5 w-5" />}
            label="Overhead Ratio"
            value={`${overheadPercentage}%`}
            trend={overheadPercentage <= 25 ? 'up' : 'down'}
          />
        </div>

        <div className="mb-10 grid gap-8 lg:grid-cols-2">
          <RevenueExpensesChart revenue={totalRevenue} expenses={totalExpenses} surplus={surplus} />
          <AllocationDonut categories={allocationCategories} />
        </div>

        <div>
          <h2 className="mb-6 text-xl font-bold text-[var(--kindonar-color-neutral-900)]">
            Allocation Breakdown
          </h2>
          <div className="space-y-4">
            {breakdown.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-sm font-medium text-[var(--kindonar-color-neutral-700)]">
                    {item.label}
                  </span>
                  <span className="text-sm text-[var(--kindonar-color-neutral-500)]">
                    {item.percentage}% (${item.value.toLocaleString('en-US')})
                  </span>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-[var(--kindonar-surface-interactive)]">
                  <motion.div
                    className="h-full rounded-full bg-[var(--kindonar-color-primary-500)]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.1, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {selectedReport?.pdfUrl && (
          <div className="mt-10 rounded-xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] p-6">
            <h2 className="mb-4 text-lg font-bold text-[var(--kindonar-color-neutral-900)]">
              Download Reports
            </h2>
            <div className="flex flex-wrap gap-3">
              {yearlyReports
                .filter((r) => r.pdfUrl)
                .map((r) => (
                  <Button key={r.year} variant="outline" size="sm" asChild>
                    <a href={r.pdfUrl!} download>
                      <Download className="h-4 w-4" />
                      {r.year} Report
                    </a>
                  </Button>
                ))}
            </div>
          </div>
        )}
      </PageLayout>
    </div>
  );
}

function FinancialStatCard({
  icon,
  label,
  value,
  trend,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend: 'up' | 'down' | 'neutral';
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="rounded-xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] p-5 shadow-sm"
    >
      <div className="mb-3 flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--kindonar-color-primary-100)] text-[var(--kindonar-color-primary-600)]">
          {icon}
        </div>
        <span
          className={cn(
            'flex h-6 w-6 items-center justify-center rounded-full',
            trend === 'up' &&
              'bg-[var(--kindonar-color-success-100)] text-[var(--kindonar-color-success-600)]',
            trend === 'down' &&
              'bg-[var(--kindonar-color-error-100)] text-[var(--kindonar-color-error-600)]',
            trend === 'neutral' &&
              'bg-[var(--kindonar-surface-interactive)] text-[var(--kindonar-color-neutral-500)]',
          )}
        >
          {trend === 'up' ? (
            <TrendingUp className="h-3.5 w-3.5" />
          ) : trend === 'down' ? (
            <TrendingDown className="h-3.5 w-3.5" />
          ) : null}
        </span>
      </div>
      <p className="text-sm text-[var(--kindonar-color-neutral-500)]">{label}</p>
      <p className="mt-1 text-2xl font-bold text-[var(--kindonar-color-neutral-900)]">{value}</p>
    </motion.div>
  );
}

function RevenueExpensesChart({
  revenue,
  expenses,
  surplus,
}: {
  revenue: number;
  expenses: number;
  surplus: number;
}) {
  const maxVal = Math.max(revenue, expenses);
  const revenuePercent = (revenue / maxVal) * 100;
  const expensesPercent = (expenses / maxVal) * 100;

  return (
    <div className="rounded-xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] p-6">
      <h3 className="mb-6 text-lg font-bold text-[var(--kindonar-color-neutral-900)]">
        Revenue vs Expenses
      </h3>
      <div className="space-y-6">
        <div>
          <div className="mb-1 flex items-center justify-between">
            <span className="text-sm font-medium text-[var(--kindonar-color-neutral-700)]">
              Revenue
            </span>
            <span className="text-sm text-[var(--kindonar-color-neutral-500)]">
              ${revenue.toLocaleString('en-US')}
            </span>
          </div>
          <div className="h-4 w-full overflow-hidden rounded-full bg-[var(--kindonar-surface-interactive)]">
            <motion.div
              className="h-full rounded-full bg-[var(--kindonar-color-success-500)]"
              initial={{ width: 0 }}
              whileInView={{ width: `${revenuePercent}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          </div>
        </div>
        <div>
          <div className="mb-1 flex items-center justify-between">
            <span className="text-sm font-medium text-[var(--kindonar-color-neutral-700)]">
              Expenses
            </span>
            <span className="text-sm text-[var(--kindonar-color-neutral-500)]">
              ${expenses.toLocaleString('en-US')}
            </span>
          </div>
          <div className="h-4 w-full overflow-hidden rounded-full bg-[var(--kindonar-surface-interactive)]">
            <motion.div
              className="h-full rounded-full bg-[var(--kindonar-color-error-500)]"
              initial={{ width: 0 }}
              whileInView={{ width: `${expensesPercent}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          </div>
        </div>
        <div className="rounded-lg bg-[var(--kindonar-surface-interactive)] p-4 text-center">
          <p className="text-sm text-[var(--kindonar-color-neutral-500)]">
            {surplus >= 0 ? 'Surplus' : 'Deficit'}
          </p>
          <p
            className={cn(
              'text-2xl font-bold',
              surplus >= 0
                ? 'text-[var(--kindonar-color-success-600)]'
                : 'text-[var(--kindonar-color-error-600)]',
            )}
          >
            ${Math.abs(surplus).toLocaleString('en-US')}
          </p>
        </div>
      </div>
    </div>
  );
}

function AllocationDonut({ categories }: { categories: AllocationCategory[] }) {
  const donutStyle =
    categories.length > 0
      ? `conic-gradient(${categories
          .map((c, i) => {
            const start = categories.slice(0, i).reduce((s, cc) => s + cc.percentage, 0);
            const end = start + c.percentage;
            return `${c.color} ${start}% ${end}%`;
          })
          .join(', ')})`
      : 'none';

  return (
    <div className="rounded-xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] p-6">
      <h3 className="mb-6 text-lg font-bold text-[var(--kindonar-color-neutral-900)]">
        Allocation by Category
      </h3>
      <div className="flex flex-col items-center gap-6 sm:flex-row">
        <div
          className="h-40 w-40 shrink-0 rounded-full shadow-sm"
          style={{ background: donutStyle }}
          role="img"
          aria-label={`Allocation breakdown: ${categories.map((c) => `${c.category} ${c.percentage}%`).join(', ')}`}
        />
        <div className="flex-1 space-y-3">
          {categories.map((cat) => (
            <div key={cat.category} className="flex items-center gap-3">
              <span
                className="h-3 w-3 shrink-0 rounded-full"
                style={{ backgroundColor: cat.color }}
                aria-hidden="true"
              />
              <span className="flex-1 text-sm text-[var(--kindonar-color-neutral-700)]">
                {cat.category}
              </span>
              <span className="text-sm font-medium text-[var(--kindonar-color-neutral-900)]">
                {cat.percentage}%
              </span>
              <span className="text-sm text-[var(--kindonar-color-neutral-500)]">
                ${cat.amount.toLocaleString('en-US')}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
