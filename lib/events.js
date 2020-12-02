//the youtube api call event
var config = require('../config/creds.js');
var ytcall = require('youtube-api-v3-search');

const ytresults = async(song)=>{
	console.log('hit the function');
	options = {
		q:song,
		type: "video",
		part: "snippet"
	}
	console.log(options);
	let result = await ytcall(config.youtubekey, options);
	console.log(result);
	var link = 'https://youtube.com/watch?v=' + result.items[0].id.videoId;
	console.log(link);
	return link;
}

module.exports = {
	ytresults
}

