function getEnv(key: string, fallback: string): string {
  return (process.env[key] as string | undefined) ?? fallback;
}

function getBool(key: string, fallback: boolean): boolean {
  const val = process.env[key] as string | undefined;
  if (val === undefined) return fallback;
  return val === 'true' || val === '1';
}

export const env = {
  site: {
    url: getEnv('NEXT_PUBLIC_SITE_URL', 'http://localhost:3000'),
    name: getEnv('NEXT_PUBLIC_SITE_NAME', 'Kindonar'),
    description: getEnv(
      'NEXT_PUBLIC_SITE_DESCRIPTION',
      'Next Generation NGO Website Template System',
    ),
  },

  analytics: {
    gaId: getEnv('NEXT_PUBLIC_GA_MEASUREMENT_ID', ''),
    hotjarId: getEnv('NEXT_PUBLIC_HOTJAR_ID', ''),
    enabled: getBool('NEXT_PUBLIC_ENABLE_ANALYTICS', false),
  },

  features: {
    chat: getBool('NEXT_PUBLIC_ENABLE_CHAT', false),
  },

  images: {
    domains: getEnv('NEXT_PUBLIC_IMAGE_DOMAINS', 'images.unsplash.com,cdn.example.com')
      .split(',')
      .map((d) => d.trim())
      .filter(Boolean),
  },

  isProduction: getBool('NEXT_PUBLIC_IS_PRODUCTION', false),
} as const;
