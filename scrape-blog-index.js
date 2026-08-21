const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  console.log("Launching browser...");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Intercept requests to block unnecessary resources and speed up loading
  await page.setRequestInterception(true);
  page.on('request', (req) => {
    if (['font', 'media'].includes(req.resourceType())) {
      req.abort();
    } else {
      req.continue();
    }
  });

  console.log("Navigating to blog...");
  await page.goto('https://www.grantmanagementassoc.com/blog', { waitUntil: 'networkidle2', timeout: 60000 });

  // Function to auto-scroll to the bottom to trigger infinite loading
  const autoScroll = async (page) => {
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let totalHeight = 0;
        let distance = 500;
        let timer = setInterval(() => {
          let scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;
          
          const loadMoreBtn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.toLowerCase().includes('more posts') || b.innerText.toLowerCase().includes('load more'));
          if (loadMoreBtn) loadMoreBtn.click();

          if (totalHeight >= scrollHeight - window.innerHeight) {
            clearInterval(timer);
            resolve();
          }
        }, 100);
      });
    });
  };

  console.log("Scrolling to load all posts...");
  // Scroll multiple times to ensure all posts load
  for(let i=0; i<10; i++) {
    await autoScroll(page);
    await new Promise(r => setTimeout(r, 2000));
  }

  console.log("Extracting images...");
  const posts = await page.evaluate(() => {
    const postElements = document.querySelectorAll('a[href*="/post/"]');
    const data = {};
    postElements.forEach(a => {
      const url = a.href;
      // Get the image element inside this link or its parent container
      const img = a.querySelector('img') || a.parentElement.querySelector('img');
      if (img && img.src) {
        // Wix uses wixstatic, clean up URL if needed or just take src
        const slug = url.split('/post/')[1];
        if (slug) {
          data[slug] = img.src;
        }
      }
    });
    return data;
  });

  console.log(`Found ${Object.keys(posts).length} posts with images.`);
  fs.writeFileSync('blog-images.json', JSON.stringify(posts, null, 2));

  await browser.close();
})();
