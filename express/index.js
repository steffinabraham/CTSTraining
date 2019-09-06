var express = require("express");
var cors = require('cors');
var app = express();

app.use(cors())
app.use('/things', function(req, res, next){
    console.log("A request for things recieved at" + new Date());
    next();

});

app.get('/things', function(req, res){
    res.json({'name' : 'pikachu'});
    res.send('things');

});

app.listen(3000);