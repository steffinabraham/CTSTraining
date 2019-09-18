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
    .pipe(zlib.createGzip())
    