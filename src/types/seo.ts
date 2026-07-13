import type { Metadata } from 'next';

export interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  keywords?: string[];
  jsonLd?: Record<string, unknown>[];
}

export interface OrganizationStructuredData {
  '@type': 'NGO' | 'Organization' | 'EducationalOrganization' | 'MedicalOrganization';
  name: string;
  description: string;
  url: string;
  logo: string;
  sameAs: string[];
  address?: {
    '@type': 'PostalAddress';
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  contactPoint?: {
    '@type': 'ContactPoint';
    telephone: string;
    contactType: string;
    email?: string;
  };
  foundingDate?: string;
  funder?: string;
}

export interface BreadcrumbStructuredData {
  '@type': 'BreadcrumbList';
  itemListElement: {
    '@type': 'ListItem';
    position: number;
    name: string;
    item: string;
  }[];
}

export interface ArticleStructuredData {
  '@type': 'Article';
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: {
    '@type': 'Person';
    name: string;
  };
  publisher: {
    '@type': 'Organization';
    name: string;
    logo: string;
  };
}

export interface FAQStructuredData {
  '@type': 'FAQPage';
  mainEntity: {
    '@type': 'Question';
    name: string;
    acceptedAnswer: {
      '@type': 'Answer';
      text: string;
    };
  }[];
}

export interface EventStructuredData {
  '@type': 'Event';
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location?: {
    '@type': 'Place';
    name: string;
    address: string;
  };
  organizer?: {
    '@type': 'Organization';
    name: string;
  };
}

export function generateMetadata(props: SEOProps): Metadata {
  return {
    title: props.title,
    description: props.description,
    robots: {
      index: !props.noIndex,
      follow: !props.noFollow,
    },
    alternates: {
      canonical: props.canonicalUrl,
    },
    openGraph: {
      title: props.title,
      description: props.description,
      images: props.ogImage ? [{ url: props.ogImage }] : undefined,
      type: props.ogType ?? 'website',
      ...(props.publishedTime && { publishedTime: props.publishedTime }),
      ...(props.modifiedTime && { modifiedTime: props.modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: props.title,
      description: props.description,
      images: props.ogImage ? [props.ogImage] : undefined,
    },
    keywords: props.keywords,
    other: props.jsonLd ? { 'application/ld+json': JSON.stringify(props.jsonLd) } : undefined,
  };
}
