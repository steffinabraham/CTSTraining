const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Admin } = require('../models/admin');


// => localhost:3000/admin/
router.get('/', (req, res) => {
    Admin.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Admin Details :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Admin.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Admin :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var adminObj = new Admin({
        name: req.body.name,
        skill: req.body.skill,
        experience: req.body.experience,
        salary: req.body.salary,
    });


    adminObj.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Admin Data Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var adminObj = {
        name: req.body.name,
        skill: req.body.skill,
        experience: req.body.experience,
        salary: req.body.salary,
    };
    Admin.findByIdAndUpdate(req.params.id, { $set: adminObj }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in admin Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Admin.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Admin Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;