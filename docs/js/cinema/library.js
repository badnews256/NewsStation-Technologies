// =====================================================
// NEWSOS CINEMA LIBRARY
// Movie Data Manager
// =====================================================

const CinemaLibrary = {

    STORAGE_KEY: "newsos-cinema-library",

    movies: [],

    currentPage: 1,

    pageSize: 25,

    initialize() {

        console.log("Cinema Library Initialized");

        this.loadLibrary();

        this.render();

    },

    getMovies() {

        return this.movies;

    },

    resetPagination() {

        this.currentPage = 1;

    },

    addMovie(movie) {

        movie.featured = false;

        this.movies.push(movie);

        this.saveLibrary();

        this.resetPagination();

        this.render();

        console.log("Movie Added:", movie.title);

    },

    updateMovie(index, movie) {

        if (movie.featured === true) {

            this.movies.forEach(existingMovie => {

                existingMovie.featured = false;

            });

        }

        this.movies[index] = movie;

        this.saveLibrary();

        this.resetPagination();

        this.render();

        console.log("Movie Updated:", movie.title);

    },

    setFeaturedMovie(index) {

        this.movies.forEach(movie => {

            movie.featured = false;

        });

        if (this.movies[index]) {

            this.movies[index].featured = true;

        }

        this.saveLibrary();

        this.render();

        console.log(
            "Featured Movie:",
            this.movies[index]?.title
        );

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

            const title =
                String(movie.title || "").toLowerCase();

            const genre =
                String(movie.genre || "").toLowerCase();

            const rating =
                String(movie.rating || "").toLowerCase();

            const matchesSearch =
                title.includes(searchText) ||
                genre.includes(searchText) ||
                rating.includes(searchText);

            const matchesGenre =
                selectedGenre === "All Genres" ||
                movie.genre === selectedGenre;

            const matchesRating =
                selectedRating === "All Ratings" ||
                movie.rating === selectedRating;

            const matchesStatus =
                selectedStatus === "All Status" ||
                (movie.status || "Active") === selectedStatus;

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

            const titleA = String(a.title || "");

            const titleB = String(b.title || "");

            if (sortOption === "Z → A") {

                return titleB.localeCompare(titleA);

            }

            return titleA.localeCompare(titleB);

        });

        const pageSizeSelect =
            document.getElementById("page-size");

        if (pageSizeSelect) {

            const selectedPageSize =
                Number(pageSizeSelect.value);

            if ([25, 50, 100].includes(selectedPageSize)) {

                this.pageSize = selectedPageSize;

            }

        }

        const totalFilteredMovies =
            filteredMovies.length;

        const totalPages =
            Math.max(
                1,
                Math.ceil(
                    totalFilteredMovies / this.pageSize
                )
            );

        if (this.currentPage > totalPages) {

            this.currentPage = totalPages;

        }

        if (this.currentPage < 1) {

            this.currentPage = 1;

        }

        const startIndex =
            (this.currentPage - 1) * this.pageSize;

        const endIndex =
            Math.min(
                startIndex + this.pageSize,
                totalFilteredMovies
            );

        const paginatedMovies =
            filteredMovies.slice(
                startIndex,
                endIndex
            );

        if (paginatedMovies.length === 0) {

            body.innerHTML = `

                <tr>

                    <td colspan="8">

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

            paginatedMovies.forEach((movie) => {

                const index =
                    this.movies.indexOf(movie);

                body.innerHTML += `

                    <tr>

                        <td>

                            <input
                                type="checkbox"
                                class="movie-select"
                                data-index="${index}">

                        </td>

                        <td>

                            ${movie.poster
                        ? `<img src="${movie.poster}" style="width:60px;border-radius:6px;">`
                        : "—"
                    }

                        </td>

                        <td>${movie.title || ""}</td>

                        <td>${movie.genre || ""}</td>

                        <td>${movie.runtime || ""}</td>

                        <td>${movie.rating || ""}</td>

                        <td>${movie.status || "Active"}</td>

                        <td>

                            <button
                                class="secondary-button feature-movie-btn"
                                data-index="${index}"
                                ${movie.featured ? "disabled" : ""}>

                                ${movie.featured
                        ? "⭐ Featured"
                        : "⭐ Feature"
                    }

                            </button>

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

        this.updatePagination(
            totalFilteredMovies,
            totalPages,
            startIndex,
            endIndex
        );

        const totalMovies =
            document.getElementById("stat-total-movies");

        const featuredMovies =
            document.getElementById("stat-featured-movies");

        const genres =
            document.getElementById("stat-total-genres");

        const ratings =
            document.getElementById("stat-total-ratings");

        if (totalMovies) {

            totalMovies.textContent =
                this.movies.length;

        }

        if (featuredMovies) {

            const featuredCount =
                this.movies.filter(
                    movie => movie.featured === true
                ).length;

            featuredMovies.textContent =
                featuredCount;

        }

        if (genres) {

            const uniqueGenres =
                new Set(

                    this.movies
                        .map(movie => movie.genre?.trim())
                        .filter(Boolean)

                );

            genres.textContent =
                uniqueGenres.size;

        }

        if (ratings) {

            const uniqueRatings =
                new Set(

                    this.movies
                        .map(movie => movie.rating?.trim())
                        .filter(Boolean)

                );

            ratings.textContent =
                uniqueRatings.size;

        }

        if (genreFilter) {

            const currentValue =
                genreFilter.value;

            const genreList =
                [
                    ...new Set(
                        this.movies
                            .map(movie => movie.genre?.trim())
                            .filter(Boolean)
                    )
                ].sort();

            genreFilter.innerHTML =
                `<option>All Genres</option>`;

            genreList.forEach(genre => {

                genreFilter.innerHTML +=
                    `<option>${genre}</option>`;

            });

            genreFilter.value =
                genreList.includes(currentValue)
                    ? currentValue
                    : "All Genres";

        }

        if (ratingFilter) {

            const currentValue =
                ratingFilter.value;

            const ratingList =
                [
                    ...new Set(
                        this.movies
                            .map(movie => movie.rating?.trim())
                            .filter(Boolean)
                    )
                ].sort();

            ratingFilter.innerHTML =
                `<option>All Ratings</option>`;

            ratingList.forEach(rating => {

                ratingFilter.innerHTML +=
                    `<option>${rating}</option>`;

            });

            ratingFilter.value =
                ratingList.includes(currentValue)
                    ? currentValue
                    : "All Ratings";

        }

        if (statusFilter) {

            const currentValue =
                statusFilter.value;

            const statusList =
                ["Active", "Draft", "Archived"];

            statusFilter.innerHTML =
                `<option>All Status</option>`;

            statusList.forEach(status => {

                statusFilter.innerHTML +=
                    `<option>${status}</option>`;

            });

            statusFilter.value =
                statusList.includes(currentValue)
                    ? currentValue
                    : "All Status";

        }

        const featuredCard =
            document.getElementById("featured-movie-card");

        if (featuredCard) {

            const featuredMovie =
                this.movies.find(
                    movie => movie.featured
                );

            if (featuredMovie) {

                featuredCard.innerHTML = `

                    <div class="featured-poster">

                        ${featuredMovie.poster
                        ? `<img src="${featuredMovie.poster}" style="width:100%;border-radius:8px;">`
                        : "No Poster"
                    }

                    </div>

                    <h3>${featuredMovie.title || ""}</h3>

                    <p>${featuredMovie.genre || ""}</p>

                    <p>${featuredMovie.runtime || ""}</p>

                    <p>${featuredMovie.rating || ""}</p>

                    <button
                        id="change-featured-btn"
                        class="secondary-button">

                        Change Featured

                    </button>

                `;

            }

        }

    },

    updatePagination(
        totalMovies,
        totalPages,
        startIndex,
        endIndex
    ) {

        const previousButton =
            document.getElementById("previous-page");

        const nextButton =
            document.getElementById("next-page");

        const pageNumber =
            document.getElementById("page-number");

        const pageInfo =
            document.getElementById("page-info");

        if (previousButton) {

            previousButton.disabled =
                this.currentPage <= 1;

        }

        if (nextButton) {

            nextButton.disabled =
                this.currentPage >= totalPages;

        }

        if (pageNumber) {

            pageNumber.textContent =
                `Page ${this.currentPage} of ${totalPages}`;

        }

        if (pageInfo) {

            if (totalMovies === 0) {

                pageInfo.textContent =
                    "Showing 0–0 of 0 Movies";

            } else {

                pageInfo.textContent =
                    `Showing ${startIndex + 1}–${endIndex} of ${totalMovies} Movies`;

            }

        }

    },

    goToPreviousPage() {

        if (this.currentPage <= 1) {

            return;

        }

        this.currentPage--;

        this.render();

    },

    goToNextPage() {

        const searchBox =
            document.getElementById("movie-search");

        const genreFilter =
            document.getElementById("genre-filter");

        const ratingFilter =
            document.getElementById("rating-filter");

        const statusFilter =
            document.getElementById("status-filter");

        const searchText =
            searchBox
                ? searchBox.value.trim().toLowerCase()
                : "";

        const selectedGenre =
            genreFilter
                ? genreFilter.value
                : "All Genres";

        const selectedRating =
            ratingFilter
                ? ratingFilter.value
                : "All Ratings";

        const selectedStatus =
            statusFilter
                ? statusFilter.value
                : "All Status";

        const filteredCount =
            this.movies.filter(movie => {

                const title =
                    String(movie.title || "").toLowerCase();

                const genre =
                    String(movie.genre || "").toLowerCase();

                const rating =
                    String(movie.rating || "").toLowerCase();

                const matchesSearch =
                    title.includes(searchText) ||
                    genre.includes(searchText) ||
                    rating.includes(searchText);

                const matchesGenre =
                    selectedGenre === "All Genres" ||
                    movie.genre === selectedGenre;

                const matchesRating =
                    selectedRating === "All Ratings" ||
                    movie.rating === selectedRating;

                const matchesStatus =
                    selectedStatus === "All Status" ||
                    (movie.status || "Active") === selectedStatus;

                return matchesSearch &&
                    matchesGenre &&
                    matchesRating &&
                    matchesStatus;

            }).length;

        const totalPages =
            Math.max(
                1,
                Math.ceil(
                    filteredCount / this.pageSize
                )
            );

        if (this.currentPage >= totalPages) {

            return;

        }

        this.currentPage++;

        this.render();

    },

    deleteMovie(index) {

        this.movies.splice(index, 1);

        this.saveLibrary();

        this.render();

        console.log("Movie Deleted:", index);

    }

};