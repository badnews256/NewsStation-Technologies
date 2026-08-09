/*
=========================================
NewsOS Configuration
Version 1.0
=========================================
*/

const NewsOS = {

    name: "NewsOS",

    version: "1.0 Alpha",

    device: "NSTV One",

    company: "News Station Technologies",

    theme: {

        primary: "#FFD700",

        background: "#0d0d0d",

        text: "#ffffff"

    },

    bootTime: 5000,

    tickerRefresh: 60000,

    clockRefresh: 1000,

    api: {

        tmdb: {

            token: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzQ5YmQ3YmJlOTc0OWI4MjA1MDU1NzhjODllODMzZCIsIm5iZiI6MTc4NjExMTk5OC4yMjEsInN1YiI6IjZhNzVlN2ZlNmE5ZTk5MjUyODM1MjIzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k2hgwB-xODxHgucETr09BwvC1RJoILNl8SI3a1oZ4FY",

            imageBaseUrl: "https://image.tmdb.org/t/p/w500",

            apiBaseUrl: "https://api.themoviedb.org/3"

        }

    }

};