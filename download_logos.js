const fs = require('fs');
const https = require('https');
const path = require('path');

const LOGOS = [
  { name: "Berkshire Hathaway Energy", domain: "brkenergy.com" },
  { name: "Microporous", domain: "microporous.net" },
  { name: "Mainspring Energy", domain: "mainspringenergy.com" },
  { name: "Batteries Plus", domain: "batteriesplus.com" },
  { name: "Radius Recycling", domain: "radiusrecycling.com" },
  { name: "Atlanta Regional Commission", domain: "atlantaregional.org" },
  { name: "Xcimer Energy", domain: "xcimer.net" },
  { name: "ASHRAE", domain: "ashrae.org" },
  { name: "Spatial Informatics Group", domain: "sig-gis.com" },
  { name: "JMA Wireless", domain: "jmawireless.com" },
  { name: "Golden Empire Transit", domain: "getbus.org" },
  { name: "Carollo Engineers", domain: "carollo.com" },
];

const dir = path.join(__dirname, 'public', 'logos');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

async function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => { file.close(); resolve(true); });
      } else if (res.statusCode === 301 || res.statusCode === 302) {
        download(res.headers.location, dest).then(resolve).catch(reject);
      } else {
        // Fallback to google favicon API if clearbit fails
        resolve(false);
      }
    }).on('error', reject);
  });
}

async function main() {
  for (const logo of LOGOS) {
    const filename = logo.domain.replace('.', '_') + '.png';
    const dest = path.join(dir, filename);
    let success = await download(`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${logo.domain}&size=128`, dest);
    
    if (success) {
      console.log(`Downloaded ${logo.name}`);
    } else {
      console.log(`Failed to download ${logo.name}`);
    }
  }
}

main();
