var songs = [
  {
    name:"Georgia.mp3",
    artist:"Vance Joy",
    title:"Georgia",
    time:"3:50"
  },

  {
    name:"Clocks.mp3",
    artist:"Coldplay",
    title:"Clocks",
    time:"5:08"
  },
  {
    name:"Gully_Boy.mp3",
    artist:"MIDIval Punditz, Raghu Dixit",
    title:"Train Song",
    time:"3:58"
  },
  {
    name:"LeapOfFaith.mp3",
    artist:"Christopher",
    title:"Leap of Faith",
    time:"3:49"
  },
  {
    name:"Brown_Mundey.mp3",
    artist:"AP Dhillon",
    title:"Brown Munde",
    time:"3:47"
  },

  {
    name:"Alag_Aasmaan.mp3",
    artist:"Anuv Jain",
    title:"Alag Aasmaan",
    time:"3:32"
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
playSong();






});

$(".prev-btn").click(function(){
pauseSong();
i=(i-1+songs.length)%songs.length;
song=new Audio(songs[i].name);
$(".album_cover").attr("src",songs[i].name.replace("mp3","jpeg"));
$(".track").html(songs[i].title)
$(".artist").html(songs[i].artist)
$(".duration").html(songs[i].time);


playSong();


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
  $("body").addClass("bg");


$(".duration").html(song.time);




setInterval(function(){
  // if(song.currentTime<60)

  $(".seconds").html(("0"+(((Math.floor(song.currentTime))+1))%60).slice(-2));
  $(".minutes").html(Math.floor((song.currentTime+1)/60));

  var current_width=(song.currentTime/song.duration)*100;
  $("#progress").css("width",current_width+"%");
 }

,1000);

}


function pauseSong(){
isPlaying=false;


song.pause();
$(".play-btn").removeClass('far fa-pause-circle');
$(".play-btn").addClass('far fa-play-circle');
$(".play-btn").css("background-color","#F5A962");
$("body").removeClass("bg");
}
$("#progress_div").click(function(event){
console.log(event);
  var fill_progress=(event.offsetX)/(348)*100;
  $("#progress").css("width",fill_progress+"%");

  var newTime=(fill_progress*song.duration)/100/60;
  var ans=(newTime-Math.trunc(newTime))*60;
  song.currentTime=(fill_progress*song.duration)/100;
})
