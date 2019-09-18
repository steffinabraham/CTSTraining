const fs = require('fs');
const file = fs.createWriteStream('./big.file');

for(let i=0; i<= 1e6; i++)
{
    file.write( charcode = "i");
}

file.end();

