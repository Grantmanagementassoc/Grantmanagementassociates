import puppeteer from 'puppeteer';
import fs from 'fs/promises';

const BASE_URL = 'https://www.grantmanagementassoc.com';
const VISITED = new Set();
const CONTENT = {};

async function scrapePage(url, page) {
  url = url.split('#')[0].replace(/\/$/, '');
  if (!url.startsWith(BASE_URL)) return;
  
  // Skip blog posts to save time, unless it's the main blog page
  if (url.includes('/blog/') || url.includes('/post/')) return;
  
  if (VISITED.has(url)) return;
  VISITED.add(url);
  console.log(`Scraping: ${url}`);
  
  try {
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
    
    const data = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a'))
        .map(a => a.href)
        .filter(href => href.startsWith('https://www.grantmanagementassoc.com') && !href.includes('mailto:'));
        
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
    
    for (const link of data.links) {
      const normalizedLink = link.split('#')[0].replace(/\/$/, '');
      if (!VISITED.has(normalizedLink)) {
        await scrapePage(normalizedLink, page);
      }
    }
  } catch (error) {
    console.error(`Error scraping ${url}:`, error.message);
  }
}

async function run() {
  console.log('Starting fast scraper...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  await scrapePage(BASE_URL, page);
  
  await fs.writeFile('scraped_content.json', JSON.stringify(CONTENT, null, 2));
  console.log('Fast scraping completed and saved to scraped_content.json');
  
  await browser.close();
}

run();
