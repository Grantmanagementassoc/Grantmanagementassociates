const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, 'src', 'data', 'scraped_content.json');
const rawData = JSON.parse(fs.readFileSync(dataFile, 'utf-8'));

const postKeys = Object.keys(rawData).filter(k => k.includes('/post/'));
const catKeys = Object.keys(rawData).filter(k => k.includes('/categories/'));

const validCategories = new Set();
const articleCategories = {};

catKeys.forEach(ck => {
  const catName = ck.split('/').pop().replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  validCategories.add(catName);
  
  postKeys.forEach(pk => {
    // We strip HTML just for category matching
    const plainText = rawData[pk].bodyText ? rawData[pk].bodyText.replace(/<[^>]*>?/gm, '') : '';
    if (plainText.includes(rawData[pk].title) || plainText.toLowerCase().includes(catName.toLowerCase())) {
      if (!articleCategories[pk]) articleCategories[pk] = catName;
    }
  });
});

const articles = [];

postKeys.forEach(url => {
  const p = rawData[url];
  if (!p.title || !p.bodyText) return;
  
  const slug = p.slug || url.split('/').pop();
  const category = articleCategories[url] || "General";
  
  // Extract plain text for the excerpt
  let plainText = p.bodyText.replace(/<[^>]*>?/gm, ' ');
  plainText = plainText.replace(/top of page/gi, '').replace(/Skip to Main Content/gi, '').replace(/Search/gi, '').replace(/bottom of page/gi, '').trim();
  plainText = plainText.replace(/^\s*Opportunity Title:\s*/i, '');
  plainText = plainText.replace(/\s{2,}/g, ' ').trim();

  let excerpt = plainText.substring(0, 200).trim() + '...';

  // Keep the rich HTML for the bodyText but clean up artifacts
  let body = p.bodyText;
  body = body.replace(/top of page/gi, '')
             .replace(/Skip to Main Content/gi, '')
             .replace(/>\s*Search\s*</gi, '><')
             .replace(/bottom of page/gi, '');
  
  articles.push({
    slug,
    title: p.title.replace(/\| Grant Management Associates/i, '').trim(),
    excerpt,
    bodyText: body,
    category
  });
});

validCategories.add("General");
const categoriesArray = Array.from(validCategories).sort();

const fileContent = `export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  bodyText: string;
  category: string;
};

export const categories: string[] = ${JSON.stringify(categoriesArray, null, 2)};

export const articles: Article[] = ${JSON.stringify(articles, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, 'src', 'lib', 'scraped-articles.ts'), fileContent);
console.log(`Successfully generated scraped-articles.ts with ${articles.length} articles and ${categoriesArray.length} categories.`);
