var express = require('express');
var app = express();
var ytcall = require('youtube-api-v3-search');
var ytfunction = require('./lib/events.js');
var prompt = require('prompt');



prompt.get(['song'], function (err, result) {
    if (err) { return onErr(err); }
    if(result.song){
        console.log("there was input" , result.song);
        ytfunction.ytresults(result.song);
    }else{
        console.log('no input yet');
    }
});

function onErr(err) {
    console.log(err);
    return 1;
}








