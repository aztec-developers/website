'use strict';

// simple express server
var express = require('express');
var app = express();
var router = express.Router();

/* Static assets, CSS, Images, bower components, etc. */
app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

/* Need to do this fuck. SSR as a backup to client shit. */
// app.get('/about', function(req, res) {
//     res.sendFile(__dirname + '/public/about.html');
// });

// app.get('/join', function(req, res) {
//     res.sendFile(__dirname + '/public/join.html');
// });

app.listen(1338);