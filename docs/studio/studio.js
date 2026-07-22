async function loadStudio() {

    const response = await fetch("studio/studio.html");

    return await response.text();

}

function initializeStudio() {

    console.log("NewsOS Studio initialized.");

    const header = document.querySelector(".studio-header h1");

    if (header) {

        header.textContent = "NEWSOS STUDIO";

    }

}

function launchStudio() {

    loadStudio().then(html => {

        const title = document.getElementById("app-title");

        if (title) {

            title.textContent = "🏢 NewsOS Studio";

        }

        const content = document.getElementById("app-content");

        if (!content) return;

        content.innerHTML = html;

        initializeStudio();

    });

}