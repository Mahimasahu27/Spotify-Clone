console.log("Welcome to  Spotify");
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Barishon Mein ", filePath: "songs/1.mp3",coverpath:"cover/dil.png"},
    {songName: "Dil To Pagal Hai", filePath: "songs/2.mp3"},
    {songName: "Kabhi Tumhe", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Hum Tum", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Mera Naam Tu", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Saari Ki Saari", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "As It Was", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bones", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Main Hoon Na", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Levitating", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
    {songName: "Main Yaha Hoon", filePath: "songs/11.mp3", coverPath: "covers/10.jpg"},
    {songName: "Tum Se Hi", filePath: "songs/12.mp3", coverPath: "covers/10.jpg"},
    {songName: "Let Me Love You", filePath: "songs/13.mp3", coverPath: "covers/10.jpg"},
    {songName: "Phir Kabhi", filePath: "songs/14.mp3", coverPath: "covers/10.jpg"},
    {songName: "Ab Phirse Jab Baarish", filePath: "songs/15.mp3", coverPath: "covers/10.jpg"},
    {songName: "Kal Hon Na Ho", filePath: "songs/16.mp3", coverPath: "covers/10.jpg"},
    {songName: "Tera Zikr", filePath: "songs/17.mp3", coverPath: "covers/10.jpg"},
    {songName: "Gul", filePath: "songs/18.mp3", coverPath: "covers/10.jpg"},
    {songName: "Shayad", filePath: "songs/19.mp3", coverPath: "covers/10.jpg"},
    {songName: "Senorita", filePath: "songs/20.mp3", coverPath: "covers/10.jpg"},
    {songName: "Bored", filePath: "songs/21.mp3", coverPath: "covers/10.jpg"},
    {songName: "Raataan Lambiyan", filePath: "songs/22.mp3", coverPath: "covers/10.jpg"},
    {songName: "Kesariya", filePath: "songs/23.mp3", coverPath: "covers/10.jpg"},
    {songName: "Maahi Ve", filePath: "songs/24.mp3", coverPath: "covers/10.jpg"},
    {songName: "Raanjhana", filePath: "songs/25.mp3", coverPath: "covers/10.jpg"},
    {songName: "Tere Naina", filePath: "songs/26.mp3", coverPath: "covers/10.jpg"},
    {songName: "Bijlee Bijlee", filePath: "songs/27.mp3", coverPath: "covers/10.jpg"},
    {songName: "Pyar Hota Kai Baar Hai", filePath: "songs/28.mp3", coverPath: "covers/10.jpg"},
    {songName: "Jhoome Jo Pathaan", filePath: "songs/29.mp3", coverPath: "covers/10.jpg"},
    {songName: "Akhiyan", filePath: "songs/30.mp3", coverPath: "covers/10.jpg"},
    {songName: "Chand Taare", filePath: "songs/31.mp3", coverPath: "covers/10.jpg"},
    {songName: "Tere Pyaar Me", filePath: "songs/32.mp3", coverPath: "covers/10.jpg"},
    {songName: "Jab Se Tere Naina", filePath: "songs/33.mp3", coverPath: "covers/10.jpg"},
    {songName: "Hawayein", filePath: "songs/34.mp3", coverPath: "covers/10.jpg"},
    
]

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
     
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
       
    }
})


   
//  Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
      
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=34){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})