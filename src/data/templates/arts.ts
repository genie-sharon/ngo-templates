import type { TemplateData } from './types';

const ORG = 'Nexus Arts Foundation';
const BASE = `/templates/arts`;

const nav = {
  layout: 'transparent' as const,
  logo: { text: ORG, href: '/' },
  menuItems: [
    { label: 'Home', href: BASE },
    { label: 'About', href: `${BASE}/about` },
    { label: 'Collections', href: `${BASE}/collections` },
    { label: 'Programs', href: `${BASE}/programs` },
    { label: 'Events', href: `${BASE}/events` },
    { label: 'Contact', href: `${BASE}/contact` },
  ],
  ctaButtons: [
    {
      label: 'Membership',
      href: `${BASE}/donate`,
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
  ],
  sticky: true,
  theme: 'dark' as const,
};

const footer = {
  layout: 'large' as const,
  theme: 'dark' as const,
  animation: 'fade' as const,
  background: 'solid' as const,
  backgroundValue: '#0a0a0a',
  padding: 'large' as const,
  visible: true,
  logo: { src: null, alt: ORG, width: 160, height: 40 },
  description:
    'A cultural foundation dedicated to making art accessible, supporting diverse artists, and preserving creative heritage for future generations.',
  columns: [
    {
      title: 'Visit',
      links: [
        { label: 'Plan Your Visit', href: `${BASE}/about` },
        { label: 'Current Exhibitions', href: `${BASE}/collections` },
        { label: 'Events Calendar', href: `${BASE}/events` },
        { label: 'Gallery Map', href: `${BASE}/about` },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Become a Member', href: `${BASE}/donate` },
        { label: 'Donate', href: `${BASE}/donate` },
        { label: 'Volunteer', href: `${BASE}/volunteer` },
        { label: 'Corporate Partnerships', href: `${BASE}/contact` },
      ],
    },
    {
      title: 'Explore',
      links: [
        { label: 'Collections', href: `${BASE}/collections` },
        { label: 'Artist Profiles', href: `${BASE}/artist-profiles` },
        { label: 'News & Stories', href: `${BASE}/news` },
        { label: 'Resources', href: `${BASE}/resources` },
        { label: 'FAQ', href: `${BASE}/faq` },
      ],
    },
  ],
  socialLinks: [
    { platform: 'instagram' as const, url: '#', label: 'Instagram' },
    { platform: 'facebook' as const, url: '#', label: 'Facebook' },
    { platform: 'youtube' as const, url: '#', label: 'YouTube' },
    { platform: 'twitter' as const, url: '#', label: 'Twitter' },
    { platform: 'linkedin' as const, url: '#', label: 'LinkedIn' },
  ],
  copyright: `© 2026 ${ORG}. All rights reserved.`,
  showBackToTop: true,
};

export const artsTemplate: TemplateData = {
  slug: 'arts',
  name: 'Arts & Culture',
  tagline: 'Where creativity finds its home',
  description:
    'An editorial, gallery-first design for arts and culture organizations. Features a charcoal black and warm white palette with royal purple accents. Includes exhibition showcases, artist profiles, collection grids, event calendars, and creative program highlights.',
  themeId: 'arts',
  mood: 'Editorial, elegant, creative, minimal, inspirational, gallery-first',
  illustrationStyle:
    'Immersive art photography, gallery spaces, performance shots, close-ups of artworks, creative studio environments, warm editorial lighting',
  motionStyle:
    'Editorial fade transitions, image reveal animations, parallax scrolling, creative grid animations, smooth section reveals with typography effects',
  navigation: nav,
  footer: footer,
  pages: {
    home: {
      seo: {
        title: `${ORG} — Arts & Culture Foundation`,
        description: `${ORG} is a cultural foundation dedicated to making art accessible, supporting diverse artists, and preserving creative heritage through exhibitions, education, and community programs.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'split' as const,
            theme: 'dark',
            animation: 'hero',
            background: 'image',
            backgroundValue: '/images/arts/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Art Speaks\nWhere Words Cannot',
              subtitle: ORG,
              description:
                'We champion artists, curate transformative exhibitions, and make creativity accessible to all. Step into a world where every piece tells a story.',
              tag: 'Opening a New Exhibition Soon',
            },
            backgroundImage: {
              src: '/images/arts/hero.jpg',
              alt: 'Gallery exhibition space with dramatic lighting',
            },
            stats: [
              { value: 2000, suffix: '+', label: 'Artists Supported' },
              { value: 350, suffix: '+', label: 'Exhibitions Curated' },
              { value: 120000, suffix: '+', label: 'Annual Visitors' },
            ],
            trustBadges: [
              { src: '/images/trust/charity-navigator.svg', alt: 'Arts Council' },
              { src: '/images/trust/un-ecosoc.svg', alt: 'UNESCO' },
              { src: '/images/trust/unicef-partner.svg', alt: 'Getty Foundation' },
            ],
            showScrollIndicator: true,
            overlayOpacity: 0.4,
          },
        },
        {
          type: 'editorialQuote',
          config: {
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'medium',
            visible: true,
            quote: {
              quote: 'Art is not what you see, but what you make others see.',
              author: 'Edgar Degas',
              role: 'Artist & Sculptor',
            },
          },
        },
        {
          type: 'impact',
          config: {
            theme: 'light',
            animation: 'fade-in-up',
            background: 'muted',
            padding: 'large',
            visible: true,
            layout: 'counters' as const,
            heading: {
              title: 'Our Cultural Impact',
              tag: 'By the Numbers',
              alignment: 'center' as const,
            },
            stats: [
              { value: 2000, suffix: '+', label: 'Artists Supported' },
              { value: 350, suffix: '+', label: 'Exhibitions Curated' },
              { value: 120000, suffix: '+', label: 'Annual Visitors' },
              { value: 60, suffix: '+', label: 'Countries Represented' },
              { value: 8000, suffix: '+', label: 'Collection Pieces' },
              { value: 40, suffix: '+', label: 'Community Partners' },
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
              title: 'Where Art & Community Meet',
              tag: 'Our Mission',
              alignment: 'left' as const,
            },
            body: [
              `${ORG} was founded in 2009 by curator Maria Gonzalez and a collective of visionary artists who believed that art should not be confined to elite spaces — it belongs to everyone.`,
              'What began as a single gallery in a converted warehouse has grown into a multidisciplinary cultural foundation spanning three gallery spaces, a performance venue, an arts education center, and digital platforms reaching audiences worldwide.',
              'We champion emerging and underrepresented artists, preserve cultural heritage, and create immersive experiences that challenge, inspire, and connect.',
            ],
            mission:
              'To make art accessible to all, amplify diverse creative voices, and preserve cultural heritage for future generations.',
            vision:
              'A world where creativity is recognized as essential to human flourishing and accessible to every person, everywhere.',
            values: [
              {
                title: 'Radical Access',
                description:
                  'We break down financial, cultural, and physical barriers to arts participation.',
              },
              {
                title: 'Diverse Voices',
                description:
                  'We champion artists from all backgrounds, perspectives, and creative disciplines.',
              },
              {
                title: 'Creative Risk',
                description:
                  'We support bold, experimental work that challenges and expands artistic boundaries.',
              },
              {
                title: 'Cultural Stewardship',
                description:
                  'We preserve and honor artistic heritage while nurturing the creativity of tomorrow.',
              },
            ],
            image: {
              src: '/images/arts/hero.jpg',
              alt: 'Gallery visitors exploring an exhibition',
            },
          },
        },
        {
          type: 'featuredExhibition',
          config: {
            theme: 'light',
            animation: 'fade-in-up',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: { title: 'Current Exhibition', tag: 'Featured', alignment: 'left' as const },
            exhibition: {
              id: 'exhibition-current',
              title: 'Ephemeral Horizons',
              subtitle: 'A Multi-Sensory Journey Through Contemporary Art',
              description:
                'Featuring 50 works from 30 international artists exploring the intersection of impermanence, memory, and hope. Immersive installations, large-scale paintings, and digital projections transform our gallery into a living canvas.',
              image: '/images/arts/event.jpg',
              date: '2026-09-15',
              endDate: '2026-12-20',
              location: 'Main Gallery, Nexus Arts Center',
              curator: 'Maria Gonzalez',
              artists: ['Anika Sharma', 'Kofi Mensah', 'Elena Vasquez', 'James Park'],
              cta: {
                label: 'Plan Your Visit',
                href: `${BASE}/collections`,
                variant: 'gradient' as const,
              },
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
              title: 'Our Programs & Initiatives',
              subtitle: 'From education to preservation — discover how we bring art to life.',
              tag: 'Programs',
              alignment: 'center' as const,
            },
            programs: [
              {
                id: 'arts-education',
                title: 'Arts Education',
                description:
                  'Free and pay-what-you-can classes in painting, sculpture, photography, digital arts, and printmaking for all ages and skill levels.',
                image: { src: '/images/arts/gallery3.jpg', alt: 'Art students in studio' },
                category: 'Education',
                impactStat: '12K+ students annually',
                cta: { label: 'Learn More', href: `${BASE}/programs` },
                featured: true,
              },
              {
                id: 'artist-grants',
                title: 'Artist Grants & Residencies',
                description:
                  'Financial grants, studio space, and mentorship programs supporting emerging and underrepresented artists to create new work.',
                image: { src: '/images/arts/gallery4.jpg', alt: 'Artist in studio' },
                category: 'Grants',
                impactStat: '$2M+ awarded',
                cta: { label: 'Learn More', href: `${BASE}/programs` },
              },
              {
                id: 'cultural-festivals',
                title: 'Cultural Festivals',
                description:
                  'Annual festivals celebrating music, dance, theatre, film, and visual arts from cultures around the world.',
                image: { src: '/images/arts/gallery5.jpg', alt: 'Cultural festival performance' },
                category: 'Festivals',
                impactStat: '50K+ festival attendees',
                cta: { label: 'Learn More', href: `${BASE}/programs` },
              },
              {
                id: 'workshops',
                title: 'Creative Workshops',
                description:
                  'Hands-on workshops led by professional artists in everything from ceramics and weaving to digital animation and sound art.',
                image: { src: '/images/arts/gallery6.jpg', alt: 'Workshop participants' },
                category: 'Workshops',
                impactStat: '500+ workshops yearly',
                cta: { label: 'Learn More', href: `${BASE}/programs` },
              },
              {
                id: 'restoration',
                title: 'Heritage Preservation',
                description:
                  'Conservation and restoration of cultural artifacts, historical artworks, and heritage sites for future generations.',
                image: { src: '/images/arts/gallery7.jpg', alt: 'Art restoration work' },
                category: 'Preservation',
                impactStat: '2,000+ artifacts preserved',
                cta: { label: 'Learn More', href: `${BASE}/programs` },
              },
              {
                id: 'community-arts',
                title: 'Community Public Art',
                description:
                  'Participatory mural projects, public installations, and community-led creative placemaking that transforms public spaces.',
                image: { src: '/images/arts/gallery8.jpg', alt: 'Community mural project' },
                category: 'Public Art',
                impactStat: '200+ public artworks',
                cta: { label: 'Learn More', href: `${BASE}/programs` },
              },
            ],
            showCategoryBadges: true,
            showImpactStats: true,
          },
        },
        {
          type: 'artistProfiles',
          config: {
            theme: 'light',
            animation: 'fade-in-up',
            background: 'muted',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Featured Artists',
              subtitle: 'Discover the creative visionaries shaping contemporary art.',
              tag: 'Artists',
              alignment: 'center' as const,
            },
            artists: [
              {
                id: 'artist-1',
                name: 'Anika Sharma',
                discipline: 'Mixed Media Installation',
                image: '/images/arts/event.jpg',
                bio: 'Anika creates large-scale immersive installations exploring memory, migration, and cultural identity through found objects, light, and sound.',
                featured: true,
              },
              {
                id: 'artist-2',
                name: 'Kofi Mensah',
                discipline: 'Painting & Sculpture',
                image: '/images/arts/gallery.jpg',
                bio: "Kofi's vibrant works draw on West African textile traditions and contemporary urban culture, creating bold dialogues between past and present.",
              },
              {
                id: 'artist-3',
                name: 'Elena Vasquez',
                discipline: 'Digital & New Media',
                image: '/images/arts/gallery1.jpg',
                bio: 'Elena pushes boundaries at the intersection of technology and art, creating interactive digital installations that invite audience participation.',
              },
              {
                id: 'artist-4',
                name: 'James Park',
                discipline: 'Photography',
                image: '/images/arts/gallery3.jpg',
                bio: 'James captures the poetry of everyday life through his lens, documenting communities and landscapes with extraordinary intimacy and depth.',
              },
            ],
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
            heading: {
              title: 'Upcoming Events',
              subtitle: 'Exhibition openings, artist talks, workshops, performances, and more.',
              tag: 'Calendar',
              alignment: 'center' as const,
            },
            events: [
              {
                id: 'e1',
                title: 'Ephemeral Horizons — Opening Night',
                description:
                  'Join us for the premiere of our landmark fall exhibition with the curators and featured artists.',
                date: '2026-09-15',
                time: '7:00 PM',
                location: 'Main Gallery',
                category: 'Exhibition',
                featured: true,
                cta: { label: 'RSVP', href: '#' },
              },
              {
                id: 'e2',
                title: 'Artist Talk: Anika Sharma',
                description:
                  'A conversation with the acclaimed mixed media artist about her creative process and inspirations.',
                date: '2026-09-22',
                time: '6:30 PM',
                location: 'Lecture Hall',
                category: 'Talk',
                cta: { label: 'Register', href: '#' },
              },
              {
                id: 'e3',
                title: 'Ceramics Workshop: Forms of Nature',
                description:
                  'A hands-on workshop exploring organic forms in clay, led by master ceramicist Yuki Tanaka.',
                date: '2026-10-05',
                time: '10:00 AM',
                location: 'Education Studio',
                category: 'Workshop',
                cta: { label: 'Book Now', href: '#' },
              },
              {
                id: 'e4',
                title: 'International Music Festival',
                description:
                  'Three days of world music, performances, and?? collaborations celebrating global musical traditions.',
                date: '2026-10-18',
                time: '12:00 PM',
                location: 'Performance Hall & Gardens',
                category: 'Festival',
                featured: true,
                cta: { label: 'Get Tickets', href: '#' },
              },
              {
                id: 'e5',
                title: "Curator's Tour: Behind the Collection",
                description:
                  'An intimate guided tour of our permanent collection with chief curator Maria Gonzalez.',
                date: '2026-11-02',
                time: '11:00 AM',
                location: 'Permanent Collection Wing',
                category: 'Tour',
                cta: { label: 'Join Tour', href: '#' },
              },
              {
                id: 'e6',
                title: 'Digital Art Night',
                description:
                  'An evening of immersive digital art, VR experiences, and interactive installations by emerging new media artists.',
                date: '2026-11-15',
                time: '8:00 PM',
                location: 'Digital Gallery',
                category: 'Exhibition',
                cta: { label: 'Learn More', href: '#' },
              },
            ],
            showCountdown: true,
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
              title: 'Voices From Our Community',
              subtitle: 'Artists, visitors, partners, and curators share their experiences.',
              tag: 'Testimonials',
              alignment: 'center' as const,
            },
            layout: 'carousel' as const,
            testimonials: [
              {
                quote:
                  'Nexus Arts gave me my first major platform. The trust they placed in my vision changed everything. This is not just a gallery — it is a launchpad for creative dreams.',
                name: 'Kehinde Ola',
                role: 'Visual Artist',
                avatar: { src: '/images/arts/gallery3.jpg', alt: 'Kehinde Ola' },
              },
              {
                quote:
                  'My children attend the Saturday art program. The transformation in their confidence and creativity has been remarkable. Art is not extracurricular — it is essential.',
                name: 'Linda Park',
                role: 'Parent & Member',
                avatar: { src: '/images/arts/gallery4.jpg', alt: 'Linda Park' },
              },
              {
                quote:
                  'As a curator, I have worked with institutions worldwide. Nexus Arts stands apart for their commitment to risk-taking, diversity, and genuine community engagement.',
                name: 'Dr. Amara Osei',
                role: 'Guest Curator, UK',
                avatar: { src: '/images/arts/gallery5.jpg', alt: 'Dr. Amara Osei' },
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
              title: 'Moments From Our Spaces',
              subtitle:
                'A visual journey through exhibitions, performances, workshops, and celebrations.',
              tag: 'Gallery',
              alignment: 'center' as const,
            },
            layout: 'masonry' as const,
            images: [
              { src: '/images/arts/event.jpg', alt: 'Gallery opening night crowd' },
              {
                src: '/images/arts/gallery3.jpg',
                alt: 'Sculpture installation in white gallery space',
              },
              { src: '/images/arts/gallery4.jpg', alt: 'Live dance performance on stage' },
              { src: '/images/arts/gallery5.jpg', alt: 'Gallery image' },
              { src: '/images/arts/gallery6.jpg', alt: 'Large-scale painting exhibition' },
              { src: '/images/arts/gallery7.jpg', alt: 'Outdoor music festival crowd' },
              { src: '/images/arts/hero.jpg', alt: 'Digital art projection installation' },
              { src: '/images/arts/event.jpg', alt: 'Artist talk in lecture hall' },
              { src: '/images/arts/gallery8.jpg', alt: 'Community mural project' },
            ],
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
            heading: {
              title: 'Our Partners & Sponsors',
              tag: 'Partners',
              alignment: 'center' as const,
            },
            variant: 'marquee' as const,
            partners: [
              {
                name: 'National Endowment for the Arts',
                logo: { src: '/images/partners/default.svg', alt: 'NEA' },
              },
              {
                name: 'Getty Foundation',
                logo: { src: '/images/partners/default.svg', alt: 'Getty' },
              },
              { name: 'UNESCO', logo: { src: '/images/partners/unesco.svg', alt: 'UNESCO' } },
              {
                name: 'Ford Foundation',
                logo: { src: '/images/partners/default.svg', alt: 'Ford' },
              },
              {
                name: 'Andy Warhol Foundation',
                logo: { src: '/images/partners/default.svg', alt: 'Warhol Foundation' },
              },
              {
                name: 'Prince Claus Fund',
                logo: { src: '/images/partners/default.svg', alt: 'Prince Claus Fund' },
              },
            ],
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
              title: 'Publications & Resources',
              subtitle:
                'Exhibition catalogues, artist interviews, research papers, and behind-the-scenes content.',
              tag: 'Library',
              alignment: 'center' as const,
            },
            resources: [
              {
                id: 'ar1',
                title: 'Ephemeral Horizons: Exhibition Catalogue',
                description:
                  'Full-colour catalogue featuring all 50 works, artist statements, and curator essays from our landmark exhibition.',
                type: 'download' as const,
                url: '#',
                category: 'Catalogues',
              },
              {
                id: 'ar2',
                title: 'Artist Spotlight: Anika Sharma',
                description:
                  'In-depth interview and studio visit with the acclaimed mixed media installation artist.',
                type: 'article' as const,
                url: '#',
                category: 'Artist Stories',
                image: '/images/arts/gallery4.jpg',
              },
              {
                id: 'ar3',
                title: 'Behind the Exhibition Documentary',
                description:
                  'A short film following the installation of Ephemeral Horizons from concept to opening night.',
                type: 'video' as const,
                url: '#',
                category: 'Documentary',
                image: '/images/arts/gallery5.jpg',
              },
              {
                id: 'ar4',
                title: 'The Creative Process Podcast',
                description:
                  'Monthly conversations with artists, curators, and cultural leaders about creativity and the arts.',
                type: 'podcast' as const,
                url: '#',
                category: 'Podcast',
                image: '/images/arts/gallery6.jpg',
              },
              {
                id: 'ar5',
                title: 'Annual Impact Report 2025',
                description:
                  'Comprehensive report on programs, financial stewardship, exhibitions, and community impact.',
                type: 'download' as const,
                url: '#',
                category: 'Reports',
              },
              {
                id: 'ar6',
                title: 'Arts Education Curriculum Guide',
                description:
                  'Downloadable lesson plans and activity guides for educators integrating arts into their classrooms.',
                type: 'download' as const,
                url: '#',
                category: 'Education',
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
                title: 'How much are exhibition tickets?',
                content:
                  'General admission is free. Special exhibitions may have a suggested donation of $10-$20. Members enjoy free access to all exhibitions.',
              },
              {
                id: 'faq2',
                title: 'Can I submit my artwork for exhibition?',
                content:
                  'Yes, we have open calls twice a year. Visit our submissions page for guidelines and deadlines.',
              },
              {
                id: 'faq3',
                title: 'How do I become a member?',
                content:
                  'Memberships start at $50/year and include unlimited free admission, exhibition previews, and discounts on workshops and events.',
              },
              {
                id: 'faq4',
                title: 'Do you offer group tours?',
                content:
                  'Yes, we offer guided tours for school groups, community organizations, and corporate teams. Contact our education team to book.',
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
            heading: { title: 'Stay Inspired', tag: 'Newsletter', alignment: 'center' as const },
            title: 'Join Our Creative Community',
            description:
              'Receive exhibition announcements, artist features, event invites, and behind-the-scenes stories.',
            placeholder: 'your@email.com',
            buttonLabel: 'Subscribe',
            successMessage: 'Welcome to the Nexus Arts community!',
          },
        },
        {
          type: 'editorialQuote',
          config: {
            theme: 'light',
            animation: 'fade',
            background: 'muted',
            padding: 'medium',
            visible: true,
            quote: {
              quote:
                'Every child is an artist. The problem is how to remain an artist once we grow up.',
              author: 'Pablo Picasso',
              role: 'Artist & Sculptor',
            },
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'dual' as const,
            heading: 'Art Belongs to Everyone',
            description:
              'Your support keeps our galleries open, our programs free, and our artists creating.',
            primaryCta: {
              label: 'Become a Member',
              href: `${BASE}/donate`,
              variant: 'primary' as const,
            },
            secondaryCta: {
              label: 'Support the Arts',
              href: `${BASE}/donate`,
              variant: 'secondary' as const,
            },
          },
        },
      ],
    },

    about: {
      seo: {
        title: `About — ${ORG}`,
        description: `Learn about ${ORG}'s mission, history, curatorial vision, and commitment to making art accessible to all.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/arts/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Our Story',
              subtitle: 'About Us',
              description:
                'From a single warehouse gallery to a multidisciplinary cultural foundation — our journey of making art accessible to everyone.',
              tag: 'Since 2009',
            },
            backgroundImage: { src: '/images/arts/hero.jpg', alt: 'Gallery interior' },
            overlayOpacity: 0.4,
          },
        },
        {
          type: 'editorialQuote',
          config: {
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'medium',
            visible: true,
            quote: {
              quote: 'Art enables us to find ourselves and lose ourselves at the same time.',
              author: 'Thomas Merton',
              role: 'Writer & Theologian',
            },
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
            heading: { title: 'Our Mission & Curatorial Vision', alignment: 'left' as const },
            body: [
              `${ORG} was born in 2009 when curator Maria Gonzalez converted a disused warehouse into a raw, experimental gallery space. The first exhibition featured five local artists and was visited by 300 people.`,
              'Today, we have grown into a world-class cultural institution spanning three galleries, a 500-seat performance venue, an education center, and a digital platform reaching audiences in over 60 countries.',
              'Yet our founding belief remains unchanged: art is not a luxury for the few — it is a essential human language that belongs to everyone. Every exhibition, every program, every partnership is guided by this conviction.',
            ],
            mission:
              'To make art accessible to all, amplify diverse creative voices, and preserve cultural heritage for future generations.',
            vision:
              'A world where creativity is recognized as essential to human flourishing and accessible to every person, everywhere.',
            values: [
              {
                title: 'Radical Access',
                description:
                  'We break down financial, cultural, and physical barriers to arts participation.',
              },
              {
                title: 'Diverse Voices',
                description:
                  'We champion artists from all backgrounds, perspectives, and creative disciplines.',
              },
              {
                title: 'Creative Risk',
                description:
                  'We support bold, experimental work that challenges and expands artistic boundaries.',
              },
              {
                title: 'Cultural Stewardship',
                description:
                  'We preserve and honor artistic heritage while nurturing the creativity of tomorrow.',
              },
            ],
            image: { src: '/images/arts/event.jpg', alt: 'Founder Maria Gonzalez in the gallery' },
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
              'From a single warehouse to a cultural landmark — the milestones that shaped our foundation.',
            ],
            mission: 'Art is for everyone.',
            timeline: [
              {
                year: '2009',
                title: 'First Gallery Opens',
                description:
                  'Curator Maria Gonzalez opens the first Nexus Arts gallery in a converted warehouse with five local artists.',
              },
              {
                year: '2012',
                title: 'Arts Education Program Launches',
                description:
                  'Free community art workshops begin, serving 500 students in the first year.',
              },
              {
                year: '2015',
                title: 'Second Gallery & Performance Venue',
                description:
                  'Expansion into a second space with a dedicated 500-seat performance hall.',
              },
              {
                year: '2018',
                title: 'Artist Residency Program',
                description:
                  'Launch of annual international artist residency program, hosting 10 artists per year.',
              },
              {
                year: '2021',
                title: 'Digital Gallery & Virtual Exhibitions',
                description:
                  'Digital transformation brings exhibitions and education programs to global audiences.',
              },
              {
                year: '2024',
                title: '100,000 Annual Visitors',
                description: 'Reach 100,000 annual visitors across physical and digital platforms.',
              },
            ],
            image: { src: '/images/arts/event.jpg', alt: 'Nexus Arts timeline' },
          },
        },
        {
          type: 'editorialQuote',
          config: {
            theme: 'light',
            animation: 'fade',
            background: 'none',
            padding: 'medium',
            visible: true,
            quote: {
              quote: "A museum is a place where one should lose one's head.",
              author: 'Renzo Piano',
              role: 'Architect',
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
            heading: { title: 'Our Reach & Impact', tag: 'Snapshot', alignment: 'center' as const },
            stats: [
              { value: 3, suffix: '', label: 'Gallery Spaces' },
              { value: 2000, suffix: '+', label: 'Artists Supported' },
              { value: 60, suffix: '+', label: 'Countries Reached' },
              { value: 120000, suffix: '+', label: 'Annual Visitors' },
            ],
            columns: 4,
            showIconBackground: true,
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered' as const,
            heading: 'Support the Arts',
            description:
              'Your membership or donation keeps our galleries open and our programs accessible to all.',
            primaryCta: {
              label: 'Become a Member',
              href: `${BASE}/donate`,
              variant: 'primary' as const,
            },
            secondaryCta: {
              label: 'Plan Your Visit',
              href: `${BASE}/about`,
              variant: 'outline' as const,
            },
          },
        },
      ],
    },

    collections: {
      seo: {
        title: `Collections — ${ORG}`,
        description: `Explore ${ORG}'s diverse collection spanning contemporary art, photography, sculpture, digital media, and cultural heritage.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/arts/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Our Collections',
              subtitle: 'A World of Creative Expression',
              description:
                'Explore 8,000+ works spanning contemporary art, photography, sculpture, digital media, textiles, and cultural artifacts from around the world.',
              tag: 'Explore',
            },
            backgroundImage: { src: '/images/arts/hero.jpg', alt: 'Gallery collection view' },
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
            layout: 'bento' as const,
            heading: {
              title: 'Browse by Category',
              tag: 'Collections',
              alignment: 'center' as const,
            },
            programs: [
              {
                id: 'contemporary',
                title: 'Contemporary Art',
                description:
                  'Bold, provocative works from living artists pushing the boundaries of creative expression.',
                image: { src: '/images/arts/event.jpg', alt: 'Contemporary art' },
                category: 'Art',
                impactStat: '3,000+ works',
                cta: { label: 'Explore', href: `${BASE}/collections` },
                featured: true,
              },
              {
                id: 'photography',
                title: 'Photography',
                description:
                  'A vast collection spanning documentary, fine art, and experimental photography from the 19th century to today.',
                image: { src: '/images/arts/event.jpg', alt: 'Photography' },
                category: 'Photography',
                impactStat: '2,000+ works',
                cta: { label: 'Explore', href: `${BASE}/collections` },
              },
              {
                id: 'sculpture',
                title: 'Sculpture & Installation',
                description:
                  'Three-dimensional works in stone, metal, wood, glass, found objects, and mixed media.',
                image: { src: '/images/arts/event.jpg', alt: 'Sculpture' },
                category: 'Sculpture',
                impactStat: '1,500+ works',
                cta: { label: 'Explore', href: `${BASE}/collections` },
              },
              {
                id: 'digital',
                title: 'Digital & New Media',
                description:
                  'Pioneering works in digital art, video, virtual reality, sound art, and interactive installations.',
                image: { src: '/images/arts/event.jpg', alt: 'Digital art' },
                category: 'Digital',
                impactStat: '500+ works',
                cta: { label: 'Explore', href: `${BASE}/collections` },
              },
              {
                id: 'textiles',
                title: 'Textiles & Fiber Art',
                description:
                  'Rich collection of traditional and contemporary textile art from cultures around the world.',
                image: { src: '/images/arts/event.jpg', alt: 'Textile art' },
                category: 'Textiles',
                impactStat: '800+ works',
                cta: { label: 'Explore', href: `${BASE}/collections` },
              },
              {
                id: 'cultural',
                title: 'Cultural Heritage',
                description:
                  'Historical artifacts, ceremonial objects, and cultural heritage pieces preserving global traditions.',
                image: { src: '/images/arts/event.jpg', alt: 'Cultural artifacts' },
                category: 'Heritage',
                impactStat: '1,200+ artifacts',
                cta: { label: 'Explore', href: `${BASE}/collections` },
              },
            ],
            showCategoryBadges: true,
          },
        },
        {
          type: 'featuredExhibition',
          config: {
            theme: 'light',
            animation: 'fade-in-up',
            background: 'muted',
            padding: 'large',
            visible: true,
            heading: {
              title: 'Current Exhibition',
              tag: 'Now Showing',
              alignment: 'left' as const,
            },
            exhibition: {
              id: 'exhibition-feat',
              title: 'Ephemeral Horizons',
              subtitle: 'A Multi-Sensory Journey Through Contemporary Art',
              description:
                'Featuring 50 works from 30 international artists exploring the intersection of impermanence, memory, and hope.',
              image: '/images/arts/gallery7.jpg',
              date: '2026-09-15',
              endDate: '2026-12-20',
              location: 'Main Gallery',
              curator: 'Maria Gonzalez',
              cta: {
                label: 'View Exhibition',
                href: `${BASE}/collections`,
                variant: 'gradient' as const,
              },
            },
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
            heading: { title: 'Collection Highlights', alignment: 'center' as const },
            layout: 'grid' as const,
            images: [
              { src: '/images/arts/hero.jpg', alt: 'Abstract painting' },
              { src: '/images/arts/event.jpg', alt: 'Sculpture installation' },
              { src: '/images/arts/gallery.jpg', alt: 'Photographic print' },
              { src: '/images/arts/hero.jpg', alt: 'Digital art projection' },
              { src: '/images/arts/event.jpg', alt: 'Textile artwork' },
              { src: '/images/arts/gallery.jpg', alt: 'Cultural artifact display' },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered' as const,
            heading: 'Plan Your Visit',
            description:
              'Experience our collections in person. Free admission, open six days a week.',
            primaryCta: { label: 'Visit Us', href: `${BASE}/about`, variant: 'primary' as const },
            secondaryCta: {
              label: 'View Online Gallery',
              href: `${BASE}/gallery`,
              variant: 'outline' as const,
            },
          },
        },
      ],
    },

    programs: {
      seo: {
        title: `Programs — ${ORG}`,
        description: `Explore ${ORG}'s programs: arts education, artist grants, cultural festivals, workshops, heritage preservation, and community public art.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/arts/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Our Programs',
              subtitle: 'Creativity in Action',
              description:
                'From education to preservation, grants to festivals — discover how we bring art to life and make it accessible to all.',
              tag: 'What We Do',
            },
            backgroundImage: { src: '/images/arts/hero.jpg', alt: 'Art program in action' },
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
            layout: 'bento' as const,
            heading: {
              title: 'Explore All Programs',
              tag: 'Our Work',
              alignment: 'center' as const,
            },
            programs: [
              {
                id: 'arts-education',
                title: 'Arts Education',
                description:
                  'Free and pay-what-you-can classes in painting, sculpture, photography, digital arts, and printmaking.',
                image: { src: '/images/arts/event.jpg', alt: 'Education' },
                category: 'Education',
                impactStat: '12K+ students',
                cta: { label: 'Learn More', href: `${BASE}/programs` },
                featured: true,
              },
              {
                id: 'artist-grants',
                title: 'Artist Grants & Residencies',
                description:
                  'Financial grants, studio space, and mentorship for emerging and underrepresented artists.',
                image: { src: '/images/arts/event.jpg', alt: 'Grants' },
                category: 'Grants',
                impactStat: '$2M+ awarded',
                cta: { label: 'Learn More', href: `${BASE}/programs` },
              },
              {
                id: 'cultural-festivals',
                title: 'Cultural Festivals',
                description:
                  'Annual festivals celebrating music, dance, theatre, film, and visual arts from global traditions.',
                image: { src: '/images/arts/event.jpg', alt: 'Festival' },
                category: 'Festivals',
                impactStat: '50K+ attendees',
                cta: { label: 'Learn More', href: `${BASE}/programs` },
              },
              {
                id: 'workshops',
                title: 'Creative Workshops',
                description:
                  'Hands-on workshops in ceramics, weaving, digital animation, sound art, and more.',
                image: { src: '/images/arts/event.jpg', alt: 'Workshops' },
                category: 'Workshops',
                impactStat: '500+ yearly',
                cta: { label: 'Learn More', href: `${BASE}/programs` },
              },
              {
                id: 'restoration',
                title: 'Heritage Preservation',
                description:
                  'Conservation of artifacts, historical artworks, and heritage sites for future generations.',
                image: { src: '/images/arts/event.jpg', alt: 'Restoration' },
                category: 'Preservation',
                impactStat: '2K+ artifacts',
                cta: { label: 'Learn More', href: `${BASE}/programs` },
              },
              {
                id: 'community-arts',
                title: 'Community Public Art',
                description:
                  'Participatory murals, public installations, and creative placemaking projects.',
                image: { src: '/images/arts/event.jpg', alt: 'Public art' },
                category: 'Public Art',
                impactStat: '200+ artworks',
                cta: { label: 'Learn More', href: `${BASE}/programs` },
              },
            ],
            showCategoryBadges: true,
          },
        },
        {
          type: 'editorialQuote',
          config: {
            theme: 'light',
            animation: 'fade',
            background: 'muted',
            padding: 'medium',
            visible: true,
            quote: {
              quote: 'Creativity takes courage.',
              author: 'Henri Matisse',
              role: 'Artist',
            },
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'donate' as const,
            heading: 'Support Creative Programs',
            description:
              'Your donation funds grants, classes, festivals, and preservation work that keeps art alive.',
            primaryCta: {
              label: 'Support Programs',
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
        title: `Events — ${ORG}`,
        description: `Upcoming events at ${ORG}: exhibitions, artist talks, workshops, performances, festivals, and tours.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/arts/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Events & Programs',
              subtitle: 'Something for Everyone',
              description:
                'From exhibition openings to hands-on workshops, performances to curator talks — there is always something happening.',
              tag: 'Calendar',
            },
            backgroundImage: { src: '/images/arts/hero.jpg', alt: 'Event at the gallery' },
            overlayOpacity: 0.4,
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
            heading: { title: 'Upcoming Events', tag: "What's On", alignment: 'center' as const },
            events: [
              {
                id: 'ev1',
                title: 'Ephemeral Horizons — Opening Night',
                description:
                  'Premiere of our landmark fall exhibition with curators, artists, and live performances.',
                date: '2026-09-15',
                time: '7:00 PM - 10:00 PM',
                location: 'Main Gallery',
                category: 'Exhibition',
                featured: true,
                cta: { label: 'RSVP', href: '#' },
              },
              {
                id: 'ev2',
                title: 'Artist Talk: Anika Sharma',
                description:
                  'Intimate conversation with the acclaimed mixed media artist about her creative process.',
                date: '2026-09-22',
                time: '6:30 PM',
                location: 'Lecture Hall',
                category: 'Talk',
                cta: { label: 'Register', href: '#' },
              },
              {
                id: 'ev3',
                title: 'Ceramics Workshop: Forms of Nature',
                description:
                  'Explore organic forms in clay with master ceramicist Yuki Tanaka. All materials provided.',
                date: '2026-10-05',
                time: '10:00 AM - 4:00 PM',
                location: 'Education Studio',
                category: 'Workshop',
                cta: { label: 'Book Now', href: '#' },
              },
              {
                id: 'ev4',
                title: 'International Music Festival',
                description:
                  'Three days of world music, cross-cultural performances, and collaborative concerts.',
                date: '2026-10-18',
                time: '12:00 PM - 10:00 PM',
                location: 'Performance Hall & Gardens',
                category: 'Festival',
                featured: true,
                cta: { label: 'Get Tickets', href: '#' },
              },
              {
                id: 'ev5',
                title: "Curator's Tour: Behind the Collection",
                description:
                  'Exclusive guided tour of our permanent collection with chief curator Maria Gonzalez.',
                date: '2026-11-02',
                time: '11:00 AM',
                location: 'Permanent Collection Wing',
                category: 'Tour',
                cta: { label: 'Join', href: '#' },
              },
              {
                id: 'ev6',
                title: 'Digital Art Night',
                description:
                  'Evening of immersive digital art, VR experiences, and interactive installations.',
                date: '2026-11-15',
                time: '8:00 PM',
                location: 'Digital Gallery',
                category: 'Exhibition',
                cta: { label: 'Info', href: '#' },
              },
              {
                id: 'ev7',
                title: 'Youth Art Showcase',
                description:
                  'Celebration of young artists from our education programs. All ages welcome.',
                date: '2026-12-05',
                time: '2:00 PM',
                location: 'Community Gallery',
                category: 'Exhibition',
                cta: { label: 'Attend', href: '#' },
              },
              {
                id: 'ev8',
                title: 'Holiday Members Preview',
                description:
                  'Exclusive preview of our winter exhibition for members, with champagne and curator talks.',
                date: '2026-12-15',
                time: '6:00 PM',
                location: 'All Galleries',
                category: 'Member Event',
                cta: { label: 'Members Only', href: '#' },
              },
              {
                id: 'ev9',
                title: "New Year's Eve Gala",
                description:
                  'An elegant evening of art, music, and celebration to welcome the new year.',
                date: '2026-12-31',
                time: '8:00 PM',
                location: 'Entire Foundation',
                category: 'Gala',
                cta: { label: 'Purchase Tickets', href: '#' },
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
              tag: 'Stay Connected',
              alignment: 'center' as const,
            },
            title: 'Get Event Invitations & Updates',
            description:
              'Subscribe to receive weekly event listings, exhibition announcements, and special previews.',
            placeholder: 'your@email.com',
            buttonLabel: 'Subscribe',
            successMessage: 'You are on the list!',
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered' as const,
            heading: 'Propose an Event',
            description:
              'Have an idea for a collaboration? We love partnering with artists and organizations.',
            primaryCta: {
              label: 'Submit Proposal',
              href: `${BASE}/contact`,
              variant: 'primary' as const,
            },
          },
        },
      ],
    },

    gallery: {
      seo: {
        title: `Gallery — ${ORG}`,
        description: `Explore ${ORG}'s gallery spaces through immersive photography of exhibitions, performances, workshops, and events.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/arts/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Gallery',
              subtitle: 'A Visual Journey',
              description:
                'Step inside our spaces through images that capture the energy, beauty, and diversity of our exhibitions and programs.',
              tag: 'Moments',
            },
            backgroundImage: { src: '/images/arts/hero.jpg', alt: 'Gallery interior' },
            overlayOpacity: 0.4,
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
            heading: { title: 'Exhibition Spaces', alignment: 'center' as const },
            images: [
              { src: '/images/arts/gallery3.jpg', alt: 'Gallery opening night' },
              { src: '/images/arts/hero.jpg', alt: 'Sculpture installation' },
              { src: '/images/arts/event.jpg', alt: 'Performance on stage' },
              { src: '/images/arts/gallery4.jpg', alt: 'Children art workshop' },
              { src: '/images/arts/gallery5.jpg', alt: 'Large painting exhibition' },
              { src: '/images/arts/gallery6.jpg', alt: 'Outdoor festival' },
              { src: '/images/arts/gallery7.jpg', alt: 'Digital art projection' },
              { src: '/images/arts/gallery8.jpg', alt: 'Artist talk' },
              { src: '/images/arts/hero.jpg', alt: 'Community mural' },
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
            heading: { title: 'Featured Exhibition Views', alignment: 'center' as const },
            images: [
              { src: '/images/arts/event.jpg', alt: 'Main exhibition hall' },
              { src: '/images/arts/gallery.jpg', alt: 'Gallery entrance' },
              { src: '/images/arts/hero.jpg', alt: 'Performance space' },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered' as const,
            heading: 'Visit Our Galleries',
            description: 'Free admission. Open Tuesday through Sunday. Guided tours available.',
            primaryCta: {
              label: 'Plan Your Visit',
              href: `${BASE}/about`,
              variant: 'primary' as const,
            },
            secondaryCta: { label: 'Virtual Tour', href: '#', variant: 'outline' as const },
          },
        },
      ],
    },

    'artist-profiles': {
      seo: {
        title: `Artist Profiles — ${ORG}`,
        description: `Meet the artists supported by ${ORG}. Discover their creative journeys, disciplines, and featured works.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/arts/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Artist Profiles',
              subtitle: 'Meet the Creators',
              description:
                'Discover the vision, stories, and works of the artists we support across every creative discipline.',
              tag: 'Our Artists',
            },
            backgroundImage: { src: '/images/arts/hero.jpg', alt: 'Artist in studio' },
            overlayOpacity: 0.4,
          },
        },
        {
          type: 'artistProfiles',
          config: {
            theme: 'light',
            animation: 'fade-in-up',
            background: 'none',
            padding: 'large',
            visible: true,
            heading: { title: 'Featured Artists', tag: 'Spotlight', alignment: 'center' as const },
            artists: [
              {
                id: 'ap1',
                name: 'Anika Sharma',
                discipline: 'Mixed Media Installation',
                image: '/images/arts/hero.jpg',
                bio: 'Anika creates large-scale immersive installations exploring memory, migration, and cultural identity through found objects, light, and sound. Her work has been exhibited at 20+ international venues.',
                featured: true,
              },
              {
                id: 'ap2',
                name: 'Kofi Mensah',
                discipline: 'Painting & Sculpture',
                image: '/images/arts/event.jpg',
                bio: "Kofi's vibrant works draw on West African textile traditions and contemporary urban culture, creating bold dialogues between past and present. He is a recipient of the Pollock-Krasner Grant.",
              },
              {
                id: 'ap3',
                name: 'Elena Vasquez',
                discipline: 'Digital & New Media',
                image: '/images/arts/gallery8.jpg',
                bio: 'Elena pushes boundaries at the intersection of technology and art, creating interactive digital installations that invite audience participation and explore human connection in the digital age.',
              },
              {
                id: 'ap4',
                name: 'James Park',
                discipline: 'Photography',
                image: '/images/arts/hero.jpg',
                bio: 'James captures the poetry of everyday life through his lens, documenting communities and landscapes with extraordinary intimacy and depth. His work is held in several museum collections.',
              },
              {
                id: 'ap5',
                name: 'Yuki Tanaka',
                discipline: 'Ceramics & Sculpture',
                image: '/images/arts/event.jpg',
                bio: 'Yuki combines traditional Japanese ceramic techniques with contemporary sculptural forms, creating pieces that bridge function and fine art.',
              },
              {
                id: 'ap6',
                name: 'Amina Diallo',
                discipline: 'Textile & Fiber Art',
                image: '/images/arts/gallery.jpg',
                bio: "Amina's woven works draw on Senegalese textile traditions while exploring themes of diaspora, identity, and belonging through innovative fiber techniques.",
              },
            ],
          },
        },
        {
          type: 'editorialQuote',
          config: {
            theme: 'light',
            animation: 'fade',
            background: 'muted',
            padding: 'medium',
            visible: true,
            quote: {
              quote: 'I am seeking. I am striving. I am in it with all my heart.',
              author: 'Vincent van Gogh',
              role: 'Artist',
            },
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
              title: 'Artist Testimonials',
              tag: 'Their Words',
              alignment: 'center' as const,
            },
            layout: 'carousel' as const,
            testimonials: [
              {
                quote:
                  'The residency program gave me space, time, and a community that believed in my work. The exhibition that followed was the turning point in my career.',
                name: 'Anika Sharma',
                role: 'Mixed Media Artist',
                avatar: { src: '/images/arts/event.jpg', alt: 'Anika Sharma' },
              },
              {
                quote:
                  'Nexus Arts was the first institution that took my work seriously. They did not ask me to explain my culture — they celebrated it.',
                name: 'Kofi Mensah',
                role: 'Painter & Sculptor',
                avatar: { src: '/images/arts/gallery.jpg', alt: 'Kofi Mensah' },
              },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered' as const,
            heading: 'Are You an Artist?',
            description: 'Learn about our open calls, grant programs, and residency opportunities.',
            primaryCta: {
              label: 'Apply for Opportunities',
              href: `${BASE}/programs`,
              variant: 'primary' as const,
            },
          },
        },
      ],
    },

    news: {
      seo: {
        title: `News — ${ORG}`,
        description: `Latest news, stories, and updates from ${ORG}'s exhibitions, programs, and community initiatives.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/arts/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'News & Stories',
              subtitle: 'From the Studio',
              description:
                'Exhibition announcements, artist spotlights, behind-the-scenes stories, and the latest from our creative community.',
              tag: 'Updates',
            },
            backgroundImage: { src: '/images/arts/hero.jpg', alt: 'News' },
            overlayOpacity: 0.4,
          },
        },
        {
          type: 'news',
          config: {
            heading: 'Latest Stories',
            layout: 'magazine' as const,
            articles: [
              {
                title: 'Ephemeral Horizons: A Landmark Exhibition Opens This Fall',
                slug: 'ephemeral-horizons',
                date: '2026-08-01',
                category: 'Exhibitions',
                excerpt:
                  'Our most ambitious exhibition to date features 50 works from 30 international artists exploring impermanence, memory, and hope.',
                image: '/images/arts/gallery1.jpg',
                author: { name: 'Maria Gonzalez' },
              },
              {
                title: 'Artist Grant Program Awards $500,000 to 20 Emerging Artists',
                slug: 'grants-2026',
                date: '2026-07-15',
                category: 'Grants',
                excerpt:
                  'Twenty emerging artists from 15 countries have been awarded grants to create new works, with a focus on underrepresented voices.',
                image: '/images/arts/gallery3.jpg',
                author: { name: 'David Kim' },
              },
              {
                title: 'Record Attendance: 120,000 Visitors This Year',
                slug: 'record-attendance',
                date: '2026-06-28',
                category: 'Community',
                excerpt:
                  'Our galleries, programs, and digital platforms reached a record 120,000 visitors this year, a 20% increase from last year.',
                image: '/images/arts/gallery4.jpg',
                author: { name: 'Sarah Chen' },
              },
              {
                title: 'New Digital Gallery Launches with VR Exhibition',
                slug: 'digital-gallery-launch',
                date: '2026-05-20',
                category: 'Digital',
                excerpt:
                  'Our new digital gallery space opens with a groundbreaking virtual reality exhibition accessible from anywhere in the world.',
                image: '/images/arts/gallery5.jpg',
                author: { name: 'Elena Vasquez' },
              },
              {
                title: 'Youth Arts Program Expands to 20 Schools',
                slug: 'youth-expansion',
                date: '2026-04-12',
                category: 'Education',
                excerpt:
                  'Our flagship arts education program is expanding to 20 new schools, bringing creative learning to 5,000 additional students.',
                image: '/images/arts/hero.jpg',
                author: { name: 'Linda Park' },
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
              title: 'Artist Spotlight Stories',
              tag: 'Featured',
              alignment: 'center' as const,
            },
            stories: [
              {
                name: 'Anika Sharma',
                role: 'Mixed Media Artist, India/Canada',
                image: { src: '/images/arts/event.jpg', alt: 'Anika Sharma' },
                quote:
                  'The residency gave me the space to create work I had been dreaming of for years. The exhibition that followed opened doors I never imagined possible.',
                impactStat: '2,000+',
                impactLabel: 'Artists Supported',
              },
              {
                name: 'Yuki Tanaka',
                role: 'Ceramicist, Japan',
                image: { src: '/images/arts/event.jpg', alt: 'Yuki Tanaka' },
                quote:
                  'Nexus Arts brought my work to an international audience for the first time. They understood my vision and helped me express it fully.',
                impactStat: '60+',
                impactLabel: 'Countries Represented',
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
            background: 'none',
            padding: 'large',
            visible: true,
            heading: { title: 'Stay Inspired', tag: 'Subscribe', alignment: 'center' as const },
            title: 'Get Stories Delivered to Your Inbox',
            description:
              'Receive exhibition announcements, artist features, and behind-the-scenes stories every month.',
            placeholder: 'your@email.com',
            buttonLabel: 'Subscribe',
            successMessage: 'Welcome to the Nexus Arts community!',
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'banner' as const,
            heading: 'Share Your Story',
            description:
              'Have a story to share about art, creativity, or community? We would love to feature you.',
            primaryCta: {
              label: 'Submit Your Story',
              href: `${BASE}/contact`,
              variant: 'primary' as const,
            },
          },
        },
      ],
    },

    resources: {
      seo: {
        title: `Resources — ${ORG}`,
        description: `Publications, catalogues, research, and educational resources from ${ORG}.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/arts/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Publications & Resources',
              subtitle: 'Deepen Your Knowledge',
              description:
                'Exhibition catalogues, artist interviews, research papers, and educational materials for art lovers and practitioners.',
              tag: 'Library',
            },
            backgroundImage: { src: '/images/arts/hero.jpg', alt: 'Resource library' },
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
            heading: {
              title: 'Browse All Resources',
              tag: 'Explore',
              alignment: 'center' as const,
            },
            resources: [
              {
                id: 'res1',
                title: 'Ephemeral Horizons: Exhibition Catalogue',
                description:
                  'Full-colour catalogue featuring all 50 works, artist statements, and curator essays from our landmark exhibition.',
                type: 'download' as const,
                url: '#',
                category: 'Catalogues',
              },
              {
                id: 'res2',
                title: 'Artist Spotlight: Anika Sharma',
                description:
                  'In-depth interview and studio visit with the acclaimed mixed media installation artist.',
                type: 'article' as const,
                url: '#',
                category: 'Artist Stories',
                image: '/images/arts/event.jpg',
              },
              {
                id: 'res3',
                title: 'Behind the Exhibition Documentary',
                description:
                  'Short film following the installation of Ephemeral Horizons from concept to opening night.',
                type: 'video' as const,
                url: '#',
                category: 'Documentary',
                image: '/images/arts/gallery6.jpg',
              },
              {
                id: 'res4',
                title: 'The Creative Process Podcast',
                description:
                  'Monthly conversations with artists, curators, and cultural leaders about creativity.',
                type: 'podcast' as const,
                url: '#',
                category: 'Podcast',
                image: '/images/arts/gallery7.jpg',
              },
              {
                id: 'res5',
                title: 'Annual Impact Report 2025',
                description:
                  'Comprehensive report on programs, financial stewardship, exhibitions, and community impact.',
                type: 'download' as const,
                url: '#',
                category: 'Reports',
              },
              {
                id: 'res6',
                title: 'Arts Education Curriculum Guide',
                description:
                  'Downloadable lesson plans and activity guides for educators integrating arts into classrooms.',
                type: 'download' as const,
                url: '#',
                category: 'Education',
              },
              {
                id: 'res7',
                title: 'Permanent Collection: Selected Works',
                description:
                  'A beautifully illustrated guide to 100 masterworks from our permanent collection.',
                type: 'download' as const,
                url: '#',
                category: 'Catalogues',
              },
              {
                id: 'res8',
                title: 'Curator Conversations Video Series',
                description:
                  'Curators discuss the stories behind key works in our collection in this multi-part series.',
                type: 'video' as const,
                url: '#',
                category: 'Documentary',
                image: '/images/arts/gallery8.jpg',
              },
              {
                id: 'res9',
                title: 'Art & Wellbeing Research Paper',
                description:
                  'Research exploring the impact of arts engagement on mental health and community wellbeing.',
                type: 'article' as const,
                url: '#',
                category: 'Research',
                image: '/images/arts/hero.jpg',
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
            title: 'Resources Delivered to Your Inbox',
            description: 'Receive new catalogues, articles, and learning resources every month.',
            placeholder: 'your@email.com',
            buttonLabel: 'Subscribe',
            successMessage: 'Welcome to our learning community!',
          },
        },
      ],
    },

    donate: {
      seo: {
        title: `Support — ${ORG}`,
        description: `Support ${ORG} through membership, donations, and volunteering. Your contribution keeps the arts accessible to all.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/arts/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Support the Arts',
              subtitle: 'Your Gift Makes Art Possible',
              description:
                'Every membership, donation, and volunteer hour helps keep our galleries free, our programs accessible, and our artists creating.',
              tag: 'Give',
            },
            backgroundImage: { src: '/images/arts/hero.jpg', alt: 'Gallery visitors' },
            overlayOpacity: 0.4,
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'sponsor' as const,
            heading: 'Become a Member',
            description:
              'Join a community of art lovers and enjoy exclusive benefits while supporting our mission.',
            primaryCta: { label: 'Join Now', href: '#', variant: 'primary' as const },
            tiers: [
              {
                name: 'Student',
                amount: 25,
                description:
                  'Free admission to all exhibitions, member previews, and 10% workshop discount.',
                popular: false,
              },
              {
                name: 'Individual',
                amount: 50,
                description:
                  'All student benefits plus guest passes, exclusive event invitations, and 15% shop discount.',
                popular: true,
              },
              {
                name: 'Family',
                amount: 100,
                description:
                  'All individual benefits for two adults and children under 18, plus family workshop passes.',
                popular: false,
              },
              {
                name: 'Patron',
                amount: 500,
                description:
                  'All family benefits plus private curator tours, exhibition catalogue subscriptions, and donor recognition.',
                popular: false,
              },
            ],
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'donate' as const,
            heading: 'Make a Donation',
            description:
              'Every gift, no matter the size, makes a meaningful difference in keeping the arts vibrant and accessible.',
            primaryCta: { label: 'Donate Now', href: '#', variant: 'primary' as const },
            donateAmounts: [25, 50, 100, 250, 500, 1000],
            benefits: [
              { text: 'Your gift is tax-deductible' },
              { text: 'Members receive exhibition previews and invitations' },
              { text: 'Donors recognized in our annual report and donor wall' },
              { text: 'Monthly impact updates with stories and photos' },
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
              title: 'How Your Support Makes an Impact',
              tag: 'Your Gift At Work',
              alignment: 'center' as const,
            },
            steps: [
              {
                icon: 'Heart',
                title: 'You Give',
                description:
                  'Your membership or donation joins the support of thousands of art lovers.',
              },
              {
                icon: 'Palette',
                title: 'Artists Create',
                description:
                  'Your support funds grants, residencies, and exhibition opportunities for artists.',
              },
              {
                icon: 'Users',
                title: 'Communities Engage',
                description:
                  'Free exhibitions, education programs, and events reach diverse audiences.',
              },
              {
                icon: 'Infinity',
                title: 'Culture Thrives',
                description:
                  'Creative expression flourishes, heritage is preserved, and future generations are inspired.',
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
              title: 'Why Our Supporters Give',
              tag: 'Giving Stories',
              alignment: 'center' as const,
            },
            layout: 'carousel' as const,
            testimonials: [
              {
                quote:
                  'Being a member of Nexus Arts means I get to experience world-class exhibitions while knowing my support keeps the doors open for everyone. It is the best investment I make in my own inspiration.',
                name: 'Rebecca Chen',
                role: 'Member, 5 years',
              },
              {
                quote:
                  "I donate because art saved my daughter. The children's program helped her express emotions she could not put into words. That is priceless.",
                name: 'Michael Torres',
                role: 'Parent & Donor',
              },
              {
                quote:
                  'Our foundation partnered with Nexus Arts to fund the artist residency program. The impact report showed 90% of resident artists went on to major exhibitions. That is ROI you can feel.',
                name: 'Dr. Helen Park',
                role: 'Program Officer, Arts Foundation',
              },
            ],
          },
        },
      ],
    },

    volunteer: {
      seo: {
        title: `Volunteer — ${ORG}`,
        description: `Join ${ORG}'s volunteer team and help make art accessible to everyone in the community.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'split' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/arts/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Volunteer With Us',
              subtitle: 'Share Your Passion for Art',
              description:
                'Help us welcome visitors, support programs, and bring art to life. No art background required — just enthusiasm.',
              tag: 'Get Involved',
            },
            backgroundImage: { src: '/images/arts/hero.jpg', alt: 'Volunteers at the gallery' },
            stats: [
              { value: 300, suffix: '+', label: 'Active Volunteers' },
              { value: 50000, suffix: '+', label: 'Volunteer Hours Given' },
              { value: 95, suffix: '%', label: 'Would Recommend' },
            ],
            overlayOpacity: 0.4,
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
                title: 'Discover Roles',
                description:
                  'Browse volunteer opportunities — gallery attendants, teaching assistants, event support, and more.',
              },
              {
                icon: 'ClipboardCheck',
                title: 'Apply & Train',
                description:
                  'Complete a simple application and attend our volunteer orientation and training program.',
              },
              {
                icon: 'Heart',
                title: 'Serve & Inspire',
                description:
                  'Welcome visitors, assist with programs, and be part of the creative energy of the foundation.',
              },
              {
                icon: 'Award',
                title: 'Grow & Lead',
                description:
                  'Take on leadership roles, train new volunteers, and deepen your engagement with the arts.',
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
              'Gallery attendants, education assistants, event support, administrative help — we need you.',
            primaryCta: {
              label: 'Apply to Volunteer',
              href: `${BASE}/volunteer`,
              variant: 'primary' as const,
            },
            benefits: [
              { text: 'Free access to all exhibitions and events' },
              { text: 'Invitations to volunteer appreciation events' },
              { text: 'Flexible scheduling — weekly, monthly, or event-based' },
              { text: 'Behind-the-scenes access and curator talks' },
              { text: 'Reference letters for students and professionals' },
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
                title: 'Do I need an art background?',
                content:
                  'Not at all. We welcome volunteers from all backgrounds. A friendly attitude and willingness to help are the only requirements.',
              },
              {
                id: 'vfaq2',
                title: 'What is the minimum time commitment?',
                content:
                  'We offer flexible opportunities from one-time event support to weekly shifts. Most volunteers serve 4-8 hours per month.',
              },
              {
                id: 'vfaq3',
                title: 'Is training provided?',
                content:
                  'Yes, all volunteers receive comprehensive orientation and role-specific training.',
              },
              {
                id: 'vfaq4',
                title: 'Can students volunteer?',
                content:
                  'Absolutely. We welcome student volunteers and can provide documentation for community service requirements.',
              },
            ],
            allowMultiple: false,
            variant: 'bordered' as const,
          },
        },
      ],
    },

    contact: {
      seo: {
        title: `Contact — ${ORG}`,
        description: `Get in touch with ${ORG}. Reach out for exhibition inquiries, partnership proposals, media requests, or general questions.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/arts/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Contact Us',
              subtitle: 'We Would Love to Connect',
              description:
                'Whether you have a question about an exhibition, want to propose a partnership, or just want to say hello — reach out.',
              tag: 'Get in Touch',
            },
            backgroundImage: { src: '/images/arts/hero.jpg', alt: 'Gallery reception' },
            overlayOpacity: 0.4,
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'contact' as const,
            heading: 'Visit or Contact Us',
            description:
              'Our team is here to help. We respond to all inquiries within 24-48 hours.',
            email: 'hello@nexusartsfoundation.org',
            phone: '+1 (555) 456-7890',
            address: '450 Creative Boulevard, San Francisco, CA 94102',
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
            heading: { title: 'Quick Answers', alignment: 'center' as const },
            items: [
              {
                id: 'cq1',
                title: 'What are your opening hours?',
                content:
                  'We are open Tuesday to Sunday, 10 AM to 6 PM. Extended hours until 9 PM on Thursdays. Closed Mondays.',
              },
              {
                id: 'cq2',
                title: 'How do I submit my artwork for consideration?',
                content:
                  'We accept submissions through our open calls twice a year. Check our website for current opportunities.',
              },
              {
                id: 'cq3',
                title: 'Can I host a private event at the gallery?',
                content:
                  'Yes, our spaces are available for private events, corporate functions, and special celebrations. Contact our events team.',
              },
              {
                id: 'cq4',
                title: 'Do you offer corporate partnerships?',
                content:
                  'Yes, we have corporate membership and sponsorship programs. Contact our development office for details.',
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
            heading: "Let's Create Together",
            description: 'Partnerships, media inquiries, exhibition proposals — we are all ears.',
            primaryCta: { label: 'Partner With Us', href: '#', variant: 'primary' as const },
            secondaryCta: { label: 'Media Inquiries', href: '#', variant: 'secondary' as const },
          },
        },
      ],
    },

    faq: {
      seo: {
        title: `FAQ — ${ORG}`,
        description: `Frequently asked questions about ${ORG}'s exhibitions, membership, programs, visiting, and support.`,
      },
      sections: [
        {
          type: 'hero',
          config: {
            layout: 'center' as const,
            theme: 'dark',
            animation: 'fade',
            background: 'image',
            backgroundValue: '/images/arts/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Frequently Asked Questions',
              subtitle: 'Everything You Need to Know',
              description:
                'Find answers about visiting, exhibitions, membership, programs, and supporting the arts.',
              tag: 'FAQ',
            },
            backgroundImage: { src: '/images/arts/hero.jpg', alt: 'FAQ' },
            overlayOpacity: 0.4,
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
            heading: { title: 'Visiting & Exhibitions', alignment: 'left' as const },
            items: [
              {
                id: 'g1',
                title: 'How much is admission?',
                content:
                  'General admission is free. Special exhibitions may have a suggested donation of $10-$20. Members enjoy free access to all exhibitions.',
              },
              {
                id: 'g2',
                title: 'What are your opening hours?',
                content:
                  'Tuesday to Sunday, 10 AM to 6 PM. Extended hours until 9 PM on Thursdays. Closed Mondays and major holidays.',
              },
              {
                id: 'g3',
                title: 'Do you offer guided tours?',
                content:
                  'Yes, we offer free guided tours daily at 11 AM and 2 PM. Private group tours can be arranged by contacting our education team.',
              },
              {
                id: 'g4',
                title: 'Is the gallery accessible?',
                content:
                  'Yes, all our spaces are fully wheelchair accessible. We offer assistive listening devices, large-print materials, and sensory-friendly hours.',
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
            heading: { title: 'Membership & Support', alignment: 'left' as const },
            items: [
              {
                id: 'd1',
                title: 'How do I become a member?',
                content:
                  'You can sign up online, at the gallery, or by phone. Memberships start at $25/year for students.',
              },
              {
                id: 'd2',
                title: 'What are the benefits of membership?',
                content:
                  'Free unlimited admission, exhibition previews, guest passes, workshop discounts, shop discounts, and exclusive event invitations.',
              },
              {
                id: 'd3',
                title: 'Is my donation tax-deductible?',
                content:
                  'Yes, we are a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the extent allowed by law.',
              },
              {
                id: 'd4',
                title: 'Can I donate artworks to the collection?',
                content:
                  'Yes, we accept donations of artworks through our collections committee. Contact our curatorial team for more information.',
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
            heading: { title: 'Artists & Programs', alignment: 'left' as const },
            items: [
              {
                id: 'v1',
                title: 'How can I submit my artwork for an exhibition?',
                content:
                  'We hold open calls twice a year. Visit our submissions page for guidelines, deadlines, and application requirements.',
              },
              {
                id: 'v2',
                title: 'How do I apply for an artist grant or residency?',
                content:
                  'Grant and residency applications are reviewed annually. Check our programs page for current opportunities and deadlines.',
              },
              {
                id: 'v3',
                title: 'Can I book a workshop for my group?',
                content:
                  'Yes, we offer private workshops for schools, community groups, and corporate teams. Contact our education department.',
              },
              {
                id: 'v4',
                title: 'How can I volunteer?',
                content:
                  'We welcome volunteers! Visit our volunteer page to see current opportunities and submit an application.',
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
              'We are here to help. Reach out anytime and we will get back to you within 24 hours.',
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
        title: `Page Not Found — ${ORG}`,
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
            backgroundValue: '/images/arts/hero.jpg',
            padding: 'none',
            visible: true,
            heading: {
              title: 'Page Not Found',
              subtitle: 'This artwork has been moved',
              description:
                'The page you are looking for may have been relocated or no longer exists. But there is so much more to discover — let us guide you.',
              tag: '404',
            },
            backgroundImage: { src: '/images/arts/hero.jpg', alt: 'Gallery' },
            overlayOpacity: 0.4,
          },
        },
        {
          type: 'cta',
          config: {
            layout: 'centered' as const,
            heading: 'Find Your Way Back to Art',
            description: 'Explore our exhibitions, discover artists, or reach out to us directly.',
            primaryCta: { label: 'Explore Collections', href: BASE, variant: 'primary' as const },
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
