import type { SectionEntry, SectionType } from './types';

export function section(type: SectionType, config: Record<string, unknown>): SectionEntry {
  return { type, config };
}
