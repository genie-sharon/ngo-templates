'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { cn } from '@/lib/utils';

interface FeatureCardData {
  title: string;
  description: string;
  color: string;
  glowColor: string;
  borderColor: string;
  pills: { label: string }[];
  illustration: React.ReactNode;
}

function PremiumDesignIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-4">
      <div className="w-full max-w-[220px] space-y-3">
        <div className="flex items-center gap-1.5">
          <div className="h-2 w-2 rounded-full bg-red-400" />
          <div className="h-2 w-2 rounded-full bg-amber-400" />
          <div className="h-2 w-2 rounded-full bg-green-400" />
          <div className="ml-1 h-1.5 flex-1 rounded-full bg-white/10" />
        </div>
        <div className="grid grid-cols-4 gap-1.5">
          <div className="col-span-3 space-y-1.5">
            <div className="h-1.5 w-3/4 rounded bg-white/20" />
            <div className="h-1 w-1/2 rounded bg-white/10" />
          </div>
          <div className="flex items-center justify-center rounded-lg bg-white/5 p-1.5">
            <div className="h-4 w-4 rounded bg-gradient-to-br from-violet-400 to-fuchsia-400" />
          </div>
        </div>
        <div className="flex gap-1.5">
          {['#a855f7', '#3b82f6', '#10b981', '#f59e0b'].map((c) => (
            <div key={c} className="h-5 w-5 rounded-full" style={{ backgroundColor: c }} />
          ))}
        </div>
        <div className="space-y-1 rounded-lg border border-white/10 bg-white/5 p-2">
          <div className="h-2 w-3/4 rounded bg-white/20" />
          <div className="h-1.5 w-1/2 rounded bg-white/10" />
          <div className="mt-1 flex gap-1">
            <div className="h-3 flex-1 rounded bg-violet-500/40" />
            <div className="h-3 flex-1 rounded bg-white/10" />
          </div>
        </div>
      </div>
    </div>
  );
}

function PerformanceIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-4">
      <div className="flex w-full max-w-[220px] items-center gap-3">
        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center">
          <svg className="absolute inset-0 h-16 w-16 -rotate-90" viewBox="0 0 64 64">
            <circle
              cx="32"
              cy="32"
              r="28"
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="4"
            />
            <circle
              cx="32"
              cy="32"
              r="28"
              fill="none"
              stroke="url(#gaugeGrad)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={`${(95 / 100) * 176} 176`}
            />
            <defs>
              <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#34d399" />
              </linearGradient>
            </defs>
          </svg>
          <span className="text-sm font-extrabold text-white">95</span>
        </div>
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-1.5">
            <svg
              className="h-3.5 w-3.5 text-emerald-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-[9px] font-semibold text-emerald-400">98 Lighthouse</span>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <div className="h-1.5 flex-1 rounded-full bg-white/10">
                <div className="h-full w-11/12 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400" />
              </div>
              <span className="text-[7px] text-white/50">95</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-1.5 flex-1 rounded-full bg-white/10">
                <div className="h-full w-[93%] rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400" />
              </div>
              <span className="text-[7px] text-white/50">93</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AccessibilityIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-4">
      <div className="w-full max-w-[220px] space-y-2">
        <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-2">
          <div className="flex h-5 w-5 items-center justify-center rounded bg-blue-500/30">
            <svg
              className="h-3 w-3 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4m0 4h.01" />
            </svg>
          </div>
          <span className="text-[8px] font-medium text-blue-300">Screen Reader Ready</span>
        </div>
        <div className="space-y-1">
          {['Keyboard Navigation', 'ARIA Labels', 'Focus Management', 'Reduced Motion'].map(
            (item) => (
              <div key={item} className="flex items-center gap-1.5">
                <svg
                  className="h-2.5 w-2.5 shrink-0 text-emerald-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
                <span className="text-[7px] text-white/60">{item}</span>
              </div>
            ),
          )}
        </div>
        <div className="flex gap-1">
          {['AA', 'AAA', 'WCAG'].map((tag) => (
            <span
              key={tag}
              className="rounded bg-blue-500/20 px-1.5 py-0.5 text-[6px] font-bold text-blue-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function SEOIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-4">
      <div className="w-full max-w-[220px] space-y-2">
        <div className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 p-2">
          <svg
            className="h-3 w-3 shrink-0 text-orange-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <div className="h-2 flex-1 rounded bg-white/15" />
        </div>
        <div className="space-y-1.5">
          {['kindonar.org', 'kindonar.org/templates', 'kindonar.org/about'].map((url, i) => (
            <div key={url} className="flex items-center gap-1.5">
              <div
                className={cn(
                  'h-1.5 w-1.5 rounded-full',
                  i === 0 ? 'bg-orange-400' : 'bg-white/20',
                )}
              />
              <div className="flex-1">
                <div
                  className={cn(
                    'h-1.5 rounded',
                    i === 0 ? 'w-[85%] bg-white/25' : 'w-[60%] bg-white/10',
                  )}
                />
              </div>
              <div className="flex">
                {Array.from({ length: i === 0 ? 5 : 3 }).map((_, s) => (
                  <svg
                    key={s}
                    className={cn('h-2 w-2', i === 0 ? 'text-amber-400' : 'text-white/15')}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-1">
          {['#1 Result', 'Featured Snippet', '4.9 ★'].map((tag) => (
            <span
              key={tag}
              className="rounded bg-orange-500/15 px-1.5 py-0.5 text-[6px] font-semibold text-orange-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function AnalyticsIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-4">
      <div className="w-full max-w-[220px] space-y-2">
        <div className="grid grid-cols-3 gap-1">
          {['Visitors', 'Page Views', 'Bounce'].map((label, i) => (
            <div key={label} className="rounded border border-white/10 bg-white/5 p-1.5">
              <div className="text-[6px] text-white/40">{label}</div>
              <div
                className={cn('text-[9px] font-bold', i === 0 ? 'text-blue-400' : 'text-white/60')}
              >
                {['12.4K', '45.2K', '24%'][i]}
              </div>
            </div>
          ))}
        </div>
        <div className="relative h-10 overflow-hidden rounded border border-white/10 bg-white/5">
          <svg className="h-full w-full" viewBox="0 0 200 40" preserveAspectRatio="none">
            <path
              d="M0 35 Q 20 30 40 25 Q 60 10 80 20 Q 100 5 120 15 Q 140 8 160 12 Q 180 3 200 5"
              fill="none"
              stroke="url(#chartGrad)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient id="chartGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex justify-between">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, idx) => (
            <div key={day} className="flex flex-col items-center gap-0.5">
              <div
                className="w-2 rounded-t bg-blue-500/40"
                style={{ height: `${[8, 12, 6, 14, 10][idx]}px` }}
              />
              <span className="text-[5px] text-white/30">{day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ArchitectureIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-4">
      <div className="w-full max-w-[220px] space-y-2">
        <div className="flex gap-2">
          {[60, 45, 30].map((w) => (
            <div
              key={w}
              className="flex flex-1 flex-col items-center gap-1 rounded-lg border border-white/10 bg-white/5 p-2"
            >
              <div className="h-1 w-4 rounded bg-indigo-400/50" />
              <div className="h-1 w-3 rounded bg-white/20" />
              <div className="h-1 w-2 rounded bg-white/10" />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <div className="h-px flex-1 bg-white/10" />
          <svg
            className="h-3 w-3 text-indigo-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <div className="h-px flex-1 bg-white/10" />
        </div>
        <div className="flex gap-1">
          {['Hero', 'About', 'Programs', 'Contact'].map((label) => (
            <div
              key={label}
              className="flex-1 rounded border border-indigo-500/20 bg-indigo-500/10 px-1 py-1 text-center text-[5px] font-medium text-indigo-300"
            >
              {label}
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-white/10 bg-white/5 p-1.5 text-center">
          <span className="text-[7px] font-semibold text-indigo-300">40+ Reusable Components</span>
        </div>
      </div>
    </div>
  );
}

function CrowderaIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-4">
      <div className="w-full max-w-[220px] space-y-2">
        <div className="relative flex h-14 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-white/5">
          <svg className="absolute h-12 w-full" viewBox="0 0 200 48" fill="none">
            {[
              [30, 24],
              [55, 18],
              [80, 30],
              [105, 14],
              [130, 26],
              [155, 20],
              [180, 28],
            ].map(([cx, cy], i) => (
              <g key={i}>
                <circle cx={cx} cy={cy} r="2.5" className="fill-green-400/60" />
                <circle cx={cx} cy={cy} r="5" className="fill-green-400/15" />
              </g>
            ))}
            {[
              [30, 24, 55, 18],
              [55, 18, 80, 30],
              [80, 30, 105, 14],
              [105, 14, 130, 26],
              [130, 26, 155, 20],
              [155, 20, 180, 28],
            ].map(([x1, y1, x2, y2], i) => (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="rgba(74,222,128,0.2)"
                strokeWidth="0.5"
              />
            ))}
          </svg>
          <span className="relative text-[8px] font-semibold text-green-300">Global Network</span>
        </div>
        <div className="grid grid-cols-2 gap-1">
          {['One-Click Deploy', 'Crowdera Hosted', 'Custom Domain', 'Free SSL'].map((item) => (
            <div
              key={item}
              className="flex items-center gap-1 rounded border border-white/5 bg-white/[0.03] px-1.5 py-1"
            >
              <svg
                className="h-2 w-2 shrink-0 text-green-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
              <span className="text-[6px] text-white/50">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CertifiedIllustration() {
  return (
    <div className="flex h-full w-full items-center justify-center p-4">
      <div className="flex w-full max-w-[220px] items-center gap-3">
        <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/20 to-rose-500/20">
          <svg className="absolute inset-0 h-14 w-14" viewBox="0 0 56 56">
            <rect
              x="4"
              y="4"
              width="48"
              height="48"
              rx="12"
              fill="none"
              stroke="rgba(245,158,11,0.3)"
              strokeWidth="1"
            />
            <path
              d="M28 12 L31.5 20 L40 21 L33.5 27.5 L35.5 36 L28 31.5 L20.5 36 L22.5 27.5 L16 21 L24.5 20 Z"
              fill="rgba(245,158,11,0.2)"
              stroke="rgba(245,158,11,0.5)"
              strokeWidth="0.8"
            />
          </svg>
          <span className="relative text-lg font-bold text-amber-400">✓</span>
        </div>
        <div className="space-y-1.5">
          <div className="text-[8px] font-bold text-amber-300">WCAG 2.2 AA Certified</div>
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className="h-2.5 w-2.5 text-amber-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <div className="flex gap-1">
            {['ADA', 'EU', 'Global'].map((tag) => (
              <span
                key={tag}
                className="rounded bg-amber-500/15 px-1.5 py-0.5 text-[6px] font-semibold text-amber-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const FEATURES: FeatureCardData[] = [
  {
    title: 'Premium Design',
    description:
      '10 distinct design systems with unique color palettes, typography, and visual language crafted for specific NGO missions.',
    color: '#a855f7',
    glowColor: 'rgba(168,85,247,0.15)',
    borderColor: 'rgba(168,85,247,0.3)',
    pills: [{ label: '10 Design Systems' }, { label: 'Custom Typography' }, { label: 'Dark Mode' }],
    illustration: <PremiumDesignIllustration />,
  },
  {
    title: 'Performance First',
    description:
      'Built on Next.js 16 with automatic image optimization, code splitting, and lazy loading. Every template scores 95+ on Lighthouse.',
    color: '#10b981',
    glowColor: 'rgba(16,185,129,0.15)',
    borderColor: 'rgba(16,185,129,0.3)',
    pills: [{ label: 'Lighthouse 95+' }, { label: 'Next.js 16' }, { label: 'Lazy Loading' }],
    illustration: <PerformanceIllustration />,
  },
  {
    title: 'WCAG 2.2 AA+',
    description:
      'Every component meets WCAG 2.2 AA standards with proper ARIA labels, keyboard navigation, focus management, and reduced motion support.',
    color: '#3b82f6',
    glowColor: 'rgba(59,130,246,0.15)',
    borderColor: 'rgba(59,130,246,0.3)',
    pills: [{ label: 'WCAG 2.2 AA' }, { label: 'ARIA Labels' }, { label: 'Keyboard Nav' }],
    illustration: <AccessibilityIllustration />,
  },
  {
    title: 'SEO Optimized',
    description:
      'Semantic HTML, structured data, Open Graph tags, XML sitemaps, and canonical URLs built into every template out of the box.',
    color: '#f59e0b',
    glowColor: 'rgba(245,158,11,0.15)',
    borderColor: 'rgba(245,158,11,0.3)',
    pills: [{ label: 'Open Graph' }, { label: 'Structured Data' }, { label: 'Sitemaps' }],
    illustration: <SEOIllustration />,
  },
  {
    title: 'Analytics Ready',
    description:
      'Built-in analytics hooks, cookie consent, and privacy-compliant tracking integration. GDPR and ePrivacy-ready.',
    color: '#3b82f6',
    glowColor: 'rgba(59,130,246,0.15)',
    borderColor: 'rgba(59,130,246,0.3)',
    pills: [{ label: 'GDPR Ready' }, { label: 'Cookie Consent' }, { label: 'Dashboard' }],
    illustration: <AnalyticsIllustration />,
  },
  {
    title: 'Modular Architecture',
    description:
      '40+ reusable section components that compose into any page layout. Mix, match, and extend without touching core code.',
    color: '#6366f1',
    glowColor: 'rgba(99,102,241,0.15)',
    borderColor: 'rgba(99,102,241,0.3)',
    pills: [{ label: '40+ Components' }, { label: 'Reusable' }, { label: 'TypeScript' }],
    illustration: <ArchitectureIllustration />,
  },
  {
    title: 'Crowdera Ready',
    description:
      'All templates designed and built specifically for Crowdera-hosted NGO websites. One-click deployment compatible.',
    color: '#22c55e',
    glowColor: 'rgba(34,197,94,0.15)',
    borderColor: 'rgba(34,197,94,0.3)',
    pills: [{ label: 'One-Click Deploy' }, { label: 'Custom Domain' }, { label: 'Free SSL' }],
    illustration: <CrowderaIllustration />,
  },
  {
    title: 'Accessibility Certified',
    description:
      'Skip links, screen reader support, color contrast ratios, focus indicators, and reduced motion preferences honored throughout.',
    color: '#ec4899',
    glowColor: 'rgba(236,72,153,0.15)',
    borderColor: 'rgba(236,72,153,0.3)',
    pills: [{ label: 'Certified' }, { label: 'Screen Reader' }, { label: 'Contrast AAA' }],
    illustration: <CertifiedIllustration />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  },
};

function FeatureCard({ feature, index }: { feature: FeatureCardData; index: number }) {
  return (
    <motion.div variants={itemVariants} custom={index} className="group">
      <div
        className={cn(
          'relative overflow-hidden rounded-2xl border p-0 transition-all duration-500',
          'hover:-translate-y-1.5 hover:shadow-2xl',
        )}
        style={{
          backgroundColor: 'rgba(255,255,255,0.03)',
          borderColor: 'rgba(255,255,255,0.08)',
          backdropFilter: 'blur(12px)',
          boxShadow: `0 0 0 0 ${feature.glowColor}`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 20px 60px -10px ${feature.glowColor}`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `linear-gradient(135deg, ${feature.borderColor}, transparent 50%, ${feature.borderColor})`,
            padding: '1px',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        />

        <div
          className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100"
          style={{ backgroundColor: feature.glowColor }}
        />

        <div
          className="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-70"
          style={{ backgroundColor: feature.glowColor }}
        />

        <div className="relative h-36 overflow-hidden sm:h-40">
          <div
            className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
            style={{
              background: `radial-gradient(ellipse at 50% 0%, ${feature.color}15 0%, transparent 70%)`,
            }}
          />
          {feature.illustration}
        </div>

        <div className="relative space-y-3 px-5 pt-3 pb-5 sm:px-6 sm:pb-6">
          <h3 className="text-base font-bold tracking-tight text-white sm:text-lg">
            {feature.title}
          </h3>
          <p className="text-sm leading-relaxed text-white/60">{feature.description}</p>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {feature.pills.map((pill) => (
              <span
                key={pill.label}
                className={cn(
                  'inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-wide',
                  'bg-white/5 text-white/70',
                  'transition-all duration-300 group-hover:bg-white/10 group-hover:text-white/90',
                )}
              >
                <svg
                  className="h-2.5 w-2.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {pill.label}
              </span>
            ))}
          </div>
        </div>

        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-all duration-500 group-hover:opacity-100"
          style={{
            background: `linear-gradient(180deg, transparent 40%, ${feature.color}08 100%)`,
          }}
        />
      </div>
    </motion.div>
  );
}

function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute top-[10%] left-[5%] h-72 w-72 rounded-full bg-purple-500/10 blur-[100px]" />
      <div className="absolute top-[30%] right-[10%] h-96 w-96 rounded-full bg-blue-500/8 blur-[120px]" />
      <div className="absolute bottom-[20%] left-[15%] h-64 w-64 rounded-full bg-cyan-500/8 blur-[90px]" />
      <div className="absolute right-[20%] bottom-[10%] h-80 w-80 rounded-full bg-pink-500/8 blur-[110px]" />
      <div className="absolute top-[50%] left-[40%] h-56 w-56 rounded-full bg-emerald-500/6 blur-[80px]" />
    </div>
  );
}

function GridPattern() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-[0.03]" aria-hidden="true">
      <svg className="h-full w-full" width="100%" height="100%">
        <defs>
          <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

function ConnectionLines() {
  return (
    <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
      <svg className="h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="none" fill="none">
        {[
          [200, 280, 400, 200],
          [400, 200, 600, 280],
          [600, 280, 800, 200],
          [200, 520, 400, 600],
          [400, 600, 600, 520],
          [600, 520, 800, 600],
          [200, 280, 200, 520],
          [400, 200, 400, 600],
          [600, 280, 600, 520],
          [800, 200, 800, 600],
        ].map(([x1, y1, x2, y2], i) => (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="url(#lineGrad)"
            strokeWidth="0.5"
            opacity="0.15"
          />
        ))}
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Sparkles() {
  return (
    <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
      <svg className="h-full w-full" viewBox="0 0 1200 800" fill="none">
        {[
          [150, 100],
          [350, 80],
          [550, 120],
          [750, 70],
          [950, 110],
          [1100, 90],
          [200, 350],
          [500, 330],
          [800, 360],
          [1000, 340],
          [300, 600],
          [600, 580],
          [900, 610],
          [100, 500],
          [1100, 550],
        ].map(([cx, cy], i) => (
          <g key={i} className="animate-pulse" style={{ animationDelay: `${i * 0.3}s` }}>
            <circle cx={cx} cy={cy} r="1.5" fill="white" opacity="0.3" />
            <circle cx={cx} cy={cy} r="3" fill="white" opacity="0.08" />
          </g>
        ))}
      </svg>
    </div>
  );
}

export function BuiltForExcellence() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      <div className="absolute inset-0 bg-neutral-950" />
      <FloatingOrbs />
      <GridPattern />
      <ConnectionLines />
      <Sparkles />

      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(168,85,247,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
          className="mx-auto mb-16 max-w-3xl text-center sm:mb-20 lg:mb-24"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold tracking-wider text-white/70 uppercase backdrop-blur-sm"
          >
            <span className="text-sm leading-none">✨</span>
            Enterprise Grade
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span className="text-white">Everything You Need</span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              To Launch a Professional NGO Website
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/50 sm:text-lg"
          >
            Every template is crafted with production-ready components, real-world accessibility,
            premium design systems, and enterprise-grade performance.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {FEATURES.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-14 text-center"
        >
          <a
            href="/templates"
            className={cn(
              'group inline-flex items-center gap-2.5 rounded-xl px-7 py-3.5 text-sm font-bold transition-all duration-300',
              'bg-white text-neutral-900 shadow-lg shadow-white/10',
              'hover:bg-white/90 hover:shadow-xl hover:shadow-white/20',
              'hover:-translate-y-0.5',
            )}
          >
            Explore All Features
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
