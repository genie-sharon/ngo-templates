import { animalWelfareTemplate } from './animal-welfare';
import { artsTemplate } from './arts';
import { communityTemplate } from './community';
import { disasterReliefTemplate } from './disaster-relief';
import { educationTemplate } from './education';
import { environmentTemplate } from './environment';
import { faithBasedTemplate } from './faith-based';
import { healthcareTemplate } from './healthcare';
import { humanitarianTemplate } from './humanitarian';
import type { TemplateData } from './types';
import { universalTemplate } from './universal';

export const templates: TemplateData[] = [
  universalTemplate,
  healthcareTemplate,
  educationTemplate,
  animalWelfareTemplate,
  environmentTemplate,
  disasterReliefTemplate,
  faithBasedTemplate,
  communityTemplate,
  artsTemplate,
  humanitarianTemplate,
];

export function getTemplate(slug: string): TemplateData | undefined {
  return templates.find((t) => t.slug === slug);
}

export function getTemplatePage(
  templateSlug: string,
  pageSlug: string,
): TemplateData['pages'][string] | undefined {
  const template = getTemplate(templateSlug);
  if (!template) return undefined;
  return template.pages[pageSlug];
}
