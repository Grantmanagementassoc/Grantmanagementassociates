const fs = require('fs');
const path = require('path');

// 1. Get list of logos
const logosDir = path.join('public', 'logos');
const logoFiles = fs.existsSync(logosDir) ? fs.readdirSync(logosDir) : [];

// 2. Read the backup file
const backupContent = fs.readFileSync('src/data/clients_backup.ts', 'utf8');

let newContent = backupContent;

logoFiles.forEach(logoFile => {
    const clientName = path.parse(logoFile).name;
    const escapedName = clientName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp('(\"name\":\\s*\"' + escapedName + '\",)');
    
    newContent = newContent.replace(regex, '$1\n    \"image\": \"/logos/' + logoFile + '\",');
});

fs.writeFileSync('src/data/clients.ts', newContent);
console.log('Successfully updated clients.ts with logos!');
