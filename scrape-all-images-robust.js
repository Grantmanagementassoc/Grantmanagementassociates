const fs = require('fs');
const path = require('path');

const downloadImage = async (url, filepath) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Status ${res.status}`);
  const buffer = await res.arrayBuffer();
  fs.writeFileSync(filepath, Buffer.from(buffer));
};

(async () => {
  console.log('Fetching blog images with built-in fetch...');
  const outBlog = './public/images/blog';
  if (!fs.existsSync(outBlog)) fs.mkdirSync(outBlog, { recursive: true });

  const dataFile = './src/data/scraped_content.json';
  const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
  const tsFile = './src/lib/scraped-articles.ts';
  let tsContent = fs.readFileSync(tsFile, 'utf8');

  let imagesMap = {};
  let count = 0;
  
  const entries = Object.entries(data).filter(([url]) => url.includes('/post/'));

  for (const [url, post] of entries) {
    const slug = url.split('/post/')[1];
    
    // Check if we already have it
    const existingMatches = fs.readdirSync(outBlog).filter(f => f.startsWith(slug + '.'));
    if (existingMatches.length > 0) {
      imagesMap[slug] = `/images/blog/${existingMatches[0]}`;
      count++;
      continue;
    }

    try {
      const res = await fetch(url);
      const html = await res.text();
      const ogMatch = html.match(/<meta property="og:image" content="([^"]+)"/);
      if (ogMatch && ogMatch[1]) {
         let src = ogMatch[1];
         if (!src.includes('NEW-LOGO')) {
           let ext = 'jpg';
           if (src.includes('.png')) ext = 'png';
           else if (src.includes('.jpeg')) ext = 'jpeg';
           
           const filename = `${slug}.${ext}`;
           await downloadImage(src, path.join(outBlog, filename));
           imagesMap[slug] = `/images/blog/${filename}`;
           count++;
           console.log(`Saved ${slug}`);
         }
      }
    } catch(e) {
      console.error(`Failed ${slug}`, e.message);
    }
  }

  console.log(`\nFound/Downloaded ${count} blog images.`);
  
  // Update scraped-articles.ts
  for (const [slug, imgPath] of Object.entries(imagesMap)) {
    // We already added image?: string; previously.
    // Replace if it doesn't already have an image
    const slugRegex = new RegExp(`("slug":\\s*"${slug}",\\s*\\n\\s*)"title"`, 'g');
    tsContent = tsContent.replace(slugRegex, `$1"image": "${imgPath}",\n    "title"`);
    
    // If it already has an image line (from previous run), replace it
    const existingImgRegex = new RegExp(`("slug":\\s*"${slug}",\\s*\\n\\s*"image":\\s*"[^"]+",\\s*\\n\\s*)"title"`, 'g');
    tsContent = tsContent.replace(existingImgRegex, `"slug": "${slug}",\n    "image": "${imgPath}",\n    "title"`);
  }

  fs.writeFileSync(tsFile, tsContent);
  console.log('Updated scraped-articles.ts');

})();
