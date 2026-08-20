import puppeteer from 'puppeteer';
import fs from 'fs/promises';

const BASE_URL = 'https://www.grantmanagementassoc.com';
const VISITED = new Set();
const CONTENT = {};

async function scrapePage(url, page) {
  // Normalize url
  url = url.split('#')[0].replace(/\/$/, '');
  if (!url.startsWith(BASE_URL)) return;
  if (VISITED.has(url)) return;
  VISITED.add(url);
  console.log(`Scraping: ${url}`);
  
  try {
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
    
    // Extract text content and images
    const data = await page.evaluate(() => {
      // Find all links to visit later before removing elements
      const links = Array.from(document.querySelectorAll('a'))
        .map(a => a.href)
        .filter(href => href.startsWith('https://www.grantmanagementassoc.com') && !href.includes('mailto:'));
        
      // Remove header, footer, nav to get main content
      const toRemove = document.querySelectorAll('header, footer, nav, script, style, noscript');
      toRemove.forEach(el => el.remove());
      
      const title = document.title;
      const bodyText = document.body.innerText;
      
      const images = Array.from(document.querySelectorAll('img')).map(img => ({
        src: img.src,
        alt: img.alt
      }));
      
      return { title, bodyText, images, links: [...new Set(links)] };
    });
    
    CONTENT[url] = { title: data.title, bodyText: data.bodyText, images: data.images };
    
    // Visit discovered links
    for (const link of data.links) {
      if (!VISITED.has(link.split('#')[0].replace(/\/$/, ''))) {
        await scrapePage(link, page);
      }
    }
  } catch (error) {
    console.error(`Error scraping ${url}:`, error.message);
  }
}

async function run() {
  console.log('Starting scraper...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  await scrapePage(BASE_URL, page);
  
  await fs.writeFile('scraped_content.json', JSON.stringify(CONTENT, null, 2));
  console.log('Scraping completed and saved to scraped_content.json');
  
  await browser.close();
}

run();
