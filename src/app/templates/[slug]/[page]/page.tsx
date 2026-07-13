import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { PageRenderer } from '@/components/templates/page-renderer';
import { getTemplate } from '@/data/templates/registry';

interface Props {
  params: Promise<{ slug: string; page: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, page: pageSlug } = await params;
  const template = getTemplate(slug);
  if (!template) return {};

  const page = template.pages[pageSlug];
  if (!page) return {};

  return {
    title: page.seo.title,
    description: page.seo.description,
  };
}

export default async function TemplateSubPage({ params }: Props) {
  const { slug, page: pageSlug } = await params;
  const template = getTemplate(slug);
  if (!template) notFound();

  const page = template.pages[pageSlug];
  if (!page) notFound();

  return <PageRenderer sections={page.sections} />;
}
