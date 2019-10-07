const mongoose = require("mongoose")

const mentor_master = mongoose.model('mentor_master', new mongoose.Schema({
  mentor_name: {type: String, required: true, unique: false},
  email_id:  {type: String, required: true, unique: true },
  pass_word: {type: String, required: true, unique: false},
  status: { type: String,  required: false, unique: false}
},{strict: true}))

module.exports = mentor_master