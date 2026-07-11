/*
=========================================
NewsOS Home Manager
=========================================
*/

const HomeManager = {

    isReady: false,

    sections: {

        hero: null,

        quickApps: null,

        spotlight: null,

        news: null,

        events: null

    },

    init() {

        console.log("Home Manager Initialized");

        this.cacheElements();

        this.isReady = true;

        console.log("Home Manager Ready");

    },

   cacheElements() {

    this.sections.hero = {

        container: document.getElementById("hero-section"),

        badge: document.getElementById("hero-badge"),

        title: document.getElementById("hero-title"),

        description: document.getElementById("hero-description"),

        primaryButton: document.getElementById("hero-primary-btn"),

        secondaryButton: document.getElementById("hero-secondary-btn")

    };

    this.sections.quickApps = document.getElementById("quick-apps");

        console.log("Home sections registered.");

    }

};

document.addEventListener("DOMContentLoaded", () => {

    HomeManager.init();

});