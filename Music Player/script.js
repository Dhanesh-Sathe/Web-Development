const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("pogress-container");
const title = document.getElementById("title");
const cover = document.getElementById("cover");
// songs title
const songs = ["Hua Main", "Papa Meri Jaan", "Satranga", "Deva Deva", "Heeriye"];
// keep track on songs 
let songIndex = 0;
// Initially update song details into DOM
loadSong(songs[songIndex]);
// Update songs details
function loadSong(song) {
    title.innerText = song;
    audio.src = `./Music/${song}.mp3`;
    cover.src = `./Images/${song}.jpg`;
}
// Play song
function playSong() {
    musicContainer.classList.add("play");
    playBtn.querySelector("i.fa").classList.remove("fa-play");
    playBtn.querySelector("i.fa").classList.add("fa-pause");
    audio.play();
}
// Pause song
function pauseSong() {
    musicContainer.classList.remove("play");
    playBtn.querySelector("i.fa").classList.add("fa-play");
    playBtn.querySelector("i.fa").classList.remove("fa-pause");
    audio.pause();
}
// Previous Song
function prevSong() {
    songIndex--;
    if(songIndex < 0) {
        songIndex = songs.length -1;
    }
    loadSong(songs[songIndex]);
    playSong();
}
// Next song
function nextSong() {
    // if(songIndex == songs.length -1){
    //     loadSong(songs[0]);
    //     playSong();
    // }
    // songIndex++;
    // if(songIndex == songs.length -1) {
    //     loadSong(songs[songIndex]);
    //     playSong();
    //     songIndex = 0;
    // }
    // else {
    //     loadSong(songs[songIndex]);
    //     playSong();
    // }
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
}
// Update Progress Bar
function updateProgress(e) {
    const { duration, currenttime } = e.srcElement;
    const progressPerCent = (currentTime / duration)*100;
    progress.style.width = `${progressPerCent}%`;
}
// Set progress
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}
// Event Listeners
playBtn.addEventListener("click", () => {
    const isPlaying = musicContainer.classList.contains("play");
    if (isPlaying) {
        pauseSong();
    }
    else {
        playSong();
    }
});
// Change song
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
// Time/Song update
audio.addEventListener("timeupdate", updateProgress);
// Click on progress bar
progressContainer.addEventListener("click", setProgress);
// Song End
audio.addEventListener("ended", nextSong);