const jwt      = require('jsonwebtoken')// JSON Web Token to Secure REST APIs
let course_model = require('../models/course_m')
const config   = require('./../config/config')// config/config.js

// function create_token(email_id){
//     // sign with default (HMAC SHA256)
//     let expire_time =  Math.floor(Date.now() / 1000) + (config.jwt_token_valid * 60) // jwt_token_valid is in Minutes, so convert in to Seconds from now
//     let token = jwt.sign({ email_id: email_id, exp: expire_time }, config.secret_word)
//     return token
// }

module.exports = {
select_all: async (req, res)=>{// Get all courses
    try {
        let courses = await course_model.find().exec()
        res.send(courses)
    } catch(err) {
        res.status(500).send(err)
    }
},
register: async(req, res)=>{// Save an user Record
    try {
        console.log(req.body)
        let course   = new course_model(req.body)
        let result = await course.save()
        res.send(result)
    } catch(err) {
        res.status(500).send(err)
    }
},
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
},
select_by_name: async (req, res)=>{// Get a selected user
    var string = req.params.course_name;
    var regex = new RegExp(["^", string].join(""), "i");

    try {
        let courses = await course_model.find({"course_name":regex}).exec()
        res.send(courses)
    } catch(err) {
        res.status(500).send(err)
    }
},
delete1: async(req,res)=>{
    try {
        let result = await course_model.deleteOne({_id: req.params.id}).exec()
        res.send(result)
    } catch(err) {
        res.status(500).send(err)
    }
},
update1: async(req, res)=>{
    try {
        console.log("req.params.id : " + req.params.id)
        console.log("req.body")
        console.log(req.body)
        let filter = { _id: req.params.id };
        let update = { course_name: req.body.course_name, trainer_name: req.body.trainer_name, course_logo: req.body.course_logo,  course_description: req.body.course_description};
        let result = await course_model.findOneAndUpdate(filter, update, {new: true});
        res.send(result)
    } catch(err) {
        res.status(500).send(err)
    }
}
}