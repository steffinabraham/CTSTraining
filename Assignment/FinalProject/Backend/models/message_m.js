const mongoose = require("mongoose")

const message_master = mongoose.model('message_master', new mongoose.Schema({
  email_id:  {type: String, required: true},
  user_message: {type: String, required: true}
},{strict: true}))

module.exports = message_master