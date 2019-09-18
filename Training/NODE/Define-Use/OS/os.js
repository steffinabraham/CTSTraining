const os = require('os');

console.log('OS Platform:',os.platform());

console.log('OS CPU Architecture',os.arch());


console.log('# of logical CPU cores',os.cpus().length);

console.log('Home directory for current user', os.homedir());

console.log('line 1' + os.EOL + 'line 2' + os.EOL + 'Line 3');