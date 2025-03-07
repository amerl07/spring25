let cookies = 0;

function updateCounter() {
    document.getElementById("counter").textContent = `Cookies: ${cookies}`;
}

document.getElementById("cookie-btn").addEventListener("click", function() {
    cookies++;
    updateCounter();
});

setInterval(() => {
    cookies++;
    updateCounter();
}, 1000);


