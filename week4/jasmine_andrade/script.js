let x = 0; 
let y = 0;
function moveImage() {
    var image = document.getElementById("cookie");
    x += Math.floor(Math.random() * 50) - 25; 
    y += Math.floor(Math.random() * 50) - 25;
    image.style.transform = 'translate(${x}px, ${y}px)';
   
  }

function addOneToCounter(){
    document.getElementById("counter").innerText = parseInt(document.getElementById("counter").innerText) + 1 
    moveImage();
}

