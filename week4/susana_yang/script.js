function addOneToCounter(){
    document.getElementById("counter").innerText = parseInt(document.getElementById("counter").innerText) + 1
}

let startTime;
let clickCount = 0;
let speed = 0;
let isCatAngry = false;
let health = 100;

const image = document.getElementById("image");
const speedDisplay = document.getElementById("speedDisplay");
const healthBar = document.getElementById("healthBar");

image.addEventListener("click", function() {
    clickCount++;
    if (clickCount === 1) {
        startTime = new Date().getTime();
    } else {
        const timeElapsed = (new Date().getTime() - startTime) /1000;
        speed = clickCount /timeElapsed;
        if (speed < 0.8) {
            resetTest();
        }
        updateSpeed();
        
    }
    updateHealth();
    catAngry();
});

function catAngry() {
    let randomInt = Math.floor(Math.random() * 100);
    if (!isCatAngry) {
        if (speed > 8 || clickCount > randomInt + clickCount) {
            image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5jvbLGG_QhtbTqcsloRcJESOk_s77TKkTTQ&s";
            isCatAngry = true;
            health = health - (0.2 * health);
        }
    } else {
        image.src = "https://happycatshaven.org/wp-content/uploads/2019/07/PettingCatLeansInIvy2013sm.jpg";
        isCatAngry = false;
    }
}

function updateSpeed() {
    speedDisplay.textContent = speed.toFixed(2);
}

function updateHealth() {
    healthBar.textContent = health;
}

function resetTest() {
    clickCount = 0;
    startTime = undefined;
    speed = 0;
}

setInterval(updateSpeed, 1);