'use client';

import { motion } from 'framer-motion';
import { Globe, Users, Building2, TreePine, Droplets, Heart } from 'lucide-react';
import { useMemo } from 'react';

import { cn } from '@/lib/utils';

import { MotionSection, SectionHeadingBlock, staggerItem } from '../motion';
import type { SectionConfig } from '../section-config.types';

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

const continentCoordinates = [
  { x: 80, y: 120, r: 40, label: 'Africa', color: 'var(--kindonar-color-secondary-500)' },
  { x: 130, y: 80, r: 35, label: 'Europe', color: 'var(--kindonar-color-primary-500)' },
  { x: 210, y: 70, r: 50, label: 'Asia', color: 'var(--kindonar-color-secondary-600)' },
  { x: 330, y: 80, r: 30, label: 'N. America', color: 'var(--kindonar-color-primary-400)' },
  { x: 320, y: 130, r: 20, label: 'S. America', color: 'var(--kindonar-color-secondary-400)' },
  { x: 180, y: 180, r: 25, label: 'Oceania', color: 'var(--kindonar-color-accent-500)' },
];

const defaultIcons: Record<string, React.ReactNode> = {
  countries: <Globe size={24} />,
  people: <Users size={24} />,
  projects: <Building2 size={24} />,
  environment: <TreePine size={24} />,
  water: <Droplets size={24} />,
  health: <Heart size={24} />,
};

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

  const isDark =
    config.theme === 'dark' ||
    config.theme === 'primary' ||
    config.theme === 'secondary' ||
    config.theme === 'gradient';

  const safeStats = Array.isArray(stats) ? stats : [];
  const safeCountries = Array.isArray(countries) ? countries : [];
  const countryCount = totalCountries ?? safeCountries.length;
  const projectCount = totalProjects ?? safeCountries.reduce((s, c) => s + c.projects, 0);
  const peopleCount = totalPeople ?? safeCountries.reduce((s, c) => s + c.peopleReached, 0);

  const glowCircles = useMemo(
    () =>
      continentCoordinates.map((c, i) => (
        <motion.circle
          key={i}
          cx={c.x}
          cy={c.y}
          r={c.r}
          fill="none"
          stroke={c.color}
          strokeWidth="0.5"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.15, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: i * 0.2, ease: 'easeOut' }}
        />
      )),
    [],
  );

  return (
    <section
      id={config.id}
      className={cn(
        'py-16 md:py-20 lg:py-24',
        isDark
          ? 'relative overflow-hidden bg-[var(--kindonar-color-neutral-950)] text-white'
          : 'bg-[var(--kindonar-surface-primary)]',
        className,
      )}
    >
      {isDark && (
        <>
          <div
            className="bg-gradient-radial pointer-events-none absolute inset-0 from-[var(--kindonar-color-primary-500)]/5 via-transparent to-transparent"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[var(--kindonar-color-secondary-500)]/10 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-[var(--kindonar-color-primary-500)]/10 blur-3xl"
            aria-hidden="true"
          />
        </>
      )}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeadingBlock heading={config.heading} theme={config.theme} />
        <MotionSection animation={config.animation}>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3 lg:pr-8">
              <div
                className={cn(
                  'overflow-hidden rounded-2xl border p-6 md:p-8',
                  isDark
                    ? 'border-white/10 bg-white/5'
                    : 'border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] shadow-sm',
                )}
              >
                <div className="relative w-full" style={{ paddingBottom: '60%' }}>
                  <svg
                    viewBox="0 0 500 300"
                    className="absolute inset-0 h-full w-full"
                    aria-hidden="true"
                    role="img"
                  >
                    <defs>
                      <radialGradient id="glow-grad" cx="50%" cy="50%" r="50%">
                        <stop
                          offset="0%"
                          stopColor="var(--kindonar-color-primary-500)"
                          stopOpacity="0.3"
                        />
                        <stop
                          offset="100%"
                          stopColor="var(--kindonar-color-primary-500)"
                          stopOpacity="0"
                        />
                      </radialGradient>
                    </defs>
                    <rect width="500" height="300" fill="none" />
                    {glowCircles}
                    {continentCoordinates.map((c, i) => (
                      <motion.g
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.3 }}
                      >
                        <circle cx={c.x} cy={c.y} r={4} fill={c.color} />
                        <motion.circle
                          cx={c.x}
                          cy={c.y}
                          r={8}
                          fill={c.color}
                          initial={{ opacity: 0.4 }}
                          animate={{ opacity: [0.4, 0.1, 0.4] }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        />
                        <text
                          x={c.x}
                          y={c.y + c.r + 12}
                          textAnchor="middle"
                          fill={
                            isDark ? 'rgba(255,255,255,0.5)' : 'var(--kindonar-color-neutral-500)'
                          }
                          fontSize="7"
                          fontFamily="Inter, sans-serif"
                        >
                          {c.label}
                        </text>
                      </motion.g>
                    ))}
                    <motion.g
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 0.15 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2.5, ease: 'easeInOut' }}
                    >
                      {continentCoordinates.slice(0, -1).map((c, i) => {
                        const next = continentCoordinates[i + 1];
                        return (
                          <line
                            key={i}
                            x1={c.x}
                            y1={c.y}
                            x2={next!.x}
                            y2={next!.y}
                            stroke="var(--kindonar-color-primary-500)"
                            strokeWidth="0.5"
                            strokeDasharray="2 2"
                          />
                        );
                      })}
                      <line
                        x1={continentCoordinates[continentCoordinates.length - 1]!.x}
                        y1={continentCoordinates[continentCoordinates.length - 1]!.y}
                        x2={continentCoordinates[0]!.x}
                        y2={continentCoordinates[0]!.y}
                        stroke="var(--kindonar-color-primary-500)"
                        strokeWidth="0.5"
                        strokeDasharray="2 2"
                      />
                    </motion.g>
                  </svg>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div
                    className={cn(
                      'rounded-xl border p-4',
                      isDark
                        ? 'border-white/5 bg-white/[0.03]'
                        : 'border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-interactive)]',
                    )}
                  >
                    <div
                      className={cn(
                        'text-2xl font-bold md:text-3xl',
                        isDark ? 'text-white' : 'text-[var(--kindonar-color-neutral-900)]',
                      )}
                    >
                      {countryCount}
                    </div>
                    <p
                      className={cn(
                        'mt-1 text-xs',
                        isDark ? 'text-white/60' : 'text-[var(--kindonar-color-neutral-500)]',
                      )}
                    >
                      Countries
                    </p>
                  </div>
                  <div
                    className={cn(
                      'rounded-xl border p-4',
                      isDark
                        ? 'border-white/5 bg-white/[0.03]'
                        : 'border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-interactive)]',
                    )}
                  >
                    <div
                      className={cn(
                        'text-2xl font-bold md:text-3xl',
                        isDark ? 'text-white' : 'text-[var(--kindonar-color-neutral-900)]',
                      )}
                    >
                      {projectCount.toLocaleString('en-US')}+
                    </div>
                    <p
                      className={cn(
                        'mt-1 text-xs',
                        isDark ? 'text-white/60' : 'text-[var(--kindonar-color-neutral-500)]',
                      )}
                    >
                      Projects
                    </p>
                  </div>
                  <div
                    className={cn(
                      'rounded-xl border p-4',
                      isDark
                        ? 'border-white/5 bg-white/[0.03]'
                        : 'border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-interactive)]',
                    )}
                  >
                    <div
                      className={cn(
                        'text-2xl font-bold md:text-3xl',
                        isDark ? 'text-white' : 'text-[var(--kindonar-color-neutral-900)]',
                      )}
                    >
                      {peopleCount >= 1000000
                        ? `${(peopleCount / 1000000).toFixed(1)}M`
                        : peopleCount.toLocaleString('en-US')}
                      +
                    </div>
                    <p
                      className={cn(
                        'mt-1 text-xs',
                        isDark ? 'text-white/60' : 'text-[var(--kindonar-color-neutral-500)]',
                      )}
                    >
                      People Reached
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4 lg:col-span-2">
              {safeStats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={staggerItem}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={cn(
                    'flex items-center gap-4 rounded-xl border p-5 transition-colors',
                    isDark
                      ? 'border-white/10 bg-white/5 hover:bg-white/10'
                      : 'border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] hover:bg-[var(--kindonar-surface-interactive)]',
                  )}
                >
                  <span
                    className={cn(
                      'flex h-12 w-12 shrink-0 items-center justify-center rounded-xl',
                      isDark
                        ? 'bg-white/10 text-white'
                        : 'bg-[var(--kindonar-color-primary-100)] text-[var(--kindonar-color-primary-600)]',
                    )}
                  >
                    {stat.icon ?? defaultIcons[stat.label.toLowerCase()] ?? <Globe size={22} />}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div
                      className={cn(
                        'text-xl font-bold md:text-2xl',
                        isDark ? 'text-white' : 'text-[var(--kindonar-color-neutral-900)]',
                      )}
                    >
                      {stat.prefix}
                      {stat.value.toLocaleString('en-US')}
                      {stat.suffix}
                    </div>
                    <p
                      className={cn(
                        'text-sm',
                        isDark ? 'text-white/60' : 'text-[var(--kindonar-color-neutral-500)]',
                      )}
                    >
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
              <motion.div
                variants={staggerItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={cn(
                  'rounded-xl border p-5 transition-colors',
                  isDark
                    ? 'border-white/10 bg-white/5'
                    : 'border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)]',
                )}
              >
                <h4
                  className={cn(
                    'mb-3 text-sm font-semibold tracking-wider uppercase',
                    isDark ? 'text-white/70' : 'text-[var(--kindonar-color-neutral-600)]',
                  )}
                >
                  Country Presence
                </h4>
                <div className="max-h-48 space-y-2 overflow-y-auto">
                  {safeCountries.map((c, i) => (
                    <div
                      key={i}
                      className={cn(
                        'flex items-center justify-between rounded-lg px-3 py-2 text-sm',
                        isDark
                          ? 'hover:bg-white/5'
                          : 'hover:bg-[var(--kindonar-surface-interactive)]',
                      )}
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <span
                          className={cn(
                            'flex h-2 w-2 shrink-0 rounded-full',
                            i < 5
                              ? 'bg-[var(--kindonar-color-secondary-500)]'
                              : 'bg-[var(--kindonar-color-primary-300)]',
                          )}
                          aria-hidden="true"
                        />
                        <span
                          className={cn(
                            'truncate font-medium',
                            isDark ? 'text-white' : 'text-[var(--kindonar-color-neutral-900)]',
                          )}
                        >
                          {c.country}
                        </span>
                        <span
                          className={cn(
                            'hidden text-xs sm:inline',
                            isDark ? 'text-white/40' : 'text-[var(--kindonar-color-neutral-400)]',
                          )}
                        >
                          {c.region}
                        </span>
                      </div>
                      <div className="flex shrink-0 gap-4 text-xs">
                        <span
                          className={
                            isDark ? 'text-white/60' : 'text-[var(--kindonar-color-neutral-500)]'
                          }
                        >
                          {c.projects} projects
                        </span>
                        <span
                          className={cn(
                            'font-medium',
                            isDark ? 'text-white/80' : 'text-[var(--kindonar-color-neutral-700)]',
                          )}
                        >
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
        </MotionSection>
      </div>
    </section>
  );
}
