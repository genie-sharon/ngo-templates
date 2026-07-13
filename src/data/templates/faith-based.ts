import type { TemplateData } from './types';

const ORG = 'Sacred Community Alliance';
const BASE = `/templates/faith-based`;

const nav = {
  layout: 'transparent' as const,
  logo: { text: ORG, href: '/' },
  menuItems: [
    { label: 'Home', href: BASE },
    { label: 'About', href: `${BASE}/about` },
    { label: 'Programs', href: `${BASE}/programs` },
    { label: 'Events', href: `${BASE}/events` },
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
    { code: 'es', label: 'EspaÃ±ol' },
  ],
  sticky: true,
  theme: 'dark' as const,
};

const footer = {
  layout: 'large' as const,
  theme: 'dark' as const,
  animation: 'fade' as const,
  background: 'solid' as const,
  backgroundValue: '#1e1b4b',
  padding: 'large' as const,
  visible: true,
  logo: { src: null, alt: ORG, width: 160, height: 40 },
  description:
    'A global community of faith uniting across traditions to serve the vulnerable, uplift communities, and foster peace, compassion, and understanding.',
  columns: [
    {
      title: 'Our Community',
      links: [
        { label: 'About Us', href: `${BASE}/about` },
        { label: 'Our Programs', href: `${BASE}/programs` },
        { label: 'Leadership', href: `${BASE}/about` },
        { label: 'Careers', href: '#' },
      ],
    },
    {
      title: 'Get Involved',
      links: [
        { label: 'Donate', href: `${BASE}/donate` },
        { label: 'Volunteer', href: `${BASE}/volunteer` },
        { label: 'Prayer Requests', href: `${BASE}/prayer` },
        { label: 'Events', href: `${BASE}/events` },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Articles', href: `${BASE}/resources` },
        { label: 'Sermons & Talks', href: `${BASE}/resources` },
        { label: 'News', href: `${BASE}/news` },
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

export const faithBasedTemplate: TemplateData = {
  slug: 'faith-based',
  name: 'Faith-Based Organization',
  tagline: 'Unity in compassion, strength in service',
  description:
    'A reverent, warm, and elegant design for faith-based organizations of all traditions. Features deep indigo and warm gold palette with Lora serif headings. Includes community outreach, interfaith programs, youth ministry, food distribution, and international missions.',
  themeId: 'faith',
  mood: 'Peaceful, reverent, hopeful, welcoming, trustworthy',
  illustrationStyle:
    'Community photography, interfaith gatherings, warm tones with soft organic shapes',
  motionStyle: 'Graceful, serene transitions with fade-in and gentle scroll-reveal effects',
  navigation: nav,
  footer: footer,
  pages: {
    home: {
      seo: {
        title: `Home â€” ${ORG}`,
        description: `${ORG} unites communities across faith traditions through service, compassion, and hope. Join us in making a difference.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'split' as const,
            theme: 'dark',
            animation: 'hero',
            background: 'image',
            backgroundValue: '/images/faith/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Compassion Unites Us All',
              subtitle: ORG,
              description:
                "We bring together diverse faith communities to serve the vulnerable, uplift the oppressed, and spread hope. Your hands can be the answer to someone's prayer.",
              tag: 'Serving Communities Since 2001',
            },
            backgroundImage: {
              src: '/images/faith/hero.jpg',
              alt: 'Interfaith community service gathering',
            },
            stats: [
              { value: 500000, suffix: '+', label: 'Lives Touched' },
              { value: 300, suffix: '+', label: 'Faith Communities' },
              { value: 15000, suffix: '+', label: 'Active Volunteers' },
            ],
            trustBadges: [
              { src: '/images/trust/charity-navigator.svg', alt: 'Charity Navigator' },
              { src: '/images/trust/guidestar.svg', alt: 'GuideStar' },
              { src: '/images/trust/gold-transparency.svg', alt: 'Gold Transparency' },
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
              title: 'Our Community in Numbers',
              tag: 'Impact',
              alignment: 'center' as const,
            },
            stats: [
              { value: 500000, suffix: '+', label: 'Community Members Served' },
              { value: 15000, suffix: '+', label: 'Active Volunteers' },
              { value: 1500, suffix: '+', label: 'Annual Events & Gatherings' },
              { value: 300, suffix: '+', label: 'Partner Faith Communities' },
              { value: 2000000, suffix: '+', label: 'Meals Distributed' },
              { value: 50000, suffix: '+', label: 'Families Supported Annually' },
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
            heading: { title: 'Our Mission & Vision', tag: 'About Us', alignment: 'left' as const },
            body: [
              `${ORG} was founded in 2001 by a coalition of leaders from diverse faith traditions united by a single conviction: that compassion is the universal language of the divine.`,
              'What began as small interfaith food distributions has grown into a global movement of 300+ faith communities working together across 35 countries to serve the most vulnerable among us.',
              'We believe that every tradition calls us to care for the stranger, feed the hungry, shelter the homeless, and love our neighbour. Our work is a living expression of these shared values.',
            ],
            mission:
              'To unite diverse faith communities in compassionate service, empowering people of all beliefs to work together in healing our world and uplifting every soul in need.',
            vision:
              'A world where every person is seen, valued, and supported by a community of compassion that transcends the boundaries of belief.',
            values: [
              {
                title: 'Universal Compassion',
                description:
                  'We serve all people with unconditional love and dignity, regardless of faith, background, or belief.',
              },
              {
                title: 'Interfaith Unity',
                description:
                  'We celebrate our diversity while uniting around our shared commitment to serve the vulnerable.',
              },
              {
                title: 'Faithful Stewardship',
                description:
                  'We honor every gift entrusted to us with transparency, integrity, and accountable management.',
              },
              {
                title: 'Sustainable Impact',
                description:
                  'We empower communities to build lasting solutions that continue transforming lives for generations.',
              },
            ],
            image: { src: '/images/faith/hero.jpg', alt: 'Interfaith volunteers serving together' },
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
              title: 'Our Programs & Ministries',
              subtitle: 'Discover how we serve communities through faith-driven action.',
              tag: 'What We Do',
              alignment: 'center' as const,
            },
            programs: [
              {
                id: 'community-outreach',
                title: 'Community Outreach',
                description:
                  'Meeting immediate needs through clothing drives, housing assistance, addiction recovery support, and compassionate pastoral counseling for all.',
                image: { src: '/images/faith/gallery3.jpg', alt: 'Community outreach volunteers' },
                category: 'Outreach',
                impactStat: '200K+ people reached annually',
                cta: { label: 'Learn More', href: `${BASE}/programs` },
                featured: true,
              },
              {
                id: 'food-distribution',
                title: 'Food Distribution Network',
                description:
                  'A network of faith-run food pantries, mobile markets, and community kitchens ensuring no one in our communities goes hungry.',
                image: { src: '/images/faith/gallery4.jpg', alt: 'Food distribution' },
                category: 'Food Security',
                impactStat: '2M+ meals distributed',
                cta: { label: 'Learn More', href: `${BASE}/programs` },
              },
              {
                id: 'youth-ministry',
                title: 'Youth & Intergenerational Programs',
                description:
                  'After-school mentorship, leadership camps, interfaith youth dialogues, and safe spaces for young people to grow in wisdom and compassion.',
                image: { src: '/images/faith/gallery5.jpg', alt: 'Youth program' },
                category: 'Youth',
                impactStat: '50K+ youth served',
                cta: { label: 'Learn More', href: `${BASE}/programs` },
              },
              {
                id: 'education',
                title: 'Education & Scholarship',
                description:
                  'Providing access to education through scholarships, tutoring programs, adult literacy classes, and vocational training for underserved communities.',
                image: { src: '/images/faith/gallery6.jpg', alt: 'Education program' },
                category: 'Education',
                impactStat: '10K+ students supported',
                cta: { label: 'Learn More', href: `${BASE}/programs` },
              },
              {
                id: 'family-support',
                title: 'Family Support Services',
                description:
                  'Comprehensive support for families including parenting workshops, counseling, emergency assistance, and refugee resettlement programs.',
                image: { src: '/images/faith/gallery7.jpg', alt: 'Family support' },
                category: 'Family',
                impactStat: '50K+ families supported',
                cta: { label: 'Learn More', href: `${BASE}/programs` },
              },
              {
                id: 'elder-care',
                title: 'Elder Care & Companionship',
                description:
                  'Visiting the isolated, providing meal delivery, transportation to services, and building community among seniors across all traditions.',
                image: { src: '/images/faith/gallery8.jpg', alt: 'Elder care' },
                category: 'Elder Care',
                impactStat: '15K+ seniors served',
                cta: { label: 'Learn More', href: `${BASE}/programs` },
              },
            ],
            showCategoryBadges: true,
            showImpactStats: true,
          },
        },
        {
          type: 'events',
          config: {
            theme: 'light',
            animation: 'fade-in-up',
            background: 'muted',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Upcoming Gatherings & Events',
              subtitle:
                'Join us for worship, fellowship, service, and celebration across traditions.',
              tag: 'Events',
              alignment: 'center' as const,
            },
            events: [
              {
                id: 'e1',
                title: 'Interfaith Peace Gathering',
                description:
                  'An evening of prayer, meditation, and reflection as leaders from diverse traditions come together to pray for peace.',
                date: '2026-08-15',
                time: '7:00 PM',
                location: 'Unity Gardens, Downtown',
                category: 'Prayer Meeting',
                featured: true,
              },
              {
                id: 'e2',
                title: 'Annual Community Food Drive',
                description:
                  'Our largest food collection of the year. Join hundreds of volunteers as we stock pantries for the winter months.',
                date: '2026-09-20',
                time: '8:00 AM',
                location: 'All Partner Locations',
                category: 'Service Event',
              },
              {
                id: 'e3',
                title: 'Sacred Music & Arts Festival',
                description:
                  "A celebration of the world's spiritual traditions through music, art, dance, and storytelling.",
                date: '2026-10-05',
                time: '10:00 AM',
                location: 'Peace Plaza',
                category: 'Festival',
              },
              {
                id: 'e4',
                title: 'Youth Leadership Retreat',
                description:
                  'A weekend of inspiration, skill-building, and connection for young leaders from all faith traditions.',
                date: '2026-11-10',
                time: '3:00 PM',
                location: 'Mountain Retreat Center',
                category: 'Retreat',
              },
              {
                id: 'e5',
                title: 'Compassion in Action Workshop',
                description:
                  'Practical training on trauma-informed care, active listening, and serving diverse communities with dignity.',
                date: '2026-07-25',
                time: '9:00 AM',
                location: 'Community Hall',
                category: 'Workshop',
              },
              {
                id: 'e6',
                title: 'Interfaith Thanksgiving Service',
                description:
                  'A multi-tradition gratitude celebration bringing together communities to give thanks and share a meal.',
                date: '2026-11-26',
                time: '6:00 PM',
                location: 'Grand Cathedral',
                category: 'Prayer Meeting',
              },
            ],
            showCountdown: true,
          },
        },
        {
          type: 'successStories',
          config: {
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Community Stories of Transformation',
              subtitle: 'Real lives changed through the power of community compassion.',
              tag: 'Impact Stories',
              alignment: 'center' as const,
            },
            stories: [
              {
                name: 'Amara Osei',
                role: 'Program Participant, Ghana',
                image: { src: '/images/faith/hero.jpg', alt: 'Amara Osei' },
                quote:
                  'When my family lost everything, the community food program kept us fed. But more than food, they gave us hope. People from different faiths prayed with us, supported us, and helped us rebuild our lives.',
                impactStat: '500K',
                impactLabel: 'Lives Touched',
              },
              {
                name: 'Father Miguel Torres',
                role: 'Partner Priest, Colombia',
                image: { src: '/images/faith/gallery1.jpg', alt: 'Father Miguel Torres' },
                quote:
                  'Our small parish was struggling to serve our community. This alliance brought resources, volunteers, and brothers and sisters from other traditions. Together, our impact multiplied beyond anything we could have done alone.',
                impactStat: '300+',
                impactLabel: 'Partner Communities',
              },
              {
                name: 'Priya Sharma',
                role: 'Youth Mentor, India',
                image: { src: '/images/faith/gallery3.jpg', alt: 'Priya Sharma' },
                quote:
                  'I grew up in this program. Now I am a mentor myself, giving back to the next generation. This community showed me that compassion has no borders and no boundaries. It is simply what connects us all.',
                impactStat: '50K',
                impactLabel: 'Youth Mentored',
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
            heading: {
              title: 'Words from Our Community',
              subtitle:
                'Hear from the people we serve, the volunteers who give, and the leaders who guide us.',
              tag: 'Testimonials',
              alignment: 'center' as const,
            },
            layout: 'carousel' as const,
            testimonials: [
              {
                quote:
                  'This organization showed me that faith is not about what divides us, but about what we can accomplish together. Serving alongside people from different traditions has deepened my own faith in ways I never expected.',
                name: 'David Cohen',
                role: 'Volunteer Coordinator',
                avatar: { src: '/images/faith/gallery4.jpg', alt: 'David Cohen' },
              },
              {
                quote:
                  'When my husband lost his job, the family support program was there for us. Not just with groceries, but with counseling, job training, and a community that surrounded us with love.',
                name: 'Maria Gonzalez',
                role: 'Program Participant',
                avatar: { src: '/images/faith/gallery5.jpg', alt: 'Maria Gonzalez' },
              },
              {
                quote:
                  'The interfaith youth camp transformed my teenage daughter. She came home with new friends, a broader perspective, and a passion for service that she carries with her every day.',
                name: 'Ahmed Hassan',
                role: 'Parent',
                avatar: { src: '/images/faith/gallery6.jpg', alt: 'Ahmed Hassan' },
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
              title: 'Moments of Grace',
              subtitle: 'Glimpses of community, service, and celebration across our global family.',
              tag: 'Gallery',
              alignment: 'center' as const,
            },
            layout: 'grid' as const,
            images: [
              { src: '/images/faith/gallery4.jpg', alt: 'Interfaith service event' },
              { src: '/images/faith/hero.jpg', alt: 'Food distribution volunteers' },
              { src: '/images/faith/gallery5.jpg', alt: 'Youth camp activities' },
              { src: '/images/faith/gallery8.jpg', alt: 'Community celebration' },
              { src: '/images/faith/gallery6.jpg', alt: 'Volunteers serving meals' },
              { src: '/images/faith/gallery7.jpg', alt: 'Peace march' },
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
              title: 'Resources for Your Journey',
              subtitle:
                'Articles, sermons, podcasts, and guides to inspire and equip your faith in action.',
              tag: 'Resources',
              alignment: 'center' as const,
            },
            resources: [
              {
                id: 'r1',
                title: 'Finding Common Ground: A Guide to Interfaith Service',
                description:
                  'Practical wisdom for building bridges across traditions while serving together.',
                type: 'article' as const,
                url: `${BASE}/resources`,
                category: 'Interfaith',
                image: '/images/faith/hero.jpg',
              },
              {
                id: 'r2',
                title: 'The Compassion Imperative â€” A Sermon Series',
                description:
                  'Inspiring talks on the call to compassion found across all spiritual traditions.',
                type: 'video' as const,
                url: `${BASE}/resources`,
                category: 'Sermons',
                image: '/images/faith/gallery3.jpg',
              },
              {
                id: 'r3',
                title: 'Voices of Service Podcast',
                description:
                  'Monthly conversations with faith leaders, volunteers, and community members transforming lives.',
                type: 'podcast' as const,
                url: `${BASE}/resources`,
                category: 'Podcast',
                image: '/images/faith/gallery1.jpg',
              },
              {
                id: 'r4',
                title: 'Community Organizing Toolkit',
                description:
                  'Downloadable guides, templates, and checklists for starting your own interfaith service project.',
                type: 'download' as const,
                url: `${BASE}/resources`,
                category: 'Toolkit',
              },
              {
                id: 'r5',
                title: 'Sacred Texts on Service: A Comparative Reader',
                description:
                  "Passages on compassion, justice, and service from the world's great spiritual traditions.",
                type: 'article' as const,
                url: `${BASE}/resources`,
                category: 'Study',
                image: '/images/faith/gallery3.jpg',
              },
              {
                id: 'r6',
                title: 'Mental Health & Spiritual Care Guide',
                description:
                  'A compassionate resource for supporting emotional wellbeing within faith communities.',
                type: 'download' as const,
                url: `${BASE}/resources`,
                category: 'Wellness',
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
              title: 'Our Partner Organizations',
              tag: 'Partners',
              alignment: 'center' as const,
            },
            variant: 'marquee' as const,
            partners: [
              {
                name: 'World Council of Churches',
                logo: { src: '/images/partners/default.svg', alt: 'WCC' },
              },
              {
                name: 'Islamic Relief Worldwide',
                logo: { src: '/images/partners/default.svg', alt: 'Islamic Relief' },
              },
              {
                name: 'Sikh Humanitarian Alliance',
                logo: { src: '/images/partners/default.svg', alt: 'Sikh Alliance' },
              },
              {
                name: 'Caritas Internationalis',
                logo: { src: '/images/partners/default.svg', alt: 'Caritas' },
              },
              {
                name: 'World Vision',
                logo: { src: '/images/partners/default.svg', alt: 'World Vision' },
              },
              {
                name: 'Buddhist Global Relief',
                logo: { src: '/images/partners/default.svg', alt: 'Buddhist Relief' },
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
            heading: {
              title: 'Frequently Asked Questions',
              tag: 'FAQ',
              alignment: 'center' as const,
            },
            items: [
              {
                id: 'faq1',
                title: 'Do I need to belong to a specific faith to participate?',
                content:
                  'Not at all. We welcome people of all faiths and none. Our only requirement is a compassionate heart and a desire to serve.',
              },
              {
                id: 'faq2',
                title: 'How can my faith community partner with you?',
                content:
                  'Reach out through our contact page. Our partnership team will schedule an introductory meeting to explore how we can work together.',
              },
              {
                id: 'faq3',
                title: 'How are donations used?',
                content:
                  '86% of every dollar goes directly to programs and services. We are committed to transparent stewardship and publish annual reports detailing all expenditures.',
              },
              {
                id: 'faq4',
                title: 'Can I volunteer with my family?',
                content:
                  'Absolutely. Many of our programs welcome families with children. We have opportunities suitable for all ages and abilities.',
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
            heading: { title: 'Stay Connected', tag: 'Newsletter', alignment: 'center' as const },
            title: 'Join Our Community of Compassion',
            description:
              'Receive stories of hope, opportunities to serve, and resources to deepen your faith in action.',
            placeholder: 'Enter your email address',
            buttonLabel: 'Subscribe',
            successMessage: 'Thank you! You are now part of our community.',
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'dual' as const,
            heading: 'Your Journey of Compassion Starts Today',
            description: 'Whether you give, volunteer, or simply pray â€” your heart matters.',
            primaryCta: {
              label: 'Make a Donation',
              href: `${BASE}/donate`,
              variant: 'primary' as const,
            },
            secondaryCta: {
              label: 'Become a Volunteer',
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
        description: `Learn about ${ORG}'s mission, history, leadership, and our interfaith community united in service.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/faith/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Our Story',
              subtitle: 'About Us',
              description:
                'From a small interfaith gathering to a global movement of compassion â€” discover the journey that brought us together.',
              tag: 'Since 2001',
            },
            backgroundImage: {
              src: '/images/faith/hero.jpg',
              alt: 'Interfaith community gathering',
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
            heading: { title: 'Our Mission in Action', alignment: 'left' as const },
            body: [
              `${ORG} was born from a simple yet profound idea: that every faith tradition calls its followers to serve the vulnerable, and that together, we could accomplish far more than any one community alone.`,
              'In 2001, leaders from Christian, Muslim, Jewish, Hindu, Sikh, Buddhist, and other traditions gathered in a small community hall. They shared sacred texts about compassion, prayed together, and committed to joint service.',
              'Today, that vision has grown into a global network of 300+ faith communities across 35 countries, with 15,000 active volunteers serving over half a million people annually.',
              'Our programs include food distribution, youth mentorship, elder care, disaster response, refugee support, and interfaith education. Every program is designed and delivered in partnership with local faith communities.',
            ],
            mission:
              'To unite diverse faith communities in compassionate service, empowering people of all beliefs to work together in healing our world.',
            vision:
              'A world where every person is seen, valued, and supported by a community of compassion that transcends the boundaries of belief.',
            values: [
              {
                title: 'Universal Compassion',
                description:
                  'We serve all people with unconditional love and dignity, regardless of faith, background, or belief.',
              },
              {
                title: 'Interfaith Unity',
                description:
                  'We celebrate our diversity while uniting around our shared commitment to serve.',
              },
              {
                title: 'Faithful Stewardship',
                description:
                  'We honor every gift with transparency, integrity, and accountable management.',
              },
            ],
            image: { src: '/images/faith/hero.jpg', alt: 'Community service' },
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
            heading: {
              title: 'Our Journey Through the Years',
              tag: 'Timeline',
              alignment: 'center' as const,
            },
            body: [
              'From a single gathering to a global movement â€” the milestones that shaped our community.',
            ],
            mission: 'To unite diverse faith communities in compassionate service.',
            timeline: [
              {
                year: '2001',
                title: 'Founding Gathering',
                description:
                  'Leaders from 12 faith traditions gathered in a community hall, committing to serve together. The alliance was born.',
              },
              {
                year: '2003',
                title: 'First Joint Food Program',
                description:
                  'Launched the first interfaith food distribution network, serving 5,000 families in the first year.',
              },
              {
                year: '2008',
                title: 'Youth Leadership Initiative',
                description:
                  'Began interfaith youth camps and mentorship programs, building bridges between the next generation.',
              },
              {
                year: '2013',
                title: 'Global Expansion',
                description:
                  'Expanded to 20 countries through partnerships with local faith communities and organizations.',
              },
              {
                year: '2018',
                title: 'Disaster Response Network',
                description:
                  'Formed a rapid-response interfaith disaster relief network, deploying to 15 crisis zones worldwide.',
              },
              {
                year: '2024',
                title: '500,000 Lives Touched',
                description:
                  'Reached the milestone of serving half a million people annually across all programs in 35 countries.',
              },
            ],
            image: { src: '/images/faith/gallery4.jpg', alt: 'Community timeline' },
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
              title: 'Our Leadership Team',
              subtitle:
                'Guided by wisdom from diverse traditions, united in compassionate service.',
              tag: 'Leadership',
              alignment: 'center' as const,
            },
            leaders: [
              {
                name: 'Rev. Dr. Sarah Mitchell',
                role: 'Executive Director',
                image: '/images/faith/gallery4.jpg',
                bio: 'An ordained minister with 25 years of interfaith service, Dr. Mitchell leads our global strategy and partnerships.',
              },
              {
                name: 'Imam Hassan Ali',
                role: 'Director of Programs',
                image: '/images/faith/gallery5.jpg',
                bio: 'Former humanitarian aid coordinator, Imam Ali oversees all program operations across 35 countries.',
              },
              {
                name: 'Rabbi Esther Goldstein',
                role: 'Director of Interfaith Relations',
                image: '/images/faith/gallery6.jpg',
                bio: 'A respected bridge-builder, Rabbi Goldstein fosters understanding and collaboration between faith communities.',
              },
              {
                name: 'Swami Anand Krishnan',
                role: 'Director of Spiritual Care',
                image: '/images/faith/gallery7.jpg',
                bio: 'A Hindu spiritual teacher, Swami Krishnan guides our contemplative practices and interfaith dialogue.',
              },
              {
                name: 'Dr. Aisha Rahman',
                role: 'Director of Operations',
                image: '/images/faith/hero.jpg',
                bio: 'With a background in nonprofit management, Dr. Rahman ensures our operations run efficiently and ethically.',
              },
              {
                name: 'Ven. Thich Nguyen',
                role: 'Director of Community Outreach',
                image: '/images/faith/gallery3.jpg',
                bio: 'A Buddhist monk and community organizer, Ven. Nguyen leads our grassroots service initiatives worldwide.',
              },
            ],
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
            layout: 'cards' as const,
            heading: {
              title: 'Our Reach & Impact',
              tag: 'By the Numbers',
              alignment: 'center' as const,
            },
            stats: [
              { value: 35, suffix: '', label: 'Countries Served' },
              { value: 300, suffix: '+', label: 'Partner Faith Communities' },
              { value: 15000, suffix: '+', label: 'Active Volunteers' },
              { value: 500000, suffix: '+', label: 'Lives Touched Annually' },
            ],
            columns: 4,
            showIconBackground: true,
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered' as const,
            heading: 'Join Our Mission of Compassion',
            description:
              'Together, we can build a world where every person is supported by a community of love.',
            primaryCta: {
              label: 'Support Our Work',
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
        description: `Discover ${ORG}'s programs: community outreach, food distribution, youth ministry, education, family support, elder care, and more.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/faith/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Our Programs & Ministries',
              subtitle: 'Serving with Purpose',
              description:
                'From feeding the hungry to mentoring youth, every program is an expression of compassion in action.',
              tag: 'What We Do',
            },
            backgroundImage: { src: '/images/faith/hero.jpg', alt: 'Community programs' },
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
              tag: 'How We Serve',
              alignment: 'center' as const,
            },
            programs: [
              {
                id: 'community-outreach',
                title: 'Community Outreach',
                description:
                  'Meeting immediate needs through clothing, housing assistance, addiction recovery, and pastoral counseling available to all.',
                image: { src: '/images/faith/gallery3.jpg', alt: 'Outreach' },
                category: 'Outreach',
                impactStat: '200K+ reached',
                cta: { label: 'Learn More', href: `${BASE}/programs` },
                featured: true,
              },
              {
                id: 'food-distribution',
                title: 'Food Distribution Network',
                description:
                  'Food pantries, mobile markets, and community kitchens ensuring no one goes hungry.',
                image: { src: '/images/faith/gallery4.jpg', alt: 'Food program' },
                category: 'Food Security',
                impactStat: '2M+ meals',
                cta: { label: 'Learn More', href: `${BASE}/programs` },
              },
              {
                id: 'youth-ministry',
                title: 'Youth & Intergenerational Programs',
                description:
                  'After-school mentorship, leadership camps, and interfaith youth dialogues.',
                image: { src: '/images/faith/gallery5.jpg', alt: 'Youth' },
                category: 'Youth',
                impactStat: '50K+ served',
                cta: { label: 'Learn More', href: `${BASE}/programs` },
              },
              {
                id: 'education',
                title: 'Education & Scholarship',
                description:
                  'Scholarships, tutoring, adult literacy, and vocational training for underserved communities.',
                image: { src: '/images/faith/gallery6.jpg', alt: 'Education' },
                category: 'Education',
                impactStat: '10K+ students',
                cta: { label: 'Learn More', href: `${BASE}/programs` },
              },
              {
                id: 'family-support',
                title: 'Family Support Services',
                description:
                  'Parenting workshops, counseling, emergency assistance, and refugee resettlement.',
                image: { src: '/images/faith/gallery7.jpg', alt: 'Family' },
                category: 'Family',
                impactStat: '50K+ families',
                cta: { label: 'Learn More', href: `${BASE}/programs` },
              },
              {
                id: 'elder-care',
                title: 'Elder Care & Companionship',
                description:
                  'Visiting the isolated, meal delivery, transportation to services, and senior community building.',
                image: { src: '/images/faith/gallery8.jpg', alt: 'Elder' },
                category: 'Elder Care',
                impactStat: '15K+ seniors',
                cta: { label: 'Learn More', href: `${BASE}/programs` },
              },
            ],
            showCategoryBadges: true,
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
              tag: 'Get Started',
              alignment: 'center' as const,
            },
            steps: [
              {
                icon: 'Heart',
                title: 'Discover Your Passion',
                description:
                  'Explore our programs and find where your gifts can make the greatest impact.',
              },
              {
                icon: 'Users',
                title: 'Join a Team',
                description:
                  'Connect with a local program team or start one at your faith community.',
              },
              {
                icon: 'BookOpen',
                title: 'Receive Training',
                description:
                  'Attend our orientation and training sessions to serve with confidence.',
              },
              {
                icon: 'Sparkles',
                title: 'Make a Difference',
                description: 'Begin serving and experience the joy of compassion in action.',
              },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'donate' as const,
            heading: 'Support Our Programs',
            description:
              'Your generosity powers every meal, every mentorship, and every moment of compassion.',
            primaryCta: {
              label: 'Give to the Mission',
              href: `${BASE}/donate`,
              variant: 'primary' as const,
            },
            donateAmounts: [25, 50, 100, 250, 500, 1000],
          },
        },
      ],
    },

    events: {
      seo: {
        title: `Events â€” ${ORG}`,
        description: `Join ${ORG} for upcoming interfaith gatherings, prayer meetings, festivals, retreats, workshops, and community celebrations.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/faith/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Gatherings & Events',
              subtitle: 'Come Together in Community',
              description:
                'From prayer meetings to festivals, retreats to service days â€” there is a place for you here.',
              tag: 'Join Us',
            },
            backgroundImage: { src: '/images/faith/hero.jpg', alt: 'Community gathering' },
            overlayOpacity: 0.5,
          },
        },
        {
          type: 'events',
          config: {
            theme: 'light',
            animation: 'fade-in-up',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: { title: 'Upcoming Events', tag: 'Calendar', alignment: 'center' as const },
            events: [
              {
                id: 'ev1',
                title: 'Interfaith Peace Gathering',
                description:
                  'An evening of prayer, meditation, and reflection as leaders from diverse traditions come together to pray for peace.',
                date: '2026-08-15',
                time: '7:00 PM',
                location: 'Unity Gardens, Downtown',
                category: 'Prayer Meeting',
                featured: true,
                cta: { label: 'Register', href: '#' },
              },
              {
                id: 'ev2',
                title: 'Annual Community Food Drive',
                description:
                  'Our largest food collection of the year. Join hundreds of volunteers across all partner locations.',
                date: '2026-09-20',
                time: '8:00 AM - 4:00 PM',
                location: 'All Partner Locations',
                category: 'Service Event',
                cta: { label: 'Volunteer', href: '#Volunteer' },
              },
              {
                id: 'ev3',
                title: 'Sacred Music & Arts Festival',
                description:
                  "A celebration of the world's spiritual traditions through music, art, dance, and storytelling.",
                date: '2026-10-05',
                time: '10:00 AM - 8:00 PM',
                location: 'Peace Plaza',
                category: 'Festival',
                featured: true,
                cta: { label: 'Get Tickets', href: '#' },
              },
              {
                id: 'ev4',
                title: 'Youth Leadership Retreat',
                description:
                  'A weekend of inspiration, skill-building, and connection for young leaders from all faith traditions.',
                date: '2026-11-10',
                time: '3:00 PM Fri - 12:00 PM Sun',
                location: 'Mountain Retreat Center',
                category: 'Retreat',
                cta: { label: 'Apply Now', href: '#' },
              },
              {
                id: 'ev5',
                title: 'Compassion in Action Workshop',
                description:
                  'Practical training on trauma-informed care, active listening, and serving diverse communities.',
                date: '2026-07-25',
                time: '9:00 AM - 4:00 PM',
                location: 'Community Hall',
                category: 'Workshop',
                cta: { label: 'Sign Up', href: '#' },
              },
              {
                id: 'ev6',
                title: 'Interfaith Thanksgiving Service',
                description:
                  'A multi-tradition gratitude celebration bringing together communities to give thanks and share a meal.',
                date: '2026-11-26',
                time: '6:00 PM',
                location: 'Grand Cathedral',
                category: 'Prayer Meeting',
                cta: { label: 'Join Us', href: '#' },
              },
              {
                id: 'ev7',
                title: 'Meditation & Mindfulness Day',
                description:
                  'A day of silent meditation, gentle yoga, and mindfulness practices led by teachers from multiple traditions.',
                date: '2026-08-28',
                time: '6:00 AM - 6:00 PM',
                location: 'Peace Garden Sanctuary',
                category: 'Retreat',
                cta: { label: 'Register', href: '#' },
              },
              {
                id: 'ev8',
                title: 'Interfaith Youth Sports Camp',
                description:
                  'Building bridges through sports, teamwork, and interfaith friendship for youth ages 10-16.',
                date: '2026-07-10',
                time: '8:00 AM - 3:00 PM',
                location: 'Community Sports Complex',
                category: 'Youth',
                cta: { label: 'Register', href: '#' },
              },
              {
                id: 'ev9',
                title: 'World Food Day Celebration',
                description:
                  "A global celebration of our food distribution network's impact, featuring stories, music, and a community meal.",
                date: '2026-10-16',
                time: '11:00 AM - 3:00 PM',
                location: 'All Partner Locations',
                category: 'Festival',
                cta: { label: 'Find a Location', href: '#' },
              },
            ],
            showCountdown: true,
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
              title: 'Never Miss an Event',
              tag: 'Stay Informed',
              alignment: 'center' as const,
            },
            title: 'Get Event Notifications',
            description:
              'Subscribe to receive updates about upcoming gatherings, special events, and service opportunities.',
            placeholder: 'your@email.com',
            buttonLabel: 'Subscribe',
            successMessage: 'You are subscribed!',
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered' as const,
            heading: 'Have an Event Idea?',
            description:
              'We love partnering with faith communities to host events. Let us help you bring your vision to life.',
            primaryCta: {
              label: 'Propose an Event',
              href: `${BASE}/contact`,
              variant: 'primary' as const,
            },
          },
        },
      ],
    },

    volunteer: {
      seo: {
        title: `Volunteer â€” ${ORG}`,
        description: `Join ${ORG}'s volunteer community. Serve with people of all faiths to make a tangible difference.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'split' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/faith/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Volunteer With Us',
              subtitle: 'Your Hands, Your Heart, Your Community',
              description:
                'Whatever your gifts, there is a place for you. Serve alongside people from all traditions and experience the joy of compassion in action.',
              tag: 'Make a Difference',
            },
            backgroundImage: { src: '/images/faith/hero.jpg', alt: 'Volunteers serving' },
            stats: [
              { value: 15000, suffix: '+', label: 'Active Volunteers' },
              { value: 300, suffix: '+', label: 'Partner Communities' },
              { value: 1000000, suffix: '+', label: 'Service Hours Given' },
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
                title: 'Explore Opportunities',
                description:
                  'Browse our programs and find the service opportunity that matches your interests, skills, and schedule.',
              },
              {
                icon: 'ClipboardCheck',
                title: 'Sign Up & Get Trained',
                description:
                  'Complete a simple registration and attend an orientation to prepare for meaningful service.',
              },
              {
                icon: 'Heart',
                title: 'Serve With Purpose',
                description:
                  'Join a team and start making a difference. Serve alongside people from all walks of life and faith.',
              },
              {
                icon: 'Users',
                title: 'Grow & Lead',
                description:
                  'Deepen your impact by becoming a team leader, trainer, or helping start programs in your own community.',
              },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'volunteer' as const,
            heading: 'Find Your Place to Serve',
            description:
              'We need food pantry volunteers, youth mentors, elder visitors, event helpers, drivers, and more.',
            primaryCta: {
              label: 'Sign Up to Serve',
              href: `${BASE}/volunteer`,
              variant: 'primary' as const,
            },
            benefits: [
              { text: 'Serve alongside a diverse, welcoming community' },
              { text: 'Receive training and ongoing support' },
              { text: 'Flexible commitments from one-time to weekly' },
              { text: 'Make friends across traditions and cultures' },
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
            heading: {
              title: 'Hear From Our Volunteers',
              tag: 'Volunteer Stories',
              alignment: 'center' as const,
            },
            layout: 'carousel' as const,
            testimonials: [
              {
                quote:
                  'Volunteering here changed my life. I came to serve and found a family. Serving alongside people from different traditions has expanded my heart and deepened my own faith.',
                name: 'Sarah Chen',
                role: 'Food Program Volunteer, 3 years',
                avatar: { src: '/images/faith/gallery1.jpg', alt: 'Sarah Chen' },
              },
              {
                quote:
                  'I bring my children to volunteer with me. They are learning that compassion has no boundaries. This is the education I want them to have.',
                name: 'Marcus Johnson',
                role: 'Family Volunteer',
                avatar: { src: '/images/faith/gallery3.jpg', alt: 'Marcus Johnson' },
              },
              {
                quote:
                  'As a retiree, I wanted my time to matter. Twice a week I visit elders who are isolated. The gratitude in their eyes â€” there is nothing like it.',
                name: 'Helen Park',
                role: 'Elder Care Volunteer',
                avatar: { src: '/images/faith/hero.jpg', alt: 'Helen Park' },
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
                title: 'Do I need to belong to a specific faith?',
                content:
                  'No, we welcome volunteers of all faiths, spiritual paths, and none. Compassion is our only requirement.',
              },
              {
                id: 'vfaq2',
                title: 'How much time is required?',
                content:
                  'We offer flexible opportunities from one-time events to ongoing weekly commitments. Choose what works for you.',
              },
              {
                id: 'vfaq3',
                title: 'Can families volunteer together?',
                content:
                  'Yes! Many of our programs are family-friendly. We have opportunities suitable for all ages with parental supervision.',
              },
              {
                id: 'vfaq4',
                title: 'Is training provided?',
                content:
                  'Absolutely. We provide comprehensive orientation and ongoing training for all volunteer roles.',
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
        description: `Support ${ORG}'s interfaith mission. Your donation feeds the hungry, mentors youth, and serves communities worldwide.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/faith/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Give Generously',
              subtitle: 'Every Gift Transforms Lives',
              description:
                'Your generosity feeds the hungry, shelters the homeless, mentors the youth, and spreads hope to communities around the world.',
              tag: 'Make a Donation',
            },
            backgroundImage: { src: '/images/faith/hero.jpg', alt: 'Community service' },
            overlayOpacity: 0.5,
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'donate' as const,
            heading: 'Choose Your Gift',
            description:
              '100% of your donation goes directly to programs serving communities in need.',
            primaryCta: { label: 'Give Now', href: `${BASE}/donate`, variant: 'primary' as const },
            donateAmounts: [25, 50, 100, 250, 500, 1000],
            benefits: [
              { text: '86% of every dollar goes directly to programs' },
              { text: 'Your donation is tax-deductible' },
              { text: 'Receive quarterly impact updates' },
              { text: 'Join a community of monthly givers' },
            ],
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
              title: 'Annual Campaign Progress',
              tag: 'Our Goal',
              alignment: 'center' as const,
            },
            goal: 5000000,
            raised: 3750000,
            currency: 'USD',
            donorCount: 12450,
            title: '2026 Annual Compassion Fund',
            description:
              'Help us reach our goal to feed, educate, and support communities worldwide.',
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
              title: 'How Your Gift Makes an Impact',
              tag: 'Your Donation At Work',
              alignment: 'center' as const,
            },
            steps: [
              {
                icon: 'Heart',
                title: 'You Give',
                description:
                  'Your generous donation joins a river of compassion from thousands of supporters worldwide.',
              },
              {
                icon: 'TrendingUp',
                title: 'We Multiply',
                description:
                  'We partner with local faith communities who amplify your gift through volunteer networks and resources.',
              },
              {
                icon: 'Users',
                title: 'Communities Thrive',
                description:
                  'Families are fed, youth are mentored, elders are cared for, and hope is restored.',
              },
              {
                icon: 'RefreshCw',
                title: 'Impact Multiplies',
                description:
                  'Those who receive become those who give, creating an endless cycle of compassion.',
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
              title: 'See Your Impact at Every Level',
              tag: 'What Your Gift Does',
              alignment: 'center' as const,
            },
            stats: [
              { value: 25, suffix: '', prefix: '$', label: 'Provides 100 nutritious meals' },
              {
                value: 50,
                suffix: '',
                prefix: '$',
                label: 'Supports a child in mentorship for one month',
              },
              {
                value: 100,
                suffix: '',
                prefix: '$',
                label: 'Stocks a community food pantry for a week',
              },
              {
                value: 500,
                suffix: '',
                prefix: '$',
                label: 'Funds a senior companionship program for a month',
              },
            ],
            columns: 4,
            showIconBackground: true,
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
                  'I give because every tradition I know teaches that we are blessed to be a blessing. This organization lets me live that truth alongside people of all faiths.',
                name: 'James & Linda Park',
                role: 'Monthly Donors, USA',
              },
              {
                quote:
                  'I sponsor a child through their education program. Knowing my monthly gift provides school fees, books, and mentorship across religious boundaries fills me with hope.',
                name: 'Fatima Al-Rashid',
                role: 'Education Sponsor, UAE',
              },
              {
                quote:
                  "Tithing through this alliance multiplies our church's impact. We are part of something bigger than any one congregation could accomplish alone.",
                name: 'Pastor Michael Okonkwo',
                role: 'Partner Church, Nigeria',
              },
            ],
          },
        },
      ],
    },

    gallery: {
      seo: {
        title: `Gallery â€” ${ORG}`,
        description: `Photos of ${ORG}'s community service, celebrations, interfaith events, and volunteers in action.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/faith/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Gallery',
              subtitle: 'Moments of Grace',
              description:
                'Heartwarming images of community, service, celebration, and the beauty of diverse traditions united in compassion.',
              tag: 'Our Story in Pictures',
            },
            backgroundImage: { src: '/images/faith/hero.jpg', alt: 'Community celebration' },
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
            heading: { title: 'Celebrations & Community', alignment: 'center' as const },
            images: [
              { src: '/images/faith/gallery1.jpg', alt: 'Interfaith service day' },
              { src: '/images/faith/gallery2.jpg', alt: 'Volunteers packing food boxes' },
              { src: '/images/faith/gallery3.jpg', alt: 'Youth camp group photo' },
              { src: '/images/faith/gallery4.jpg', alt: 'Community celebration event' },
              {
                src: '/images/faith/gallery5.jpg',
                alt: 'Volunteers serving meals at community kitchen',
              },
              { src: '/images/faith/hero.jpg', alt: 'Interfaith peace walk' },
              { src: '/images/faith/gallery7.jpg', alt: 'Children program activities' },
              { src: '/images/faith/gallery6.jpg', alt: 'Elder care visit' },
              { src: '/images/faith/gallery8.jpg', alt: 'Volunteer appreciation ceremony' },
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
            heading: { title: 'Featured Moments', alignment: 'center' as const },
            images: [
              { src: '/images/faith/gallery8.jpg', alt: 'Annual festival celebration' },
              { src: '/images/faith/hero.jpg', alt: 'Community kitchen service' },
              { src: '/images/faith/gallery3.jpg', alt: 'Peace march gathering' },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered' as const,
            heading: 'Be Part of the Story',
            description:
              'Your hands, your heart, your community. Join us in creating more beautiful moments.',
            primaryCta: {
              label: 'Get Involved',
              href: `${BASE}/volunteer`,
              variant: 'primary' as const,
            },
            secondaryCta: {
              label: 'Share Your Photos',
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
        description: `Articles, videos, podcasts, and downloads from ${ORG} to inspire and equip your faith in action.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/faith/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Resources for Your Journey',
              subtitle: 'Grow, Learn, and Be Inspired',
              description:
                'Articles, videos, podcasts, and guides to deepen your understanding and equip your compassion in action.',
              tag: 'Library',
            },
            backgroundImage: { src: '/images/faith/hero.jpg', alt: 'Resource library' },
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
                id: 'res1',
                title: 'Finding Common Ground: A Guide to Interfaith Service',
                description:
                  'Practical wisdom for building bridges across traditions while serving together. Features insights from leaders of 12 faith traditions.',
                type: 'article' as const,
                url: '#',
                category: 'Interfaith',
                image: '/images/faith/gallery8.jpg',
                date: '2026-06-15',
              },
              {
                id: 'res2',
                title: 'The Compassion Imperative â€” Video Series',
                description:
                  'A six-part video series exploring the call to compassion found across all spiritual traditions, featuring world-renowned faith leaders.',
                type: 'video' as const,
                url: '#',
                category: 'Sermons',
                image: '/images/faith/hero.jpg',
                date: '2026-05-20',
              },
              {
                id: 'res3',
                title: 'Voices of Service Podcast',
                description:
                  'Monthly conversations with faith leaders, volunteers, and community members whose lives are being transformed through service.',
                type: 'podcast' as const,
                url: '#',
                category: 'Podcast',
                image: '/images/faith/gallery4.jpg',
                date: '2026-07-01',
              },
              {
                id: 'res4',
                title: 'Community Organizing Toolkit',
                description:
                  'Downloadable guides, templates, and checklists for starting your own interfaith service project in your community.',
                type: 'download' as const,
                url: '#',
                category: 'Toolkit',
              },
              {
                id: 'res5',
                title: 'Sacred Texts on Service: A Comparative Reader',
                description:
                  "Passages on compassion, justice, mercy, and service from the world's great spiritual traditions, with commentary.",
                type: 'article' as const,
                url: '#',
                category: 'Study',
                image: '/images/faith/gallery1.jpg',
                date: '2026-04-10',
              },
              {
                id: 'res6',
                title: 'Mental Health & Spiritual Care Resource Guide',
                description:
                  'A compassionate guide for supporting emotional wellbeing and mental health within faith communities.',
                type: 'download' as const,
                url: '#',
                category: 'Wellness',
              },
              {
                id: 'res7',
                title: 'Faith in Action: Documentary Film',
                description:
                  'An inspiring documentary showcasing interfaith service projects transforming communities across five continents.',
                type: 'video' as const,
                url: '#',
                category: 'Documentary',
                image: '/images/faith/gallery3.jpg',
                date: '2026-03-22',
              },
              {
                id: 'res8',
                title: "Interfaith Dialogue: A Beginner's Guide",
                description:
                  'Learn the art of respectful interfaith conversation with practical tips, sample dialogue formats, and discussion guides.',
                type: 'article' as const,
                url: '#',
                category: 'Interfaith',
                image: '/images/faith/gallery4.jpg',
                date: '2026-02-14',
              },
              {
                id: 'res9',
                title: 'Meditation & Prayer Across Traditions',
                description:
                  'A downloadable collection of guided meditations and prayers from diverse spiritual traditions for personal or group use.',
                type: 'download' as const,
                url: '#',
                category: 'Spiritual Practice',
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
              title: 'Get Resources Delivered',
              tag: 'Subscribe',
              alignment: 'center' as const,
            },
            title: 'Weekly Inspiration in Your Inbox',
            description:
              'Receive articles, podcast episodes, and resource recommendations every week.',
            placeholder: 'your@email.com',
            buttonLabel: 'Subscribe Free',
            successMessage: 'Welcome to our community!',
          },
        },
      ],
    },

    news: {
      seo: {
        title: `News â€” ${ORG}`,
        description: `Latest news, stories, and updates from ${ORG}'s interfaith community programs worldwide.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/faith/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'News & Stories',
              subtitle: 'Hope in Action',
              description:
                'Read inspiring stories of lives transformed, communities strengthened, and compassion in action across the world.',
              tag: 'Latest Updates',
            },
            backgroundImage: { src: '/images/faith/hero.jpg', alt: 'News and stories' },
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
                title: 'Interfaith Food Network Serves 2 Million Meals in Record Year',
                slug: 'food-network-record',
                date: '2026-06-20',
                category: 'Food Security',
                excerpt:
                  'Our network of 300 faith communities collected and distributed 2 million meals during the annual Compassion Feeds campaign.',
                image: '/images/faith/gallery5.jpg',
                author: { name: 'Rev. Dr. Sarah Mitchell' },
              },
              {
                title:
                  'Youth Leadership Summit Brings Together 500 Young Leaders from 20 Countries',
                slug: 'youth-summit-2026',
                date: '2026-05-28',
                category: 'Youth',
                excerpt:
                  'Young interfaith leaders gathered for a week of dialogue, skill-building, and collaborative service projects.',
                image: '/images/faith/hero.jpg',
                author: { name: 'Priya Sharma' },
              },
              {
                title: 'Disaster Response Team Deploys to Support Flood-Affected Communities',
                slug: 'disaster-response-floods',
                date: '2026-04-15',
                category: 'Disaster Response',
                excerpt:
                  'Our interfaith disaster response team provided emergency food, shelter, and spiritual care to 10,000 families affected by flooding.',
                image: '/images/faith/hero.jpg',
                author: { name: 'Imam Hassan Ali' },
              },
              {
                title: 'New Interfaith Center Opens in Los Angeles',
                slug: 'new-center-la',
                date: '2026-03-10',
                category: 'Community',
                excerpt:
                  'A new interfaith community center will serve as a hub for service programs, dialogue, and interfaith celebrations.',
                image: '/images/faith/gallery6.jpg',
                author: { name: 'Rabbi Esther Goldstein' },
              },
              {
                title: 'Scholarship Program Celebrates 10,000th Graduate',
                slug: 'scholarship-milestone',
                date: '2026-02-22',
                category: 'Education',
                excerpt:
                  'Our education scholarship program reaches a milestone as the 10,000th student graduates from the program.',
                image: '/images/faith/gallery7.jpg',
                author: { name: 'Dr. Aisha Rahman' },
              },
            ],
          },
        },
        {
          type: 'successStories',
          config: {
            theme: 'light',
            animation: 'fade',
            background: 'muted',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Featured Impact Stories',
              tag: 'Transformation',
              alignment: 'center' as const,
            },
            stories: [
              {
                name: 'Nkechi Okafor',
                role: 'Scholarship Graduate, Nigeria',
                image: { src: '/images/faith/gallery5.jpg', alt: 'Nkechi Okafor' },
                quote:
                  "The scholarship program didn't just pay my school fees. It gave me mentors who believed in me, a community that supported me, and a vision for how I can serve others.",
                impactStat: '10K',
                impactLabel: 'Graduates',
              },
              {
                name: 'Brother Thomas Aquinas',
                role: 'Partner, Catholic Mission, Philippines',
                image: { src: '/images/faith/gallery6.jpg', alt: 'Brother Thomas Aquinas' },
                quote:
                  'When the typhoon hit, we had help within hours. Buddhist monks, Muslim volunteers, and Hindu doctors â€” all serving alongside us. This is what the divine family looks like.',
                impactStat: '15',
                impactLabel: 'Crisis Responses',
              },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'banner' as const,
            heading: 'Stay Inspired',
            description:
              'Subscribe to receive stories of hope and opportunities to serve delivered to your inbox.',
            primaryCta: { label: 'Subscribe Now', href: '#', variant: 'primary' as const },
          },
        },
      ],
    },

    contact: {
      seo: {
        title: `Contact â€” ${ORG}`,
        description: `Get in touch with ${ORG}. Reach out for partnership inquiries, media requests, prayer requests, or general questions.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/faith/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Connect With Us',
              subtitle: 'We Would Love to Hear From You',
              description:
                'Whether you have questions about our programs, want to partner with us, or need support â€” reach out. You are welcome here.',
              tag: 'Get in Touch',
            },
            backgroundImage: { src: '/images/faith/hero.jpg', alt: 'Community connection' },
            overlayOpacity: 0.5,
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'contact' as const,
            heading: 'Our Contact Information',
            description: 'Reach out to our team. We respond to all inquiries within 24 hours.',
            email: 'hello@sacredcommunityalliance.org',
            phone: '+1 (555) 789-0123',
            address: '450 Unity Boulevard, Suite 200, Washington, DC 20001',
            primaryCta: { label: 'Send Us a Message', href: '#', variant: 'primary' as const },
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
            heading: { title: 'Quick Answers to Common Questions', alignment: 'center' as const },
            items: [
              {
                id: 'cq1',
                title: 'How can my faith community partner with you?',
                content:
                  'Contact our partnerships team through the form above or email partnerships@sacredcommunityalliance.org. We will schedule an introductory call.',
              },
              {
                id: 'cq2',
                title: 'Can I submit a prayer or intention request?',
                content:
                  'Yes, we welcome prayer requests from all traditions. Submit through our prayer page or call our spiritual care line at +1 (555) 789-0124.',
              },
              {
                id: 'cq3',
                title: 'How do I join an upcoming mission trip?',
                content:
                  'Visit our programs page to see upcoming mission opportunities. Applications open three months before each trip.',
              },
              {
                id: 'cq4',
                title: 'Do you have local chapters I can join?',
                content:
                  'We have partner communities in 300+ locations worldwide. Contact us to find one near you.',
              },
              {
                id: 'cq5',
                title: 'How can I donate in memory of a loved one?',
                content:
                  'Contact our development office at giving@sacredcommunityalliance.org to make a memorial gift.',
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
              'Partnerships, media inquiries, or just want to say hello â€” we are here for you.',
            primaryCta: { label: 'Partner With Us', href: '#', variant: 'primary' as const },
            secondaryCta: { label: 'Media Inquiries', href: '#', variant: 'secondary' as const },
          },
        },
      ],
    },

    faq: {
      seo: {
        title: `FAQ â€” ${ORG}`,
        description: `Frequently asked questions about ${ORG}'s interfaith programs, volunteering, donations, and partnerships.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/faith/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Frequently Asked Questions',
              subtitle: 'Find Answers Here',
              description:
                'Everything you need to know about our community, programs, giving, and how to get involved.',
              tag: 'FAQ',
            },
            backgroundImage: { src: '/images/faith/hero.jpg', alt: 'FAQ' },
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
            heading: { title: 'General Questions', alignment: 'left' as const },
            items: [
              {
                id: 'g1',
                title: 'What is the Sacred Community Alliance?',
                content:
                  'We are a global interfaith network of 300+ faith communities united in compassionate service. We run programs in food security, youth development, education, elder care, and disaster response across 35 countries.',
              },
              {
                id: 'g2',
                title: 'Do I need to belong to a specific faith to participate?',
                content:
                  'Not at all. We welcome people of all faiths, spiritual paths, and none. Our only requirement is a compassionate heart and a desire to serve.',
              },
              {
                id: 'g3',
                title: 'Is this a religious organization?',
                content:
                  'We are a faith- inclusive organization. We are rooted in the shared values of compassion and service found across all spiritual traditions, and we welcome everyone.',
              },
              {
                id: 'g4',
                title: 'How are you governed?',
                content:
                  'We are governed by a multi-faith board of directors representing Christian, Muslim, Jewish, Hindu, Sikh, Buddhist, and other traditions, ensuring diverse perspectives guide our work.',
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
            heading: { title: 'Giving & Donations', alignment: 'left' as const },
            items: [
              {
                id: 'd1',
                title: 'How is my donation used?',
                content:
                  '86% of every dollar goes directly to programs and services. 10% supports fundraising, and 4% covers administrative costs. We publish detailed annual reports.',
              },
              {
                id: 'd2',
                title: 'Is my donation tax-deductible?',
                content:
                  'Yes, we are a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the extent allowed by law.',
              },
              {
                id: 'd3',
                title: 'Can I set up recurring donations?',
                content:
                  'Absolutely. You can set up monthly, quarterly, or annual recurring donations through our secure giving portal.',
              },
              {
                id: 'd4',
                title: 'Can I donate in honor or memory of someone?',
                content:
                  'Yes, you can make tribute gifts. Contact our development team, and we will notify the honoree or family.',
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
            heading: { title: 'Volunteering & Getting Involved', alignment: 'left' as const },
            items: [
              {
                id: 'v1',
                title: 'How do I become a volunteer?',
                content:
                  'Visit our volunteer page and sign up. We will connect you with opportunities that match your interests and availability.',
              },
              {
                id: 'v2',
                title: 'Is there a minimum age to volunteer?',
                content:
                  'Volunteers under 16 must be accompanied by a parent or guardian. Youth 16+ can volunteer independently with parental consent.',
              },
              {
                id: 'v3',
                title: 'Can I volunteer from outside the US?',
                content:
                  'Yes, we have programs in 35 countries. Contact your local partner community or reach out to us directly.',
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
            description: 'We are here to help. Reach out to our team anytime.',
            primaryCta: {
              label: 'Contact Us',
              href: `${BASE}/contact`,
              variant: 'primary' as const,
            },
          },
        },
      ],
    },

    prayer: {
      seo: {
        title: `Prayer Requests â€” ${ORG}`,
        description: `Submit a prayer request to ${ORG}'s interfaith spiritual care team. All traditions welcome.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/faith/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Prayer & Intention Requests',
              subtitle: 'You Are Not Alone',
              description:
                'Share your joys, burdens, and hopes with our interfaith prayer community. Every tradition, every intention â€” all are welcome.',
              tag: 'Spiritual Care',
            },
            backgroundImage: { src: '/images/faith/hero.jpg', alt: 'Prayer' },
            overlayOpacity: 0.5,
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'join' as const,
            heading: 'Submit Your Prayer Request',
            description:
              'Our interfaith spiritual care team will hold your intention in prayer across multiple traditions.',
            primaryCta: { label: 'Submit Request', href: '#', variant: 'primary' as const },
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
            heading: { title: 'About Our Prayer Ministry', alignment: 'center' as const },
            items: [
              {
                id: 'p1',
                title: 'Do I need to belong to a specific faith?',
                content:
                  'No, we welcome prayer requests from people of all faiths and none. Our prayer team includes members from multiple traditions.',
              },
              {
                id: 'p2',
                title: 'Are prayer requests kept confidential?',
                content:
                  'Yes, all prayer requests are kept confidential within our spiritual care team unless you request otherwise.',
              },
              {
                id: 'p3',
                title: 'Can I request prayers for someone else?',
                content:
                  'Absolutely. You can submit prayers for family, friends, or anyone in need.',
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
            heading: 'You Are Surrounded by Love',
            description:
              'However you pray or meditate, your intention matters. You are never alone on this journey.',
            primaryCta: {
              label: 'Find Support',
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
            backgroundValue: '/images/faith/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Page Not Found',
              subtitle: 'Sometimes we lose our way',
              description:
                'The page you are looking for has moved or does not exist. But you are always welcome here. Let us help you find your path.',
              tag: '404',
            },
            backgroundImage: { src: '/images/faith/hero.jpg', alt: 'Community' },
            overlayOpacity: 0.5,
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered' as const,
            heading: 'Find Your Way Home',
            description:
              'Explore our community, discover our programs, or reach out to us directly.',
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
