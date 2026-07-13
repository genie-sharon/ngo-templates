import { cn } from '@/lib/utils';

export interface FooterColumn {
  title: string;
  links: Array<{ label: string; href: string }>;
}

export interface FooterColumnsProps {
  columns: FooterColumn[];
  className?: string;
}

/**
 * Multi-column footer with link lists.
 */
export function FooterColumns({ columns, className }: FooterColumnsProps) {
  return (
    <div className={cn('grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4', className)}>
      {columns.map((col, idx) => (
        <div key={idx}>
          <h3 className="text-sm font-semibold text-[var(--kindonar-color-neutral-900)]">
            {col.title}
          </h3>
          <ul className="mt-4 space-y-3">
            {col.links.map((link, linkIdx) => (
              <li key={linkIdx}>
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
      ))}
    </div>
  );
}
