/*
=========================================
NewsOS Home Manager
=========================================
*/

const HomeManager = {

    isReady: false,

    defaultHero: {

        badge: "● LIVE",

        title: "NSTV ONE",

        description: "Live TV • News • Entertainment"

    },

    heroCards: [],

    currentHeroIndex: 0,

    carouselTimer: null,

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

        this.heroCards.push(
            this.defaultHero,
            {
                badge: "🎉 TONIGHT",

                title: "Featured Event",

                description: "Join tonight's featured News Station event."

            }
        );

        this.loadDefaultHero();

        this.startCarousel();

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

    },

    updateHero(data) {

        if (!this.sections.hero || !data) return;

        if (data.badge !== undefined)
            this.sections.hero.badge.textContent = data.badge;

        if (data.title !== undefined)
            this.sections.hero.title.textContent = data.title;

        if (data.description !== undefined)
            this.sections.hero.description.textContent = data.description;

    },
    loadDefaultHero() {

        this.updateHero(this.heroCards[this.currentHeroIndex]);

    },

    nextHero() {

        this.currentHeroIndex =
            (this.currentHeroIndex + 1) % this.heroCards.length;
        this.loadDefaultHero();

    },

    startCarousel() {

        this.carouselTimer = setInterval(() => {

            this.nextHero();

        }, 15000);

    }

};

document.addEventListener("DOMContentLoaded", () => {

    HomeManager.init();

});