let clicks = 0;
function addOneToCounter() {
    if (GameOver) {
        return;
    }
    clicks += 1;
    document.getElementById("counter").innerText = `${clicks} cookies`;
}

let time = 0;
let level = 1;
let GameOver = false;
function oneIteration() {
    time += 1;
    if ((time % 10) == 0) {
        if ((clicks/time).toFixed(2) < 1) {
            document.getElementById("counter").innerText = "Game Over";
            document.getElementById("speed").style.display = "none";
            document.getElementById("level").style.display = "none";
            GameOver = true;
        } else {
            level += 1;
            document.getElementById("level").innerText = `Level ${level}`;
            const cookie = document.getElementById("cookie");
            cookie.style.width = `${cookie.width * .9}px`;
            cookie.style.height = `${cookie.width * .9}px`;
        }
    }
    document.getElementById("speed").innerText = `${(clicks/time).toFixed(2)} cookies per second`;
}

if (!GameOver) {
    const baseInterval = 1000;
    const decayFactor = .9;
    setInterval(oneIteration, 1000);
    const interval = Math.max(baseInterval * Math.pow(decayFactor, level - 1), 100);
    setInterval(moveCookie, interval);
}

function moveCookie() {
    if (GameOver) {
        return;
    }
    let cookie = document.getElementById("cookie");
    let x = Math.floor(Math.random() * (window.innerWidth - cookie.width)); 
    let y = Math.floor(Math.random() * (window.innerHeight - cookie.height));
    cookie.style.left = `${x}px`;
    cookie.style.top = `${y}px`;
    cookie.style.position = 'absolute';
}


function resetGame() {
    time = 0;
    level = 1;
    GameOver = false;
    clicks = 0;
    document.getElementById("counter").innerText = `${clicks} cookies`;
    document.getElementById("speed").style.display = "block";
    document.getElementById("speed").innerText = `0.00 cookies per second`;
    document.getElementById("level").style.display = "block";
    document.getElementById("level").innerText = `Level 1`;
    const cookie = document.getElementById("cookie");
    cookie.style.width = '400px';
    cookie.style.height = '400px';
}
