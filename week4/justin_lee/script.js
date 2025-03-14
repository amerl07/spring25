counter = 0;
cookiesEaten = 0;
cookiesDropped = 0;
printers = 0;

function update() {
    document.getElementById("counter").innerText = counter;
}

function increment() {
    counter++;
    if (counter >= 5) {
        document.getElementById("dropButton").style.display = "block";
    }
    if (counter >= 10) {
        document.getElementById("eatButton").style.display = "block";
    }
    if (counter >= 100) {
        document.getElementById("cookieMerchant").style.display = "block";
    }
    update();
}

function dropCookies() {
    if (counter < 5) {
        alert("Not enough cookies.");
        return;
    }
    document.getElementById("cookiesDropped").style.display = "block";
    counter = counter - 5;
    cookiesDropped = cookiesDropped + 5;
    droppedText = "You dropped "+cookiesDropped+" cookies. ";
    if (cookiesDropped >= 100 && cookiesDropped < 200) {
        droppedText = droppedText + "Why :(";
    }
    if (cookiesDropped >= 200) {
        droppedText = droppedText + "Maybe you should stop.";
    }

    document.getElementById("cookiesDropped").innerText = droppedText;
    update();
}

function eatCookies() {
    if (counter < 10) {
        alert("Not enough cookies.");
        return;
    }
    document.getElementById("cookiesEaten").style.display = "block";
    counter = counter - 10;
    cookiesEaten = cookiesEaten + 10;
    eatenText = "You ate "+cookiesEaten+" cookies. ";
    if (cookiesEaten >= 100 && cookiesEaten < 200) {
        eatenText = eatenText + "That's a lot!";
    }
    if (cookiesEaten >= 200) {
        eatenText = eatenText + "Maybe you should stop.";
    }

    document.getElementById("cookiesEaten").innerText = eatenText;
    update();
}

function buyItem(itemName, cost) {

    if (counter < cost) {
        dialog = "Come back when you have more cookies.";
    } else {
        if (itemName == 'printer') {
            dialog = "Here's your printer.";
            printers++;
        }
        if (itemName == 'yuuka') {
            dialog = "Here's your image of this anime girl.";
            apiCall();
        }
        counter = counter - cost;
    }

    document.getElementById("merchantDialog").innerText = dialog;
    update();
}

function incrementCoins() {
    setInterval(() => {
        counter += printers;
        update();
    }, 1000);
}
incrementCoins();

async function apiCall() {
    try {
        // API call to Danbooru
        const response = await fetch('https://danbooru.donmai.us/posts.json?tags=yuuka_(blue_archive)+rating:g+random%3A1');
        const data = await response.json();
        const imageUrl = data[0].file_url;

        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        imgElement.style.maxWidth = '100%';
        imgElement.style.height = 'auto';

        const imageContainer = document.getElementById('yuukaContainer');
        imageContainer.innerHTML = '';
        imageContainer.appendChild(imgElement);
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  }
