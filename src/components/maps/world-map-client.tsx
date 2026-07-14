'use client';

import { useMemo, useState, useCallback } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from 'react-simple-maps';

import { MapPin } from 'lucide-react';
import type { CountryPresence } from '@/components/sections/extra/global-impact';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

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

const COUNTRY_NAME_MAP: Record<string, string> = {
  'DR Congo': 'Dem. Rep. Congo',
  USA: 'United States of America',
  UK: 'United Kingdom',
  UAE: 'United Arab Emirates',
};

const MAP_STYLE = {
  default: {
    fill: '#EEF2F7',
    stroke: '#CBD5E1',
    strokeWidth: 0.4,
    outline: 'none',
    transition: 'fill 0.3s ease, stroke 0.3s ease',
  },
  hover: {
    fill: '#10B981',
    stroke: '#34D399',
    strokeWidth: 1.2,
    outline: 'none',
    cursor: 'pointer',
  },
  pressed: {
    fill: '#059669',
    stroke: '#047857',
    strokeWidth: 1.2,
    outline: 'none',
  },
};

const ACTIVE_STYLE = {
  default: {
    fill: '#2563EB',
    stroke: '#60A5FA',
    strokeWidth: 0.8,
    outline: 'none',
    transition: 'fill 0.3s ease, stroke 0.3s ease',
  },
  hover: {
    fill: '#10B981',
    stroke: '#34D399',
    strokeWidth: 1.2,
    outline: 'none',
    cursor: 'pointer',
  },
  pressed: {
    fill: '#059669',
    stroke: '#047857',
    strokeWidth: 1.2,
    outline: 'none',
  },
};

interface TooltipData {
  country: string;
  projects: number;
  people: number;
  x: number;
  y: number;
}

export function WorldMapClient({ countries }: { countries: CountryPresence[] }) {
  const [tooltip, setTooltip] = useState<TooltipData | null>(null);

  const countryMap = useMemo(() => {
    const map = new Map<string, CountryPresence>();
    for (const c of countries) {
      map.set(c.country.toLowerCase(), c);
    }
    return map;
  }, [countries]);

  const activeNames = useMemo(
    () => new Set(countries.map((c) => c.country.toLowerCase())),
    [countries],
  );

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

  const projectionConfig = useMemo(() => ({ scale: 140, center: [20, 20] as [number, number] }), []);

  const handleMouseEnter = useCallback(
    (geo: any, evt: React.MouseEvent) => {
      const name: string = geo.properties?.name || '';
      const lower = name.toLowerCase();
      const lowerMapped = (COUNTRY_NAME_MAP[name] || name).toLowerCase();
      const isActive = activeNames.has(lower) || activeNames.has(lowerMapped);
      if (isActive) {
        const match = countryMap.get(lower) || countryMap.get(lowerMapped);
        if (match) {
          const rect = (evt.target as SVGGElement).getBoundingClientRect?.();
          setTooltip({
            country: match.country,
            projects: match.projects,
            people: match.peopleReached,
            x: rect ? rect.left + rect.width / 2 : evt.clientX,
            y: rect ? rect.top - 10 : evt.clientY,
          });
        }
      }
    },
    [activeNames, countryMap],
  );

  const handleMouseLeave = useCallback(() => {
    setTooltip(null);
  }, []);

  return (
    <div className="relative">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={projectionConfig}
        width={900}
        height={500}
        className="h-full w-full"
        style={{ width: '100%', height: 'auto' }}
      >
        <ZoomableGroup zoom={1} minZoom={1} maxZoom={4}>
          <Geographies geography={GEO_URL}>
            {({ geographies }: { geographies: any[] }) =>
              geographies.map((geo: any) => {
                const name: string = geo.properties?.name || '';
                const lower = name.toLowerCase();
                const lowerMapped = (COUNTRY_NAME_MAP[name] || name).toLowerCase();
                const isActive = activeNames.has(lower) || activeNames.has(lowerMapped);

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    tabIndex={isActive ? 0 : -1}
                    role={isActive ? 'button' : undefined}
                    aria-label={isActive ? `${name} - active country` : undefined}
                    onMouseEnter={(evt: any) => handleMouseEnter(geo, evt)}
                    onMouseLeave={handleMouseLeave}
                    style={isActive ? ACTIVE_STYLE : MAP_STYLE}
                  />
                );
              })
            }
          </Geographies>
          {markers.map((marker) => (
            <Marker key={marker.country} coordinates={marker.coords}>
              <g>
                <circle r={10} fill="none" stroke="#2563EB" strokeWidth={1.5} opacity={0.4}>
                  <animate
                    attributeName="r"
                    values="6;14;6"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.6;0;0.6"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle r={4} fill="#2563EB" />
                <circle r={2} fill="#93C5FD" />
              </g>
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>

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
