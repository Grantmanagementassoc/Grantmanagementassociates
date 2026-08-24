const https = require('https');
https.get('https://www.linkedin.com/pulse/defense-funding-surge-2025-2026-kristin-cooper-vtsdc', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    const match = data.match(/<meta property="og:image" content="([^"]+)"/);
    if (match) console.log('Image:', match[1]);
    else console.log('No image found, length:', data.length);
  });
}).on('error', err => console.log(err));
