const fs = require('fs');
const path = require('path');

const teamDir = './public/images/team';
const blogDir = './public/images/blog';
if (!fs.existsSync(teamDir)) fs.mkdirSync(teamDir, { recursive: true });
if (!fs.existsSync(blogDir)) fs.mkdirSync(blogDir, { recursive: true });

// SVG Generator for initials
const generateAvatarSVG = (initials, color1, color2) => `
<svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad_${initials}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${color1}" />
      <stop offset="100%" stop-color="${color2}" />
    </linearGradient>
  </defs>
  <rect width="400" height="400" fill="url(#grad_${initials})" />
  <text x="200" y="215" font-family="system-ui, -apple-system, sans-serif" font-size="160" font-weight="700" fill="#ffffff" text-anchor="middle" dominant-baseline="middle" letter-spacing="-2">
    ${initials}
  </text>
</svg>
`;

const team = [
  { name: 'Kristin Cooper', file: 'kristin.svg', initials: 'KC', c1: '#0B2046', c2: '#16B3B3' },
  { name: 'Danielle Sotelo', file: 'danielle.svg', initials: 'DS', c1: '#1F2937', c2: '#0D9488' },
  { name: 'Brad Zerbe', file: 'brad.svg', initials: 'BZ', c1: '#0F172A', c2: '#0EA5E9' },
  { name: 'Sonia Vohnout', file: 'sonia.svg', initials: 'SV', c1: '#172554', c2: '#14B8A6' },
  { name: 'Sarthak Tandon', file: 'sarthak.svg', initials: 'ST', c1: '#020617', c2: '#38BDF8' }
];

for (const t of team) {
  fs.writeFileSync(path.join(teamDir, t.file), generateAvatarSVG(t.initials, t.c1, t.c2).trim());
}

// Blog Fallback SVG
const blogFallbackSVG = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad_blog" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#020617" />
      <stop offset="50%" stop-color="#0B2046" />
      <stop offset="100%" stop-color="#0D9488" />
    </linearGradient>
    <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1" />
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="url(#grad_blog)" />
  <rect width="1200" height="630" fill="url(#grid)" />
  <circle cx="600" cy="315" r="150" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="2" />
  <circle cx="600" cy="315" r="100" fill="none" stroke="rgba(22, 179, 179, 0.2)" stroke-width="4" />
</svg>
`;
fs.writeFileSync(path.join(blogDir, 'fallback.svg'), blogFallbackSVG.trim());

console.log('Created SVGs successfully!');

// Now, update scraped-articles.ts
const tsFile = './src/lib/scraped-articles.ts';
let tsContent = fs.readFileSync(tsFile, 'utf8');

// The articles array items that DON'T have an image property should get one.
// We can use a regex replacement function for each slug.
const dataFile = './src/data/scraped_content.json';
const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));

for (const url of Object.keys(data)) {
  if (url.includes('/post/')) {
    const slug = url.split('/post/')[1];
    
    // Check if it already has an image line in TS content
    const existingImgRegex = new RegExp(`"slug":\\s*"${slug}",\\s*\\n\\s*"image":`, 's');
    if (!existingImgRegex.test(tsContent)) {
       // It doesn't have an image line, let's inject fallback
       const injectRegex = new RegExp(`("slug":\\s*"${slug}",\\s*\\n\\s*)"title"`, 'g');
       tsContent = tsContent.replace(injectRegex, `$1"image": "/images/blog/fallback.svg",\n    "title"`);
    }
  }
}

fs.writeFileSync(tsFile, tsContent);
console.log('Updated scraped-articles.ts with fallbacks');

// Update content.ts team members
const contentTsFile = './src/lib/content.ts';
let content = fs.readFileSync(contentTsFile, 'utf8');
for (const t of team) {
  // Add image: '/images/team/file.svg' to the team object
  const regex = new RegExp(`(name:\\s*['"]${t.name}['"],\\s*\\n\\s*role:\\s*['"][^'"]+['"],\\s*\\n\\s*bio:\\s*['"][^'"]+['"],\\s*\\n\\s*initials:\\s*['"][^'"]+['"]\\s*)`, 'g');
  content = content.replace(regex, `$1,\n    image: '/images/team/${t.file}'`);
}
fs.writeFileSync(contentTsFile, content);
console.log('Updated content.ts team members');

