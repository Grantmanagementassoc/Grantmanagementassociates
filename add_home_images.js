const fs = require('fs');

const pagePath = 'src/app/page.tsx';
let content = fs.readFileSync(pagePath, 'utf8');

// 1. Add next/image import if not exists
if (!content.includes('import Image from "next/image"')) {
    content = content.replace(
        'import Link from "next/link";', 
        'import Link from "next/link";\nimport Image from "next/image";'
    );
}

// 2. Add hero background (1.png)
// Search for: <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-sapphire/10 blur-[120px] pointer-events-none" aria-hidden />
// Replace with it + image
const heroSearch = '<div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-sapphire/10 blur-[120px] pointer-events-none" aria-hidden />';
const heroReplace = heroSearch + '\n        <Image src="/images/generated/1.png" alt="Hero Background" fill className="object-cover opacity-10 absolute inset-0 z-[-1] pointer-events-none mix-blend-luminosity" priority />';
content = content.replace(heroSearch, heroReplace);

// 3. Methodology background (2.png or 3.png)
const methodologySearch = '<SectionTitle\n          eyebrow="Methodology"\n          title={<>A repeatable process for <span className="text-gradient-brand">consistent success</span>.</>}\n          subtitle="Every engagement follows a disciplined four-phase methodology refined across 15+ years and thousands of submissions."\n        />';
const methodologyReplace = '<div className="absolute inset-0 z-[-1] pointer-events-none opacity-5"><Image src="/images/generated/3.png" alt="Methodology Background" fill className="object-cover mix-blend-luminosity" /></div>\n        ' + methodologySearch;
content = content.replace(methodologySearch, methodologyReplace);

// 4. Action/Engagement section - Responsible AI section
const responsibleAiSearch = '<div className="absolute inset-0 grid-lines opacity-10 dark:opacity-20 pointer-events-none" aria-hidden />';
const responsibleAiReplace = responsibleAiSearch + '\n          <Image src="/images/generated/4.png" alt="Action Section Background" fill className="object-cover opacity-10 mix-blend-overlay z-[-1]" />';
content = content.replace(responsibleAiSearch, responsibleAiReplace);

// 5. Add image to featured services
// Replace the large service card background
const serviceCardSearch = '<div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-sapphire/15 blur-3xl pointer-events-none" aria-hidden />';
const serviceCardReplace = serviceCardSearch + '\n              <div className="absolute inset-0 z-0 opacity-20"><Image src="/images/generated/8.png" alt="Service Image" fill className="object-cover mix-blend-luminosity" /></div>';
content = content.replace(serviceCardSearch, serviceCardReplace);

fs.writeFileSync(pagePath, content, 'utf8');
console.log('Updated page.tsx with images!');
