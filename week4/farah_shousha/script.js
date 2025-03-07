function addOneToCounter(){
    document.getElementById("counter").innerText = parseInt(document.getElementById("counter").innerText) +1
}



// Calculates my clicks per minute
    clickCount++;
    if (clickCount === 1) {
        timeStarted = new Date(); // This tells us to start our timer when the first click is made
    } else {
        timePassed = new Date() - timeStarted; // this calculates the time passed
        CPM = (clickCount / (timePassed / 60000)).toFixed(2); // this is the clicks per minute
        display.textContent = `Clicks per minute: ${CPM}`; // this changes our display

        // Check for level up
        checkLevelUp(CPM);
    }


function checkLevelUp(currentCPM) {
    const requiredCPMForNextLevel = (currentLevel + 1) * 10; // each level needs 10 * the current level to level up

    if (currentCPM >= requiredCPMForNextLevel) {
        currentLevel++; // lebel up
        level.textContent = `Level: ${currentLevel}`; // changes level display
        alert(`Congratulations! ${currentLevel}!`); // tells the user
    }
}

// Initialize my variables 
let clickCount = 0;
let timeStarted;
let timePassed;
let CPM = 0;
let currentLevel = 0;

const button = document.getElementById("counter");
const display = document.getElementById("score");
const level = document.getElementById("level"); 
