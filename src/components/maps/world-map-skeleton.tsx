import { cn } from '@/lib/utils';

export function WorldMapSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'relative w-full animate-pulse overflow-hidden rounded-xl bg-gray-100',
        className,
      )}
      aria-label="Loading world map"
      role="status"
    >
      <svg
        viewBox="0 0 900 500"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="shimmer" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#e2e8f0" />
            <stop offset="50%" stopColor="#f1f5f9" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
        </defs>
        <rect width="900" height="500" fill="url(#shimmer)">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite" />
        </rect>
      </svg>
      <span className="sr-only">Loading map...</span>
    </div>
  );
}
