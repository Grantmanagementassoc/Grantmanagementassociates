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
    if (rawData[ck].bodyText.includes(rawData[pk].title) || rawData[pk].bodyText.toLowerCase().includes(catName.toLowerCase())) {
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
  
  let excerpt = p.bodyText.substring(0, 200).replace(/\n/g, ' ').trim() + '...';
  excerpt = excerpt.replace(/top of page/gi, '').replace(/Skip to Main Content/gi, '').replace(/Search/gi, '').replace(/bottom of page/gi, '').trim();
  excerpt = excerpt.replace(/^\s*Opportunity Title:\s*/i, '');
  excerpt = excerpt.replace(/\s{2,}/g, ' ').trim();

  let body = p.bodyText;
  body = body.replace(/top of page/gi, '').replace(/Skip to Main Content/gi, '').replace(/Search/gi, '').replace(/bottom of page/gi, '').trim();
  body = body.replace(/^\s*Opportunity Title:\s*/i, '');
  body = body.replace(/\s{2,}/g, ' ').trim();
  
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
