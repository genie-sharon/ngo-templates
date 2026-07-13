import type { Theme, ThemeId } from '@/types';

import { animalWelfareLightTokens } from './animal-welfare';
import { artsLightTokens } from './arts';
import { communityLightTokens } from './community';
import { defaultLightTokens, defaultDarkTokens } from './default';
import { disasterReliefLightTokens } from './disaster-relief';
import { faithLightTokens } from './faith';
import { highContrastLightTokens } from './high-contrast';
import { humanitarianLightTokens } from './humanitarian';
import { natureLightTokens } from './nature';
import { oceanLightTokens } from './ocean';
import { warmLightTokens } from './warm';

export const themes: Record<ThemeId, Theme> = {
  default: {
    meta: {
      id: 'default',
      name: 'Default Light',
      description: 'Warm, professional, trustworthy. Works for most organizations.',
      mood: 'Warm, Professional, Trustworthy',
      bestFor: ['Most organizations', 'General purpose'],
      colorMode: 'light',
    },
    tokens: defaultLightTokens,
  },
  'high-contrast': {
    meta: {
      id: 'high-contrast',
      name: 'High Contrast',
      description: 'Enhanced contrast for users with visual impairments.',
      mood: 'Clear, Accessible, Bold',
      bestFor: ['Low vision users', 'Accessibility requirement'],
      colorMode: 'light',
    },
    tokens: highContrastLightTokens,
  },
  warm: {
    meta: {
      id: 'warm',
      name: 'Soft Warm',
      description: 'Warmer, earthier palette for humanitarian and community organizations.',
      mood: 'Earthy, Welcoming, Organic',
      bestFor: ['Faith-based', 'Community development', 'Humanitarian'],
      colorMode: 'light',
    },
    tokens: warmLightTokens,
  },
  nature: {
    meta: {
      id: 'nature',
      name: 'Nature',
      description: 'Green-based palette for environmental and animal welfare organizations.',
      mood: 'Fresh, Natural, Sustainable',
      bestFor: ['Environment', 'Animal welfare', 'Conservation'],
      colorMode: 'light',
    },
    tokens: natureLightTokens,
  },
  ocean: {
    meta: {
      id: 'ocean',
      name: 'Ocean',
      description: 'Blue-based palette for healthcare and professional organizations.',
      mood: 'Calm, Professional, Trustworthy',
      bestFor: ['Healthcare', 'Foundations', 'Professional NGOs'],
      colorMode: 'light',
    },
    tokens: oceanLightTokens,
  },
  healthcare: {
    meta: {
      id: 'healthcare',
      name: 'Healthcare',
      description: 'Clean, clinical, reassuring palette for healthcare organizations.',
      mood: 'Clean, Calm, Professional',
      bestFor: ['Healthcare', 'Medical research', 'Health education'],
      colorMode: 'light',
    },
    tokens: oceanLightTokens,
  },
  education: {
    meta: {
      id: 'education',
      name: 'Education',
      description: 'Warm, friendly, vibrant palette for educational organizations.',
      mood: 'Energetic, Friendly, Bright',
      bestFor: ['Educational institutions', 'Youth programs'],
      colorMode: 'light',
    },
    tokens: defaultLightTokens,
  },
  faith: {
    meta: {
      id: 'faith',
      name: 'Faith',
      description: 'Serif-supporting, warm, reverent palette for faith-based organizations.',
      mood: 'Reverent, Warm, Timeless',
      bestFor: ['Faith-based organizations', 'Religious charities'],
      colorMode: 'light',
    },
    tokens: faithLightTokens,
  },
  'disaster-relief': {
    meta: {
      id: 'disaster-relief',
      name: 'Disaster Relief',
      description: 'High urgency, high contrast, action-oriented palette.',
      mood: 'Urgent, Action-Oriented, Alert',
      bestFor: ['Disaster relief', 'Emergency response', 'Crisis organizations'],
      colorMode: 'light',
    },
    tokens: disasterReliefLightTokens,
  },
  'animal-welfare': {
    meta: {
      id: 'animal-welfare',
      name: 'Animal Welfare',
      description:
        'Warm, nature-inspired palette with forest greens, golden yellows, and warm oranges for animal rescue and conservation organizations.',
      mood: 'Compassionate, Warm, Hopeful, Nature-Inspired',
      bestFor: [
        'Animal rescue',
        'Wildlife conservation',
        'Pet adoption',
        'Animal shelters',
        'Veterinary foundations',
      ],
      colorMode: 'light',
    },
    tokens: animalWelfareLightTokens,
  },
  community: {
    meta: {
      id: 'community',
      name: 'Community Development',
      description:
        'Terracotta and deep blue palette with warm orange accents for community development and social welfare organizations.',
      mood: 'Warm, inclusive, hopeful, community-first, optimistic',
      bestFor: [
        'Rural development',
        'Women empowerment',
        'Youth development',
        'Community welfare',
        'Poverty alleviation',
        'Social welfare organizations',
      ],
      colorMode: 'light',
    },
    tokens: communityLightTokens,
  },
  arts: {
    meta: {
      id: 'arts',
      name: 'Arts & Culture',
      description:
        'Charcoal black and warm white palette with royal purple accents and burnt orange support for arts, culture, and museum organizations.',
      mood: 'Editorial, elegant, creative, minimal, luxurious, gallery-first',
      bestFor: [
        'Museums',
        'Art galleries',
        'Cultural foundations',
        'Performing arts',
        'Heritage conservation',
        'Music foundations',
        'Theatre organizations',
      ],
      colorMode: 'light',
    },
    tokens: artsLightTokens,
  },
  humanitarian: {
    meta: {
      id: 'humanitarian',
      name: 'Humanitarian & Social Impact',
      description:
        'Deep royal blue and global green palette with warm gold accents for international humanitarian organizations, UN agencies, and global social impact foundations.',
      mood: 'Global, hopeful, trusted, impactful, professional, human-centered',
      bestFor: [
        'UN agencies',
        'International development',
        'Humanitarian relief',
        'Social impact foundations',
        'Global health organizations',
        'Children welfare',
        'Multi-country nonprofits',
      ],
      colorMode: 'light',
    },
    tokens: humanitarianLightTokens,
  },
};

export function getThemeTokens(
  themeId: ThemeId,
  colorMode: 'light' | 'dark',
): typeof defaultLightTokens {
  const theme = themes[themeId]?.tokens ?? defaultLightTokens;

  if (colorMode === 'dark') {
    return {
      ...defaultDarkTokens,
      ...theme,
      color: { ...defaultDarkTokens.color, ...theme.color },
    };
  }

  return theme as typeof defaultLightTokens;
}

export function getThemeMeta(themeId: ThemeId) {
  return themes[themeId]?.meta ?? themes.default.meta;
}

export { defaultLightTokens, defaultDarkTokens };
