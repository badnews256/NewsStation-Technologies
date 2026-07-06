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

    content.innerHTML = "<h2>Loading TV...</h2>";

    loadTVServices().then(html => {

        content.innerHTML = html;

    });

    break;

            break;

        case "media":

    title.textContent = "🎙 NS RADIO";

    content.innerHTML = `
        <h2>🎙 NS Radio</h2>

        <p>The Sound of the Grid</p>

        <hr>

        <h3>🟢 AutoDJ Online</h3>

        <p>24/7 Music Streaming</p>

        <a href="#" class="radio-button">
    ▶ Listen on News Station Radio
</a>

        <hr>

        <h3>⭐ Featured Mix</h3>

<div class="featured-mix">

    <img src="covers/featured-mix.jpg" class="mix-cover">

    <h2>Summer Sessions Vol. 3</h2>

    <p>Mixed by DJ Bad News</p>

    <a href="#" class="radio-button">
        ▶ Play Featured Mix
    </a>

</div>

        <hr>

        <h3>🎧 Community Mixes</h3>

        <p>Discover DJs from across the Grid.</p>
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