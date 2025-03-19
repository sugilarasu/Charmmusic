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
//         img : 'img/u1.png',
//         artist : 'Yuvan Shankar Raja',
//         music : 'music/Paiya - En Kadhal Solla Video _ Karthi_ Tamannah _ Yuvan Shankar Raja(MP3_160K).mp3'
//     },
//     {
//         img : 'img/u1.png',
//         artist : 'Yuvan Shankar Raja',
//         music : 'music/Oru Kal Oru Kannadi - Video Song _ Siva Manasula Sakthi _ Yuvan Shankar Raja _ Jiiva _ Sun Music(M4A_128K).m4a'
//     },
//     {
//         img : 'img/u1.png',
//         artist : 'Yuvan Shankar Raja',
//         music : 'music/Kan Pesum Varthaigal Lyrics Song _ 7G Rainbow Colony _ Ravi Krishna _ Sonia Agarwal _ Yuvan(M4A_128K).m4a'
//     },
//     {
//         img : 'img/u1.png',
//         artist : 'Yuvan Shankar Raja',
//         music : 'music/Paiya - En Kadhal Solla Video _ Karthi_ Tamannah _ Yuvan Shankar Raja(MP3_160K).mp3'
//     },
//     {
//         img : 'img/u1.png',
//         artist : 'Yuvan Shankar Raja',
//         music : 'music/Arabu Naade - Lyrical _ Thottal Poo Malarum _ Yuvan Shankar Raja _ Haricharan _ Vaali(M4A_128K).m4a'
//     },
//     {
//         img : 'img/u1.png',
//         artist : 'Yuvan Shankar Raja',
//         music : 'music/Full Video_ MATTA _ The Greatest Of All Time _ Thalapathy Vijay _ Venkat Prabhu _Yuvan Shankar Raja(MP3_160K).mp3'
//     },
//     
// ];



let All_song = [
    {
      name: "",
      path: "music/Full Video_ MATTA _ The Greatest Of All Time _ Thalapathy Vijay _ Venkat Prabhu _Yuvan Shankar Raja(MP3_160K).mp3",
      img: "img/u1.png",
      singer: "Yuvan Shankar Raja"
    },
    {name: "",
             img : 'img/u1.png',
               singer : 'Yuvan Shankar Raja',
               path: 'music/Paiya - En Kadhal Solla Video _ Karthi_ Tamannah _ Yuvan Shankar Raja(MP3_160K).mp3'
         },
         { name: "",
              img : 'img/u1.png',
              singer : 'Yuvan Shankar Raja',
              path: 'music/Oru Kal Oru Kannadi - Video Song _ Siva Manasula Sakthi _ Yuvan Shankar Raja _ Jiiva _ Sun Music(M4A_128K).m4a'
           },
          {name: "",
               img : 'img/u1.png',
              singer : 'Yuvan Shankar Raja',
               path: 'music/Kan Pesum Varthaigal Lyrics Song _ 7G Rainbow Colony _ Ravi Krishna _ Sonia Agarwal _ Yuvan(M4A_128K).m4a'
          },
           {name: "",
              img : 'img/u1.png',
              singer : 'Yuvan Shankar Raja',
               path: 'music/Paiya - En Kadhal Solla Video _ Karthi_ Tamannah _ Yuvan Shankar Raja(MP3_160K).mp3'
         },
        {name: "",
              img : 'img/u1.png',
               singer : 'Yuvan Shankar Raja',
              path: 'music/Arabu Naade - Lyrical _ Thottal Poo Malarum _ Yuvan Shankar Raja _ Haricharan _ Vaali(M4A_128K).m4a'
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
 