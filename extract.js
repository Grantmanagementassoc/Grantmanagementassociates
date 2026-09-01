const fs = require('fs');
const code = fs.readFileSync('old_content.ts', 'utf8');
const startIdx = code.indexOf('contentHtml: `');
if(startIdx !== -1) {
  const endIdx = code.indexOf('`', startIdx + 15);
  const html = code.substring(startIdx + 14, endIdx);
  fs.writeFileSync('sample_content.txt', html);
  console.log('written');
}
