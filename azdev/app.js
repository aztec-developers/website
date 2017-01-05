'use strict';

// simple express server
var express = require('express');
var app = express();
var router = express.Router();

app.use(express.static('public'));
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(1338);