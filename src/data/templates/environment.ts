import type { TemplateData } from './types';

const nav = {
  layout: 'transparent' as const,
  logo: { text: 'Green Planet Alliance', href: '/' },
  menuItems: [
    { label: 'Home', href: `/templates/environment` },
    { label: 'About', href: `/templates/environment/about` },
    { label: 'Programs', href: `/templates/environment/programs` },
    { label: 'Gallery', href: `/templates/environment/gallery` },
    { label: 'News', href: `/templates/environment/news` },
    { label: 'Contact', href: `/templates/environment/contact` },
  ],
  ctaButtons: [
    {
      label: 'Donate',
      href: `/templates/environment/donate`,
      variant: 'primary' as const,
      size: 'md' as const,
    },
  ],
  showSearch: true,
  showLanguageSwitcher: true,
  languages: [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'FranÃ§ais' },
  ],
  sticky: true,
  theme: 'dark' as const,
};

const footer = {
  layout: 'large' as const,
  theme: 'dark' as const,
  animation: 'fade' as const,
  background: 'solid' as const,
  backgroundValue: '#1a1917',
  padding: 'large' as const,
  visible: true,
  logo: { src: null, alt: 'Green Planet Alliance', width: 160, height: 40 },
  description:
    "Protecting and restoring Earth's ecosystems through reforestation, ocean cleanup, renewable energy, and wildlife conservation.",
  columns: [
    {
      title: 'Green Planet Alliance',
      links: [
        { label: 'About', href: `/templates/environment/about` },
        { label: 'Programs', href: `/templates/environment/programs` },
        { label: 'Research', href: `/templates/environment/programs` },
        { label: 'Careers', href: '#' },
      ],
    },
    {
      title: 'Take Action',
      links: [
        { label: 'Donate', href: `/templates/environment/donate` },
        { label: 'Volunteer', href: `/templates/environment/volunteer` },
        { label: 'Petition', href: `/templates/environment/programs` },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: `/templates/environment/news` },
        { label: 'FAQs', href: `/templates/environment/contact` },
        { label: 'Contact', href: `/templates/environment/contact` },
      ],
    },
  ],
  socialLinks: [
    { platform: 'facebook' as const, url: '#', label: 'Facebook' },
    { platform: 'twitter' as const, url: '#', label: 'Twitter' },
    { platform: 'instagram' as const, url: '#', label: 'Instagram' },
    { platform: 'linkedin' as const, url: '#', label: 'LinkedIn' },
    { platform: 'youtube' as const, url: '#', label: 'YouTube' },
  ],
  copyright: 'Â© 2026 Green Planet Alliance. All rights reserved.',
  showBackToTop: true,
};

export const environmentTemplate: TemplateData = {
  slug: 'environment',
  name: 'Environment',
  tagline: 'Protecting nature, restoring hope',
  description:
    'Green-themed design for environmental NGOs featuring reforestation, ocean cleanup, and renewable energy programs.',
  themeId: 'nature',
  mood: 'Fresh, hopeful, action-oriented',
  illustrationStyle: 'Nature photography, forest landscapes, wildlife imagery',
  motionStyle: 'Smooth organic transitions with parallax scrolling effects',
  navigation: nav,
  footer: footer,
  pages: {
    home: {
      seo: {
        title: 'Home â€” Green Planet Alliance',
        description: 'Protecting our planet through conservation and sustainable action.',
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'image' as const,
            theme: 'dark',
            animation: 'parallax',
            background: 'image',
            backgroundValue: '/images/environment/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Protecting Our Planet for Future Generations',
              subtitle: 'Green Planet Alliance',
              description:
                'We work to restore ecosystems, protect endangered species, and combat climate change through science-based conservation and community action.',
              tag: 'Protecting Nature Since 2005',
            },
            backgroundImage: {
              src: '/images/environment/hero.jpg',
              alt: 'Lush aerial forest landscape',
            },
            overlayOpacity: 0.4,
            stats: [
              { value: 10000000, suffix: '+', label: 'Trees Planted' },
              { value: 500000, suffix: ' tons', label: 'CO2 Reduced' },
              { value: 100, suffix: '+', label: 'Species Protected' },
            ],
          },
        },
        {
          type: 'about',
          config: {
            layout: 'default' as const,
            theme: 'light',
            animation: 'fade-in-up',
            background: 'none',
            padding: 'large',
            visible: true,
            variant: 'split',
            body: [
              "Green Planet Alliance was founded in 2005 by conservation biologist Dr. Helen Park and a team of environmental scientists committed to protecting Earth's biodiversity.",
              'We operate in 30 countries, working with indigenous communities, governments, and corporations to implement science-based conservation solutions.',
            ],
            mission:
              "To protect and restore Earth's ecosystems, conserve biodiversity, and combat climate change through science, advocacy, and community partnership.",
            values: [
              {
                title: 'Science First',
                description: 'All our initiatives are guided by peer-reviewed research and data.',
              },
              {
                title: 'Community Led',
                description: 'We partner with indigenous and local communities as equal stewards.',
              },
              {
                title: 'Accountability',
                description:
                  'We measure, report, and continuously improve our environmental impact.',
              },
            ],
            image: {
              src: '/images/environment/gallery1.jpg',
              alt: 'Forest path winding through trees',
            },
          },
        },
        {
          type: 'impact',
          config: {
            theme: 'green',
            animation: 'fade-in-up',
            background: 'muted',
            padding: 'large',
            visible: true,
            layout: 'timeline' as const,
            milestones: [
              {
                year: '2005',
                title: 'Founded in the Amazon',
                description:
                  'Dr. Helen Park established the organization to research deforestation.',
              },
              {
                year: '2009',
                title: '1 Million Trees Planted',
                description:
                  'First major reforestation milestone with indigenous communities in Brazil.',
              },
              {
                year: '2013',
                title: 'Ocean Cleanup Program Launch',
                description: 'Plastic removal operations deployed across Southeast Asia.',
              },
              {
                year: '2018',
                title: 'Renewable Energy Milestone',
                description:
                  'Solar power brought to 100 off-grid communities across Africa and Asia.',
              },
              {
                year: '2026',
                title: '10 Million Trees Planted',
                description:
                  'Forests restored across 30 countries, 50,000 hectares of degraded land recovered.',
              },
            ],
          },
        },
        {
          type: 'programs',
          config: {
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            layout: 'carousel' as const,
            programs: [
              {
                id: 'reforestation',
                title: 'Global Reforestation',
                description:
                  'Large-scale tree planting and forest restoration projects across degraded lands, partnering with local communities to create thriving ecosystems.',
                image: { src: '/images/environment/gallery3.jpg', alt: 'Tree planting volunteers' },
                category: 'Reforestation',
                impactStat: '10M+ trees planted',
                cta: { label: 'Learn More', href: `/templates/environment/programs` },
                featured: true,
              },
              {
                id: 'ocean-cleanup',
                title: 'Ocean Cleanup Initiative',
                description:
                  'Removing plastic waste from oceans and rivers while preventing future pollution through circular economy solutions and policy advocacy.',
                image: { src: '/images/environment/ocean.jpg', alt: 'Ocean cleanup operation' },
                category: 'Ocean',
                impactStat: '50K+ tons removed',
                cta: { label: 'Learn More', href: `/templates/environment/programs` },
              },
              {
                id: 'renewable-energy',
                title: 'Renewable Energy Access',
                description:
                  'Bringing solar, wind, and clean energy solutions to off-grid communities, reducing carbon emissions and improving quality of life.',
                image: { src: '/images/environment/solar.jpg', alt: 'Solar panel installation' },
                category: 'Energy',
                impactStat: '200K+ people served',
                cta: { label: 'Learn More', href: `/templates/environment/programs` },
              },
              {
                id: 'wildlife',
                title: 'Wildlife Conservation',
                description:
                  'Protecting endangered species and their habitats through anti-poaching patrols, habitat preservation, and community-based conservation programs.',
                image: { src: '/images/environment/forest.jpg', alt: 'Elephant in wild' },
                category: 'Wildlife',
                impactStat: '100+ species protected',
                cta: { label: 'Learn More', href: `/templates/environment/programs` },
              },
            ],
            showCategoryBadges: true,
            showImpactStats: true,
          },
        },
        {
          type: 'testimonials',
          config: {
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: { title: '' },
            layout: 'stacked' as const,
            testimonials: [
              {
                quote:
                  'Green Planet helped our village restore a degraded forest. Now we have clean water, increased rainfall, and a sustainable source of income from agroforestry.',
                name: 'Maria Santos',
                role: 'Community Leader, Brazil',
                avatar: { src: '/images/environment/gallery1.jpg', alt: 'Maria Santos' },
              },
              {
                quote:
                  'I have been a volunteer tree planter for five years. Planting over 10,000 trees with my own hands is the most meaningful work I have ever done.',
                name: 'Tom Harrison',
                role: 'Volunteer, UK',
                avatar: { src: '/images/environment/gallery4.jpg', alt: 'Tom Harrison' },
              },
              {
                quote:
                  'The solar project transformed our health clinic. We now have reliable electricity for vaccines, lights for night emergencies, and clean water pumping.',
                name: 'Grace Nkosi',
                role: 'Nurse, Malawi',
                avatar: { src: '/images/environment/gallery5.jpg', alt: 'Grace Nkosi' },
              },
            ],
          },
        },
        {
          type: 'gallery',
          config: {
            theme: 'light',
            animation: 'fade-in-up',
            background: 'muted',
            padding: 'large',
            visible: true,
            heading: { title: 'Our Work in Pictures', subtitle: "Nature's Beauty in Focus" },
            layout: 'pinterest' as const,
            images: [
              { src: '/images/environment/gallery2.jpg', alt: 'Forest canopy from above' },
              { src: '/images/environment/hero.jpg', alt: 'Sunlit forest path' },
              { src: '/images/environment/ocean.jpg', alt: 'Ocean waves at sunset' },
              { src: '/images/environment/gallery7.jpg', alt: 'Wildlife in natural habitat' },
              { src: '/images/environment/community.jpg', alt: 'Community tree planting event' },
              { src: '/images/environment/gallery6.jpg', alt: 'Beach cleanup volunteers' },
            ],
          },
        },
        {
          type: 'news',
          config: {
            theme: 'light',
            animation: 'fade-in-up',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: { title: 'Latest News & Updates', subtitle: 'Stories from the Field' },
            layout: 'timeline' as const,
            articles: [
              {
                title: '10 Million Trees Planted â€” A Historic Milestone',
                slug: '10m-trees',
                date: '2026-06-10',
                category: 'Reforestation',
                excerpt:
                  'Green Planet Alliance has planted 10 million trees across 30 countries, restoring 50,000 hectares of degraded land.',
                image: '/images/environment/community.jpg',
                author: { name: 'Dr. Helen Park' },
              },
              {
                title: 'Great Pacific Garbage Patch Shrinks by 15%',
                slug: 'garbage-patch',
                date: '2026-05-22',
                category: 'Ocean',
                excerpt:
                  'Our ocean cleanup fleet removed 50,000 tons of plastic, contributing to measurable reduction in the garbage patch size.',
                image: '/images/environment/forest.jpg',
                author: { name: 'James Morton' },
              },
              {
                title: 'New Solar Microgrid Powers 50 Villages in Rwanda',
                slug: 'rwanda-solar',
                date: '2026-04-18',
                category: 'Energy',
                excerpt:
                  'A new solar microgrid installation is bringing clean, reliable electricity to 50 off-grid villages in rural Rwanda.',
                image: '/images/environment/community.jpg',
                author: { name: 'Amina Uwimana' },
              },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'banner' as const,
            heading: 'Protect Our Planet',
            description:
              '$10 plants 10 trees. $50 removes 100 lbs of ocean plastic. $500 brings solar power to a community.',
            primaryCta: {
              label: 'Donate Now',
              href: `/templates/environment/donate`,
              variant: 'primary' as const,
            },
            secondaryCta: {
              label: 'Become a Monthly Guardian',
              href: `/templates/environment/donate`,
              variant: 'outline' as const,
            },
            donateAmounts: [10, 25, 50, 100, 250, 500],
            background: 'gradient' as const,
            backgroundValue: 'linear-gradient(135deg, #1b5e20, #2e7d32, #43a047)',
          },
        },
        {
          type: 'partnerLogos',
          config: {
            layout: 'default' as const,
            theme: 'light',
            animation: 'fade',
            background: 'muted',
            padding: 'large',
            visible: true,
            heading: { title: 'Our Conservation Partners' },
            variant: 'grid' as const,
            partners: [
              { name: 'WWF', logo: { src: '/images/partners/wwf.svg', alt: 'WWF' } },
              {
                name: 'Greenpeace',
                logo: { src: '/images/partners/greenpeace.svg', alt: 'Greenpeace' },
              },
              { name: 'UNEP', logo: { src: '/images/partners/default.svg', alt: 'UNEP' } },
              {
                name: 'TNC',
                logo: {
                  src: '/images/partners/nature-conservancy.svg',
                  alt: 'The Nature Conservancy',
                },
              },
            ],
          },
        },
      ],
    },
    about: {
      seo: {
        title: 'About â€” Green Planet Alliance',
        description: "Our mission to protect Earth's ecosystems.",
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/environment/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Our Story',
              subtitle: 'About Green Planet Alliance',
              description:
                'From a small group of scientists to a global conservation movement â€” our journey to protect nature.',
            },
            backgroundImage: {
              src: '/images/environment/hero.jpg',
              alt: 'Lush aerial forest landscape',
            },
            overlayOpacity: 0.5,
          },
        },
        {
          type: 'about',
          config: {
            layout: 'default' as const,
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            variant: 'timeline',
            body: [
              'Founded in 2005 by conservation biologist Dr. Helen Park, Green Planet Alliance started as a research project studying deforestation in the Amazon.',
              'Today we are a global organization with programs in 30 countries, employing 2,500 staff and supported by 100,000 active donors worldwide.',
            ],
            mission: "To protect and restore Earth's ecosystems for the benefit of all life.",
            timeline: [
              {
                year: '2005',
                title: 'Founded in the Amazon',
                description:
                  'Dr. Helen Park established the organization to research deforestation.',
              },
              {
                year: '2009',
                title: 'First Reforestation Project',
                description:
                  'Planted 1 million trees in partnership with indigenous communities in Brazil.',
              },
              {
                year: '2013',
                title: 'Ocean Cleanup Launch',
                description: 'Launched our ocean plastic removal program across Southeast Asia.',
              },
              {
                year: '2018',
                title: 'Renewable Energy Program',
                description: 'Brought solar power to 100 off-grid communities in Africa and Asia.',
              },
              {
                year: '2024',
                title: '10 Million Trees Planted',
                description: 'Celebrated planting 10 million trees across 30 countries.',
              },
            ],
            image: { src: '/images/environment/gallery6.jpg', alt: 'Green Planet timeline' },
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered' as const,
            heading: 'Join the Green Movement',
            description: 'Together we can restore our planet for future generations.',
            primaryCta: {
              label: 'Support Conservation',
              href: `/templates/environment/donate`,
              variant: 'primary' as const,
            },
          },
        },
      ],
    },
    programs: {
      seo: {
        title: 'Programs â€” Green Planet Alliance',
        description: 'Our environmental conservation programs.',
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/environment/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Our Programs',
              subtitle: 'How We Protect Nature',
              description:
                'From reforestation to ocean cleanup â€” discover our comprehensive approach to environmental conservation.',
            },
            backgroundImage: {
              src: '/images/environment/hero.jpg',
              alt: 'Lush aerial forest landscape',
            },
            overlayOpacity: 0.5,
          },
        },
        {
          type: 'programs',
          config: {
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            layout: 'bento' as const,
            programs: [
              {
                id: 'reforestation',
                title: 'Global Reforestation',
                description:
                  'Large-scale tree planting restoring degraded forests and creating wildlife corridors.',
                image: { src: '/images/environment/gallery3.jpg', alt: 'Forest restoration' },
                category: 'Reforestation',
                impactStat: '10M+ trees',
                cta: { label: 'Details', href: `/templates/environment/programs` },
                featured: true,
              },
              {
                id: 'ocean-cleanup',
                title: 'Ocean Cleanup',
                description: 'Removing plastic waste from oceans and rivers worldwide.',
                image: { src: '/images/environment/ocean.jpg', alt: 'Ocean cleanup' },
                category: 'Ocean',
                impactStat: '50K+ tons removed',
                cta: { label: 'Details', href: `/templates/environment/programs` },
              },
              {
                id: 'renewable-energy',
                title: 'Renewable Energy',
                description: 'Solar and wind energy for off-grid communities.',
                image: { src: '/images/environment/solar.jpg', alt: 'Solar farm' },
                category: 'Energy',
                impactStat: '200K+ served',
                cta: { label: 'Details', href: `/templates/environment/programs` },
              },
              {
                id: 'wildlife',
                title: 'Wildlife Conservation',
                description:
                  'Protecting endangered species through anti-poaching and habitat preservation.',
                image: { src: '/images/environment/forest.jpg', alt: 'Wildlife habitat' },
                category: 'Wildlife',
                impactStat: '100+ species',
                cta: { label: 'Details', href: `/templates/environment/programs` },
              },
            ],
            showCategoryBadges: true,
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'donate' as const,
            heading: 'Fund Conservation Projects',
            description:
              'Your donation directly funds tree planting, ocean cleanup, and wildlife protection.',
            primaryCta: {
              label: 'Donate to Nature',
              href: `/templates/environment/donate`,
              variant: 'primary' as const,
            },
          },
        },
      ],
    },
    'program-detail': {
      seo: {
        title: 'Global Reforestation â€” Green Planet Alliance',
        description: 'Our reforestation program restoring forests worldwide.',
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'split' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/environment/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Global Reforestation',
              subtitle: 'Program Details',
              description:
                'Restoring degraded landscapes through mass-scale tree planting, agroforestry, and native forest regeneration.',
            },
            backgroundImage: {
              src: '/images/environment/hero.jpg',
              alt: 'Lush aerial forest landscape',
            },
            overlayOpacity: 0.5,
          },
        },
        {
          type: 'about',
          config: {
            layout: 'default' as const,
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            variant: 'story',
            body: [
              'Our reforestation program works across 30 countries to restore forests that have been lost to agriculture, logging, and wildfires.',
              'We use a mix of native species planting, natural regeneration, and agroforestry â€” ensuring restored forests support both biodiversity and local livelihoods.',
              'Each tree is geotagged and monitored for survival rates. Our five-year survival rate is 85%, exceeding industry standards by 20%.',
              'We have planted over 10 million trees, restored 50,000 hectares of degraded land, and created 15,000 green jobs for local communities.',
            ],
            image: { src: '/images/environment/gallery5.jpg', alt: 'New forest growth' },
          },
        },
        {
          type: 'impact',
          config: {
            theme: 'light',
            animation: 'fade',
            background: 'muted',
            padding: 'large',
            visible: true,
            layout: 'progress' as const,
            stats: [
              { value: 10000000, suffix: '+', label: 'Trees Planted' },
              { value: 85, suffix: '%', label: 'Survival Rate' },
              { value: 50000, suffix: ' ha', label: 'Land Restored' },
            ],
          },
        },
        {
          type: 'gallery',
          config: {
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            layout: 'carousel' as const,
            images: [
              { src: '/images/environment/gallery4.jpg', alt: 'Volunteers planting trees' },
              { src: '/images/environment/forest.jpg', alt: 'Forest nursery' },
              { src: '/images/environment/gallery3.jpg', alt: 'Regrown forest after 5 years' },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'donate' as const,
            heading: 'Plant Trees, Restore Hope',
            description:
              '$1 plants one tree. $100 plants a mini-forest. $10,000 restores an entire hectare.',
            primaryCta: {
              label: 'Plant Trees Now',
              href: `/templates/environment/donate`,
              variant: 'primary' as const,
            },
            donateAmounts: [10, 25, 50, 100, 500, 10000],
          },
        },
      ],
    },
    gallery: {
      seo: {
        title: 'Gallery â€” Green Planet Alliance',
        description: 'Photos of conservation in action.',
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/environment/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Gallery',
              subtitle: "Nature's Beauty",
              description:
                'Stunning photographs capturing the beauty of nature and the impact of our conservation work.',
            },
            backgroundImage: {
              src: '/images/environment/hero.jpg',
              alt: 'Lush aerial forest landscape',
            },
            overlayOpacity: 0.5,
          },
        },
        {
          type: 'gallery',
          config: {
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            layout: 'masonry' as const,
            images: [
              { src: '/images/environment/community.jpg', alt: 'Forest canopy' },
              { src: '/images/environment/gallery2.jpg', alt: 'Coral reef' },
              { src: '/images/environment/gallery3.jpg', alt: 'Wildlife' },
              { src: '/images/environment/gallery4.jpg', alt: 'Tree planting event' },
              { src: '/images/environment/gallery5.jpg', alt: 'Solar installation' },
              { src: '/images/environment/gallery6.jpg', alt: 'Beach cleanup' },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered' as const,
            heading: 'Help Us Protect These Places',
            description: "Every donation helps preserve our planet's most precious ecosystems.",
            primaryCta: {
              label: 'Donate Now',
              href: `/templates/environment/donate`,
              variant: 'primary' as const,
            },
          },
        },
      ],
    },
    donate: {
      seo: {
        title: 'Donate â€” Green Planet Alliance',
        description: 'Support environmental conservation.',
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/environment/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Make a Donation',
              subtitle: 'Your Gift Grows Forests',
              description: 'Every contribution plants trees, cleans oceans, and protects wildlife.',
            },
            backgroundImage: {
              src: '/images/environment/hero.jpg',
              alt: 'Lush aerial forest landscape',
            },
            overlayOpacity: 0.5,
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'donate' as const,
            heading: 'Choose Your Impact',
            description: 'Select an amount to donate or become a monthly guardian of nature.',
            primaryCta: {
              label: 'Donate Now',
              href: `/templates/environment/donate`,
              variant: 'primary' as const,
            },
            donateAmounts: [10, 25, 50, 100, 250, 500],
            benefits: [
              { text: 'Every dollar plants trees' },
              { text: 'Monthly impact report' },
              { text: 'Tax deductible' },
            ],
          },
        },
        {
          type: 'impact',
          config: {
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            layout: 'cards' as const,
            stats: [
              { value: 10, suffix: '', prefix: '$', label: 'Plants 10 trees' },
              { value: 50, suffix: '', prefix: '$', label: 'Removes 100 lbs of plastic' },
              { value: 100, suffix: '', prefix: '$', label: 'Powers a clinic with solar' },
              { value: 500, suffix: '', prefix: '$', label: 'Protects 10 acres of forest' },
            ],
          },
        },
        {
          type: 'testimonials',
          config: {
            theme: 'light',
            animation: 'fade',
            background: 'muted',
            padding: 'large',
            visible: true,
            heading: { title: '' },
            layout: 'carousel' as const,
            testimonials: [
              {
                quote:
                  'I plant trees through Green Planet every month. Knowing my small contribution is restoring forests keeps me hopeful about our planet future.',
                name: 'Anna Svensson',
                role: 'Monthly Donor, Sweden',
              },
              {
                quote:
                  'After visiting a reforestation site in Kenya, I doubled my donation. Seeing the impact in person was incredible.',
                name: 'Robert Chen',
                role: 'Donor, Singapore',
              },
            ],
          },
        },
      ],
    },
    volunteer: {
      seo: {
        title: 'Volunteer â€” Green Planet Alliance',
        description: 'Join our conservation volunteer team.',
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'split' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/environment/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Volunteer With Us',
              subtitle: 'Get Your Hands Dirty for Nature',
              description:
                'Join tree planting events, beach cleanups, and citizen science projects around the world.',
            },
            backgroundImage: {
              src: '/images/environment/hero.jpg',
              alt: 'Lush aerial forest landscape',
            },
            overlayOpacity: 0.5,
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'volunteer' as const,
            heading: 'Become a Conservation Volunteer',
            description: 'We need tree planters, beach cleaners, and citizen scientists.',
            primaryCta: {
              label: 'Apply Now',
              href: `/templates/environment/volunteer`,
              variant: 'primary' as const,
            },
            benefits: [
              { text: 'Work in stunning natural locations' },
              { text: 'Learn conservation skills' },
              { text: 'Travel with purpose' },
            ],
          },
        },
        {
          type: 'faq',
          config: {
            layout: 'default' as const,
            theme: 'light',
            animation: 'fade',
            background: 'muted',
            padding: 'large',
            visible: true,
            heading: { title: 'Volunteer FAQs' },
            items: [
              {
                title: 'Do I need conservation experience?',
                content:
                  'No, we provide training for all roles. Enthusiasm for nature is all you need.',
              },
              {
                title: 'Are there local volunteer opportunities?',
                content: 'Yes, we have local tree planting and cleanup events in most cities.',
              },
              {
                title: 'Is there a minimum age?',
                content: 'Minors aged 12+ can volunteer with a parent or guardian.',
              },
            ],
            allowMultiple: false,
            variant: 'bordered' as const,
          },
        },
      ],
    },
    news: {
      seo: {
        title: 'News â€” Green Planet Alliance',
        description: 'Latest environmental news and updates.',
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/environment/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'News & Updates',
              subtitle: 'Stories from the Field',
              description:
                'Read about conservation victories, research breakthroughs, and our fight for a greener planet.',
            },
            backgroundImage: {
              src: '/images/environment/hero.jpg',
              alt: 'Lush aerial forest landscape',
            },
            overlayOpacity: 0.5,
          },
        },
        {
          type: 'news',
          config: {
            heading: 'Latest Stories',
            layout: 'magazine' as const,
            articles: [
              {
                title: '10 Million Trees Planted â€” A Historic Milestone',
                slug: '10m-trees',
                date: '2026-06-10',
                category: 'Reforestation',
                excerpt:
                  'Green Planet Alliance has planted 10 million trees across 30 countries, restoring 50,000 hectares of degraded land.',
                image: '/images/environment/gallery3.jpg',
                author: { name: 'Dr. Helen Park' },
              },
              {
                title: 'Great Pacific Garbage Patch Shrinks by 15%',
                slug: 'garbage-patch',
                date: '2026-05-22',
                category: 'Ocean',
                excerpt:
                  'Our ocean cleanup fleet removed 50,000 tons of plastic, contributing to measurable reduction in the garbage patch size.',
                image: '/images/environment/gallery1.jpg',
                author: { name: 'James Morton' },
              },
              {
                title: 'New Solar Microgrid Powers 50 Villages in Rwanda',
                slug: 'rwanda-solar',
                date: '2026-04-18',
                category: 'Energy',
                excerpt:
                  'A new solar microgrid installation is bringing clean, reliable electricity to 50 off-grid villages in rural Rwanda.',
                image: '/images/environment/gallery2.jpg',
                author: { name: 'Amina Uwimana' },
              },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'banner' as const,
            heading: 'Stay Connected to Nature',
            description: 'Subscribe for conservation news and action alerts.',
            primaryCta: { label: 'Subscribe', href: '#', variant: 'primary' as const },
          },
        },
      ],
    },
    contact: {
      seo: {
        title: 'Contact â€” Green Planet Alliance',
        description: 'Get in touch with our conservation team.',
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/environment/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Contact Us',
              subtitle: 'Nature Needs a Voice',
              description:
                'Questions about conservation, partnership opportunities, or media inquiries â€” we would love to hear from you.',
            },
            backgroundImage: {
              src: '/images/environment/hero.jpg',
              alt: 'Lush aerial forest landscape',
            },
            overlayOpacity: 0.5,
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'contact' as const,
            heading: 'Get in Touch',
            description: 'Reach out to our team for questions, partnership inquiries, or support.',
            email: 'info@greenplanetalliance.org',
            phone: '+1 (555) 345-6789',
            address: '800 Earth Avenue, Portland, OR 97204',
            primaryCta: { label: 'Send Message', href: '#', variant: 'primary' as const },
          },
        },
        {
          type: 'faq',
          config: {
            layout: 'default' as const,
            theme: 'light',
            animation: 'fade',
            background: 'muted',
            padding: 'large',
            visible: true,
            heading: { title: 'Quick Answers' },
            items: [
              {
                title: 'How do I organize a tree planting event?',
                content:
                  'Contact our community team at events@greenplanetalliance.org to get started.',
              },
              {
                title: 'Can I offset my carbon footprint?',
                content:
                  'Yes, use our carbon calculator to determine your footprint and donate to plant the right number of trees.',
              },
              {
                title: 'How do I report an environmental violation?',
                content: 'Submit a report through our website or call our environmental hotline.',
              },
            ],
            allowMultiple: false,
            variant: 'bordered' as const,
          },
        },
      ],
    },
  },
};
