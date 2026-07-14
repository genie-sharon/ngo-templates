'use client';

import { cn } from '@/lib/utils';

interface PreviewColors {
  primary: string;
  secondary: string;
  accent: string;
  dark: string;
  light: string;
  lightBg: string;
  textOnDark: string;
  textMuted: string;
  cardBg: string;
}

interface ProgramCard {
  title: string;
  image?: string;
}

interface PreviewConfig {
  colors: PreviewColors;
  heroImage: string;
  heroTitle: string;
  heroSubtitle: string;
  navLogo: string;
  navItems: string[];
  navCta: string;
  stats: { value: string; label: string }[];
  programs: ProgramCard[];
  footerText: string;
}

const configs: Record<string, PreviewConfig> = {
  universal: {
    colors: {
      primary: '#2563eb',
      secondary: '#0d9488',
      accent: '#3b82f6',
      dark: '#1e3a5f',
      light: '#eff6ff',
      lightBg: '#f8fafc',
      textOnDark: '#f1f5f9',
      textMuted: '#64748b',
      cardBg: '#ffffff',
    },
    heroImage: '/images/universal/hero.jpg',
    heroTitle: 'Global Volunteers Helping Children',
    heroSubtitle: 'Making a difference in 50+ countries',
    navLogo: 'Kindonar',
    navItems: ['Home', 'About', 'Programs', 'Gallery', 'Contact'],
    navCta: 'Donate',
    stats: [
      { value: '12K+', label: 'Children Helped' },
      { value: '500+', label: 'Villages' },
      { value: '98%', label: 'Success Rate' },
      { value: '50+', label: 'Countries' },
    ],
    programs: [
      { title: 'Education', image: '/images/universal/gallery1.jpg' },
      { title: 'Health Access', image: '/images/universal/gallery2.jpg' },
      { title: 'Clean Water', image: '/images/universal/gallery3.jpg' },
    ],
    footerText: 'Kindonar — Empowering communities worldwide',
  },
  healthcare: {
    colors: {
      primary: '#0d9488',
      secondary: '#059669',
      accent: '#14b8a6',
      dark: '#0b2e2a',
      light: '#f0fdfa',
      lightBg: '#f8fafc',
      textOnDark: '#ccfbf1',
      textMuted: '#64748b',
      cardBg: '#ffffff',
    },
    heroImage: '/images/healthcare/hero.jpg',
    heroTitle: 'Doctors Treating Children Worldwide',
    heroSubtitle: 'Bringing healthcare to those who need it most',
    navLogo: 'MedCare',
    navItems: ['Home', 'About', 'Programs', 'Camps', 'Contact'],
    navCta: 'Donate',
    stats: [
      { value: '1M+', label: 'Patients Treated' },
      { value: '200+', label: 'Clinics' },
      { value: '500+', label: 'Doctors' },
      { value: '95%', label: 'Recovery Rate' },
    ],
    programs: [
      { title: 'Mobile Clinics', image: '/images/healthcare/clinic.jpg' },
      { title: 'Cancer Support', image: '/images/healthcare/doctor.jpg' },
      { title: 'Vaccination', image: '/images/healthcare/patient.jpg' },
    ],
    footerText: 'MedCare Global — Health is a human right',
  },
  education: {
    colors: {
      primary: '#ea580c',
      secondary: '#2563eb',
      accent: '#f97316',
      dark: '#1e293b',
      light: '#fff7ed',
      lightBg: '#f8fafc',
      textOnDark: '#fef3c7',
      textMuted: '#64748b',
      cardBg: '#ffffff',
    },
    heroImage: '/images/education/hero.jpg',
    heroTitle: 'Empowering Students Inside Classrooms',
    heroSubtitle: 'Education for every child, everywhere',
    navLogo: 'EduFuture',
    navItems: ['Home', 'About', 'Programs', 'Scholarships', 'Contact'],
    navCta: 'Donate',
    stats: [
      { value: '50K+', label: 'Students' },
      { value: '300+', label: 'Schools' },
      { value: '95%', label: 'Graduation' },
      { value: '20+', label: 'Countries' },
    ],
    programs: [
      { title: 'Scholarships', image: '/images/education/classroom.jpg' },
      { title: 'Digital Learning', image: '/images/education/students.jpg' },
      { title: 'Teacher Training', image: '/images/education/teacher.jpg' },
    ],
    footerText: 'EduFuture — Unlocking potential through education',
  },
  environment: {
    colors: {
      primary: '#16a34a',
      secondary: '#059669',
      accent: '#22c55e',
      dark: '#0f2e17',
      light: '#f0fdf4',
      lightBg: '#f8fafc',
      textOnDark: '#dcfce7',
      textMuted: '#64748b',
      cardBg: '#ffffff',
    },
    heroImage: '/images/environment/hero.jpg',
    heroTitle: 'Forest & Volunteers Planting Trees',
    heroSubtitle: 'Restoring our planet one tree at a time',
    navLogo: 'EcoGuard',
    navItems: ['Home', 'About', 'Programs', 'Gallery', 'Contact'],
    navCta: 'Act Now',
    stats: [
      { value: '1M+', label: 'Trees Planted' },
      { value: '500+', label: 'Species Protected' },
      { value: '200+', label: 'Projects' },
      { value: '30+', label: 'Countries' },
    ],
    programs: [
      { title: 'Climate Action', image: '/images/environment/forest.jpg' },
      { title: 'Wildlife Protection', image: '/images/environment/community.jpg' },
      { title: 'Ocean Cleanup', image: '/images/environment/ocean.jpg' },
    ],
    footerText: 'EcoGuardians — Protecting nature for future generations',
  },
  'faith-based': {
    colors: {
      primary: '#92400e',
      secondary: '#d97706',
      accent: '#b45309',
      dark: '#292524',
      light: '#fffbeb',
      lightBg: '#fafaf9',
      textOnDark: '#fef3c7',
      textMuted: '#78716c',
      cardBg: '#ffffff',
    },
    heroImage: '/images/faith/hero.jpg',
    heroTitle: 'Community Prayer & Fellowship',
    heroSubtitle: 'Serving communities through faith and compassion',
    navLogo: 'FaithInAction',
    navItems: ['Home', 'About', 'Ministries', 'Gallery', 'Contact'],
    navCta: 'Give',
    stats: [
      { value: '10K+', label: 'Meals Served' },
      { value: '500+', label: 'Families' },
      { value: '200+', label: 'Events' },
      { value: '50+', label: 'Volunteers' },
    ],
    programs: [
      { title: 'Church Outreach', image: '/images/faith/gallery1.jpg' },
      { title: 'Food Ministry', image: '/images/faith/gallery2.jpg' },
      { title: 'Youth Ministry', image: '/images/faith/gallery3.jpg' },
    ],
    footerText: 'Faith in Action — Love in motion',
  },
  humanitarian: {
    colors: {
      primary: '#1d4ed8',
      secondary: '#d97706',
      accent: '#2563eb',
      dark: '#0f172a',
      light: '#eff6ff',
      lightBg: '#f8fafc',
      textOnDark: '#dbeafe',
      textMuted: '#64748b',
      cardBg: '#ffffff',
    },
    heroImage: '/images/humanitarian/hero.jpg',
    heroTitle: 'Children Receiving Humanitarian Aid',
    heroSubtitle: 'Bringing hope and relief to crisis zones',
    navLogo: 'HopeAid',
    navItems: ['Home', 'About', 'Programs', 'News', 'Contact'],
    navCta: 'Donate',
    stats: [
      { value: '2M+', label: 'People Helped' },
      { value: '50+', label: 'Countries' },
      { value: '1K+', label: 'Volunteers' },
      { value: '500+', label: 'Missions' },
    ],
    programs: [
      { title: 'Emergency Response', image: '/images/humanitarian/emergency.jpg' },
      { title: 'Food Distribution', image: '/images/humanitarian/health.jpg' },
      { title: 'Medical Relief', image: '/images/humanitarian/water.jpg' },
    ],
    footerText: 'HopeAid — Humanity first, always',
  },
  'disaster-relief': {
    colors: {
      primary: '#dc2626',
      secondary: '#1e40af',
      accent: '#ef4444',
      dark: '#1e1b1b',
      light: '#fef2f2',
      lightBg: '#fafafa',
      textOnDark: '#fecaca',
      textMuted: '#78716c',
      cardBg: '#ffffff',
    },
    heroImage: '/images/disaster/hero.jpg',
    heroTitle: 'Emergency Rescue Teams in Action',
    heroSubtitle: 'Rapid response when every second counts',
    navLogo: 'DisasterResp',
    navItems: ['Home', 'About', 'Programs', 'Gallery', 'Contact'],
    navCta: 'Alert',
    stats: [
      { value: '500+', label: 'Missions' },
      { value: '100K+', label: 'Lives Saved' },
      { value: '50+', label: 'Countries' },
      { value: '24/7', label: 'Response' },
    ],
    programs: [
      { title: 'Flood Relief', image: '/images/disaster/rescue.jpg' },
      { title: 'Earthquake Response', image: '/images/disaster/rebuild.jpg' },
      { title: 'Emergency Shelter', image: '/images/disaster/gallery1.jpg' },
    ],
    footerText: 'Disaster Response — Always ready, always there',
  },
  'animal-welfare': {
    colors: {
      primary: '#16a34a',
      secondary: '#ea580c',
      accent: '#22c55e',
      dark: '#1a2e1a',
      light: '#f0fdf4',
      lightBg: '#fafaf9',
      textOnDark: '#dcfce7',
      textMuted: '#78716c',
      cardBg: '#ffffff',
    },
    heroImage: '/images/animals/hero.jpg',
    heroTitle: 'Rescued Dogs & Wildlife Finding Home',
    heroSubtitle: 'Every animal deserves a second chance',
    navLogo: 'PawsClaws',
    navItems: ['Home', 'About', 'Adopt', 'Gallery', 'Contact'],
    navCta: 'Adopt',
    stats: [
      { value: '5K+', label: 'Animals Rescued' },
      { value: '1K+', label: 'Adoptions' },
      { value: '200+', label: 'Volunteers' },
      { value: '95%', label: 'Survival Rate' },
    ],
    programs: [
      { title: 'Animal Shelter', image: '/images/animals/dog.jpg' },
      { title: 'Adoption Program', image: '/images/animals/cat.jpg' },
      { title: 'Wildlife Rescue', image: '/images/animals/wildlife.jpg' },
    ],
    footerText: 'Paws & Claws — Compassion for all creatures',
  },
  community: {
    colors: {
      primary: '#3b82f6',
      secondary: '#8b5cf6',
      accent: '#6366f1',
      dark: '#1e1b4b',
      light: '#eef2ff',
      lightBg: '#fafaf9',
      textOnDark: '#e0e7ff',
      textMuted: '#78716c',
      cardBg: '#ffffff',
    },
    heroImage: '/images/community/hero.jpg',
    heroTitle: 'Happy Local Community Coming Together',
    heroSubtitle: 'Building stronger neighborhoods, one connection at a time',
    navLogo: 'CommUnity',
    navItems: ['Home', 'About', 'Programs', 'Events', 'Contact'],
    navCta: 'Join',
    stats: [
      { value: '10K+', label: 'Members' },
      { value: '500+', label: 'Events Held' },
      { value: '200+', label: 'Programs' },
      { value: '100+', label: 'Volunteers' },
    ],
    programs: [
      { title: 'Youth Programs', image: '/images/community/people.jpg' },
      { title: 'Senior Care', image: '/images/community/volunteers.jpg' },
      { title: 'Family Support', image: '/images/community/gallery1.jpg' },
    ],
    footerText: 'Community First — Together we thrive',
  },
  arts: {
    colors: {
      primary: '#7c3aed',
      secondary: '#ec4899',
      accent: '#a855f7',
      dark: '#1e0f2e',
      light: '#f5f3ff',
      lightBg: '#fafaf9',
      textOnDark: '#ede9fe',
      textMuted: '#78716c',
      cardBg: '#ffffff',
    },
    heroImage: '/images/arts/hero.jpg',
    heroTitle: 'Artists Painting a Brighter Mural',
    heroSubtitle: 'Celebrating creativity, culture, and heritage',
    navLogo: 'ArtSphere',
    navItems: ['Home', 'About', 'Gallery', 'Events', 'Contact'],
    navCta: 'Explore',
    stats: [
      { value: '500+', label: 'Artists' },
      { value: '200+', label: 'Exhibitions' },
      { value: '50+', label: 'Events' },
      { value: '100+', label: 'Workshops' },
    ],
    programs: [
      { title: 'Music Program', image: '/images/arts/event.jpg' },
      { title: 'Dance Academy', image: '/images/arts/gallery1.jpg' },
      { title: 'Heritage', image: '/images/arts/gallery2.jpg' },
    ],
    footerText: 'ArtSphere — Where creativity meets purpose',
  },
};

interface TemplatePreviewProps {
  slug: string;
  className?: string;
}

function StatItem({ value, label, color }: { value: string; label: string; color: string }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-0.5">
      <span className="text-[9px] leading-none font-extrabold sm:text-[11px]" style={{ color }}>
        {value}
      </span>
      <span className="mt-px text-[4px] font-medium tracking-wider text-neutral-400 uppercase sm:text-[5px]">
        {label}
      </span>
    </div>
  );
}

function ProgramCard({ program, colors }: { program: ProgramCard; colors: PreviewColors }) {
  return (
    <div className="flex flex-1 flex-col overflow-hidden rounded-[3px] border border-white/10 shadow-sm">
      {program.image ? (
        <div
          className="relative aspect-[4/3] w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${program.image})` }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, ${colors.dark}dd 0%, ${colors.dark}44 50%, transparent 100%)`,
            }}
          />
          <span className="absolute bottom-0.5 left-1 text-[5px] leading-tight font-bold text-white drop-shadow-sm sm:text-[6px]">
            {program.title}
          </span>
        </div>
      ) : (
        <div
          className="flex aspect-[4/3] items-center justify-center"
          style={{ backgroundColor: `${colors.primary}15` }}
        >
          <span
            className="px-1 text-[5px] leading-tight font-semibold sm:text-[6px]"
            style={{ color: colors.primary }}
          >
            {program.title}
          </span>
        </div>
      )}
    </div>
  );
}

export function TemplatePreview({ slug, className }: TemplatePreviewProps) {
  const config = configs[slug];
  if (!config) return null;

  const { colors } = config;

  return (
    <div className={cn('flex h-full w-full flex-col overflow-hidden', className)}>
      <div
        className="flex h-5 shrink-0 items-center gap-1 px-2 sm:h-6"
        style={{ backgroundColor: '#1c1c2e' }}
      >
        <div className="flex gap-[3px]">
          <div className="h-[5px] w-[5px] rounded-full bg-red-500 sm:h-[6px] sm:w-[6px]" />
          <div className="h-[5px] w-[5px] rounded-full bg-amber-400 sm:h-[6px] sm:w-[6px]" />
          <div className="h-[5px] w-[5px] rounded-full bg-green-500 sm:h-[6px] sm:w-[6px]" />
        </div>
        <div className="mx-1.5 flex h-[10px] flex-1 items-center rounded-sm bg-white/10 px-1.5 sm:h-[13px] sm:rounded">
          <span className="truncate text-[5px] text-white/50 sm:text-[6px]">
            kindonar.org/{slug}
          </span>
        </div>
        <div className="flex gap-[3px]">
          <div className="h-2 w-2 rounded-sm border border-white/10" />
        </div>
      </div>

      <div
        className="flex h-4 shrink-0 items-center gap-1 px-2 sm:h-5"
        style={{ backgroundColor: colors.dark }}
      >
        <span
          className="text-[7px] font-extrabold tracking-tight sm:text-[8px]"
          style={{ color: colors.textOnDark }}
        >
          {config.navLogo}
        </span>
        <div className="ml-auto flex items-center gap-1.5">
          {config.navItems.slice(0, 4).map((item) => (
            <span
              key={item}
              className="hidden text-[5px] font-medium opacity-70 sm:inline-block sm:text-[6px]"
              style={{ color: colors.textOnDark }}
            >
              {item}
            </span>
          ))}
          <span
            className="rounded-sm px-1 py-[1px] text-[5px] font-bold sm:rounded sm:px-1.5 sm:text-[6px]"
            style={{ backgroundColor: colors.primary, color: '#fff' }}
          >
            {config.navCta}
          </span>
        </div>
      </div>

      <div className="relative flex-1 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${config.heroImage})` }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, ${colors.dark}dd 0%, ${colors.dark}88 40%, ${colors.dark}44 70%, ${colors.dark}22 100%)`,
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-3">
          <span
            className="text-center text-[10px] leading-tight font-extrabold drop-shadow-lg sm:text-[13px]"
            style={{ color: '#ffffff' }}
          >
            {config.heroTitle}
          </span>
          <span
            className="mt-px max-w-[90%] text-center text-[6px] leading-tight font-medium opacity-80 sm:mt-0.5 sm:text-[7px]"
            style={{ color: '#ffffffdd' }}
          >
            {config.heroSubtitle}
          </span>
          <div className="mt-1 flex gap-1 sm:mt-1.5">
            <div
              className="rounded-sm px-1.5 py-[2px] sm:rounded sm:px-2 sm:py-[3px]"
              style={{ backgroundColor: colors.primary }}
            >
              <span className="text-[5px] font-bold text-white sm:text-[6px]">Learn More</span>
            </div>
            <div
              className="rounded-sm border px-1.5 py-[2px] sm:rounded sm:px-2 sm:py-[3px]"
              style={{ borderColor: '#ffffff66', color: '#fff' }}
            >
              <span className="text-[5px] font-bold sm:text-[6px]">
                {config.navCta === 'Adopt' ? 'Adopt' : 'Donate'}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex shrink-0 items-center border-t border-white/5 px-2 py-1 sm:py-1.5"
        style={{ backgroundColor: colors.light }}
      >
        {config.stats.map((stat) => (
          <StatItem key={stat.label} value={stat.value} label={stat.label} color={colors.primary} />
        ))}
      </div>

      <div
        className="flex shrink-0 gap-1 px-2 py-1 sm:py-1.5"
        style={{ backgroundColor: colors.lightBg }}
      >
        {config.programs.map((program) => (
          <ProgramCard key={program.title} program={program} colors={colors} />
        ))}
      </div>

      <div
        className="flex h-3 shrink-0 items-center justify-center sm:h-4"
        style={{ backgroundColor: colors.dark }}
      >
        <span
          className="truncate px-2 text-[4px] font-medium opacity-60 sm:text-[5px]"
          style={{ color: colors.textOnDark }}
        >
          {config.footerText}
        </span>
      </div>
    </div>
  );
}
