var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var access
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(express.static(__dirname+'/Views'));

app.get('/', function(request, response) {
	response.sendFile('index.html');
});

app.get('/auth',function(request,response) {
let sessionname = request.session.name;
if(sessionname)
{
    console.log("he;;");
}
response.send("Welcome back "+sessionname);
});


app.post('/auth',function(request,response) {
    request.session.name = request.body.username;
    response.send('Welcomee : ' +request.body.username);
});

/*
app.get('/home', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
}); */

app.listen(3000);