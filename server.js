var express = require('express');
var app = express();
var ytcall = require('youtube-api-v3-search');
var ytfunction = require('lib/events.js');

var song = process.ENV.input;

ytfunction(song);


