const fs = require('fs');
const https = require('https');
const path = require('path');

const fetchHtml = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
};

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .once('close', () => resolve(filepath));
      } else {
        res.resume();
        reject(new Error(`Status Code: ${res.statusCode}`));
      }
    });
  });
};

(async () => {
  // 1. Team Images from /about
  console.log('Fetching team images...');
  const outTeam = './public/images/team';
  if (!fs.existsSync(outTeam)) fs.mkdirSync(outTeam, { recursive: true });
  
  const aboutHtml = await fetchHtml('https://www.grantmanagementassoc.com/about');
  const teamMatches = [...aboutHtml.matchAll(/src="([^"]+wixstatic\.com\/media\/[^"]+)"/g)].map(m => m[1]);
  
  // We need to filter out common UI elements
  const validTeamImages = [...new Set(teamMatches)].filter(src => 
    !src.includes('NEW-LOGO') && 
    !src.includes('icon') && 
    !src.includes('spin_wh') &&
    !src.includes('NWBOC')
  );

  console.log(`Found ${validTeamImages.length} potential team images on /about.`);
  let teamCounter = 1;
  for (let src of validTeamImages) {
    if (src.startsWith('//')) src = 'https:' + src;
    try {
      const extMatch = src.match(/\.(png|jpe?g|webp|avif)/i);
      const ext = extMatch ? extMatch[1] : 'jpg';
      const filename = `team-${teamCounter++}.${ext}`;
      await downloadImage(src, path.join(outTeam, filename));
    } catch(e) { console.error('Failed team image', src, e.message); }
  }

  // 2. Blog Images
  console.log('\nFetching blog images (this may take a while)...');
  const outBlog = './public/images/blog';
  if (!fs.existsSync(outBlog)) fs.mkdirSync(outBlog, { recursive: true });

  const dataFile = './src/data/scraped_content.json';
  const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
  const tsFile = './src/lib/scraped-articles.ts';
  let tsContent = fs.readFileSync(tsFile, 'utf8');

  let imagesMap = {};
  let count = 0;
  let batch = [];
  
  const entries = Object.entries(data).filter(([url]) => url.includes('/post/'));

  for (const [url, post] of entries) {
    batch.push({ url, slug: url.split('/post/')[1] });
    
    // Process in batches of 10
    if (batch.length === 10 || batch.length === entries.length) {
      await Promise.all(batch.map(async ({url, slug}) => {
        try {
          const html = await fetchHtml(url);
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
      }));
      batch = [];
    }
  }

  console.log(`\nDownloaded ${count} blog images.`);
  
  // 3. Update scraped-articles.ts
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
