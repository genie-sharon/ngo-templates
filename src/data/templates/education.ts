import type { TemplateData } from './types';

const href = (path: string) => `/templates/education${path}`;

const nav = {
  layout: 'transparent' as const,
  logo: { text: 'EduBridge Africa', href: href('') },
  menuItems: [
    { label: 'Home', href: href('') },
    { label: 'About', href: href('/about') },
    {
      label: 'Programs',
      href: href('/programs'),
      children: [
        { label: 'Early Childhood', href: href('/program-detail') },
        { label: 'Girls Education', href: href('/programs') },
        { label: 'Scholarships', href: href('/scholarships') },
        { label: 'STEM Labs', href: href('/programs') },
      ],
    },
    { label: 'Scholarships', href: href('/scholarships') },
    { label: 'Gallery', href: href('/gallery') },
    { label: 'Resources', href: href('/resources') },
    { label: 'Contact', href: href('/contact') },
  ],
  ctaButtons: [
    { label: 'Donate', href: href('/donate'), variant: 'primary' as const, size: 'md' as const },
  ],
  showSearch: true,
  showLanguageSwitcher: true,
  languages: [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'FranÃ§ais' },
    { code: 'sw', label: 'Kiswahili' },
  ],
  sticky: true,
  theme: 'dark' as const,
};

const footer = {
  layout: 'mega' as const,
  theme: 'dark' as const,
  animation: 'fade' as const,
  background: 'solid' as const,
  backgroundValue: '#0f1b2d',
  padding: 'large' as const,
  visible: true,
  logo: { text: 'EduBridge Africa', href: href('') },
  description:
    'Building schools, training teachers, and providing scholarships to ensure every African child has access to quality education. Since 2008, we have impacted over 500,000 young lives.',
  columns: [
    {
      title: 'Our Programs',
      links: [
        { label: 'Early Childhood Education', href: href('/program-detail') },
        { label: "Girls' Education Initiative", href: href('/programs') },
        { label: 'Scholarship Program', href: href('/scholarships') },
        { label: 'STEM for Africa', href: href('/programs') },
        { label: 'Adult Literacy', href: href('/programs') },
      ],
    },
    {
      title: 'Get Involved',
      links: [
        { label: 'Sponsor a Student', href: href('/scholarships') },
        { label: 'Donate', href: href('/donate') },
        { label: 'Volunteer', href: href('/volunteer') },
        { label: 'Become a Partner', href: href('/contact') },
        { label: 'Careers', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Learning Resources', href: href('/resources') },
        { label: 'Blog & News', href: href('/news') },
        { label: 'Research Reports', href: href('/resources') },
        { label: 'FAQ', href: href('/faq') },
        { label: 'Contact Us', href: href('/contact') },
      ],
    },
    {
      title: 'Our Impact',
      links: [
        { label: '500,000+ Students Educated', href: href('/about') },
        { label: '2,000+ Schools Built', href: href('/about') },
        { label: '50,000+ Teachers Trained', href: href('/about') },
        { label: '12 Countries Reached', href: href('/about') },
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
  copyright: 'Â© 2026 EduBridge Africa. All rights reserved. Registered 501(c)(3) nonprofit.',
  showBackToTop: true,
  legalLinks: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Child Protection Policy', href: '#' },
  ],
};

const seo = {
  home: {
    title: 'EduBridge Africa â€” Quality Education for Every Child',
    description:
      'EduBridge Africa builds schools, trains teachers, and provides scholarships to ensure every African child has access to quality education. Join us in transforming lives through learning.',
  },
  about: {
    title: 'About Us â€” EduBridge Africa',
    description:
      "Learn about EduBridge Africa's mission to transform education across Africa since 2008. Building schools, training teachers, and empowering communities.",
  },
  programs: {
    title: 'Our Programs â€” EduBridge Africa',
    description:
      'Early childhood education, girls education, STEM programs, scholarships, and adult literacy initiatives transforming lives across 12 African countries.',
  },
  'program-detail': {
    title: 'Early Childhood Education â€” EduBridge Africa',
    description:
      'Play-based preschool programs preparing young children for academic success through quality early childhood education.',
  },
  scholarships: {
    title: 'Scholarships â€” EduBridge Africa',
    description:
      "Sponsor a student's education. Scholarships for girls, rural students, and talented youth who need financial support to attend school.",
  },
  volunteer: {
    title: 'Volunteer â€” EduBridge Africa',
    description:
      'Join EduBridge Africa volunteer program. Teachers, mentors, and education specialists needed across 12 African countries.',
  },
  donate: {
    title: 'Donate â€” EduBridge Africa',
    description:
      'Your donation sends a child to school, trains a teacher, or builds a classroom. Every gift transforms a life through education.',
  },
  resources: {
    title: 'Resources â€” EduBridge Africa',
    description:
      'Free educational resources, teaching guides, learning materials, and research reports for educators and parents.',
  },
  gallery: {
    title: 'Gallery â€” EduBridge Africa',
    description:
      'Photos from our schools, classrooms, and education programs across Africa. See the joy of learning in action.',
  },
  news: {
    title: 'News â€” EduBridge Africa',
    description:
      "Latest updates, success stories, and education research from EduBridge Africa's programs across the continent.",
  },
  faq: {
    title: 'FAQ â€” EduBridge Africa',
    description:
      'Frequently asked questions about EduBridge Africa, our programs, and how to support education in Africa.',
  },
  contact: {
    title: 'Contact Us â€” EduBridge Africa',
    description:
      'Get in touch with EduBridge Africa. Partnership inquiries, volunteer applications, and media requests welcome.',
  },
  'not-found': {
    title: 'Page Not Found â€” EduBridge Africa',
    description: 'The page you are looking for could not be found.',
  },
};

export const educationTemplate: TemplateData = {
  slug: 'education',
  name: 'Education NGO',
  tagline: 'Building minds, transforming futures',
  description:
    'A bright, optimistic education NGO template for organizations focused on child education, scholarships, and youth development.',
  themeId: 'education',
  mood: 'Bright, Optimistic, Joyful, Empowering',
  illustrationStyle: 'Children learning, classroom photography, colorful educational illustrations',
  motionStyle:
    'Energetic transitions with bounce effects, floating elements, scroll reveals, and animated counters.',
  navigation: nav,
  footer: footer,
  pages: {
    home: {
      seo: seo.home,
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'image',
            theme: 'dark',
            animation: 'fade-in-up',
            background: 'image',
            backgroundValue: '/images/education/hero.jpg',
            padding: 'none',
            visible: true,
            fullHeight: false,
            overlayOpacity: 0.3,
            heading: {
              title: 'Every Child Deserves a Quality Education',
              subtitle: 'EduBridge Africa',
              description:
                'We build schools, train teachers, and provide scholarships to ensure every African child has the opportunity to learn and build a brighter future.',
              tag: 'Transforming Lives Since 2008',
            },
            backgroundImage: {
              src: '/images/education/hero.jpg',
              alt: 'Children in a bright classroom',
            },
            decorativeShapes: [
              { type: 'circle', position: 'top-right', color: '#ff8c42', size: 'lg' },
              { type: 'blob', position: 'bottom-left', color: '#ffb347', size: 'md' },
              { type: 'wave', position: 'top-left', color: '#ff6b35', size: 'sm' },
            ],
            stats: [
              { value: 500000, suffix: '+', label: 'Students Educated' },
              { value: 2000, suffix: '+', label: 'Schools Built' },
              { value: 50000, suffix: '+', label: 'Teachers Trained' },
              { value: 12, suffix: '', label: 'Countries Reached' },
            ],
            trustBadges: [
              { src: '/images/trust/default.svg', alt: 'UNESCO Partner', name: 'UNESCO Partner' },
              {
                src: '/images/trust/default.svg',
                alt: 'Global Partnership for Education',
                name: 'GPE Member',
              },
              {
                src: '/images/trust/gold-transparency.svg',
                alt: 'Gold Transparency 2026',
                name: 'Gold Transparency 2026',
              },
            ],
            floatingStats: true,
            showScrollIndicator: true,
          },
        },
        {
          type: 'about',
          config: {
            layout: 'default',
            variant: 'timeline',
            theme: 'light',
            animation: 'stagger',
            background: 'gradient',
            backgroundValue: 'linear-gradient(180deg, #fff7ed 0%, #fffbeb 50%, #fff7ed 100%)',
            padding: 'large',
            visible: true,
            heading: { title: 'Our Mission', subtitle: 'Why We Exist' },
            body: [
              'EduBridge Africa was founded in 2008 by Dr. Kwame Asante, a former teacher who saw the transformative power of education firsthand. Growing up in a small village in Ghana with no school, he walked 10 kilometers each day to attend classes. That journey inspired a lifelong mission: to ensure no child has to choose between education and survival.',
              'Today, we operate 2,000+ schools across 12 African countries, have trained 50,000 teachers, and have helped over 500,000 children access quality education. From early childhood programs to adult literacy, we create pathways to learning at every stage of life.',
              'We partner with communities, governments, and international organizations to build sustainable education systems that last for generations.',
            ],
            mission:
              'To ensure every African child has access to free, quality education from early childhood through secondary school.',
            vision:
              'A continent where every child can read, write, and dream, and has the skills to build a better future.',
            values: [
              {
                title: 'Equity',
                description:
                  'We prioritize girls, children with disabilities, and out-of-school youth who face the greatest barriers.',
                icon: 'scale',
              },
              {
                title: 'Quality',
                description:
                  'We invest in teacher training, evidence-based curricula, and continuous improvement.',
                icon: 'star',
              },
              {
                title: 'Community',
                description:
                  'We partner with parents, community leaders, and local governments to build ownership.',
                icon: 'users',
              },
              {
                title: 'Innovation',
                description:
                  'We use technology and data to reach more children and measure our impact.',
                icon: 'lightbulb',
              },
            ],
            image: { src: '/images/education/about.jpg', alt: 'Dr. Kwame Asante with students' },
            stats: [
              { value: 500000, suffix: '+', label: 'Students Educated', icon: 'graduation-cap' },
              { value: 2000, suffix: '+', label: 'Schools Built', icon: 'school' },
              { value: 50000, suffix: '+', label: 'Teachers Trained', icon: 'chalkboard-teacher' },
              { value: 12, suffix: '', label: 'Countries Reached', icon: 'globe-africa' },
            ],
            timeline: [
              {
                year: '2008',
                title: 'First Class Under a Tree',
                description:
                  'Dr. Kwame Asante starts teaching 50 children under a mango tree in his home village in Ghana.',
              },
              {
                year: '2012',
                title: '50 Schools in 3 Countries',
                description: 'EduBridge expands to Kenya and Uganda, reaching 15,000 students.',
              },
              {
                year: '2018',
                title: '100,000 Students Reached',
                description: 'A historic milestone as EduBridge reaches 100,000 enrolled students.',
              },
              {
                year: '2023',
                title: '500,000 Students Reached',
                description: 'EduBridge reaches 500,000 students across 12 African countries.',
              },
              {
                year: '2026',
                title: 'Goal: 1 Million by 2030',
                description:
                  'Ambitious expansion plan to reach 1 million students with 5,000 schools by 2030.',
              },
            ],
          },
        },
        {
          type: 'impact',
          config: {
            layout: 'progress',
            theme: 'primary',
            animation: 'scale',
            background: 'solid',
            backgroundValue: '#fb923c',
            padding: 'large',
            visible: true,
            columns: 4,
            heading: {
              title: 'Our Impact in Numbers',
              subtitle: 'Real Results, Real Futures Changed',
            },
            stats: [
              {
                value: 500000,
                suffix: '+',
                label: 'Students Educated',
                icon: 'graduation-cap',
                progress: 50,
              },
              { value: 2000, suffix: '+', label: 'Schools Built', icon: 'school', progress: 40 },
              {
                value: 50000,
                suffix: '+',
                label: 'Teachers Trained',
                icon: 'chalkboard-teacher',
                progress: 50,
              },
              {
                value: 12,
                suffix: '',
                label: 'Countries Reached',
                icon: 'globe-africa',
                progress: 100,
              },
            ],
            progressMax: 1000000,
            showProgressLabels: true,
          },
        },
        {
          type: 'programs',
          config: {
            layout: 'bento',
            theme: 'light',
            animation: 'stagger',
            background: 'none',
            padding: 'large',
            visible: true,
            columns: 3,
            showCategoryBadges: true,
            showImpactStats: true,
            heading: {
              title: 'Our Education Programs',
              subtitle: 'How We Create Opportunities',
              description:
                'From early childhood to adult literacy, every program is designed to unlock potential and build brighter futures.',
            },
            programs: [
              {
                id: 'early-childhood',
                title: 'Early Childhood Education',
                description:
                  'Play-based preschool programs preparing young children for academic success through quality early learning and development.',
                image: {
                  src: '/images/education/classroom.jpg',
                  alt: 'Children in a preschool classroom',
                },
                category: 'Early Learning',
                impactStat: '150K+ children enrolled',
                cta: { label: 'Learn More', href: href('/program-detail') },
                featured: true,
              },
              {
                id: 'girls-education',
                title: "Girls' Education Initiative",
                description:
                  'Breaking barriers to keep girls in school through scholarships, mentorship, sanitary support, and community advocacy.',
                image: { src: '/images/education/about.jpg', alt: 'Girls studying in a classroom' },
                category: 'Gender Equity',
                impactStat: '120K+ girls supported',
                cta: { label: 'Learn More', href: href('/programs') },
              },
              {
                id: 'scholarships',
                title: 'Scholarship Program',
                description:
                  'Full and partial scholarships for talented students from low-income families who cannot afford school fees, uniforms, or supplies.',
                image: {
                  src: '/images/education/classroom.jpg',
                  alt: 'Student receiving scholarship certificate',
                },
                category: 'Access',
                impactStat: '50K+ scholarships awarded',
                cta: { label: 'Sponsor a Student', href: href('/scholarships') },
              },
              {
                id: 'stem-labs',
                title: 'STEM for Africa',
                description:
                  'Mobile science labs, coding clubs, and robotics workshops sparking curiosity and building 21st-century skills.',
                image: {
                  src: '/images/education/about.jpg',
                  alt: 'Students using a mobile science lab',
                },
                category: 'STEM Education',
                impactStat: '80K+ students reached',
                cta: { label: 'Learn More', href: href('/programs') },
              },
              {
                id: 'teacher-training',
                title: 'Teacher Training',
                description:
                  'Professional development programs equipping teachers with modern pedagogy, inclusive classroom techniques, and subject expertise.',
                image: {
                  src: '/images/education/classroom.jpg',
                  alt: 'Teachers in a training workshop',
                },
                category: 'Teacher Development',
                impactStat: '50K+ teachers trained',
                cta: { label: 'Learn More', href: href('/programs') },
              },
              {
                id: 'adult-literacy',
                title: 'Adult Literacy Program',
                description:
                  'Evening classes and community learning centers helping adults gain basic literacy, numeracy, and vocational skills.',
                image: {
                  src: '/images/education/about.jpg',
                  alt: 'Adult learners in a community classroom',
                },
                category: 'Adult Education',
                impactStat: '30K+ adults served',
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
            animation: 'fade',
            background: 'solid',
            backgroundValue: '#fff7ed',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Student Success Stories',
              subtitle: 'Lives Transformed Through Education',
              description:
                'Real stories of hope, determination, and achievement from the students we serve.',
            },
            stories: [
              {
                name: 'Amina Diallo',
                role: 'Scholarship Recipient, Senegal',
                image: { src: '/images/education/about.jpg', alt: 'Amina Diallo' },
                quote:
                  'I was forced to drop out of school when I was 12 because my family could not afford the fees. EduBridge gave me a scholarship, and today I am studying medicine at the University of Dakar. I want to become a doctor and serve my community.',
                impactStat: '50,000+',
                impactLabel: 'Scholarships Awarded',
              },
              {
                name: 'Peter Ochieng',
                role: 'STEM Program Graduate, Kenya',
                image: { src: '/images/education/about.jpg', alt: 'Peter Ochieng' },
                quote:
                  'The mobile STEM lab came to our village when I was 14. I built my first robot that day. Now I am a software engineer at a tech company in Nairobi, and I mentor students in my home village.',
                impactStat: '80,000+',
                impactLabel: 'Students in STEM',
              },
              {
                name: 'Grace Mwangi',
                role: 'Teacher, Rural Kenya',
                image: { src: '/images/education/about.jpg', alt: 'Grace Mwangi' },
                quote:
                  'I was teaching 80 students in a crumbling classroom with no textbooks. EduBridge trained me in modern teaching methods and provided learning materials. My students test scores improved by 60% in one year.',
                impactStat: '50,000+',
                impactLabel: 'Teachers Trained',
              },
              {
                name: 'Fatoumata TraorÃ©',
                role: 'Adult Learner, Mali',
                image: { src: '/images/education/library.jpg', alt: 'Fatoumata TraorÃ©' },
                quote:
                  'I was 35 years old and could not read or write. I joined the adult literacy program and learned to read in six months. Now I run a small business and help my children with their homework.',
                impactStat: '30,000+',
                impactLabel: 'Adult Learners',
              },
            ],
          },
        },
        {
          type: 'testimonials',
          config: {
            layout: 'video',
            theme: 'light',
            animation: 'stagger',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: { title: 'What People Say', subtitle: 'Voices of Hope and Gratitude' },
            testimonials: [
              {
                quote:
                  'Volunteering with EduBridge Africa was the most transformative experience of my life. The students are so eager to learn, and seeing their faces light up when they understand a new concept is indescribable.',
                name: 'Rachel Thompson',
                role: 'Volunteer Teacher',
                organization: 'London, UK',
                avatar: { src: '/images/education/students.jpg', alt: 'Rachel Thompson' },
                rating: 5,
              },
              {
                quote:
                  'The scholarship changed my life completely. I went from working in the fields to studying computer science at university. I am now developing apps to help farmers in my community.',
                name: 'Emeka Nwosu',
                role: 'Scholarship Alumnus',
                organization: 'Nigeria',
                avatar: { src: '/images/education/teacher.jpg', alt: 'Emeka Nwosu' },
                rating: 5,
              },
              {
                quote:
                  'As a school principal, I have seen the difference EduBridge makes. They not only built us new classrooms but also provided learning materials and trained our teachers. Our enrollment has tripled.',
                name: 'Esther Kamau',
                role: 'School Principal',
                organization: 'Rift Valley Academy, Kenya',
                avatar: { src: '/images/education/about.jpg', alt: 'Esther Kamau' },
                rating: 5,
              },
              {
                quote:
                  "I sponsor two children through EduBridge's scholarship program. Receiving their letters and report cards reminds me that education is the most powerful investment we can make.",
                name: 'Michael Chen',
                role: 'Monthly Donor',
                organization: 'Toronto, Canada',
                avatar: { src: '/images/education/classroom.jpg', alt: 'Michael Chen' },
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
            animation: 'scale',
            background: 'gradient',
            backgroundValue: 'linear-gradient(135deg, #fb923c 0%, #f97316 50%, #ea580c 100%)',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Sponsor a Student Campaign',
              subtitle: 'Help Us Reach 100,000 Scholarships',
              description:
                'Every year, thousands of bright students drop out because their families cannot afford school fees. Our goal is to sponsor 100,000 students by 2028.',
            },
            goal: 50000000,
            raised: 27500000,
            currency: 'USD',
            donorCount: 28450,
            title: '100,000 Scholarships by 2028',
            description:
              'Providing full educational sponsorships including tuition, uniforms, books, and meals for students across Africa.',
          },
        },
        {
          type: 'gallery',
          config: {
            layout: 'masonry',
            theme: 'light',
            animation: 'stagger',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Our Work in Pictures',
              subtitle: 'Moments of Learning and Joy',
              description:
                'A glimpse into classrooms, communities, and lives transformed through education.',
            },
            images: [
              {
                src: '/images/education/about.jpg',
                alt: 'Children learning in a bright classroom',
                caption: 'Early childhood classroom, Ghana',
              },
              {
                src: '/images/education/classroom.jpg',
                alt: 'Students using a science lab',
                caption: 'STEM workshop, Nairobi, Kenya',
              },
              {
                src: '/images/education/gallery2.jpg',
                alt: 'Children reading in a library',
                caption: 'Community library, Senegal',
              },
              {
                src: '/images/education/gallery3.jpg',
                alt: 'Students playing sports',
                caption: 'Play-based learning, Tanzania',
              },
              {
                src: '/images/education/gallery4.jpg',
                alt: 'Graduation ceremony',
                caption: 'Scholarship graduation, Uganda',
              },
              {
                src: '/images/education/gallery5.jpg',
                alt: 'Teacher training session',
                caption: 'Teacher professional development, Malawi',
              },
              {
                src: '/images/education/gallery6.jpg',
                alt: 'Outdoor classroom',
                caption: 'Community school, rural Zambia',
              },
              {
                src: '/images/education/hero.jpg',
                alt: 'Students using computers',
                caption: 'Computer lab, Rwanda',
              },
              {
                src: '/images/education/library.jpg',
                alt: 'Art class',
                caption: 'Creative arts program, Ethiopia',
              },
            ],
          },
        },
        {
          type: 'news',
          config: {
            layout: 'featured',
            theme: 'light',
            animation: 'stagger',
            background: 'solid',
            backgroundValue: '#fff7ed',
            padding: 'large',
            visible: true,
            heading: 'Education News & Insights',
            subtitle: 'Stories, Research, and Updates from the Field',
            description:
              'Stay informed with the latest in global education, teaching resources, and impact stories.',
            articles: [
              {
                title: 'How Play-Based Learning Transforms Early Childhood Development',
                slug: 'play-based-learning',
                date: '2026-07-12',
                category: 'Education Research',
                excerpt:
                  'New research shows that play-based preschool programs improve cognitive development by 40% compared to traditional methods.',
                image: '/images/education/about.jpg',
                author: { name: 'Dr. Jane Akello', role: 'Education Research Director' },
                featured: true,
              },
              {
                title:
                  'Breaking Barriers: How Scholarships Are Keeping Girls in School Across Africa',
                slug: 'girls-scholarships-impact',
                date: '2026-06-30',
                category: 'Impact Report',
                excerpt:
                  'Our scholarship program for girls has reduced dropout rates by 75% in the communities we serve.',
                image: '/images/education/classroom.jpg',
                author: { name: 'Grace Osei', role: 'Girls Education Program Lead' },
              },
              {
                title: 'Mobile STEM Labs: Bringing Science to the Most Remote Villages',
                slug: 'mobile-stem-impact',
                date: '2026-06-18',
                category: 'Programs',
                excerpt:
                  'How converted buses equipped with science labs are sparking curiosity and building 21st-century skills in rural communities.',
                image: '/images/education/about.jpg',
                author: { name: 'Dr. Samuel Kimani', role: 'STEM Program Director' },
              },
              {
                title: 'The Teacher Training Revolution: Modern Pedagogy for African Classrooms',
                slug: 'teacher-training-modern',
                date: '2026-06-05',
                category: 'Education Research',
                excerpt:
                  'Our innovative teacher training program is transforming how educators teach â€” and how students learn â€” across 12 countries.',
                image: '/images/education/classroom.jpg',
                author: { name: 'Prof. Elizabeth Wanjiku', role: 'Training Program Lead' },
              },
              {
                title: 'From Fields to Classrooms: Adult Literacy Programs Changing Lives',
                slug: 'adult-literacy-impact',
                date: '2026-05-22',
                category: 'Programs',
                excerpt:
                  'Meet the adults who learned to read and write through our evening classes and how it transformed their families and communities.',
                image: '/images/education/gallery2.jpg',
                author: { name: 'Fatima Diallo', role: 'Adult Education Coordinator' },
              },
              {
                title: 'How Technology Is Bridging the Education Gap in Rural Africa',
                slug: 'edtech-bridging-gap',
                date: '2026-05-10',
                category: 'Education Research',
                excerpt:
                  'From solar-powered tablets to offline learning platforms, technology is bringing quality education to students without internet access.',
                image: '/images/education/gallery3.jpg',
                author: { name: 'David Okello', role: 'Technology Director' },
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
            background: 'none',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Our Partners in Education',
              subtitle: "Working Together for Every Child's Future",
            },
            variant: 'grid',
            partners: [
              { name: 'UNESCO', logo: { src: '/images/partners/unesco.svg', alt: 'UNESCO' } },
              {
                name: 'Global Partnership for Education',
                logo: { src: '/images/partners/gpe.svg', alt: 'GPE' },
              },
              {
                name: 'UNICEF Education',
                logo: { src: '/images/partners/unicef.svg', alt: 'UNICEF' },
              },
              {
                name: 'World Bank Education',
                logo: { src: '/images/partners/world-bank.svg', alt: 'World Bank' },
              },
              {
                name: 'Room to Read',
                logo: { src: '/images/partners/room-to-read.svg', alt: 'Room to Read' },
              },
              {
                name: 'Teach For All',
                logo: { src: '/images/partners/teach-for-all.svg', alt: 'Teach For All' },
              },
              { name: 'Girl Up', logo: { src: '/images/partners/girl-up.svg', alt: 'Girl Up' } },
              {
                name: 'Mastercard Foundation',
                logo: {
                  src: '/images/partners/mastercard-foundation.svg',
                  alt: 'Mastercard Foundation',
                },
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
                title: 'How does my donation help?',
                content:
                  '95% of every dollar donated goes directly to our education programs â€” building schools, training teachers, and providing scholarships. We maintain one of the highest program efficiency ratios in the education nonprofit sector.',
              },
              {
                title: 'Can I sponsor a specific student?',
                content:
                  'Yes. Our scholarship program allows you to sponsor an individual student. You will receive their profile, progress reports, and can exchange letters. The cost is $500 per year for a full scholarship.',
              },
              {
                title: 'Do you accept volunteer teachers?',
                content:
                  'Absolutely. We welcome qualified teachers, retired educators, university students, and education professionals. Volunteers commit to a minimum of 4 weeks. Applications are reviewed on a rolling basis.',
              },
              {
                title: 'Is my donation tax-deductible?',
                content:
                  'Yes. EduBridge Africa is a registered 501(c)(3) nonprofit organization. Donations are tax-deductible in the United States and in many other countries.',
              },
              {
                title: 'How do you ensure quality of education?',
                content:
                  'All our schools follow national curricula enhanced with our evidence-based teaching methods. We conduct regular assessments, teacher evaluations, and third-party impact studies.',
              },
              {
                title: 'Where do you operate?',
                content:
                  'We currently operate in 12 African countries: Ghana, Kenya, Uganda, Tanzania, Malawi, Zambia, Senegal, Mali, Ethiopia, Rwanda, Nigeria, and Mozambique. Our headquarters is in Accra, Ghana.',
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
            background: 'gradient',
            backgroundValue: 'linear-gradient(135deg, #fb923c 0%, #f97316 50%, #ea580c 100%)',
            padding: 'large',
            visible: true,
            heading: { title: 'Stay Connected', subtitle: 'Join Our Education Community' },
            title: 'Get Our Monthly Education Newsletter',
            description:
              'Stories from the field, teaching resources, research updates, and ways to get involved â€” delivered to your inbox every month.',
            placeholder: 'Enter your email address',
            buttonLabel: 'Subscribe',
            successMessage: 'Thank you for subscribing! Check your inbox for a confirmation email.',
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'volunteer',
            theme: 'light',
            animation: 'scale',
            background: 'gradient',
            backgroundValue:
              'linear-gradient(135deg, #ff6b35 0%, #ff8c42 30%, #ffb347 60%, #ff8c42 100%)',
            padding: 'large',
            visible: true,
            heading: 'Every Child Deserves a Chance to Learn',
            description:
              'Your donation sends a child to school, trains a teacher, or builds a classroom. Join over 28,000 monthly donors who make our work possible.',
            primaryCta: { label: 'Donate Now', href: href('/donate'), variant: 'primary' as const },
            secondaryCta: {
              label: 'Sponsor a Student',
              href: href('/scholarships'),
              variant: 'outline' as const,
            },
            donateAmounts: [25, 50, 100, 250, 500, 1000],
            benefits: [
              { text: '95% of funds go directly to programs' },
              { text: 'Tax deductible in most countries' },
              { text: 'Monthly impact reports' },
            ],
            steps: [
              {
                icon: 'heart',
                title: 'Make a Gift',
                description: 'Choose a one-time or monthly donation that fits your budget.',
              },
              {
                icon: 'users',
                title: 'Join Our Community',
                description: 'Become part of a global movement for education access.',
              },
              {
                icon: 'graduation-cap',
                title: 'See Your Impact',
                description: 'Receive updates and stories showing how your gift changes lives.',
              },
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
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/education/hero.jpg',
            padding: 'none',
            visible: true,
            overlayOpacity: 0.45,
            heading: {
              title: 'Our Story',
              subtitle: 'About EduBridge Africa',
              description:
                'From a single classroom under a tree to 2,000 schools across 12 countries â€” our journey of hope, determination, and the transformative power of education.',
              tag: 'Transforming Lives Since 2008',
            },
            backgroundImage: {
              src: '/images/education/hero.jpg',
              alt: 'EduBridge Africa team with students',
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
            heading: { title: 'Our Journey', subtitle: 'From a Dream to a Movement' },
            body: [
              'EduBridge Africa was founded in 2008 by Dr. Kwame Asante, a former teacher from Ghana who grew up in a village with no school. He walked 10 kilometers each day to attend classes in a neighboring town. That experience shaped his conviction that education is the most powerful tool for breaking the cycle of poverty.',
              'After earning his PhD in Education from the University of Cambridge, Dr. Asante returned to Ghana and started teaching under a mango tree in his home village. Within weeks, 50 children were attending his classes. Parents begged him to expand, and the first EduBridge school was born.',
              'By 2012, EduBridge had 50 schools in three countries. By 2018, we had reached 500 schools and 100,000 students. Today, with 2,000+ schools, 500,000+ students, and 50,000 trained teachers across 12 countries, EduBridge Africa is one of the fastest-growing education nonprofits on the continent.',
            ],
            mission:
              'To ensure every African child has access to free, quality education from early childhood through secondary school.',
            vision:
              'A continent where every child can read, write, and dream, and has the skills to build a better future.',
            timeline: [
              {
                year: '2008',
                title: 'First Class Under a Tree',
                description:
                  'Dr. Kwame Asante starts teaching 50 children under a mango tree in his home village in Ghana.',
              },
              {
                year: '2010',
                title: 'First School Built',
                description:
                  'With community donations, the first EduBridge school opens with 200 students and 6 teachers.',
              },
              {
                year: '2012',
                title: 'Expansion to 3 Countries',
                description:
                  'Schools open in Kenya and Uganda. Total reaches 50 schools serving 15,000 students.',
              },
              {
                year: '2015',
                title: '100,000 Students Reached',
                description:
                  'A historic milestone as EduBridge reaches 100,000 enrolled students across 200 schools.',
              },
              {
                year: '2017',
                title: 'Teacher Training Institute',
                description:
                  'Launch of the EduBridge Teacher Training Institute, professionalizing educator development.',
              },
              {
                year: '2020',
                title: 'COVID-19 Emergency Response',
                description:
                  'Distributed 100,000+ learning kits and launched radio-based education programs during school closures.',
              },
              {
                year: '2023',
                title: '500,000 Students Reached',
                description:
                  'EduBridge reaches 500,000 students with 2,000 schools in 12 African countries.',
              },
              {
                year: '2026',
                title: 'Goal: 1 Million by 2030',
                description:
                  'Ambitious expansion plan to reach 1 million students with 5,000 schools by 2030.',
              },
            ],
            image: {
              src: '/images/education/students.jpg',
              alt: 'Historical photo of EduBridge Africa',
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
            backgroundValue: '#fb923c',
            padding: 'large',
            visible: true,
            columns: 4,
            heading: { title: 'Our Reach', subtitle: 'The Scale of Our Mission' },
            stats: [
              { value: 500000, suffix: '+', label: 'Students Educated' },
              { value: 2000, suffix: '+', label: 'Schools' },
              { value: 12, suffix: '', label: 'Countries' },
              { value: 50000, suffix: '+', label: 'Teachers Trained' },
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
                  'I started teaching under a tree because I believed every child deserves an education. Seeing EduBridge grow from that single class to 2,000 schools is proof that when communities come together, anything is possible.',
                name: 'Dr. Kwame Asante',
                role: 'Founder & President',
                avatar: { src: '/images/education/teacher.jpg', alt: 'Dr. Kwame Asante' },
              },
              {
                quote:
                  'Our teachers are the real heroes. Every day, they show up in classrooms across Africa and inspire the next generation of leaders. Our job is to support them with training, resources, and respect.',
                name: 'Amara Eze',
                role: 'Chief Operating Officer',
                avatar: { src: '/images/education/about.jpg', alt: 'Amara Eze' },
              },
              {
                quote:
                  'We measure our success not just in enrollment numbers but in the dreams our students achieve. From doctors to engineers to teachers â€” our alumni are transforming their communities.',
                name: 'Dr. Sarah Osei',
                role: 'Director of Programs',
                avatar: { src: '/images/education/classroom.jpg', alt: 'Dr. Sarah Osei' },
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
            description: 'Together, we can ensure every child has access to quality education.',
            primaryCta: {
              label: 'Support Education',
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
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/education/hero.jpg',
            padding: 'none',
            visible: true,
            overlayOpacity: 0.4,
            heading: {
              title: 'Our Education Programs',
              subtitle: 'How We Create Opportunities',
              description:
                'From early childhood to adult literacy, every program is designed to unlock potential and build brighter futures.',
            },
            backgroundImage: {
              src: '/images/education/hero.jpg',
              alt: 'EduBridge program overview',
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
              title: 'Our Education Initiatives',
              subtitle: 'Comprehensive Learning, Maximum Impact',
              description:
                'Each program is designed to address specific educational needs while strengthening local education systems.',
            },
            programs: [
              {
                id: 'early-childhood',
                title: 'Early Childhood Education',
                description:
                  'Play-based preschool programs with trained teachers, learning materials, and nutrition support for children aged 3-6.',
                image: { src: '/images/education/about.jpg', alt: 'Early childhood classroom' },
                category: 'Early Learning',
                impactStat: '150K+ children enrolled',
                cta: { label: 'Details', href: href('/program-detail') },
                featured: true,
              },
              {
                id: 'girls-education',
                title: "Girls' Education Initiative",
                description:
                  'Comprehensive support including scholarships, mentorship, sanitary products, and community advocacy to keep girls in school.',
                image: { src: '/images/education/about.jpg', alt: 'Girls in school' },
                category: 'Gender Equity',
                impactStat: '120K+ girls supported',
                cta: { label: 'Details', href: href('/programs') },
              },
              {
                id: 'scholarships',
                title: 'Scholarship Program',
                description:
                  'Need-based and merit-based scholarships covering tuition, uniforms, books, meals, and transportation for students in need.',
                image: { src: '/images/education/about.jpg', alt: 'Scholarship students' },
                category: 'Access',
                impactStat: '50K+ scholarships awarded',
                cta: { label: 'Sponsor a Student', href: href('/scholarships') },
              },
              {
                id: 'stem-labs',
                title: 'STEM for Africa',
                description:
                  'Mobile science and computer labs, coding clubs, robotics competitions, and teacher training in STEM subjects.',
                image: { src: '/images/education/library.jpg', alt: 'STEM lab' },
                category: 'STEM Education',
                impactStat: '80K+ students reached',
                cta: { label: 'Details', href: href('/programs') },
              },
              {
                id: 'teacher-training',
                title: 'Teacher Training Institute',
                description:
                  'Residential and online professional development programs covering modern pedagogy, inclusive education, and subject mastery.',
                image: { src: '/images/education/students.jpg', alt: 'Teacher training' },
                category: 'Professional Development',
                impactStat: '50K+ teachers trained',
                cta: { label: 'Details', href: href('/programs') },
              },
              {
                id: 'adult-literacy',
                title: 'Adult Literacy Program',
                description:
                  'Evening classes, community learning centers, and vocational training for adults who missed formal education.',
                image: { src: '/images/education/teacher.jpg', alt: 'Adult literacy class' },
                category: 'Adult Education',
                impactStat: '30K+ adults served',
                cta: { label: 'Details', href: href('/programs') },
              },
              {
                id: 'school-builds',
                title: 'School Construction',
                description:
                  'Building sustainable, child-friendly schools with classrooms, libraries, sanitation facilities, and clean water access.',
                image: { src: '/images/education/about.jpg', alt: 'New school building' },
                category: 'Infrastructure',
                impactStat: '2,000+ schools built',
                cta: { label: 'Details', href: href('/programs') },
              },
              {
                id: 'nutrition',
                title: 'School Meals Program',
                description:
                  'Daily nutritious meals in schools to improve attendance, concentration, and overall child health and development.',
                image: { src: '/images/education/about.jpg', alt: 'School meals' },
                category: 'Child Welfare',
                impactStat: '300K+ meals served daily',
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
            backgroundValue: '#fb923c',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Our Progress Toward 1 Million Students',
              subtitle: 'Tracking Our Impact',
            },
            stats: [
              { value: 500000, suffix: '+', label: 'Students Educated' },
              { value: 2000, suffix: '+', label: 'Schools Built' },
              { value: 50000, suffix: '+', label: 'Teachers Trained' },
            ],
            progressMax: 1000000,
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'donate',
            theme: 'light',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/education/hero.jpg',
            padding: 'large',
            visible: true,
            heading: 'Support Our Education Programs',
            description:
              'Your donation helps us build schools, train teachers, and provide scholarships to children who need them most.',
            primaryCta: {
              label: 'Donate to Education',
              href: href('/donate'),
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
            backgroundValue: '/images/education/hero.jpg',
            padding: 'none',
            visible: true,
            overlayOpacity: 0.4,
            heading: {
              title: 'Early Childhood Education',
              subtitle: 'Program Details',
              description:
                'Play-based preschool programs preparing young children for academic success through quality early learning, nutrition, and development in a safe, nurturing environment.',
              tag: 'Since 2008',
            },
            backgroundImage: {
              src: '/images/education/hero.jpg',
              alt: 'Children in early childhood classroom',
            },
            stats: [
              { value: 150000, suffix: '+', label: 'Children Enrolled' },
              { value: 5000, suffix: '', label: 'Preschool Centers' },
              { value: 95, suffix: '%', label: 'School Readiness Rate' },
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
              title: 'Building Foundations for Life',
              subtitle: 'How Our Early Childhood Program Works',
            },
            body: [
              'Our early childhood education program serves children aged 3-6 years in safe, stimulating learning environments. Each center is staffed by trained early childhood educators who use play-based learning approaches to develop cognitive, social, emotional, and physical skills.',
              'The curriculum includes literacy, numeracy, science exploration, arts and crafts, music and movement, and outdoor play. Children receive nutritious meals daily, health screenings, and access to clean water. Parents are engaged through workshops and family learning activities.',
              'Research shows that children who complete our early childhood program are 40% more likely to succeed in primary school. Our school readiness rate is 95%, compared to the national average of 60% in the countries where we operate.',
              'Each preschool center serves approximately 150 children and costs $25,000 annually to operate â€” including teacher salaries, learning materials, meals, and facility maintenance.',
            ],
            image: {
              src: '/images/education/library.jpg',
              alt: 'Early childhood classroom interior',
            },
            stats: [
              { value: 150000, suffix: '+', label: 'Children Enrolled' },
              { value: 5000, suffix: '+', label: 'Preschool Centers' },
              { value: 95, suffix: '%', label: 'School Readiness' },
            ],
          },
        },
        {
          type: 'gallery',
          config: {
            layout: 'carousel',
            theme: 'light',
            animation: 'fade',
            background: 'solid',
            backgroundValue: '#fff7ed',
            padding: 'large',
            visible: true,
            heading: { title: 'Early Childhood in Action', subtitle: 'Photos from Our Preschools' },
            images: [
              {
                src: '/images/education/students.jpg',
                alt: 'Children playing with educational toys',
              },
              { src: '/images/education/teacher.jpg', alt: 'Teacher reading to children' },
              { src: '/images/education/about.jpg', alt: 'Children eating nutritious meals' },
              { src: '/images/education/classroom.jpg', alt: 'Outdoor play time' },
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
              { value: 40, suffix: '%', label: 'Higher Primary School Success' },
              { value: 95, suffix: '%', label: 'School Readiness Rate' },
              { value: 5000, suffix: '+', label: 'Trained ECE Teachers' },
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
            heading: 'Support Early Childhood Education',
            description:
              'Help us give every child a strong start in life through quality early learning.',
            primaryCta: {
              label: 'Donate to ECE',
              href: href('/donate'),
              variant: 'primary' as const,
            },
            secondaryCta: {
              label: 'View All Programs',
              href: href('/programs'),
              variant: 'outline' as const,
            },
          },
        },
      ],
    },
    scholarships: {
      seo: seo.scholarships,
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'split',
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/education/hero.jpg',
            padding: 'none',
            visible: true,
            overlayOpacity: 0.4,
            heading: {
              title: "Sponsor a Student's Education",
              subtitle: 'Scholarship Program',
              description:
                'For just $500 a year, you can give a child access to quality education â€” including tuition, uniforms, books, meals, and mentorship.',
              tag: '50,000+ Scholarships Awarded',
            },
            backgroundImage: {
              src: '/images/education/hero.jpg',
              alt: 'Scholarship students smiling',
            },
            stats: [
              { value: 50000, suffix: '+', label: 'Scholarships Awarded' },
              { value: 500, suffix: '', label: 'Cost Per Student/Year' },
              { value: 95, suffix: '%', label: 'Graduation Rate' },
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
              title: 'How Our Scholarship Program Works',
              subtitle: 'Transparent, Impactful, Life-Changing',
            },
            body: [
              'Our scholarship program identifies talented students from low-income families who cannot afford school fees. Each scholarship covers full tuition, uniforms, textbooks, school supplies, daily meals, and transportation for one academic year.',
              'Students are selected based on academic potential, financial need, and community recommendation. We prioritize girls, children with disabilities, and orphans. Each sponsored student is assigned a mentor who provides academic support and guidance.',
              "As a sponsor, you receive your student's profile and photo, quarterly progress reports, and the opportunity to exchange letters. Many sponsors develop lifelong connections with their students.",
            ],
            image: {
              src: '/images/education/classroom.jpg',
              alt: 'Student with scholarship certificate',
            },
            stats: [
              { value: 500, suffix: '/year', label: 'Full Scholarship Cost' },
              { value: 50000, suffix: '+', label: 'Scholarships Awarded' },
              { value: 95, suffix: '%', label: 'Graduation Rate' },
            ],
          },
        },
        {
          type: 'successStories',
          config: {
            layout: 'default',
            theme: 'muted',
            animation: 'fade',
            background: 'solid',
            backgroundValue: '#fff7ed',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Scholarship Success Stories',
              subtitle: 'Lives Changed Through Your Support',
            },
            stories: [
              {
                name: 'Josephine Nakato',
                role: 'Medical Student, Uganda',
                image: { src: '/images/education/about.jpg', alt: 'Josephine Nakato' },
                quote:
                  'When my father passed away, I thought my education was over. A sponsor from Canada paid my school fees for four years. Today I am in medical school, and I dream of becoming a pediatrician.',
                impactStat: '95%',
                impactLabel: 'Scholarship Graduation Rate',
              },
              {
                name: 'Kwesi Boateng',
                role: 'Engineer, Ghana',
                image: { src: '/images/education/about.jpg', alt: 'Kwesi Boateng' },
                quote:
                  'I was the first person in my village to attend university. My sponsor believed in me and supported me through every challenge. Now I design water systems for rural communities.',
                impactStat: '500+',
                impactLabel: 'University Graduates',
              },
              {
                name: 'Aisha Mohammed',
                role: 'Teacher, Tanzania',
                image: { src: '/images/education/about.jpg', alt: 'Aisha Mohammed' },
                quote:
                  'I received a scholarship from grade 5 through secondary school. Now I am a teacher myself, and I sponsor two students through the same program. Education is a gift that keeps giving.',
                impactStat: '50K+',
                impactLabel: 'Scholarships Awarded',
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
              title: 'How Sponsorship Works',
              subtitle: 'Your Journey as a Sponsor',
              description: 'Sponsoring a student is simple and deeply rewarding.',
            },
            steps: [
              {
                icon: 'search',
                title: 'Choose Your Student',
                description:
                  'Browse profiles of students awaiting sponsorship and select the one you connect with.',
              },
              {
                icon: 'credit-card',
                title: 'Set Up Sponsorship',
                description:
                  'Choose monthly or annual giving. $500/year or $42/month covers all educational costs.',
              },
              {
                icon: 'mail',
                title: 'Receive Updates',
                description:
                  "Get a welcome pack with your student's photo, profile, and quarterly progress reports.",
              },
              {
                icon: 'heart-handshake',
                title: 'Build a Connection',
                description:
                  'Exchange letters, photos, and encouragement with your sponsored student.',
              },
              {
                icon: 'graduation-cap',
                title: 'Celebrate Their Success',
                description: 'Watch your student grow, graduate, and build a brighter future.',
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
            heading: { title: 'Scholarship FAQ', subtitle: 'Questions About Sponsorship' },
            items: [
              {
                title: 'How much does it cost to sponsor a student?',
                content:
                  'A full scholarship costs $500 per year, or $42 per month. This covers tuition, uniforms, books, supplies, meals, and transportation.',
              },
              {
                title: 'Can I choose which student to sponsor?',
                content:
                  'Yes. You can browse profiles and select a student based on country, age, or interests. You can also sponsor a student anonymously.',
              },
              {
                title: 'How long does the sponsorship last?',
                content:
                  'Most sponsorships continue through secondary school. You can commit to one year or support your student through graduation.',
              },
              {
                title: 'Will I hear from my sponsored student?',
                content:
                  'Yes. Students write letters twice a year, and you will receive quarterly progress reports, photos, and academic updates.',
              },
              {
                title: 'Can I visit my sponsored student?',
                content:
                  'Absolutely. We welcome sponsors to visit their students and see our programs in action. We organize annual sponsor trips.',
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
            background: 'solid',
            backgroundValue: '#fff7ed',
            padding: 'large',
            visible: true,
            heading: 'Sponsor a Student Today',
            description:
              "For $500 a year, you can transform a child's future through the power of education.",
            primaryCta: {
              label: 'Find a Student to Sponsor',
              href: href('/scholarships'),
              variant: 'primary' as const,
            },
            secondaryCta: {
              label: 'Make a General Donation',
              href: href('/donate'),
              variant: 'outline' as const,
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
            backgroundValue: '/images/education/hero.jpg',
            padding: 'none',
            visible: true,
            overlayOpacity: 0.4,
            heading: {
              title: 'Volunteer With Us',
              subtitle: 'Share Your Knowledge, Change Lives',
              description:
                'Join our global community of educators, mentors, and education advocates working to ensure every African child has access to quality education.',
              tag: '1,000+ Volunteers Each Year',
            },
            backgroundImage: {
              src: '/images/education/hero.jpg',
              alt: 'Volunteer teacher with students',
            },
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
              title: 'Your Volunteer Journey',
              subtitle: 'From Application to Impact',
              description: 'We make it easy to volunteer. Here is how the process works.',
            },
            steps: [
              {
                icon: 'clipboard-check',
                title: 'Apply Online',
                description:
                  'Submit your application with qualifications, preferred countries, and availability.',
              },
              {
                icon: 'graduation-cap',
                title: 'Orientation & Training',
                description:
                  'Complete our volunteer training covering teaching methods, cultural context, and safety protocols.',
              },
              {
                icon: 'plane',
                title: 'Travel & Placement',
                description:
                  'We arrange travel, accommodation, and placement at one of our partner schools.',
              },
              {
                icon: 'heart-handshake',
                title: 'Teach & Inspire',
                description:
                  'Lead classes, mentor students, train teachers, and contribute to the community.',
              },
              {
                icon: 'refresh-cw',
                title: 'Stay Involved',
                description:
                  'Continue supporting your students through advocacy, fundraising, or future visits.',
              },
            ],
          },
        },
        {
          type: 'testimonials',
          config: {
            layout: 'cards',
            theme: 'light',
            animation: 'fade',
            background: 'solid',
            backgroundValue: '#fff7ed',
            padding: 'large',
            visible: true,
            heading: { title: 'Volunteer Experiences', subtitle: 'Hear from Our Volunteers' },
            testimonials: [
              {
                quote:
                  'I spent six months teaching math at a secondary school in rural Kenya. My students went from failing to top of the district in national exams. The experience changed my life as much as it changed theirs.',
                name: 'James Mitchell',
                role: 'Math Teacher',
                organization: 'Volunteer 2025, Kenya',
                avatar: { src: '/images/education/about.jpg', alt: 'James Mitchell' },
              },
              {
                quote:
                  'I volunteered as a reading mentor at an EduBridge school in Ghana. Teaching children to read is the most rewarding thing I have ever done. I am already planning my next trip.',
                name: 'Sarah Lindstrom',
                role: 'Literacy Volunteer',
                organization: 'Volunteer 2025, Ghana',
                avatar: { src: '/images/education/classroom.jpg', alt: 'Sarah Lindstrom' },
              },
              {
                quote:
                  'As a retired principal, I wanted to give back. EduBridge placed me as a teacher trainer in Tanzania. Training 200 teachers who will impact thousands of students was the best use of my retirement.',
                name: 'Robert Chen',
                role: 'Teacher Trainer',
                organization: 'Volunteer 2024, Tanzania',
                avatar: { src: '/images/education/about.jpg', alt: 'Robert Chen' },
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
            heading: { title: 'Volunteer FAQ', subtitle: 'Everything You Need to Know' },
            items: [
              {
                title: 'Do I need teaching experience to volunteer?',
                content:
                  'No. While qualified teachers are always needed, we welcome volunteers with diverse backgrounds. Training is provided.',
              },
              {
                title: 'How long is the volunteer commitment?',
                content:
                  'We ask for a minimum commitment of 4 weeks. Many volunteers stay for 3-6 months or longer.',
              },
              {
                title: 'What are the costs involved?',
                content:
                  'Volunteers cover their travel and living expenses. We provide accommodation, local transportation, and support. Estimated costs are $1,500-$3,000 for a 4-week placement.',
              },
              {
                title: 'Can families or groups volunteer?',
                content:
                  'Yes. We welcome families, university groups, corporate teams, and other groups. Custom programs are available.',
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
            heading: 'Ready to Make a Difference?',
            description:
              'Join hundreds of volunteers transforming lives through education every year.',
            primaryCta: {
              label: 'Apply to Volunteer',
              href: href('/volunteer'),
              variant: 'primary' as const,
            },
            secondaryCta: {
              label: 'Learn More About Programs',
              href: href('/programs'),
              variant: 'outline' as const,
            },
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
            backgroundValue: '/images/education/hero.jpg',
            padding: 'none',
            visible: true,
            overlayOpacity: 0.4,
            heading: {
              title: 'Donate to Transform Lives',
              subtitle: 'Every Gift Creates Opportunity',
              description:
                'Your donation sends a child to school, trains a teacher, or builds a classroom. Choose how you want to make an impact.',
              tag: '95% of Funds Go Directly to Programs',
            },
            backgroundImage: { src: '/images/education/hero.jpg', alt: 'Children in a classroom' },
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
              title: 'Ways to Give',
              subtitle: 'Choose Your Impact',
              description:
                'Every donation, no matter the size, helps us build a brighter future through education.',
            },
            steps: [
              {
                icon: 'graduation-cap',
                title: 'Sponsor a Student',
                description:
                  '$500/year provides full educational support for one child including tuition, uniforms, and meals.',
              },
              {
                icon: 'school',
                title: 'Build a Classroom',
                description:
                  '$10,000 builds a permanent classroom serving 50 students for generations.',
              },
              {
                icon: 'chalkboard-teacher',
                title: 'Train a Teacher',
                description:
                  '$200 provides a teacher with professional development training and learning materials.',
              },
              {
                icon: 'users',
                title: 'Support a School',
                description:
                  '$25,000 covers the annual operating costs of an entire primary school.',
              },
              {
                icon: 'heart',
                title: 'Give Monthly',
                description:
                  'Monthly donations provide sustainable, predictable funding for our programs.',
              },
              {
                icon: 'gift',
                title: 'Leave a Legacy',
                description:
                  'Include EduBridge Africa in your will or estate plan to create lasting change.',
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
            background: 'solid',
            backgroundValue: '#fb923c',
            padding: 'large',
            visible: true,
            columns: 3,
            heading: { title: 'Your Impact', subtitle: 'How Your Donation Helps' },
            stats: [
              { value: 95, suffix: '%', label: 'Goes to Programs' },
              { value: 500000, suffix: '+', label: 'Students Helped' },
              { value: 28000, suffix: '+', label: 'Monthly Donors' },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'donate',
            theme: 'light',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/education/hero.jpg',
            padding: 'large',
            visible: true,
            heading: 'Make a Donation Today',
            description:
              'Choose an amount to give. Every dollar creates opportunities for children who need them most.',
            primaryCta: { label: 'Donate Now', href: href('/donate'), variant: 'primary' as const },
            donateAmounts: [25, 50, 100, 250, 500, 1000],
            benefits: [
              { text: '95% of funds go directly to programs' },
              { text: 'Tax deductible in most countries' },
              { text: 'Monthly impact reports' },
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
            heading: { title: 'Donation FAQ', subtitle: 'Questions About Giving' },
            items: [
              {
                title: 'Is my donation tax-deductible?',
                content:
                  'Yes. EduBridge Africa is a registered 501(c)(3) nonprofit. You will receive a tax receipt for every donation.',
              },
              {
                title: 'Can I designate my donation to a specific program?',
                content:
                  'Yes. You can choose to support early childhood education, girls education, scholarships, STEM programs, or general operations.',
              },
              {
                title: 'What is your program efficiency ratio?',
                content:
                  '95% of every dollar donated goes directly to our education programs. 5% covers administrative and fundraising costs.',
              },
            ],
            allowMultiple: false,
            variant: 'bordered',
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
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/education/hero.jpg',
            padding: 'none',
            visible: true,
            overlayOpacity: 0.4,
            heading: {
              title: 'Educational Resources',
              subtitle: 'Learning Materials for Everyone',
              description:
                'Free teaching guides, learning materials, research reports, and tools for educators, parents, and students.',
              tag: 'Free Resources for All',
            },
            backgroundImage: { src: '/images/education/hero.jpg', alt: 'Educational resources' },
          },
        },
        {
          type: 'news',
          config: {
            layout: 'magazine',
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: 'Teaching & Learning Resources',
            subtitle: 'Download Free Materials',
            description:
              'Curated resources for educators, parents, and students to support learning at school and at home.',
            articles: [
              {
                title: 'Early Childhood Activity Guide: 50 Play-Based Learning Activities',
                slug: 'ec-activity-guide',
                date: '2026-07-01',
                category: 'Teaching Guides',
                excerpt:
                  'A comprehensive guide with 50 fun, educational activities for children aged 3-6 using everyday materials.',
                image: '/images/education/gallery4.jpg',
                author: { name: 'EduBridge Curriculum Team', role: 'Early Childhood Division' },
              },
              {
                title: 'STEM Lesson Plans: Hands-On Science for Primary Schools',
                slug: 'stem-lesson-plans',
                date: '2026-06-15',
                category: 'STEM Education',
                excerpt:
                  '20 ready-to-use science lesson plans using low-cost materials. Aligned with national curricula across Africa.',
                image: '/images/education/gallery5.jpg',
                author: { name: 'Dr. Samuel Kimani', role: 'STEM Program Director' },
              },
              {
                title: 'Inclusive Classroom Guide: Supporting Children with Disabilities',
                slug: 'inclusive-classroom-guide',
                date: '2026-06-01',
                category: 'Inclusive Education',
                excerpt:
                  'Practical strategies for creating inclusive classrooms that support children with diverse learning needs.',
                image: '/images/education/gallery6.jpg',
                author: { name: 'Grace Osei', role: 'Inclusive Education Lead' },
              },
              {
                title: '2025 Annual Impact Report',
                slug: 'impact-report-2025',
                date: '2026-05-01',
                category: 'Research Reports',
                excerpt:
                  'Comprehensive report on our programs, impact metrics, financial transparency, and future goals.',
                image: '/images/education/hero.jpg',
                author: { name: 'EduBridge Research Team', role: 'Impact Assessment' },
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
            background: 'solid',
            backgroundValue: '#fff7ed',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Our Resource Partners',
              subtitle: 'Organizations That Make Our Resources Possible',
            },
            variant: 'grid',
            partners: [
              { name: 'OpenStax', logo: { src: '/images/partners/default.svg', alt: 'OpenStax' } },
              {
                name: 'Khan Academy',
                logo: { src: '/images/partners/default.svg', alt: 'Khan Academy' },
              },
              { name: 'Rumie', logo: { src: '/images/partners/default.svg', alt: 'Rumie' } },
              {
                name: 'World Reader',
                logo: { src: '/images/partners/default.svg', alt: 'World Reader' },
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
            heading: { title: 'Resources FAQ', subtitle: 'How to Access Our Materials' },
            items: [
              {
                title: 'Are these resources really free?',
                content:
                  'Yes. All resources on our site are free to download, use, and share under Creative Commons licenses.',
              },
              {
                title: 'Can I translate these materials?',
                content:
                  'Absolutely. We encourage translation into local languages. Contact us for high-resolution source files.',
              },
              {
                title: 'Do you offer physical resources?',
                content:
                  'Yes. We distribute printed textbooks, learning kits, and teaching materials to EduBridge schools and partner organizations.',
              },
            ],
            allowMultiple: false,
            variant: 'bordered',
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
            backgroundValue: '/images/education/hero.jpg',
            padding: 'none',
            visible: true,
            overlayOpacity: 0.4,
            heading: {
              title: 'News & Updates',
              subtitle: 'EduBridge Africa Blog',
              description:
                'Stories from the field, education research, program updates, and ways to get involved.',
              tag: 'Latest Updates',
            },
            backgroundImage: {
              src: '/images/education/hero.jpg',
              alt: 'EduBridge news and updates',
            },
          },
        },
        {
          type: 'news',
          config: {
            layout: 'magazine',
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: 'Recent News & Stories',
            subtitle: "What's Happening at EduBridge Africa",
            description:
              'The latest updates from our programs, research, and communities across Africa.',
            articles: [
              {
                title: 'How Play-Based Learning Transforms Early Childhood Development',
                slug: 'play-based-learning',
                date: '2026-07-12',
                category: 'Education Research',
                excerpt:
                  'New research shows that play-based preschool programs improve cognitive development by 40% compared to traditional methods.',
                image: '/images/education/library.jpg',
                author: { name: 'Dr. Jane Akello', role: 'Education Research Director' },
              },
              {
                title: 'Breaking Barriers: How Scholarships Are Keeping Girls in School',
                slug: 'girls-scholarships-impact',
                date: '2026-06-30',
                category: 'Impact Report',
                excerpt:
                  'Our scholarship program for girls has reduced dropout rates by 75% in the communities we serve.',
                image: '/images/education/students.jpg',
                author: { name: 'Grace Osei', role: 'Girls Education Program Lead' },
              },
              {
                title: 'Mobile STEM Labs: Bringing Science to Remote Villages',
                slug: 'mobile-stem-impact',
                date: '2026-06-18',
                category: 'Programs',
                excerpt:
                  'Converted buses equipped with science labs are sparking curiosity in rural communities.',
                image: '/images/education/teacher.jpg',
                author: { name: 'Dr. Samuel Kimani', role: 'STEM Program Director' },
              },
              {
                title: 'The Teacher Training Revolution: Modern Pedagogy for African Classrooms',
                slug: 'teacher-training-modern',
                date: '2026-06-05',
                category: 'Education Research',
                excerpt:
                  'Our innovative teacher training program is transforming how educators teach across 12 countries.',
                image: '/images/education/about.jpg',
                author: { name: 'Prof. Elizabeth Wanjiku', role: 'Training Program Lead' },
              },
              {
                title: 'From Fields to Classrooms: Adult Literacy Programs Changing Lives',
                slug: 'adult-literacy-impact',
                date: '2026-05-22',
                category: 'Programs',
                excerpt:
                  'Meet the adults who learned to read and write through our evening classes.',
                image: '/images/education/classroom.jpg',
                author: { name: 'Fatima Diallo', role: 'Adult Education Coordinator' },
              },
              {
                title: 'How Technology Is Bridging the Education Gap in Rural Africa',
                slug: 'edtech-bridging-gap',
                date: '2026-05-10',
                category: 'Education Research',
                excerpt:
                  'From solar-powered tablets to offline learning platforms, technology is bringing quality education to students without internet access.',
                image: '/images/education/gallery7.jpg',
                author: { name: 'David Okello', role: 'Technology Director' },
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
            background: 'gradient',
            backgroundValue: 'linear-gradient(135deg, #fb923c 0%, #f97316 50%, #ea580c 100%)',
            padding: 'large',
            visible: true,
            heading: { title: 'Stay Updated', subtitle: 'Get Our Newsletter' },
            title: 'Subscribe for Monthly Updates',
            description:
              'Receive stories, research, and news from EduBridge Africa delivered to your inbox every month.',
            placeholder: 'Enter your email address',
            buttonLabel: 'Subscribe',
            successMessage: 'Thank you for subscribing!',
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
            backgroundValue: '/images/education/hero.jpg',
            padding: 'none',
            visible: true,
            overlayOpacity: 0.4,
            heading: {
              title: 'Gallery',
              subtitle: 'Moments of Learning and Joy',
              description:
                'Explore photos from our schools, classrooms, and education programs across Africa.',
            },
            backgroundImage: { src: '/images/education/hero.jpg', alt: 'EduBridge gallery' },
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
            heading: {
              title: 'Our Schools in Photos',
              subtitle: 'The Joy of Learning Across Africa',
            },
            images: [
              {
                src: '/images/education/hero.jpg',
                alt: 'Children learning in a bright classroom',
                caption: 'Early childhood classroom, Ghana',
              },
              {
                src: '/images/education/library.jpg',
                alt: 'Students using a science lab',
                caption: 'STEM workshop, Nairobi, Kenya',
              },
              {
                src: '/images/education/students.jpg',
                alt: 'Children reading in a library',
                caption: 'Community library, Senegal',
              },
              {
                src: '/images/education/teacher.jpg',
                alt: 'Students playing sports',
                caption: 'Play-based learning, Tanzania',
              },
              {
                src: '/images/education/about.jpg',
                alt: 'Graduation ceremony',
                caption: 'Scholarship graduation, Uganda',
              },
              {
                src: '/images/education/classroom.jpg',
                alt: 'Teacher training session',
                caption: 'Teacher professional development, Malawi',
              },
              {
                src: '/images/education/gallery8.jpg',
                alt: 'Outdoor classroom',
                caption: 'Community school, rural Zambia',
              },
              {
                src: '/images/education/hero.jpg',
                alt: 'Students using computers',
                caption: 'Computer lab, Rwanda',
              },
              {
                src: '/images/education/library.jpg',
                alt: 'Art class',
                caption: 'Creative arts program, Ethiopia',
              },
            ],
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
            backgroundValue: '/images/education/hero.jpg',
            padding: 'none',
            visible: true,
            overlayOpacity: 0.4,
            heading: {
              title: 'Frequently Asked Questions',
              subtitle: 'Everything You Need to Know',
              description:
                'Find answers to common questions about EduBridge Africa, our programs, and how you can help.',
            },
            backgroundImage: { src: '/images/education/hero.jpg', alt: 'FAQ' },
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
            heading: { title: 'General Questions', subtitle: 'About EduBridge Africa' },
            items: [
              {
                title: 'What is EduBridge Africa?',
                content:
                  'EduBridge Africa is a nonprofit organization founded in 2008 that builds schools, trains teachers, and provides scholarships to ensure every African child has access to quality education.',
              },
              {
                title: 'Where do you operate?',
                content:
                  'We operate in 12 African countries: Ghana, Kenya, Uganda, Tanzania, Malawi, Zambia, Senegal, Mali, Ethiopia, Rwanda, Nigeria, and Mozambique.',
              },
              {
                title: 'How many children have you helped?',
                content:
                  'Since 2008, we have educated over 500,000 children, built over 2,000 schools, and trained over 50,000 teachers.',
              },
              {
                title: 'How is EduBridge Africa funded?',
                content:
                  'We are funded by individual donors, corporate partners, foundation grants, and government partnerships. 95% of donations go directly to programs.',
              },
              {
                title: 'Can I visit your programs?',
                content:
                  'Yes. We welcome donors, volunteers, and partners to visit our schools and see our work firsthand. Contact us to arrange a visit.',
              },
              {
                title: 'Is EduBridge Africa a religious organization?',
                content:
                  'No. EduBridge Africa is a secular nonprofit. We serve children and communities of all faiths and backgrounds.',
              },
            ],
            allowMultiple: false,
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
            heading: { title: 'Donation & Sponsorship Questions', subtitle: 'About Giving' },
            items: [
              {
                title: 'How much of my donation goes to programs?',
                content:
                  '95% of every dollar donated goes directly to our education programs. We maintain one of the highest program efficiency ratios in the sector.',
              },
              {
                title: 'Can I sponsor a specific student?',
                content:
                  'Yes. Our scholarship program allows you to sponsor an individual student for $500 per year. You will receive their profile, progress reports, and can exchange letters.',
              },
              {
                title: 'Is my donation tax-deductible?',
                content:
                  'Yes. EduBridge Africa is a registered 501(c)(3) nonprofit. Donations are tax-deductible in the US and many other countries.',
              },
              {
                title: 'Can I make a recurring donation?',
                content:
                  'Yes. You can set up monthly, quarterly, or annual recurring donations. Monthly donations provide sustainable funding for our programs.',
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
            background: 'solid',
            backgroundValue: '#fff7ed',
            padding: 'large',
            visible: true,
            heading: 'Still Have Questions?',
            description: 'We are happy to help. Reach out to our team for more information.',
            primaryCta: {
              label: 'Contact Us',
              href: href('/contact'),
              variant: 'primary' as const,
            },
            secondaryCta: { label: 'View FAQ', href: href('/faq'), variant: 'outline' as const },
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
            backgroundValue: '/images/education/hero.jpg',
            padding: 'none',
            visible: true,
            overlayOpacity: 0.4,
            heading: {
              title: 'Get in Touch',
              subtitle: 'Contact EduBridge Africa',
              description:
                'Have a question, partnership idea, or want to get involved? We would love to hear from you.',
            },
            backgroundImage: { src: '/images/education/hero.jpg', alt: 'Contact EduBridge Africa' },
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
            heading: 'Contact Information',
            description:
              'Visit our headquarters in Accra, Ghana, or reach us through the channels below.',
            primaryCta: {
              label: 'Email Us',
              href: 'mailto:info@edubridgeafrica.org',
              variant: 'primary' as const,
            },
            secondaryCta: {
              label: 'Call: +233 30 212 3456',
              href: 'tel:+233302123456',
              variant: 'outline' as const,
            },
          },
        },
        {
          type: 'faq',
          config: {
            layout: 'default',
            theme: 'light',
            animation: 'fade',
            background: 'solid',
            backgroundValue: '#fff7ed',
            padding: 'large',
            visible: true,
            heading: { title: 'Quick Contacts', subtitle: 'Department Contacts' },
            items: [
              {
                title: 'General Inquiries',
                content: 'Email: info@edubridgeafrica.org | Phone: +233 30 212 3456',
              },
              {
                title: 'Sponsorship Program',
                content: 'Email: sponsorship@edubridgeafrica.org | Phone: +233 30 212 3457',
              },
              {
                title: 'Volunteer Program',
                content: 'Email: volunteer@edubridgeafrica.org | Phone: +233 30 212 3458',
              },
              {
                title: 'Media & Press',
                content: 'Email: press@edubridgeafrica.org | Phone: +233 30 212 3459',
              },
              {
                title: 'Partnerships',
                content: 'Email: partners@edubridgeafrica.org | Phone: +233 30 212 3460',
              },
              {
                title: 'Donor Support',
                content: 'Email: donors@edubridgeafrica.org | Phone: +233 30 212 3461',
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
            background: 'gradient',
            backgroundValue: 'linear-gradient(135deg, #fb923c 0%, #f97316 50%, #ea580c 100%)',
            padding: 'large',
            visible: true,
            heading: { title: 'Stay Connected', subtitle: 'Join Our Community' },
            title: 'Subscribe to Our Newsletter',
            description:
              'Get monthly updates on our programs, impact stories, and ways to get involved.',
            placeholder: 'Enter your email address',
            buttonLabel: 'Subscribe',
            successMessage: 'Thank you for subscribing!',
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
            background: 'solid',
            backgroundValue: '#0f1b2d',
            padding: 'none',
            visible: true,
            fullHeight: false,
            overlayOpacity: 0,
            heading: {
              title: 'Page Not Found',
              subtitle: '404 Error',
              description:
                'The page you are looking for does not exist or has been moved. Let us help you find your way back.',
            },
            stats: [
              { value: 500000, suffix: '+', label: 'Students Educated' },
              { value: 2000, suffix: '+', label: 'Schools Built' },
              { value: 50000, suffix: '+', label: 'Teachers Trained' },
            ],
            showScrollIndicator: false,
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
              'Explore our programs, learn about our impact, or get in touch with our team.',
            primaryCta: { label: 'Go Home', href: href(''), variant: 'primary' as const },
            secondaryCta: {
              label: 'View Programs',
              href: href('/programs'),
              variant: 'outline' as const,
            },
          },
        },
      ],
    },
  },
};
