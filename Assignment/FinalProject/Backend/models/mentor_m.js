
const mongoose = require("mongoose")

const mentor_master = mongoose.model('mentor_master', new mongoose.Schema({
  mentor_name: {type: String, required: true, unique: true}
},{strict: true}))

module.exports = mentor_master;