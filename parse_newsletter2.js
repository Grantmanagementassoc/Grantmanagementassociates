const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, 'scratch/new_newsletter.html'), 'utf-8');
const $ = cheerio.load(html);

const results = [];
let currentCategory = null;

$('body').children().each((i, el) => {
    const tag = $(el).prop('tagName').toLowerCase();
    
    if (tag === 'p') {
        const text = $(el).text().trim();
        // A bolded text alone in a paragraph indicates a category, unless it contains a link
        const strongText = $(el).find('strong').text().trim();
        if (strongText === text && text.length > 0 && !$(el).find('a').length && !text.includes('Forecast Notice')) {
             if (text !== 'Link to GMA Master Solicitation Calendar for Cross-Checking' && !text.includes('CONFIDENTIAL')) {
                 currentCategory = text.replace(/\?"/g, '-').replace('—', '-').trim();
                 currentCategory = currentCategory.split(' - ')[0];
             }
        } else if (strongText === text && text.includes('Forecast Notice')) {
             currentCategory = text.split('?"')[0].split('—')[0].trim();
        }
    } else if (tag === 'table') {
        if (!currentCategory) currentCategory = "Overview";
        
        let categoryObj = results.find(c => c.category === currentCategory);
        if (!categoryObj) {
            categoryObj = { category: currentCategory, grants: [] };
            results.push(categoryObj);
        }
        
        const grant = {};
        
        const rows = $(el).find('tr');
        grant['Description'] = $(rows[0]).html(); // we'll clean this up below
        
        rows.each((j, row) => {
            if (j === 0) return; // handled above
            const cells = $(row).find('td');
            if (cells.length >= 2) {
                const key = $(cells[0]).text().trim();
                const val = $(cells[1]).html();
                grant[key] = val;
            }
        });
        
        categoryObj.grants.push(grant);
    }
});

// Clean up HTML in values
results.forEach(c => {
    c.grants.forEach(g => {
        for (const k in g) {
            let val = g[k];
            val = val.replace(/^<p[^>]*>/i, '').replace(/<\/p>$/i, '');
            val = val.replace(/\?"/g, '—').replace(/\?T/g, "'").replace(/\?I/g, '"').replace(/\?/g, '"');
            
            if (k === 'Description') {
                const $temp = cheerio.load(val);
                g[k] = $temp.text().trim().replace(/\?"/g, '—');
            } else {
                g[k] = val.trim();
            }
        }
    });
});

fs.writeFileSync(path.join(__dirname, 'src/data/newsletters/aug-24-28-2026.json'), JSON.stringify(results, null, 2));
console.log('Saved to src/data/newsletters/aug-24-28-2026.json');
