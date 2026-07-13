import type { TemplateData } from './types';

const ORG = 'Global Unity Alliance';
const BASE = `/templates/humanitarian`;

const nav = {
  layout: 'transparent' as const,
  logo: { text: ORG, href: '/' },
  menuItems: [
    { label: 'Home', href: BASE },
    { label: 'About', href: `${BASE}/about` },
    { label: 'Programs', href: `${BASE}/programs` },
    { label: 'Impact', href: `${BASE}/impact` },
    { label: 'Transparency', href: `${BASE}/transparency` },
    { label: 'Contact', href: `${BASE}/contact` },
  ],
  ctaButtons: [
    {
      label: 'Volunteer',
      href: `${BASE}/volunteer`,
      variant: 'outline' as const,
      size: 'md' as const,
    },
    { label: 'Donate', href: `${BASE}/donate`, variant: 'primary' as const, size: 'md' as const },
  ],
  showSearch: true,
  showLanguageSwitcher: true,
  languages: [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'ar', label: 'العربية' },
    { code: 'es', label: 'Español' },
  ],
  sticky: true,
  theme: 'dark' as const,
  announcementBar:
    'Emergency Alert: Help communities affected by the recent floods in Southeast Asia. Your support saves lives.',
};

const footer = {
  layout: 'large' as const,
  theme: 'dark' as const,
  animation: 'fade' as const,
  background: 'solid' as const,
  backgroundValue: '#040a15',
  padding: 'large' as const,
  visible: true,
  logo: { src: null, alt: ORG, width: 180, height: 44 },
  description:
    'We work across 85+ countries to protect children, ensure access to healthcare and education, respond to emergencies, and build a more equitable world.',
  columns: [
    {
      title: 'Our Work',
      links: [
        { label: 'Programs', href: `${BASE}/programs` },
        { label: 'Campaigns', href: `${BASE}/campaigns` },
        { label: 'Impact', href: `${BASE}/impact` },
        { label: 'Stories', href: `${BASE}/news` },
        { label: 'Careers', href: `${BASE}/about` },
      ],
    },
    {
      title: 'Get Involved',
      links: [
        { label: 'Donate', href: `${BASE}/donate` },
        { label: 'Volunteer', href: `${BASE}/volunteer` },
        { label: 'Partner With Us', href: `${BASE}/partner` },
        { label: 'Fundraise', href: `${BASE}/volunteer` },
        { label: 'Advocate', href: `${BASE}/contact` },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'News & Stories', href: `${BASE}/news` },
        { label: 'Reports & Research', href: `${BASE}/resources` },
        { label: 'Media Center', href: `${BASE}/resources` },
        { label: 'FAQs', href: `${BASE}/faq` },
        { label: 'Publications', href: `${BASE}/resources` },
      ],
    },
  ],
  socialLinks: [
    { platform: 'facebook' as const, url: '#', label: 'Facebook' },
    { platform: 'twitter' as const, url: '#', label: 'Twitter' },
    { platform: 'instagram' as const, url: '#', label: 'Instagram' },
    { platform: 'youtube' as const, url: '#', label: 'YouTube' },
    { platform: 'linkedin' as const, url: '#', label: 'LinkedIn' },
  ],
  copyright: `© 2026 ${ORG}. All rights reserved.`,
  showBackToTop: true,
};

export const humanitarianTemplate: TemplateData = {
  slug: 'humanitarian',
  name: 'Humanitarian & Social Impact',
  tagline: 'Every child. Everywhere. Every day.',
  description:
    'A world-class humanitarian and social impact template for international NGOs, UN agencies, and global development organizations. Features deep royal blue and global green palette with gold accents. Includes interactive world map, transparency dashboard, impact timeline, and comprehensive program showcases.',
  themeId: 'humanitarian',
  mood: 'Global, hopeful, trusted, impactful, professional, human-centered, emotional',
  illustrationStyle:
    'Immersive humanitarian photography, community portraits, field documentation, global landscapes, real-life impact imagery, authentic documentary style',
  motionStyle:
    'Hero reveal animations, parallax storytelling, interactive counters, floating impact cards, scroll-triggered timeline animations, world map interactions, page transitions',
  navigation: nav,
  footer: footer,
  pages: {
    home: {
      seo: {
        title: `${ORG} — Humanitarian & Social Impact | Global NGO`,
        description: `${ORG} works across 85+ countries to protect children, ensure access to healthcare and education, respond to emergencies, and build a more equitable world for all. Join us.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'left',
            theme: 'dark',
            animation: 'hero',
            background: 'solid',
            backgroundValue: '#020617',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Protecting Childhood.\nEmpowering Communities.\nBuilding Hope.',
              subtitle: ORG,
              description:
                'We reach children and families in 85+ countries with life-saving healthcare, quality education, emergency relief, and sustainable development programs.',
              tag: 'UN ECOSOC Accredited | 2025 Impact Report',
            },
            backgroundImage: {
              src: '/images/humanitarian/hero.jpg',
              alt: 'Children in a community program smiling',
            },
            overlayGradient:
              'linear-gradient(to top, #020617 0%, #020617 30%, rgba(2,6,23,0.6) 60%, rgba(2,6,23,0.2) 100%)',
            imageBlendMode: 'mix-blend-luminosity',
            overlayOpacity: 0.5,
            contentWidth: 'two-thirds',
            stats: [
              { value: 120, suffix: 'M+', label: 'Lives Impacted' },
              { value: 85, suffix: '+', label: 'Countries' },
              { value: 15000, suffix: '+', label: 'Projects' },
              { value: 200000, suffix: '+', label: 'Volunteers' },
            ],
            showScrollIndicator: true,
          },
        },
        {
          type: 'partnerLogos',
          config: {
            layout: 'default',
            theme: 'dark',
            animation: 'fade',
            background: 'solid',
            backgroundValue: '#020617',
            padding: 'medium',
            visible: true,
            variant: 'marquee',
            heading: {
              title: 'Trusted By Leading Global Organizations',
              tag: 'Partners',
              alignment: 'center',
            },
            partners: [
              {
                name: 'UNICEF',
                logo: { src: '/images/partners/unicef.svg', alt: 'UNICEF', width: 120, height: 40 },
              },
              {
                name: 'World Health Organization',
                logo: {
                  src: '/images/partners/who.svg',
                  alt: 'World Health Organization',
                  width: 120,
                  height: 40,
                },
              },
              {
                name: 'Save the Children',
                logo: {
                  src: '/images/partners/save-the-children.svg',
                  alt: 'Save the Children',
                  width: 120,
                  height: 40,
                },
              },
              {
                name: 'UNDP',
                logo: { src: '/images/partners/undp.svg', alt: 'UNDP', width: 120, height: 40 },
              },
              {
                name: 'USAID',
                logo: { src: '/images/partners/usaid.svg', alt: 'USAID', width: 120, height: 40 },
              },
              {
                name: 'CARE',
                logo: { src: '/images/partners/care.svg', alt: 'CARE', width: 120, height: 40 },
              },
              {
                name: 'World Food Programme',
                logo: {
                  src: '/images/partners/world-food-programme.svg',
                  alt: 'World Food Programme',
                  width: 120,
                  height: 40,
                },
              },
              {
                name: 'Gates Foundation',
                logo: {
                  src: '/images/partners/gates-foundation.svg',
                  alt: 'Gates Foundation',
                  width: 120,
                  height: 40,
                },
              },
            ],
          },
        },
        {
          type: 'about',
          config: {
            layout: 'default',
            theme: 'light',
            animation: 'fade-in-up',
            background: 'none',
            padding: 'large',
            visible: true,
            variant: 'split',
            heading: {
              title: 'Our Mission: A World Where Every Child Thrives',
              tag: 'Our Mission',
              alignment: 'left',
            },
            body: [
              "`${ORG} was founded in 1991 by a coalition of pediatricians, educators, and human rights advocates who believed that no child should die from preventable causes. Over three decades, we have grown from a small emergency response team into one of the world's most trusted humanitarian organizations.",
              'We work in 85+ countries, delivering integrated programs in child health, nutrition, education, water and sanitation, emergency response, and community resilience. Our approach is rooted in local partnership � we work alongside communities to build sustainable solutions that endure long after our initial intervention.',
              'Every program, every partnership, every decision is guided by a single question: does this make life better for children and their families?',
            ],
            mission:
              'To ensure every child, everywhere, has the right to survive, learn, be protected, and thrive.',
            vision:
              'A world where no child dies from preventable causes, every child has access to quality education, and all children can grow up in safe, nurturing environments.',
            values: [
              {
                title: 'Child-First',
                description:
                  "Every decision we make is measured by its impact on children\'s lives and futures.",
              },
              {
                title: 'Accountability',
                description:
                  'We hold ourselves to the highest standards of transparency, efficiency, and ethical practice.',
              },
              {
                title: 'Local Partnership',
                description:
                  'Sustainable change comes from within communities � we invest in local leaders and organizations.',
              },
              {
                title: 'Courage and Innovation',
                description:
                  'We go where the need is greatest and innovate to overcome the toughest challenges.',
              },
              {
                title: 'Respect and Inclusion',
                description:
                  'We embrace diversity and ensure everyone is treated with dignity and respect.',
              },
            ],
            image: {
              src: '/images/humanitarian/about.jpg',
              alt: 'Community health worker with children',
            },
          },
        },
        {
          type: 'globalImpact',
          config: {
            theme: 'dark',
            animation: 'fade-in-up',
            background: 'solid',
            backgroundValue: '#040a15',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Our Global Reach',
              subtitle: 'Serving communities across every continent',
              tag: 'Where We Work',
              alignment: 'center',
            },
            stats: [
              { value: 85, suffix: '+', label: 'Countries Active' },
              { value: 120, suffix: 'M+', label: 'People Reached' },
              { value: 15000, suffix: '+', label: 'Projects Completed' },
              { value: 200000, suffix: '+', label: 'Active Volunteers' },
              { value: 35, suffix: '+', label: 'Years of Global Impact' },
            ],
            countries: [
              { country: 'Afghanistan', region: 'Asia', projects: 45, peopleReached: 2800000 },
              { country: 'Bangladesh', region: 'Asia', projects: 62, peopleReached: 4200000 },
              { country: 'Brazil', region: 'S. America', projects: 38, peopleReached: 1900000 },
              { country: 'DR Congo', region: 'Africa', projects: 55, peopleReached: 3500000 },
              { country: 'Ethiopia', region: 'Africa', projects: 48, peopleReached: 3100000 },
              { country: 'India', region: 'Asia', projects: 89, peopleReached: 8500000 },
              { country: 'Kenya', region: 'Africa', projects: 52, peopleReached: 2700000 },
              { country: 'Lebanon', region: 'Middle East', projects: 28, peopleReached: 1200000 },
              { country: 'Malawi', region: 'Africa', projects: 35, peopleReached: 1800000 },
              { country: 'Nepal', region: 'Asia', projects: 40, peopleReached: 1500000 },
              { country: 'Somalia', region: 'Africa', projects: 33, peopleReached: 2000000 },
              { country: 'Ukraine', region: 'Europe', projects: 42, peopleReached: 3200000 },
              { country: 'Vietnam', region: 'Asia', projects: 36, peopleReached: 1600000 },
              { country: 'Yemen', region: 'Middle East', projects: 30, peopleReached: 2400000 },
            ],
            totalCountries: 85,
            totalProjects: 15000,
            totalPeople: 120000000,
          },
        },
        {
          type: 'gallery',
          config: {
            theme: 'light',
            animation: 'fade-in-up',
            background: 'none',
            padding: 'large',
            visible: true,
            layout: 'masonry',
            heading: {
              title: 'Our Work in Pictures',
              subtitle: 'Candid moments from our programs around the world.',
              tag: 'Gallery',
              alignment: 'center',
            },
            images: [
              { src: '/images/humanitarian/gallery1.jpg', alt: 'Children in school classroom' },
              { src: '/images/humanitarian/gallery2.jpg', alt: 'Community health worker' },
              { src: '/images/humanitarian/water.jpg', alt: 'Clean water access' },
              { src: '/images/humanitarian/gallery3.jpg', alt: 'Emergency relief distribution' },
              { src: '/images/humanitarian/gallery4.jpg', alt: 'Women empowerment group' },
              { src: '/images/humanitarian/gallery5.jpg', alt: 'Water well inauguration' },
              { src: '/images/humanitarian/gallery6.jpg', alt: 'Children playing in safe space' },
              { src: '/images/humanitarian/gallery7.jpg', alt: 'Vaccination campaign' },
              { src: '/images/humanitarian/gallery8.jpg', alt: 'Community meeting' },
              { src: '/images/humanitarian/health.jpg', alt: 'Nutrition program' },
            ],
          },
        },
        {
          type: 'news',
          config: {
            theme: 'light',
            animation: 'fade-in-up',
            background: 'muted',
            padding: 'large',
            visible: true,
            layout: 'magazine',
            heading: {
              title: 'Latest News and Updates',
              subtitle:
                'Stay informed about our programs, emergency responses, and impact stories.',
              tag: 'News',
              alignment: 'center',
            },
            articles: [
              {
                id: 'news-1',
                slug: 'news-1',
                title:
                  'Emergency Response Reaches 500,000 Families Affected by Southeast Asia Floods',
                excerpt:
                  'Our rapid response teams are on the ground delivering life-saving aid to communities devastated by catastrophic flooding across the region.',
                date: '2026-06-20',
                category: 'Emergency',
                image: { src: '/images/humanitarian/news.jpg', alt: 'Flood response' },
                author: 'Maria Chen',
                cta: { label: 'Read More', href: `${BASE}/news` },
                featured: true,
              },
              {
                id: 'news-2',
                slug: 'news-2',
                title: 'New Report Shows 40% Reduction in Child Mortality Across Program Regions',
                excerpt:
                  'Our 2025 impact report reveals significant progress in child survival across 20 focus countries.',
                date: '2026-06-18',
                category: 'Impact',
                image: { src: '/images/humanitarian/report.jpg', alt: 'Child health report' },
                author: 'James Okonkwo',
                cta: { label: 'Read More', href: `${BASE}/news` },
              },
              {
                id: 'news-3',
                slug: 'news-3',
                title: 'Partnership Brings School Meals to 2 Million Children Globally',
                excerpt:
                  'A new collaboration will provide daily nutritious meals to primary school children in drought-affected regions worldwide.',
                date: '2026-06-15',
                category: 'Partnership',
                image: { src: '/images/humanitarian/health.jpg', alt: 'School meals program' },
                author: 'Aisha Patel',
                cta: { label: 'Read More', href: `${BASE}/news` },
              },
              {
                id: 'news-4',
                slug: 'news-4',
                title: 'A Brighter Future for Amina: From Crisis to Classroom',
                excerpt:
                  'After surviving a devastating drought, Amina is now thriving in school thanks to integrated health, nutrition, and education support.',
                date: '2026-06-12',
                category: 'Stories',
                image: { src: '/images/humanitarian/water.jpg', alt: 'Amina story' },
                author: 'Stories Team',
                cta: { label: 'Read More', href: `${BASE}/news` },
              },
            ],
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
            layout: 'carousel',
            heading: {
              title: 'Voices From Our Community',
              subtitle:
                'Hear from the people we serve, our partners, and the donors who make our work possible.',
              tag: 'Testimonials',
              alignment: 'center',
            },
            testimonials: [
              {
                quote:
                  'Before the Alliance came to our village, we had no clinic, no school, no clean water. Today, my children are vaccinated, they go to school, and I have a small business.',
                name: 'Mariam Diallo',
                role: 'Community Member, Mali',
                avatar: { src: '/images/humanitarian/person1.jpg', alt: 'Mariam Diallo' },
              },
              {
                quote:
                  'As a partner organization on the ground, I have seen how GUA works differently. They listen. They invest in local leadership. They stay for the long term.',
                name: 'Dr. Samuel Ochieng',
                role: 'Local Partner, Kenya',
                avatar: { src: '/images/humanitarian/person2.jpg', alt: 'Dr. Samuel Ochieng' },
              },
              {
                quote:
                  'I started donating $25 a month five years ago. Knowing that 92% of my contribution goes directly to programs � I have never felt more confident.',
                name: 'Sarah Mitchell',
                role: 'Monthly Donor, UK',
              },
              {
                quote:
                  'Volunteering with the emergency response team in Ukraine was the most challenging and rewarding experience of my life.',
                name: 'Carlos Mendez',
                role: 'Emergency Volunteer, Spain',
              },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'dual',
            heading: 'Every Child Deserves a Future',
            description:
              'Your support � whether a donation, your time, or your voice � makes our work possible. Join the movement for every child, everywhere.',
            primaryCta: { label: 'Donate Now', href: `${BASE}/donate`, variant: 'primary' },
            secondaryCta: {
              label: 'Become a Volunteer',
              href: `${BASE}/volunteer`,
              variant: 'outline',
            },
          },
        },
      ],
    },
    about: {
      seo: {
        title: `About — ${ORG}`,
        description: `Learn about ${ORG}'s mission, history, leadership, and commitment to protecting children and building resilient communities worldwide.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center',
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Our Story',
              subtitle: 'About Us',
              description:
                'For 35 years, we have been on the frontlines of the world greatest challenges — protecting children, saving lives, and building hope.',
              tag: 'Since 1991',
            },
            backgroundImage: { src: '/images/humanitarian/hero.jpg', alt: 'GUA team in the field' },
            backgroundValue: '/images/humanitarian/hero.jpg',
            image: { src: '/images/humanitarian/hero.jpg', alt: 'GUA team in the field' },
            overlayOpacity: 0.4,
          },
        },
        {
          type: 'about',
          config: {
            layout: 'default',
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            variant: 'split',
            heading: { title: 'Who We Are', alignment: 'left' },
            body: [
              '`${ORG} (GUA) is a global humanitarian organization founded in 1991 by a coalition of pediatricians, educators, and human rights advocates who were united by a single conviction: no child should die from preventable causes.',
              'From our first emergency response in the Horn of Africa, we have grown into one of the world most trusted humanitarian organizations, operating in 85+ countries with a team of 45,000 staff and 200,000 trained volunteers.',
              'We are accredited by the UN Economic and Social Council (ECOSOC), rated 4-star by Charity Navigator, and hold Platinum status with GuideStar.',
            ],
            mission:
              'To ensure every child, everywhere, has the right to survive, learn, be protected, and thrive.',
            vision:
              'A world where no child dies from preventable causes, every child has access to quality education, and all children can grow up in safe, nurturing environments.',
            values: [
              {
                title: 'Child-First',
                description: "Every decision is measured by its impact on children's lives.",
              },
              {
                title: 'Accountability',
                description: 'Highest standards of transparency, efficiency, and ethics.',
              },
              {
                title: 'Local Partnership',
                description: 'Sustainable change comes from within communities.',
              },
              { title: 'Courage and Innovation', description: 'We go where the need is greatest.' },
              {
                title: 'Respect and Inclusion',
                description: 'We embrace diversity and ensure everyone is treated with dignity.',
              },
            ],
            image: { src: '/images/humanitarian/about.jpg', alt: 'GUA team members' },
          },
        },
        {
          type: 'about',
          config: {
            layout: 'default',
            theme: 'light',
            animation: 'fade-in-up',
            background: 'muted',
            padding: 'large',
            visible: true,
            variant: 'timeline',
            heading: { title: 'Our Journey', tag: 'Timeline', alignment: 'center' },
            body: [
              'From a small emergency response team to a global movement for children rights — the milestones that shaped our organization.',
            ],
            timeline: [
              {
                year: '1991',
                title: 'Founded in Crisis',
                description:
                  'Coalition of pediatricians and humanitarians forms GUA to respond to famine in the Horn of Africa, reaching 500,000 children.',
              },
              {
                year: '1995',
                title: 'Global Vaccination Campaign',
                description:
                  'Landmark immunization program with WHO/UNICEF vaccinates 5 million children across 12 countries.',
              },
              {
                year: '2000',
                title: 'Education Initiative',
                description:
                  'Builds 500 schools and trains 10,000 local teachers in underserved communities.',
              },
              {
                year: '2005',
                title: 'Rapid Response Team',
                description:
                  'Dedicated emergency team capable of 72-hour deployment to any crisis worldwide.',
              },
              {
                year: '2010',
                title: '50 Million Children Reached',
                description:
                  'Milestone of 50 million children served across health, education, and protection programs.',
              },
              {
                year: '2015',
                title: 'UN ECOSOC Accreditation',
                description:
                  'Special consultative status with the United Nations amplifies advocacy for children rights.',
              },
              {
                year: '2025',
                title: '120 Million Children Reached',
                description:
                  'Programs reach 120 million children and families annually across 85 countries.',
              },
            ],
            image: { src: '/images/humanitarian/about.jpg', alt: 'GUA timeline' },
          },
        },
        {
          type: 'leadership',
          config: {
            theme: 'light',
            animation: 'fade-in-up',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Our Leadership',
              subtitle: 'Meet the team guiding our global mission.',
              tag: 'Leadership',
              alignment: 'center',
            },
            leaders: [
              {
                name: 'Dr. Amara Osei-Tutu',
                role: 'Chief Executive Officer',
                image: { src: '/images/humanitarian/person1.jpg', alt: 'Dr. Amara Osei-Tutu' },
                bio: 'Former WHO Deputy Director-General with 25+ years in global health and humanitarian leadership.',
                socialLinks: [{ platform: 'linkedin', url: '#', label: 'LinkedIn' }],
              },
              {
                name: 'Rajesh Patel',
                role: 'Chief Programs Officer',
                image: { src: '/images/humanitarian/person2.jpg', alt: 'Rajesh Patel' },
                bio: '20+ years leading large-scale education and child protection programs across Asia and Africa.',
                socialLinks: [{ platform: 'linkedin', url: '#', label: 'LinkedIn' }],
              },
              {
                name: 'Dr. Sofia Lindstrom',
                role: 'Chief Medical Officer',
                image: { src: '/images/humanitarian/person1.jpg', alt: 'Dr. Sofia Lindstrom' },
                bio: 'Renowned pediatric epidemiologist who led global vaccination campaigns reaching 100M+ children.',
                socialLinks: [{ platform: 'linkedin', url: '#', label: 'LinkedIn' }],
              },
              {
                name: 'Chen Wei',
                role: 'Chief of Emergency Operations',
                image: { src: '/images/humanitarian/person2.jpg', alt: 'Chen Wei' },
                bio: 'Former UN OCHA coordinator with extensive experience in complex emergencies.',
                socialLinks: [{ platform: 'linkedin', url: '#', label: 'LinkedIn' }],
              },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered',
            heading: 'Join Our Mission',
            description:
              'Become part of the global movement for every child right to survive, learn, and thrive.',
            primaryCta: { label: 'Explore Careers', href: `${BASE}/about`, variant: 'primary' },
            secondaryCta: {
              label: 'Learn About Programs',
              href: `${BASE}/programs`,
              variant: 'outline',
            },
          },
        },
      ],
    },
    programs: {
      seo: {
        title: `Programs — ${ORG}`,
        description: `Explore ${ORG}'s integrated programs in child health, education, protection, water and sanitation, emergency response, and livelihood development.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center',
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Our Programs',
              subtitle: 'Integrated Solutions, Lasting Impact',
              description:
                'From life-saving healthcare to quality education, clean water to emergency response — our programs address the root causes of poverty and inequality.',
              tag: 'What We Do',
            },
            backgroundImage: { src: '/images/humanitarian/hero.jpg', alt: 'Programs in action' },
            backgroundValue: '/images/humanitarian/hero.jpg',
            image: { src: '/images/humanitarian/hero.jpg', alt: 'Programs in action' },
            overlayOpacity: 0.4,
          },
        },
        {
          type: 'programs',
          config: {
            theme: 'light',
            animation: 'fade-in-up',
            background: 'none',
            padding: 'large',
            visible: true,
            layout: 'bento',
            heading: { title: 'Explore All Programs', tag: 'Our Work', alignment: 'center' },
            programs: [
              {
                id: 'child-health',
                title: 'Child Health and Nutrition',
                description:
                  'Immunizations, malnutrition treatment, maternal health, and disease prevention reaching millions.',
                image: { src: '/images/humanitarian/health.jpg', alt: 'Child health' },
                category: 'Healthcare',
                impactStat: '48M+ children',
                cta: { label: 'Learn More', href: `${BASE}/program-detail` },
                featured: true,
              },
              {
                id: 'education',
                title: 'Quality Education',
                description:
                  'Building schools, training teachers, and supporting out-of-school children.',
                image: { src: '/images/humanitarian/gallery2.jpg', alt: 'Education' },
                category: 'Education',
                impactStat: '22M+ children',
                cta: { label: 'Learn More', href: `${BASE}/program-detail` },
              },
              {
                id: 'child-protection',
                title: 'Child Protection',
                description:
                  'Preventing violence, exploitation, and abuse. Supporting children in emergencies.',
                image: { src: '/images/humanitarian/gallery3.jpg', alt: 'Protection' },
                category: 'Protection',
                impactStat: '8M+ children',
                cta: { label: 'Learn More', href: `${BASE}/program-detail` },
              },
              {
                id: 'wash',
                title: 'Water, Sanitation and Hygiene',
                description: 'Wells, latrines, handwashing stations, and hygiene education.',
                image: { src: '/images/humanitarian/water.jpg', alt: 'WASH' },
                category: 'WASH',
                impactStat: '15M+ people',
                cta: { label: 'Learn More', href: `${BASE}/program-detail` },
              },
              {
                id: 'emergency',
                title: 'Emergency Response',
                description:
                  'Rapid life-saving aid during disasters, conflicts, and health emergencies.',
                image: { src: '/images/humanitarian/emergency.jpg', alt: 'Emergency' },
                category: 'Relief',
                impactStat: '180+ responses',
                cta: { label: 'Learn More', href: `${BASE}/program-detail` },
              },
              {
                id: 'livelihood',
                title: 'Livelihood and Resilience',
                description: 'Economic empowerment, skills training, and community resilience.',
                image: { src: '/images/humanitarian/livelihood.jpg', alt: 'Livelihood' },
                category: 'Empowerment',
                impactStat: '5M+ families',
                cta: { label: 'Learn More', href: `${BASE}/program-detail` },
              },
            ],
            showCategoryBadges: true,
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered',
            heading: 'Support Our Programs',
            description:
              'Your donation helps us reach more children and families with life-saving programs.',
            primaryCta: { label: 'Donate Now', href: `${BASE}/donate`, variant: 'primary' },
            secondaryCta: {
              label: 'View Impact Reports',
              href: `${BASE}/transparency`,
              variant: 'outline',
            },
          },
        },
      ],
    },
    'program-detail': {
      seo: {
        title: `Child Health and Nutrition — Programs | ${ORG}`,
        description: `${ORG}'s child health and nutrition program provides life-saving immunizations, malnutrition treatment, maternal health services, and disease prevention to millions of children worldwide.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center',
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Child Health and Nutrition',
              subtitle: 'Program Overview',
              description:
                'Every child deserves a healthy start. Our integrated health programs reach 48 million children annually with life-saving interventions.',
              tag: 'Healthcare',
            },
            backgroundImage: { src: '/images/humanitarian/about.jpg', alt: 'Child health program' },
            backgroundValue: '/images/humanitarian/about.jpg',
            image: { src: '/images/humanitarian/about.jpg', alt: 'Child health program' },
            overlayOpacity: 0.4,
          },
        },
        {
          type: 'campaignProgress',
          config: {
            theme: 'light',
            animation: 'fade-in-up',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: { title: 'Campaign Progress', tag: 'Current Goal', alignment: 'center' },
            goal: 50000000,
            raised: 42300000,
            currency: 'USD',
            donorCount: 125000,
            title: '50 Million Children Vaccinated by 2027',
            description:
              'Help us reach every child with life-saving vaccines. Each $25 provides full immunization for one child.',
          },
        },
        {
          type: 'about',
          config: {
            layout: 'default',
            theme: 'light',
            animation: 'fade-in-up',
            background: 'muted',
            padding: 'large',
            visible: true,
            variant: 'split',
            heading: { title: 'Why Child Health Matters', alignment: 'left' },
            body: [
              'Every year, 5 million children under the age of five die from preventable causes. Malnutrition, pneumonia, diarrhea, and lack of access to basic healthcare are the leading killers. These deaths are not inevitable — they are preventable.',
              'Our child health and nutrition program combines immunization campaigns, malnutrition screening and treatment, maternal health services, community health worker training, and disease surveillance systems.',
              'We work in partnership with ministries of health, WHO, UNICEF, and local community organizations to strengthen health systems and reach the most vulnerable children.',
            ],
            mission: 'No child should die from a preventable disease.',
            values: [
              { title: '48M+', description: 'Children vaccinated annually' },
              { title: '85+', description: 'Countries with health programs' },
              { title: '350K+', description: 'Health workers trained' },
              { title: '92%', description: 'Vaccination coverage rate' },
            ],
            image: { src: '/images/humanitarian/health.jpg', alt: 'Vaccination campaign' },
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered',
            heading: 'Support Child Health Programs',
            description:
              'Your donation provides vaccines, nutrition, and healthcare to children who need it most.',
            primaryCta: { label: 'Donate Now', href: `${BASE}/donate`, variant: 'primary' },
            secondaryCta: {
              label: 'View All Programs',
              href: `${BASE}/programs`,
              variant: 'outline',
            },
          },
        },
      ],
    },
    campaigns: {
      seo: {
        title: `Campaigns — ${ORG}`,
        description: `Support ${ORG}'s campaigns: vaccinate 50M children, build 1000 schools, provide clean water to 10M people, and respond to emergencies worldwide.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center',
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Our Campaigns',
              subtitle: 'Make a Difference Today',
              description:
                'Join millions of supporters worldwide in creating lasting change for children and communities.',
              tag: 'Take Action',
            },
            backgroundImage: { src: '/images/humanitarian/about.jpg', alt: 'Campaigns' },
            backgroundValue: '/images/humanitarian/about.jpg',
            image: { src: '/images/humanitarian/about.jpg', alt: 'Campaigns' },
            overlayOpacity: 0.4,
          },
        },
        {
          type: 'programs',
          config: {
            theme: 'light',
            animation: 'fade-in-up',
            background: 'none',
            padding: 'large',
            visible: true,
            layout: 'cards',
            heading: { title: 'Active Campaigns', tag: 'Current', alignment: 'center' },
            programs: [
              {
                id: 'camp-1',
                title: '50 Million Vaccinated by 2027',
                description:
                  'Help us reach 50 million children with life-saving vaccines across 30 priority countries.',
                image: { src: '/images/humanitarian/gallery1.jpg', alt: 'Vaccination campaign' },
                category: 'Health',
                impactStat: '42M/50M reached',
                cta: { label: 'Support', href: `${BASE}/donate` },
                featured: true,
              },
              {
                id: 'camp-2',
                title: 'Build 1,000 Schools',
                description:
                  'Construct and equip 1,000 primary schools in the world most underserved communities.',
                image: { src: '/images/humanitarian/gallery2.jpg', alt: 'School building' },
                category: 'Education',
                impactStat: '620/1,000 schools',
                cta: { label: 'Support', href: `${BASE}/donate` },
              },
              {
                id: 'camp-3',
                title: 'Clean Water for 10 Million',
                description:
                  'Bring clean water and sanitation to 10 million people in drought-affected regions.',
                image: { src: '/images/humanitarian/water.jpg', alt: 'Clean water' },
                category: 'WASH',
                impactStat: '6.5M/10M people',
                cta: { label: 'Support', href: `${BASE}/donate` },
              },
              {
                id: 'camp-4',
                title: 'Emergency Response Fund',
                description:
                  'Support our rapid response teams deployed to 15+ ongoing humanitarian crises worldwide.',
                image: { src: '/images/humanitarian/emergency.jpg', alt: 'Emergency response' },
                category: 'Relief',
                impactStat: '180+ responses',
                cta: { label: 'Donate', href: `${BASE}/donate` },
              },
            ],
            showCategoryBadges: true,
            showImpactStats: true,
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered',
            heading: 'Start Your Own Fundraiser',
            description:
              'Turn your passion into purpose. Start a fundraiser to support the cause you care about most.',
            primaryCta: {
              label: 'Start Fundraising',
              href: `${BASE}/volunteer`,
              variant: 'primary',
            },
          },
        },
      ],
    },
    impact: {
      seo: {
        title: `Impact — ${ORG}`,
        description: `See ${ORG}'s measurable impact: 48M children vaccinated, 22M children in school, 15M with clean water, and 92% program efficiency.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center',
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Our Impact',
              subtitle: 'Measurable Results, Real Change',
              description:
                'Every number represents a life changed, a child saved, a community transformed. This is what your support makes possible.',
              tag: '2025 Results',
            },
            backgroundImage: { src: '/images/humanitarian/about.jpg', alt: 'Impact' },
            backgroundValue: '/images/humanitarian/about.jpg',
            image: { src: '/images/humanitarian/about.jpg', alt: 'Impact' },
            overlayOpacity: 0.4,
          },
        },
        {
          type: 'impact',
          config: {
            theme: 'light',
            animation: 'fade-in-up',
            background: 'none',
            padding: 'large',
            visible: true,
            layout: 'counters',
            heading: { title: 'Our Impact Snapshot', tag: '2025', alignment: 'center' },
            stats: [
              { value: 48, suffix: 'M', label: 'Children Vaccinated' },
              { value: 22, suffix: 'M', label: 'Children in School' },
              { value: 15, suffix: 'M', label: 'People with Clean Water' },
              { value: 180, suffix: '+', label: 'Emergency Responses' },
              { value: 350000, suffix: '+', label: 'Health Workers Trained' },
              { value: 200000, suffix: '+', label: 'Active Volunteers' },
              { value: 85, suffix: '+', label: 'Countries' },
              { value: 92, suffix: '%', label: 'Program Efficiency' },
              { value: 45, suffix: 'K', label: 'Annual Donors' },
            ],
            columns: 3,
            animationDuration: 2.5,
          },
        },
        {
          type: 'impactTimeline',
          config: {
            theme: 'light',
            animation: 'fade-in-up',
            background: 'muted',
            padding: 'large',
            visible: true,
            heading: { title: 'Our Journey of Impact', tag: 'Timeline', alignment: 'center' },
            milestones: [
              {
                year: 1991,
                title: 'Founded',
                description:
                  'Global Unity Alliance established to respond to the Horn of Africa famine.',
              },
              {
                year: 1995,
                title: 'First 5M Children Vaccinated',
                description:
                  'Landmark immunization campaign reaches 5 million children across 12 countries.',
              },
              {
                year: 2000,
                title: '500 Schools Built',
                description:
                  'Education program launches with 500 schools built and 10,000 teachers trained.',
              },
              {
                year: 2005,
                title: 'Rapid Response Team',
                description: '72-hour emergency deployment team established for global crises.',
              },
              {
                year: 2010,
                title: '50 Million Children',
                description: 'Milestone of 50 million children reached across all programs.',
              },
              {
                year: 2015,
                title: 'UN ECOSOC Status',
                description: 'Special consultative status with the United Nations granted.',
              },
              {
                year: 2025,
                title: '120 Million Children Reached',
                description:
                  'Our programs reach 120 million children and families annually in 85 countries.',
              },
            ],
          },
        },
        {
          type: 'transparencyDashboard',
          config: {
            theme: 'light',
            animation: 'fade-in-up',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: { title: 'Financial Impact', tag: 'Stewardship', alignment: 'center' },
            allocations: [
              { label: 'Program Services', percentage: 92, color: '#1a3a6b', amount: '$892M' },
              { label: 'Fundraising', percentage: 4, color: '#2d6a4f', amount: '$39M' },
              { label: 'Administration', percentage: 4, color: '#d4a017', amount: '$39M' },
            ],
            stats: [
              { value: 970, suffix: 'M', prefix: '$', label: 'Total Revenue' },
              { value: 892, suffix: 'M', prefix: '$', label: 'Program Spending' },
              { value: 92, suffix: '%', label: 'Program Efficiency' },
              { value: 45, suffix: 'K', label: 'Annual Donors' },
            ],
            totalRaised: '$970M',
            fiscalYear: '2025',
          },
        },
        {
          type: 'successStories',
          config: {
            theme: 'light',
            animation: 'fade-in-up',
            background: 'muted',
            padding: 'large',
            visible: true,
            heading: { title: 'Impact Stories', tag: 'Real Lives', alignment: 'center' },
            stories: [
              {
                id: 'impact-story-1',
                title: 'Amina Story',
                description:
                  'From severe malnutrition to thriving in school — Amina journey shows the transformative power of integrated health and education programs.',
                image: { src: '/images/humanitarian/health.jpg', alt: 'Amina' },
                author: 'Amina Hassan',
                role: 'Somalia',
                tags: ['Health'],
              },
              {
                id: 'impact-story-2',
                title: 'Fatima Story',
                description:
                  'In Cox Bazar refugee camp, our learning centers and child-friendly spaces gave 150,000 Rohingya children hope and a future.',
                image: { src: '/images/humanitarian/emergency.jpg', alt: 'Fatima' },
                author: 'Fatima Begum',
                role: 'Bangladesh',
                tags: ['Education'],
              },
              {
                id: 'impact-story-3',
                title: 'Tigist Story',
                description:
                  'Clean water transformed the village of Gurage Zone — childhood diarrhea dropped 80% and girls returned to school.',
                image: { src: '/images/humanitarian/water.jpg', alt: 'Tigist' },
                author: 'Tigist Worku',
                role: 'Ethiopia',
                tags: ['WASH'],
              },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'dual',
            heading: 'Your Impact Starts Now',
            description:
              'Every dollar, every hour, every voice makes a difference. Join the movement.',
            primaryCta: { label: 'Donate Now', href: `${BASE}/donate`, variant: 'primary' },
            secondaryCta: {
              label: 'Become a Volunteer',
              href: `${BASE}/volunteer`,
              variant: 'outline',
            },
          },
        },
      ],
    },
    transparency: {
      seo: {
        title: `Transparency — ${ORG}`,
        description: `${ORG}'s commitment to transparency: audited financial statements, annual reports, governance policies, and impact metrics. 92% program efficiency.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center',
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Transparency and Accountability',
              subtitle: 'Trust Through Transparency',
              description:
                'We believe radical transparency is essential to our mission. Every dollar tracked, every outcome measured, every decision explained.',
              tag: 'Our Commitment',
            },
            backgroundImage: { src: '/images/humanitarian/about.jpg', alt: 'Transparency' },
            backgroundValue: '/images/humanitarian/about.jpg',
            image: { src: '/images/humanitarian/about.jpg', alt: 'Transparency' },
            overlayOpacity: 0.4,
          },
        },
        {
          type: 'transparencyDashboard',
          config: {
            theme: 'light',
            animation: 'fade-in-up',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Financial Overview',
              subtitle: 'Fiscal Year 2025: How your donations are used.',
              tag: 'Finances',
              alignment: 'center',
            },
            allocations: [
              { label: 'Program Services', percentage: 92, color: '#1a3a6b', amount: '$892M' },
              { label: 'Fundraising', percentage: 4, color: '#2d6a4f', amount: '$39M' },
              { label: 'Administration', percentage: 4, color: '#d4a017', amount: '$39M' },
            ],
            stats: [
              { value: 970, suffix: 'M', prefix: '$', label: 'Total Revenue' },
              { value: 892, suffix: 'M', prefix: '$', label: 'Program Spending' },
              { value: 92, suffix: '%', label: 'Program Efficiency' },
              { value: 45, suffix: 'K', label: 'Annual Donors' },
              { value: 4, suffix: '-Star', label: 'Charity Navigator' },
              { value: 100, suffix: '%', label: 'Audit Compliance' },
            ],
            totalRaised: '$970M',
            fiscalYear: '2025',
          },
        },
        {
          type: 'annualReports',
          config: {
            theme: 'light',
            animation: 'fade-in-up',
            background: 'muted',
            padding: 'large',
            visible: true,
            heading: { title: 'Annual Reports', tag: 'Reports', alignment: 'center' },
            reports: [
              {
                year: 2025,
                title: 'Annual Impact Report 2025',
                description:
                  'Comprehensive report on our programs, financial performance, and impact metrics for the fiscal year ending June 2025.',
                pdfUrl: '#',
                coverImage: { src: '/images/humanitarian/report.jpg', alt: '2025 Report' },
                fileSize: '8.5 MB',
              },
              {
                year: 2024,
                title: 'Annual Impact Report 2024',
                description:
                  'Our programs reached 110 million children. Read about our achievements and lessons learned.',
                pdfUrl: '#',
                coverImage: { src: '/images/humanitarian/gallery1.jpg', alt: '2024 Report' },
                fileSize: '7.2 MB',
              },
              {
                year: 2023,
                title: 'Annual Impact Report 2023',
                description:
                  'Emergency response highlights and progress on our five-year strategic plan.',
                pdfUrl: '#',
                coverImage: { src: '/images/humanitarian/gallery3.jpg', alt: '2023 Report' },
                fileSize: '6.8 MB',
              },
            ],
          },
        },
        {
          type: 'csrPartners',
          config: {
            theme: 'light',
            animation: 'fade-in-up',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: { title: 'Governance and Oversight', tag: 'Governance', alignment: 'center' },
            partners: [
              {
                name: 'Audit Committee',
                description:
                  'Independent audit committee oversees financial reporting and compliance.',
                focus: 'Governance',
                contribution: 'Quarterly reviews',
              },
              {
                name: 'Ethics Board',
                description:
                  'Independent ethics board reviews policies, complaints, and ensures accountability.',
                focus: 'Ethics',
                contribution: 'Annual ethics report',
              },
              {
                name: 'Program Evaluation',
                description: 'Rigorous M&E framework tracks outcomes across all program areas.',
                focus: 'Impact',
                contribution: 'Real-time dashboards',
              },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered',
            heading: 'Have Questions About Our Finances?',
            description:
              'We welcome your questions about how we manage donations and measure impact.',
            primaryCta: { label: 'Contact Our Team', href: `${BASE}/contact`, variant: 'primary' },
          },
        },
      ],
    },
    gallery: {
      seo: {
        title: `Gallery — ${ORG}`,
        description: `Photos from ${ORG}'s programs around the world: healthcare, education, clean water, emergency response, and community empowerment.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center',
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Gallery',
              subtitle: 'Our Work in Pictures',
              description:
                'Powerful moments captured across our programs worldwide — stories of hope, resilience, and transformation.',
              tag: 'Moments',
            },
            backgroundImage: { src: '/images/humanitarian/about.jpg', alt: 'Gallery' },
            backgroundValue: '/images/humanitarian/about.jpg',
            image: { src: '/images/humanitarian/about.jpg', alt: 'Gallery' },
            overlayOpacity: 0.4,
          },
        },
        {
          type: 'gallery',
          config: {
            theme: 'light',
            animation: 'fade-in-up',
            background: 'none',
            padding: 'large',
            visible: true,
            layout: 'grid',
            heading: { title: 'Program Highlights', alignment: 'center' },
            images: [
              { src: '/images/humanitarian/gallery1.jpg', alt: 'Children in school' },
              { src: '/images/humanitarian/gallery2.jpg', alt: 'Health worker' },
              { src: '/images/humanitarian/gallery3.jpg', alt: 'Relief distribution' },
              { src: '/images/humanitarian/gallery4.jpg', alt: 'Women empowerment' },
              { src: '/images/humanitarian/gallery5.jpg', alt: 'Water well' },
              { src: '/images/humanitarian/gallery6.jpg', alt: 'Children playing' },
              { src: '/images/humanitarian/gallery7.jpg', alt: 'Vaccination' },
              { src: '/images/humanitarian/gallery8.jpg', alt: 'Community meeting' },
              { src: '/images/humanitarian/health.jpg', alt: 'Nutrition program' },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered',
            heading: 'See Our Impact in Person',
            description:
              'Join a community visit to see our programs in action and meet the people we serve.',
            primaryCta: { label: 'Plan a Visit', href: `${BASE}/contact`, variant: 'primary' },
          },
        },
      ],
    },
    news: {
      seo: {
        title: `News — ${ORG}`,
        description: `Latest news and updates from ${ORG}: emergency responses, program announcements, impact reports, and stories from the field.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center',
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            padding: 'none',
            visible: true,
            heading: {
              title: 'News and Updates',
              subtitle: 'Stories from the Field',
              description:
                'Stay informed about our programs, emergency responses, impact stories, and the communities we serve.',
              tag: 'Latest',
            },
            backgroundImage: { src: '/images/humanitarian/about.jpg', alt: 'News' },
            backgroundValue: '/images/humanitarian/about.jpg',
            image: { src: '/images/humanitarian/about.jpg', alt: 'News' },
            overlayOpacity: 0.4,
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
            layout: 'magazine',
            heading: { title: 'Latest News', tag: 'Articles', alignment: 'center' },
            articles: [
              {
                id: 'n1',
                slug: 'n1',
                title: 'Emergency Response Reaches 500,000 Families in Southeast Asia',
                excerpt:
                  'Catastrophic floods have displaced over 2 million people across Thailand, Myanmar, and Cambodia. Our teams are on the ground.',
                date: '2026-07-10',
                category: 'Emergency',
                image: { src: '/images/humanitarian/news.jpg', alt: 'Floods' },
                author: 'Maria Chen',
                cta: { label: 'Read', href: `${BASE}/news` },
                featured: true,
              },
              {
                id: 'n2',
                slug: 'n2',
                title: 'New Report: 40% Reduction in Child Mortality',
                excerpt:
                  'Our 2025 impact report reveals significant progress in child survival across 20 focus countries.',
                date: '2026-06-22',
                category: 'Impact',
                image: { src: '/images/humanitarian/report.jpg', alt: 'Report' },
                author: 'James Okonkwo',
                cta: { label: 'Read', href: `${BASE}/news` },
              },
              {
                id: 'n3',
                slug: 'n3',
                title: 'School Meals Program Reaches 2 Million Children',
                excerpt:
                  'New partnership provides daily nutritious meals to primary school children in drought-affected regions.',
                date: '2026-06-08',
                category: 'Partnership',
                image: { src: '/images/humanitarian/health.jpg', alt: 'School meals' },
                author: 'Aisha Patel',
                cta: { label: 'Read', href: `${BASE}/news` },
              },
              {
                id: 'n4',
                slug: 'n4',
                title: 'Clean Water Initiative Reaches 5 Million People',
                excerpt:
                  'Our WASH program has crossed a major milestone, providing clean water to 5 million people across 15 countries.',
                date: '2026-05-15',
                category: 'WASH',
                image: { src: '/images/humanitarian/water.jpg', alt: 'Clean water' },
                author: 'David Kim',
                cta: { label: 'Read', href: `${BASE}/news` },
              },
              {
                id: 'n5',
                slug: 'n5',
                title: 'Global Vaccine Summit: GUA Commits to Reach 50M Children',
                excerpt:
                  'At the Global Vaccine Summit, our CEO announced a new commitment to vaccinate 50 million children by 2027.',
                date: '2026-04-20',
                category: 'Health',
                image: { src: '/images/humanitarian/gallery1.jpg', alt: 'Vaccine summit' },
                author: 'Dr. Amara Osei-Tutu',
                cta: { label: 'Read', href: `${BASE}/news` },
              },
              {
                id: 'n6',
                slug: 'n6',
                title: 'Volunteer of the Month: 10 Years of Service',
                excerpt:
                  'Meet Carlos Mendez, who has volunteered with our emergency response team for a decade across 20+ missions.',
                date: '2026-04-05',
                category: 'Volunteer',
                image: { src: '/images/humanitarian/person1.jpg', alt: 'Volunteer' },
                author: 'Volunteer Team',
                cta: { label: 'Read', href: `${BASE}/news` },
              },
            ],
          },
        },
        {
          type: 'newsletter',
          config: {
            theme: 'light',
            animation: 'fade',
            background: 'muted',
            padding: 'large',
            visible: true,
            heading: { title: 'Get News Delivered', tag: 'Subscribe', alignment: 'center' },
            title: 'Stay Informed',
            description:
              'Sign up for our monthly newsletter with program updates, impact stories, and ways to help.',
            placeholder: 'your@email.com',
            buttonLabel: 'Subscribe',
            successMessage: 'Thank you for subscribing!',
          },
        },
      ],
    },
    resources: {
      seo: {
        title: `Resources — ${ORG}`,
        description: `${ORG}'s publications and resources: annual reports, research papers, case studies, media kits, and program evaluations.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center',
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Publications and Resources',
              subtitle: 'Research, Reports, and Media',
              description:
                'Access our library of annual reports, research papers, case studies, program evaluations, and media resources.',
              tag: 'Knowledge Hub',
            },
            backgroundImage: { src: '/images/humanitarian/about.jpg', alt: 'Resources' },
            backgroundValue: '/images/humanitarian/about.jpg',
            image: { src: '/images/humanitarian/about.jpg', alt: 'Resources' },
            overlayOpacity: 0.4,
          },
        },
        {
          type: 'resourceLibrary',
          config: {
            theme: 'light',
            animation: 'fade-in-up',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: { title: 'Featured Publications', tag: 'Library', alignment: 'center' },
            resources: [
              {
                id: 'res-1',
                title: 'Annual Impact Report 2025',
                description:
                  'Comprehensive report on our programs, financial performance, and impact across 85 countries.',
                type: 'download',
                url: '#',
                category: 'Reports',
                image: '/images/humanitarian/report.jpg',
              },
              {
                id: 'res-2',
                title: 'State of Global Child Health 2025',
                description:
                  'Research paper analyzing trends in child mortality, nutrition, and healthcare access worldwide.',
                type: 'download',
                url: '#',
                category: 'Research',
                image: '/images/humanitarian/health.jpg',
              },
              {
                id: 'res-3',
                title: 'Education in Emergencies: Best Practices',
                description:
                  'Case studies and best practices for delivering education in conflict and crisis settings.',
                type: 'article',
                url: '#',
                category: 'Case Studies',
                image: '/images/humanitarian/about.jpg',
              },
              {
                id: 'res-4',
                title: 'GUA Program Evaluation Framework',
                description:
                  'Our monitoring and evaluation methodology for measuring program impact and effectiveness.',
                type: 'download',
                url: '#',
                category: 'Research',
              },
              {
                id: 'res-5',
                title: 'Media Kit and Brand Guidelines',
                description:
                  'Logos, photography, brand guidelines, and press materials for media and partners.',
                type: 'download',
                url: '#',
                category: 'Media',
              },
              {
                id: 'res-6',
                title: 'Podcast: Voices from the Field',
                description:
                  'Monthly podcast featuring conversations with field staff, community leaders, and program beneficiaries.',
                type: 'podcast',
                url: '#',
                category: 'Multimedia',
                image: '/images/humanitarian/news.jpg',
              },
              {
                id: 'res-7',
                title: 'Financial Statements FY2025',
                description: 'Audited financial statements for the fiscal year ending June 2025.',
                type: 'download',
                url: '#',
                category: 'Reports',
              },
              {
                id: 'res-8',
                title: 'Water and Sanitation Program Evaluation',
                description:
                  'Independent evaluation of our WASH program outcomes across 15 countries.',
                type: 'download',
                url: '#',
                category: 'Case Studies',
              },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered',
            heading: 'Need Specific Information?',
            description:
              'Contact our research and communications team for specific data or publications.',
            primaryCta: { label: 'Contact Us', href: `${BASE}/contact`, variant: 'primary' },
          },
        },
      ],
    },
    volunteer: {
      seo: {
        title: `Volunteer — ${ORG}`,
        description: `Volunteer with ${ORG} and make a difference. Opportunities include local volunteering, international deployments, skilled volunteering, and corporate partnerships.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'split',
            theme: 'dark',
            animation: 'hero',
            background: 'image',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Become a Volunteer',
              subtitle: 'Make a Difference',
              description:
                'Join 200,000+ volunteers worldwide. Whether you have an hour or a year, your time can change lives.',
              tag: 'Get Involved',
            },
            backgroundImage: { src: '/images/humanitarian/about.jpg', alt: 'Volunteers' },
            backgroundValue: '/images/humanitarian/about.jpg',
            image: { src: '/images/humanitarian/about.jpg', alt: 'Volunteers' },
            overlayOpacity: 0.35,
          },
        },
        {
          type: 'volunteerJourney',
          config: {
            theme: 'light',
            animation: 'fade-in-up',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: { title: 'How to Get Started', tag: 'Steps', alignment: 'center' },
            steps: [
              {
                number: 1,
                title: 'Explore Opportunities',
                description:
                  'Browse our current volunteer needs — from local fundraising to international emergency response.',
              },
              {
                number: 2,
                title: 'Complete Training',
                description:
                  'All volunteers complete our online orientation and role-specific training modules.',
              },
              {
                number: 3,
                title: 'Start Volunteering',
                description:
                  'Begin making a difference with the support of our volunteer coordination team.',
              },
              {
                number: 4,
                title: 'Grow Your Impact',
                description:
                  'Take on leadership roles, train other volunteers, or deploy internationally.',
              },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'volunteer',
            heading: 'Ready to Make a Difference?',
            description: 'Sign up today and join 200,000+ volunteers creating change worldwide.',
            primaryCta: { label: 'Volunteer Now', href: `${BASE}/volunteer`, variant: 'primary' },
          },
        },
        {
          type: 'faq',
          config: {
            theme: 'light',
            animation: 'fade',
            background: 'muted',
            padding: 'large',
            visible: true,
            heading: { title: 'Volunteer FAQ', tag: 'Questions', alignment: 'center' },
            items: [
              {
                id: 'vfaq-1',
                title: 'Is there a minimum time commitment?',
                content:
                  'We offer flexible opportunities from one-time events to ongoing weekly commitments and full-time international deployments.',
              },
              {
                id: 'vfaq-2',
                title: 'Do I need special skills to volunteer?',
                content:
                  'Some roles require specific skills, but we have opportunities for everyone. We provide training for all volunteer positions.',
              },
              {
                id: 'vfaq-3',
                title: 'Can I volunteer from home?',
                content:
                  'Yes! We have virtual volunteer opportunities including fundraising, research, translation, graphic design, and social media support.',
              },
              {
                id: 'vfaq-4',
                title: 'Are international volunteer expenses covered?',
                content:
                  'For international deployments, we cover travel, accommodation, meals, and provide a modest stipend. All volunteers have comprehensive insurance.',
              },
            ],
            allowMultiple: false,
            variant: 'ghost',
          },
        },
      ],
    },
    partner: {
      seo: {
        title: `Partner — ${ORG}`,
        description: `Partner with ${ORG} to create lasting change. Corporate partnerships, institutional funding, government collaborations, and NGO alliances.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center',
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Partner With Us',
              subtitle: 'Collaborate for Impact',
              description:
                'Together, we can achieve more. Join the global network of organizations, governments, and businesses working to protect children and build resilient communities.',
              tag: 'Partnerships',
            },
            backgroundImage: { src: '/images/humanitarian/about.jpg', alt: 'Partners' },
            backgroundValue: '/images/humanitarian/about.jpg',
            image: { src: '/images/humanitarian/about.jpg', alt: 'Partners' },
            overlayOpacity: 0.4,
          },
        },
        {
          type: 'partnerLogos',
          config: {
            layout: 'default',
            theme: 'light',
            animation: 'fade-in-up',
            background: 'none',
            padding: 'large',
            visible: true,
            variant: 'grid',
            heading: { title: 'Our Partners', tag: 'Global Network', alignment: 'center' },
            partners: [
              {
                name: 'United Nations',
                logo: { src: '/images/partners/united-nations.svg', alt: 'United Nations' },
              },
              { name: 'UNICEF', logo: { src: '/images/partners/unicef.svg', alt: 'UNICEF' } },
              {
                name: 'World Health Organization',
                logo: { src: '/images/partners/world-health-organization.svg', alt: 'WHO' },
              },
              {
                name: 'World Food Programme',
                logo: { src: '/images/partners/world-food-programme.svg', alt: 'WFP' },
              },
              {
                name: 'World Bank',
                logo: { src: '/images/partners/world-bank.svg', alt: 'World Bank' },
              },
              { name: 'USAID', logo: { src: '/images/partners/usaid.svg', alt: 'USAID' } },
              {
                name: 'European Union',
                logo: { src: '/images/partners/european-union.svg', alt: 'EU' },
              },
              {
                name: 'Gates Foundation',
                logo: { src: '/images/partners/gates-foundation.svg', alt: 'Gates Foundation' },
              },
            ],
          },
        },
        {
          type: 'csrPartners',
          config: {
            theme: 'light',
            animation: 'fade-in-up',
            background: 'muted',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Corporate and Institutional Partners',
              tag: 'CSR',
              alignment: 'center',
            },
            partners: [
              {
                name: 'GlobalTech Corp',
                description:
                  'Technology partner providing digital infrastructure, cloud services, and connectivity solutions.',
                focus: 'Technology',
                contribution: '$15M in-kind',
              },
              {
                name: 'Pacific Healthcare',
                description:
                  'Pharmaceutical partner supplying vaccines, medicines, and medical supplies.',
                focus: 'Healthcare',
                contribution: '$25M in-kind',
              },
              {
                name: 'Horizon Foundation',
                description:
                  'Strategic funding partner supporting our education and livelihood programs in Sub-Saharan Africa.',
                focus: 'Education',
                contribution: '$40M funding',
              },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered',
            heading: 'Become a Partner',
            description:
              'Explore partnership opportunities and join us in creating lasting change for children and communities.',
            primaryCta: {
              label: 'Contact Partnerships Team',
              href: `${BASE}/contact`,
              variant: 'primary',
            },
          },
        },
      ],
    },
    donate: {
      seo: {
        title: `Donate — ${ORG}`,
        description: `Donate to ${ORG} and save lives. Your contribution provides vaccines, education, clean water, and emergency relief to children and families in need.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center',
            theme: 'dark',
            animation: 'hero',
            background: 'image',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Make a Donation',
              subtitle: 'Your Gift Changes Lives',
              description:
                'Every dollar makes a difference. 92% of your donation goes directly to life-saving programs for children and families.',
              tag: '100% Tax Deductible',
            },
            backgroundImage: { src: '/images/humanitarian/about.jpg', alt: 'Donate' },
            backgroundValue: '/images/humanitarian/about.jpg',
            image: { src: '/images/humanitarian/about.jpg', alt: 'Donate' },
            overlayOpacity: 0.4,
          },
        },
        {
          type: 'donationJourney',
          config: {
            theme: 'light',
            animation: 'fade-in-up',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: { title: 'Choose How to Give', tag: 'Ways to Donate', alignment: 'center' },
            steps: [
              {
                amount: 25,
                title: 'Vaccinate a Child',
                description:
                  'Provides full immunization for one child, protecting them from preventable diseases for life.',
                icon: 'Heart',
              },
              {
                amount: 50,
                title: 'School Supplies for 10 Children',
                description:
                  'Provides books, uniforms, and learning materials for 10 children to attend school for a year.',
                icon: 'BookOpen',
              },
              {
                amount: 100,
                title: 'Clean Water for a Community',
                description:
                  'Funds a community water well serving 500 people with clean, safe drinking water.',
                icon: 'Droplets',
              },
              {
                amount: 500,
                title: 'Emergency Family Kit',
                description:
                  'Provides food, clean water, shelter supplies, and medicine for 10 families in an emergency.',
                icon: 'Tent',
              },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'donate',
            heading: 'Make Your Donation',
            description:
              'Select an amount or enter a custom donation. Every contribution makes a difference.',
            primaryCta: { label: 'Donate Now', href: `${BASE}/donate`, variant: 'primary' },
            donateAmounts: [25, 50, 100, 250, 500, 1000],
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
            layout: 'carousel',
            heading: { title: 'Why Our Donors Give', tag: 'Donor Stories', alignment: 'center' },
            testimonials: [
              {
                quote:
                  'I started donating $25 a month five years ago. Knowing that 92% goes directly to programs — I have never felt more confident that my money is making a real difference.',
                name: 'Sarah Mitchell',
                role: 'Monthly Donor, UK',
                avatar: { src: '/images/humanitarian/person1.jpg', alt: 'Sarah Mitchell' },
              },
              {
                quote:
                  'Instead of birthday gifts, I ask friends to donate to GUA. Last year we raised $12,000 to build a school library. It was the best birthday ever.',
                name: 'James Park',
                role: 'Fundraiser, Canada',
                avatar: { src: '/images/humanitarian/person2.jpg', alt: 'James Park' },
              },
              {
                quote:
                  'Our company matches employee donations 2:1. It doubles our impact and brings our team together around a shared purpose.',
                name: 'Lisa Chen',
                role: 'CSR Director, Australia',
                avatar: { src: '/images/humanitarian/gallery5.jpg', alt: 'Lisa Chen' },
              },
            ],
          },
        },
      ],
    },
    contact: {
      seo: {
        title: `Contact — ${ORG}`,
        description: `Contact ${ORG}. Reach our global headquarters, regional offices, or program teams. We welcome your questions and feedback.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center',
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Get In Touch',
              subtitle: 'We Are Here to Help',
              description:
                'Have a question, feedback, or want to learn more? Our team is ready to assist you.',
              tag: 'Contact',
            },
            backgroundImage: { src: '/images/humanitarian/about.jpg', alt: 'Contact' },
            backgroundValue: '/images/humanitarian/about.jpg',
            image: { src: '/images/humanitarian/about.jpg', alt: 'Contact' },
            overlayOpacity: 0.4,
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'contact',
            heading: 'Contact Us',
            description: 'Fill out the form below and our team will respond within 24 hours.',
            primaryCta: { label: 'Send Message', href: `${BASE}/contact`, variant: 'primary' },
          },
        },
        {
          type: 'faq',
          config: {
            theme: 'light',
            animation: 'fade',
            background: 'muted',
            padding: 'large',
            visible: true,
            heading: { title: 'Quick Answers', tag: 'FAQ', alignment: 'center' },
            items: [
              {
                id: 'cfaq-1',
                title: 'How quickly do you respond to inquiries?',
                content:
                  'Our team aims to respond to all inquiries within 24 hours during business days.',
              },
              {
                id: 'cfaq-2',
                title: 'Do you have offices in my country?',
                content:
                  'We have regional offices in 25 countries and program operations in 85+ countries. Contact us to find the nearest office.',
              },
              {
                id: 'cfaq-3',
                title: 'Can I visit your programs in person?',
                content:
                  'Yes, we welcome donors and partners to visit our programs. Contact us to arrange a program visit.',
              },
            ],
            allowMultiple: true,
            variant: 'ghost',
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'dual',
            heading: 'Other Ways to Reach Us',
            description: 'Find us on social media, call our helpline, or visit our headquarters.',
            primaryCta: { label: 'Follow Us on Social', href: '#', variant: 'secondary' },
            secondaryCta: { label: 'Call Our Helpline', href: '#', variant: 'outline' },
          },
        },
      ],
    },
    faq: {
      seo: {
        title: `FAQ — ${ORG}`,
        description: `Frequently asked questions about ${ORG}: donations, volunteering, programs, transparency, and how to get involved.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center',
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Frequently Asked Questions',
              subtitle: 'Everything You Need to Know',
              description:
                'Find answers to common questions about our work, donations, volunteering, and more.',
              tag: 'FAQ',
            },
            backgroundImage: { src: '/images/humanitarian/about.jpg', alt: 'FAQ' },
            backgroundValue: '/images/humanitarian/about.jpg',
            image: { src: '/images/humanitarian/about.jpg', alt: 'FAQ' },
            overlayOpacity: 0.4,
          },
        },
        {
          type: 'faq',
          config: {
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            variant: 'filled',
            heading: { title: 'Donations and Giving', tag: 'Donations', alignment: 'center' },
            items: [
              {
                id: 'dfaq-1',
                title: 'How is my donation used?',
                content:
                  '92% of every dollar goes directly to program services. 4% covers fundraising costs, and 4% supports administration.',
              },
              {
                id: 'dfaq-2',
                title: 'Is my donation tax-deductible?',
                content:
                  'Yes, GUA is a registered 501(c)(3) organization. All donations are tax-deductible to the extent allowed by law.',
              },
              {
                id: 'dfaq-3',
                title: 'Can I make a recurring donation?',
                content:
                  'Yes, you can set up monthly, quarterly, or annual recurring donations through our secure giving portal.',
              },
              {
                id: 'dfaq-4',
                title: 'Can I donate in honor of someone?',
                content:
                  'Yes, you can make a tribute donation in honor or memory of a loved one. We will send a notification card.',
              },
            ],
            allowMultiple: true,
          },
        },
        {
          type: 'faq',
          config: {
            theme: 'light',
            animation: 'fade',
            background: 'muted',
            padding: 'large',
            visible: true,
            variant: 'filled',
            heading: { title: 'Programs and Impact', tag: 'Our Work', alignment: 'center' },
            items: [
              {
                id: 'pfaq-1',
                title: 'What countries do you work in?',
                content:
                  'We operate in 85+ countries across Africa, Asia, the Middle East, and Latin America.',
              },
              {
                id: 'pfaq-2',
                title: 'How do you measure impact?',
                content:
                  'We have a robust M&E framework with real-time dashboards tracking outcomes across all program areas.',
              },
              {
                id: 'pfaq-3',
                title: 'Do you work in conflict zones?',
                content:
                  'Yes, we have specialized teams trained to operate safely in conflict-affected areas following humanitarian principles.',
              },
              {
                id: 'pfaq-4',
                title: 'How do you ensure sustainability?',
                content:
                  'We work through local partnerships, building capacity and systems that endure beyond our direct involvement.',
              },
            ],
            allowMultiple: true,
          },
        },
        {
          type: 'faq',
          config: {
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            variant: 'filled',
            heading: {
              title: 'Volunteering and Careers',
              tag: 'Get Involved',
              alignment: 'center',
            },
            items: [
              {
                id: 'vfaq2-1',
                title: 'How do I become a volunteer?',
                content:
                  'Visit our volunteer page to explore current opportunities and complete the application process.',
              },
              {
                id: 'vfaq2-2',
                title: 'Are there paid positions?',
                content:
                  'Yes, we have career opportunities across our global operations. Visit our careers page for current openings.',
              },
              {
                id: 'vfaq2-3',
                title: 'Can interns volunteer?',
                content:
                  'Yes, we offer internship programs in partnership with universities worldwide.',
              },
            ],
            allowMultiple: true,
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered',
            heading: 'Still Have Questions?',
            description:
              'We are here to help. Contact our support team for personalized assistance.',
            primaryCta: { label: 'Contact Us', href: `${BASE}/contact`, variant: 'primary' },
          },
        },
      ],
    },
    'not-found': {
      seo: {
        title: `404 — Page Not Found | ${ORG}`,
        description: `The page you are looking for does not exist. Please visit our homepage or contact us for assistance.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center',
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Page Not Found',
              subtitle: '404',
              description:
                'We could not find the page you are looking for. It may have been moved or deleted.',
              tag: 'Let Us Help',
            },
            backgroundImage: { src: '/images/humanitarian/about.jpg', alt: '404' },
            backgroundValue: '/images/humanitarian/about.jpg',
            image: { src: '/images/humanitarian/about.jpg', alt: '404' },
            overlayOpacity: 0.4,
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered',
            heading: 'Explore Our Site',
            description:
              'Visit our homepage to learn about our programs, impact, and how you can help.',
            primaryCta: { label: 'Go Home', href: BASE, variant: 'primary' },
            secondaryCta: { label: 'Donate Now', href: `${BASE}/donate`, variant: 'outline' },
          },
        },
      ],
    },
  },
};
