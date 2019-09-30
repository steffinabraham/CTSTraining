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
records_in_table_form: async (req, res)=>{// Get all courses & List in HTML Table
    try {
        let courses = await course_model.find().exec()
        let html = '<h1>course List</h1><table border="1" cellspacing="0" cellpadding="5"><tr><th>SrNo</th><th>_id</th><th>course Name</th><th>Email Id</th><th>Password</th></tr>'
        let serial_no = 1
        courses.forEach((record)=>{
            html += `<tr><td>${serial_no}</td><td>${record._id}</td><td>${record.user_name}</td><td>${record.email_id}</td><td>${record.pass_word}</td></tr>`
            serial_no++
        })
        html += '</table>'
        res.send(html)
    } catch(err) {
        res.status(500).send(err)
    }
},
select1_by_id: async (req, res)=>{// Get a selected course
    try {
        let course = await course_model.findById(req.params.id).exec()
        res.send(course)
    } catch(err) {
        res.status(500).send(err)
    }
},
register: async(req, res)=>{// Save an course Record
    try {
        console.log(req.body)
        let course   = new course_model(req.body)
        let result = await course.save()
        res.send(result)
    } catch(err) {
        res.status(500).send(err)
    }
},
authenticate: async(req, res)=>{// Check valid course or not
    try {
        console.log(req.body)
        let courses = await course_model.find({ email_id: req.body.email_id, pass_word: req.body.pass_word }).exec()
        //console.log(courses.length)
        //console.log(courses)
        if(courses.length == 1) {// Found course record for given email_id & pass_word
            res.send(create_token(req.body.email_id))// Send token to Frontend if a Valid course is Logging in
            //res.send("Valid course")
        } else {
            res.send("Invalid course")// course not found or he did not Register with us
        }
    } catch(err) {
        res.status(500).send(err)
    }
},
delete1: async(req,res)=>{// Delete an course Record
    try {
        let result = await course_model.deleteOne({_id: req.params.id}).exec()
        res.send(result)
    } catch(err) {
        res.status(500).send(err)
    }
},
update1: async(req, res)=>{// Update an course Record
    try {
        console.log("req.params.id : " + req.params.id)
        console.log("req.body")
        console.log(req.body)
        let filter = { _id: req.params.id };
        let update = { user_name: req.body.user_name, email_id: req.body.email_id, pass_word: req.body.pass_word };
        let result = await course_model.findOneAndUpdate(filter, update, {new: true});
        res.send(result)
    } catch(err) {
        res.status(500).send(err)
    }
}
}