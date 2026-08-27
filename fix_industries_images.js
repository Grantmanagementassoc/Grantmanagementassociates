const fs = require('fs');

const contentPath = 'src/lib/content.ts';
let content = fs.readFileSync(contentPath, 'utf8');

// Replace industry images in content.ts
// It seems the current mappings are incorrect due to the x2 generation offset.
const updates = [
  { slug: 'clean-energy', image: '/images/generated/25.png' },
  { slug: 'transportation', image: '/images/generated/27.png' },
  { slug: 'technology', image: '/images/generated/29.png' },
  { slug: 'healthcare', image: '/images/generated/31.png' },
  { slug: 'education', image: '/images/generated/33.png' },
  { slug: 'nonprofits', image: '/images/generated/35.png' },
  { slug: 'tribal', image: '/images/generated/37.png' },
  { slug: 'manufacturing', image: '/images/generated/39.png' },
  { slug: 'broadband', image: '/images/generated/41.png' },
  { slug: 'defense', image: '/images/generated/43.png' },
  { slug: 'agriculture', image: '/images/generated/44.png' },
  { slug: 'water-infrastructure', image: '/images/generated/45.png' },
];

for (const update of updates) {
  const regex = new RegExp(`slug: "${update.slug}",\\s*image: "\\/images\\/generated\\/\\d+\\.png"`, 'g');
  const replacement = `slug: "${update.slug}",\n    image: "${update.image}"`;
  content = content.replace(regex, replacement);
}

fs.writeFileSync(contentPath, content);
console.log('Updated industry image mappings in content.ts');
