import { cn } from '@/lib/utils';

import type { ContentBlock } from '../page-config.types';

import { ContentBlocks } from './content-blocks';

export function ContentPage({
  hero,
  contentBlocks,
  sidebar,
  className,
}: {
  hero?: React.ReactNode;
  contentBlocks?: ContentBlock[];
  sidebar?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(className)}>
      {hero}
      {sidebar ? (
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-12 sm:px-6 lg:grid-cols-[280px_1fr] lg:px-8 lg:py-16">
          <aside className="order-1 lg:order-none">{sidebar}</aside>
          <main>{contentBlocks && <ContentBlocks blocks={contentBlocks} />}</main>
        </div>
      ) : (
        <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          {contentBlocks && <ContentBlocks blocks={contentBlocks} />}
        </div>
      )}
    </div>
  );
}
