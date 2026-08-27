const fs = require('fs');

const contentPath = 'src/lib/content.ts';
let content = fs.readFileSync(contentPath, 'utf8');

// Update Service Type
content = content.replace('export type Service = {', 'export type Service = {\n  image?: string;');

// Update Industry Type
content = content.replace('export type Industry = {', 'export type Industry = {\n  image?: string;');

// Services Mapping (slug -> image)
const serviceImages = {
  'grant-writing': '8.png',
  'funding-identification': '9.png',
  'federal': '10.png',
  'state-local': '10.png',
  'ai-matching': '11.png',
  'capital-strategy': '12.png',
  'go-no-go': '29.png',
  'strategic-alliances': '30.png',
  'nonprofit': '31.png',
  'award-management': '32.png',
};

// Industries Mapping (slug -> image)
const industryImages = {
  'clean-energy': '13.png',
  'transportation': '14.png',
  'technology': '15.png',
  'healthcare': '16.png',
  'education': '17.png',
  'nonprofits': '18.png',
  'tribal': '19.png',
  'manufacturing': '20.png',
  'broadband': '21.png',
  'defense': '22.png',
  'agriculture': '23.png',
  'water-infrastructure': '24.png',
};

// Add image property to each service object
for (const [slug, img] of Object.entries(serviceImages)) {
  const regex = new RegExp(`(slug:\\s*["']${slug}["'],)`);
  content = content.replace(regex, `$1\n    image: "/images/generated/${img}",`);
}

// Add image property to each industry object
for (const [slug, img] of Object.entries(industryImages)) {
  const regex = new RegExp(`(slug:\\s*["']${slug}["'],)`);
  content = content.replace(regex, `$1\n    image: "/images/generated/${img}",`);
}

fs.writeFileSync(contentPath, content, 'utf8');
console.log('Successfully updated content.ts with image properties!');
