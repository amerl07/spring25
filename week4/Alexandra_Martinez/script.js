function addOneToCounter() {
    document.getElementById("counter").innerText = parseInt(document.getElementById("counter").innerText) + 1;
    let x = Math.floor((Math.random() * 100) + 1);
    if (x % 10 == 0) {
        document.getElementById("counterText").style.color = "blue";
    }
    if (x % 10 == 1) {
        document.getElementById("counterText").style.color = "red";
    }
    if (x % 10 == 2) {
        document.getElementById("counterText").style.color = "purple";
    }
    if (x % 10 == 3) {
        document.getElementById("counterText").style.color = "green";
    }
    if (x % 10 == 4) {
        document.getElementById("counterText").style.color = "black";
    }
    if (x % 10 == 5) {
        document.getElementById("counterText").style.color = "orange";
    }
    if (x % 10 == 6) {
        document.getElementById("counterText").style.color = "magenta";
    }
    if (x % 10 == 7) {
        document.getElementById("counterText").style.color = "cyan";
    }
}
function makePictureSmaller() {
    var myIMG = document.getElementById('picture');
    if (myIMG && myIMG.style) {
    myIMG.style.height = '480px';
    myIMG.style.width = '480px';
    }
}
function makePictureBigger() {
    var myIMG = document.getElementById('picture');
    if (myIMG && myIMG.style) {
    myIMG.style.height = '500px';
    myIMG.style.width = '500px';
    }
}