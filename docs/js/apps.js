/*
=========================================
NewsOS Application Manager
=========================================
*/

function openApp(appName) {

    switch(appName){

        case "livetv":
    window.location.href = "apps/livetv.html";
    break;

        case "media":
            alert("Opening Media...");
            break;

        case "news":
            alert("Opening News...");
            break;

        case "events":
            alert("Opening Events...");
            break;

        case "browser":
            alert("Opening Browser...");
            break;

        case "settings":
            alert("Opening Settings...");
            break;

        default:
            alert("Application not found.");

    }

}