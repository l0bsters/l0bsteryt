var express = require('express');
var app = express();
var ytcall = require('youtube-api-v3-search');
var ytfunction = require('./lib/events.js');
var prompt = require('prompt');



prompt.get(['song'], function (err, result) {
    if (err) { return onErr(err); }
    console.log('Command-line input received:');
    console.log('  S0ng: ' + result.song);
    ytfunction.ytresults(result.song)
});

function onErr(err) {
    console.log(err);
    return 1;
}

	//var song = process.env.input;
	//var song = 'https://www.youtube.com/watch?v=D74gejJX3QU&list=RDD74gejJX3QU&start_radio=1'
	//console.log(song);
	//ytfunction.ytresults(song);
	//ytfunction.ytdownload(song);


