import { cn } from '@/lib/utils';

export interface QuickLink {
  label: string;
  href: string;
}

export interface QuickLinksProps {
  title?: string;
  links: QuickLink[];
  /** Layout direction */
  direction?: 'column' | 'row';
  className?: string;
}

/**
 * Quick links section.
 */
export function QuickLinks({ title, links, direction = 'column', className }: QuickLinksProps) {
  return (
    <div className={cn(className)}>
      {title && (
        <h3 className="text-sm font-semibold text-[var(--kindonar-color-neutral-900)]">{title}</h3>
      )}
      <ul
        className={cn(
          direction === 'row' ? 'flex flex-wrap gap-x-6 gap-y-2' : 'space-y-3',
          title && 'mt-4',
        )}
      >
        {links.map((link, idx) => (
          <li key={idx}>
            <a
              href={link.href}
              className="text-sm text-[var(--kindonar-color-neutral-500)] transition-colors hover:text-[var(--kindonar-color-primary-600)]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
