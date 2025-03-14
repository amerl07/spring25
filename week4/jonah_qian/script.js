let count = 0;
let twopointpercentage = 25;
let threepointpercentage = 25;
let improveTwoPointerButton = document.getElementById("2pointbutton");
let improveThreePointerButton = document.getElementById("3pointbutton");
let twoPtPctDisplay = document.getElementById("twopointpercentager");
let threePtPctDisplay = document.getElementById("threepointpercentage");
let buttonGuide = document.getElementById("btnmessage");
let image = document.getElementById("basketball");
let scorecount = document.getElementById("counter");
let winloss = document.getElementById("winorlose");

function shootTheBall() {
    if (count < 113) {
        let int = Math.floor(Math.random() * 100);
        if (int < twopointpercentage) {
            count+=2;
            scorecount.innerHTML = count;
        } else if (int >= twopointpercentage && int < (twopointpercentage + threepointpercentage)) {
            count+=3;
            scorecount.innerHTML = count;
        }
    } else {
        winloss.innerHTML = "You Did It, That's a Game Winner!";
    }
}

function improveTwoPtFunction() {
    if (twopointpercentage + threepointpercentage == 100) {
        buttonGuide.innerHTML = "You already have a 100% chance of making a shot, start scoring now and beat the opponent!";
    } else if (count < 10) {
        buttonGuide.innerHTML = "Unfortunately, you don't have enough points for a 2 point training session";
    } else {
        count-=10;
        twopointpercentage+=10;
        scorecount.innerHTML = count;
        twoPtPctDisplay.innerHTML = twopointpercentage;
        buttonGuide.innerHTML = "Congratulations! You've improved your chance a making a 2-pointer by 10%!"
    }
}

function improveThreePtFunction() {
    if (twopointpercentage + threepointpercentage == 100) {
        buttonGuide.innerHTML = "You already have a 100% chance of making a shot, start scoring now and beat the opponent!";
    } else if (count < 20) {
        buttonGuide.innerHTML = "Unfortunately, you don't have enough points for a 3 point training session";
    } else {
        count-=20;
        threepointpercentage+=10;
        scorecount.innerHTML = count;
        threePtPctDisplay.innerHTML = threepointpercentage;
        buttonGuide.innerHTML = "Congratulations! You've improved your chance a making a 3-pointer by 10%!"
    }
}
