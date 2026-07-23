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

function openCinemaManager() {

    const content = document.getElementById("app-content");

    if (!content) return;

    content.innerHTML = `

        <h2>🎬 Cinema Manager</h2>

        <hr>

       <p><strong>Featured Movie</strong></p>

<p><strong>Title:</strong> ${featuredMovie.title}</p>

<p><strong>Genre:</strong> ${featuredMovie.genre}</p>

<p><strong>Runtime:</strong> ${featuredMovie.runtime}</p>

<p><strong>Rating:</strong> ${featuredMovie.rating}</p>

<p><strong>Description:</strong></p>

<p>${featuredMovie.description}</p>

        <hr>

        <button id="change-featured-movie">

            Change Featured Movie

        </button>

        <br><br>

        <button id="back-to-studio">

            ← Back to Studio

        </button>

    `;

    document
        .getElementById("back-to-studio")
        .onclick = launchStudio;

    addStudioActivity("Opened Cinema Manager");

}

const studioActivity = [];

function addStudioActivity(message) {

    const now = new Date();

    const time = now.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit"
    });

    studioActivity.unshift({

        time,
        message

    });

    if (studioActivity.length > 50) {

        studioActivity.pop();

    }

    renderStudioActivity();

}

function renderStudioActivity() {

    const list = document.getElementById("activity-log-list");

    if (!list) return;

    list.innerHTML = "";

    studioActivity.forEach(entry => {

        list.innerHTML += `
            <div>
                <strong>${entry.time}</strong> — ${entry.message}
            </div>
        `;

    });

}