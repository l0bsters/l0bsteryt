//the youtube api call event
var config = require('../config/creds.js');
var ytcall = require('youtube-api-v3-search');
const { exec } = require('child_process');

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

const ytdownload = async(song)=>{
    console.log(song);
	exec('youtube-dl --no-playlist '+ song, (err, stdout, stderr) => {
		if (err) {
		console.error(`exec error: ${err}`);
		return;
		}

		console.log(`the stdout' ${stdout}`);
	});
}


module.exports = {
	ytresults,
	ytdownload
}

