function addOneToCounter(){
    document.getElementById("counter").innerText = 
    parseInt(document.getElementById("counter").innerText) + 1
    document.getElementById("combo").innerText = 
    parseInt(document.getElementById("combo").innerText) + 1
    if (parseInt(document.getElementById("combo").innerText) === 10) {
        document.getElementById("combo").innerText = 0
        document.getElementById("counter").innerText = 
        parseInt(document.getElementById("counter").innerText) + 10
    }

}

function resetCounter() {
    document.getElementById("counter").innerText = 0
    document.getElementById("combo").innerText = 0
}

function doubleCounter() {
    document.getElementById("counter").innerText = parseInt(document.getElementById("counter").innerText) *2
}



