/*
=========================================
NewsOS Application Manager
=========================================
*/

const featuredMovie = {

    title: "Labyrinth",

    genre: "Fantasy",

    runtime: "101 Minutes",

    rating: "PG",

    description:
        "A teenage girl journeys through a magical labyrinth to rescue her baby brother from the Goblin King.",

    trailer:
        "https://www.youtube.com/embed/1L_Q0VtrTxU"

};

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

        // =====================================================
        // NEWS STATION CINEMA
        // Architecture:
        //
        // apps.js
        //   └── Launches Cinema only
        //
        // cinema.js
        //   └── Builds the Cinema application
        //
        // player.js
        //   └── Handles movie playback
        //
        // library.js
        //   └── Movie library & shelves
        //
        // metadata.js
        //   └── Movie information
        //
        // collections.js
        //   └── Featured collections
        //
        // ui.js
        //   └── Animations & interface
        // =====================================================

        case "movies":

            title.textContent = "🎬 News Station Cinema";

            content.innerHTML = `

        <h2>🎬 News Station Cinema</h2>


      <nav class="cinema-nav">

    <button class="cinema-nav-item active">
        Featured
    </button>

    <button class="cinema-nav-item">
        Movies
    </button>

    <button class="cinema-nav-item">
        TV Shows
    </button>

    <button class="cinema-nav-item">
        Collections
    </button>

    <button class="cinema-nav-item">
        Search
    </button>

    <button class="cinema-nav-item">
        My List
    </button>

</nav>


       <h1
    class="premium-title"
    id="featured-movie-title">

    ${featuredMovie.title}

</h1>

<p class="premium-meta">

    ${featuredMovie.genre} • ${featuredMovie.runtime} • ${featuredMovie.rating}

</p>

<p class="premium-description">

    ${featuredMovie.description}

</p>

<div class="premium-actions">

   <button
    id="watch-now-btn"
    class="cinema-watch-btn"
    type="button"
    onclick="showCinemaPlayer()">

    ▶ WATCH NOW

</button>

    <button
    class="cinema-info-btn"
    type="button"
    onclick="showMovieInfo()">

        ℹ MORE INFO

    </button>

</div>

<div id="premium-player-slot">

    <div id="movie-player-container" class="movie-player-hidden cinema-player-area">

    <iframe
    id="cinema-player"
    width="100%"
        height="500"
        src="https://www.youtube.com/embed/lL_Q0VtrTxU"
        title="News Station Cinema"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
    </iframe>

   <button
    id="back-to-details-btn"
    class="cinema-info-btn"
    type="button"
    onclick="backToDetails()">

    ← BACK TO DETAILS

</button>

</div>

</div>

        <div class="hero-banner">
        
        <img src="covers/featured-movie.jpg" class="hero-image">


            <div class="hero-overlay">


            </div>


        </div>

<h3 class="shelf-title">
    🔥 Trending Now
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

function initializeCinemaPlayer() {

    const watchButton = document.getElementById("watch-now-btn");

    const player = document.getElementById("movie-player-container");

    if (!watchButton || !player) return;

    watchButton.addEventListener("click", () => {

        player.style.display = "block";

        player.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    });

}

function showCinemaPlayer() {

    console.log("showCinemaPlayer() fired");

    const player = document.getElementById("movie-player-container");

    const iframe = document.getElementById("cinema-player");

    console.log(player);

    if (!player) return;

    player.classList.remove("movie-player-hidden");

    const heroImage = document.querySelector(".hero-image");

    if (heroImage) heroImage.style.display = "none";

    const heroBanner = document.querySelector(".hero-banner");

    if (heroBanner) heroBanner.style.display = "none";

    console.log("Hidden class removed.");

}

function backToDetails() {



    const player = document.getElementById("movie-player-container");
    const heroImage = document.querySelector(".hero-image");
    const heroBanner = document.querySelector(".hero-banner");

    if (player) {
        player.classList.add("movie-player-hidden");
    }

    if (heroImage) {
        heroImage.style.display = "";
    }

    if (heroBanner) {
        heroBanner.style.display = "";
    }

}

function showMovieInfo() {

    alert(
        `FEATURED MOVIE

Title: ${featuredMovie.title}

Genre: ${featuredMovie.genre}

Runtime: ${featuredMovie.runtime}

Rating: ${featuredMovie.rating}

Description:

${featuredMovie.description}`
    );

}