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
//         img : 'img/spb.png',
//         artist : 'S. P. Balasubrahmanyam',

//     },
//     {
//         img : 'img/spb.png',
//         artist : 'S. P. Balasubrahmanyam',
//         music : ''
//     },
//     {
//         img : 'img/spb.png',
//         artist : 'S. P. Balasubrahmanyam',
//         music : ''
//     },
//     {
//         img : 'img/spb.png',
//         artist : 'S. P. Balasubrahmanyam',
//         music : ''
//     },
//     {
//         img : 'img/spb.png',
//         artist : 'S. P. Balasubrahmanyam',
//         music : ''
//     },
//     {
//         img : 'img/spb.png',
//         artist : 'S. P. Balasubrahmanyam',
//         music : ''
//     },
//     {
//         img : 'img/spb.png',
//         artist : 'S. P. Balasubrahmanyam',
//         music : ''
//     },
//     {
//         img : 'img/spb.png',
//         artist : 'S. P. Balasubrahmanyam',
//         music : ''
//     },
    
// ];

// loadTrack(track_index);

// function loadTrack(track_index){
//     clearInterval(updateTimer);
//     reset();

//     curr_track.src = music_list[track_index].music;
//     curr_track.load();

//     track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
//     track_name.textContent = music_list[track_index].name;
//     track_artist.textContent = music_list[track_index].artist;
//     now_playing.textContent = "Playing music " + (track_index + 1) + " of " + music_list.length;

//     updateTimer = setInterval(setUpdate, 1000);

//     curr_track.addEventListener('ended', nextTrack);
//     random_bg_color();
// }

// function random_bg_color(){
//     let hex = ['img/bg2.gif'];
//     let a;

//     function populate(a){
//         for(let i=0; i<6; i++){
//             let x = Math.round(Math.random() * 14);
//             let y = hex[x];
//             a += y;
//         }
//         return a;
//     }
//     let Color1 = populate('#');
//     let Color2 = populate('#');
//     var angle = 'to right';

//     let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
//     document.body.style.background = gradient;
// }
// function reset(){
//     curr_time.textContent = "00:00";
//     total_duration.textContent = "00:00";
//     seek_slider.value = 0;
// }
// function randomTrack(){
//     isRandom ? pauseRandom() : playRandom();
// }
// function playRandom(){
//     isRandom = true;
//     randomIcon.classList.add('randomActive');
// }
// function pauseRandom(){
//     isRandom = false;
//     randomIcon.classList.remove('randomActive');
// }
// function repeatTrack(){
//     let current_index = track_index;
//     loadTrack(current_index);
//     playTrack();
// }
// function playpauseTrack(){
//     isPlaying ? pauseTrack() : playTrack();
// }
// function playTrack(){
//     curr_track.play();
//     isPlaying = true;
//     track_art.classList.add('rotate');
//     wave.classList.add('loader');
//     playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
// }
// function pauseTrack(){
//     curr_track.pause();
//     isPlaying = false;
//     track_art.classList.remove('rotate');
//     wave.classList.remove('loader');
//     playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
// }
// function nextTrack(){
//     if(track_index < music_list.length - 1 && isRandom === false){
//         track_index += 1;
//     }else if(track_index < music_list.length - 1 && isRandom === true){
//         let random_index = Number.parseInt(Math.random() * music_list.length);
//         track_index = random_index;
//     }else{
//         track_index = 0;
//     }
//     loadTrack(track_index);
//     playTrack();
// }
// function prevTrack(){
//     if(track_index > 0){
//         track_index -= 1;
//     }else{
//         track_index = music_list.length -1;
//     }
//     loadTrack(track_index);
//     playTrack();
// }
// function seekTo(){
//     let seekto = curr_track.duration * (seek_slider.value / 100);
//     curr_track.currentTime = seekto;
// }
// function setVolume(){
//     curr_track.volume = volume_slider.value / 100;
// }
// function setUpdate(){
//     let seekPosition = 0;
//     if(!isNaN(curr_track.duration)){
//         seekPosition = curr_track.currentTime * (100 / curr_track.duration);
//         seek_slider.value = seekPosition;

//         let currentMinutes = Math.floor(curr_track.currentTime / 60);
//         let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
//         let durationMinutes = Math.floor(curr_track.duration / 60);
//         let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

//         if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
//         if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
//         if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
//         if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

//         curr_time.textContent = currentMinutes + ":" + currentSeconds;
//         total_duration.textContent = durationMinutes + ":" + durationSeconds;
//     }
// }

let All_song = [
    // {
    //   name: "",
    //   path: "music/என்னை தொட்டு அள்ளி கொண்ட மன்னன் பேரும் யென்னடி _ Ennai Thottu Alli Kond(MP3_1.mp3",
    //   img: "img/spb.png",
    //   singer: "S. P. Balasubrahmanyam"
    // },
    // {
    //   name: "",
    //   path: "music/என்னவென்று சொல்வதம்மா_ Rajakumaran_Super Hit Prabhu Meena Nadhiya Tamil Songs _Hornpipe Record Label(MP3_160K).mp3",
    //   img: "img/spb.png",
    //   singer: "S. P. Balasubrahmanyam"
    // },
    // {
    //   name: "",
    //   path: "music/Sundari Kannaal Oru Sethi Song HD _ Thalapathi _ சுந்தரி கண்ணால் ஒரு(MP3_160K).mp3",
    //   img: "img/spb.png",
    //   singer: "S. P. Balasubrahmanyam"
    // },
    // {
    //   name: "",
    //   path: "music/Thanni Thotti Thedi_ Super Hit Video Song_ Sindhu Bhairavi_ Sivakumar_ Sugasini(MP3_160K).mp3",
    //   img: "img/spb.png",
    //   singer: "S. P. Balasubrahmanyam"
    // },
    // {
    //   name: "",
    //   path: "music/Thendral Vanthu Theendumbothu Video Song _ Avatharam Tamil Movie Songs _ தென்றல் வந்து தீண்டும்போது(MP3_160K).mp3",
    //   img: "img/spb.png",
    //   singer: "S. P. Balasubrahmanyam"
    // },
    // {
    //   name: "",
    //   path: "",
    //   img: "img/spb.png",
    //   singer: "S. P. Balasubrahmanyam"
    // },
    // {
    //   name: "",
    //   path: "",
    //   img: "img/spb.png",
    //   singer: "S. P. Balasubrahmanyam"
    // },
    // {
    //   name: "",
    //   path: "music/Sathya _ Valai Osai _ Ilaiyaraaja _ S. P. Balasubrahmanyam_ Lata Mangeshkar _ Kamal Haasan(MP3_160K).mp3",
    //   img: "img/spb.png",
    //   singer: "S. P. Balasubrahmanyam"
    // },
    // {
    //   name: "",
    //   path: "music/Sangeetha Megam Video Song  - Udhaya Geetham  Sangeetha Megam Then - Ilayaraja SPB Tamil Hits(MP3_160K).mp3",
    //   img: "img/spb.png",
    //   singer: "S. P. Balasubrahmanyam"
    // },
    // {
    //   name: "",
    //   path: "music/Saamurai - Oru Nadhi song(MP3_160K).mp3",
    //   img: "img/spb.png",
    //   singer: "S. P. Balasubrahmanyam"
    // },
    // {
    //   name: "",
    //   path: "music/Saamurai - Aagaya Sooriyanai song(MP3_160K).mp3",
    //   img: "img/spb.png",
    //   singer: "S. P. Balasubrahmanyam"
    // },
    // {
    //   name: "",
    //   path: "music/Nenjukkule Innarendru Video Song _ Ponnumani Tamil Movie _ Karthik _ Soundarya _ Ilaiyaraaja(MP3_160K).mp3",
    //   img: "img/spb.png",
    //   singer: "S. P. Balasubrahmanyam"
    // },
    // {
    //   name: "",
    //   path: "music/neethane naal thorum - paaddu vaathiyaar - illaiyaraja(MP3_160K).mp3",
    //   img: "img/spb.png",
    //   singer: "S. P. Balasubrahmanyam"
    // },
    // {
    //   name: "",
    //   path: "music/naan pollathavan song _ polladhavan _ Rajini _ நான் பொல்லாதவன் பொய் சொல்லாதவன்(MP3_160K).mp3",
    //   img: "img/spb.png",
    //   singer: "S. P. Balasubrahmanyam"
    // },
    // {
    //   name: "",
    //   path: "music/Mohan Hits - Ilaya Nila Pozhigirathe HD Song 1(MP3_160K).mp3",
    //   img: "img/spb.png",
    //   singer: "S. P. Balasubrahmanyam"
    // },

    // {
    //   name: "",
    //   path: "music/Mandram Vandha Thendralukku Video Songs _ Tamil Songs _ Mouna Raagam _ Mohan_ Revathy(MP3_160K).mp3",
    //   img: "img/spb.png",
    //   singer: "S. P. Balasubrahmanyam"
    // },
    // {
    //   name: "",
    //   path: "music/Kannalanae Full Video Song _ Bombay Tamil Movie Songs _ Arvind Swamy _ Manirathnam _ AR Rahman(MP3_160K).mp3",
    //   img: "img/spb.png",
    //   singer: "S. P. Balasubrahmanyam"
    // },
    // {
    //   name: "",
    //   path: "music/kattukulle manasukkulle HD _ காட்டுக்குயிலே _ Thalapathy _ SPB _ Jesudas _ Ilaiyaraja(MP3_160K).mp3",
    //   img: "img/spb.png",
    //   singer: "S. P. Balasubrahmanyam"
    // },
    // {
    //   name: "",
    //   path: "music/Kadhalikum Pennin Video Song _ Kadhalan Movie Songs _ Prabhudeva _ Nagma _ SPB _ AR Rahman(MP3_160K).mp3",
    //   img: "img/spb.png",
    //   singer: "S. P. Balasubrahmanyam"
    // },
    // {
    //   name: "",
    //   path: "music/Kadhalenum _ Kadhalar Dhinam _ A.R.Rahman _ Kunal _ Sonali Bendre(MP3_160K).mp3",
    //   img: "img/spb.png",
    //   singer: "S. P. Balasubrahmanyam"
    // },
    {
      name: "",
      path: "",
      img: "img/spb.png",
      singer: "S. P. Balasubrahmanyam"
    },
    {
      name: "",
      path: "",
      img: "img/spb.png",
      singer: "S. P. Balasubrahmanyam"
    },
    {
      name: "",
      path: "",
      img: "img/spb.png",
      singer: "S. P. Balasubrahmanyam"
    },
    {
      name: "",
      path: "",
      img: "img/spb.png",
      singer: "S. P. Balasubrahmanyam"
    },
    {
      name: "",
      path: "",
      img: "img/spb.png",
      singer: "S. P. Balasubrahmanyam"
    },
    {
      name: "",
      path: "",
      img: "img/spb.png",
      singer: "S. P. Balasubrahmanyam"
    },
    {
      name: "",
      path: "",
      img: "img/spb.png",
      singer: "S. P. Balasubrahmanyam"
    },
    {
      name: "",
      path: "",
      img: "img/spb.png",
      singer: "S. P. Balasubrahmanyam"
    },
    {
      name: "",
      path: "",
      img: "img/spb.png",
      singer: "S. P. Balasubrahmanyam"
    },
    {
      name: "",
      path: "",
      img: "img/spb.png",
      singer: "S. P. Balasubrahmanyam"
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
 