const https = require('https');

https.get('https://www.grantmanagementassoc.com/about', (res) => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    const urls = [...new Set([...data.matchAll(/(?:src|url)\s*[\(\"\'\=]+(https:\/\/[^\"]+wixstatic\.com\/media\/[^\"]+)/g)].map(m => m[1]))];
    console.log(urls);
  });
});
