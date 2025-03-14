let lastClickTime = 0;

function handleClick() {
    addOneToCounter();
    calculateClickSpeed();
}

function addOneToCounter(){
    document.getElementById("counter").innerText = parseInt(document.getElementById("counter").innerText) + 1
}

function calculateClickSpeed() {
    let currentTime = Date.now();

    if (lastClickTime !== 0) {
        let timeDiff = (currentTime - lastClickTime) / 1000;
        let cps = 1 / timeDiff;
        document.getElementById("result").innerText = `Click speed: ${cps.toFixed(2)} CPS`;
    }

    lastClickTime = currentTime;
}
