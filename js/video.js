var video = document.getElementById("player1");
console.log("Hello");

window.addEventListener("load", function() {
	video = document.querySelector(#player1);
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	let vol = document.querySelector(#volume).innerHTML = video.volume * 100 + '%';
	//check with gsi if you can declare with let like that?????
});


document.querySelector('#orig').addEventListener('click', function(){
	console.log("Original");
	video.classList.remove("oldSchool");

});

document.querySelector('#vintage').addEventListener('click', function(){
	console.log("Vintage");
	video.classList.remove("oldSchool");

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

document.querySelector("#slider").addEventListener ("change", function()
{
	console.log(this.value);
	var slider = this.value;
	video.volume = slider / 100;
	document.querySelector("#volume").innerHTML = video.volume*100+ '%'
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.95;
	console.log(video.playbackRate);
});


//for faster, just multiple vs divide, does this not compound/regress

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *= 1.95;
	console.log(video.playbackRate);
});



document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 15 < video.duration)
	{
		console.log(video.currentTime);
		video.currentTime += 15;
	} 
	else 
	{
		video.currentTime = 0;
	}
});

	
	




