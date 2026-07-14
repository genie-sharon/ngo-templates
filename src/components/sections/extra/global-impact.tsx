'use client';

import { motion, useInView } from 'framer-motion';
import {
  Globe,
  Users,
  Building2,
  Heart,
  TreePine,
  Droplets,
  MapPin,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import dynamic from 'next/dynamic';
import { useMemo, useRef } from 'react';

import { WorldMapSkeleton } from '@/components/maps/world-map-skeleton';
import { cn } from '@/lib/utils';

import { SectionHeadingBlock, staggerItem } from '../motion';
import type { SectionConfig } from '../section-config.types';

const WorldMap = dynamic(
  () => import('@/components/maps/world-map-client').then((m) => m.WorldMapClient),
  {
    ssr: false,
    loading: () => <WorldMapSkeleton className="aspect-[900/500]" />,
  },
);

export interface GlobalStat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon?: React.ReactNode;
}

export interface CountryPresence {
  country: string;
  region: string;
  projects: number;
  peopleReached: number;
}

export interface GlobalImpactSectionProps {
  config: SectionConfig;
  stats: GlobalStat[];
  countries: CountryPresence[];
  totalCountries?: number;
  totalProjects?: number;
  totalPeople?: number;
  className?: string;
}

const defaultIcons: Record<string, React.ReactNode> = {
  countries: <Globe size={22} />,
  people: <Users size={22} />,
  projects: <Building2 size={22} />,
  environment: <TreePine size={22} />,
  water: <Droplets size={22} />,
  health: <Heart size={22} />,
};

function CountUp({ value, suffix, prefix }: { value: number; suffix?: string; prefix?: string }) {
  return (
    <span>
      {prefix}
      {value.toLocaleString('en-US')}
      {suffix}
    </span>
  );
}

function AnimatedStatCard({ stat, index }: { stat: GlobalStat; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const maxValue = 100;
  const progress = Math.min((stat.value / maxValue) * 100, 100);

  const accentColors = [
    'bg-blue-500',
    'bg-emerald-500',
    'bg-violet-500',
    'bg-amber-500',
    'bg-rose-500',
  ];

  const barColor = accentColors[index % accentColors.length];

  return (
    <motion.div
      ref={ref}
      variants={staggerItem}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-xl border border-gray-200/80 bg-white p-5 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_40px_-8px_rgba(0,0,0,0.12)]"
    >
      <div className="flex items-center gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
          {stat.icon ?? defaultIcons[stat.label.toLowerCase()] ?? <Globe size={22} />}
        </span>
        <div className="min-w-0 flex-1">
          <div className="text-xl font-bold text-gray-900 transition-all duration-300 md:text-2xl">
            {isInView ? (
              <CountUp value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
            ) : (
              <span>
                {stat.prefix}0{stat.suffix}
              </span>
            )}
          </div>
          <p className="text-sm text-gray-500">{stat.label}</p>
        </div>
      </div>
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${Math.min(progress, 100)}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
          className={cn('h-full rounded-full', barColor)}
        />
      </div>
    </motion.div>
  );
}

export function GlobalImpactSection({
  config,
  stats,
  countries,
  totalCountries,
  totalProjects,
  totalPeople,
  className,
}: GlobalImpactSectionProps) {
  if (!config.visible) return null;

  const safeStats = Array.isArray(stats) ? stats : [];
  const safeCountries = Array.isArray(countries) ? countries : [];
  const countryCount = totalCountries ?? safeCountries.length;
  const projectCount = totalProjects ?? safeCountries.reduce((s, c) => s + c.projects, 0);
  const peopleCount = totalPeople ?? safeCountries.reduce((s, c) => s + c.peopleReached, 0);

  const topCountries = useMemo(
    () => [...safeCountries].sort((a, b) => b.peopleReached - a.peopleReached).slice(0, 4),
    [safeCountries],
  );

  return (
    <section
      id={config.id}
      className={cn(
        'py-16 md:py-20 lg:py-24',
        'bg-gradient-to-b from-[#F8FBFF] to-[#F1F5F9]',
        className,
      )}
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeadingBlock heading={config.heading} theme="light" />

        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-[0_10px_40px_-8px_rgba(0,0,0,0.08)]">
              <div className="p-1 sm:p-2">
                <WorldMap countries={safeCountries} />
              </div>

              <div className="grid grid-cols-3 divide-x divide-gray-100 border-t border-gray-100">
                {[
                  { label: 'Countries', value: countryCount, suffix: '+', color: 'text-blue-600' },
                  {
                    label: 'Projects',
                    value: projectCount.toLocaleString('en-US'),
                    suffix: '+',
                    color: 'text-emerald-600',
                  },
                  {
                    label: 'People Reached',
                    value:
                      peopleCount >= 1000000
                        ? `${(peopleCount / 1000000).toFixed(1)}M`
                        : peopleCount.toLocaleString('en-US'),
                    suffix: '+',
                    color: 'text-violet-600',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="px-4 py-4 text-center transition-colors hover:bg-gray-50/50 md:px-6 md:py-5"
                  >
                    <div className={cn('text-xl font-bold md:text-2xl lg:text-3xl', item.color)}>
                      {item.value}
                      {item.suffix}
                    </div>
                    <p className="mt-0.5 text-xs text-gray-500 md:text-sm">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold tracking-wider text-gray-500 uppercase">
                <AwardIcon />
                Top Impact Countries
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {topCountries.map((c, i) => {
                  const cardColors: Array<{ border: string; bg: string; accent: string }> = [
                    { border: 'border-blue-200', bg: 'bg-blue-50/50', accent: 'text-blue-600' },
                    {
                      border: 'border-emerald-200',
                      bg: 'bg-emerald-50/50',
                      accent: 'text-emerald-600',
                    },
                    {
                      border: 'border-violet-200',
                      bg: 'bg-violet-50/50',
                      accent: 'text-violet-600',
                    },
                    { border: 'border-amber-200', bg: 'bg-amber-50/50', accent: 'text-amber-600' },
                  ] as const;
                  const color = cardColors[i % cardColors.length]!;
                  return (
                    <motion.div
                      key={c.country}
                      variants={staggerItem}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className={cn(
                        'group relative overflow-hidden rounded-xl border bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg',
                        color.border,
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={cn(
                            'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-lg font-bold',
                            color.accent,
                            color.bg,
                          )}
                        >
                          {c.country.slice(0, 2).toUpperCase()}
                        </span>
                        <div className="min-w-0 flex-1">
                          <h4 className="truncate text-sm font-semibold text-gray-900">
                            {c.country}
                          </h4>
                          <p className="text-xs text-gray-500">{c.region}</p>
                        </div>
                      </div>
                      <div className="mt-3 space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-500">Projects</span>
                          <span className={cn('font-semibold', color.accent)}>
                            {c.projects.toLocaleString('en-US')}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-500">People Reached</span>
                          <span className={cn('font-semibold', color.accent)}>
                            {c.peopleReached >= 1000000
                              ? `${(c.peopleReached / 1000000).toFixed(1)}M`
                              : c.peopleReached >= 1000
                                ? `${(c.peopleReached / 1000).toFixed(0)}K`
                                : c.peopleReached.toLocaleString('en-US')}
                          </span>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center gap-1 text-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className={color.accent}>View details</span>
                        <ChevronRight size={12} className={color.accent} />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="space-y-4 lg:col-span-4">
            <div className="flex items-center gap-2 rounded-xl border border-gray-200/80 bg-white px-4 py-3 shadow-sm">
              <Sparkles size={16} className="shrink-0 text-amber-500" />
              <span className="text-xs font-medium text-gray-500">
                Global Impact Dashboard • Live Statistics
              </span>
            </div>

            {safeStats.map((stat, idx) => (
              <AnimatedStatCard key={idx} stat={stat} index={idx} />
            ))}

            <motion.div
              variants={staggerItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-xl border border-gray-200/80 bg-white p-5 shadow-sm"
            >
              <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold tracking-wider text-gray-500 uppercase">
                <MapPin size={14} />
                Country Presence
              </h4>
              <div className="max-h-48 space-y-1 overflow-y-auto pr-1">
                {safeCountries.map((c, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors hover:bg-gray-50"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <span
                        className={cn(
                          'flex h-2 w-2 shrink-0 rounded-full',
                          i < 3 ? 'bg-emerald-500' : i < 6 ? 'bg-blue-500' : 'bg-gray-300',
                        )}
                        aria-hidden="true"
                      />
                      <span className="truncate font-medium text-gray-900">{c.country}</span>
                      <span className="hidden text-xs text-gray-400 sm:inline">{c.region}</span>
                    </div>
                    <div className="flex shrink-0 gap-4 text-xs">
                      <span className="text-gray-500">{c.projects}p</span>
                      <span className="font-medium text-gray-700">
                        {c.peopleReached >= 1000000
                          ? `${(c.peopleReached / 1000000).toFixed(1)}M`
                          : c.peopleReached >= 1000
                            ? `${(c.peopleReached / 1000).toFixed(0)}K`
                            : c.peopleReached.toLocaleString('en-US')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AwardIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}
