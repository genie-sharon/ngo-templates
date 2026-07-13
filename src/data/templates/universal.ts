import type { TemplateData } from './types';

const sharedHref = (path: string) => `/templates/universal${path}`;

const nav = {
  layout: 'transparent' as const,
  logo: { text: 'Kindonar', href: sharedHref('') },
  menuItems: [
    { label: 'Home', href: sharedHref('') },
    { label: 'About', href: sharedHref('/about') },
    {
      label: 'Programs',
      href: sharedHref('/programs'),
      children: [
        { label: 'Education for All', href: sharedHref('/programs') },
        { label: 'Health Access', href: sharedHref('/programs') },
        { label: 'Clean Water', href: sharedHref('/programs') },
        { label: 'Food Security', href: sharedHref('/programs') },
      ],
    },
    { label: 'Gallery', href: sharedHref('/gallery') },
    { label: 'News', href: sharedHref('/news') },
    { label: 'Contact', href: sharedHref('/contact') },
  ],
  ctaButtons: [
    {
      label: 'Donate Now',
      href: sharedHref('/donate'),
      variant: 'primary' as const,
      size: 'md' as const,
    },
  ],
  showSearch: true,
  showLanguageSwitcher: true,
  languages: [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'EspaÃ±ol' },
    { code: 'fr', label: 'FranÃ§ais' },
  ],
  sticky: true,
  theme: 'dark' as const,
};

const footer = {
  layout: 'mega' as const,
  theme: 'dark' as const,
  animation: 'fade' as const,
  background: 'solid' as const,
  backgroundValue: '#0f0f0f',
  padding: 'large' as const,
  visible: true,
  logo: { text: 'Kindonar Foundation', href: sharedHref('') },
  description:
    'Empowering communities worldwide through sustainable development, education, and healthcare initiatives since 2004. Together, we build a world where every community thrives.',
  columns: [
    {
      title: 'Our Work',
      links: [
        { label: 'Education for All', href: sharedHref('/programs') },
        { label: 'Health Access', href: sharedHref('/programs') },
        { label: 'Clean Water Initiative', href: sharedHref('/programs') },
        { label: 'Food Security', href: sharedHref('/programs') },
        { label: 'Annual Reports', href: sharedHref('/about') },
      ],
    },
    {
      title: 'About',
      links: [
        { label: 'Our Mission', href: sharedHref('/about') },
        { label: 'Impact & Transparency', href: sharedHref('/about') },
        { label: 'Our Team', href: sharedHref('/about') },
        { label: 'Careers', href: '#' },
        { label: 'Press Kit', href: '#' },
      ],
    },
    {
      title: 'Get Involved',
      links: [
        { label: 'Donate', href: sharedHref('/donate') },
        { label: 'Volunteer', href: sharedHref('/volunteer') },
        { label: 'Partner With Us', href: sharedHref('/contact') },
        { label: 'Fundraise', href: sharedHref('/donate') },
        { label: 'Leave a Legacy', href: sharedHref('/donate') },
      ],
    },
    {
      title: 'Connect',
      links: [
        { label: 'Contact Us', href: sharedHref('/contact') },
        { label: 'News & Stories', href: sharedHref('/news') },
        { label: 'Gallery', href: sharedHref('/gallery') },
        { label: 'FAQ', href: sharedHref('/contact') },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Cookie Policy', href: '#' },
        { label: 'GDPR Compliance', href: '#' },
        { label: 'Accessibility Statement', href: '#' },
      ],
    },
  ],
  socialLinks: [
    { platform: 'facebook' as const, url: '#', label: 'Facebook' },
    { platform: 'twitter' as const, url: '#', label: 'Twitter' },
    { platform: 'instagram' as const, url: '#', label: 'Instagram' },
    { platform: 'linkedin' as const, url: '#', label: 'LinkedIn' },
    { platform: 'youtube' as const, url: '#', label: 'YouTube' },
    { platform: 'tiktok' as const, url: '#', label: 'TikTok' },
  ],
  copyright: 'Â© 2026 Kindonar Foundation. All rights reserved.',
  showBackToTop: true,
  legalLinks: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
};

export const universalTemplate: TemplateData = {
  slug: 'universal',
  name: 'Universal NGO',
  tagline: 'Empowering communities worldwide through sustainable development.',
  description:
    'A premium, emotionally-driven flagship template designed for any registered non-profit organization. Features storytelling-focused layout with 20+ sections.',
  themeId: 'default',
  mood: 'Warm, hopeful, premium, and deeply human',
  illustrationStyle: 'Documentary photography with warm golden tones and authentic moments',
  motionStyle:
    'Purposeful and elegant with reveal animations, staggered entrances, and subtle parallax',
  navigation: nav,
  footer: footer,
  pages: {
    home: {
      seo: {
        title: 'Kindonar Foundation â€” Building a World Where Every Community Thrives',
        description:
          'For over two decades, Kindonar has worked alongside communities to break the cycle of poverty through sustainable development, quality education, accessible healthcare, and environmental stewardship.',
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center',
            theme: 'dark',
            animation: 'scale',
            background: 'image',
            backgroundValue: '/images/universal/hero.jpg',
            padding: 'none',
            visible: true,
            fullHeight: true,
            heading: {
              title: 'Every act of kindness ripples across generations',
              subtitle: 'Kindonar Foundation',
              description:
                'We partner with communities in 45 countries to build schools, drill wells, train health workers, and create lasting change â€” because dignity, not dependency, is the foundation of progress.',
              tag: 'Est. 2004',
            },
            backgroundImage: {
              src: '/images/universal/hero.jpg',
              alt: 'Community gathering in a rural village at golden hour',
            },
            stats: [
              { value: 2004, label: 'Founded' },
              { value: 45, suffix: '+', label: 'Countries' },
              { value: 2.8, suffix: 'M', label: 'Lives Impacted' },
              { value: 1200, suffix: '+', label: 'Projects Completed' },
              { value: 96, suffix: '%', label: 'Program Efficiency' },
            ],
            trustBadges: [
              {
                src: '/images/trust/un-ecosoc.svg',
                alt: 'United Nations ECOSOC Consultative Status',
                name: 'UN Consultative Status',
              },
              {
                src: '/images/trust/charity-navigator.svg',
                alt: 'Charity Navigator 4-Star Rating',
                name: 'Charity Navigator 4-Star',
              },
              {
                src: '/images/trust/gold-transparency.svg',
                alt: 'Candid Gold Transparency 2026',
                name: 'Gold Transparency 2026',
              },
              {
                src: '/images/trust/iso.svg',
                alt: 'ISO 26000 Social Responsibility',
                name: 'ISO 26000 Certified',
              },
            ],
            overlayOpacity: 0.4,
            showScrollIndicator: true,
            decorativeShapes: [
              { type: 'circle', position: 'top-right', size: 'lg' },
              { type: 'blob', position: 'bottom-left', size: 'md' },
            ],
          },
        },
        {
          type: 'partnerLogos',
          config: {
            layout: 'default',
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'medium',
            visible: true,
            heading: { title: 'Trusted by leading global organizations', subtitle: 'Our Partners' },
            variant: 'marquee',
            partners: [
              {
                name: 'United Nations Development Programme',
                logo: { src: '/images/partners/undp.svg', alt: 'UNDP' },
              },
              {
                name: 'World Health Organization',
                logo: { src: '/images/partners/who.svg', alt: 'WHO' },
              },
              { name: 'UNICEF', logo: { src: '/images/partners/unicef.svg', alt: 'UNICEF' } },
              {
                name: 'World Food Programme',
                logo: { src: '/images/partners/default.svg', alt: 'WFP' },
              },
              {
                name: 'The Global Fund',
                logo: { src: '/images/partners/global-fund.svg', alt: 'Global Fund' },
              },
              { name: 'USAID', logo: { src: '/images/partners/usaid.svg', alt: 'USAID' } },
              {
                name: 'World Bank',
                logo: { src: '/images/partners/world-bank.svg', alt: 'World Bank' },
              },
              {
                name: 'Bill & Melinda Gates Foundation',
                logo: { src: '/images/partners/gates-foundation.svg', alt: 'Gates Foundation' },
              },
            ],
          },
        },
        {
          type: 'about',
          config: {
            theme: 'light',
            animation: 'stagger',
            background: 'muted',
            backgroundValue: '#fdf8f3',
            padding: 'large',
            visible: true,
            variant: 'split',
            body: [
              'We believe that lasting change begins when communities themselves lead the way. Our approach combines local wisdom with global expertise to create solutions that endure for generations.',
              'Founded in 2004 by a coalition of humanitarian leaders, we have grown from a small team with a big dream into a worldwide movement spanning 45 countries. Our programs are designed not to create dependency, but to unlock the incredible potential that already exists within every community.',
            ],
            mission:
              'To empower marginalized communities worldwide by providing access to quality education, healthcare, clean water, and economic opportunities â€” fostering self-reliance, dignity, and hope for every person we serve.',
            vision:
              'A just and equitable world where every human being has the opportunity to reach their full potential, regardless of where they are born, their gender, or their circumstances.',
            values: [
              {
                title: 'Dignity First',
                description:
                  'We honor the inherent worth of every person we serve, designing programs that empower rather than enable.',
              },
              {
                title: 'Community Led',
                description:
                  'We listen before we act. Communities define their own needs and lead their own development.',
              },
              {
                title: 'Radical Transparency',
                description:
                  '96 cents of every dollar goes directly to programs. We publish every financial report publicly.',
              },
              {
                title: 'Sustainable Impact',
                description:
                  'We build local capacity so that progress continues long after our programs end.',
              },
              {
                title: 'Evidence Based',
                description:
                  'Every program is rigorously evaluated. We measure what matters and adapt based on data.',
              },
            ],
            image: {
              src: '/images/universal/about.jpg',
              alt: 'Community members working together on a sustainable farm in Kenya',
            },
            stats: [
              { value: 22, suffix: '', label: 'Years of Service' },
              { value: 3400, suffix: '+', label: 'Staff Worldwide' },
              { value: 92, suffix: '%', label: 'Locally Hired Staff' },
              { value: 45, suffix: '+', label: 'Countries Active' },
            ],
          },
        },
        {
          type: 'impact',
          config: {
            theme: 'light',
            animation: 'fade',
            background: 'muted',
            backgroundValue: '#faf6f1',
            padding: 'large',
            visible: true,
            layout: 'counters',
            heading: {
              title: 'Our impact in numbers',
              subtitle: 'Measurable Change',
              description:
                'Behind every statistic is a human story. These numbers represent real lives transformed.',
            },
            stats: [
              { value: 2800000, suffix: '+', label: 'Lives Improved Worldwide' },
              { value: 1200, suffix: '+', label: 'Schools Built or Renovated' },
              { value: 850000, suffix: '+', label: 'Children Receiving Quality Education' },
              { value: 15000, suffix: '+', label: 'Healthcare Workers Trained' },
              { value: 3200, suffix: '+', label: 'Clean Water Wells Drilled' },
              { value: 78, suffix: 'M', prefix: '$', label: 'Program Funding Delivered' },
              { value: 500000, suffix: '+', label: 'Families With Food Security' },
              { value: 120000, suffix: '+', label: 'Women Economically Empowered' },
            ],
          },
        },
        {
          type: 'programs',
          config: {
            theme: 'light',
            animation: 'fade-in-up',
            background: 'muted',
            backgroundValue: '#faf6f1',
            padding: 'large',
            visible: true,
            layout: 'cards',
            heading: {
              title: 'Our core programs',
              subtitle: 'What We Do',
              description:
                'Each program is designed in partnership with communities to address root causes, not symptoms.',
            },
            programs: [
              {
                id: 'education-for-all',
                title: 'Education for All',
                description:
                  "Building schools, training teachers, and providing scholarships to ensure every child has access to quality education. Our holistic approach includes school feeding programs and girls' education initiatives.",
                image: {
                  src: '/images/universal/about.jpg',
                  alt: 'Children learning in a brightly lit classroom',
                },
                category: 'Education',
                impactStat: '1,200+ schools built, 850,000+ children enrolled',
                cta: { label: 'Learn More', href: sharedHref('/programs') },
              },
              {
                id: 'health-access',
                title: 'Health Access Initiative',
                description:
                  'Bringing essential healthcare to the most remote communities through mobile clinics, trained community health workers, and innovative telemedicine technology.',
                image: {
                  src: '/images/universal/about.jpg',
                  alt: 'A nurse providing care at a mobile health clinic',
                },
                category: 'Healthcare',
                impactStat: '15,000+ health workers trained, 3.2M patients served',
                cta: { label: 'Learn More', href: sharedHref('/programs') },
              },
              {
                id: 'clean-water',
                title: 'Clean Water for All',
                description:
                  'Drilling boreholes, installing solar-powered filtration systems, and promoting sanitation hygiene education to eliminate waterborne diseases in vulnerable communities.',
                image: {
                  src: '/images/universal/about.jpg',
                  alt: 'Community members gathered around a newly installed water well',
                },
                category: 'Water & Sanitation',
                impactStat: '3,200+ wells drilled, 2.1M people with clean water',
                cta: { label: 'Learn More', href: sharedHref('/programs') },
              },
              {
                id: 'food-security',
                title: 'Food Security & Livelihoods',
                description:
                  'Empowering smallholder farmers with climate-resilient agriculture training, quality seeds, tools, and access to fair markets. Breaking the hunger cycle permanently.',
                image: {
                  src: '/images/universal/about.jpg',
                  alt: 'Farmers harvesting crops in a lush green field',
                },
                category: 'Food Security',
                impactStat: '200,000+ farmers supported, 1.5M people food secure',
                cta: { label: 'Learn More', href: sharedHref('/programs') },
              },
              {
                id: 'women-empowerment',
                title: "Women's Empowerment",
                description:
                  'Supporting women and girls through vocational training, microfinance programs, leadership development, and advocacy to remove barriers and create lasting opportunities.',
                image: {
                  src: '/images/universal/about.jpg',
                  alt: 'Women participating in a vocational training workshop',
                },
                category: 'Gender Equality',
                impactStat: '120,000+ women economically empowered',
                cta: { label: 'Learn More', href: sharedHref('/programs') },
              },
              {
                id: 'disaster-response',
                title: 'Emergency Relief & Resilience',
                description:
                  'When disaster strikes, our rapid response teams deliver life-saving food, shelter, medical care, and clean water within 72 hours. We stay to help communities rebuild stronger.',
                image: {
                  src: '/images/universal/about.jpg',
                  alt: 'Emergency relief distribution in a crisis-affected area',
                },
                category: 'Emergency Response',
                impactStat: '500,000+ people reached in 30+ emergency responses',
                cta: { label: 'Learn More', href: sharedHref('/programs') },
              },
            ],
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
              title: 'Real stories, real change',
              subtitle: 'Success Stories',
              description:
                'Meet the individuals whose lives have been transformed through our programs.',
            },
            stories: [
              {
                name: 'Amina Hassan',
                role: 'Mother & Community Leader, Tanzania',
                image: {
                  src: '/images/universal/about.jpg',
                  alt: 'Amina Hassan smiling in her village',
                },
                quote:
                  'Before Kindonar built a school in our village, my daughters walked 12 kilometers each day for an education. Now they learn in a safe, bright classroom just minutes from home. My girls will be the first generation of women in our family to graduate high school.',
                impactStat: '850,000+',
                impactLabel: 'Children enrolled in school',
              },
              {
                name: 'Carlos Mendez',
                role: 'Entrepreneur, Guatemala',
                image: {
                  src: '/images/universal/about.jpg',
                  alt: 'Carlos Mendez at his tailoring shop',
                },
                quote:
                  'The microfinance program gave me the capital to start my tailoring business. Today I employ five women from my community. We are not just making clothes â€” we are stitching together a future of independence and pride.',
                impactStat: '120,000+',
                impactLabel: 'Women economically empowered',
              },
              {
                name: 'Dr. Sarah Okafor',
                role: 'Community Health Worker, Nigeria',
                image: {
                  src: '/images/universal/about.jpg',
                  alt: 'Dr. Sarah Okafor at a health clinic',
                },
                quote:
                  "I was trained as a community health worker through Kindonar's Health Access program. Now I provide prenatal care to over 300 women in my district. In the past year, not a single mother under my care was lost to childbirth.",
                impactStat: '45%',
                impactLabel: 'Reduction in maternal mortality',
              },
              {
                name: 'Prakash Thapa',
                role: 'Village Elder, Nepal',
                image: {
                  src: '/images/universal/about.jpg',
                  alt: 'Prakash Thapa standing near a water well',
                },
                quote:
                  "Our village's first clean water well was drilled in 2018. The rate of waterborne illness dropped by 80% within a year. Our children no longer miss school because they are sick. Clean water did not just change our health â€” it changed our future.",
                impactStat: '2.1M',
                impactLabel: 'People with access to clean water',
              },
            ],
          },
        },
        {
          type: 'volunteerJourney',
          config: {
            theme: 'light',
            animation: 'fade',
            background: 'muted',
            backgroundValue: '#fdf8f3',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Your journey to make a difference',
              subtitle: 'How to Volunteer',
              description:
                'Whether you have a week or a year to give, your skills can transform communities.',
            },
            steps: [
              {
                icon: '',
                title: 'Discover',
                description:
                  'Explore our volunteer programs and find the opportunity that matches your skills and passion. From healthcare to education, there is a role for everyone.',
              },
              {
                icon: '',
                title: 'Apply',
                description:
                  'Complete our simple online application. Our volunteer coordinators will guide you through every step and answer all your questions.',
              },
              {
                icon: '',
                title: 'Prepare',
                description:
                  'Attend our comprehensive orientation and cultural preparation sessions. You will arrive confident, informed, and ready to contribute.',
              },
              {
                icon: '',
                title: 'Participate',
                description:
                  "Work alongside community members on projects that create lasting impact. This is where your skills meet the world's greatest needs.",
              },
              {
                icon: '',
                title: 'Inspire',
                description:
                  'Return home with a transformed perspective. Become an ambassador for the communities you served and inspire others to take action.',
              },
            ],
          },
        },
        {
          type: 'testimonials',
          config: {
            theme: 'light',
            animation: 'scale',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Voices of our community',
              subtitle: 'Testimonials',
              description:
                'Hear from the people who experience our work firsthand â€” from community members to volunteers and partners.',
            },
            layout: 'carousel',
            testimonials: [
              {
                quote:
                  'What makes Kindonar different is their deep respect for our culture and community. They did not arrive with a fixed plan â€” they arrived with questions. They listened. And then they worked alongside us to build something we truly own.',
                name: 'Elder Nkosana Dlamini',
                role: 'Community Leader, South Africa',
                avatar: { src: '/images/universal/about.jpg', alt: 'Elder Nkosana Dlamini' },
              },
              {
                quote:
                  'Volunteering with Kindonar changed how I see the world â€” and myself. I went to teach, but I learned far more than I could ever give. The resilience, joy, and dignity of the people I met will stay with me forever.',
                name: 'Emma Richardson',
                role: 'Education Volunteer, Nepal 2025',
                avatar: { src: '/images/universal/about.jpg', alt: 'Emma Richardson' },
              },
              {
                quote:
                  'I have partnered with dozens of NGOs over my career. Kindonar stands alone in their commitment to transparency. Every dollar is tracked, every outcome is measured, and every report is publicly available. That is the standard the entire sector should follow.',
                name: 'James Mitchell',
                role: 'Corporate Partner, TechForGood Inc.',
                avatar: { src: '/images/universal/about.jpg', alt: 'James Mitchell' },
              },
              {
                quote:
                  'Before the mobile clinic arrived, a simple infection could become life-threatening. Now my children can see a doctor within an hour. I do not have the words to express what that peace of mind means to a mother.',
                name: 'Fatima Diallo',
                role: 'Mother of Four, Senegal',
                avatar: { src: '/images/universal/about.jpg', alt: 'Fatima Diallo' },
              },
              {
                quote:
                  'I started as a volunteer, became a donor, and now serve on the board. Kindonar has that effect on people â€” once you see the impact, you cannot look away. You have to be part of it.',
                name: 'Dr. Rajesh Patel',
                role: 'Board Member & Monthly Donor',
                avatar: { src: '/images/universal/about.jpg', alt: 'Dr. Rajesh Patel' },
              },
            ],
          },
        },
        {
          type: 'campaignProgress',
          config: {
            theme: 'light',
            animation: 'fade',
            background: 'muted',
            backgroundValue: '#faf6f1',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Building 100 schools by 2028',
              subtitle: 'Current Campaign',
              description:
                'We are halfway to our goal of building 100 schools in underserved regions. Every contribution brings us closer.',
            },
            goal: 5000000,
            raised: 2850000,
            currency: 'USD',
            donorCount: 12480,
            title: '100 Schools in 5 Years Campaign',
            description:
              "Help us reach our goal of constructing and staffing 100 schools in the world's most underserved communities.",
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
              title: 'Moments of impact',
              subtitle: 'Gallery',
              description:
                'Through the lens of our photographers and community members, witness the dignity, joy, and resilience of the people we serve.',
            },
            images: [
              {
                src: '/images/universal/gallery3.jpg',
                alt: 'Children studying in a newly built school',
                caption: 'First day of school at a Kindonar-built primary school in rural Zambia.',
              },
              {
                src: '/images/universal/gallery4.jpg',
                alt: 'Village celebrating clean water well',
                caption: 'A village celebrates the inauguration of their first clean water well.',
              },
              { src: '/images/universal/gallery5.jpg', alt: 'Women entrepreneurs at a market' },
              {
                src: '/images/universal/hero.jpg',
                alt: 'Mobile health clinic in rural community',
                caption: 'A nurse provides prenatal care at one of our mobile clinics.',
              },
              {
                src: '/images/universal/about.jpg',
                alt: 'Farmer with solar irrigation system',
                caption: 'A farmer demonstrates her solar-powered irrigation system.',
              },
              {
                src: '/images/universal/gallery6.jpg',
                alt: 'Emergency relief distribution',
                caption:
                  'Distributing food and hygiene kits to families displaced by seasonal flooding.',
              },
              {
                src: '/images/universal/gallery7.jpg',
                alt: 'Community meeting under a tree',
                caption: 'Community members participate in a participatory planning session.',
              },
              {
                src: '/images/universal/gallery8.jpg',
                alt: 'Volunteers building a school',
                caption: 'Volunteers from around the world help construct a new school in Kenya.',
              },
              {
                src: '/images/universal/hero.jpg',
                alt: 'Children playing soccer',
                caption:
                  'Joy knows no boundaries â€” children play during recess at a Kindonar school.',
              },
            ],
          },
        },
        {
          type: 'news',
          config: {
            theme: 'light',
            animation: 'fade-in-up',
            background: 'muted',
            backgroundValue: '#faf6f1',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Latest stories',
              subtitle: 'News & Updates',
              description:
                'Stay informed about our programs, impact stories, and the communities we serve.',
            },
            layout: 'cards',
            articles: [
              {
                title:
                  'Education Initiative Reaches One Million Children Across Sub-Saharan Africa',
                slug: 'education-initiative-one-million',
                date: '2026-06-28',
                category: 'Education',
                excerpt:
                  'Our flagship Education for All program has reached a historic milestone, providing quality education to over one million children across 28 countries in Sub-Saharan Africa.',
                image: '/images/universal/about.jpg',
                author: { name: 'Aisha Mohammed', role: 'Education Program Director' },
              },
              {
                title:
                  'Solar-Powered Water System Brings Clean Drinking Water to 15,000 in Rural Senegal',
                slug: 'solar-water-system-senegal',
                date: '2026-06-15',
                category: 'Water & Sanitation',
                excerpt:
                  'An innovative solar-powered water filtration system is providing clean drinking water to 15,000 residents in the ThiÃ¨s region of Senegal, eliminating waterborne diseases.',
                image: '/images/universal/about.jpg',
                author: { name: 'Mamadou Diallo', role: 'WASH Program Lead' },
              },
              {
                title: 'Women Entrepreneurs Network Expands to 10,000 Members Across Latin America',
                slug: 'women-entrepreneurs-10000',
                date: '2026-05-30',
                category: 'Gender Equality',
                excerpt:
                  "Our Women's Empowerment program has reached 10,000 active members across 12 countries, with members reporting an average 40% increase in household income.",
                image: '/images/universal/gallery1.jpg',
                author: { name: 'Dr. Maria Santos', role: 'Gender Equity Director' },
              },
              {
                title:
                  'Community Health Worker Program Reduces Maternal Mortality by 45% in Northern Nigeria',
                slug: 'maternal-mortality-reduction',
                date: '2026-04-05',
                category: 'Healthcare',
                excerpt:
                  "A comprehensive five-year evaluation reveals a 45% reduction in maternal mortality in our program areas across northern Nigeria, saving thousands of mothers' lives.",
                image: '/images/universal/gallery2.jpg',
                author: { name: 'Dr. Sarah Okafor', role: 'Community Health Director' },
              },
              {
                title: 'Emergency Response Team Deploys Within 48 Hours to Bangladesh Flood Crisis',
                slug: 'emergency-response-bangladesh',
                date: '2026-05-18',
                category: 'Emergency Response',
                excerpt:
                  'Our rapid response team delivered food, clean water, and medical supplies to over 200,000 people displaced by the worst flooding in Bangladesh in a decade.',
                image: '/images/universal/gallery3.jpg',
                author: { name: 'Rajesh Sharma', role: 'Emergency Response Lead' },
              },
              {
                title:
                  'Annual Impact Report Shows 96% of Funds Go Directly to Programs for Third Consecutive Year',
                slug: 'annual-impact-report',
                date: '2026-04-20',
                category: 'Transparency',
                excerpt:
                  'Our latest annual report confirms our commitment to radical transparency, with 96% of all funds going directly to program implementation for the third straight year.',
                image: '/images/universal/gallery4.jpg',
                author: { name: 'Sarah Mitchell', role: 'Chief Financial Officer' },
              },
            ],
          },
        },
        {
          type: 'annualReports',
          config: {
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Transparency through annual reports',
              subtitle: 'Our Reports',
              description:
                'We believe in radical transparency. Every dollar, every program, every outcome â€” all publicly available for review.',
            },
            reports: [
              {
                year: 2026,
                title: 'Annual Impact Report 2026',
                description:
                  'Comprehensive review of our global programs, financial performance, and impact metrics for the fiscal year 2026.',
                pdfUrl: '#',
                fileSize: '12 MB',
              },
              {
                year: 2025,
                title: 'Annual Impact Report 2025',
                description:
                  'Detailed analysis of program outcomes, including our response to the East Africa drought and expansion of the Education for All program.',
                pdfUrl: '#',
                fileSize: '11 MB',
              },
              {
                year: 2024,
                title: 'Annual Impact Report 2024',
                description:
                  'Celebrating 20 years of impact. A special retrospective edition featuring stories from two decades of community transformation.',
                pdfUrl: '#',
                fileSize: '15 MB',
              },
              {
                year: 2025,
                title: 'Audited Financial Statements FY2025',
                description:
                  'Independent audit report prepared by Price & Associates LLP. Includes consolidated financial statements and notes.',
                pdfUrl: '#',
                fileSize: '4 MB',
              },
            ],
          },
        },
        {
          type: 'transparencyDashboard',
          config: {
            theme: 'light',
            animation: 'fade',
            background: 'muted',
            backgroundValue: '#fdf8f3',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Where your money goes',
              subtitle: 'Financial Transparency',
              description:
                'We believe donor trust is earned through transparency. Here is exactly how every dollar was allocated in FY2025.',
            },
            totalRaised: '$78,000,000',
            fiscalYear: 'FY 2025',
            allocations: [
              { label: 'Education Programs', percentage: 28, color: '#5a5ae6', amount: '$21.8M' },
              {
                label: 'Healthcare Initiatives',
                percentage: 22,
                color: '#ee5434',
                amount: '$17.2M',
              },
              { label: 'Water & Sanitation', percentage: 18, color: '#1ea34c', amount: '$14.0M' },
              { label: 'Food Security', percentage: 15, color: '#e2ad0e', amount: '$11.7M' },
              { label: "Women's Empowerment", percentage: 10, color: '#f59e0b', amount: '$7.8M' },
              { label: 'Emergency Response', percentage: 7, color: '#3b82f6', amount: '$5.5M' },
            ],
            stats: [
              { value: 96, suffix: '%', label: 'Direct Program Spending' },
              { value: 3, suffix: '%', label: 'Fundraising & Marketing' },
              { value: 1, suffix: '%', label: 'Administrative & Management' },
              { value: 4, suffix: '/4', label: 'Charity Navigator Rating' },
            ],
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
            heading: {
              title: 'Frequently asked questions',
              subtitle: 'FAQ',
              description:
                'Find answers to common questions about our work, donations, and how you can get involved.',
            },
            layout: 'default',
            allowMultiple: false,
            variant: 'bordered' as const,
            items: [
              {
                title: 'How does Kindonar ensure my donation reaches those who need it?',
                content:
                  '96% of every dollar goes directly to program implementation. We publish audited financial statements annually, and our programs are independently evaluated by third-party organizations.',
              },
              {
                title: 'Can I choose which program to support?',
                content:
                  "Yes! When you donate, you can designate your gift to any of our six core programs: Education, Healthcare, Clean Water, Food Security, Women's Empowerment, or Emergency Response.",
              },
              {
                title: 'Is my donation tax-deductible?',
                content:
                  'Yes. Kindonar Foundation is a registered 501(c)(3) non-profit organization in the United States. Your donation is tax-deductible to the fullest extent of the law.',
              },
              {
                title: 'How can I volunteer with Kindonar?',
                content:
                  'We offer volunteer opportunities ranging from two weeks to twelve months. Visit our Volunteer page to explore current openings and submit an application.',
              },
              {
                title: 'How does Kindonar measure its impact?',
                content:
                  'We use rigorous monitoring and evaluation frameworks, including randomized control trials, pre/post surveys, and third-party audits. Our impact reports are publicly available.',
              },
              {
                title: 'Can I visit a program site to see the work firsthand?',
                content:
                  'Absolutely! We offer program site visits for donors, partners, and journalists. Contact our communications team at visits@kindonar.org to arrange a visit.',
              },
              {
                title: 'Does Kindonar work with corporate partners?',
                content:
                  'Yes. We partner with corporations through employee matching programs, CSR initiatives, pro-bono services, and strategic partnerships. Contact our partnerships team to learn more.',
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
            backgroundValue: '#faf6f1',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Stay connected with stories of impact',
              subtitle: 'Newsletter',
              description:
                'Join 50,000+ subscribers who receive our monthly newsletter featuring impact stories, program updates, and opportunities to get involved.',
            },
            title: 'The Kindonar Chronicle',
            description: 'Monthly stories of impact from communities around the world.',
            placeholder: 'Enter your email address',
            buttonLabel: 'Subscribe',
            successMessage: 'Thank you! Check your inbox for a confirmation email.',
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered',
            theme: 'dark',
            animation: 'fade',
            background: 'gradient',
            backgroundValue: 'linear-gradient(135deg, #e07a5f 0%, #f5a623 100%)',
            padding: 'xlarge',
            visible: true,
            heading: 'Join the movement. Change a life. Transform a community.',
            description:
              'Your support â€” whether a one-time gift or a monthly commitment â€” creates ripples of change that reach communities worldwide. Every act of kindness echoes across generations.',
            tag: 'Make a Difference',
            primaryCta: {
              label: 'Donate Now',
              href: sharedHref('/donate'),
              variant: 'primary' as const,
            },
            secondaryCta: {
              label: 'Become a Monthly Donor',
              href: sharedHref('/donate'),
              variant: 'outline' as const,
            },
          },
        },
      ],
    },

    about: {
      seo: {
        title: 'About Us â€” Kindonar Foundation',
        description:
          'Discover our story, mission, and the team behind two decades of global impact across 45 countries.',
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center',
            theme: 'dark',
            animation: 'scale',
            background: 'image',
            backgroundValue: '/images/universal/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'A story of hope, partnership, and lasting change',
              subtitle: 'Who We Are',
              description:
                'From a small vision shared by seven founders in a rented Nairobi office to a worldwide movement spanning 45 countries â€” this is the story of Kindonar.',
              tag: 'About Us',
            },
            backgroundImage: {
              src: '/images/universal/hero.jpg',
              alt: 'Kindonar team in the field with community members',
            },
            overlayOpacity: 0.5,
          },
        },
        {
          type: 'about',
          config: {
            theme: 'light',
            animation: 'stagger',
            background: 'muted',
            backgroundValue: '#fdf8f3',
            padding: 'large',
            visible: true,
            variant: 'timeline',
            body: [
              'Kindonar Foundation was born in 2004 when seven humanitarian professionals gathered in a small rented office in Nairobi, Kenya. They shared a radical belief: that the communities most affected by poverty hold the wisdom to solve it.',
              'Our founding principles remain unchanged: we enter communities as partners, not saviors. We listen before we act. We measure what matters. And we are accountable â€” not just to our donors, but to the communities we serve.',
              "Today we employ over 3,400 staff worldwide â€” 92% of whom are nationals of the countries where we work. Our programs span education, healthcare, clean water, food security, women's empowerment, and emergency response.",
            ],
            mission:
              'To empower marginalized communities worldwide through access to quality education, healthcare, clean water, and economic opportunity â€” fostering self-reliance, dignity, and lasting hope.',
            vision:
              'A just and equitable world where every human being has the opportunity to reach their full potential, regardless of where they are born.',
            values: [
              {
                title: 'Community Ownership',
                description:
                  'Programs are designed with community members as equal partners, not passive recipients.',
              },
              {
                title: 'Evidence-Based Impact',
                description:
                  'Every initiative is guided by data and rigorously evaluated. We measure what matters.',
              },
              {
                title: 'Environmental Stewardship',
                description:
                  'Climate resilience is integrated into every program we design and implement.',
              },
              {
                title: 'Radical Transparency',
                description:
                  '96 cents of every dollar goes directly to programs. All financial reports are public.',
              },
              {
                title: 'Dignity and Respect',
                description:
                  'We honor the inherent worth of every person we serve, without exception.',
              },
            ],
            image: {
              src: '/images/universal/about.jpg',
              alt: "Historical photo of Kindonar's founders in Nairobi",
            },
            timeline: [
              {
                year: '2004',
                title: 'Foundation',
                description:
                  'Kindonar was founded in Nairobi, Kenya by seven humanitarian professionals.',
              },
              {
                year: '2007',
                title: 'First School Built',
                description:
                  'Our Education for All program launched with the construction of our first 10 schools in rural Kenya.',
              },
              {
                year: '2011',
                title: 'Expansion to 20 Countries',
                description:
                  'Programs expanded across Sub-Saharan Africa, reaching 20 countries with integrated health and education initiatives.',
              },
              {
                year: '2015',
                title: 'Emergency Response Division',
                description:
                  'Launched our dedicated emergency response team, deploying to 12 humanitarian crises in the first year.',
              },
              {
                year: '2018',
                title: 'Clean Water Milestone',
                description:
                  'Drilled our 1,000th clean water well, providing access to clean water for over 500,000 people.',
              },
              {
                year: '2022',
                title: 'Global Reach of 45 Countries',
                description:
                  'Expanded operations to 45 countries across Africa, Asia, and Latin America with 3,400+ staff.',
              },
              {
                year: '2024',
                title: '20 Years of Impact',
                description:
                  'Celebrated two decades of service, having impacted over 2.8 million lives worldwide.',
              },
            ],
            ceo: {
              name: 'Dr. Elena Vasquez',
              role: 'Chief Executive Officer',
              photo: { src: '/images/universal/about.jpg', alt: 'Dr. Elena Vasquez' },
              message:
                'Our work is powered by the unwavering belief that every human being deserves the opportunity to thrive. The greatest impact comes not from what we do for communities, but from what we do with them. I invite you to join us on this journey.',
              quote:
                'Hope is not a strategy â€” but it is the foundation of every strategy that changes the world.',
            },
            stats: [
              { value: 2004, label: 'Founded' },
              { value: 45, suffix: '+', label: 'Countries Active' },
              { value: 3400, suffix: '+', label: 'Staff Worldwide' },
              { value: 92, suffix: '%', label: 'Locally Hired Staff' },
            ],
          },
        },
        {
          type: 'impact',
          config: {
            theme: 'light',
            animation: 'fade',
            background: 'muted',
            backgroundValue: '#faf6f1',
            padding: 'large',
            visible: true,
            layout: 'counters',
            heading: {
              title: 'Two decades of measurable impact',
              subtitle: 'Our Reach',
              description:
                'Every number represents a life changed, a community strengthened, a future transformed.',
            },
            stats: [
              { value: 2004, label: 'Founded' },
              { value: 45, suffix: '+', label: 'Countries Active' },
              { value: 3400, suffix: '+', label: 'Staff Worldwide' },
              { value: 92, suffix: '%', label: 'Local Staff' },
              { value: 96, suffix: '%', label: 'Program Efficiency' },
              { value: 2.8, suffix: 'M', label: 'Lives Impacted' },
            ],
          },
        },
        {
          type: 'testimonials',
          config: {
            theme: 'light',
            animation: 'scale',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: { title: 'Leadership with vision', subtitle: 'Our Team' },
            layout: 'cards',
            testimonials: [
              {
                quote:
                  'Our board brings together expertise from across sectors â€” from global health to finance to grassroots development. Every decision is made with the communities we serve at the center.',
                name: 'James Okonkwo',
                role: 'Board Chair',
                avatar: { src: '/images/universal/gallery2.jpg', alt: 'James Okonkwo' },
              },
              {
                quote:
                  'Data-driven impact is not just a value â€” it is our accountability mechanism. We owe it to our donors and communities to know, with certainty, that our programs work.',
                name: 'Dr. Li Wei Chen',
                role: 'Director of Programs',
                avatar: { src: '/images/universal/gallery3.jpg', alt: 'Dr. Li Wei Chen' },
              },
              {
                quote:
                  'Every financial decision we make is guided by one question: does this maximize impact for the communities we serve? That clarity of purpose is our compass.',
                name: 'Sarah Mitchell',
                role: 'Chief Financial Officer',
                avatar: { src: '/images/universal/hero.jpg', alt: 'Sarah Mitchell' },
              },
              {
                quote:
                  'The communities we serve are the true experts on their own needs. Our job is not to provide answers â€” it is to provide resources and step back.',
                name: 'Raj Patel',
                role: 'VP of Community Partnerships',
                avatar: { src: '/images/universal/about.jpg', alt: 'Raj Patel' },
              },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered',
            theme: 'dark',
            animation: 'fade',
            background: 'solid',
            backgroundValue: '#1a1917',
            padding: 'large',
            visible: true,
            heading: 'Be part of our next chapter',
            description:
              'Whether you donate, volunteer, or partner with us, your contribution creates ripples of change that reach communities worldwide.',
            primaryCta: {
              label: 'Support Our Work',
              href: sharedHref('/donate'),
              variant: 'primary' as const,
            },
            secondaryCta: {
              label: 'View Our Annual Report',
              href: '#',
              variant: 'outline' as const,
            },
          },
        },
      ],
    },

    programs: {
      seo: {
        title: 'Our Programs â€” Kindonar Foundation',
        description:
          "Explore our six core programs in education, healthcare, water, food security, women's empowerment, and emergency response.",
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center',
            theme: 'dark',
            animation: 'scale',
            background: 'image',
            backgroundValue: '/images/universal/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Six ways we transform lives',
              subtitle: 'Our Programs',
              description:
                'From building schools to drilling wells, each program is designed hand-in-hand with communities to address root causes and create lasting change.',
              tag: 'What We Do',
            },
            backgroundImage: {
              src: '/images/universal/hero.jpg',
              alt: 'Various Kindonar programs in action across the world',
            },
            stats: [
              { value: 6, label: 'Core Programs' },
              { value: 3200, suffix: '+', label: 'Active Projects' },
              { value: 45, label: 'Countries' },
              { value: 500, suffix: 'M', prefix: '$', label: 'Total Lifetime Investment' },
            ],
            overlayOpacity: 0.5,
          },
        },
        {
          type: 'programs',
          config: {
            theme: 'light',
            animation: 'fade-in-up',
            background: 'muted',
            backgroundValue: '#fdf8f3',
            padding: 'large',
            visible: true,
            layout: 'cards',
            heading: {
              title: 'Explore our core programs',
              subtitle: 'Programs',
              description:
                'Each program is designed to address root causes while building local capacity for lasting change.',
            },
            programs: [
              {
                id: 'education-for-all',
                title: 'Education for All',
                description:
                  "Education is the single most powerful tool for breaking the cycle of poverty. We have constructed over 1,200 schools and trained 50,000 educators across 28 countries. Our holistic approach includes school feeding programs, girls' education initiatives, and adult literacy classes.",
                image: {
                  src: '/images/universal/about.jpg',
                  alt: 'Children in a brightly lit classroom',
                },
                category: 'Education',
                impactStat: '1,200+ schools built, 850,000+ children educated',
                cta: { label: 'Learn More', href: sharedHref('/programs') },
              },
              {
                id: 'health-access',
                title: 'Health Access Initiative',
                description:
                  'Our community-based model deploys mobile clinics, trains local health workers, and implements telemedicine to reach the most remote populations. We focus on maternal and child health, infectious disease prevention, and mental health support.',
                image: {
                  src: '/images/universal/about.jpg',
                  alt: 'Mobile clinic serving a rural community',
                },
                category: 'Healthcare',
                impactStat: '15,000+ health workers, 3.2M patients served',
                cta: { label: 'Learn More', href: sharedHref('/programs') },
              },
              {
                id: 'clean-water',
                title: 'Clean Water for All',
                description:
                  'Access to clean water transforms everything. Our holistic WASH program drills boreholes, installs solar-powered filtration systems, builds latrines, and promotes sanitation hygiene education. We also train local water committees for long-term maintenance.',
                image: {
                  src: '/images/universal/about.jpg',
                  alt: 'Community gathered around a new water well',
                },
                category: 'Water & Sanitation',
                impactStat: '3,200+ wells, 2.1M people with clean water',
                cta: { label: 'Learn More', href: sharedHref('/programs') },
              },
              {
                id: 'food-security',
                title: 'Food Security & Livelihoods',
                description:
                  'We work with smallholder farmers to transition to climate-resilient agricultural practices. Our program provides access to quality seeds, tools, training in sustainable farming, and connections to fair markets. We also support community seed banks.',
                image: { src: '/images/universal/about.jpg', alt: 'Farmer with abundant harvest' },
                category: 'Food Security',
                impactStat: '200,000+ farmers, 1.5M people food secure',
                cta: { label: 'Learn More', href: sharedHref('/programs') },
              },
              {
                id: 'women-empowerment',
                title: "Women's Empowerment & Gender Equity",
                description:
                  'Our comprehensive program combines vocational training, microfinance, leadership development, legal advocacy, and community dialogue to remove barriers and create opportunities for women and girls across all our program countries.',
                image: {
                  src: '/images/universal/about.jpg',
                  alt: 'Women entrepreneurs at a market',
                },
                category: 'Gender Equality',
                impactStat: '120,000+ women economically empowered',
                cta: { label: 'Learn More', href: sharedHref('/programs') },
              },
              {
                id: 'disaster-response',
                title: 'Emergency Relief & Climate Resilience',
                description:
                  'When disaster strikes, our rapid response teams deploy within 72 hours with food, shelter, clean water, and medical supplies. We then stay to help communities rebuild with resilience to future climate shocks.',
                image: {
                  src: '/images/universal/about.jpg',
                  alt: 'Emergency response team distributing supplies',
                },
                category: 'Emergency Response',
                impactStat: '500,000+ reached in 30+ emergencies',
                cta: { label: 'Learn More', href: sharedHref('/programs') },
              },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered',
            theme: 'dark',
            animation: 'fade',
            background: 'solid',
            backgroundValue: '#1a1917',
            padding: 'large',
            visible: true,
            heading: 'Support a program that speaks to your heart',
            description:
              'Choose a program to support with a targeted donation. 96% of your contribution goes directly to program implementation.',
            primaryCta: {
              label: 'Donate to a Program',
              href: sharedHref('/donate'),
              variant: 'primary' as const,
            },
            secondaryCta: {
              label: 'Read Our Impact Reports',
              href: '#',
              variant: 'ghost' as const,
            },
          },
        },
      ],
    },

    'program-detail': {
      seo: {
        title: 'Education for All â€” Kindonar Foundation',
        description:
          'Our flagship education program building schools, training teachers, and transforming communities through the power of learning.',
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'split',
            theme: 'dark',
            animation: 'scale',
            background: 'image',
            backgroundValue: '/images/universal/hero.jpg',
            padding: 'none',
            visible: true,
            imagePosition: 'right',
            heading: {
              title: 'Education for All',
              subtitle: 'Flagship Program',
              description:
                'Every child deserves a quality education. Our most ambitious program has built 1,200+ schools and reached over 850,000 children across 28 countries.',
              tag: 'Program Detail',
            },
            backgroundImage: {
              src: '/images/universal/hero.jpg',
              alt: 'Children studying in a new Kindonar school',
            },
            stats: [
              { value: 1200, suffix: '+', label: 'Schools Built' },
              { value: 850000, suffix: '+', label: 'Children Served' },
              { value: 50000, suffix: '+', label: 'Teachers Trained' },
              { value: 28, label: 'Countries' },
            ],
            overlayOpacity: 0.5,
          },
        },
        {
          type: 'about',
          config: {
            theme: 'light',
            animation: 'stagger',
            background: 'muted',
            backgroundValue: '#fdf8f3',
            padding: 'large',
            visible: true,
            variant: 'split',
            body: [
              'Education is the most powerful weapon against poverty â€” and our flagship program puts that belief into action every day.',
              'Our holistic approach addresses every barrier to education: we build infrastructure, train teachers, provide learning materials, offer scholarships, implement school feeding programs, and work with communities to keep girls in school. We do not just build schools â€” we build educational ecosystems that last for generations.',
            ],
            mission:
              'To ensure every child, regardless of gender, background, or circumstance, has access to free, quality primary and secondary education.',
            vision: 'A world where no child is denied their right to learn.',
            values: [
              {
                title: 'Inclusion',
                description:
                  'We prioritize girls, children with disabilities, and out-of-school youth.',
              },
              {
                title: 'Quality',
                description: 'We invest in teacher training and evidence-based curricula.',
              },
              {
                title: 'Sustainability',
                description: 'We train local education committees to manage schools independently.',
              },
            ],
            image: {
              src: '/images/universal/about.jpg',
              alt: 'Students and teacher in a classroom',
            },
            stats: [
              { value: 87, suffix: '%', label: 'Primary Completion Rate' },
              { value: 94, suffix: '%', label: 'Teacher Retention Rate' },
              { value: 65, suffix: '%', label: 'Girls Enrollment Increase' },
              { value: 3000000, suffix: '+', prefix: '', label: 'Learning Materials Distributed' },
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
            layout: 'carousel',
            images: [
              {
                src: '/images/universal/gallery3.jpg',
                alt: 'Newly constructed school building',
                caption: 'A new primary school constructed in rural Kenya.',
              },
              {
                src: '/images/universal/hero.jpg',
                alt: 'Teacher training workshop',
                caption: 'Teachers participating in our pedagogy training program.',
              },
              {
                src: '/images/universal/about.jpg',
                alt: 'Students receiving books',
                caption: 'Book distribution day at a partner school in rural Nepal.',
              },
              {
                src: '/images/universal/gallery4.jpg',
                alt: 'Girls in STEM class',
                caption:
                  'Our Girls in STEM initiative encourages young women to pursue science and technology.',
              },
              {
                src: '/images/universal/gallery5.jpg',
                alt: 'School feeding program',
                caption: 'Nutritious meals served daily through our school feeding program.',
              },
            ],
          },
        },
        {
          type: 'impact',
          config: {
            theme: 'light',
            animation: 'fade',
            background: 'muted',
            backgroundValue: '#faf6f1',
            padding: 'large',
            visible: true,
            layout: 'counters',
            heading: { title: 'Measurable results in education', subtitle: 'Impact Data' },
            stats: [
              { value: 87, suffix: '%', label: 'Primary Completion Rate' },
              { value: 94, suffix: '%', label: 'Teacher Retention' },
              { value: 65, suffix: '%', label: 'Girls Enrollment Increase' },
              { value: 3000000, suffix: '+', label: 'Materials Distributed' },
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
            heading: 'Support Education for All',
            description:
              '$50 provides school supplies for one child for an entire year. $500 trains a teacher who will educate hundreds of children over their career.',
            primaryCta: {
              label: 'Donate to Education',
              href: sharedHref('/donate'),
              variant: 'primary' as const,
            },
            secondaryCta: { label: 'Sponsor a School', href: '#', variant: 'outline' as const },
          },
        },
      ],
    },

    gallery: {
      seo: {
        title: 'Gallery â€” Kindonar Foundation',
        description:
          'Visual stories of impact from our programs across 45 countries. Witness the dignity, joy, and resilience of communities worldwide.',
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center',
            theme: 'dark',
            animation: 'scale',
            background: 'image',
            backgroundValue: '/images/universal/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Moments that move the world',
              subtitle: 'Photo Gallery',
              description:
                'Through the lens of our photographers and community members, witness the dignity, joy, and resilience of the people we serve across 45 countries.',
              tag: 'Gallery',
            },
            backgroundImage: {
              src: '/images/universal/hero.jpg',
              alt: 'Vibrant community celebration',
            },
            overlayOpacity: 0.5,
          },
        },
        {
          type: 'gallery',
          config: {
            theme: 'light',
            animation: 'fade-in-up',
            background: 'muted',
            backgroundValue: '#fdf8f3',
            padding: 'large',
            visible: true,
            layout: 'masonry',
            heading: { title: 'Stories told through images', subtitle: 'Photo Gallery' },
            images: [
              {
                src: '/images/universal/gallery6.jpg',
                alt: 'Children learning in a classroom',
                caption: 'The future begins with education.',
              },
              {
                src: '/images/universal/gallery7.jpg',
                alt: 'Community water well celebration',
                caption: 'Clean water brings new life to a community.',
              },
              {
                src: '/images/universal/gallery8.jpg',
                alt: 'Women entrepreneurs meeting',
                caption: 'Microfinance creates economic independence.',
              },
              {
                src: '/images/universal/hero.jpg',
                alt: 'Mobile health clinic',
                caption: 'Healthcare reaches the most remote communities.',
              },
              {
                src: '/images/universal/about.jpg',
                alt: 'Farmer with solar irrigation',
                caption: 'Climate-resilient farming in action.',
              },
              {
                src: '/images/universal/gallery1.jpg',
                alt: 'Emergency relief distribution',
                caption: 'Responding to communities in crisis.',
              },
              {
                src: '/images/universal/hero.jpg',
                alt: 'Community meeting',
                caption: 'Community-led planning sessions.',
              },
              {
                src: '/images/universal/about.jpg',
                alt: 'School construction',
                caption: 'Building schools, building futures.',
              },
              {
                src: '/images/universal/gallery2.jpg',
                alt: 'Children playing',
                caption: 'Joy is a universal language.',
              },
              {
                src: '/images/universal/gallery3.jpg',
                alt: 'Library books',
                caption: 'A library opens doors to infinite possibilities.',
              },
              {
                src: '/images/universal/gallery4.jpg',
                alt: 'Teacher training',
                caption: 'Investing in teachers, transforming education.',
              },
              {
                src: '/images/universal/gallery5.jpg',
                alt: 'STEM education',
                caption: 'Girls building robots and breaking barriers.',
              },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered',
            theme: 'dark',
            animation: 'fade',
            background: 'solid',
            backgroundValue: '#1a1917',
            padding: 'large',
            visible: true,
            heading: 'Follow our journey',
            description:
              'Follow us on social media for daily stories of impact from communities around the world.',
            primaryCta: { label: 'Follow on Instagram', href: '#', variant: 'primary' as const },
            secondaryCta: {
              label: 'Visit YouTube Channel',
              href: '#',
              variant: 'outline' as const,
            },
          },
        },
      ],
    },

    donate: {
      seo: {
        title: 'Donate â€” Kindonar Foundation',
        description:
          'Your donation creates ripples of change. 96% of every dollar goes directly to programs that save lives, build schools, drill wells, and empower communities.',
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center',
            theme: 'dark',
            animation: 'scale',
            background: 'image',
            backgroundValue: '/images/universal/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Your generosity changes everything',
              subtitle: 'Make a Donation',
              description:
                'Every contribution â€” no matter the size â€” creates ripples of impact that reach families, communities, and generations.',
              tag: 'Donate',
            },
            backgroundImage: { src: '/images/universal/hero.jpg', alt: 'Community celebration' },
            trustBadges: [
              {
                src: '/images/trust/default.svg',
                alt: '96% of funds go directly to programs',
                name: '96% Program Efficiency',
              },
              {
                src: '/images/trust/charity-navigator.svg',
                alt: 'Charity Navigator 4-Star Rating',
                name: 'Charity Navigator 4-Star',
              },
              {
                src: '/images/trust/gold-transparency.svg',
                alt: 'Candid Gold Transparency 2026',
                name: 'Gold Transparency 2026',
              },
            ],
            overlayOpacity: 0.5,
          },
        },
        {
          type: 'donationJourney',
          config: {
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: {
              title: 'How your donation creates change',
              subtitle: 'Your Impact Journey',
              description:
                'From your first gift to the lasting impact it creates â€” here is how your generosity transforms lives.',
            },
            steps: [
              {
                icon: '',
                title: 'You Give',
                description:
                  'You make a secure donation â€” one-time or monthly. Every dollar is tracked with full transparency.',
              },
              {
                icon: '',
                title: 'We Allocate',
                description:
                  '96% goes directly to programs. The remaining 4% funds essential operations and fundraising.',
              },
              {
                icon: '',
                title: 'Programs Activate',
                description:
                  'Your funds power schools, health clinics, water wells, and training programs in communities.',
              },
              {
                icon: '',
                title: 'Lives Transform',
                description:
                  'Children learn, families thrive, communities grow stronger. Impact ripples outward for generations.',
              },
              {
                icon: '',
                title: 'We Report Back',
                description:
                  'You receive regular updates, impact reports, and stories showing exactly what your generosity achieved.',
              },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'donate',
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: 'Choose your impact level',
            description:
              'Select a donation amount or enter a custom amount. 96 cents of every dollar goes directly to programs that change lives.',
            primaryCta: { label: 'Donate Monthly', href: '#', variant: 'primary' as const },
            secondaryCta: { label: 'One-Time Gift', href: '#', variant: 'outline' as const },
            donateAmounts: [25, 50, 100, 250, 500, 1000, 2500, 5000],
          },
        },
        {
          type: 'impact',
          config: {
            theme: 'light',
            animation: 'fade',
            background: 'muted',
            backgroundValue: '#fdf8f3',
            padding: 'large',
            visible: true,
            layout: 'cards',
            heading: { title: 'See what your gift can accomplish', subtitle: 'Gift Impact Guide' },
            stats: [
              {
                value: 25,
                prefix: '$',
                label: 'Provides school supplies for one child for a full year',
              },
              { value: 50, prefix: '$', label: 'Feeds a family of five for one month' },
              { value: 100, prefix: '$', label: 'Trains one community health worker' },
              { value: 500, prefix: '$', label: 'Funds a clean water well for an entire village' },
              {
                value: 1000,
                prefix: '$',
                label: 'Builds a classroom that will educate 50 children annually',
              },
              { value: 5000, prefix: '$', label: 'Supports an entire school for one year' },
            ],
          },
        },
        {
          type: 'testimonials',
          config: {
            theme: 'light',
            animation: 'scale',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: { title: 'Hear from our community of supporters', subtitle: 'Donor Stories' },
            layout: 'cards',
            testimonials: [
              {
                quote:
                  'I started donating $25 a month five years ago. Knowing that my small monthly gift sends a child to school gives me a sense of purpose that no purchase ever could.',
                name: 'Margaret Collins',
                role: 'Monthly Donor since 2021',
                avatar: { src: '/images/universal/gallery4.jpg', alt: 'Margaret Collins' },
              },
              {
                quote:
                  'When I visited a Kindonar project in Senegal and saw the well my donation had funded â€” and the children drinking clean water for the first time â€” I wept. That moment changed my life.',
                name: 'David Park',
                role: 'Major Donor',
                avatar: { src: '/images/universal/gallery5.jpg', alt: 'David Park' },
              },
              {
                quote:
                  'What sets Kindonar apart is their transparency. I can see exactly where my money goes through their public financial reports. That level of accountability is rare and deeply appreciated.',
                name: 'Amara Osei',
                role: 'Legacy Circle Member',
                avatar: { src: '/images/universal/hero.jpg', alt: 'Amara Osei' },
              },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'banner',
            theme: 'dark',
            animation: 'fade',
            background: 'gradient',
            backgroundValue: 'linear-gradient(135deg, #1a1917 0%, #2a2a80 100%)',
            padding: 'large',
            visible: true,
            heading: 'Every dollar creates ripples that span generations',
            description:
              'Join 50,000+ monthly donors who are powering sustainable change worldwide.',
            primaryCta: { label: 'Start Donating Today', href: '#', variant: 'primary' as const },
          },
        },
      ],
    },

    volunteer: {
      seo: {
        title: 'Volunteer â€” Kindonar Foundation',
        description:
          'Join our global volunteer community and make a tangible difference in communities worldwide.',
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'split',
            theme: 'dark',
            animation: 'scale',
            background: 'image',
            backgroundValue: '/images/universal/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Lend your time, change a life â€” including your own',
              subtitle: 'Volunteer With Us',
              description:
                'Whether you have a week or a year to give, your skills and passion can transform communities â€” and the experience will transform you.',
              tag: 'Volunteer',
            },
            backgroundImage: {
              src: '/images/universal/hero.jpg',
              alt: 'Volunteers working alongside community members',
            },
            stats: [
              { value: 15000, suffix: '+', label: 'Active Volunteers' },
              { value: 45, label: 'Countries' },
              { value: 500000, suffix: '+', label: 'Hours Contributed' },
              { value: 92, suffix: '%', label: 'Would Recommend' },
            ],
            overlayOpacity: 0.5,
          },
        },
        {
          type: 'about',
          config: {
            theme: 'light',
            animation: 'stagger',
            background: 'muted',
            backgroundValue: '#fdf8f3',
            padding: 'large',
            visible: true,
            variant: 'story',
            body: [
              'Volunteering with Kindonar is more than a trip â€” it is a transformative experience that connects you with communities, cultures, and causes that need your unique skills.',
              'Our volunteer programs are designed to be mutually beneficial: communities gain valuable expertise and labor, while volunteers gain perspective, skills, and lifelong connections. Whether you are a medical professional, teacher, engineer, or simply someone with a willing heart, there is a place for you.',
            ],
            image: {
              src: '/images/universal/about.jpg',
              alt: 'Volunteers building a school alongside community members',
            },
          },
        },
        {
          type: 'volunteerJourney',
          config: {
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: { title: 'Your volunteer journey', subtitle: 'How It Works' },
            steps: [
              {
                icon: '',
                title: 'Explore Opportunities',
                description:
                  'Browse our volunteer programs across 45 countries. Filter by skill area, duration, and region to find your perfect match.',
              },
              {
                icon: '',
                title: 'Submit Application',
                description:
                  'Complete our simple online application. Our dedicated volunteer coordinators will guide you through every step.',
              },
              {
                icon: '',
                title: 'Prepare for Impact',
                description:
                  'Attend comprehensive orientation sessions covering cultural context, program details, health and safety, and language basics.',
              },
              {
                icon: '',
                title: 'Make a Difference',
                description:
                  "Work alongside community members on projects that create lasting impact. Your skills meet the world's greatest needs.",
              },
              {
                icon: '',
                title: 'Become an Ambassador',
                description:
                  'Return home with a transformed perspective. Share your story, inspire others, and stay connected to the communities you served.',
              },
            ],
          },
        },
        {
          type: 'faq',
          config: {
            theme: 'light',
            animation: 'fade',
            background: 'muted',
            backgroundValue: '#faf6f1',
            padding: 'large',
            visible: true,
            heading: { title: 'Volunteer FAQ', subtitle: 'Common Questions' },
            layout: 'default',
            allowMultiple: false,
            variant: 'bordered' as const,
            items: [
              {
                title: 'How long do volunteer placements typically last?',
                content:
                  'We offer flexible placements ranging from two weeks to twelve months. The duration depends on the program and your availability.',
              },
              {
                title: 'What skills are most needed?',
                content:
                  'We need medical professionals, educators, engineers, agricultural specialists, IT professionals, project managers, and administrative support. However, we welcome volunteers from all backgrounds.',
              },
              {
                title: 'Is there a cost to volunteer?',
                content:
                  'Volunteers are responsible for their travel and accommodation costs. Typical costs range from $1,500 to $3,500 depending on location and duration.',
              },
              {
                title: 'Do I need to speak a second language?',
                content:
                  'English is the working language across all our programs. Knowledge of local languages is beneficial but not required.',
              },
              {
                title: 'Are families and groups welcome?',
                content:
                  'Absolutely! We offer family-friendly programs and group volunteer opportunities for universities, corporations, and community organizations.',
              },
              {
                title: 'Is there an age requirement?',
                content:
                  'Most programs require volunteers to be 18 or older. However, we offer youth programs for volunteers aged 16-18 with parental consent.',
              },
            ],
          },
        },
        {
          type: 'testimonials',
          config: {
            theme: 'light',
            animation: 'scale',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: { title: 'Hear from our volunteers', subtitle: 'Volunteer Stories' },
            layout: 'carousel',
            testimonials: [
              {
                quote:
                  'I spent six months training community health workers in rural Malawi. The experience fundamentally changed how I practice medicine â€” and how I see the world.',
                name: 'Dr. Emily Chen',
                role: 'Medical Volunteer, Malawi 2024',
                avatar: { src: '/images/universal/hero.jpg', alt: 'Dr. Emily Chen' },
              },
              {
                quote:
                  'As an engineer, I designed a solar-powered water filtration system for a village in Honduras. Seeing families drink clean water for the first time was the most rewarding moment of my career.',
                name: 'Carlos Rivera',
                role: 'Engineering Volunteer, Honduras 2023',
                avatar: { src: '/images/universal/about.jpg', alt: 'Carlos Rivera' },
              },
              {
                quote:
                  'My university group spent spring break building classrooms in Guatemala. We arrived as students and left as architects of change â€” literally and figuratively.',
                name: 'Sophie Thompson',
                role: 'Student Volunteer, Guatemala 2025',
                avatar: { src: '/images/universal/about.jpg', alt: 'Sophie Thompson' },
              },
              {
                quote:
                  'I retired from teaching and thought my best years were behind me. Volunteering with Kindonar showed me that the best way to teach is to learn alongside those you serve.',
                name: 'Robert Chen',
                role: 'Education Volunteer, Nepal 2024',
                avatar: { src: '/images/universal/gallery6.jpg', alt: 'Robert Chen' },
              },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'volunteer',
            theme: 'dark',
            animation: 'fade',
            background: 'solid',
            backgroundValue: '#1a1917',
            padding: 'large',
            visible: true,
            heading: 'Ready to make a difference?',
            description:
              'Apply today to join our global volunteer community. Your journey starts here.',
            primaryCta: { label: 'Apply to Volunteer', href: '#', variant: 'primary' as const },
            secondaryCta: {
              label: 'Download Volunteer Guide',
              href: '#',
              variant: 'outline' as const,
            },
          },
        },
      ],
    },

    news: {
      seo: {
        title: 'News & Stories â€” Kindonar Foundation',
        description:
          'Read the latest news, impact stories, and updates from our programs around the world.',
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center',
            theme: 'dark',
            animation: 'scale',
            background: 'image',
            backgroundValue: '/images/universal/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Stories that inform, inspire, and connect us',
              subtitle: 'News & Updates',
              description:
                'Stay informed about our latest programs, success stories, research findings, and the communities we serve across 45 countries.',
              tag: 'News',
            },
            backgroundImage: {
              src: '/images/universal/hero.jpg',
              alt: 'Journalist interviewing community members',
            },
            overlayOpacity: 0.5,
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
            heading: { title: 'Latest stories from the field', subtitle: 'News & Features' },
            layout: 'magazine',
            articles: [
              {
                title:
                  'Education Initiative Reaches One Million Children Across Sub-Saharan Africa',
                slug: 'education-initiative-one-million',
                date: '2026-06-28',
                category: 'Education',
                excerpt:
                  'Providing quality education to over one million children across 28 countries in Sub-Saharan Africa.',
                image: '/images/universal/gallery5.jpg',
                author: { name: 'Aisha Mohammed', role: 'Education Program Director' },
              },
              {
                title: 'Solar-Powered Water System Transforms Rural Senegal',
                slug: 'solar-water-system-senegal',
                date: '2026-06-15',
                category: 'Water & Sanitation',
                excerpt:
                  'Clean drinking water to 15,000 residents in ThiÃ¨s, Senegal through innovative solar filtration.',
                image: '/images/universal/gallery6.jpg',
                author: { name: 'Mamadou Diallo', role: 'WASH Program Lead' },
              },
              {
                title: 'Women Entrepreneurs Network Reaches 10,000 Members',
                slug: 'women-entrepreneurs-10000',
                date: '2026-05-30',
                category: 'Gender Equality',
                excerpt:
                  '40% average increase in household income for members across 12 countries.',
                image: '/images/universal/gallery7.jpg',
                author: { name: 'Dr. Maria Santos', role: 'Gender Equity Director' },
              },
              {
                title: 'Emergency Response Deploys to Bangladesh Floods',
                slug: 'emergency-response-bangladesh',
                date: '2026-05-18',
                category: 'Emergency Response',
                excerpt:
                  'Delivering food, clean water, and medical supplies to 200,000 displaced people.',
                image: '/images/universal/hero.jpg',
                author: { name: 'Rajesh Sharma', role: 'Emergency Response Lead' },
              },
              {
                title: 'Maternal Mortality Reduced by 45% in Rural Nigeria',
                slug: 'maternal-mortality-nigeria',
                date: '2026-04-05',
                category: 'Healthcare',
                excerpt:
                  'Community health worker program shows remarkable results in northern Nigeria.',
                image: '/images/universal/about.jpg',
                author: { name: 'Dr. Sarah Okafor', role: 'Community Health Director' },
              },
              {
                title: 'Annual Impact Report Shows 96% Program Efficiency',
                slug: 'annual-impact-report',
                date: '2026-04-20',
                category: 'Transparency',
                excerpt:
                  'Maintaining commitment to radical transparency for third consecutive year.',
                image: '/images/universal/gallery8.jpg',
                author: { name: 'Sarah Mitchell', role: 'Chief Financial Officer' },
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
            backgroundValue: '#faf6f1',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Never miss a story',
              subtitle: 'Subscribe',
              description:
                'Get our monthly newsletter delivered to your inbox with impact stories, program updates, and opportunities.',
            },
            title: 'The Kindonar Chronicle',
            description: 'Monthly stories of impact from communities around the world.',
            placeholder: 'Enter your email address',
            buttonLabel: 'Subscribe Free',
            successMessage: 'Thank you! Please check your email to confirm your subscription.',
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
            heading: 'Share your story',
            description:
              'Have a story to share about our work? We welcome guest contributions from volunteers, partners, and community members.',
            primaryCta: { label: 'Submit a Story', href: '#', variant: 'primary' as const },
            secondaryCta: { label: 'Media Inquiries', href: '#', variant: 'ghost' as const },
          },
        },
      ],
    },

    contact: {
      seo: {
        title: 'Contact Us â€” Kindonar Foundation',
        description:
          'Get in touch with our team. We welcome your questions, partnership inquiries, and feedback.',
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center',
            theme: 'dark',
            animation: 'scale',
            background: 'image',
            backgroundValue: '/images/universal/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'We would love to hear from you',
              subtitle: 'Contact Us',
              description:
                'Whether you have a question about our programs, want to explore a partnership, or need support â€” our team is here to help.',
              tag: 'Contact',
            },
            backgroundImage: {
              src: '/images/universal/hero.jpg',
              alt: 'Kindonar team at headquarters',
            },
            overlayOpacity: 0.5,
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'contact',
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: 'Get in touch',
            description: 'Our team typically responds within 24 hours.',
            email: 'info@kindonar.org',
            phone: '+1 (800) 555-0199',
            address: '1250 International Drive, Suite 400, Washington, DC 20036',
            primaryCta: { label: 'Send Message', href: '#', variant: 'primary' as const },
          },
        },
        {
          type: 'faq',
          config: {
            theme: 'light',
            animation: 'fade',
            background: 'muted',
            backgroundValue: '#fdf8f3',
            padding: 'large',
            visible: true,
            heading: { title: 'Frequently asked questions', subtitle: 'FAQ' },
            layout: 'default',
            allowMultiple: false,
            variant: 'bordered' as const,
            items: [
              {
                title: 'How can I partner with Kindonar Foundation?',
                content:
                  'We welcome partnerships with corporations, foundations, governments, and other NGOs. Please contact our partnerships team at partnerships@kindonar.org.',
              },
              {
                title: 'How do I request support or report an issue?',
                content:
                  'Contact our programs team at programs@kindonar.org or call +1 (800) 555-0199.',
              },
              {
                title: 'Where can I find financial reports?',
                content:
                  'Our annual reports, audited financial statements, and Form 990 are publicly available on our Transparency page.',
              },
              {
                title: 'How are donations processed and used?',
                content:
                  '96% of every dollar goes directly to program implementation. The remaining 4% covers fundraising and administrative costs.',
              },
              {
                title: 'Can I visit a program site?',
                content:
                  'Yes! We offer program site visits for donors, partners, and journalists. Contact our communications team at visits@kindonar.org.',
              },
              {
                title: 'How can I join the Kindonar team?',
                content:
                  'Visit our Careers page to view current openings. We post positions in program management, finance, communications, and more.',
              },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered',
            theme: 'dark',
            animation: 'fade',
            background: 'solid',
            backgroundValue: '#1a1917',
            padding: 'large',
            visible: true,
            heading: 'Start a conversation',
            description: 'Our team typically responds within 24 hours.',
            primaryCta: { label: 'Call Us', href: 'tel:+18005550199', variant: 'primary' as const },
            secondaryCta: {
              label: 'Email Us',
              href: 'mailto:info@kindonar.org',
              variant: 'outline' as const,
            },
          },
        },
      ],
    },
  },
};
