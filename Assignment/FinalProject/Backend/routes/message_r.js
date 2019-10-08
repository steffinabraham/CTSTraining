const express     = require('express')
const bodyParser  = require('body-parser')
const message_router = express.Router()

message_router.use(bodyParser.urlencoded({extended: true}))
//message_router.use(bodyParser.json())
// message_router.get('/', (req, res)=> res.send(`Got '/message GET' Request`))// Keep for testing purpose

let message_controller = require('../controllers/message_c')

message_router.get("/",       message_controller.select_all)// Get all messages.
message_router.get("/:id",    message_controller.select1_by_id)// Get a selected message.
message_router.post("/",      message_controller.register)// Save an message Record Save Register Form data.
message_router.delete("/:id", message_controller.delete1)// Delete an message Record
module.exports = message_router