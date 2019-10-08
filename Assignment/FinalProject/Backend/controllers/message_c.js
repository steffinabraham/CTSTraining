const jwt      = require('jsonwebtoken')// JSON Web Token to Secure REST APIs
let message_model = require('../models/message_m')
const config   = require('./../config/config')// config/config.js


module.exports = {
select_all: async (req, res)=>{// Get all messages
    try {
        let messages = await message_model.find().exec()
        res.send(messages)
    } catch(err) {
        res.status(500).send(err)
    }
},
select1_by_id: async (req, res)=>{// Get a selected message
    try {
        let message = await message_model.findById(req.params.id).exec()
        res.send(message)
    } catch(err) {
        res.status(500).send(err)
    }
},
register: async(req, res)=>{// Save an message Record
    try {
        console.log(req.body)
        let message   = new message_model(req.body)
        let result = await message.save()
        res.send(result)
    } catch(err) {
        res.status(500).send(err)
    }
},
delete1: async(req,res)=>{// Delete an message Record
    try {
        let result = await message_model.deleteOne({_id: req.params.id}).exec()
        res.send(result)
    } catch(err) {
        res.status(500).send(err)
    }
},
delete1: async(req,res)=>{
    try {
        let result = await message_model.deleteOne({_id: req.params.id}).exec()
        res.send(result)
    } catch(err) {
        res.status(500).send(err)
    }
}
}