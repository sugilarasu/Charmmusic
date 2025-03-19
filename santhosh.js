

let All_song = [
    {
      name: "",
      path: "",
      img: "img/santhosh.png",
      singer: "Santhosh Narayanan"
    },
    {
      name: "",
      path: "",
      img: "img/santhosh.png",
      singer: "Santhosh Narayanan"
    },
    {
      name: "",
      path: "",
      img: "img/santhosh.png",
      singer: "Santhosh Narayanan"
    },
    {
      name: "",
      path: "",
      img: "img/santhosh.png",
      singer: "Santhosh Narayanan"
    },
    {
      name: "",
      path: "",
      img: "img/santhosh.png",
      singer: "Santhosh Narayanan"
    },
    {
      name: "",
      path: "",
      img: "img/santhosh.png",
      singer: "Santhosh Narayanan"
    },
    {
      name: "",
      path: "",
      img: "img/santhosh.png",
      singer: "Santhosh Narayanan"
    },
    {
      name: "",
      path: "",
      img: "img/santhosh.png",
      singer: "Santhosh Narayanan"
    },
    {
      name: "",
      path: "",
      img: "img/santhosh.png",
      singer: "Santhosh Narayanan"
    },
    {
      name: "",
      path: "",
      img: "img/santhosh.png",
      singer: "Santhosh Narayanan"
    },
    {
      name: "",
      path: "",
      img: "img/santhosh.png",
      singer: "Santhosh Narayanan"
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
 