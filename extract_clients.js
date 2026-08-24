const fs = require('fs');
const content = fs.readFileSync('src/lib/content.ts', 'utf8');
const clients = [];
const regex = /client:\s*[\"'](.*?)[\"']/g;
let match;
while ((match = regex.exec(content)) !== null) {
  clients.push(match[1]);
}
const unique = [...new Set(clients)].slice(0, 15);
console.log(JSON.stringify(unique, null, 2));
