// =====================================================
// NEWSOS CINEMA LIBRARY
// Movie Data Manager
// =====================================================

const CinemaLibrary = {

    movies: [],

    initialize() {

        console.log("Cinema Library Initialized");

    },

    getMovies() {

        return this.movies;

    },

    addMovie(movie) {

        this.movies.push(movie);

        console.log("Movie Added:", movie.title);

    }

};