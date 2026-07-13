import type { TemplateData } from './types';

const href = (path: string) => `/templates/disaster-relief${path}`;

const nav = {
  layout: 'transparent' as const,
  logo: { text: 'RapidAid International', href: href('') },
  menuItems: [
    { label: 'Home', href: href('') },
    { label: 'About', href: href('/about') },
    {
      label: 'Programs',
      href: href('/programs'),
      children: [
        { label: 'Emergency Shelter', href: href('/program-detail') },
        { label: 'Medical Response', href: href('/programs') },
        { label: 'Food Distribution', href: href('/programs') },
        { label: 'Reconstruction', href: href('/programs') },
      ],
    },
    { label: 'Campaigns', href: href('/campaigns') },
    { label: 'Gallery', href: href('/gallery') },
    { label: 'News', href: href('/news') },
    { label: 'Contact', href: href('/contact') },
  ],
  ctaButtons: [
    { label: 'Donate', href: href('/donate'), variant: 'primary' as const, size: 'lg' as const },
  ],
  showSearch: true,
  showLanguageSwitcher: true,
  languages: [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'FranÃ§ais' },
    { code: 'ar', label: 'Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©' },
    { code: 'es', label: 'EspaÃ±ol' },
  ],
  sticky: true,
  theme: 'dark' as const,
};

const footer = {
  layout: 'mega' as const,
  theme: 'dark' as const,
  animation: 'fade' as const,
  background: 'solid' as const,
  backgroundValue: '#0f1d33',
  padding: 'large' as const,
  visible: true,
  logo: { text: 'RapidAid International', href: href('') },
  description:
    'When disaster strikes, we respond. Delivering emergency shelter, food, medical care, and hope to communities devastated by natural disasters and humanitarian crises worldwide.',
  columns: [
    {
      title: 'Our Programs',
      links: [
        { label: 'Emergency Shelter', href: href('/program-detail') },
        { label: 'Medical Response', href: href('/programs') },
        { label: 'Food Distribution', href: href('/programs') },
        { label: 'Reconstruction', href: href('/programs') },
        { label: 'Water & Sanitation', href: href('/programs') },
      ],
    },
    {
      title: 'Get Involved',
      links: [
        { label: 'Donate Now', href: href('/donate') },
        { label: 'Volunteer', href: href('/volunteer') },
        { label: 'Current Campaigns', href: href('/campaigns') },
        { label: 'Partner With Us', href: href('/contact') },
        { label: 'Careers', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Emergency Updates', href: href('/news') },
        { label: 'Annual Reports', href: href('/reports') },
        { label: 'Transparency', href: href('/reports') },
        { label: 'FAQ', href: href('/faq') },
        { label: 'Contact Us', href: href('/contact') },
      ],
    },
    {
      title: '24/7 Emergency',
      links: [
        { label: 'Emergency Hotline: +1 (800) 555-0299', href: 'tel:+18005550299' },
        { label: 'Report a Disaster', href: href('/contact') },
        { label: 'Media Inquiries', href: href('/contact') },
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
  copyright: 'Â© 2026 RapidAid International. All rights reserved. Registered 501(c)(3) nonprofit.',
  showBackToTop: true,
  legalLinks: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Transparency Report', href: href('/reports') },
  ],
};

const seo = {
  home: {
    title: 'RapidAid International â€” When Disaster Strikes, We Respond',
    description:
      'RapidAid International delivers emergency shelter, food, medical care, and hope to communities devastated by natural disasters and humanitarian crises worldwide.',
  },
  about: {
    title: 'About Us â€” RapidAid International',
    description:
      "Learn about RapidAid International's mission to provide immediate, effective humanitarian aid to communities affected by disasters since 2002.",
  },
  programs: {
    title: 'Our Programs â€” RapidAid International',
    description:
      'Emergency shelter, medical response, food distribution, reconstruction, and water sanitation programs saving lives in disaster zones.',
  },
  'program-detail': {
    title: 'Emergency Shelter Program â€” RapidAid International',
    description:
      'Providing immediate shelter solutions for families displaced by natural disasters and humanitarian crises.',
  },
  campaigns: {
    title: 'Emergency Campaigns â€” RapidAid International',
    description:
      'Urgent relief campaigns responding to active disasters. See where we are deployed and how you can help.',
  },
  volunteer: {
    title: 'Volunteer â€” RapidAid International',
    description:
      'Join our emergency response team. Medical personnel, logisticians, and general responders needed for disaster relief missions worldwide.',
  },
  donate: {
    title: 'Donate â€” RapidAid International',
    description:
      'Your donation saves lives. 93% of every dollar goes directly to emergency relief programs providing shelter, food, and medical care.',
  },
  gallery: {
    title: 'Gallery â€” RapidAid International',
    description:
      'Images from our emergency response missions, field hospitals, and reconstruction projects around the world.',
  },
  news: {
    title: 'News â€” RapidAid International',
    description:
      'Latest updates, emergency response reports, survivor stories, and disaster preparedness resources.',
  },
  reports: {
    title: 'Reports & Transparency â€” RapidAid International',
    description:
      'Annual reports, financial transparency, impact metrics, and emergency response data.',
  },
  faq: {
    title: 'FAQ â€” RapidAid International',
    description:
      'Frequently asked questions about RapidAid International, our emergency response, and how to help.',
  },
  contact: {
    title: 'Contact Us â€” RapidAid International',
    description:
      'Get in touch with RapidAid International. Emergency hotline, partnership inquiries, and media requests.',
  },
  'not-found': {
    title: 'Page Not Found â€” RapidAid International',
    description: 'The page you are looking for could not be found.',
  },
};

export const disasterReliefTemplate: TemplateData = {
  slug: 'disaster-relief',
  name: 'Disaster Relief NGO',
  tagline: 'Rapid response. Saving lives. Restoring hope.',
  description:
    'A bold, urgent, and trustworthy disaster relief NGO template for organizations responding to natural disasters and humanitarian crises. Features a high-contrast palette with emergency red, deep navy, and amber.',
  themeId: 'disaster-relief',
  mood: 'Urgent, Determined, Hopeful, Action-Oriented',
  illustrationStyle:
    'Documentary photography, crisis imagery, action shots, before/after reconstruction photos',
  motionStyle:
    'Fast-paced urgent transitions with kinetic counters, progress bar animations, and dramatic scroll reveals. Bold and purposeful motion design.',
  navigation: nav,
  footer: footer,
  pages: {
    home: {
      seo: seo.home,
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'left',
            theme: 'dark',
            animation: 'parallax',
            background: 'image',
            backgroundValue: '/images/disaster/hero.jpg',
            padding: 'none',
            visible: true,
            fullHeight: false,
            overlayOpacity: 0.5,
            heading: {
              title: 'When Disaster Strikes, We Respond',
              subtitle: 'RapidAid International',
              description:
                'Delivering emergency shelter, food, medical care, and hope to communities devastated by natural disasters and humanitarian crises. We deploy within 72 hours anywhere in the world.',
              tag: '24/7 Emergency Response â€” Deployed in 50+ Countries',
            },
            backgroundImage: {
              src: '/images/disaster/hero.jpg',
              alt: 'Emergency response team at work',
            },
            stats: [
              { value: 5000000, suffix: '+', label: 'People Helped' },
              { value: 500, suffix: '+', label: 'Disaster Responses' },
              { value: 50, suffix: '', label: 'Countries' },
              { value: 72, suffix: ' hrs', label: 'Avg. Deployment' },
            ],
          },
        },
        {
          type: 'programs',
          config: {
            layout: 'list',
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            showCategoryBadges: true,
            heading: {
              title: 'Emergency Relief Programs',
              subtitle: 'Saving Lives Around the Clock',
              description:
                'Our comprehensive emergency response infrastructure is always ready to deploy.',
            },
            programs: [
              {
                id: 'shelter',
                title: 'Emergency Shelter',
                description: 'Rapidly deployable tents and shelter kits for displaced families.',
                image: { src: '/images/disaster/gallery1.jpg', alt: 'Emergency shelter' },
                category: 'Shelter',
                cta: { label: 'Learn More', href: `/templates/disaster-relief/program-detail` },
                featured: true,
              },
              {
                id: 'medical',
                title: 'Medical Response',
                description:
                  'Self-contained field hospitals and mobile clinics for disaster zones.',
                image: { src: '/images/disaster/gallery2.jpg', alt: 'Field hospital' },
                category: 'Medical',
                cta: { label: 'Learn More', href: `/templates/disaster-relief/programs` },
              },
              {
                id: 'food',
                title: 'Food & Water',
                description:
                  'Emergency food rations and water purification systems for affected communities.',
                image: { src: '/images/disaster/gallery3.jpg', alt: 'Food distribution' },
                category: 'Food Security',
                cta: { label: 'Learn More', href: `/templates/disaster-relief/programs` },
              },
              {
                id: 'reconstruction',
                title: 'Reconstruction',
                description:
                  'Disaster-resilient rebuilding of homes, schools, and critical infrastructure.',
                image: { src: '/images/disaster/gallery4.jpg', alt: 'Reconstruction' },
                category: 'Recovery',
                cta: { label: 'Learn More', href: `/templates/disaster-relief/programs` },
              },
            ],
          },
        },
        {
          type: 'impact',
          config: {
            layout: 'counters',
            theme: 'primary',
            animation: 'fade',
            background: 'dark',
            padding: 'large',
            visible: true,
            columns: 4,
            heading: {
              title: 'Our Global Emergency Response',
              subtitle: 'Making a Measurable Difference',
            },
            stats: [
              { value: 5000000, suffix: '+', label: 'People Helped' },
              { value: 500, suffix: '+', label: 'Disasters Responded' },
              { value: 50, suffix: '', label: 'Countries of Operation' },
              { value: 50000, suffix: '+', label: 'Trained Volunteers' },
            ],
          },
        },
        {
          type: 'about',
          config: {
            layout: 'default',
            variant: 'story',
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: { title: 'About RapidAid International', subtitle: 'History & Mission' },
            body: [
              'Founded in 2002, RapidAid International has grown from a single warehouse in Portland, Oregon to a global humanitarian network spanning 50 countries.',
              'Our mission is simple: save lives by providing immediate, effective emergency relief to communities devastated by natural disasters and humanitarian crises.',
              'With 15 pre-positioning warehouses, 50,000 trained volunteers, and a global logistics network, we can deliver aid to any disaster zone within 72 hours.',
            ],
            image: { src: '/images/disaster/gallery5.jpg', alt: 'RapidAid emergency response' },
            stats: [
              { value: 2002, suffix: '', label: 'Founded' },
              { value: 94, suffix: '%', label: 'Program Efficiency' },
            ],
          },
        },
        {
          type: 'testimonials',
          config: {
            layout: 'carousel',
            theme: 'light',
            animation: 'fade',
            background: 'muted',
            padding: 'large',
            visible: true,
            heading: { title: 'Stories of Resilience', subtitle: 'Hear From Those We Help' },
            testimonials: [
              {
                quote:
                  'When the flood destroyed our home, RapidAid was there within hours. They gave us shelter, food, and hope when we had nothing.',
                name: 'Fatima Al-Hassan',
                role: 'Flood Survivor, Bangladesh',
                rating: 5,
                avatar: { src: '/images/disaster/gallery6.jpg', alt: 'Fatima Al-Hassan' },
              },
              {
                quote:
                  "I volunteered as a medic after the earthquake. RapidAid's training and support made me effective in the most challenging conditions I have ever faced.",
                name: 'Dr. James Carter',
                role: 'Volunteer Medic, Haiti',
                rating: 5,
                avatar: { src: '/images/disaster/gallery2.jpg', alt: 'Dr. James Carter' },
              },
              {
                quote:
                  'The reconstruction program rebuilt our entire village with disaster-resistant homes. We are safer now than ever before.',
                name: 'Maria Santos',
                role: 'Community Leader, Philippines',
                rating: 5,
                avatar: { src: '/images/disaster/gallery3.jpg', alt: 'Maria Santos' },
              },
            ],
          },
        },
        {
          type: 'gallery',
          config: {
            layout: 'grid',
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Emergency Response in Action',
              subtitle: 'Photos from the Frontline',
            },
            images: [
              { src: '/images/disaster/hero.jpg', alt: 'Emergency shelter camp' },
              { src: '/images/disaster/rebuild.jpg', alt: 'Field hospital operation' },
              { src: '/images/disaster/rescue.jpg', alt: 'Food distribution center' },
              { src: '/images/disaster/hero.jpg', alt: 'Reconstruction project' },
              { src: '/images/disaster/rebuild.jpg', alt: 'Volunteer training' },
              { src: '/images/disaster/rescue.jpg', alt: 'Water purification system' },
            ],
          },
        },
        {
          type: 'news',
          config: {
            layout: 'cards',
            theme: 'light',
            animation: 'fade',
            background: 'muted',
            padding: 'large',
            visible: true,
            columns: 3,
            heading: {
              title: 'Latest Emergency Updates',
              subtitle: 'Real-Time News from the Field',
            },
            articles: [
              {
                title: 'South Asia Flood Emergency: 2 Million People Displaced',
                slug: 'south-asia-flood',
                date: '2026-07-13',
                category: 'Emergency Alerts',
                excerpt:
                  'Monsoon floods across Bangladesh, India, and Nepal have displaced over 2 million people. Our teams are deploying emergency shelter, food, and medical aid.',
                image: '/images/disaster/gallery1.jpg',
                author: { name: 'Aisha Patel' },
              },
              {
                title: 'Field Hospital Network Reaches 50,000 Patients Treated',
                slug: 'field-hospital-50k',
                date: '2026-07-10',
                category: 'Field Reports',
                excerpt:
                  'Our mobile field hospital network in East Africa has now treated over 50,000 patients since deployment, providing surgical and primary care in remote areas.',
                image: '/images/disaster/gallery2.jpg',
                author: { name: 'James Kimani' },
              },
              {
                title: 'Meet Maria: From Refugee to Disaster Responder',
                slug: 'maria-story',
                date: '2026-07-08',
                category: 'Volunteer Spotlight',
                excerpt:
                  'Maria fled conflict at age 10. Today, she leads our WASH teams in the same region where she once received aid.',
                image: '/images/disaster/gallery3.jpg',
                author: { name: 'Sarah Mitchell' },
              },
            ],
          },
        },
        {
          type: 'partners',
          config: {
            layout: 'carousel',
            theme: 'light',
            animation: 'fade',
            background: 'muted',
            padding: 'large',
            visible: true,
            heading: { title: 'Trusted Partners', subtitle: 'Organizations We Work With' },
            partners: [
              { name: 'UN OCHA', logo: { src: '/images/partners/default.svg', alt: 'UN OCHA' } },
              { name: 'IFRC', logo: { src: '/images/partners/default.svg', alt: 'IFRC' } },
              { name: 'USAID', logo: { src: '/images/partners/usaid.svg', alt: 'USAID' } },
              {
                name: 'World Food Programme',
                logo: { src: '/images/partners/default.svg', alt: 'WFP' },
              },
              {
                name: 'Charity Navigator',
                logo: { src: '/images/partners/default.svg', alt: 'Charity Navigator' },
              },
              {
                name: 'GuideStar',
                logo: { src: '/images/partners/default.svg', alt: 'GuideStar' },
              },
            ],
          },
        },
        {
          type: 'transparency',
          config: {
            layout: 'default',
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: { title: 'Financial Transparency', subtitle: 'Your Donations at Work' },
            body: [
              'We believe radical transparency builds trust. Every dollar is tracked from donation to impact.',
            ],
            stats: [
              {
                value: 94,
                suffix: '%',
                label: 'Programs',
                description: 'Directly to emergency response',
              },
              {
                value: 4,
                suffix: '%',
                label: 'Administration',
                description: 'Operations & management',
              },
              {
                value: 2,
                suffix: '%',
                label: 'Fundraising',
                description: 'Donor acquisition & engagement',
              },
            ],
          },
        },
        {
          type: 'faq',
          config: {
            layout: 'accordion',
            theme: 'light',
            animation: 'fade',
            background: 'muted',
            padding: 'large',
            visible: true,
            heading: { title: 'Quick Answers', subtitle: 'Common Questions About Our Work' },
            items: [
              {
                question: 'How fast do you respond to disasters?',
                answer:
                  'Our goal is to deploy emergency supplies and personnel within 72 hours of any disaster. With 15 strategic warehouses worldwide, we can reach most locations rapidly.',
              },
              {
                question: 'How much of my donation goes to programs?',
                answer:
                  '94% of every dollar goes directly to emergency relief programs. Only 6% covers administration and fundraising.',
              },
              {
                question: 'Can I volunteer with no experience?',
                answer:
                  'Absolutely. We provide comprehensive training to all volunteers. Your dedication is what matters most.',
              },
              {
                question: 'How do you decide where to respond?',
                answer:
                  'We assess needs based on severity, scale, existing response capacity, and vulnerability of affected populations.',
              },
            ],
          },
        },
        {
          type: 'newsletter',
          config: {
            layout: 'default',
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'medium',
            visible: true,
            heading: { title: 'Stay Informed', subtitle: 'Emergency Alerts & Updates' },
            description:
              'Subscribe to receive real-time emergency alerts and impact updates from our field teams.',
            primaryCta: { label: 'Subscribe Now', href: '#', variant: 'primary' as const },
            placeholder: 'Enter your email address',
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered',
            theme: 'primary',
            animation: 'fade',
            background: 'gradient',
            backgroundValue: 'linear-gradient(135deg, #b71c1c, #e65100, #ff6d00)',
            padding: 'large',
            visible: true,
            heading: 'Every Second Counts',
            description: 'Your donation delivers life-saving aid to families in crisis right now.',
            primaryCta: {
              label: 'Donate Now',
              href: '/templates/disaster-relief/donate',
              variant: 'primary' as const,
            },
            secondaryCta: {
              label: 'Volunteer',
              href: '/templates/disaster-relief/volunteer',
              variant: 'outline' as const,
            },
            donateAmounts: [25, 50, 100, 250, 500],
          },
        },
      ],
    },

    about: {
      seo: seo.about,
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center',
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/disaster/hero.jpg',
            padding: 'none',
            visible: true,
            overlayOpacity: 0.45,
            heading: {
              title: 'Our Story',
              subtitle: 'About RapidAid International',
              description:
                "From a single volunteer's determination to a global humanitarian network.",
              tag: 'Saving Lives Since 2002',
            },
            backgroundImage: {
              src: '/images/disaster/hero.jpg',
              alt: 'RapidAid team in disaster zone',
            },
          },
        },
        {
          type: 'about',
          config: {
            layout: 'default',
            variant: 'timeline',
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: { title: 'Our Journey', subtitle: 'Two Decades of Emergency Response' },
            body: [
              'RapidAid International was founded in 2002 by Mark Sullivan, a former UN disaster response coordinator who witnessed the catastrophic consequences of delayed humanitarian aid during the 2001 Gujarat earthquake.',
              'Starting with a single warehouse in his hometown of Portland, Oregon, Sullivan pre-positioned shelter supplies, medical equipment, and food rations. He recruited a team of 50 volunteers and established a 24/7 Emergency Operations Center.',
              'Today, RapidAid International maintains 15 pre-positioning warehouses across 6 continents, a roster of 50,000 trained volunteers, and a global logistics network that can deliver aid to any disaster zone within 72 hours.',
            ],
            mission:
              'To save lives and alleviate suffering by providing immediate, effective emergency relief to communities affected by natural disasters and humanitarian crises worldwide.',
            vision: 'A world where no community faces disaster alone.',
            timeline: [
              {
                year: '2002',
                title: 'Founded',
                description:
                  'Mark Sullivan founded RapidAid International after witnessing delayed disaster response during the Gujarat earthquake.',
              },
              {
                year: '2005',
                title: 'Hurricane Katrina',
                description:
                  'First major deployment â€” provided shelter and food to 50,000 displaced families along the US Gulf Coast.',
              },
              {
                year: '2010',
                title: 'Haiti Earthquake',
                description:
                  'Deployed field hospital and 500 personnel within 48 hours. Treated 15,000 patients in the first month.',
              },
              {
                year: '2015',
                title: 'Global Warehouse Network',
                description:
                  'Established 15 pre-positioning warehouses across all major continents for rapid supply deployment.',
              },
              {
                year: '2020',
                title: 'COVID-19 Response',
                description:
                  'Supported health systems in 30 countries with PPE, field hospitals, and vaccine logistics.',
              },
              {
                year: '2024',
                title: '5 Million People Helped',
                description:
                  'Reached 5 million people helped across 500+ disaster responses in 50 countries.',
              },
              {
                year: '2026',
                title: 'Goal: 10 Million by 2030',
                description:
                  'Expansion plan to help 10 million people with 100 warehouses and 100,000 volunteers by 2030.',
              },
            ],
            image: {
              src: '/images/disaster/rebuild.jpg',
              alt: 'Historical photo of RapidAid International emergency response',
            },
          },
        },
        {
          type: 'impact',
          config: {
            layout: 'counters',
            theme: 'primary',
            animation: 'fade',
            background: 'muted',
            padding: 'large',
            visible: true,
            columns: 4,
            heading: { title: 'Our Global Reach', subtitle: 'The Scale of Our Mission' },
            stats: [
              { value: 5000000, suffix: '+', label: 'People Helped' },
              { value: 500, suffix: '+', label: 'Disasters' },
              { value: 50, suffix: '', label: 'Countries' },
              { value: 50000, suffix: '+', label: 'Volunteers' },
            ],
          },
        },
        {
          type: 'testimonials',
          config: {
            layout: 'cards',
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: { title: 'Our Leadership', subtitle: 'Meet the Team Behind the Mission' },
            testimonials: [
              {
                quote:
                  'I founded RapidAid because I believe that in a disaster, every minute counts. Our teams are the fastest responders in the world.',
                name: 'Mark Sullivan',
                role: 'Founder & Executive Director',
                avatar: { src: '/images/disaster/rescue.jpg', alt: 'Mark Sullivan' },
              },
              {
                quote:
                  'Our field teams deploy into the most dangerous conditions on earth with courage, compassion, and professionalism.',
                name: 'Dr. Aisha Patel',
                role: 'Director of Emergency Operations',
                avatar: { src: '/images/disaster/gallery4.jpg', alt: 'Dr. Aisha Patel' },
              },
              {
                quote:
                  'Transparency is our promise to donors. Every dollar is tracked, every program evaluated, every impact measured.',
                name: 'David Okonkwo',
                role: 'Chief Financial Officer',
                avatar: { src: '/images/disaster/gallery5.jpg', alt: 'David Okonkwo' },
              },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered',
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: 'Be Part of Our Life-Saving Mission',
            description: 'Together, we can ensure that no community faces disaster alone.',
            primaryCta: {
              label: 'Support Emergency Relief',
              href: '/templates/disaster-relief/donate',
              variant: 'primary' as const,
            },
            secondaryCta: {
              label: 'View Our Programs',
              href: '/templates/disaster-relief/programs',
              variant: 'outline' as const,
            },
          },
        },
      ],
    },

    programs: {
      seo: seo.programs,
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center',
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/disaster/hero.jpg',
            padding: 'none',
            visible: true,
            overlayOpacity: 0.4,
            heading: {
              title: 'Our Relief Programs',
              subtitle: 'How We Save Lives',
              description:
                'From emergency shelter to long-term reconstruction, discover our comprehensive approach to disaster relief and humanitarian aid.',
            },
            backgroundImage: {
              src: '/images/disaster/hero.jpg',
              alt: 'RapidAid programs overview',
            },
          },
        },
        {
          type: 'programs',
          config: {
            layout: 'bento',
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            showCategoryBadges: true,
            showImpactStats: true,
            heading: {
              title: 'Our Emergency Response Initiatives',
              subtitle: 'Comprehensive Relief, Maximum Impact',
              description:
                'Each program is designed to address critical needs at every stage of a disaster.',
            },
            programs: [
              {
                id: 'emergency-shelter',
                title: 'Emergency Shelter',
                description:
                  'Rapidly deployable tents and shelter kits providing protection for displaced families.',
                image: {
                  src: '/images/disaster/gallery7.jpg',
                  alt: 'Emergency shelter deployment',
                },
                category: 'Shelter',
                impactStat: '1M+ people sheltered',
                cta: { label: 'Details', href: '/templates/disaster-relief/program-detail' },
                featured: true,
              },
              {
                id: 'medical-response',
                title: 'Medical Response',
                description:
                  'Self-contained field hospitals and mobile clinics providing surgical and primary care.',
                image: { src: '/images/disaster/gallery8.jpg', alt: 'Field hospital' },
                category: 'Medical',
                impactStat: '500K+ patients treated',
                cta: { label: 'Details', href: '/templates/disaster-relief/programs' },
              },
              {
                id: 'food-distribution',
                title: 'Food & Water Distribution',
                description: 'Emergency food rations, water purification, and nutrition support.',
                image: { src: '/images/disaster/rebuild.jpg', alt: 'Food distribution' },
                category: 'Food Security',
                impactStat: '3M+ people fed',
                cta: { label: 'Details', href: '/templates/disaster-relief/programs' },
              },
              {
                id: 'reconstruction',
                title: 'Reconstruction & Recovery',
                description: 'Disaster-resilient rebuilding of homes, schools, and infrastructure.',
                image: { src: '/images/disaster/rescue.jpg', alt: 'Rebuilt community' },
                category: 'Recovery',
                impactStat: '200K+ homes rebuilt',
                cta: { label: 'Details', href: '/templates/disaster-relief/programs' },
              },
              {
                id: 'water-sanitation',
                title: 'Water, Sanitation & Hygiene',
                description: 'Emergency water purification and hygiene kit distribution.',
                image: { src: '/images/disaster/rebuild.jpg', alt: 'Water purification' },
                category: 'WASH',
                impactStat: '2M+ with clean water',
                cta: { label: 'Details', href: '/templates/disaster-relief/programs' },
              },
              {
                id: 'child-protection',
                title: 'Child Protection & Education',
                description:
                  'Safe spaces and temporary learning centers for children affected by disasters.',
                image: { src: '/images/disaster/rescue.jpg', alt: 'Child-friendly space' },
                category: 'Protection',
                impactStat: '500K+ children supported',
                cta: { label: 'Details', href: '/templates/disaster-relief/programs' },
              },
              {
                id: 'logistics',
                title: 'Humanitarian Logistics',
                description:
                  'Global supply chain management ensuring aid reaches remote disaster zones.',
                image: { src: '/images/disaster/hero.jpg', alt: 'Humanitarian logistics' },
                category: 'Logistics',
                impactStat: '15 warehouses worldwide',
                cta: { label: 'Details', href: '/templates/disaster-relief/programs' },
              },
              {
                id: 'preparedness',
                title: 'Disaster Preparedness',
                description:
                  'Community training and early warning systems building resilience before disasters.',
                image: { src: '/images/disaster/rebuild.jpg', alt: 'Preparedness training' },
                category: 'Preparedness',
                impactStat: '2M+ people trained',
                cta: { label: 'Details', href: '/templates/disaster-relief/programs' },
              },
            ],
          },
        },
        {
          type: 'impact',
          config: {
            layout: 'progress',
            theme: 'primary',
            animation: 'fade',
            background: 'muted',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Our Progress Toward 10 Million People Helped',
              subtitle: 'Tracking Our Impact',
            },
            stats: [
              { value: 5000000, suffix: '+', label: 'People Helped' },
              { value: 500, suffix: '+', label: 'Disasters Responded' },
              { value: 50000, suffix: '+', label: 'Trained Volunteers' },
            ],
            progressMax: 10000000,
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'donate',
            theme: 'light',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/disaster/hero.jpg',
            padding: 'large',
            visible: true,
            heading: 'Fund Emergency Relief Programs',
            description: 'Your donation powers our emergency response infrastructure.',
            primaryCta: {
              label: 'Donate to Relief',
              href: '/templates/disaster-relief/donate',
              variant: 'primary' as const,
            },
            donateAmounts: [25, 50, 100, 250, 500],
          },
        },
      ],
    },
    'program-detail': {
      seo: seo['program-detail'],
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'split',
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/disaster/hero.jpg',
            padding: 'none',
            visible: true,
            overlayOpacity: 0.4,
            heading: {
              title: 'Emergency Shelter Program',
              subtitle: 'Program Details',
              description: 'Providing immediate shelter for families displaced by disasters.',
              tag: 'Since 2002',
            },
            backgroundImage: { src: '/images/disaster/hero.jpg', alt: 'Emergency shelter camp' },
            stats: [
              { value: 1000000, suffix: '+', label: 'People Sheltered' },
              { value: 72, suffix: ' hours', label: 'Deployment Time' },
              { value: 15, suffix: '', label: 'Warehouse Locations' },
            ],
          },
        },
        {
          type: 'about',
          config: {
            layout: 'default',
            variant: 'split',
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: {
              title: 'How Our Shelter Program Works',
              subtitle: 'From Emergency to Transitional Housing',
            },
            body: [
              'When a disaster destroys homes, our emergency shelter program provides immediate protection. Within 72 hours, we deploy family tents, tarpaulins, shelter toolkits, and thermal blankets from our pre-positioned warehouses.',
              'Within two weeks, we begin transitioning families to more durable transitional shelters designed to last 12-24 months.',
              'A complete emergency shelter kit costs $250 and serves a family of five. A transitional shelter costs $2,500 and provides safe housing for up to two years.',
            ],
            image: {
              src: '/images/disaster/rescue.jpg',
              alt: 'Interior of emergency shelter tent',
            },
            stats: [
              { value: 1000000, suffix: '+', label: 'People Sheltered' },
              { value: 500000, suffix: '+', label: 'Shelter Kits Distributed' },
              { value: 50000, suffix: '+', label: 'Transitional Shelters Built' },
            ],
          },
        },
        {
          type: 'gallery',
          config: {
            layout: 'carousel',
            theme: 'light',
            animation: 'fade',
            background: 'muted',
            padding: 'large',
            visible: true,
            heading: { title: 'Shelter Program in Action', subtitle: 'Photos from the Field' },
            images: [
              { src: '/images/disaster/gallery5.jpg', alt: 'Emergency tent city after earthquake' },
              { src: '/images/disaster/gallery6.jpg', alt: 'Family receiving shelter kit' },
              { src: '/images/disaster/gallery7.jpg', alt: 'Transitional shelter construction' },
              {
                src: '/images/disaster/gallery8.jpg',
                alt: 'Completed transitional shelter community',
              },
            ],
          },
        },
        {
          type: 'impact',
          config: {
            layout: 'counters',
            theme: 'primary',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            columns: 3,
            heading: { title: 'Program Impact', subtitle: 'Measurable Results' },
            stats: [
              { value: 1000000, suffix: '+', label: 'People Sheltered' },
              { value: 95, suffix: '%', label: 'Satisfaction Rate' },
              { value: 50000, suffix: '+', label: 'Transitional Shelters' },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered',
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: 'Provide Shelter to a Family in Need',
            description:
              '$250 provides a complete emergency shelter kit. $2,500 builds a transitional home.',
            primaryCta: {
              label: 'Donate to Shelter Program',
              href: '/templates/disaster-relief/donate',
              variant: 'primary' as const,
            },
            secondaryCta: {
              label: 'View All Programs',
              href: '/templates/disaster-relief/programs',
              variant: 'outline' as const,
            },
          },
        },
      ],
    },
    campaigns: {
      seo: seo.campaigns,
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center',
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/disaster/hero.jpg',
            padding: 'none',
            visible: true,
            overlayOpacity: 0.4,
            heading: {
              title: 'Emergency Campaigns',
              subtitle: 'Active Relief Efforts',
              description: 'See where we are deployed right now and how you can help.',
              tag: '24/7 Emergency Operations',
            },
            backgroundImage: { src: '/images/disaster/hero.jpg', alt: 'Active emergency response' },
          },
        },
        {
          type: 'campaignProgress',
          config: {
            layout: 'default',
            theme: 'primary',
            animation: 'fade',
            background: 'muted',
            padding: 'large',
            visible: true,
            heading: {
              title: 'South Asia Flood Emergency',
              subtitle: 'Urgent: 2 Million People Displaced',
              description:
                'Catastrophic monsoon floods have devastated communities across Bangladesh, India, and Nepal.',
            },
            goal: 5000000,
            raised: 3150000,
            currency: 'USD',
            donorCount: 42300,
            title: 'South Asia Flood Emergency Response',
            description:
              'Emergency shelter, clean water, medical care, and food for 500,000 displaced families.',
          },
        },
        {
          type: 'campaignProgress',
          config: {
            layout: 'default',
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: {
              title: 'East Africa Drought & Famine Relief',
              subtitle: '12 Million People at Risk',
              description:
                'Severe drought across the Horn of Africa has pushed millions to the brink of famine.',
            },
            goal: 8000000,
            raised: 5200000,
            currency: 'USD',
            donorCount: 38900,
            title: 'East Africa Drought Emergency',
            description: 'Emergency food distribution, water trucking, and nutrition support.',
          },
        },
        {
          type: 'campaignProgress',
          config: {
            layout: 'default',
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Ukraine Winterization Appeal',
              subtitle: 'Helping Families Survive the Cold',
              description:
                'Millions of displaced families face freezing temperatures without heat.',
            },
            goal: 3000000,
            raised: 2100000,
            currency: 'USD',
            donorCount: 21500,
            title: 'Ukraine Winterization Program',
            description:
              'Winter clothing, heating supplies, and thermal blankets for displaced families.',
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered',
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: 'Support Our Emergency Campaigns',
            description:
              'Your donation powers life-saving relief for communities in crisis right now.',
            primaryCta: {
              label: 'Donate to Emergency Fund',
              href: '/templates/disaster-relief/donate',
              variant: 'primary' as const,
            },
          },
        },
      ],
    },

    volunteer: {
      seo: seo.volunteer,
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center',
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/disaster/hero.jpg',
            padding: 'none',
            visible: true,
            overlayOpacity: 0.4,
            heading: {
              title: 'Become a Disaster Relief Volunteer',
              subtitle: 'Be Ready to Deploy',
              description: 'Join 50,000 trained responders worldwide. Your skills can save lives.',
              tag: '50,000+ Active Volunteers',
            },
            backgroundImage: { src: '/images/disaster/hero.jpg', alt: 'Volunteers in action' },
          },
        },
        {
          type: 'about',
          config: {
            layout: 'default',
            variant: 'split',
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Why Volunteer With RapidAid?',
              subtitle: 'Save Lives. Build Resilience.',
            },
            body: [
              'When disaster strikes, trained volunteers make the difference between chaos and coordinated response. Our volunteers are the backbone of every emergency operation.',
              "We invest heavily in training, equipping, and deploying volunteers who are ready to serve in the world's most challenging environments.",
              'No previous disaster response experience is required. We provide world-class training in emergency first aid, logistics, communications, and incident management.',
            ],
            image: { src: '/images/disaster/rebuild.jpg', alt: 'Volunteer training session' },
            stats: [
              { value: 50000, suffix: '+', label: 'Active Volunteers' },
              { value: 200, suffix: '+', label: 'Deployments Per Year' },
              { value: 120, suffix: ' hours', label: 'Training Provided' },
            ],
          },
        },
        {
          type: 'about',
          config: {
            layout: 'default',
            variant: 'steps',
            theme: 'light',
            animation: 'fade',
            background: 'muted',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Your Journey to Deployment',
              subtitle: 'How to Become a Disaster Responder',
            },
            steps: [
              {
                step: 1,
                title: 'Apply Online',
                description:
                  'Submit your application. Tell us about your skills, availability, and preferred role.',
              },
              {
                step: 2,
                title: 'Background Check & Screening',
                description:
                  'We conduct a thorough background check and interview to ensure readiness.',
              },
              {
                step: 3,
                title: 'Core Training Program',
                description:
                  'Complete our 80-hour core training covering first aid, logistics, communications, and safety.',
              },
              {
                step: 4,
                title: 'Specialized Track',
                description:
                  'Choose a specialization: Search & Rescue, Medical, Logistics, WASH Engineering, or Communications.',
              },
              {
                step: 5,
                title: 'Field Deployment',
                description:
                  'Be added to our deployment roster. When a disaster strikes, you may be called within 24 hours.',
              },
            ],
          },
        },
        {
          type: 'programs',
          config: {
            layout: 'cards',
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: { title: 'Volunteer Roles', subtitle: 'Find Your Fit in Emergency Response' },
            programs: [
              {
                id: 'sr',
                title: 'Search & Rescue',
                description:
                  'Trained in urban search and rescue, collapsed structure survival, technical rope rescue.',
                image: { src: '/images/disaster/rebuild.jpg', alt: 'Search and rescue team' },
                category: 'Field',
                cta: { label: 'Learn More', href: '/templates/disaster-relief/volunteer' },
              },
              {
                id: 'med',
                title: 'Medical Response',
                description:
                  'Doctors, nurses, paramedics providing emergency care in field hospitals and mobile clinics.',
                image: { src: '/images/disaster/rescue.jpg', alt: 'Medical volunteer' },
                category: 'Medical',
                cta: { label: 'Learn More', href: '/templates/disaster-relief/volunteer' },
              },
              {
                id: 'log',
                title: 'Logistics & Supply Chain',
                description:
                  'Manage supply flow, warehouse operations, fleet management, and transportation logistics.',
                image: { src: '/images/disaster/rebuild.jpg', alt: 'Logistics coordination' },
                category: 'Operations',
                cta: { label: 'Learn More', href: '/templates/disaster-relief/volunteer' },
              },
              {
                id: 'eng',
                title: 'WASH Engineering',
                description:
                  'Water purification, sanitation system design, hygiene promotion, and public health engineering.',
                image: { src: '/images/disaster/rescue.jpg', alt: 'WASH engineer' },
                category: 'Engineering',
                cta: { label: 'Learn More', href: '/templates/disaster-relief/volunteer' },
              },
              {
                id: 'comms',
                title: 'Emergency Communications',
                description:
                  'Radio operations, satellite communications, data management, and public information.',
                image: { src: '/images/disaster/rebuild.jpg', alt: 'Emergency communications' },
                category: 'Support',
                cta: { label: 'Learn More', href: '/templates/disaster-relief/volunteer' },
              },
              {
                id: 'shelter',
                title: 'Shelter Management',
                description:
                  'Camp management, tent construction, site planning, and community engagement.',
                image: { src: '/images/disaster/rescue.jpg', alt: 'Shelter management' },
                category: 'Field',
                cta: { label: 'Learn More', href: '/templates/disaster-relief/volunteer' },
              },
            ],
          },
        },
        {
          type: 'faq',
          config: {
            layout: 'accordion',
            theme: 'light',
            animation: 'fade',
            background: 'muted',
            padding: 'large',
            visible: true,
            heading: { title: 'Volunteer FAQ', subtitle: 'Common Questions' },
            items: [
              {
                question: 'How old do I need to be?',
                answer:
                  'You must be 18 years or older for field deployment. Virtual volunteering is available from age 16 with parental consent.',
              },
              {
                question: 'How much time is required?',
                answer:
                  'Core training requires 80 hours over 8 weeks. Deployments range from 2 weeks to 3 months. You choose your availability.',
              },
              {
                question: 'Do I need previous experience?',
                answer:
                  'No. We provide comprehensive training. Specialized skills (medical, engineering) are welcome but not required.',
              },
              {
                question: 'Are expenses covered?',
                answer:
                  'Yes. All travel, accommodation, meals, and equipment are fully covered during deployments and training.',
              },
              {
                question: 'Can international volunteers deploy?',
                answer:
                  'Yes. We deploy volunteers to disaster zones worldwide. We assist with visas, vaccinations, and travel arrangements.',
              },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'form',
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: 'Apply to Become a Volunteer',
            description:
              'Fill out the form and our Volunteer Services team will contact you within 48 hours.',
            primaryCta: { label: 'Submit Application', href: '#', variant: 'primary' as const },
          },
        },
      ],
    },

    donate: {
      seo: seo.donate,
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center',
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/disaster/hero.jpg',
            padding: 'none',
            visible: true,
            overlayOpacity: 0.45,
            heading: {
              title: 'Donate to Emergency Relief',
              subtitle: 'Save Lives Today',
              description:
                'Your donation provides immediate aid to disaster victims around the world. Every dollar goes directly to life-saving programs.',
              tag: '94% Program Efficiency',
            },
            backgroundImage: {
              src: '/images/disaster/hero.jpg',
              alt: 'Emergency relief in action',
            },
          },
        },
        {
          type: 'donate',
          config: {
            layout: 'default',
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: { title: 'Make a Donation', subtitle: 'Choose Your Impact' },
            description:
              'Select a donation level or enter a custom amount. All donations are tax-deductible.',
            amounts: [25, 50, 100, 250, 500],
            currency: 'USD',
            primaryCta: { label: 'Donate Now', href: '#', variant: 'primary' as const },
            recurringOptions: [
              { label: 'One Time', value: 'once', description: 'Single donation' },
              { label: 'Monthly', value: 'monthly', description: 'Sustained monthly support' },
              { label: 'Annual', value: 'annual', description: 'Yearly giving' },
            ],
          },
        },
        {
          type: 'about',
          config: {
            layout: 'default',
            variant: 'split',
            theme: 'light',
            animation: 'fade',
            background: 'muted',
            padding: 'large',
            visible: true,
            heading: { title: 'How Your Donation Helps', subtitle: 'Transparency & Impact' },
            body: [
              "When you donate to RapidAid International, you're funding a global emergency response infrastructure that saves lives.",
              '94 cents of every dollar goes directly to our programs. We maintain a platinum-level Charity Navigator rating for over 15 years.',
              'Your donation pre-positions emergency supplies, trains disaster responders, and funds immediate relief operations when disasters strike.',
            ],
            image: { src: '/images/disaster/rescue.jpg', alt: 'How donations help communities' },
            stats: [
              { value: 94, suffix: '%', label: 'Program Efficiency' },
              { value: 15, suffix: '+', label: 'Years Platinum Rating' },
              { value: 5000000, suffix: '+', label: 'People Helped' },
            ],
          },
        },
        {
          type: 'impact',
          config: {
            layout: 'tiers',
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            columns: 3,
            heading: { title: 'Choose Your Impact Level', subtitle: 'Every Dollar Changes Lives' },
            stats: [
              {
                value: 250,
                suffix: '',
                label: 'Shelter Kit',
                description: 'Provides emergency shelter for a family of 5',
              },
              {
                value: 500,
                suffix: '',
                label: 'Medical Kit',
                description: 'Supplies a field medic for one month',
              },
              {
                value: 5000,
                suffix: '',
                label: 'Field Hospital',
                description: 'Supports a 20-bed field hospital for one week',
              },
            ],
          },
        },
        {
          type: 'partners',
          config: {
            layout: 'carousel',
            theme: 'light',
            animation: 'fade',
            background: 'muted',
            padding: 'large',
            visible: true,
            heading: { title: 'Trusted By', subtitle: 'Our Partners & Certifications' },
            partners: [
              {
                name: 'Charity Navigator',
                logo: { src: '/images/partners/default.svg', alt: 'Charity Navigator' },
              },
              {
                name: 'GuideStar Platinum',
                logo: { src: '/images/partners/default.svg', alt: 'GuideStar' },
              },
              { name: 'UN OCHA', logo: { src: '/images/partners/default.svg', alt: 'UN OCHA' } },
              { name: 'IFRC', logo: { src: '/images/partners/default.svg', alt: 'IFRC' } },
              { name: 'USAID', logo: { src: '/images/partners/usaid.svg', alt: 'USAID' } },
              {
                name: 'World Food Programme',
                logo: { src: '/images/partners/default.svg', alt: 'WFP' },
              },
            ],
          },
        },
        {
          type: 'faq',
          config: {
            layout: 'accordion',
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: { title: 'Donation FAQ', subtitle: 'Your Questions Answered' },
            items: [
              {
                question: 'Is my donation tax-deductible?',
                answer:
                  'Yes. RapidAid International is a 501(c)(3) registered nonprofit. All donations are tax-deductible to the fullest extent of the law.',
              },
              {
                question: 'Can I donate in cryptocurrency?',
                answer:
                  'Yes. We accept Bitcoin, Ethereum, USDC, and other major cryptocurrencies through our secure donation portal.',
              },
              {
                question: 'How much goes to programs?',
                answer:
                  '94% of every dollar goes directly to our emergency relief programs and operations. Only 6% goes to administration and fundraising.',
              },
              {
                question: 'Can I sponsor a specific campaign?',
                answer:
                  'Yes. You can designate your donation to any active campaign listed on our campaigns page.',
              },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered',
            theme: 'primary',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: 'Make a Lifesaving Gift Today',
            description: 'Your donation saves lives. Donate now to support emergency relief.',
            primaryCta: { label: 'Donate Now', href: '#', variant: 'primary' as const },
          },
        },
      ],
    },
    gallery: {
      seo: seo.gallery,
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center',
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/disaster/hero.jpg',
            padding: 'none',
            visible: true,
            overlayOpacity: 0.4,
            heading: {
              title: 'Visual Stories of Resilience',
              subtitle: 'Photo Gallery',
              description:
                'Powerful images capturing our emergency response work around the world.',
            },
            backgroundImage: { src: '/images/disaster/hero.jpg', alt: 'RapidAid gallery' },
          },
        },
        {
          type: 'gallery',
          config: {
            layout: 'masonry',
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: { title: 'Our Work in Pictures', subtitle: 'Moments That Matter' },
            categories: [
              'All',
              'Emergency Response',
              'Field Hospitals',
              'Shelter',
              'Food Distribution',
              'Reconstruction',
              'Training',
            ],
            images: [
              {
                src: '/images/disaster/gallery2.jpg',
                alt: 'Emergency response team arriving by helicopter',
              },
              { src: '/images/disaster/hero.jpg', alt: 'Field hospital operating room' },
              { src: '/images/disaster/rebuild.jpg', alt: 'Children in emergency shelter camp' },
              {
                src: '/images/disaster/rescue.jpg',
                alt: 'Food distribution to displaced families',
              },
              { src: '/images/disaster/gallery3.jpg', alt: 'Reconstruction of community school' },
              {
                src: '/images/disaster/gallery4.jpg',
                alt: 'Volunteers during search and rescue training',
              },
              { src: '/images/disaster/gallery5.jpg', alt: 'Water purification system deployment' },
              { src: '/images/disaster/gallery6.jpg', alt: 'Mobile clinic serving remote village' },
              { src: '/images/disaster/gallery7.jpg', alt: 'Community rebuilding homes' },
              {
                src: '/images/disaster/gallery8.jpg',
                alt: 'Child-friendly space in emergency camp',
              },
              {
                src: '/images/disaster/hero.jpg',
                alt: 'Volunteers loading aid supplies onto truck',
              },
              {
                src: '/images/disaster/rebuild.jpg',
                alt: 'Disaster preparedness training session',
              },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered',
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: 'Be Part of Our Next Mission',
            description: 'Your support makes these life-saving operations possible.',
            primaryCta: {
              label: 'Donate Now',
              href: '/templates/disaster-relief/donate',
              variant: 'primary' as const,
            },
            secondaryCta: {
              label: 'View Our Campaigns',
              href: '/templates/disaster-relief/campaigns',
              variant: 'outline' as const,
            },
          },
        },
      ],
    },
    news: {
      seo: seo.news,
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center',
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/disaster/hero.jpg',
            padding: 'none',
            visible: true,
            overlayOpacity: 0.4,
            heading: {
              title: 'Emergency News & Updates',
              subtitle: 'RapidAid International',
              description:
                'Latest reports from our field teams and emergency response operations worldwide.',
            },
            backgroundImage: { src: '/images/disaster/hero.jpg', alt: 'RapidAid newsroom' },
          },
        },
        {
          type: 'news',
          config: {
            layout: 'grid',
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            columns: 3,
            heading: {
              title: 'Latest Emergency Updates',
              subtitle: 'Real-Time News from the Field',
            },
            categories: [
              'All',
              'Emergency Alerts',
              'Field Reports',
              'Impact Stories',
              'Press Releases',
              'Volunteer Spotlight',
            ],
            posts: [
              {
                id: '1',
                title: 'South Asia Flood Emergency: 2 Million People Displaced',
                excerpt:
                  'Monsoon floods across Bangladesh, India, and Nepal have displaced over 2 million people. Our teams are deploying...',
                date: 'July 13, 2026',
                author: 'Aisha Patel',
                image: { src: '/images/disaster/rescue.jpg', alt: 'Flood emergency' },
                category: 'Emergency Alerts',
                featured: true,
                content: '',
              },
              {
                id: '2',
                title: 'Field Hospital Number 5 Reaches 50,000 Patients Treated',
                excerpt:
                  'Our mobile field hospital network in East Africa has now treated over 50,000 patients since deployment...',
                date: 'July 10, 2026',
                author: 'James Kimani',
                image: { src: '/images/disaster/rebuild.jpg', alt: 'Field hospital milestone' },
                category: 'Field Reports',
                featured: true,
                content: '',
              },
              {
                id: '3',
                title: 'Meet Maria: From Refugee to Disaster Responder',
                excerpt:
                  'Maria fled conflict at age 10. Today, she leads our WASH teams in the same region where she once received aid...',
                date: 'July 8, 2026',
                author: 'Sarah Mitchell',
                image: { src: '/images/disaster/rescue.jpg', alt: 'Volunteer spotlight' },
                category: 'Volunteer Spotlight',
                content: '',
              },
              {
                id: '4',
                title: 'Winterization Campaign Reaches 500,000 Families in Ukraine',
                excerpt:
                  'Our winterization program has distributed thermal blankets, heating supplies, and winter clothing...',
                date: 'July 5, 2026',
                author: 'Olena Kovalenko',
                image: { src: '/images/disaster/gallery1.jpg', alt: 'Winter aid distribution' },
                category: 'Field Reports',
                content: '',
              },
              {
                id: '5',
                title: 'RapidAid Announces Partnership with Global Health Alliance',
                excerpt:
                  'New partnership will strengthen health system capacity in disaster-prone regions across Southeast Asia...',
                date: 'July 3, 2026',
                author: 'Communications Team',
                image: { src: '/images/disaster/rebuild.jpg', alt: 'New partnership announcement' },
                category: 'Press Releases',
                content: '',
              },
              {
                id: '6',
                title: 'Survivor Story: How Emergency Food Aid Saved a Community',
                excerpt:
                  'When drought destroyed crops in rural Ethiopia, emergency food aid was the lifeline that kept families alive...',
                date: 'June 28, 2026',
                author: 'Tadesse Alemayehu',
                image: { src: '/images/disaster/rescue.jpg', alt: 'Impact story' },
                category: 'Impact Stories',
                content: '',
              },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered',
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: 'Stay Informed, Take Action',
            description:
              'Subscribe to our emergency alerts and be the first to know when disaster strikes.',
            primaryCta: { label: 'Subscribe to Updates', href: '#', variant: 'primary' as const },
          },
        },
      ],
    },

    reports: {
      seo: seo.reports,
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center',
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/disaster/hero.jpg',
            padding: 'none',
            visible: true,
            overlayOpacity: 0.4,
            heading: {
              title: 'Annual Reports & Financials',
              subtitle: 'Total Transparency',
              description:
                'We believe in radical transparency. Every dollar is tracked, every program evaluated, every impact measured.',
              tag: 'Platinum Transparency Rating',
            },
            backgroundImage: { src: '/images/disaster/hero.jpg', alt: 'Annual report cover' },
          },
        },
        {
          type: 'documents',
          config: {
            layout: 'grid',
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            columns: 3,
            heading: { title: 'Financial Reports', subtitle: 'Download Our Reports' },
            documents: [
              {
                title: '2025 Annual Report',
                description:
                  'Comprehensive overview of our programs, finances, and impact metrics for fiscal year 2025.',
                date: 'March 2026',
                format: 'PDF',
                url: '/reports/rapidaid-2025-annual.pdf',
                category: 'Annual Reports',
              },
              {
                title: '2024 Annual Report',
                description:
                  'Complete financial statements, program outcomes, and governance report.',
                date: 'March 2025',
                format: 'PDF',
                url: '/reports/rapidaid-2024-annual.pdf',
                category: 'Annual Reports',
              },
              {
                title: 'Audited Financial Statements FY2025',
                description: 'Independent audit conducted by PricewaterhouseCoopers LLP.',
                date: 'February 2026',
                format: 'PDF',
                url: '/reports/rapidaid-fy2025-audit.pdf',
                category: 'Financials',
              },
              {
                title: 'IRS Form 990 FY2025',
                description: 'Annual tax return filed with the Internal Revenue Service.',
                date: 'January 2026',
                format: 'PDF',
                url: '/reports/rapidaid-990-2025.pdf',
                category: 'Financials',
              },
              {
                title: 'South Asia Flood Emergency Report',
                description:
                  'Detailed field report and impact assessment of our flood response operations.',
                date: 'June 2026',
                format: 'PDF',
                url: '/reports/rapidaid-south-asia-flood.pdf',
                category: 'Program Reports',
              },
              {
                title: 'Accountability Report 2025',
                description:
                  'Our commitments to transparency, ethics, and stakeholder accountability.',
                date: 'March 2026',
                format: 'PDF',
                url: '/reports/rapidaid-accountability-2025.pdf',
                category: 'Governance',
              },
            ],
          },
        },
        {
          type: 'impact',
          config: {
            layout: 'counters',
            theme: 'primary',
            animation: 'fade',
            background: 'muted',
            padding: 'large',
            visible: true,
            columns: 4,
            heading: { title: 'FY2025 By the Numbers', subtitle: 'At a Glance' },
            stats: [
              { value: 85000000, suffix: '+', label: 'Total Revenue' },
              { value: 5000000, suffix: '+', label: 'People Served' },
              { value: 94, suffix: '%', label: 'Program Efficiency' },
              { value: 120, suffix: '', label: 'Countries Active' },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered',
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: 'Questions About Our Finances?',
            description:
              'We are committed to transparency. Email finance@rapidaid.org with any questions.',
            primaryCta: {
              label: 'Contact Our Finance Team',
              href: '/templates/disaster-relief/contact',
              variant: 'primary' as const,
            },
          },
        },
      ],
    },
    contact: {
      seo: seo.contact,
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center',
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/disaster/hero.jpg',
            padding: 'none',
            visible: true,
            overlayOpacity: 0.5,
            heading: {
              title: 'Contact RapidAid International',
              subtitle: 'Get in Touch',
              description: 'Our Emergency Operations Center is staffed 24/7. We are here to help.',
              tag: '24/7 Emergency Contact',
            },
            backgroundImage: { src: '/images/disaster/hero.jpg', alt: 'Contact RapidAid' },
          },
        },
        {
          type: 'contact',
          config: {
            layout: 'split',
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: { title: 'Contact Our Emergency Response Team', subtitle: 'We Are Here 24/7' },
            description:
              'For media inquiries, partnership opportunities, volunteer questions, or general information.',
            address: {
              street: '2500 Disaster Response Way',
              city: 'Portland',
              state: 'OR',
              zip: '97201',
              country: 'United States',
            },
            phone: { label: 'Emergency Hotline', value: '+1 (800) 555-RELIEF' },
            email: { label: 'General Inquiries', value: 'info@rapidaid.org' },
            formFields: [
              {
                name: 'firstName',
                label: 'First Name',
                type: 'text',
                required: true,
                placeholder: 'Your first name',
              },
              {
                name: 'lastName',
                label: 'Last Name',
                type: 'text',
                required: true,
                placeholder: 'Your last name',
              },
              {
                name: 'email',
                label: 'Email Address',
                type: 'email',
                required: true,
                placeholder: 'your@email.com',
              },
              {
                name: 'phone',
                label: 'Phone Number',
                type: 'tel',
                required: false,
                placeholder: '+1 (555) 123-4567',
              },
              {
                name: 'department',
                label: 'Department',
                type: 'select',
                required: true,
                options: [
                  'General Inquiry',
                  'Media & Press',
                  'Partnerships',
                  'Volunteer Services',
                  'Donor Relations',
                  'Emergency Operations',
                ],
                placeholder: 'Select a department',
              },
              {
                name: 'subject',
                label: 'Subject',
                type: 'text',
                required: true,
                placeholder: 'How can we help you?',
              },
              {
                name: 'message',
                label: 'Message',
                type: 'textarea',
                required: true,
                placeholder: 'Describe your inquiry in detail...',
              },
            ],
            primaryCta: { label: 'Send Message', href: '#', variant: 'primary' as const },
          },
        },
        {
          type: 'impact',
          config: {
            layout: 'counters',
            theme: 'light',
            animation: 'fade',
            background: 'muted',
            padding: 'large',
            visible: true,
            columns: 4,
            heading: { title: 'Our Reach & Response', subtitle: 'Global Emergency Operations' },
            stats: [
              { value: 50, suffix: '', label: 'Countries of Operation' },
              { value: 15, suffix: '', label: 'Pre-Positioning Warehouses' },
              { value: 72, suffix: ' hrs', label: 'Average Deployment Time' },
              { value: 50000, suffix: '+', label: 'Trained Responders' },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered',
            theme: 'light',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/disaster/hero.jpg',
            padding: 'large',
            visible: true,
            heading: 'Need Immediate Emergency Assistance?',
            description:
              'If you are in an active disaster zone and need help, call our 24/7 emergency hotline.',
            primaryCta: {
              label: 'Call Emergency Hotline',
              href: 'tel:+1800555RELIEF',
              variant: 'primary' as const,
            },
          },
        },
      ],
    },
    faq: {
      seo: seo.faq,
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center',
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/disaster/hero.jpg',
            padding: 'none',
            visible: true,
            overlayOpacity: 0.45,
            heading: {
              title: 'Frequently Asked Questions',
              subtitle: 'Everything You Need to Know',
              description:
                'Find answers to common questions about our emergency response work, donations, volunteering, and more.',
            },
            backgroundImage: { src: '/images/disaster/hero.jpg', alt: 'FAQ background' },
          },
        },
        {
          type: 'faq',
          config: {
            layout: 'grouped',
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: { title: 'General Questions', subtitle: 'About RapidAid International' },
            items: [
              {
                question: 'What is RapidAid International?',
                answer:
                  'RapidAid International is a global humanitarian organization founded in 2002. We provide emergency relief to communities affected by natural disasters and humanitarian crises.',
              },
              {
                question: 'Where do you operate?',
                answer:
                  'We operate in over 50 countries across all continents, with pre-positioning warehouses in strategic locations for rapid deployment.',
              },
              {
                question: 'How are you funded?',
                answer:
                  'We are funded through individual donations, corporate partnerships, foundation grants, and government contracts. We maintain full financial transparency.',
              },
            ],
          },
        },
        {
          type: 'faq',
          config: {
            layout: 'grouped',
            theme: 'light',
            animation: 'fade',
            background: 'muted',
            padding: 'large',
            visible: true,
            heading: { title: 'Donations', subtitle: 'How Your Support Makes a Difference' },
            items: [
              {
                question: 'Is my donation tax-deductible?',
                answer:
                  'Yes. RapidAid International is a registered 501(c)(3) nonprofit. Your donation is tax-deductible to the fullest extent of the law.',
              },
              {
                question: 'How much of my donation goes to programs?',
                answer:
                  '94% of every dollar goes directly to our emergency relief programs. Only 6% covers administration and fundraising.',
              },
              {
                question: 'Can I donate in cryptocurrency?',
                answer:
                  'Yes. We accept Bitcoin, Ethereum, USDC, and other major cryptocurrencies through our secure donation portal.',
              },
              {
                question: 'Can I dedicate my donation to a specific campaign?',
                answer:
                  'Yes. You can designate your donation to any active relief campaign listed on our campaigns page.',
              },
            ],
          },
        },
        {
          type: 'faq',
          config: {
            layout: 'grouped',
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: { title: 'Volunteering', subtitle: 'Join Our Emergency Response Team' },
            items: [
              {
                question: 'Do I need previous disaster response experience?',
                answer:
                  'No. We provide comprehensive training to all volunteers. Your dedication and willingness to serve are the most important qualifications.',
              },
              {
                question: 'What is the minimum age?',
                answer:
                  'Field deployment requires volunteers to be 18 or older. Virtual volunteering opportunities are available for ages 16+ with parental consent.',
              },
              {
                question: 'Are travel and accommodation covered?',
                answer:
                  'Yes. All expenses including travel, accommodation, meals, and equipment are fully covered during deployments.',
              },
              {
                question: 'How long is a typical deployment?',
                answer:
                  'Deployments typically range from 2 weeks to 3 months, depending on the nature of the emergency and your availability.',
              },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered',
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: "Didn't Find Your Answer?",
            description: 'Our team is available 24/7 to answer your questions.',
            primaryCta: {
              label: 'Contact Us',
              href: '/templates/disaster-relief/contact',
              variant: 'primary' as const,
            },
          },
        },
      ],
    },
    'not-found': {
      seo: seo['not-found'],
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center',
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/disaster/hero.jpg',
            padding: 'none',
            visible: true,
            overlayOpacity: 0.35,
            heading: {
              title: 'Page Not Found',
              subtitle: 'Lost in the Crisis',
              description:
                'Sorry, the page you were looking for could not be located. Please use our search or reach out for assistance.',
              tag: 'Error 404',
            },
            backgroundImage: { src: '/images/disaster/hero.jpg', alt: 'Page not found' },
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered',
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: 'Let Us Guide You',
            description: 'Our Emergency Operations Center is always ready to help.',
            primaryCta: {
              label: 'Go to Homepage',
              href: '/templates/disaster-relief',
              variant: 'primary' as const,
            },
            secondaryCta: {
              label: 'Contact Support',
              href: '/templates/disaster-relief/contact',
              variant: 'outline' as const,
            },
          },
        },
      ],
    },
  },
};
