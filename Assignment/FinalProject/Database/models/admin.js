const mongoose = require('mongoose');

var Admin = mongoose.model('Admin', {
    name: { type: String },
    skill: { type: String },
    experience: { type: Number },
    salary: { type: Number }
});

module.exports = { Admin };