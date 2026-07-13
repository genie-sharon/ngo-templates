import { notFound } from 'next/navigation';

import { getTemplate } from '@/data/templates/registry';

import { TemplateLayout } from './template-layout';

interface Props {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

export default async function Layout({ children, params }: Props) {
  const { slug } = await params;
  const template = getTemplate(slug);
  if (!template) notFound();

  return <TemplateLayout template={template}>{children}</TemplateLayout>;
}
