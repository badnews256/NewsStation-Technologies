// ======================================================
// NEWSOS STUDIO
// Router v2.0
// ======================================================

// ======================================================
// STUDIO STATE
// ======================================================

const StudioState = {

    newsOS: "Online",

    studio: "Operational",

    version: "1.0 Foundation",

    currentWorkspace: "Dashboard",

    currentUser: "Bad News"

};

const StudioTitles = {

    dashboard: "Dashboard",

    content: "Content Manager",

    cinema: "Cinema Manager",

    radio: "Radio Manager",

    news: "News Manager",

    community: "Community Manager",

    activity: "Activity Manager",

    system: "System Manager",

    passport: "Passport Manager",

    badges: "Badge Manager"

};

async function loadStudio() {

    const response = await fetch("studio/studio.html");

    return await response.text();

}

function initializeStudio() {

    console.log("NewsOS Studio initialized.");

    loadStudioModule("dashboard");

}

function launchStudio() {

    loadStudio().then(html => {

        const title = document.getElementById("app-title");

        if (title) {

            title.textContent = "🏢 NewsOS Studio";

        }

        const content = document.getElementById("app-content");

        if (!content) return;

        content.innerHTML = html;

        initializeStudio();

        startStudioClock();

    });

}

// ======================================================
// MODULE LOADER
// ======================================================

async function loadStudioModule(moduleName) {

    const workspace = document.getElementById("studio-workspace");

    if (!workspace) return;

    try {

        // ======================================================
        // LOAD MANAGER STYLESHEET
        // ======================================================

        const existingStyle = document.getElementById("studio-manager-css");

        if (existingStyle) {

            existingStyle.remove();

        }

        const stylesheet = document.createElement("link");

        stylesheet.id = "studio-manager-css";

        stylesheet.rel = "stylesheet";

        console.log("Loading CSS:", `css/studio-${moduleName}.css`);

        stylesheet.href = `css/studio-${moduleName}.css?v=${Date.now()}`;

        document.head.appendChild(stylesheet);

        const response = await fetch(`studio/${moduleName}.html`);

        workspace.classList.add("workspace-loading");

        const html = await response.text();

        setTimeout(() => {

            workspace.innerHTML = html;

            workspace.classList.remove("workspace-loading");

        }, 150);

        StudioState.currentWorkspace = moduleName;

        updateStudioTitle(moduleName);

        renderStudioSummary();

        updateActiveStudioNav(moduleName);

        // ======================================================
        // LIVE CLOCK
        // ======================================================


        addStudioActivity(`Opened ${moduleName}`);


        if (moduleName === "dashboard") {

            initializeDashboard();

        }

    }

    catch (error) {

        workspace.innerHTML = `

            <h2>Module Error</h2>

            <p>

            Unable to load ${moduleName}.html

            </p>

        `;

    }

}

// ======================================================
// SIDEBAR ROUTING
// ======================================================

document.addEventListener("click", function (event) {

    const button = event.target.closest(".studio-nav");

    if (!button) return;

    const text = button.innerText;

    if (text.includes("Dashboard")) {

        loadStudioModule("dashboard");

    }

    else if (text.includes("Community")) {

        loadStudioModule("community");

    }

    else if (text.includes("News")) {

        loadStudioModule("news");

    }

    else if (text.includes("Activity")) {

        loadStudioModule("activity");

    }

    else if (text.includes("System")) {

        loadStudioModule("system");

    }

    else if (text.includes("Cinema")) {

        // Temporary bridge until Cinema
        // is connected directly.

        openCinemaManager();

    }

});

async function openCinemaManager() {

    await loadStudioModule("cinema");

    addStudioActivity("Opened Cinema Manager");

}

// ======================================================
// DASHBOARD MEMORY
// ======================================================

const recentlyUsed = [];

const studioActivity = [];

function renderRecentlyUsed() {

    const container = document.getElementById("recently-used-list");

    if (!container) return;

    if (recentlyUsed.length === 0) {

        container.innerHTML = `
            <div class="task-item">
                No recent modules.
            </div>
        `;

        return;

    }

    container.innerHTML = recentlyUsed.map(module => `

        <div class="task-item">

            ${module}

        </div>

    `).join("");

}

// ======================================================
// ACTIVITY SYSTEM
// ======================================================

function addStudioActivity(message) {

    if (!message) return;

    const now = new Date();

    studioActivity.unshift({

        time: now.toLocaleTimeString([], {
            hour: "numeric",
            minute: "2-digit"
        }),

        message

    });

    if (studioActivity.length > 10) {

        studioActivity.pop();

    }

    renderStudioActivity();

    renderDashboardActivity();

}

function renderStudioActivity() {

    const container = document.getElementById("recent-activity");

    if (!container) return;

    if (studioActivity.length === 0) {

        container.innerHTML = `
            <div class="activity-item">
                <span class="activity-time">--:--</span>
                <span class="activity-text">No recent activity.</span>
            </div>
        `;

        return;

    }

    container.innerHTML = studioActivity.map(item => `

    <div class="task-item">

        <strong>${item.time}</strong> — ${item.message}

    </div>

`).join("");

}

// ======================================================
// DASHBOARD ACTIVITY
// ======================================================

function renderDashboardActivity() {

    const list = document.getElementById("dashboard-activity-list");

    if (!list) return;

    list.innerHTML = "";

    studioActivity.slice(0, 5).forEach(entry => {

        list.innerHTML += `

            <div class="task-item">

                <strong>${entry.time}</strong>

                <br>

                ${entry.message}

            </div>

        `;

    });

    console.log("studioActivity =", studioActivity);

    if (studioActivity.length === 0) {

        list.innerHTML = `

            <div class="task-item">

                No recent activity.

            </div>

        `;

    }

}

// =====================================================
// DEVELOPMENT UPDATES
// =====================================================

function renderDevelopmentUpdates() {

    const container = document.getElementById("development-updates");

    if (!container) return;

    container.innerHTML = "";

    const updates = [

        "✔ Dashboard Sprint Completed",

        "🚧 Badge Manager is next.",

        "🎯 Manager Completion Phase begins."

    ];

    updates.forEach(update => {

        container.innerHTML += `

            <div class="task-item">

                ${update}

            </div>

        `;

    });

}

// ======================================================
// RECENTLY USED
// ======================================================

function updateRecentlyUsed(moduleName) {

    const index = recentlyUsed.indexOf(moduleName);

    if (index > -1) {

        recentlyUsed.splice(index, 1);

    }

    recentlyUsed.unshift(moduleName);

    if (recentlyUsed.length > 5) {

        recentlyUsed.pop();

    }

    renderRecentlyUsed();

}
// ======================================================
// CURRENT TIME
// ======================================================

function renderStudioClock() {

    const currentTime = document.getElementById("studio-current-time");

    if (!currentTime) return;

    currentTime.textContent = new Date().toLocaleTimeString([], {

        hour: "numeric",

        minute: "2-digit"

    });

}

// ======================================================
// LIVE CLOCK
// ======================================================

function startStudioClock() {

    renderStudioClock();

    setInterval(() => {

        renderStudioClock();

    }, 1000);

}

// ======================================================
// STUDIO SUMMARY
// ======================================================

function renderStudioSummary() {

    const newsOS = document.getElementById("studio-newsos-status");
    const studio = document.getElementById("studio-status");
    const workspace = document.getElementById("studio-workspace-name");
    const user = document.getElementById("studio-current-user");
    const version = document.getElementById("studio-version");

    if (newsOS) {

        newsOS.textContent = "🟢 " + StudioState.newsOS;

    }

    if (studio) {

        studio.textContent = "🟢 " + StudioState.studio;

    }

    const systemStudio = document.getElementById("system-studio-status");

    if (systemStudio) {

        systemStudio.textContent = StudioState.studio;

    }

    if (workspace) {

        workspace.textContent = StudioState.currentWorkspace;

    }

    if (user) {

        user.textContent = StudioState.currentUser;

    }

    if (version) {

        version.textContent = StudioState.version;

    }

    const passports = document.getElementById("stat-passports");
    const badges = document.getElementById("stat-badges");
    const movies = document.getElementById("stat-movies");
    const radio = document.getElementById("stat-radio");
    const news = document.getElementById("stat-news");
    const community = document.getElementById("stat-community");

    if (passports) passports.textContent = "0";
    if (badges) badges.textContent = "0";
    if (movies) movies.textContent = "0";
    if (radio) radio.textContent = "0";
    if (news) news.textContent = "0";
    if (community) community.textContent = "0";

}

// ======================================================
// ACTIVE STUDIO NAVIGATION
// ======================================================

function updateActiveStudioNav(moduleName) {

    document.querySelectorAll(".studio-nav").forEach(button => {

        button.classList.remove("active");

        const text = button.innerText.toLowerCase();

        if (text.includes(moduleName.toLowerCase())) {

            button.classList.add("active");

        }

    });

}

// ======================================================
// STUDIO PAGE TITLES
// ======================================================

function updateStudioTitle(moduleName) {

    const pageTitle = document.getElementById("studio-page-title");

    if (!pageTitle) return;

    const titles = {

        dashboard: "Dashboard",

        content: "Content Manager",

        cinema: "Cinema Manager",

        radio: "Radio Manager",

        news: "News Manager",

        community: "Community Manager",

        activity: "Activity Manager",

        system: "System Manager",

        passport: "Passport Manager",

        badges: "Badge Manager"

    };

    pageTitle.textContent = titles[moduleName] || moduleName;

}

// ======================================================
// DASHBOARD INITIALIZATION
// ======================================================

function initializeDashboard() {

    setTimeout(() => {

        renderStudioSummary();

        renderStudioActivity();

        renderDashboardActivity();

        renderDevelopmentUpdates();

        updateRecentlyUsed("Dashboard");

        console.log("Dashboard initialized.");

    }, 200);

}
