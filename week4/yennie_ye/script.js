function addOneToCounter(){
    document.getElementById("counter").innerText=parseInt(document.getElementById("counter").innerText)+1
}
console.log()

function resetGame() {
    cookies=0;
    cookiesPerClick=1;
    localStorage.clear(); 
    document.getElementById("counter").innerText=cookies;
}

function showClickEffect(event) {
    let clickEffect = document.createElement("div"); 
    clickEffect.className = "clickEffect"; 
    clickEffect.innerText = "+1";

    clickEffect.style.left = event.clientX + "px";
    clickEffect.style.top = event.clientY + "px";

    document.body.appendChild(clickEffect); 


    setTimeout(() => {
        clickEffect.remove();
    }, 500);
}

document.querySelector("img").addEventListener("click", showClickEffect);

