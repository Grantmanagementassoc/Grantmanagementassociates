const https = require('https');
const fs = require('fs');
const path = require('path');

const logos = [
  { name: "Berkshire Hathaway Energy", domain: "brkenergy.com" },
  { name: "MidAmerican Energy", domain: "midamericanenergy.com" },
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

const targetDir = path.join(__dirname, 'public', 'logos');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function download(domain, dest) {
  return new Promise((resolve, reject) => {
    https.get(`https://logo.clearbit.com/${domain}`, (res) => {
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else {
        res.resume(); // consume response data to free up memory
        reject(new Error(`Failed with status: ${res.statusCode}`));
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function main() {
  const downloaded = [];
  for (const logo of logos) {
    const dest = path.join(targetDir, `${logo.domain}.png`);
    try {
      await download(logo.domain, dest);
      console.log(`Downloaded ${logo.domain}`);
      downloaded.push(logo);
    } catch (e) {
      console.log(`Failed ${logo.domain}: ${e.message}`);
    }
  }
  console.log("FINAL LIST:");
  console.log(JSON.stringify(downloaded, null, 2));
}

main();
