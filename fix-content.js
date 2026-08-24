const fs = require('fs');
let content = fs.readFileSync('src/lib/content.ts', 'utf8');

const caseStudiesRegex = /export const caseStudies = (\[[\s\S]*?\]);/;
const match = content.match(caseStudiesRegex);
if (match) {
  let caseStudiesString = match[1];
  
  // Actually, wait, some fields might span multiple lines if they are very long, but we can assume they don't for now.
  // Better yet, parse the case studies string if possible. It's a JS object, not JSON.
  // We can just find instances where client has > 70 chars.
  
  const blocks = caseStudiesString.split('},');
  
  for (let i = 0; i < blocks.length; i++) {
    let block = blocks[i];
    let clientMatch = block.match(/client:\s*"([^"]*)"/);
    let challengeMatch = block.match(/challenge:\s*"([^"]*)"/);
    
    if (clientMatch && challengeMatch) {
      if (clientMatch[1].length > 70 && challengeMatch[1].length < 70) {
        // We found a swapped pair!
        let newBlock = block
          .replace(clientMatch[0], `client: "${challengeMatch[1]}"`)
          .replace(challengeMatch[0], `challenge: "${clientMatch[1]}"`);
        
        caseStudiesString = caseStudiesString.replace(block, newBlock);
      }
    }
  }

  content = content.replace(match[1], caseStudiesString);
  
  // We should also check the results array.
  const resultsRegex = /export const results = (\[[\s\S]*?\]);/;
  const resultsMatch = content.match(resultsRegex);
  if (resultsMatch) {
    let resultsString = resultsMatch[1];
    const resultsBlocks = resultsString.split('},');
    for (let i = 0; i < resultsBlocks.length; i++) {
      let block = resultsBlocks[i];
      let clientMatch = block.match(/client:\s*"([^"]*)"/);
      let challengeMatch = block.match(/challenge:\s*"([^"]*)"/);
      
      if (clientMatch && challengeMatch) {
        if (clientMatch[1].length > 70 && challengeMatch[1].length < 70) {
          let newBlock = block
            .replace(clientMatch[0], `client: "${challengeMatch[1]}"`)
            .replace(challengeMatch[0], `challenge: "${clientMatch[1]}"`);
          
          resultsString = resultsString.replace(block, newBlock);
        }
      }
    }
    content = content.replace(resultsMatch[1], resultsString);
  }

  fs.writeFileSync('src/lib/content.ts', content, 'utf8');
  console.log('Fixed case studies and results.');
}
