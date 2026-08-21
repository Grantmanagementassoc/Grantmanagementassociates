const fs = require('fs');
const puppeteer = require('puppeteer');

const dataFile = 'src/data/scraped_content.json';
const data = JSON.parse(fs.readFileSync(dataFile, 'utf-8'));
const postUrls = Object.keys(data).filter(k => k.includes('/post/'));

(async () => {
  console.log(`Starting targeted re-scrape of ${postUrls.length} posts...`);
  const browser = await puppeteer.launch({headless: 'new'});
  const page = await browser.newPage();
  
  for (let i = 0; i < postUrls.length; i++) {
    const url = postUrls[i];
    console.log(`[${i+1}/${postUrls.length}] Scraping: ${url}`);
    try {
      await page.goto(url, {waitUntil: 'domcontentloaded', timeout: 30000});
      const postHtml = await page.evaluate(() => {
        const postDesc = document.querySelector('section[data-hook="post-description"]');
        return postDesc ? postDesc.innerHTML : null;
      });
      if (postHtml) {
        data[url].bodyText = postHtml;
      } else {
        console.log(' -> No post-description found!');
      }
    } catch(e) {
      console.error(`Error on ${url}: ${e.message}`);
    }
  }
  
  fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
  console.log('Finished saving updated HTML.');
  await browser.close();
})();
