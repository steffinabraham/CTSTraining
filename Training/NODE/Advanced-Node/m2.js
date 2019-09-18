exports.id = 'm1';

exports.content = [2];


exports.content.push(22);
exports.content.push(222);

const m2 = require('./m1');
console.log(m2);