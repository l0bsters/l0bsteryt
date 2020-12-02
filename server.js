var express = require('express');
var app = express();
var ytcall = require('youtube-api-v3-search');
var ytfunction = require('./lib/events.js');


if (process.env.site == 'yt'){

	//var song = process.env.input;
	var song = 'https://www.youtube.com/watch?v=D74gejJX3QU&list=RDD74gejJX3QU&start_radio=1'
	//console.log(song);
	//ytfunction.ytresults(song);
	ytfunction.ytdownload(song);

}else if (process.env.site == 'ph'){
	console.log('nothing found');
}


