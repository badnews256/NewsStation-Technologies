// =====================================================
// NEWSOS CINEMA MANAGER
// Main Controller
// =====================================================

const Cinema = {

    version: "1.0.0",

    initialized: false,

    initialize() {

        console.log("Initializing Cinema Manager...");

        this.initializeModules();

        this.bindEvents();

        this.initialized = true;

        console.log("Cinema Manager Ready");

    },

    initializeModules() {

        console.log("Loading Cinema Modules...");

        if (
            typeof CinemaLibrary !== "undefined" &&
            typeof CinemaLibrary.initialize === "function"
        ) {

            CinemaLibrary.initialize();

        }

        console.log("Cinema Modules Loaded");

    },

    bindEvents() {

        console.log("Binding Cinema Events...");

        const addButton = document.getElementById("add-movie-btn");
        const firstMovieButton = document.getElementById("add-first-movie-btn");
        const closeButton = document.getElementById("close-add-movie");
        const cancelButton = document.getElementById("cancel-add-movie");
        const saveButton = document.getElementById("save-movie");
        const modal = document.getElementById("add-movie-modal");

        if (addButton) {

            addButton.addEventListener("click", () => {

                console.log("Add Movie button clicked.");

                this.openAddMovieModal();

            });

        }

        if (firstMovieButton) {

            firstMovieButton.addEventListener("click", () => {

                this.openAddMovieModal();

            });

        }

        const closeModal = () => {

            if (modal) {

                modal.classList.add("hidden");

            }

        };

        if (closeButton) {

            closeButton.addEventListener("click", closeModal);

        }

        if (cancelButton) {

            cancelButton.addEventListener("click", closeModal);

        }

        if (saveButton) {

            saveButton.addEventListener("click", () => {

                this.saveMovie();

            });

        }

        const importTMDbButton = document.getElementById("import-tmdb-btn");

        if (importTMDbButton) {

            importTMDbButton.addEventListener("click", async () => {

                const tmdbInput =
                    document.getElementById("movie-tmdb-id")?.value.trim();

                if (!tmdbInput) {

                    alert("Please enter a TMDb ID or TMDb movie link.");

                    return;

                }

                let tmdbId = tmdbInput;

                const tmdbUrlMatch =
                    tmdbInput.match(/themoviedb\.org\/movie\/(\d+)/i);

                if (tmdbUrlMatch) {

                    tmdbId = tmdbUrlMatch[1];

                }

                const movie = await TMDB.importMovie(tmdbId);

                if (!movie) {

                    alert("Unable to import movie from TMDb.");

                    return;

                }

                document.getElementById("movie-title").value =
                    movie.title || "";

                document.getElementById("movie-poster").value =
                    movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : "";

                document.getElementById("movie-genre").value =
                    movie.genres?.map(genre => genre.name).join(", ") || "";

                document.getElementById("movie-runtime").value =
                    movie.runtime
                        ? `${movie.runtime} min`
                        : "";

                document.getElementById("movie-rating").value =
                    movie.adult ? "R" : "PG-13";

                document.getElementById("movie-status").value =
                    movie.status || "Active";

                document.getElementById("movie-description").value =
                    movie.overview || "";

                console.log(movie);

            });

        }

        document.addEventListener("click", (event) => {

            const deleteButton = event.target.closest(".delete-movie-btn");

            if (deleteButton) {

                const index = Number(deleteButton.dataset.index);

                if (confirm("Delete this movie?")) {

                    CinemaLibrary.deleteMovie(index);

                }

                return;

            }

            const featureButton = event.target.closest(".feature-movie-btn");

            if (featureButton) {

                const index = Number(featureButton.dataset.index);

                CinemaLibrary.setFeaturedMovie(index);

                return;

            }

            const editButton = event.target.closest(".edit-movie-btn");

            if (editButton) {

                console.log("Edit button clicked.");

                const index = Number(editButton.dataset.index);

                console.log("Movie Index:", index);

                Cinema.editMovie(index);

            }

        });
        const searchBox = document.getElementById("movie-search");

        if (searchBox) {
            searchBox.addEventListener("input", () => {

                CinemaLibrary.resetPagination();

                const selectAll =
                    document.getElementById("select-all-movies");

                if (selectAll) {
                    selectAll.checked = false;
                }

                const selectedCount =
                    document.getElementById("selected-count");

                if (selectedCount) {
                    selectedCount.textContent = "0";
                }

                CinemaLibrary.render();

            });
        }



        const genreFilter = document.getElementById("genre-filter");

        if (genreFilter) {
            genreFilter.addEventListener("change", () => {

                CinemaLibrary.resetPagination();

                const selectAll =
                    document.getElementById("select-all-movies");

                if (selectAll) {
                    selectAll.checked = false;
                }

                const selectedCount =
                    document.getElementById("selected-count");

                if (selectedCount) {
                    selectedCount.textContent = "0";
                }

                CinemaLibrary.render();

            });
        }

        const ratingFilter = document.getElementById("rating-filter");

        if (ratingFilter) {
            ratingFilter.addEventListener("change", () => {

                console.log("Rating changed:", ratingFilter.value);
                CinemaLibrary.resetPagination();

                const selectAll =
                    document.getElementById("select-all-movies");

                if (selectAll) {
                    selectAll.checked = false;
                }

                const selectedCount =
                    document.getElementById("selected-count");

                if (selectedCount) {
                    selectedCount.textContent = "0";
                }

                CinemaLibrary.render();

            });
        }

        const statusFilter = document.getElementById("status-filter");

        if (statusFilter) {
            statusFilter.addEventListener("change", () => {

                console.log("Status changed:", statusFilter.value);
                CinemaLibrary.resetPagination();

                const selectAll =
                    document.getElementById("select-all-movies");

                if (selectAll) {
                    selectAll.checked = false;
                }

                const selectedCount =
                    document.getElementById("selected-count");

                if (selectedCount) {
                    selectedCount.textContent = "0";
                }

                CinemaLibrary.render();

            });
        }

        const sortFilter = document.getElementById("sort-filter");

        if (sortFilter) {
            sortFilter.addEventListener("change", () => {

                console.log("Sort changed:", sortFilter.value);
                CinemaLibrary.resetPagination();

                const selectAll =
                    document.getElementById("select-all-movies");

                if (selectAll) {
                    selectAll.checked = false;
                }

                const selectedCount =
                    document.getElementById("selected-count");

                if (selectedCount) {
                    selectedCount.textContent = "0";
                }

                CinemaLibrary.render();

            });
        }

        const selectAll = document.getElementById("select-all-movies");

        if (selectAll) {

            selectAll.addEventListener("change", () => {

                document.querySelectorAll(".movie-select").forEach(box => {

                    box.checked = selectAll.checked;

                });

                const selectedCount =
                    document.querySelectorAll(".movie-select:checked").length;

                const counter =
                    document.getElementById("selected-count");

                if (counter) {

                    counter.textContent = selectedCount;

                }

            });

        }

        document.addEventListener("change", (event) => {

            if (!event.target.classList.contains("movie-select")) {

                return;

            }

            const selectedMovies =
                document.querySelectorAll(".movie-select:checked");

            const allMovies =
                document.querySelectorAll(".movie-select");

            const counter =
                document.getElementById("selected-count");

            if (counter) {

                counter.textContent = selectedMovies.length;

            }

            const selectAll =
                document.getElementById("select-all-movies");

            if (selectAll) {

                selectAll.checked =
                    allMovies.length > 0 &&
                    selectedMovies.length === allMovies.length;

            }

        });

        const bulkActions = document.getElementById("bulk-actions");

        if (bulkActions) {

            bulkActions.addEventListener("change", () => {

                console.log("Bulk Action:", bulkActions.value);

                const action = bulkActions.value;

                if (action === "Bulk Actions") {
                    return;
                }

                const selectedMovies = document.querySelectorAll(
                    ".movie-select:checked"
                );

                if (selectedMovies.length === 0) {

                    alert("Please select at least one movie.");
                    bulkActions.value = "Bulk Actions";
                    return;

                }

                const indexes = [];

                selectedMovies.forEach(box => {

                    indexes.push(Number(box.dataset.index));

                });

                if (action === "Delete Selected") {

                    if (!confirm(
                        `Delete ${selectedMovies.length} selected movie(s)?`
                    )) {

                        bulkActions.value = "Bulk Actions";
                        return;

                    }

                    indexes
                        .sort((a, b) => b - a)
                        .forEach(index => {
                            CinemaLibrary.deleteMovie(index);
                        });

                } else if (action === "Mark Active") {

                    indexes.forEach(index => {

                        const movie = CinemaLibrary.movies[index];

                        if (movie) {
                            movie.status = "Active";
                        }

                    });

                    CinemaLibrary.saveLibrary();
                    CinemaLibrary.resetPagination();
                    CinemaLibrary.render();

                } else if (action === "Mark Draft") {

                    indexes.forEach(index => {

                        const movie = CinemaLibrary.movies[index];

                        if (movie) {
                            movie.status = "Draft";
                        }

                    });

                    CinemaLibrary.saveLibrary();
                    CinemaLibrary.resetPagination();
                    CinemaLibrary.render();

                } else if (action === "Archive") {

                    indexes.forEach(index => {

                        const movie = CinemaLibrary.movies[index];

                        if (movie) {
                            movie.status = "Archived";
                        }

                    });

                    CinemaLibrary.saveLibrary();
                    CinemaLibrary.resetPagination();
                    CinemaLibrary.render();

                }

                bulkActions.value = "Bulk Actions";

                const selectAll = document.getElementById("select-all-movies");
                if (selectAll) {
                    selectAll.checked = false;
                }

                const selectedCount = document.getElementById("selected-count");
                if (selectedCount) {
                    selectedCount.textContent = "0";
                }

            });
        }

        const previousPage =
            document.getElementById("previous-page");

        if (previousPage) {

            previousPage.addEventListener("click", () => {

                CinemaLibrary.goToPreviousPage();

                const selectAll =
                    document.getElementById("select-all-movies");

                if (selectAll) {
                    selectAll.checked = false;
                }

                const selectedCount =
                    document.getElementById("selected-count");

                if (selectedCount) {
                    selectedCount.textContent = "0";
                }

            });

        }

        const nextPage =
            document.getElementById("next-page");

        if (nextPage) {

            nextPage.addEventListener("click", () => {

                CinemaLibrary.goToNextPage();

                const selectAll =
                    document.getElementById("select-all-movies");

                if (selectAll) {
                    selectAll.checked = false;
                }

                const selectedCount =
                    document.getElementById("selected-count");

                if (selectedCount) {
                    selectedCount.textContent = "0";
                }

            });

        }

        const pageSize = document.getElementById("page-size");

        if (pageSize) {
            pageSize.addEventListener("change", () => {

                CinemaLibrary.setPageSize(
                    parseInt(pageSize.value, 10)
                );

                CinemaLibrary.resetPagination();

                const selectAll =
                    document.getElementById("select-all-movies");

                if (selectAll) {
                    selectAll.checked = false;
                }

                const selectedCount =
                    document.getElementById("selected-count");

                if (selectedCount) {
                    selectedCount.textContent = "0";
                }

                CinemaLibrary.render();

            });
        }

    },



    openAddMovieModal() {

        const modal = document.getElementById("add-movie-modal");

        if (!modal) {

            console.error("Add Movie modal not found.");

            return;

        }

        modal.classList.remove("hidden");

    },

    saveMovie() {

        console.log("Saving movie...");

        const movie = {

            tmdbId: document.getElementById("movie-tmdb-id")?.value.trim(),

            title: document.getElementById("movie-title")?.value.trim(),

            url: document.getElementById("movie-url")?.value.trim(),

            poster: document.getElementById("movie-poster")?.value.trim(),

            genre: document.getElementById("movie-genre")?.value.trim(),

            runtime: document.getElementById("movie-runtime")?.value.trim(),

            rating: document.getElementById("movie-rating")?.value,

            status: document.getElementById("movie-status")?.value || "Active",

            description: document.getElementById("movie-description")?.value.trim()

        };

        if (!movie.title) {

            alert("Movie title is required.");

            return;

        }

        console.log("CinemaLibrary:", CinemaLibrary);

        console.log("Movie being saved:", movie);

        if (this.editingMovieIndex !== undefined) {

            CinemaLibrary.updateMovie(this.editingMovieIndex, movie);

            this.editingMovieIndex = undefined;

        } else {

            CinemaLibrary.addMovie(movie);

        }

        document.getElementById("add-movie-modal")?.classList.add("hidden");
    },


    editMovie(index) {

        const movie = CinemaLibrary.movies[index];

        if (!movie) return;

        document.getElementById("movie-tmdb-id").value = movie.tmdbId || "";
        document.getElementById("movie-title").value = movie.title || "";
        document.getElementById("movie-url").value = movie.url || "";
        document.getElementById("movie-poster").value = movie.poster || "";
        document.getElementById("movie-genre").value = movie.genre || "";
        document.getElementById("movie-runtime").value = movie.runtime || "";
        document.getElementById("movie-rating").value = movie.rating || "PG";
        document.getElementById("movie-status").value =
            movie.status || "Active";
        document.getElementById("movie-description").value = movie.description || "";

        this.editingMovieIndex = index;

        this.openAddMovieModal();

    },

};