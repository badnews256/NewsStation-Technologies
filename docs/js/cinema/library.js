// =====================================================
// NEWSOS CINEMA LIBRARY
// Movie Data Manager
// =====================================================

const CinemaLibrary = {

    movies: [],

    initialize() {

        console.log("Cinema Library Initialized");

        this.render();

    },

    getMovies() {

        return this.movies;

    },

    addMovie(movie) {

        this.movies.push(movie);

        console.log("Movie Added:", movie.title);

        this.render();

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

            return;

        }

        body.innerHTML = "";

        this.movies.forEach((movie) => {

            body.innerHTML += `

                <tr>

                    <td>

                        ${movie.poster
                    ? `<img src="${movie.poster}" style="width:60px;border-radius:6px;">`
                    : "—"}

                    </td>

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

        document.getElementById("stat-total-movies").textContent = this.movies.length;

    }

};