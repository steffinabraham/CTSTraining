const mongoose = require('mongoose');
// const express=require('express')
// const app=express()
// const NodeJS=require('./NodeJS')
// app.set('port',(process.env.PORT)||8091)
// app.use('/NodeJS',NodeJS)
mongoose.connect('mongodb://localhost:27017/CrudDB',  {useUnifiedTopology: true, useNewUrlParser: true},  (err) => {
    if (!err)
        console.log('MongoDB connection succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;