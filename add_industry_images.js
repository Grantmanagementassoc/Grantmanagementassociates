const fs = require('fs');

const pagePath = 'src/app/industries/[slug]/page.tsx';
let content = fs.readFileSync(pagePath, 'utf8');

// Replace the first glowing blur circle with the background image
const search = '<div className="absolute -top-40 right-0 w-[700px] h-[700px] rounded-full bg-sapphire/15 blur-[120px] pointer-events-none" aria-hidden />';
const replace = search + `\n        {ind.image && (\n          <Image src={ind.image} alt="Background" fill className="object-cover opacity-10 absolute inset-0 z-[-1] pointer-events-none mix-blend-luminosity" priority />\n        )}`;

if (content.includes(search)) {
    // Add next/image import if not exists
    if (!content.includes('import Image from "next/image"')) {
        content = content.replace(
            /import { Section/g, 
            'import Image from "next/image";\nimport { Section'
        );
    }
    content = content.replace(search, replace);
    fs.writeFileSync(pagePath, content, 'utf8');
    console.log(`Updated ${pagePath} with conditional image rendering`);
} else {
    console.log(`Could not find target div in ${pagePath}`);
}
