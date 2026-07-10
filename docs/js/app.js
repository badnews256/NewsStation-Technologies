






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

document.addEventListener("DOMContentLoaded", function () {
    startClock();

    const bootScreen = document.getElementById("boot-screen");
    document.body.style.visibility = "visible";
    const desktop = document.getElementById("desktop");
    console.log("INIT:", getComputedStyle(desktop).display);
    const progress = document.getElementById("boot-progress");
    const bootText = document.getElementById("boot-text");
    const bootUser = document.getElementById("boot-user");
    const greetingScreen = document.getElementById("greeting-screen");
    const greetingMessage = document.getElementById("greeting-message");
    // Force initial screen state
    bootScreen.style.display = "flex";
    bootScreen.style.opacity = "1";

    greetingScreen.style.display = "none";

    desktop.style.display = "none";
    desktop.style.opacity = "0";

    bootUser.innerHTML =
        "<strong>NEWSOS</strong>" +
        "<br><span>Entertainment Meets Community</span>";

    greetingMessage.innerHTML =
        "<span class='greeting-time'>" + getGreeting() + ",</span>" +
        "<br>" +
        "<span class='greeting-name'>" + getUsername() + "</span>" +
        "<br>" +
        "<span class='greeting-home'>Welcome Home.</span>";

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

            // Fade out boot screen
            setTimeout(() => {

                bootScreen.style.opacity = "0";

                setTimeout(() => {

                    // Hide boot screen
                    // Show greeting FIRST
                    greetingScreen.style.display = "flex";

                    // Then hide boot screen
                    bootScreen.style.display = "none";

                    // Personalized greeting
                    checkUser();

                    // Keep greeting visible for 3 seconds
                    setTimeout(() => {

                        greetingScreen.style.display = "none";

                        // Show desktop
                        console.log("SHOWING DESKTOP");
                        desktop.style.display = "block";
                        console.log("AFTER SHOW:", getComputedStyle(desktop).display);
                        desktop.style.opacity = "1";
                        const miniPlayer = document.getElementById("mini-player");

                        if (miniPlayer) {
                            miniPlayer.style.display = "block";
                        }

                        // Animate Good News after desktop loads
                        setTimeout(() => {

                            const goodNews = document.getElementById("good-news-widget");

                            if (goodNews) {

                                goodNews.style.opacity = "1";
                                goodNews.style.transform = "translateX(0)";

                                const edition = getCurrentEdition();

                                const heading = document.getElementById("good-news-heading");

                                if (heading) {

                                    heading.textContent = edition.heading;

                                }

                                typeGoodNewsMessage(
                                    edition.title,
                                    edition.body
                                );

                            }

                        }, 1500);

                    }, 3000);

                }, 800);

            }, 2500);

        }

    }, 100);

});
function typeGoodNewsMessage(title, body) {

    const titleElement = document.getElementById("leroy-title");
    const bodyElement = document.getElementById("leroy-body");

    if (!titleElement || !bodyElement) return;

    titleElement.textContent = "";
    bodyElement.textContent = "";

    let titleIndex = 0;

    function typeTitle() {

        if (titleIndex < title.length) {

            titleElement.textContent += title.charAt(titleIndex);

            titleIndex++;

            setTimeout(typeTitle, 35);

        } else {

            typeBody();

        }

    }

    let bodyIndex = 0;

    function typeBody() {

        if (bodyIndex < body.length) {

            bodyElement.textContent += body.charAt(bodyIndex);

            bodyIndex++;

            setTimeout(typeBody, 20);

        }

    }

    typeTitle();

}
const editions = [

    {
        heading: "☀️ Morning Edition",
        title: "👋 Good Morning.",
        body: "Bad News, it's great to see you again."
    },

    {
        heading: "📰 Today's Headlines",
        title: "✨ Welcome Home.",
        body: "Here's what's happening across News Station today."
    },

    {
        heading: "🎙 Radio Bulletin",
        title: "NS Radio",
        body: "The station is currently offline."
    }

];
function getCurrentEdition() {

    const hour = new Date().getHours();

    if (hour < 12) {

        return editions[0];

    }

    if (hour < 18) {

        return editions[1];

    }

    return editions[2];

}