import { type HTMLAttributes } from 'react';

import { Accordion, type AccordionItem } from '@/components/ui/data-display/accordion';
import { cn } from '@/lib/utils';

export interface FAQProps extends HTMLAttributes<HTMLDivElement> {
  items: AccordionItem[];
  /** Allow multiple open questions */
  allowMultiple?: boolean;
  variant?: 'bordered' | 'ghost' | 'filled';
}

/**
 * FAQ section composed from Accordion.
 * Each item uses title as the question and content as the answer.
 */
export function FAQ({ items, allowMultiple = false, variant = 'bordered', className }: FAQProps) {
  return (
    <div className={cn('space-y-2', className)}>
      <Accordion items={items} allowMultiple={allowMultiple} variant={variant} />
    </div>
  );
}
