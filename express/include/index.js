var express = require("express");
var app = express();

app.get('./components', function(req, res){
    res.render('content');

});

app.set('view', __dirname + '/views');
app.set('view engine', 'pug');

app.listen(3000);