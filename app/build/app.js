'use strict';

// simple express server
var express = require('express');
var helmet = require('helmet');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');

/* Sets up body parser for post requests */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Helmet sets up the Express server to use super awesome security protocols */
app.use(helmet());

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
  var subject = req.body.subject;
  var message = req.body.message;
  console.log(name);
  console.log(email);
  console.log(subject);
  console.log(message);
  res.send('message sent!');
});

app.listen(1338);