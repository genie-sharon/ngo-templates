import type { Metadata } from 'next';
import { Suspense } from 'react';

import { TemplateGalleryClient } from './template-gallery-client';

export const metadata: Metadata = {
  title: 'NGO Website Templates — Kindonar Marketplace',
  description:
    'Browse 10 premium, production-ready NGO website templates. Each template is accessible, SEO-optimized, fully customizable, and includes multiple pages with theme support. Built for nonprofits, charities, and social impact organizations.',
  openGraph: {
    title: 'NGO Website Templates — Kindonar Marketplace',
    description:
      '10 premium, production-ready NGO website templates with accessibility, SEO, dark mode, and responsive design. Fully customizable.',
    images: [{ url: '/og-templates.jpg', width: 1200, height: 630 }],
  },
};

export default function TemplatesPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-white dark:bg-neutral-950">
          <div className="flex flex-col items-center gap-4">
            <div className="border-t-primary-500 h-8 w-8 animate-spin rounded-full border-4 border-neutral-200 dark:border-neutral-800" />
            <p className="text-sm text-neutral-400">Loading templates...</p>
          </div>
        </div>
      }
    >
      <TemplateGalleryClient />
    </Suspense>
  );
}
