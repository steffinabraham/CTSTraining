// const express = require('express')
const Standup = require('../../models/standup')
module.exports = function (router){
    router.get('/standup', function (req,res) {
        res.send("HelloThere!!!")
         
    })


router.post("/standup", function (req,res){
    let note = new Standup(req.body)
    note.save(function (err, note){
        if (err) {
            return res.status(400).json(err)

        }
        res.status(200).json(note)
    })
})
}