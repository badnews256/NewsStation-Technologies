






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
    const bootUser = document.getElementById("boot-user");
    const greetingScreen = document.getElementById("greeting-screen");
    const greetingMessage = document.getElementById("greeting-message");

bootUser.innerHTML =
    getGreeting() +
    "<br><strong>" + getUsername() + "</strong>" +
    "<br><span>Welcome Home.</span>";

    greetingMessage.innerHTML =
    getGreeting() +
    "<br><strong>" + getUsername() + "</strong>" +
    "<br><span>Welcome Home.</span>";

    console.log(bootUser.innerHTML);

    const messages = [

    "Powering NSTV One...",

    "Initializing Hardware...",

    "Starting Media Engine...",

    "Connecting you to the Grid..."

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
            

            bootUser.style.opacity = "1";

           setTimeout(() => {

            bootScreen.style.opacity = "0";

    bootScreen.style.display = "none";
    greetingScreen.style.display = "flex";
    desktop.style.opacity = "1";

    checkUser();

    setTimeout(() => {

    greetingScreen.style.display = "none";

    desktop.style.display = "block";

    desktop.style.opacity = "1";

}, 3000);

}, 2500);

        }

    }, 100);

});