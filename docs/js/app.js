function updateClock() {

    const now = new Date();

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    const date = now.toLocaleDateString(undefined, options);

    const time = now.toLocaleTimeString();

    document.getElementById("datetime").innerHTML =
        date + "<br>" + time;

}

setInterval(updateClock, 1000);

updateClock();
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