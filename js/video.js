var video = document.getElementById("player1");
console.log("Hello");

window.addEventListener("load", function() 
{
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() 
{
	console.log("Play Video");
	video.play();
	let vol = document.querySelector("#volume").innerHTML = video.volume * 100 + ' %';
});

document.querySelector("#pause").addEventListener("click", function() 
{
	console.log("Pause Video");
	video.pause();
});


document.querySelector("#vintage").addEventListener("click", function() 
{
	console.log('Vintage');
	video.className = "oldSchool";
});

document.querySelector("#orig").addEventListener("click", function() 
{
	console.log("Original");
	video.className = "video";
});

//are these the only changes from slower to faster methods?? ask GSI
document.querySelector("#slower").addEventListener("click", function() 
{
	video.playbackRate *= 0.95;
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() 
{
	video.playbackRate *= 1.05;
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() 
{
	if (video.currentTime + 15 >= video.duration)
	{
		video.currentTime = 0;
	} 
	else 
	{
		video.currentTime = video.currentTime + 15;
		console.log(video.currentTime);
	}
});

document.querySelector('#slider').addEventListener('change', function() 
{
	console.log(this.value / 100);
	video.volume = this.value / 100;
	let vol = document.querySelector("#volume").innerHTML = video.volume * 100 + '%';
});


document.querySelector("#mute").addEventListener("click", function() 
{
	if (video.muted == false){
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	} else {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
});



