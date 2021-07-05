function myFunction(){
  // alert("Page loaded");
  

$("#loading").css("display","none");

// $(".album_cover").slideUp(400);
// $(".album_cover").slideDown(1200);

}
var songs = [
  {
    name:"Georgia.mp3",
    artist:"Vance Joy",
    title:"Georgia",
    time:"3:51",
    spotify_url:"https://open.spotify.com/track/6Fha6tXHkL3r9m9nNqQG8p?si=EPYPdhQsRjmwnn9O58G7lA&dl_branch=1"
  },

  {
    name:"Clocks.mp3",
    artist:"Coldplay",
    title:"Clocks",
    time:"5:09",
    spotify_url:"https://open.spotify.com/track/0BCPKOYdS2jbQ8iyB56Zns?si=0htA6WJFRWK5a-55NDBHWg&dl_branch=1",
  },
  {
    name:"Gully_Boy.mp3",
    artist:"MIDIval Punditz, Raghu Dixit",
    title:"Train Song",
    time:"3:59",
    spotify_url:"https://open.spotify.com/track/6SQDhaDMwLeRGHfyLb00d4?si=Ohh-Oe55T4eHzrxZyYYoFA&dl_branch=1"
  },
  {
    name:"LeapOfFaith.mp3",
    artist:"Christopher",
    title:"Leap of Faith",
    time:"3:50",
    spotify_url:"https://open.spotify.com/track/571B8LxRZwmG1S1YNfGq4Q?si=Amv1_expRlmDDufgS8dKMQ&dl_branch=1"
  },
  {
    name:"Brown_Mundey.mp3",
    artist:"AP Dhillon",
    title:"Brown Munde",
    time:"3:48",
    spotify_url:"https://open.spotify.com/track/58f4twRnbZOOVUhMUpplJ4?si=-9G6b8dvTDyu7bJN8pOjqQ&dl_branch=1"
  },

  {
    name:"Alag_Aasmaan.mp3",
    artist:"Anuv Jain",
    title:"Alag Aasmaan",
    time:"3:33",
    spotify_url:"https://open.spotify.com/track/74kCarkFBzXYXNkkYJIsG0?si=xfCdIEOqT-6kK6jjO4PF5A&dl_branch=1"
  }

  ];
  $(".album_cover").attr("src",songs[0].name.replace("mp3","jpeg"));
  $(".track").html(songs[0].title);
  $(".artist").html(songs[0].artist)
  $(".duration").html(songs[0].time);


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
var current_width;
var autoplay=true;
var onLoop=false;
$("#replay").click(function(){
  song.load();
playSong();
});
$("#Loop").click(function(){
  if(autoplay===true){
  autoplay=false
  onLoop=true;
$("#Loop").css("color","#558776")

}
  else if(autoplay===false){
  autoplay=true;
  onLoop=false;
  $("#Loop").css("color","wave.GIF")}


})



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
$(".album_cover").attr("src",songs[i].name.replace("mp3","jpeg"));
$(".track").html(songs[i].title);
$(".artist").html(songs[i].artist)
$(".duration").html(songs[i].time);

// $(".album_cover").slideUp();
$(".track").removeClass("wave");
$(".track").css("color","#343A40");


playSong();
current_width=(song.currentTime/song.duration)*100;
if((current_width)>0.1){
  $(".track").addClass("wave");
  $(".track").css("color","#FDFAF6");

}





});

$(".prev-btn").click(function(){
pauseSong();
i=(i-1+songs.length)%songs.length;
song=new Audio(songs[i].name);
$(".album_cover").attr("src",songs[i].name.replace("mp3","jpeg"));
$(".track").html(songs[i].title)
$(".artist").html(songs[i].artist)
$(".duration").html(songs[i].time);

$(".track").removeClass("wave");
$(".track").css("color","#343A40");


playSong();
current_width=(song.currentTime/song.duration)*100;
if((current_width)>0.1){
  $(".track").addClass("wave");
  $(".track").css("color","#FDFAF6");

}


});


function playSong(){
  isPlaying=true;

  $(".album_cover").slideDown(1000);
  $(".album_cover").attr("src",songs[i].name.replace("mp3","jpeg"));
  $(".track").html(songs[i].title)
  $(".artist").html(songs[i].artist)
  $(".duration").html(songs[i].time);

  song.play();
  $(".play-btn").removeClass('far fa-play-circle');
  $(".play-btn").addClass('far fa-pause-circle');
  $(".play-btn").css("background-color","#9FE6A0");
  $(".play-btn").attr("title","Pause");
  $("body").addClass("bg");



$(".duration").html(song.time);




setInterval(function(){
  // if(song.currentTime<60)

  $(".seconds").html(("0"+(((Math.floor(song.currentTime))+1))%60).slice(-2));
  $(".minutes").html(Math.floor((song.currentTime+1)/60));

  current_width=(song.currentTime/song.duration)*100;
  if((current_width)>0.1){
    if(isPlaying===true){
    $(".track").addClass("wave");
    $(".track").css("color","#F4CCA4");
  }}
  $("#progress").css("width",current_width+"%");
  if(song.ended){
    if(autoplay===true){
    if(isPlaying===true){
      pauseSong();
    }
    i=(i+1)%songs.length;
    song=new Audio(songs[i].name);
    $(".album_cover").attr("src",songs[i].name.replace("mp3","jpeg"));
    $(".track").html(songs[i].title);
    $(".artist").html(songs[i].artist)
    $(".duration").html(songs[i].time);

    // $(".album_cover").slideUp();
    playSong();
  }
else if(onLoop===true){

  playSong();
}}
 }

,1000);

}


function pauseSong(){
isPlaying=false;


song.pause();
$(".play-btn").removeClass('far fa-pause-circle');
$(".play-btn").addClass('far fa-play-circle');
$(".play-btn").css("background-color","#F5A962");
$(".play-btn").attr("title","Play");
$(".track").removeClass("wave");
$(".track").css("color","#343A40");


$("body").removeClass("bg");
}

// progress bar change current time--->

$("#progress_div").click(function(event){
  const a=event.target.clientWidth;

console.log(event);

  var fill_progress=(event.offsetX)/(event.target.clientWidth)*100;
  $("#progress").css("width",fill_progress+"%");
console.log(event.offsetX);
console.log(event.target.clientWidth);
console.log(a);
  var newTime=(fill_progress*song.duration)/100/60;
  var ans=(newTime-Math.trunc(newTime))*60;
  console.log("Minutes:"+Math.trunc(newTime));
  console.log("Seconds:"+("0"+Math.trunc(ans)).slice(-2));
  $(".minutes").html(Math.trunc(newTime))
  $(".seconds").html(("0"+Math.trunc(ans)).slice(-2))
  song.currentTime=(fill_progress*song.duration)/100;
})

$("a").click(function(){

$("a").attr("href",songs[i].spotify_url);

})

const checkwidth=song.currentTime/song.duration*100;

console.log();

// var liked=false;
// console.log(songs[i].name);
//*************-----Like button-----*********************

// $("#like").click(function(){
//   if(liked===false){
//   $("#like").removeClass("far fa-heart");
//   $("#like").addClass("fas fa-heart");
//   $("#like").css("color","343A40");
//   $("#like").css("opacity","0.8");
//
// liked=true;}
// else if(liked===true){
//   $("#like").removeClass("fas fa-heart");
//   $("#like").addClass("far fa-heart");
//   $("#like").css("color","black");
//   $("#like").css("opacity","1.0");
//
//   liked=false;
// }
//   // $("#like").css("border-radius","50%");
// })
