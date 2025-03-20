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
//         img : 'img/HIP2.png',
//         name : '',
//         artist : 'Hiphop Tamizha Adhi',
//         music : 'music/Azhage.mp3'
//     },
//     {
//         img : 'img/HIP2.png',
//         name : '',
//         artist : 'Hiphop Tamizha Adhi',
//         music : 'music/Breakup Song.mp3'
//     },
//     {
//         img : 'img/HIP2.png',
//         name : '',
//         artist : 'Hiphop Tamizha Adhi',
//         music : 'music/Erangi Vandhu.mp3'
//     },
//     {
//         img : 'img/HIP2.png',
//         name : '',
//         artist : 'Hiphop Tamizha Adhi',
//         music : 'music/Kadhal Oru Aagayam.mp3'
//     },
//     {
//         img : 'img/HIP2.png',
//         artist : 'Hiphop Tamizha Adhi',
//         music : 'music/Kadhalikathey.mp3'
//     },
//     {
//         img : 'img/HIP2.png',
//         artist : 'Hiphop Tamizha Adhi',
//         music : 'music/Kerala Song.mp3'
//     },
//     {
//         img : 'img/HIP2.png',
   
//         artist : 'Hiphop Tamizha Adhi',
//         music : 'music/Morattu Single.mp3'
//     },
//     {
//         img : 'img/HIP2.png',
//         artist : 'Hiphop Tamizha Adhi',
//         music : 'music/Mr.Local _ Nee Nenacha Song Lyric Video _ Sivakarthikeyan_ Nayanthara _ Hiphop Tamizha _ M. Rajesh(MP3_160K).mp3'
//     },
//     {
//         img : 'img/HIP2.png',
//         artist : 'Hiphop Tamizha Adhi',
//         music : 'music/Naan Konjam Karuppu Thaan.mp3'
//     },
//     {
//         img : 'img/HIP2.png',
//         artist : 'Hiphop Tamizha Adhi',
//         music : 'music/Nakkal Pudichavan.mp3'
//     },
//     {
//         img : 'img/HIP2.png',
//         artist : 'Hiphop Tamizha Adhi',
//         music : 'music/Neeyum Naanum Anbe.mp3'
//     },
// 




let All_song = [
  {
    name: "Azhage",
    path: "music/Azhage.mp3",
    img: "img/HIP2.png",
    singer: "Hiphop Tamizha Adhi"
  },
  {
    name: "Neeyum Naanum",
    path: "music/Neeyum Naanum Anbe.mp3",
    img: "img/HIP2.png",
    singer: "Hiphop Tamizha Adhi"
  },
  {
    name: "Nakkal Pudichavan",
    path: "music/Nakkal Pudichavan.mp3",
    img: "img/HIP2.png",
    singer: "Hiphop Tamizha Adhi"
  },
  {
    name: "Nee Nenacha",
    path: "music/Mr.Local _ Nee Nenacha Song Lyric Video _ Sivakarthikeyan_ Nayanthara _ Hiphop Tamizha _ M. Rajesh(MP3_160K).mp3",
    img: "img/HIP2.png",
    singer: "Hiphop Tamizha Adhi"
  },
  {
    name: "Breakup",
    path: "music/Breakup Song.mp3",
    img: "img/HIP2.png",
    singer: "Hiphop Tamizha Adhi"
  },
  {
    name: "Kerala",
    path: "music/Kerala Song.mp3",
    img: "img/HIP2.png",
    singer: "Hiphop Tamizha Adhi"
  },
  {
    name: "Naan Konjam Karuppu",
    path: "music/Naan Konjam Karuppu Thaan.mp3",
    img: "img/HIP2.png",
    singer: "Hiphop Tamizha Adhi"
  },
  {
    name: "Morattu Single",
    path: "music/Morattu Single.mp3",
    img: "img/HIP2.png",
    singer: "Hiphop Tamizha Adhi"
  },
  {
    name: "Erangi Vandhu",
    path: "music/Erangi Vandhu.mp3",
    img: "img/HIP2.png",
    singer: "Hiphop Tamizha Adhi"
  },
  {
    name: "Kadhal Oru Aagayam",
    path: "music/Kadhal Oru Aagayam.mp3",
    img: "img/HIP2.png",
    singer: "Hiphop Tamizha Adhi"
  },
  {
    name: "",
    path: "",
    img: "img/HIP2.png",
    singer: "Hiphop Tamizha Adhi"
  },
  {
    name: "",
    path: "",
    img: "img/HIP2.png",
    singer: "Hiphop Tamizha Adhi"
  },
  {
    name: "",
    path: "",
    img: "img/HIP2.png",
    singer: "Hiphop Tamizha Adhi"
  },
  {
    name: "",
    path: "",
    img: "img/HIP2.png",
    singer: "Hiphop Tamizha Adhi"
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