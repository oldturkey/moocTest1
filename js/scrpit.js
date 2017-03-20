window.onload=function() {
var music=document.getElementById("music");
var audio=document.getElementsByTagName("audio")[0];

music.onclick=function(){
	if (audio.plused) {
      audio.play();
	}
	else{
	audio.pause();
	};
};
};