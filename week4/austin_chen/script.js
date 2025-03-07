// Load sound effects
const winSound = new Audio("win.mp3");  
const loseSound = new Audio("lose.mp3"); 

function addOneToCounter() {
    const counterElement = document.getElementById("counter");
    let count = parseInt(counterElement.innerText) + 1;
    counterElement.innerText = count;

    const imageElement = document.getElementById("cookieImage");

    if (count % 10 === 0) {
        imageElement.classList.add("rgb-effect");
    } else {
        imageElement.classList.remove("rgb-effect");
    }
}

function placeBet() {
    const counterElement = document.getElementById("counter");
    const betInput = document.getElementById("betAmount");
    const imageElement = document.getElementById("cookieImage");

    let currentCookies = parseInt(counterElement.innerText);
    let betAmount = parseInt(betInput.value);

    if (isNaN(betAmount) || betAmount <= 0) {
        alert("Please enter a valid positive number to bet.");
        return;
    }
    
    if (betAmount > currentCookies) {
        alert("You don't have enough cookies to bet that amount!");
        return;
    }

    let win = Math.random() < 0.5;

    if (win) {
        currentCookies += betAmount;
        winSound.play();  
        imageElement.classList.add("win-animation");
    } else {
        currentCookies -= betAmount;
        loseSound.play(); 
        imageElement.classList.add("lose-animation");
    }

    counterElement.innerText = currentCookies;

    setTimeout(() => {
        imageElement.classList.remove("win-animation", "lose-animation");
    }, 1500);
}
