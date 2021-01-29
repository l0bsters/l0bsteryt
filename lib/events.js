//the youtube api call event
var config = require('../config/creds.js');
var ytcall = require('youtube-api-v3-search');
const { exec } = require('child_process');
var nfzf = require('node-fzf');

//should i make this clean.... naw


const ytresults = async(song)=>{
	console.log('hit the function');
	options = {
		q: song,
		type: "video",
		part: "snippet"
	}
	if(song){
	console.log(options);
	let result = await ytcall(config.youtubekey, options);
	//console.log(result);
//    console.log(result[0].snippet);
    arrResults=[];
    for(i= 0; i < 5; i++){
     //       console.log(result.items[i].snippet.title);
            //arrResults.push(result.items[i].id.videoId);
		    arrResults.push(result.items[i].snippet.title);
	}	
     		const fzfresult = await nfzf( arrResults )
 
            const { selected, query } = fzfresult
			//this is the same as above
	       // const selected = fzfresult.selected.index
			//const query    = fzfresult.query
            if( !selected ) {
                    console.log( 'No matches for:', query )
            } else {
           //        console.log( selected.value ) // 'giraffe'
           //        console.log( selected.index ) // 1
           //        console.log( selected.value === arrResults.list[ selected.index ] ) // true
               }
      

//	var link = 'https://youtube.com/watch?v=' + result.items[0].snippet.title;
//	console.log('the selected test index');
//	console.log( 'https://youtube.com/watch?v=' + result.items[selected.index].id.videoId);

	return 'https://youtube.com/watch?v=' + result.items[selected.index].id.videoId;
	}
}

//ytresults();

const spawn = async(href)=>{
   
    console.log('right before the exec');
    var href = await ytresults();
    exec('mpv '+ href, (error, stdout, stderr) => {
    console.log(`the stdout', ${stdout}`);
    });
}
spawn(ytresults);

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

