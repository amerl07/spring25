let lastClickTime = null;
let clickCount = 0;

const startBut = document.getElementById("startBut");
const endBut = document.getElementById("endBut")
let interval;
startBut.addEventListener("click", Start);

function Start() {
    appear();
    but.removeEventListener("click", Start);
    but.addEventListener("click", Stop);
}

function Stop() {
    disappear();
    but.removeEventListener("click", Stop);
    but.addEventListener("click", Start);
}


function buttonResponse(){
    clickCount ++;
    document.getElementById("counter").innerText = clickCount;
    currentTime = new Date().getTime();
    speed = getSpeed(currentTime);
    changeSpeed(speed);
    lastClickTime = currentTime;
    return 
}

function getSpeed(currentTime) {
    if (lastClickTime !== null) {
        const timeDiff = currentTime - lastClickTime;
        const clickSpeed = Math.round(1000/ timeDiff);
        console.log(clickSpeed);
        output.textContent = `Click Speed: ${clickSpeed.toFixed(2)} clicks per second`;
        return clickSpeed;
    }
}

function changeSpeed(speed) {
    let video = document.getElementById("bg_vid");
    video.playbackRate = speed;
    console.log("Playback speed changed to:", speed);
}