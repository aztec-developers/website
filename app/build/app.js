'use strict';

// simple express server
var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Static assets, CSS, Images, bower components, etc. */
app.use(express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/public'));

// return index.html for all other routes
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/contact_us', function(req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  console.log(name);
  console.log(email);
  console.log(message);
  res.send('message sent!');
});

app.listen(1338);