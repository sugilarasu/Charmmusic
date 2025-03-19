// let now_playing = document.querySelector('.now-playing');
// let track_art = document.querySelector('.track-art');
// let track_name = document.querySelector('.track-name');
// let track_artist = document.querySelector('.track-artist');

// let playpause_btn = document.querySelector('.playpause-track');
// let next_btn = document.querySelector('.next-track');
// let prev_btn = document.querySelector('.prev-track');

// let seek_slider = document.querySelector('.seek_slider');
// let volume_slider = document.querySelector('.volume_slider');
// let curr_time = document.querySelector('.current-time');
// let total_duration = document.querySelector('.total-duration');
// let wave = document.getElementById('wave');
// let randomIcon = document.querySelector('.fa-random');
// let curr_track = document.createElement('audio');

// let track_index = 0;
// let isPlaying = false;
// let isRandom = false;
// let updateTimer;

// const music_list = [
//     {
//    
//     '
//   
//
//    
let All_song = [
    {
      name: "",
      path: "music/Vaa Senthaazhini Video Song _ Adiyae _ G.V.Prakash Kumar_ Gouri Kishan _Justin Prabhakaran _ Vignesh(MP3_160K).mp3",
      img: "img/GV.png",
      singer: "G. V. Prakash Kumar"
    },
    {
      name: "",
      path: "music/Vaane Vaane - Video Song _ Amaran _ Sivakarthikeyan_ Sai Pallavi _ GV Prakash _ Rajkumar Periasamy(MP3_160K).mp3",
      img: "img/GV.png",
      singer: "G. V. Prakash Kumar"
    },
    {
      name: "",
      path: "music/Trisha Illana Nayanthara - Yennachu Yedhachu Video _ G.V. Prakash Kumar_ Anandhi(MP3_160K).mp3",
      img: "img/GV.png",
      singer: "G. V. Prakash Kumar"
    },
    {
      name: "",
      path: "'music/Pirai Thedum Iravilae Tamil Video Song _ Mayakkam Enna _ G.V. Prakash _ Dhanush_ Richa(MP3_160K).mp3",
      img: "img/GV.png",
      singer: "G. V. Prakash Kumar"
    },
    {
      name: "",
      path: "music/Madharasapattinam - Pookkal Pookkum Video _ Aarya_ Amy Jackson(MP3_160K).mp3",
      img: "img/GV.png",
      singer: "G. V. Prakash Kumar"
    },
    {
      name: "",
      path: "music/Jail - Kaathodu Kaathanen Video _ G.V. Prakash Kumar_ Abarnathy _ Dhanush(MP3_160K).mp3",
      img: "img/GV.png",
      singer: "G. V. Prakash Kumar"
    },
    {
      name: "",
      path: "music/Hey Minnale - Video Song _ Amaran _ Sivakarthikeyan_ Sai Pallavi _ GV Prakash _ Rajkumar Periasamy(MP3_160K).mp3",
      img: "img/GV.png",
      singer: "G. V. Prakash Kumar"
    },
    {
      name: "",
      path: "music/Anbe Anbe _ Full Song with Lyrics _ Darling(MP3_160K).mp3",
      img: "img/GV.png",
      singer: "G. V. Prakash Kumar"
    },
    {
      name: "",
      path: "usic/Golden Sparrow Lyric Video _ Dhanush _ Priyanka Mohan _ Pavish _ Anikha _ GV Prakash _NEEK(MP3_160K).mp3",
      img: "img/GV.png",
      singer: "G. V. Prakash Kumar"
    },
    {
      name: "",
      path: "music/Aadukalam - Otha Sollaala Tamil Lyric Video _ Dhanush _ G.V. Prakash Kumar(MP3_160K).mp3",
      img: "img/GV.png",
      singer: "G. V. Prakash Kumar"
    },
    {
      name: "",
      path: "music/Aadukalam - Ayyayo Tamil Lyric Video _ Dhanush _ G.V. Prakash Kumar(MP3_160K).mp3",
      img: "img/GV.png",
      singer: "G. V. Prakash Kumar"
    },
    {
      name: "",
      path: "",
      img: "img/GV.png",
      singer: "G. V. Prakash Kumar"
    },
    {
      name: "",
      path: "",
      img: "img/GV.png",
      singer: "G. V. Prakash Kumar"
    },
    {
      name: "",
      path: "",
      img: "img/GV.png",
      singer: "G. V. Prakash Kumar"
    },
    {
      name: "",
      path: "",
      img: "img/GV.png",
      singer: "G. V. Prakash Kumar"
    },
    {
      name: "",
      path: "",
      img: "img/GV.png",
      singer: "G. V. Prakash Kumar"
    },

    
    
 ];
 /*you can add more song & images from you computer*/
 
 
 /*tracks*/
 let tracks = document.querySelector('.tracks');
 
 //creating a list or generating Html
 for (let i = 0; i < All_song.length; i++) {
 
   let Html = ` <div class="song">
       <div class="img">
       <img src="${All_song[i].img}"/>
       </div>
       <div class="more">
       <audio src="${All_song[i].path}" id="music"></audio>
       <div class="song_info">
          <p id="title">${All_song[i].name}</p>
          <p>${All_song[i].singer}</p>
       </div>
       <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
       </div>
     </div>`;
 
   tracks.insertAdjacentHTML("beforeend", Html);
 };
 