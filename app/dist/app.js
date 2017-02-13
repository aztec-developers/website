<html><head><meta charset="UTF-8"></head><body>'use strict';

// simple express server
var express = require('express');
var app = express();
var router = express.Router();

/* Static assets, CSS, Images, bower components, etc. */
app.use(express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/public'));

// return index.html for all other routes
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(1338);</body></html>