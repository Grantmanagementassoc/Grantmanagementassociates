const fs = require('fs');

function updateFile(path, replacements) {
    if (!fs.existsSync(path)) return;
    let content = fs.readFileSync(path, 'utf8');
    for (const r of replacements) {
        content = content.replace(r.from, r.to);
    }
    fs.writeFileSync(path, content);
}

updateFile('src/app/page.tsx', [
    { from: /src="\/images\/generated\/8\.png"/g, to: 'src="/images/generated/14.png"' },
    { from: /src="\/images\/generated\/4\.png"/g, to: 'src="/images/generated/7.png"' }
]);

updateFile('src/app/about/firm/page.tsx', [
    { from: /src="\/images\/generated\/2\.png"/g, to: 'src="/images/generated/9.png"' },
    { from: /src="\/images\/generated\/5\.png"/g, to: 'src="/images/generated/3.png"' }
]);

updateFile('src/app/about/team/page.tsx', [
    { from: /src="\/images\/generated\/3\.png"/g, to: 'src="/images/generated/11.png"' }
]);

updateFile('src/app/contact/page.tsx', [
    { from: /src="\/images\/generated\/7\.png"/g, to: 'src="/images/generated/13.png"' }
]);

console.log('Fixed hardcoded image references in .tsx files!');
