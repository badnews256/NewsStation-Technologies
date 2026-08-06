// =====================================================
// NEWSOS CINEMA LIBRARY
// Movie Data Manager
// =====================================================

const CinemaLibrary = {

    STORAGE_KEY: "newsos-cinema-library",

    movies: [],

    initialize() {

        console.log("Cinema Library Initialized");

        this.loadLibrary();

        this.render();

    },

    getMovies() {

        return this.movies;

    },

    addMovie(movie) {

        this.movies.push(movie);

        this.saveLibrary();

        this.render();

        console.log("Movie Added:", movie.title);

    },

    saveLibrary() {

        localStorage.setItem(

            this.STORAGE_KEY,

            JSON.stringify(this.movies)

        );

    },

    loadLibrary() {

        const saved = localStorage.getItem(this.STORAGE_KEY);

        if (!saved) {

            this.movies = [];

            return;

        }

        try {

            this.movies = JSON.parse(saved);

        }

        catch (error) {

            console.error("Unable to load movie library.", error);

            this.movies = [];

        }

    },

    render() {

        const body = document.getElementById("movie-library-body");

        if (!body) return;

        if (this.movies.length === 0) {

            body.innerHTML = `

                <tr>

                    <td colspan="7">

                        <div class="studio-empty">

                            <div class="studio-empty-icon">🎬</div>

                            <h2 class="studio-empty-title">

                                No Movies Yet

                            </h2>

                            <p class="studio-empty-description">

                                Build your NewsOS Cinema Library by adding your first movie.

                            </p>

                        </div>

                    </td>

                </tr>

            `;

        } else {

            body.innerHTML = "";

            this.movies.forEach(movie => {

                body.innerHTML += `

                    <tr>

                        <td>${movie.poster ? `<img src="${movie.poster}" style="width:60px;border-radius:6px;">` : "—"}</td>

                        <td>${movie.title}</td>

                        <td>${movie.genre}</td>

                        <td>${movie.runtime}</td>

                        <td>${movie.rating}</td>

                        <td>Active</td>

                        <td>

                            <button class="secondary-button">

                                Edit

                            </button>

                        </td>

                    </tr>

                `;

            });

        }

        const totalMovies = document.getElementById("stat-total-movies");
        const featuredMovies = document.getElementById("stat-featured-movies");
        const genres = document.getElementById("stat-total-genres");
        const ratings = document.getElementById("stat-total-ratings");

        if (totalMovies) {

            totalMovies.textContent = this.movies.length;

        }

        if (featuredMovies) {

            const featuredCount = this.movies.filter(movie => movie.featured === true).length;

            featuredMovies.textContent = featuredCount;

        }

        if (genres) {

            const uniqueGenres = new Set(

                this.movies
                    .map(movie => movie.genre?.trim())
                    .filter(Boolean)

            );

            genres.textContent = uniqueGenres.size;

        }

        if (ratings) {

            const uniqueRatings = new Set(

                this.movies
                    .map(movie => movie.rating?.trim())
                    .filter(Boolean)

            );

            ratings.textContent = uniqueRatings.size;

        }

    }

};