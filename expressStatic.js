//https://stackoverflow.com/questions/5823722/how-to-serve-an-image-using-nodejs
//express.static, express, connect, http, net
var path = require('path');
var express = require('express');
var app = express();

var dir = path.join(__dirname, 'public');

app.use(express.static(dir));

app.listen(3000, function () {
    console.log('Listening on http://localhost:3000/');
});

