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

setInterval(updateClock,1000);

updateClock();