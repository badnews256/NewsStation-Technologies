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

        document.addEventListener("click", (event) => {

            const deleteButton = event.target.closest(".delete-movie-btn");

            if (deleteButton) {

                const index = Number(deleteButton.dataset.index);

                if (confirm("Delete this movie?")) {

                    CinemaLibrary.deleteMovie(index);

                }

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

            title: document.getElementById("movie-title")?.value.trim(),

            url: document.getElementById("movie-url")?.value.trim(),

            poster: document.getElementById("movie-poster")?.value.trim(),

            genre: document.getElementById("movie-genre")?.value.trim(),

            runtime: document.getElementById("movie-runtime")?.value.trim(),

            rating: document.getElementById("movie-rating")?.value,

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

        document.getElementById("movie-title").value = movie.title || "";
        document.getElementById("movie-url").value = movie.url || "";
        document.getElementById("movie-poster").value = movie.poster || "";
        document.getElementById("movie-genre").value = movie.genre || "";
        document.getElementById("movie-runtime").value = movie.runtime || "";
        document.getElementById("movie-rating").value = movie.rating || "PG";
        document.getElementById("movie-description").value = movie.description || "";

        this.editingMovieIndex = index;

        this.openAddMovieModal();

    },

};