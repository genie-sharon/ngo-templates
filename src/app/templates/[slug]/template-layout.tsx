'use client';

import { type ReactNode, useEffect } from 'react';

import { FooterSection } from '@/components/sections/footer/footer';
import { Navigation } from '@/components/sections/navigation/navigation';
import { useTheme } from '@/context/theme-context';
import type { TemplateData } from '@/data/templates/types';

interface Props {
  template: TemplateData;
  children: ReactNode;
}

export function TemplateLayout({ template, children }: Props) {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme(template.themeId);
  }, [template.themeId, setTheme]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation config={template.navigation as never} />
      <main className="flex-1">{children}</main>
      <FooterSection config={template.footer as never} />
    </div>
  );
}
