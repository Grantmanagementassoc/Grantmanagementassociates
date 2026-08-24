const fs = require('fs');
const path = require('path');

const contentPath = path.join(__dirname, '../src/lib/content.ts');
let content = fs.readFileSync(contentPath, 'utf8');

const extractedPath = path.join(__dirname, 'extracted_services.json');
const extracted = JSON.parse(fs.readFileSync(extractedPath, 'utf8'));

// We need to inject the contentHtml property into each service object in the array
// We can do this by using a regex to find each slug and inject contentHtml right after it.
// e.g. slug: "ai-matching", => slug: "ai-matching",\n    contentHtml: `...`,

for (const [slug, html] of Object.entries(extracted)) {
    if (slug === 'capital-strategy') continue; // Handled separately
    
    // Escape backticks and dollars in the HTML
    const safeHtml = html.replace(/`/g, '\\`').replace(/\$/g, '\\$');
    
    const searchString = `slug: "${slug}",`;
    const replaceString = `slug: "${slug}",\n    contentHtml: \`${safeHtml}\`,`;
    
    if (content.includes(searchString)) {
        content = content.replace(searchString, replaceString);
    } else {
        console.warn(`Could not find slug: ${slug} in content.ts`);
    }
}

// Now we need to add the new "capital-strategy" service to the end of the services array
if (extracted['capital-strategy']) {
    const safeHtml = extracted['capital-strategy'].replace(/`/g, '\\`').replace(/\$/g, '\\$');
    const newService = `  {
    slug: "capital-strategy",
    title: "Capital Strategy & Funding Readiness",
    tagline: "Prepare your organization for successful funding outcomes.",
    summary: "Comprehensive capital strategy and readiness planning to ensure your organization is positioned to win and manage large-scale funding.",
    icon: "LineChart",
    outcomes: ["Defensible funding strategy", "Organization readiness", "Capital alignment"],
    process: [
      { title: "Assessment", body: "We evaluate your current financial posture and project pipeline." },
      { title: "Strategy", body: "Develop a targeted roadmap for securing matching funds and grants." },
      { title: "Execution", body: "Support in assembling the required financial and organizational documentation." }
    ],
    deliverables: ["Funding Readiness Report", "Capital Strategy Roadmap"],
    timeline: "4-8 weeks",
    faq: [{ q: "What is funding readiness?", a: "It ensures you have the necessary audits, policies, and match capital identified before applying." }],
    contentHtml: \`${safeHtml}\`
  },
`;

    // Insert it right before the end of the services array
    // find `\n];\n\nexport type Industry = {`
    const arrayEndStr = `\n];\n\nexport type Industry`;
    if (content.includes(arrayEndStr)) {
        content = content.replace(arrayEndStr, `\n${newService}];\n\nexport type Industry`);
    } else {
        console.warn("Could not find the end of the services array");
    }
}

fs.writeFileSync(contentPath, content);
console.log("Updated content.ts with services HTML and new service.");
