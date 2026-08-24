const fs = require('fs');
const path = require('path');
const https = require('https');

const tsFile = path.join(__dirname, '..', 'src', 'lib', 'scraped-articles.ts');
let tsContent = fs.readFileSync(tsFile, 'utf8');

const articlesMatch = tsContent.match(/export const articles: Article\[\] = (\[[\s\S]*?\]);/);
if (!articlesMatch) {
  console.error("Could not find articles array");
  process.exit(1);
}

let articles = [];
try {
  articles = eval(articlesMatch[1]);
} catch (e) {
  console.error("Failed to parse articles array", e);
  process.exit(1);
}

const downloadImage = (url, dest) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download image, status code: ${res.statusCode}`));
        return;
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {}); // Delete the file async.
      reject(err);
    });
  });
};

const fetchUrl = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data }));
    }).on('error', reject);
  });
};

async function processArticles() {
  const imagesDir = path.join(__dirname, '..', 'public', 'images', 'blog');
  if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });

  let updatedCount = 0;

  for (const article of articles) {
    if (article.linkedinUrl && article.linkedinUrl.includes('linkedin.com/pulse')) {
      console.log(`Processing: ${article.slug}`);
      try {
        const { status, data } = await fetchUrl(article.linkedinUrl);
        if (status === 200) {
          const match = data.match(/<meta property="og:image" content="([^"]+)"/);
          if (match) {
            const imageUrl = match[1];
            // Decode html entities just in case (like &amp;)
            const cleanUrl = imageUrl.replace(/&amp;/g, '&');
            
            const destPath = path.join(imagesDir, `${article.slug}.jpg`);
            await downloadImage(cleanUrl, destPath);
            
            article.image = `/images/blog/${article.slug}.jpg`;
            updatedCount++;
            console.log(`  -> Saved image: ${article.image}`);
          } else {
            console.log(`  -> No og:image found`);
          }
        } else {
          console.log(`  -> Failed to fetch URL, status: ${status}`);
        }
      } catch (e) {
        console.error(`  -> Error: ${e.message}`);
      }
      
      // Delay to avoid rate limiting
      await new Promise(r => setTimeout(r, 1000));
    }
  }

  if (updatedCount > 0) {
    const newTsContent = tsContent.replace(
      /export const articles: Article\[\] = \[[\s\S]*?\];/,
      `export const articles: Article[] = ${JSON.stringify(articles, null, 2)};`
    );
    fs.writeFileSync(tsFile, newTsContent);
    console.log(`\nSuccessfully updated ${updatedCount} articles with local images.`);
  } else {
    console.log(`\nNo images were downloaded.`);
  }
}

processArticles();
