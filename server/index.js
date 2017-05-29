/*jshint esversion: 6*/
const express = require('express');
const app = require('./server/expressApp.js');
let server;
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

//To use bodyParser
app.use(bodyParser.json());

//To use methodOverride
app.use(methodOverride('_method'));

//To use static files
app.use( express.static('public'));

server = require('./server/server.js');