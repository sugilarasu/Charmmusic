

let All_song = [
    {
      name: "Ennodu Nee Irundhaal",
      path: "music/ar 1.mp3",
      img: "img/ar.png",
      singer: "A. R. Rahman"
    },
    {
      name: " Moongil Thottam",
      path: "music/ar 2.mp3",
      img: "img/ar.png",
      singer: "A. R. Rahman"
    },

    {
      name: "Innum Konjam Naeram",
      path: "music/ar 3.mp3",
      img: "img/ar.png",
      singer: "A. R. Rahman"
    },
    {
      name: "Hosanna",
      path: "music/ar 4.mp3",
      img: "img/ar.png",
      singer: "A. R. Rahman"
    },
    {
      name: "",
      path: "music/ar 5.mp3",
      img: "img/ar.png",
      singer: "A. R. Rahman"
    },
    {
      name: "OMG ponnu",
      path: "music/ar 6.mp3",
      img: "img/ar.png",
      singer: "A. R. Rahman"
    },
    {
      name: "Usure Pogudhey",
      path: "music/ar 7.mp3",
      img: "img/ar.png",
      singer: "A. R. Rahman"
    },
    {
      name: "",
      path: "music/ar 8.mp3",
      img: "img/ar.png",
      singer: "A. R. Rahman"
    },
    {
      name: "",
      path: "music/ar 9.mp3",
      img: "img/ar.png",
      singer: "A. R. Rahman"
    },
    {
      name: "",
      path: "music/ar 10.mp3",
      img: "img/ar.png",
      singer: "A. R. Rahman"
    },
    {
      name: "",
      path: "",
      img: "img/ar.png",
      singer: "A. R. Rahman"
    },
    {
      name: "",
      path: "",
      img: "img/ar.png",
      singer: "A. R. Rahman"
    },
    {
      name: "",
      path: "",
      img: "img/ar.png",
      singer: "A. R. Rahman"
    },
    {
      name: "",
      path: "",
      img: "img/ar.png",
      singer: "A. R. Rahman"
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
 