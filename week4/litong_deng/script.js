var clicks = 0;
var isFirstClick = true; 
var firstClick;
var canMove = false;
var hasLimit = false;

function addOneToCounter() {
    document.getElementById("counter").innerText = parseInt(document.getElementById("counter").innerText) + 1;
    clicks++;
    calculateSpeed();
    if (isFirstClick) {
        isFirstClick = false;
    }
    if (canMove) {
        move();
    }
}

var speedThreshold = Math.floor((Math.random() * 3) + 2);
function calculateSpeed() {
    if (isFirstClick) {
        firstClick = new Date().getTime();
        document.getElementById("speed").innerText = 1;
        return;
    }
    let speed = 1000 * (clicks / (new Date().getTime() - firstClick));
    document.getElementById("speed").innerText = speed;
    if (hasLimit && speed > speedThreshold) {
        document.getElementById("counter").innerText = 0;
        alert("Your click speed exceeded the speed limit of " + speedThreshold + " clicks per second! Unfortunately, your cookie counter has been reset :( The speed limit has been reset to another random number.");
        speedThreshold = Math.floor((Math.random() * 3) + 2); // integer from 2 (inclusive) to 5 (exclusive)
    }
}

var match = Math.floor(Math.random() * 5); // integer from 0 to 9
function move() {
    var move = Math.floor(Math.random() * 5);
    if (match == move) {
        let x = Math.random() * 100;
        let y = Math.random() * 100;
        document.getElementById("cookie").style.transform = `translate(${x}px, ${y}px)`;
    }
}

function toggleMovement() {
    canMove = !canMove;
    if (canMove) {
        alert("Your cookie now has a 20% chance of randomly moving after a click!");
    } else {
        alert("Your cookie will no longer move. Wimp.");
    }

}

function toggleSpeedLimit() {
    hasLimit = !hasLimit;
    if (hasLimit) {
        alert("If your click speed exceeds the speed limit (a randomly generated number between 2 and 4), your cookies will reset! Click wisely :)");
    } else {
        alert("No more speed limit. How lame.");
    }
}