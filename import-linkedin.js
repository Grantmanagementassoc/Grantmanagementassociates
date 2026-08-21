const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio'); // Next.js typically has cheerio or we can use regex, let's just use simple regex for speed if cheerio isn't installed.

const dir = 'C:\\\\Users\\\\lokha\\\\OneDrive\\\\Desktop\\\\grant management\\\\Basic_LinkedInDataExport_08-21-2026.zip\\\\Articles\\\\Articles';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const dataFile = './src/data/scraped_content.json';
const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));

const tsFile = './src/lib/scraped-articles.ts';
let tsContent = fs.readFileSync(tsFile, 'utf8');
const articlesMatch = tsContent.match(/export const articles: Article\[\] = \[([\s\S]*?)\];/);
if (!articlesMatch) throw new Error("Could not find articles array in TS file");
let existingArticlesText = articlesMatch[1];

let count = 0;

for (const file of files) {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  
  // Extract Title
  const titleMatch = content.match(/<h1>(?:<a href="[^"]+">)?([^<]+)(?:<\/a>)?<\/h1>/);
  if (!titleMatch) continue;
  const title = titleMatch[1].trim();
  
  // Create slug from title if we can't extract it reliably from LinkedIn URL
  const slugMatch = content.match(/<a href="https:\/\/www\.linkedin\.com\/pulse\/([^"]+)"/);
  let slug = slugMatch ? slugMatch[1].split('?')[0] : title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  
  // Extract Image
  const imgMatch = content.match(/<img src="([^"]+)"/);
  const image = imgMatch ? imgMatch[1] : "/images/blog/fallback.svg";
  
  // Extract Date
  const dateMatch = content.match(/Published on (\d{4}-\d{2}-\d{2})/);
  const date = dateMatch ? dateMatch[1] : new Date().toISOString().split('T')[0];
  
  // Extract Body
  const bodyMatch = content.match(/<div>([\s\S]*?)<\/body>/);
  let bodyText = bodyMatch ? bodyMatch[1].trim() : "";
  // The body might end with </div> which is fine.
  if (bodyText.endsWith('</div>')) bodyText = bodyText.substring(0, bodyText.length - 6);
  
  // Clean up body (remove some linked in specific stuff if needed, but raw html is fine)
  
  // Extract Excerpt
  let excerpt = bodyText.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').substring(0, 150).trim() + "...";
  
  // Avoid duplicates
  if (tsContent.includes(`"slug": "${slug}"`)) {
    continue;
  }
  
  // Add to scraped_content.json
  data[`https://www.grantmanagementassoc.com/post/${slug}`] = {
    bodyText: bodyText
  };
  
  // Create new article object string
  const newArticle = `  {
    "slug": "${slug}",
    "image": "${image}",
    "title": ${JSON.stringify(title)},
    "category": "LinkedIn Article",
    "date": "${date}",
    "author": "GMA Team",
    "excerpt": ${JSON.stringify(excerpt)}
  },
`;
  
  // Prepend to existing articles to put them at the TOP as requested
  existingArticlesText = newArticle + existingArticlesText;
  count++;
}

fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
const newTsContent = tsContent.replace(/export const articles: Article\[\] = \[[\s\S]*?\];/, `export const articles: Article[] = [\n${existingArticlesText}];`);
fs.writeFileSync(tsFile, newTsContent);

console.log(`Successfully parsed and added ${count} LinkedIn articles to the top of the blog.`);
