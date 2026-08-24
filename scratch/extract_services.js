const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');
const crypto = require('crypto');

const docsDir = path.join(__dirname, '../../');
const imgDir = path.join(__dirname, '../public/services');

if (!fs.existsSync(imgDir)) {
    fs.mkdirSync(imgDir, { recursive: true });
}

const docs = [
  { file: 'AI Powered Grant Matching.docx', slug: 'ai-matching' },
  { file: 'Strategic Alliances.docx', slug: 'strategic-alliances' },
  { file: 'Go No Go Analysis.docx', slug: 'go-no-go' },
  { file: 'Funding Identification.docx', slug: 'funding-identification' },
  { file: 'Grant Writing and Management.docx', slug: 'grant-writing' },
  { file: 'Nonprofit Grant Services.docx', slug: 'nonprofit' },
  { file: 'State and Local Grant Support.docx', slug: 'state-local' },
  { file: 'Federal Grant Consulting.docx', slug: 'federal' },
  { file: 'Capital Strategy & Funding Readiness.docx', slug: 'capital-strategy' }
];

const options = {
    styleMap: [
        "p[style-name='Title'] => h1:fresh",
        "p[style-name='Heading 1'] => h2:fresh",
        "p[style-name='Heading 2'] => h3:fresh",
        "highlight => mark",
        "r[style-name='Highlight'] => mark"
    ],
    convertImage: mammoth.images.inline(function(element) {
        return element.read("base64").then(function(imageBuffer) {
            const buffer = Buffer.from(imageBuffer, 'base64');
            const hash = crypto.createHash('md5').update(buffer).digest('hex');
            const ext = element.contentType.split('/')[1] || 'png';
            const filename = `img_${hash}.${ext}`;
            const filepath = path.join(imgDir, filename);
            fs.writeFileSync(filepath, buffer);
            return { src: `/services/${filename}` };
        });
    })
};

function processHtml(html) {
    // We want to turn <mark> content into buttons.
    // Sometimes marks are wrapped in <strong> tags or vice versa.
    // The user said: "the highlighted terms are supposed to be a button to their respective pages"
    
    // We can use a regex to find <mark> and turn it into <a href="/contact" class="btn-primary">
    // Some marks might just be empty spaces (e.g. <mark> </mark>) - we should filter those out.
    let processed = html.replace(/<mark>(.*?)<\/mark>/gi, (match, inner) => {
        const text = inner.replace(/<[^>]*>?/gm, '').trim(); // strip html from inner
        if (text.length < 2) return ''; // likely empty or space
        
        let href = "/contact";
        // Let's guess the link based on text
        if (text.toLowerCase().includes("assessment")) {
            href = "/assessment";
        }
        // Could be wrapped in a <p> with multiple buttons, let's just make it a nice button
        return `<a href="${href}" className="btn-primary inline-flex mt-4 mr-4 no-underline">${inner}</a>`;
    });
    
    // Sometimes mammoth generates "Buttons: " text before the mark.
    processed = processed.replace(/Buttons?:?\s*/gi, '');
    
    return processed;
}

async function run() {
    const results = {};
    for (const doc of docs) {
        const fullPath = path.join(docsDir, doc.file);
        if (fs.existsSync(fullPath)) {
            console.log("Processing", doc.file);
            const result = await mammoth.convertToHtml({path: fullPath}, options);
            let html = result.value;
            html = processHtml(html);
            results[doc.slug] = html;
        } else {
            console.log("Not found:", doc.file);
        }
    }
    
    fs.writeFileSync(path.join(__dirname, 'extracted_services.json'), JSON.stringify(results, null, 2));
    console.log("Done extracting!");
}

run();
