import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { PageRenderer } from '@/components/templates/page-renderer';
import { getTemplatePage, getTemplate } from '@/data/templates/registry';

interface Props {
  params: Promise<{ slug: string; programId: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, programId } = await params;
  const template = getTemplate(slug);
  if (!template) return {};

  const detailPage = template.pages['program-detail'];
  if (!detailPage) return {};

  const programName = programId
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return {
    title: `${programName} — Programs | ${template.name}`,
    description: detailPage.seo.description,
  };
}

export default async function ProgramDetailPage({ params }: Props) {
  const { slug, programId } = await params;

  const template = getTemplate(slug);
  if (!template) notFound();

  const detailPage = getTemplatePage(slug, 'program-detail');
  if (!detailPage) notFound();

  const sections = detailPage.sections.map((section) => {
    if (section.type === 'hero' && section.config?.heading) {
      const programName = programId
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');
      return {
        ...section,
        config: {
          ...section.config,
          heading: {
            ...(section.config.heading as Record<string, unknown>),
            title: programName,
          },
        },
      };
    }
    return section;
  });

  return <PageRenderer sections={sections} />;
}
