'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useRef, type ReactNode } from 'react';

import type { TemplateData } from '@/data/templates/types';
import { cn } from '@/lib/utils';

interface TemplatePreviewConfig {
  colors: {
    primary: string;
    dark: string;
    light: string;
    accent: string;
  };
  heroImage: string;
  heroTitle: string;
  orgName: string;
  stats: { value: string; label: string }[];
}

const PREVIEW_CONFIGS: Record<string, TemplatePreviewConfig> = {
  universal: {
    colors: { primary: '#2563eb', dark: '#1e3a5f', light: '#eff6ff', accent: '#3b82f6' },
    heroImage: '/images/universal/hero.jpg',
    heroTitle: 'Global Volunteers Helping Children',
    orgName: 'Kindonar',
    stats: [
      { value: '12K+', label: 'Children' },
      { value: '500+', label: 'Villages' },
      { value: '98%', label: 'Success' },
    ],
  },
  healthcare: {
    colors: { primary: '#0d9488', dark: '#0b2e2a', light: '#f0fdfa', accent: '#14b8a6' },
    heroImage: '/images/healthcare/hero.jpg',
    heroTitle: 'Doctors Treating Children Worldwide',
    orgName: 'MedCare',
    stats: [
      { value: '1M+', label: 'Patients' },
      { value: '200+', label: 'Clinics' },
      { value: '95%', label: 'Recovery' },
    ],
  },
  education: {
    colors: { primary: '#ea580c', dark: '#1e293b', light: '#fff7ed', accent: '#f97316' },
    heroImage: '/images/education/hero.jpg',
    heroTitle: 'Empowering Students Inside Classrooms',
    orgName: 'EduFuture',
    stats: [
      { value: '50K+', label: 'Students' },
      { value: '300+', label: 'Schools' },
      { value: '95%', label: 'Graduation' },
    ],
  },
  environment: {
    colors: { primary: '#16a34a', dark: '#0f2e17', light: '#f0fdf4', accent: '#22c55e' },
    heroImage: '/images/environment/hero.jpg',
    heroTitle: 'Forest & Volunteers Planting Trees',
    orgName: 'EcoGuard',
    stats: [
      { value: '1M+', label: 'Trees' },
      { value: '500+', label: 'Species' },
      { value: '200+', label: 'Projects' },
    ],
  },
  'faith-based': {
    colors: { primary: '#92400e', dark: '#292524', light: '#fffbeb', accent: '#b45309' },
    heroImage: '/images/faith/hero.jpg',
    heroTitle: 'Community Prayer & Fellowship',
    orgName: 'FaithInAction',
    stats: [
      { value: '10K+', label: 'Meals' },
      { value: '500+', label: 'Families' },
      { value: '200+', label: 'Events' },
    ],
  },
  humanitarian: {
    colors: { primary: '#1d4ed8', dark: '#0f172a', light: '#eff6ff', accent: '#2563eb' },
    heroImage: '/images/humanitarian/hero.jpg',
    heroTitle: 'Children Receiving Humanitarian Aid',
    orgName: 'HopeAid',
    stats: [
      { value: '2M+', label: 'Helped' },
      { value: '50+', label: 'Countries' },
      { value: '1K+', label: 'Volunteers' },
    ],
  },
  'disaster-relief': {
    colors: { primary: '#dc2626', dark: '#1e1b1b', light: '#fef2f2', accent: '#ef4444' },
    heroImage: '/images/disaster/hero.jpg',
    heroTitle: 'Emergency Rescue Teams in Action',
    orgName: 'DisasterResp',
    stats: [
      { value: '500+', label: 'Missions' },
      { value: '100K+', label: 'Lives' },
      { value: '24/7', label: 'Response' },
    ],
  },
  'animal-welfare': {
    colors: { primary: '#16a34a', dark: '#1a2e1a', light: '#f0fdf4', accent: '#22c55e' },
    heroImage: '/images/animals/hero.jpg',
    heroTitle: 'Rescued Dogs & Wildlife Finding Home',
    orgName: 'PawsClaws',
    stats: [
      { value: '5K+', label: 'Rescued' },
      { value: '1K+', label: 'Adopted' },
      { value: '95%', label: 'Survival' },
    ],
  },
  community: {
    colors: { primary: '#3b82f6', dark: '#1e1b4b', light: '#eef2ff', accent: '#6366f1' },
    heroImage: '/images/community/hero.jpg',
    heroTitle: 'Happy Local Community Coming Together',
    orgName: 'CommUnity',
    stats: [
      { value: '10K+', label: 'Members' },
      { value: '500+', label: 'Events' },
      { value: '200+', label: 'Programs' },
    ],
  },
  arts: {
    colors: { primary: '#7c3aed', dark: '#1e0f2e', light: '#f5f3ff', accent: '#a855f7' },
    heroImage: '/images/arts/hero.jpg',
    heroTitle: 'Artists Painting a Brighter Mural',
    orgName: 'ArtSphere',
    stats: [
      { value: '500+', label: 'Artists' },
      { value: '200+', label: 'Exhibitions' },
      { value: '100+', label: 'Workshops' },
    ],
  },
};

type DeviceType = 'desktop' | 'tablet' | 'mobile';

const PILLS = [
  { label: '16 Pages', color: 'bg-violet-500/15 text-violet-300 border-violet-500/20' },
  { label: '40 Sections', color: 'bg-blue-500/15 text-blue-300 border-blue-500/20' },
  { label: 'Dark Mode', color: 'bg-neutral-500/15 text-neutral-300 border-neutral-500/20' },
  { label: 'Responsive', color: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/20' },
  { label: 'SEO Ready', color: 'bg-amber-500/15 text-amber-300 border-amber-500/20' },
  { label: 'Accessibility', color: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/20' },
  { label: 'Motion', color: 'bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/20' },
];

function DeviceButton({
  device,
  active,
  onClick,
  children,
}: {
  device: DeviceType;
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'rounded-lg px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-wider transition-all',
        active
          ? 'bg-white/15 text-white shadow-sm'
          : 'text-white/50 hover:bg-white/5 hover:text-white/70',
      )}
      aria-label={`${device} view`}
      aria-pressed={active}
    >
      {children}
    </button>
  );
}

function StatBadge({ value, label, color }: { value: string; label: string; color: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-base font-extrabold leading-none sm:text-lg" style={{ color }}>
        {value}
      </span>
      <span className="mt-0.5 text-[7px] font-medium uppercase tracking-wider text-white/50 sm:text-[8px]">
        {label}
      </span>
    </div>
  );
}

function MiniProgramCard({ title, index }: { title: string; index: number }) {
  const images = [
    '/images/humanitarian/emergency.jpg',
    '/images/humanitarian/health.jpg',
    '/images/humanitarian/water.jpg',
  ];

  return (
    <div className="flex flex-1 flex-col overflow-hidden rounded-[4px] border border-white/10 bg-white/5">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={images[index] || images[0]!}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <span className="absolute bottom-0.5 left-1 text-[6px] font-bold text-white drop-shadow-sm sm:text-[7px]">
          {title}
        </span>
      </div>
    </div>
  );
}

function MiniNewsCard({ index }: { index: number }) {
  const headlines = [
    'Emergency relief reaches 10,000 families in crisis zone',
    'New partnership expands access to clean drinking water',
    'Volunteer network grows to over 5,000 active members',
  ];

  return (
    <div className="flex items-start gap-1.5 rounded border border-white/5 bg-white/[0.02] p-1.5">
      <div className="h-4 w-4 shrink-0 overflow-hidden rounded bg-white/10">
        <Image
          src={`/images/humanitarian/gallery${(index % 8) + 1}.jpg`}
          alt=""
          width={16}
          height={16}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="min-w-0 flex-1">
        <div className="truncate text-[6px] font-medium text-white/70 sm:text-[7px]">
          {headlines[index] || headlines[0]!}
        </div>
        <div className="text-[5px] text-white/30 sm:text-[6px]">2 hours ago</div>
      </div>
    </div>
  );
}

export function FeaturedTemplatePreviewContent({
  template,
  config,
  device,
}: {
  template: TemplateData;
  config: TemplatePreviewConfig;
  device: DeviceType;
}) {
  const programs = ['Emergency Resp.', 'Food Distribution', 'Medical Relief'];
  const c = config.colors;

  if (device === 'mobile') {
    return (
      <div className="flex h-full flex-col overflow-hidden rounded-xl bg-neutral-900 shadow-2xl">
        <div className="flex items-center justify-center gap-1 border-b border-white/5 px-2 py-1.5">
          <div className="flex gap-0.5">
            <div className="h-1 w-1 rounded-full bg-red-500" />
            <div className="h-1 w-1 rounded-full bg-amber-400" />
            <div className="h-1 w-1 rounded-full bg-green-500" />
          </div>
        </div>
        <div className="relative flex-1 overflow-hidden">
          <Image src={config.heroImage} alt="" fill className="object-cover" sizes="30vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
          <div className="absolute inset-0 flex flex-col justify-end p-2">
            <span className="text-[9px] font-bold leading-tight text-white">
              {config.heroTitle}
            </span>
            <div
              className="mt-1 rounded px-1.5 py-0.5 text-center text-[5px] font-bold text-white"
              style={{ backgroundColor: c.primary }}
            >
              Donate
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (device === 'tablet') {
    return (
      <div className="flex h-full flex-col overflow-hidden rounded-xl bg-neutral-900 shadow-2xl">
        <div className="flex items-center gap-1 border-b border-white/5 px-3 py-1.5">
          <div className="flex gap-1">
            <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
            <div className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
          </div>
          <div className="mx-1.5 h-[10px] flex-1 rounded bg-white/10" />
        </div>
        <div className="relative h-1/2 overflow-hidden">
          <Image src={config.heroImage} alt="" fill className="object-cover" sizes="50vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-2 left-3 right-3">
            <span className="text-[11px] font-bold leading-tight text-white">
              {config.heroTitle}
            </span>
            <div className="mt-1 flex gap-1">
              <div
                className="rounded px-2 py-0.5 text-[6px] font-bold text-white"
                style={{ backgroundColor: c.primary }}
              >
                Donate
              </div>
              <div className="rounded border border-white/30 px-2 py-0.5 text-[6px] font-bold text-white">
                Volunteer
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-1 border-t border-white/5 p-2">
          {programs.slice(0, 3).map((p) => (
            <div
              key={p}
              className="flex-1 rounded bg-white/5 px-1.5 py-1 text-center text-[6px] font-medium text-white/70"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl bg-neutral-900 shadow-2xl">
      <div className="flex items-center gap-1.5 border-b border-white/5 px-3 py-2">
        <div className="flex gap-1">
          <div className="h-2 w-2 rounded-full bg-red-500" />
          <div className="h-2 w-2 rounded-full bg-amber-400" />
          <div className="h-2 w-2 rounded-full bg-green-500" />
        </div>
        <div className="mx-2 flex h-4 flex-1 items-center rounded bg-white/10 px-2">
          <span className="text-[7px] text-white/40">
            kindonar.org/{template.slug}
          </span>
        </div>
        <div className="h-2 w-2 rounded-sm border border-white/10" />
      </div>

      <div
        className="flex items-center gap-1 px-3 py-1.5"
        style={{ backgroundColor: c.dark }}
      >
        <span
          className="text-[9px] font-extrabold tracking-tight"
          style={{ color: '#f1f5f9' }}
        >
          {config.orgName}
        </span>
        <div className="ml-auto flex items-center gap-2">
          {['Home', 'About', 'Programs', 'Contact'].map((item) => (
            <span
              key={item}
              className="hidden text-[6px] font-medium opacity-70 sm:inline-block"
              style={{ color: '#f1f5f9' }}
            >
              {item}
            </span>
          ))}
          <span
            className="rounded px-1.5 py-[1px] text-[6px] font-bold sm:px-2 sm:text-[7px]"
            style={{ backgroundColor: c.primary, color: '#fff' }}
          >
            Donate
          </span>
        </div>
      </div>

      <div className="relative h-[45%] overflow-hidden sm:h-1/2">
        <Image
          src={config.heroImage}
          alt={config.heroTitle}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 60vw"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, ${c.dark}dd 0%, ${c.dark}88 40%, ${c.dark}44 70%, transparent 100%)`,
          }}
        />
        <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4">
          <span className="text-sm font-extrabold leading-tight text-white drop-shadow-lg sm:text-base">
            {config.heroTitle}
          </span>
          <span className="mt-0.5 text-[7px] font-medium leading-tight text-white/70 sm:text-[8px]">
            Making a difference in communities worldwide
          </span>
          <div className="mt-1.5 flex gap-1.5">
            <div
              className="rounded px-2.5 py-1 text-[7px] font-bold text-white sm:text-[8px]"
              style={{ backgroundColor: c.primary }}
            >
              Donate Now
            </div>
            <div className="rounded border border-white/30 px-2.5 py-1 text-[7px] font-bold text-white sm:text-[8px]">
              Volunteer
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex items-center border-t border-white/5 px-3 py-1.5"
        style={{ backgroundColor: c.light }}
      >
        {config.stats.map((stat) => (
          <StatBadge
            key={stat.label}
            value={stat.value}
            label={stat.label}
            color={c.primary}
          />
        ))}
      </div>

      <div className="flex gap-1 bg-neutral-950/50 px-2 py-1.5">
        {programs.map((p, i) => (
          <MiniProgramCard key={p} title={p} index={i} />
        ))}
      </div>

      <div className="space-y-1 border-t border-white/5 bg-neutral-950/30 px-2 py-1.5">
        {[0, 1, 2].map((i) => (
          <MiniNewsCard key={i} index={i} />
        ))}
      </div>

      <div
        className="mt-auto flex items-center justify-center py-1"
        style={{ backgroundColor: c.dark }}
      >
        <span className="text-[5px] font-medium text-white/40">
          {config.orgName} — Empowering communities worldwide
        </span>
      </div>
    </div>
  );
}

export function FeaturedTemplatePreview({
  template,
}: {
  template: TemplateData;
}) {
  const [device, setDevice] = useState<DeviceType>('desktop');
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const config = PREVIEW_CONFIGS[template.slug] ?? PREVIEW_CONFIGS.humanitarian!;
  const c = config.colors;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseX(x);
    setMouseY(y);
  };

  const deviceWidth = device === 'mobile' ? 'max-w-[180px]' : device === 'tablet' ? 'max-w-[320px]' : 'max-w-full';

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative md:col-span-3"
    >
      <div
        className="absolute -top-2 -right-2 z-20 flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 backdrop-blur-sm"
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
        </span>
        <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-wider">
          Live Preview
        </span>
      </div>

      <div className="absolute top-2 right-2 z-10 flex items-center gap-1 rounded-lg border border-white/10 bg-black/40 px-1.5 py-1 backdrop-blur-md">
        <DeviceButton device="desktop" active={device === 'desktop'} onClick={() => setDevice('desktop')}>
          <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
        </DeviceButton>
        <DeviceButton device="tablet" active={device === 'tablet'} onClick={() => setDevice('tablet')}>
          <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <rect x="4" y="2" width="16" height="20" rx="2" />
            <line x1="12" y1="18" x2="12" y2="18.01" />
          </svg>
        </DeviceButton>
        <DeviceButton device="mobile" active={device === 'mobile'} onClick={() => setDevice('mobile')}>
          <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <rect x="7" y="2" width="10" height="20" rx="2" />
            <line x1="12" y1="18" x2="12" y2="18.01" />
          </svg>
        </DeviceButton>
      </div>

      <div
        className={cn(
          'relative mx-auto min-h-[320px] transition-all duration-500',
          deviceWidth,
        )}
        style={{
          transform: `perspective(1200px) rotateY(${mouseX * 4}deg) rotateX(${-mouseY * 4}deg)`,
          transition: 'transform 0.15s ease-out',
        }}
      >
        <div className="absolute -inset-2 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `linear-gradient(135deg, ${c.primary}20, transparent 40%, ${c.accent}20)`,
            filter: 'blur(20px)',
          }}
        />

        <div className="relative h-full transition-transform duration-700 group-hover:scale-[1.02]">
          <motion.div
            key={device}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.35, ease: [0, 0, 0.2, 1] }}
            className={cn(
              'h-full',
              device === 'mobile' && 'mx-auto aspect-[9/16] overflow-hidden rounded-2xl border-2 border-neutral-700 shadow-2xl',
              device === 'tablet' && 'mx-auto aspect-[3/4] overflow-hidden rounded-xl border border-neutral-700 shadow-2xl',
              device === 'desktop' && 'overflow-hidden rounded-xl border border-neutral-700 shadow-2xl',
            )}
            style={{
              minHeight: device === 'desktop' ? '320px' : undefined,
            }}
          >
            <FeaturedTemplatePreviewContent
              template={template}
              config={config}
              device={device}
            />
          </motion.div>
        </div>

        {device === 'mobile' && (
          <div className="mx-auto mt-2 flex justify-center">
            <div className="h-1 w-16 rounded-full bg-neutral-600" />
          </div>
        )}
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-1.5">
        {PILLS.map((pill) => (
          <span
            key={pill.label}
            className={cn(
              'inline-flex items-center rounded-full border px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider',
              pill.color,
            )}
          >
            {pill.label}
          </span>
        ))}
      </div>
    </div>
  );
}
