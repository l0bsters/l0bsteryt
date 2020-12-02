//the youtube api call event
var config = require('../config/creds.js');
const ytresults = async(song)=>{
	options = {
		q:song,
		type: "video",
		part: "snippet"
	}
	let result = await ytcall(config.youtubekey, options);
	var link = 'https://youtube.com/watch?v=' + result.items[0].id.videoId;
	console.log(link);
	return link;
}

module.exports = ytresults;

