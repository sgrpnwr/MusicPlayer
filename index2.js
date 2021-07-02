// alert("Hello!")
var songs = ["Alag_Aasmaan.mp3", "Clocks.mp3", "Gully_Boy.mp3", "LeapOfFaith.mp3", "Brown_Mundey.mp3"];

let isPlaying=false;
var i=0;
var song=new Audio(songs[i]);
$(".play-btn").click(function(){

if(isPlaying===false){
  playSong();
}
else if(isPlaying===true){
  pauseSong();
}


});
$(".next-btn").click(function(){
pauseSong();
i=(i+1)%songs.length;
song=new Audio(songs[i]);
$("img").attr("src",songs[i].replace("mp3","jpeg"));
playSong(song);

});
$(".prev-btn").click(function(){
pauseSong();
i=(i-1+songs.length)%songs.length;
song=new Audio(songs[i]);
$("img").attr("src",songs[i].replace("mp3","jpeg"));
playSong(song);


console.log(i);
});


function playSong(){
  isPlaying=true;
  console.log("Song is Playing");
  song.play();
  $(".play-btn").removeClass('far fa-play-circle');
  $(".play-btn").addClass('far fa-pause-circle');
  $(".play-btn").css("background-color","red");
  $("body").addClass("bg");
}
function pauseSong(){

isPlaying=false;
console.log("Song is Paused");
song.pause();
$(".play-btn").removeClass('far fa-pause-circle');
$(".play-btn").addClass('far fa-play-circle');
$(".play-btn").css("background-color","yellow");
$("body").removeClass("bg");




}
function nextSong(){




}
