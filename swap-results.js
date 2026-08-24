const fs = require('fs');

let content = fs.readFileSync('src/lib/content.ts', 'utf8');

// The scraper sometimes put the descriptive text (the challenge/project description) into the 'client' field,
// and put the actual business name into the 'challenge' field, or 'agency' field.
// If the 'client' field is long (> 60 chars) and 'challenge' is short (< 60 chars) or 'client' just looks like a paragraph...

const lines = content.split('\n');
let inResults = false;

let currentObjStart = -1;
let clientLineIdx = -1;
let challengeLineIdx = -1;
let agencyLineIdx = -1;

let swappedCount = 0;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('export const results: CaseStudy[] = [')) {
    inResults = true;
  }
  
  if (!inResults) continue;
  
  if (lines[i].includes('{')) {
    currentObjStart = i;
    clientLineIdx = -1;
    challengeLineIdx = -1;
    agencyLineIdx = -1;
  }
  
  if (lines[i].includes('client: "')) clientLineIdx = i;
  if (lines[i].includes('agency: "')) agencyLineIdx = i;
  if (lines[i].includes('challenge: "')) challengeLineIdx = i;
  
  if (lines[i].includes('},') && clientLineIdx !== -1 && (challengeLineIdx !== -1 || agencyLineIdx !== -1)) {
    // End of object, let's analyze
    let clientMatch = lines[clientLineIdx].match(/client:\s*"(.*)"/);
    let challengeMatch = challengeLineIdx !== -1 ? lines[challengeLineIdx].match(/challenge:\s*"(.*)"/) : null;
    let agencyMatch = agencyLineIdx !== -1 ? lines[agencyLineIdx].match(/agency:\s*"(.*)"/) : null;
    
    if (clientMatch && clientMatch[1].length > 70) {
      // The client is a long paragraph. 
      // Where is the business name? Usually in challenge or agency.
      let clientText = clientMatch[1];
      
      // Let's swap client and challenge if challenge is shorter and looks like a name
      if (challengeMatch && challengeMatch[1].length < 70 && challengeMatch[1].length > 0) {
        let challengeText = challengeMatch[1];
        lines[clientLineIdx] = lines[clientLineIdx].replace(clientText, challengeText);
        lines[challengeLineIdx] = lines[challengeLineIdx].replace(challengeText, clientText);
        swappedCount++;
      } 
      // Or if agency is shorter and looks like a business name
      else if (agencyMatch && agencyMatch[1].length < 70 && agencyMatch[1].length > 0) {
         let agencyText = agencyMatch[1];
         lines[clientLineIdx] = lines[clientLineIdx].replace(clientText, agencyText);
         lines[agencyLineIdx] = lines[agencyLineIdx].replace(agencyText, clientText);
         swappedCount++;
      }
    }
  }
}

fs.writeFileSync('src/lib/content.ts', lines.join('\n'));
console.log(`Swapped ${swappedCount} fields!`);
