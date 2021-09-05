const audio = document.getElementById("audio");
const playbutton = document.getElementById("play");

const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');


window.onload = () => {audio.volume = .5; console.log(audio.volume);};

let playpause = () => {
    if (playbutton.className == "fa fa-play") {
        audio.play();
        playbutton.className = "fa fa-pause";
    } else {
        audio.pause();
        playbutton.className = "fa fa-play";
    }
}

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

// Update progress bar
function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}
  
  // Set progress bar
  function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
  
    audio.currentTime = (clickX / width) * duration;
}

// Time/song update
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);