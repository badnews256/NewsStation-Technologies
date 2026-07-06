/*
=========================================
NewsOS Audio Manager
=========================================
*/

let radioPlayer = null;

let radioPlaying = false;
function createRadioPlayer() {

   radioPlayer = new Audio("http://badnews.vside-radio.com:9289/;");

    radioPlayer.volume = 0.5;

}function playRadio() {

    if (!radioPlayer) {

        createRadioPlayer();

    }

    radioPlayer.play();

    radioPlaying = true;

}