// =====================================================
// NEWSOS CINEMA MANAGER
// Main Controller
// =====================================================

const Cinema = {

    version: "1.0.0",

    initialized: false,

    initialize() {

        if (this.initialized) return;

        console.log("Initializing Cinema Manager...");

        this.initialized = true;

        this.initializeModules();

        this.bindEvents();

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

        console.log("Button:", addButton);

        if (!addButton) {

            console.error("add-movie-btn was not found.");

            return;

        }

        addButton.addEventListener("click", () => {

            console.log("Add Movie button clicked.");

            this.openAddMovieModal();

        });

    },

    openAddMovieModal() {

        const modal = document.getElementById("add-movie-modal");

        if (!modal) {

            console.error("Add Movie modal not found.");

            return;

        }

        modal.classList.remove("hidden");

    }

};