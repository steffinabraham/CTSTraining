
const mongoose = require("mongoose")

const course_master = mongoose.model('course_master', new mongoose.Schema({
  course_name: {type: String},
  course_logo: {type: String},
  course_desc: {type: String},
  course_trainer: {type: String}

},{strict: true}))

module.exports = course_master;