console.log("welcome to Spotify")

//Initialize the variables
let songIndex = 0;

let masterPlay = document.getElementById('masterPlay');
let masterPlayPath = masterPlay.querySelector('path')
let songGif = document.getElementById('songGif')
let myProgressBar = document.getElementById('myProgressBar');
let progress = 0; //(for Progress)
let songItems = Array.from(document.getElementsByClassName('songItem'));

const gifImg = document.createElement("img");
        gifImg.src = 'song.gif';

document.addEventListener('DOMContentLoaded', () => {
    myProgressBar.value = 0;
})

let songs = [
    {songName: "Payphone", filePath: "Songs/Payphone.mp3", coverPath: "Covers/payphonecover.jpg"},
    {songName: "Midnight City", filePath: "Songs/Midnight City.mp3", coverPath: "Covers/midnightcity.jpg"},
    {songName: "Stayin Alive", filePath: "Songs/Stayin Alive.mp3", coverPath: "Covers/stayinalive.jpg"},
    {songName: "FE!N", filePath: "Songs/FE!N.mp3", coverPath: "Covers/fein.jpg"},
    {songName: "Sunset Jesus", filePath: "Songs/Sunset Jesus.mp3", coverPath: "Covers/sunsetjesus.jpeg"},
    {songName: "The Less I Know The Better", filePath: "Songs/The Less I Know The Better.mp3", coverPath: "Covers/theless.jpg"},
    {songName: "Baby Keem-16", filePath: "Songs/Baby Keem-16.mp3", coverPath: "Covers/babykeem16.jpg"},
    {songName: "Cheques", filePath: "Songs/Cheques.mp3", coverPath: "Covers/cheques.jpeg"}
]


let audioElement = new Audio(songs[0].filePath);
songIndex = 0;

songs.forEach((song, i) => {

    let track = new Audio();
    
    track.src = song.filePath;

    trackDuration = Array.from(document.getElementsByClassName('duration'));

    
    track.addEventListener('loadedmetadata', function(){
        let durationInSeconds = track.duration;
        let minutes = Math.floor(durationInSeconds / 60);
        let seconds = Math.floor(durationInSeconds % 60);
        
        // console.log("Duration: " + minutes + " minutes " + seconds + " seconds", song.songName);

        trackDuration[i].innerText = minutes + ':' + seconds;

    })


    
})


songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerHTML = songs[i].songName;
    
})

//handle Play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlayPath.setAttribute('d', 'M9 16h2V8H9zm4 0h2V8h-2zm-1 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8')
        
        songGif.style.opacity = 1;

        if(audioElement.src.includes("Songs/Payphone.mp3")){
            // document.getElementsByClassName("songItemPlay")[songIndex].querySelector('path').setAttribute('d', 'M9 16h2V8H9zm4 0h2V8h-2zm-1 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8');
            document.querySelector('#songInfoName').innerText = songs[0].songName;
        }
    }
   
    else {
        audioElement.pause();
        masterPlayPath.setAttribute('d', 'm9.5 16.5l7-4.5l-7-4.5zM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8')
        makeAllPlay();
        songGif.style.opacity = 0;
    }
})

//listen to Events
let isChangingProcess = false; //flag to check if there is user input or not
audioElement.addEventListener('timeupdate', ()=>{
    if(!isChangingProcess){
         //update seekbar
        progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
        myProgressBar.value = progress;
    }
})

myProgressBar.addEventListener('input', ()=>{
    isChangingProcess = true;
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
})

myProgressBar.addEventListener('change', () => {
    isChangingProcess = false;
})

function makeAllPlay() {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        // element.parentNode.removeChild(gifImg);
        element.querySelector("path").setAttribute('d', 'm9.5 16.5l7-4.5l-7-4.5zM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8');
    })
}

//handle play from list functionality

function playFromList() {Array.from(document.getElementsByClassName("songItemPlay")).forEach((element, i) => {
    element.addEventListener('click', (e)=>{
        makeAllPlay();
        songIndex = i;
        // e.currentTarget.querySelector('path').setAttribute('d', 'M9 16h2V8H9zm4 0h2V8h-2zm-1 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8');

        

        // e.currentTarget.parentNode.appendChild(gifImg);

        audioElement.src = songs[i].filePath;
        
        

        audioElement.currentTime = 0;
        audioElement.play();
        masterPlayPath.setAttribute('d', 'M9 16h2V8H9zm4 0h2V8h-2zm-1 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8')
        document.querySelector('#songInfoName').innerText = songs[i].songName;
        songGif.style.opacity = 1;
    })

})
}

playFromList();

//forward button
document.getElementById('forward').addEventListener('click', ()=>{
    if(songIndex>=7){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }

    makeAllPlay();

    // document.getElementsByClassName("songItemPlay")[songIndex].querySelector('path').setAttribute('d', 'M9 16h2V8H9zm4 0h2V8h-2zm-1 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8');

    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    
    masterPlayPath.setAttribute('d', 'M9 16h2V8H9zm4 0h2V8h-2zm-1 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8')
    document.querySelector('#songInfoName').innerText = songs[songIndex].songName;
    songGif.style.opacity = 1;
})

//backward Button
document.getElementById('backward').addEventListener('click', ()=>{
    if(songIndex==0){
        songIndex = 7;
    }
    else{
        songIndex -= 1;
    }

    makeAllPlay();

    // document.getElementsByClassName("songItemPlay")[songIndex].querySelector('path').setAttribute('d', 'M9 16h2V8H9zm4 0h2V8h-2zm-1 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8');

    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    
    masterPlayPath.setAttribute('d', 'M9 16h2V8H9zm4 0h2V8h-2zm-1 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8')
    document.querySelector('#songInfoName').innerText = songs[songIndex].songName;
    songGif.style.opacity = 1;
})