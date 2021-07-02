var songs = ["Brown_Mundey.mp3", "Clocks.mp3", "Sher.mp3", "LeapOfFaith.mp3", "Alag_Aasmaan.mp3"];

let isPlaying=false;
var i = 0;
// var sound=new Audio(songs[i]);

function pickupSong(){

var song=new Audio(songs[i]);
console.log(song);
if(i===4){
  i=-1;
}
i=i+1;
return song;
}



$(".play-btn").click(function() {

  // $("i").removeClass('far fa-play-circle');


  playPause();

})

$(".next-btn").click(function() {
if(isPlaying===true){
  isPlaying=false;
}
var nextSong=pickupSong();
playPause(nextSong);

})

function playPause(sound) {



  if (sound.paused) {
    isPlaying=true;
    sound.play();

    $("i").removeClass('far fa-play-circle');
    $("i").addClass('far fa-pause-circle');
    $(".play-btn").css("background-color","red");

  } else {
    sound.pause();
    isPlaying=false;
    $("i").removeClass('far fa-pause-circle');
    $("i").addClass('far fa-play-circle');
    $(".play-btn").css("background-color","yellow");
  }

}
