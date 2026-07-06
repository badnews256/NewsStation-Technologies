






// Load ticker text
function loadTicker() {

    fetch("ticker.txt?time=" + new Date().getTime())
        .then(response => response.text())
        .then(text => {

            const ticker = document.getElementById("ticker");

            if (ticker) {
                ticker.textContent = text;
            }

        })
        .catch(error => console.log("Ticker failed to load:", error));

}

loadTicker();

// Check for ticker updates every minute
setInterval(loadTicker, 60000);
// ==========================
// Boot Animation
// ==========================

window.addEventListener("load", function () {
startClock();

    const bootScreen = document.getElementById("boot-screen");
    const desktop = document.getElementById("desktop");
    const progress = document.getElementById("boot-progress");
    const bootText = document.getElementById("boot-text");

    const messages = [
        "Initializing Hardware...",
        "Loading NewsOS Core...",
        "Connecting Services...",
        "Loading Dashboard...",
        "System Ready..."
    ];

    let percent = 0;
    let messageIndex = 0;

    const boot = setInterval(() => {

        percent += 5;
        progress.style.width = percent + "%";

        if (percent % 20 === 0 && messageIndex < messages.length - 1) {
            messageIndex++;
            bootText.textContent = messages[messageIndex];
        }

        if (percent >= 100) {

            clearInterval(boot);

            bootScreen.style.transition = "opacity 0.8s";
            bootScreen.style.opacity = "0";

           setTimeout(() => {

    bootScreen.style.display = "none";
    desktop.style.display = "block";
    desktop.style.opacity = "1";

    checkUser();

}, 800);

        }

    }, 100);

});