const print = require('../frame-print');

print('Hello NPM');

module.exports = function print(msg) {

    console.log("************");
    console.log(msg);
    console.log("*************");
    
};