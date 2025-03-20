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
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//      {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
//         music : ''
//     },
//     {
//         img : 'img/harrish.png',
//         artist : 'Harris Jayaraj',
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
    {
      name: "",
      path: "music/harish/7 Aum Arivu - Mun Andhi Video _ Suriya_ Shruti _ Harris Jayaraj(MP3_160K).mp3",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },
    {
      name: "",
      path: "music/harish/Aadhavan - Damakku Damakku Video _ Suriya(MP3_160K).mp3",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },
    {
      name: "",
      path: "music/harish/Aadhavan - Vaarayo Vaarayo Video _ Suriya(MP3_160K).mp3",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },
    {
      name: "",
      path: "music/harish/Aadhavan - Yeno Yeno Panithuli Video _ Suriya(MP3_160K).mp3",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },
    {
      name: "",
      path: "music/harish/Anegan - Danga Maari Oodhari Video _ Dhanush _ Harris _ Super Hit Dance Song(MP3_160K).mp3",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },
    {
      name: "",
      path: "music/harish/Anegan - Roja Kadale Video _ Dhanush _ Harris Jayaraj(MP3_160K).mp3",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },
  
    {
      name: "",
      path: "music/harish/Anegan - Thodu Vaanam Video _ Dhanush _ Harris Jayaraj(MP3_160K).mp3",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },
  
    {
      name: "",
      path: "music/harish/Chellamae Tamil Movie Video Songs _ Kadhalikkum Aasai Song _ Vishal _ Reema Sen _ Bharath(MP3_160K).mp3",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },
  
    {
      name: "",
      path: "music/harish/Enadhuyire Super Song _ Bheema _ Vikram _ Trisha _ Harris Jayaraj(MP3_160K).mp3",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },
  
    {
      name: "",
      path: "music/harish/Endrendrum Punnagai - Ennai Saaithaalae Video _ Harris Jayaraj(MP3_160K).mp3",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },
  
    {
      name: "",
      path: "music/harish/Engeyum Kaadhal - Dhimu Dhimu Video _ Jayam Ravi_ Hansika _ Harris(MP3_160K).mp3",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },
  
    {
      name: "",
      path: "music/harish/Engeyum Kaadhal - Nenjil Nenjil Video _ Jayam Ravi_ Hansika _ Harris(MP3_160K).mp3",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },
  
    {
      name: "",
      path: "music/harish/Engeyum Kaadhal - Lolita Video _ Jayam Ravi_ Hansika _ Harris(MP3_160K).mp3",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },
  
    {
      name: "",
      path: "music/harish/Engeyum Kaadhal - Thee Illai Video _ Jayam Ravi_ Hansika _ Harris Jayaraj(MP3_160K).mp3",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },
  
    {
      name: "",
      path: "music/harish/Irandaam Ulagam - Kani Mozhiyae Video _ Arya_ Anushka(MP3_160K).mp3",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },
  
    {
      name: "",
      path: "music/harish/Irandaam Ulagam - Mannavane Video _ Arya_ Anushka(MP3_160K).mp3",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },
  
    {
      name: "",
      path: "music/harish/Iru Mugan - Halena Video _ Vikram_ Nayanthara _ Harris Jayaraj _ Super Hit Song(MP3_160K).mp3",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },
  
    {
      name: "",
      path: "music/harish/Iru Mugan - Kannai Vittu Tamil Video _ Vikram_ Nayanthara _ Harris(MP3_160K).mp3",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },
  
    {
      name: "",
      path: "music/harish/Ko - Amali Thumali Video _ Jiiva_ Karthika _ Harris(MP3_160K).mp3",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },
  
    {
      name: "",
      path: "music/harish/Ko - Venpaniye Video _ Jiiva_ Karthika _ Harris(MP3_160K).mp3",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },
  
    {
      name: "",
      path: "music/harish/Maattrraan - Naani Koni Video _ Suriya_ Kajal Agarwal(MP3_160K).mp3",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },
  
    {
      name: "",
      path: "music/harish/Minnale _ Vaseegara song _ Bombay Jayashri _ Harris Jayaraj _ Gautham Vasudev Menon(MP3_160K).mp3",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },
  
    {
      name: "",
      path: "music/harish/Oru Kal Oru Kannadi - Azhage Azhage Video _ Udhayanidhi_ Hansika(MP3_160K).mp3",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },
  
    {
      name: "",
      path: "music/harish/Mudhal Mazhai Super Song _ Bheema _ Vikram _ Trisha _ Harris Jayaraj(MP3_160K).mp3",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },
  
    {
      name: "",
      path: "music/harish/Oru Mugamo Super Song _ Bheema _ Vikram _ Trisha _ Harris Jayaraj(MP3_160K).mp3",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },
  
    {
      name: "",
      path: "music/harish/Ragasiya Kanavugal Super Song _ Bheema _ Vikram _ Trisha _ Harris Jayaraj(MP3_160K).mp3",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },
  
    {
      name: "",
      path: "music/harish/Saamurai - Aagaya Sooriyanai song(MP3_160K).mp3",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },
  
    {
      name: "",
      path: "music/harish/Siru Paarvayale Song _ Bheema _ Vikram _ Trisha _ Harris Jayaraj(MP3_160K).mp3",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },
  
    {
      name: "",
      path: "music/harish/Suttum Vizhi Video Song - Ghajini _ Suriya _ Asin _ Nayanthara _ Harris Jayaraj _ A.R. Murugadoss(MP3_160K).mp3",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },
    {
      name: "",
      path: "music/harish/Vaaranam Aayiram - Adiyae Kolluthey Video _ Harris Jayaraj _ Suriya(MP3_160K).mp3",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },
    {
      name: "",
      path: "music/harish/Vaaranam Aayiram - Annul Maelae Video _ Harris Jayaraj _ Suriya(MP3_160K).mp3",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },
    {
      name: "",
      path: "music/harish/Vaaranam Aayiram - Ava Enna Video _ Harris Jayaraj _ Suriya(MP3_160K).mp3",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },
    {
      name: "",
      path: "music/harish/Vaaranam Aayiram - Mundhinam Video _ Harris Jayaraj _ Suriya(MP3_160K)_1.mp3",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },

    {
      name: "",
      path: "music/harish/Vaaranam Aayiram - Nenjukkul Peidhidum Video _ Harris Jayaraj _ Suriya(MP3_160K).mp3",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },
    {
      name: "",
      path: "music/harish/Vaaranam Aayiram - Yethi Yethi Video _ Harris Jayaraj _ Suriya(MP3_160K).mp3",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },
    {
      name: "",
      path: "music/harish/Vanamagan - Pachai Uduthiya Kaadu Lyric _ Jayam Ravi _ Harris Jayaraj(MP3_160K).mp3",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },
    {
      name: "",
      path: "music/harish/Vanamagan - Silu Silu Lyric_ Jayam Ravi _ Harris Jayaraj(MP3_160K).mp3",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },
    {
      name: "",
      path: "music/harish/Yennai Arindhaal - Mazhai Vara Pogudhae Video _ Ajith_ Harris Jayaraj(MP3_160K).mp3",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },
    {
      name: "",
      path: "",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },
    {
      name: "",
      path: "",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },
    {
      name: "",
      path: "",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },
    {
      name: "",
      path: "",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },
    {
      name: "",
      path: "",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },
    {
      name: "",
      path: "",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },
    {
      name: "",
      path: "",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },
    {
      name: "",
      path: "",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },
    {
      name: "",
      path: "",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },
    {
      name: "",
      path: "",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
    },
    {
      name: "",
      path: "",
      img: "img/harrish.png",
      singer: "Harris Jayaraj"
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
 