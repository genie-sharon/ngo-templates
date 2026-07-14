'use client';

import { MapPin } from 'lucide-react';
import { useMemo, useState, useCallback, type MouseEvent as ReactMouseEvent } from 'react';

import type { CountryPresence } from '@/components/sections/extra/global-impact';

const COUNTRY_COORDS: Record<string, [number, number]> = {
  Afghanistan: [67.709953, 33.93911],
  Bangladesh: [90.356331, 23.684994],
  Brazil: [-51.92528, -14.235004],
  'DR Congo': [23.65605, -0.228021],
  Ethiopia: [40.489673, 9.145],
  India: [78.96288, 20.593684],
  Kenya: [37.906193, -0.023559],
  Lebanon: [35.862285, 33.854721],
  Malawi: [34.301525, -13.254308],
  Nepal: [84.124008, 28.394857],
  Somalia: [46.199616, 5.152149],
  Ukraine: [31.16558, 48.379433],
  Vietnam: [108.277199, 14.058324],
  Yemen: [48.516388, 15.552727],
  USA: [-95.712891, 37.09024],
  Canada: [-106.346771, 56.130366],
  UK: [-3.435973, 55.378051],
  Germany: [10.451526, 51.165691],
  France: [2.213749, 46.603354],
  Australia: [133.775136, -25.274398],
  Japan: [138.252924, 36.204824],
  Philippines: [121.774017, 12.879721],
  Indonesia: [113.921327, -0.789275],
  Mexico: [-102.552784, 23.634501],
  UAE: [53.847818, 23.424076],
  Singapore: [103.819836, 1.352083],
  'South Africa': [22.937506, -30.559482],
  Uganda: [32.290275, 1.373333],
  'Sri Lanka': [80.771797, 7.873054],
  Senegal: [-14.452362, 14.497401],
  Guatemala: [-90.230759, 15.783471],
  Ghana: [-1.023194, 7.946527],
};

const CONTINENT_PATHS = [
  {
    id: 'north-america',
    d: 'M115 170c-24-14-39-24-54-44l18-34 28-14 24 12 20 24-14 24-20 30-6 10z',
  },
  {
    id: 'south-america',
    d: 'M220 250c-18-14-28-28-28-48l12-40 24-20 30 16 12 36-12 44-20 20z',
  },
  {
    id: 'europe-africa',
    d: 'M380 130l22-34 18-12 18 8 20 24-8 28-24 26-20 20-16-8z M386 228l28-6 24 10 16 28-20 18-24-6-24-24z',
  },
  {
    id: 'asia',
    d: 'M452 124l42-20 34-6 26 12 14 32-8 36-28 24-44 10-18-30z',
  },
  {
    id: 'oceania',
    d: 'M628 300l26-18 20 6 18 24-16 22-28-6-12-16z',
  },
];

interface TooltipData {
  country: string;
  projects: number;
  people: number;
  x: number;
  y: number;
}

function toSvgPoint(coords: [number, number]) {
  const [lon, lat] = coords;
  return {
    x: ((lon + 180) / 360) * 900,
    y: ((90 - lat) / 180) * 500,
  };
}

export function WorldMapClient({ countries }: { countries: CountryPresence[] }) {
  const [tooltip, setTooltip] = useState<TooltipData | null>(null);

  const markers = useMemo(
    () =>
      countries
        .map((c) => {
          const coords = COUNTRY_COORDS[c.country];
          if (!coords) return null;
          return { ...c, coords };
        })
        .filter(Boolean) as (CountryPresence & { coords: [number, number] })[],
    [countries],
  );

  const handleMarkerMouseEnter = useCallback(
    (
      marker: CountryPresence & { coords: [number, number] },
      evt: ReactMouseEvent<SVGCircleElement>,
    ) => {
      const rect = evt.currentTarget.ownerSVGElement?.getBoundingClientRect();
      const { x, y } = toSvgPoint(marker.coords);
      setTooltip({
        country: marker.country,
        projects: marker.projects,
        people: marker.peopleReached,
        x: rect ? rect.left + x * (rect.width / 900) : evt.clientX,
        y: rect ? rect.top + y * (rect.height / 500) : evt.clientY,
      });
    },
    [],
  );

  const handleMouseLeave = useCallback(() => {
    setTooltip(null);
  }, []);

  return (
    <div className="relative">
      <svg
        viewBox="0 0 900 500"
        className="h-full w-full"
        role="img"
        aria-label="Global impact map"
      >
        <rect width="900" height="500" rx="24" fill="#F8FBFF" />
        <path
          d="M80 150c0-40 38-70 78-64 24 4 42 20 62 28 28 10 46 18 76 12 23-5 44-12 68-18 30-7 58-8 88 2 22 7 38 20 58 40 20 20 30 48 28 75-2 24-12 48-28 67-18 20-42 30-67 38-32 9-62 8-94 10-43 1-80-8-118-24-32-14-62-34-84-60-16-19-26-43-23-68 4-24 13-45 28-60z"
          fill="#E2E8F0"
          stroke="#CBD5E1"
          strokeWidth="2"
        />
        {CONTINENT_PATHS.map((shape) => (
          <path key={shape.id} d={shape.d} fill="#F8FAFC" stroke="#94A3B8" strokeWidth="2" />
        ))}
        {markers.map((marker) => {
          const { x, y } = toSvgPoint(marker.coords);
          return (
            <g key={marker.country}>
              <circle
                cx={x}
                cy={y}
                r={12}
                fill="none"
                stroke="#2563EB"
                strokeWidth={1.5}
                opacity={0.35}
              />
              <circle
                cx={x}
                cy={y}
                r={5}
                fill="#2563EB"
                className="cursor-pointer"
                onMouseEnter={(evt) => handleMarkerMouseEnter(marker, evt)}
                onMouseLeave={handleMouseLeave}
              />
            </g>
          );
        })}
      </svg>

      {tooltip && (
        <div
          className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-full rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-2xl"
          style={{
            left: tooltip.x,
            top: tooltip.y - 12,
          }}
        >
          <p className="flex items-center gap-2 text-sm font-semibold text-gray-900">
            <MapPin size={14} className="shrink-0 text-blue-500" />
            {tooltip.country}
          </p>
          <div className="mt-1.5 flex gap-4 text-xs">
            <span className="text-emerald-600">
              <strong className="text-gray-900">{tooltip.projects}</strong> projects
            </span>
            <span className="text-blue-600">
              <strong className="text-gray-900">
                {tooltip.people >= 1000000
                  ? `${(tooltip.people / 1000000).toFixed(1)}M`
                  : tooltip.people >= 1000
                    ? `${(tooltip.people / 1000).toFixed(0)}K`
                    : tooltip.people.toLocaleString('en-US')}
              </strong>{' '}
              people
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
