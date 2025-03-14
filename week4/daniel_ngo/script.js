function addToCount() {
    text = document.getElementById("count").innerText;
    if (text == "1") {
        document.getElementById("cookieString").innerText = "Cookie";
    }
    else {
        document.getElementById("cookieString").innerText = "Cookies";
    }
    document.getElementById("count").innerText = parseInt(text) + 1;
}

var started, resetTimeoutHandle, resetTimeout = 1000,
    cps = document.getElementById('cps'),
    cookie = document.getElementById('cookie'),
    clicks = 0;
    clickValue = 1;

cookie.onselectstart = function() {
    return false;
};

function clicksPerSecond(started, clicks) {
    timeElapsed = (new Date()) - started;
    if (timeElapsed > 0) {
        cpsResult = clicks / timeElapsed * 1000;
        return Math.round(cpsResult * 100) / 100;
    } else {
        return 0;
    }
}

function count() {
    clearTimeout(resetTimeoutHandle);
    clicks++;
    cps.innerText = clicksPerSecond(started, clicks);
    resetTimeoutHandle = setTimeout(reset, resetTimeout);
    return false;
}

function start() {
    started = new Date();
    clicks = 0;
    cookie.onmousedown = count;
    count();
    // this.onmousedown();
    // return false;
}

function reset() {
    clicks = 0;
    cps.innerText = "0"
    cookie.onmousedown = start;
}


function cookieAnimation() {
    let clickText = document.createElement("span");
    clickText.innerText = "+ " + clickValue;
    clickText.classList.add("click-text");

    clickText.style.left = `${event.clientX}px`;
    clickText.style.top = `${event.clientY - 20}px`;

    document.body.appendChild(clickText);

    setTimeout(() => clickText.classList.add("move"), 50);
    setTimeout(() => clickText.remove(), 1000);
}

cookie.onmousedown = function (event) {
    addToCount();
    count();
    cookieAnimation(event);
}

reset();


// Store to buy clicks per second
// Animation for clicks
// Name bakery?