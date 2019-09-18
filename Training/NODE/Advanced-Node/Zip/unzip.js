const crypto = require('crypto');  
const   fs = require('fs');
const   zlib = require('zlib');
const   file = process.argv[2];

const   {transform} = require('stream');

const   progress = new transform({
    transform(chunk, encoding, callback){
        process.stdout.write('.');
        callback(null, chunk);

    }
});

fs.createReadStream(file)
    .pipe(crypto.createDecipher('aes192', 'a-secret'))
    .pipe(zLib.createGunZip())
    .pipe(progress)
    .pipe(fs.createwriteStream(file.slice(0, -3)))
    .on('finish', () => console.log('Done'));