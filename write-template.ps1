$path = "src/data/templates/disaster-relief.ts"

@"
        {
          type: 'successStories', config: {
            layout: 'default', theme: 'muted', animation: 'fade', background: 'muted',
            padding: 'large', visible: true,
            heading: { title: 'Survivor Stories', subtitle: 'Hope in the Face of Tragedy', description: 'Real stories of survival, resilience, and recovery from the communities we have served.' },
            stories: [
              {
                name: 'Fatima & Ahmed Al-Rashid', role: 'Earthquake Survivors, Turkey',
                image: { src: '/images/disaster/story-family.jpg', alt: 'Al-Rashid family in front of new shelter' },
                quote: 'When the earthquake destroyed our home at 4 AM, we escaped with nothing but the clothes on our backs. RapidAid was there within 24 hours with a tent, warm blankets, and hot food. They didn\'t just save our lives — they restored our hope.',
                impactStat: '1M+', impactLabel: 'People Sheltered',
              },
              {
                name: 'Dr. Amina Diallo', role: 'Local Doctor, Bangladesh Floods',
                image: { src: '/images/disaster/story-doctor.jpg', alt: 'Dr. Amina Diallo at field hospital' },
                quote: 'When the floods came, our clinic was destroyed. RapidAid set up a field hospital in 48 hours and treated over 300 patients in the first week. When they left, they donated the equipment so we could continue serving our community.',
                impactStat: '500K+', impactLabel: 'Patients Treated',
              },
              {
                name: 'Carlos & Maria Gonzalez', role: 'Hurricane Survivors, Puerto Rico',
                image: { src: '/images/disaster/story-hurricane.jpg', alt: 'Gonzalez family in rebuilt home' },
                quote: 'After Hurricane Maria, we lived under a tarp for two months. RapidAid\'s reconstruction team not only rebuilt our home but made it hurricane-resistant. For the first time in years, we feel safe when the rainy season comes.',
                impactStat: '200K+', impactLabel: 'Homes Rebuilt',
              },
            ],
          },
        },
        {
          type: 'testimonials', config: {
            layout: 'carousel', theme: 'light', animation: 'fade', background: 'none',
            padding: 'large', visible: true,
            heading: { title: 'What People Say', subtitle: 'Voices from the Field' },
            testimonials: [
              {
                quote: 'I have coordinated disaster responses for 20 years, and RapidAid is one of the most efficient organizations I have worked with. Their logistics and field teams are exceptional.',
                name: 'Dr. James Kariuki', role: 'UN Disaster Coordinator',
                organization: 'UN OCHA, Kenya',
                avatar: { src: '/images/disaster/testimonial-un.jpg', alt: 'Dr. James Kariuki' },
                rating: 5,
              },
              {
                quote: 'I volunteered with RapidAid after the Nepal earthquake. The training was thorough, and the impact we made was real. I saw lives saved because we arrived fast.',
                name: 'Sarah Mitchell', role: 'Emergency Volunteer',
                organization: 'Sydney, Australia',
                avatar: { src: '/images/disaster/testimonial-volunteer.jpg', alt: 'Sarah Mitchell' },
                rating: 5,
              },
              {
                quote: 'RapidAid\'s transparency is unmatched. As a major donor, I receive detailed impact reports, real-time updates, and independent audit results. I trust them completely.',
                name: 'Michael Chen', role: 'Foundation Partner',
                organization: 'Chen Foundation, Singapore',
                avatar: { src: '/images/disaster/testimonial-partner.jpg', alt: 'Michael Chen' },
                rating: 5,
              },
              {
                quote: 'Our partnership with RapidAid has saved thousands of lives. Their field hospital treated more patients in one month than our local hospital treats in a year.',
                name: 'Dr. Elena Petrov', role: 'Health Ministry Official',
                organization: 'Ministry of Health, Ukraine',
                avatar: { src: '/images/disaster/testimonial-official.jpg', alt: 'Dr. Elena Petrov' },
                rating: 5,
              },
            ],
          },
        },
        {
          type: 'gallery', config: {
            layout: 'grid', theme: 'light', animation: 'fade', background: 'none',
            padding: 'large', visible: true,
            heading: { title: 'Our Work in Pictures', subtitle: 'Courage in Crisis', description: 'Images capturing the resilience of disaster survivors and the dedication of our emergency responders.' },
            images: [
              { src: '/images/disaster/gallery-rescue.jpg', alt: 'Rescue team searching through rubble', caption: 'Earthquake rescue, Turkey 2025' },
              { src: '/images/disaster/gallery-field-hospital.jpg', alt: 'Field hospital operating', caption: 'Field hospital, Bangladesh floods' },
              { src: '/images/disaster/gallery-food-dist.jpg', alt: 'Food distribution to families', caption: 'Emergency food distribution, Sudan' },
              { src: '/images/disaster/gallery-shelter.jpg', alt: 'Shelter camp for displaced', caption: 'Emergency shelter camp, Ukraine' },
              { src: '/images/disaster/gallery-rebuild.jpg', alt: 'Rebuilt homes', caption: 'Reconstructed homes, Philippines' },
              { src: '/images/disaster/gallery-water.jpg', alt: 'Water purification system', caption: 'Clean water access, Yemen' },
            ],
          },
        },
        {
          type: 'partnerLogos', config: {
            layout: 'default', theme: 'light', animation: 'fade', background: 'muted',
            padding: 'large', visible: true,
            heading: { title: 'Our Partners in Emergency Response', subtitle: 'Working Together to Save Lives' },
            variant: 'grid',
            partners: [
              { name: 'UN OCHA', logo: { src: null, alt: 'UN OCHA' } },
              { name: 'Red Cross', logo: { src: null, alt: 'Red Cross' } },
              { name: 'World Food Programme', logo: { src: null, alt: 'WFP' } },
              { name: 'MSF', logo: { src: null, alt: 'MSF' } },
              { name: 'UNICEF', logo: { src: null, alt: 'UNICEF' } },
              { name: 'USAID', logo: { src: null, alt: 'USAID' } },
              { name: 'WHO', logo: { src: null, alt: 'WHO' } },
              { name: 'IRC', logo: { src: null, alt: 'IRC' } },
            ],
          },
        },
        {
          type: 'transparencyDashboard', config: {
            layout: 'default', theme: 'light', animation: 'fade', background: 'none',
            padding: 'large', visible: true,
            heading: { title: 'Financial Transparency', subtitle: 'Your Donation at Work' },
            totalRaised: '$47.2M in 2025', fiscalYear: '2025',
            stats: [
              { value: 93, suffix: '%', label: 'Programs' },
              { value: 4, suffix: '%', label: 'Administrative' },
              { value: 3, suffix: '%', label: 'Fundraising' },
            ],
            allocations: [
              { category: 'Emergency Shelter', percentage: 28, amount: '$13.2M' },
              { category: 'Medical Response', percentage: 24, amount: '$11.3M' },
              { category: 'Food & Water', percentage: 22, amount: '$10.4M' },
              { category: 'Reconstruction', percentage: 15, amount: '$7.1M' },
              { category: 'Preparedness', percentage: 11, amount: '$5.2M' },
            ],
          },
        },
        {
          type: 'faq', config: {
            layout: 'default', theme: 'light', animation: 'fade', background: 'none',
            padding: 'large', visible: true,
            heading: { title: 'Frequently Asked Questions', subtitle: 'Everything You Need to Know' },
            items: [
              { title: 'How quickly do you respond?', content: 'Our Emergency Operations Center is staffed 24/7. We deploy assessment teams within 24 hours and full response within 72 hours.' },
              { title: 'How much of my donation goes to programs?', content: '93% of every dollar donated goes directly to emergency relief programs.' },
              { title: 'Can I specify where my donation goes?', content: 'Yes. You can designate your donation to a specific emergency campaign or program type.' },
              { title: 'Do you accept volunteer applications?', content: 'Yes. We maintain a roster of trained volunteers. All complete our Emergency Response Training Program.' },
              { title: 'Is my donation tax-deductible?', content: 'Yes. RapidAid International is a registered 501(c)(3) nonprofit organization.' },
              { title: 'How do you ensure accountability?', content: 'We publish real-time impact data, annual audited financials, and independent program evaluations.' },
            ],
            allowMultiple: false, variant: 'bordered',
          },
        },
        {
          type: 'newsletter', config: {
            layout: 'default', theme: 'primary', animation: 'fade', background: 'muted',
            padding: 'large', visible: true,
            heading: { title: 'Stay Informed', subtitle: 'Get Emergency Alerts' },
            title: 'Subscribe for Emergency Updates',
            description: 'Receive real-time alerts during active emergencies, monthly impact reports, and stories of hope.',
            placeholder: 'Enter your email address', buttonLabel: 'Subscribe',
            successMessage: 'Thank you for subscribing! You will receive emergency alerts from our response teams.',
          },
        },
        {
          type: 'cta', config: {
            layout: 'donate', theme: 'dark', animation: 'fade', background: 'image',
            backgroundValue: '/images/disaster/cta-donate.jpg', padding: 'large', visible: true,
            heading: 'Your Donation Saves Lives',
            description: '\$50 provides emergency food for a family of five for one week. \$250 funds a medical emergency kit. \$1,000 builds a temporary shelter.',
            primaryCta: { label: 'Donate Now', href: `/templates/disaster-relief/donate`, variant: 'primary' as const },
            secondaryCta: { label: 'Join Our Response Team', href: `/templates/disaster-relief/volunteer`, variant: 'outline' as const },
            donateAmounts: [25, 50, 100, 250, 500, 1000],
            benefits: [
              { text: '93% of funds go directly to programs' },
              { text: 'Real-time emergency impact updates' },
              { text: 'Tax deductible in most countries' },
            ],
          },
        },
      ],
    },
"@ | Add-Content $path

Write-Output "Home page completed"