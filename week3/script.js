let lastClickTime = 0;
let clickSpeed = 0;

function addOneToCounter(){

    const counterElement = document.getElementById("counter");
    counterElement.innerText = parseInt(counterElement.innerText)+1;

    const currentTime = Date.now();

    if (lastClickTime !== 0){
        const timeDifference = (currentTime - lastClickTime) / 1000;
        clickSpeed = (1/timeDifference).toFixed(2);
    }

    lastClickTime = currentTime;

    document.getElementById("clickSpeed").innerText = `Speed: ${clickSpeed} clicks/sec`;
}