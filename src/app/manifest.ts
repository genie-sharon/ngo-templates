import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kindonar - NGO Website Template System',
    short_name: 'Kindonar',
    description: 'Professional website templates for non-profit organizations',
    start_url: '/',
    display: 'standalone',
    background_color: '#faf9f7',
    theme_color: '#5a5ae6',
    icons: [{ src: '/favicon.ico', sizes: 'any', type: 'image/x-icon' }],
  };
}
