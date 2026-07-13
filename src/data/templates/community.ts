import type { TemplateData } from './types';

const ORG = 'Community Builders International';
const BASE = `/templates/community`;

const nav = {
  layout: 'transparent' as const,
  logo: { text: ORG, href: '/' },
  menuItems: [
    { label: 'Home', href: BASE },
    { label: 'About', href: `${BASE}/about` },
    { label: 'Programs', href: `${BASE}/programs` },
    { label: 'Stories', href: `${BASE}/stories` },
    { label: 'Resources', href: `${BASE}/resources` },
    { label: 'Contact', href: `${BASE}/contact` },
  ],
  ctaButtons: [
    { label: 'Donate', href: `${BASE}/donate`, variant: 'primary' as const, size: 'md' as const },
    {
      label: 'Volunteer',
      href: `${BASE}/volunteer`,
      variant: 'outline' as const,
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
  backgroundValue: '#1b1713',
  padding: 'large' as const,
  visible: true,
  logo: { src: null, alt: ORG, width: 160, height: 40 },
  description:
    'Partnering with communities to build their own pathways out of poverty through sustainable development, local leadership, and inclusive participation.',
  columns: [
    {
      title: 'Our Work',
      links: [
        { label: 'About Us', href: `${BASE}/about` },
        { label: 'Programs', href: `${BASE}/programs` },
        { label: 'Our Impact', href: `${BASE}/about` },
        { label: 'Careers', href: '#' },
      ],
    },
    {
      title: 'Get Involved',
      links: [
        { label: 'Donate', href: `${BASE}/donate` },
        { label: 'Volunteer', href: `${BASE}/volunteer` },
        { label: 'Partner With Us', href: `${BASE}/contact` },
        { label: 'Fundraise', href: `${BASE}/donate` },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Stories', href: `${BASE}/stories` },
        { label: 'Reports', href: `${BASE}/resources` },
        { label: 'FAQs', href: `${BASE}/faq` },
        { label: 'Contact', href: `${BASE}/contact` },
      ],
    },
  ],
  socialLinks: [
    { platform: 'facebook' as const, url: '#', label: 'Facebook' },
    { platform: 'instagram' as const, url: '#', label: 'Instagram' },
    { platform: 'youtube' as const, url: '#', label: 'YouTube' },
    { platform: 'linkedin' as const, url: '#', label: 'LinkedIn' },
  ],
  copyright: `Â© 2026 ${ORG}. All rights reserved.`,
  showBackToTop: true,
};

export const communityTemplate: TemplateData = {
  slug: 'community',
  name: 'Community Development',
  tagline: 'Empowering communities, building futures together',
  description:
    'A warm, community-first design for community development NGOs. Features terracotta and deep blue palette with warm orange accents. Highlights rural development, women empowerment, youth leadership, skill development, housing projects, and poverty alleviation programs.',
  themeId: 'community',
  mood: 'Warm, inclusive, hopeful, community-first, optimistic, human-centric',
  illustrationStyle:
    'Community photography, village life, construction projects, market scenes, diverse community portraits with warm tones',
  motionStyle:
    'Steady, grounded transitions with fade-in-up and slide animations. Smooth scroll storytelling with section reveals.',
  navigation: nav,
  footer: footer,
  pages: {
    home: {
      seo: {
        title: `Home â€” ${ORG}`,
        description: `${ORG} partners with communities to build lasting solutions for poverty alleviation, rural development, women empowerment, and youth leadership worldwide.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'split' as const,
            theme: 'dark',
            animation: 'hero',
            background: 'image',
            backgroundValue: '/images/community/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Communities Building Their Own Futures',
              subtitle: ORG,
              description:
                'We partner with rural and urban communities to create lasting solutions â€” from building schools and water systems to launching women-led businesses and training young leaders.',
              tag: 'Serving Since 2006',
            },
            backgroundImage: {
              src: '/images/community/hero.jpg',
              alt: 'Community gathering celebrating a new project',
            },
            stats: [
              { value: 300, suffix: '+', label: 'Communities Served' },
              { value: 500000, suffix: '+', label: 'People Empowered' },
              { value: 15000, suffix: '+', label: 'Active Volunteers' },
            ],
            trustBadges: [
              { src: '/images/trust/charity-navigator.svg', alt: 'Charity Navigator' },
              { src: '/images/trust/guidestar.svg', alt: 'GuideStar' },
              { src: '/images/trust/un-ecosoc.svg', alt: 'UN ECOSOC Partner' },
            ],
            showScrollIndicator: true,
            overlayOpacity: 0.5,
          },
        },
        {
          type: 'impact',
          config: {
            theme: 'muted',
            animation: 'fade-in-up',
            background: 'none',
            padding: 'large',
            visible: true,
            layout: 'counters' as const,
            heading: {
              title: 'Our Community Impact',
              tag: 'By the Numbers',
              alignment: 'center' as const,
            },
            stats: [
              { value: 300, suffix: '+', label: 'Communities Served Globally' },
              { value: 150000, suffix: '+', label: 'Families Supported' },
              { value: 75000, suffix: '+', label: 'Women Empowered' },
              { value: 50000, suffix: '+', label: 'Youth Trained' },
              { value: 2000, suffix: '+', label: 'Villages Reached' },
              { value: 15000, suffix: '+', label: 'Active Volunteers' },
            ],
            columns: 3,
            animationDuration: 2,
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
            heading: {
              title: 'Our Mission & Approach',
              tag: 'About Us',
              alignment: 'left' as const,
            },
            body: [
              `${ORG} was founded in 2006 by development economist Dr. Amina Osei, who believed that the most effective development is driven by communities themselves, not imposed from outside.`,
              'Our approach is simple: we listen first. We partner with communities to identify their own priorities, then provide the technical expertise, training, and resources they need to achieve their goals.',
              'From building rural roads and water systems to launching women-owned businesses and training the next generation of community leaders, every project is designed, led, and owned by the community it serves.',
            ],
            mission:
              'To empower communities to build their own pathways out of poverty through sustainable development, local leadership, and inclusive participation.',
            vision:
              'A world where every community has the resources, skills, and leadership to create its own prosperous and sustainable future.',
            values: [
              {
                title: 'Local Leadership',
                description:
                  'Communities own and lead every project. We provide support, not direction.',
              },
              {
                title: 'Sustainable Impact',
                description:
                  'We build lasting solutions that continue growing long after our involvement ends.',
              },
              {
                title: 'Radical Inclusion',
                description:
                  'Women, youth, and marginalized groups are not just included â€” they lead.',
              },
              {
                title: 'Collective Action',
                description:
                  'We bring together communities, governments, and partners for shared progress.',
              },
            ],
            image: {
              src: '/images/community/gallery2.jpg',
              alt: 'Community members planning a project together',
            },
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
            layout: 'cards' as const,
            heading: {
              title: 'Our Programs',
              subtitle: 'Integrated solutions for community-led development.',
              tag: 'What We Do',
              alignment: 'center' as const,
            },
            programs: [
              {
                id: 'women-empowerment',
                title: 'Women Empowerment',
                description:
                  'Vocational training, leadership development, savings groups, and advocacy programs that help women become economic and community leaders.',
                image: { src: '/images/community/gallery3.jpg', alt: 'Women entrepreneurs group' },
                category: 'Gender Equality',
                impactStat: '75K+ women empowered',
                cta: { label: 'Learn More', href: `${BASE}/programs` },
                featured: true,
              },
              {
                id: 'youth-leadership',
                title: 'Youth Leadership',
                description:
                  'Leadership camps, skills training, mentorship, and civic engagement programs that prepare young people to lead community development.',
                image: { src: '/images/community/gallery4.jpg', alt: 'Youth leadership workshop' },
                category: 'Youth Development',
                impactStat: '50K+ youth trained',
                cta: { label: 'Learn More', href: `${BASE}/programs` },
              },
              {
                id: 'skill-development',
                title: 'Skill Development',
                description:
                  'Vocational training in trades, digital literacy, entrepreneurship, and financial management to create sustainable livelihoods.',
                image: { src: '/images/community/gallery5.jpg', alt: 'Skills training workshop' },
                category: 'Livelihoods',
                impactStat: '100K+ people trained',
                cta: { label: 'Learn More', href: `${BASE}/programs` },
              },
              {
                id: 'housing',
                title: 'Housing & Infrastructure',
                description:
                  'Community-led construction of homes, schools, health clinics, water systems, and roads using local materials and labor.',
                image: { src: '/images/community/gallery6.jpg', alt: 'New community housing' },
                category: 'Infrastructure',
                impactStat: '2,000+ homes built',
                cta: { label: 'Learn More', href: `${BASE}/programs` },
              },
              {
                id: 'community-health',
                title: 'Community Health',
                description:
                  'Training community health workers, building clinics, and running health education programs focused on maternal and child health.',
                image: { src: '/images/community/gallery7.jpg', alt: 'Community health workers' },
                category: 'Health',
                impactStat: '200K+ people reached',
                cta: { label: 'Learn More', href: `${BASE}/programs` },
              },
              {
                id: 'financial-literacy',
                title: 'Financial Literacy & Microfinance',
                description:
                  'Community-managed savings groups, financial education, and small business loans that create economic independence.',
                image: { src: '/images/community/people.jpg', alt: 'Savings group meeting' },
                category: 'Economic Development',
                impactStat: '100K+ savings group members',
                cta: { label: 'Learn More', href: `${BASE}/programs` },
              },
            ],
            showCategoryBadges: true,
            showImpactStats: true,
          },
        },
        {
          type: 'campaignProgress',
          config: {
            theme: 'light',
            animation: 'fade-in-up',
            background: 'muted',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Featured Campaigns',
              tag: 'Support a Project',
              alignment: 'center' as const,
            },
            goal: 2000000,
            raised: 1250000,
            currency: 'USD',
            donorCount: 8432,
            title: 'Build a Home, Build a Future',
            description:
              'Help us build 100 homes for families in rural communities. Each home provides safe, dignified shelter for a family of five.',
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
            heading: {
              title: 'How You Can Help',
              tag: 'Take Action',
              alignment: 'center' as const,
            },
            steps: [
              {
                icon: 'Heart',
                title: 'Sponsor a Family',
                description:
                  'Your monthly gift provides a family with housing, education support, and livelihood training.',
              },
              {
                icon: 'Home',
                title: 'Build a Home',
                description:
                  'A one-time donation of $5,000 builds a complete home for a family in need.',
              },
              {
                icon: 'GraduationCap',
                title: 'Fund a Scholarship',
                description: '$500 provides a year of vocational training for a young person.',
              },
              {
                icon: 'Users',
                title: 'Support a Community Kitchen',
                description: '$50 feeds 100 people at a community nutrition program.',
              },
            ],
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
            heading: {
              title: 'Your Volunteer Journey',
              subtitle:
                'From discovering your passion to becoming a community leader â€” every step matters.',
              tag: 'Get Involved',
              alignment: 'center' as const,
            },
            steps: [
              {
                icon: 'Search',
                title: 'Discover',
                description:
                  'Explore our programs and find where your skills can make the greatest impact in a community.',
              },
              {
                icon: 'ClipboardCheck',
                title: 'Register',
                description:
                  'Sign up for a volunteer orientation and complete our simple registration process.',
              },
              {
                icon: 'BookOpen',
                title: 'Training',
                description:
                  'Receive hands-on training in community development, cultural competency, and project management.',
              },
              {
                icon: 'Heart',
                title: 'Serve',
                description:
                  'Work alongside community members on projects that match your expertise and passion.',
              },
              {
                icon: 'Award',
                title: 'Become a Community Leader',
                description:
                  'Take on leadership roles, train new volunteers, and help shape our programs.',
              },
            ],
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
            heading: {
              title: 'Stories of Transformation',
              subtitle: 'Real people, real communities, real change.',
              tag: 'Community Stories',
              alignment: 'center' as const,
            },
            stories: [
              {
                name: 'Mariam Diallo',
                role: 'Women Entrepreneur, Senegal',
                image: { src: '/images/community/volunteers.jpg', alt: 'Mariam Diallo' },
                quote:
                  'Before the savings group, I could not afford even a small bag of rice for my children. Now I own a thriving catering business and employ five other women from my village. My daughters see me and know they can be anything.',
                impactStat: '75K',
                impactLabel: 'Women Empowered',
              },
              {
                name: 'Carlos & Maria Hernandez',
                role: 'Homeowners, Guatemala',
                image: { src: '/images/community/people.jpg', alt: 'Hernandez family' },
                quote:
                  'We lived in a shack with a dirt floor for ten years. When it rained, everything flooded. Now we have a safe, dry home with running water. Our children have a place to study. We never thought this day would come.',
                impactStat: '2,000',
                impactLabel: 'Homes Built',
              },
              {
                name: 'James Ochieng',
                role: 'Youth Leader, Kenya',
                image: { src: '/images/community/gallery8.jpg', alt: 'James Ochieng' },
                quote:
                  'The youth leadership program gave me skills I never knew I had. I started a community garden that feeds 200 families. Now I mentor other young people. Leadership is not about title â€” it is about service.',
                impactStat: '50K',
                impactLabel: 'Youth Trained',
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
            heading: {
              title: 'Voices From Our Community',
              subtitle:
                'Hear from the families, volunteers, leaders, and partners who make our work possible.',
              tag: 'Testimonials',
              alignment: 'center' as const,
            },
            layout: 'carousel' as const,
            testimonials: [
              {
                quote:
                  "This organization did not come in and tell us what to do. They asked us what we needed. That respect changed everything. Now our village has a school, a well, and a women's cooperative that is thriving.",
                name: 'Elder Kwame Asante',
                role: 'Community Leader, Ghana',
                avatar: { src: '/images/community/people.jpg', alt: 'Elder Kwame Asante' },
              },
              {
                quote:
                  'I volunteered as an engineer for six months and learned more from the community than I could ever teach them. The resourcefulness, the spirit, the togetherness â€” it changed how I see the world.',
                name: 'Dr. Lisa Chen',
                role: 'Volunteer Engineer, Singapore',
                avatar: { src: '/images/community/volunteers.jpg', alt: 'Dr. Lisa Chen' },
              },
              {
                quote:
                  'Our company partnered with Community Builders for our CSR program. The transparency, the community ownership model, and the measurable impact exceeded every expectation.',
                name: 'Raj Mehta',
                role: 'CSR Director, TechCorp India',
                avatar: { src: '/images/community/hero.jpg', alt: 'Raj Mehta' },
              },
            ],
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
            heading: {
              title: 'Our Work in Pictures',
              subtitle: 'Moments of community strength, joy, and progress from around the world.',
              tag: 'Gallery',
              alignment: 'center' as const,
            },
            layout: 'grid' as const,
            images: [
              {
                src: '/images/community/gallery2.jpg',
                alt: 'Community well inauguration celebration',
              },
              { src: '/images/community/gallery3.jpg', alt: 'Women entrepreneurs at local market' },
              { src: '/images/community/gallery4.jpg', alt: 'New school building with students' },
              { src: '/images/community/hero.jpg', alt: 'Community health worker training' },
              { src: '/images/community/people.jpg', alt: 'Youth leadership camp group photo' },
              {
                src: '/images/community/volunteers.jpg',
                alt: 'Road construction project with community labor',
              },
            ],
          },
        },
        {
          type: 'communityMap',
          config: {
            theme: 'light',
            animation: 'fade-in-up',
            background: 'muted',
            padding: 'large',
            visible: true,
            heading: { title: 'Where We Work', tag: 'Global Reach', alignment: 'center' as const },
            locations: [
              {
                country: 'Senegal',
                region: 'West Africa',
                description:
                  'Women empowerment and microfinance programs reaching 15,000 women entrepreneurs.',
                projects: 120,
                peopleReached: 75000,
              },
              {
                country: 'Guatemala',
                region: 'Central America',
                description:
                  'Community housing and water infrastructure projects serving rural indigenous communities.',
                projects: 85,
                peopleReached: 50000,
              },
              {
                country: 'Kenya',
                region: 'East Africa',
                description:
                  'Youth leadership training and sustainable agriculture programs for smallholder farmers.',
                projects: 150,
                peopleReached: 100000,
              },
              {
                country: 'India',
                region: 'South Asia',
                description:
                  'Skill development centers and financial literacy programs in rural communities.',
                projects: 200,
                peopleReached: 150000,
              },
              {
                country: 'Philippines',
                region: 'Southeast Asia',
                description:
                  'Community health worker training and disaster-resilient housing projects.',
                projects: 65,
                peopleReached: 45000,
              },
              {
                country: 'Nepal',
                region: 'South Asia',
                description:
                  'School construction and education support programs in remote mountain communities.',
                projects: 90,
                peopleReached: 55000,
              },
            ],
          },
        },
        {
          type: 'partnerLogos',
          config: {
            layout: 'default' as const,
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Our Partners & Supporters',
              tag: 'Partners',
              alignment: 'center' as const,
            },
            variant: 'marquee' as const,
            partners: [
              { name: 'UNDP', logo: { src: '/images/partners/undp.svg', alt: 'UNDP' } },
              {
                name: 'World Bank',
                logo: { src: '/images/partners/world-bank.svg', alt: 'World Bank' },
              },
              { name: 'Oxfam', logo: { src: '/images/partners/default.svg', alt: 'Oxfam' } },
              {
                name: 'CARE International',
                logo: { src: '/images/partners/care.svg', alt: 'CARE' },
              },
              {
                name: 'Habitat for Humanity',
                logo: { src: '/images/partners/default.svg', alt: 'Habitat for Humanity' },
              },
              { name: 'USAID', logo: { src: '/images/partners/usaid.svg', alt: 'USAID' } },
            ],
          },
        },
        {
          type: 'resourceLibrary',
          config: {
            theme: 'light',
            animation: 'fade-in-up',
            background: 'muted',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Resource Center',
              subtitle:
                'Guides, case studies, research reports, and tools for community development practitioners.',
              tag: 'Resources',
              alignment: 'center' as const,
            },
            resources: [
              {
                id: 'cr1',
                title: "Community-Led Development: A Practitioner's Guide",
                description:
                  'Comprehensive guide to participatory development approaches with case studies from 15 countries.',
                type: 'download' as const,
                url: `${BASE}/resources`,
                category: 'Guides',
              },
              {
                id: 'cr2',
                title: 'Women Empowerment Program: Impact Assessment 2025',
                description:
                  'Detailed impact study of our women empowerment programs across West Africa with key findings.',
                type: 'article' as const,
                url: `${BASE}/resources`,
                category: 'Case Studies',
                image: '/images/community/gallery1.jpg',
              },
              {
                id: 'cr3',
                title: 'Building Community Resilience: Lessons from the Field',
                description:
                  'Video documentary showcasing community-led infrastructure projects and their long-term impact.',
                type: 'video' as const,
                url: `${BASE}/resources`,
                category: 'Documentary',
                image: '/images/community/gallery2.jpg',
              },
              {
                id: 'cr4',
                title: 'The Community Builder Podcast',
                description:
                  'Monthly conversations with community leaders, development experts, and volunteers transforming lives.',
                type: 'podcast' as const,
                url: `${BASE}/resources`,
                category: 'Podcast',
                image: '/images/community/gallery3.jpg',
              },
              {
                id: 'cr5',
                title: 'Annual Impact Report 2025',
                description:
                  'Comprehensive annual report with program outcomes, financial transparency, and community stories.',
                type: 'download' as const,
                url: `${BASE}/resources`,
                category: 'Reports',
              },
              {
                id: 'cr6',
                title: 'Participatory Planning Toolkit',
                description:
                  'Downloadable templates and facilitation guides for community-led project planning sessions.',
                type: 'download' as const,
                url: `${BASE}/resources`,
                category: 'Toolkits',
              },
            ],
          },
        },
        {
          type: 'faq',
          config: {
            layout: 'default' as const,
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Frequently Asked Questions',
              tag: 'FAQ',
              alignment: 'center' as const,
            },
            items: [
              {
                id: 'faq1',
                title: 'How does community-led development work?',
                content:
                  'Communities identify their own priorities and lead the projects. Our role is to provide training, technical expertise, and resources to support their vision.',
              },
              {
                id: 'faq2',
                title: 'How are projects selected?',
                content:
                  'Communities submit proposals through our participatory planning process. Projects are evaluated based on community need, local commitment, and potential for sustainable impact.',
              },
              {
                id: 'faq3',
                title: 'How can I volunteer?',
                content:
                  'Visit our volunteer page to explore opportunities. We welcome both local and international volunteers with diverse skills.',
              },
              {
                id: 'faq4',
                title: 'How are donations used?',
                content:
                  '85% of every dollar goes directly to community programs. 10% supports capacity building and training, and 5% covers administration.',
              },
            ],
            allowMultiple: false,
            variant: 'bordered' as const,
          },
        },
        {
          type: 'newsletter',
          config: {
            layout: 'default' as const,
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Stay Connected to Community Progress',
              tag: 'Newsletter',
              alignment: 'center' as const,
            },
            title: 'Join Our Community of Change-Makers',
            description:
              'Receive monthly stories of transformation, program updates, and opportunities to get involved.',
            placeholder: 'your@email.com',
            buttonLabel: 'Subscribe',
            successMessage: 'Welcome to the community! You will hear from us soon.',
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'dual' as const,
            heading: 'Be Part of the Story',
            description: 'Every community has the power to change. You can help unlock it.',
            primaryCta: {
              label: 'Sponsor a Family',
              href: `${BASE}/donate`,
              variant: 'primary' as const,
            },
            secondaryCta: {
              label: 'Join Our Community',
              href: `${BASE}/volunteer`,
              variant: 'secondary' as const,
            },
          },
        },
      ],
    },

    about: {
      seo: {
        title: `About â€” ${ORG}`,
        description: `Learn about ${ORG}'s mission, history, founder, and community-led approach to international development.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/community/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Our Story',
              subtitle: 'About Us',
              description:
                'From a single village partnership to a global movement of community-led development â€” discover what drives us.',
              tag: 'Since 2006',
            },
            backgroundImage: {
              src: '/images/community/hero.jpg',
              alt: 'Community members working together',
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
            variant: 'split',
            heading: { title: 'Our Mission & Vision', alignment: 'left' as const },
            body: [
              `${ORG} was founded in 2006 by Dr. Amina Osei, a development economist who saw firsthand that traditional aid models often failed because they did not put communities in the lead.`,
              'Starting with a single partnership in a rural village in Ghana, Dr. Osei worked alongside community members to build a well â€” a project they designed, funded partly through their own contributions, and maintain to this day.',
              'That simple principle â€” communities first, communities lead â€” became our foundation. Today we work across 15 countries with 300+ communities, always guided by the belief that lasting change comes from within.',
            ],
            mission:
              'To empower communities to build their own pathways out of poverty through sustainable development, local leadership, and inclusive participation.',
            vision:
              'A world where every community has the resources, skills, and leadership to create its own prosperous and sustainable future.',
            values: [
              {
                title: 'Local Leadership',
                description:
                  'Communities own and lead every project. We provide support, not direction.',
              },
              {
                title: 'Sustainable Impact',
                description:
                  'We build lasting solutions that continue growing long after our involvement ends.',
              },
              {
                title: 'Radical Inclusion',
                description:
                  'Women, youth, and marginalized groups are not just included â€” they lead.',
              },
              {
                title: 'Transparency',
                description:
                  'Every dollar, every decision, every outcome is shared openly with communities and supporters.',
              },
            ],
            image: {
              src: '/images/community/people.jpg',
              alt: 'Dr. Amina Osei with community members',
            },
          },
        },
        {
          type: 'about',
          config: {
            layout: 'default' as const,
            theme: 'light',
            animation: 'fade-in-up',
            background: 'muted',
            padding: 'large',
            visible: true,
            variant: 'timeline',
            heading: { title: 'Our Journey', tag: 'Timeline', alignment: 'center' as const },
            body: [
              'From a single well to a global network â€” the milestones that shaped our community-led approach.',
            ],
            mission: 'To empower communities to lead their own development.',
            timeline: [
              {
                year: '2006',
                title: 'First Partnership',
                description:
                  'Dr. Amina Osei partnered with a rural village in Ghana to build a community-managed well â€” the first project of what would become a global movement.',
              },
              {
                year: '2009',
                title: 'Women Empowerment Launch',
                description:
                  "Launched our first women's savings group program, reaching 5,000 women in West Africa within the first year.",
              },
              {
                year: '2013',
                title: 'Youth Leadership Initiative',
                description:
                  'Began youth leadership camps and mentorship programs, training 1,000 young leaders in the first cohort.',
              },
              {
                year: '2017',
                title: 'Housing Program Begins',
                description:
                  'Launched community-led housing construction, building 100 homes in partnership with families in Guatemala.',
              },
              {
                year: '2021',
                title: '500,000 People Reached',
                description:
                  'Reached the milestone of empowering 500,000 people across 12 countries through all programs.',
              },
              {
                year: '2026',
                title: '300 Communities Strong',
                description:
                  'Network grew to 300+ communities across 15 countries with 15,000 active volunteers worldwide.',
              },
            ],
            image: {
              src: '/images/community/volunteers.jpg',
              alt: 'Community development timeline',
            },
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
            layout: 'cards' as const,
            heading: {
              title: 'Our Global Reach',
              tag: 'Impact Snapshot',
              alignment: 'center' as const,
            },
            stats: [
              { value: 15, suffix: '', label: 'Countries' },
              { value: 300, suffix: '+', label: 'Partner Communities' },
              { value: 15000, suffix: '+', label: 'Volunteers Deployed' },
              { value: 500000, suffix: '+', label: 'Lives Impacted' },
            ],
            columns: 4,
            showIconBackground: true,
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered' as const,
            heading: 'Support Community-Led Development',
            description: 'Your partnership helps communities build their own futures.',
            primaryCta: {
              label: 'Donate Now',
              href: `${BASE}/donate`,
              variant: 'primary' as const,
            },
            secondaryCta: {
              label: 'Become a Partner',
              href: `${BASE}/contact`,
              variant: 'outline' as const,
            },
          },
        },
      ],
    },

    programs: {
      seo: {
        title: `Programs â€” ${ORG}`,
        description: `Explore ${ORG}'s community-led programs: women empowerment, youth leadership, skill development, housing, community health, and financial literacy.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/community/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Our Programs',
              subtitle: 'Community-Led, Community-Loved',
              description:
                'Every program is designed with and by the community. We provide the tools â€” they provide the vision, labor, and leadership.',
              tag: 'How We Work',
            },
            backgroundImage: {
              src: '/images/community/hero.jpg',
              alt: 'Community program activities',
            },
            overlayOpacity: 0.5,
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
            layout: 'bento' as const,
            heading: {
              title: 'Explore Our Programs',
              tag: 'What We Offer',
              alignment: 'center' as const,
            },
            programs: [
              {
                id: 'women-empowerment',
                title: 'Women Empowerment',
                description:
                  "Savings groups, vocational training, leadership development, and advocacy for women's economic independence.",
                image: { src: '/images/community/gallery1.jpg', alt: 'Women entrepreneurs' },
                category: 'Gender Equality',
                impactStat: '75K+ empowered',
                cta: { label: 'Learn More', href: `${BASE}/programs` },
                featured: true,
              },
              {
                id: 'youth-leadership',
                title: 'Youth Leadership',
                description:
                  'Leadership camps, civic engagement, and mentorship programs building the next generation of community leaders.',
                image: { src: '/images/community/people.jpg', alt: 'Youth program' },
                category: 'Youth',
                impactStat: '50K+ trained',
                cta: { label: 'Learn More', href: `${BASE}/programs` },
              },
              {
                id: 'skill-development',
                title: 'Skill Development',
                description:
                  'Vocational training, digital literacy, and entrepreneurship programs creating sustainable livelihoods.',
                image: { src: '/images/community/volunteers.jpg', alt: 'Skills training' },
                category: 'Livelihoods',
                impactStat: '100K+ trained',
                cta: { label: 'Learn More', href: `${BASE}/programs` },
              },
              {
                id: 'housing',
                title: 'Housing & Infrastructure',
                description:
                  'Community-led construction of homes, schools, clinics, and water systems using local materials.',
                image: { src: '/images/community/people.jpg', alt: 'Housing project' },
                category: 'Infrastructure',
                impactStat: '2,000+ homes',
                cta: { label: 'Learn More', href: `${BASE}/programs` },
              },
              {
                id: 'community-health',
                title: 'Community Health',
                description:
                  'Training health workers, building clinics, and running maternal and child health programs.',
                image: { src: '/images/community/volunteers.jpg', alt: 'Health program' },
                category: 'Health',
                impactStat: '200K+ reached',
                cta: { label: 'Learn More', href: `${BASE}/programs` },
              },
              {
                id: 'financial-literacy',
                title: 'Financial Literacy',
                description:
                  'Savings groups, financial education, and micro-loans creating economic independence.',
                image: { src: '/images/community/gallery2.jpg', alt: 'Financial literacy' },
                category: 'Economic',
                impactStat: '100K+ members',
                cta: { label: 'Learn More', href: `${BASE}/programs` },
              },
            ],
            showCategoryBadges: true,
          },
        },
        {
          type: 'campaignProgress',
          config: {
            theme: 'light',
            animation: 'fade-in-up',
            background: 'muted',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Campaign: Build 100 Homes',
              tag: 'Current Campaign',
              alignment: 'center' as const,
            },
            goal: 2000000,
            raised: 1250000,
            currency: 'USD',
            donorCount: 8432,
            title: 'Build a Home, Build a Future',
            description:
              'Every $5,000 builds a complete home for a family. Help us reach 100 families this year.',
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
            heading: {
              title: 'How to Get Involved',
              tag: 'Your Role',
              alignment: 'center' as const,
            },
            steps: [
              {
                icon: 'Search',
                title: 'Choose Your Program',
                description:
                  'Find the program that matches your skills and passion â€” from construction to teaching to health.',
              },
              {
                icon: 'ClipboardCheck',
                title: 'Apply & Train',
                description:
                  'Complete our online application and attend a comprehensive training program.',
              },
              {
                icon: 'Plane',
                title: 'Deploy to Community',
                description:
                  'Work alongside local community members on a project that creates lasting impact.',
              },
              {
                icon: 'Users',
                title: 'Become an Ambassador',
                description:
                  'Share your experience, inspire others, and help grow the community development movement.',
              },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'donate' as const,
            heading: 'Support Community-Led Programs',
            description:
              'Your donation directly funds community-designed projects that create lasting change.',
            primaryCta: {
              label: 'Donate to Programs',
              href: `${BASE}/donate`,
              variant: 'primary' as const,
            },
            donateAmounts: [25, 50, 100, 250, 500, 5000],
          },
        },
      ],
    },

    'program-detail': {
      seo: {
        title: `Women Empowerment Program â€” ${ORG}`,
        description: `Learn about ${ORG}'s women empowerment program: savings groups, vocational training, and leadership development.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'split' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/community/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Women Empowerment Program',
              subtitle: 'Program Details',
              description:
                'Helping women become economic and community leaders through savings groups, vocational training, and leadership development.',
              tag: 'Gender Equality',
            },
            backgroundImage: {
              src: '/images/community/hero.jpg',
              alt: 'Women entrepreneurs group',
            },
            stats: [
              { value: 75000, suffix: '+', label: 'Women Empowered' },
              { value: 5000, suffix: '+', label: 'Savings Groups Formed' },
              { value: 97, suffix: '%', label: 'Loan Repayment Rate' },
            ],
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
              'Our Women Empowerment Program addresses the root causes of gender inequality by combining economic opportunity with leadership development.',
              "The program centers on community-managed savings groups where women pool their savings, access small loans, and support each other's businesses. Each group of 15-25 women receives training in financial literacy, business management, and group governance.",
              "Beyond economic empowerment, the program includes leadership workshops, advocacy training, and community dialogue sessions that address gender norms and women's participation in local decision-making.",
              'Since 2009, we have helped form 5,000 savings groups with 75,000 members across 10 countries. Members have accessed over $8 million in loans, with a 97% repayment rate.',
            ],
            image: { src: '/images/community/people.jpg', alt: 'Women savings group meeting' },
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
            heading: { title: 'Program Impact', alignment: 'center' as const },
            stats: [
              { value: 75000, suffix: '+', label: 'Women Empowered' },
              { value: 97, suffix: '%', label: 'Loan Repayment' },
              { value: 8000000, suffix: '', prefix: '$', label: 'Total Loans Accessed' },
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
            heading: { title: 'Program Success Stories', alignment: 'center' as const },
            layout: 'carousel' as const,
            testimonials: [
              {
                quote:
                  'Before the savings group, I could not even dream of owning a business. Today I employ four women and my children are in school. This program gave me more than money â€” it gave me a voice.',
                name: 'Aisha Mohammed',
                role: 'Program Participant, Ghana',
              },
              {
                quote:
                  'The leadership training taught me that my voice matters. I am now on my village development committee. Other women see me and know they can lead too.',
                name: 'Sunita Devi',
                role: 'Community Leader, India',
              },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'donate' as const,
            heading: 'Empower a Woman, Transform a Community',
            description:
              '$50 seeds a business. $500 launches a savings group. $5,000 trains 100 women leaders.',
            primaryCta: {
              label: 'Support Women',
              href: `${BASE}/donate`,
              variant: 'primary' as const,
            },
            donateAmounts: [25, 50, 100, 250, 500, 5000],
          },
        },
      ],
    },

    volunteer: {
      seo: {
        title: `Volunteer â€” ${ORG}`,
        description: `Join ${ORG}'s global volunteer community. Serve alongside communities to build lasting solutions.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'split' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/community/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Volunteer With Communities',
              subtitle: 'Your Skills, Their Dreams',
              description:
                'Bring your expertise, gain new perspectives, and work alongside communities building their own futures.',
              tag: 'Make a Difference',
            },
            backgroundImage: {
              src: '/images/community/hero.jpg',
              alt: 'Volunteers working with community',
            },
            stats: [
              { value: 15000, suffix: '+', label: 'Volunteers Deployed' },
              { value: 300, suffix: '+', label: 'Community Partners' },
              { value: 95, suffix: '%', label: 'Would Recommend' },
            ],
            overlayOpacity: 0.5,
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
            heading: {
              title: 'Your Volunteer Journey',
              tag: 'How It Works',
              alignment: 'center' as const,
            },
            steps: [
              {
                icon: 'Search',
                title: 'Explore & Discover',
                description:
                  'Browse volunteer opportunities that match your skills, interests, and availability.',
              },
              {
                icon: 'ClipboardCheck',
                title: 'Apply & Prepare',
                description:
                  'Complete your application, attend orientation, and prepare for your community placement.',
              },
              {
                icon: 'BookOpen',
                title: 'Community Training',
                description:
                  'Receive in-country training on local culture, language basics, and project-specific skills.',
              },
              {
                icon: 'Heart',
                title: 'Serve Alongside Community',
                description: 'Work hand-in-hand with community members on locally-led projects.',
              },
              {
                icon: 'Award',
                title: 'Become a Community Leader',
                description:
                  'Return as an ambassador, mentor new volunteers, and deepen your impact.',
              },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'volunteer' as const,
            heading: 'Find Your Volunteer Role',
            description:
              'Engineers, teachers, health workers, community organizers, and more â€” we need your skills.',
            primaryCta: {
              label: 'Apply Now',
              href: `${BASE}/volunteer`,
              variant: 'primary' as const,
            },
            benefits: [
              { text: 'Work alongside communities in 15 countries' },
              { text: 'Receive comprehensive training and support' },
              { text: 'Flexible durations from 2 weeks to 12 months' },
              { text: 'Accommodation, meals, and local transport provided' },
              { text: 'Become part of a global community of changemakers' },
            ],
          },
        },
        {
          type: 'communityMap',
          config: {
            theme: 'light',
            animation: 'fade-in-up',
            background: 'muted',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Where You Can Volunteer',
              tag: 'Locations',
              alignment: 'center' as const,
            },
            locations: [
              {
                country: 'Ghana',
                region: 'West Africa',
                description: 'Women empowerment and community infrastructure projects.',
                projects: 80,
                peopleReached: 60000,
              },
              {
                country: 'Kenya',
                region: 'East Africa',
                description: 'Youth leadership and sustainable agriculture programs.',
                projects: 100,
                peopleReached: 80000,
              },
              {
                country: 'India',
                region: 'South Asia',
                description: 'Skill development and financial literacy programs.',
                projects: 150,
                peopleReached: 120000,
              },
              {
                country: 'Guatemala',
                region: 'Central America',
                description: 'Housing construction and water infrastructure projects.',
                projects: 60,
                peopleReached: 40000,
              },
              {
                country: 'Nepal',
                region: 'South Asia',
                description: 'School building and education support programs.',
                projects: 50,
                peopleReached: 35000,
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
            heading: {
              title: 'Hear From Our Volunteers',
              tag: 'Volunteer Stories',
              alignment: 'center' as const,
            },
            layout: 'carousel' as const,
            testimonials: [
              {
                quote:
                  'I spent six months in Ghana training women entrepreneurs. I went to teach and ended up learning more than I could ever give. The resilience, creativity, and community spirit were humbling.',
                name: 'Sarah Mitchell',
                role: 'Business Trainer, Australia',
                avatar: { src: '/images/community/hero.jpg', alt: 'Sarah Mitchell' },
              },
              {
                quote:
                  'As a civil engineer, I helped a community design their own water system. Seeing them maintain it independently two years later is my proudest professional achievement.',
                name: 'Carlos Ruiz',
                role: 'Engineer, Spain',
                avatar: { src: '/images/community/people.jpg', alt: 'Carlos Ruiz' },
              },
              {
                quote:
                  'I volunteered as a youth mentor for a summer. The teenagers I worked with are now leading community projects themselves. That ripple effect is why I keep coming back.',
                name: 'Priya Kapoor',
                role: 'Youth Mentor, Canada',
                avatar: { src: '/images/community/volunteers.jpg', alt: 'Priya Kapoor' },
              },
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
            heading: { title: 'Volunteer FAQs', alignment: 'center' as const },
            items: [
              {
                id: 'vfaq1',
                title: 'What skills are most needed?',
                content:
                  'Engineers, agronomists, health professionals, teachers, community organizers, and project managers are in high demand.',
              },
              {
                id: 'vfaq2',
                title: 'How long are volunteer placements?',
                content:
                  'Placements range from 2 weeks to 12 months. We work with you to find the right duration for your availability.',
              },
              {
                id: 'vfaq3',
                title: 'Is training provided?',
                content:
                  'Yes, we provide comprehensive pre-departure training and in-country orientation including language basics.',
              },
              {
                id: 'vfaq4',
                title: 'Can families or couples volunteer together?',
                content:
                  'Absolutely. We have placement options for couples and families with children.',
              },
            ],
            allowMultiple: false,
            variant: 'bordered' as const,
          },
        },
      ],
    },

    donate: {
      seo: {
        title: `Donate â€” ${ORG}`,
        description: `Support ${ORG}'s community-led development programs. Your donation builds homes, empowers women, trains youth, and transforms communities.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/community/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Invest in Community Power',
              subtitle: 'Your Gift Builds Futures',
              description:
                "Every donation strengthens a community's ability to build its own path out of poverty.",
              tag: 'Make a Donation',
            },
            backgroundImage: { src: '/images/community/hero.jpg', alt: 'Community project' },
            overlayOpacity: 0.5,
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'donate' as const,
            heading: 'Choose Your Impact',
            description:
              '85% of every dollar goes directly to community-led programs. You will receive regular updates on your impact.',
            primaryCta: {
              label: 'Donate Now',
              href: `${BASE}/donate`,
              variant: 'primary' as const,
            },
            donateAmounts: [25, 50, 100, 250, 500, 5000],
            benefits: [
              { text: '85% of your gift goes directly to communities' },
              { text: 'Quarterly impact reports with stories and photos' },
              { text: 'Tax-deductible in the US and UK' },
              { text: 'Join a community of 12,000+ monthly supporters' },
            ],
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
            heading: {
              title: 'Where Your Money Goes',
              tag: 'Transparency',
              alignment: 'center' as const,
            },
            steps: [
              {
                icon: 'Heart',
                title: 'You Give',
                description:
                  'Your generous donation joins the resources of thousands of supporters worldwide.',
              },
              {
                icon: 'Users',
                title: 'Community Leads',
                description:
                  'Local communities design and implement projects, ensuring every dollar is spent wisely.',
              },
              {
                icon: 'Building2',
                title: 'Solutions Built',
                description:
                  'Homes, schools, businesses, and water systems are built by and for the community.',
              },
              {
                icon: 'TrendingUp',
                title: 'Impact Multiplied',
                description:
                  'One investment leads to generations of change as communities continue growing.',
              },
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
            heading: {
              title: 'Your Impact at Every Level',
              tag: 'See Your Gift In Action',
              alignment: 'center' as const,
            },
            stats: [
              {
                value: 25,
                suffix: '',
                prefix: '$',
                label: 'Provides 50 nutritious meals at a community kitchen',
              },
              { value: 50, suffix: '', prefix: '$', label: 'Seeds a woman-owned small business' },
              {
                value: 100,
                suffix: '',
                prefix: '$',
                label: 'Funds a vocational training scholarship',
              },
              {
                value: 500,
                suffix: '',
                prefix: '$',
                label: 'Supports a year of youth leadership training',
              },
            ],
            columns: 4,
            showIconBackground: true,
          },
        },
        {
          type: 'campaignProgress',
          config: {
            theme: 'light',
            animation: 'fade',
            background: 'muted',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Current Campaign: 100 Homes for 100 Families',
              tag: 'Our Goal',
              alignment: 'center' as const,
            },
            goal: 2000000,
            raised: 1250000,
            currency: 'USD',
            donorCount: 8432,
            title: 'Build a Home, Build a Future',
            description:
              'Help us reach our goal of building 100 safe homes for families in Guatemala and Nepal.',
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
            heading: {
              title: 'Why Our Supporters Give',
              tag: 'Giving Stories',
              alignment: 'center' as const,
            },
            layout: 'carousel' as const,
            testimonials: [
              {
                quote:
                  "I wanted my giving to do more than just provide aid. Community Builders puts people in the driver's seat. That is the kind of change I believe in.",
                name: 'David & Helen Park',
                role: 'Monthly Donors, USA',
              },
              {
                quote:
                  'We sponsored a home last year and received photos of the family moving in. The father cried. My children saw that and understood what generosity really means.',
                name: 'Amara Singh',
                role: 'Donor, UK',
              },
              {
                quote:
                  'Our company matched employee donations and sent a team to volunteer. The engagement and pride this created among our staff was incredible.',
                name: 'Michael Torres',
                role: 'CSR Manager, TechGlobal Inc.',
              },
            ],
          },
        },
      ],
    },

    gallery: {
      seo: {
        title: `Gallery â€” ${ORG}`,
        description: `Photos of ${ORG}'s community-led development projects, village life, volunteers, and celebrations worldwide.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/community/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Gallery',
              subtitle: 'Communities in Action',
              description:
                'See the power of community-led development through images of villages, construction, celebrations, and the people at the heart of it all.',
              tag: 'Our Work in Pictures',
            },
            backgroundImage: { src: '/images/community/hero.jpg', alt: 'Community celebration' },
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
            heading: { title: 'Villages & Communities', alignment: 'center' as const },
            images: [
              { src: '/images/community/gallery3.jpg', alt: 'Community well inauguration' },
              { src: '/images/community/hero.jpg', alt: 'Women entrepreneurs at market' },
              { src: '/images/community/people.jpg', alt: 'New school building' },
              { src: '/images/community/volunteers.jpg', alt: 'Community health training' },
              { src: '/images/community/gallery2.jpg', alt: 'Youth leadership camp' },
              { src: '/images/community/gallery3.jpg', alt: 'Road construction project' },
              { src: '/images/community/gallery4.jpg', alt: 'Housing dedication ceremony' },
              {
                src: '/images/community/gallery5.jpg',
                alt: 'Volunteer group with community members',
              },
              { src: '/images/community/gallery6.jpg', alt: 'Community festival celebration' },
            ],
          },
        },
        {
          type: 'gallery',
          config: {
            theme: 'light',
            animation: 'fade',
            background: 'muted',
            padding: 'large',
            visible: true,
            layout: 'carousel' as const,
            heading: { title: 'Celebrations & Milestones', alignment: 'center' as const },
            images: [
              { src: '/images/community/gallery7.jpg', alt: 'Village celebration' },
              { src: '/images/community/gallery8.jpg', alt: 'Volunteer appreciation event' },
              { src: '/images/community/hero.jpg', alt: 'Project completion ceremony' },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered' as const,
            heading: 'Be Part of Community Progress',
            description:
              'Your support helps communities build, grow, and celebrate their achievements.',
            primaryCta: {
              label: 'Donate Now',
              href: `${BASE}/donate`,
              variant: 'primary' as const,
            },
            secondaryCta: {
              label: 'Volunteer With Us',
              href: `${BASE}/volunteer`,
              variant: 'outline' as const,
            },
          },
        },
      ],
    },

    stories: {
      seo: {
        title: `Stories â€” ${ORG}`,
        description: `Inspiring stories of transformation from ${ORG}'s community-led development programs worldwide.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/community/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Stories of Transformation',
              subtitle: 'Real People, Real Change',
              description:
                'From a new home to a thriving business to a community coming together â€” these are the stories that inspire everything we do.',
              tag: 'Impact Stories',
            },
            backgroundImage: { src: '/images/community/hero.jpg', alt: 'Community storytelling' },
            overlayOpacity: 0.5,
          },
        },
        {
          type: 'successStories',
          config: {
            theme: 'light',
            animation: 'fade-in-up',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Transformation Stories',
              tag: 'Our Community',
              alignment: 'center' as const,
            },
            stories: [
              {
                name: 'Fatoumata Bah',
                role: 'Small Business Owner, Senegal',
                image: { src: '/images/community/people.jpg', alt: 'Fatoumata Bah' },
                quote:
                  'With a small loan from my savings group, I bought a sewing machine. Now I tailor clothes for my whole village and I am training three other women. My husband respects me differently now. My daughters see a different future.',
                impactStat: '75K',
                impactLabel: 'Women Empowered',
              },
              {
                name: 'The Mendoza Family',
                role: 'Homeowners, Guatemala',
                image: { src: '/images/community/people.jpg', alt: 'Mendoza family' },
                quote:
                  'We lived in a one-room shack for eight years. The roof leaked, the floor was mud, and the children got sick every rainy season. Now we have a home with two bedrooms, a kitchen, and clean water. Our youngest has not been sick in a year.',
                impactStat: '2,000',
                impactLabel: 'Homes Built',
              },
              {
                name: 'Rajesh Kumar',
                role: 'Youth Mentor, India',
                image: { src: '/images/community/volunteers.jpg', alt: 'Rajesh Kumar' },
                quote:
                  'I was a shy teenager who never thought I could lead. The youth camp changed that. Today I mentor 30 young people in my village. We started a recycling program and a community garden. Leadership is not about being the best â€” it is about bringing out the best in others.',
                impactStat: '50K',
                impactLabel: 'Youth Trained',
              },
              {
                name: 'Grace Wanjiku',
                role: 'Community Health Worker, Kenya',
                image: { src: '/images/community/volunteers.jpg', alt: 'Grace Wanjiku' },
                quote:
                  'After my training, I have helped 200 mothers access prenatal care. Two babies who would have been born at home are now born safely at the clinic. That is 200 families whose stories changed because someone cared enough to learn.',
                impactStat: '200K',
                impactLabel: 'People Reached',
              },
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
            heading: { title: 'More Voices From the Community', alignment: 'center' as const },
            layout: 'carousel' as const,
            testimonials: [
              {
                quote:
                  'Before the housing program, my children were ashamed to bring friends home. Now they invite the whole class. A home is not just walls and a roof â€” it is dignity.',
                name: 'Maria Lopez',
                role: 'Homeowner, Guatemala',
              },
              {
                quote:
                  'The savings group taught me that I do not need a bank to save money. I need a community. We trust each other, and that trust is our best asset.',
                name: 'Aminata Sow',
                role: 'Savings Group Member, Senegal',
              },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered' as const,
            heading: 'You Could Be Part of the Next Story',
            description:
              'Every donation, every volunteer hour, every shared post helps write the next chapter of community transformation.',
            primaryCta: {
              label: 'Support a Story',
              href: `${BASE}/donate`,
              variant: 'primary' as const,
            },
            secondaryCta: {
              label: 'Share Your Story',
              href: `${BASE}/contact`,
              variant: 'outline' as const,
            },
          },
        },
      ],
    },

    resources: {
      seo: {
        title: `Resources â€” ${ORG}`,
        description: `Guides, case studies, reports, and tools from ${ORG} for community development practitioners and supporters.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/community/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Resource Center',
              subtitle: 'Learn, Share, Grow',
              description:
                'Guides, research reports, case studies, and practical tools for community development practitioners and supporters.',
              tag: 'Knowledge Hub',
            },
            backgroundImage: { src: '/images/community/hero.jpg', alt: 'Resource center' },
            overlayOpacity: 0.5,
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
            heading: {
              title: 'Browse All Resources',
              tag: 'Explore',
              alignment: 'center' as const,
            },
            resources: [
              {
                id: 'cres1',
                title: "Community-Led Development: A Practitioner's Guide",
                description:
                  'Comprehensive guide covering participatory planning, community mobilization, monitoring, and evaluation.',
                type: 'download' as const,
                url: '#',
                category: 'Guides',
              },
              {
                id: 'cres2',
                title: 'Women Empowerment Program Impact Assessment',
                description:
                  'Detailed evaluation of our women empowerment program across West Africa with quantitative and qualitative findings.',
                type: 'article' as const,
                url: '#',
                category: 'Case Studies',
                image: '/images/community/gallery4.jpg',
              },
              {
                id: 'cres3',
                title: 'Building Resilience: Community Infrastructure Documentary',
                description:
                  'Short documentary showcasing how communities lead their own infrastructure projects from design to maintenance.',
                type: 'video' as const,
                url: '#',
                category: 'Documentary',
                image: '/images/community/gallery5.jpg',
              },
              {
                id: 'cres4',
                title: 'The Community Builder Podcast',
                description:
                  'Monthly conversations with community leaders, development practitioners, and volunteers making a difference.',
                type: 'podcast' as const,
                url: '#',
                category: 'Podcast',
                image: '/images/community/gallery6.jpg',
              },
              {
                id: 'cres5',
                title: 'Annual Impact Report 2025',
                description:
                  'Comprehensive annual report with financial statements, program outcomes, impact data, and community stories.',
                type: 'download' as const,
                url: '#',
                category: 'Reports',
              },
              {
                id: 'cres6',
                title: 'Participatory Rural Appraisal Toolkit',
                description:
                  'Field-tested tools and templates for conducting participatory community needs assessments and planning.',
                type: 'download' as const,
                url: '#',
                category: 'Toolkits',
              },
              {
                id: 'cres7',
                title: 'Youth Leadership Curriculum Guide',
                description:
                  'Complete curriculum for running youth leadership camps and mentorship programs in community settings.',
                type: 'download' as const,
                url: '#',
                category: 'Guides',
              },
              {
                id: 'cres8',
                title: 'Housing Program Case Study: Guatemala',
                description:
                  'In-depth case study of our community-led housing program in Guatemala with before-and-after impact data.',
                type: 'article' as const,
                url: '#',
                category: 'Case Studies',
                image: '/images/community/gallery7.jpg',
              },
              {
                id: 'cres9',
                title: 'Climate-Smart Agriculture Training Module',
                description:
                  'Training materials for smallholder farmers on drought-resistant techniques, soil conservation, and market access.',
                type: 'download' as const,
                url: '#',
                category: 'Toolkits',
              },
            ],
          },
        },
        {
          type: 'newsletter',
          config: {
            layout: 'default' as const,
            theme: 'light',
            animation: 'fade',
            background: 'muted',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Get Resources & Updates',
              tag: 'Subscribe',
              alignment: 'center' as const,
            },
            title: 'Knowledge Delivered to Your Inbox',
            description: 'Receive new guides, case studies, and community stories every month.',
            placeholder: 'your@email.com',
            buttonLabel: 'Subscribe Free',
            successMessage: 'Welcome to our community of learners!',
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered' as const,
            heading: 'Have a Resource to Share?',
            description:
              'We welcome contributions from practitioners, researchers, and community leaders. Share your knowledge.',
            primaryCta: {
              label: 'Submit a Resource',
              href: `${BASE}/contact`,
              variant: 'primary' as const,
            },
          },
        },
      ],
    },

    contact: {
      seo: {
        title: `Contact â€” ${ORG}`,
        description: `Get in touch with ${ORG}. Reach out for partnership inquiries, media requests, volunteer questions, or general inquiries.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/community/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: "Let's Connect",
              subtitle: 'Partnership Starts With a Conversation',
              description:
                'Whether you want to partner, volunteer, donate, or just learn more â€” we are here and we would love to hear from you.',
              tag: 'Get in Touch',
            },
            backgroundImage: { src: '/images/community/hero.jpg', alt: 'Community connection' },
            overlayOpacity: 0.5,
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'contact' as const,
            heading: 'Our Contact Information',
            description: 'Reach out to our team. We respond to all inquiries within 48 hours.',
            email: 'hello@communitybuilders.org',
            phone: '+1 (555) 567-8901',
            address: '600 Development Drive, Suite 300, Boston, MA 02110',
            primaryCta: { label: 'Send a Message', href: '#', variant: 'primary' as const },
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
            heading: { title: 'Common Questions', alignment: 'center' as const },
            items: [
              {
                id: 'cq1',
                title: 'How can my organization partner with you?',
                content:
                  'Contact our partnerships team at partners@communitybuilders.org or through the form above. We would love to explore collaboration.',
              },
              {
                id: 'cq2',
                title: 'Can I visit a project site?',
                content:
                  'Yes, we offer community site visits for donors, volunteers, and partners. Contact us to arrange a visit.',
              },
              {
                id: 'cq3',
                title: 'How are projects selected?',
                content:
                  'Communities submit proposals through our participatory planning process. Each proposal is evaluated for community need, local commitment, and sustainability.',
              },
              {
                id: 'cq4',
                title: 'Do you have job openings?',
                content:
                  'Visit our careers page or contact our HR team at careers@communitybuilders.org.',
              },
            ],
            allowMultiple: false,
            variant: 'bordered' as const,
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'dual' as const,
            heading: "Let's Work Together",
            description:
              'Partnerships, media inquiries, or just to say hello â€” we look forward to connecting.',
            primaryCta: { label: 'Partner With Us', href: '#', variant: 'primary' as const },
            secondaryCta: { label: 'Media Inquiries', href: '#', variant: 'secondary' as const },
          },
        },
      ],
    },

    faq: {
      seo: {
        title: `FAQ â€” ${ORG}`,
        description: `Frequently asked questions about ${ORG}'s community-led development approach, programs, volunteering, and donations.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/community/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Frequently Asked Questions',
              subtitle: 'Everything You Need to Know',
              description:
                'Find answers about our community-led approach, how to get involved, and how your support makes an impact.',
              tag: 'FAQ',
            },
            backgroundImage: { src: '/images/community/hero.jpg', alt: 'FAQ' },
            overlayOpacity: 0.5,
          },
        },
        {
          type: 'faq',
          config: {
            layout: 'default' as const,
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: { title: 'About Our Approach', alignment: 'left' as const },
            items: [
              {
                id: 'g1',
                title: 'What is community-led development?',
                content:
                  'Community-led development means communities identify their own priorities and lead the projects. Our role is to provide training, resources, and technical support â€” not to direct or control.',
              },
              {
                id: 'g2',
                title: 'How is this different from traditional aid?',
                content:
                  'Traditional aid often imposes solutions from outside. We flip that model: communities decide what they need, design the project, contribute their own resources, and maintain the results.',
              },
              {
                id: 'g3',
                title: 'How do you ensure sustainability?',
                content:
                  'Every project includes a sustainability plan developed by the community. We train local leaders, establish maintenance committees, and stay engaged for follow-up support.',
              },
              {
                id: 'g4',
                title: 'How are you governed?',
                content:
                  'We are governed by an international board of directors that includes community representatives from each region where we work.',
              },
            ],
            allowMultiple: false,
            variant: 'bordered' as const,
          },
        },
        {
          type: 'faq',
          config: {
            layout: 'default' as const,
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: { title: 'Donations & Giving', alignment: 'left' as const },
            items: [
              {
                id: 'd1',
                title: 'How are donations used?',
                content:
                  '85% goes directly to program activities, 10% supports capacity building and training, and 5% covers administrative costs.',
              },
              {
                id: 'd2',
                title: 'Is my donation tax-deductible?',
                content:
                  'Yes, we are a registered 501(c)(3) nonprofit. All donations are tax-deductible to the extent allowed by law.',
              },
              {
                id: 'd3',
                title: 'Can I sponsor a specific project or family?',
                content:
                  'Yes, you can designate your gift to our housing program, women empowerment, youth leadership, or general community development fund.',
              },
              {
                id: 'd4',
                title: 'Do you accept cryptocurrency or stock donations?',
                content:
                  'Yes, contact our development team for details on donating stock, cryptocurrency, or making a planned gift.',
              },
            ],
            allowMultiple: false,
            variant: 'bordered' as const,
          },
        },
        {
          type: 'faq',
          config: {
            layout: 'default' as const,
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: { title: 'Volunteering & Travel', alignment: 'left' as const },
            items: [
              {
                id: 'v1',
                title: 'Do I need special skills to volunteer?',
                content:
                  'While some roles require specific expertise (engineering, health, teaching), we also need general volunteers for community outreach, event support, and administrative tasks.',
              },
              {
                id: 'v2',
                title: 'Is it safe to travel to project sites?',
                content:
                  'We prioritize volunteer safety. All locations are carefully vetted, and we provide comprehensive safety briefings, local support, and emergency protocols.',
              },
              {
                id: 'v3',
                title: 'Can I volunteer remotely?',
                content:
                  'Yes, we have remote volunteer opportunities in research, communications, grant writing, and program support.',
              },
              {
                id: 'v4',
                title: 'What is the cost to volunteer?',
                content:
                  'Accommodation, meals, and in-country transport are provided. Volunteers cover their own travel costs, which may be tax-deductible.',
              },
            ],
            allowMultiple: false,
            variant: 'bordered' as const,
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered' as const,
            heading: 'Still Have Questions?',
            description:
              'We are here to help. Reach out anytime and we will get back to you within 48 hours.',
            primaryCta: {
              label: 'Contact Us',
              href: `${BASE}/contact`,
              variant: 'primary' as const,
            },
          },
        },
      ],
    },

    'not-found': {
      seo: {
        title: `Page Not Found â€” ${ORG}`,
        description: 'The page you are looking for could not be found.',
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/community/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Page Not Found',
              subtitle: 'Sometimes we take a wrong turn',
              description:
                'The page you are looking for might have moved. But you are always welcome in our community. Let us help you find your way.',
              tag: '404',
            },
            backgroundImage: { src: '/images/community/hero.jpg', alt: 'Community' },
            overlayOpacity: 0.5,
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered' as const,
            heading: 'Find Your Way Home',
            description:
              'Explore our programs, read community stories, or reach out to us directly.',
            primaryCta: { label: 'Go Home', href: BASE, variant: 'primary' as const },
            secondaryCta: {
              label: 'Contact Us',
              href: `${BASE}/contact`,
              variant: 'outline' as const,
            },
          },
        },
      ],
    },
  },
};
