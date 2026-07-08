/*
=========================================
NewsOS Application Manager
=========================================
*/

function openApp(appName) {
    const goodNewsWidget = document.getElementById("good-news-widget");

if (goodNewsWidget) {
    goodNewsWidget.style.opacity = "0";
    goodNewsWidget.style.transform = "translateX(420px)";
}
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

      case "movies":

    title.textContent = "🎬 News Station Cinema";

    content.innerHTML = `

        <h2>🎬 News Station Cinema</h2>

        <p>Your entertainment starts here.</p>

        <hr>

        <div class="hero-banner">

            <img src="covers/featured-movie.jpg" class="hero-image">

            <div class="hero-overlay">

                <h2>🎬 Now Premiering</h2>

                <p>Coming Soon</p>

                <button class="radio-button">

                    ▶ Watch Trailer

                </button>

            </div>

        </div>

<h3 class="shelf-title">
    🍿 Continue Watching
</h3>

<div class="content-row">

<div class="content-card">

    <img src="covers/featured-movie.jpg" class="poster-image">

    <div class="card-info">

        <h3>News Station Originals</h3>

        <p>🎭 Documentary</p>

        <p>📅 Coming Soon</p>

    </div>

</div>

   <div class="content-card">

    <img src="covers/featured-movie.jpg" class="poster-image">

    <div class="card-info">

        <h3>Friday Night Feature</h3>

        <p>🎭 Action</p>

        <p>📅 Coming Soon</p>

    </div>

</div>

  <div class="content-card">

    <img src="covers/featured-movie.jpg" class="poster-image">

    <div class="card-info">

        <h3>Community Spotlight</h3>

        <p>🎭 Drama</p>

        <p>📅 Coming Soon</p>

    </div>

</div>

</div>

    `;

    break;  

        case "media":

    title.textContent = "🎙 NS RADIO";

    content.innerHTML = `
        <h2>🎙 NS Radio</h2>

        <p>The Sound of the Grid</p>

        <hr>

       <div class="broadcast-status">

    <h2>📡 NOW BROADCASTING</h2>

    <h3>🟢 AUTO DJ</h3>

    <p>The Sound of the Grid</p>

</div>

<div class="now-playing">

    <h3>🎵 NOW PLAYING</h3>

    <p><strong>Artist:</strong> DJ Bad News</p>

    <p><strong>Track:</strong> AutoDJ Playlist</p>

</div>

<button class="radio-button" onclick="playRadio()">

    ▶ Listen on News Station Radio

</button>

        <hr>

<h3>⭐ Featured Mix</h3>

<div class="content-row">

    <div class="content-card featured-mix">

        <img src="covers/featured-mix.jpg" class="album-cover">

        <h2>Summer Sessions Vol. 3</h2>

        <p>Mixed by DJ Bad News</p>

        <a href="#" class="radio-button">
            ▶ Play Featured Mix
        </a>

    </div>

    <div class="content-card featured-mix">

    <img src="covers/featured-mix.jpg" class="album-cover">

    <h2>Late Night Vibes</h2>

    <p>Mixed by DJ Bad News</p>

    <a href="#" class="radio-button">
        ▶ Play Mix
    </a>

</div>

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

        <h2>⚙️ Settings</h2>

        <p>Customize your NewsOS experience.</p>

        <hr>

        <h3>📰 About NewsOS</h3>

        <div class="settings-card">

            <h2>Entertainment Meets Community</h2>

            <p>
                NewsOS is a smart entertainment and community platform
                designed exclusively for Second Life.
            </p>

            <hr>

            <h3>Version</h3>

            <p><strong>1.0</strong> — Foundation</p>

            <hr>

            <h3>Built By</h3>

            <p>News Station Technologies</p>

        </div>

    `;

    break;

        default:

            title.textContent = "Application";

            content.innerHTML = "<p>Application not found.</p>";

    }
}

function closeApp() {

    document.getElementById("app-window").style.display = "none";

    const goodNewsWidget = document.getElementById("good-news-widget");

    if (goodNewsWidget) {
        goodNewsWidget.style.opacity = "1";
        goodNewsWidget.style.transform = "translateX(0)";
    }

}

function playChannel(channel) {

    alert("Loading " + channel + " channel...");

}