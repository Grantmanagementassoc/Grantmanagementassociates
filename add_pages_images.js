const fs = require('fs');

function updatePage(pagePath, imageNum) {
    if (!fs.existsSync(pagePath)) return;
    
    let content = fs.readFileSync(pagePath, 'utf8');

    // Add next/image import if not exists
    if (!content.includes('import Image from "next/image"')) {
        content = content.replace(
            /import { Section/g, 
            'import Image from "next/image";\nimport { Section'
        );
        if (!content.includes('import Image from "next/image"')) { // Fallback
            content = 'import Image from "next/image";\n' + content;
        }
    }

    // Replace the first glowing blur circle with the background image
    const search = '<div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-sapphire/10 blur-[120px] pointer-events-none" aria-hidden />';
    const replace = search + `\n        <Image src="/images/generated/${imageNum}.png" alt="Background" fill className="object-cover opacity-10 absolute inset-0 z-[-1] pointer-events-none mix-blend-luminosity" priority />`;
    
    if (content.includes(search)) {
        content = content.replace(search, replace);
        fs.writeFileSync(pagePath, content, 'utf8');
        console.log(`Updated ${pagePath} with ${imageNum}.png`);
    } else {
        console.log(`Could not find target div in ${pagePath}`);
    }
}

updatePage('src/app/about/firm/page.tsx', 5);
updatePage('src/app/about/team/page.tsx', 6);
updatePage('src/app/contact/page.tsx', 7);
updatePage('src/app/assessment/page.tsx', 7);
