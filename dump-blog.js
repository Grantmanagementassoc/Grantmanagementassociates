const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.grantmanagementassoc.com/blog', { waitUntil: 'networkidle2' });

  const html = await page.evaluate(() => document.body.innerHTML);
  const fs = require('fs');
  fs.writeFileSync('blog-html.html', html);
  
  await browser.close();
})();
