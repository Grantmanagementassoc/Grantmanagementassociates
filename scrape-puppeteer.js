const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  console.log("Launching browser...");
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  console.log("Navigating to blog...");
  // Do NOT intercept media, we need images to load!
  await page.goto('https://www.grantmanagementassoc.com/blog', { waitUntil: 'networkidle2', timeout: 60000 });

  const autoScroll = async (page) => {
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let totalHeight = 0;
        let distance = 500;
        let timer = setInterval(() => {
          let scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;
          
          const buttons = Array.from(document.querySelectorAll('button'));
          const loadMoreBtn = buttons.find(b => (b.innerText || '').toLowerCase().includes('more posts') || (b.innerText || '').toLowerCase().includes('load more'));
          if (loadMoreBtn && !loadMoreBtn.disabled) loadMoreBtn.click();

          if (totalHeight >= scrollHeight - window.innerHeight) {
            clearInterval(timer);
            resolve();
          }
        }, 300); // give it time to render
      });
    });
  };

  console.log("Scrolling to load all posts...");
  for(let i=0; i<15; i++) {
    await autoScroll(page);
    await new Promise(r => setTimeout(r, 1000));
  }

  console.log("Extracting images...");
  const posts = await page.evaluate(() => {
    const postElements = document.querySelectorAll('a[href*="/post/"]');
    const data = {};
    postElements.forEach(a => {
      const url = a.href;
      // Get the image element inside this link or its parent container
      // Wix blog cards usually have the image inside an anchor tag or just above it.
      let img = a.querySelector('img');
      if (!img) {
        // Try looking in the parent container
        const card = a.closest('[data-testid="post-card"], [data-hook="post-list-item"]');
        if (card) img = card.querySelector('img');
      }
      if (img && img.src) {
        const slug = url.split('/post/')[1];
        if (slug) {
          // Wix lazy loads, src might be a placeholder. Try getting srcset or src
          data[slug] = img.src;
        }
      }
    });
    return data;
  });

  console.log(`Found ${Object.keys(posts).length} posts with images.`);
  fs.writeFileSync('blog-images.json', JSON.stringify(posts, null, 2));

  // Now Team page
  console.log("Navigating to about page...");
  await page.goto('https://www.grantmanagementassoc.com/about', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 2000));
  
  const teamImages = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('img'))
      .map(img => ({ src: img.src, alt: img.alt || '' }))
      .filter(img => img.src && img.src.includes('static.wixstatic.com/media') && img.alt.length > 2 && !img.src.includes('NEW-LOGO'));
  });
  console.log(`Found ${teamImages.length} potential team images.`);
  fs.writeFileSync('team-images.json', JSON.stringify(teamImages, null, 2));

  await browser.close();
})();
