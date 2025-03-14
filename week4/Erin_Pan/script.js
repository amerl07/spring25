document.addEventListener("DOMContentLoaded", function() {
    const counterElement = document.getElementById("counter");
    const button = document.getElementById("incrementButton");
    const imageElement = document.getElementById("image");

    const colors = ["red", "blue", "green", "purple", "orange"]; 
    let colorIndex = 0;

    button.addEventListener("click", function() {
        let currentCount = parseInt(counterElement.innerText);
        currentCount += 1;
        counterElement.innerText = currentCount;

        if (currentCount >= 5) {
            counterElement.style.color = "red";
            imageElement.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Cookie.png/1200px-Cookie.png";
            imageElement.style.animation = "spin 1s linear infinite";
        } else {
            counterElement.style.color = "black";
            imageElement.style.animation = "none";
        }

        imageElement.style.borderColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length; 
    });
});

