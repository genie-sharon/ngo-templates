import type { Metadata } from 'next';

export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? 'Kindonar';
export const SITE_DESCRIPTION =
  process.env.NEXT_PUBLIC_SITE_DESCRIPTION ?? 'NGO Website Template System';

interface SEOInput {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  keywords?: string[];
}

export function constructMetadata({
  title,
  description,
  path,
  ogImage,
  ogType = 'website',
  publishedTime,
  modifiedTime,
  noIndex,
  noFollow,
  keywords,
}: SEOInput): Metadata {
  const url = path ? `${BASE_URL}${path}` : BASE_URL;
  const finalTitle = `${title} | ${SITE_NAME}`;

  return {
    title: finalTitle,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: { canonical: url },
    robots: {
      index: !noIndex,
      follow: !noFollow,
    },
    openGraph: {
      title: finalTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: ogType,
      ...(ogImage && { images: [{ url: ogImage, width: 1200, height: 630 }] }),
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: finalTitle,
      description,
      ...(ogImage && { images: [ogImage] }),
    },
    ...(keywords && { keywords: keywords.join(', ') }),
  };
}

export function organizationStructuredData(org: {
  name: string;
  description: string;
  url: string;
  logo: string;
  sameAs?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: org.name,
    description: org.description,
    url: org.url,
    logo: org.logo,
    sameAs: org.sameAs ?? [],
  };
}

export function breadcrumbStructuredData(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
