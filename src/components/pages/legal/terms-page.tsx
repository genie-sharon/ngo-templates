'use client';

import { motion } from 'framer-motion';

import { PageHero, PageLayout, PageSidebar } from '@/components/pages/blocks/page-hero';
import { formatDate } from '@/lib/utils';

import type { LegalSection, LegalPageConfig } from './privacy-page';

export { type LegalSection, type LegalPageConfig };

export function TermsPage({ config }: { config: LegalPageConfig }) {
  const sidebarItems = config.sections.map((s) => ({
    label: s.title,
    href: `#${s.id}`,
  }));

  return (
    <div>
      <PageHero config={config.hero} />
      <PageLayout layout="sidebar-right" sidebar={<PageSidebar items={sidebarItems} />}>
        <div className="narrow">
          <p className="mb-8 text-sm text-[var(--kindonar-color-neutral-500)]">
            Last updated: {formatDate(config.lastUpdated)}
          </p>
          <div className="space-y-12">
            {config.sections.map((section, idx) => (
              <motion.section
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <h2 className="mb-4 text-xl font-bold text-[var(--kindonar-color-neutral-900)]">
                  {section.title}
                </h2>
                <div className="space-y-4 text-base leading-relaxed text-[var(--kindonar-color-neutral-700)]">
                  {section.content.split('\n\n').map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                {section.subsections?.map((sub) => (
                  <div key={sub.title} className="mt-6">
                    <h3 className="mb-3 text-lg font-semibold text-[var(--kindonar-color-neutral-900)]">
                      {sub.title}
                    </h3>
                    <div className="space-y-3 text-base leading-relaxed text-[var(--kindonar-color-neutral-700)]">
                      {sub.content.split('\n\n').map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.section>
            ))}
          </div>
        </div>
      </PageLayout>
    </div>
  );
}
