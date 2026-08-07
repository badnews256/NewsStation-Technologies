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

    updateMovie(index, movie) {

        this.movies[index] = movie;

        this.saveLibrary();

        this.render();

        console.log("Movie Updated:", movie.title);

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

        const searchBox = document.getElementById("movie-search");

        const searchText = searchBox
            ? searchBox.value.trim().toLowerCase()
            : "";

        const genreFilter = document.getElementById("genre-filter");

        const selectedGenre = genreFilter
            ? genreFilter.value
            : "All Genres";

        const ratingFilter = document.getElementById("rating-filter");

        const selectedRating = ratingFilter
            ? ratingFilter.value
            : "All Ratings";

        const statusFilter = document.getElementById("status-filter");

        const selectedStatus = statusFilter
            ? statusFilter.value
            : "All Status";

        const filteredMovies = this.movies.filter(movie => {

            const matchesSearch =
                movie.title.toLowerCase().includes(searchText) ||
                movie.genre.toLowerCase().includes(searchText) ||
                movie.rating.toLowerCase().includes(searchText);

            const matchesGenre =
                selectedGenre === "All Genres" ||
                movie.genre === selectedGenre;

            const matchesRating =
                selectedRating === "All Ratings" ||
                movie.rating === selectedRating;

            const matchesStatus =
                selectedStatus === "All Status" ||
                "Active" === selectedStatus;

            return matchesSearch &&
                matchesGenre &&
                matchesRating &&
                matchesStatus;

        });

        const sortFilter = document.getElementById("sort-filter");

        const sortOption = sortFilter
            ? sortFilter.value
            : "A → Z";

        filteredMovies.sort((a, b) => {

            if (sortOption === "Z → A") {

                return b.title.localeCompare(a.title);

            }

            return a.title.localeCompare(b.title);

        });

        if (filteredMovies.length === 0) {

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

            filteredMovies.forEach((movie) => {

                const index = this.movies.indexOf(movie);

                body.innerHTML += `

                    <tr>

    <td>

        <input
            type="checkbox"
            class="movie-select"
            data-index="${index}">

    </td>

                        <td>${movie.poster ? `<img src="${movie.poster}" style="width:60px;border-radius:6px;">` : "—"}</td>

                        <td>${movie.title}</td>

                        <td>${movie.genre}</td>

                        <td>${movie.runtime}</td>

                        <td>${movie.rating}</td>

                        <td>Active</td>

                       <td>

    <button
        class="secondary-button edit-movie-btn"
        data-index="${index}">

        Edit

    </button>

    <button
        class="secondary-button delete-movie-btn"
        data-index="${index}">

        Delete

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

        if (genreFilter) {

            const currentValue = genreFilter.value;

            const genreList = [...new Set(
                this.movies
                    .map(movie => movie.genre?.trim())
                    .filter(Boolean)
            )].sort();

            genreFilter.innerHTML = `<option>All Genres</option>`;

            genreList.forEach(genre => {

                genreFilter.innerHTML += `<option>${genre}</option>`;

            });

            genreFilter.value = genreList.includes(currentValue)
                ? currentValue
                : "All Genres";

        }

        if (ratingFilter) {

            const currentValue = ratingFilter.value;

            const ratingList = [...new Set(
                this.movies
                    .map(movie => movie.rating?.trim())
                    .filter(Boolean)
            )].sort();

            ratingFilter.innerHTML = `<option>All Ratings</option>`;

            ratingList.forEach(rating => {

                ratingFilter.innerHTML += `<option>${rating}</option>`;

            });

            ratingFilter.value = ratingList.includes(currentValue)
                ? currentValue
                : "All Ratings";

            const statusFilter = document.getElementById("status-filter");

            if (statusFilter) {

                const currentValue = statusFilter.value;

                const statusList = ["Active"];

                statusFilter.innerHTML = `<option>All Status</option>`;

                statusList.forEach(status => {

                    statusFilter.innerHTML += `<option>${status}</option>`;

                });

                statusFilter.value = statusList.includes(currentValue)
                    ? currentValue
                    : "All Status";

            }

        }



    },

    deleteMovie(index) {

        this.movies.splice(index, 1);

        this.saveLibrary();

        this.render();

        console.log("Movie Deleted:", index);

    }

};