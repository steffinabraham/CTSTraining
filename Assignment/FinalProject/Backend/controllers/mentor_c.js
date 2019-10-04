const jwt      = require('jsonwebtoken')// JSON Web Token to Secure REST APIs
let mentor_model = require('../models/mentor_m')
const config   = require('../config/config')// config/config.js

function create_token(email_id){
    // sign with default (HMAC SHA256)
    let expire_time =  Math.floor(Date.now() / 1000) + (config.jwt_token_valid * 60) // jwt_token_valid is in Minutes, so convert in to Seconds from now
    let token = jwt.sign({ email_id: email_id, exp: expire_time }, config.secret_word)
    return token
}

module.exports = {
select_all: async (req, res)=>{// Get all mentors
    try {
        let mentors = await mentor_model.find().exec()
        res.send(mentors)
    } catch(err) {
        res.status(500).send(err)
    }
},
records_in_table_form: async (req, res)=>{// Get all mentors & List in HTML Table
    try {
        let mentors = await mentor_model.find().exec()
        let html = '<h1>Mentor List</h1><table border="1" cellspacing="0" cellpadding="5"><tr><th>SrNo</th><th>_id</th><th>Mentor Name</th></tr>'
        let serial_no = 1
        mentors.forEach((record)=>{
            html += `<tr><td>${serial_no}</td><td>${record._id}</td><td>${record.mentor_name}</td></tr>`
            serial_no++
        })
        html += '</table>'
        res.send(html)
    } catch(err) {
        res.status(500).send(err)
    }
},

block1: async (req, res) => {// Update an user Record
    try {
        console.log("req.params.id : " + req.params.id)
        console.log("req.body")
        console.log(req.body)
        let filter = { _id: req.params.id };
        let update = { status: "blocked" };
        let result = await mentor_model.findOneAndUpdate(filter, update, { new: true });
        res.send(result)
    } catch (err) {
        res.status(500).send(err)
    }
},
unblock1: async (req, res) => {// Update an user Record
    try {
        console.log("req.params.id : " + req.params.id)
        console.log("req.body")
        console.log(req.body)
        let filter = { _id: req.params.id };
        let update = { status: "active" };
        let result = await mentor_model.findOneAndUpdate(filter, update, { new: true });
        res.send(result)
    } catch (err) {
        res.status(500).send(err)
    }
}
}
