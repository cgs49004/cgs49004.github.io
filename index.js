// start video at frame 0
var frameNumber = 0,

// lower numbers = faster playback
playbackConst = 300,

// select video element
vid = document.getElementById('v0');


// Use requestAnimationFrame for smooth playback
function scrollPlay(){
    var frameNumber  = window.scrollY/playbackConst;
    vid.currentTime  = frameNumber;
    window.requestAnimationFrame(scrollPlay);

    if (frameNumber > 8) {
        vid.style.display = "none";
    } else {
        vid.style.display = "inline-block";
    }

}

window.requestAnimationFrame(scrollPlay);