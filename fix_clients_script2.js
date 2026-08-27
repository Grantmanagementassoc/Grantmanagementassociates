const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 1. Get list of logos
const logosDir = path.join('public', 'logos');
const logoFiles = fs.existsSync(logosDir) ? fs.readdirSync(logosDir) : [];

// 2. Read the backup file straight from git
const backupContent = execSync('git show 74c90dc:src/data/clients.ts', { encoding: 'utf8' });

let newContent = backupContent;

logoFiles.forEach(logoFile => {
    const clientName = path.parse(logoFile).name;
    const escapedName = clientName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp('(\"name\":\\s*\"' + escapedName + '\",)');
    
    newContent = newContent.replace(regex, '$1\n    \"image\": \"/logos/' + logoFile + '\",');
});

fs.writeFileSync('src/data/clients.ts', newContent, 'utf8');
console.log('Successfully updated clients.ts with logos and preserved domains!');
