/*
=========================================
NewsOS Clock Manager
=========================================
*/

function startClock() {

    updateClock();

    setInterval(updateClock, 1000);

}

function updateClock() {

    const now = new Date();

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    const date = now.toLocaleDateString(undefined, options);

    const time = now.toLocaleTimeString();

    const clock = document.getElementById("newsos-clock");

    if (!clock) return;

    clock.innerHTML = date + "<br>" + time;

}