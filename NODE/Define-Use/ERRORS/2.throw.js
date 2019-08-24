const path = require ('path');
const fs = require('fs');

const files = ["text.txt", '.C:\test.txt'];


files.forEach(file => {
    try {
        const filePath = path.resolve(require('os').homedir(), file);
    const data = fs.readFileSync(filePath);
    console.log('file data is:',data);
    } catch (error) {
        if (error.code === 'ENOENT') {  //if the error is this kind the program will throw it away
            console.log('File Not Found');
        }else{
            throw error;
        }
    }
    
});