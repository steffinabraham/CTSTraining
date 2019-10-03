const jwt      = require('jsonwebtoken')// JSON Web Token to Secure REST APIs
let course_model = require('../models/course_m')
const config   = require('./../config/config')// config/config.js

function create_token(email_id){
    // sign with default (HMAC SHA256)
    let expire_time =  Math.floor(Date.now() / 1000) + (config.jwt_token_valid * 60) // jwt_token_valid is in Minutes, so convert in to Seconds from now
    let token = jwt.sign({ email_id: email_id, exp: expire_time }, config.secret_word)
    return token
}

module.exports = {
select_all: async (req, res)=>{// Get all courses
    try {
        let courses = await course_model.find().exec()
        res.send(courses)
    } catch(err) {
        res.status(500).send(err)
    }
},


// ----------------------------- SEARCH COURSE -----------------------------




// -------------------------------------------------------------------------
records_in_table_form: async (req, res)=>{// Get all courses & List in HTML Table
    try {
        let courses = await course_model.find().exec()
        let html = '<h1>Course List</h1><table border="1" cellspacing="0" cellpadding="5"><tr><th>SrNo</th><th>_id</th><th>Course Name</th></tr>'
        let serial_no = 1
        courses.forEach((record)=>{
            html += `<tr><td>${serial_no}</td><td>${record._id}</td><td>${record.course_name}</td></tr>`
            serial_no++
        })
        html += '</table>'
        res.send(html)
    } catch(err) {
        res.status(500).send(err)
    }
}
}
