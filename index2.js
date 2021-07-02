// alert("Hello!")
var songs = [
  {
    name:"Alag_Aasmaan.mp3",
    artist:"Anuv Jain",
    title:"Alag Aasmaan"
  },

  {
    name:"Clocks.mp3",
    artist:"Coldplay",
    title:"Clocks"
  },
  {
    name:"Gully_Boy.mp3",
    artist:"MIDIval Punditz, Raghu Dixit",
    title:"Train Song"
  },
  {
    name:"LeapOfFaith.mp3",
    artist:"Christopher",
    title:"Leap of Faith"
  },
  {
    name:"Brown_Mundey.mp3",
    artist:"AP Dhillon",
    title:"Brown Munde"
  },

  ];

let isPlaying=false;
var i=0;
var song=new Audio(songs[i].name);
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
song=new Audio(songs[i].name);
$("img").attr("src",songs[i].name.replace("mp3","jpeg"));
$(".track").html(songs[i].title);
$(".artist").html(songs[i].artist)

playSong(song);

});
$(".prev-btn").click(function(){
pauseSong();
i=(i-1+songs.length)%songs.length;
song=new Audio(songs[i].name);
$("img").attr("src",songs[i].name.replace("mp3","jpeg"));
$(".track").html(songs[i].title)
$(".artist").html(songs[i].artist)

playSong(song);


console.log(i);
});


function playSong(){
  isPlaying=true;
  console.log("Song is Playing");
  song.play();
  $(".play-btn").removeClass('far fa-play-circle');
  $(".play-btn").addClass('far fa-pause-circle');
  $(".play-btn").css("background-color","#9FE6A0");
  $("body").addClass("bg");


}
function pauseSong(){

isPlaying=false;
console.log("Song is Paused");
song.pause();
$(".play-btn").removeClass('far fa-pause-circle');
$(".play-btn").addClass('far fa-play-circle');
$(".play-btn").css("background-color","#F5A962");
$("body").removeClass("bg");




}
function nextSong(){




}
