const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'src', 'data', 'scraped_content.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

const posts = Object.keys(data).filter(k => k.includes('/post/')).map(k => {
  const d = data[k];
  return {
    url: k,
    title: d.title.split('-')[0].trim() || 'Untitled Post',
    bodyText: d.bodyText || ''
  };
});

function determineCategory(text) {
  const lower = text.toLowerCase();
  if (lower.includes('infrastructure') || lower.includes('transportation') || lower.includes('transit')) return 'Infrastructure';
  if (lower.includes('energy') || lower.includes('nuclear') || lower.includes('solar')) return 'Energy';
  if (lower.includes('defense') || lower.includes('dod') || lower.includes('military')) return 'Defense';
  if (lower.includes('broadband') || lower.includes('digital') || lower.includes('internet')) return 'Broadband';
  return 'Funding Strategy';
}

const articles = posts.map(p => {
  const urlObj = new URL(p.url);
  const slug = urlObj.pathname.split('/').pop();
  const category = determineCategory(p.title + ' ' + p.bodyText.substring(0, 500));
  
  let excerpt = p.bodyText.substring(0, 150).replace(/\n/g, ' ').trim() + '...';
  
  return {
    slug,
    title: p.title,
    excerpt,
    category
  };
});

const tsContent = `export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
};

export const articles: Article[] = ${JSON.stringify(articles, null, 2)};

export const categories = Array.from(new Set(articles.map(a => a.category))).sort();
`;

fs.writeFileSync(path.join(__dirname, 'src', 'lib', 'scraped-articles.ts'), tsContent);
console.log('Successfully generated scraped-articles.ts with ' + articles.length + ' articles.');
