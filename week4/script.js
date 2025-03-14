let lastClickTime = 0;
let clickSpeed = 0;
let cookies = 0;
let autoclickers = 0;
let autoclickerCost = 5;
let multiplier = 1;
let multiplierCost = 10;

function addOneToCounter() {
    const counterElement = document.getElementById("counter");
    cookies += 1 * multiplier;
    counterElement.innerText = cookies;

    // Play click sound
    document.getElementById("clickSound").play();

    const currentTime = Date.now();
    if (lastClickTime !== 0) {
        const timeDifference = (currentTime - lastClickTime) / 1000;
        clickSpeed = (1 / timeDifference).toFixed(2);
    }
    lastClickTime = currentTime;
    document.getElementById("clickSpeed").innerText = `Speed: ${clickSpeed} clicks/sec`;

    moveCookie();
}

function buyAutoclicker() {
    if (cookies >= autoclickerCost) {
        cookies -= autoclickerCost;
        autoclickers++;
        autoclickerCost = Math.floor(autoclickerCost * 1.5);
        document.getElementById("autoclickerCost").innerText = autoclickerCost;
    }
}

setInterval(() => {
    cookies += autoclickers * multiplier;
    document.getElementById("counter").innerText = cookies;
}, 1000);

function buyMultiplier() {
    if (cookies >= multiplierCost) {
        cookies -= multiplierCost;
        multiplier *= 2;
        multiplierCost = Math.floor(multiplierCost * 1.5);
        document.getElementById("multiplierCost").innerText = multiplierCost;
    }
}

function moveCookie() {
    const cookie = document.getElementById("cookie");
    cookie.style.position = "absolute";
    cookie.style.left = Math.random() * window.innerWidth - 100 + "px";
    cookie.style.top = Math.random() * window.innerHeight - 100 + "px";
}

function changeBackground() {
    const colors = ["lightblue", "lightpink", "lightgreen", "lavender", "grey"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}
