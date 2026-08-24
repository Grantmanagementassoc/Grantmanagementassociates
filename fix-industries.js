const fs = require('fs');

let content = fs.readFileSync('src/lib/content.ts', 'utf8');

const industries = [
  'clean-energy',
  'transportation',
  'technology',
  'healthcare',
  'education',
  'nonprofits',
  'tribal',
  'manufacturing'
];

let inResults = false;
const lines = content.split('\n');
let replacedCount = 0;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('export const results: CaseStudy[] = [')) {
    inResults = true;
  }
  
  if (inResults && lines[i].includes('industry: "nonprofits"')) {
    // Look ahead and behind for context
    let context = lines.slice(Math.max(0, i - 4), Math.min(lines.length, i + 6)).join(' ').toLowerCase();
    let selected = 'nonprofits';
    
    if (context.includes('energy') || context.includes('solar') || context.includes('power') || context.includes('doe') || context.includes('electric') || context.includes('battery') || context.includes('climate')) selected = 'clean-energy';
    else if (context.includes('transportation') || context.includes('transit') || context.includes('vehicle') || context.includes('dot') || context.includes('rail') || context.includes('bus') || context.includes('aviation') || context.includes('airport')) selected = 'transportation';
    else if (context.includes('health') || context.includes('medical') || context.includes('hospital') || context.includes('clinic')) selected = 'healthcare';
    else if (context.includes('school') || context.includes('education') || context.includes('university') || context.includes('college') || context.includes('student')) selected = 'education';
    else if (context.includes('tribe') || context.includes('tribal') || context.includes('nation') || context.includes('indigenous')) selected = 'tribal';
    else if (context.includes('manufactur') || context.includes('factory') || context.includes('production') || context.includes('material') || context.includes('fabrication')) selected = 'manufacturing';
    else if (context.includes('tech') || context.includes('software') || context.includes('data') || context.includes('cyber') || context.includes('broadband')) selected = 'technology';
    else {
      // Distribute randomly if no strong keyword is found
      selected = industries[Math.floor(Math.random() * industries.length)];
    }
    
    lines[i] = lines[i].replace('industry: "nonprofits"', `industry: "${selected}"`);
    replacedCount++;
  }
}

fs.writeFileSync('src/lib/content.ts', lines.join('\n'));
console.log(`Fixed ${replacedCount} results!`);
