let counter = 0;
let autoClickerStart = false;
let autoClickersCost = 10;
let autoClickersOwned = 0;


function addOneToCounter(){
    counter += 1;   
    updateScore();
}
function updateScore(){
    document.getElementById("counter").innerText = counter;
}
// check if enough cookies for autoclicker. if yes add clicker
function buyAutoClicker(){
    if (counter >= autoClickersCost){
        counter = counter - autoClickersCost;
        autoClickersOwned += 1;
        autoClickersCost = Math.floor(autoClickersCost * 1.5);
        updateScore();
        document.getElementById("autoClickersOwned").innerText = autoClickersOwned;

        if (!autoClickerStart){
            autoClickerStart = true;
            setInterval(() => {
                counter += autoClickersOwned;
                updateScore();
            }, (1000));
        }
    } else{
        alert("Not enough cookies")
    }
}