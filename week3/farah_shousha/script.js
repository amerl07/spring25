function addOneToCounter(){
    document.getElementById("counter").innerText = parseInt(document.getElementById("counter").innerText) +1
}

let counter = 0;
let level =1;
let clicksInAMinute = 0;
let clicksNedded = 10; 
let timer = false; 