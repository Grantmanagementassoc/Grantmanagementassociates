require('dotenv').config({ path: '.env.local' });
const https = require('https');

const token = process.env.LINKEDIN_ACCESS_TOKEN;
const authorUrn = process.env.LINKEDIN_AUTHOR_URN;

if (!token || !authorUrn) {
  console.error("Missing token or urn in .env.local", { token: !!token, authorUrn });
  process.exit(1);
}

const url = new URL(`https://api.linkedin.com/v2/ugcPosts?q=authors&authors=List(${encodeURIComponent(authorUrn)})`);

const options = {
  hostname: url.hostname,
  path: url.pathname + url.search,
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`,
    'LinkedIn-Version': '202607',
    'Content-Type': 'application/json',
    'X-Restli-Protocol-Version': '2.0.0'
  }
};

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log('Status Code:', res.statusCode);
    try {
      const json = JSON.parse(data);
      console.log('Response elements length:', json.elements ? json.elements.length : 'undefined');
      if (json.elements && json.elements.length > 0) {
          console.log('Sample element keys:', Object.keys(json.elements[0]));
      } else {
          console.log('Response body:', JSON.stringify(json, null, 2));
      }
    } catch (e) {
      console.log('Raw response:', data);
    }
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.end();
