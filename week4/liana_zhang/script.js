document.addEventListener("DOMContentLoaded", function() {
    let counter = document.getElementById("counter");
    let extraCounter = document.getElementById("extraCounter");
    let cookie = document.getElementById("cookie");
    let spendButton = document.getElementById("spend5");
    let addAnotherCookieButton = document.getElementById("addAnotherCookie");
    let extraCookieContainer = document.getElementById("extraCookieContainer");
    let cookiesSpent = document.getElementById("cookiesSpent");
    let cookieMonsterPopup = document.getElementById("cookieMonsterPopup");
    let unlockMessage = document.getElementById("unlockMessage");
    let closeButton = document.getElementById("closePopupButton");

    let totalSpent = 0;
    let extraCookieActive = false;

    function addOneToCounter() {
        counter.innerText = parseInt(counter.innerText.trim()) + 1;
        checkMultiplesOfTwenty();
    }

    function checkMultiplesOfTwenty() {
        let count = parseInt(counter.innerText.trim());
        if (count % 20 === 0 && count > 0) {
            cookieMonsterPopup.style.display = "block";
        }
    }

    function closePopup() {
        cookieMonsterPopup.style.display = "none";
    }

    spendButton.addEventListener("click", function() {
        if (parseInt(counter.innerText.trim()) >= 5) {
            counter.innerText = parseInt(counter.innerText.trim()) - 5;
            totalSpent += 5;
            cookiesSpent.innerText = totalSpent;

            if (totalSpent >= 50) {
                addAnotherCookieButton.disabled = false;
                unlockMessage.innerText = "You have unlocked 'Add Another Cookie'!";
            }
        } else {
            alert("Not Enough Cookies!!");
        }
    });

    addAnotherCookieButton.addEventListener("click", function() {
        extraCookieContainer.style.display = "block";
        addAnotherCookieButton.disabled = true;
        extraCookieActive = true;

        setInterval(function() {
            if (extraCookieActive) {
                counter.innerText = parseInt(counter.innerText.trim()) + 1;
                extraCounter.innerText = parseInt(extraCounter.innerText.trim()) + 1;
            }
        }, 1000);
    });

    cookie.addEventListener("click", addOneToCounter);

    closeButton.addEventListener("click", closePopup);
});
