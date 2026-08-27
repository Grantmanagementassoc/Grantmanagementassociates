const fs = require('fs');

// 1. Fix content.ts for SERVICES and INDUSTRY corrections
let contentTs = fs.readFileSync('src/lib/content.ts', 'utf8');

// Services mapping
const serviceUpdates = [
  { slug: 'grant-writing', image: '/images/generated/15.png' }, // hands typing
  { slug: 'funding-identification', image: '/images/generated/17.png' }, // pointing at dashboard
  { slug: 'go-no-go', image: '/images/generated/23.png' }, // capital strategy meeting
  { slug: 'strategic-alliances', image: '/images/generated/19.png' }, // gov handshake
  { slug: 'ai-matching', image: '/images/generated/21.png' }, // server room
  { slug: 'federal', image: '/images/generated/19.png' }, // gov handshake
  { slug: 'state-local', image: '/images/generated/20.png' }, // gov handshake variation
];

for (const update of serviceUpdates) {
  // Regex to find the service object and replace its image
  const regex = new RegExp(`slug: "${update.slug}",\\s*image: "\\/images\\/generated\\/\\w+\\.png"`, 'g');
  const replacement = `slug: "${update.slug}",\n    image: "${update.image}"`;
  contentTs = contentTs.replace(regex, replacement);
}

// Fix Agriculture and Water Infrastructure
contentTs = contentTs.replace(
  /slug: "agriculture",\s*image: "\/images\/generated\/\d+\.png"/g,
  `slug: "agriculture",\n    image: "/images/generated/45.png"`
);
contentTs = contentTs.replace(
  /slug: "water-infrastructure",\s*image: "\/images\/generated\/\d+\.png"/g,
  `slug: "water-infrastructure",\n    image: "/images/generated/24.png"`
);

fs.writeFileSync('src/lib/content.ts', contentTs, 'utf8');


// 2. Fix page.tsx to use dynamic service image and correct Responsible AI image
let pageTsx = fs.readFileSync('src/app/page.tsx', 'utf8');
// Fix featured service image: currently hardcoded to something like 14.png or 8.png
pageTsx = pageTsx.replace(
  /<Image src="\/images\/generated\/\d+\.png" alt="Service Image"/g,
  `<Image src={services[0].image!} alt="Service Image"`
);
// Fix Responsible AI background
pageTsx = pageTsx.replace(
  /<Image src="\/images\/generated\/\d+\.png" alt="Action Section Background"/g,
  `<Image src="/images/generated/21.png" alt="Action Section Background"`
);
fs.writeFileSync('src/app/page.tsx', pageTsx, 'utf8');

console.log('All image mappings have been corrected!');
