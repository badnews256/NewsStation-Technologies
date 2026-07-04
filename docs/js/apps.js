/*
=========================================
NewsOS Application Manager
=========================================
*/

function openApp(appName) {
console.log("openApp called:", appName);
    const windowBox = document.getElementById("app-window");
    const title = document.getElementById("app-title");
    const content = document.getElementById("app-content");

    windowBox.style.display = "block";

    console.log(windowBox);
console.log(title);
console.log(content);
    switch (appName) {

        case "tv":

            title.textContent = "📺 TV";

            content.innerHTML = `
    <h2>📺 TV</h2>

    <p>Select a channel to begin watching.</p>

    <br>

    <button onclick="playChannel('news')">📰 News</button>

    <button onclick="playChannel('music')">🎵 Music</button>

    <button onclick="playChannel('movies')">🎬 Movies</button>

    <button onclick="playChannel('sports')">🏈 Sports</button>

    <button onclick="playChannel('kids')">🧸 Kids</button>

    <button onclick="playChannel('favorites')">⭐ Favorites</button>
`;

            break;

        case "media":

            title.textContent = "🎵 MEDIA";

            content.innerHTML = `
                <h2>Media Center</h2>
                <p>Coming Soon</p>
            `;

            break;

        case "news":

            title.textContent = "📰 NEWS";

            content.innerHTML = `
                <h2>News Center</h2>
                <p>Coming Soon</p>
            `;

            break;

        case "events":

            title.textContent = "📅 EVENTS";

            content.innerHTML = `
                <h2>Events Center</h2>
                <p>Coming Soon</p>
            `;

            break;

        case "browser":

            title.textContent = "🌐 BROWSER";

            content.innerHTML = `
                <h2>Browser</h2>
                <p>Coming Soon</p>
            `;

            break;

        case "settings":

            title.textContent = "⚙️ SETTINGS";

            content.innerHTML = `
                <h2>Settings</h2>
                <p>Coming Soon</p>
            `;

            break;

        default:

            title.textContent = "Application";

            content.innerHTML = "<p>Application not found.</p>";

    }
}

function closeApp() {

    document.getElementById("app-window").style.display = "none";

}

function playChannel(channel) {

    alert("Loading " + channel + " channel...");

}