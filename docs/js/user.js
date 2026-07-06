/*
=================================
NewsOS User Manager
=================================
*/

function checkUser() {

console.log("checkUser() is running");

    const user = localStorage.getItem("newsosUser");

    if (!user) {

       const screen = document.getElementById("welcome-screen");

console.log(screen);

screen.style.display = "flex";
    }

}function saveUsername() {

    const input = document.getElementById("username-input");

    const name = input.value.trim();

    if (name === "") return;

    localStorage.setItem("newsosUser", name);

    document.getElementById("welcome-screen").style.display = "none";

}function getUsername() {

    return localStorage.getItem("newsosUser") || "Guest";

}