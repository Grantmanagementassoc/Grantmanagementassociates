const puppeteer = require('puppeteer');
const fs = require('fs');
const https = require('https');
const path = require('path');

const outDir = './public/images/team';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .once('close', () => resolve(filepath));
      } else {
        res.resume();
        reject(new Error(`Request Failed: ${res.statusCode}`));
      }
    });
  });
};

(async () => {
  console.log("Launching browser for About page...");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto('https://www.grantmanagementassoc.com/about', { waitUntil: 'networkidle2' });

  console.log("Extracting team images...");
  const teamImages = await page.evaluate(() => {
    // Look for images on the about page
    const imgs = Array.from(document.querySelectorAll('img'));
    // Usually team members have names in alt text or nearby. We'll just grab all images and try to map them later, or use some heuristics.
    // Let's grab images whose alt text matches our team members or that are in a grid
    
    // As a heuristic, get images that are not tiny logos.
    return imgs.map(img => ({
      src: img.src,
      alt: img.alt || ''
    })).filter(img => img.src.includes('static.wixstatic.com/media') && !img.src.includes('NEW-LOGO') && img.alt.length > 2);
  });

  console.log(`Found ${teamImages.length} potential team images.`);
  fs.writeFileSync('team-images.json', JSON.stringify(teamImages, null, 2));

  // Let's also parse content.ts team members
  const contentFile = fs.readFileSync('./src/lib/content.ts', 'utf8');
  const teamNames = ['Kristin Cooper', 'Danielle Sotelo', 'Brad Zerbe', 'Sonia Vohnout', 'Sarthak Tandon'];
  
  let mappedCount = 0;
  for (const img of teamImages) {
    for (const name of teamNames) {
      if (img.alt.toLowerCase().includes(name.toLowerCase()) || name.toLowerCase().includes(img.alt.toLowerCase().split(' ')[0])) {
         console.log(`Mapped ${name} to ${img.src}`);
         const filepath = path.join(outDir, `${name.split(' ')[0].toLowerCase()}.jpg`);
         await downloadImage(img.src, filepath);
         mappedCount++;
      }
    }
  }
  
  console.log(`Successfully mapped and downloaded ${mappedCount} team images.`);

  await browser.close();
})();
