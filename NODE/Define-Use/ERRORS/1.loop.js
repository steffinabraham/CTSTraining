const path = require ('path');
const fs = require('fs');

const files = ["text.txt", '.C:\test.txt'];


files.forEach(file => {
    try {
        const filePath = path.resolve(require('os').homedir(), file);
    const data = fs.readFileSync(filePath);
    console.log('file data is:',data);
    } catch (error) {
        console.log('File Not Found');
        
    }
    
});