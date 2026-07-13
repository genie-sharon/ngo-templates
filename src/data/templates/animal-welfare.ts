import type { TemplateData } from './types';

const nav = {
  layout: 'transparent' as const,
  logo: { text: 'Paws & Claws Rescue', href: '/' },
  menuItems: [
    { label: 'Home', href: `/templates/animal-welfare` },
    { label: 'About', href: `/templates/animal-welfare/about` },
    { label: 'Programs', href: `/templates/animal-welfare/programs` },
    { label: 'Gallery', href: `/templates/animal-welfare/gallery` },
    { label: 'News', href: `/templates/animal-welfare/news` },
    { label: 'Contact', href: `/templates/animal-welfare/contact` },
  ],
  ctaButtons: [
    {
      label: 'Donate',
      href: `/templates/animal-welfare/donate`,
      variant: 'primary' as const,
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
  backgroundValue: '#1a1917',
  padding: 'large' as const,
  visible: true,
  logo: { src: null, alt: 'Paws & Claws Rescue', width: 160, height: 40 },
  description:
    'Rescuing, rehabilitating, and rehoming abandoned and injured animals. Every animal deserves love, care, and a forever home.',
  columns: [
    {
      title: 'Paws & Claws Rescue',
      links: [
        { label: 'About', href: `/templates/animal-welfare/about` },
        { label: 'Programs', href: `/templates/animal-welfare/programs` },
        { label: 'Adopt', href: `/templates/animal-welfare/programs` },
        { label: 'Careers', href: '#' },
      ],
    },
    {
      title: 'Get Involved',
      links: [
        { label: 'Donate', href: `/templates/animal-welfare/donate` },
        { label: 'Volunteer', href: `/templates/animal-welfare/volunteer` },
        { label: 'Foster', href: `/templates/animal-welfare/programs` },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: `/templates/animal-welfare/news` },
        { label: 'FAQs', href: `/templates/animal-welfare/contact` },
        { label: 'Contact', href: `/templates/animal-welfare/contact` },
      ],
    },
  ],
  socialLinks: [
    { platform: 'facebook' as const, url: '#', label: 'Facebook' },
    { platform: 'instagram' as const, url: '#', label: 'Instagram' },
    { platform: 'twitter' as const, url: '#', label: 'Twitter' },
    { platform: 'youtube' as const, url: '#', label: 'YouTube' },
  ],
  copyright: 'Â© 2026 Paws & Claws Rescue. All rights reserved.',
  showBackToTop: true,
};

export const animalWelfareTemplate: TemplateData = {
  slug: 'animal-welfare',
  name: 'Animal Welfare',
  tagline: 'Rescue, rehabilitate, rehome',
  description:
    'Warm orange and green design for animal welfare organizations with rescue, shelter, and adoption programs.',
  themeId: 'warm',
  mood: 'Compassionate, warm, hopeful',
  illustrationStyle: 'Animal photography, wildlife illustrations, paw prints',
  motionStyle: 'Playful and gentle transitions with bounce animations',
  navigation: nav,
  footer: footer,
  pages: {
    home: {
      seo: {
        title: 'Home â€” Paws & Claws Rescue',
        description: 'Rescuing, rehabilitating, and rehoming animals in need.',
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'illustration' as const,
            theme: 'dark',
            animation: 'scale',
            background: 'image',
            backgroundValue: '/images/animals/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Giving Animals a Second Chance at Life',
              subtitle: 'Paws & Claws Rescue',
              description:
                'Every animal deserves love, care, and a forever home. We rescue, rehabilitate, and rehome abandoned and injured animals.',
              tag: 'Serving Animals Since 2010',
            },
            backgroundImage: { src: '/images/animals/hero.jpg', alt: 'Rescued dog' },
            stats: [
              { value: 100000, suffix: '+', label: 'Animals Rescued' },
              { value: 50000, suffix: '+', label: 'Adoptions Completed' },
              { value: 200, suffix: '+', label: 'Species Cared For' },
            ],
            overlayOpacity: 0.4,
            overlayColor: '#b45309',
            decorativePawPrints: true,
            floatingElements: true,
          },
        },
        {
          type: 'about',
          config: {
            layout: 'default' as const,
            theme: 'light',
            animation: 'stagger',
            background: 'solid',
            backgroundValue: '#fff7ed',
            padding: 'large',
            visible: true,
            variant: 'gallery',
            body: [
              'Paws & Claws Rescue was established in 2010 by a group of veterinarians and animal lovers committed to ending animal suffering.',
              'We operate shelters, wildlife rescue centers, and community outreach programs that serve animals and the people who care for them.',
            ],
            mission:
              'To rescue, rehabilitate, and rehome animals while promoting compassion and responsible pet ownership.',
            values: [
              {
                title: 'Compassion',
                description: 'Every animal is treated with kindness and respect.',
                icon: 'heart',
              },
              {
                title: 'Care',
                description: 'We provide the highest standard of medical and emotional care.',
                icon: 'stethoscope',
              },
              {
                title: 'Community',
                description:
                  'We educate communities on animal welfare and responsible pet ownership.',
                icon: 'users',
              },
            ],
            image: { src: '/images/animals/cat.jpg', alt: 'Veterinarian treating an animal' },
            images: [
              { src: '/images/animals/dog.jpg', alt: 'Dogs running' },
              { src: '/images/animals/cat.jpg', alt: 'Cat and person' },
              { src: '/images/animals/cat.jpg', alt: 'Fox in wild' },
            ],
          },
        },
        {
          type: 'impact',
          config: {
            theme: 'light',
            animation: 'scale',
            background: 'solid',
            backgroundValue: '#d97706',
            padding: 'large',
            visible: true,
            layout: 'grid' as const,
            stats: [
              { value: 100000, suffix: '+', label: 'Animals Rescued', icon: 'paw-print' },
              { value: 50000, suffix: '+', label: 'Adoptions', icon: 'home' },
              { value: 15000, suffix: '+', label: 'Spay/Neuter Surgeries', icon: 'heart-pulse' },
              { value: 200, suffix: '+', label: 'Species', icon: 'tree' },
            ],
          },
        },
        {
          type: 'programs',
          config: {
            theme: 'light',
            animation: 'stagger',
            background: 'none',
            padding: 'large',
            visible: true,
            layout: 'filters' as const,
            programs: [
              {
                id: 'wildlife-rescue',
                title: 'Wildlife Rescue & Rehabilitation',
                description:
                  'Rescuing injured and orphaned wildlife, providing medical treatment, and rehabilitating them for release back into the wild.',
                image: { src: '/images/animals/gallery3.jpg', alt: 'Wildlife rescue' },
                category: 'Wildlife',
                impactStat: '15K+ animals released',
                cta: { label: 'Learn More', href: `/templates/animal-welfare/programs` },
                featured: true,
              },
              {
                id: 'shelter',
                title: 'Shelter Operations',
                description:
                  'Running no-kill shelters that provide temporary housing, medical care, and enrichment for homeless dogs and cats awaiting adoption.',
                image: { src: '/images/animals/dog.jpg', alt: 'Animal shelter' },
                category: 'Shelter',
                impactStat: '50K+ sheltered',
                cta: { label: 'Learn More', href: `/templates/animal-welfare/programs` },
              },
              {
                id: 'adoption',
                title: 'Adoption Program',
                description:
                  'Matching rescued animals with loving forever homes through thorough screening, counseling, and post-adoption support.',
                image: { src: '/images/animals/cat.jpg', alt: 'Adopted dog with family' },
                category: 'Adoption',
                impactStat: '50K+ adoptions',
                cta: { label: 'Learn More', href: `/templates/animal-welfare/programs` },
              },
              {
                id: 'education',
                title: 'Community Education',
                description:
                  'Teaching communities about animal welfare, responsible pet ownership, and humane treatment through school programs and workshops.',
                image: { src: '/images/animals/dog.jpg', alt: 'Children learning about animals' },
                category: 'Education',
                impactStat: '200K+ people reached',
                cta: { label: 'Learn More', href: `/templates/animal-welfare/programs` },
              },
            ],
            showCategoryBadges: true,
            showImpactStats: true,
            filterTags: ['All', 'Wildlife', 'Shelter', 'Adoption', 'Education'],
          },
        },
        {
          type: 'testimonials',
          config: {
            theme: 'light',
            animation: 'fade',
            background: 'solid',
            backgroundValue: '#fef3c7',
            padding: 'large',
            visible: true,
            heading: { title: 'Stories of Hope', subtitle: "From Those We've Helped" },
            layout: 'cards' as const,
            testimonials: [
              {
                quote:
                  'We adopted Max from Paws & Claws three years ago. He brought so much joy to our family. The adoption process was thorough and supportive.',
                name: 'Sarah Thompson',
                role: 'Adopter, USA',
                avatar: { src: '/images/animals/cat.jpg', alt: 'Sarah Thompson' },
              },
              {
                quote:
                  'The wildlife rescue team saved an injured eagle from our farm. Their dedication and expertise are remarkable.',
                name: 'David Njoroge',
                role: 'Community Member, Kenya',
                avatar: { src: '/images/animals/dog.jpg', alt: 'David Njoroge' },
              },
              {
                quote:
                  'I have been volunteering at the shelter for two years. Seeing animals find their forever homes never gets old.',
                name: 'Maria Lopez',
                role: 'Volunteer, Mexico',
                avatar: { src: '/images/animals/dog.jpg', alt: 'Maria Lopez' },
              },
            ],
          },
        },
        {
          type: 'gallery',
          config: {
            theme: 'light',
            animation: 'stagger',
            background: 'none',
            padding: 'large',
            visible: true,
            layout: 'featured' as const,
            heading: { title: 'Rescue Moments', subtitle: 'Every Life Matters' },
            images: [
              {
                src: '/images/animals/hero.jpg',
                alt: 'Rescued puppy',
                caption: 'Dogs rescued from puppy mill',
              },
              {
                src: '/images/animals/wildlife.jpg',
                alt: 'Cat recovery',
                caption: 'Luna recovering after surgery',
              },
              {
                src: '/images/animals/cat.jpg',
                alt: 'Wild bird release',
                caption: 'Eagle released back to the wild',
              },
              {
                src: '/images/animals/dog.jpg',
                alt: 'Adoption day',
                caption: 'Happy adoption day!',
              },
              {
                src: '/images/animals/dog.jpg',
                alt: 'Wildlife center',
                caption: 'Wildlife rehabilitation center',
              },
              {
                src: '/images/animals/cat.jpg',
                alt: 'Happy adopted pet',
                caption: 'Found her forever home',
              },
            ],
          },
        },
        {
          type: 'news',
          config: {
            heading: 'Latest Rescue Stories',
            layout: 'grid' as const,
            theme: 'light',
            animation: 'fade',
            background: 'solid',
            backgroundValue: '#fef3c7',
            padding: 'large',
            visible: true,
            articles: [
              {
                title: 'Massive Rescue Operation Saves 200 Dogs from Puppy Mill',
                slug: 'puppy-mill-rescue',
                date: '2026-06-25',
                category: 'Rescue',
                excerpt:
                  'Our team rescued 200 dogs from a busted illegal puppy mill operation. All animals are receiving medical care.',
                image: '/images/animals/cat.jpg',
                author: { name: 'Dr. Emily Hart' },
              },
              {
                title: 'Orphaned Elephant Calf Released Back to the Wild',
                slug: 'elephant-release',
                date: '2026-05-30',
                category: 'Wildlife',
                excerpt:
                  'After two years of rehabilitation, orphaned elephant calf Tembo was successfully released into a protected reserve.',
                image: '/images/animals/dog.jpg',
                author: { name: 'James Kariuki' },
              },
              {
                title: 'Adoption Event Finds Homes for 500 Animals in One Weekend',
                slug: 'mega-adoption-event',
                date: '2026-04-15',
                category: 'Adoption',
                excerpt:
                  'Our annual Mega Adoption Weekend found forever homes for 500 animals, breaking our previous record.',
                image: '/images/animals/cat.jpg',
                author: { name: 'Lisa Chang' },
              },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'dual' as const,
            heading: 'Help Us Save More Lives',
            description:
              '$50 provides vaccinations for a rescued animal. $200 covers a spay/neuter surgery. Every dollar saves a life.',
            background: 'gradient' as const,
            backgroundValue:
              'linear-gradient(135deg, #d97706 0%, #b45309 30%, #92400e 60%, #15803d 100%)',
            primaryCta: {
              label: 'Donate Now',
              href: `/templates/animal-welfare/donate`,
              variant: 'primary' as const,
            },
            secondaryCta: {
              label: 'Adopt a Pet',
              href: `/templates/animal-welfare/programs`,
              variant: 'outline' as const,
            },
            donateAmounts: [25, 50, 100, 250, 500],
            leftColumn: {
              title: 'Make a Donation',
              description:
                'Your gift provides food, shelter, and medical care for animals in need.',
            },
            rightColumn: {
              title: 'Adopt or Foster',
              description: 'Give an animal a loving home. Browse our available pets.',
            },
          },
        },
        {
          type: 'partnerLogos',
          config: {
            layout: 'default' as const,
            theme: 'light',
            animation: 'fade',
            background: 'solid',
            backgroundValue: '#fff7ed',
            padding: 'large',
            visible: true,
            heading: { title: 'Our Partners in Animal Welfare' },
            variant: 'grid' as const,
            partners: [
              { name: 'ASPCA', logo: { src: '/images/partners/default.svg', alt: 'ASPCA' } },
              {
                name: 'Humane Society',
                logo: { src: '/images/partners/humane-society.svg', alt: 'Humane Society' },
              },
              { name: 'WWF', logo: { src: '/images/partners/wwf.svg', alt: 'WWF' } },
              { name: 'IFAW', logo: { src: '/images/partners/ifaw.svg', alt: 'IFAW' } },
            ],
          },
        },
      ],
    },
    about: {
      seo: {
        title: 'About â€” Paws & Claws Rescue',
        description: 'Our mission to protect and care for animals.',
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/animals/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Our Story',
              subtitle: 'About Paws & Claws Rescue',
              description:
                'From a small home-based rescue to one of the largest animal welfare organizations â€” our journey of compassion.',
            },
            backgroundImage: { src: '/images/animals/hero.jpg', alt: 'Rescued dog' },
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
              'Founded in 2010 by Dr. Emily Hart, Paws & Claws Rescue began as a small foster network operating out of her home garage.',
              'Today we operate 15 shelters, 4 wildlife rehabilitation centers, and outreach programs across 20 countries.',
            ],
            mission: 'A world where every animal is treated with compassion and respect.',
            timeline: [
              {
                year: '2010',
                title: 'First Rescue',
                description: 'Dr. Hart rescued and fostered 50 animals in her first year.',
              },
              {
                year: '2013',
                title: 'First Shelter Opens',
                description: 'Opened our first no-kill shelter with capacity for 200 animals.',
              },
              {
                year: '2016',
                title: 'Wildlife Center',
                description:
                  'Established our first wildlife rehabilitation center for native species.',
              },
              {
                year: '2020',
                title: '50,000 Adoptions',
                description: 'Celebrated 50,000 successful adoptions since founding.',
              },
              {
                year: '2024',
                title: '100,000 Animals Rescued',
                description: 'Reached the milestone of 100,000 animals rescued and treated.',
              },
            ],
            image: { src: '/images/animals/cat.jpg', alt: 'Paws & Claws timeline' },
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered' as const,
            heading: 'Be a Voice for the Voiceless',
            description: 'Every animal deserves a chance at a happy, healthy life.',
            primaryCta: {
              label: 'Support Our Work',
              href: `/templates/animal-welfare/donate`,
              variant: 'primary' as const,
            },
          },
        },
      ],
    },
    programs: {
      seo: {
        title: 'Programs â€” Paws & Claws Rescue',
        description: 'Our animal welfare programs.',
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/animals/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Our Programs',
              subtitle: 'How We Help Animals',
              description:
                'From wildlife rescue to shelter operations â€” discover how we protect and care for animals in need.',
            },
            backgroundImage: { src: '/images/animals/hero.jpg', alt: 'Rescued dog' },
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
                id: 'wildlife-rescue',
                title: 'Wildlife Rescue',
                description:
                  'Medical treatment and rehabilitation for injured and orphaned wildlife.',
                image: { src: '/images/animals/cat.jpg', alt: 'Wildlife' },
                category: 'Wildlife',
                impactStat: '15K+ released',
                cta: { label: 'Details', href: `/templates/animal-welfare/programs` },
                featured: true,
              },
              {
                id: 'shelter',
                title: 'Shelter Operations',
                description: 'No-kill shelters providing housing, medical care, and enrichment.',
                image: { src: '/images/animals/cat.jpg', alt: 'Shelter' },
                category: 'Shelter',
                impactStat: '50K+ sheltered',
                cta: { label: 'Details', href: `/templates/animal-welfare/programs` },
              },
              {
                id: 'adoption',
                title: 'Adoption Program',
                description:
                  'Finding loving forever homes for rescued animals through careful matching.',
                image: { src: '/images/animals/cat.jpg', alt: 'Adoption' },
                category: 'Adoption',
                impactStat: '50K+ adoptions',
                cta: { label: 'Details', href: `/templates/animal-welfare/programs` },
              },
              {
                id: 'education',
                title: 'Community Education',
                description: 'Teaching compassion and responsible pet ownership to communities.',
                image: { src: '/images/animals/cat.jpg', alt: 'Education' },
                category: 'Education',
                impactStat: '200K+ reached',
                cta: { label: 'Details', href: `/templates/animal-welfare/programs` },
              },
            ],
            showCategoryBadges: true,
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'donate' as const,
            heading: 'Support Animal Rescue',
            description: 'Your donation helps us rescue, treat, and care for animals in need.',
            primaryCta: {
              label: 'Donate to Animals',
              href: `/templates/animal-welfare/donate`,
              variant: 'primary' as const,
            },
          },
        },
      ],
    },
    'program-detail': {
      seo: {
        title: 'Wildlife Rescue â€” Paws & Claws Rescue',
        description: 'Our wildlife rescue and rehabilitation program.',
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'split' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/animals/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Wildlife Rescue & Rehabilitation',
              subtitle: 'Program Details',
              description:
                'Rescuing injured, orphaned, and trafficked wildlife and returning them to their natural habitats.',
            },
            backgroundImage: { src: '/images/animals/hero.jpg', alt: 'Wildlife rescue' },
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
              'Our wildlife rescue program operates four specialized rehabilitation centers staffed by veterinarians and wildlife experts.',
              'We treat animals injured by vehicles, poaching traps, natural disasters, and illegal wildlife trade. Each animal receives customized medical care and rehabilitation.',
              'Since 2016, we have released over 15,000 animals back into protected habitats with a 78% survival rate.',
              'We also work with law enforcement to combat wildlife trafficking and provide training for rangers and conservation officers.',
            ],
            image: { src: '/images/animals/cat.jpg', alt: 'Wildlife rehabilitation' },
          },
        },
        {
          type: 'impact',
          config: {
            theme: 'light',
            animation: 'fade',
            background: 'solid',
            backgroundValue: '#fef3c7',
            padding: 'large',
            visible: true,
            layout: 'progress' as const,
            stats: [
              { value: 15000, suffix: '+', label: 'Animals Released' },
              { value: 78, suffix: '%', label: 'Release Success Rate' },
              { value: 200, suffix: '+', label: 'Species Treated' },
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
              { src: '/images/animals/gallery2.jpg', alt: 'Eagle in rehabilitation' },
              { src: '/images/animals/hero.jpg', alt: 'Baby monkeys being cared for' },
              { src: '/images/animals/wildlife.jpg', alt: 'Turtle release at beach' },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'donate' as const,
            heading: 'Fund Wildlife Rescue',
            description:
              '$100 provides medical treatment for an injured animal. $1,000 funds a release expedition.',
            primaryCta: {
              label: 'Donate Now',
              href: `/templates/animal-welfare/donate`,
              variant: 'primary' as const,
            },
            donateAmounts: [25, 50, 100, 500, 1000],
          },
        },
      ],
    },
    gallery: {
      seo: {
        title: 'Gallery â€” Paws & Claws Rescue',
        description: 'Photos of rescued animals and success stories.',
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/animals/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Gallery',
              subtitle: 'Every Life Matters',
              description:
                'Heartwarming moments of rescue, rehabilitation, and reunion captured through photography.',
            },
            backgroundImage: { src: '/images/animals/hero.jpg', alt: 'Rescued dog' },
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
              { src: '/images/animals/cat.jpg', alt: 'Rescued puppy' },
              { src: '/images/animals/dog.jpg', alt: 'Wild bird release' },
              { src: '/images/animals/gallery3.jpg', alt: 'Cat recovery' },
              { src: '/images/animals/gallery4.jpg', alt: 'Adoption day' },
              { src: '/images/animals/gallery5.jpg', alt: 'Wildlife center' },
              { src: '/images/animals/gallery6.jpg', alt: 'Happy adopted pet' },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered' as const,
            heading: 'Help Us Create More Happy Endings',
            description: 'Your support gives animals a second chance at life.',
            primaryCta: {
              label: 'Donate Now',
              href: `/templates/animal-welfare/donate`,
              variant: 'primary' as const,
            },
          },
        },
      ],
    },
    donate: {
      seo: {
        title: 'Donate â€” Paws & Claws Rescue',
        description: 'Support animal rescue and welfare.',
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/animals/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Make a Donation',
              subtitle: 'Your Gift Saves Animals',
              description:
                'Every donation provides food, medical care, and shelter for animals in need.',
            },
            backgroundImage: { src: '/images/animals/hero.jpg', alt: 'Rescued dog' },
            overlayOpacity: 0.5,
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'donate' as const,
            heading: 'Choose Your Impact',
            description: 'Select an amount to donate or set up monthly giving to save more lives.',
            primaryCta: {
              label: 'Donate Now',
              href: `/templates/animal-welfare/donate`,
              variant: 'primary' as const,
            },
            donateAmounts: [25, 50, 100, 250, 500, 1000],
            benefits: [
              { text: '100% goes to animal care programs' },
              { text: 'Tax deductible' },
              { text: 'Monthly rescue stories' },
            ],
          },
        },
        {
          type: 'testimonials',
          config: {
            theme: 'light',
            animation: 'fade',
            background: 'solid',
            backgroundValue: '#fef3c7',
            padding: 'large',
            visible: true,
            heading: { title: 'Why Our Donors Give' },
            layout: 'carousel' as const,
            testimonials: [
              {
                quote:
                  'I adopted my best friend from Paws & Claws. Donating monthly is the least I can do to help other animals find the same happiness.',
                name: 'Mike Johnson',
                role: 'Monthly Donor, Canada',
              },
              {
                quote:
                  'They saved my dog after a terrible accident. The veterinary care was world-class. I will be forever grateful.',
                name: 'Priya Sharma',
                role: 'Pet Owner, India',
              },
            ],
          },
        },
      ],
    },
    volunteer: {
      seo: {
        title: 'Volunteer â€” Paws & Claws Rescue',
        description: 'Join our animal welfare volunteer team.',
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'split' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/animals/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Volunteer With Us',
              subtitle: 'Help Animals in Need',
              description:
                'Your time and skills can make a world of difference to animals waiting for a second chance.',
            },
            backgroundImage: { src: '/images/animals/hero.jpg', alt: 'Cat and person' },
            overlayOpacity: 0.5,
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'volunteer' as const,
            heading: 'Join Our Rescue Team',
            description:
              'We need animal caregivers, adoption counselors, and administrative support.',
            primaryCta: {
              label: 'Apply Now',
              href: `/templates/animal-welfare/volunteer`,
              variant: 'primary' as const,
            },
            benefits: [
              { text: 'Work with diverse animals' },
              { text: 'Veterinary training available' },
              { text: 'Flexible scheduling' },
            ],
          },
        },
        {
          type: 'faq',
          config: {
            layout: 'default' as const,
            theme: 'light',
            animation: 'fade',
            background: 'solid',
            backgroundValue: '#fef3c7',
            padding: 'large',
            visible: true,
            heading: { title: 'Volunteer FAQs' },
            items: [
              {
                title: 'Do I need experience with animals?',
                content: 'No, we provide full training for all volunteer roles.',
              },
              {
                title: 'What is the minimum commitment?',
                content: 'We ask for a minimum of 4 hours per week for at least 3 months.',
              },
              {
                title: 'Can teenagers volunteer?',
                content: 'Yes, volunteers aged 14+ can join with parental consent.',
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
        title: 'News â€” Paws & Claws Rescue',
        description: 'Latest animal rescue stories and updates.',
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/animals/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'News & Stories',
              subtitle: 'Tails of Hope',
              description:
                'Read heartwarming rescue stories, adoption successes, and animal welfare updates.',
            },
            backgroundImage: { src: '/images/animals/hero.jpg', alt: 'Rescued dog' },
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
                title: 'Massive Rescue Operation Saves 200 Dogs from Puppy Mill',
                slug: 'puppy-mill-rescue',
                date: '2026-06-25',
                category: 'Rescue',
                excerpt:
                  'Our team rescued 200 dogs from a busted illegal puppy mill operation. All animals are receiving medical care.',
                image: '/images/animals/dog.jpg',
                author: { name: 'Dr. Emily Hart' },
              },
              {
                title: 'Orphaned Elephant Calf Released Back to the Wild',
                slug: 'elephant-release',
                date: '2026-05-30',
                category: 'Wildlife',
                excerpt:
                  'After two years of rehabilitation, orphaned elephant calf Tembo was successfully released into a protected reserve.',
                image: '/images/animals/gallery1.jpg',
                author: { name: 'James Kariuki' },
              },
              {
                title: 'Adoption Event Finds Homes for 500 Animals in One Weekend',
                slug: 'mega-adoption-event',
                date: '2026-04-15',
                category: 'Adoption',
                excerpt:
                  'Our annual Mega Adoption Weekend found forever homes for 500 animals, breaking our previous record.',
                image: '/images/animals/gallery2.jpg',
                author: { name: 'Lisa Chang' },
              },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'banner' as const,
            heading: 'Get Rescue Updates',
            description: 'Subscribe for heartwarming rescue stories and adoption alerts.',
            primaryCta: { label: 'Subscribe', href: '#', variant: 'primary' as const },
          },
        },
      ],
    },
    contact: {
      seo: {
        title: 'Contact â€” Paws & Claws Rescue',
        description: 'Get in touch with our rescue team.',
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/animals/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Contact Us',
              subtitle: "We're Here for the Animals",
              description:
                'Have a rescue emergency, adoption question, or want to partner with us? Reach out anytime.',
            },
            backgroundImage: { src: '/images/animals/hero.jpg', alt: 'Cat and person' },
            overlayOpacity: 0.5,
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'contact' as const,
            heading: 'Get in Touch',
            description: 'Reach out to our team for questions, partnership inquiries, or support.',
            email: 'rescue@pawsandclaws.org',
            phone: '+1 (555) 234-5678',
            address: '450 Animal Sanctuary Road, Portland, OR 97201',
            primaryCta: { label: 'Send Message', href: '#', variant: 'primary' as const },
          },
        },
        {
          type: 'faq',
          config: {
            layout: 'default' as const,
            theme: 'light',
            animation: 'fade',
            background: 'solid',
            backgroundValue: '#fef3c7',
            padding: 'large',
            visible: true,
            heading: { title: 'Quick Answers' },
            items: [
              {
                title: 'I found an injured animal. What do I do?',
                content: 'Call our rescue hotline immediately at +1 (555) 234-5678 for guidance.',
              },
              {
                title: 'How do I adopt a pet?',
                content:
                  'Visit our adoption page to browse available animals and start the application process.',
              },
              {
                title: 'Can I donate pet supplies?',
                content:
                  'Yes, we accept food, bedding, toys, and medical supplies at our shelter locations.',
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
