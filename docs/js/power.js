/*
=========================================
NewsOS Power Manager
=========================================
*/

const PowerManager = {

    state: "boot",

    boot() {

        document.getElementById("boot-screen").style.display = "flex";
        document.getElementById("standby-screen").style.display = "none";
        document.getElementById("desktop").style.display = "none";

        this.state = "boot";

        console.log("Booting NewsOS");

    },

    standby() {

        document.getElementById("boot-screen").style.display = "none";
        document.getElementById("desktop").style.display = "none";
        document.getElementById("standby-screen").style.display = "flex";

        this.state = "standby";

        console.log("Standby Mode");

    },

    desktop() {

    document.getElementById("boot-screen").style.display = "none";
    document.getElementById("standby-screen").style.display = "none";
    document.getElementById("desktop").style.display = "block";

    this.state = "desktop";

    console.log("Desktop Loaded");

},

togglePower() {

    if (this.state === "standby") {

        this.boot();

    } else {

        this.standby();

    }

}

};