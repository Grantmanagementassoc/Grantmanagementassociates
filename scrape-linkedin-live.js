const puppeteer = require('puppeteer');
const fs = require('fs');

const LINKEDIN_COMPANY_URL = 'https://www.linkedin.com/in/kristinccarter/recent-activity/articles/';
const OUTPUT_FILE = './src/data/linkedin_articles.json';

(async () => {
  console.log('Starting LinkedIn scraper...');
  
  // NOTE: LinkedIn heavily restricts automated scraping. 
  // Running this headless might trigger a login wall or CAPTCHA.
  // We use headless: false so you can see if you need to log in manually.
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  
  // Spoof User-Agent to reduce chance of getting blocked immediately
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36');
  
  console.log(`Navigating to ${LINKEDIN_COMPANY_URL}`);
  await page.goto(LINKEDIN_COMPANY_URL, { waitUntil: 'networkidle2', timeout: 60000 });
  
  console.log("Waiting for articles to load... (If you see a login screen, please log in now.)");
  
  // Wait a bit for manual login if required, or for articles to render
  await new Promise(r => setTimeout(r, 10000));
  
  try {
    // You may need to adjust these selectors based on LinkedIn's current DOM structure
    // Since LinkedIn's DOM changes frequently, these are best-effort selectors.
    const articles = await page.evaluate(() => {
      const posts = Array.from(document.querySelectorAll('.feed-shared-update-v2'));
      
      return posts.map(post => {
        const titleEl = post.querySelector('.update-components-article__title');
        const linkEl = post.querySelector('.update-components-article__link');
        const descEl = post.querySelector('.update-components-article__description');
        const imgEl = post.querySelector('.update-components-article__image');
        
        return {
          title: titleEl ? titleEl.innerText.trim() : 'Unknown Title',
          url: linkEl ? linkEl.href : null,
          excerpt: descEl ? descEl.innerText.trim() : '',
          image: imgEl ? imgEl.src : null,
          // Extracting exact date can be tricky, often it just says "1mo" or "2w"
          // We'll just stamp it with the current date if we can't find a good string.
          date: new Date().toISOString().split('T')[0]
        };
      }).filter(p => p.url !== null);
    });
    
    console.log(`Extracted ${articles.length} articles.`);
    
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(articles, null, 2));
    console.log(`Saved articles to ${OUTPUT_FILE}`);
    
  } catch (err) {
    console.error("Error extracting articles:", err.message);
  }
  
  console.log("Closing browser in 5 seconds...");
  await new Promise(r => setTimeout(r, 5000));
  await browser.close();
})();
