const fs = require('fs');
const path = require('path');

const tsFile = path.join(__dirname, '..', 'src', 'lib', 'scraped-articles.ts');
let tsContent = fs.readFileSync(tsFile, 'utf8');

const dataFile = path.join(__dirname, '..', 'src', 'data', 'scraped_content.json');
const rawData = JSON.parse(fs.readFileSync(dataFile, 'utf-8'));

const articlesMatch = tsContent.match(/export const articles: Article\[\] = (\[[\s\S]*?\]);/);
if (articlesMatch) {
  let articles = [];
  try {
    articles = eval(articlesMatch[1]);
  } catch (e) {
    console.error("Failed to parse articles array", e);
    process.exit(1);
  }

  articles.forEach(a => {
    // Find the matching key in scraped_content.json
    const key = Object.keys(rawData).find(k => k.includes(a.slug));
    if (key && rawData[key].bodyText) {
      a.bodyText = rawData[key].bodyText;
    }
  });

  tsContent = tsContent.replace(
    /export const articles: Article\[\] = \[[\s\S]*?\];/,
    `export const articles: Article[] = ${JSON.stringify(articles, null, 2)};`
  );
  
  fs.writeFileSync(tsFile, tsContent);
  console.log("Updated scraped-articles.ts with bodyText");
} else {
  console.error("Could not find articles array");
}
