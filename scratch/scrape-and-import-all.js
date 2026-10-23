const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const ARTICLE_URLS = [
  'https://www.linkedin.com/pulse/part-3-year-three-becoming-major-defense-supplier-kristin-cooper-bheic',
  'https://www.linkedin.com/pulse/part-2-year-two-converting-relationships-programs-kristin-cooper-xvajc',
  'https://www.linkedin.com/pulse/what-feds-october-outlook-means-federally-funded-projects-cooper-wezlc',
  'https://www.linkedin.com/pulse/funding-pulse-follow-money-through-permitting-deal-nuclear-cooper-ueltc',
  'https://www.linkedin.com/pulse/meeting-went-great-why-still-program-kristin-cooper-qy7lc',
  'https://www.linkedin.com/pulse/funding-pulse-weekly-grant-policy-outlook-week-september-cooper-66thc',
  'https://www.linkedin.com/pulse/congress-funded-125-disaster-projects-were-grants-new-kristin-cooper-uuuof',
  'https://www.linkedin.com/pulse/funding-pulse-weekly-grant-policy-outlook-week-september-cooper-pnp0f'
];

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchUrl(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function downloadImage(url, destPath) {
  return new Promise((resolve, reject) => {
    if (!url) return resolve(null);
    const client = url.startsWith('https') ? https : http;
    client.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadImage(res.headers.location, destPath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        console.warn(`Failed image download (${res.statusCode}) for ${url}`);
        return resolve(null);
      }
      const fileStream = fs.createWriteStream(destPath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve(destPath);
      });
      fileStream.on('error', (err) => {
        fs.unlink(destPath, () => {});
        reject(err);
      });
    }).on('error', (err) => {
      console.warn(`Error downloading image: ${err.message}`);
      resolve(null);
    });
  });
}

function cleanHtmlText(innerHtml) {
  return innerHtml
    .replace(/<!---->/g, '')
    .replace(/<span class>/g, '<span>')
    .replace(/<span class=\"\">/g, '<span>')
    .replace(/\s+/g, ' ')
    .trim();
}

async function processArticle(url) {
  console.log(`\n========================================`);
  console.log(`Processing: ${url}`);
  
  const slug = url.split('/pulse/')[1].split('?')[0];
  const pageHtml = await fetchUrl(url);
  
  // Extract JSON-LD metadata
  let headline = '';
  let datePublished = new Date().toISOString().split('T')[0];
  let coverImageUrl = '';
  
  const ldMatch = pageHtml.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
  if (ldMatch) {
    try {
      const ld = JSON.parse(ldMatch[1]);
      headline = ld.headline || '';
      if (ld.datePublished) {
        datePublished = ld.datePublished.split('T')[0];
      }
      if (ld.image) {
        coverImageUrl = ld.image.url || ld.image;
      }
    } catch (e) {
      console.warn('Could not parse JSON-LD:', e.message);
    }
  }
  
  // Fallback for headline
  if (!headline) {
    const titleMatch = pageHtml.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    headline = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : slug;
  }
  
  // Clean headline of excessive whitespace or newlines
  headline = headline.replace(/\s+/g, ' ').trim();
  console.log(`Headline: "${headline}"`);
  console.log(`Date: ${datePublished}`);
  
  // Fallback for cover image
  if (!coverImageUrl) {
    const ogImgMatch = pageHtml.match(/<meta property="og:image" content="([^"]+)"/i);
    if (ogImgMatch) coverImageUrl = ogImgMatch[1];
  }
  
  // Download cover image
  const imagesDir = path.join(process.cwd(), 'public', 'images', 'blog');
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }
  
  let localCoverPath = `/images/blog/${slug}.jpg`;
  const destCoverFile = path.join(imagesDir, `${slug}.jpg`);
  
  if (coverImageUrl) {
    console.log(`Downloading cover image...`);
    const downloaded = await downloadImage(coverImageUrl, destCoverFile);
    if (!downloaded) {
      localCoverPath = coverImageUrl; // fallback to remote URL if download fails
    } else {
      console.log(`Saved cover image: ${destCoverFile}`);
    }
  } else {
    localCoverPath = '/images/blog/fallback.svg';
  }
  
  // Parse article body
  const artMatch = pageHtml.match(/<article[^>]*>([\s\S]*?)<\/article>/i);
  let bodyBlocks = [];
  let excerpt = '';
  let inlineImgCount = 0;
  
  if (artMatch) {
    const artContent = artMatch[1];
    const blockRegex = /<div[^>]*data-test-id="(publishing-[^"]+)"[^>]*>([\s\S]*?)<\/div>/g;
    let match;
    
    while ((match = blockRegex.exec(artContent)) !== null) {
      const blockType = match[1];
      const blockHtml = match[2];
      
      if (blockType === 'publishing-text-block') {
        const cleaned = cleanHtmlText(blockHtml);
        // Skip empty blocks
        if (!cleaned || cleaned === '<p> <br> </p>' || cleaned === '<p><br></p>') continue;
        
        bodyBlocks.push(cleaned);
        
        if (!excerpt) {
          const plainText = cleaned.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
          if (plainText.length > 40) {
            excerpt = plainText.substring(0, 160) + '...';
          }
        }
      } else if (blockType === 'publishing-image-block') {
        inlineImgCount++;
        const imgUrlMatch = blockHtml.match(/data-delayed-url="([^"]+)"/) || blockHtml.match(/src="([^"]+)"/);
        const captionMatch = blockHtml.match(/<figcaption[^>]*>([\s\S]*?)<\/figcaption>/i);
        const captionText = captionMatch ? captionMatch[1].replace(/<[^>]+>/g, '').trim() : '';
        
        if (imgUrlMatch) {
          const inlineRemoteUrl = imgUrlMatch[1].replace(/&amp;/g, '&');
          const inlineFileName = `${slug}-inline-${inlineImgCount}.jpg`;
          const inlineDestPath = path.join(imagesDir, inlineFileName);
          
          console.log(`Downloading inline image #${inlineImgCount}...`);
          const res = await downloadImage(inlineRemoteUrl, inlineDestPath);
          const finalSrc = res ? `/images/blog/${inlineFileName}` : inlineRemoteUrl;
          
          bodyBlocks.push(`
<figure class="my-8">
  <img src="${finalSrc}" alt="${captionText || headline}" class="rounded-xl shadow-lg w-full my-4" />
  ${captionText ? `<figcaption class="text-center text-sm text-gray-500 mt-2">${captionText}</figcaption>` : ''}
</figure>`);
        }
      }
    }
  }
  
  const fullBodyHtml = bodyBlocks.join('\n');
  console.log(`Extracted body: ${bodyBlocks.length} blocks, ${fullBodyHtml.length} chars, ${inlineImgCount} inline images`);
  
  if (!excerpt) {
    excerpt = headline;
  }
  
  return {
    slug,
    title: headline,
    date: datePublished,
    image: localCoverPath,
    category: 'LinkedIn Article',
    author: 'Kristin Cooper',
    excerpt: excerpt,
    linkedinUrl: url,
    bodyText: fullBodyHtml
  };
}

(async () => {
  try {
    const scrapedArticles = [];
    
    for (const url of ARTICLE_URLS) {
      try {
        const article = await processArticle(url);
        scrapedArticles.push(article);
        // Small delay between requests to be polite
        await new Promise(r => setTimeout(r, 1000));
      } catch (err) {
        console.error(`Error processing ${url}:`, err);
      }
    }
    
    console.log(`\n========================================`);
    console.log(`Successfully scraped ${scrapedArticles.length} articles!`);
    
    // Save to scraped_content.json
    const scrapedContentFile = path.join(process.cwd(), 'src', 'data', 'scraped_content.json');
    let scrapedContent = {};
    if (fs.existsSync(scrapedContentFile)) {
      scrapedContent = JSON.parse(fs.readFileSync(scrapedContentFile, 'utf8'));
    }
    
    scrapedArticles.forEach(a => {
      const fullUrlKey = `https://www.grantmanagementassoc.com/post/${a.slug}`;
      scrapedContent[fullUrlKey] = {
        bodyText: a.bodyText
      };
    });
    
    fs.writeFileSync(scrapedContentFile, JSON.stringify(scrapedContent, null, 2), 'utf8');
    console.log(`Updated ${scrapedContentFile}`);
    
    // Update src/lib/scraped-articles.ts
    const tsFile = path.join(process.cwd(), 'src', 'lib', 'scraped-articles.ts');
    let tsContent = fs.readFileSync(tsFile, 'utf8');
    
    // Check which ones are already present to avoid duplicate entries
    const newArticlesToAdd = scrapedArticles.filter(a => !tsContent.includes(`"slug": "${a.slug}"`));
    console.log(`Adding ${newArticlesToAdd.length} new articles to scraped-articles.ts`);
    
    if (newArticlesToAdd.length > 0) {
      const articlesMatch = tsContent.match(/export const articles: Article\[\] = \[([\s\S]*?)\];/);
      if (!articlesMatch) {
        throw new Error('Could not find articles array in TS file');
      }
      
      let existingArticlesStr = articlesMatch[1];
      
      let newArticlesStr = '';
      for (const a of newArticlesToAdd) {
        newArticlesStr += `  {
    "slug": ${JSON.stringify(a.slug)},
    "image": ${JSON.stringify(a.image)},
    "title": ${JSON.stringify(a.title)},
    "category": ${JSON.stringify(a.category)},
    "date": ${JSON.stringify(a.date)},
    "author": ${JSON.stringify(a.author)},
    "excerpt": ${JSON.stringify(a.excerpt)},
    "linkedinUrl": ${JSON.stringify(a.linkedinUrl)}
  },
`;
      }
      
      const updatedArticlesBlock = `export const articles: Article[] = [\n${newArticlesStr}${existingArticlesStr}];`;
      tsContent = tsContent.replace(/export const articles: Article\[\] = \[[\s\S]*?\];/, updatedArticlesBlock);
      fs.writeFileSync(tsFile, tsContent, 'utf8');
      console.log(`Successfully prepended ${newArticlesToAdd.length} articles to ${tsFile}`);
    }
    
    console.log('\nAll done! Testing build or verification next.');
  } catch (err) {
    console.error('Fatal error during scrape and import:', err);
  }
})();
