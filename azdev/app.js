'use strict';

// simple express server
var express = require('express');
var app = express();
var router = express.Router();

/* Static assets, CSS, Images, etc. */
app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(1338);