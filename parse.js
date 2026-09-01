const fs = require('fs');

let code = fs.readFileSync('src/lib/content.ts', 'utf8');

// Match the services array block
const servicesMatch = code.match(/export const services: Service\[\] = \[([\s\S]*?)\];\n\nexport const industries/);
if(!servicesMatch) {
  console.log("Could not find services array");
  process.exit(1);
}

// We will evaluate the services array safely to get the JS objects so we can process them easily!
// Since it has some imports or JSX maybe? No, it's just an array of objects.
// Wait, we can't eval it easily because of things like `IconComponent` or `process: [...]`
// But we can parse it using regex!

// Actually, I can just write a script that reads sample_content.txt and extracts it to JSON.
