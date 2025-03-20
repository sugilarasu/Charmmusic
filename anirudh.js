

let All_song = [
    {
      name: "Arabic Kuthu",
      path: "music/Arabic Kuthu - Halamithi Habibo.mp3",
      img: "img/ani.png",
      singer: "Anirudh Ravichander"
    },
    {
        name: "Badass",
        path: "music/Badass.mp3",
        img: "img/ani.png",
        singer: "Anirudh Ravichander"
      },
      {
        name: "Bae",
        path: "music/Bae (From Don).mp3",
        img: "img/ani.png",
        singer: "Anirudh Ravichander"
      },  
      {
        name: "Dippam Dappam.mp3",
        path: "music/Dippam Dappam.mp3",
        img: "img/ani.png",
        singer: "Anirudh Ravichander"
      },  
      {
        name: "Kaavaalaa",
        path: "music/Kaavaalaa.mp3",
        img: "img/ani.png",
        singer: "Anirudh Ravichander"
      },  
      {
        name: "Kadharalz",
        path: "music/Kadharalz.mp3",
        img: "img/ani.png",
        singer: "Anirudh Ravichander"
      },  
      {
        name: "Thaai Kelavi",
        path: "music/Thaai Kelavi.mp3",
        img: "img/ani.png",
        singer: "Anirudh Ravichander"
      },  
      {
        name: "Two Two Two",
        path: "music/Two Two Two.mp3",
        img: "img/ani.png",
        singer: "Anirudh Ravichander"
      },  
      {
        name: "Private Party",
        path: "music/Private Party.mp3",
        img: "img/ani.png",
        singer: "Anirudh Ravichander"
      },  
      {
        name: "Open the Tasmac",
        path: "music/Open the Tasmac.mp3",
        img: "img/ani.png",
        singer: "Anirudh Ravichander"
      },  
      {
        name: "Takkunu Takkunu",
        path: "Takkunu Takkunu.mp3",
        img: "img/ani.png",
        singer: "Anirudh Ravichander"
      },  
      {
        name: "",
        path: "",
        img: "img/ani.png",
        singer: "Anirudh Ravichander"
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
 