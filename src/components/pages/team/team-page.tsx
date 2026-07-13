'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { useState, useMemo } from 'react';

import { Avatar } from '@/components/ui/atoms/avatar';
import { cn } from '@/lib/utils';

import { PageHero, PageLayout } from '../blocks/page-hero';
import type { PageConfig, PageHeroConfig, TeamMember } from '../page-config.types';

export type TeamLayout = 'grid' | 'list' | 'department-grouped';

export interface TeamPageConfig extends PageConfig {
  hero: PageHeroConfig;
  title?: string;
  description?: string;
  departments?: { id: string; label: string }[];
  members: TeamMember[];
  teamLayout?: TeamLayout;
}

const socialIcons: Record<string, React.ReactNode> = {
  linkedin: <ExternalLink className="h-4 w-4" />,
  twitter: <ExternalLink className="h-4 w-4" />,
  facebook: <ExternalLink className="h-4 w-4" />,
  instagram: <ExternalLink className="h-4 w-4" />,
  youtube: <ExternalLink className="h-4 w-4" />,
  tiktok: <ExternalLink className="h-4 w-4" />,
  whatsapp: <ExternalLink className="h-4 w-4" />,
};

function TeamMemberCard({ member, layout }: { member: TeamMember; layout: TeamLayout }) {
  const initials = member.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={cn(
        'group rounded-xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] p-6 transition-all duration-200 hover:shadow-md',
        layout === 'list' && 'flex items-start gap-6',
      )}
    >
      <div className={cn(layout === 'list' ? 'shrink-0' : 'mb-4 flex justify-center')}>
        {member.image ? (
          <Image
            src={member.image.src}
            alt={member.image.alt || member.name}
            width={96}
            height={96}
            className="h-24 w-24 rounded-full object-cover"
          />
        ) : (
          <Avatar size="2xl" fallback={initials} />
        )}
      </div>
      <div className={cn(layout === 'list' ? 'flex-1' : 'text-center')}>
        <h3 className="text-lg font-semibold text-[var(--kindonar-color-neutral-900)]">
          {member.name}
        </h3>
        {member.role && (
          <p className="mt-0.5 text-sm font-medium text-[var(--kindonar-color-primary-600)]">
            {member.role}
          </p>
        )}
        {member.department && (
          <p className="mt-0.5 text-xs text-[var(--kindonar-color-neutral-500)]">
            {member.department}
          </p>
        )}
        {member.bio && (
          <p
            className={cn(
              'mt-3 text-sm leading-relaxed text-[var(--kindonar-color-neutral-600)]',
              layout === 'grid' && 'line-clamp-3',
            )}
          >
            {member.bio}
          </p>
        )}
        {member.socialLinks && member.socialLinks.length > 0 && (
          <div className={cn('mt-4 flex gap-2', layout === 'grid' && 'justify-center')}>
            {member.socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label || `${member.name} on ${link.platform}`}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--kindonar-surface-interactive)] text-[var(--kindonar-color-neutral-500)] transition-colors hover:bg-[var(--kindonar-color-primary-100)] hover:text-[var(--kindonar-color-primary-600)]"
              >
                {socialIcons[link.platform] || <ExternalLink className="h-4 w-4" />}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

function TeamGrid({ members }: { members: TeamMember[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {members.map((member) => (
        <TeamMemberCard key={member.name} member={member} layout="grid" />
      ))}
    </div>
  );
}

function TeamList({ members }: { members: TeamMember[] }) {
  return (
    <div className="space-y-4">
      {members.map((member) => (
        <TeamMemberCard key={member.name} member={member} layout="list" />
      ))}
    </div>
  );
}

function TeamDepartmentGrouped({
  members,
  departments,
}: {
  members: TeamMember[];
  departments?: { id: string; label: string }[];
}) {
  const grouped = useMemo(() => {
    const map = new Map<string, TeamMember[]>();
    if (departments) {
      for (const dept of departments) {
        map.set(dept.id, []);
      }
    }
    for (const member of members) {
      const key = member.department || 'other';
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(member);
    }
    return map;
  }, [members, departments]);

  const deptLabels = useMemo(() => {
    const map = new Map<string, string>();
    if (departments) {
      for (const d of departments) map.set(d.id, d.label);
    }
    return map;
  }, [departments]);

  return (
    <div className="space-y-12">
      {Array.from(grouped.entries()).map(([deptId, deptMembers]) => (
        <section key={deptId}>
          <h2 className="mb-6 text-xl font-semibold text-[var(--kindonar-color-neutral-900)]">
            {deptLabels.get(deptId) || deptId.charAt(0).toUpperCase() + deptId.slice(1)}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {deptMembers.map((member) => (
              <TeamMemberCard key={member.name} member={member} layout="grid" />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export function TeamPage({ config }: { config: TeamPageConfig }) {
  const [activeDepartment, setActiveDepartment] = useState<string | null>(null);

  const filteredMembers = activeDepartment
    ? config.members.filter((m) => m.department === activeDepartment)
    : config.members;

  return (
    <div>
      <PageHero config={config.hero} />
      <PageLayout layout="default">
        {config.description && (
          <p className="mb-8 max-w-3xl text-lg leading-relaxed text-[var(--kindonar-color-neutral-600)]">
            {config.description}
          </p>
        )}
        {config.departments && config.departments.length > 1 && (
          <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter by department">
            <button
              type="button"
              onClick={() => setActiveDepartment(null)}
              className={cn(
                'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
                activeDepartment === null
                  ? 'bg-[var(--kindonar-color-primary-500)] text-white'
                  : 'bg-[var(--kindonar-surface-interactive)] text-[var(--kindonar-color-neutral-600)] hover:bg-[var(--kindonar-color-primary-100)] hover:text-[var(--kindonar-color-primary-700)]',
              )}
            >
              All
            </button>
            {config.departments.map((dept) => (
              <button
                key={dept.id}
                type="button"
                onClick={() => setActiveDepartment(dept.id)}
                className={cn(
                  'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
                  activeDepartment === dept.id
                    ? 'bg-[var(--kindonar-color-primary-500)] text-white'
                    : 'bg-[var(--kindonar-surface-interactive)] text-[var(--kindonar-color-neutral-600)] hover:bg-[var(--kindonar-color-primary-100)] hover:text-[var(--kindonar-color-primary-700)]',
                )}
              >
                {dept.label}
              </button>
            ))}
          </div>
        )}
        {config.teamLayout === 'list' ? (
          <TeamList members={filteredMembers} />
        ) : config.teamLayout === 'department-grouped' ? (
          <TeamDepartmentGrouped members={filteredMembers} departments={config.departments} />
        ) : (
          <TeamGrid members={filteredMembers} />
        )}
      </PageLayout>
    </div>
  );
}
