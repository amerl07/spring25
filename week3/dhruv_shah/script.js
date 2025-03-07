function addOneToCounter(){
    document.getElementById("counter").innerText = parseInt(document.getElementById("counter").innerText) + 1
}

let lastCount = 0;
let latestCPS = 0;

setInterval(() => {
    let currentCount = parseInt(document.getElementById("counter").innerText);
    let cps = currentCount - lastCount;
    latestCPS = cps;

    lastCount = currentCount; // Update last count for next interval

    for(let clicker of clickers.values()){
        clicker.update();
    }

    document.getElementById("clicksPerSecond").innerText = cps;
    console.log("Clicks Per Second: " + cps);

}, 1000);

class Clicker {
    constructor(name, initialCost, costMultiplier, cps, quantity){
        this.name = name;  // ✅ Fix: Assign the correct name
        this.initialCost = initialCost;
        this.costMultiplier = costMultiplier;
        this.cps = cps;
        this.quantity = quantity;
    }

    buy(){
        let cost = this.initialCost * Math.pow(this.costMultiplier, this.quantity);
        let currentCount = parseInt(document.getElementById("counter").innerText);

        if(currentCount >= cost){
            document.getElementById("counter").innerText = currentCount - cost;
            this.quantity++;
            spawnBouncingImage(this.name);
        }
    }

    updateTotalCPS(){  // ✅ Renamed from updateCPS to avoid conflict
        document.getElementById("clicksPerSecond").innerText = 
            parseInt(document.getElementById("clicksPerSecond").innerText) + this.cps * this.quantity;

        document.getElementById("counter").innerText = parseInt(document.getElementById("counter").innerText) + this.cps * this.quantity;
    }

    updateCost(){
        document.getElementById(this.name + "Cost").innerText = 
            Math.floor(this.initialCost * Math.pow(this.costMultiplier, this.quantity));
    }

    updateQuantity(){
        document.getElementById(this.name + "Quantity").innerText = this.quantity;
    }

    updateIndividualCPS(){  // ✅ Renamed from updateCPS to avoid conflict
        document.getElementById(this.name + "CPS").innerText = this.cps * this.quantity;
    }

    update(){
        this.updateTotalCPS();
        this.updateCost();
        this.updateQuantity();
        this.updateIndividualCPS();  // ✅ Renamed to avoid conflict
    }
}

const clickers = new Map();

let bonusCPS = 0;

clickers.set("clicker", new Clicker("clicker", 15, 1.15, 1, 0));     // Small boost but keeps it affordable
clickers.set("doge", new Clicker("doge", 100, 1.13, 8, 0));         // Moderate CPS boost
clickers.set("capybara", new Clicker("capybara", 500, 1.12, 30, 0)); // Stronger, but costlier


for(let clicker of clickers.values()){
    clicker.update();
}

console.log(clickers);

function buyClicker(name){  
    clickers.get(name).buy();
    
}

document.getElementById("cookie").addEventListener("click", function () {
    this.style.transform = "scale(0.9)";

    setTimeout(() => {
        this.style.transform = "scale(1)";
    }, 100);
});


function spawnBouncingImage(type) {
    const imgSrc = {
        clicker: "clicker.png",
        doge: "doge.png",
        capybara: "capybara.png"
    };

    const img = document.createElement("img");
    img.src = imgSrc[type] || "default.png";
    img.classList.add("bouncing-image");

    document.body.appendChild(img);

    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 100);
    let dx = Math.random() * 4 + 2; // Randomized speed for variation
    let dy = Math.random() * 4 + 2;

    function moveImage() {
        x += dx;
        y += dy;

        // Bounce off the edges
        if (x <= 0 || x + 100 >= window.innerWidth) dx *= -1;
        if (y <= 0 || y + 100 >= window.innerHeight) dy *= -1;

        img.style.left = `${x}px`;
        img.style.top = `${y}px`;

        requestAnimationFrame(moveImage);
    }

    moveImage();
}



