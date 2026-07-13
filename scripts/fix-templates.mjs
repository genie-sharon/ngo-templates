import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const templatesDir = join(root, 'src', 'data', 'templates');
const publicImagesDir = join(root, 'public', 'images');

// ---------------------------------------------------------------------------
// 1. Generate SVG placeholder logos for partners & trust badges
// ---------------------------------------------------------------------------
const partnerSvgs = {
  'unicef': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" fill="#1c2e4a" rx="4"/><text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="11" font-weight="bold">UNICEF</text></svg>`,
  'who': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" fill="#006a4d" rx="4"/><text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="9" font-weight="bold">WHO</text></svg>`,
  'world-health-organization': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" fill="#006a4d" rx="4"/><text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="9" font-weight="bold">WHO</text></svg>`,
  'undp': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" fill="#00529b" rx="4"/><text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="9" font-weight="bold">UNDP</text></svg>`,
  'usaid': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" fill="#011638" rx="4"/><text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="9" font-weight="bold">USAID</text></svg>`,
  'save-the-children': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" fill="#e2231a" rx="4"/><text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="7" font-weight="bold">Save the Children</text></svg>`,
  'care': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" fill="#009edb" rx="4"/><text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="10" font-weight="bold">CARE</text></svg>`,
  'united-nations': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" fill="#009edb" rx="4"/><text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="8" font-weight="bold">UN</text></svg>`,
  'world-food-programme': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" fill="#009edb" rx="4"/><text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="7" font-weight="bold">WFP</text></svg>`,
  'world-bank': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" fill="#1b1f24" rx="4"/><text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="8" font-weight="bold">World Bank</text></svg>`,
  'gates-foundation': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" fill="#002856" rx="4"/><text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="7" font-weight="bold">Gates Foundation</text></svg>`,
  'global-fund': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" fill="#d42b24" rx="4"/><text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="8" font-weight="bold">Global Fund</text></svg>`,
  'red-cross': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" fill="#e60000" rx="4"/><text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="8" font-weight="bold">Red Cross</text></svg>`,
  'msf': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" fill="#1a1a1a" rx="4"/><text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="8" font-weight="bold">MSF</text></svg>`,
  'unesco': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" fill="#003057" rx="4"/><text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="7" font-weight="bold">UNESCO</text></svg>`,
  'unicef-education': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" fill="#1c2e4a" rx="4"/><text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="11" font-weight="bold">UNICEF</text></svg>`,
  'gpe': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" fill="#ff6600" rx="4"/><text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="8" font-weight="bold">GPE</text></svg>`,
  'room-to-read': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" fill="#003057" rx="4"/><text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="8" font-weight="bold">Room to Read</text></svg>`,
  'teach-for-all': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" fill="#231f20" rx="4"/><text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="7" font-weight="bold">Teach For All</text></svg>`,
  'girl-up': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" fill="#d42b24" rx="4"/><text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="8" font-weight="bold">Girl Up</text></svg>`,
  'mastercard-foundation': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" fill="#003057" rx="4"/><text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="6" font-weight="bold">Mastercard Foundation</text></svg>`,
  'clinton-health-access': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" fill="#0066cc" rx="4"/><text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="6" font-weight="bold">CHAI</text></svg>`,
  'european-union': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" fill="#003399" rx="4"/><text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="7" font-weight="bold">EU</text></svg>`,
  'wwf': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" fill="#1a1a1a" rx="4"/><text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="10" font-weight="bold">WWF</text></svg>`,
  'greenpeace': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" fill="#00a651" rx="4"/><text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="7" font-weight="bold">Greenpeace</text></svg>`,
  'birdlife': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" fill="#003366" rx="4"/><text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="7" font-weight="bold">BirdLife</text></svg>`,
  'nature-conservancy': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" fill="#3c8d53" rx="4"/><text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="6" font-weight="bold">Nature Conservancy</text></svg>`,
  'rainforest-alliance': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" fill="#00843d" rx="4"/><text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="8" font-weight="bold">Rainforest Alliance</text></svg>`,
  'iucn': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" fill="#003366" rx="4"/><text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="10" font-weight="bold">IUCN</text></svg>`,
  'world-animal-protection': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" fill="#e87722" rx="4"/><text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="6" font-weight="bold">World Animal Protection</text></svg>`,
  'ifaw': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" fill="#003366" rx="4"/><text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="10" font-weight="bold">IFAW</text></svg>`,
  'humane-society': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" fill="#000000" rx="4"/><text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="7" font-weight="bold">Humane Society</text></svg>`,
  'american-humane': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" fill="#003366" rx="4"/><text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="6" font-weight="bold">American Humane</text></svg>`,
  'un-habitat': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" fill="#003057" rx="4"/><text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="7" font-weight="bold">UN-Habitat</text></svg>`,
  'ilo': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" fill="#003f87" rx="4"/><text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="9" font-weight="bold">ILO</text></svg>`,
  'icrc': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" fill="#e60000" rx="4"/><text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="9" font-weight="bold">ICRC</text></svg>`,
  'default': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" fill="#555" rx="4"/><text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="9" font-weight="bold">Partner</text></svg>`,
};

const trustSvgs = {
  'un-ecosoc': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" fill="#009edb" rx="4"/><text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="7" font-weight="bold">UN ECOSOC</text></svg>`,
  'charity-navigator': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" fill="#003399" rx="4"/><text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="7" font-weight="bold">Charity Navigator</text></svg>`,
  'guidestar': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" fill="#0066cc" rx="4"/><text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="7" font-weight="bold">GuideStar</text></svg>`,
  'iso': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" fill="#333" rx="4"/><text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="8" font-weight="bold">ISO 26000</text></svg>`,
  'gold-transparency': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" fill="#b8860b" rx="4"/><text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="7" font-weight="bold">Gold Transparency</text></svg>`,
  'who-partner': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" fill="#006a4d" rx="4"/><text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="7" font-weight="bold">WHO Partner</text></svg>`,
  'unicef-partner': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" fill="#1c2e4a" rx="4"/><text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="7" font-weight="bold">UNICEF Partner</text></svg>`,
  'default': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" fill="#666" rx="4"/><text x="60" y="25" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="8" font-weight="bold">Certified</text></svg>`,
};

// Write SVGs to partner and trust directories
for (const [key, svg] of Object.entries(partnerSvgs)) {
  const filePath = join(publicImagesDir, 'partners', `${key}.svg`);
  if (!existsSync(filePath)) {
    writeFileSync(filePath, svg);
    console.log(`Created: public/images/partners/${key}.svg`);
  }
}

for (const [key, svg] of Object.entries(trustSvgs)) {
  const filePath = join(publicImagesDir, 'trust', `${key}.svg`);
  if (!existsSync(filePath)) {
    writeFileSync(filePath, svg);
    console.log(`Created: public/images/trust/${key}.svg`);
  }
}

// ---------------------------------------------------------------------------
// 2. Image diversification helper - maps template slugs to available images
// ---------------------------------------------------------------------------
function getAvailableImages(slug) {
  const dir = join(publicImagesDir, slug);
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter(f => f.match(/\.(jpg|jpeg|png|webp|svg)$/i))
    .sort();
}

const templateImageMap = {};
const slugToDir = {
  'universal': 'universal',
  'healthcare': 'healthcare',
  'education': 'education',
  'animal-welfare': 'animals',
  'environment': 'environment',
  'disaster-relief': 'disaster',
  'faith-based': 'faith',
  'community': 'community',
  'arts': 'arts',
  'humanitarian': 'humanitarian',
};
for (const [slug, dir] of Object.entries(slugToDir)) {
  const files = getAvailableImages(dir);
  templateImageMap[slug] = files.length > 0 ? files : ['gallery1.jpg', 'gallery2.jpg', 'gallery3.jpg', 'gallery4.jpg', 'gallery5.jpg', 'gallery6.jpg', 'gallery7.jpg', 'gallery8.jpg'];
  console.log(`Template "${slug}" (dir: ${dir}): ${templateImageMap[slug].length} images available`);
}

// ---------------------------------------------------------------------------
// 3. Partner logo name → SVG mapping
// ---------------------------------------------------------------------------
function partnerToSvg(name) {
  const map = {
    'unicef': 'unicef.svg',
    'world health organization': 'world-health-organization.svg',
    'who': 'who.svg',
    'save the children': 'save-the-children.svg',
    'undp': 'undp.svg',
    'usaid': 'usaid.svg',
    'care': 'care.svg',
    'united nations': 'united-nations.svg',
    'united nations development programme': 'united-nations.svg',
    'world food programme': 'world-food-programme.svg',
    'world bank': 'world-bank.svg',
    'bill & melinda gates foundation': 'gates-foundation.svg',
    'gates foundation': 'gates-foundation.svg',
    'the global fund': 'global-fund.svg',
    'global fund': 'global-fund.svg',
    'red cross': 'red-cross.svg',
    'médecins sans frontières': 'msf.svg',
    'msf': 'msf.svg',
    'clinton health access initiative': 'clinton-health-access.svg',
    'chai': 'clinton-health-access.svg',
    'unesco': 'unesco.svg',
    'global partnership for education': 'gpe.svg',
    'gpe': 'gpe.svg',
    'room to read': 'room-to-read.svg',
    'teach for all': 'teach-for-all.svg',
    'girl up': 'girl-up.svg',
    'mastercard foundation': 'mastercard-foundation.svg',
    'european union': 'european-union.svg',
    'wwf': 'wwf.svg',
    'world wildlife fund': 'wwf.svg',
    'greenpeace': 'greenpeace.svg',
    'birdlife international': 'birdlife.svg',
    'birdlife': 'birdlife.svg',
    'the nature conservancy': 'nature-conservancy.svg',
    'nature conservancy': 'nature-conservancy.svg',
    'rainforest alliance': 'rainforest-alliance.svg',
    'iucn': 'iucn.svg',
    'international union for conservation of nature': 'iucn.svg',
    'world animal protection': 'world-animal-protection.svg',
    'ifaw': 'ifaw.svg',
    'international fund for animal welfare': 'ifaw.svg',
    'humane society': 'humane-society.svg',
    'american humane': 'american-humane.svg',
    'un-habitat': 'un-habitat.svg',
    'ilo': 'ilo.svg',
    'international labour organization': 'ilo.svg',
    'icrc': 'icrc.svg',
    'international committee of the red cross': 'icrc.svg',
  };
  const key = name.toLowerCase().trim();
  return `/images/partners/${map[key] || 'default.svg'}`;
}

// ---------------------------------------------------------------------------
// 4. Fix a template file
// ---------------------------------------------------------------------------
function fixTemplate(filePath) {
  let content = readFileSync(filePath, 'utf-8');
  const slug = filePath.match(/([\w-]+)\.ts$/)?.[1];
  if (!slug || slug === 'types' || slug === 'registry' || slug === 'helpers') return;

  const images = templateImageMap[slug] || templateImageMap['universal'];
  const imgDir = slugToDir[slug] || slug;
  const imgBase = `/images/${imgDir}/`;

  let galleryIdx = 0;
  let newsIdx = 0;
  let progIdx = 0;
  let storyIdx = 0;
  let testimonialIdx = 0;

  // --- Fix hero background images ---
  content = content.replace(
    /backgroundValue:\s*'\/images\/[^/]+\/hero\.jpg'/g,
    `backgroundValue: '${imgBase}hero.jpg'`
  );

  // --- Fix hero backgroundImage.src ---
  content = content.replace(
    /backgroundImage:\s*\{[^}]*src:\s*'\/images\/[^/]+\/[^']+'[^}]*\}/g,
    (match) => {
      return match.replace(/src:\s*'\/images\/[^/]+\/[^']+'/, `src: '${imgBase}hero.jpg'`);
    }
  );

  // --- Fix gallery images ---
  const galleryPattern = /\{ src:\s*'\/images\/[^/]+\/gallery\d*\.jpg'[^}]*\}/g;
  content = content.replace(galleryPattern, (match) => {
    const alt = match.match(/alt:\s*'([^']+)'/)?.[1] || 'Gallery image';
    const caption = match.match(/caption:\s*'([^']+)'/)?.[1];
    galleryIdx = (galleryIdx % images.length);
    const img = images[galleryIdx];
    galleryIdx++;
    let result = `{ src: '${imgBase}${img}', alt: '${alt}'`;
    if (caption) result += `, caption: '${caption}'`;
    result += ' }';
    return result;
  });

  // --- Fix program images ---
  const progPattern = /image:\s*\{[^}]*src:\s*'\/images\/[^/]+\/gallery\d*\.jpg'[^}]*\}/g;
  content = content.replace(progPattern, (match) => {
    const alt = match.match(/alt:\s*'([^']+)'/)?.[1] || 'Program image';
    progIdx = (progIdx % images.length);
    const img = images[progIdx];
    progIdx++;
    return `image: { src: '${imgBase}${img}', alt: '${alt}' }`;
  });

  // --- Fix news article images ---
  const newsImgPattern = /image:\s*'\/images\/[^/]+\/gallery\d*\.jpg'/g;
  content = content.replace(newsImgPattern, (match) => {
    newsIdx = (newsIdx % images.length);
    const img = images[newsIdx];
    newsIdx++;
    return `image: '${imgBase}${img}'`;
  });

  // --- Fix success story images ---
  const storyPattern = /image:\s*\{[^}]*src:\s*'\/images\/[^/]+\/gallery\d*\.jpg'[^}]*\}/g;
  content = content.replace(storyPattern, (match) => {
    const alt = match.match(/alt:\s*'([^']+)'/)?.[1] || 'Story image';
    storyIdx = (storyIdx % images.length);
    const img = images[storyIdx];
    storyIdx++;
    return `image: { src: '${imgBase}${img}', alt: '${alt}' }`;
  });

  // --- Fix testimonial avatars ---
  const testimonialPattern = /avatar:\s*\{[^}]*src:\s*'\/images\/[^/]+\/gallery\d*\.jpg'[^}]*\}/g;
  content = content.replace(testimonialPattern, (match) => {
    const alt = match.match(/alt:\s*'([^']+)'/)?.[1] || 'Avatar';
    testimonialIdx = (testimonialIdx % images.length);
    const img = images[testimonialIdx];
    testimonialIdx++;
    return `avatar: { src: '${imgBase}${img}', alt: '${alt}' }`;
  });

  // --- Fix about/ceo section images ---
  const aboutImgPattern = /image:\s*\{[^}]*src:\s*'\/images\/[^/]+\/(?:gallery\d*|hero)\.jpg'[^}]*\}/g;
  content = content.replace(aboutImgPattern, (match) => {
    const alt = match.match(/alt:\s*'([^']+)'/)?.[1] || 'About image';
    const aboutImg = images.includes('about.jpg') ? 'about.jpg' : (images[0] || 'gallery1.jpg');
    return `image: { src: '${imgBase}${aboutImg}', alt: '${alt}' }`;
  });

  // --- Fix CEO photo images ---
  content = content.replace(
    /photo:\s*\{[^}]*src:\s*'\/images\/[^/]+(?:gallery\d*|hero)\.jpg'[^}]*\}/g,
    (match) => {
      const alt = match.match(/alt:\s*'([^']+)'/)?.[1] || 'Photo';
      const personImg = images.find(f => f.includes('person') || f.includes('about')) || images[0];
      return `photo: { src: '${imgBase}${personImg}', alt: '${alt}' }`;
    }
  );

  // --- Fix any remaining image refs to catch-all gallery1.jpg ---
  // This catches images embedded in other contexts (like resource library, etc.)
  const genericImgPattern = /src:\s*'\/images\/[^/]+\/gallery1\.jpg'/g;
  let genericIdx = 0;
  content = content.replace(genericImgPattern, (match) => {
    genericIdx = (genericIdx % images.length);
    const img = images[genericIdx];
    genericIdx++;
    return `src: '${imgBase}${img}'`;
  });

  // --- Fix partner logos (any src → SVG path) ---
  content = content.replace(
    /logo:\s*\{\s*src:\s*(?:null|'\/images\/[^']+')\s*,\s*alt:\s*'([^']+)'\s*\}/g,
    (match, alt) => {
      const svgPath = partnerToSvg(alt);
      return `logo: { src: '${svgPath}', alt: '${alt}' }`;
    }
  );

  // --- Fix trust badges (any src → SVG path) ---
  // Pattern 1: src: null
  content = content.replace(
    /\{\s*src:\s*null\s*,\s*alt:\s*'([^']+)'\s*,\s*name:\s*'([^']+)'\s*\}/g,
    (match, alt, name) => badgeToSvg(alt, name)
  );
  // Pattern 2: src: '/images/.../gallery.jpg'
  content = content.replace(
    /\{\s*src:\s*'\/images\/[^']+'\s*,\s*alt:\s*'([^']+)'\s*,\s*name:\s*'([^']+)'\s*\}/g,
    (match, alt, name) => badgeToSvg(alt, name)
  );

  function badgeToSvg(alt, name) {
    const lower = name.toLowerCase();
    let svgFile = 'default.svg';
    if (lower.includes('un ecosoc') || lower.includes('united nations') || lower.includes('un consultative')) svgFile = 'un-ecosoc.svg';
    else if (lower.includes('charity navigator')) svgFile = 'charity-navigator.svg';
    else if (lower.includes('guidestar') || lower.includes('candid') || lower.includes('gold')) svgFile = 'gold-transparency.svg';
    else if (lower.includes('iso')) svgFile = 'iso.svg';
    else if (lower.includes('who')) svgFile = 'who-partner.svg';
    else if (lower.includes('unicef')) svgFile = 'unicef-partner.svg';
    return `{ src: '/images/trust/${svgFile}', alt: '${alt}', name: '${name}' }`;
  }

  // --- Fix hero \n in titles to use proper formatting ---
  content = content.replace(
    /title:\s*'([^']*?)\\n([^']*?)'/g,
    (match, p1, p2) => `title: '${p1}\\n${p2}'`
  );

  writeFileSync(filePath, content, 'utf-8');
  console.log(`Fixed: ${filePath}`);
}

// ---------------------------------------------------------------------------
// 5. Run
// ---------------------------------------------------------------------------
const templateFiles = readdirSync(templatesDir).filter(f => f.endsWith('.ts') && !['types.ts', 'registry.ts', 'helpers.ts'].includes(f));
for (const f of templateFiles) {
  fixTemplate(join(templatesDir, f));
}

console.log('\nDone! All templates fixed.');
