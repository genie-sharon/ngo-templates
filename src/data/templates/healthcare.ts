import type { TemplateData } from './types';

const href = (path: string) => `/templates/healthcare${path}`;

const nav = {
  layout: 'transparent' as const,
  logo: { text: 'MedCare Global', href: href('') },
  menuItems: [
    { label: 'Home', href: href('') },
    { label: 'About', href: href('/about') },
    {
      label: 'Programs',
      href: href('/programs'),
      children: [
        { label: 'Mobile Clinics', href: href('/program-detail') },
        { label: 'Cancer Support', href: href('/programs') },
        { label: 'Blood Donation', href: href('/programs') },
        { label: 'Vaccination Drives', href: href('/programs') },
      ],
    },
    { label: 'Medical Camps', href: href('/medical-camp') },
    { label: 'Gallery', href: href('/gallery') },
    { label: 'Resources', href: href('/resources') },
    { label: 'Contact', href: href('/contact') },
  ],
  ctaButtons: [
    { label: 'Donate', href: href('/donate'), variant: 'donate' as const, size: 'md' as const },
  ],
  showSearch: true,
  showLanguageSwitcher: true,
  languages: [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'EspaÃ±ol' },
    { code: 'fr', label: 'FranÃ§ais' },
    { code: 'ar', label: 'Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©' },
  ],
  sticky: true,
  theme: 'dark' as const,
};

const footer = {
  layout: 'mega' as const,
  theme: 'dark' as const,
  animation: 'fade' as const,
  background: 'solid' as const,
  backgroundValue: '#0b1a2e',
  padding: 'large' as const,
  visible: true,
  logo: { src: null, alt: 'MedCare Global', width: 160, height: 40 },
  description:
    'Providing quality healthcare to underserved communities worldwide through mobile clinics, telemedicine, and community health programs. Every life matters.',
  columns: [
    {
      title: 'Our Programs',
      links: [
        { label: 'Mobile Medical Clinics', href: href('/program-detail') },
        { label: 'Cancer Support Program', href: href('/programs') },
        { label: 'Blood Donation Initiative', href: href('/programs') },
        { label: 'Vaccination Drives', href: href('/programs') },
        { label: 'Maternal & Child Health', href: href('/programs') },
      ],
    },
    {
      title: 'Get Involved',
      links: [
        { label: 'Donate Now', href: href('/donate') },
        { label: 'Volunteer', href: href('/volunteer') },
        { label: 'Medical Camps', href: href('/medical-camp') },
        { label: 'Partner With Us', href: href('/contact') },
        { label: 'Careers', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Health Tips', href: href('/resources') },
        { label: 'Medical Research', href: href('/resources') },
        { label: 'Annual Reports', href: href('/about') },
        { label: 'FAQ', href: href('/faq') },
        { label: 'Contact Us', href: href('/contact') },
      ],
    },
    {
      title: 'Emergency',
      links: [
        { label: '24/7 Helpline: +1 (800) MED-CARE', href: 'tel:+18006332273' },
        { label: 'Emergency Medical Camps', href: href('/medical-camp') },
        { label: 'Report a Health Crisis', href: href('/contact') },
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
  copyright: 'Â© 2026 MedCare Global. All rights reserved. Registered 501(c)(3) nonprofit.',
  showBackToTop: true,
  legalLinks: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'HIPAA Compliance', href: '#' },
  ],
};

const seo = {
  home: {
    title: 'MedCare Global â€” Quality Healthcare for Every Community',
    description:
      'MedCare Global brings life-saving healthcare to underserved communities through mobile clinics, telemedicine, and health worker training. Join our mission.',
  },
  about: {
    title: 'About Us â€” MedCare Global',
    description:
      "Learn about MedCare Global's mission to provide quality healthcare to underserved communities worldwide since 2010.",
  },
  programs: {
    title: 'Our Programs â€” MedCare Global',
    description:
      'Mobile clinics, cancer support, blood donation, vaccination drives, and maternal health programs serving 45+ countries.',
  },
  'program-detail': {
    title: 'Mobile Medical Clinics â€” MedCare Global',
    description:
      'Fully equipped mobile clinics bringing primary care, vaccinations, and maternal health services to remote communities.',
  },
  'medical-camp': {
    title: 'Medical Camps â€” MedCare Global',
    description:
      'Join our free medical camps providing healthcare services to underserved communities around the world.',
  },
  volunteer: {
    title: 'Volunteer â€” MedCare Global',
    description:
      "Join MedCare Global's volunteer program. Doctors, nurses, and medical professionals needed worldwide.",
  },
  donate: {
    title: 'Donate â€” MedCare Global',
    description:
      'Your donation provides life-saving medical supplies, vaccines, and treatments to those who need them most.',
  },
  resources: {
    title: 'Resources â€” MedCare Global',
    description:
      'Health tips, medical research, articles, and downloadable resources for community health.',
  },
  gallery: {
    title: 'Gallery â€” MedCare Global',
    description:
      'Photos from our healthcare missions, mobile clinics, and medical camps worldwide.',
  },
  faq: {
    title: 'FAQ â€” MedCare Global',
    description:
      'Frequently asked questions about MedCare Global, our programs, and how to get involved.',
  },
  contact: {
    title: 'Contact Us â€” MedCare Global',
    description:
      'Get in touch with MedCare Global. Partnership inquiries, volunteer applications, and emergency reports.',
  },
  'not-found': {
    title: 'Page Not Found â€” MedCare Global',
    description: 'The page you are looking for could not be found.',
  },
};

export const healthcareTemplate: TemplateData = {
  slug: 'healthcare',
  name: 'Healthcare NGO',
  tagline: 'Healing the world, one community at a time',
  description:
    'A premium healthcare NGO template designed for hospitals, medical foundations, blood donation organizations, and global health initiatives. Features a calm, professional aesthetic with blue-teal palette, soft gradients, and elegant motion.',
  themeId: 'healthcare',
  mood: 'Calm, Professional, Compassionate, Hopeful',
  illustrationStyle: 'Medical illustrations, anatomical diagrams, friendly health icons',
  motionStyle:
    'Gentle, reassuring transitions with fade, scale, and reveal animations. Smooth counter animations and card hover effects.',
  navigation: nav,
  footer: footer,
  pages: {
    home: {
      seo: seo.home,
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'split',
            theme: 'primary',
            animation: 'parallax',
            background: 'image',
            backgroundValue: '/images/healthcare/hero.jpg',
            padding: 'none',
            visible: true,
            fullHeight: false,
            overlayOpacity: 0.4,
            heading: {
              title: 'Quality Healthcare Should Reach Everyone, Everywhere',
              subtitle: 'MedCare Global',
              description:
                "For over 15 years, we have brought life-saving medical care to the world's most underserved communities through mobile clinics, telemedicine, and community health programs.",
              tag: 'Saving Lives Since 2010',
            },
            backgroundImage: {
              src: '/images/healthcare/hero.jpg',
              alt: 'Doctor examining a patient in a modern medical facility',
            },
            stats: [
              { value: 2000000, suffix: '+', label: 'Patients Treated' },
              { value: 500, suffix: '+', label: 'Mobile Clinics' },
              { value: 45, suffix: '', label: 'Countries Served' },
            ],
            trustBadges: [
              { src: '/images/trust/who-partner.svg', alt: 'WHO Partner', name: 'WHO Partner' },
              {
                src: '/images/trust/unicef-partner.svg',
                alt: 'UNICEF Health Partner',
                name: 'UNICEF Health Partner',
              },
              {
                src: '/images/trust/gold-transparency.svg',
                alt: 'Gold Transparency 2026',
                name: 'Gold Transparency 2026',
              },
            ],
            floatingStats: true,
            showScrollIndicator: true,
            decorativeShapes: [
              { type: 'blob', position: 'top-right', size: 'lg' },
              { type: 'circle', position: 'bottom-left', size: 'md' },
            ],
          },
        },
        {
          type: 'impact',
          config: {
            layout: 'cards',
            theme: 'primary',
            animation: 'fade',
            background: 'solid',
            backgroundValue: '#0f2b3d',
            padding: 'large',
            visible: true,
            columns: 4,
            showIconBackground: true,
            heading: {
              title: 'Our Impact in Numbers',
              subtitle: 'Real Results, Real Lives Changed',
            },
            stats: [
              { value: 2000000, suffix: '+', label: 'Patients Treated', icon: 'heart-pulse' },
              { value: 8500, suffix: '+', label: 'Medical Professionals', icon: 'stethoscope' },
              { value: 12000, suffix: '+', label: 'Community Health Workers', icon: 'users' },
              { value: 500, suffix: '+', label: 'Active Mobile Clinics', icon: 'ambulance' },
            ],
          },
        },
        {
          type: 'about',
          config: {
            layout: 'default',
            variant: 'story',
            theme: 'light',
            animation: 'fade-in-up',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Our Mission',
              subtitle: 'Why We Exist',
            },
            body: [
              "MedCare Global was founded in 2010 by Dr. Sarah Mitchell after witnessing the devastating lack of basic healthcare in remote villages across Sub-Saharan Africa. What began as a single converted van stocked with essential medicines has grown into one of the world's most trusted medical humanitarian organizations.",
              'Today, we operate 500+ mobile clinics across 45 countries, staffed by over 8,500 dedicated medical professionals. Our telemedicine platform connects patients in the most remote corners of the world with specialist doctors, while our community health worker training program has empowered 12,000 local individuals to become healthcare providers in their own communities.',
              'We believe that access to quality healthcare is a fundamental human right â€” not a privilege reserved for the fortunate few.',
            ],
            mission:
              'To ensure every person, regardless of geography or economic status, has access to quality, compassionate healthcare.',
            vision:
              'A world where no one is denied medical care because of where they live or what they can afford.',
            values: [
              {
                title: 'Compassion',
                description:
                  'Every patient is treated with dignity, respect, and unconditional care.',
              },
              {
                title: 'Excellence',
                description:
                  'We maintain the highest medical standards through continuous training and quality improvement.',
              },
              {
                title: 'Innovation',
                description:
                  'Leveraging telemedicine and mobile technology to reach the unreachable.',
              },
              {
                title: 'Transparency',
                description:
                  'Every dollar donated is tracked and reported with full accountability.',
              },
            ],
            image: {
              src: '/images/healthcare/clinic.jpg',
              alt: 'Medical team consulting with patients at a community health center',
            },
          },
        },
        {
          type: 'programs',
          config: {
            layout: 'tabs',
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            columns: 3,
            showCategoryBadges: true,
            showImpactStats: true,
            heading: {
              title: 'Our Healthcare Programs',
              subtitle: 'How We Deliver Care',
              description:
                'From mobile clinics to cancer support, every program is designed to maximize impact where it is needed most.',
            },
            programs: [
              {
                id: 'mobile-clinics',
                title: 'Mobile Medical Clinics',
                description:
                  'Fully equipped clinics on wheels bringing primary care, vaccinations, maternal health services, and health education to remote villages.',
                image: {
                  src: '/images/healthcare/doctor.jpg',
                  alt: 'Mobile clinic serving a rural community',
                },
                category: 'Primary Care',
                impactStat: '1M+ patients served',
                cta: { label: 'Learn More', href: href('/program-detail') },
                featured: true,
              },
              {
                id: 'cancer-support',
                title: 'Cancer Support Program',
                description:
                  'Free cancer screenings, treatment navigation, and support groups for underserved communities. Early detection saves lives.',
                image: { src: '/images/healthcare/clinic.jpg', alt: 'Cancer screening clinic' },
                category: 'Oncology',
                impactStat: '50K+ screenings',
                cta: { label: 'Learn More', href: href('/programs') },
              },
              {
                id: 'blood-donation',
                title: 'Blood Donation Initiative',
                description:
                  'Mobile blood donation drives and a network of volunteer donors ensuring life-saving blood is available for emergencies and surgeries.',
                image: { src: '/images/healthcare/doctor.jpg', alt: 'Blood donation camp' },
                category: 'Emergency Care',
                impactStat: '100K+ units collected',
                cta: { label: 'Learn More', href: href('/programs') },
              },
              {
                id: 'vaccination',
                title: 'Vaccination Drives',
                description:
                  'Mass immunization campaigns protecting communities against preventable diseases including polio, measles, HPV, and COVID-19.',
                image: {
                  src: '/images/healthcare/clinic.jpg',
                  alt: 'Vaccination drive in rural area',
                },
                category: 'Immunization',
                impactStat: '2M+ doses administered',
                cta: { label: 'Learn More', href: href('/programs') },
              },
              {
                id: 'nutrition',
                title: 'Nutrition & Maternal Health',
                description:
                  'Comprehensive maternal care, nutrition programs for children, and support for new mothers in underserved communities.',
                image: { src: '/images/healthcare/doctor.jpg', alt: 'Maternal health checkup' },
                category: 'Maternal Health',
                impactStat: '200K+ mothers supported',
                cta: { label: 'Learn More', href: href('/programs') },
              },
              {
                id: 'mental-health',
                title: 'Mental Health Support',
                description:
                  'Counseling services, crisis intervention, and mental health awareness programs delivered through community-based approaches.',
                image: {
                  src: '/images/healthcare/clinic.jpg',
                  alt: 'Mental health support session',
                },
                category: 'Mental Health',
                impactStat: '100K+ counseling sessions',
                cta: { label: 'Learn More', href: href('/programs') },
              },
            ],
          },
        },
        {
          type: 'successStories',
          config: {
            layout: 'default',
            theme: 'muted',
            animation: 'fade-in-up',
            background: 'muted',
            backgroundValue: '#eef2f5',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Patient Stories',
              subtitle: 'Lives Transformed',
              description:
                'Real stories of hope, healing, and resilience from the communities we serve.',
            },
            stories: [
              {
                name: 'Maria Santos',
                role: 'Patient, Philippines',
                image: { src: '/images/healthcare/clinic.jpg', alt: 'Maria Santos' },
                quote:
                  'When I was diagnosed with breast cancer, I thought I had no hope. The mobile clinic came to our village and connected me with specialists. Today, I am cancer-free and volunteering to help other women get screened.',
                impactStat: '50,000+',
                impactLabel: 'Women Screened',
              },
              {
                name: 'Dr. James Kiprop',
                role: 'Community Health Worker, Kenya',
                image: { src: '/images/healthcare/clinic.jpg', alt: 'James Kiprop' },
                quote:
                  'I was trained by MedCare Global as a community health worker. Now I vaccinate children, treat common illnesses, and educate my village about preventive care. I have seen child mortality in our area drop by 60%.',
                impactStat: '12,000+',
                impactLabel: 'Health Workers Trained',
              },
              {
                name: 'Amina Hassan',
                role: 'Mother of Three, Somalia',
                image: { src: '/images/healthcare/clinic.jpg', alt: 'Amina Hassan' },
                quote:
                  'During the drought, my youngest child became severely malnourished. The MedCare team at the camp treated her and taught me about nutrition. She is healthy and thriving today because of their care.',
                impactStat: '200,000+',
                impactLabel: 'Children Treated',
              },
              {
                name: 'Carlos Mendez',
                role: 'Blood Donor, Colombia',
                image: { src: '/images/healthcare/patient.jpg', alt: 'Carlos Mendez' },
                quote:
                  'I started donating blood after a friend needed an emergency transfusion. Now I coordinate donation drives in my community. Knowing that one donation can save up to three lives keeps me going.',
                impactStat: '100,000+',
                impactLabel: 'Blood Units Collected',
              },
            ],
          },
        },
        {
          type: 'volunteerJourney',
          config: {
            layout: 'default',
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Become a Medical Volunteer',
              subtitle: 'Your Skills Can Save Lives',
              description:
                'Whether you are a doctor, nurse, student, or community worker â€” there is a place for you in our mission.',
            },
            steps: [
              {
                icon: 'clipboard-check',
                title: 'Apply Online',
                description:
                  'Submit your application with your qualifications, availability, and preferred locations.',
              },
              {
                icon: 'graduation-cap',
                title: 'Complete Training',
                description:
                  'Attend our orientation program covering field protocols, cultural sensitivity, and emergency procedures.',
              },
              {
                icon: 'plane',
                title: 'Deploy to the Field',
                description:
                  'Travel to your assigned location and join our team providing life-saving care on the ground.',
              },
              {
                icon: 'heart-handshake',
                title: 'Make an Impact',
                description:
                  'Work alongside local health workers, treat patients, train community members, and save lives.',
              },
              {
                icon: 'refresh-cw',
                title: 'Stay Connected',
                description:
                  'Return home and continue supporting through advocacy, fundraising, or future deployments.',
              },
            ],
          },
        },
        {
          type: 'testimonials',
          config: {
            layout: 'large-quote',
            theme: 'light',
            animation: 'scale',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: {
              title: 'What People Say',
              subtitle: 'Voices of Hope',
            },
            testimonials: [
              {
                quote:
                  'Working with MedCare Global has been the most rewarding experience of my medical career. The dedication of the local staff and the gratitude of the patients is something I will carry with me forever.',
                name: 'Dr. Emily Watson',
                role: 'Pediatrician',
                organization: "Boston Children's Hospital",
                avatar: { src: '/images/healthcare/clinic.jpg', alt: 'Dr. Emily Watson' },
                rating: 5,
              },
              {
                quote:
                  'I volunteered as a nurse in their mobile clinic program in rural Tanzania. The conditions were challenging but the impact was incredible. We treated over 200 patients in two weeks.',
                name: 'Sarah Chen',
                role: 'Registered Nurse',
                organization: 'Volunteer 2024',
                avatar: { src: '/images/healthcare/doctor.jpg', alt: 'Sarah Chen' },
                rating: 5,
              },
              {
                quote:
                  "MedCare Global saved my son's life. When he contracted malaria, the nearest hospital was three days away. Their mobile clinic arrived in time. I will be forever grateful.",
                name: 'Grace Okonkwo',
                role: 'Patient Parent',
                organization: 'Nigeria',
                avatar: { src: '/images/healthcare/clinic.jpg', alt: 'Grace Okonkwo' },
                rating: 5,
              },
              {
                quote:
                  "As a partner organization, we have seen firsthand the professionalism and compassion of MedCare Global's teams. They are a model for what global health should look like.",
                name: 'Dr. Ahmed Al-Rashid',
                role: 'Director of Health Partnerships',
                organization: 'WHO Regional Office',
                avatar: { src: '/images/healthcare/doctor.jpg', alt: 'Dr. Ahmed Al-Rashid' },
                rating: 5,
              },
            ],
          },
        },
        {
          type: 'campaignProgress',
          config: {
            layout: 'default',
            theme: 'primary',
            animation: 'fade',
            background: 'solid',
            backgroundValue: '#0f2b3d',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Emergency Campaign: East Africa Drought Response',
              subtitle: 'Help Us Reach Every Family in Need',
              description:
                'Severe drought has left millions without access to clean water and medical care. We have deployed 50 mobile clinics to the region, but we need your help to continue this life-saving work.',
            },
            goal: 2500000,
            raised: 1875000,
            currency: 'USD',
            donorCount: 12453,
            title: 'East Africa Drought Emergency Response',
            description:
              'Providing emergency medical care, clean water, and nutrition support to drought-affected communities.',
          },
        },
        {
          type: 'gallery',
          config: {
            layout: 'lightbox',
            theme: 'light',
            animation: 'fade-in-up',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Our Work in Pictures',
              subtitle: 'Moments of Care and Compassion',
              description: 'A glimpse into our healthcare missions across the globe.',
            },
            images: [
              {
                src: '/images/healthcare/clinic.jpg',
                alt: 'Modern medical clinic interior',
                caption: 'State-of-the-art mobile clinic facility',
              },
              {
                src: '/images/healthcare/doctor.jpg',
                alt: 'Children receiving vaccinations',
                caption: 'Vaccination drive, rural Kenya',
              },
              {
                src: '/images/healthcare/clinic.jpg',
                alt: 'Surgical team in field hospital',
                caption: 'Emergency surgery team, Haiti',
              },
              {
                src: '/images/healthcare/gallery2.jpg',
                alt: 'Community health worker training',
                caption: 'Health worker training, Ghana',
              },
              {
                src: '/images/healthcare/gallery3.jpg',
                alt: 'Maternal health checkup',
                caption: 'Maternal care clinic, Bangladesh',
              },
              {
                src: '/images/healthcare/hero.jpg',
                alt: 'Telemedicine consultation',
                caption: 'Telemedicine hub, remote Nepal',
              },
            ],
          },
        },
        {
          type: 'news',
          config: {
            layout: 'grid',
            theme: 'light',
            animation: 'fade-in-up',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: 'Healthcare Resources & Insights',
            subtitle: 'Expert Advice, Research, and Stories from the Field',
            description:
              'Stay informed with the latest in global health, medical research, and community health tips.',
            articles: [
              {
                title: '5 Signs of Malnutrition in Children Every Parent Should Know',
                slug: 'malnutrition-signs',
                date: '2026-07-10',
                category: 'Health Tips',
                excerpt:
                  "Early detection of malnutrition can save a child's life. Learn the warning signs and when to seek help.",
                image: '/images/healthcare/clinic.jpg',
                author: { name: 'Dr. Sarah Mitchell', role: 'Chief Medical Officer' },
              },
              {
                title: 'How Mobile Clinics Are Transforming Rural Healthcare in Sub-Saharan Africa',
                slug: 'mobile-clinics-transforming-healthcare',
                date: '2026-06-28',
                category: 'Impact Report',
                excerpt:
                  "A deep dive into how our mobile clinic program has reached over one million patients in some of the world's most remote areas.",
                image: '/images/healthcare/doctor.jpg',
                author: { name: 'James Ochieng', role: 'Field Operations Director' },
              },
              {
                title: 'Understanding Antibiotic Resistance: A Global Health Crisis',
                slug: 'antibiotic-resistance-guide',
                date: '2026-06-15',
                category: 'Medical Research',
                excerpt:
                  'Antibiotic resistance is one of the greatest threats to global health. Here is what you need to know and how we are addressing it.',
                image: '/images/healthcare/clinic.jpg',
                author: { name: 'Dr. Priya Sharma', role: 'Research Director' },
              },
              {
                title: 'The Power of Community Health Workers: Lessons from 15 Years of Training',
                slug: 'community-health-workers-impact',
                date: '2026-05-20',
                category: 'Programs',
                excerpt:
                  'How training local health workers has reduced child mortality by 60% in the communities we serve.',
                image: '/images/healthcare/doctor.jpg',
                author: { name: 'Anna Petrov', role: 'Training Program Lead' },
              },
              {
                title: 'Mental Health in Crisis Zones: A Guide for First Responders',
                slug: 'mental-health-crisis-guide',
                date: '2026-05-05',
                category: 'Resources',
                excerpt:
                  'Essential mental health first aid techniques for healthcare workers operating in emergency and conflict settings.',
                image: '/images/healthcare/gallery1.jpg',
                author: { name: 'Dr. James Wilson', role: 'Mental Health Director' },
              },
              {
                title: 'Vaccination Myths Debunked: What Science Actually Says',
                slug: 'vaccine-myths-debunked',
                date: '2026-04-18',
                category: 'Health Tips',
                excerpt:
                  'Separating fact from fiction: evidence-based answers to the most common vaccine questions.',
                image: '/images/healthcare/gallery2.jpg',
                author: { name: 'Dr. Maria Santos', role: 'Immunization Program Lead' },
              },
            ],
            showCategories: true,
            showAuthor: true,
          },
        },
        {
          type: 'partnerLogos',
          config: {
            layout: 'default',
            theme: 'light',
            animation: 'fade',
            background: 'muted',
            backgroundValue: '#eef2f5',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Our Partners in Global Health',
              subtitle: 'Working Together for a Healthier World',
            },
            variant: 'grid',
            partners: [
              {
                name: 'World Health Organization',
                logo: { src: '/images/partners/who.svg', alt: 'WHO' },
              },
              { name: 'UNICEF', logo: { src: '/images/partners/unicef.svg', alt: 'UNICEF' } },
              {
                name: 'MÃ©decins Sans FrontiÃ¨res',
                logo: { src: '/images/partners/msf.svg', alt: 'MSF' },
              },
              {
                name: 'Red Cross',
                logo: { src: '/images/partners/red-cross.svg', alt: 'Red Cross' },
              },
              { name: 'USAID', logo: { src: '/images/partners/usaid.svg', alt: 'USAID' } },
              {
                name: 'The Global Fund',
                logo: { src: '/images/partners/global-fund.svg', alt: 'Global Fund' },
              },
              {
                name: 'Clinton Health Access Initiative',
                logo: { src: '/images/partners/clinton-health-access.svg', alt: 'CHAI' },
              },
              {
                name: 'Bill & Melinda Gates Foundation',
                logo: { src: '/images/partners/gates-foundation.svg', alt: 'Gates Foundation' },
              },
            ],
          },
        },
        {
          type: 'faq',
          config: {
            layout: 'default',
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Frequently Asked Questions',
              subtitle: 'Everything You Need to Know',
            },
            items: [
              {
                title: 'How are donations used?',
                content:
                  '96% of every dollar donated goes directly to our medical programs and patient care. We maintain one of the highest program efficiency ratios in the nonprofit healthcare sector.',
              },
              {
                title: 'Can I specify where my donation goes?',
                content:
                  'Yes. You can designate your donation to a specific program â€” mobile clinics, cancer support, vaccination drives, or our emergency response fund.',
              },
              {
                title: 'Do you accept medical volunteers?',
                content:
                  'Absolutely. We welcome licensed medical professionals, nurses, EMTs, medical students, and administrative volunteers. Applications are reviewed on a rolling basis.',
              },
              {
                title: 'Is my donation tax-deductible?',
                content:
                  'Yes. MedCare Global is a registered 501(c)(3) nonprofit organization. Donations are tax-deductible in the United States and in many other countries.',
              },
              {
                title: 'How do you ensure quality of care?',
                content:
                  'All our medical staff undergo rigorous credential verification and continuous training. We follow WHO guidelines and conduct regular quality audits across all our programs.',
              },
              {
                title: 'Where do you operate?',
                content:
                  'We currently operate in 45 countries across Africa, Asia, Latin America, and the Middle East. Our headquarters is in New York, with regional offices in Nairobi, Bangkok, and BogotÃ¡.',
              },
            ],
            allowMultiple: false,
            variant: 'bordered',
          },
        },
        {
          type: 'newsletter',
          config: {
            layout: 'default',
            theme: 'primary',
            animation: 'fade',
            background: 'solid',
            backgroundValue: '#0f2b3d',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Stay Connected',
              subtitle: 'Join Our Health Community',
            },
            title: 'Get Our Monthly Health Newsletter',
            description:
              'Stories from the field, health tips, research updates, and ways to get involved â€” delivered to your inbox every month.',
            placeholder: 'Enter your email address',
            buttonLabel: 'Subscribe',
            successMessage: 'Thank you for subscribing! Check your inbox for a confirmation email.',
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'donate',
            theme: 'light',
            animation: 'scale',
            background: 'gradient',
            backgroundValue: 'linear-gradient(135deg, #064e3b 0%, #047857 50%, #059669 100%)',
            padding: 'large',
            visible: true,
            heading: 'Every Dollar Saves Lives',
            description:
              'Your donation provides medical supplies, vaccines, and life-saving treatments. Join over 50,000 monthly donors who make our work possible.',
            primaryCta: { label: 'Donate Now', href: href('/donate'), variant: 'donate' as const },
            secondaryCta: {
              label: 'Learn About Our Impact',
              href: href('/about'),
              variant: 'outline' as const,
            },
            donateAmounts: [25, 50, 100, 250, 500, 1000],
            benefits: [
              { text: '96% of funds go directly to programs' },
              { text: 'Tax deductible in most countries' },
              { text: 'Monthly impact reports' },
            ],
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
            animation: 'parallax',
            background: 'image',
            backgroundValue: '/images/healthcare/hero.jpg',
            padding: 'none',
            visible: true,
            overlayOpacity: 0.45,
            heading: {
              title: 'Our Story',
              subtitle: 'About MedCare Global',
              description:
                'From a single mobile clinic to a global health network â€” our journey of compassion, innovation, and unwavering commitment to health equity.',
              tag: '15 Years of Impact',
            },
            backgroundImage: {
              src: '/images/healthcare/hero.jpg',
              alt: 'MedCare Global medical team',
            },
          },
        },
        {
          type: 'about',
          config: {
            layout: 'default',
            variant: 'timeline',
            theme: 'light',
            animation: 'fade-in-up',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Our Journey',
              subtitle: 'From Vision to Global Movement',
            },
            body: [
              'MedCare Global was founded in 2010 by Dr. Sarah Mitchell, a pediatrician who spent years working in rural clinics across Sub-Saharan Africa. She witnessed firsthand how the lack of basic healthcare turned treatable conditions into fatal ones.',
              'After returning from a particularly challenging mission in rural Tanzania, Dr. Mitchell sold her practice, purchased a used delivery van, and stocked it with essential medicines. That single vehicle became the first mobile clinic, serving three remote villages in western Kenya.',
              'Word spread quickly. Within two years, MedCare Global had expanded to 10 countries. By 2016, we launched our telemedicine platform, connecting patients in the most remote locations with specialist doctors worldwide. Today, with 500+ mobile clinics, 8,500 medical professionals, and operations in 45 countries, we are one of the fastest-growing medical humanitarian organizations in the world.',
            ],
            mission:
              'To ensure every person, regardless of geography or economic status, has access to quality, compassionate healthcare.',
            vision:
              'A world where no one is denied medical care because of where they live or what they can afford.',
            timeline: [
              {
                year: '2010',
                title: 'First Mobile Clinic',
                description:
                  'Dr. Sarah Mitchell launches the first mobile clinic in rural Kenya with a single converted van.',
              },
              {
                year: '2012',
                title: 'Expansion to 5 Countries',
                description:
                  'Operations expand to Uganda, Tanzania, Malawi, and Zambia with 20 mobile clinics.',
              },
              {
                year: '2015',
                title: '1 Million Patients Reached',
                description:
                  'A historic milestone as our mobile clinics reach one million patient consultations.',
              },
              {
                year: '2016',
                title: 'Telemedicine Platform Launches',
                description:
                  'Remote consultation platform connects patients in 15 countries with specialist doctors.',
              },
              {
                year: '2019',
                title: 'Health Worker Training Program',
                description:
                  'Launch of community health worker training program, empowering local healthcare providers.',
              },
              {
                year: '2020',
                title: 'COVID-19 Emergency Response',
                description:
                  'Deployed emergency response teams across 30 countries, supporting overwhelmed health systems.',
              },
              {
                year: '2024',
                title: '2 Million Patients Reached',
                description:
                  'Celebrated reaching 2 million patients treated worldwide across 45 countries.',
              },
              {
                year: '2026',
                title: 'Goal: 5 Million by 2030',
                description:
                  'Ambitious expansion plan to reach 5 million patients with 1,000 mobile clinics by 2030.',
              },
            ],
            image: {
              src: '/images/healthcare/patient.jpg',
              alt: 'MedCare Global historical timeline photo of medical team',
            },
          },
        },
        {
          type: 'impact',
          config: {
            layout: 'counters',
            theme: 'primary',
            animation: 'fade',
            background: 'solid',
            backgroundValue: '#0f2b3d',
            padding: 'large',
            visible: true,
            columns: 4,
            heading: {
              title: 'Our Global Reach',
              subtitle: 'The Scale of Our Mission',
            },
            stats: [
              { value: 2000000, suffix: '+', label: 'Patients Treated' },
              { value: 8500, suffix: '+', label: 'Medical Staff' },
              { value: 45, suffix: '', label: 'Countries' },
              { value: 500, suffix: '+', label: 'Mobile Clinics' },
            ],
          },
        },
        {
          type: 'testimonials',
          config: {
            layout: 'cards',
            theme: 'light',
            animation: 'scale',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Our Leadership',
              subtitle: 'Meet the Team Behind the Mission',
            },
            testimonials: [
              {
                quote:
                  'I founded MedCare Global because I believe healthcare is a human right. Every patient we treat, every life we save, brings us closer to a world where no one suffers from treatable conditions.',
                name: 'Dr. Sarah Mitchell',
                role: 'Founder & Chief Medical Officer',
                avatar: { src: '/images/healthcare/clinic.jpg', alt: 'Dr. Sarah Mitchell' },
              },
              {
                quote:
                  'Our field teams are the heart of this organization. Their dedication in the most challenging conditions inspires everything we do at the headquarters.',
                name: 'David Okonkwo',
                role: 'Executive Director',
                avatar: { src: '/images/healthcare/doctor.jpg', alt: 'David Okonkwo' },
              },
              {
                quote:
                  'Data-driven decisions and rigorous monitoring ensure every dollar is used effectively. Our 96% program efficiency ratio is a testament to our commitment to donors and patients alike.',
                name: 'Priya Kapoor',
                role: 'Chief Operating Officer',
                avatar: { src: '/images/healthcare/clinic.jpg', alt: 'Priya Kapoor' },
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
            heading: 'Join Our Mission',
            description:
              'Together, we can ensure quality healthcare reaches every person who needs it.',
            primaryCta: {
              label: 'Support Our Work',
              href: href('/donate'),
              variant: 'primary' as const,
            },
            secondaryCta: {
              label: 'View Our Programs',
              href: href('/programs'),
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
            animation: 'parallax',
            background: 'image',
            backgroundValue: '/images/healthcare/hero.jpg',
            padding: 'none',
            visible: true,
            overlayOpacity: 0.4,
            heading: {
              title: 'Our Healthcare Programs',
              subtitle: 'How We Deliver Care',
              description:
                'From mobile clinics to mental health support, every program is designed to maximize impact where it is needed most.',
            },
            backgroundImage: {
              src: '/images/healthcare/hero.jpg',
              alt: 'MedCare Global program overview',
            },
          },
        },
        {
          type: 'programs',
          config: {
            layout: 'bento',
            theme: 'light',
            animation: 'fade-in-up',
            background: 'none',
            padding: 'large',
            visible: true,
            showCategoryBadges: true,
            showImpactStats: true,
            heading: {
              title: 'Our Health Initiatives',
              subtitle: 'Comprehensive Care, Maximum Impact',
              description:
                'Each program is designed to address specific healthcare needs while strengthening local health systems.',
            },
            programs: [
              {
                id: 'mobile-clinics',
                title: 'Mobile Medical Clinics',
                description:
                  'Fully equipped vehicles staffed by doctors, nurses, and health workers traveling to remote villages on scheduled rotations.',
                image: { src: '/images/healthcare/clinic.jpg', alt: 'Mobile clinic' },
                category: 'Primary Care',
                impactStat: '1M+ patients served',
                cta: { label: 'Details', href: href('/program-detail') },
                featured: true,
              },
              {
                id: 'cancer-support',
                title: 'Cancer Support & Screening',
                description:
                  'Free screenings, treatment navigation, and support groups for breast, cervical, and prostate cancer.',
                image: { src: '/images/healthcare/clinic.jpg', alt: 'Cancer screening' },
                category: 'Oncology',
                impactStat: '50K+ screenings',
                cta: { label: 'Details', href: href('/programs') },
              },
              {
                id: 'blood-donation',
                title: 'Blood Donation Initiative',
                description:
                  'Mobile blood drives and volunteer donor network ensuring emergency blood supply.',
                image: { src: '/images/healthcare/clinic.jpg', alt: 'Blood donation' },
                category: 'Emergency',
                impactStat: '100K+ units collected',
                cta: { label: 'Details', href: href('/programs') },
              },
              {
                id: 'vaccination',
                title: 'Vaccination Drives',
                description:
                  'Mass immunization campaigns protecting against polio, measles, HPV, and more.',
                image: { src: '/images/healthcare/patient.jpg', alt: 'Vaccination' },
                category: 'Immunization',
                impactStat: '2M+ doses administered',
                cta: { label: 'Details', href: href('/programs') },
              },
              {
                id: 'maternal-health',
                title: 'Maternal & Child Health',
                description:
                  'Prenatal care, safe delivery support, nutrition programs, and postnatal care for mothers and infants.',
                image: { src: '/images/healthcare/clinic.jpg', alt: 'Maternal care' },
                category: 'Maternal Health',
                impactStat: '200K+ mothers supported',
                cta: { label: 'Details', href: href('/programs') },
              },
              {
                id: 'mental-health',
                title: 'Mental Health Support',
                description:
                  'Community-based counseling, crisis intervention, and mental health awareness programs.',
                image: { src: '/images/healthcare/doctor.jpg', alt: 'Mental health support' },
                category: 'Mental Health',
                impactStat: '100K+ sessions',
                cta: { label: 'Details', href: href('/programs') },
              },
              {
                id: 'emergency-response',
                title: 'Emergency Medical Response',
                description:
                  'Rapid deployment teams providing emergency care during natural disasters, conflicts, and disease outbreaks.',
                image: { src: '/images/healthcare/gallery6.jpg', alt: 'Emergency response' },
                category: 'Emergency',
                impactStat: '300+ deployments',
                cta: { label: 'Details', href: href('/programs') },
              },
              {
                id: 'telemedicine',
                title: 'Telemedicine Network',
                description:
                  'Remote specialist consultations connecting patients in remote areas with doctors worldwide.',
                image: { src: '/images/healthcare/patient.jpg', alt: 'Telemedicine' },
                category: 'Technology',
                impactStat: '250K+ consultations',
                cta: { label: 'Details', href: href('/programs') },
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
            background: 'solid',
            backgroundValue: '#0f2b3d',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Our Progress Toward 5 Million Patients',
              subtitle: 'Tracking Our Impact',
            },
            stats: [
              { value: 2000000, suffix: '+', label: 'Patients Treated' },
              { value: 500, suffix: '+', label: 'Mobile Clinics Deployed' },
              { value: 12000, suffix: '+', label: 'Health Workers Trained' },
            ],
            progressMax: 5000000,
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'donate',
            theme: 'light',
            animation: 'scale',
            background: 'gradient',
            backgroundValue: 'linear-gradient(135deg, #064e3b 0%, #047857 50%, #059669 100%)',
            padding: 'large',
            visible: true,
            heading: 'Support Our Healthcare Programs',
            description:
              'Your donation helps us expand our programs, train more health workers, and reach more communities in need.',
            primaryCta: {
              label: 'Donate to Healthcare',
              href: href('/donate'),
              variant: 'donate' as const,
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
            animation: 'parallax',
            background: 'image',
            backgroundValue: '/images/healthcare/hero.jpg',
            padding: 'none',
            visible: true,
            overlayOpacity: 0.4,
            heading: {
              title: 'Mobile Medical Clinics',
              subtitle: 'Program Details',
              description:
                'Fully equipped clinics on wheels bringing primary healthcare, vaccinations, maternal services, and health education to the most remote communities in the world.',
              tag: 'Since 2010',
            },
            backgroundImage: {
              src: '/images/healthcare/hero.jpg',
              alt: 'Mobile clinic serving a mountain village',
            },
            stats: [
              { value: 1000000, suffix: '+', label: 'Consultations' },
              { value: 500, suffix: '', label: 'Active Clinics' },
              { value: 92, suffix: '%', label: 'Patient Satisfaction' },
            ],
          },
        },
        {
          type: 'about',
          config: {
            layout: 'default',
            variant: 'split',
            theme: 'light',
            animation: 'fade-in-up',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Bringing Care to the Last Mile',
              subtitle: 'How Mobile Clinics Work',
            },
            body: [
              'Our mobile medical clinics are custom-built vehicles equipped with examination rooms, diagnostic equipment, laboratory facilities, and pharmacy sections. Each clinic is staffed by a team of doctors, nurses, and community health workers.',
              'Clinics travel to remote villages on scheduled rotations, typically visiting each community every two to four weeks. Patients receive primary care, vaccinations, maternal health services, health education, and referrals for specialized care when needed.',
              'Since 2010, our mobile clinics have provided over 1 million medical consultations, administered 500,000+ life-saving vaccinations, and supported 50,000+ safe deliveries. We currently operate 500 mobile clinics across 45 countries, with plans to expand to 1,000 by 2030.',
              'Each mobile clinic costs approximately $50,000 to deploy annually â€” a cost that includes the vehicle, medical equipment, staffing, medicines, and fuel. This investment serves an average of 20,000 patients per year.',
            ],
            image: {
              src: '/images/healthcare/clinic.jpg',
              alt: 'Interior of a mobile clinic showing examination room',
            },
            stats: [
              { value: 1000000, suffix: '+', label: 'Medical Consultations' },
              { value: 500000, suffix: '+', label: 'Vaccinations' },
              { value: 50000, suffix: '+', label: 'Safe Deliveries' },
            ],
          },
        },
        {
          type: 'gallery',
          config: {
            layout: 'carousel',
            theme: 'light',
            animation: 'fade-in-up',
            background: 'muted',
            backgroundValue: '#eef2f5',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Mobile Clinics in Action',
              subtitle: 'Photos from the Field',
            },
            images: [
              {
                src: '/images/healthcare/doctor.jpg',
                alt: 'Mobile clinic parked in mountain village',
              },
              {
                src: '/images/healthcare/doctor.jpg',
                alt: 'Doctor examining patient inside clinic',
              },
              { src: '/images/healthcare/gallery4.jpg', alt: 'Vaccination drive at mobile clinic' },
              { src: '/images/healthcare/gallery6.jpg', alt: 'Maternal health consultation' },
              {
                src: '/images/healthcare/gallery7.jpg',
                alt: 'Health education session outside clinic',
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
            background: 'solid',
            backgroundValue: '#0f2b3d',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Progress Toward 1,000 Clinics',
              subtitle: 'Our 2030 Goal',
            },
            stats: [
              { value: 500, suffix: '+', label: 'Clinics Deployed' },
              { value: 45, suffix: '', label: 'Countries Reached' },
              { value: 20000, suffix: '+', label: 'Patients Per Clinic Annually' },
            ],
            progressMax: 1000,
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'donate',
            theme: 'light',
            animation: 'scale',
            background: 'gradient',
            backgroundValue: 'linear-gradient(135deg, #064e3b 0%, #047857 50%, #059669 100%)',
            padding: 'large',
            visible: true,
            heading: 'Fund a Mobile Clinic',
            description:
              'A fully equipped mobile clinic costs $50,000 per year and serves 20,000 patients. Your donation keeps our wheels turning.',
            primaryCta: { label: 'Donate Now', href: href('/donate'), variant: 'donate' as const },
            secondaryCta: {
              label: 'View Other Programs',
              href: href('/programs'),
              variant: 'outline' as const,
            },
            donateAmounts: [50, 100, 500, 1000, 5000],
            benefits: [
              { text: 'Sponsor a clinic for $50,000/year' },
              { text: 'Partial sponsorships available' },
              { text: 'Receive field reports and photos' },
            ],
          },
        },
      ],
    },
    'medical-camp': {
      seo: seo['medical-camp'],
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'split',
            theme: 'dark',
            animation: 'parallax',
            background: 'image',
            backgroundValue: '/images/healthcare/hero.jpg',
            padding: 'none',
            visible: true,
            overlayOpacity: 0.4,
            heading: {
              title: 'Free Medical Camps for Underserved Communities',
              subtitle: 'Medical Camps',
              description:
                'Our free medical camps bring comprehensive healthcare services, health education, and preventive screenings to communities that lack access to regular medical care.',
              tag: '300+ Camps Annually',
            },
            backgroundImage: {
              src: '/images/healthcare/hero.jpg',
              alt: 'Medical camp serving a large community',
            },
            stats: [
              { value: 300, suffix: '+', label: 'Annual Camps' },
              { value: 500000, suffix: '+', label: 'Patients Served' },
              { value: 35, suffix: '', label: 'Countries' },
            ],
          },
        },
        {
          type: 'about',
          config: {
            layout: 'default',
            variant: 'story',
            theme: 'light',
            animation: 'fade-in-up',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: {
              title: 'What Is a Medical Camp?',
              subtitle: 'Healthcare on a Larger Scale',
            },
            body: [
              'Medical camps are large-scale, multi-day healthcare events that bring together teams of medical professionals to provide free services to communities that lack access to regular healthcare. Unlike our mobile clinics â€” which visit communities on a recurring basis â€” medical camps are intensive, high-volume events that can treat thousands of patients in a single location over several days.',
              'A typical medical camp includes general medical consultations, eye examinations, dental checkups, laboratory testing, pharmacy services, health education sessions, and specialized services such as cardiology, pediatrics, and gynecology. Many camps also offer surgical services for common conditions like hernias, cataracts, and cleft palates.',
              'In 2025, we organized 342 medical camps across 35 countries, treating over 500,000 patients. Our largest camp in rural India served 12,000 patients in a single week with the help of 200 medical volunteers.',
            ],
            image: {
              src: '/images/healthcare/clinic.jpg',
              alt: 'Large medical camp serving patients',
            },
            stats: [
              { value: 342, suffix: '', label: 'Camps in 2025' },
              { value: 500000, suffix: '+', label: 'Patients Treated' },
              { value: 2000, suffix: '+', label: 'Volunteer Doctors' },
              { value: 35, suffix: '', label: 'Countries' },
            ],
          },
        },
        {
          type: 'impact',
          config: {
            layout: 'counters',
            theme: 'primary',
            animation: 'fade',
            background: 'solid',
            backgroundValue: '#0f2b3d',
            padding: 'large',
            visible: true,
            columns: 4,
            heading: {
              title: 'Medical Camp Impact',
              subtitle: '2025 Annual Report',
            },
            stats: [
              { value: 342, suffix: '', label: 'Medical Camps' },
              { value: 500000, suffix: '+', label: 'Patients Treated' },
              { value: 25000, suffix: '+', label: 'Surgeries Performed' },
              { value: 2000, suffix: '+', label: 'Volunteer Doctors' },
            ],
          },
        },
        {
          type: 'gallery',
          config: {
            layout: 'grid',
            theme: 'light',
            animation: 'fade-in-up',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Medical Camps Around the World',
              subtitle: 'Images from Recent Camps',
            },
            images: [
              { src: '/images/healthcare/gallery8.jpg', alt: 'Medical camp in rural area' },
              { src: '/images/healthcare/hero.jpg', alt: 'Dental checkup at camp' },
              { src: '/images/healthcare/hero.jpg', alt: 'Vaccination station at camp' },
              { src: '/images/healthcare/patient.jpg', alt: 'Surgical team at work' },
              { src: '/images/healthcare/clinic.jpg', alt: 'Health education session' },
              { src: '/images/healthcare/doctor.jpg', alt: 'Pharmacy distribution' },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'volunteer',
            theme: 'light',
            animation: 'scale',
            background: 'gradient',
            backgroundValue: 'linear-gradient(135deg, #064e3b 0%, #047857 50%, #059669 100%)',
            padding: 'large',
            visible: true,
            heading: 'Volunteer at Our Next Medical Camp',
            description:
              'We are looking for doctors, nurses, dentists, pharmacists, and general volunteers for upcoming camps in 15 countries.',
            primaryCta: {
              label: 'Apply to Volunteer',
              href: href('/volunteer'),
              variant: 'primary' as const,
            },
            benefits: [
              { text: 'Travel and accommodation covered' },
              { text: 'Work alongside world-class medical professionals' },
              { text: 'Make a direct, measurable impact' },
            ],
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
            layout: 'split',
            theme: 'dark',
            animation: 'parallax',
            background: 'image',
            backgroundValue: '/images/healthcare/hero.jpg',
            padding: 'none',
            visible: true,
            overlayOpacity: 0.4,
            heading: {
              title: 'Volunteer Your Skills, Save Lives',
              subtitle: 'Join Our Global Health Team',
              description:
                'Whether you are a seasoned surgeon or a medical student taking your first steps, your skills can make a life-changing difference in communities that need them most.',
              tag: '2,000+ Active Volunteers',
            },
            backgroundImage: { src: '/images/healthcare/hero.jpg', alt: 'Medical volunteer team' },
            stats: [
              { value: 2000, suffix: '+', label: 'Active Volunteers' },
              { value: 45, suffix: '', label: 'Countries' },
              { value: 92, suffix: '%', label: 'Would Recommend' },
            ],
          },
        },
        {
          type: 'about',
          config: {
            layout: 'default',
            variant: 'story',
            theme: 'light',
            animation: 'fade-in-up',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Why Volunteer With Us?',
              subtitle: 'A Life-Changing Experience',
            },
            body: [
              'Every year, thousands of medical professionals and volunteers choose to deploy with MedCare Global. They come from over 60 countries, bringing diverse skills and perspectives united by a common purpose: to provide healthcare to those who need it most.',
              'Our volunteers work in mobile clinics, medical camps, telemedicine hubs, and training centers across 45 countries. Typical assignments range from two weeks to six months, with opportunities for both short-term and long-term commitments.',
              'We provide comprehensive pre-deployment training, in-field support, accommodation, meals, and transportation. Our volunteer alumni network includes over 10,000 healthcare professionals who continue to support our mission through advocacy and fundraising.',
            ],
            image: { src: '/images/healthcare/clinic.jpg', alt: 'Diverse medical volunteer team' },
          },
        },
        {
          type: 'volunteerJourney',
          config: {
            layout: 'default',
            theme: 'light',
            animation: 'fade',
            background: 'muted',
            backgroundValue: '#eef2f5',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Your Volunteer Journey',
              subtitle: 'From Application to Impact',
              description: 'A step-by-step guide to becoming a MedCare Global volunteer.',
            },
            steps: [
              {
                icon: 'clipboard-check',
                title: 'Submit Your Application',
                description:
                  'Fill out our online application with your qualifications, availability, and preferred regions. We review applications within two weeks.',
              },
              {
                icon: 'graduation-cap',
                title: 'Attend Orientation & Training',
                description:
                  'Complete our comprehensive training program covering field protocols, cultural competency, safety procedures, and emergency response.',
              },
              {
                icon: 'plane',
                title: 'Deployment & Field Assignment',
                description:
                  'Travel to your assigned location. Our field coordinators meet you on arrival and ensure a smooth transition into your role.',
              },
              {
                icon: 'heart-handshake',
                title: 'Make an Impact on the Ground',
                description:
                  'Work alongside local health workers, treat patients, train community members, and experience the transformative power of direct service.',
              },
              {
                icon: 'refresh-cw',
                title: 'Return & Stay Connected',
                description:
                  'After your assignment, join our alumni network. Share your story, mentor new volunteers, and continue supporting our mission.',
              },
            ],
          },
        },
        {
          type: 'faq',
          config: {
            layout: 'default',
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Volunteer FAQs',
              subtitle: 'Everything You Need to Know Before Applying',
            },
            items: [
              {
                title: 'Who can volunteer?',
                content:
                  'Licensed medical professionals (doctors, nurses, dentists, pharmacists), EMTs, medical students, public health professionals, and administrative volunteers. Non-medical volunteers with specialized skills (logistics, IT, communications) are also welcome.',
              },
              {
                title: 'How long are volunteer assignments?',
                content:
                  'Assignments range from 2 weeks to 6 months. We offer both short-term and long-term opportunities to accommodate different schedules.',
              },
              {
                title: 'Are expenses covered?',
                content:
                  'Yes. We cover all travel costs, accommodation, meals, and local transportation for all volunteers. In addition, we provide comprehensive travel and health insurance.',
              },
              {
                title: 'Do I need to speak another language?',
                content:
                  'English is the primary working language, but knowledge of French, Spanish, Arabic, or Swahili is an asset. We provide basic language training before deployment.',
              },
              {
                title: 'Can I volunteer with my family?',
                content:
                  'Long-term assignments (3+ months) may accommodate accompanying family members. Short-term assignments are typically individual placements.',
              },
              {
                title: 'What safety measures are in place?',
                content:
                  'We conduct thorough security assessments for all locations. Volunteers receive safety training, 24/7 support from our security team, and are never placed in active conflict zones.',
              },
            ],
            allowMultiple: false,
            variant: 'bordered',
          },
        },
        {
          type: 'testimonials',
          config: {
            layout: 'carousel',
            theme: 'light',
            animation: 'scale',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Volunteer Stories',
              subtitle: 'Hear From Those Who Have Served',
            },
            testimonials: [
              {
                quote:
                  'My two months in rural Zambia were the most challenging and rewarding of my life. I learned more about medicine, resilience, and humanity than in years of training.',
                name: 'Dr. Michael Torres',
                role: 'Emergency Medicine Physician',
                avatar: { src: '/images/healthcare/patient.jpg', alt: 'Dr. Michael Torres' },
                rating: 5,
              },
              {
                quote:
                  'As a nursing student, I was nervous about my first deployment. The support from the field team was incredible. I gained confidence and skills that I carry into every shift now.',
                name: 'Lisa Nakamura',
                role: 'Student Nurse, Canada',
                avatar: { src: '/images/healthcare/clinic.jpg', alt: 'Lisa Nakamura' },
                rating: 5,
              },
              {
                quote:
                  "I have volunteered with five different NGOs. MedCare Global's organization, training, and field support are the best I have experienced. They truly care about their volunteers.",
                name: 'Dr. Ahmed Hassan',
                role: 'General Surgeon, Egypt',
                avatar: { src: '/images/healthcare/doctor.jpg', alt: 'Dr. Ahmed Hassan' },
                rating: 5,
              },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'volunteer',
            theme: 'light',
            animation: 'scale',
            background: 'gradient',
            backgroundValue: 'linear-gradient(135deg, #064e3b 0%, #047857 50%, #059669 100%)',
            padding: 'large',
            visible: true,
            heading: 'Ready to Make a Difference?',
            description:
              'Join over 2,000 active medical volunteers serving communities in 45 countries.',
            primaryCta: {
              label: 'Apply Now',
              href: href('/volunteer'),
              variant: 'primary' as const,
            },
            secondaryCta: {
              label: 'Learn More About Programs',
              href: href('/programs'),
              variant: 'outline' as const,
            },
            benefits: [
              { text: 'Pre-deployment training provided' },
              { text: 'All travel and accommodation covered' },
              { text: 'Professional development and networking' },
            ],
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
            animation: 'parallax',
            background: 'image',
            backgroundValue: '/images/healthcare/hero.jpg',
            padding: 'none',
            visible: true,
            overlayOpacity: 0.45,
            heading: {
              title: 'Your Donation Saves Lives',
              subtitle: 'Make a Difference Today',
              description:
                'Every contribution, no matter the size, provides life-saving medical care to someone in need. Join 50,000+ monthly donors who make our work possible.',
            },
            backgroundImage: { src: '/images/healthcare/hero.jpg', alt: 'Grateful patient' },
            stats: [
              { value: 96, suffix: '%', label: 'Goes to Programs' },
              { value: 50000, suffix: '+', label: 'Monthly Donors' },
              { value: 45, suffix: '', label: 'Countries Reached' },
            ],
            trustBadges: [
              {
                src: '/images/trust/gold-transparency.svg',
                alt: 'Gold Transparency 2026',
                name: 'Gold Transparency 2026',
              },
              {
                src: '/images/trust/charity-navigator.svg',
                alt: 'Charity Navigator 4-Star',
                name: 'Charity Navigator 4-Star',
              },
              {
                src: '/images/trust/gold-transparency.svg',
                alt: 'Candid Platinum Seal',
                name: 'Candid Platinum Seal',
              },
            ],
          },
        },
        {
          type: 'donationJourney',
          config: {
            layout: 'default',
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: {
              title: 'How Your Donation Saves Lives',
              subtitle: 'The Journey of Your Gift',
            },
            steps: [
              {
                icon: 'heart',
                title: 'You Give',
                description: 'A one-time or monthly donation â€” every dollar counts.',
              },
              {
                icon: 'truck',
                title: 'We Deliver',
                description:
                  'Medical supplies, vaccines, and medicines reach communities within weeks.',
              },
              {
                icon: 'stethoscope',
                title: 'Patients Receive Care',
                description: 'Doctors and health workers provide treatment and follow-up.',
              },
              {
                icon: 'bar-chart',
                title: 'You See the Impact',
                description: 'Monthly reports, patient stories, and financial transparency.',
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
            heading: 'Choose Your Impact',
            description:
              'Select an amount to donate or set up monthly giving. Every gift is tax-deductible.',
            primaryCta: { label: 'Donate Now', href: href('/donate'), variant: 'donate' as const },
            donateAmounts: [25, 50, 100, 250, 500, 1000],
            benefits: [
              { text: '96% of donations go directly to programs' },
              { text: 'Tax deductible in most countries' },
              { text: 'Monthly impact reports' },
              { text: 'Rated 4-star by Charity Navigator' },
            ],
          },
        },
        {
          type: 'impact',
          config: {
            layout: 'cards',
            theme: 'primary',
            animation: 'fade',
            background: 'solid',
            backgroundValue: '#0f2b3d',
            padding: 'large',
            visible: true,
            heading: {
              title: 'What Your Donation Provides',
              subtitle: 'Real Impact, Real Numbers',
            },
            stats: [
              {
                value: 25,
                suffix: '',
                label: 'Provides vaccines for 50 children',
                icon: 'syringe',
              },
              {
                value: 50,
                suffix: '',
                label: 'Funds a health education session for a village',
                icon: 'book-open',
              },
              {
                value: 100,
                suffix: '',
                label: 'Supplies a mobile clinic for one day',
                icon: 'ambulance',
              },
              {
                value: 500,
                suffix: '',
                label: 'Trains a community health worker',
                icon: 'graduation-cap',
              },
            ],
          },
        },
        {
          type: 'testimonials',
          config: {
            layout: 'carousel',
            theme: 'light',
            animation: 'scale',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Why People Donate',
              subtitle: 'Stories of Generosity',
            },
            testimonials: [
              {
                quote:
                  "I started donating $50 a month after seeing the difference mobile clinics made in my grandmother's village. Knowing I help save lives every month is the best feeling in the world.",
                name: 'Ryan Thompson',
                role: 'Monthly Donor, USA',
                rating: 5,
              },
              {
                quote:
                  'For my 40th birthday, I asked friends to donate to MedCare Global instead of buying gifts. We raised $12,000 â€” enough to fund a mobile clinic for three months.',
                name: 'Natasha Patel',
                role: 'Fundraiser, UK',
                rating: 5,
              },
              {
                quote:
                  'I have been donating for five years. The transparency reports show exactly where every dollar goes. I have never felt more confident in a charity.',
                name: 'Carlos Rivera',
                role: 'Donor, Mexico',
                rating: 5,
              },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'banner',
            theme: 'light',
            animation: 'fade',
            background: 'muted',
            backgroundValue: '#eef2f5',
            padding: 'large',
            visible: true,
            heading: 'Not Ready to Donate?',
            description:
              'You can still help by starting a fundraiser, volunteering your time, or sharing our mission with your network.',
            primaryCta: { label: 'Start a Fundraiser', href: '#', variant: 'primary' as const },
            secondaryCta: {
              label: 'Volunteer With Us',
              href: href('/volunteer'),
              variant: 'outline' as const,
            },
          },
        },
      ],
    },
    resources: {
      seo: seo.resources,
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center',
            theme: 'dark',
            animation: 'parallax',
            background: 'image',
            backgroundValue: '/images/healthcare/hero.jpg',
            padding: 'none',
            visible: true,
            overlayOpacity: 0.4,
            heading: {
              title: 'Health Resources & Insights',
              subtitle: 'Knowledge to Empower Communities',
              description:
                'Expert health tips, medical research, downloadable guides, and stories from the frontlines of global health.',
            },
            backgroundImage: { src: '/images/healthcare/hero.jpg', alt: 'Healthcare resources' },
          },
        },
        {
          type: 'news',
          config: {
            layout: 'grid',
            theme: 'light',
            animation: 'fade-in-up',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: 'Featured Articles',
            subtitle: 'Expert Health Insights',
            description: 'Evidence-based health information written by our medical team.',
            articles: [
              {
                title: 'Complete Guide to Childhood Vaccinations',
                slug: 'vaccination-guide',
                date: '2026-07-01',
                category: 'Health Guide',
                excerpt:
                  'Everything parents need to know about recommended vaccinations from infancy through adolescence.',
                image: '/images/healthcare/gallery3.jpg',
                author: { name: 'Dr. Maria Santos', role: 'Immunization Lead' },
              },
              {
                title: 'Understanding Malaria: Prevention, Symptoms, and Treatment',
                slug: 'malaria-guide',
                date: '2026-06-15',
                category: 'Disease Guide',
                excerpt:
                  'A comprehensive overview of malaria prevention, early warning signs, and effective treatment options.',
                image: '/images/healthcare/gallery4.jpg',
                author: { name: 'Dr. James Kiprop', role: 'Field Medical Director' },
              },
              {
                title: 'Mental Health First Aid: A Practical Guide',
                slug: 'mental-health-first-aid',
                date: '2026-05-20',
                category: 'Resource',
                excerpt:
                  'Learn how to recognize mental health crises and provide initial support until professional help arrives.',
                image: '/images/healthcare/gallery6.jpg',
                author: { name: 'Dr. Emily Watson', role: 'Mental Health Director' },
              },
              {
                title: 'Nutrition Tips for Pregnant Women in Resource-Limited Settings',
                slug: 'pregnancy-nutrition',
                date: '2026-05-01',
                category: 'Health Guide',
                excerpt:
                  'Practical nutrition advice for expectant mothers using locally available foods and minimal resources.',
                image: '/images/healthcare/hero.jpg',
                author: { name: 'Grace Okonkwo', role: 'Maternal Health Lead' },
              },
              {
                title: 'Clean Water and Sanitation: The Foundation of Community Health',
                slug: 'clean-water-health',
                date: '2026-04-10',
                category: 'Research',
                excerpt:
                  'How access to clean water and proper sanitation reduces disease burden in developing communities.',
                image: '/images/healthcare/patient.jpg',
                author: { name: 'David Okonkwo', role: 'Executive Director' },
              },
              {
                title: 'Downloadable: Community Health Worker Training Manual',
                slug: 'chw-manual',
                date: '2026-03-15',
                category: 'Download',
                excerpt:
                  'Our complete training manual for community health workers, available for free download in English, French, and Spanish.',
                image: '/images/healthcare/clinic.jpg',
                author: { name: 'Anna Petrov', role: 'Training Lead' },
              },
            ],
            showCategories: true,
            showAuthor: true,
          },
        },
        {
          type: 'newsletter',
          config: {
            layout: 'default',
            theme: 'primary',
            animation: 'fade',
            background: 'solid',
            backgroundValue: '#0f2b3d',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Get Health Tips Delivered to Your Inbox',
              subtitle: 'Subscribe to Our Monthly Newsletter',
            },
            title: 'Monthly Health Digest',
            description:
              'Expert health tips, program updates, patient stories, and research highlights â€” straight to your inbox every month.',
            placeholder: 'Your email address',
            buttonLabel: 'Subscribe Free',
            successMessage: 'Welcome! Check your email to confirm your subscription.',
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
            heading: 'Have a Health Question?',
            description:
              'Our medical team is here to help. Reach out with your health questions or download our free health guides.',
            primaryCta: {
              label: 'Contact Our Team',
              href: href('/contact'),
              variant: 'primary' as const,
            },
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
            animation: 'parallax',
            background: 'image',
            backgroundValue: '/images/healthcare/hero.jpg',
            padding: 'none',
            visible: true,
            overlayOpacity: 0.4,
            heading: {
              title: 'Gallery',
              subtitle: 'Our Work in Pictures',
              description:
                'A visual journey through our healthcare missions â€” moments of care, compassion, and hope from around the world.',
            },
            backgroundImage: { src: '/images/healthcare/hero.jpg', alt: 'Nurse treating child' },
          },
        },
        {
          type: 'gallery',
          config: {
            layout: 'masonry',
            theme: 'light',
            animation: 'fade-in-up',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Moments That Matter',
              subtitle: 'Capturing Hope Around the World',
            },
            images: [
              { src: '/images/healthcare/doctor.jpg', alt: 'Mobile clinic in mountain village' },
              { src: '/images/healthcare/gallery2.jpg', alt: 'Vaccination campaign at school' },
              { src: '/images/healthcare/gallery3.jpg', alt: 'Maternal health consultation' },
              { src: '/images/healthcare/hero.jpg', alt: 'Surgical team in field hospital' },
              {
                src: '/images/healthcare/patient.jpg',
                alt: 'Health education session with children',
              },
              { src: '/images/healthcare/clinic.jpg', alt: 'Community health fair' },
              { src: '/images/healthcare/doctor.jpg', alt: 'Dental checkup at camp' },
              { src: '/images/healthcare/gallery4.jpg', alt: 'Telemedicine consultation' },
              { src: '/images/healthcare/gallery6.jpg', alt: 'Pharmacy distribution' },
              { src: '/images/healthcare/gallery7.jpg', alt: 'Volunteer team photo' },
              { src: '/images/healthcare/gallery8.jpg', alt: 'Nutrition program for children' },
              { src: '/images/healthcare/hero.jpg', alt: 'Emergency response team' },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered',
            theme: 'light',
            animation: 'fade',
            background: 'muted',
            backgroundValue: '#eef2f5',
            padding: 'large',
            visible: true,
            heading: 'Be Part of Our Story',
            description: 'Your support helps us create more moments of hope and healing.',
            primaryCta: { label: 'Donate Now', href: href('/donate'), variant: 'donate' as const },
            secondaryCta: {
              label: 'Share Your Photos',
              href: href('/contact'),
              variant: 'outline' as const,
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
            animation: 'parallax',
            background: 'image',
            backgroundValue: '/images/healthcare/hero.jpg',
            padding: 'none',
            visible: true,
            overlayOpacity: 0.4,
            heading: {
              title: 'Frequently Asked Questions',
              subtitle: 'Everything You Need to Know',
              description:
                'Find answers to common questions about our organization, programs, donations, volunteering, and more.',
            },
            backgroundImage: { src: '/images/healthcare/hero.jpg', alt: 'Healthcare FAQ' },
          },
        },
        {
          type: 'faq',
          config: {
            layout: 'default',
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: {
              title: 'General Questions',
              subtitle: 'About MedCare Global',
            },
            items: [
              {
                title: 'What is MedCare Global?',
                content:
                  'MedCare Global is a 501(c)(3) nonprofit organization that provides quality healthcare to underserved communities worldwide through mobile clinics, telemedicine, and community health programs.',
              },
              {
                title: 'Where does MedCare Global operate?',
                content:
                  'We operate in 45 countries across Africa, Asia, Latin America, and the Middle East, with headquarters in New York and regional offices in Nairobi, Bangkok, and BogotÃ¡.',
              },
              {
                title: 'How is MedCare Global funded?',
                content:
                  'We are funded through individual donations, corporate partnerships, foundation grants, and government contracts. We do not accept tobacco, alcohol, or arms industry funding.',
              },
              {
                title: 'Is MedCare Global a religious organization?',
                content:
                  'No. MedCare Global is a secular, non-religious organization. We provide healthcare to all people regardless of religion, ethnicity, gender, or political affiliation.',
              },
            ],
            allowMultiple: true,
            variant: 'bordered',
          },
        },
        {
          type: 'faq',
          config: {
            layout: 'default',
            theme: 'light',
            animation: 'fade',
            background: 'muted',
            backgroundValue: '#eef2f5',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Donations',
              subtitle: 'How Your Gift Makes an Impact',
            },
            items: [
              {
                title: 'How much of my donation goes to programs?',
                content:
                  '96% of every dollar donated goes directly to our medical programs and patient care. We maintain a 4% overhead rate, one of the lowest in the nonprofit healthcare sector.',
              },
              {
                title: 'Is my donation tax-deductible?',
                content:
                  'Yes. MedCare Global is a registered 501(c)(3) nonprofit organization (EIN: XX-XXXXXXX). Donations are tax-deductible to the full extent of the law in the United States.',
              },
              {
                title: "Can I donate in someone's honor?",
                content:
                  'Yes. You can make a tribute donation in honor or memory of a loved one. We will send a personalized acknowledgment card to the honoree or their family.',
              },
              {
                title: 'Can I set up a monthly donation?',
                content:
                  'Yes. Monthly donations are the most effective way to support our work. You can set up recurring donations of any amount and cancel at any time.',
              },
              {
                title: 'What payment methods do you accept?',
                content:
                  'We accept credit/debit cards (Visa, Mastercard, Amex), PayPal, bank transfers, and cryptocurrency. For large donations, please contact us for wire transfer details.',
              },
            ],
            allowMultiple: true,
            variant: 'bordered',
          },
        },
        {
          type: 'faq',
          config: {
            layout: 'default',
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Volunteering',
              subtitle: 'Join Our Global Health Team',
            },
            items: [
              {
                title: 'Who can volunteer?',
                content:
                  'Licensed medical professionals, medical students, public health professionals, and skilled non-medical volunteers (logistics, IT, communications, administration).',
              },
              {
                title: 'How long are assignments?',
                content:
                  'From 2 weeks to 6 months. We offer both short-term and long-term opportunities.',
              },
              {
                title: 'Are volunteer expenses covered?',
                content:
                  'Yes. We cover travel, accommodation, meals, local transportation, and comprehensive insurance.',
              },
              {
                title: 'How do I apply?',
                content:
                  'Visit our volunteer page and submit an online application. Our volunteer team reviews applications within two weeks.',
              },
            ],
            allowMultiple: false,
            variant: 'bordered',
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered',
            theme: 'light',
            animation: 'fade',
            background: 'muted',
            backgroundValue: '#eef2f5',
            padding: 'large',
            visible: true,
            heading: 'Still Have Questions?',
            description:
              'Our team is happy to answer any questions you may have. Reach out to us anytime.',
            primaryCta: {
              label: 'Contact Us',
              href: href('/contact'),
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
            animation: 'parallax',
            background: 'image',
            backgroundValue: '/images/healthcare/hero.jpg',
            padding: 'none',
            visible: true,
            overlayOpacity: 0.4,
            heading: {
              title: 'Get in Touch',
              subtitle: 'We Are Here to Help',
              description:
                'Whether you have a question about our programs, want to partner with us, need medical assistance, or want to report a health emergency â€” we are here for you.',
            },
            backgroundImage: { src: '/images/healthcare/hero.jpg', alt: 'Contact MedCare Global' },
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
            heading: 'Contact Information',
            description:
              'Reach out to our team for questions, partnership inquiries, volunteer applications, or press inquiries.',
            email: 'info@medcareglobal.org',
            phone: '+1 (800) MED-CARE',
            address: '420 Health Sciences Drive, Suite 300, New York, NY 10016, United States',
            primaryCta: { label: 'Send a Message', href: '#', variant: 'primary' as const },
            secondaryCta: {
              label: 'Emergency Hotline',
              href: 'tel:+18006332273',
              variant: 'danger' as const,
            },
          },
        },
        {
          type: 'faq',
          config: {
            layout: 'default',
            theme: 'light',
            animation: 'fade',
            background: 'muted',
            backgroundValue: '#eef2f5',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Quick Answers',
              subtitle: 'Common Contact Questions',
            },
            items: [
              {
                title: 'How quickly do you respond to inquiries?',
                content:
                  'We typically respond to general inquiries within 24 hours. Emergency reports are flagged and responded to within 2 hours.',
              },
              {
                title: 'Do you have offices in other countries?',
                content:
                  'Yes. We have regional offices in Nairobi (Kenya), Bangkok (Thailand), BogotÃ¡ (Colombia), and Amman (Jordan).',
              },
              {
                title: 'How can I report a medical emergency?',
                content:
                  'Call our emergency hotline at +1 (800) MED-CARE or use the emergency contact form on this page. Our crisis response team is available 24/7.',
              },
              {
                title: 'Can I visit your headquarters?',
                content:
                  'Yes. We welcome visitors by appointment. Please contact us to schedule a tour of our New York headquarters.',
              },
            ],
            allowMultiple: false,
            variant: 'bordered',
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
            heading: 'Emergency? Call Our 24/7 Hotline',
            description:
              'If you are facing a medical emergency or need to report a health crisis, our team is available around the clock.',
            primaryCta: {
              label: 'Call +1 (800) MED-CARE',
              href: 'tel:+18006332273',
              variant: 'danger' as const,
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
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Page Not Found',
              subtitle: '404',
              description:
                'We could not find the page you are looking for. It may have been moved, deleted, or the link may be incorrect.',
            },
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
            heading: 'Let Us Help You Find Your Way',
            description:
              'Visit our homepage or explore our programs to learn more about our mission.',
            primaryCta: { label: 'Back to Home', href: href(''), variant: 'primary' as const },
            secondaryCta: {
              label: 'Our Programs',
              href: href('/programs'),
              variant: 'outline' as const,
            },
          },
        },
      ],
    },
  },
};
