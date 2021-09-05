// grabbing things from the html to use in the js
const audio = document.getElementById("audio");
const playbutton = document.getElementById("play");
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');

// setting the default volume to 50%
window.onload = () => {audio.volume = .5; console.log(audio.volume);};

// play/pause button functionality
let playpause = () => {
    if (playbutton.className == "fa fa-play") {
        audio.play();
        playbutton.className = "fa fa-pause";
    } else {
        audio.pause();
        playbutton.className = "fa fa-play";
    }
}

// volume buttons functionality
let volup = () => {
    audio.volume += .1;
    console.log(audio.volume);
}

let voldown = () => {
    audio.volume -= .1;
    console.log(audio.volume);
}

let volmute = () => {
    audio.volume = 0;
    console.log(audio.volume);
}

// update the progress bar as the song goes on
function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}
  
// set the progress bar and song time when you click on a part of the bar
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
  
    audio.currentTime = (clickX / width) * duration;
}

// updates the song time and progress bar
audio.addEventListener('timeupdate', updateProgress);

// checks for user clicking the bar
progressContainer.addEventListener('click', setProgress);