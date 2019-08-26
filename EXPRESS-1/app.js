var express = require('express');

var app = express();

var port = process.env.port || 3000;

app.get('/', function (req, resp){

    resp.send('welcome to my API');

});

app.listen(port, function (){
    console.log("running on port:" + port);
});