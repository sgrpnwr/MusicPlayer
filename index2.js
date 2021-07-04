var songs = [
  {
    name:"Georgia.mp3",
    artist:"Vance Joy",
    title:"Georgia"
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

  {
    name:"Alag_Aasmaan.mp3",
    artist:"Anuv Jain",
    title:"Alag Aasmaan"
  }

  ];
  $(".album_cover").attr("src",songs[0].name.replace("mp3","jpeg"));
  $(".track").html(songs[0].title);
  $(".artist").html(songs[0].artist)

  $("body").on("keydown", function(e){
        if(e.keyCode == 32){
          if(isPlaying===false){
            $(".album_cover").slideDown(1000);

            playSong();
          }
          else if(isPlaying===true){
            $(".album_cover").slideUp(1000);

            pauseSong();
          }
        }
});




let isPlaying=false;
var i=0;
var song=new Audio(songs[i].name);
$(".album_cover").slideUp();
// setTimeout(function(){$(".album_cover").slideDown();},400);
$(".album_cover").slideDown(1200);

$(".play-btn").click(function(){
if(isPlaying===false){
  $(".album_cover").slideDown(1000);

  playSong();
}
else if(isPlaying===true){
  $(".album_cover").slideUp(1000);

  pauseSong();
}


});
$(".next-btn").click(function(){
if(isPlaying===true){
  pauseSong();
}
i=(i+1)%songs.length;
song=new Audio(songs[i].name);
// console.log(song.duration);
$(".album_cover").attr("src",songs[i].name.replace("mp3","jpeg"));
$(".track").html(songs[i].title);
$(".artist").html(songs[i].artist)
// $(".album_cover").slideUp();
playSong();






});

$(".prev-btn").click(function(){
pauseSong();
i=(i-1+songs.length)%songs.length;
song=new Audio(songs[i].name);
$(".album_cover").attr("src",songs[i].name.replace("mp3","jpeg"));
$(".track").html(songs[i].title)
$(".artist").html(songs[i].artist)

playSong();
// console.log(song.duration);


});


function playSong(){
  isPlaying=true;

  $(".album_cover").slideDown(1000);
$(".wave").css("display","block")
  $(".album_cover").attr("src",songs[i].name.replace("mp3","jpeg"));
  $(".track").html(songs[i].title)
  $(".artist").html(songs[i].artist)
  song.play();
console.log(song);
  $(".play-btn").removeClass('far fa-play-circle');
  $(".play-btn").addClass('far fa-pause-circle');
  $(".play-btn").css("background-color","#9FE6A0");
  $("body").addClass("bg");

  setTimeout(function(){
$(".duration").html(Math.floor(song.duration/60)+":"+("0" + (Math.floor((song.duration/60 -Math.floor(song.duration/60))*60))).slice(-2));

  console.log(song.duration/60);},100);




setInterval(function(){
  // if(song.currentTime<60)

  $(".seconds").html(("0"+(((Math.floor(song.currentTime))+1))%60).slice(-2));
  $(".minutes").html(Math.floor((song.currentTime+1)/60));
  console.log(song.currentTime+1);
  console.log((song.currentTime+1)/60);
  var current_width=(song.currentTime/song.duration)*100;
  console.log(current_width);
  $("#progress").css("width",current_width+"%");
 }

,1000);

}


function pauseSong(){
isPlaying=false;
$(".wave").css("display","none");


song.pause();
$(".play-btn").removeClass('far fa-pause-circle');
$(".play-btn").addClass('far fa-play-circle');
$(".play-btn").css("background-color","#F5A962");
$("body").removeClass("bg");
}
