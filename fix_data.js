const fs = require('fs');
const path = require('path');

const fileContentTs = path.join(__dirname, 'src', 'lib', 'content.ts');
let content = fs.readFileSync(fileContentTs, 'utf8');

// 1. Atlanta Regional Commission fix
content = content.replace(
  /client: "Atlanta Regional Commission \(ARC\)",([\s\S]*?)agency: "Market innovations are needed[^"]+",\s*challenge: "U\.S\. Department of Transportation \| Federal Highway Administration Changing and Fueling Infrastructure Discretionary Program January 2024 \$6,120,067 Award",/g,
  `client: "Atlanta Regional Commission (ARC)",$1agency: "U.S. Department of Transportation | Federal Highway Administration",\n    challenge: "Changing and Fueling Infrastructure Discretionary Program. 300+ EV charging ports across the 20-county Atlanta region.",`
);

// 1. Microporous fix
content = content.replace(
  /client: "300\+ EV charging ports across the 20-county Atlanta region\.",([\s\S]*?)agency: "MP Assets Corporation \(Microporous\)",/g,
  `client: "MP Assets Corporation (Microporous)",$1agency: "U.S. Department of Energy",`
);

// 2. Aha Macav
content = content.replace(/client: "Aha Macav Power Service"/g, 'client: "Ft. Mojave Indian Tribe (FMIT)"');
content = content.replace(/a 2\.2 MW ground-mounted utility-scale project/g, 'a 2.2 MW ground-mounted electric utility-scale project');

// 5. Award Distinctions
content = content.replace(
  /(client: "Spatial Informatics Group",[\s\S]*?result: "\$20,000,000 awarded)("\n  })/g,
  '$1. Received the highest score and largest award amount.$2'
);
content = content.replace(
  /(client: "Mainspring Energy",[\s\S]*?result: "\$8,738,477 awarded)("\n  })/g,
  '$1. Received the highest award amount in its round.$2'
);

// 6. CDFA Missing Headline
content = content.replace(
  /client: "California Department of Food and Agriculture \(CDFA\) Specialty Crop Block Grant Program 2022 \$500,212",/g,
  `client: "California Department of Food and Agriculture (CDFA)",\n    challenge: "Specialty Crop Block Grant Program 2022",`
);

// 8. Correct Classifications Federal -> State
const stateKeywords = [
  'California Energy Commission', 'CalTestBed', 'KVIE', 
  'California Department of Housing', 'Shasta', 'STRA', 
  'San Joaquin', 'California Air Resources Board', 'CARB',
  'Strategic Growth Council', 'CEC'
];

content = content.replace(/\{([^}]+)\}/g, (match, p1) => {
  if (p1.includes('type: "Federal"')) {
    let shouldBeState = stateKeywords.some(kw => p1.includes(kw));
    // Check specific amounts/grants mentioned
    if (p1.includes('amount: "$5,000,000"') && p1.includes('California Energy Commission')) shouldBeState = true;
    if (p1.includes('amount: "$65,000"')) shouldBeState = true;
    if (p1.includes('amount: "$3,600,000"')) shouldBeState = true;
    if (p1.includes('amount: "$3,111,200"')) shouldBeState = true;
    if (p1.includes('amount: "$16,667,167"')) shouldBeState = true;
    
    if (shouldBeState) {
      return `{${p1.replace(/type: "Federal"/g, 'type: "State"')}}`;
    }
  }
  return match;
});

// 9. Correct / Simplify Grant Headlines
// $6,000,000 California Energy Commission win -> Remove "GFO-20-602"
content = content.replace(/California Energy Commission \(CEC\) GFO-20-602/g, 'California Energy Commission (CEC)');

// 10. Correct Description of Shasta County Grant (which is $3,600,000)
content = content.replace(
  /client: "Shasta County Community Action Agency",([\s\S]*?)challenge: "([^"]+)",/g,
  (match, p1, p2) => {
    if (p1.includes('3600000') || p1.includes('3,600,000')) {
      return `client: "Shasta County Community Action Agency",${p1}agency: "California Department of Housing and Community Development",\n    challenge: "Rebuilding mobile homes destroyed in a forest fire in Shasta County.",`;
    }
    return match;
  }
);
content = content.replace(/tribal grant/ig, 'grant');

fs.writeFileSync(fileContentTs, content);
console.log('content.ts updated successfully');
