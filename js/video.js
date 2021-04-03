var video;

window.addEventListener("load", function() {
	video = document.querySelector(#player1);
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	let vol = document.querySelector(#volume).innerHTML = video.volume * 100 + '%';
	//check with gsi if you can declare with let like that?????
});


document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false)
	{
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	} 
	else 
	{
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
});


document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.95;
	console.log("Speed is " + video.playbackRate);
});


//for faster, just multiple vs divide, does this not compound/regress

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate / 0.95;
	console.log("Speed is " + video.playbackRate);
});



document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 15 < video.duration)
	{
		video.currentTime = video.currentTime + 15;
		console.log(video.currentTime);
	} 
	else 
	{
		console.log("Going back to the beginning");
		video.currentTime = 0;
		console.log(video.currentTime);
	}
});

	
	




