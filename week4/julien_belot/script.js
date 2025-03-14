function addOneToCounter(){
    document.getElementById("counter").innerText = parseInt(document.getElementById("counter").innerText) + 1
}

//DURATION OF THE GAME
var intervalID = window.setInterval(durationCounter, 1000); 
function durationCounter(){
    document.getElementById("duration").innerText = parseInt(document.getElementById("duration").innerText) + 1
}
//CALCULATES AND SHOWS THE CLICKRATE
var intervalID2 = window.setInterval(clickRate, 1000); //
function clickRate(){
    document.getElementById("clickRate").innerText = Math.round(parseInt(document.getElementById("counter").innerText)/parseInt(document.getElementById("duration").innerText)*100)/100
}

//MOVES THE IMAGE RANDOMLY
var intervalID3 = window.setInterval(positionCookie,800)
function positionCookie(){
    const image = document.getElementById("imageToMove")
    var topPosition = Math.floor(Math.random()*(document.getElementById("cookie").offsetHeight-document.getElementById("imageToMove").width))
    var leftPosition = Math.floor(Math.random()*(document.getElementById("cookie").offsetWidth-document.getElementById("imageToMove").height))
    image.style.top = `${topPosition}px`;
    image.style.left = `${leftPosition}px`;
    console.log(document.getElementById("cookie").offsetHeight)
}

function playAudio(path) {
    new Audio(path).play();
}


function clickConfirmation(){
    const image = document.getElementById("imageToMove")
    image.style.height = `${300}px`;
    image.style.width = `${300}px`;
    setTimeout("image.style.height = `${200}px`;image.style.width = `${200}px`",100)
    
}

let firstDate = new Date()
function initialize(){
    if (document.getElementById("counter").innerText == 1){
        firstDate = new Date()
    }
}


console.log(parseInt(document.getElementById("counter").innerText)/parseInt(document.getElementById("duration").innerText))

